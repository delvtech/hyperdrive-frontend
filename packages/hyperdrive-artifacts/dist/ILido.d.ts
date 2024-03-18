export declare const ILido: {
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
        readonly name: "getBufferedEther";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_sharesAmount";
            readonly type: "uint256";
        }];
        readonly name: "getPooledEthByShares";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_ethAmount";
            readonly type: "uint256";
        }];
        readonly name: "getSharesByPooledEth";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getTotalPooledEther";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getTotalShares";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
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
            readonly internalType: "address";
            readonly name: "_account";
            readonly type: "address";
        }];
        readonly name: "sharesOf";
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
            readonly name: "_referral";
            readonly type: "address";
        }];
        readonly name: "submit";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "payable";
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
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_recipient";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_sharesAmount";
            readonly type: "uint256";
        }];
        readonly name: "transferShares";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_sender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_recipient";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_sharesAmount";
            readonly type: "uint256";
        }];
        readonly name: "transferSharesFrom";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
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
        readonly "getBufferedEther()": "47b714e0";
        readonly "getPooledEthByShares(uint256)": "7a28fb88";
        readonly "getSharesByPooledEth(uint256)": "19208451";
        readonly "getTotalPooledEther()": "37cfdaca";
        readonly "getTotalShares()": "d5002f2e";
        readonly "name()": "06fdde03";
        readonly "sharesOf(address)": "f5eb42dc";
        readonly "submit(address)": "a1903eab";
        readonly "symbol()": "95d89b41";
        readonly "totalSupply()": "18160ddd";
        readonly "transfer(address,uint256)": "a9059cbb";
        readonly "transferFrom(address,address,uint256)": "23b872dd";
        readonly "transferShares(address,uint256)": "8fcb4e5b";
        readonly "transferSharesFrom(address,address,uint256)": "6d780459";
    };
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getBufferedEther\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_sharesAmount\",\"type\":\"uint256\"}],\"name\":\"getPooledEthByShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_ethAmount\",\"type\":\"uint256\"}],\"name\":\"getSharesByPooledEth\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getTotalPooledEther\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getTotalShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_account\",\"type\":\"address\"}],\"name\":\"sharesOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_referral\",\"type\":\"address\"}],\"name\":\"submit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_sharesAmount\",\"type\":\"uint256\"}],\"name\":\"transferShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_sender\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_sharesAmount\",\"type\":\"uint256\"}],\"name\":\"transferSharesFrom\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"allowance(address,address)\":{\"params\":{\"owner\":\"The owner of the tokens.\",\"spender\":\"The spender of the tokens.\"},\"returns\":{\"_0\":\"The allowance of the spender for the owner.\"}},\"approve(address,uint256)\":{\"params\":{\"amount\":\"The new allowance of the spender.\",\"spender\":\"The account with the allowance.\"},\"returns\":{\"_0\":\"A flag indicating whether or not the approval succeeded.\"}},\"balanceOf(address)\":{\"params\":{\"account\":\"The owner of the tokens.\"},\"returns\":{\"_0\":\"The account's balance.\"}},\"decimals()\":{\"returns\":{\"_0\":\"The token's decimals.\"}},\"getBufferedEther()\":{\"returns\":{\"_0\":\"The total amount of buffered ether.\"}},\"getPooledEthByShares(uint256)\":{\"params\":{\"_sharesAmount\":\"The amount of stETH shares to convert.\"},\"returns\":{\"_0\":\"The amount of stETH tokens that the stETH shares are worth.\"}},\"getSharesByPooledEth(uint256)\":{\"params\":{\"_ethAmount\":\"The amount of stETH tokens to convert.\"},\"returns\":{\"_0\":\"The amount of stETH shares that the stETH tokens are worth.\"}},\"getTotalPooledEther()\":{\"returns\":{\"_0\":\"The total amount of pooled ether.\"}},\"getTotalShares()\":{\"returns\":{\"_0\":\"The total amount of stETH shares.\"}},\"name()\":{\"returns\":{\"_0\":\"The token's name.\"}},\"sharesOf(address)\":{\"params\":{\"_account\":\"The owner of the shares.\"}},\"submit(address)\":{\"params\":{\"_referral\":\"The referral address that should get credit in Lido's        referral program.\"},\"returns\":{\"_0\":\"The amount of stETH shares that were minted.\"}},\"symbol()\":{\"returns\":{\"_0\":\"The token's symbol.\"}},\"totalSupply()\":{\"returns\":{\"_0\":\"The token's total supply.\"}},\"transfer(address,uint256)\":{\"params\":{\"amount\":\"The amount of tokens that will be transferred.\",\"to\":\"The recipient of the tokens.\"},\"returns\":{\"_0\":\"A flag indicating whether or not the transfer succeeded.\"}},\"transferFrom(address,address,uint256)\":{\"params\":{\"amount\":\"The amount of tokens that will be transferred.\",\"from\":\"The owner of the tokens.\",\"to\":\"The recipient of the tokens.\"},\"returns\":{\"_0\":\"A flag indicating whether or not the transfer succeeded.\"}},\"transferShares(address,uint256)\":{\"params\":{\"_recipient\":\"The recipient of the tokens.\",\"_sharesAmount\":\"The amount of stETH shares that will be transferred.\"},\"returns\":{\"_0\":\"The amount of stETH tokens that were transferred.\"}},\"transferSharesFrom(address,address,uint256)\":{\"params\":{\"_recipient\":\"The recipient of the tokens.\",\"_sender\":\"The owner of the tokens.\",\"_sharesAmount\":\"The amount of tokens that will be transferred.\"},\"returns\":{\"_0\":\"The amount of stETH tokens transferred.\"}}},\"version\":1},\"userdoc\":{\"events\":{\"Approval(address,address,uint256)\":{\"notice\":\"Emitted when an owner changes the approval for a spender.\"},\"Transfer(address,address,uint256)\":{\"notice\":\"Emitted when tokens are transferred from one account to another.\"}},\"kind\":\"user\",\"methods\":{\"allowance(address,address)\":{\"notice\":\"Gets the allowance of a spender for an owner.\"},\"approve(address,uint256)\":{\"notice\":\"Updates the allowance of a spender on behalf of the sender.\"},\"balanceOf(address)\":{\"notice\":\"Gets the balance of an account.\"},\"decimals()\":{\"notice\":\"Gets the token's decimals.\"},\"getBufferedEther()\":{\"notice\":\"Gets the total amount of ether that is buffered and waiting         to be staked underlying stETH.\"},\"getPooledEthByShares(uint256)\":{\"notice\":\"Calculates the amount of stETH tokens an amount of stETH shares         are currently worth.\"},\"getSharesByPooledEth(uint256)\":{\"notice\":\"Calculates the amount of stETH shares an amount of stETH tokens         are currently worth.\"},\"getTotalPooledEther()\":{\"notice\":\"Gets the total amount of pooled ether underlying stETH.\"},\"getTotalShares()\":{\"notice\":\"Gets the total amount of stETH shares.\"},\"name()\":{\"notice\":\"Gets the token's name.\"},\"sharesOf(address)\":{\"notice\":\"Gets the amount of shares owned by an account.\"},\"submit(address)\":{\"notice\":\"Submits ether to stETH to be staked.\"},\"symbol()\":{\"notice\":\"Gets the token's symbol.\"},\"totalSupply()\":{\"notice\":\"Gets the token's total supply.\"},\"transfer(address,uint256)\":{\"notice\":\"Transfers tokens from the sender's account to another account.\"},\"transferFrom(address,address,uint256)\":{\"notice\":\"Transfers tokens from an owner to a recipient. This draws from         the sender's allowance.\"},\"transferShares(address,uint256)\":{\"notice\":\"Transfers stETH shares from the caller to a recipient.\"},\"transferSharesFrom(address,address,uint256)\":{\"notice\":\"Transfers stETH shares from an owner to a recipient. This draws         from the spender's allowance.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/ILido.sol\":\"ILido\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/ILido.sol\":{\"keccak256\":\"0x4e281fcc11a2512234c3ca7fb3dd00708bfb78cea39a7cbd911f2a70812925e6\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8db577a2a335ebc7011a7e413abd0a78010e85b1573a26218999e335280f3ba3\",\"dweb:/ipfs/QmQrjdiCvNUjDvEHyHH2Wmo8zRN7H3LLRuvrdftP7pc5kE\"]}},\"version\":1}";
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
                readonly name: "getBufferedEther";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_sharesAmount";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "getPooledEthByShares";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_ethAmount";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "getSharesByPooledEth";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "getTotalPooledEther";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "getTotalShares";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
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
                    readonly internalType: "address";
                    readonly name: "_account";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "sharesOf";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_referral";
                    readonly type: "address";
                }];
                readonly stateMutability: "payable";
                readonly type: "function";
                readonly name: "submit";
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
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_recipient";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_sharesAmount";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "transferShares";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_sender";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "_recipient";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_sharesAmount";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "transferSharesFrom";
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
                    readonly "getBufferedEther()": {
                        readonly returns: {
                            readonly _0: "The total amount of buffered ether.";
                        };
                    };
                    readonly "getPooledEthByShares(uint256)": {
                        readonly params: {
                            readonly _sharesAmount: "The amount of stETH shares to convert.";
                        };
                        readonly returns: {
                            readonly _0: "The amount of stETH tokens that the stETH shares are worth.";
                        };
                    };
                    readonly "getSharesByPooledEth(uint256)": {
                        readonly params: {
                            readonly _ethAmount: "The amount of stETH tokens to convert.";
                        };
                        readonly returns: {
                            readonly _0: "The amount of stETH shares that the stETH tokens are worth.";
                        };
                    };
                    readonly "getTotalPooledEther()": {
                        readonly returns: {
                            readonly _0: "The total amount of pooled ether.";
                        };
                    };
                    readonly "getTotalShares()": {
                        readonly returns: {
                            readonly _0: "The total amount of stETH shares.";
                        };
                    };
                    readonly "name()": {
                        readonly returns: {
                            readonly _0: "The token's name.";
                        };
                    };
                    readonly "sharesOf(address)": {
                        readonly params: {
                            readonly _account: "The owner of the shares.";
                        };
                    };
                    readonly "submit(address)": {
                        readonly params: {
                            readonly _referral: "The referral address that should get credit in Lido's        referral program.";
                        };
                        readonly returns: {
                            readonly _0: "The amount of stETH shares that were minted.";
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
                    readonly "transferShares(address,uint256)": {
                        readonly params: {
                            readonly _recipient: "The recipient of the tokens.";
                            readonly _sharesAmount: "The amount of stETH shares that will be transferred.";
                        };
                        readonly returns: {
                            readonly _0: "The amount of stETH tokens that were transferred.";
                        };
                    };
                    readonly "transferSharesFrom(address,address,uint256)": {
                        readonly params: {
                            readonly _recipient: "The recipient of the tokens.";
                            readonly _sender: "The owner of the tokens.";
                            readonly _sharesAmount: "The amount of tokens that will be transferred.";
                        };
                        readonly returns: {
                            readonly _0: "The amount of stETH tokens transferred.";
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
                    readonly "getBufferedEther()": {
                        readonly notice: "Gets the total amount of ether that is buffered and waiting         to be staked underlying stETH.";
                    };
                    readonly "getPooledEthByShares(uint256)": {
                        readonly notice: "Calculates the amount of stETH tokens an amount of stETH shares         are currently worth.";
                    };
                    readonly "getSharesByPooledEth(uint256)": {
                        readonly notice: "Calculates the amount of stETH shares an amount of stETH tokens         are currently worth.";
                    };
                    readonly "getTotalPooledEther()": {
                        readonly notice: "Gets the total amount of pooled ether underlying stETH.";
                    };
                    readonly "getTotalShares()": {
                        readonly notice: "Gets the total amount of stETH shares.";
                    };
                    readonly "name()": {
                        readonly notice: "Gets the token's name.";
                    };
                    readonly "sharesOf(address)": {
                        readonly notice: "Gets the amount of shares owned by an account.";
                    };
                    readonly "submit(address)": {
                        readonly notice: "Submits ether to stETH to be staked.";
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
                    readonly "transferShares(address,uint256)": {
                        readonly notice: "Transfers stETH shares from the caller to a recipient.";
                    };
                    readonly "transferSharesFrom(address,address,uint256)": {
                        readonly notice: "Transfers stETH shares from an owner to a recipient. This draws         from the spender's allowance.";
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
                readonly "contracts/src/interfaces/ILido.sol": "ILido";
            };
            readonly libraries: {};
        };
        readonly sources: {
            readonly "contracts/src/interfaces/IERC20.sol": {
                readonly keccak256: "0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9";
                readonly urls: readonly ["bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac", "dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/ILido.sol": {
                readonly keccak256: "0x4e281fcc11a2512234c3ca7fb3dd00708bfb78cea39a7cbd911f2a70812925e6";
                readonly urls: readonly ["bzz-raw://8db577a2a335ebc7011a7e413abd0a78010e85b1573a26218999e335280f3ba3", "dweb:/ipfs/QmQrjdiCvNUjDvEHyHH2Wmo8zRN7H3LLRuvrdftP7pc5kE"];
                readonly license: "Apache-2.0";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "contracts/src/interfaces/ILido.sol";
        readonly id: 11974;
        readonly exportedSymbols: {
            readonly IERC20: readonly [10319];
            readonly ILido: readonly [11973];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:2877:97";
        readonly nodes: readonly [{
            readonly id: 11896;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:23:97";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 11898;
            readonly nodeType: "ImportDirective";
            readonly src: "64:38:97";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IERC20.sol";
            readonly file: "./IERC20.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 11974;
            readonly sourceUnit: 10320;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 11897;
                    readonly name: "IERC20";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 10319;
                    readonly src: "73:6:97";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 11973;
            readonly nodeType: "ContractDefinition";
            readonly src: "104:2811:97";
            readonly nodes: readonly [{
                readonly id: 11908;
                readonly nodeType: "FunctionDefinition";
                readonly src: "362:70:97";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11901;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "136:221:97";
                    readonly text: "@notice Submits ether to stETH to be staked.\n @param _referral The referral address that should get credit in Lido's\n        referral program.\n @return The amount of stETH shares that were minted.";
                };
                readonly functionSelector: "a1903eab";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "submit";
                readonly nameLocation: "371:6:97";
                readonly parameters: {
                    readonly id: 11904;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11903;
                        readonly mutability: "mutable";
                        readonly name: "_referral";
                        readonly nameLocation: "386:9:97";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11908;
                        readonly src: "378:17:97";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 11902;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "378:7:97";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "377:19:97";
                };
                readonly returnParameters: {
                    readonly id: 11907;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11906;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11908;
                        readonly src: "423:7:97";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11905;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "423:7:97";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "422:9:97";
                };
                readonly scope: 11973;
                readonly stateMutability: "payable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 11918;
                readonly nodeType: "FunctionDefinition";
                readonly src: "712:116:97";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11909;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "438:269:97";
                    readonly text: "@notice Transfers stETH shares from the caller to a recipient.\n @param _recipient The recipient of the tokens.\n @param _sharesAmount The amount of stETH shares that will be transferred.\n @return The amount of stETH tokens that were transferred.";
                };
                readonly functionSelector: "8fcb4e5b";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "transferShares";
                readonly nameLocation: "721:14:97";
                readonly parameters: {
                    readonly id: 11914;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11911;
                        readonly mutability: "mutable";
                        readonly name: "_recipient";
                        readonly nameLocation: "753:10:97";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11918;
                        readonly src: "745:18:97";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 11910;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "745:7:97";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11913;
                        readonly mutability: "mutable";
                        readonly name: "_sharesAmount";
                        readonly nameLocation: "781:13:97";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11918;
                        readonly src: "773:21:97";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11912;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "773:7:97";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "735:65:97";
                };
                readonly returnParameters: {
                    readonly id: 11917;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11916;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11918;
                        readonly src: "819:7:97";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11915;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "819:7:97";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "818:9:97";
                };
                readonly scope: 11973;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 11930;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1195:145:97";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11919;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "834:356:97";
                    readonly text: "@notice Transfers stETH shares from an owner to a recipient. This draws\n         from the spender's allowance.\n @param _sender The owner of the tokens.\n @param _recipient The recipient of the tokens.\n @param _sharesAmount The amount of tokens that will be transferred.\n @return The amount of stETH tokens transferred.";
                };
                readonly functionSelector: "6d780459";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "transferSharesFrom";
                readonly nameLocation: "1204:18:97";
                readonly parameters: {
                    readonly id: 11926;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11921;
                        readonly mutability: "mutable";
                        readonly name: "_sender";
                        readonly nameLocation: "1240:7:97";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11930;
                        readonly src: "1232:15:97";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 11920;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1232:7:97";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11923;
                        readonly mutability: "mutable";
                        readonly name: "_recipient";
                        readonly nameLocation: "1265:10:97";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11930;
                        readonly src: "1257:18:97";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 11922;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1257:7:97";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11925;
                        readonly mutability: "mutable";
                        readonly name: "_sharesAmount";
                        readonly nameLocation: "1293:13:97";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11930;
                        readonly src: "1285:21:97";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11924;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1285:7:97";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1222:90:97";
                };
                readonly returnParameters: {
                    readonly id: 11929;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11928;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11930;
                        readonly src: "1331:7:97";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11927;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1331:7:97";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1330:9:97";
                };
                readonly scope: 11973;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 11938;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1604:96:97";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11931;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1346:253:97";
                    readonly text: "@notice Calculates the amount of stETH shares an amount of stETH tokens\n         are currently worth.\n @param _ethAmount The amount of stETH tokens to convert.\n @return The amount of stETH shares that the stETH tokens are worth.";
                };
                readonly functionSelector: "19208451";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getSharesByPooledEth";
                readonly nameLocation: "1613:20:97";
                readonly parameters: {
                    readonly id: 11934;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11933;
                        readonly mutability: "mutable";
                        readonly name: "_ethAmount";
                        readonly nameLocation: "1651:10:97";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11938;
                        readonly src: "1643:18:97";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11932;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1643:7:97";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1633:34:97";
                };
                readonly returnParameters: {
                    readonly id: 11937;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11936;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11938;
                        readonly src: "1691:7:97";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11935;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1691:7:97";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1690:9:97";
                };
                readonly scope: 11973;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 11946;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1967:99:97";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11939;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1706:256:97";
                    readonly text: "@notice Calculates the amount of stETH tokens an amount of stETH shares\n         are currently worth.\n @param _sharesAmount The amount of stETH shares to convert.\n @return The amount of stETH tokens that the stETH shares are worth.";
                };
                readonly functionSelector: "7a28fb88";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getPooledEthByShares";
                readonly nameLocation: "1976:20:97";
                readonly parameters: {
                    readonly id: 11942;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11941;
                        readonly mutability: "mutable";
                        readonly name: "_sharesAmount";
                        readonly nameLocation: "2014:13:97";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11946;
                        readonly src: "2006:21:97";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11940;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2006:7:97";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1996:37:97";
                };
                readonly returnParameters: {
                    readonly id: 11945;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11944;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11946;
                        readonly src: "2057:7:97";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11943;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2057:7:97";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2056:9:97";
                };
                readonly scope: 11973;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 11952;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2247:60:97";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11947;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2072:170:97";
                    readonly text: "@notice Gets the total amount of ether that is buffered and waiting\n         to be staked underlying stETH.\n @return The total amount of buffered ether.";
                };
                readonly functionSelector: "47b714e0";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getBufferedEther";
                readonly nameLocation: "2256:16:97";
                readonly parameters: {
                    readonly id: 11948;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2272:2:97";
                };
                readonly returnParameters: {
                    readonly id: 11951;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11950;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11952;
                        readonly src: "2298:7:97";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11949;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2298:7:97";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2297:9:97";
                };
                readonly scope: 11973;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 11958;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2435:63:97";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11953;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2313:117:97";
                    readonly text: "@notice Gets the total amount of pooled ether underlying stETH.\n @return The total amount of pooled ether.";
                };
                readonly functionSelector: "37cfdaca";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getTotalPooledEther";
                readonly nameLocation: "2444:19:97";
                readonly parameters: {
                    readonly id: 11954;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2463:2:97";
                };
                readonly returnParameters: {
                    readonly id: 11957;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11956;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11958;
                        readonly src: "2489:7:97";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11955;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2489:7:97";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2488:9:97";
                };
                readonly scope: 11973;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 11964;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2609:58:97";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11959;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2504:100:97";
                    readonly text: "@notice Gets the total amount of stETH shares.\n @return The total amount of stETH shares.";
                };
                readonly functionSelector: "d5002f2e";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getTotalShares";
                readonly nameLocation: "2618:14:97";
                readonly parameters: {
                    readonly id: 11960;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2632:2:97";
                };
                readonly returnParameters: {
                    readonly id: 11963;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11962;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11964;
                        readonly src: "2658:7:97";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11961;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2658:7:97";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2657:9:97";
                };
                readonly scope: 11973;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 11972;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2845:68:97";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11965;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2673:107:97";
                    readonly text: "@notice Gets the amount of shares owned by an account.\n @param _account The owner of the shares.";
                };
                readonly functionSelector: "f5eb42dc";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "sharesOf";
                readonly nameLocation: "2854:8:97";
                readonly parameters: {
                    readonly id: 11968;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11967;
                        readonly mutability: "mutable";
                        readonly name: "_account";
                        readonly nameLocation: "2871:8:97";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11972;
                        readonly src: "2863:16:97";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 11966;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2863:7:97";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2862:18:97";
                };
                readonly returnParameters: {
                    readonly id: 11971;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11970;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11972;
                        readonly src: "2904:7:97";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11969;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2904:7:97";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2903:9:97";
                };
                readonly scope: 11973;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 11899;
                    readonly name: "IERC20";
                    readonly nameLocations: readonly ["123:6:97"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 10319;
                    readonly src: "123:6:97";
                };
                readonly id: 11900;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "123:6:97";
            }];
            readonly canonicalName: "ILido";
            readonly contractDependencies: readonly [];
            readonly contractKind: "interface";
            readonly fullyImplemented: false;
            readonly linearizedBaseContracts: readonly [11973, 10319];
            readonly name: "ILido";
            readonly nameLocation: "114:5:97";
            readonly scope: 11974;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [10235, 10244];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 97;
};
//# sourceMappingURL=ILido.d.ts.map