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
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getBufferedEther\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_sharesAmount\",\"type\":\"uint256\"}],\"name\":\"getPooledEthByShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_ethAmount\",\"type\":\"uint256\"}],\"name\":\"getSharesByPooledEth\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getTotalPooledEther\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getTotalShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_account\",\"type\":\"address\"}],\"name\":\"sharesOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_referral\",\"type\":\"address\"}],\"name\":\"submit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_sharesAmount\",\"type\":\"uint256\"}],\"name\":\"transferShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_sender\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_sharesAmount\",\"type\":\"uint256\"}],\"name\":\"transferSharesFrom\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"allowance(address,address)\":{\"params\":{\"owner\":\"The owner of the tokens.\",\"spender\":\"The spender of the tokens.\"},\"returns\":{\"_0\":\"The allowance of the spender for the owner.\"}},\"approve(address,uint256)\":{\"params\":{\"amount\":\"The new allowance of the spender.\",\"spender\":\"The account with the allowance.\"},\"returns\":{\"_0\":\"A flag indicating whether or not the approval succeeded.\"}},\"balanceOf(address)\":{\"params\":{\"account\":\"The owner of the tokens.\"},\"returns\":{\"_0\":\"The account's balance.\"}},\"decimals()\":{\"returns\":{\"_0\":\"The token's decimals.\"}},\"getBufferedEther()\":{\"returns\":{\"_0\":\"The total amount of buffered ether.\"}},\"getPooledEthByShares(uint256)\":{\"params\":{\"_sharesAmount\":\"The amount of stETH shares to convert.\"},\"returns\":{\"_0\":\"The amount of stETH tokens that the stETH shares are worth.\"}},\"getSharesByPooledEth(uint256)\":{\"params\":{\"_ethAmount\":\"The amount of stETH tokens to convert.\"},\"returns\":{\"_0\":\"The amount of stETH shares that the stETH tokens are worth.\"}},\"getTotalPooledEther()\":{\"returns\":{\"_0\":\"The total amount of pooled ether.\"}},\"getTotalShares()\":{\"returns\":{\"_0\":\"The total amount of stETH shares.\"}},\"name()\":{\"returns\":{\"_0\":\"The token's name.\"}},\"sharesOf(address)\":{\"params\":{\"_account\":\"The owner of the shares.\"}},\"submit(address)\":{\"params\":{\"_referral\":\"The referral address that should get credit in Lido's        referral program.\"},\"returns\":{\"_0\":\"The amount of stETH shares that were minted.\"}},\"symbol()\":{\"returns\":{\"_0\":\"The token's symbol.\"}},\"totalSupply()\":{\"returns\":{\"_0\":\"The token's total supply.\"}},\"transfer(address,uint256)\":{\"params\":{\"amount\":\"The amount of tokens that will be transferred.\",\"to\":\"The recipient of the tokens.\"},\"returns\":{\"_0\":\"A flag indicating whether or not the transfer succeeded.\"}},\"transferFrom(address,address,uint256)\":{\"params\":{\"amount\":\"The amount of tokens that will be transferred.\",\"from\":\"The owner of the tokens.\",\"to\":\"The recipient of the tokens.\"},\"returns\":{\"_0\":\"A flag indicating whether or not the transfer succeeded.\"}},\"transferShares(address,uint256)\":{\"params\":{\"_recipient\":\"The recipient of the tokens.\",\"_sharesAmount\":\"The amount of stETH shares that will be transferred.\"},\"returns\":{\"_0\":\"The amount of stETH tokens that were transferred.\"}},\"transferSharesFrom(address,address,uint256)\":{\"params\":{\"_recipient\":\"The recipient of the tokens.\",\"_sender\":\"The owner of the tokens.\",\"_sharesAmount\":\"The amount of tokens that will be transferred.\"},\"returns\":{\"_0\":\"The amount of stETH tokens transferred.\"}}},\"version\":1},\"userdoc\":{\"events\":{\"Approval(address,address,uint256)\":{\"notice\":\"Emitted when an owner changes the approval for a spender.\"},\"Transfer(address,address,uint256)\":{\"notice\":\"Emitted when tokens are transferred from one account to another.\"}},\"kind\":\"user\",\"methods\":{\"allowance(address,address)\":{\"notice\":\"Gets the allowance of a spender for an owner.\"},\"approve(address,uint256)\":{\"notice\":\"Updates the allowance of a spender on behalf of the sender.\"},\"balanceOf(address)\":{\"notice\":\"Gets the balance of an account.\"},\"decimals()\":{\"notice\":\"Gets the token's decimals.\"},\"getBufferedEther()\":{\"notice\":\"Gets the total amount of ether that is buffered and waiting         to be staked underlying stETH.\"},\"getPooledEthByShares(uint256)\":{\"notice\":\"Calculates the amount of stETH tokens an amount of stETH shares         are currently worth.\"},\"getSharesByPooledEth(uint256)\":{\"notice\":\"Calculates the amount of stETH shares an amount of stETH tokens         are currently worth.\"},\"getTotalPooledEther()\":{\"notice\":\"Gets the total amount of pooled ether underlying stETH.\"},\"getTotalShares()\":{\"notice\":\"Gets the total amount of stETH shares.\"},\"name()\":{\"notice\":\"Gets the token's name.\"},\"sharesOf(address)\":{\"notice\":\"Gets the amount of shares owned by an account.\"},\"submit(address)\":{\"notice\":\"Submits ether to stETH to be staked.\"},\"symbol()\":{\"notice\":\"Gets the token's symbol.\"},\"totalSupply()\":{\"notice\":\"Gets the token's total supply.\"},\"transfer(address,uint256)\":{\"notice\":\"Transfers tokens from the sender's account to another account.\"},\"transferFrom(address,address,uint256)\":{\"notice\":\"Transfers tokens from an owner to a recipient. This draws from         the sender's allowance.\"},\"transferShares(address,uint256)\":{\"notice\":\"Transfers stETH shares from the caller to a recipient.\"},\"transferSharesFrom(address,address,uint256)\":{\"notice\":\"Transfers stETH shares from an owner to a recipient. This draws         from the spender's allowance.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/ILido.sol\":\"ILido\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/ILido.sol\":{\"keccak256\":\"0x4e281fcc11a2512234c3ca7fb3dd00708bfb78cea39a7cbd911f2a70812925e6\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8db577a2a335ebc7011a7e413abd0a78010e85b1573a26218999e335280f3ba3\",\"dweb:/ipfs/QmQrjdiCvNUjDvEHyHH2Wmo8zRN7H3LLRuvrdftP7pc5kE\"]}},\"version\":1}";
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
            readonly remappings: readonly ["@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/", "ds-test/=lib/forge-std/lib/ds-test/src/", "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/", "forge-std/=lib/forge-std/src/", "openzeppelin-contracts/=lib/openzeppelin-contracts/", "openzeppelin/=lib/openzeppelin-contracts/contracts/", "solmate/=lib/solmate/src/"];
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
        readonly id: 11634;
        readonly exportedSymbols: {
            readonly IERC20: readonly [9980];
            readonly ILido: readonly [11633];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:2877:95";
        readonly nodes: readonly [{
            readonly id: 11556;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:23:95";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 11558;
            readonly nodeType: "ImportDirective";
            readonly src: "64:38:95";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IERC20.sol";
            readonly file: "./IERC20.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 11634;
            readonly sourceUnit: 9981;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 11557;
                    readonly name: "IERC20";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 9980;
                    readonly src: "73:6:95";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 11633;
            readonly nodeType: "ContractDefinition";
            readonly src: "104:2811:95";
            readonly nodes: readonly [{
                readonly id: 11568;
                readonly nodeType: "FunctionDefinition";
                readonly src: "362:70:95";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11561;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "136:221:95";
                    readonly text: "@notice Submits ether to stETH to be staked.\n @param _referral The referral address that should get credit in Lido's\n        referral program.\n @return The amount of stETH shares that were minted.";
                };
                readonly functionSelector: "a1903eab";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "submit";
                readonly nameLocation: "371:6:95";
                readonly parameters: {
                    readonly id: 11564;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11563;
                        readonly mutability: "mutable";
                        readonly name: "_referral";
                        readonly nameLocation: "386:9:95";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11568;
                        readonly src: "378:17:95";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 11562;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "378:7:95";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "377:19:95";
                };
                readonly returnParameters: {
                    readonly id: 11567;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11566;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11568;
                        readonly src: "423:7:95";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11565;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "423:7:95";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "422:9:95";
                };
                readonly scope: 11633;
                readonly stateMutability: "payable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 11578;
                readonly nodeType: "FunctionDefinition";
                readonly src: "712:116:95";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11569;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "438:269:95";
                    readonly text: "@notice Transfers stETH shares from the caller to a recipient.\n @param _recipient The recipient of the tokens.\n @param _sharesAmount The amount of stETH shares that will be transferred.\n @return The amount of stETH tokens that were transferred.";
                };
                readonly functionSelector: "8fcb4e5b";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "transferShares";
                readonly nameLocation: "721:14:95";
                readonly parameters: {
                    readonly id: 11574;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11571;
                        readonly mutability: "mutable";
                        readonly name: "_recipient";
                        readonly nameLocation: "753:10:95";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11578;
                        readonly src: "745:18:95";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 11570;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "745:7:95";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11573;
                        readonly mutability: "mutable";
                        readonly name: "_sharesAmount";
                        readonly nameLocation: "781:13:95";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11578;
                        readonly src: "773:21:95";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11572;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "773:7:95";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "735:65:95";
                };
                readonly returnParameters: {
                    readonly id: 11577;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11576;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11578;
                        readonly src: "819:7:95";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11575;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "819:7:95";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "818:9:95";
                };
                readonly scope: 11633;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 11590;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1195:145:95";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11579;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "834:356:95";
                    readonly text: "@notice Transfers stETH shares from an owner to a recipient. This draws\n         from the spender's allowance.\n @param _sender The owner of the tokens.\n @param _recipient The recipient of the tokens.\n @param _sharesAmount The amount of tokens that will be transferred.\n @return The amount of stETH tokens transferred.";
                };
                readonly functionSelector: "6d780459";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "transferSharesFrom";
                readonly nameLocation: "1204:18:95";
                readonly parameters: {
                    readonly id: 11586;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11581;
                        readonly mutability: "mutable";
                        readonly name: "_sender";
                        readonly nameLocation: "1240:7:95";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11590;
                        readonly src: "1232:15:95";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 11580;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1232:7:95";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11583;
                        readonly mutability: "mutable";
                        readonly name: "_recipient";
                        readonly nameLocation: "1265:10:95";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11590;
                        readonly src: "1257:18:95";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 11582;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1257:7:95";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11585;
                        readonly mutability: "mutable";
                        readonly name: "_sharesAmount";
                        readonly nameLocation: "1293:13:95";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11590;
                        readonly src: "1285:21:95";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11584;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1285:7:95";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1222:90:95";
                };
                readonly returnParameters: {
                    readonly id: 11589;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11588;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11590;
                        readonly src: "1331:7:95";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11587;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1331:7:95";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1330:9:95";
                };
                readonly scope: 11633;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 11598;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1604:96:95";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11591;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1346:253:95";
                    readonly text: "@notice Calculates the amount of stETH shares an amount of stETH tokens\n         are currently worth.\n @param _ethAmount The amount of stETH tokens to convert.\n @return The amount of stETH shares that the stETH tokens are worth.";
                };
                readonly functionSelector: "19208451";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getSharesByPooledEth";
                readonly nameLocation: "1613:20:95";
                readonly parameters: {
                    readonly id: 11594;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11593;
                        readonly mutability: "mutable";
                        readonly name: "_ethAmount";
                        readonly nameLocation: "1651:10:95";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11598;
                        readonly src: "1643:18:95";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11592;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1643:7:95";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1633:34:95";
                };
                readonly returnParameters: {
                    readonly id: 11597;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11596;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11598;
                        readonly src: "1691:7:95";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11595;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1691:7:95";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1690:9:95";
                };
                readonly scope: 11633;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 11606;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1967:99:95";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11599;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1706:256:95";
                    readonly text: "@notice Calculates the amount of stETH tokens an amount of stETH shares\n         are currently worth.\n @param _sharesAmount The amount of stETH shares to convert.\n @return The amount of stETH tokens that the stETH shares are worth.";
                };
                readonly functionSelector: "7a28fb88";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getPooledEthByShares";
                readonly nameLocation: "1976:20:95";
                readonly parameters: {
                    readonly id: 11602;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11601;
                        readonly mutability: "mutable";
                        readonly name: "_sharesAmount";
                        readonly nameLocation: "2014:13:95";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11606;
                        readonly src: "2006:21:95";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11600;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2006:7:95";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1996:37:95";
                };
                readonly returnParameters: {
                    readonly id: 11605;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11604;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11606;
                        readonly src: "2057:7:95";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11603;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2057:7:95";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2056:9:95";
                };
                readonly scope: 11633;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 11612;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2247:60:95";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11607;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2072:170:95";
                    readonly text: "@notice Gets the total amount of ether that is buffered and waiting\n         to be staked underlying stETH.\n @return The total amount of buffered ether.";
                };
                readonly functionSelector: "47b714e0";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getBufferedEther";
                readonly nameLocation: "2256:16:95";
                readonly parameters: {
                    readonly id: 11608;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2272:2:95";
                };
                readonly returnParameters: {
                    readonly id: 11611;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11610;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11612;
                        readonly src: "2298:7:95";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11609;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2298:7:95";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2297:9:95";
                };
                readonly scope: 11633;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 11618;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2435:63:95";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11613;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2313:117:95";
                    readonly text: "@notice Gets the total amount of pooled ether underlying stETH.\n @return The total amount of pooled ether.";
                };
                readonly functionSelector: "37cfdaca";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getTotalPooledEther";
                readonly nameLocation: "2444:19:95";
                readonly parameters: {
                    readonly id: 11614;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2463:2:95";
                };
                readonly returnParameters: {
                    readonly id: 11617;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11616;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11618;
                        readonly src: "2489:7:95";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11615;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2489:7:95";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2488:9:95";
                };
                readonly scope: 11633;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 11624;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2609:58:95";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11619;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2504:100:95";
                    readonly text: "@notice Gets the total amount of stETH shares.\n @return The total amount of stETH shares.";
                };
                readonly functionSelector: "d5002f2e";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getTotalShares";
                readonly nameLocation: "2618:14:95";
                readonly parameters: {
                    readonly id: 11620;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2632:2:95";
                };
                readonly returnParameters: {
                    readonly id: 11623;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11622;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11624;
                        readonly src: "2658:7:95";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11621;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2658:7:95";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2657:9:95";
                };
                readonly scope: 11633;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 11632;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2845:68:95";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11625;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2673:107:95";
                    readonly text: "@notice Gets the amount of shares owned by an account.\n @param _account The owner of the shares.";
                };
                readonly functionSelector: "f5eb42dc";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "sharesOf";
                readonly nameLocation: "2854:8:95";
                readonly parameters: {
                    readonly id: 11628;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11627;
                        readonly mutability: "mutable";
                        readonly name: "_account";
                        readonly nameLocation: "2871:8:95";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11632;
                        readonly src: "2863:16:95";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 11626;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2863:7:95";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2862:18:95";
                };
                readonly returnParameters: {
                    readonly id: 11631;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11630;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11632;
                        readonly src: "2904:7:95";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11629;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2904:7:95";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2903:9:95";
                };
                readonly scope: 11633;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 11559;
                    readonly name: "IERC20";
                    readonly nameLocations: readonly ["123:6:95"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 9980;
                    readonly src: "123:6:95";
                };
                readonly id: 11560;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "123:6:95";
            }];
            readonly canonicalName: "ILido";
            readonly contractDependencies: readonly [];
            readonly contractKind: "interface";
            readonly fullyImplemented: false;
            readonly linearizedBaseContracts: readonly [11633, 9980];
            readonly name: "ILido";
            readonly nameLocation: "114:5:95";
            readonly scope: 11634;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [9896, 9905];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 95;
};
//# sourceMappingURL=ILido.d.ts.map