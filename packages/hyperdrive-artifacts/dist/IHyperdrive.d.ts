export declare const IHyperdrive: {
    readonly abi: readonly [{
        readonly type: "function";
        readonly name: "DOMAIN_SEPARATOR";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "PERMIT_TYPEHASH";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "addLiquidity";
        readonly inputs: readonly [{
            readonly name: "_contribution";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_minLpSharePrice";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_minApr";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_maxApr";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_options";
            readonly type: "tuple";
            readonly internalType: "struct IHyperdrive.Options";
            readonly components: readonly [{
                readonly name: "destination";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "asBase";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "extraData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [{
            readonly name: "lpShares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "payable";
    }, {
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
        readonly name: "baseToken";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "batchTransferFrom";
        readonly inputs: readonly [{
            readonly name: "from";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "ids";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }, {
            readonly name: "values";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "checkpoint";
        readonly inputs: readonly [{
            readonly name: "_checkpointTime";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "closeLong";
        readonly inputs: readonly [{
            readonly name: "_maturityTime";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_bondAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_minOutput";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_options";
            readonly type: "tuple";
            readonly internalType: "struct IHyperdrive.Options";
            readonly components: readonly [{
                readonly name: "destination";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "asBase";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "extraData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "closeShort";
        readonly inputs: readonly [{
            readonly name: "_maturityTime";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_bondAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_minOutput";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_options";
            readonly type: "tuple";
            readonly internalType: "struct IHyperdrive.Options";
            readonly components: readonly [{
                readonly name: "destination";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "asBase";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "extraData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "collectGovernanceFee";
        readonly inputs: readonly [{
            readonly name: "_options";
            readonly type: "tuple";
            readonly internalType: "struct IHyperdrive.Options";
            readonly components: readonly [{
                readonly name: "destination";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "asBase";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "extraData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [{
            readonly name: "proceeds";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "getCheckpoint";
        readonly inputs: readonly [{
            readonly name: "_checkpointTime";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "tuple";
            readonly internalType: "struct IHyperdrive.Checkpoint";
            readonly components: readonly [{
                readonly name: "vaultSharePrice";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getCheckpointExposure";
        readonly inputs: readonly [{
            readonly name: "_checkpointTime";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getMarketState";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "tuple";
            readonly internalType: "struct IHyperdrive.MarketState";
            readonly components: readonly [{
                readonly name: "shareReserves";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }, {
                readonly name: "bondReserves";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }, {
                readonly name: "longExposure";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }, {
                readonly name: "longsOutstanding";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }, {
                readonly name: "shareAdjustment";
                readonly type: "int128";
                readonly internalType: "int128";
            }, {
                readonly name: "shortsOutstanding";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }, {
                readonly name: "longAverageMaturityTime";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }, {
                readonly name: "shortAverageMaturityTime";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }, {
                readonly name: "isInitialized";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "isPaused";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "zombieBaseProceeds";
                readonly type: "uint112";
                readonly internalType: "uint112";
            }, {
                readonly name: "zombieShareReserves";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getPoolConfig";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "tuple";
            readonly internalType: "struct IHyperdrive.PoolConfig";
            readonly components: readonly [{
                readonly name: "baseToken";
                readonly type: "address";
                readonly internalType: "contract IERC20";
            }, {
                readonly name: "linkerFactory";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "linkerCodeHash";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "initialVaultSharePrice";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "minimumShareReserves";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "minimumTransactionAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "positionDuration";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "checkpointDuration";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "timeStretch";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "governance";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "feeCollector";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fees";
                readonly type: "tuple";
                readonly internalType: "struct IHyperdrive.Fees";
                readonly components: readonly [{
                    readonly name: "curve";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "flat";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "governanceLP";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "governanceZombie";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getPoolInfo";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "tuple";
            readonly internalType: "struct IHyperdrive.PoolInfo";
            readonly components: readonly [{
                readonly name: "shareReserves";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "shareAdjustment";
                readonly type: "int256";
                readonly internalType: "int256";
            }, {
                readonly name: "zombieBaseProceeds";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "zombieShareReserves";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "bondReserves";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "lpTotalSupply";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "vaultSharePrice";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "longsOutstanding";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "longAverageMaturityTime";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "shortsOutstanding";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "shortAverageMaturityTime";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "withdrawalSharesReadyToWithdraw";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "withdrawalSharesProceeds";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "lpSharePrice";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "longExposure";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getUncollectedGovernanceFees";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getWithdrawPool";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "tuple";
            readonly internalType: "struct IHyperdrive.WithdrawPool";
            readonly components: readonly [{
                readonly name: "readyToWithdraw";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }, {
                readonly name: "proceeds";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "initialize";
        readonly inputs: readonly [{
            readonly name: "_contribution";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_apr";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_options";
            readonly type: "tuple";
            readonly internalType: "struct IHyperdrive.Options";
            readonly components: readonly [{
                readonly name: "destination";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "asBase";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "extraData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [{
            readonly name: "lpShares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "payable";
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
        readonly name: "isPauser";
        readonly inputs: readonly [{
            readonly name: "_account";
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
        readonly name: "load";
        readonly inputs: readonly [{
            readonly name: "_slots";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32[]";
            readonly internalType: "bytes32[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "name";
        readonly inputs: readonly [{
            readonly name: "id";
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
        readonly name: "openLong";
        readonly inputs: readonly [{
            readonly name: "_baseAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_minOutput";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_minVaultSharePrice";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_options";
            readonly type: "tuple";
            readonly internalType: "struct IHyperdrive.Options";
            readonly components: readonly [{
                readonly name: "destination";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "asBase";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "extraData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [{
            readonly name: "maturityTime";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "bondProceeds";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "openShort";
        readonly inputs: readonly [{
            readonly name: "_bondAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_maxDeposit";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_minVaultSharePrice";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_options";
            readonly type: "tuple";
            readonly internalType: "struct IHyperdrive.Options";
            readonly components: readonly [{
                readonly name: "destination";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "asBase";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "extraData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [{
            readonly name: "maturityTime";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "traderDeposit";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "pause";
        readonly inputs: readonly [{
            readonly name: "_status";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
        readonly name: "permitForAll";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "spender";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_approved";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "deadline";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "v";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }, {
            readonly name: "r";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "s";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "redeemWithdrawalShares";
        readonly inputs: readonly [{
            readonly name: "_shares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_minOutput";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_options";
            readonly type: "tuple";
            readonly internalType: "struct IHyperdrive.Options";
            readonly components: readonly [{
                readonly name: "destination";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "asBase";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "extraData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [{
            readonly name: "proceeds";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "sharesRedeemed";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "removeLiquidity";
        readonly inputs: readonly [{
            readonly name: "_shares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_minOutput";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_options";
            readonly type: "tuple";
            readonly internalType: "struct IHyperdrive.Options";
            readonly components: readonly [{
                readonly name: "destination";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "asBase";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "extraData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [{
            readonly name: "baseProceeds";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "withdrawalShares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setApproval";
        readonly inputs: readonly [{
            readonly name: "tokenID";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "operator";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setApprovalBridge";
        readonly inputs: readonly [{
            readonly name: "tokenID";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "operator";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "caller";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setApprovalForAll";
        readonly inputs: readonly [{
            readonly name: "operator";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "approved";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setGovernance";
        readonly inputs: readonly [{
            readonly name: "_who";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setPauser";
        readonly inputs: readonly [{
            readonly name: "who";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "status";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "symbol";
        readonly inputs: readonly [{
            readonly name: "id";
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
        readonly name: "target0";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "target1";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "target2";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "target3";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "target4";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "totalSupply";
        readonly inputs: readonly [{
            readonly name: "id";
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
        readonly name: "transferFrom";
        readonly inputs: readonly [{
            readonly name: "tokenID";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "from";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "transferFromBridge";
        readonly inputs: readonly [{
            readonly name: "tokenID";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "from";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "caller";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "AddLiquidity";
        readonly inputs: readonly [{
            readonly name: "provider";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "lpAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "baseAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "vaultSharePrice";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "lpSharePrice";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
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
        readonly name: "ApprovalForAll";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "operator";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "approved";
            readonly type: "bool";
            readonly indexed: false;
            readonly internalType: "bool";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "CloseLong";
        readonly inputs: readonly [{
            readonly name: "trader";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "assetId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "maturityTime";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "baseAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "vaultSharePrice";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "bondAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "CloseShort";
        readonly inputs: readonly [{
            readonly name: "trader";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "assetId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "maturityTime";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "baseAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "vaultSharePrice";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "bondAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "CollectGovernanceFee";
        readonly inputs: readonly [{
            readonly name: "collector";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "fees";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "CreateCheckpoint";
        readonly inputs: readonly [{
            readonly name: "checkpointTime";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "vaultSharePrice";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "maturedShorts";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "maturedLongs";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "lpSharePrice";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "GovernanceUpdated";
        readonly inputs: readonly [{
            readonly name: "newGovernance";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "Initialize";
        readonly inputs: readonly [{
            readonly name: "provider";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "lpAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "baseAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "vaultSharePrice";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "apr";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "OpenLong";
        readonly inputs: readonly [{
            readonly name: "trader";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "assetId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "maturityTime";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "baseAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "vaultSharePrice";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "bondAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "OpenShort";
        readonly inputs: readonly [{
            readonly name: "trader";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "assetId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "maturityTime";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "baseAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "vaultSharePrice";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "bondAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "PauseStatusUpdated";
        readonly inputs: readonly [{
            readonly name: "isPaused";
            readonly type: "bool";
            readonly indexed: false;
            readonly internalType: "bool";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "PauserUpdated";
        readonly inputs: readonly [{
            readonly name: "newPauser";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "RedeemWithdrawalShares";
        readonly inputs: readonly [{
            readonly name: "provider";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "withdrawalShareAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "baseAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "vaultSharePrice";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "RemoveLiquidity";
        readonly inputs: readonly [{
            readonly name: "provider";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "lpAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "baseAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "vaultSharePrice";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "withdrawalShareAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "lpSharePrice";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "TransferSingle";
        readonly inputs: readonly [{
            readonly name: "operator";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
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
            readonly name: "id";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "value";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "BatchInputLengthMismatch";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "BelowMinimumContribution";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "DecreasedPresentValueWhenAddingLiquidity";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ExpInvalidExponent";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ExpiredDeadline";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InsufficientBalance";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InsufficientLiquidity";
        readonly inputs: readonly [{
            readonly name: "reason";
            readonly type: "uint8";
            readonly internalType: "enum IHyperdrive.InsufficientLiquidityReason";
        }];
    }, {
        readonly type: "error";
        readonly name: "InvalidApr";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidBaseToken";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidCheckpointTime";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidERC20Bridge";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidFeeDestination";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidInitialVaultSharePrice";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidShareReserves";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidSignature";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidTimestamp";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "LnInvalidInput";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "MinimumSharePrice";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "MinimumTransactionAmount";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NegativePresentValue";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NotPayable";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "OutputLimit";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "PoolAlreadyInitialized";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "PoolIsPaused";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "RestrictedZeroAddress";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ReturnData";
        readonly inputs: readonly [{
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
    }, {
        readonly type: "error";
        readonly name: "SweepFailed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "TransferFailed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "Unauthorized";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "UnexpectedSuccess";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "UnsafeCastToInt128";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "UnsafeCastToUint112";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "UnsafeCastToUint128";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "UnsupportedToken";
        readonly inputs: readonly [];
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
        readonly "DOMAIN_SEPARATOR()": "3644e515";
        readonly "PERMIT_TYPEHASH()": "30adf81f";
        readonly "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": "4c2ac1d9";
        readonly "balanceOf(uint256,address)": "3656eec2";
        readonly "baseToken()": "c55dae63";
        readonly "batchTransferFrom(address,address,uint256[],uint256[])": "17fad7fc";
        readonly "checkpoint(uint256)": "ed64bab2";
        readonly "closeLong(uint256,uint256,uint256,(address,bool,bytes))": "ded06231";
        readonly "closeShort(uint256,uint256,uint256,(address,bool,bytes))": "29b23fc1";
        readonly "collectGovernanceFee((address,bool,bytes))": "3e691db9";
        readonly "getCheckpoint(uint256)": "20fc4881";
        readonly "getCheckpointExposure(uint256)": "cf210e65";
        readonly "getMarketState()": "d8165743";
        readonly "getPoolConfig()": "b0d96580";
        readonly "getPoolInfo()": "60246c88";
        readonly "getUncollectedGovernanceFees()": "c69e16ad";
        readonly "getWithdrawPool()": "fba56008";
        readonly "initialize(uint256,uint256,(address,bool,bytes))": "77d05ff4";
        readonly "isApprovedForAll(address,address)": "e985e9c5";
        readonly "isPauser(address)": "46fbf68e";
        readonly "load(uint256[])": "becee9c3";
        readonly "name(uint256)": "00ad800c";
        readonly "nonces(address)": "7ecebe00";
        readonly "openLong(uint256,uint256,uint256,(address,bool,bytes))": "cba2e58d";
        readonly "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070";
        readonly "pause(bool)": "02329a29";
        readonly "perTokenApprovals(uint256,address,address)": "21ff32a9";
        readonly "permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)": "9032c726";
        readonly "redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))": "074a6de9";
        readonly "removeLiquidity(uint256,uint256,(address,bool,bytes))": "cbc13434";
        readonly "setApproval(uint256,address,uint256)": "9cd241af";
        readonly "setApprovalBridge(uint256,address,uint256,address)": "4ed2d6ac";
        readonly "setApprovalForAll(address,bool)": "a22cb465";
        readonly "setGovernance(address)": "ab033ea9";
        readonly "setPauser(address,bool)": "7180c8ca";
        readonly "symbol(uint256)": "4e41a1fb";
        readonly "target0()": "21b57d53";
        readonly "target1()": "eac3e799";
        readonly "target2()": "a6e8a859";
        readonly "target3()": "d899e112";
        readonly "target4()": "f3f70707";
        readonly "totalSupply(uint256)": "bd85b039";
        readonly "transferFrom(uint256,address,address,uint256)": "1c0f12b6";
        readonly "transferFromBridge(uint256,address,address,uint256,address)": "e44808bc";
    };
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"BatchInputLengthMismatch\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"BelowMinimumContribution\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"DecreasedPresentValueWhenAddingLiquidity\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ExpInvalidExponent\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ExpiredDeadline\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InsufficientBalance\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"enum IHyperdrive.InsufficientLiquidityReason\",\"name\":\"reason\",\"type\":\"uint8\"}],\"name\":\"InsufficientLiquidity\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidApr\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidBaseToken\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidCheckpointTime\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidERC20Bridge\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFeeDestination\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidInitialVaultSharePrice\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidSignature\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTimestamp\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"LnInvalidInput\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MinimumSharePrice\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MinimumTransactionAmount\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NegativePresentValue\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NotPayable\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"OutputLimit\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"PoolAlreadyInitialized\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"PoolIsPaused\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"RestrictedZeroAddress\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"ReturnData\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"SweepFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"TransferFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"Unauthorized\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnexpectedSuccess\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToInt128\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToUint112\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToUint128\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsupportedToken\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fees\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"}],\"name\":\"PauseStatusUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"DOMAIN_SEPARATOR\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"PERMIT_TYPEHASH\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_contribution\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minLpSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minApr\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_maxApr\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"addLiquidity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"lpShares\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"baseToken\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"values\",\"type\":\"uint256[]\"}],\"name\":\"batchTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_checkpointTime\",\"type\":\"uint256\"}],\"name\":\"checkpoint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_maturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_bondAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutput\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"closeLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_maturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_bondAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutput\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"closeShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"collectGovernanceFee\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"proceeds\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_checkpointTime\",\"type\":\"uint256\"}],\"name\":\"getCheckpoint\",\"outputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"vaultSharePrice\",\"type\":\"uint128\"}],\"internalType\":\"struct IHyperdrive.Checkpoint\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_checkpointTime\",\"type\":\"uint256\"}],\"name\":\"getCheckpointExposure\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getMarketState\",\"outputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"shareReserves\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"bondReserves\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longExposure\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longsOutstanding\",\"type\":\"uint128\"},{\"internalType\":\"int128\",\"name\":\"shareAdjustment\",\"type\":\"int128\"},{\"internalType\":\"uint128\",\"name\":\"shortsOutstanding\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longAverageMaturityTime\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"shortAverageMaturityTime\",\"type\":\"uint128\"},{\"internalType\":\"bool\",\"name\":\"isInitialized\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"},{\"internalType\":\"uint112\",\"name\":\"zombieBaseProceeds\",\"type\":\"uint112\"},{\"internalType\":\"uint128\",\"name\":\"zombieShareReserves\",\"type\":\"uint128\"}],\"internalType\":\"struct IHyperdrive.MarketState\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getPoolConfig\",\"outputs\":[{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolConfig\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getPoolInfo\",\"outputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"zombieBaseProceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"zombieShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"lpTotalSupply\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longAverageMaturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortAverageMaturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalSharesReadyToWithdraw\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalSharesProceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longExposure\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.PoolInfo\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getUncollectedGovernanceFees\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getWithdrawPool\",\"outputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"readyToWithdraw\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"proceeds\",\"type\":\"uint128\"}],\"internalType\":\"struct IHyperdrive.WithdrawPool\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_contribution\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_apr\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"initialize\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"lpShares\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_account\",\"type\":\"address\"}],\"name\":\"isPauser\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256[]\",\"name\":\"_slots\",\"type\":\"uint256[]\"}],\"name\":\"load\",\"outputs\":[{\"internalType\":\"bytes32[]\",\"name\":\"\",\"type\":\"bytes32[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"nonces\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_baseAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutput\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minVaultSharePrice\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"openLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"bondProceeds\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_bondAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_maxDeposit\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minVaultSharePrice\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"openShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"traderDeposit\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"_status\",\"type\":\"bool\"}],\"name\":\"pause\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"perTokenApprovals\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_approved\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permitForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_shares\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutput\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"redeemWithdrawalShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"proceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"sharesRedeemed\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_shares\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutput\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"removeLiquidity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"baseProceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalShares\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"setApproval\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"setApprovalBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_who\",\"type\":\"address\"}],\"name\":\"setGovernance\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"who\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"setPauser\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target0\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target1\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target2\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target3\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target4\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"transferFromBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"errors\":{\"BatchInputLengthMismatch()\":[{\"notice\":\"Thrown when the inputs to a batch transfer don't match in         length.\"}],\"BelowMinimumContribution()\":[{\"notice\":\"Thrown when the initializer doesn't provide sufficient liquidity         to cover the minimum share reserves and the LP shares that are         burned on initialization.\"}],\"DecreasedPresentValueWhenAddingLiquidity()\":[{\"notice\":\"Thrown when the present value prior to adding liquidity results in a         decrease in present value after liquidity. This is caused by a         shortage in liquidity that prevents all the open positions being         closed on the curve and therefore marked to 1.\"}],\"ExpInvalidExponent()\":[{\"notice\":\"Thrown when the exponent to `FixedPointMath.exp` would cause the         the result to be larger than the representable scale.\"}],\"ExpiredDeadline()\":[{\"notice\":\"Thrown when a permit signature is expired.\"}],\"InsufficientBalance()\":[{\"notice\":\"Thrown when a user doesn't have a sufficient balance to perform         an action.\"}],\"InsufficientLiquidity(uint8)\":[{\"notice\":\"Thrown when the pool doesn't have sufficient liquidity to         complete the trade.\"}],\"InvalidApr()\":[{\"notice\":\"Thrown when the pool's APR is outside the bounds specified by         a LP when they are adding liquidity.\"}],\"InvalidBaseToken()\":[{\"notice\":\"Thrown when the base token isn't valid. Each instance will have         different criteria for what constitutes a valid base token.\"}],\"InvalidCheckpointTime()\":[{\"notice\":\"Thrown when the checkpoint time provided to `checkpoint` is         larger than the current checkpoint or isn't divisible by the         checkpoint duration.\"}],\"InvalidERC20Bridge()\":[{\"notice\":\"Thrown when the caller of one of MultiToken's bridge-only         functions is not the corresponding bridge.\"}],\"InvalidFeeDestination()\":[{\"notice\":\"Thrown when a destination other than the fee collector is         specified in `collectGovernanceFee`.\"}],\"InvalidInitialVaultSharePrice()\":[{\"notice\":\"Thrown when the initial share price doesn't match the share         price of the underlying yield source on deployment.\"}],\"InvalidShareReserves()\":[{\"notice\":\"Thrown when update liquidity brings the share reserves below         the minimum share reserves.\"}],\"InvalidSignature()\":[{\"notice\":\"Thrown when an invalid signature is used provide permit access         to the MultiToken. A signature is considered to be invalid if         it fails to recover to the owner's address.\"}],\"InvalidTimestamp()\":[{\"notice\":\"Thrown when the timestamp used to construct an asset ID exceeds         the uint248 scale.\"}],\"LnInvalidInput()\":[{\"notice\":\"Thrown when the input to `FixedPointMath.ln` is less than or         equal to zero.\"}],\"MinimumSharePrice()\":[{\"notice\":\"Thrown when vault share price is smaller than the minimum share         price. This protects traders from unknowingly opening a long or         short after negative interest has accrued.\"}],\"MinimumTransactionAmount()\":[{\"notice\":\"Thrown when the input or output amount of a trade is smaller         than the minimum transaction amount. This protects traders and         LPs from losses of precision that can occur at small scales.\"}],\"NegativePresentValue()\":[{\"notice\":\"Thrown when the present value is negative. Whatever proceeded         a negative present value should be reverted.\"}],\"NotPayable()\":[{\"notice\":\"Thrown when ether is sent to an instance that doesn't accept         ether as a deposit asset.\"}],\"OutputLimit()\":[{\"notice\":\"Thrown when a slippage guard is violated.\"}],\"PoolAlreadyInitialized()\":[{\"notice\":\"Thrown when the pool is already initialized and a trader calls         `initialize`. This prevents the pool from being reinitialized         after it has been initialized.\"}],\"PoolIsPaused()\":[{\"notice\":\"Thrown when the pool is paused and a trader tries to add         liquidity, open a long, or open a short. Traders can still         close their existing positions while the pool is paused.\"}],\"RestrictedZeroAddress()\":[{\"notice\":\"Thrown when the owner passed to permit is the zero address. This         prevents users from spending the funds in address zero by         sending an invalid signature to ecrecover.\"}],\"ReturnData(bytes)\":[{\"notice\":\"Thrown by a read-only function called by the proxy. Unlike a         normal error, this error actually indicates that a read-only         call succeeded. The data that it wraps is the return data from         the read-only call.\"}],\"SweepFailed()\":[{\"notice\":\"Thrown when an asset is swept from the pool and one of the         pool's depository assets changes.\"}],\"TransferFailed()\":[{\"notice\":\"Thrown when an ether transfer fails.\"}],\"Unauthorized()\":[{\"notice\":\"Thrown when an unauthorized user attempts to access admin         functionality.\"}],\"UnexpectedSuccess()\":[{\"notice\":\"Thrown when a read-only call succeeds. The proxy architecture         uses a force-revert delegatecall pattern to ensure that calls         that are intended to be read-only are actually read-only.\"}],\"UnsafeCastToInt128()\":[{\"notice\":\"Thrown when casting a value to a int128 that is outside of the         int128 scale.\"}],\"UnsafeCastToUint112()\":[{\"notice\":\"Thrown when casting a value to a uint112 that is outside of the         uint128 scale.\"}],\"UnsafeCastToUint128()\":[{\"notice\":\"Thrown when casting a value to a uint128 that is outside of the         uint128 scale.\"}],\"UnsupportedToken()\":[{\"notice\":\"Thrown when an unsupported option is passed to a function or         a user attempts to sweep an invalid token. The options and sweep         targets that are supported vary between instances.\"}]},\"kind\":\"user\",\"methods\":{\"checkpoint(uint256)\":{\"notice\":\"Checkpoints ///\"},\"collectGovernanceFee((address,bool,bytes))\":{\"notice\":\"Admin ///\"},\"initialize(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"LPs ///\"},\"openLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Longs ///\"},\"openShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Shorts ///\"},\"target0()\":{\"notice\":\"Getters ///\"},\"transferFrom(uint256,address,address,uint256)\":{\"notice\":\"Functions ///\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IHyperdrive.sol\":\"IHyperdrive\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0xfd51b9727f00a434ea4ced64044c104ed8361fa2ed22600969d1e4ff257b14f3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8780b588acc11dd906ff0897adc5b7acdab759fec4d14ce0d52bf002cb90c398\",\"dweb:/ipfs/QmTMaRGveFgN5L3k1h5oAbfp5ccmzT9d36JhChVg9PxJkD\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x81c89ca62586555b915a9609d10014ff9d1f0d82111809d566f614bd9ea2fb16\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c4859b122480f504d1f0035ed11983b0d74ea2b16bcf26dfe19365bb4f66240\",\"dweb:/ipfs/QmQEQBxRdsH6zNx2rvzetYZRbB3pMXXWzTuwVPBGVhCHfL\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x93cfce28869c1a082c170092b87b04204a91b7898a1e95c3e4270f06fbc76a97\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b8b24e13ff8994550685fec1405bc5d2a5ed6400db061005e72ecff056be51a1\",\"dweb:/ipfs/QmR4RZzyhjYt8xxRPaJWHKhBZdHZPVBHrtNERAZhCaaTFU\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x5c5d6c812fd2cf996d60632c4c8cca7b3d70f5ae4891a3f99c1e10f967f520dd\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://44ef09e50cf76ebab25b90688b19966575cc07fee503ffdb189c3fbbcbfea01f\",\"dweb:/ipfs/QmZEULHXopjaeWbsfXNrEriQomY19s6LXEcae9saeZCpmt\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x516967eaae812ff7fff81797190f48fca40838eccfb8243e3f973f2f85b51597\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://50fa3165b126976c218d27f7f276789f8cc680d3136cd631999164a64f03e477\",\"dweb:/ipfs/QmTSCjqQoys2SJNDZrhTdy2M2at8siSb3ZXHjWUoeihQjr\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0xda628a0f7428ad63cb04b6f341c223d7b36803d554e92cd3a793325eae6ad87a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://f7dfe92e6fb15eedbba033a96481db1343aeb48039d40d4b5053cc27d3f5e4f3\",\"dweb:/ipfs/QmNeNyjuEd7LkwZMg14fnMsunLXbJRzHYwzC2yEYKi8H3q\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0xb5b2a1f90c4e85e1290144b1e0e393027c90f24d6030ee802d0369342d7bf002\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://f7850a790ea32726462f6dd08c87e5250c70155af558b8fdd17dc71d53c5b7f3\",\"dweb:/ipfs/QmWpshz1Ufdqmw8rmZdbdm9ZyEcKHFswLMNaBkBJ3sqNA1\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xa2e1d420bcae975a3d9aa7918319da2dd047cbc50ad41e0a391048e01b980191\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://335611b957d8ca7c0cee11d6f2268372a7c937bc119c030cb8e274679604b6cd\",\"dweb:/ipfs/QmeoxLRyPVgBXrxetVFEyjsvLNfwAahcHsFdAEzy9otxuU\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xf84c46faa4a3323835a80eae3ee969409bf3f5c48ec94a6e486b70cb59a4c868\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b1dcc1796eac62773f298b5b77fda8de424d822a7e74825028a0f83c627a5bfb\",\"dweb:/ipfs/QmRbiswdabx3uMgrgkLKe6K6JAQBLafsWqEyZCg3PQbN5Q\"]}},\"version\":1}";
    readonly metadata: {
        readonly compiler: {
            readonly version: "0.8.20+commit.a1b79de6";
        };
        readonly language: "Solidity";
        readonly output: {
            readonly abi: readonly [{
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "BatchInputLengthMismatch";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "BelowMinimumContribution";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "DecreasedPresentValueWhenAddingLiquidity";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "ExpInvalidExponent";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "ExpiredDeadline";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InsufficientBalance";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "enum IHyperdrive.InsufficientLiquidityReason";
                    readonly name: "reason";
                    readonly type: "uint8";
                }];
                readonly type: "error";
                readonly name: "InsufficientLiquidity";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidApr";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidBaseToken";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidCheckpointTime";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidERC20Bridge";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidFeeDestination";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidInitialVaultSharePrice";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidShareReserves";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidSignature";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidTimestamp";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "LnInvalidInput";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "MinimumSharePrice";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "MinimumTransactionAmount";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "NegativePresentValue";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "NotPayable";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "OutputLimit";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "PoolAlreadyInitialized";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "PoolIsPaused";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "RestrictedZeroAddress";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bytes";
                    readonly name: "data";
                    readonly type: "bytes";
                }];
                readonly type: "error";
                readonly name: "ReturnData";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "SweepFailed";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "TransferFailed";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "Unauthorized";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "UnexpectedSuccess";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "UnsafeCastToInt128";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "UnsafeCastToUint112";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "UnsafeCastToUint128";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "UnsupportedToken";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "provider";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "lpAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "baseAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "vaultSharePrice";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "lpSharePrice";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "AddLiquidity";
                readonly anonymous: false;
            }, {
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
                    readonly name: "account";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "address";
                    readonly name: "operator";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "bool";
                    readonly name: "approved";
                    readonly type: "bool";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "ApprovalForAll";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "trader";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "assetId";
                    readonly type: "uint256";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "maturityTime";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "baseAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "vaultSharePrice";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "bondAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "CloseLong";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "trader";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "assetId";
                    readonly type: "uint256";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "maturityTime";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "baseAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "vaultSharePrice";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "bondAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "CloseShort";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "collector";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "fees";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "CollectGovernanceFee";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "checkpointTime";
                    readonly type: "uint256";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "vaultSharePrice";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "maturedShorts";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "maturedLongs";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "lpSharePrice";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "CreateCheckpoint";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "newGovernance";
                    readonly type: "address";
                    readonly indexed: true;
                }];
                readonly type: "event";
                readonly name: "GovernanceUpdated";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "provider";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "lpAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "baseAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "vaultSharePrice";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "apr";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "Initialize";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "trader";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "assetId";
                    readonly type: "uint256";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "maturityTime";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "baseAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "vaultSharePrice";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "bondAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "OpenLong";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "trader";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "assetId";
                    readonly type: "uint256";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "maturityTime";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "baseAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "vaultSharePrice";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "bondAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "OpenShort";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "isPaused";
                    readonly type: "bool";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "PauseStatusUpdated";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "newPauser";
                    readonly type: "address";
                    readonly indexed: true;
                }];
                readonly type: "event";
                readonly name: "PauserUpdated";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "provider";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "withdrawalShareAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "baseAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "vaultSharePrice";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "RedeemWithdrawalShares";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "provider";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "lpAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "baseAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "vaultSharePrice";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "withdrawalShareAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "lpSharePrice";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "RemoveLiquidity";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "operator";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
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
                    readonly name: "id";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "value";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "TransferSingle";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "DOMAIN_SEPARATOR";
                readonly outputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "";
                    readonly type: "bytes32";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "PERMIT_TYPEHASH";
                readonly outputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "";
                    readonly type: "bytes32";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_contribution";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_minLpSharePrice";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_minApr";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_maxApr";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "struct IHyperdrive.Options";
                    readonly name: "_options";
                    readonly type: "tuple";
                    readonly components: readonly [{
                        readonly internalType: "address";
                        readonly name: "destination";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bool";
                        readonly name: "asBase";
                        readonly type: "bool";
                    }, {
                        readonly internalType: "bytes";
                        readonly name: "extraData";
                        readonly type: "bytes";
                    }];
                }];
                readonly stateMutability: "payable";
                readonly type: "function";
                readonly name: "addLiquidity";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "lpShares";
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
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "from";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "to";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256[]";
                    readonly name: "ids";
                    readonly type: "uint256[]";
                }, {
                    readonly internalType: "uint256[]";
                    readonly name: "values";
                    readonly type: "uint256[]";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "batchTransferFrom";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_checkpointTime";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "checkpoint";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_maturityTime";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_bondAmount";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_minOutput";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "struct IHyperdrive.Options";
                    readonly name: "_options";
                    readonly type: "tuple";
                    readonly components: readonly [{
                        readonly internalType: "address";
                        readonly name: "destination";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bool";
                        readonly name: "asBase";
                        readonly type: "bool";
                    }, {
                        readonly internalType: "bytes";
                        readonly name: "extraData";
                        readonly type: "bytes";
                    }];
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "closeLong";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_maturityTime";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_bondAmount";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_minOutput";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "struct IHyperdrive.Options";
                    readonly name: "_options";
                    readonly type: "tuple";
                    readonly components: readonly [{
                        readonly internalType: "address";
                        readonly name: "destination";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bool";
                        readonly name: "asBase";
                        readonly type: "bool";
                    }, {
                        readonly internalType: "bytes";
                        readonly name: "extraData";
                        readonly type: "bytes";
                    }];
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "closeShort";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "struct IHyperdrive.Options";
                    readonly name: "_options";
                    readonly type: "tuple";
                    readonly components: readonly [{
                        readonly internalType: "address";
                        readonly name: "destination";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bool";
                        readonly name: "asBase";
                        readonly type: "bool";
                    }, {
                        readonly internalType: "bytes";
                        readonly name: "extraData";
                        readonly type: "bytes";
                    }];
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "collectGovernanceFee";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "proceeds";
                    readonly type: "uint256";
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
                    readonly internalType: "uint256";
                    readonly name: "_contribution";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_apr";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "struct IHyperdrive.Options";
                    readonly name: "_options";
                    readonly type: "tuple";
                    readonly components: readonly [{
                        readonly internalType: "address";
                        readonly name: "destination";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bool";
                        readonly name: "asBase";
                        readonly type: "bool";
                    }, {
                        readonly internalType: "bytes";
                        readonly name: "extraData";
                        readonly type: "bytes";
                    }];
                }];
                readonly stateMutability: "payable";
                readonly type: "function";
                readonly name: "initialize";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "lpShares";
                    readonly type: "uint256";
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
                    readonly name: "id";
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
                    readonly name: "_baseAmount";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_minOutput";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_minVaultSharePrice";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "struct IHyperdrive.Options";
                    readonly name: "_options";
                    readonly type: "tuple";
                    readonly components: readonly [{
                        readonly internalType: "address";
                        readonly name: "destination";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bool";
                        readonly name: "asBase";
                        readonly type: "bool";
                    }, {
                        readonly internalType: "bytes";
                        readonly name: "extraData";
                        readonly type: "bytes";
                    }];
                }];
                readonly stateMutability: "payable";
                readonly type: "function";
                readonly name: "openLong";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "maturityTime";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "bondProceeds";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_bondAmount";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_maxDeposit";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_minVaultSharePrice";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "struct IHyperdrive.Options";
                    readonly name: "_options";
                    readonly type: "tuple";
                    readonly components: readonly [{
                        readonly internalType: "address";
                        readonly name: "destination";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bool";
                        readonly name: "asBase";
                        readonly type: "bool";
                    }, {
                        readonly internalType: "bytes";
                        readonly name: "extraData";
                        readonly type: "bytes";
                    }];
                }];
                readonly stateMutability: "payable";
                readonly type: "function";
                readonly name: "openShort";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "maturityTime";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "traderDeposit";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "_status";
                    readonly type: "bool";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "pause";
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
                    readonly internalType: "address";
                    readonly name: "owner";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "spender";
                    readonly type: "address";
                }, {
                    readonly internalType: "bool";
                    readonly name: "_approved";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "deadline";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint8";
                    readonly name: "v";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "r";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "s";
                    readonly type: "bytes32";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "permitForAll";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_shares";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_minOutput";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "struct IHyperdrive.Options";
                    readonly name: "_options";
                    readonly type: "tuple";
                    readonly components: readonly [{
                        readonly internalType: "address";
                        readonly name: "destination";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bool";
                        readonly name: "asBase";
                        readonly type: "bool";
                    }, {
                        readonly internalType: "bytes";
                        readonly name: "extraData";
                        readonly type: "bytes";
                    }];
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "redeemWithdrawalShares";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "proceeds";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "sharesRedeemed";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_shares";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_minOutput";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "struct IHyperdrive.Options";
                    readonly name: "_options";
                    readonly type: "tuple";
                    readonly components: readonly [{
                        readonly internalType: "address";
                        readonly name: "destination";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bool";
                        readonly name: "asBase";
                        readonly type: "bool";
                    }, {
                        readonly internalType: "bytes";
                        readonly name: "extraData";
                        readonly type: "bytes";
                    }];
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "removeLiquidity";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "baseProceeds";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "withdrawalShares";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "tokenID";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "address";
                    readonly name: "operator";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "setApproval";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "tokenID";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "address";
                    readonly name: "operator";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "address";
                    readonly name: "caller";
                    readonly type: "address";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "setApprovalBridge";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "operator";
                    readonly type: "address";
                }, {
                    readonly internalType: "bool";
                    readonly name: "approved";
                    readonly type: "bool";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "setApprovalForAll";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_who";
                    readonly type: "address";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "setGovernance";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "who";
                    readonly type: "address";
                }, {
                    readonly internalType: "bool";
                    readonly name: "status";
                    readonly type: "bool";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "setPauser";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "id";
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
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "target0";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "target1";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "target2";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "target3";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "target4";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "id";
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
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "tokenID";
                    readonly type: "uint256";
                }, {
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
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "tokenID";
                    readonly type: "uint256";
                }, {
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
                }, {
                    readonly internalType: "address";
                    readonly name: "caller";
                    readonly type: "address";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "transferFromBridge";
            }];
            readonly devdoc: {
                readonly kind: "dev";
                readonly methods: {};
                readonly version: 1;
            };
            readonly userdoc: {
                readonly kind: "user";
                readonly methods: {
                    readonly "checkpoint(uint256)": {
                        readonly notice: "Checkpoints ///";
                    };
                    readonly "collectGovernanceFee((address,bool,bytes))": {
                        readonly notice: "Admin ///";
                    };
                    readonly "initialize(uint256,uint256,(address,bool,bytes))": {
                        readonly notice: "LPs ///";
                    };
                    readonly "openLong(uint256,uint256,uint256,(address,bool,bytes))": {
                        readonly notice: "Longs ///";
                    };
                    readonly "openShort(uint256,uint256,uint256,(address,bool,bytes))": {
                        readonly notice: "Shorts ///";
                    };
                    readonly "target0()": {
                        readonly notice: "Getters ///";
                    };
                    readonly "transferFrom(uint256,address,address,uint256)": {
                        readonly notice: "Functions ///";
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
                readonly "contracts/src/interfaces/IHyperdrive.sol": "IHyperdrive";
            };
            readonly libraries: {};
        };
        readonly sources: {
            readonly "contracts/src/interfaces/IERC20.sol": {
                readonly keccak256: "0xfd51b9727f00a434ea4ced64044c104ed8361fa2ed22600969d1e4ff257b14f3";
                readonly urls: readonly ["bzz-raw://8780b588acc11dd906ff0897adc5b7acdab759fec4d14ce0d52bf002cb90c398", "dweb:/ipfs/QmTMaRGveFgN5L3k1h5oAbfp5ccmzT9d36JhChVg9PxJkD"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdrive.sol": {
                readonly keccak256: "0x81c89ca62586555b915a9609d10014ff9d1f0d82111809d566f614bd9ea2fb16";
                readonly urls: readonly ["bzz-raw://3c4859b122480f504d1f0035ed11983b0d74ea2b16bcf26dfe19365bb4f66240", "dweb:/ipfs/QmQEQBxRdsH6zNx2rvzetYZRbB3pMXXWzTuwVPBGVhCHfL"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveCore.sol": {
                readonly keccak256: "0x93cfce28869c1a082c170092b87b04204a91b7898a1e95c3e4270f06fbc76a97";
                readonly urls: readonly ["bzz-raw://b8b24e13ff8994550685fec1405bc5d2a5ed6400db061005e72ecff056be51a1", "dweb:/ipfs/QmR4RZzyhjYt8xxRPaJWHKhBZdHZPVBHrtNERAZhCaaTFU"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveEvents.sol": {
                readonly keccak256: "0x5c5d6c812fd2cf996d60632c4c8cca7b3d70f5ae4891a3f99c1e10f967f520dd";
                readonly urls: readonly ["bzz-raw://44ef09e50cf76ebab25b90688b19966575cc07fee503ffdb189c3fbbcbfea01f", "dweb:/ipfs/QmZEULHXopjaeWbsfXNrEriQomY19s6LXEcae9saeZCpmt"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveRead.sol": {
                readonly keccak256: "0x516967eaae812ff7fff81797190f48fca40838eccfb8243e3f973f2f85b51597";
                readonly urls: readonly ["bzz-raw://50fa3165b126976c218d27f7f276789f8cc680d3136cd631999164a64f03e477", "dweb:/ipfs/QmTSCjqQoys2SJNDZrhTdy2M2at8siSb3ZXHjWUoeihQjr"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiToken.sol": {
                readonly keccak256: "0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f";
                readonly urls: readonly ["bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7", "dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenCore.sol": {
                readonly keccak256: "0xda628a0f7428ad63cb04b6f341c223d7b36803d554e92cd3a793325eae6ad87a";
                readonly urls: readonly ["bzz-raw://f7dfe92e6fb15eedbba033a96481db1343aeb48039d40d4b5053cc27d3f5e4f3", "dweb:/ipfs/QmNeNyjuEd7LkwZMg14fnMsunLXbJRzHYwzC2yEYKi8H3q"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenEvents.sol": {
                readonly keccak256: "0xb5b2a1f90c4e85e1290144b1e0e393027c90f24d6030ee802d0369342d7bf002";
                readonly urls: readonly ["bzz-raw://f7850a790ea32726462f6dd08c87e5250c70155af558b8fdd17dc71d53c5b7f3", "dweb:/ipfs/QmWpshz1Ufdqmw8rmZdbdm9ZyEcKHFswLMNaBkBJ3sqNA1"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenMetadata.sol": {
                readonly keccak256: "0xa2e1d420bcae975a3d9aa7918319da2dd047cbc50ad41e0a391048e01b980191";
                readonly urls: readonly ["bzz-raw://335611b957d8ca7c0cee11d6f2268372a7c937bc119c030cb8e274679604b6cd", "dweb:/ipfs/QmeoxLRyPVgBXrxetVFEyjsvLNfwAahcHsFdAEzy9otxuU"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenRead.sol": {
                readonly keccak256: "0xf84c46faa4a3323835a80eae3ee969409bf3f5c48ec94a6e486b70cb59a4c868";
                readonly urls: readonly ["bzz-raw://b1dcc1796eac62773f298b5b77fda8de424d822a7e74825028a0f83c627a5bfb", "dweb:/ipfs/QmRbiswdabx3uMgrgkLKe6K6JAQBLafsWqEyZCg3PQbN5Q"];
                readonly license: "Apache-2.0";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "contracts/src/interfaces/IHyperdrive.sol";
        readonly id: 7412;
        readonly exportedSymbols: {
            readonly IERC20: readonly [6740];
            readonly IHyperdrive: readonly [7411];
            readonly IHyperdriveCore: readonly [7571];
            readonly IHyperdriveEvents: readonly [7814];
            readonly IHyperdriveRead: readonly [8071];
            readonly IMultiToken: readonly [8188];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:14662:44";
        readonly nodes: readonly [{
            readonly id: 7060;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:23:44";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 7062;
            readonly nodeType: "ImportDirective";
            readonly src: "64:38:44";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IERC20.sol";
            readonly file: "./IERC20.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 7412;
            readonly sourceUnit: 6741;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 7061;
                    readonly name: "IERC20";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 6740;
                    readonly src: "73:6:44";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 7064;
            readonly nodeType: "ImportDirective";
            readonly src: "103:56:44";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IHyperdriveCore.sol";
            readonly file: "./IHyperdriveCore.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 7412;
            readonly sourceUnit: 7572;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 7063;
                    readonly name: "IHyperdriveCore";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 7571;
                    readonly src: "112:15:44";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 7066;
            readonly nodeType: "ImportDirective";
            readonly src: "160:60:44";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IHyperdriveEvents.sol";
            readonly file: "./IHyperdriveEvents.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 7412;
            readonly sourceUnit: 7815;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 7065;
                    readonly name: "IHyperdriveEvents";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 7814;
                    readonly src: "169:17:44";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 7068;
            readonly nodeType: "ImportDirective";
            readonly src: "221:56:44";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IHyperdriveRead.sol";
            readonly file: "./IHyperdriveRead.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 7412;
            readonly sourceUnit: 8072;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 7067;
                    readonly name: "IHyperdriveRead";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 8071;
                    readonly src: "230:15:44";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 7070;
            readonly nodeType: "ImportDirective";
            readonly src: "278:48:44";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IMultiToken.sol";
            readonly file: "./IMultiToken.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 7412;
            readonly sourceUnit: 8189;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 7069;
                    readonly name: "IMultiToken";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 8188;
                    readonly src: "287:11:44";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 7411;
            readonly nodeType: "ContractDefinition";
            readonly src: "328:14372:44";
            readonly nodes: readonly [{
                readonly id: 7116;
                readonly nodeType: "StructDefinition";
                readonly src: "461:1279:44";
                readonly nodes: readonly [];
                readonly canonicalName: "IHyperdrive.MarketState";
                readonly documentation: {
                    readonly id: 7079;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "440:16:44";
                    readonly text: "Structs ///";
                };
                readonly members: readonly [{
                    readonly constant: false;
                    readonly id: 7082;
                    readonly mutability: "mutable";
                    readonly name: "shareReserves";
                    readonly nameLocation: "542:13:44";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 7116;
                    readonly src: "534:21:44";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint128";
                        readonly typeString: "uint128";
                    };
                    readonly typeName: {
                        readonly id: 7081;
                        readonly name: "uint128";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "534:7:44";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint128";
                            readonly typeString: "uint128";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 7085;
                    readonly mutability: "mutable";
                    readonly name: "bondReserves";
                    readonly nameLocation: "616:12:44";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 7116;
                    readonly src: "608:20:44";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint128";
                        readonly typeString: "uint128";
                    };
                    readonly typeName: {
                        readonly id: 7084;
                        readonly name: "uint128";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "608:7:44";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint128";
                            readonly typeString: "uint128";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 7088;
                    readonly mutability: "mutable";
                    readonly name: "longExposure";
                    readonly nameLocation: "713:12:44";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 7116;
                    readonly src: "705:20:44";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint128";
                        readonly typeString: "uint128";
                    };
                    readonly typeName: {
                        readonly id: 7087;
                        readonly name: "uint128";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "705:7:44";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint128";
                            readonly typeString: "uint128";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 7091;
                    readonly mutability: "mutable";
                    readonly name: "longsOutstanding";
                    readonly nameLocation: "801:16:44";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 7116;
                    readonly src: "793:24:44";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint128";
                        readonly typeString: "uint128";
                    };
                    readonly typeName: {
                        readonly id: 7090;
                        readonly name: "uint128";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "793:7:44";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint128";
                            readonly typeString: "uint128";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 7094;
                    readonly mutability: "mutable";
                    readonly name: "shareAdjustment";
                    readonly nameLocation: "971:15:44";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 7116;
                    readonly src: "964:22:44";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_int128";
                        readonly typeString: "int128";
                    };
                    readonly typeName: {
                        readonly id: 7093;
                        readonly name: "int128";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "964:6:44";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int128";
                            readonly typeString: "int128";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 7097;
                    readonly mutability: "mutable";
                    readonly name: "shortsOutstanding";
                    readonly nameLocation: "1063:17:44";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 7116;
                    readonly src: "1055:25:44";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint128";
                        readonly typeString: "uint128";
                    };
                    readonly typeName: {
                        readonly id: 7096;
                        readonly name: "uint128";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "1055:7:44";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint128";
                            readonly typeString: "uint128";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 7100;
                    readonly mutability: "mutable";
                    readonly name: "longAverageMaturityTime";
                    readonly nameLocation: "1172:23:44";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 7116;
                    readonly src: "1164:31:44";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint128";
                        readonly typeString: "uint128";
                    };
                    readonly typeName: {
                        readonly id: 7099;
                        readonly name: "uint128";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "1164:7:44";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint128";
                            readonly typeString: "uint128";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 7103;
                    readonly mutability: "mutable";
                    readonly name: "shortAverageMaturityTime";
                    readonly nameLocation: "1288:24:44";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 7116;
                    readonly src: "1280:32:44";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint128";
                        readonly typeString: "uint128";
                    };
                    readonly typeName: {
                        readonly id: 7102;
                        readonly name: "uint128";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "1280:7:44";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint128";
                            readonly typeString: "uint128";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 7106;
                    readonly mutability: "mutable";
                    readonly name: "isInitialized";
                    readonly nameLocation: "1408:13:44";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 7116;
                    readonly src: "1403:18:44";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bool";
                        readonly typeString: "bool";
                    };
                    readonly typeName: {
                        readonly id: 7105;
                        readonly name: "bool";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "1403:4:44";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 7109;
                    readonly mutability: "mutable";
                    readonly name: "isPaused";
                    readonly nameLocation: "1506:8:44";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 7116;
                    readonly src: "1501:13:44";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bool";
                        readonly typeString: "bool";
                    };
                    readonly typeName: {
                        readonly id: 7108;
                        readonly name: "bool";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "1501:4:44";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 7112;
                    readonly mutability: "mutable";
                    readonly name: "zombieBaseProceeds";
                    readonly nameLocation: "1607:18:44";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 7116;
                    readonly src: "1599:26:44";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint112";
                        readonly typeString: "uint112";
                    };
                    readonly typeName: {
                        readonly id: 7111;
                        readonly name: "uint112";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "1599:7:44";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint112";
                            readonly typeString: "uint112";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 7115;
                    readonly mutability: "mutable";
                    readonly name: "zombieShareReserves";
                    readonly nameLocation: "1714:19:44";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 7116;
                    readonly src: "1706:27:44";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint128";
                        readonly typeString: "uint128";
                    };
                    readonly typeName: {
                        readonly id: 7114;
                        readonly name: "uint128";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "1706:7:44";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint128";
                            readonly typeString: "uint128";
                        };
                    };
                    readonly visibility: "internal";
                }];
                readonly name: "MarketState";
                readonly nameLocation: "468:11:44";
                readonly scope: 7411;
                readonly visibility: "public";
            }, {
                readonly id: 7120;
                readonly nodeType: "StructDefinition";
                readonly src: "1746:332:44";
                readonly nodes: readonly [];
                readonly canonicalName: "IHyperdrive.Checkpoint";
                readonly members: readonly [{
                    readonly constant: false;
                    readonly id: 7119;
                    readonly mutability: "mutable";
                    readonly name: "vaultSharePrice";
                    readonly nameLocation: "2056:15:44";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 7120;
                    readonly src: "2048:23:44";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint128";
                        readonly typeString: "uint128";
                    };
                    readonly typeName: {
                        readonly id: 7118;
                        readonly name: "uint128";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "2048:7:44";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint128";
                            readonly typeString: "uint128";
                        };
                    };
                    readonly visibility: "internal";
                }];
                readonly name: "Checkpoint";
                readonly nameLocation: "1753:10:44";
                readonly scope: 7411;
                readonly visibility: "public";
            }, {
                readonly id: 7127;
                readonly nodeType: "StructDefinition";
                readonly src: "2084:230:44";
                readonly nodes: readonly [];
                readonly canonicalName: "IHyperdrive.WithdrawPool";
                readonly members: readonly [{
                    readonly constant: false;
                    readonly id: 7123;
                    readonly mutability: "mutable";
                    readonly name: "readyToWithdraw";
                    readonly nameLocation: "2202:15:44";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 7127;
                    readonly src: "2194:23:44";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint128";
                        readonly typeString: "uint128";
                    };
                    readonly typeName: {
                        readonly id: 7122;
                        readonly name: "uint128";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "2194:7:44";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint128";
                            readonly typeString: "uint128";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 7126;
                    readonly mutability: "mutable";
                    readonly name: "proceeds";
                    readonly nameLocation: "2299:8:44";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 7127;
                    readonly src: "2291:16:44";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint128";
                        readonly typeString: "uint128";
                    };
                    readonly typeName: {
                        readonly id: 7125;
                        readonly name: "uint128";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "2291:7:44";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint128";
                            readonly typeString: "uint128";
                        };
                    };
                    readonly visibility: "internal";
                }];
                readonly name: "WithdrawPool";
                readonly nameLocation: "2091:12:44";
                readonly scope: 7411;
                readonly visibility: "public";
            }, {
                readonly id: 7140;
                readonly nodeType: "StructDefinition";
                readonly src: "2320:410:44";
                readonly nodes: readonly [];
                readonly canonicalName: "IHyperdrive.Fees";
                readonly members: readonly [{
                    readonly constant: false;
                    readonly id: 7130;
                    readonly mutability: "mutable";
                    readonly name: "curve";
                    readonly nameLocation: "2419:5:44";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 7140;
                    readonly src: "2411:13:44";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                    readonly typeName: {
                        readonly id: 7129;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "2411:7:44";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 7133;
                    readonly mutability: "mutable";
                    readonly name: "flat";
                    readonly nameLocation: "2510:4:44";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 7140;
                    readonly src: "2502:12:44";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                    readonly typeName: {
                        readonly id: 7132;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "2502:7:44";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 7136;
                    readonly mutability: "mutable";
                    readonly name: "governanceLP";
                    readonly nameLocation: "2600:12:44";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 7140;
                    readonly src: "2592:20:44";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                    readonly typeName: {
                        readonly id: 7135;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "2592:7:44";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 7139;
                    readonly mutability: "mutable";
                    readonly name: "governanceZombie";
                    readonly nameLocation: "2707:16:44";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 7140;
                    readonly src: "2699:24:44";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                    readonly typeName: {
                        readonly id: 7138;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "2699:7:44";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly visibility: "internal";
                }];
                readonly name: "Fees";
                readonly nameLocation: "2327:4:44";
                readonly scope: 7411;
                readonly visibility: "public";
            }, {
                readonly id: 7176;
                readonly nodeType: "StructDefinition";
                readonly src: "2736:1168:44";
                readonly nodes: readonly [];
                readonly canonicalName: "IHyperdrive.PoolDeployConfig";
                readonly members: readonly [{
                    readonly constant: false;
                    readonly id: 7144;
                    readonly mutability: "mutable";
                    readonly name: "baseToken";
                    readonly nameLocation: "2825:9:44";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 7176;
                    readonly src: "2818:16:44";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_contract$_IERC20_$6740";
                        readonly typeString: "contract IERC20";
                    };
                    readonly typeName: {
                        readonly id: 7143;
                        readonly nodeType: "UserDefinedTypeName";
                        readonly pathNode: {
                            readonly id: 7142;
                            readonly name: "IERC20";
                            readonly nameLocations: readonly ["2818:6:44"];
                            readonly nodeType: "IdentifierPath";
                            readonly referencedDeclaration: 6740;
                            readonly src: "2818:6:44";
                        };
                        readonly referencedDeclaration: 6740;
                        readonly src: "2818:6:44";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_IERC20_$6740";
                            readonly typeString: "contract IERC20";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 7147;
                    readonly mutability: "mutable";
                    readonly name: "linkerFactory";
                    readonly nameLocation: "2922:13:44";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 7176;
                    readonly src: "2914:21:44";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                    readonly typeName: {
                        readonly id: 7146;
                        readonly name: "address";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "2914:7:44";
                        readonly stateMutability: "nonpayable";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 7150;
                    readonly mutability: "mutable";
                    readonly name: "linkerCodeHash";
                    readonly nameLocation: "3113:14:44";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 7176;
                    readonly src: "3105:22:44";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bytes32";
                        readonly typeString: "bytes32";
                    };
                    readonly typeName: {
                        readonly id: 7149;
                        readonly name: "bytes32";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "3105:7:44";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 7153;
                    readonly mutability: "mutable";
                    readonly name: "minimumShareReserves";
                    readonly nameLocation: "3190:20:44";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 7176;
                    readonly src: "3182:28:44";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                    readonly typeName: {
                        readonly id: 7152;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "3182:7:44";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 7156;
                    readonly mutability: "mutable";
                    readonly name: "minimumTransactionAmount";
                    readonly nameLocation: "3337:24:44";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 7176;
                    readonly src: "3329:32:44";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                    readonly typeName: {
                        readonly id: 7155;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "3329:7:44";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 7159;
                    readonly mutability: "mutable";
                    readonly name: "positionDuration";
                    readonly nameLocation: "3442:16:44";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 7176;
                    readonly src: "3434:24:44";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                    readonly typeName: {
                        readonly id: 7158;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "3434:7:44";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 7162;
                    readonly mutability: "mutable";
                    readonly name: "checkpointDuration";
                    readonly nameLocation: "3523:18:44";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 7176;
                    readonly src: "3515:26:44";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                    readonly typeName: {
                        readonly id: 7161;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "3515:7:44";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 7165;
                    readonly mutability: "mutable";
                    readonly name: "timeStretch";
                    readonly nameLocation: "3635:11:44";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 7176;
                    readonly src: "3627:19:44";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                    readonly typeName: {
                        readonly id: 7164;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "3627:7:44";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 7168;
                    readonly mutability: "mutable";
                    readonly name: "governance";
                    readonly nameLocation: "3721:10:44";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 7176;
                    readonly src: "3713:18:44";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                    readonly typeName: {
                        readonly id: 7167;
                        readonly name: "address";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "3713:7:44";
                        readonly stateMutability: "nonpayable";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 7171;
                    readonly mutability: "mutable";
                    readonly name: "feeCollector";
                    readonly nameLocation: "3809:12:44";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 7176;
                    readonly src: "3801:20:44";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                    readonly typeName: {
                        readonly id: 7170;
                        readonly name: "address";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "3801:7:44";
                        readonly stateMutability: "nonpayable";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 7175;
                    readonly mutability: "mutable";
                    readonly name: "fees";
                    readonly nameLocation: "3893:4:44";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 7176;
                    readonly src: "3876:21:44";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_struct$_Fees_$7140_storage_ptr";
                        readonly typeString: "struct IHyperdrive.Fees";
                    };
                    readonly typeName: {
                        readonly id: 7174;
                        readonly nodeType: "UserDefinedTypeName";
                        readonly pathNode: {
                            readonly id: 7173;
                            readonly name: "IHyperdrive.Fees";
                            readonly nameLocations: readonly ["3876:11:44", "3888:4:44"];
                            readonly nodeType: "IdentifierPath";
                            readonly referencedDeclaration: 7140;
                            readonly src: "3876:16:44";
                        };
                        readonly referencedDeclaration: 7140;
                        readonly src: "3876:16:44";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_Fees_$7140_storage_ptr";
                            readonly typeString: "struct IHyperdrive.Fees";
                        };
                    };
                    readonly visibility: "internal";
                }];
                readonly name: "PoolDeployConfig";
                readonly nameLocation: "2743:16:44";
                readonly scope: 7411;
                readonly visibility: "public";
            }, {
                readonly id: 7215;
                readonly nodeType: "StructDefinition";
                readonly src: "3910:1250:44";
                readonly nodes: readonly [];
                readonly canonicalName: "IHyperdrive.PoolConfig";
                readonly members: readonly [{
                    readonly constant: false;
                    readonly id: 7180;
                    readonly mutability: "mutable";
                    readonly name: "baseToken";
                    readonly nameLocation: "3993:9:44";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 7215;
                    readonly src: "3986:16:44";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_contract$_IERC20_$6740";
                        readonly typeString: "contract IERC20";
                    };
                    readonly typeName: {
                        readonly id: 7179;
                        readonly nodeType: "UserDefinedTypeName";
                        readonly pathNode: {
                            readonly id: 7178;
                            readonly name: "IERC20";
                            readonly nameLocations: readonly ["3986:6:44"];
                            readonly nodeType: "IdentifierPath";
                            readonly referencedDeclaration: 6740;
                            readonly src: "3986:6:44";
                        };
                        readonly referencedDeclaration: 6740;
                        readonly src: "3986:6:44";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_IERC20_$6740";
                            readonly typeString: "contract IERC20";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 7183;
                    readonly mutability: "mutable";
                    readonly name: "linkerFactory";
                    readonly nameLocation: "4090:13:44";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 7215;
                    readonly src: "4082:21:44";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                    readonly typeName: {
                        readonly id: 7182;
                        readonly name: "address";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "4082:7:44";
                        readonly stateMutability: "nonpayable";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 7186;
                    readonly mutability: "mutable";
                    readonly name: "linkerCodeHash";
                    readonly nameLocation: "4281:14:44";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 7215;
                    readonly src: "4273:22:44";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bytes32";
                        readonly typeString: "bytes32";
                    };
                    readonly typeName: {
                        readonly id: 7185;
                        readonly name: "bytes32";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "4273:7:44";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 7189;
                    readonly mutability: "mutable";
                    readonly name: "initialVaultSharePrice";
                    readonly nameLocation: "4361:22:44";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 7215;
                    readonly src: "4353:30:44";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                    readonly typeName: {
                        readonly id: 7188;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "4353:7:44";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 7192;
                    readonly mutability: "mutable";
                    readonly name: "minimumShareReserves";
                    readonly nameLocation: "4446:20:44";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 7215;
                    readonly src: "4438:28:44";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                    readonly typeName: {
                        readonly id: 7191;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "4438:7:44";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 7195;
                    readonly mutability: "mutable";
                    readonly name: "minimumTransactionAmount";
                    readonly nameLocation: "4593:24:44";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 7215;
                    readonly src: "4585:32:44";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                    readonly typeName: {
                        readonly id: 7194;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "4585:7:44";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 7198;
                    readonly mutability: "mutable";
                    readonly name: "positionDuration";
                    readonly nameLocation: "4698:16:44";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 7215;
                    readonly src: "4690:24:44";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                    readonly typeName: {
                        readonly id: 7197;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "4690:7:44";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 7201;
                    readonly mutability: "mutable";
                    readonly name: "checkpointDuration";
                    readonly nameLocation: "4779:18:44";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 7215;
                    readonly src: "4771:26:44";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                    readonly typeName: {
                        readonly id: 7200;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "4771:7:44";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 7204;
                    readonly mutability: "mutable";
                    readonly name: "timeStretch";
                    readonly nameLocation: "4891:11:44";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 7215;
                    readonly src: "4883:19:44";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                    readonly typeName: {
                        readonly id: 7203;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "4883:7:44";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 7207;
                    readonly mutability: "mutable";
                    readonly name: "governance";
                    readonly nameLocation: "4977:10:44";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 7215;
                    readonly src: "4969:18:44";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                    readonly typeName: {
                        readonly id: 7206;
                        readonly name: "address";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "4969:7:44";
                        readonly stateMutability: "nonpayable";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 7210;
                    readonly mutability: "mutable";
                    readonly name: "feeCollector";
                    readonly nameLocation: "5065:12:44";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 7215;
                    readonly src: "5057:20:44";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                    readonly typeName: {
                        readonly id: 7209;
                        readonly name: "address";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "5057:7:44";
                        readonly stateMutability: "nonpayable";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 7214;
                    readonly mutability: "mutable";
                    readonly name: "fees";
                    readonly nameLocation: "5149:4:44";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 7215;
                    readonly src: "5132:21:44";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_struct$_Fees_$7140_storage_ptr";
                        readonly typeString: "struct IHyperdrive.Fees";
                    };
                    readonly typeName: {
                        readonly id: 7213;
                        readonly nodeType: "UserDefinedTypeName";
                        readonly pathNode: {
                            readonly id: 7212;
                            readonly name: "IHyperdrive.Fees";
                            readonly nameLocations: readonly ["5132:11:44", "5144:4:44"];
                            readonly nodeType: "IdentifierPath";
                            readonly referencedDeclaration: 7140;
                            readonly src: "5132:16:44";
                        };
                        readonly referencedDeclaration: 7140;
                        readonly src: "5132:16:44";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_Fees_$7140_storage_ptr";
                            readonly typeString: "struct IHyperdrive.Fees";
                        };
                    };
                    readonly visibility: "internal";
                }];
                readonly name: "PoolConfig";
                readonly nameLocation: "3917:10:44";
                readonly scope: 7411;
                readonly visibility: "public";
            }, {
                readonly id: 7261;
                readonly nodeType: "StructDefinition";
                readonly src: "5166:1759:44";
                readonly nodes: readonly [];
                readonly canonicalName: "IHyperdrive.PoolInfo";
                readonly members: readonly [{
                    readonly constant: false;
                    readonly id: 7218;
                    readonly mutability: "mutable";
                    readonly name: "shareReserves";
                    readonly nameLocation: "5258:13:44";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 7261;
                    readonly src: "5250:21:44";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                    readonly typeName: {
                        readonly id: 7217;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "5250:7:44";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 7221;
                    readonly mutability: "mutable";
                    readonly name: "shareAdjustment";
                    readonly nameLocation: "5513:15:44";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 7261;
                    readonly src: "5506:22:44";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_int256";
                        readonly typeString: "int256";
                    };
                    readonly typeName: {
                        readonly id: 7220;
                        readonly name: "int256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "5506:6:44";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 7224;
                    readonly mutability: "mutable";
                    readonly name: "zombieBaseProceeds";
                    readonly nameLocation: "5621:18:44";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 7261;
                    readonly src: "5613:26:44";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                    readonly typeName: {
                        readonly id: 7223;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "5613:7:44";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 7227;
                    readonly mutability: "mutable";
                    readonly name: "zombieShareReserves";
                    readonly nameLocation: "5728:19:44";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 7261;
                    readonly src: "5720:27:44";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                    readonly typeName: {
                        readonly id: 7226;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "5720:7:44";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 7230;
                    readonly mutability: "mutable";
                    readonly name: "bondReserves";
                    readonly nameLocation: "5822:12:44";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 7261;
                    readonly src: "5814:20:44";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                    readonly typeName: {
                        readonly id: 7229;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "5814:7:44";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 7233;
                    readonly mutability: "mutable";
                    readonly name: "lpTotalSupply";
                    readonly nameLocation: "5900:13:44";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 7261;
                    readonly src: "5892:21:44";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                    readonly typeName: {
                        readonly id: 7232;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "5892:7:44";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 7236;
                    readonly mutability: "mutable";
                    readonly name: "vaultSharePrice";
                    readonly nameLocation: "5979:15:44";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 7261;
                    readonly src: "5971:23:44";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                    readonly typeName: {
                        readonly id: 7235;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "5971:7:44";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 7239;
                    readonly mutability: "mutable";
                    readonly name: "longsOutstanding";
                    readonly nameLocation: "6090:16:44";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 7261;
                    readonly src: "6082:24:44";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                    readonly typeName: {
                        readonly id: 7238;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "6082:7:44";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 7242;
                    readonly mutability: "mutable";
                    readonly name: "longAverageMaturityTime";
                    readonly nameLocation: "6193:23:44";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 7261;
                    readonly src: "6185:31:44";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                    readonly typeName: {
                        readonly id: 7241;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "6185:7:44";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 7245;
                    readonly mutability: "mutable";
                    readonly name: "shortsOutstanding";
                    readonly nameLocation: "6313:17:44";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 7261;
                    readonly src: "6305:25:44";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                    readonly typeName: {
                        readonly id: 7244;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "6305:7:44";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 7248;
                    readonly mutability: "mutable";
                    readonly name: "shortAverageMaturityTime";
                    readonly nameLocation: "6418:24:44";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 7261;
                    readonly src: "6410:32:44";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                    readonly typeName: {
                        readonly id: 7247;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "6410:7:44";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 7251;
                    readonly mutability: "mutable";
                    readonly name: "withdrawalSharesReadyToWithdraw";
                    readonly nameLocation: "6540:31:44";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 7261;
                    readonly src: "6532:39:44";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                    readonly typeName: {
                        readonly id: 7250;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "6532:7:44";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 7254;
                    readonly mutability: "mutable";
                    readonly name: "withdrawalSharesProceeds";
                    readonly nameLocation: "6653:24:44";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 7261;
                    readonly src: "6645:32:44";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                    readonly typeName: {
                        readonly id: 7253;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "6645:7:44";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 7257;
                    readonly mutability: "mutable";
                    readonly name: "lpSharePrice";
                    readonly nameLocation: "6805:12:44";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 7261;
                    readonly src: "6797:20:44";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                    readonly typeName: {
                        readonly id: 7256;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "6797:7:44";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 7260;
                    readonly mutability: "mutable";
                    readonly name: "longExposure";
                    readonly nameLocation: "6906:12:44";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 7261;
                    readonly src: "6898:20:44";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                    readonly typeName: {
                        readonly id: 7259;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "6898:7:44";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly visibility: "internal";
                }];
                readonly name: "PoolInfo";
                readonly nameLocation: "5173:8:44";
                readonly scope: 7411;
                readonly visibility: "public";
            }, {
                readonly id: 7271;
                readonly nodeType: "StructDefinition";
                readonly src: "6931:458:44";
                readonly nodes: readonly [];
                readonly canonicalName: "IHyperdrive.Options";
                readonly members: readonly [{
                    readonly constant: false;
                    readonly id: 7264;
                    readonly mutability: "mutable";
                    readonly name: "destination";
                    readonly nameLocation: "7045:11:44";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 7271;
                    readonly src: "7037:19:44";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                    readonly typeName: {
                        readonly id: 7263;
                        readonly name: "address";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "7037:7:44";
                        readonly stateMutability: "nonpayable";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 7267;
                    readonly mutability: "mutable";
                    readonly name: "asBase";
                    readonly nameLocation: "7229:6:44";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 7271;
                    readonly src: "7224:11:44";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bool";
                        readonly typeString: "bool";
                    };
                    readonly typeName: {
                        readonly id: 7266;
                        readonly name: "bool";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "7224:4:44";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 7270;
                    readonly mutability: "mutable";
                    readonly name: "extraData";
                    readonly nameLocation: "7373:9:44";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 7271;
                    readonly src: "7367:15:44";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bytes_storage_ptr";
                        readonly typeString: "bytes";
                    };
                    readonly typeName: {
                        readonly id: 7269;
                        readonly name: "bytes";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "7367:5:44";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_storage_ptr";
                            readonly typeString: "bytes";
                        };
                    };
                    readonly visibility: "internal";
                }];
                readonly name: "Options";
                readonly nameLocation: "6938:7:44";
                readonly scope: 7411;
                readonly visibility: "public";
            }, {
                readonly id: 7277;
                readonly nodeType: "EnumDefinition";
                readonly src: "7477:504:44";
                readonly nodes: readonly [];
                readonly canonicalName: "IHyperdrive.InsufficientLiquidityReason";
                readonly documentation: {
                    readonly id: 7272;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "7414:58:44";
                    readonly text: "@notice The reason for an InsufficientLiquidity error.";
                };
                readonly members: readonly [{
                    readonly id: 7273;
                    readonly name: "ArithmeticUnderflow";
                    readonly nameLocation: "7584:19:44";
                    readonly nodeType: "EnumValue";
                    readonly src: "7584:19:44";
                }, {
                    readonly id: 7274;
                    readonly name: "InvalidEffectiveShareReserves";
                    readonly nameLocation: "7728:29:44";
                    readonly nodeType: "EnumValue";
                    readonly src: "7728:29:44";
                }, {
                    readonly id: 7275;
                    readonly name: "NegativeInterest";
                    readonly nameLocation: "7870:16:44";
                    readonly nodeType: "EnumValue";
                    readonly src: "7870:16:44";
                }, {
                    readonly id: 7276;
                    readonly name: "SolvencyViolated";
                    readonly nameLocation: "7959:16:44";
                    readonly nodeType: "EnumValue";
                    readonly src: "7959:16:44";
                }];
                readonly name: "InsufficientLiquidityReason";
                readonly nameLocation: "7482:27:44";
            }, {
                readonly id: 7280;
                readonly nodeType: "ErrorDefinition";
                readonly src: "8105:33:44";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 7278;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "8007:93:44";
                    readonly text: "@notice Thrown when the inputs to a batch transfer don't match in\n         length.";
                };
                readonly errorSelector: "ba430d38";
                readonly name: "BatchInputLengthMismatch";
                readonly nameLocation: "8111:24:44";
                readonly parameters: {
                    readonly id: 7279;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "8135:2:44";
                };
            }, {
                readonly id: 7283;
                readonly nodeType: "ErrorDefinition";
                readonly src: "8346:33:44";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 7281;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "8144:197:44";
                    readonly text: "@notice Thrown when the initializer doesn't provide sufficient liquidity\n         to cover the minimum share reserves and the LP shares that are\n         burned on initialization.";
                };
                readonly errorSelector: "abed41c4";
                readonly name: "BelowMinimumContribution";
                readonly nameLocation: "8352:24:44";
                readonly parameters: {
                    readonly id: 7282;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "8376:2:44";
                };
            }, {
                readonly id: 7286;
                readonly nodeType: "ErrorDefinition";
                readonly src: "8536:27:44";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 7284;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "8385:146:44";
                    readonly text: "@notice Thrown when the exponent to `FixedPointMath.exp` would cause the\n         the result to be larger than the representable scale.";
                };
                readonly errorSelector: "73a2d6b1";
                readonly name: "ExpInvalidExponent";
                readonly nameLocation: "8542:18:44";
                readonly parameters: {
                    readonly id: 7285;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "8560:2:44";
                };
            }, {
                readonly id: 7289;
                readonly nodeType: "ErrorDefinition";
                readonly src: "8628:24:44";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 7287;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "8569:54:44";
                    readonly text: "@notice Thrown when a permit signature is expired.";
                };
                readonly errorSelector: "f87d9271";
                readonly name: "ExpiredDeadline";
                readonly nameLocation: "8634:15:44";
                readonly parameters: {
                    readonly id: 7288;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "8649:2:44";
                };
            }, {
                readonly id: 7292;
                readonly nodeType: "ErrorDefinition";
                readonly src: "8765:28:44";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 7290;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "8658:102:44";
                    readonly text: "@notice Thrown when a user doesn't have a sufficient balance to perform\n         an action.";
                };
                readonly errorSelector: "f4d678b8";
                readonly name: "InsufficientBalance";
                readonly nameLocation: "8771:19:44";
                readonly parameters: {
                    readonly id: 7291;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "8790:2:44";
                };
            }, {
                readonly id: 7298;
                readonly nodeType: "ErrorDefinition";
                readonly src: "8909:64:44";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 7293;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "8799:105:44";
                    readonly text: "@notice Thrown when the pool doesn't have sufficient liquidity to\n         complete the trade.";
                };
                readonly errorSelector: "780daf16";
                readonly name: "InsufficientLiquidity";
                readonly nameLocation: "8915:21:44";
                readonly parameters: {
                    readonly id: 7297;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 7296;
                        readonly mutability: "mutable";
                        readonly name: "reason";
                        readonly nameLocation: "8965:6:44";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 7298;
                        readonly src: "8937:34:44";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_enum$_InsufficientLiquidityReason_$7277";
                            readonly typeString: "enum IHyperdrive.InsufficientLiquidityReason";
                        };
                        readonly typeName: {
                            readonly id: 7295;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 7294;
                                readonly name: "InsufficientLiquidityReason";
                                readonly nameLocations: readonly ["8937:27:44"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 7277;
                                readonly src: "8937:27:44";
                            };
                            readonly referencedDeclaration: 7277;
                            readonly src: "8937:27:44";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_enum$_InsufficientLiquidityReason_$7277";
                                readonly typeString: "enum IHyperdrive.InsufficientLiquidityReason";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "8936:36:44";
                };
            }, {
                readonly id: 7301;
                readonly nodeType: "ErrorDefinition";
                readonly src: "9110:19:44";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 7299;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "8979:126:44";
                    readonly text: "@notice Thrown when the pool's APR is outside the bounds specified by\n         a LP when they are adding liquidity.";
                };
                readonly errorSelector: "76c22a22";
                readonly name: "InvalidApr";
                readonly nameLocation: "9116:10:44";
                readonly parameters: {
                    readonly id: 7300;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "9126:2:44";
                };
            }, {
                readonly id: 7304;
                readonly nodeType: "ErrorDefinition";
                readonly src: "9291:25:44";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 7302;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "9135:151:44";
                    readonly text: "@notice Thrown when the base token isn't valid. Each instance will have\n         different criteria for what constitutes a valid base token.";
                };
                readonly errorSelector: "0e442a4a";
                readonly name: "InvalidBaseToken";
                readonly nameLocation: "9297:16:44";
                readonly parameters: {
                    readonly id: 7303;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "9313:2:44";
                };
            }, {
                readonly id: 7307;
                readonly nodeType: "ErrorDefinition";
                readonly src: "9512:30:44";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 7305;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "9322:185:44";
                    readonly text: "@notice Thrown when the checkpoint time provided to `checkpoint` is\n         larger than the current checkpoint or isn't divisible by the\n         checkpoint duration.";
                };
                readonly errorSelector: "ecd29e81";
                readonly name: "InvalidCheckpointTime";
                readonly nameLocation: "9518:21:44";
                readonly parameters: {
                    readonly id: 7306;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "9539:2:44";
                };
            }, {
                readonly id: 7310;
                readonly nodeType: "ErrorDefinition";
                readonly src: "9681:27:44";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 7308;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "9548:128:44";
                    readonly text: "@notice Thrown when the caller of one of MultiToken's bridge-only\n         functions is not the corresponding bridge.";
                };
                readonly errorSelector: "2aab8bd3";
                readonly name: "InvalidERC20Bridge";
                readonly nameLocation: "9687:18:44";
                readonly parameters: {
                    readonly id: 7309;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "9705:2:44";
                };
            }, {
                readonly id: 7313;
                readonly nodeType: "ErrorDefinition";
                readonly src: "9841:30:44";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 7311;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "9714:122:44";
                    readonly text: "@notice Thrown when a destination other than the fee collector is\n         specified in `collectGovernanceFee`.";
                };
                readonly errorSelector: "2b44eccc";
                readonly name: "InvalidFeeDestination";
                readonly nameLocation: "9847:21:44";
                readonly parameters: {
                    readonly id: 7312;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "9868:2:44";
                };
            }, {
                readonly id: 7316;
                readonly nodeType: "ErrorDefinition";
                readonly src: "10021:38:44";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 7314;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "9877:139:44";
                    readonly text: "@notice Thrown when the initial share price doesn't match the share\n         price of the underlying yield source on deployment.";
                };
                readonly errorSelector: "094b19ad";
                readonly name: "InvalidInitialVaultSharePrice";
                readonly nameLocation: "10027:29:44";
                readonly parameters: {
                    readonly id: 7315;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "10056:2:44";
                };
            }, {
                readonly id: 7319;
                readonly nodeType: "ErrorDefinition";
                readonly src: "10186:29:44";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 7317;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "10065:116:44";
                    readonly text: "@notice Thrown when update liquidity brings the share reserves below\n         the minimum share reserves.";
                };
                readonly errorSelector: "b0bfcdbe";
                readonly name: "InvalidShareReserves";
                readonly nameLocation: "10192:20:44";
                readonly parameters: {
                    readonly id: 7318;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "10212:2:44";
                };
            }, {
                readonly id: 7322;
                readonly nodeType: "ErrorDefinition";
                readonly src: "10438:25:44";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 7320;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "10221:212:44";
                    readonly text: "@notice Thrown when an invalid signature is used provide permit access\n         to the MultiToken. A signature is considered to be invalid if\n         it fails to recover to the owner's address.";
                };
                readonly errorSelector: "8baa579f";
                readonly name: "InvalidSignature";
                readonly nameLocation: "10444:16:44";
                readonly parameters: {
                    readonly id: 7321;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "10460:2:44";
                };
            }, {
                readonly id: 7325;
                readonly nodeType: "ErrorDefinition";
                readonly src: "10584:25:44";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 7323;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "10469:110:44";
                    readonly text: "@notice Thrown when the timestamp used to construct an asset ID exceeds\n         the uint248 scale.";
                };
                readonly errorSelector: "b7d09497";
                readonly name: "InvalidTimestamp";
                readonly nameLocation: "10590:16:44";
                readonly parameters: {
                    readonly id: 7324;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "10606:2:44";
                };
            }, {
                readonly id: 7328;
                readonly nodeType: "ErrorDefinition";
                readonly src: "10723:23:44";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 7326;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "10615:103:44";
                    readonly text: "@notice Thrown when the input to `FixedPointMath.ln` is less than or\n         equal to zero.";
                };
                readonly errorSelector: "e61b4975";
                readonly name: "LnInvalidInput";
                readonly nameLocation: "10729:14:44";
                readonly parameters: {
                    readonly id: 7327;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "10743:2:44";
                };
            }, {
                readonly id: 7331;
                readonly nodeType: "ErrorDefinition";
                readonly src: "10971:26:44";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 7329;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "10752:214:44";
                    readonly text: "@notice Thrown when vault share price is smaller than the minimum share\n         price. This protects traders from unknowingly opening a long or\n         short after negative interest has accrued.";
                };
                readonly errorSelector: "42af972b";
                readonly name: "MinimumSharePrice";
                readonly nameLocation: "10977:17:44";
                readonly parameters: {
                    readonly id: 7330;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "10994:2:44";
                };
            }, {
                readonly id: 7334;
                readonly nodeType: "ErrorDefinition";
                readonly src: "11236:33:44";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 7332;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "11003:228:44";
                    readonly text: "@notice Thrown when the input or output amount of a trade is smaller\n         than the minimum transaction amount. This protects traders and\n         LPs from losses of precision that can occur at small scales.";
                };
                readonly errorSelector: "423bbb46";
                readonly name: "MinimumTransactionAmount";
                readonly nameLocation: "11242:24:44";
                readonly parameters: {
                    readonly id: 7333;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "11266:2:44";
                };
            }, {
                readonly id: 7337;
                readonly nodeType: "ErrorDefinition";
                readonly src: "11414:29:44";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 7335;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "11275:134:44";
                    readonly text: "@notice Thrown when the present value is negative. Whatever proceeded\n         a negative present value should be reverted.";
                };
                readonly errorSelector: "aeeb825d";
                readonly name: "NegativePresentValue";
                readonly nameLocation: "11420:20:44";
                readonly parameters: {
                    readonly id: 7336;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "11440:2:44";
                };
            }, {
                readonly id: 7340;
                readonly nodeType: "ErrorDefinition";
                readonly src: "11757:49:44";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 7338;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "11449:303:44";
                    readonly text: "@notice Thrown when the present value prior to adding liquidity results in a\n         decrease in present value after liquidity. This is caused by a\n         shortage in liquidity that prevents all the open positions being\n         closed on the curve and therefore marked to 1.";
                };
                readonly errorSelector: "309b2a42";
                readonly name: "DecreasedPresentValueWhenAddingLiquidity";
                readonly nameLocation: "11763:40:44";
                readonly parameters: {
                    readonly id: 7339;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "11803:2:44";
                };
            }, {
                readonly id: 7343;
                readonly nodeType: "ErrorDefinition";
                readonly src: "11931:19:44";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 7341;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "11812:114:44";
                    readonly text: "@notice Thrown when ether is sent to an instance that doesn't accept\n         ether as a deposit asset.";
                };
                readonly errorSelector: "1574f9f3";
                readonly name: "NotPayable";
                readonly nameLocation: "11937:10:44";
                readonly parameters: {
                    readonly id: 7342;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "11947:2:44";
                };
            }, {
                readonly id: 7346;
                readonly nodeType: "ErrorDefinition";
                readonly src: "12014:20:44";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 7344;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "11956:53:44";
                    readonly text: "@notice Thrown when a slippage guard is violated.";
                };
                readonly errorSelector: "c9726517";
                readonly name: "OutputLimit";
                readonly nameLocation: "12020:11:44";
                readonly parameters: {
                    readonly id: 7345;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "12031:2:44";
                };
            }, {
                readonly id: 7349;
                readonly nodeType: "ErrorDefinition";
                readonly src: "12244:31:44";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 7347;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "12040:199:44";
                    readonly text: "@notice Thrown when the pool is already initialized and a trader calls\n         `initialize`. This prevents the pool from being reinitialized\n         after it has been initialized.";
                };
                readonly errorSelector: "7983c051";
                readonly name: "PoolAlreadyInitialized";
                readonly nameLocation: "12250:22:44";
                readonly parameters: {
                    readonly id: 7348;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "12272:2:44";
                };
            }, {
                readonly id: 7352;
                readonly nodeType: "ErrorDefinition";
                readonly src: "12502:21:44";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 7350;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "12281:216:44";
                    readonly text: "@notice Thrown when the pool is paused and a trader tries to add\n         liquidity, open a long, or open a short. Traders can still\n         close their existing positions while the pool is paused.";
                };
                readonly errorSelector: "21081abf";
                readonly name: "PoolIsPaused";
                readonly nameLocation: "12508:12:44";
                readonly parameters: {
                    readonly id: 7351;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "12520:2:44";
                };
            }, {
                readonly id: 7355;
                readonly nodeType: "ErrorDefinition";
                readonly src: "12743:30:44";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 7353;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "12529:209:44";
                    readonly text: "@notice Thrown when the owner passed to permit is the zero address. This\n         prevents users from spending the funds in address zero by\n         sending an invalid signature to ecrecover.";
                };
                readonly errorSelector: "f0dd15fd";
                readonly name: "RestrictedZeroAddress";
                readonly nameLocation: "12749:21:44";
                readonly parameters: {
                    readonly id: 7354;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "12770:2:44";
                };
            }, {
                readonly id: 7360;
                readonly nodeType: "ErrorDefinition";
                readonly src: "13048:29:44";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 7356;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "12779:264:44";
                    readonly text: "@notice Thrown by a read-only function called by the proxy. Unlike a\n         normal error, this error actually indicates that a read-only\n         call succeeded. The data that it wraps is the return data from\n         the read-only call.";
                };
                readonly errorSelector: "dcc81126";
                readonly name: "ReturnData";
                readonly nameLocation: "13054:10:44";
                readonly parameters: {
                    readonly id: 7359;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 7358;
                        readonly mutability: "mutable";
                        readonly name: "data";
                        readonly nameLocation: "13071:4:44";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 7360;
                        readonly src: "13065:10:44";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 7357;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "13065:5:44";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "13064:12:44";
                };
            }, {
                readonly id: 7363;
                readonly nodeType: "ErrorDefinition";
                readonly src: "13208:20:44";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 7361;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "13083:120:44";
                    readonly text: "@notice Thrown when an asset is swept from the pool and one of the\n         pool's depository assets changes.";
                };
                readonly errorSelector: "9eec2ff8";
                readonly name: "SweepFailed";
                readonly nameLocation: "13214:11:44";
                readonly parameters: {
                    readonly id: 7362;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "13225:2:44";
                };
            }, {
                readonly id: 7366;
                readonly nodeType: "ErrorDefinition";
                readonly src: "13287:23:44";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 7364;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "13234:48:44";
                    readonly text: "@notice Thrown when an ether transfer fails.";
                };
                readonly errorSelector: "90b8ec18";
                readonly name: "TransferFailed";
                readonly nameLocation: "13293:14:44";
                readonly parameters: {
                    readonly id: 7365;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "13307:2:44";
                };
            }, {
                readonly id: 7369;
                readonly nodeType: "ErrorDefinition";
                readonly src: "13421:21:44";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 7367;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "13316:100:44";
                    readonly text: "@notice Thrown when an unauthorized user attempts to access admin\n         functionality.";
                };
                readonly errorSelector: "82b42900";
                readonly name: "Unauthorized";
                readonly nameLocation: "13427:12:44";
                readonly parameters: {
                    readonly id: 7368;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "13439:2:44";
                };
            }, {
                readonly id: 7372;
                readonly nodeType: "ErrorDefinition";
                readonly src: "13678:26:44";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 7370;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "13448:225:44";
                    readonly text: "@notice Thrown when a read-only call succeeds. The proxy architecture\n         uses a force-revert delegatecall pattern to ensure that calls\n         that are intended to be read-only are actually read-only.";
                };
                readonly errorSelector: "8bb0a34b";
                readonly name: "UnexpectedSuccess";
                readonly nameLocation: "13684:17:44";
                readonly parameters: {
                    readonly id: 7371;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "13701:2:44";
                };
            }, {
                readonly id: 7375;
                readonly nodeType: "ErrorDefinition";
                readonly src: "13821:28:44";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 7373;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "13710:106:44";
                    readonly text: "@notice Thrown when casting a value to a uint112 that is outside of the\n         uint128 scale.";
                };
                readonly errorSelector: "10d62a2e";
                readonly name: "UnsafeCastToUint112";
                readonly nameLocation: "13827:19:44";
                readonly parameters: {
                    readonly id: 7374;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "13846:2:44";
                };
            }, {
                readonly id: 7378;
                readonly nodeType: "ErrorDefinition";
                readonly src: "13966:28:44";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 7376;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "13855:106:44";
                    readonly text: "@notice Thrown when casting a value to a uint128 that is outside of the\n         uint128 scale.";
                };
                readonly errorSelector: "1e15f2a2";
                readonly name: "UnsafeCastToUint128";
                readonly nameLocation: "13972:19:44";
                readonly parameters: {
                    readonly id: 7377;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "13991:2:44";
                };
            }, {
                readonly id: 7381;
                readonly nodeType: "ErrorDefinition";
                readonly src: "14109:27:44";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 7379;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "14000:104:44";
                    readonly text: "@notice Thrown when casting a value to a int128 that is outside of the\n         int128 scale.";
                };
                readonly errorSelector: "a5353be5";
                readonly name: "UnsafeCastToInt128";
                readonly nameLocation: "14115:18:44";
                readonly parameters: {
                    readonly id: 7380;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "14133:2:44";
                };
            }, {
                readonly id: 7384;
                readonly nodeType: "ErrorDefinition";
                readonly src: "14367:25:44";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 7382;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "14142:220:44";
                    readonly text: "@notice Thrown when an unsupported option is passed to a function or\n         a user attempts to sweep an invalid token. The options and sweep\n         targets that are supported vary between instances.";
                };
                readonly errorSelector: "6a172882";
                readonly name: "UnsupportedToken";
                readonly nameLocation: "14373:16:44";
                readonly parameters: {
                    readonly id: 7383;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "14389:2:44";
                };
            }, {
                readonly id: 7390;
                readonly nodeType: "FunctionDefinition";
                readonly src: "14419:51:44";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 7385;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "14398:16:44";
                    readonly text: "Getters ///";
                };
                readonly functionSelector: "21b57d53";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "target0";
                readonly nameLocation: "14428:7:44";
                readonly parameters: {
                    readonly id: 7386;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "14435:2:44";
                };
                readonly returnParameters: {
                    readonly id: 7389;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 7388;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 7390;
                        readonly src: "14461:7:44";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 7387;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "14461:7:44";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "14460:9:44";
                };
                readonly scope: 7411;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 7395;
                readonly nodeType: "FunctionDefinition";
                readonly src: "14476:51:44";
                readonly nodes: readonly [];
                readonly functionSelector: "eac3e799";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "target1";
                readonly nameLocation: "14485:7:44";
                readonly parameters: {
                    readonly id: 7391;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "14492:2:44";
                };
                readonly returnParameters: {
                    readonly id: 7394;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 7393;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 7395;
                        readonly src: "14518:7:44";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 7392;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "14518:7:44";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "14517:9:44";
                };
                readonly scope: 7411;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 7400;
                readonly nodeType: "FunctionDefinition";
                readonly src: "14533:51:44";
                readonly nodes: readonly [];
                readonly functionSelector: "a6e8a859";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "target2";
                readonly nameLocation: "14542:7:44";
                readonly parameters: {
                    readonly id: 7396;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "14549:2:44";
                };
                readonly returnParameters: {
                    readonly id: 7399;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 7398;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 7400;
                        readonly src: "14575:7:44";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 7397;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "14575:7:44";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "14574:9:44";
                };
                readonly scope: 7411;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 7405;
                readonly nodeType: "FunctionDefinition";
                readonly src: "14590:51:44";
                readonly nodes: readonly [];
                readonly functionSelector: "d899e112";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "target3";
                readonly nameLocation: "14599:7:44";
                readonly parameters: {
                    readonly id: 7401;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "14606:2:44";
                };
                readonly returnParameters: {
                    readonly id: 7404;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 7403;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 7405;
                        readonly src: "14632:7:44";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 7402;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "14632:7:44";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "14631:9:44";
                };
                readonly scope: 7411;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 7410;
                readonly nodeType: "FunctionDefinition";
                readonly src: "14647:51:44";
                readonly nodes: readonly [];
                readonly functionSelector: "f3f70707";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "target4";
                readonly nameLocation: "14656:7:44";
                readonly parameters: {
                    readonly id: 7406;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "14663:2:44";
                };
                readonly returnParameters: {
                    readonly id: 7409;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 7408;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 7410;
                        readonly src: "14689:7:44";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 7407;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "14689:7:44";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "14688:9:44";
                };
                readonly scope: 7411;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 7071;
                    readonly name: "IHyperdriveEvents";
                    readonly nameLocations: readonly ["357:17:44"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 7814;
                    readonly src: "357:17:44";
                };
                readonly id: 7072;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "357:17:44";
            }, {
                readonly baseName: {
                    readonly id: 7073;
                    readonly name: "IHyperdriveRead";
                    readonly nameLocations: readonly ["380:15:44"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 8071;
                    readonly src: "380:15:44";
                };
                readonly id: 7074;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "380:15:44";
            }, {
                readonly baseName: {
                    readonly id: 7075;
                    readonly name: "IHyperdriveCore";
                    readonly nameLocations: readonly ["401:15:44"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 7571;
                    readonly src: "401:15:44";
                };
                readonly id: 7076;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "401:15:44";
            }, {
                readonly baseName: {
                    readonly id: 7077;
                    readonly name: "IMultiToken";
                    readonly nameLocations: readonly ["422:11:44"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 8188;
                    readonly src: "422:11:44";
                };
                readonly id: 7078;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "422:11:44";
            }];
            readonly canonicalName: "IHyperdrive";
            readonly contractDependencies: readonly [];
            readonly contractKind: "interface";
            readonly fullyImplemented: false;
            readonly linearizedBaseContracts: readonly [7411, 8188, 8317, 7571, 8273, 8071, 8377, 7814, 8304];
            readonly name: "IHyperdrive";
            readonly nameLocation: "338:11:44";
            readonly scope: 7412;
            readonly usedErrors: readonly [7280, 7283, 7286, 7289, 7292, 7298, 7301, 7304, 7307, 7310, 7313, 7316, 7319, 7322, 7325, 7328, 7331, 7334, 7337, 7340, 7343, 7346, 7349, 7352, 7355, 7360, 7363, 7366, 7369, 7372, 7375, 7378, 7381, 7384];
            readonly usedEvents: readonly [7691, 7703, 7717, 7727, 7741, 7755, 7769, 7783, 7795, 7801, 7805, 7809, 7813, 8287, 8295, 8303];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 44;
};
//# sourceMappingURL=IHyperdrive.d.ts.map