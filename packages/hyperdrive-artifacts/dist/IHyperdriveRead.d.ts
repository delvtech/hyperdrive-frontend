export declare const IHyperdriveRead: {
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
        readonly name: "baseToken";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
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
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_checkpointTime";
            readonly type: "uint256";
        }];
        readonly name: "getCheckpoint";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint128";
                readonly name: "vaultSharePrice";
                readonly type: "uint128";
            }];
            readonly internalType: "struct IHyperdrive.Checkpoint";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_checkpointTime";
            readonly type: "uint256";
        }];
        readonly name: "getCheckpointExposure";
        readonly outputs: readonly [{
            readonly internalType: "int256";
            readonly name: "";
            readonly type: "int256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getMarketState";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint128";
                readonly name: "shareReserves";
                readonly type: "uint128";
            }, {
                readonly internalType: "uint128";
                readonly name: "bondReserves";
                readonly type: "uint128";
            }, {
                readonly internalType: "uint128";
                readonly name: "longExposure";
                readonly type: "uint128";
            }, {
                readonly internalType: "uint128";
                readonly name: "longsOutstanding";
                readonly type: "uint128";
            }, {
                readonly internalType: "int128";
                readonly name: "shareAdjustment";
                readonly type: "int128";
            }, {
                readonly internalType: "uint128";
                readonly name: "shortsOutstanding";
                readonly type: "uint128";
            }, {
                readonly internalType: "uint128";
                readonly name: "longAverageMaturityTime";
                readonly type: "uint128";
            }, {
                readonly internalType: "uint128";
                readonly name: "shortAverageMaturityTime";
                readonly type: "uint128";
            }, {
                readonly internalType: "bool";
                readonly name: "isInitialized";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "isPaused";
                readonly type: "bool";
            }, {
                readonly internalType: "uint112";
                readonly name: "zombieBaseProceeds";
                readonly type: "uint112";
            }, {
                readonly internalType: "uint128";
                readonly name: "zombieShareReserves";
                readonly type: "uint128";
            }];
            readonly internalType: "struct IHyperdrive.MarketState";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getPoolConfig";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "contract IERC20";
                readonly name: "baseToken";
                readonly type: "address";
            }, {
                readonly internalType: "contract IERC20";
                readonly name: "vaultSharesToken";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "linkerFactory";
                readonly type: "address";
            }, {
                readonly internalType: "bytes32";
                readonly name: "linkerCodeHash";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint256";
                readonly name: "initialVaultSharePrice";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "minimumShareReserves";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "minimumTransactionAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "positionDuration";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "checkpointDuration";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "timeStretch";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "governance";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "feeCollector";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "sweepCollector";
                readonly type: "address";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "curve";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "flat";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "governanceLP";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "governanceZombie";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct IHyperdrive.Fees";
                readonly name: "fees";
                readonly type: "tuple";
            }];
            readonly internalType: "struct IHyperdrive.PoolConfig";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getPoolInfo";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "shareReserves";
                readonly type: "uint256";
            }, {
                readonly internalType: "int256";
                readonly name: "shareAdjustment";
                readonly type: "int256";
            }, {
                readonly internalType: "uint256";
                readonly name: "zombieBaseProceeds";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "zombieShareReserves";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "bondReserves";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "lpTotalSupply";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "vaultSharePrice";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "longsOutstanding";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "longAverageMaturityTime";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "shortsOutstanding";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "shortAverageMaturityTime";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "withdrawalSharesReadyToWithdraw";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "withdrawalSharesProceeds";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "lpSharePrice";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "longExposure";
                readonly type: "uint256";
            }];
            readonly internalType: "struct IHyperdrive.PoolInfo";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getUncollectedGovernanceFees";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getWithdrawPool";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint128";
                readonly name: "readyToWithdraw";
                readonly type: "uint128";
            }, {
                readonly internalType: "uint128";
                readonly name: "proceeds";
                readonly type: "uint128";
            }];
            readonly internalType: "struct IHyperdrive.WithdrawPool";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
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
        readonly name: "isApprovedForAll";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_account";
            readonly type: "address";
        }];
        readonly name: "isPauser";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256[]";
            readonly name: "_slots";
            readonly type: "uint256[]";
        }];
        readonly name: "load";
        readonly outputs: readonly [{
            readonly internalType: "bytes32[]";
            readonly name: "";
            readonly type: "bytes32[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
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
            readonly name: "owner";
            readonly type: "address";
        }];
        readonly name: "nonces";
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
        readonly name: "perTokenApprovals";
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
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "symbol";
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
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
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
        readonly name: "vaultSharesToken";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
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
        readonly "balanceOf(uint256,address)": "3656eec2";
        readonly "baseToken()": "c55dae63";
        readonly "decimals()": "313ce567";
        readonly "getCheckpoint(uint256)": "20fc4881";
        readonly "getCheckpointExposure(uint256)": "cf210e65";
        readonly "getMarketState()": "d8165743";
        readonly "getPoolConfig()": "b0d96580";
        readonly "getPoolInfo()": "60246c88";
        readonly "getUncollectedGovernanceFees()": "c69e16ad";
        readonly "getWithdrawPool()": "fba56008";
        readonly "isApprovedForAll(address,address)": "e985e9c5";
        readonly "isPauser(address)": "46fbf68e";
        readonly "load(uint256[])": "becee9c3";
        readonly "name(uint256)": "00ad800c";
        readonly "nonces(address)": "7ecebe00";
        readonly "perTokenApprovals(uint256,address,address)": "21ff32a9";
        readonly "symbol(uint256)": "4e41a1fb";
        readonly "totalSupply(uint256)": "bd85b039";
        readonly "vaultSharesToken()": "0a4e1493";
    };
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"baseToken\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_checkpointTime\",\"type\":\"uint256\"}],\"name\":\"getCheckpoint\",\"outputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"vaultSharePrice\",\"type\":\"uint128\"}],\"internalType\":\"struct IHyperdrive.Checkpoint\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_checkpointTime\",\"type\":\"uint256\"}],\"name\":\"getCheckpointExposure\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getMarketState\",\"outputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"shareReserves\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"bondReserves\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longExposure\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longsOutstanding\",\"type\":\"uint128\"},{\"internalType\":\"int128\",\"name\":\"shareAdjustment\",\"type\":\"int128\"},{\"internalType\":\"uint128\",\"name\":\"shortsOutstanding\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longAverageMaturityTime\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"shortAverageMaturityTime\",\"type\":\"uint128\"},{\"internalType\":\"bool\",\"name\":\"isInitialized\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"},{\"internalType\":\"uint112\",\"name\":\"zombieBaseProceeds\",\"type\":\"uint112\"},{\"internalType\":\"uint128\",\"name\":\"zombieShareReserves\",\"type\":\"uint128\"}],\"internalType\":\"struct IHyperdrive.MarketState\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getPoolConfig\",\"outputs\":[{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"contract IERC20\",\"name\":\"vaultSharesToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"sweepCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolConfig\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getPoolInfo\",\"outputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"zombieBaseProceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"zombieShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"lpTotalSupply\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longAverageMaturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortAverageMaturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalSharesReadyToWithdraw\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalSharesProceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longExposure\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.PoolInfo\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getUncollectedGovernanceFees\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getWithdrawPool\",\"outputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"readyToWithdraw\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"proceeds\",\"type\":\"uint128\"}],\"internalType\":\"struct IHyperdrive.WithdrawPool\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_account\",\"type\":\"address\"}],\"name\":\"isPauser\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256[]\",\"name\":\"_slots\",\"type\":\"uint256[]\"}],\"name\":\"load\",\"outputs\":[{\"internalType\":\"bytes32[]\",\"name\":\"\",\"type\":\"bytes32[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"nonces\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"perTokenApprovals\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"vaultSharesToken\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"balanceOf(uint256,address)\":{\"params\":{\"owner\":\"The owner of the tokens.\",\"tokenId\":\"The sub-token ID.\"},\"returns\":{\"_0\":\"The balance of the owner.\"}},\"baseToken()\":{\"returns\":{\"_0\":\"The base token.\"}},\"decimals()\":{\"returns\":{\"_0\":\"The decimals of the MultiToken.\"}},\"getCheckpoint(uint256)\":{\"params\":{\"_checkpointTime\":\"The checkpoint time.\"},\"returns\":{\"_0\":\"The checkpoint.\"}},\"getCheckpointExposure(uint256)\":{\"params\":{\"_checkpointTime\":\"The checkpoint time.\"},\"returns\":{\"_0\":\"The checkpoint exposure.\"}},\"getMarketState()\":{\"returns\":{\"_0\":\"The market state.\"}},\"getPoolConfig()\":{\"returns\":{\"_0\":\"The pool configuration.\"}},\"getPoolInfo()\":{\"returns\":{\"_0\":\"The pool info.\"}},\"getUncollectedGovernanceFees()\":{\"returns\":{\"_0\":\"The amount of uncollected governance fees.\"}},\"getWithdrawPool()\":{\"returns\":{\"_0\":\"The withdrawal pool information.\"}},\"isApprovedForAll(address,address)\":{\"params\":{\"owner\":\"The owner of the tokens.\",\"spender\":\"The spender of the tokens.\"},\"returns\":{\"_0\":\"The approval-for-all status of the spender for the owner.\"}},\"isPauser(address)\":{\"params\":{\"_account\":\"The account to check.\"},\"returns\":{\"_0\":\"The account's pauser status.\"}},\"load(uint256[])\":{\"details\":\"This serves as a generalized getter that allows consumers to create      custom getters to suit their purposes.\",\"params\":{\"_slots\":\"The storage slots to load.\"},\"returns\":{\"_0\":\"The values at the specified slots.\"}},\"name(uint256)\":{\"params\":{\"tokenId\":\"The sub-token ID.\"},\"returns\":{\"_0\":\"The name of the MultiToken.\"}},\"nonces(address)\":{\"params\":{\"owner\":\"The owner of the tokens.\"},\"returns\":{\"_0\":\"The permit nonce of the owner.\"}},\"perTokenApprovals(uint256,address,address)\":{\"params\":{\"owner\":\"The owner of the tokens.\",\"spender\":\"The spender of the tokens.\",\"tokenId\":\"The sub-token ID.\"},\"returns\":{\"_0\":\"The allowance of the spender for the owner.\"}},\"symbol(uint256)\":{\"params\":{\"tokenId\":\"The sub-token ID.\"},\"returns\":{\"_0\":\"The symbol of the MultiToken.\"}},\"totalSupply(uint256)\":{\"params\":{\"tokenId\":\"The sub-token ID.\"},\"returns\":{\"_0\":\"The total supply of the MultiToken.\"}},\"vaultSharesToken()\":{\"returns\":{\"_0\":\"The vault shares token.\"}}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"balanceOf(uint256,address)\":{\"notice\":\"Gets the balance of a spender for a sub-token.\"},\"baseToken()\":{\"notice\":\"Gets the Hyperdrive pool's base token.\"},\"decimals()\":{\"notice\":\"Gets the decimals of the MultiToken.\"},\"getCheckpoint(uint256)\":{\"notice\":\"Gets one of the pool's checkpoints.\"},\"getCheckpointExposure(uint256)\":{\"notice\":\"Gets the pool's exposure from a checkpoint. This is the number         of non-netted longs in the checkpoint.\"},\"getMarketState()\":{\"notice\":\"Gets the pool's state relating to the Hyperdrive market.\"},\"getPoolConfig()\":{\"notice\":\"Gets the pool's configuration parameters.\"},\"getPoolInfo()\":{\"notice\":\"Gets info about the pool's reserves and other state that is         important to evaluate potential trades.\"},\"getUncollectedGovernanceFees()\":{\"notice\":\"Gets the amount of governance fees that haven't been collected.\"},\"getWithdrawPool()\":{\"notice\":\"Gets information relating to the pool's withdrawal pool. This         includes the total proceeds underlying the withdrawal pool and         the number of withdrawal shares ready to be redeemed.\"},\"isApprovedForAll(address,address)\":{\"notice\":\"Gets the approval-for-all status of a spender on behalf of an         owner.\"},\"isPauser(address)\":{\"notice\":\"Gets an account's pauser status within the Hyperdrive pool.\"},\"load(uint256[])\":{\"notice\":\"Gets the storage values at the specified slots.\"},\"name(uint256)\":{\"notice\":\"Gets the name of the MultiToken.\"},\"nonces(address)\":{\"notice\":\"Gets the permit nonce for an account.\"},\"perTokenApprovals(uint256,address,address)\":{\"notice\":\"Gets the allowance of a spender for a sub-token.\"},\"symbol(uint256)\":{\"notice\":\"Gets the symbol of the MultiToken.\"},\"totalSupply(uint256)\":{\"notice\":\"Gets the total supply of the MultiToken.\"},\"vaultSharesToken()\":{\"notice\":\"Gets the Hyperdrive pool's vault shares token.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IHyperdriveRead.sol\":\"IHyperdriveRead\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xc293b4229674624983294b673d6fefce53ed8f6f3d9c6bbcb34da25f42ef2c71\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://084f43e7c42615faabfb6ae9100a8cea6bf9846eb1c433dc08fe634c59cadcaf\",\"dweb:/ipfs/QmXW3GgcbQQg5xnfAC6RT2KBL9ii8s1jwbDtZywWXFydpm\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x68adcd293ff25711add1698b6024faa45beec01eb044bd0103d3020aa96d856e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0e0f5e35a7d2c656e249394d25896e5adfb9af3e210c01b9ef5fa81d25a45e24\",\"dweb:/ipfs/QmbLASezHPWHcbodqSfw3Qh9NzqekqVPM8FhCXKGTCXL1h\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x812ccb32dff907e8614c89a65196eec239eceb3e63f9f14dde2b2269c75a67c0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://da5f2ce974bfcd8185342c121c879ba5aef23e1e4e7b36cf9fcba68296b8892c\",\"dweb:/ipfs/QmSho3PWs9bzejTYYjySuXcH9tVP4xFnkbUmSzQA54g8eG\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86\",\"dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]}},\"version\":1}";
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
                readonly name: "baseToken";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
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
                    readonly internalType: "uint256";
                    readonly name: "_checkpointTime";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "getCheckpoint";
                readonly outputs: readonly [{
                    readonly internalType: "struct IHyperdrive.Checkpoint";
                    readonly name: "";
                    readonly type: "tuple";
                    readonly components: readonly [{
                        readonly internalType: "uint128";
                        readonly name: "vaultSharePrice";
                        readonly type: "uint128";
                    }];
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_checkpointTime";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "getCheckpointExposure";
                readonly outputs: readonly [{
                    readonly internalType: "int256";
                    readonly name: "";
                    readonly type: "int256";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "getMarketState";
                readonly outputs: readonly [{
                    readonly internalType: "struct IHyperdrive.MarketState";
                    readonly name: "";
                    readonly type: "tuple";
                    readonly components: readonly [{
                        readonly internalType: "uint128";
                        readonly name: "shareReserves";
                        readonly type: "uint128";
                    }, {
                        readonly internalType: "uint128";
                        readonly name: "bondReserves";
                        readonly type: "uint128";
                    }, {
                        readonly internalType: "uint128";
                        readonly name: "longExposure";
                        readonly type: "uint128";
                    }, {
                        readonly internalType: "uint128";
                        readonly name: "longsOutstanding";
                        readonly type: "uint128";
                    }, {
                        readonly internalType: "int128";
                        readonly name: "shareAdjustment";
                        readonly type: "int128";
                    }, {
                        readonly internalType: "uint128";
                        readonly name: "shortsOutstanding";
                        readonly type: "uint128";
                    }, {
                        readonly internalType: "uint128";
                        readonly name: "longAverageMaturityTime";
                        readonly type: "uint128";
                    }, {
                        readonly internalType: "uint128";
                        readonly name: "shortAverageMaturityTime";
                        readonly type: "uint128";
                    }, {
                        readonly internalType: "bool";
                        readonly name: "isInitialized";
                        readonly type: "bool";
                    }, {
                        readonly internalType: "bool";
                        readonly name: "isPaused";
                        readonly type: "bool";
                    }, {
                        readonly internalType: "uint112";
                        readonly name: "zombieBaseProceeds";
                        readonly type: "uint112";
                    }, {
                        readonly internalType: "uint128";
                        readonly name: "zombieShareReserves";
                        readonly type: "uint128";
                    }];
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "getPoolConfig";
                readonly outputs: readonly [{
                    readonly internalType: "struct IHyperdrive.PoolConfig";
                    readonly name: "";
                    readonly type: "tuple";
                    readonly components: readonly [{
                        readonly internalType: "contract IERC20";
                        readonly name: "baseToken";
                        readonly type: "address";
                    }, {
                        readonly internalType: "contract IERC20";
                        readonly name: "vaultSharesToken";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "linkerFactory";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bytes32";
                        readonly name: "linkerCodeHash";
                        readonly type: "bytes32";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "initialVaultSharePrice";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "minimumShareReserves";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "minimumTransactionAmount";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "positionDuration";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "checkpointDuration";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "timeStretch";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "address";
                        readonly name: "governance";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "feeCollector";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "sweepCollector";
                        readonly type: "address";
                    }, {
                        readonly internalType: "struct IHyperdrive.Fees";
                        readonly name: "fees";
                        readonly type: "tuple";
                        readonly components: readonly [{
                            readonly internalType: "uint256";
                            readonly name: "curve";
                            readonly type: "uint256";
                        }, {
                            readonly internalType: "uint256";
                            readonly name: "flat";
                            readonly type: "uint256";
                        }, {
                            readonly internalType: "uint256";
                            readonly name: "governanceLP";
                            readonly type: "uint256";
                        }, {
                            readonly internalType: "uint256";
                            readonly name: "governanceZombie";
                            readonly type: "uint256";
                        }];
                    }];
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "getPoolInfo";
                readonly outputs: readonly [{
                    readonly internalType: "struct IHyperdrive.PoolInfo";
                    readonly name: "";
                    readonly type: "tuple";
                    readonly components: readonly [{
                        readonly internalType: "uint256";
                        readonly name: "shareReserves";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "int256";
                        readonly name: "shareAdjustment";
                        readonly type: "int256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "zombieBaseProceeds";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "zombieShareReserves";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "bondReserves";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "lpTotalSupply";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "vaultSharePrice";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "longsOutstanding";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "longAverageMaturityTime";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "shortsOutstanding";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "shortAverageMaturityTime";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "withdrawalSharesReadyToWithdraw";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "withdrawalSharesProceeds";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "lpSharePrice";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "longExposure";
                        readonly type: "uint256";
                    }];
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "getUncollectedGovernanceFees";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "getWithdrawPool";
                readonly outputs: readonly [{
                    readonly internalType: "struct IHyperdrive.WithdrawPool";
                    readonly name: "";
                    readonly type: "tuple";
                    readonly components: readonly [{
                        readonly internalType: "uint128";
                        readonly name: "readyToWithdraw";
                        readonly type: "uint128";
                    }, {
                        readonly internalType: "uint128";
                        readonly name: "proceeds";
                        readonly type: "uint128";
                    }];
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
                    readonly internalType: "address";
                    readonly name: "_account";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "isPauser";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256[]";
                    readonly name: "_slots";
                    readonly type: "uint256[]";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "load";
                readonly outputs: readonly [{
                    readonly internalType: "bytes32[]";
                    readonly name: "";
                    readonly type: "bytes32[]";
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
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "vaultSharesToken";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
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
                    readonly "baseToken()": {
                        readonly returns: {
                            readonly _0: "The base token.";
                        };
                    };
                    readonly "decimals()": {
                        readonly returns: {
                            readonly _0: "The decimals of the MultiToken.";
                        };
                    };
                    readonly "getCheckpoint(uint256)": {
                        readonly params: {
                            readonly _checkpointTime: "The checkpoint time.";
                        };
                        readonly returns: {
                            readonly _0: "The checkpoint.";
                        };
                    };
                    readonly "getCheckpointExposure(uint256)": {
                        readonly params: {
                            readonly _checkpointTime: "The checkpoint time.";
                        };
                        readonly returns: {
                            readonly _0: "The checkpoint exposure.";
                        };
                    };
                    readonly "getMarketState()": {
                        readonly returns: {
                            readonly _0: "The market state.";
                        };
                    };
                    readonly "getPoolConfig()": {
                        readonly returns: {
                            readonly _0: "The pool configuration.";
                        };
                    };
                    readonly "getPoolInfo()": {
                        readonly returns: {
                            readonly _0: "The pool info.";
                        };
                    };
                    readonly "getUncollectedGovernanceFees()": {
                        readonly returns: {
                            readonly _0: "The amount of uncollected governance fees.";
                        };
                    };
                    readonly "getWithdrawPool()": {
                        readonly returns: {
                            readonly _0: "The withdrawal pool information.";
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
                    readonly "isPauser(address)": {
                        readonly params: {
                            readonly _account: "The account to check.";
                        };
                        readonly returns: {
                            readonly _0: "The account's pauser status.";
                        };
                    };
                    readonly "load(uint256[])": {
                        readonly details: "This serves as a generalized getter that allows consumers to create      custom getters to suit their purposes.";
                        readonly params: {
                            readonly _slots: "The storage slots to load.";
                        };
                        readonly returns: {
                            readonly _0: "The values at the specified slots.";
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
                    readonly "vaultSharesToken()": {
                        readonly returns: {
                            readonly _0: "The vault shares token.";
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
                    readonly "baseToken()": {
                        readonly notice: "Gets the Hyperdrive pool's base token.";
                    };
                    readonly "decimals()": {
                        readonly notice: "Gets the decimals of the MultiToken.";
                    };
                    readonly "getCheckpoint(uint256)": {
                        readonly notice: "Gets one of the pool's checkpoints.";
                    };
                    readonly "getCheckpointExposure(uint256)": {
                        readonly notice: "Gets the pool's exposure from a checkpoint. This is the number         of non-netted longs in the checkpoint.";
                    };
                    readonly "getMarketState()": {
                        readonly notice: "Gets the pool's state relating to the Hyperdrive market.";
                    };
                    readonly "getPoolConfig()": {
                        readonly notice: "Gets the pool's configuration parameters.";
                    };
                    readonly "getPoolInfo()": {
                        readonly notice: "Gets info about the pool's reserves and other state that is         important to evaluate potential trades.";
                    };
                    readonly "getUncollectedGovernanceFees()": {
                        readonly notice: "Gets the amount of governance fees that haven't been collected.";
                    };
                    readonly "getWithdrawPool()": {
                        readonly notice: "Gets information relating to the pool's withdrawal pool. This         includes the total proceeds underlying the withdrawal pool and         the number of withdrawal shares ready to be redeemed.";
                    };
                    readonly "isApprovedForAll(address,address)": {
                        readonly notice: "Gets the approval-for-all status of a spender on behalf of an         owner.";
                    };
                    readonly "isPauser(address)": {
                        readonly notice: "Gets an account's pauser status within the Hyperdrive pool.";
                    };
                    readonly "load(uint256[])": {
                        readonly notice: "Gets the storage values at the specified slots.";
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
                    readonly "vaultSharesToken()": {
                        readonly notice: "Gets the Hyperdrive pool's vault shares token.";
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
                readonly "contracts/src/interfaces/IHyperdriveRead.sol": "IHyperdriveRead";
            };
            readonly libraries: {};
        };
        readonly sources: {
            readonly "contracts/src/interfaces/IERC20.sol": {
                readonly keccak256: "0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9";
                readonly urls: readonly ["bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac", "dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdrive.sol": {
                readonly keccak256: "0xc293b4229674624983294b673d6fefce53ed8f6f3d9c6bbcb34da25f42ef2c71";
                readonly urls: readonly ["bzz-raw://084f43e7c42615faabfb6ae9100a8cea6bf9846eb1c433dc08fe634c59cadcaf", "dweb:/ipfs/QmXW3GgcbQQg5xnfAC6RT2KBL9ii8s1jwbDtZywWXFydpm"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveCore.sol": {
                readonly keccak256: "0x68adcd293ff25711add1698b6024faa45beec01eb044bd0103d3020aa96d856e";
                readonly urls: readonly ["bzz-raw://0e0f5e35a7d2c656e249394d25896e5adfb9af3e210c01b9ef5fa81d25a45e24", "dweb:/ipfs/QmbLASezHPWHcbodqSfw3Qh9NzqekqVPM8FhCXKGTCXL1h"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveEvents.sol": {
                readonly keccak256: "0x812ccb32dff907e8614c89a65196eec239eceb3e63f9f14dde2b2269c75a67c0";
                readonly urls: readonly ["bzz-raw://da5f2ce974bfcd8185342c121c879ba5aef23e1e4e7b36cf9fcba68296b8892c", "dweb:/ipfs/QmSho3PWs9bzejTYYjySuXcH9tVP4xFnkbUmSzQA54g8eG"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveRead.sol": {
                readonly keccak256: "0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045";
                readonly urls: readonly ["bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86", "dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiToken.sol": {
                readonly keccak256: "0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f";
                readonly urls: readonly ["bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7", "dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenCore.sol": {
                readonly keccak256: "0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501";
                readonly urls: readonly ["bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae", "dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenEvents.sol": {
                readonly keccak256: "0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb";
                readonly urls: readonly ["bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222", "dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenMetadata.sol": {
                readonly keccak256: "0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca";
                readonly urls: readonly ["bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3", "dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenRead.sol": {
                readonly keccak256: "0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0";
                readonly urls: readonly ["bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11", "dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR"];
                readonly license: "Apache-2.0";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "contracts/src/interfaces/IHyperdriveRead.sol";
        readonly id: 11526;
        readonly exportedSymbols: {
            readonly IHyperdrive: readonly [10676];
            readonly IHyperdriveRead: readonly [11525];
            readonly IMultiTokenRead: readonly [11865];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:2999:92";
        readonly nodes: readonly [{
            readonly id: 11437;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:23:92";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 11439;
            readonly nodeType: "ImportDirective";
            readonly src: "64:48:92";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IHyperdrive.sol";
            readonly file: "./IHyperdrive.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 11526;
            readonly sourceUnit: 10677;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 11438;
                    readonly name: "IHyperdrive";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 10676;
                    readonly src: "73:11:92";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 11441;
            readonly nodeType: "ImportDirective";
            readonly src: "113:56:92";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IMultiTokenRead.sol";
            readonly file: "./IMultiTokenRead.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 11526;
            readonly sourceUnit: 11866;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 11440;
                    readonly name: "IMultiTokenRead";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 11865;
                    readonly src: "122:15:92";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 11525;
            readonly nodeType: "ContractDefinition";
            readonly src: "171:2866:92";
            readonly nodes: readonly [{
                readonly id: 11449;
                readonly nodeType: "FunctionDefinition";
                readonly src: "309:53:92";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11444;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "222:82:92";
                    readonly text: "@notice Gets the Hyperdrive pool's base token.\n @return The base token.";
                };
                readonly functionSelector: "c55dae63";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "baseToken";
                readonly nameLocation: "318:9:92";
                readonly parameters: {
                    readonly id: 11445;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "327:2:92";
                };
                readonly returnParameters: {
                    readonly id: 11448;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11447;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11449;
                        readonly src: "353:7:92";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 11446;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "353:7:92";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "352:9:92";
                };
                readonly scope: 11525;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 11455;
                readonly nodeType: "FunctionDefinition";
                readonly src: "471:60:92";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11450;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "368:98:92";
                    readonly text: "@notice Gets the Hyperdrive pool's vault shares token.\n @return The vault shares token.";
                };
                readonly functionSelector: "0a4e1493";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "vaultSharesToken";
                readonly nameLocation: "480:16:92";
                readonly parameters: {
                    readonly id: 11451;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "496:2:92";
                };
                readonly returnParameters: {
                    readonly id: 11454;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11453;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11455;
                        readonly src: "522:7:92";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 11452;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "522:7:92";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "521:9:92";
                };
                readonly scope: 11525;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 11464;
                readonly nodeType: "FunctionDefinition";
                readonly src: "673:116:92";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11456;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "537:131:92";
                    readonly text: "@notice Gets one of the pool's checkpoints.\n @param _checkpointTime The checkpoint time.\n @return The checkpoint.";
                };
                readonly functionSelector: "20fc4881";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getCheckpoint";
                readonly nameLocation: "682:13:92";
                readonly parameters: {
                    readonly id: 11459;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11458;
                        readonly mutability: "mutable";
                        readonly name: "_checkpointTime";
                        readonly nameLocation: "713:15:92";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11464;
                        readonly src: "705:23:92";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11457;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "705:7:92";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "695:39:92";
                };
                readonly returnParameters: {
                    readonly id: 11463;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11462;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11464;
                        readonly src: "758:29:92";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_Checkpoint_$10361_memory_ptr";
                            readonly typeString: "struct IHyperdrive.Checkpoint";
                        };
                        readonly typeName: {
                            readonly id: 11461;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 11460;
                                readonly name: "IHyperdrive.Checkpoint";
                                readonly nameLocations: readonly ["758:11:92", "770:10:92"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10361;
                                readonly src: "758:22:92";
                            };
                            readonly referencedDeclaration: 10361;
                            readonly src: "758:22:92";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Checkpoint_$10361_storage_ptr";
                                readonly typeString: "struct IHyperdrive.Checkpoint";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "757:31:92";
                };
                readonly scope: 11525;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 11472;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1022:101:92";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11465;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "795:222:92";
                    readonly text: "@notice Gets the pool's exposure from a checkpoint. This is the number\n         of non-netted longs in the checkpoint.\n @param _checkpointTime The checkpoint time.\n @return The checkpoint exposure.";
                };
                readonly functionSelector: "cf210e65";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getCheckpointExposure";
                readonly nameLocation: "1031:21:92";
                readonly parameters: {
                    readonly id: 11468;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11467;
                        readonly mutability: "mutable";
                        readonly name: "_checkpointTime";
                        readonly nameLocation: "1070:15:92";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11472;
                        readonly src: "1062:23:92";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11466;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1062:7:92";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1052:39:92";
                };
                readonly returnParameters: {
                    readonly id: 11471;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11470;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11472;
                        readonly src: "1115:6:92";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 11469;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1115:6:92";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1114:8:92";
                };
                readonly scope: 11525;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 11479;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1236:105:92";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11473;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1129:102:92";
                    readonly text: "@notice Gets the pool's state relating to the Hyperdrive market.\n @return The market state.";
                };
                readonly functionSelector: "d8165743";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getMarketState";
                readonly nameLocation: "1245:14:92";
                readonly parameters: {
                    readonly id: 11474;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1259:2:92";
                };
                readonly returnParameters: {
                    readonly id: 11478;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11477;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11479;
                        readonly src: "1309:30:92";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_MarketState_$10357_memory_ptr";
                            readonly typeString: "struct IHyperdrive.MarketState";
                        };
                        readonly typeName: {
                            readonly id: 11476;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 11475;
                                readonly name: "IHyperdrive.MarketState";
                                readonly nameLocations: readonly ["1309:11:92", "1321:11:92"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10357;
                                readonly src: "1309:23:92";
                            };
                            readonly referencedDeclaration: 10357;
                            readonly src: "1309:23:92";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_MarketState_$10357_storage_ptr";
                                readonly typeString: "struct IHyperdrive.MarketState";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1308:32:92";
                };
                readonly scope: 11525;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 11486;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1445:103:92";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11480;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1347:93:92";
                    readonly text: "@notice Gets the pool's configuration parameters.\n @return The pool configuration.";
                };
                readonly functionSelector: "b0d96580";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getPoolConfig";
                readonly nameLocation: "1454:13:92";
                readonly parameters: {
                    readonly id: 11481;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1467:2:92";
                };
                readonly returnParameters: {
                    readonly id: 11485;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11484;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11486;
                        readonly src: "1517:29:92";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10470_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig";
                        };
                        readonly typeName: {
                            readonly id: 11483;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 11482;
                                readonly name: "IHyperdrive.PoolConfig";
                                readonly nameLocations: readonly ["1517:11:92", "1529:10:92"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10470;
                                readonly src: "1517:22:92";
                            };
                            readonly referencedDeclaration: 10470;
                            readonly src: "1517:22:92";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolConfig_$10470_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1516:31:92";
                };
                readonly scope: 11525;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 11493;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1717:75:92";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11487;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1554:158:92";
                    readonly text: "@notice Gets info about the pool's reserves and other state that is\n         important to evaluate potential trades.\n @return The pool info.";
                };
                readonly functionSelector: "60246c88";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getPoolInfo";
                readonly nameLocation: "1726:11:92";
                readonly parameters: {
                    readonly id: 11488;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1737:2:92";
                };
                readonly returnParameters: {
                    readonly id: 11492;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11491;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11493;
                        readonly src: "1763:27:92";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolInfo_$10516_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolInfo";
                        };
                        readonly typeName: {
                            readonly id: 11490;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 11489;
                                readonly name: "IHyperdrive.PoolInfo";
                                readonly nameLocations: readonly ["1763:11:92", "1775:8:92"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10516;
                                readonly src: "1763:20:92";
                            };
                            readonly referencedDeclaration: 10516;
                            readonly src: "1763:20:92";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolInfo_$10516_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolInfo";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1762:29:92";
                };
                readonly scope: 11525;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 11499;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1937:72:92";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11494;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1798:134:92";
                    readonly text: "@notice Gets the amount of governance fees that haven't been collected.\n @return The amount of uncollected governance fees.";
                };
                readonly functionSelector: "c69e16ad";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getUncollectedGovernanceFees";
                readonly nameLocation: "1946:28:92";
                readonly parameters: {
                    readonly id: 11495;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1974:2:92";
                };
                readonly returnParameters: {
                    readonly id: 11498;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11497;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11499;
                        readonly src: "2000:7:92";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11496;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2000:7:92";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1999:9:92";
                };
                readonly scope: 11525;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 11506;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2291:107:92";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11500;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2015:271:92";
                    readonly text: "@notice Gets information relating to the pool's withdrawal pool. This\n         includes the total proceeds underlying the withdrawal pool and\n         the number of withdrawal shares ready to be redeemed.\n @return The withdrawal pool information.";
                };
                readonly functionSelector: "fba56008";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getWithdrawPool";
                readonly nameLocation: "2300:15:92";
                readonly parameters: {
                    readonly id: 11501;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2315:2:92";
                };
                readonly returnParameters: {
                    readonly id: 11505;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11504;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11506;
                        readonly src: "2365:31:92";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_WithdrawPool_$10368_memory_ptr";
                            readonly typeString: "struct IHyperdrive.WithdrawPool";
                        };
                        readonly typeName: {
                            readonly id: 11503;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 11502;
                                readonly name: "IHyperdrive.WithdrawPool";
                                readonly nameLocations: readonly ["2365:11:92", "2377:12:92"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10368;
                                readonly src: "2365:24:92";
                            };
                            readonly referencedDeclaration: 10368;
                            readonly src: "2365:24:92";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_WithdrawPool_$10368_storage_ptr";
                                readonly typeString: "struct IHyperdrive.WithdrawPool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2364:33:92";
                };
                readonly scope: 11525;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 11514;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2571:65:92";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11507;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2404:162:92";
                    readonly text: "@notice Gets an account's pauser status within the Hyperdrive pool.\n @param _account The account to check.\n @return The account's pauser status.";
                };
                readonly functionSelector: "46fbf68e";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "isPauser";
                readonly nameLocation: "2580:8:92";
                readonly parameters: {
                    readonly id: 11510;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11509;
                        readonly mutability: "mutable";
                        readonly name: "_account";
                        readonly nameLocation: "2597:8:92";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11514;
                        readonly src: "2589:16:92";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 11508;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2589:7:92";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2588:18:92";
                };
                readonly returnParameters: {
                    readonly id: 11513;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11512;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11514;
                        readonly src: "2630:4:92";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 11511;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2630:4:92";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2629:6:92";
                };
                readonly scope: 11525;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 11524;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2939:96:92";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11515;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2642:292:92";
                    readonly text: "@notice Gets the storage values at the specified slots.\n @dev This serves as a generalized getter that allows consumers to create\n      custom getters to suit their purposes.\n @param _slots The storage slots to load.\n @return The values at the specified slots.";
                };
                readonly functionSelector: "becee9c3";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "load";
                readonly nameLocation: "2948:4:92";
                readonly parameters: {
                    readonly id: 11519;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11518;
                        readonly mutability: "mutable";
                        readonly name: "_slots";
                        readonly nameLocation: "2981:6:92";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11524;
                        readonly src: "2962:25:92";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_uint256_$dyn_calldata_ptr";
                            readonly typeString: "uint256[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 11516;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2962:7:92";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly id: 11517;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "2962:9:92";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_uint256_$dyn_storage_ptr";
                                readonly typeString: "uint256[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2952:41:92";
                };
                readonly returnParameters: {
                    readonly id: 11523;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11522;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11524;
                        readonly src: "3017:16:92";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_bytes32_$dyn_memory_ptr";
                            readonly typeString: "bytes32[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 11520;
                                readonly name: "bytes32";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "3017:7:92";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly id: 11521;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "3017:9:92";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_bytes32_$dyn_storage_ptr";
                                readonly typeString: "bytes32[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3016:18:92";
                };
                readonly scope: 11525;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 11442;
                    readonly name: "IMultiTokenRead";
                    readonly nameLocations: readonly ["200:15:92"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 11865;
                    readonly src: "200:15:92";
                };
                readonly id: 11443;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "200:15:92";
            }];
            readonly canonicalName: "IHyperdriveRead";
            readonly contractDependencies: readonly [];
            readonly contractKind: "interface";
            readonly fullyImplemented: false;
            readonly linearizedBaseContracts: readonly [11525, 11865];
            readonly name: "IHyperdriveRead";
            readonly nameLocation: "181:15:92";
            readonly scope: 11526;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 92;
};
//# sourceMappingURL=IHyperdriveRead.d.ts.map