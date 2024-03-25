export declare const ISharesManagerV1: {
    readonly abi: readonly [{
        readonly type: "function";
        readonly name: "allowance";
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
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "approve";
        readonly inputs: readonly [{
            readonly name: "_spender";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_value";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "balanceOf";
        readonly inputs: readonly [{
            readonly name: "_owner";
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
        readonly name: "balanceOfUnderlying";
        readonly inputs: readonly [{
            readonly name: "_owner";
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
        readonly name: "name";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "sharesFromUnderlyingBalance";
        readonly inputs: readonly [{
            readonly name: "_underlyingAssetAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
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
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "totalSupply";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "totalUnderlyingSupply";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "transfer";
        readonly inputs: readonly [{
            readonly name: "_to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_value";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "transferFrom";
        readonly inputs: readonly [{
            readonly name: "_from";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_value";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "underlyingBalanceFromShares";
        readonly inputs: readonly [{
            readonly name: "_shares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "event";
        readonly name: "Approval";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "spender";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "value";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "Transfer";
        readonly inputs: readonly [{
            readonly name: "from";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "value";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
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
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_owner\",\"type\":\"address\"}],\"name\":\"balanceOfUnderlying\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_underlyingAssetAmount\",\"type\":\"uint256\"}],\"name\":\"sharesFromUnderlyingBalance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalUnderlyingSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_shares\",\"type\":\"uint256\"}],\"name\":\"underlyingBalanceFromShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"Kiln\",\"kind\":\"dev\",\"methods\":{\"allowance(address,address)\":{\"params\":{\"owner\":\"The owner of the tokens.\",\"spender\":\"The spender of the tokens.\"},\"returns\":{\"_0\":\"The allowance of the spender for the owner.\"}},\"approve(address,uint256)\":{\"details\":\"An approved account can use transferFrom to transfer funds on behalf of the token owner\",\"params\":{\"_spender\":\"Address that is allowed to spend the tokens\",\"_value\":\"The allowed amount in shares, will override previous value\"},\"returns\":{\"_0\":\"True if success\"}},\"balanceOf(address)\":{\"params\":{\"_owner\":\"Address to be checked\"},\"returns\":{\"_0\":\"The balance of the account in shares\"}},\"balanceOfUnderlying(address)\":{\"params\":{\"_owner\":\"Address to be checked\"},\"returns\":{\"_0\":\"The underlying balance of the account\"}},\"decimals()\":{\"returns\":{\"_0\":\"The token's decimals.\"}},\"name()\":{\"returns\":{\"_0\":\"The token's name.\"}},\"sharesFromUnderlyingBalance(uint256)\":{\"params\":{\"_underlyingAssetAmount\":\"Amount of underlying asset to convert\"},\"returns\":{\"_0\":\"The amount of shares worth the underlying asset amopunt\"}},\"symbol()\":{\"returns\":{\"_0\":\"The token's symbol.\"}},\"totalSupply()\":{\"returns\":{\"_0\":\"The total supply in shares\"}},\"totalUnderlyingSupply()\":{\"returns\":{\"_0\":\"The total underlying asset supply\"}},\"transfer(address,uint256)\":{\"params\":{\"_to\":\"Address receiving the tokens\",\"_value\":\"Amount of shares to be sent\"},\"returns\":{\"_0\":\"True if success\"}},\"transferFrom(address,address,uint256)\":{\"params\":{\"_from\":\"Address sending the tokens\",\"_to\":\"Address receiving the tokens\",\"_value\":\"Amount of shares to be sent\"},\"returns\":{\"_0\":\"True if success\"}},\"underlyingBalanceFromShares(uint256)\":{\"params\":{\"_shares\":\"Amount of shares to convert\"},\"returns\":{\"_0\":\"The underlying asset balance represented by the shares\"}}},\"title\":\"Shares Manager Interface (v1)\",\"version\":1},\"userdoc\":{\"events\":{\"Approval(address,address,uint256)\":{\"notice\":\"Emitted when an owner changes the approval for a spender.\"},\"Transfer(address,address,uint256)\":{\"notice\":\"Emitted when tokens are transferred from one account to another.\"}},\"kind\":\"user\",\"methods\":{\"allowance(address,address)\":{\"notice\":\"Gets the allowance of a spender for an owner.\"},\"approve(address,uint256)\":{\"notice\":\"Approves an account for future spendings\"},\"balanceOf(address)\":{\"notice\":\"Retrieve the balance of an account\"},\"balanceOfUnderlying(address)\":{\"notice\":\"Retrieve the underlying asset balance of an account\"},\"decimals()\":{\"notice\":\"Gets the token's decimals.\"},\"name()\":{\"notice\":\"Gets the token's name.\"},\"sharesFromUnderlyingBalance(uint256)\":{\"notice\":\"Retrieve the shares count from an underlying asset amount\"},\"symbol()\":{\"notice\":\"Gets the token's symbol.\"},\"totalSupply()\":{\"notice\":\"Retrieve the total token supply\"},\"totalUnderlyingSupply()\":{\"notice\":\"Retrieve the total underlying asset supply\"},\"transfer(address,uint256)\":{\"notice\":\"Performs a transfer from the message sender to the provided account\"},\"transferFrom(address,address,uint256)\":{\"notice\":\"Performs a transfer between two recipients\"},\"underlyingBalanceFromShares(uint256)\":{\"notice\":\"Retrieve the underlying asset balance from an amount of shares\"}},\"notice\":\"This interface exposes methods to handle the shares of the depositor and the ERC20 interface\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/lseth/ISharesManagerV1.sol\":\"ISharesManagerV1\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/lseth/ISharesManagerV1.sol\":{\"keccak256\":\"0xfefc57da6aa97835543b9e28aa70912334634001bbade60b95b250d5a2e85581\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://f0d4a2fbbc6d68a1549bd0350080f0f7cd871d7733e47f23148bf4893bcceaca\",\"dweb:/ipfs/QmfQdu9SZKmMziHa3HgHWkdj6Bw6izZrJT1pSBaWWgumwv\"]}},\"version\":1}";
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
            readonly remappings: readonly ["@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/", "aave-v3-core/=lib/aave-v3-core/", "ds-test/=lib/forge-std/lib/ds-test/src/", "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/", "forge-std/=lib/forge-std/src/", "openzeppelin-contracts/=lib/openzeppelin-contracts/", "openzeppelin/=lib/openzeppelin-contracts/contracts/", "solmate/=lib/solmate/src/"];
            readonly optimizer: {
                readonly enabled: true;
                readonly runs: 200;
            };
            readonly metadata: {
                readonly bytecodeHash: "ipfs";
            };
            readonly compilationTarget: {
                readonly "contracts/src/interfaces/lseth/ISharesManagerV1.sol": "ISharesManagerV1";
            };
            readonly libraries: {};
        };
        readonly sources: {
            readonly "contracts/src/interfaces/IERC20.sol": {
                readonly keccak256: "0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9";
                readonly urls: readonly ["bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac", "dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/lseth/ISharesManagerV1.sol": {
                readonly keccak256: "0xfefc57da6aa97835543b9e28aa70912334634001bbade60b95b250d5a2e85581";
                readonly urls: readonly ["bzz-raw://f0d4a2fbbc6d68a1549bd0350080f0f7cd871d7733e47f23148bf4893bcceaca", "dweb:/ipfs/QmfQdu9SZKmMziHa3HgHWkdj6Bw6izZrJT1pSBaWWgumwv"];
                readonly license: "Apache-2.0";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "contracts/src/interfaces/lseth/ISharesManagerV1.sol";
        readonly id: 13009;
        readonly exportedSymbols: {
            readonly IERC20: readonly [10417];
            readonly ISharesManagerV1: readonly [13008];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:2809:116";
        readonly nodes: readonly [{
            readonly id: 12926;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:23:116";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 12928;
            readonly nodeType: "ImportDirective";
            readonly src: "64:39:116";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IERC20.sol";
            readonly file: "../IERC20.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 13009;
            readonly sourceUnit: 10418;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 12927;
                    readonly name: "IERC20";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 10417;
                    readonly src: "73:6:116";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 13008;
            readonly nodeType: "ContractDefinition";
            readonly src: "268:2579:116";
            readonly nodes: readonly [{
                readonly id: 12937;
                readonly nodeType: "FunctionDefinition";
                readonly src: "402:55:116";
                readonly nodes: readonly [];
                readonly baseFunctions: readonly [10398];
                readonly documentation: {
                    readonly id: 12932;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "311:86:116";
                    readonly text: "@notice Retrieve the total token supply\n @return The total supply in shares";
                };
                readonly functionSelector: "18160ddd";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "totalSupply";
                readonly nameLocation: "411:11:116";
                readonly parameters: {
                    readonly id: 12933;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "422:2:116";
                };
                readonly returnParameters: {
                    readonly id: 12936;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12935;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12937;
                        readonly src: "448:7:116";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12934;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "448:7:116";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "447:9:116";
                };
                readonly scope: 13008;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12943;
                readonly nodeType: "FunctionDefinition";
                readonly src: "572:65:116";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 12938;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "463:104:116";
                    readonly text: "@notice Retrieve the total underlying asset supply\n @return The total underlying asset supply";
                };
                readonly functionSelector: "143a08d4";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "totalUnderlyingSupply";
                readonly nameLocation: "581:21:116";
                readonly parameters: {
                    readonly id: 12939;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "602:2:116";
                };
                readonly returnParameters: {
                    readonly id: 12942;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12941;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12943;
                        readonly src: "628:7:116";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12940;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "628:7:116";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "627:9:116";
                };
                readonly scope: 13008;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12951;
                readonly nodeType: "FunctionDefinition";
                readonly src: "791:67:116";
                readonly nodes: readonly [];
                readonly baseFunctions: readonly [10416];
                readonly documentation: {
                    readonly id: 12944;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "643:143:116";
                    readonly text: "@notice Retrieve the balance of an account\n @param _owner Address to be checked\n @return The balance of the account in shares";
                };
                readonly functionSelector: "70a08231";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "balanceOf";
                readonly nameLocation: "800:9:116";
                readonly parameters: {
                    readonly id: 12947;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12946;
                        readonly mutability: "mutable";
                        readonly name: "_owner";
                        readonly nameLocation: "818:6:116";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12951;
                        readonly src: "810:14:116";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 12945;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "810:7:116";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "809:16:116";
                };
                readonly returnParameters: {
                    readonly id: 12950;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12949;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12951;
                        readonly src: "849:7:116";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12948;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "849:7:116";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "848:9:116";
                };
                readonly scope: 13008;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12959;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1030:91:116";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 12952;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "864:161:116";
                    readonly text: "@notice Retrieve the underlying asset balance of an account\n @param _owner Address to be checked\n @return The underlying balance of the account";
                };
                readonly functionSelector: "3af9e669";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "balanceOfUnderlying";
                readonly nameLocation: "1039:19:116";
                readonly parameters: {
                    readonly id: 12955;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12954;
                        readonly mutability: "mutable";
                        readonly name: "_owner";
                        readonly nameLocation: "1076:6:116";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12959;
                        readonly src: "1068:14:116";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 12953;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1068:7:116";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1058:30:116";
                };
                readonly returnParameters: {
                    readonly id: 12958;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12957;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12959;
                        readonly src: "1112:7:116";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12956;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1112:7:116";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1111:9:116";
                };
                readonly scope: 13008;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12967;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1328:100:116";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 12960;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1127:196:116";
                    readonly text: "@notice Retrieve the underlying asset balance from an amount of shares\n @param _shares Amount of shares to convert\n @return The underlying asset balance represented by the shares";
                };
                readonly functionSelector: "f79c3f02";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "underlyingBalanceFromShares";
                readonly nameLocation: "1337:27:116";
                readonly parameters: {
                    readonly id: 12963;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12962;
                        readonly mutability: "mutable";
                        readonly name: "_shares";
                        readonly nameLocation: "1382:7:116";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12967;
                        readonly src: "1374:15:116";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12961;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1374:7:116";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1364:31:116";
                };
                readonly returnParameters: {
                    readonly id: 12966;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12965;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12967;
                        readonly src: "1419:7:116";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12964;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1419:7:116";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1418:9:116";
                };
                readonly scope: 13008;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12975;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1656:115:116";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 12968;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1434:217:116";
                    readonly text: "@notice Retrieve the shares count from an underlying asset amount\n @param _underlyingAssetAmount Amount of underlying asset to convert\n @return The amount of shares worth the underlying asset amopunt";
                };
                readonly functionSelector: "799a1954";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "sharesFromUnderlyingBalance";
                readonly nameLocation: "1665:27:116";
                readonly parameters: {
                    readonly id: 12971;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12970;
                        readonly mutability: "mutable";
                        readonly name: "_underlyingAssetAmount";
                        readonly nameLocation: "1710:22:116";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12975;
                        readonly src: "1702:30:116";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12969;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1702:7:116";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1692:46:116";
                };
                readonly returnParameters: {
                    readonly id: 12974;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12973;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12975;
                        readonly src: "1762:7:116";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12972;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1762:7:116";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1761:9:116";
                };
                readonly scope: 13008;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12985;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1991:71:116";
                readonly nodes: readonly [];
                readonly baseFunctions: readonly [10362];
                readonly documentation: {
                    readonly id: 12976;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1777:209:116";
                    readonly text: "@notice Performs a transfer from the message sender to the provided account\n @param _to Address receiving the tokens\n @param _value Amount of shares to be sent\n @return True if success";
                };
                readonly functionSelector: "a9059cbb";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "transfer";
                readonly nameLocation: "2000:8:116";
                readonly parameters: {
                    readonly id: 12981;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12978;
                        readonly mutability: "mutable";
                        readonly name: "_to";
                        readonly nameLocation: "2017:3:116";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12985;
                        readonly src: "2009:11:116";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 12977;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2009:7:116";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 12980;
                        readonly mutability: "mutable";
                        readonly name: "_value";
                        readonly nameLocation: "2030:6:116";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12985;
                        readonly src: "2022:14:116";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12979;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2022:7:116";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2008:29:116";
                };
                readonly returnParameters: {
                    readonly id: 12984;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12983;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12985;
                        readonly src: "2056:4:116";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 12982;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2056:4:116";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2055:6:116";
                };
                readonly scope: 13008;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12997;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2305:120:116";
                readonly nodes: readonly [];
                readonly baseFunctions: readonly [10374];
                readonly documentation: {
                    readonly id: 12986;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2068:232:116";
                    readonly text: "@notice Performs a transfer between two recipients\n @param _from Address sending the tokens\n @param _to Address receiving the tokens\n @param _value Amount of shares to be sent\n @return True if success";
                };
                readonly functionSelector: "23b872dd";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "transferFrom";
                readonly nameLocation: "2314:12:116";
                readonly parameters: {
                    readonly id: 12993;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12988;
                        readonly mutability: "mutable";
                        readonly name: "_from";
                        readonly nameLocation: "2344:5:116";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12997;
                        readonly src: "2336:13:116";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 12987;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2336:7:116";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 12990;
                        readonly mutability: "mutable";
                        readonly name: "_to";
                        readonly nameLocation: "2367:3:116";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12997;
                        readonly src: "2359:11:116";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 12989;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2359:7:116";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 12992;
                        readonly mutability: "mutable";
                        readonly name: "_value";
                        readonly nameLocation: "2388:6:116";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12997;
                        readonly src: "2380:14:116";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12991;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2380:7:116";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2326:74:116";
                };
                readonly returnParameters: {
                    readonly id: 12996;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12995;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12997;
                        readonly src: "2419:4:116";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 12994;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2419:4:116";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2418:6:116";
                };
                readonly scope: 13008;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 13007;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2770:75:116";
                readonly nodes: readonly [];
                readonly baseFunctions: readonly [10352];
                readonly documentation: {
                    readonly id: 12998;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2431:334:116";
                    readonly text: "@notice Approves an account for future spendings\n @dev An approved account can use transferFrom to transfer funds on behalf of the token owner\n @param _spender Address that is allowed to spend the tokens\n @param _value The allowed amount in shares, will override previous value\n @return True if success";
                };
                readonly functionSelector: "095ea7b3";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "approve";
                readonly nameLocation: "2779:7:116";
                readonly parameters: {
                    readonly id: 13003;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 13000;
                        readonly mutability: "mutable";
                        readonly name: "_spender";
                        readonly nameLocation: "2795:8:116";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13007;
                        readonly src: "2787:16:116";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 12999;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2787:7:116";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 13002;
                        readonly mutability: "mutable";
                        readonly name: "_value";
                        readonly nameLocation: "2813:6:116";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13007;
                        readonly src: "2805:14:116";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 13001;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2805:7:116";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2786:34:116";
                };
                readonly returnParameters: {
                    readonly id: 13006;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 13005;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 13007;
                        readonly src: "2839:4:116";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 13004;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2839:4:116";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2838:6:116";
                };
                readonly scope: 13008;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 12930;
                    readonly name: "IERC20";
                    readonly nameLocations: readonly ["298:6:116"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 10417;
                    readonly src: "298:6:116";
                };
                readonly id: 12931;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "298:6:116";
            }];
            readonly canonicalName: "ISharesManagerV1";
            readonly contractDependencies: readonly [];
            readonly contractKind: "interface";
            readonly documentation: {
                readonly id: 12929;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "105:163:116";
                readonly text: "@title Shares Manager Interface (v1)\n @author Kiln\n @notice This interface exposes methods to handle the shares of the depositor and the ERC20 interface";
            };
            readonly fullyImplemented: false;
            readonly linearizedBaseContracts: readonly [13008, 10417];
            readonly name: "ISharesManagerV1";
            readonly nameLocation: "278:16:116";
            readonly scope: 13009;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [10333, 10342];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 116;
};
//# sourceMappingURL=ISharesManagerV1.d.ts.map