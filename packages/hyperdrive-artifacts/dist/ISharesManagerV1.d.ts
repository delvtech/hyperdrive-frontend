export declare const ISharesManagerV1: {
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
            readonly name: "_spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_value";
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
            readonly name: "_owner";
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
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_owner";
            readonly type: "address";
        }];
        readonly name: "balanceOfUnderlying";
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
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_underlyingAssetAmount";
            readonly type: "uint256";
        }];
        readonly name: "sharesFromUnderlyingBalance";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
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
        readonly inputs: readonly [];
        readonly name: "totalUnderlyingSupply";
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
            readonly name: "_to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_value";
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
            readonly name: "_from";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_value";
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
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_shares";
            readonly type: "uint256";
        }];
        readonly name: "underlyingBalanceFromShares";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
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
        readonly "balanceOfUnderlying(address)": "3af9e669";
        readonly "decimals()": "313ce567";
        readonly "name()": "06fdde03";
        readonly "sharesFromUnderlyingBalance(uint256)": "799a1954";
        readonly "symbol()": "95d89b41";
        readonly "totalSupply()": "18160ddd";
        readonly "totalUnderlyingSupply()": "143a08d4";
        readonly "transfer(address,uint256)": "a9059cbb";
        readonly "transferFrom(address,address,uint256)": "23b872dd";
        readonly "underlyingBalanceFromShares(uint256)": "f79c3f02";
    };
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_owner\",\"type\":\"address\"}],\"name\":\"balanceOfUnderlying\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_underlyingAssetAmount\",\"type\":\"uint256\"}],\"name\":\"sharesFromUnderlyingBalance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalUnderlyingSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_shares\",\"type\":\"uint256\"}],\"name\":\"underlyingBalanceFromShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"Kiln\",\"kind\":\"dev\",\"methods\":{\"allowance(address,address)\":{\"params\":{\"owner\":\"The owner of the tokens.\",\"spender\":\"The spender of the tokens.\"},\"returns\":{\"_0\":\"The allowance of the spender for the owner.\"}},\"approve(address,uint256)\":{\"details\":\"An approved account can use transferFrom to transfer funds on behalf of the token owner\",\"params\":{\"_spender\":\"Address that is allowed to spend the tokens\",\"_value\":\"The allowed amount in shares, will override previous value\"},\"returns\":{\"_0\":\"True if success\"}},\"balanceOf(address)\":{\"params\":{\"_owner\":\"Address to be checked\"},\"returns\":{\"_0\":\"The balance of the account in shares\"}},\"balanceOfUnderlying(address)\":{\"params\":{\"_owner\":\"Address to be checked\"},\"returns\":{\"_0\":\"The underlying balance of the account\"}},\"decimals()\":{\"returns\":{\"_0\":\"The token's decimals.\"}},\"name()\":{\"returns\":{\"_0\":\"The token's name.\"}},\"sharesFromUnderlyingBalance(uint256)\":{\"params\":{\"_underlyingAssetAmount\":\"Amount of underlying asset to convert\"},\"returns\":{\"_0\":\"The amount of shares worth the underlying asset amopunt\"}},\"symbol()\":{\"returns\":{\"_0\":\"The token's symbol.\"}},\"totalSupply()\":{\"returns\":{\"_0\":\"The total supply in shares\"}},\"totalUnderlyingSupply()\":{\"returns\":{\"_0\":\"The total underlying asset supply\"}},\"transfer(address,uint256)\":{\"params\":{\"_to\":\"Address receiving the tokens\",\"_value\":\"Amount of shares to be sent\"},\"returns\":{\"_0\":\"True if success\"}},\"transferFrom(address,address,uint256)\":{\"params\":{\"_from\":\"Address sending the tokens\",\"_to\":\"Address receiving the tokens\",\"_value\":\"Amount of shares to be sent\"},\"returns\":{\"_0\":\"True if success\"}},\"underlyingBalanceFromShares(uint256)\":{\"params\":{\"_shares\":\"Amount of shares to convert\"},\"returns\":{\"_0\":\"The underlying asset balance represented by the shares\"}}},\"title\":\"Shares Manager Interface (v1)\",\"version\":1},\"userdoc\":{\"events\":{\"Approval(address,address,uint256)\":{\"notice\":\"Emitted when an owner changes the approval for a spender.\"},\"Transfer(address,address,uint256)\":{\"notice\":\"Emitted when tokens are transferred from one account to another.\"}},\"kind\":\"user\",\"methods\":{\"allowance(address,address)\":{\"notice\":\"Gets the allowance of a spender for an owner.\"},\"approve(address,uint256)\":{\"notice\":\"Approves an account for future spendings\"},\"balanceOf(address)\":{\"notice\":\"Retrieve the balance of an account\"},\"balanceOfUnderlying(address)\":{\"notice\":\"Retrieve the underlying asset balance of an account\"},\"decimals()\":{\"notice\":\"Gets the token's decimals.\"},\"name()\":{\"notice\":\"Gets the token's name.\"},\"sharesFromUnderlyingBalance(uint256)\":{\"notice\":\"Retrieve the shares count from an underlying asset amount\"},\"symbol()\":{\"notice\":\"Gets the token's symbol.\"},\"totalSupply()\":{\"notice\":\"Retrieve the total token supply\"},\"totalUnderlyingSupply()\":{\"notice\":\"Retrieve the total underlying asset supply\"},\"transfer(address,uint256)\":{\"notice\":\"Performs a transfer from the message sender to the provided account\"},\"transferFrom(address,address,uint256)\":{\"notice\":\"Performs a transfer between two recipients\"},\"underlyingBalanceFromShares(uint256)\":{\"notice\":\"Retrieve the underlying asset balance from an amount of shares\"}},\"notice\":\"This interface exposes methods to handle the shares of the depositor and the ERC20 interface\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/ISharesManagerV1.sol\":\"ISharesManagerV1\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/ISharesManagerV1.sol\":{\"keccak256\":\"0xca5ddd1dff26fc16fbf35e7154c5dee64098f6a0e3e44f9335c62b14d3705a98\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://577579582e9762b9244a47ce465a3de3a848fdf1b8a5b0ad07a5b803d8ef02e4\",\"dweb:/ipfs/QmSkPXPtxhcGB6DfVNYY6ZxdNHnkUupxBmDAgPtooKXzqA\"]}},\"version\":1}";
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
                    readonly name: "_spender";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_value";
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
                    readonly name: "_owner";
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
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_owner";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "balanceOfUnderlying";
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
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_underlyingAssetAmount";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "sharesFromUnderlyingBalance";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
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
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "totalUnderlyingSupply";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_to";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_value";
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
                    readonly name: "_from";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "_to";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_value";
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
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_shares";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "underlyingBalanceFromShares";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
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
                        readonly details: "An approved account can use transferFrom to transfer funds on behalf of the token owner";
                        readonly params: {
                            readonly _spender: "Address that is allowed to spend the tokens";
                            readonly _value: "The allowed amount in shares, will override previous value";
                        };
                        readonly returns: {
                            readonly _0: "True if success";
                        };
                    };
                    readonly "balanceOf(address)": {
                        readonly params: {
                            readonly _owner: "Address to be checked";
                        };
                        readonly returns: {
                            readonly _0: "The balance of the account in shares";
                        };
                    };
                    readonly "balanceOfUnderlying(address)": {
                        readonly params: {
                            readonly _owner: "Address to be checked";
                        };
                        readonly returns: {
                            readonly _0: "The underlying balance of the account";
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
                    readonly "sharesFromUnderlyingBalance(uint256)": {
                        readonly params: {
                            readonly _underlyingAssetAmount: "Amount of underlying asset to convert";
                        };
                        readonly returns: {
                            readonly _0: "The amount of shares worth the underlying asset amopunt";
                        };
                    };
                    readonly "symbol()": {
                        readonly returns: {
                            readonly _0: "The token's symbol.";
                        };
                    };
                    readonly "totalSupply()": {
                        readonly returns: {
                            readonly _0: "The total supply in shares";
                        };
                    };
                    readonly "totalUnderlyingSupply()": {
                        readonly returns: {
                            readonly _0: "The total underlying asset supply";
                        };
                    };
                    readonly "transfer(address,uint256)": {
                        readonly params: {
                            readonly _to: "Address receiving the tokens";
                            readonly _value: "Amount of shares to be sent";
                        };
                        readonly returns: {
                            readonly _0: "True if success";
                        };
                    };
                    readonly "transferFrom(address,address,uint256)": {
                        readonly params: {
                            readonly _from: "Address sending the tokens";
                            readonly _to: "Address receiving the tokens";
                            readonly _value: "Amount of shares to be sent";
                        };
                        readonly returns: {
                            readonly _0: "True if success";
                        };
                    };
                    readonly "underlyingBalanceFromShares(uint256)": {
                        readonly params: {
                            readonly _shares: "Amount of shares to convert";
                        };
                        readonly returns: {
                            readonly _0: "The underlying asset balance represented by the shares";
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
                        readonly notice: "Approves an account for future spendings";
                    };
                    readonly "balanceOf(address)": {
                        readonly notice: "Retrieve the balance of an account";
                    };
                    readonly "balanceOfUnderlying(address)": {
                        readonly notice: "Retrieve the underlying asset balance of an account";
                    };
                    readonly "decimals()": {
                        readonly notice: "Gets the token's decimals.";
                    };
                    readonly "name()": {
                        readonly notice: "Gets the token's name.";
                    };
                    readonly "sharesFromUnderlyingBalance(uint256)": {
                        readonly notice: "Retrieve the shares count from an underlying asset amount";
                    };
                    readonly "symbol()": {
                        readonly notice: "Gets the token's symbol.";
                    };
                    readonly "totalSupply()": {
                        readonly notice: "Retrieve the total token supply";
                    };
                    readonly "totalUnderlyingSupply()": {
                        readonly notice: "Retrieve the total underlying asset supply";
                    };
                    readonly "transfer(address,uint256)": {
                        readonly notice: "Performs a transfer from the message sender to the provided account";
                    };
                    readonly "transferFrom(address,address,uint256)": {
                        readonly notice: "Performs a transfer between two recipients";
                    };
                    readonly "underlyingBalanceFromShares(uint256)": {
                        readonly notice: "Retrieve the underlying asset balance from an amount of shares";
                    };
                };
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
                readonly "contracts/src/interfaces/ISharesManagerV1.sol": "ISharesManagerV1";
            };
            readonly libraries: {};
        };
        readonly sources: {
            readonly "contracts/src/interfaces/IERC20.sol": {
                readonly keccak256: "0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9";
                readonly urls: readonly ["bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac", "dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/ISharesManagerV1.sol": {
                readonly keccak256: "0xca5ddd1dff26fc16fbf35e7154c5dee64098f6a0e3e44f9335c62b14d3705a98";
                readonly urls: readonly ["bzz-raw://577579582e9762b9244a47ce465a3de3a848fdf1b8a5b0ad07a5b803d8ef02e4", "dweb:/ipfs/QmSkPXPtxhcGB6DfVNYY6ZxdNHnkUupxBmDAgPtooKXzqA"];
                readonly license: "Apache-2.0";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "contracts/src/interfaces/ISharesManagerV1.sol";
        readonly id: 12493;
        readonly exportedSymbols: {
            readonly IERC20: readonly [9980];
            readonly ISharesManagerV1: readonly [12492];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:2808:110";
        readonly nodes: readonly [{
            readonly id: 12410;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:23:110";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 12412;
            readonly nodeType: "ImportDirective";
            readonly src: "64:38:110";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IERC20.sol";
            readonly file: "./IERC20.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 12493;
            readonly sourceUnit: 9981;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 12411;
                    readonly name: "IERC20";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 9980;
                    readonly src: "73:6:110";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 12492;
            readonly nodeType: "ContractDefinition";
            readonly src: "267:2579:110";
            readonly nodes: readonly [{
                readonly id: 12421;
                readonly nodeType: "FunctionDefinition";
                readonly src: "401:55:110";
                readonly nodes: readonly [];
                readonly baseFunctions: readonly [9961];
                readonly documentation: {
                    readonly id: 12416;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "310:86:110";
                    readonly text: "@notice Retrieve the total token supply\n @return The total supply in shares";
                };
                readonly functionSelector: "18160ddd";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "totalSupply";
                readonly nameLocation: "410:11:110";
                readonly parameters: {
                    readonly id: 12417;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "421:2:110";
                };
                readonly returnParameters: {
                    readonly id: 12420;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12419;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12421;
                        readonly src: "447:7:110";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12418;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "447:7:110";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "446:9:110";
                };
                readonly scope: 12492;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12427;
                readonly nodeType: "FunctionDefinition";
                readonly src: "571:65:110";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 12422;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "462:104:110";
                    readonly text: "@notice Retrieve the total underlying asset supply\n @return The total underlying asset supply";
                };
                readonly functionSelector: "143a08d4";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "totalUnderlyingSupply";
                readonly nameLocation: "580:21:110";
                readonly parameters: {
                    readonly id: 12423;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "601:2:110";
                };
                readonly returnParameters: {
                    readonly id: 12426;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12425;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12427;
                        readonly src: "627:7:110";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12424;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "627:7:110";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "626:9:110";
                };
                readonly scope: 12492;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12435;
                readonly nodeType: "FunctionDefinition";
                readonly src: "790:67:110";
                readonly nodes: readonly [];
                readonly baseFunctions: readonly [9979];
                readonly documentation: {
                    readonly id: 12428;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "642:143:110";
                    readonly text: "@notice Retrieve the balance of an account\n @param _owner Address to be checked\n @return The balance of the account in shares";
                };
                readonly functionSelector: "70a08231";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "balanceOf";
                readonly nameLocation: "799:9:110";
                readonly parameters: {
                    readonly id: 12431;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12430;
                        readonly mutability: "mutable";
                        readonly name: "_owner";
                        readonly nameLocation: "817:6:110";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12435;
                        readonly src: "809:14:110";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 12429;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "809:7:110";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "808:16:110";
                };
                readonly returnParameters: {
                    readonly id: 12434;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12433;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12435;
                        readonly src: "848:7:110";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12432;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "848:7:110";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "847:9:110";
                };
                readonly scope: 12492;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12443;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1029:91:110";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 12436;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "863:161:110";
                    readonly text: "@notice Retrieve the underlying asset balance of an account\n @param _owner Address to be checked\n @return The underlying balance of the account";
                };
                readonly functionSelector: "3af9e669";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "balanceOfUnderlying";
                readonly nameLocation: "1038:19:110";
                readonly parameters: {
                    readonly id: 12439;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12438;
                        readonly mutability: "mutable";
                        readonly name: "_owner";
                        readonly nameLocation: "1075:6:110";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12443;
                        readonly src: "1067:14:110";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 12437;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1067:7:110";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1057:30:110";
                };
                readonly returnParameters: {
                    readonly id: 12442;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12441;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12443;
                        readonly src: "1111:7:110";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12440;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1111:7:110";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1110:9:110";
                };
                readonly scope: 12492;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12451;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1327:100:110";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 12444;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1126:196:110";
                    readonly text: "@notice Retrieve the underlying asset balance from an amount of shares\n @param _shares Amount of shares to convert\n @return The underlying asset balance represented by the shares";
                };
                readonly functionSelector: "f79c3f02";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "underlyingBalanceFromShares";
                readonly nameLocation: "1336:27:110";
                readonly parameters: {
                    readonly id: 12447;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12446;
                        readonly mutability: "mutable";
                        readonly name: "_shares";
                        readonly nameLocation: "1381:7:110";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12451;
                        readonly src: "1373:15:110";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12445;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1373:7:110";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1363:31:110";
                };
                readonly returnParameters: {
                    readonly id: 12450;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12449;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12451;
                        readonly src: "1418:7:110";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12448;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1418:7:110";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1417:9:110";
                };
                readonly scope: 12492;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12459;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1655:115:110";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 12452;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1433:217:110";
                    readonly text: "@notice Retrieve the shares count from an underlying asset amount\n @param _underlyingAssetAmount Amount of underlying asset to convert\n @return The amount of shares worth the underlying asset amopunt";
                };
                readonly functionSelector: "799a1954";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "sharesFromUnderlyingBalance";
                readonly nameLocation: "1664:27:110";
                readonly parameters: {
                    readonly id: 12455;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12454;
                        readonly mutability: "mutable";
                        readonly name: "_underlyingAssetAmount";
                        readonly nameLocation: "1709:22:110";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12459;
                        readonly src: "1701:30:110";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12453;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1701:7:110";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1691:46:110";
                };
                readonly returnParameters: {
                    readonly id: 12458;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12457;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12459;
                        readonly src: "1761:7:110";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12456;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1761:7:110";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1760:9:110";
                };
                readonly scope: 12492;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12469;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1990:71:110";
                readonly nodes: readonly [];
                readonly baseFunctions: readonly [9925];
                readonly documentation: {
                    readonly id: 12460;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1776:209:110";
                    readonly text: "@notice Performs a transfer from the message sender to the provided account\n @param _to Address receiving the tokens\n @param _value Amount of shares to be sent\n @return True if success";
                };
                readonly functionSelector: "a9059cbb";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "transfer";
                readonly nameLocation: "1999:8:110";
                readonly parameters: {
                    readonly id: 12465;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12462;
                        readonly mutability: "mutable";
                        readonly name: "_to";
                        readonly nameLocation: "2016:3:110";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12469;
                        readonly src: "2008:11:110";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 12461;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2008:7:110";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 12464;
                        readonly mutability: "mutable";
                        readonly name: "_value";
                        readonly nameLocation: "2029:6:110";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12469;
                        readonly src: "2021:14:110";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12463;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2021:7:110";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2007:29:110";
                };
                readonly returnParameters: {
                    readonly id: 12468;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12467;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12469;
                        readonly src: "2055:4:110";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 12466;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2055:4:110";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2054:6:110";
                };
                readonly scope: 12492;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12481;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2304:120:110";
                readonly nodes: readonly [];
                readonly baseFunctions: readonly [9937];
                readonly documentation: {
                    readonly id: 12470;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2067:232:110";
                    readonly text: "@notice Performs a transfer between two recipients\n @param _from Address sending the tokens\n @param _to Address receiving the tokens\n @param _value Amount of shares to be sent\n @return True if success";
                };
                readonly functionSelector: "23b872dd";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "transferFrom";
                readonly nameLocation: "2313:12:110";
                readonly parameters: {
                    readonly id: 12477;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12472;
                        readonly mutability: "mutable";
                        readonly name: "_from";
                        readonly nameLocation: "2343:5:110";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12481;
                        readonly src: "2335:13:110";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 12471;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2335:7:110";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 12474;
                        readonly mutability: "mutable";
                        readonly name: "_to";
                        readonly nameLocation: "2366:3:110";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12481;
                        readonly src: "2358:11:110";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 12473;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2358:7:110";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 12476;
                        readonly mutability: "mutable";
                        readonly name: "_value";
                        readonly nameLocation: "2387:6:110";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12481;
                        readonly src: "2379:14:110";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12475;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2379:7:110";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2325:74:110";
                };
                readonly returnParameters: {
                    readonly id: 12480;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12479;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12481;
                        readonly src: "2418:4:110";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 12478;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2418:4:110";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2417:6:110";
                };
                readonly scope: 12492;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12491;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2769:75:110";
                readonly nodes: readonly [];
                readonly baseFunctions: readonly [9915];
                readonly documentation: {
                    readonly id: 12482;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2430:334:110";
                    readonly text: "@notice Approves an account for future spendings\n @dev An approved account can use transferFrom to transfer funds on behalf of the token owner\n @param _spender Address that is allowed to spend the tokens\n @param _value The allowed amount in shares, will override previous value\n @return True if success";
                };
                readonly functionSelector: "095ea7b3";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "approve";
                readonly nameLocation: "2778:7:110";
                readonly parameters: {
                    readonly id: 12487;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12484;
                        readonly mutability: "mutable";
                        readonly name: "_spender";
                        readonly nameLocation: "2794:8:110";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12491;
                        readonly src: "2786:16:110";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 12483;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2786:7:110";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 12486;
                        readonly mutability: "mutable";
                        readonly name: "_value";
                        readonly nameLocation: "2812:6:110";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12491;
                        readonly src: "2804:14:110";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12485;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2804:7:110";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2785:34:110";
                };
                readonly returnParameters: {
                    readonly id: 12490;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12489;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12491;
                        readonly src: "2838:4:110";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 12488;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2838:4:110";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2837:6:110";
                };
                readonly scope: 12492;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 12414;
                    readonly name: "IERC20";
                    readonly nameLocations: readonly ["297:6:110"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 9980;
                    readonly src: "297:6:110";
                };
                readonly id: 12415;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "297:6:110";
            }];
            readonly canonicalName: "ISharesManagerV1";
            readonly contractDependencies: readonly [];
            readonly contractKind: "interface";
            readonly documentation: {
                readonly id: 12413;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "104:163:110";
                readonly text: "@title Shares Manager Interface (v1)\n @author Kiln\n @notice This interface exposes methods to handle the shares of the depositor and the ERC20 interface";
            };
            readonly fullyImplemented: false;
            readonly linearizedBaseContracts: readonly [12492, 9980];
            readonly name: "ISharesManagerV1";
            readonly nameLocation: "277:16:110";
            readonly scope: 12493;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [9896, 9905];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 110;
};
//# sourceMappingURL=ISharesManagerV1.d.ts.map