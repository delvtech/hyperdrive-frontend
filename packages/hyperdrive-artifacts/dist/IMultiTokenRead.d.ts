export declare const IMultiTokenRead: {
    readonly abi: readonly [{
        readonly type: "function";
        readonly name: "balanceOf";
        readonly inputs: readonly [{
            readonly name: "tokenId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "decimals";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "isApprovedForAll";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "spender";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "name";
        readonly inputs: readonly [{
            readonly name: "tokenId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "nonces";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "perTokenApprovals";
        readonly inputs: readonly [{
            readonly name: "tokenId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "spender";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "symbol";
        readonly inputs: readonly [{
            readonly name: "tokenId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "totalSupply";
        readonly inputs: readonly [{
            readonly name: "tokenId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
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
    readonly methodIdentifiers: {
        readonly "balanceOf(uint256,address)": "3656eec2";
        readonly "decimals()": "313ce567";
        readonly "isApprovedForAll(address,address)": "e985e9c5";
        readonly "name(uint256)": "00ad800c";
        readonly "nonces(address)": "7ecebe00";
        readonly "perTokenApprovals(uint256,address,address)": "21ff32a9";
        readonly "symbol(uint256)": "4e41a1fb";
        readonly "totalSupply(uint256)": "bd85b039";
    };
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"nonces\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"perTokenApprovals\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"balanceOf(uint256,address)\":{\"params\":{\"owner\":\"The owner of the tokens.\",\"tokenId\":\"The sub-token ID.\"},\"returns\":{\"_0\":\"The balance of the owner.\"}},\"decimals()\":{\"returns\":{\"_0\":\"The decimals of the MultiToken.\"}},\"isApprovedForAll(address,address)\":{\"params\":{\"owner\":\"The owner of the tokens.\",\"spender\":\"The spender of the tokens.\"},\"returns\":{\"_0\":\"The approval-for-all status of the spender for the owner.\"}},\"name(uint256)\":{\"params\":{\"tokenId\":\"The sub-token ID.\"},\"returns\":{\"_0\":\"The name of the MultiToken.\"}},\"nonces(address)\":{\"params\":{\"owner\":\"The owner of the tokens.\"},\"returns\":{\"_0\":\"The permit nonce of the owner.\"}},\"perTokenApprovals(uint256,address,address)\":{\"params\":{\"owner\":\"The owner of the tokens.\",\"spender\":\"The spender of the tokens.\",\"tokenId\":\"The sub-token ID.\"},\"returns\":{\"_0\":\"The allowance of the spender for the owner.\"}},\"symbol(uint256)\":{\"params\":{\"tokenId\":\"The sub-token ID.\"},\"returns\":{\"_0\":\"The symbol of the MultiToken.\"}},\"totalSupply(uint256)\":{\"params\":{\"tokenId\":\"The sub-token ID.\"},\"returns\":{\"_0\":\"The total supply of the MultiToken.\"}}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"balanceOf(uint256,address)\":{\"notice\":\"Gets the balance of a spender for a sub-token.\"},\"decimals()\":{\"notice\":\"Gets the decimals of the MultiToken.\"},\"isApprovedForAll(address,address)\":{\"notice\":\"Gets the approval-for-all status of a spender on behalf of an         owner.\"},\"name(uint256)\":{\"notice\":\"Gets the name of the MultiToken.\"},\"nonces(address)\":{\"notice\":\"Gets the permit nonce for an account.\"},\"perTokenApprovals(uint256,address,address)\":{\"notice\":\"Gets the allowance of a spender for a sub-token.\"},\"symbol(uint256)\":{\"notice\":\"Gets the symbol of the MultiToken.\"},\"totalSupply(uint256)\":{\"notice\":\"Gets the total supply of the MultiToken.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IMultiTokenRead.sol\":\"IMultiTokenRead\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]}},\"version\":1}";
    readonly metadata: {
        readonly compiler: {
            readonly version: "0.8.20+commit.a1b79de6";
        };
        readonly language: "Solidity";
        readonly output: {
            readonly abi: readonly [{
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "tokenId";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "address";
                    readonly name: "owner";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "balanceOf";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "decimals";
                readonly outputs: readonly [{
                    readonly internalType: "uint8";
                    readonly name: "";
                    readonly type: "uint8";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "owner";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "spender";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "isApprovedForAll";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "tokenId";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "name";
                readonly outputs: readonly [{
                    readonly internalType: "string";
                    readonly name: "";
                    readonly type: "string";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "owner";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "nonces";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "tokenId";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "address";
                    readonly name: "owner";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "spender";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "perTokenApprovals";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "tokenId";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "symbol";
                readonly outputs: readonly [{
                    readonly internalType: "string";
                    readonly name: "";
                    readonly type: "string";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "tokenId";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "totalSupply";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }];
            readonly devdoc: {
                readonly kind: "dev";
                readonly methods: {
                    readonly "balanceOf(uint256,address)": {
                        readonly params: {
                            readonly owner: "The owner of the tokens.";
                            readonly tokenId: "The sub-token ID.";
                        };
                        readonly returns: {
                            readonly _0: "The balance of the owner.";
                        };
                    };
                    readonly "decimals()": {
                        readonly returns: {
                            readonly _0: "The decimals of the MultiToken.";
                        };
                    };
                    readonly "isApprovedForAll(address,address)": {
                        readonly params: {
                            readonly owner: "The owner of the tokens.";
                            readonly spender: "The spender of the tokens.";
                        };
                        readonly returns: {
                            readonly _0: "The approval-for-all status of the spender for the owner.";
                        };
                    };
                    readonly "name(uint256)": {
                        readonly params: {
                            readonly tokenId: "The sub-token ID.";
                        };
                        readonly returns: {
                            readonly _0: "The name of the MultiToken.";
                        };
                    };
                    readonly "nonces(address)": {
                        readonly params: {
                            readonly owner: "The owner of the tokens.";
                        };
                        readonly returns: {
                            readonly _0: "The permit nonce of the owner.";
                        };
                    };
                    readonly "perTokenApprovals(uint256,address,address)": {
                        readonly params: {
                            readonly owner: "The owner of the tokens.";
                            readonly spender: "The spender of the tokens.";
                            readonly tokenId: "The sub-token ID.";
                        };
                        readonly returns: {
                            readonly _0: "The allowance of the spender for the owner.";
                        };
                    };
                    readonly "symbol(uint256)": {
                        readonly params: {
                            readonly tokenId: "The sub-token ID.";
                        };
                        readonly returns: {
                            readonly _0: "The symbol of the MultiToken.";
                        };
                    };
                    readonly "totalSupply(uint256)": {
                        readonly params: {
                            readonly tokenId: "The sub-token ID.";
                        };
                        readonly returns: {
                            readonly _0: "The total supply of the MultiToken.";
                        };
                    };
                };
                readonly version: 1;
            };
            readonly userdoc: {
                readonly kind: "user";
                readonly methods: {
                    readonly "balanceOf(uint256,address)": {
                        readonly notice: "Gets the balance of a spender for a sub-token.";
                    };
                    readonly "decimals()": {
                        readonly notice: "Gets the decimals of the MultiToken.";
                    };
                    readonly "isApprovedForAll(address,address)": {
                        readonly notice: "Gets the approval-for-all status of a spender on behalf of an         owner.";
                    };
                    readonly "name(uint256)": {
                        readonly notice: "Gets the name of the MultiToken.";
                    };
                    readonly "nonces(address)": {
                        readonly notice: "Gets the permit nonce for an account.";
                    };
                    readonly "perTokenApprovals(uint256,address,address)": {
                        readonly notice: "Gets the allowance of a spender for a sub-token.";
                    };
                    readonly "symbol(uint256)": {
                        readonly notice: "Gets the symbol of the MultiToken.";
                    };
                    readonly "totalSupply(uint256)": {
                        readonly notice: "Gets the total supply of the MultiToken.";
                    };
                };
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
                readonly "contracts/src/interfaces/IMultiTokenRead.sol": "IMultiTokenRead";
            };
            readonly libraries: {};
        };
        readonly sources: {
            readonly "contracts/src/interfaces/IMultiTokenRead.sol": {
                readonly keccak256: "0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0";
                readonly urls: readonly ["bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11", "dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR"];
                readonly license: "Apache-2.0";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "contracts/src/interfaces/IMultiTokenRead.sol";
        readonly id: 12254;
        readonly exportedSymbols: {
            readonly IMultiTokenRead: readonly [12253];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:2172:102";
        readonly nodes: readonly [{
            readonly id: 12182;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:23:102";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 12253;
            readonly nodeType: "ContractDefinition";
            readonly src: "64:2146:102";
            readonly nodes: readonly [{
                readonly id: 12188;
                readonly nodeType: "FunctionDefinition";
                readonly src: "197:50:102";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 12183;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "96:96:102";
                    readonly text: "@notice Gets the decimals of the MultiToken.\n @return The decimals of the MultiToken.";
                };
                readonly functionSelector: "313ce567";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "decimals";
                readonly nameLocation: "206:8:102";
                readonly parameters: {
                    readonly id: 12184;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "214:2:102";
                };
                readonly returnParameters: {
                    readonly id: 12187;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12186;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12188;
                        readonly src: "240:5:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint8";
                            readonly typeString: "uint8";
                        };
                        readonly typeName: {
                            readonly id: 12185;
                            readonly name: "uint8";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "240:5:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint8";
                                readonly typeString: "uint8";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "239:7:102";
                };
                readonly scope: 12253;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12196;
                readonly nodeType: "FunctionDefinition";
                readonly src: "387:69:102";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 12189;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "253:129:102";
                    readonly text: "@notice Gets the name of the MultiToken.\n @param tokenId The sub-token ID.\n @return The name of the MultiToken.";
                };
                readonly functionSelector: "00ad800c";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "name";
                readonly nameLocation: "396:4:102";
                readonly parameters: {
                    readonly id: 12192;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12191;
                        readonly mutability: "mutable";
                        readonly name: "tokenId";
                        readonly nameLocation: "409:7:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12196;
                        readonly src: "401:15:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12190;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "401:7:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "400:17:102";
                };
                readonly returnParameters: {
                    readonly id: 12195;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12194;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12196;
                        readonly src: "441:13:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 12193;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "441:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "440:15:102";
                };
                readonly scope: 12253;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12204;
                readonly nodeType: "FunctionDefinition";
                readonly src: "600:71:102";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 12197;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "462:133:102";
                    readonly text: "@notice Gets the symbol of the MultiToken.\n @param tokenId The sub-token ID.\n @return The symbol of the MultiToken.";
                };
                readonly functionSelector: "4e41a1fb";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "symbol";
                readonly nameLocation: "609:6:102";
                readonly parameters: {
                    readonly id: 12200;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12199;
                        readonly mutability: "mutable";
                        readonly name: "tokenId";
                        readonly nameLocation: "624:7:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12204;
                        readonly src: "616:15:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12198;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "616:7:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "615:17:102";
                };
                readonly returnParameters: {
                    readonly id: 12203;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12202;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12204;
                        readonly src: "656:13:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 12201;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "656:6:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "655:15:102";
                };
                readonly scope: 12253;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12212;
                readonly nodeType: "FunctionDefinition";
                readonly src: "827:70:102";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 12205;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "677:145:102";
                    readonly text: "@notice Gets the total supply of the MultiToken.\n @param tokenId The sub-token ID.\n @return The total supply of the MultiToken.";
                };
                readonly functionSelector: "bd85b039";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "totalSupply";
                readonly nameLocation: "836:11:102";
                readonly parameters: {
                    readonly id: 12208;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12207;
                        readonly mutability: "mutable";
                        readonly name: "tokenId";
                        readonly nameLocation: "856:7:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12212;
                        readonly src: "848:15:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12206;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "848:7:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "847:17:102";
                };
                readonly returnParameters: {
                    readonly id: 12211;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12210;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12212;
                        readonly src: "888:7:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12209;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "888:7:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "887:9:102";
                };
                readonly scope: 12253;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12222;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1174:109:102";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 12213;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "903:266:102";
                    readonly text: "@notice Gets the approval-for-all status of a spender on behalf of an\n         owner.\n @param owner The owner of the tokens.\n @param spender The spender of the tokens.\n @return The approval-for-all status of the spender for the owner.";
                };
                readonly functionSelector: "e985e9c5";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "isApprovedForAll";
                readonly nameLocation: "1183:16:102";
                readonly parameters: {
                    readonly id: 12218;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12215;
                        readonly mutability: "mutable";
                        readonly name: "owner";
                        readonly nameLocation: "1217:5:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12222;
                        readonly src: "1209:13:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 12214;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1209:7:102";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 12217;
                        readonly mutability: "mutable";
                        readonly name: "spender";
                        readonly nameLocation: "1240:7:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12222;
                        readonly src: "1232:15:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 12216;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1232:7:102";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1199:54:102";
                };
                readonly returnParameters: {
                    readonly id: 12221;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12220;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12222;
                        readonly src: "1277:4:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 12219;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1277:4:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1276:6:102";
                };
                readonly scope: 12253;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12234;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1551:138:102";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 12223;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1289:257:102";
                    readonly text: "@notice Gets the allowance of a spender for a sub-token.\n @param tokenId The sub-token ID.\n @param owner The owner of the tokens.\n @param spender The spender of the tokens.\n @return The allowance of the spender for the owner.";
                };
                readonly functionSelector: "21ff32a9";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "perTokenApprovals";
                readonly nameLocation: "1560:17:102";
                readonly parameters: {
                    readonly id: 12230;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12225;
                        readonly mutability: "mutable";
                        readonly name: "tokenId";
                        readonly nameLocation: "1595:7:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12234;
                        readonly src: "1587:15:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12224;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1587:7:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 12227;
                        readonly mutability: "mutable";
                        readonly name: "owner";
                        readonly nameLocation: "1620:5:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12234;
                        readonly src: "1612:13:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 12226;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1612:7:102";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 12229;
                        readonly mutability: "mutable";
                        readonly name: "spender";
                        readonly nameLocation: "1643:7:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12234;
                        readonly src: "1635:15:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 12228;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1635:7:102";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1577:79:102";
                };
                readonly returnParameters: {
                    readonly id: 12233;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12232;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12234;
                        readonly src: "1680:7:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12231;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1680:7:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1679:9:102";
                };
                readonly scope: 12253;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12244;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1887:105:102";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 12235;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1695:187:102";
                    readonly text: "@notice Gets the balance of a spender for a sub-token.\n @param tokenId The sub-token ID.\n @param owner The owner of the tokens.\n @return The balance of the owner.";
                };
                readonly functionSelector: "3656eec2";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "balanceOf";
                readonly nameLocation: "1896:9:102";
                readonly parameters: {
                    readonly id: 12240;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12237;
                        readonly mutability: "mutable";
                        readonly name: "tokenId";
                        readonly nameLocation: "1923:7:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12244;
                        readonly src: "1915:15:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12236;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1915:7:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 12239;
                        readonly mutability: "mutable";
                        readonly name: "owner";
                        readonly nameLocation: "1948:5:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12244;
                        readonly src: "1940:13:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 12238;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1940:7:102";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1905:54:102";
                };
                readonly returnParameters: {
                    readonly id: 12243;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12242;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12244;
                        readonly src: "1983:7:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12241;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1983:7:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1982:9:102";
                };
                readonly scope: 12253;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12252;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2145:63:102";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 12245;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1998:142:102";
                    readonly text: "@notice Gets the permit nonce for an account.\n @param owner The owner of the tokens.\n @return The permit nonce of the owner.";
                };
                readonly functionSelector: "7ecebe00";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "nonces";
                readonly nameLocation: "2154:6:102";
                readonly parameters: {
                    readonly id: 12248;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12247;
                        readonly mutability: "mutable";
                        readonly name: "owner";
                        readonly nameLocation: "2169:5:102";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12252;
                        readonly src: "2161:13:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 12246;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2161:7:102";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2160:15:102";
                };
                readonly returnParameters: {
                    readonly id: 12251;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12250;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12252;
                        readonly src: "2199:7:102";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12249;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2199:7:102";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2198:9:102";
                };
                readonly scope: 12253;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [];
            readonly canonicalName: "IMultiTokenRead";
            readonly contractDependencies: readonly [];
            readonly contractKind: "interface";
            readonly fullyImplemented: false;
            readonly linearizedBaseContracts: readonly [12253];
            readonly name: "IMultiTokenRead";
            readonly nameLocation: "74:15:102";
            readonly scope: 12254;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 102;
};
//# sourceMappingURL=IMultiTokenRead.d.ts.map