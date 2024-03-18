export declare const IERC20: {
    readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Approval";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Transfer";
        readonly type: "event";
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
        readonly name: "allowance";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "approve";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "balanceOf";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "decimals";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "name";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "symbol";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "totalSupply";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "transfer";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "transferFrom";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
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
        readonly "allowance(address,address)": "dd62ed3e";
        readonly "approve(address,uint256)": "095ea7b3";
        readonly "balanceOf(address)": "70a08231";
        readonly "decimals()": "313ce567";
        readonly "name()": "06fdde03";
        readonly "symbol()": "95d89b41";
        readonly "totalSupply()": "18160ddd";
        readonly "transfer(address,uint256)": "a9059cbb";
        readonly "transferFrom(address,address,uint256)": "23b872dd";
    };
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"allowance(address,address)\":{\"params\":{\"owner\":\"The owner of the tokens.\",\"spender\":\"The spender of the tokens.\"},\"returns\":{\"_0\":\"The allowance of the spender for the owner.\"}},\"approve(address,uint256)\":{\"params\":{\"amount\":\"The new allowance of the spender.\",\"spender\":\"The account with the allowance.\"},\"returns\":{\"_0\":\"A flag indicating whether or not the approval succeeded.\"}},\"balanceOf(address)\":{\"params\":{\"account\":\"The owner of the tokens.\"},\"returns\":{\"_0\":\"The account's balance.\"}},\"decimals()\":{\"returns\":{\"_0\":\"The token's decimals.\"}},\"name()\":{\"returns\":{\"_0\":\"The token's name.\"}},\"symbol()\":{\"returns\":{\"_0\":\"The token's symbol.\"}},\"totalSupply()\":{\"returns\":{\"_0\":\"The token's total supply.\"}},\"transfer(address,uint256)\":{\"params\":{\"amount\":\"The amount of tokens that will be transferred.\",\"to\":\"The recipient of the tokens.\"},\"returns\":{\"_0\":\"A flag indicating whether or not the transfer succeeded.\"}},\"transferFrom(address,address,uint256)\":{\"params\":{\"amount\":\"The amount of tokens that will be transferred.\",\"from\":\"The owner of the tokens.\",\"to\":\"The recipient of the tokens.\"},\"returns\":{\"_0\":\"A flag indicating whether or not the transfer succeeded.\"}}},\"version\":1},\"userdoc\":{\"events\":{\"Approval(address,address,uint256)\":{\"notice\":\"Emitted when an owner changes the approval for a spender.\"},\"Transfer(address,address,uint256)\":{\"notice\":\"Emitted when tokens are transferred from one account to another.\"}},\"kind\":\"user\",\"methods\":{\"allowance(address,address)\":{\"notice\":\"Gets the allowance of a spender for an owner.\"},\"approve(address,uint256)\":{\"notice\":\"Updates the allowance of a spender on behalf of the sender.\"},\"balanceOf(address)\":{\"notice\":\"Gets the balance of an account.\"},\"decimals()\":{\"notice\":\"Gets the token's decimals.\"},\"name()\":{\"notice\":\"Gets the token's name.\"},\"symbol()\":{\"notice\":\"Gets the token's symbol.\"},\"totalSupply()\":{\"notice\":\"Gets the token's total supply.\"},\"transfer(address,uint256)\":{\"notice\":\"Transfers tokens from the sender's account to another account.\"},\"transferFrom(address,address,uint256)\":{\"notice\":\"Transfers tokens from an owner to a recipient. This draws from         the sender's allowance.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IERC20.sol\":\"IERC20\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]}},\"version\":1}";
    readonly metadata: {
        readonly compiler: {
            readonly version: "0.8.20+commit.a1b79de6";
        };
        readonly language: "Solidity";
        readonly output: {
            readonly abi: readonly [{
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "owner";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "address";
                    readonly name: "spender";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "value";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "Approval";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "from";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "address";
                    readonly name: "to";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "value";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "Transfer";
                readonly anonymous: false;
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
                readonly name: "allowance";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "spender";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "approve";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "account";
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
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "name";
                readonly outputs: readonly [{
                    readonly internalType: "string";
                    readonly name: "";
                    readonly type: "string";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "symbol";
                readonly outputs: readonly [{
                    readonly internalType: "string";
                    readonly name: "";
                    readonly type: "string";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "totalSupply";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "to";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "transfer";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "from";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "to";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "transferFrom";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
            }];
            readonly devdoc: {
                readonly kind: "dev";
                readonly methods: {
                    readonly "allowance(address,address)": {
                        readonly params: {
                            readonly owner: "The owner of the tokens.";
                            readonly spender: "The spender of the tokens.";
                        };
                        readonly returns: {
                            readonly _0: "The allowance of the spender for the owner.";
                        };
                    };
                    readonly "approve(address,uint256)": {
                        readonly params: {
                            readonly amount: "The new allowance of the spender.";
                            readonly spender: "The account with the allowance.";
                        };
                        readonly returns: {
                            readonly _0: "A flag indicating whether or not the approval succeeded.";
                        };
                    };
                    readonly "balanceOf(address)": {
                        readonly params: {
                            readonly account: "The owner of the tokens.";
                        };
                        readonly returns: {
                            readonly _0: "The account's balance.";
                        };
                    };
                    readonly "decimals()": {
                        readonly returns: {
                            readonly _0: "The token's decimals.";
                        };
                    };
                    readonly "name()": {
                        readonly returns: {
                            readonly _0: "The token's name.";
                        };
                    };
                    readonly "symbol()": {
                        readonly returns: {
                            readonly _0: "The token's symbol.";
                        };
                    };
                    readonly "totalSupply()": {
                        readonly returns: {
                            readonly _0: "The token's total supply.";
                        };
                    };
                    readonly "transfer(address,uint256)": {
                        readonly params: {
                            readonly amount: "The amount of tokens that will be transferred.";
                            readonly to: "The recipient of the tokens.";
                        };
                        readonly returns: {
                            readonly _0: "A flag indicating whether or not the transfer succeeded.";
                        };
                    };
                    readonly "transferFrom(address,address,uint256)": {
                        readonly params: {
                            readonly amount: "The amount of tokens that will be transferred.";
                            readonly from: "The owner of the tokens.";
                            readonly to: "The recipient of the tokens.";
                        };
                        readonly returns: {
                            readonly _0: "A flag indicating whether or not the transfer succeeded.";
                        };
                    };
                };
                readonly version: 1;
            };
            readonly userdoc: {
                readonly kind: "user";
                readonly methods: {
                    readonly "allowance(address,address)": {
                        readonly notice: "Gets the allowance of a spender for an owner.";
                    };
                    readonly "approve(address,uint256)": {
                        readonly notice: "Updates the allowance of a spender on behalf of the sender.";
                    };
                    readonly "balanceOf(address)": {
                        readonly notice: "Gets the balance of an account.";
                    };
                    readonly "decimals()": {
                        readonly notice: "Gets the token's decimals.";
                    };
                    readonly "name()": {
                        readonly notice: "Gets the token's name.";
                    };
                    readonly "symbol()": {
                        readonly notice: "Gets the token's symbol.";
                    };
                    readonly "totalSupply()": {
                        readonly notice: "Gets the token's total supply.";
                    };
                    readonly "transfer(address,uint256)": {
                        readonly notice: "Transfers tokens from the sender's account to another account.";
                    };
                    readonly "transferFrom(address,address,uint256)": {
                        readonly notice: "Transfers tokens from an owner to a recipient. This draws from         the sender's allowance.";
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
                readonly "contracts/src/interfaces/IERC20.sol": "IERC20";
            };
            readonly libraries: {};
        };
        readonly sources: {
            readonly "contracts/src/interfaces/IERC20.sol": {
                readonly keccak256: "0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9";
                readonly urls: readonly ["bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac", "dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p"];
                readonly license: "Apache-2.0";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "contracts/src/interfaces/IERC20.sol";
        readonly id: 10320;
        readonly exportedSymbols: {
            readonly IERC20: readonly [10319];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:2650:79";
        readonly nodes: readonly [{
            readonly id: 10226;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:23:79";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 10319;
            readonly nodeType: "ContractDefinition";
            readonly src: "64:2624:79";
            readonly nodes: readonly [{
                readonly id: 10235;
                readonly nodeType: "EventDefinition";
                readonly src: "168:72:79";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly documentation: {
                    readonly id: 10227;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "87:76:79";
                    readonly text: "@notice Emitted when tokens are transferred from one account to another.";
                };
                readonly eventSelector: "ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef";
                readonly name: "Transfer";
                readonly nameLocation: "174:8:79";
                readonly parameters: {
                    readonly id: 10234;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10229;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "from";
                        readonly nameLocation: "199:4:79";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10235;
                        readonly src: "183:20:79";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 10228;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "183:7:79";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 10231;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "to";
                        readonly nameLocation: "221:2:79";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10235;
                        readonly src: "205:18:79";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 10230;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "205:7:79";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 10233;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "233:5:79";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10235;
                        readonly src: "225:13:79";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 10232;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "225:7:79";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "182:57:79";
                };
            }, {
                readonly id: 10244;
                readonly nodeType: "EventDefinition";
                readonly src: "320:108:79";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly documentation: {
                    readonly id: 10236;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "246:69:79";
                    readonly text: "@notice Emitted when an owner changes the approval for a spender.";
                };
                readonly eventSelector: "8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925";
                readonly name: "Approval";
                readonly nameLocation: "326:8:79";
                readonly parameters: {
                    readonly id: 10243;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10238;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "owner";
                        readonly nameLocation: "360:5:79";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10244;
                        readonly src: "344:21:79";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 10237;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "344:7:79";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 10240;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "spender";
                        readonly nameLocation: "391:7:79";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10244;
                        readonly src: "375:23:79";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 10239;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "375:7:79";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 10242;
                        readonly indexed: false;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "416:5:79";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10244;
                        readonly src: "408:13:79";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 10241;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "408:7:79";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "334:93:79";
                };
            }, {
                readonly id: 10254;
                readonly nodeType: "FunctionDefinition";
                readonly src: "694:74:79";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 10245;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "434:255:79";
                    readonly text: "@notice Updates the allowance of a spender on behalf of the sender.\n @param spender The account with the allowance.\n @param amount The new allowance of the spender.\n @return A flag indicating whether or not the approval succeeded.";
                };
                readonly functionSelector: "095ea7b3";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "approve";
                readonly nameLocation: "703:7:79";
                readonly parameters: {
                    readonly id: 10250;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10247;
                        readonly mutability: "mutable";
                        readonly name: "spender";
                        readonly nameLocation: "719:7:79";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10254;
                        readonly src: "711:15:79";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 10246;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "711:7:79";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 10249;
                        readonly mutability: "mutable";
                        readonly name: "amount";
                        readonly nameLocation: "736:6:79";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10254;
                        readonly src: "728:14:79";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 10248;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "728:7:79";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "710:33:79";
                };
                readonly returnParameters: {
                    readonly id: 10253;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10252;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10254;
                        readonly src: "762:4:79";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 10251;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "762:4:79";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "761:6:79";
                };
                readonly scope: 10319;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 10264;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1042:70:79";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 10255;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "774:263:79";
                    readonly text: "@notice Transfers tokens from the sender's account to another account.\n @param to The recipient of the tokens.\n @param amount The amount of tokens that will be transferred.\n @return A flag indicating whether or not the transfer succeeded.";
                };
                readonly functionSelector: "a9059cbb";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "transfer";
                readonly nameLocation: "1051:8:79";
                readonly parameters: {
                    readonly id: 10260;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10257;
                        readonly mutability: "mutable";
                        readonly name: "to";
                        readonly nameLocation: "1068:2:79";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10264;
                        readonly src: "1060:10:79";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 10256;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1060:7:79";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 10259;
                        readonly mutability: "mutable";
                        readonly name: "amount";
                        readonly nameLocation: "1080:6:79";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10264;
                        readonly src: "1072:14:79";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 10258;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1072:7:79";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1059:28:79";
                };
                readonly returnParameters: {
                    readonly id: 10263;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10262;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10264;
                        readonly src: "1106:4:79";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 10261;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1106:4:79";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1105:6:79";
                };
                readonly scope: 10319;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 10276;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1471:118:79";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 10265;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1118:348:79";
                    readonly text: "@notice Transfers tokens from an owner to a recipient. This draws from\n         the sender's allowance.\n @param from The owner of the tokens.\n @param to The recipient of the tokens.\n @param amount The amount of tokens that will be transferred.\n @return A flag indicating whether or not the transfer succeeded.";
                };
                readonly functionSelector: "23b872dd";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "transferFrom";
                readonly nameLocation: "1480:12:79";
                readonly parameters: {
                    readonly id: 10272;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10267;
                        readonly mutability: "mutable";
                        readonly name: "from";
                        readonly nameLocation: "1510:4:79";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10276;
                        readonly src: "1502:12:79";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 10266;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1502:7:79";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 10269;
                        readonly mutability: "mutable";
                        readonly name: "to";
                        readonly nameLocation: "1532:2:79";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10276;
                        readonly src: "1524:10:79";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 10268;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1524:7:79";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 10271;
                        readonly mutability: "mutable";
                        readonly name: "amount";
                        readonly nameLocation: "1552:6:79";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10276;
                        readonly src: "1544:14:79";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 10270;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1544:7:79";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1492:72:79";
                };
                readonly returnParameters: {
                    readonly id: 10275;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10274;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10276;
                        readonly src: "1583:4:79";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 10273;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1583:4:79";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1582:6:79";
                };
                readonly scope: 10319;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 10282;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1668:54:79";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 10277;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1595:68:79";
                    readonly text: "@notice Gets the token's name.\n @return The token's name.";
                };
                readonly functionSelector: "06fdde03";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "name";
                readonly nameLocation: "1677:4:79";
                readonly parameters: {
                    readonly id: 10278;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1681:2:79";
                };
                readonly returnParameters: {
                    readonly id: 10281;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10280;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10282;
                        readonly src: "1707:13:79";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 10279;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1707:6:79";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1706:15:79";
                };
                readonly scope: 10319;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 10288;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1805:56:79";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 10283;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1728:72:79";
                    readonly text: "@notice Gets the token's symbol.\n @return The token's symbol.";
                };
                readonly functionSelector: "95d89b41";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "symbol";
                readonly nameLocation: "1814:6:79";
                readonly parameters: {
                    readonly id: 10284;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1820:2:79";
                };
                readonly returnParameters: {
                    readonly id: 10287;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10286;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10288;
                        readonly src: "1846:13:79";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 10285;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1846:6:79";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1845:15:79";
                };
                readonly scope: 10319;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 10294;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1948:50:79";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 10289;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1867:76:79";
                    readonly text: "@notice Gets the token's decimals.\n @return The token's decimals.";
                };
                readonly functionSelector: "313ce567";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "decimals";
                readonly nameLocation: "1957:8:79";
                readonly parameters: {
                    readonly id: 10290;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1965:2:79";
                };
                readonly returnParameters: {
                    readonly id: 10293;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10292;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10294;
                        readonly src: "1991:5:79";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint8";
                            readonly typeString: "uint8";
                        };
                        readonly typeName: {
                            readonly id: 10291;
                            readonly name: "uint8";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1991:5:79";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint8";
                                readonly typeString: "uint8";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1990:7:79";
                };
                readonly scope: 10319;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 10300;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2093:55:79";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 10295;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2004:84:79";
                    readonly text: "@notice Gets the token's total supply.\n @return The token's total supply.";
                };
                readonly functionSelector: "18160ddd";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "totalSupply";
                readonly nameLocation: "2102:11:79";
                readonly parameters: {
                    readonly id: 10296;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2113:2:79";
                };
                readonly returnParameters: {
                    readonly id: 10299;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10298;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10300;
                        readonly src: "2139:7:79";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 10297;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2139:7:79";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2138:9:79";
                };
                readonly scope: 10319;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 10310;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2372:105:79";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 10301;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2154:213:79";
                    readonly text: "@notice Gets the allowance of a spender for an owner.\n @param owner The owner of the tokens.\n @param spender The spender of the tokens.\n @return The allowance of the spender for the owner.";
                };
                readonly functionSelector: "dd62ed3e";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "allowance";
                readonly nameLocation: "2381:9:79";
                readonly parameters: {
                    readonly id: 10306;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10303;
                        readonly mutability: "mutable";
                        readonly name: "owner";
                        readonly nameLocation: "2408:5:79";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10310;
                        readonly src: "2400:13:79";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 10302;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2400:7:79";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 10305;
                        readonly mutability: "mutable";
                        readonly name: "spender";
                        readonly nameLocation: "2431:7:79";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10310;
                        readonly src: "2423:15:79";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 10304;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2423:7:79";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2390:54:79";
                };
                readonly returnParameters: {
                    readonly id: 10309;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10308;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10310;
                        readonly src: "2468:7:79";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 10307;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2468:7:79";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2467:9:79";
                };
                readonly scope: 10319;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 10318;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2618:68:79";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 10311;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2483:130:79";
                    readonly text: "@notice Gets the balance of an account.\n @param account The owner of the tokens.\n @return The account's balance.";
                };
                readonly functionSelector: "70a08231";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "balanceOf";
                readonly nameLocation: "2627:9:79";
                readonly parameters: {
                    readonly id: 10314;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10313;
                        readonly mutability: "mutable";
                        readonly name: "account";
                        readonly nameLocation: "2645:7:79";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10318;
                        readonly src: "2637:15:79";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 10312;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2637:7:79";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2636:17:79";
                };
                readonly returnParameters: {
                    readonly id: 10317;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 10316;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 10318;
                        readonly src: "2677:7:79";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 10315;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2677:7:79";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2676:9:79";
                };
                readonly scope: 10319;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [];
            readonly canonicalName: "IERC20";
            readonly contractDependencies: readonly [];
            readonly contractKind: "interface";
            readonly fullyImplemented: false;
            readonly linearizedBaseContracts: readonly [10319];
            readonly name: "IERC20";
            readonly nameLocation: "74:6:79";
            readonly scope: 10320;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [10235, 10244];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 79;
};
//# sourceMappingURL=IERC20.d.ts.map