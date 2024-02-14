export declare const ERC4626Target0: {
    readonly abi: readonly [{
        readonly inputs: readonly [{
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
            readonly name: "_config";
            readonly type: "tuple";
        }, {
            readonly internalType: "contract IERC4626";
            readonly name: "__vault";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "target";
            readonly type: "address";
        }];
        readonly name: "AddressEmptyCode";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "AddressInsufficientBalance";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "BatchInputLengthMismatch";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ExpInvalidExponent";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ExpiredDeadline";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "FailedInnerCall";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "enum IHyperdrive.InsufficientLiquidityReason";
            readonly name: "reason";
            readonly type: "uint8";
        }];
        readonly name: "InsufficientLiquidity";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidERC20Bridge";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidFeeDestination";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidSignature";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidTimestamp";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "LnInvalidInput";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NegativePresentValue";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ReentrancyGuardReentrantCall";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "RestrictedZeroAddress";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "ReturnData";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }];
        readonly name: "SafeERC20FailedOperation";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "SweepFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Unauthorized";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "UnsupportedToken";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "provider";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "lpAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "baseAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "vaultShareAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "asBase";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "lpSharePrice";
            readonly type: "uint256";
        }];
        readonly name: "AddLiquidity";
        readonly type: "event";
    }, {
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
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "approved";
            readonly type: "bool";
        }];
        readonly name: "ApprovalForAll";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "trader";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "assetId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "maturityTime";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "baseAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "vaultShareAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "asBase";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "bondAmount";
            readonly type: "uint256";
        }];
        readonly name: "CloseLong";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "trader";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "assetId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "maturityTime";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "baseAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "vaultShareAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "asBase";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "bondAmount";
            readonly type: "uint256";
        }];
        readonly name: "CloseShort";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "collector";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "fees";
            readonly type: "uint256";
        }];
        readonly name: "CollectGovernanceFee";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "checkpointTime";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "vaultSharePrice";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "maturedShorts";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "maturedLongs";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "lpSharePrice";
            readonly type: "uint256";
        }];
        readonly name: "CreateCheckpoint";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newGovernance";
            readonly type: "address";
        }];
        readonly name: "GovernanceUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "provider";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "lpAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "baseAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "vaultShareAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "asBase";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "apr";
            readonly type: "uint256";
        }];
        readonly name: "Initialize";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "trader";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "assetId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "maturityTime";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "baseAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "vaultShareAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "asBase";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "bondAmount";
            readonly type: "uint256";
        }];
        readonly name: "OpenLong";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "trader";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "assetId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "maturityTime";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "baseAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "vaultShareAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "asBase";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "baseProceeds";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "bondAmount";
            readonly type: "uint256";
        }];
        readonly name: "OpenShort";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "isPaused";
            readonly type: "bool";
        }];
        readonly name: "PauseStatusUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newPauser";
            readonly type: "address";
        }];
        readonly name: "PauserUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "provider";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "withdrawalShareAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "baseAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "vaultShareAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "asBase";
            readonly type: "bool";
        }];
        readonly name: "RedeemWithdrawalShares";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "provider";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "lpAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "baseAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "vaultShareAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "asBase";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "withdrawalShareAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "lpSharePrice";
            readonly type: "uint256";
        }];
        readonly name: "RemoveLiquidity";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }, {
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
            readonly name: "id";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "TransferSingle";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }, {
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
        readonly name: "baseToken";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
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
            readonly internalType: "uint256[]";
            readonly name: "ids";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "values";
            readonly type: "uint256[]";
        }];
        readonly name: "batchTransferFrom";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
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
            readonly internalType: "struct IHyperdrive.Options";
            readonly name: "_options";
            readonly type: "tuple";
        }];
        readonly name: "collectGovernanceFee";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "proceeds";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
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
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "operator";
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
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
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
            readonly internalType: "bool";
            readonly name: "_status";
            readonly type: "bool";
        }];
        readonly name: "pause";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "account";
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
            readonly internalType: "bytes32";
            readonly name: "domainSeparator";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "permitTypeHash";
            readonly type: "bytes32";
        }, {
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
        readonly name: "permitForAll";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
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
        readonly name: "setApproval";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
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
        readonly name: "setApprovalBridge";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
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
        readonly name: "setApprovalForAll";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_who";
            readonly type: "address";
        }];
        readonly name: "setGovernance";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
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
        readonly name: "setPauser";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "_target";
            readonly type: "address";
        }];
        readonly name: "sweep";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
        readonly stateMutability: "pure";
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
        readonly name: "transferFrom";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
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
        readonly name: "transferFromBridge";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "vault";
        readonly outputs: readonly [{
            readonly internalType: "contract IERC4626";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    readonly bytecode: {
        readonly object: "0x6102606040523480156200001257600080fd5b5060405162004333380380620043338339810160408190526200003591620001bf565b600160005581516001600160a01b03908116608090815260608085015161018052908401516101a05260a0808501516101c05260e08086015190915260c08086015190526101008086015190915261016080860180515190925281516020908101516101209081528351604090810151610140908152945190950151909252860151841661020052918501516102205290840151600880546001600160a01b0319169184169190911790559092015182166101e0521661024052620002b3565b60405161018081016001600160401b03811182821017156200012757634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200014557600080fd5b919050565b6000608082840312156200015d57600080fd5b604051608081016001600160401b03811182821017156200018e57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600080828403610200811215620001d557600080fd5b6101e080821215620001e657600080fd5b620001f0620000f5565b9150620001fd856200012d565b82526200020d602086016200012d565b602083015260408501516040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e08301526101008086015181840152506101206200026a8187016200012d565b908301526101406200027e8682016200012d565b9083015261016062000293878783016200014a565b8184015250819350620002a88186016200012d565b925050509250929050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161024051613f1e620004156000396000818161058b0152818161068b015281816108430152818161141b01528181611eb3015281816123e1015281816124870152612551015260008181610e870152611de4015260008181610e580152611da70152600081816104f30152818161077501528181610fb501528181611b1001528181611b8a0152611c0601526000610ef9015260008181610ed30152611fef015260008181610ead0152611fc9015260006110610152600061103b0152600061101501526000610fef015260008181610f6b0152612015015260008181610f1f015281816111da01526125fe015260008181610f45015261270b015260008181610550015281816105f5015281816107b1015281816109b601528181610e2901526111810152613f1e6000f3fe608060405234801561001057600080fd5b50600436106101e45760003560e01c80637180c8ca1161010f578063c55dae63116100a2578063e44808bc11610071578063e44808bc14610454578063e985e9c514610467578063fba560081461047a578063fbfa77cf146104a957600080fd5b8063c55dae6314610404578063c69e16ad14610424578063cf210e651461042c578063d81657431461043f57600080fd5b8063ab033ea9116100de578063ab033ea9146103a9578063b0d96580146103bc578063bd85b039146103d1578063becee9c3146103e457600080fd5b80637180c8ca1461035d5780637ecebe00146103705780639cd241af14610383578063a22cb4651461039657600080fd5b806321ff32a91161018757806346fbf68e1161015657806346fbf68e146102ff5780634e41a1fb146103225780634ed2d6ac1461033557806360246c881461034857600080fd5b806321ff32a91461029e578063313ce567146102bf5780633656eec2146102d95780633e691db9146102ec57600080fd5b806314e5f07b116101c357806314e5f07b1461023a57806317fad7fc1461024d5780631c0f12b61461026057806320fc48811461027357600080fd5b8062ad800c146101e957806301681a621461021257806302329a2914610227575b600080fd5b6101fc6101f7366004613465565b6104b1565b60405161020991906134ce565b60405180910390f35b6102256102203660046134f6565b6104e8565b005b610225610235366004613521565b6108dd565b61022561024836600461354d565b6108e9565b61022561025b366004613628565b610905565b61022561026e3660046136bd565b61091b565b610286610281366004613465565b610928565b60405190516001600160801b03168152602001610209565b6102b16102ac366004613705565b610969565b604051908152602001610209565b6102c76109af565b60405160ff9091168152602001610209565b6102b16102e7366004613747565b610a4d565b6102b16102fa366004613777565b610a86565b61031261030d3660046134f6565b610a91565b6040519015158152602001610209565b6101fc610330366004613465565b610ac7565b6102256103433660046137b2565b610ad5565b610350610b23565b60405161020991906137fc565b61022561036b36600461389d565b610d50565b6102b161037e3660046134f6565b610d5e565b6102256103913660046138cb565b610d8a565b6102256103a436600461389d565b610d9b565b6102256103b73660046134f6565b610e07565b6103c4610e10565b6040516102099190613903565b6102b16103df366004613465565b611096565b6103f76103f23660046139e0565b6110b8565b6040516102099190613a22565b61040c611173565b6040516001600160a01b039091168152602001610209565b6102b16111b3565b6102b161043a366004613465565b6111cd565b610447611216565b6040516102099190613a66565b610225610462366004613b77565b611322565b610312610475366004613bd6565b61136a565b6104826113ae565b6040805182516001600160801b039081168252602093840151169281019290925201610209565b61040c61140d565b60606104e36104bf8361144d565b6040516020016104cf91906134ce565b60405160208183030381529060405261157b565b919050565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016148015906105315750336000908152600a602052604090205460ff16155b1561054e576040516282b42960e81b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316816001600160a01b031614806105bf57507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316816001600160a01b0316145b156105dd5760405163350b944160e11b815260040160405180910390fd5b6040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015610644573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106689190613c04565b6040516370a0823160e01b81523060048201529091506000906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa1580156106d2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106f69190613c04565b6040516370a0823160e01b81523060048201529091506000906001600160a01b038516906370a0823190602401602060405180830381865afa158015610740573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107649190613c04565b905061079a6001600160a01b0385167f00000000000000000000000000000000000000000000000000000000000000008361159f565b6040516370a0823160e01b815230600482015283907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015610800573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108249190613c04565b1415806108b957506040516370a0823160e01b815230600482015282907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015610892573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108b69190613c04565b14155b156108d7576040516313dd85ff60e31b815260040160405180910390fd5b50505050565b6108e6816115f1565b50565b6108fa898989898989898989611674565b505050505050505050565b610913868686868686611887565b505050505050565b6108d7848484843361193b565b6040805160208101909152600081526104e3600760008481526020019081526020016000206040516020016104cf91546001600160801b0316815260200190565b6000838152600e602090815260408083206001600160a01b03868116855290835281842090851684528252808320548151928301526109a891016104cf565b9392505050565b6000610a4a7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015610a12573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a369190613c1d565b6040805160ff9092166020830152016104cf565b90565b6000828152600b602090815260408083206001600160a01b0385168452825280832054815192830152610a8091016104cf565b92915050565b6000610a8082611afc565b6001600160a01b0381166000908152600a602090815260408083205490516104e3926104cf9260ff169101901515815260200190565b60606104e36104bf83611c77565b83610adf81611d69565b6001600160a01b0316336001600160a01b031614610b1057604051632aab8bd360e01b815260040160405180910390fd5b610b1c85858585611e26565b5050505050565b610b9c604051806101e001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000610ba6611e93565b600654600c6020527fe33c7a20958276ce9529c827d1e1b38c61245a6a2cb39f13852cf96fd6f7333d5460008080527f13649b2456f1b42fef0f0040b3aaeabcd21a76a0f3f5defd4f583839455116e854939450926001600160801b0390921691610c119190613c66565b610c1b9190613c79565b90506000808311610c2d576000610c48565b610c4883610c42610c3d86611f2b565b612093565b906120c3565b604080516101e0810182526001546001600160801b038082168352600354600f81900b60208501526005546001600160701b036201000082041695850195909552600160801b9485900482166060850152918490048116608084015260a0830187905260c08301889052600254849004811660e0840152600454808216610100850152918490048116610120840152908390048116610140830152600654808216610160840152929092049091166101808201529091506000906101a081018415610d1c57610d1784866120d8565b610d1f565b60005b81526002546001600160801b0316602091820152604051919250610d49916104cf918491016137fc565b5050505090565b610d5a82826120ed565b5050565b6001600160a01b0381166000908152600f60209081526040808320548151928301526104e391016104cf565b610d9683838333611e26565b505050565b336000818152600d602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6108e681612165565b610e186133b5565b610a4a6040518061018001604052807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f00000000000000000000000000000000000000000000000000000000000000008152602001600860009054906101000a90046001600160a01b03166001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316815260200160405180608001604052807f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f00000000000000000000000000000000000000000000000000000000000000008152508152506040516020016104cf9190613903565b6000818152600c60209081526040808320548151928301526104e391016104cf565b606060008267ffffffffffffffff8111156110d5576110d5613c8c565b6040519080825280602002602001820160405280156110fe578160200160208202803683370190505b50905060005b8381101561115757600085858381811061112057611120613ca2565b9050602002013590506000815490508084848151811061114257611142613ca2565b60209081029190910101525050600101611104565b5061116c816040516020016104cf9190613a22565b5092915050565b604080516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000166020820152600091610a4a91016104cf565b6000610a4a6009546040516020016104cf91815260200190565b60006104e36112046111ff7f000000000000000000000000000000000000000000000000000000000000000085613c66565b6121d9565b6040516020016104cf91815260200190565b6040805161018081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810191909152610a4a60016040516020016104cf919081546001600160801b038082168352608091821c602084015260018401548082166040850152821c60608401526002840154600f81900b83850152821c60a0840152600384015490811660c0840152811c60e083015260049092015460ff8082161515610100840152600882901c1615156101208301526001600160701b03601082901c1661014083015290911c6101608201526101800190565b8461132c81611d69565b6001600160a01b0316336001600160a01b03161461135d57604051632aab8bd360e01b815260040160405180910390fd5b610913868686868661193b565b6001600160a01b038281166000908152600d60209081526040808320938516835292815282822054835160ff9091161515918101919091529091610a8091016104cf565b60408051808201909152600080825260208201526040805180820182526006546001600160801b03808216808452600160801b9092048116602093840190815284519384019290925290511691810191909152610a4a906060016104cf565b604080516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000166020820152600091610a4a91016104cf565b606060f882901c6001600160f81b038316600061146982612221565b9050600083600381111561147f5761147f613c3a565b036114b1576040518060400160405280600d81526020016c048797065726472697665204c5609c1b8152509350611573565b60018360038111156114c5576114c5613c3a565b036114f157806040516020016114db9190613cb8565b6040516020818303038152906040529350611573565b600283600381111561150557611505613c3a565b0361151b57806040516020016114db9190613cf1565b600383600381111561152f5761152f613c3a565b03611573576040517f48797065726472697665205769746864726177616c20536861726500000000006020820152603b015b60405160208183030381529060405293505b505050919050565b80604051636e64089360e11b815260040161159691906134ce565b60405180910390fd5b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610d9690849061232e565b336000908152600a602052604090205460ff16611620576040516282b42960e81b815260040160405180910390fd5b600580548215156101000261ff00199091161790556040517f7c4d1fe30fdbfda9e9c4c43e759ef32e4db5128d4cb58ff3ae9583b89b6242a59061166990831515815260200190565b60405180910390a150565b834211156116955760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b0387166116bc5760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b038781166000818152600f602090815260408083205481518084018f905280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b61010083015261010282018c90526101228201526101420160408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa1580156117aa573d6000803e3d6000fd5b505050602060405103519050886001600160a01b0316816001600160a01b0316146117e857604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b0389166000908152600f60205260408120805490919061180e90613d2b565b909155506001600160a01b038981166000818152600d60209081526040808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050505050505050505050565b6001600160a01b03861615806118a457506001600160a01b038516155b156118c25760405163f0dd15fd60e01b815260040160405180910390fd5b8281146118e25760405163174861a760e31b815260040160405180910390fd5b60005b838110156119325761192a85858381811061190257611902613ca2565b90506020020135888886868681811061191d5761191d613ca2565b905060200201353361193b565b6001016118e5565b50505050505050565b6001600160a01b038416158061195857506001600160a01b038316155b156119765760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b031614611a3a576001600160a01b038085166000908152600d602090815260408083209385168352929052205460ff16611a3a576000858152600e602090815260408083206001600160a01b03808916855290835281842090851684529091529020546000198114611a38576000868152600e602090815260408083206001600160a01b03808a168552908352818420908616845290915281208054859290611a32908490613c79565b90915550505b505b6000858152600b602090815260408083206001600160a01b038816845290915281208054849290611a6c908490613c79565b90915550506000858152600b602090815260408083206001600160a01b038716845290915281208054849290611aa3908490613c66565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b6000611b06612391565b6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016611b3d60208401846134f6565b6001600160a01b031614611b6457604051630ad13b3360e21b815260040160405180910390fd5b336000908152600a602052604090205460ff16158015611bad5750336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614155b8015611bc457506008546001600160a01b03163314155b15611be1576040516282b42960e81b815260040160405180910390fd5b6000611beb611e93565b600980546000909155909150611c028183866123bb565b92507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03167fa4bafc79b3f9fdba2427cd386f1fbc7d8779e9fd7229f6220d53bc04d3901e47611c5a858588612584565b60405190815260200160405180910390a250506104e36001600055565b606060f882901c6001600160f81b0383166000611c9382612221565b90506000836003811115611ca957611ca9613c3a565b03611cdb576040518060400160405280600d81526020016c0485950455244524956452d4c5609c1b8152509350611573565b6001836003811115611cef57611cef613c3a565b03611d0557806040516020016114db9190613d44565b6002836003811115611d1957611d19613c3a565b03611d2f57806040516020016114db9190613d7c565b6003836003811115611d4357611d43613c3a565b03611573576040516c485950455244524956452d575360981b6020820152602d01611561565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b6000848152600e602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b6040516303d1689d60e11b8152670de0b6b3a764000060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906307a2d13a90602401602060405180830381865afa158015611f02573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f269190613c04565b905090565b611f8860405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610160810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c083015260025404821660e0820152600454909161010083019161205991166125b3565b81526003546001600160801b03600160801b918290048116602084015260045460409093019261208b929004166125b3565b905292915050565b60008060006120a184612629565b915091508061116c5760405163aeeb825d60e01b815260040160405180910390fd5b60006109a88383670de0b6b3a76400006126a3565b60006109a883670de0b6b3a7640000846126a3565b6008546001600160a01b03163314612117576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0382166000818152600a6020526040808220805460ff1916851515179055517fa4336c0cb1e245b95ad204faed7e940d6dc999684fd8b5e1ff597a0c4efca8ab9190a25050565b6008546001600160a01b0316331461218f576040516282b42960e81b815260040160405180910390fd5b600880546001600160a01b0319166001600160a01b0383169081179091556040517f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab90600090a250565b6000600c60006121ea6002856126c1565b815260200190815260200160002054600c60006122086001866126c1565b815260200190815260200160002054610a809190613da8565b60408051604d808252608082019092526060919060009082602082018180368337019050509050612253600a85613dde565b61225e906030613c66565b60f81b8161226d600185613c79565b8151811061227d5761227d613ca2565b60200101906001600160f81b031916908160001a90535061229f600a85613df2565b935060015b8415612320576122b5600a86613dde565b6122c0906030613c66565b60f81b8260016122d08487613c79565b6122da9190613c79565b815181106122ea576122ea613ca2565b60200101906001600160f81b031916908160001a90535061230c600a86613df2565b94508061231881613d2b565b9150506122a4565b918290030190815292915050565b60006123436001600160a01b038416836126f6565b905080516000141580156123685750808060200190518101906123669190613e06565b155b15610d9657604051635274afe760e01b81526001600160a01b0384166004820152602401611596565b6002600054036123b457604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b6000806123c885856120c3565b6040516363737ac960e11b8152600481018290529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063c6e6f59290602401602060405180830381865afa158015612430573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124549190613c04565b9450846000036124685760009150506109a8565b6124786040840160208501613521565b15612537576001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001663ba087652866124ba60208701876134f6565b6040516001600160e01b031960e085901b16815260048101929092526001600160a01b031660248201523060448201526064016020604051808303816000875af115801561250c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906125309190613c04565b915061257c565b61257861254760208501856134f6565b6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016908761159f565b8491505b509392505050565b60006125966040830160208401613521565b156125a25750826109a8565b6125ac84846120c3565b90506109a8565b600080670de0b6b3a76400006125c7612704565b6125d19190613e23565b90508083116125e15760006125eb565b6125eb8184613c79565b91506109a8612622670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613e23565b83906120d8565b600080600080600061263a8661273a565b915091508061265157506000958695509350505050565b8560a0015161265f8761297d565b875161266c908590613e3a565b6126769190613e3a565b6126809190613da8565b9250505060008112156126995750600093849350915050565b9360019350915050565b60008260001904841183021582026126ba57600080fd5b5091020490565b60006001600160f81b038211156126eb5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60606109a8838360006129e4565b60006127307f000000000000000000000000000000000000000000000000000000000000000042613dde565b611f269042613c79565b600080600061275c8461014001518561012001516120c390919063ffffffff16565b61010085015160e086015161277091612a81565b61277a9190613da8565b9050600061279085600001518660200151612a96565b905060008213156128935760008290506000806127e1886000015189602001518a604001518b60a001518c60c00151670de0b6b3a76400006127d29190613c79565b8d606001518e60800151612ab3565b91509150806127fa575060009788975095505050505050565b82821061284f576000612834858a60400151868c60c00151670de0b6b3a76400006128259190613c79565b8d606001518e60800151612ba2565b905061283f81613e5a565b9960019950975050505050505050565b60008860200151126128825760a088015161286a9085613c79565b61287390613e5a565b98600198509650505050505050565b60a0880151885161286a9190613c79565b600082121561296f5760006128a783613e5a565b905060006128db8388604001518960c00151670de0b6b3a76400006128cc9190613c79565b8a606001518b60800151612bd2565b9050818110612917576000612873848960400151858b60c00151670de0b6b3a76400006129089190613c79565b8c606001518d60800151612c68565b60006129498489604001518a60c00151670de0b6b3a764000061293a9190613c79565b8b606001518c60800151612d40565b90506129658860600151838561295f9190613c79565b906120d8565b6128739082613c66565b506000946001945092505050565b60006129ac826101000151670de0b6b3a764000061299b9190613c79565b606084015160e08501519190612dcf565b6129da836101400151670de0b6b3a76400006129c89190613c79565b606085015161012086015191906126a3565b610a809190613da8565b606081471015612a095760405163cd78605960e01b8152306004820152602401611596565b600080856001600160a01b03168486604051612a259190613e76565b60006040518083038185875af1925050503d8060008114612a62576040519150601f19603f3d011682016040523d82523d6000602084013e612a67565b606091505b5091509150612a77868383612df5565b9695505050505050565b60006109a88383670de0b6b3a7640000612dcf565b600080612aa38385613da8565b905060008112156109a857600080fd5b6000806000881215612ad557612ac888613e5a565b612ad29087613c66565b95505b6000612ae18a8a612a96565b90506000612af2828a898989612e51565b90506000612b15612b0d89612b07898d612a81565b90612e80565b889088612dcf565b612b1f9083613c79565b9050670de0b6b3a76400008110612b5357612b4c612b45670de0b6b3a76400008a6120d8565b8290612e80565b9050612b6b565b612b68612b45670de0b6b3a76400008a612ed7565b90505b89811015612b825760008094509450505050612b96565b612b8c8a82613c79565b6001945094505050505b97509795505050505050565b600080612bb3888888888888612eec565b909250905080612bc757612bc76000612fae565b509695505050505050565b600080612be28787878787612fc9565b90506000612c0d670de0b6b3a7640000612bfc87876120d8565b612c069190613c66565b8390612ed7565b9050670de0b6b3a76400008110612c3a57612c33612b45670de0b6b3a764000088612ed7565b9050612c52565b612c4f612b45670de0b6b3a7640000886120d8565b90505b612c5c8188613c79565b98975050505050505050565b600080612c788888878787612fc9565b905085871015612c8c57612c8c6000612fae565b612c9a85612b07888a613c79565b965086811015612cae57612cae6000612fae565b6000612cc68486612cbf8b86613c79565b9190612dcf565b9050670de0b6b3a76400008110612cf357612cec612b45670de0b6b3a764000088612ed7565b9050612d0b565b612d08612b45670de0b6b3a7640000886120d8565b90505b612d158185612ed7565b905088811015612d2957612d296000612fae565b612d338982613c79565b9998505050505050505050565b600080612d508787878787612e51565b90506000612d74670de0b6b3a7640000612d6a8787612ed7565b6126229190613c66565b9050670de0b6b3a76400008110612da157612d9a612b45670de0b6b3a7640000886120d8565b9050612db9565b612db6612b45670de0b6b3a764000088612ed7565b90505b612dc381856120d8565b9050612c5c8882613c79565b6000826000190484118302158202612de657600080fd5b50910281810615159190040190565b606082612e0a57612e0582612fee565b6109a8565b8151158015612e2157506001600160a01b0384163b155b15612e4a57604051639996b31560e01b81526001600160a01b0385166004820152602401611596565b50806109a8565b6000612e5d8585612e80565b612e76612e6e86612b07868b6120c3565b8590856126a3565b612a779190613c66565b600081600003612e995750670de0b6b3a7640000610a80565b82600003612ea957506000610a80565b816000612eb585613017565b9050818102612ecc670de0b6b3a764000082613e92565b9050612a778161322a565b60006109a883670de0b6b3a764000084612dcf565b6000806000612efe8989888888612fc9565b9050612f0e86612b07898b613c66565b975087811015612f25576000809250925050612fa3565b6000612f368587612cbf8c86613c79565b9050670de0b6b3a76400008110612f6357612f5c612b45670de0b6b3a764000089612ed7565b9050612f7b565b612f78612b45670de0b6b3a7640000896120d8565b90505b612f858186612ed7565b9050808a1115612f9c57612f99818b613c79565b93505b6001925050505b965096945050505050565b80604051633c06d78b60e11b81526004016115969190613ec0565b6000612fd58585612e80565b612e76612fe686612b07868b612a81565b859085612dcf565b805115612ffe5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b60008082136130395760405163e61b497560e01b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000680248ce36a70cb26b3e19821361324557506000919050565b680755bf798b4a1bf1e5821261326e576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b60405180610180016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000801916815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b031681526020016134606040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b60006020828403121561347757600080fd5b5035919050565b60005b83811015613499578181015183820152602001613481565b50506000910152565b600081518084526134ba81602086016020860161347e565b601f01601f19169290920160200192915050565b6020815260006109a860208301846134a2565b6001600160a01b03811681146108e657600080fd5b60006020828403121561350857600080fd5b81356109a8816134e1565b80151581146108e657600080fd5b60006020828403121561353357600080fd5b81356109a881613513565b60ff811681146108e657600080fd5b60008060008060008060008060006101208a8c03121561356c57600080fd5b8935985060208a0135975060408a0135613585816134e1565b965060608a0135613595816134e1565b955060808a01356135a581613513565b945060a08a0135935060c08a01356135bc8161353e565b8093505060e08a013591506101008a013590509295985092959850929598565b60008083601f8401126135ee57600080fd5b50813567ffffffffffffffff81111561360657600080fd5b6020830191508360208260051b850101111561362157600080fd5b9250929050565b6000806000806000806080878903121561364157600080fd5b863561364c816134e1565b9550602087013561365c816134e1565b9450604087013567ffffffffffffffff8082111561367957600080fd5b6136858a838b016135dc565b9096509450606089013591508082111561369e57600080fd5b506136ab89828a016135dc565b979a9699509497509295939492505050565b600080600080608085870312156136d357600080fd5b8435935060208501356136e5816134e1565b925060408501356136f5816134e1565b9396929550929360600135925050565b60008060006060848603121561371a57600080fd5b83359250602084013561372c816134e1565b9150604084013561373c816134e1565b809150509250925092565b6000806040838503121561375a57600080fd5b82359150602083013561376c816134e1565b809150509250929050565b60006020828403121561378957600080fd5b813567ffffffffffffffff8111156137a057600080fd5b8201606081850312156109a857600080fd5b600080600080608085870312156137c857600080fd5b8435935060208501356137da816134e1565b92506040850135915060608501356137f1816134e1565b939692955090935050565b815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160808301519082015261018080830151908201526101a080830151908201526101c091820151918101919091526101e00190565b600080604083850312156138b057600080fd5b82356138bb816134e1565b9150602083013561376c81613513565b6000806000606084860312156138e057600080fd5b8335925060208401356138f2816134e1565b929592945050506040919091013590565b81516001600160a01b031681526101e08101602083015161392f60208401826001600160a01b03169052565b5060408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151613993828501826001600160a01b03169052565b5050610140838101516001600160a01b03169083015261016080840151805182850152602081015161018085015260408101516101a085015260608101516101c08501525b505092915050565b600080602083850312156139f357600080fd5b823567ffffffffffffffff811115613a0a57600080fd5b613a16858286016135dc565b90969095509350505050565b6020808252825182820181905260009190848201906040850190845b81811015613a5a57835183529284019291840191600101613a3e565b50909695505050505050565b81516001600160801b0316815261018081016020830151613a9260208401826001600160801b03169052565b506040830151613aad60408401826001600160801b03169052565b506060830151613ac860608401826001600160801b03169052565b506080830151613add6080840182600f0b9052565b5060a0830151613af860a08401826001600160801b03169052565b5060c0830151613b1360c08401826001600160801b03169052565b5060e0830151613b2e60e08401826001600160801b03169052565b506101008381015115159083015261012080840151151590830152610140808401516001600160701b031690830152610160808401516001600160801b038116828501526139d8565b600080600080600060a08688031215613b8f57600080fd5b853594506020860135613ba1816134e1565b93506040860135613bb1816134e1565b9250606086013591506080860135613bc8816134e1565b809150509295509295909350565b60008060408385031215613be957600080fd5b8235613bf4816134e1565b9150602083013561376c816134e1565b600060208284031215613c1657600080fd5b5051919050565b600060208284031215613c2f57600080fd5b81516109a88161353e565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b80820180821115610a8057610a80613c50565b81810381811115610a8057610a80613c50565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b700243cb832b9323934bb32902637b7339d1607d1b815260008251613ce481601185016020870161347e565b9190910160110192915050565b710243cb832b9323934bb329029b437b93a1d160751b815260008251613d1e81601285016020870161347e565b9190910160120192915050565b600060018201613d3d57613d3d613c50565b5060010190565b6f242ca822a9222924ab2296a627a7239d60811b815260008251613d6f81601085016020870161347e565b9190910160100192915050565b70242ca822a9222924ab2296a9a427a92a1d60791b815260008251613ce481601185016020870161347e565b818103600083128015838313168383128216171561116c5761116c613c50565b634e487b7160e01b600052601260045260246000fd5b600082613ded57613ded613dc8565b500690565b600082613e0157613e01613dc8565b500490565b600060208284031215613e1857600080fd5b81516109a881613513565b8082028115828204841417610a8057610a80613c50565b80820182811260008312801582168215821617156139d8576139d8613c50565b6000600160ff1b8201613e6f57613e6f613c50565b5060000390565b60008251613e8881846020870161347e565b9190910192915050565b600082613ea157613ea1613dc8565b600160ff1b821460001984141615613ebb57613ebb613c50565b500590565b6020810160048310613ee257634e487b7160e01b600052602160045260246000fd5b9190529056fea264697066735822122039d4c69a5ec874dc4f7c04a74d8d90b34494d16fc56b89f274b019a775f2d5b364736f6c63430008140033";
        readonly sourceMap: "938:2592:25:-:0;;;1202:141;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1713:1:120;1917:7;:21;5109:17:70;;-1:-1:-1;;;;;5096:30:70;;;;;;;5216;;;;;5190:56;;5669:28;;;;5645:52;;5985:32;;;;;5957:60;;6200:26;;;;;6178:48;;;6256:24;;;;;6236:44;;-1:-1:-1;6305:19:70;;;;6290:34;;;6389:12;;;;;;:18;6377:30;;;6428:12;;-1:-1:-1;6428:17:70;;;;-1:-1:-1;6417:28:70;;;6474:12;;-1:-1:-1;6474:25:70;;;;6455:44;;;;6532:12;;:29;;;;6509:52;;;-1:-1:-1;;6638:21:70;6621:38;;;;-1:-1:-1;;;6687:22:70;6669:40;;6790:18;;;;6776:11;:32;;-1:-1:-1;;;;;;6776:32:70;;;;;;;;;;6834:20;;;;6818:36;;;;1315:16:23;;;938:2592:25;;14:347:182;81:2;75:9;123:6;111:19;;-1:-1:-1;;;;;145:34:182;;181:22;;;142:62;139:185;;;246:10;241:3;237:20;234:1;227:31;281:4;278:1;271:15;309:4;306:1;299:15;139:185;340:2;333:22;14:347;:::o;366:185::-;453:13;;-1:-1:-1;;;;;495:31:182;;485:42;;475:70;;541:1;538;531:12;475:70;366:185;;;:::o;556:681::-;618:5;666:4;654:9;649:3;645:19;641:30;638:50;;;684:1;681;674:12;638:50;717:2;711:9;759:4;747:17;;-1:-1:-1;;;;;779:34:182;;815:22;;;776:62;773:185;;;880:10;875:3;871:20;868:1;861:31;915:4;912:1;905:15;943:4;940:1;933:15;773:185;978:10;974:2;967:22;;1007:6;998:15;;1043:9;1037:16;1029:6;1022:32;1108:2;1097:9;1093:18;1087:25;1082:2;1074:6;1070:15;1063:50;1167:2;1156:9;1152:18;1146:25;1141:2;1133:6;1129:15;1122:50;1226:2;1215:9;1211:18;1205:25;1200:2;1192:6;1188:15;1181:50;;556:681;;;;:::o;1242:1376::-;1366:6;1374;1418:9;1409:7;1405:23;1448:3;1444:2;1440:12;1437:32;;;1465:1;1462;1455:12;1437:32;1488:6;1514:2;1510;1506:11;1503:31;;;1530:1;1527;1520:12;1503:31;1556:17;;:::i;:::-;1543:30;;1596:48;1634:9;1596:48;:::i;:::-;1589:5;1582:63;1677:57;1730:2;1719:9;1715:18;1677:57;:::i;:::-;1672:2;1665:5;1661:14;1654:81;1788:2;1777:9;1773:18;1767:25;1762:2;1755:5;1751:14;1744:49;1846:2;1835:9;1831:18;1825:25;1820:2;1813:5;1809:14;1802:49;1905:3;1894:9;1890:19;1884:26;1878:3;1871:5;1867:15;1860:51;1965:3;1954:9;1950:19;1944:26;1938:3;1931:5;1927:15;1920:51;2025:3;2014:9;2010:19;2004:26;1998:3;1991:5;1987:15;1980:51;2085:3;2074:9;2070:19;2064:26;2058:3;2051:5;2047:15;2040:51;2110:3;2166:2;2155:9;2151:18;2145:25;2140:2;2133:5;2129:14;2122:49;;2190:3;2225:57;2278:2;2267:9;2263:18;2225:57;:::i;:::-;2209:14;;;2202:81;2302:3;2337:57;2375:18;;;2337:57;:::i;:::-;2321:14;;;2314:81;2414:3;2449:62;2503:7;2483:18;;;2449:62;:::i;:::-;2444:2;2437:5;2433:14;2426:86;;2531:5;2521:15;;2555:57;2608:2;2597:9;2593:18;2555:57;:::i;:::-;2545:67;;;;1242:1376;;;;;:::o;:::-;938:2592:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly deployedBytecode: {
        readonly object: "0x608060405234801561001057600080fd5b50600436106101e45760003560e01c80637180c8ca1161010f578063c55dae63116100a2578063e44808bc11610071578063e44808bc14610454578063e985e9c514610467578063fba560081461047a578063fbfa77cf146104a957600080fd5b8063c55dae6314610404578063c69e16ad14610424578063cf210e651461042c578063d81657431461043f57600080fd5b8063ab033ea9116100de578063ab033ea9146103a9578063b0d96580146103bc578063bd85b039146103d1578063becee9c3146103e457600080fd5b80637180c8ca1461035d5780637ecebe00146103705780639cd241af14610383578063a22cb4651461039657600080fd5b806321ff32a91161018757806346fbf68e1161015657806346fbf68e146102ff5780634e41a1fb146103225780634ed2d6ac1461033557806360246c881461034857600080fd5b806321ff32a91461029e578063313ce567146102bf5780633656eec2146102d95780633e691db9146102ec57600080fd5b806314e5f07b116101c357806314e5f07b1461023a57806317fad7fc1461024d5780631c0f12b61461026057806320fc48811461027357600080fd5b8062ad800c146101e957806301681a621461021257806302329a2914610227575b600080fd5b6101fc6101f7366004613465565b6104b1565b60405161020991906134ce565b60405180910390f35b6102256102203660046134f6565b6104e8565b005b610225610235366004613521565b6108dd565b61022561024836600461354d565b6108e9565b61022561025b366004613628565b610905565b61022561026e3660046136bd565b61091b565b610286610281366004613465565b610928565b60405190516001600160801b03168152602001610209565b6102b16102ac366004613705565b610969565b604051908152602001610209565b6102c76109af565b60405160ff9091168152602001610209565b6102b16102e7366004613747565b610a4d565b6102b16102fa366004613777565b610a86565b61031261030d3660046134f6565b610a91565b6040519015158152602001610209565b6101fc610330366004613465565b610ac7565b6102256103433660046137b2565b610ad5565b610350610b23565b60405161020991906137fc565b61022561036b36600461389d565b610d50565b6102b161037e3660046134f6565b610d5e565b6102256103913660046138cb565b610d8a565b6102256103a436600461389d565b610d9b565b6102256103b73660046134f6565b610e07565b6103c4610e10565b6040516102099190613903565b6102b16103df366004613465565b611096565b6103f76103f23660046139e0565b6110b8565b6040516102099190613a22565b61040c611173565b6040516001600160a01b039091168152602001610209565b6102b16111b3565b6102b161043a366004613465565b6111cd565b610447611216565b6040516102099190613a66565b610225610462366004613b77565b611322565b610312610475366004613bd6565b61136a565b6104826113ae565b6040805182516001600160801b039081168252602093840151169281019290925201610209565b61040c61140d565b60606104e36104bf8361144d565b6040516020016104cf91906134ce565b60405160208183030381529060405261157b565b919050565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016148015906105315750336000908152600a602052604090205460ff16155b1561054e576040516282b42960e81b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316816001600160a01b031614806105bf57507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316816001600160a01b0316145b156105dd5760405163350b944160e11b815260040160405180910390fd5b6040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015610644573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106689190613c04565b6040516370a0823160e01b81523060048201529091506000906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa1580156106d2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106f69190613c04565b6040516370a0823160e01b81523060048201529091506000906001600160a01b038516906370a0823190602401602060405180830381865afa158015610740573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107649190613c04565b905061079a6001600160a01b0385167f00000000000000000000000000000000000000000000000000000000000000008361159f565b6040516370a0823160e01b815230600482015283907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015610800573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108249190613c04565b1415806108b957506040516370a0823160e01b815230600482015282907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015610892573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108b69190613c04565b14155b156108d7576040516313dd85ff60e31b815260040160405180910390fd5b50505050565b6108e6816115f1565b50565b6108fa898989898989898989611674565b505050505050505050565b610913868686868686611887565b505050505050565b6108d7848484843361193b565b6040805160208101909152600081526104e3600760008481526020019081526020016000206040516020016104cf91546001600160801b0316815260200190565b6000838152600e602090815260408083206001600160a01b03868116855290835281842090851684528252808320548151928301526109a891016104cf565b9392505050565b6000610a4a7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015610a12573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a369190613c1d565b6040805160ff9092166020830152016104cf565b90565b6000828152600b602090815260408083206001600160a01b0385168452825280832054815192830152610a8091016104cf565b92915050565b6000610a8082611afc565b6001600160a01b0381166000908152600a602090815260408083205490516104e3926104cf9260ff169101901515815260200190565b60606104e36104bf83611c77565b83610adf81611d69565b6001600160a01b0316336001600160a01b031614610b1057604051632aab8bd360e01b815260040160405180910390fd5b610b1c85858585611e26565b5050505050565b610b9c604051806101e001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000610ba6611e93565b600654600c6020527fe33c7a20958276ce9529c827d1e1b38c61245a6a2cb39f13852cf96fd6f7333d5460008080527f13649b2456f1b42fef0f0040b3aaeabcd21a76a0f3f5defd4f583839455116e854939450926001600160801b0390921691610c119190613c66565b610c1b9190613c79565b90506000808311610c2d576000610c48565b610c4883610c42610c3d86611f2b565b612093565b906120c3565b604080516101e0810182526001546001600160801b038082168352600354600f81900b60208501526005546001600160701b036201000082041695850195909552600160801b9485900482166060850152918490048116608084015260a0830187905260c08301889052600254849004811660e0840152600454808216610100850152918490048116610120840152908390048116610140830152600654808216610160840152929092049091166101808201529091506000906101a081018415610d1c57610d1784866120d8565b610d1f565b60005b81526002546001600160801b0316602091820152604051919250610d49916104cf918491016137fc565b5050505090565b610d5a82826120ed565b5050565b6001600160a01b0381166000908152600f60209081526040808320548151928301526104e391016104cf565b610d9683838333611e26565b505050565b336000818152600d602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6108e681612165565b610e186133b5565b610a4a6040518061018001604052807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f00000000000000000000000000000000000000000000000000000000000000008152602001600860009054906101000a90046001600160a01b03166001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316815260200160405180608001604052807f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f00000000000000000000000000000000000000000000000000000000000000008152508152506040516020016104cf9190613903565b6000818152600c60209081526040808320548151928301526104e391016104cf565b606060008267ffffffffffffffff8111156110d5576110d5613c8c565b6040519080825280602002602001820160405280156110fe578160200160208202803683370190505b50905060005b8381101561115757600085858381811061112057611120613ca2565b9050602002013590506000815490508084848151811061114257611142613ca2565b60209081029190910101525050600101611104565b5061116c816040516020016104cf9190613a22565b5092915050565b604080516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000166020820152600091610a4a91016104cf565b6000610a4a6009546040516020016104cf91815260200190565b60006104e36112046111ff7f000000000000000000000000000000000000000000000000000000000000000085613c66565b6121d9565b6040516020016104cf91815260200190565b6040805161018081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810191909152610a4a60016040516020016104cf919081546001600160801b038082168352608091821c602084015260018401548082166040850152821c60608401526002840154600f81900b83850152821c60a0840152600384015490811660c0840152811c60e083015260049092015460ff8082161515610100840152600882901c1615156101208301526001600160701b03601082901c1661014083015290911c6101608201526101800190565b8461132c81611d69565b6001600160a01b0316336001600160a01b03161461135d57604051632aab8bd360e01b815260040160405180910390fd5b610913868686868661193b565b6001600160a01b038281166000908152600d60209081526040808320938516835292815282822054835160ff9091161515918101919091529091610a8091016104cf565b60408051808201909152600080825260208201526040805180820182526006546001600160801b03808216808452600160801b9092048116602093840190815284519384019290925290511691810191909152610a4a906060016104cf565b604080516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000166020820152600091610a4a91016104cf565b606060f882901c6001600160f81b038316600061146982612221565b9050600083600381111561147f5761147f613c3a565b036114b1576040518060400160405280600d81526020016c048797065726472697665204c5609c1b8152509350611573565b60018360038111156114c5576114c5613c3a565b036114f157806040516020016114db9190613cb8565b6040516020818303038152906040529350611573565b600283600381111561150557611505613c3a565b0361151b57806040516020016114db9190613cf1565b600383600381111561152f5761152f613c3a565b03611573576040517f48797065726472697665205769746864726177616c20536861726500000000006020820152603b015b60405160208183030381529060405293505b505050919050565b80604051636e64089360e11b815260040161159691906134ce565b60405180910390fd5b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610d9690849061232e565b336000908152600a602052604090205460ff16611620576040516282b42960e81b815260040160405180910390fd5b600580548215156101000261ff00199091161790556040517f7c4d1fe30fdbfda9e9c4c43e759ef32e4db5128d4cb58ff3ae9583b89b6242a59061166990831515815260200190565b60405180910390a150565b834211156116955760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b0387166116bc5760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b038781166000818152600f602090815260408083205481518084018f905280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b61010083015261010282018c90526101228201526101420160408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa1580156117aa573d6000803e3d6000fd5b505050602060405103519050886001600160a01b0316816001600160a01b0316146117e857604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b0389166000908152600f60205260408120805490919061180e90613d2b565b909155506001600160a01b038981166000818152600d60209081526040808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050505050505050505050565b6001600160a01b03861615806118a457506001600160a01b038516155b156118c25760405163f0dd15fd60e01b815260040160405180910390fd5b8281146118e25760405163174861a760e31b815260040160405180910390fd5b60005b838110156119325761192a85858381811061190257611902613ca2565b90506020020135888886868681811061191d5761191d613ca2565b905060200201353361193b565b6001016118e5565b50505050505050565b6001600160a01b038416158061195857506001600160a01b038316155b156119765760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b031614611a3a576001600160a01b038085166000908152600d602090815260408083209385168352929052205460ff16611a3a576000858152600e602090815260408083206001600160a01b03808916855290835281842090851684529091529020546000198114611a38576000868152600e602090815260408083206001600160a01b03808a168552908352818420908616845290915281208054859290611a32908490613c79565b90915550505b505b6000858152600b602090815260408083206001600160a01b038816845290915281208054849290611a6c908490613c79565b90915550506000858152600b602090815260408083206001600160a01b038716845290915281208054849290611aa3908490613c66565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b6000611b06612391565b6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016611b3d60208401846134f6565b6001600160a01b031614611b6457604051630ad13b3360e21b815260040160405180910390fd5b336000908152600a602052604090205460ff16158015611bad5750336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614155b8015611bc457506008546001600160a01b03163314155b15611be1576040516282b42960e81b815260040160405180910390fd5b6000611beb611e93565b600980546000909155909150611c028183866123bb565b92507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03167fa4bafc79b3f9fdba2427cd386f1fbc7d8779e9fd7229f6220d53bc04d3901e47611c5a858588612584565b60405190815260200160405180910390a250506104e36001600055565b606060f882901c6001600160f81b0383166000611c9382612221565b90506000836003811115611ca957611ca9613c3a565b03611cdb576040518060400160405280600d81526020016c0485950455244524956452d4c5609c1b8152509350611573565b6001836003811115611cef57611cef613c3a565b03611d0557806040516020016114db9190613d44565b6002836003811115611d1957611d19613c3a565b03611d2f57806040516020016114db9190613d7c565b6003836003811115611d4357611d43613c3a565b03611573576040516c485950455244524956452d575360981b6020820152602d01611561565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b6000848152600e602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b6040516303d1689d60e11b8152670de0b6b3a764000060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906307a2d13a90602401602060405180830381865afa158015611f02573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f269190613c04565b905090565b611f8860405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610160810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c083015260025404821660e0820152600454909161010083019161205991166125b3565b81526003546001600160801b03600160801b918290048116602084015260045460409093019261208b929004166125b3565b905292915050565b60008060006120a184612629565b915091508061116c5760405163aeeb825d60e01b815260040160405180910390fd5b60006109a88383670de0b6b3a76400006126a3565b60006109a883670de0b6b3a7640000846126a3565b6008546001600160a01b03163314612117576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0382166000818152600a6020526040808220805460ff1916851515179055517fa4336c0cb1e245b95ad204faed7e940d6dc999684fd8b5e1ff597a0c4efca8ab9190a25050565b6008546001600160a01b0316331461218f576040516282b42960e81b815260040160405180910390fd5b600880546001600160a01b0319166001600160a01b0383169081179091556040517f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab90600090a250565b6000600c60006121ea6002856126c1565b815260200190815260200160002054600c60006122086001866126c1565b815260200190815260200160002054610a809190613da8565b60408051604d808252608082019092526060919060009082602082018180368337019050509050612253600a85613dde565b61225e906030613c66565b60f81b8161226d600185613c79565b8151811061227d5761227d613ca2565b60200101906001600160f81b031916908160001a90535061229f600a85613df2565b935060015b8415612320576122b5600a86613dde565b6122c0906030613c66565b60f81b8260016122d08487613c79565b6122da9190613c79565b815181106122ea576122ea613ca2565b60200101906001600160f81b031916908160001a90535061230c600a86613df2565b94508061231881613d2b565b9150506122a4565b918290030190815292915050565b60006123436001600160a01b038416836126f6565b905080516000141580156123685750808060200190518101906123669190613e06565b155b15610d9657604051635274afe760e01b81526001600160a01b0384166004820152602401611596565b6002600054036123b457604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b6000806123c885856120c3565b6040516363737ac960e11b8152600481018290529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063c6e6f59290602401602060405180830381865afa158015612430573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124549190613c04565b9450846000036124685760009150506109a8565b6124786040840160208501613521565b15612537576001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001663ba087652866124ba60208701876134f6565b6040516001600160e01b031960e085901b16815260048101929092526001600160a01b031660248201523060448201526064016020604051808303816000875af115801561250c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906125309190613c04565b915061257c565b61257861254760208501856134f6565b6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016908761159f565b8491505b509392505050565b60006125966040830160208401613521565b156125a25750826109a8565b6125ac84846120c3565b90506109a8565b600080670de0b6b3a76400006125c7612704565b6125d19190613e23565b90508083116125e15760006125eb565b6125eb8184613c79565b91506109a8612622670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613e23565b83906120d8565b600080600080600061263a8661273a565b915091508061265157506000958695509350505050565b8560a0015161265f8761297d565b875161266c908590613e3a565b6126769190613e3a565b6126809190613da8565b9250505060008112156126995750600093849350915050565b9360019350915050565b60008260001904841183021582026126ba57600080fd5b5091020490565b60006001600160f81b038211156126eb5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60606109a8838360006129e4565b60006127307f000000000000000000000000000000000000000000000000000000000000000042613dde565b611f269042613c79565b600080600061275c8461014001518561012001516120c390919063ffffffff16565b61010085015160e086015161277091612a81565b61277a9190613da8565b9050600061279085600001518660200151612a96565b905060008213156128935760008290506000806127e1886000015189602001518a604001518b60a001518c60c00151670de0b6b3a76400006127d29190613c79565b8d606001518e60800151612ab3565b91509150806127fa575060009788975095505050505050565b82821061284f576000612834858a60400151868c60c00151670de0b6b3a76400006128259190613c79565b8d606001518e60800151612ba2565b905061283f81613e5a565b9960019950975050505050505050565b60008860200151126128825760a088015161286a9085613c79565b61287390613e5a565b98600198509650505050505050565b60a0880151885161286a9190613c79565b600082121561296f5760006128a783613e5a565b905060006128db8388604001518960c00151670de0b6b3a76400006128cc9190613c79565b8a606001518b60800151612bd2565b9050818110612917576000612873848960400151858b60c00151670de0b6b3a76400006129089190613c79565b8c606001518d60800151612c68565b60006129498489604001518a60c00151670de0b6b3a764000061293a9190613c79565b8b606001518c60800151612d40565b90506129658860600151838561295f9190613c79565b906120d8565b6128739082613c66565b506000946001945092505050565b60006129ac826101000151670de0b6b3a764000061299b9190613c79565b606084015160e08501519190612dcf565b6129da836101400151670de0b6b3a76400006129c89190613c79565b606085015161012086015191906126a3565b610a809190613da8565b606081471015612a095760405163cd78605960e01b8152306004820152602401611596565b600080856001600160a01b03168486604051612a259190613e76565b60006040518083038185875af1925050503d8060008114612a62576040519150601f19603f3d011682016040523d82523d6000602084013e612a67565b606091505b5091509150612a77868383612df5565b9695505050505050565b60006109a88383670de0b6b3a7640000612dcf565b600080612aa38385613da8565b905060008112156109a857600080fd5b6000806000881215612ad557612ac888613e5a565b612ad29087613c66565b95505b6000612ae18a8a612a96565b90506000612af2828a898989612e51565b90506000612b15612b0d89612b07898d612a81565b90612e80565b889088612dcf565b612b1f9083613c79565b9050670de0b6b3a76400008110612b5357612b4c612b45670de0b6b3a76400008a6120d8565b8290612e80565b9050612b6b565b612b68612b45670de0b6b3a76400008a612ed7565b90505b89811015612b825760008094509450505050612b96565b612b8c8a82613c79565b6001945094505050505b97509795505050505050565b600080612bb3888888888888612eec565b909250905080612bc757612bc76000612fae565b509695505050505050565b600080612be28787878787612fc9565b90506000612c0d670de0b6b3a7640000612bfc87876120d8565b612c069190613c66565b8390612ed7565b9050670de0b6b3a76400008110612c3a57612c33612b45670de0b6b3a764000088612ed7565b9050612c52565b612c4f612b45670de0b6b3a7640000886120d8565b90505b612c5c8188613c79565b98975050505050505050565b600080612c788888878787612fc9565b905085871015612c8c57612c8c6000612fae565b612c9a85612b07888a613c79565b965086811015612cae57612cae6000612fae565b6000612cc68486612cbf8b86613c79565b9190612dcf565b9050670de0b6b3a76400008110612cf357612cec612b45670de0b6b3a764000088612ed7565b9050612d0b565b612d08612b45670de0b6b3a7640000886120d8565b90505b612d158185612ed7565b905088811015612d2957612d296000612fae565b612d338982613c79565b9998505050505050505050565b600080612d508787878787612e51565b90506000612d74670de0b6b3a7640000612d6a8787612ed7565b6126229190613c66565b9050670de0b6b3a76400008110612da157612d9a612b45670de0b6b3a7640000886120d8565b9050612db9565b612db6612b45670de0b6b3a764000088612ed7565b90505b612dc381856120d8565b9050612c5c8882613c79565b6000826000190484118302158202612de657600080fd5b50910281810615159190040190565b606082612e0a57612e0582612fee565b6109a8565b8151158015612e2157506001600160a01b0384163b155b15612e4a57604051639996b31560e01b81526001600160a01b0385166004820152602401611596565b50806109a8565b6000612e5d8585612e80565b612e76612e6e86612b07868b6120c3565b8590856126a3565b612a779190613c66565b600081600003612e995750670de0b6b3a7640000610a80565b82600003612ea957506000610a80565b816000612eb585613017565b9050818102612ecc670de0b6b3a764000082613e92565b9050612a778161322a565b60006109a883670de0b6b3a764000084612dcf565b6000806000612efe8989888888612fc9565b9050612f0e86612b07898b613c66565b975087811015612f25576000809250925050612fa3565b6000612f368587612cbf8c86613c79565b9050670de0b6b3a76400008110612f6357612f5c612b45670de0b6b3a764000089612ed7565b9050612f7b565b612f78612b45670de0b6b3a7640000896120d8565b90505b612f858186612ed7565b9050808a1115612f9c57612f99818b613c79565b93505b6001925050505b965096945050505050565b80604051633c06d78b60e11b81526004016115969190613ec0565b6000612fd58585612e80565b612e76612fe686612b07868b612a81565b859085612dcf565b805115612ffe5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b60008082136130395760405163e61b497560e01b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000680248ce36a70cb26b3e19821361324557506000919050565b680755bf798b4a1bf1e5821261326e576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b60405180610180016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000801916815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b031681526020016134606040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b60006020828403121561347757600080fd5b5035919050565b60005b83811015613499578181015183820152602001613481565b50506000910152565b600081518084526134ba81602086016020860161347e565b601f01601f19169290920160200192915050565b6020815260006109a860208301846134a2565b6001600160a01b03811681146108e657600080fd5b60006020828403121561350857600080fd5b81356109a8816134e1565b80151581146108e657600080fd5b60006020828403121561353357600080fd5b81356109a881613513565b60ff811681146108e657600080fd5b60008060008060008060008060006101208a8c03121561356c57600080fd5b8935985060208a0135975060408a0135613585816134e1565b965060608a0135613595816134e1565b955060808a01356135a581613513565b945060a08a0135935060c08a01356135bc8161353e565b8093505060e08a013591506101008a013590509295985092959850929598565b60008083601f8401126135ee57600080fd5b50813567ffffffffffffffff81111561360657600080fd5b6020830191508360208260051b850101111561362157600080fd5b9250929050565b6000806000806000806080878903121561364157600080fd5b863561364c816134e1565b9550602087013561365c816134e1565b9450604087013567ffffffffffffffff8082111561367957600080fd5b6136858a838b016135dc565b9096509450606089013591508082111561369e57600080fd5b506136ab89828a016135dc565b979a9699509497509295939492505050565b600080600080608085870312156136d357600080fd5b8435935060208501356136e5816134e1565b925060408501356136f5816134e1565b9396929550929360600135925050565b60008060006060848603121561371a57600080fd5b83359250602084013561372c816134e1565b9150604084013561373c816134e1565b809150509250925092565b6000806040838503121561375a57600080fd5b82359150602083013561376c816134e1565b809150509250929050565b60006020828403121561378957600080fd5b813567ffffffffffffffff8111156137a057600080fd5b8201606081850312156109a857600080fd5b600080600080608085870312156137c857600080fd5b8435935060208501356137da816134e1565b92506040850135915060608501356137f1816134e1565b939692955090935050565b815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160808301519082015261018080830151908201526101a080830151908201526101c091820151918101919091526101e00190565b600080604083850312156138b057600080fd5b82356138bb816134e1565b9150602083013561376c81613513565b6000806000606084860312156138e057600080fd5b8335925060208401356138f2816134e1565b929592945050506040919091013590565b81516001600160a01b031681526101e08101602083015161392f60208401826001600160a01b03169052565b5060408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151613993828501826001600160a01b03169052565b5050610140838101516001600160a01b03169083015261016080840151805182850152602081015161018085015260408101516101a085015260608101516101c08501525b505092915050565b600080602083850312156139f357600080fd5b823567ffffffffffffffff811115613a0a57600080fd5b613a16858286016135dc565b90969095509350505050565b6020808252825182820181905260009190848201906040850190845b81811015613a5a57835183529284019291840191600101613a3e565b50909695505050505050565b81516001600160801b0316815261018081016020830151613a9260208401826001600160801b03169052565b506040830151613aad60408401826001600160801b03169052565b506060830151613ac860608401826001600160801b03169052565b506080830151613add6080840182600f0b9052565b5060a0830151613af860a08401826001600160801b03169052565b5060c0830151613b1360c08401826001600160801b03169052565b5060e0830151613b2e60e08401826001600160801b03169052565b506101008381015115159083015261012080840151151590830152610140808401516001600160701b031690830152610160808401516001600160801b038116828501526139d8565b600080600080600060a08688031215613b8f57600080fd5b853594506020860135613ba1816134e1565b93506040860135613bb1816134e1565b9250606086013591506080860135613bc8816134e1565b809150509295509295909350565b60008060408385031215613be957600080fd5b8235613bf4816134e1565b9150602083013561376c816134e1565b600060208284031215613c1657600080fd5b5051919050565b600060208284031215613c2f57600080fd5b81516109a88161353e565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b80820180821115610a8057610a80613c50565b81810381811115610a8057610a80613c50565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b700243cb832b9323934bb32902637b7339d1607d1b815260008251613ce481601185016020870161347e565b9190910160110192915050565b710243cb832b9323934bb329029b437b93a1d160751b815260008251613d1e81601285016020870161347e565b9190910160120192915050565b600060018201613d3d57613d3d613c50565b5060010190565b6f242ca822a9222924ab2296a627a7239d60811b815260008251613d6f81601085016020870161347e565b9190910160100192915050565b70242ca822a9222924ab2296a9a427a92a1d60791b815260008251613ce481601185016020870161347e565b818103600083128015838313168383128216171561116c5761116c613c50565b634e487b7160e01b600052601260045260246000fd5b600082613ded57613ded613dc8565b500690565b600082613e0157613e01613dc8565b500490565b600060208284031215613e1857600080fd5b81516109a881613513565b8082028115828204841417610a8057610a80613c50565b80820182811260008312801582168215821617156139d8576139d8613c50565b6000600160ff1b8201613e6f57613e6f613c50565b5060000390565b60008251613e8881846020870161347e565b9190910192915050565b600082613ea157613ea1613dc8565b600160ff1b821460001984141615613ebb57613ebb613c50565b500590565b6020810160048310613ee257634e487b7160e01b600052602160045260246000fd5b9190529056fea264697066735822122039d4c69a5ec874dc4f7c04a74d8d90b34494d16fc56b89f274b019a775f2d5b364736f6c63430008140033";
        readonly sourceMap: "938:2592:25:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;16011:137:16;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2044:1210:25;;;;;;:::i;:::-;;:::i;:::-;;2164:70:16;;;;;;:::i;:::-;;:::i;7637:482::-;;;;;;:::i;:::-;;:::i;6092:209::-;;;;;;:::i;:::-;;:::i;3025:240::-;;;;;;:::i;:::-;;:::i;8713:183::-;;;;;;:::i;:::-;;:::i;:::-;;;5226:13:182;;-1:-1:-1;;;;;5222:54:182;5204:73;;5192:2;5177:18;8713:183:16;5002:281:182;15372:223:16;;;;;;:::i;:::-;;:::i;:::-;;;5911:25:182;;;5899:2;5884:18;15372:223:16;5765:177:182;15775:117:16;;;:::i;:::-;;;6119:4:182;6107:17;;;6089:36;;6077:2;6062:18;15775:117:16;5947:184:182;14332:173:16;;;;;;:::i;:::-;;:::i;1838:174::-;;;;;;:::i;:::-;;:::i;8281:121::-;;;;;;:::i;:::-;;:::i;:::-;;;7376:14:182;;7369:22;7351:41;;7339:2;7324:18;8281:121:16;7211:187:182;16271:141:16;;;;;;:::i;:::-;;:::i;4462:225::-;;;;;;:::i;:::-;;:::i;10723:1619::-;;;:::i;:::-;;;;;;;:::i;2597:94::-;;;;;;:::i;:::-;;:::i;16561:119::-;;;;;;:::i;:::-;;:::i;5626:179::-;;;;;;:::i;:::-;;:::i;4919:277::-;;;;;;:::i;:::-;;:::i;2344:83::-;;;;;;:::i;:::-;;:::i;9479:1075::-;;;:::i;:::-;;;;;;;:::i;14640:129::-;;;;;;:::i;:::-;;:::i;13597:565::-;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;8477:101::-;;;:::i;:::-;;;-1:-1:-1;;;;;12928:32:182;;;12910:51;;12898:2;12883:18;8477:101:16;12764:203:182;12986:132:16;;;:::i;9061:213::-;;;;;;:::i;:::-;;:::i;13197:159::-;;;:::i;:::-;;;;;;;:::i;3670:285::-;;;;;;:::i;:::-;;:::i;14958:186::-;;;;;;:::i;:::-;;:::i;12466:367::-;;;:::i;:::-;;;;16411:13:182;;-1:-1:-1;;;;;16407:22:182;;;16389:41;;16490:4;16478:17;;;16472:24;16468:33;16446:20;;;16439:63;;;;16309:18;12466:367:16;16130:378:182;3434:94:25;;;:::i;16011:137:16:-;16065:13;16090:51;16109:30;16131:7;16109:21;:30::i;:::-;16098:42;;;;;;;;:::i;:::-;;;;;;;;;;;;;16090:7;:51::i;:::-;16011:137;;;:::o;2044:1210:25:-;2166:10;-1:-1:-1;;;;;2180:13:25;2166:27;;;;;:52;;-1:-1:-1;2207:10:25;2198:20;;;;:8;:20;;;;;;;;2197:21;2166:52;2162:116;;;2241:26;;-1:-1:-1;;;2241:26:25;;;;;;;;;;;2162:116;2398:10;-1:-1:-1;;;;;2370:39:25;2378:7;-1:-1:-1;;;;;2370:39:25;;:90;;;;2453:6;-1:-1:-1;;;;;2425:35:25;2433:7;-1:-1:-1;;;;;2425:35:25;;2370:90;2353:180;;;2492:30;;-1:-1:-1;;;2492:30:25;;;;;;;;;;;2353:180;2660:35;;-1:-1:-1;;;2660:35:25;;2689:4;2660:35;;;12910:51:182;2638:19:25;;2660:10;-1:-1:-1;;;;;2660:20:25;;;;12883:18:182;;2660:35:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2728:31;;-1:-1:-1;;;2728:31:25;;2753:4;2728:31;;;12910:51:182;2638:57:25;;-1:-1:-1;2705:20:25;;-1:-1:-1;;;;;2728:6:25;:16;;;;12883:18:182;;2728:31:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2869:32;;-1:-1:-1;;;2869:32:25;;2895:4;2869:32;;;12910:51:182;2705:54:25;;-1:-1:-1;2851:15:25;;-1:-1:-1;;;;;2869:17:25;;;;;12883:18:182;;2869:32:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2851:50;-1:-1:-1;2911:60:25;-1:-1:-1;;;;;2911:36:25;;2948:13;2851:50;2911:36;:60::i;:::-;3067:35;;-1:-1:-1;;;3067:35:25;;3096:4;3067:35;;;12910:51:182;3106:11:25;;3067:10;-1:-1:-1;;;;;3067:20:25;;;;12883:18:182;;3067:35:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:50;;:113;;;-1:-1:-1;3133:31:25;;-1:-1:-1;;;3133:31:25;;3158:4;3133:31;;;12910:51:182;3168:12:25;;3133:6;-1:-1:-1;;;;;3133:16:25;;;;12883:18:182;;3133:31:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:47;;3067:113;3050:198;;;3212:25;;-1:-1:-1;;;3212:25:25;;;;;;;;;;;3050:198;2084:1170;;;2044:1210;:::o;2164:70:16:-;2212:15;2219:7;2212:6;:15::i;:::-;2164:70;:::o;7637:482::-;7902:210;7929:15;7958:14;7986:5;8005:7;8026:9;8049:8;8071:1;8086;8101;7902:13;:210::i;:::-;7637:482;;;;;;;;;:::o;6092:209::-;6253:41;6272:4;6278:2;6282:3;;6287:6;;6253:18;:41::i;:::-;6092:209;;;;;;:::o;3025:240::-;3206:52;3220:7;3229:4;3235:2;3239:6;3247:10;3206:13;:52::i;8713:183::-;-1:-1:-1;;;;;;;;;;;;8839:50:16;8858:12;:29;8871:15;8858:29;;;;;;;;;;;8847:41;;;;;;17148:13:182;-1:-1:-1;;;;;17144:54:182;17126:73;;17114:2;17099:18;;16927:278;15372:223:16;15503:7;15541:27;;;:18;:27;;;;;;;;-1:-1:-1;;;;;15541:36:16;;;;;;;;;;;:45;;;;;;;;;;;15530:57;;;;;5911:25:182;15522:66:16;;5884:18:182;15530:57:16;5765:177:182;15522:66:16;15372:223;;;;;:::o;15775:117::-;15826:5;15843:42;15862:10;-1:-1:-1;;;;;15862:19:16;;:21;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;15851:33;;;6119:4:182;6107:17;;;15851:33:16;;;6089:36:182;6062:18;15851:33:16;5947:184:182;15843:42:16;15775:117;:::o;14332:173::-;14430:7;14468:19;;;:10;:19;;;;;;;;-1:-1:-1;;;;;14468:28:16;;;;;;;;;;14457:40;;;;;5911:25:182;14449:49:16;;5884:18:182;14457:40:16;5765:177:182;14449:49:16;14332:173;;;;:::o;1838:174::-;1939:16;1974:31;1996:8;1974:21;:31::i;8281:121::-;-1:-1:-1;;;;;8375:18:16;;8340:4;8375:18;;;:8;:18;;;;;;;;;8364:30;;8356:39;;8364:30;;8375:18;;;8364:30;7376:14:182;;7369:22;7351:41;;7339:2;7324:18;;7211:187;16271:141:16;16327:13;16352:53;16371:32;16395:7;16371:23;:32::i;4462:225::-;4614:7;1805:32:68;1829:7;1805:23;:32::i;:::-;-1:-1:-1;;;;;1791:46:68;:10;-1:-1:-1;;;;;1791:46:68;;1787:116;;1860:32;;-1:-1:-1;;;1860:32:68;;;;;;;;;;;1787:116;4633:47:16::1;4646:7;4655:8;4665:6;4673;4633:12;:47::i;:::-;4462:225:::0;;;;;:::o;10723:1619::-;10769:27;-1:-1:-1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;10769:27:16;10808:23;10834:21;:19;:21::i;:::-;11001:13;:29;10938:12;:48;;;;10865:21;10889:34;;;;;10808:47;;-1:-1:-1;10865:21:16;-1:-1:-1;;;;;11001:29:16;;;;10889:97;;10938:48;10889:97;:::i;:::-;:141;;;;:::i;:::-;10865:165;;11040:20;11081:1;11063:15;:19;:178;;11240:1;11063:178;;;11097:128;11209:15;11097:86;11143:39;11166:15;11143:22;:39::i;:::-;11097:45;:86::i;:::-;:111;;:128::i;:::-;11290:1006;;;;;;;;11340:12;:26;-1:-1:-1;;;;;11340:26:16;;;11290:1006;;11397:28;;;;;;11290:1006;;;;11459:31;;-1:-1:-1;;;;;11459:31:16;;;;11290:1006;;;;;;;-1:-1:-1;;;11525:32:16;;;;;;11290:1006;;;;11585:25;;;;;;11290:1006;;;;;;;;;;;;;;;;11397:28;11688:29;;;;;;11290:1006;;;;11459:31;11756:36;;;;11340:26;11290:1006;;;11825:30;;;;;;11290:1006;;;;11895:37;;;;;;11290:1006;;;;12141:13;:29;;;;11290:1006;;;;12210:22;;;;;;;11290:1006;;;;11040:201;;-1:-1:-1;11251:36:16;;11290:1006;;;12002:18;;:92;;12059:35;:12;12080:13;12059:20;:35::i;:::-;12002:92;;;12039:1;12002:92;11290:1006;;12260:25;;-1:-1:-1;;;;;12260:25:16;11290:1006;;;;;12314:20;;11251:1045;;-1:-1:-1;12306:29:16;;12314:20;;11251:1045;;12314:20;;:::i;12306:29::-;10798:1544;;;;10723:1619;:::o;2597:94::-;2661:23;2672:3;2677:6;2661:10;:23::i;:::-;2597:94;;:::o;16561:119::-;-1:-1:-1;;;;;16655:16:16;;16617:7;16655:16;;;:7;:16;;;;;;;;;16644:28;;;;;5911:25:182;16636:37:16;;5884:18:182;16644:28:16;5765:177:182;5626:179:16;5747:51;5760:7;5769:8;5779:6;5787:10;5747:12;:51::i;:::-;5626:179;;;:::o;4919:277::-;5053:10;5035:29;;;;:17;:29;;;;;;;;-1:-1:-1;;;;;5035:39:16;;;;;;;;;;;;:50;;-1:-1:-1;;5035:50:16;;;;;;;;;;5143:46;;7351:41:182;;;5035:39:16;;5053:10;5143:46;;7324:18:182;5143:46:16;;;;;;;4919:277;;:::o;2344:83::-;2400:20;2415:4;2400:14;:20::i;9479:1075::-;9551:29;;:::i;:::-;9596:951;9645:878;;;;;;;;9701:10;-1:-1:-1;;;;;9645:878:16;;;;;9748:14;-1:-1:-1;;;;;9645:878:16;;;;;9800:15;9645:878;;;;9861:23;9645:878;;;;9928:21;9645:878;;;;9997:25;9645:878;;;;10062:17;9645:878;;;;10121:19;9645:878;;;;10175:12;9645:878;;;;10221:11;;;;;;;;;-1:-1:-1;;;;;10221:11:16;-1:-1:-1;;;;;9645:878:16;;;;;10268:13;-1:-1:-1;;;;;9645:878:16;;;;;10309:195;;;;;;;;10351:9;10309:195;;;;10386:8;10309:195;;;;10420:16;10309:195;;;;10462:20;10309:195;;;9645:878;;;9617:920;;;;;;;;:::i;14640:129::-;14701:7;14739:21;;;:12;:21;;;;;;;;;14728:33;;;;;5911:25:182;14720:42:16;;5884:18:182;14728:33:16;5765:177:182;13597:565:16;13675:16;13703:23;13743:6;13729:28;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;13729:28:16;;13703:54;;13829:9;13824:294;13844:17;;;13824:294;;;13879:12;13894:6;;13901:1;13894:9;;;;;;;:::i;:::-;;;;;;;13879:24;;13917:12;14000:4;13994:11;13986:19;;14044:4;14032:6;14039:1;14032:9;;;;;;;;:::i;:::-;;;;;;;;;;:16;-1:-1:-1;;14090:3:16;;13824:294;;;;14128:27;14147:6;14136:18;;;;;;;;:::i;14128:27::-;13693:469;13597:565;;;;:::o;8477:101::-;8548:22;;;-1:-1:-1;;;;;8559:10:16;12928:32:182;8548:22:16;;;12910:51:182;8521:7:16;;8540:31;;12883:18:182;8548:22:16;12764:203:182;12986:132:16;13049:7;13068:43;13087:22;;13076:34;;;;;;5911:25:182;;5899:2;5884:18;;5765:177;9061:213:16;9154:6;9172:95;9204:52;9220:35;9238:17;9220:15;:35;:::i;:::-;9204:15;:52::i;:::-;9193:64;;;;;;5911:25:182;;5899:2;5884:18;;5765:177;13197:159:16;-1:-1:-1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;13316:33:16;13335:12;13324:24;;;;;;;18695:13:182;;-1:-1:-1;;;;;18789:18:182;;;4932:59;;18838:3;18869:18;;;18904:4;18889:20;;4932:59;18956:4;18944:17;;18938:24;18990:20;;;19027:4;19012:20;;4932:59;19061:20;;19098:4;19083:20;;4932:59;19150:4;19138:17;;19132:24;19194:2;19183:27;;;19212:18;;;13205:34;19259:20;;19296:4;19281:20;;4932:59;19348:4;19336:17;;19330:24;19382:20;;;19419:4;19404:20;;4932:59;19453:20;;19490:4;19475:20;;4932:59;19542:4;19530:17;;;19524:24;19590:4;19573:22;;;7185:13;7178:21;19612:6;19597:22;;7166:34;19653:1;19649:19;;;19645:30;7185:13;7178:21;19692:6;19677:22;;7166:34;-1:-1:-1;;;;;19736:2:182;19732:20;;;19728:57;19802:6;19787:22;;13304:55;19838:20;;;19875:6;19860:22;;4932:59;18665:3;18650:19;;18476:1413;3670:285:16;3839:7;1805:32:68;1829:7;1805:23;:32::i;:::-;-1:-1:-1;;;;;1791:46:68;:10;-1:-1:-1;;;;;1791:46:68;;1787:116;;1860:32;;-1:-1:-1;;;1860:32:68;;;;;;;;;;;1787:116;3900:48:16::1;3914:7;3923:4;3929:2;3933:6;3941;3900:13;:48::i;14958:186::-:0;-1:-1:-1;;;;;15099:26:16;;;15064:4;15099:26;;;:17;:26;;;;;;;;:36;;;;;;;;;;;;15088:48;;15099:36;;;;7376:14:182;7369:22;15088:48:16;;;7351:41:182;;;;15064:4:16;;15080:57;;7324:18:182;15088:48:16;7211:187:182;12466:367:16;-1:-1:-1;;;;;;;;;;;;;;;;;12636:166:16;;;;;;;;12700:13;:29;-1:-1:-1;;;;;12700:29:16;;;12636:166;;;-1:-1:-1;;;12761:22:16;;;;;12636:166;;;;;;;12608:208;;;;;16389:41:182;;;;16472:24;;16468:33;16446:20;;;16439:63;;;;12587:239:16;;16309:18:182;;12608:208:16;16130:378:182;3434:94:25;3502:18;;;-1:-1:-1;;;;;3513:6:25;12928:32:182;3502:18:25;;;12910:51:182;3474:8:25;;3494:27;;12883:18:182;3502::25;12764:203:182;2533:719:71;2606:19;2200:4;2196:14;;;-1:-1:-1;;;;;2253:120:71;;2638:20;2736:19;2253:120;2736:8;:19::i;:::-;2709:46;-1:-1:-1;2779:16:71;2769:6;:26;;;;;;;;:::i;:::-;;2765:481;;2811:23;;;;;;;;;;;;;-1:-1:-1;;;2811:23:71;;;;;2765:481;;;2865:18;2855:6;:28;;;;;;;;:::i;:::-;;2851:395;;2952:10;2914:49;;;;;;;;:::i;:::-;;;;;;;;;;;;;2899:65;;2851:395;;;2995:19;2985:6;:29;;;;;;;;:::i;:::-;;2981:265;;3084:10;3045:50;;;;;;;;:::i;2981:265::-;3127:29;3117:6;:39;;;;;;;;:::i;:::-;;3113:133;;3187:47;;21017:29:182;3187:47:71;;;21005:42:182;21063:12;;3187:47:71;;;;;;;;;;;;;3172:63;;3113:133;2627:625;;;2533:719;;;:::o;16889:106:16:-;16981:6;16958:30;;-1:-1:-1;;;16958:30:16;;;;;;;;:::i;:::-;;;;;;;;1303:160:117;1412:43;;;-1:-1:-1;;;;;21501:32:182;;1412:43:117;;;21483:51:182;21550:18;;;;21543:34;;;1412:43:117;;;;;;;;;;21456:18:182;;;;1412:43:117;;;;;;;;-1:-1:-1;;;;;1412:43:117;-1:-1:-1;;;1412:43:117;;;1385:71;;1405:5;;1385:19;:71::i;2185:350:63:-;2319:10;2310:20;;;;:8;:20;;;;;;;;2305:85;;2353:26;;-1:-1:-1;;;2353:26:63;;;;;;;;;;;2305:85;2455:21;:31;;;;;;;-1:-1:-1;;2455:31:63;;;;;;2501:27;;;;;;2479:7;7376:14:182;7369:22;7351:41;;7339:2;7324:18;;7211:187;2501:27:63;;;;;;;;2185:350;:::o;8383:1509:68:-;8725:8;8707:15;:26;8703:93;;;8756:29;;-1:-1:-1;;;8756:29:68;;;;;;;;;;;8703:93;-1:-1:-1;;;;;8857:19:68;;8853:92;;8899:35;;-1:-1:-1;;;8899:35:68;;;;;;;;;;;8853:92;-1:-1:-1;;;;;9372:14:68;;;9027:18;9372:14;;;:7;:14;;;;;;;;;9197:245;;;;;21869:25:182;;;21948:18;;;21941:43;;;;22020:15;;;22000:18;;;21993:43;22079:14;;22072:22;22052:18;;;22045:50;22111:19;;;22104:35;;;;22155:19;;;;22148:35;;;9197:245:68;;;;;;;;;;21841:19:182;;;9197:245:68;;;9166:294;;;;;;;;-1:-1:-1;;;9071:403:68;;;22452:27:182;22495:11;;;22488:27;;;22531:12;;;22524:28;22568:12;;9071:403:68;;;-1:-1:-1;;9071:403:68;;;;;;;;;9048:436;;9071:403;9048:436;;;;9494:14;9511:30;;;;;;;;;22818:25:182;;;22891:4;22879:17;;22859:18;;;22852:45;;;;22913:18;;;22906:34;;;22956:18;;;22949:34;;;9048:436:68;;-1:-1:-1;9494:14:68;9511:30;;22790:19:182;;9511:30:68;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9494:47;;9565:5;-1:-1:-1;;;;;9555:15:68;:6;-1:-1:-1;;;;;9555:15:68;;9551:83;;9593:30;;-1:-1:-1;;;9593:30:68;;;;;;;;;;;9551:83;-1:-1:-1;;;;;9688:14:68;;;;;;:7;:14;;;;;9686:16;;9688:14;;;9686:16;;;:::i;:::-;;;;-1:-1:-1;;;;;;9739:24:68;;;;;;;:17;:24;;;;;;;;:33;;;;;;;;;;;;;:45;;-1:-1:-1;;9739:45:68;;;;;;;;;;9844:41;;7351::182;;;9844::68;;7324:18:182;9844:41:68;;;;;;;8639:1253;;8383:1509;;;;;;;;;:::o;2247:716::-;-1:-1:-1;;;;;2459:18:68;;;;:38;;-1:-1:-1;;;;;;2481:16:68;;;2459:38;2455:111;;;2520:35;;-1:-1:-1;;;2520:35:68;;;;;;;;;;;2455:111;2622:27;;;2618:103;;2672:38;;-1:-1:-1;;;2672:38:68;;;;;;;;;;;2618:103;2786:9;2781:176;2801:14;;;2781:176;;;2833:54;2847:3;;2851:1;2847:6;;;;;;;:::i;:::-;;;;;;;2855:4;2861:2;2865:6;;2872:1;2865:9;;;;;;;:::i;:::-;;;;;;;2876:10;2833:13;:54::i;:::-;2929:3;;2781:176;;;;2247:716;;;;;;:::o;3314:1579::-;-1:-1:-1;;;;;3527:18:68;;;;:38;;-1:-1:-1;;;;;;3549:16:68;;;3527:38;3523:98;;;3586:35;;-1:-1:-1;;;3586:35:68;;;;;;;;;;;3523:98;3726:4;-1:-1:-1;;;;;3716:14:68;:6;-1:-1:-1;;;;;3716:14:68;;3712:888;;-1:-1:-1;;;;;3867:23:68;;;;;;;:17;:23;;;;;;;;:31;;;;;;;;;;;;3862:728;;3977:16;3996:27;;;:18;:27;;;;;;;;-1:-1:-1;;;;;3996:33:68;;;;;;;;;;;:41;;;;;;;;;;;-1:-1:-1;;4112:29:68;;4108:468;;4506:27;;;;:18;:27;;;;;;;;-1:-1:-1;;;;;4506:33:68;;;;;;;;;;;:41;;;;;;;;;;:51;;4551:6;;4506:27;:51;;4551:6;;4506:51;:::i;:::-;;;;-1:-1:-1;;4108:468:68;3900:690;3862:728;4744:19;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;4744:25:68;;;;;;;;;:35;;4773:6;;4744:19;:35;;4773:6;;4744:35;:::i;:::-;;;;-1:-1:-1;;4789:19:68;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;4789:23:68;;;;;;;;;:33;;4816:6;;4789:19;:33;;4816:6;;4789:33;:::i;:::-;;;;-1:-1:-1;;4837:49:68;;;23308:25:182;;;23364:2;23349:18;;23342:34;;;-1:-1:-1;;;;;4837:49:68;;;;;;;;;;;;;;23281:18:182;4837:49:68;;;;;;;3314:1579;;;;;:::o;985:1051:63:-;1100:16;2356:21:120;:19;:21::i;:::-;-1:-1:-1;;;;;1224:13:63::1;1200:37;:20;;::::0;::::1;:8:::0;:20:::1;:::i;:::-;-1:-1:-1::0;;;;;1200:37:63::1;;1196:110;;1260:35;;-1:-1:-1::0;;;1260:35:63::1;;;;;;;;;;;1196:110;1408:10;1399:20;::::0;;;:8:::1;:20;::::0;;;;;::::1;;1398:21;:64:::0;::::1;;;-1:-1:-1::0;1435:10:63::1;-1:-1:-1::0;;;;;1449:13:63::1;1435:27;;;1398:64;:105;;;;-1:-1:-1::0;1492:11:63::1;::::0;-1:-1:-1;;;;;1492:11:63::1;1478:10;:25;;1398:105;1381:191;;;1535:26;;-1:-1:-1::0;;;1535:26:63::1;;;;;;;;;;;1381:191;1652:23;1678:21;:19;:21::i;:::-;1741:22;::::0;;1709:29:::1;1773::::0;;;1652:47;;-1:-1:-1;1823:59:63::1;1741:22:::0;1652:47;1873:8;1823:9:::1;:59::i;:::-;1812:70;;1931:13;-1:-1:-1::0;;;;;1897:132:63::1;;1958:61;1983:8;1993:15;2010:8;1958:24;:61::i;:::-;1897:132;::::0;5911:25:182;;;5899:2;5884:18;1897:132:63::1;;;;;;;1118:918;;2398:20:120::0;1713:1;2924:7;:21;2744:208;3384:705:71;3459:19;2200:4;2196:14;;;-1:-1:-1;;;;;2253:120:71;;3491:20;3589:19;2253:120;3589:8;:19::i;:::-;3562:46;-1:-1:-1;3632:16:71;3622:6;:26;;;;;;;;:::i;:::-;;3618:465;;3664:23;;;;;;;;;;;;;-1:-1:-1;;;3664:23:71;;;;;3618:465;;;3718:18;3708:6;:28;;;;;;;;:::i;:::-;;3704:379;;3804:10;3767:48;;;;;;;;:::i;3704:379::-;3847:19;3837:6;:29;;;;;;;;:::i;:::-;;3833:250;;3935:10;3897:49;;;;;;;;:::i;3833:250::-;3978:29;3968:6;:39;;;;;;;;:::i;:::-;;3964:119;;4038:33;;-1:-1:-1;;;4038:33:71;;;24496:28:182;24540:12;;4038:33:71;24294:264:182;10142:590:68;10338:34;;;10357:4;10338:34;;;;21483:51:182;;;;21550:18;;;21543:34;;;;10338::68;;;;;;;;;21456:18:182;;;;10338:34:68;;10328:45;;;;;;;;;-1:-1:-1;;;;;;10512:147:68;;;24774:39:182;10576:14:68;24846:15:182;;;-1:-1:-1;;24842:53:182;24829:11;;;24822:74;24912:12;;;24905:28;10630:15:68;24949:12:182;;;;24942:28;;;;10512:147:68;;;;;;;;;;24986:12:182;;;;10512:147:68;;;10489:180;;;;;;10142:590::o;5350:301::-;5496:27;;;;:18;:27;;;;;;;;-1:-1:-1;;;;;5496:35:68;;;;;;;;;;;;:45;;;;;;;;;;;;;:54;;;5610:34;;5911:25:182;;;5496:35:68;;5610:34;;5884:18:182;5610:34:68;;;;;;;5350:301;;;;:::o;6024:123:23:-;6113:27;;-1:-1:-1;;;6113:27:23;;150:4:73;6113:27:23;;;5911:25:182;6087:7:23;;6113:6;-1:-1:-1;;;;;6113:22:23;;;;5884:18:182;;6113:27:23;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;6106:34;;6024:123;:::o;9144:970:64:-;9239:39;-1:-1:-1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9239:39:64;9299:808;;;;;;;;9354:12;:26;-1:-1:-1;;;;;9354:26:64;;;9299:808;;9411:28;;;;9299:808;;;;-1:-1:-1;;;9467:25:64;;;;;;9299:808;;;;;;;;;;;;;9577:23;9299:808;;;;9636:21;9299:808;;;;9684:12;9299:808;;;;9411:28;9728:29;;;;9299:808;;;;9844:36;;9299:808;;9354:26;9299:808;;;9797:97;;9844:36;9797:29;:97::i;:::-;9299:808;;9927:30;;-1:-1:-1;;;;;;;;9927:30:64;;;;;;9299:808;;;;10045:37;;9299:808;;;;;9998:98;;10045:37;;;9998:29;:98::i;:::-;9299:808;;9290:817;9144:970;-1:-1:-1;;9144:970:64:o;6170:342:75:-;6273:7;6293:20;6315:12;6331:56;6370:7;6331:25;:56::i;:::-;6292:95;;;;6402:7;6397:80;;6432:34;;-1:-1:-1;;;6432:34:75;;;;;;;;;;;1535:119:73;1597:7;1624:22;1635:1;1638;1641:4;1624:10;:22::i;1810:165::-;1872:7;1899:22;1910:1;1913:4;1919:1;1899:10;:22::i;3148:330:63:-;3280:11;;-1:-1:-1;;;;;3280:11:63;3266:10;:25;3262:89;;3314:26;;-1:-1:-1;;;3314:26:63;;;;;;;;;;;3262:89;-1:-1:-1;;;;;3416:13:63;;;;;;:8;:13;;;;;;:22;;-1:-1:-1;;3416:22:63;;;;;;;3453:18;;;3416:13;3453:18;3148:330;;:::o;2653:328::-;2777:11;;-1:-1:-1;;;;;2777:11:63;2763:10;:25;2759:89;;2811:26;;-1:-1:-1;;;2811:26:63;;;;;;;;;;;2759:89;2918:11;:18;;-1:-1:-1;;;;;;2918:18:63;-1:-1:-1;;;;;2918:18:63;;;;;;;;2951:23;;;;-1:-1:-1;;2951:23:63;2653:328;:::o;6343:827:64:-;6428:6;6962:12;:187;6996:135;7043:27;7096:13;6996:21;:135::i;:::-;6962:187;;;;;;;;;;;;6723:12;:186;6757:134;6804:26;6856:13;6757:21;:134::i;:::-;6723:186;;;;;;;;;;;;6699:464;;;;:::i;4247:1154:71:-;4582:26;;;4545:2;4582:26;;;;;;;;;4316:20;;4545:2;4519:23;;4545:2;4582:26;;;;;;;;;;-1:-1:-1;;4557:51:71;-1:-1:-1;4841:9:71;4848:2;4841:4;:9;:::i;:::-;4840:16;;4854:2;4840:16;:::i;:::-;4806:62;;4773:9;4783:19;4801:1;4783:15;:19;:::i;:::-;4773:30;;;;;;;;:::i;:::-;;;;:95;-1:-1:-1;;;;;4773:95:71;;;;;;;;-1:-1:-1;4878:10:71;4886:2;4878:10;;:::i;:::-;;-1:-1:-1;4915:1:71;4926:201;4933:9;;4926:201;;5039:9;5046:2;5039:4;:9;:::i;:::-;5038:16;;5052:2;5038:16;:::i;:::-;5000:70;;4958:9;4995:1;4968:24;4986:6;4968:15;:24;:::i;:::-;:28;;;;:::i;:::-;4958:39;;;;;;;;:::i;:::-;;;;:112;-1:-1:-1;;;;;4958:112:71;;;;;;;;-1:-1:-1;5084:10:71;5092:2;5084:10;;:::i;:::-;;-1:-1:-1;5108:8:71;;;;:::i;:::-;;;;4926:201;;;5298:28;;;;5283:44;5340:22;;;5283:44;4247:1154;-1:-1:-1;;4247:1154:71:o;4059:629:117:-;4478:23;4504:33;-1:-1:-1;;;;;4504:27:117;;4532:4;4504:27;:33::i;:::-;4478:59;;4551:10;:17;4572:1;4551:22;;:57;;;;;4589:10;4578:30;;;;;;;;;;;;:::i;:::-;4577:31;4551:57;4547:135;;;4631:40;;-1:-1:-1;;;4631:40:117;;-1:-1:-1;;;;;12928:32:182;;4631:40:117;;;12910:51:182;12883:18;;4631:40:117;12764:203:182;2431:307:120;1755:1;2558:7;;:18;2554:86;;2599:30;;-1:-1:-1;;;2599:30:120;;;;;;;;;;;2554:86;1755:1;2714:7;:17;2431:307::o;4345:1482:23:-;4498:23;;4835:28;:7;4851:11;4835:15;:28::i;:::-;4883:34;;-1:-1:-1;;;4883:34:23;;;;;5911:25:182;;;4814:49:23;;-1:-1:-1;4883:6:23;-1:-1:-1;;;;;4883:22:23;;;;5884:18:182;;4883:34:23;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;4873:44;;5005:7;5016:1;5005:12;5001:51;;5040:1;5033:8;;;;;5001:51;5203:15;;;;;;;;:::i;:::-;5199:622;;;-1:-1:-1;;;;;5371:6:23;:13;;5402:7;5427:20;;;;:8;:20;:::i;:::-;5371:121;;-1:-1:-1;;;;;;5371:121:23;;;;;;;;;;26040:25:182;;;;-1:-1:-1;;;;;26139:15:182;26119:18;;;26112:43;5473:4:23;26171:18:182;;;26164:43;26013:18;;5371:121:23;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;5353:139;;5199:622;;;5705:66;5741:20;;;;:8;:20;:::i;:::-;-1:-1:-1;;;;;5719:6:23;5705:35;;5763:7;5705:35;:66::i;:::-;5803:7;5785:25;;5199:622;4523:1304;4345:1482;;;;;:::o;25501:391:64:-;25670:7;25693:15;;;;;;;;:::i;:::-;25689:197;;;-1:-1:-1;25731:7:64;25724:14;;25689:197;25842:33;:7;25858:16;25842:15;:33::i;:::-;25835:40;;;;4785:450;4884:21;4917:24;150:4:73;4944:19:64;:17;:19::i;:::-;:25;;;;:::i;:::-;4917:52;;5011:16;4995:13;:32;:95;;5089:1;4995:95;;;5042:32;5058:16;5042:13;:32;:::i;:::-;4979:111;-1:-1:-1;5182:46:64;5204:23;150:4:73;5204:17:64;:23;:::i;:::-;5182:13;;:21;:46::i;6998:1166:75:-;7105:7;7114:4;7491:19;7535:20;7557:12;7573:65;7617:7;7573:26;:65::i;:::-;7534:104;;;;7657:7;7652:64;;-1:-1:-1;7692:1:75;;;;-1:-1:-1;6998:1166:75;-1:-1:-1;;;;6998:1166:75:o;7652:64::-;7896:7;:28;;;7840:30;7862:7;7840:21;:30::i;:::-;7767:21;;7760:61;;7808:13;;7760:61;:::i;:::-;:110;;;;:::i;:::-;:165;;;;:::i;:::-;7729:196;;7520:416;;8066:1;8051:12;:16;8047:64;;;-1:-1:-1;8091:1:75;;;;-1:-1:-1;6998:1166:75;-1:-1:-1;;6998:1166:75:o;8047:64::-;8137:12;8152:4;;-1:-1:-1;6998:1166:75;-1:-1:-1;;6998:1166:75:o;823:556:73:-;939:9;1204:1;-1:-1:-1;;1187:19:73;1184:1;1181:26;1178:1;1174:34;1167:42;1154:11;1150:60;1123:146;;1253:1;1250;1243:12;1123:146;-1:-1:-1;1340:9:73;;1336:27;;823:556::o;1198:469:71:-;1309:10;-1:-1:-1;;;;;1401:10:71;:89;1384:179;;;1522:30;;-1:-1:-1;;;1522:30:71;;;;;;;;;;;1384:179;-1:-1:-1;1624:4:71;1620:18;;;;1617:34;;1198:469::o;2705:151:118:-;2780:12;2811:38;2833:6;2841:4;2847:1;2811:21;:38::i;5348:223:64:-;5424:24;5526:37;5544:19;5526:15;:37;:::i;:::-;5495:69;;:15;:69;:::i;8492:7050:75:-;8600:6;8608:4;9410:23;9569:106;9624:7;:33;;;9569:7;:25;;;:33;;:106;;;;:::i;:::-;9487:32;;;;9456:24;;;;:64;;:30;:64::i;:::-;9436:253;;;;:::i;:::-;9410:279;;9699:30;9732:153;9809:7;:21;;;9848:7;:23;;;9732:59;:153::i;:::-;9699:186;;10135:1;10116:16;:20;10112:5397;;;10152:25;10188:16;10152:53;;10394:21;10417:12;10433:401;10514:7;:21;;;10557:7;:23;;;10602:7;:20;;;10644:7;:28;;;10700:7;:19;;;150:4:73;10694:25:75;;;;:::i;:::-;10741:7;:23;;;10786:7;:30;;;10433:59;:401::i;:::-;10393:441;;;;10853:7;10848:64;;-1:-1:-1;10888:1:75;;;;-1:-1:-1;8492:7050:75;-1:-1:-1;;;;;;8492:7050:75:o;10848:64::-;11089:17;11072:13;:34;11068:2044;;11126:21;11150:385;11246:22;11294:7;:20;;;11340:17;11389:7;:19;;;150:4:73;11383:25:75;;;;:::i;:::-;11434:7;:23;;;11483:7;:30;;;11150:70;:385::i;:::-;11126:409;-1:-1:-1;11561:22:75;11126:409;11561:22;:::i;:::-;11553:37;11585:4;;-1:-1:-1;8492:7050:75;-1:-1:-1;;;;;;;;8492:7050:75:o;11068:2044::-;12275:1;12248:7;:23;;;:28;12244:854;;12427:28;;;;12370:85;;:22;:85;:::i;:::-;12333:148;;;:::i;:::-;12300:233;12507:4;;-1:-1:-1;8492:7050:75;-1:-1:-1;;;;;;;8492:7050:75:o;12244:854::-;12973:28;;;;12949:21;;:52;;12973:28;12949:52;:::i;10112:5397::-;13237:1;13218:16;:20;13214:2295;;;13254:25;13290:17;13291:16;13290:17;:::i;:::-;13254:54;;13425:21;13449:262;13505:22;13545:7;:20;;;13589:7;:19;;;150:4:73;13583:25:75;;;;:::i;:::-;13626:7;:23;;;13667:7;:30;;;13449:38;:262::i;:::-;13425:286;;13889:17;13872:13;:34;13868:1631;;13926:21;13950:383;14044:22;14092:7;:20;;;14138:17;14187:7;:19;;;150:4:73;14181:25:75;;;;:::i;:::-;14232:7;:23;;;14281:7;:30;;;13950:68;:383::i;13868:1631::-;14662:23;14688:331;14773:22;14821:7;:20;;;14873:7;:19;;;150:4:73;14867:25:75;;;;:::i;:::-;14918:7;:23;;;14967:7;:30;;;14688:59;:331::i;:::-;14662:357;;15288:130;15365:7;:23;;;15309:13;15289:17;:33;;;;:::i;:::-;15288:43;;:130::i;:::-;15242:176;;:15;:176;:::i;13214:2295::-;-1:-1:-1;15527:1:75;;15530:4;;-1:-1:-1;8492:7050:75;-1:-1:-1;;;8492:7050:75:o;15789:1157::-;15892:6;16769:156;16830:7;:32;;;150:4:73;16824:38:75;;;;:::i;:::-;16884:23;;;;16769:24;;;;;:156;:33;:156::i;:::-;16556:160;16620:7;:33;;;150:4:73;16614:39:75;;;;:::i;:::-;16675:23;;;;16556:25;;;;;:160;:36;:160::i;:::-;16532:407;;;;:::i;3180:392:118:-;3279:12;3331:5;3307:21;:29;3303:108;;;3359:41;;-1:-1:-1;;;3359:41:118;;3394:4;3359:41;;;12910:51:182;12883:18;;3359:41:118;12764:203:182;3303:108:118;3421:12;3435:23;3462:6;-1:-1:-1;;;;;3462:11:118;3481:5;3488:4;3462:31;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3420:73;;;;3510:55;3537:6;3545:7;3554:10;3510:26;:55::i;:::-;3503:62;3180:392;-1:-1:-1;;;;;;3180:392:118:o;3117:115:73:-;3177:7;3204:20;3213:1;3216;3219:4;3204:8;:20::i;6471:340:74:-;6606:7;;6657:53;6694:16;6664:14;6657:53;:::i;:::-;6625:85;;6754:1;6728:22;:27;;6720:36;;;;;15242:1794:77;15447:7;15456:4;15753:1;15746:4;:8;15742:67;;;15792:5;15793:4;15792:5;:::i;:::-;15777:21;;:4;:21;:::i;:::-;15770:28;;15742:67;16304:10;16317:55;16364:1;16367:4;16317:46;:55::i;:::-;16304:68;;16382:9;16394:22;16400:2;16404:1;16407;16410;16413:2;16394:5;:22::i;:::-;16382:34;-1:-1:-1;16426:16:77;16449:37;16460:21;16479:1;16460:14;:2;16469:4;16460:8;:14::i;:::-;:18;;:21::i;:::-;16449:1;;16483:2;16449:10;:37::i;:::-;16445:41;;:1;:41;:::i;:::-;16426:60;;150:4:73;16500:8:77;:15;16496:295;;16614:28;16627:14;150:4:73;16639:1:77;16627:11;:14::i;:::-;16614:8;;:12;:28::i;:::-;16603:39;;16496:295;;;16754:26;16767:12;150:4:73;16777:1:77;16767:9;:12::i;16754:26::-;16743:37;;16496:295;16948:1;16937:8;:12;16933:60;;;16973:1;16976:5;16965:17;;;;;;;;;16933:60;17010:12;17021:1;17010:8;:12;:::i;:::-;17024:4;17002:27;;;;;;;15242:1794;;;;;;;;;;;:::o;9013:583::-;9203:14;9229:12;9271:141;9323:2;9339:1;9354:2;9370:1;9385;9400:2;9271:38;:141::i;:::-;9251:161;;-1:-1:-1;9251:161:77;-1:-1:-1;9251:161:77;9422:168;;9450:129;9506:59;9450:38;:129::i;:::-;9219:377;9013:583;;;;;;;;:::o;13742:861::-;13901:7;14116:9;14128:20;14132:2;14136:1;14139;14142;14145:2;14128:3;:20::i;:::-;14116:32;-1:-1:-1;14158:16:77;14177:28;150:4:73;14185:13:77;:1;14195:2;14185:9;:13::i;:::-;:19;;;;:::i;:::-;14177:1;;:7;:28::i;:::-;14158:47;;150:4:73;14219:8:77;:15;14215:293;;14330:26;14343:12;150:4:73;14353:1:77;14343:9;:12::i;14330:26::-;14319:37;;14215:293;;;14469:28;14482:14;150:4:73;14494:1:77;14482:11;:14::i;14469:28::-;14458:39;;14215:293;14584:12;14588:8;14584:1;:12;:::i;:::-;14577:19;13742:861;-1:-1:-1;;;;;;;;13742:861:77:o;4244:1797::-;4432:7;4589:9;4601:20;4605:2;4609:1;4612;4615;4618:2;4601:3;:20::i;:::-;4589:32;;4695:2;4691:1;:6;4687:166;;;4713:129;4769:59;4713:38;:129::i;:::-;4895:15;4908:1;4896:6;4900:2;4896:1;:6;:::i;4895:15::-;4891:19;;4983:1;4979;:5;4975:165;;;5000:129;5056:59;5000:38;:129::i;:::-;5295:10;5308:23;5325:2;5329:1;5309:5;5313:1;5309;:5;:::i;:::-;5308:16;:23;:16;:23::i;:::-;5295:36;;150:4:73;5345:2:77;:9;5341:261;;5443:20;5450:12;150:4:73;5460:1:77;5450:9;:12::i;5443:20::-;5438:25;;5341:261;;;5569:22;5576:14;150:4:73;5588:1:77;5576:11;:14::i;5569:22::-;5564:27;;5341:261;5684:12;:2;5693;5684:8;:12::i;:::-;5679:17;;5772:2;5767;:7;5763:167;;;5790:129;5846:59;5790:38;:129::i;:::-;6027:7;6032:2;6027;:7;:::i;:::-;6020:14;4244:1797;-1:-1:-1;;;;;;;;;4244:1797:77:o;12036:1218::-;12195:7;12710:9;12722:22;12728:2;12732:1;12735;12738;12741:2;12722:5;:22::i;:::-;12710:34;-1:-1:-1;12754:17:77;12774:28;150:4:73;12784:11:77;:1;12792:2;12784:7;:11::i;:::-;:17;;;;:::i;12774:28::-;12754:48;;150:4:73;12816:9:77;:16;12812:300;;12932:29;12946:14;150:4:73;12958:1:77;12946:11;:14::i;12932:29::-;12920:41;;12812:300;;;13074:27;13088:12;150:4:73;13098:1:77;13088:9;:12::i;13074:27::-;13062:39;;12812:300;13133:21;:9;13151:2;13133:17;:21::i;:::-;13121:33;-1:-1:-1;13233:14:77;13245:2;13121:33;13233:14;:::i;2211:748:73:-;2325:9;2590:1;-1:-1:-1;;2573:19:73;2570:1;2567:26;2564:1;2560:34;2553:42;2540:11;2536:60;2509:146;;2639:1;2636;2629:12;2509:146;-1:-1:-1;2906:9:73;;2853:27;;;2850:34;;2902:27;;;2829:114;;2211:748::o;4625:582:118:-;4769:12;4798:7;4793:408;;4821:19;4829:10;4821:7;:19::i;:::-;4793:408;;;5045:17;;:22;:49;;;;-1:-1:-1;;;;;;5071:18:118;;;:23;5045:49;5041:119;;;5121:24;;-1:-1:-1;;;5121:24:118;;-1:-1:-1;;;;;12928:32:182;;5121:24:118;;;12910:51:182;12883:18;;5121:24:118;12764:203:182;5041:119:118;-1:-1:-1;5180:10:118;5173:17;;18399:352:77;18540:7;18736:8;:1;18742;18736:5;:8::i;:::-;18694:39;18707:21;18726:1;18707:14;:2;18718;18707:10;:14::i;:21::-;18694:1;;18730:2;18694:12;:39::i;:::-;:50;;;;:::i;3740:838:73:-;3798:7;3864:1;3869;3864:6;3860:47;;-1:-1:-1;150:4:73;3886:10;;3860:47;3960:1;3965;3960:6;3956:45;;-1:-1:-1;3989:1:73;3982:8;;3956:45;4164:1;4139:15;4341:13;4351:1;4341:2;:13::i;:::-;4328:26;-1:-1:-1;4432:18:73;;;4469:19;150:4;4432:18;4469:19;:::i;:::-;;;4561:9;4565:4;4561:3;:9::i;3390:115::-;3450:7;3477:20;3486:1;3489:4;3495:1;3477:8;:20::i;10285:1320:77:-;10479:14;10495:12;10657:9;10669:20;10673:2;10677:1;10680;10683;10686:2;10669:3;:20::i;:::-;10657:32;-1:-1:-1;10732:15:77;10745:1;10733:6;10737:2;10733:1;:6;:::i;10732:15::-;10728:19;;10829:1;10825;:5;10821:53;;;10854:1;10857:5;10846:17;;;;;;;10821:53;11029:10;11042:23;11059:2;11063:1;11043:5;11047:1;11043;:5;:::i;11042:23::-;11029:36;;150:4:73;11079:2:77;:9;11075:263;;11178:20;11185:12;150:4:73;11195:1:77;11185:9;:12::i;11178:20::-;11173:25;;11075:263;;;11305:22;11312:14;150:4:73;11324:1:77;11312:11;:14::i;11305:22::-;11300:27;;11075:263;11420:12;:2;11429;11420:8;:12::i;:::-;11415:17;;11530:2;11525;:7;11521:54;;;11557:7;11562:2;11557;:7;:::i;:::-;11548:16;;11521:54;11594:4;11584:14;;10509:1096;;10285:1320;;;;;;;;;;:::o;317:182:72:-;485:6;451:41;;-1:-1:-1;;;451:41:72;;;;;;;;:::i;17543:343:77:-;17682:7;17871:8;:1;17877;17871:5;:8::i;:::-;17833:35;17844:19;17861:1;17844:12;:2;17853;17844:8;:12::i;:19::-;17833:1;;17865:2;17833:10;:35::i;5743:516:118:-;5874:17;;:21;5870:383;;6102:10;6096:17;6158:15;6145:10;6141:2;6137:19;6130:44;5870:383;6225:17;;-1:-1:-1;;;6225:17:118;;;;;;;;;;;8345:3611:73;8390:8;8443:1;8438;:6;8434:80;;8471:28;;-1:-1:-1;;;8471:28:73;;;;;;;;;;;8434:80;-1:-1:-1;9479:2:73;-1:-1:-1;;;;;;;8890:1:73;8886:49;8993:9;;;8973:18;8970:33;8967:1;8963:41;8957:48;9055:9;;;9043:10;9040:25;9037:1;9033:33;9027:40;9113:9;;;9105:6;9102:21;9099:1;9095:29;9089:36;9169:9;;;9163:4;9160:19;9157:1;9153:27;;;9147:34;;;9224:9;;;9219:3;9216:18;9213:1;9209:26;9203:33;9279:9;;;9271:18;;;9268:1;9264:26;;;9258:33;;;9327:9;;;9319:18;;;9313:25;9509:3;:7;;;;;9495:22;;;;9542:17;;;10335:31;10331:35;;10386:5;;10385:13;;10402:32;10384:50;10454:5;;10453:13;;10470:33;10452:51;10523:5;;10522:13;;10539:33;10521:51;10592:5;;10591:13;;10608:33;10590:51;10661:5;;10660:13;;10677:32;10659:50;10729:5;;10728:13;;10745:30;10727:48;9732:31;9728:35;;9783:5;;9782:13;;9799:32;9781:50;9851:5;;9850:13;;9867:32;9849:50;9919:5;;9918:13;;-1:-1:-1;;9917:50:73;9987:5;;9986:13;;-1:-1:-1;;9985:50:73;10055:5;;10054:13;;;-1:-1:-1;;10053:50:73;10121:5;-1:-1:-1;;10121:46:73;11116:10;11506:43;11501:48;-1:-1:-1;;9475:6:73;;;;11629:71;:91;11608:112;11793:72;11788:77;11936:3;11930:9;;8345:3611::o;4830:3335::-;4876:8;-1:-1:-1;;5053:1:73;:26;5049:40;;-1:-1:-1;5088:1:73;;4830:3335;-1:-1:-1;4830:3335:73:o;5049:40::-;5288:21;5283:1;:26;5279:87;;5334:32;;-1:-1:-1;;;5334:32:73;;;;;;;;;;;5279:87;5639:7;5633:2;5628:7;;;5627:19;;-1:-1:-1;5975:8:73;6059:2;5999:29;5988:7;;;5987:41;-1:-1:-1;;;5987:51:73;5986:75;;6087:29;6083:33;;6079:37;;;-1:-1:-1;;6758:35:73;;6813:5;;6393:2;6812:13;;;6829:32;6811:50;6881:5;;6880:13;;-1:-1:-1;;6879:51:73;6950:5;;6949:13;;6966:34;6948:52;7020:5;;7019:13;;-1:-1:-1;;7018:53:73;7091:5;;7090:13;;7107:35;7089:53;6399:32;6332:31;6328:35;;6383:5;;6382:13;;6381:50;;;6456:5;;;-1:-1:-1;;6456:40:73;6516:5;6515:13;;;6532:35;6514:53;6585:5;;;-1:-1:-1;;;6585:50:73;7507:10;8044:49;8011:82;8126:3;:7;;;;8010:124;;;;;;-1:-1:-1;;4830:3335:73:o;-1:-1:-1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;14:180:182:-;73:6;126:2;114:9;105:7;101:23;97:32;94:52;;;142:1;139;132:12;94:52;-1:-1:-1;165:23:182;;14:180;-1:-1:-1;14:180:182:o;199:250::-;284:1;294:113;308:6;305:1;302:13;294:113;;;384:11;;;378:18;365:11;;;358:39;330:2;323:10;294:113;;;-1:-1:-1;;441:1:182;423:16;;416:27;199:250::o;454:271::-;496:3;534:5;528:12;561:6;556:3;549:19;577:76;646:6;639:4;634:3;630:14;623:4;616:5;612:16;577:76;:::i;:::-;707:2;686:15;-1:-1:-1;;682:29:182;673:39;;;;714:4;669:50;;454:271;-1:-1:-1;;454:271:182:o;730:220::-;879:2;868:9;861:21;842:4;899:45;940:2;929:9;925:18;917:6;899:45;:::i;955:139::-;-1:-1:-1;;;;;1038:31:182;;1028:42;;1018:70;;1084:1;1081;1074:12;1099:270;1173:6;1226:2;1214:9;1205:7;1201:23;1197:32;1194:52;;;1242:1;1239;1232:12;1194:52;1281:9;1268:23;1300:39;1333:5;1300:39;:::i;1374:118::-;1460:5;1453:13;1446:21;1439:5;1436:32;1426:60;;1482:1;1479;1472:12;1497:241;1553:6;1606:2;1594:9;1585:7;1581:23;1577:32;1574:52;;;1622:1;1619;1612:12;1574:52;1661:9;1648:23;1680:28;1702:5;1680:28;:::i;1743:114::-;1827:4;1820:5;1816:16;1809:5;1806:27;1796:55;;1847:1;1844;1837:12;1862:1022;1988:6;1996;2004;2012;2020;2028;2036;2044;2052;2105:3;2093:9;2084:7;2080:23;2076:33;2073:53;;;2122:1;2119;2112:12;2073:53;2158:9;2145:23;2135:33;;2215:2;2204:9;2200:18;2187:32;2177:42;;2269:2;2258:9;2254:18;2241:32;2282:39;2315:5;2282:39;:::i;:::-;2340:5;-1:-1:-1;2397:2:182;2382:18;;2369:32;2410:41;2369:32;2410:41;:::i;:::-;2470:7;-1:-1:-1;2529:3:182;2514:19;;2501:33;2543:30;2501:33;2543:30;:::i;:::-;2592:7;-1:-1:-1;2646:3:182;2631:19;;2618:33;;-1:-1:-1;2703:3:182;2688:19;;2675:33;2717:31;2675:33;2717:31;:::i;:::-;2767:7;2757:17;;;2821:3;2810:9;2806:19;2793:33;2783:43;;2873:3;2862:9;2858:19;2845:33;2835:43;;1862:1022;;;;;;;;;;;:::o;2889:367::-;2952:8;2962:6;3016:3;3009:4;3001:6;2997:17;2993:27;2983:55;;3034:1;3031;3024:12;2983:55;-1:-1:-1;3057:20:182;;3100:18;3089:30;;3086:50;;;3132:1;3129;3122:12;3086:50;3169:4;3161:6;3157:17;3145:29;;3229:3;3222:4;3212:6;3209:1;3205:14;3197:6;3193:27;3189:38;3186:47;3183:67;;;3246:1;3243;3236:12;3183:67;2889:367;;;;;:::o;3261:1066::-;3401:6;3409;3417;3425;3433;3441;3494:3;3482:9;3473:7;3469:23;3465:33;3462:53;;;3511:1;3508;3501:12;3462:53;3550:9;3537:23;3569:39;3602:5;3569:39;:::i;:::-;3627:5;-1:-1:-1;3684:2:182;3669:18;;3656:32;3697:41;3656:32;3697:41;:::i;:::-;3757:7;-1:-1:-1;3815:2:182;3800:18;;3787:32;3838:18;3868:14;;;3865:34;;;3895:1;3892;3885:12;3865:34;3934:70;3996:7;3987:6;3976:9;3972:22;3934:70;:::i;:::-;4023:8;;-1:-1:-1;3908:96:182;-1:-1:-1;4111:2:182;4096:18;;4083:32;;-1:-1:-1;4127:16:182;;;4124:36;;;4156:1;4153;4146:12;4124:36;;4195:72;4259:7;4248:8;4237:9;4233:24;4195:72;:::i;:::-;3261:1066;;;;-1:-1:-1;3261:1066:182;;-1:-1:-1;3261:1066:182;;4286:8;;3261:1066;-1:-1:-1;;;3261:1066:182:o;4332:541::-;4418:6;4426;4434;4442;4495:3;4483:9;4474:7;4470:23;4466:33;4463:53;;;4512:1;4509;4502:12;4463:53;4548:9;4535:23;4525:33;;4608:2;4597:9;4593:18;4580:32;4621:39;4654:5;4621:39;:::i;:::-;4679:5;-1:-1:-1;4736:2:182;4721:18;;4708:32;4749:41;4708:32;4749:41;:::i;:::-;4332:541;;;;-1:-1:-1;4809:7:182;;4863:2;4848:18;4835:32;;-1:-1:-1;;4332:541:182:o;5288:472::-;5365:6;5373;5381;5434:2;5422:9;5413:7;5409:23;5405:32;5402:52;;;5450:1;5447;5440:12;5402:52;5486:9;5473:23;5463:33;;5546:2;5535:9;5531:18;5518:32;5559:39;5592:5;5559:39;:::i;:::-;5617:5;-1:-1:-1;5674:2:182;5659:18;;5646:32;5687:41;5646:32;5687:41;:::i;:::-;5747:7;5737:17;;;5288:472;;;;;:::o;6136:323::-;6204:6;6212;6265:2;6253:9;6244:7;6240:23;6236:32;6233:52;;;6281:1;6278;6271:12;6233:52;6317:9;6304:23;6294:33;;6377:2;6366:9;6362:18;6349:32;6390:39;6423:5;6390:39;:::i;:::-;6448:5;6438:15;;;6136:323;;;;;:::o;6464:386::-;6550:6;6603:2;6591:9;6582:7;6578:23;6574:32;6571:52;;;6619:1;6616;6609:12;6571:52;6659:9;6646:23;6692:18;6684:6;6681:30;6678:50;;;6724:1;6721;6714:12;6678:50;6747:22;;6803:2;6785:16;;;6781:25;6778:45;;;6819:1;6816;6809:12;7403:541;7489:6;7497;7505;7513;7566:3;7554:9;7545:7;7541:23;7537:33;7534:53;;;7583:1;7580;7573:12;7534:53;7619:9;7606:23;7596:33;;7679:2;7668:9;7664:18;7651:32;7692:39;7725:5;7692:39;:::i;:::-;7750:5;-1:-1:-1;7802:2:182;7787:18;;7774:32;;-1:-1:-1;7858:2:182;7843:18;;7830:32;7871:41;7830:32;7871:41;:::i;:::-;7403:541;;;;-1:-1:-1;7403:541:182;;-1:-1:-1;;7403:541:182:o;7949:1266::-;8166:13;;8148:32;;8236:4;8224:17;;;8218:24;8196:20;;;8189:54;8299:4;8287:17;;;8281:24;8259:20;;;8252:54;8362:4;8350:17;;;8344:24;8322:20;;;8315:54;8425:4;8413:17;;;8407:24;8385:20;;;8378:54;8488:4;8476:17;;;8470:24;8448:20;;;8441:54;8551:4;8539:17;;;8533:24;8511:20;;;8504:54;8614:4;8602:17;;;8596:24;8574:20;;;8567:54;8640:6;8688:15;;;8682:22;8662:18;;;8655:50;8724:6;8772:15;;;8766:22;8746:18;;;8739:50;8808:6;8856:15;;;8850:22;8830:18;;;8823:50;8892:6;8940:15;;;8934:22;8914:18;;;8907:50;8976:6;9024:15;;;9018:22;8998:18;;;8991:50;9060:6;9108:15;;;9102:22;9082:18;;;9075:50;9144:6;9192:15;;;9186:22;9166:18;;;9159:50;;;;8135:3;8120:19;;7949:1266::o;9220:390::-;9285:6;9293;9346:2;9334:9;9325:7;9321:23;9317:32;9314:52;;;9362:1;9359;9352:12;9314:52;9401:9;9388:23;9420:39;9453:5;9420:39;:::i;:::-;9478:5;-1:-1:-1;9535:2:182;9520:18;;9507:32;9548:30;9507:32;9548:30;:::i;9615:391::-;9692:6;9700;9708;9761:2;9749:9;9740:7;9736:23;9732:32;9729:52;;;9777:1;9774;9767:12;9729:52;9813:9;9800:23;9790:33;;9873:2;9862:9;9858:18;9845:32;9886:39;9919:5;9886:39;:::i;:::-;9615:391;;9944:5;;-1:-1:-1;;;9996:2:182;9981:18;;;;9968:32;;9615:391::o;10390:1290::-;10620:13;;-1:-1:-1;;;;;10085:31:182;10073:44;;10580:3;10565:19;;10692:4;10684:6;10680:17;10674:24;10707:62;10763:4;10752:9;10748:20;10734:12;-1:-1:-1;;;;;10085:31:182;10073:44;;10011:112;10707:62;;10825:4;10817:6;10813:17;10807:24;10800:4;10789:9;10785:20;10778:54;10888:4;10880:6;10876:17;10870:24;10863:4;10852:9;10848:20;10841:54;10951:4;10943:6;10939:17;10933:24;10926:4;10915:9;10911:20;10904:54;11014:4;11006:6;11002:17;10996:24;10989:4;10978:9;10974:20;10967:54;11077:4;11069:6;11065:17;11059:24;11052:4;11041:9;11037:20;11030:54;11140:4;11132:6;11128:17;11122:24;11115:4;11104:9;11100:20;11093:54;11166:6;11226:2;11218:6;11214:15;11208:22;11203:2;11192:9;11188:18;11181:50;;11250:6;11305:2;11297:6;11293:15;11287:22;11318:62;11376:2;11365:9;11361:18;11345:14;-1:-1:-1;;;;;10085:31:182;10073:44;;10011:112;11318:62;-1:-1:-1;;11399:6:182;11442:15;;;11436:22;-1:-1:-1;;;;;10085:31:182;11510:18;;;10073:44;11548:6;11591:15;;;11585:22;10198:12;;11655:18;;;10186:25;10260:4;10249:16;;10243:23;10227:14;;;10220:47;10316:4;10305:16;;10299:23;10283:14;;;10276:47;10372:4;10361:16;;10355:23;10339:14;;;10332:47;11616:58;;;10390:1290;;;;:::o;11685:437::-;11771:6;11779;11832:2;11820:9;11811:7;11807:23;11803:32;11800:52;;;11848:1;11845;11838:12;11800:52;11888:9;11875:23;11921:18;11913:6;11910:30;11907:50;;;11953:1;11950;11943:12;11907:50;11992:70;12054:7;12045:6;12034:9;12030:22;11992:70;:::i;:::-;12081:8;;11966:96;;-1:-1:-1;11685:437:182;-1:-1:-1;;;;11685:437:182:o;12127:632::-;12298:2;12350:21;;;12420:13;;12323:18;;;12442:22;;;12269:4;;12298:2;12521:15;;;;12495:2;12480:18;;;12269:4;12564:169;12578:6;12575:1;12572:13;12564:169;;;12639:13;;12627:26;;12708:15;;;;12673:12;;;;12600:1;12593:9;12564:169;;;-1:-1:-1;12750:3:182;;12127:632;-1:-1:-1;;;;;;12127:632:182:o;13370:1650::-;13594:13;;-1:-1:-1;;;;;4944:46:182;4932:59;;13562:3;13547:19;;13666:4;13658:6;13654:17;13648:24;13681:54;13729:4;13718:9;13714:20;13700:12;-1:-1:-1;;;;;4944:46:182;4932:59;;4878:119;13681:54;;13784:4;13776:6;13772:17;13766:24;13799:56;13849:4;13838:9;13834:20;13818:14;-1:-1:-1;;;;;4944:46:182;4932:59;;4878:119;13799:56;;13904:4;13896:6;13892:17;13886:24;13919:56;13969:4;13958:9;13954:20;13938:14;-1:-1:-1;;;;;4944:46:182;4932:59;;4878:119;13919:56;;14024:4;14016:6;14012:17;14006:24;14039:55;14088:4;14077:9;14073:20;14057:14;13228:2;13217:21;13205:34;;13152:93;14039:55;;14143:4;14135:6;14131:17;14125:24;14158:56;14208:4;14197:9;14193:20;14177:14;-1:-1:-1;;;;;4944:46:182;4932:59;;4878:119;14158:56;;14263:4;14255:6;14251:17;14245:24;14278:56;14328:4;14317:9;14313:20;14297:14;-1:-1:-1;;;;;4944:46:182;4932:59;;4878:119;14278:56;;14383:4;14375:6;14371:17;14365:24;14398:56;14448:4;14437:9;14433:20;14417:14;-1:-1:-1;;;;;4944:46:182;4932:59;;4878:119;14398:56;-1:-1:-1;14473:6:182;14516:15;;;14510:22;7185:13;7178:21;14573:18;;;7166:34;14611:6;14654:15;;;14648:22;7185:13;7178:21;14711:18;;;7166:34;14749:6;14792:15;;;14786:22;-1:-1:-1;;;;;13316:42:182;14852:18;;;13304:55;14890:6;14934:15;;;14928:22;-1:-1:-1;;;;;4944:46:182;;14995:18;;;4932:59;14959:55;4878:119;15025:691;15120:6;15128;15136;15144;15152;15205:3;15193:9;15184:7;15180:23;15176:33;15173:53;;;15222:1;15219;15212:12;15173:53;15258:9;15245:23;15235:33;;15318:2;15307:9;15303:18;15290:32;15331:39;15364:5;15331:39;:::i;:::-;15389:5;-1:-1:-1;15446:2:182;15431:18;;15418:32;15459:41;15418:32;15459:41;:::i;:::-;15519:7;-1:-1:-1;15573:2:182;15558:18;;15545:32;;-1:-1:-1;15629:3:182;15614:19;;15601:33;15643:41;15601:33;15643:41;:::i;:::-;15703:7;15693:17;;;15025:691;;;;;;;;:::o;15721:404::-;15789:6;15797;15850:2;15838:9;15829:7;15825:23;15821:32;15818:52;;;15866:1;15863;15856:12;15818:52;15905:9;15892:23;15924:39;15957:5;15924:39;:::i;:::-;15982:5;-1:-1:-1;16039:2:182;16024:18;;16011:32;16052:41;16011:32;16052:41;:::i;16738:184::-;16808:6;16861:2;16849:9;16840:7;16836:23;16832:32;16829:52;;;16877:1;16874;16867:12;16829:52;-1:-1:-1;16900:16:182;;16738:184;-1:-1:-1;16738:184:182:o;17210:247::-;17278:6;17331:2;17319:9;17310:7;17306:23;17302:32;17299:52;;;17347:1;17344;17337:12;17299:52;17379:9;17373:16;17398:29;17421:5;17398:29;:::i;17462:127::-;17523:10;17518:3;17514:20;17511:1;17504:31;17554:4;17551:1;17544:15;17578:4;17575:1;17568:15;17594:127;17655:10;17650:3;17646:20;17643:1;17636:31;17686:4;17683:1;17676:15;17710:4;17707:1;17700:15;17726:125;17791:9;;;17812:10;;;17809:36;;;17825:18;;:::i;17856:128::-;17923:9;;;17944:11;;;17941:37;;;17958:18;;:::i;17989:127::-;18050:10;18045:3;18041:20;18038:1;18031:31;18081:4;18078:1;18071:15;18105:4;18102:1;18095:15;18121:127;18182:10;18177:3;18173:20;18170:1;18163:31;18213:4;18210:1;18203:15;18237:4;18234:1;18227:15;19894:449;-1:-1:-1;;;20151:3:182;20144:32;20126:3;20205:6;20199:13;20221:75;20289:6;20284:2;20279:3;20275:12;20268:4;20260:6;20256:17;20221:75;:::i;:::-;20316:16;;;;20334:2;20312:25;;19894:449;-1:-1:-1;;19894:449:182:o;20348:450::-;-1:-1:-1;;;20605:3:182;20598:33;20580:3;20660:6;20654:13;20676:75;20744:6;20739:2;20734:3;20730:12;20723:4;20715:6;20711:17;20676:75;:::i;:::-;20771:16;;;;20789:2;20767:25;;20348:450;-1:-1:-1;;20348:450:182:o;22994:135::-;23033:3;23054:17;;;23051:43;;23074:18;;:::i;:::-;-1:-1:-1;23121:1:182;23110:13;;22994:135::o;23387:448::-;-1:-1:-1;;;23644:3:182;23637:31;23619:3;23697:6;23691:13;23713:75;23781:6;23776:2;23771:3;23767:12;23760:4;23752:6;23748:17;23713:75;:::i;:::-;23808:16;;;;23826:2;23804:25;;23387:448;-1:-1:-1;;23387:448:182:o;23840:449::-;-1:-1:-1;;;24097:3:182;24090:32;24072:3;24151:6;24145:13;24167:75;24235:6;24230:2;24225:3;24221:12;24214:4;24206:6;24202:17;24167:75;:::i;25009:200::-;25075:9;;;25048:4;25103:9;;25131:10;;25143:12;;;25127:29;25166:12;;;25158:21;;25124:56;25121:82;;;25183:18;;:::i;25214:127::-;25275:10;25270:3;25266:20;25263:1;25256:31;25306:4;25303:1;25296:15;25330:4;25327:1;25320:15;25346:112;25378:1;25404;25394:35;;25409:18;;:::i;:::-;-1:-1:-1;25443:9:182;;25346:112::o;25463:120::-;25503:1;25529;25519:35;;25534:18;;:::i;:::-;-1:-1:-1;25568:9:182;;25463:120::o;25588:245::-;25655:6;25708:2;25696:9;25687:7;25683:23;25679:32;25676:52;;;25724:1;25721;25714:12;25676:52;25756:9;25750:16;25775:28;25797:5;25775:28;:::i;26218:168::-;26291:9;;;26322;;26339:15;;;26333:22;;26319:37;26309:71;;26360:18;;:::i;26391:216::-;26455:9;;;26483:11;;;26430:3;26513:9;;26541:10;;26537:19;;26566:10;;26558:19;;26534:44;26531:70;;;26581:18;;:::i;26612:136::-;26647:3;-1:-1:-1;;;26668:22:182;;26665:48;;26693:18;;:::i;:::-;-1:-1:-1;26733:1:182;26729:13;;26612:136::o;26753:287::-;26882:3;26920:6;26914:13;26936:66;26995:6;26990:3;26983:4;26975:6;26971:17;26936:66;:::i;:::-;27018:16;;;;;26753:287;-1:-1:-1;;26753:287:182:o;27045:193::-;27084:1;27110;27100:35;;27115:18;;:::i;:::-;-1:-1:-1;;;27151:18:182;;-1:-1:-1;;27171:13:182;;27147:38;27144:64;;;27188:18;;:::i;:::-;-1:-1:-1;27222:10:182;;27045:193::o;27243:360::-;27407:2;27392:18;;27440:1;27429:13;;27419:144;;27485:10;27480:3;27476:20;27473:1;27466:31;27520:4;27517:1;27510:15;27548:4;27545:1;27538:15;27419:144;27572:25;;;27243:360;:::o";
        readonly linkReferences: {};
        readonly immutableReferences: {
            readonly "13293": readonly [{
                readonly start: 1360;
                readonly length: 32;
            }, {
                readonly start: 1525;
                readonly length: 32;
            }, {
                readonly start: 1969;
                readonly length: 32;
            }, {
                readonly start: 2486;
                readonly length: 32;
            }, {
                readonly start: 3625;
                readonly length: 32;
            }, {
                readonly start: 4481;
                readonly length: 32;
            }];
            readonly "13296": readonly [{
                readonly start: 3909;
                readonly length: 32;
            }, {
                readonly start: 9995;
                readonly length: 32;
            }];
            readonly "13299": readonly [{
                readonly start: 3871;
                readonly length: 32;
            }, {
                readonly start: 4570;
                readonly length: 32;
            }, {
                readonly start: 9726;
                readonly length: 32;
            }];
            readonly "13302": readonly [{
                readonly start: 3947;
                readonly length: 32;
            }, {
                readonly start: 8213;
                readonly length: 32;
            }];
            readonly "13305": readonly [{
                readonly start: 4079;
                readonly length: 32;
            }];
            readonly "13308": readonly [{
                readonly start: 4117;
                readonly length: 32;
            }];
            readonly "13311": readonly [{
                readonly start: 4155;
                readonly length: 32;
            }];
            readonly "13314": readonly [{
                readonly start: 4193;
                readonly length: 32;
            }];
            readonly "13317": readonly [{
                readonly start: 3757;
                readonly length: 32;
            }, {
                readonly start: 8137;
                readonly length: 32;
            }];
            readonly "13320": readonly [{
                readonly start: 3795;
                readonly length: 32;
            }, {
                readonly start: 8175;
                readonly length: 32;
            }];
            readonly "13323": readonly [{
                readonly start: 3833;
                readonly length: 32;
            }];
            readonly "13340": readonly [{
                readonly start: 1267;
                readonly length: 32;
            }, {
                readonly start: 1909;
                readonly length: 32;
            }, {
                readonly start: 4021;
                readonly length: 32;
            }, {
                readonly start: 6928;
                readonly length: 32;
            }, {
                readonly start: 7050;
                readonly length: 32;
            }, {
                readonly start: 7174;
                readonly length: 32;
            }];
            readonly "13354": readonly [{
                readonly start: 3672;
                readonly length: 32;
            }, {
                readonly start: 7591;
                readonly length: 32;
            }];
            readonly "13357": readonly [{
                readonly start: 3719;
                readonly length: 32;
            }, {
                readonly start: 7652;
                readonly length: 32;
            }];
            readonly "5478": readonly [{
                readonly start: 1419;
                readonly length: 32;
            }, {
                readonly start: 1675;
                readonly length: 32;
            }, {
                readonly start: 2115;
                readonly length: 32;
            }, {
                readonly start: 5147;
                readonly length: 32;
            }, {
                readonly start: 7859;
                readonly length: 32;
            }, {
                readonly start: 9185;
                readonly length: 32;
            }, {
                readonly start: 9351;
                readonly length: 32;
            }, {
                readonly start: 9553;
                readonly length: 32;
            }];
        };
    };
    readonly methodIdentifiers: {
        readonly "balanceOf(uint256,address)": "3656eec2";
        readonly "baseToken()": "c55dae63";
        readonly "batchTransferFrom(address,address,uint256[],uint256[])": "17fad7fc";
        readonly "collectGovernanceFee((address,bool,bytes))": "3e691db9";
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
        readonly "pause(bool)": "02329a29";
        readonly "perTokenApprovals(uint256,address,address)": "21ff32a9";
        readonly "permitForAll(bytes32,bytes32,address,address,bool,uint256,uint8,bytes32,bytes32)": "14e5f07b";
        readonly "setApproval(uint256,address,uint256)": "9cd241af";
        readonly "setApprovalBridge(uint256,address,uint256,address)": "4ed2d6ac";
        readonly "setApprovalForAll(address,bool)": "a22cb465";
        readonly "setGovernance(address)": "ab033ea9";
        readonly "setPauser(address,bool)": "7180c8ca";
        readonly "sweep(address)": "01681a62";
        readonly "symbol(uint256)": "4e41a1fb";
        readonly "totalSupply(uint256)": "bd85b039";
        readonly "transferFrom(uint256,address,address,uint256)": "1c0f12b6";
        readonly "transferFromBridge(uint256,address,address,uint256,address)": "e44808bc";
        readonly "vault()": "fbfa77cf";
    };
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolConfig\",\"name\":\"_config\",\"type\":\"tuple\"},{\"internalType\":\"contract IERC4626\",\"name\":\"__vault\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"name\":\"AddressEmptyCode\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"AddressInsufficientBalance\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"BatchInputLengthMismatch\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ExpInvalidExponent\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ExpiredDeadline\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FailedInnerCall\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"enum IHyperdrive.InsufficientLiquidityReason\",\"name\":\"reason\",\"type\":\"uint8\"}],\"name\":\"InsufficientLiquidity\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidERC20Bridge\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFeeDestination\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidSignature\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTimestamp\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"LnInvalidInput\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NegativePresentValue\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"RestrictedZeroAddress\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"ReturnData\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"}],\"name\":\"SafeERC20FailedOperation\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"SweepFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"Unauthorized\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsupportedToken\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fees\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseProceeds\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"}],\"name\":\"PauseStatusUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"baseToken\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"values\",\"type\":\"uint256[]\"}],\"name\":\"batchTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"collectGovernanceFee\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"proceeds\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_checkpointTime\",\"type\":\"uint256\"}],\"name\":\"getCheckpoint\",\"outputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"vaultSharePrice\",\"type\":\"uint128\"}],\"internalType\":\"struct IHyperdrive.Checkpoint\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_checkpointTime\",\"type\":\"uint256\"}],\"name\":\"getCheckpointExposure\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getMarketState\",\"outputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"shareReserves\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"bondReserves\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longExposure\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longsOutstanding\",\"type\":\"uint128\"},{\"internalType\":\"int128\",\"name\":\"shareAdjustment\",\"type\":\"int128\"},{\"internalType\":\"uint128\",\"name\":\"shortsOutstanding\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longAverageMaturityTime\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"shortAverageMaturityTime\",\"type\":\"uint128\"},{\"internalType\":\"bool\",\"name\":\"isInitialized\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"},{\"internalType\":\"uint112\",\"name\":\"zombieBaseProceeds\",\"type\":\"uint112\"},{\"internalType\":\"uint128\",\"name\":\"zombieShareReserves\",\"type\":\"uint128\"}],\"internalType\":\"struct IHyperdrive.MarketState\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getPoolConfig\",\"outputs\":[{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolConfig\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getPoolInfo\",\"outputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"zombieBaseProceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"zombieShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"lpTotalSupply\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longAverageMaturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortAverageMaturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalSharesReadyToWithdraw\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalSharesProceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longExposure\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.PoolInfo\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getUncollectedGovernanceFees\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getWithdrawPool\",\"outputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"readyToWithdraw\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"proceeds\",\"type\":\"uint128\"}],\"internalType\":\"struct IHyperdrive.WithdrawPool\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_account\",\"type\":\"address\"}],\"name\":\"isPauser\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256[]\",\"name\":\"_slots\",\"type\":\"uint256[]\"}],\"name\":\"load\",\"outputs\":[{\"internalType\":\"bytes32[]\",\"name\":\"\",\"type\":\"bytes32[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"nonces\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"_status\",\"type\":\"bool\"}],\"name\":\"pause\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"perTokenApprovals\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"domainSeparator\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"permitTypeHash\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_approved\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permitForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"setApproval\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"setApprovalBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_who\",\"type\":\"address\"}],\"name\":\"setGovernance\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"who\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"setPauser\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"_target\",\"type\":\"address\"}],\"name\":\"sweep\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"transferFromBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"vault\",\"outputs\":[{\"internalType\":\"contract IERC4626\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"errors\":{\"AddressEmptyCode(address)\":[{\"details\":\"There's no code at `target` (it is not a contract).\"}],\"AddressInsufficientBalance(address)\":[{\"details\":\"The ETH balance of the account is not enough to perform the operation.\"}],\"FailedInnerCall()\":[{\"details\":\"A call to an address target failed. The target may have reverted.\"}],\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}],\"SafeERC20FailedOperation(address)\":[{\"details\":\"An operation with an ERC20 token failed.\"}]},\"kind\":\"dev\",\"methods\":{\"balanceOf(uint256,address)\":{\"params\":{\"account\":\"The account.\",\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The balance.\"}},\"baseToken()\":{\"returns\":{\"_0\":\"The base token.\"}},\"batchTransferFrom(address,address,uint256[],uint256[])\":{\"params\":{\"from\":\"The source account.\",\"ids\":\"The array of token ids of the asset to transfer.\",\"to\":\"The destination account.\",\"values\":\"The amount of each token to transfer.\"}},\"collectGovernanceFee((address,bool,bytes))\":{\"params\":{\"_options\":\"The options that configure how the fees are settled.\"},\"returns\":{\"proceeds\":\"The amount of base collected.\"}},\"constructor\":{\"params\":{\"__vault\":\"The ERC4626 compatible vault.\",\"_config\":\"The configuration of the Hyperdrive pool.\"}},\"decimals()\":{\"returns\":{\"_0\":\"The decimals of the MultiToken.\"}},\"getCheckpoint(uint256)\":{\"params\":{\"_checkpointTime\":\"The checkpoint time.\"},\"returns\":{\"_0\":\"The checkpoint.\"}},\"getCheckpointExposure(uint256)\":{\"params\":{\"_checkpointTime\":\"The checkpoint time.\"},\"returns\":{\"_0\":\"The checkpoint exposure.\"}},\"getMarketState()\":{\"returns\":{\"_0\":\"The market state.\"}},\"getPoolConfig()\":{\"details\":\"These parameters are immutable, so this should only need to be      called once.\",\"returns\":{\"_0\":\"The PoolConfig struct.\"}},\"getPoolInfo()\":{\"returns\":{\"_0\":\"The pool info.\"}},\"getUncollectedGovernanceFees()\":{\"returns\":{\"_0\":\"Governance fees denominated in shares yet to be collected.\"}},\"getWithdrawPool()\":{\"returns\":{\"_0\":\"Hyperdrive's withdrawal pool information.\"}},\"isApprovedForAll(address,address)\":{\"params\":{\"account\":\"The account.\",\"operator\":\"The operator.\"},\"returns\":{\"_0\":\"The approval status.\"}},\"isPauser(address)\":{\"params\":{\"_account\":\"The account to check.\"},\"returns\":{\"_0\":\"The pauser status.\"}},\"load(uint256[])\":{\"params\":{\"_slots\":\"The storage slots the caller wants the data from.\"},\"returns\":{\"_0\":\"A raw array of loaded data.\"}},\"name(uint256)\":{\"params\":{\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The name.\"}},\"nonces(address)\":{\"params\":{\"account\":\"The account.\"},\"returns\":{\"_0\":\"The signature nonce.\"}},\"pause(bool)\":{\"params\":{\"_status\":\"True to pause all deposits and false to unpause them.\"}},\"perTokenApprovals(uint256,address,address)\":{\"params\":{\"account\":\"The account.\",\"spender\":\"The spender.\",\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The approval status.\"}},\"permitForAll(bytes32,bytes32,address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"details\":\"The signature for this function follows EIP 712 standard and should      be generated with the eth_signTypedData JSON RPC call instead of      the eth_sign JSON RPC call. If using out of date parity signing      libraries the v component may need to be adjusted. Also it is very      rare but possible for v to be other values, those values are not      supported.\",\"params\":{\"_approved\":\"A boolean of the approval status to set to.\",\"deadline\":\"The timestamp which the signature must be submitted by        to be valid.\",\"domainSeparator\":\"The EIP712 domain separator of the contract.\",\"owner\":\"The owner of the account which is having the new approval set.\",\"permitTypeHash\":\"The EIP712 domain separator of the contract.\",\"r\":\"The r component of the ECDSA signature.\",\"s\":\"The s component of the ECDSA signature.\",\"spender\":\"The address which will be allowed to spend owner's tokens.\",\"v\":\"Extra ECDSA data which allows public key recovery from        signature assumed to be 27 or 28.\"}},\"setApproval(uint256,address,uint256)\":{\"params\":{\"amount\":\"The max tokens the approved person can use, setting to        uint256.max will cause the value to never decrement [saving gas        on transfer].\",\"operator\":\"The address who will be able to use the tokens.\",\"tokenID\":\"The asset to approve the use of.\"}},\"setApprovalBridge(uint256,address,uint256,address)\":{\"params\":{\"amount\":\"The max tokens the approved person can use, setting to        uint256.max will cause the value to never decrement [saving gas        on transfer].\",\"caller\":\"The eth address which called the linking contract.\",\"operator\":\"The address who will be able to use the tokens.\",\"tokenID\":\"The asset to approve the use of.\"}},\"setApprovalForAll(address,bool)\":{\"params\":{\"approved\":\"True to approve, false to remove approval.\",\"operator\":\"The eth address which can access the caller's assets.\"}},\"setGovernance(address)\":{\"params\":{\"_who\":\"The new governance address.\"}},\"setPauser(address,bool)\":{\"params\":{\"status\":\"The new pauser status.\",\"who\":\"The address to change.\"}},\"sweep(address)\":{\"details\":\"Some yield sources (e.g. Morpho) pay rewards directly to this      contract, but we can't handle distributing them internally. With      this in mind, we sweep the tokens to the fee collector address to      then redistribute to users.WARN: It is unlikely but possible that there is a selector overlap      with 'transferFrom'. Any integrating contracts should be checked      for that, as it may result in an unexpected call from this address.\",\"params\":{\"_target\":\"The target token to sweep.\"}},\"symbol(uint256)\":{\"params\":{\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The symbol.\"}},\"totalSupply(uint256)\":{\"params\":{\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The total supply.\"}},\"transferFrom(uint256,address,address,uint256)\":{\"params\":{\"amount\":\"The amount of token to move.\",\"from\":\"The address whose balance will be reduced.\",\"to\":\"The address whose balance will be increased.\",\"tokenID\":\"The token identifier.\"}},\"transferFromBridge(uint256,address,address,uint256,address)\":{\"params\":{\"amount\":\"The amount of token to move.\",\"caller\":\"The msg.sender from the bridge.\",\"from\":\"The address whose balance will be reduced.\",\"to\":\"The address whose balance will be increased.\",\"tokenID\":\"The token identifier.\"}},\"vault()\":{\"returns\":{\"_0\":\"The ERC4626 compatible yield source.\"}}},\"title\":\"ERC4626Target0\",\"version\":1},\"userdoc\":{\"errors\":{\"BatchInputLengthMismatch()\":[{\"notice\":\"Thrown when the inputs to a batch transfer don't match in         length.\"}],\"ExpInvalidExponent()\":[{\"notice\":\"Thrown when the exponent to `FixedPointMath.exp` would cause the         the result to be larger than the representable scale.\"}],\"ExpiredDeadline()\":[{\"notice\":\"Thrown when a permit signature is expired.\"}],\"InsufficientLiquidity(uint8)\":[{\"notice\":\"Thrown when the pool doesn't have sufficient liquidity to         complete the trade.\"}],\"InvalidERC20Bridge()\":[{\"notice\":\"Thrown when the caller of one of MultiToken's bridge-only         functions is not the corresponding bridge.\"}],\"InvalidFeeDestination()\":[{\"notice\":\"Thrown when a destination other than the fee collector is         specified in `collectGovernanceFee`.\"}],\"InvalidSignature()\":[{\"notice\":\"Thrown when an invalid signature is used provide permit access         to the MultiToken. A signature is considered to be invalid if         it fails to recover to the owner's address.\"}],\"InvalidTimestamp()\":[{\"notice\":\"Thrown when the timestamp used to construct an asset ID exceeds         the uint248 scale.\"}],\"LnInvalidInput()\":[{\"notice\":\"Thrown when the input to `FixedPointMath.ln` is less than or         equal to zero.\"}],\"NegativePresentValue()\":[{\"notice\":\"Thrown when the present value is negative. Whatever proceeded         a negative present value should be reverted.\"}],\"RestrictedZeroAddress()\":[{\"notice\":\"Thrown when the owner passed to permit is the zero address. This         prevents users from spending the funds in address zero by         sending an invalid signature to ecrecover.\"}],\"ReturnData(bytes)\":[{\"notice\":\"Thrown by a read-only function called by the proxy. Unlike a         normal error, this error actually indicates that a read-only         call succeeded. The data that it wraps is the return data from         the read-only call.\"}],\"SweepFailed()\":[{\"notice\":\"Thrown when an asset is swept from the pool and one of the         pool's depository assets changes.\"}],\"Unauthorized()\":[{\"notice\":\"Thrown when an unauthorized user attempts to access admin         functionality.\"}],\"UnsupportedToken()\":[{\"notice\":\"Thrown when an unsupported option is passed to a function or         a user attempts to sweep an invalid token. The options and sweep         targets that are supported vary between instances.\"}]},\"events\":{\"AddLiquidity(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when an LP adds liquidity to the Hyperdrive pool.\"},\"Approval(address,address,uint256)\":{\"notice\":\"Emitted when an account changes the allowance for another         account.\"},\"ApprovalForAll(address,address,bool)\":{\"notice\":\"Emitted when an account changes the approval for all of its         tokens.\"},\"CloseLong(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is closed.\"},\"CloseShort(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a short position is closed.\"},\"CollectGovernanceFee(address,uint256)\":{\"notice\":\"Emitted when governance fees are collected.\"},\"CreateCheckpoint(uint256,uint256,uint256,uint256,uint256)\":{\"notice\":\"Emitted when a checkpoint is created.\"},\"GovernanceUpdated(address)\":{\"notice\":\"Emitted when the governance address is updated.\"},\"Initialize(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when the Hyperdrive pool is initialized.\"},\"OpenLong(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is opened.\"},\"OpenShort(address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is opened.\"},\"PauseStatusUpdated(bool)\":{\"notice\":\"Emitted when the pause status is updated.\"},\"PauserUpdated(address)\":{\"notice\":\"Emitted when a pauser is updated.\"},\"RedeemWithdrawalShares(address,uint256,uint256,uint256,bool)\":{\"notice\":\"Emitted when an LP redeems withdrawal shares.\"},\"RemoveLiquidity(address,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when an LP removes liquidity from the Hyperdrive pool.\"},\"TransferSingle(address,address,address,uint256,uint256)\":{\"notice\":\"Emitted when tokens are transferred from one account to another.\"}},\"kind\":\"user\",\"methods\":{\"balanceOf(uint256,address)\":{\"notice\":\"Gets an account's balance of a sub-token.\"},\"baseToken()\":{\"notice\":\"Gets the base token.\"},\"batchTransferFrom(address,address,uint256[],uint256[])\":{\"notice\":\"Transfers several assets from one account to another.\"},\"collectGovernanceFee((address,bool,bytes))\":{\"notice\":\"This function collects the governance fees accrued by the pool.\"},\"constructor\":{\"notice\":\"Initializes the target0 contract.\"},\"decimals()\":{\"notice\":\"Gets the decimals of the MultiToken. This is the same as the         decimals used by the base token.\"},\"getCheckpoint(uint256)\":{\"notice\":\"Gets a specified checkpoint.\"},\"getCheckpointExposure(uint256)\":{\"notice\":\"Gets the checkpoint exposure at a specified time.\"},\"getMarketState()\":{\"notice\":\"Gets the market state.\"},\"getPoolConfig()\":{\"notice\":\"Gets the pool's configuration parameters.\"},\"getPoolInfo()\":{\"notice\":\"Gets info about the pool's reserves and other state that is         important to evaluate potential trades.\"},\"getUncollectedGovernanceFees()\":{\"notice\":\"Gets info about the fees presently accrued by the pool.\"},\"getWithdrawPool()\":{\"notice\":\"Gets information about the withdrawal pool.\"},\"isApprovedForAll(address,address)\":{\"notice\":\"Gets the approval status of an operator for an account.\"},\"isPauser(address)\":{\"notice\":\"Gets the pauser status of an address.\"},\"load(uint256[])\":{\"notice\":\"Allows plugin data libs to provide getters or other complex         logic instead of the main.\"},\"name(uint256)\":{\"notice\":\"Gets the name of a sub-token.\"},\"nonces(address)\":{\"notice\":\"Gets the permitForAll signature nonce for an account.\"},\"pause(bool)\":{\"notice\":\"Allows an authorized address to pause this contract.\"},\"perTokenApprovals(uint256,address,address)\":{\"notice\":\"Gets the approval status of an operator for an account.\"},\"permitForAll(bytes32,bytes32,address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"notice\":\"Allows a caller who is not the owner of an account to execute the         functionality of 'approve' for all assets with the owner's         signature.\"},\"setApproval(uint256,address,uint256)\":{\"notice\":\"Allows a user to set an approval for an individual asset with         specific amount.\"},\"setApprovalBridge(uint256,address,uint256,address)\":{\"notice\":\"Allows the compatibility linking contract to forward calls to         set asset approvals.\"},\"setApprovalForAll(address,bool)\":{\"notice\":\"Allows a user to approve an operator to use all of their assets.\"},\"setGovernance(address)\":{\"notice\":\"Allows governance to change governance.\"},\"setPauser(address,bool)\":{\"notice\":\"Allows governance to change the pauser status of an address.\"},\"sweep(address)\":{\"notice\":\"Transfers the contract's balance of a target token to the fee         collector address.\"},\"symbol(uint256)\":{\"notice\":\"Gets the symbol of a sub-token.\"},\"totalSupply(uint256)\":{\"notice\":\"Gets the total supply of a sub-token.\"},\"transferFrom(uint256,address,address,uint256)\":{\"notice\":\"Transfers an amount of assets from the source to the destination.\"},\"transferFromBridge(uint256,address,address,uint256,address)\":{\"notice\":\"Permissioned transfer for the bridge to access, only callable by         the ERC20 linking bridge.\"},\"vault()\":{\"notice\":\"Gets the ERC4626 compatible vault used as this pool's yield         source.\"}},\"notice\":\"ERC4626Hyperdrive's target0 logic contract. This contract contains         all of the getters for Hyperdrive as well as some stateful         functions.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/instances/erc4626/ERC4626Target0.sol\":\"ERC4626Target0\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/external/HyperdriveTarget0.sol\":{\"keccak256\":\"0x0908c7dee96e4a426e073dd92b524b6198a4c39a584b013e87921ae1d02530e3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3d0d4b3b851253d4da44cd30070b772e6adabc71a9ec298ff27848a319dedc3f\",\"dweb:/ipfs/QmcejBXXwRKSU4D2utpgrdhGjahL2tcjoxd552Ga5YQ3qk\"]},\"contracts/src/instances/erc4626/ERC4626Base.sol\":{\"keccak256\":\"0xcd961bed2634599e8060353f5219cd4cebff4ce3f29c3131cf69543cb280ac18\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d36f480b1e18086ff23ffead15ebbb42eb6bba82ab8f0357e4abcd14850a2a79\",\"dweb:/ipfs/QmNehYBaGMciT2ZepWZ88yq8GftqdW437RRt6587Hcs1qs\"]},\"contracts/src/instances/erc4626/ERC4626Target0.sol\":{\"keccak256\":\"0x967da2883928d2ca98682a3e997d1f0ea416c402c666d1d18ef41668383b5c1f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fcf10a389a4265fe788d431791c270aaf65857152217a6c5e57607353c8ef49a\",\"dweb:/ipfs/QmQiEG1VztHPpRVN84RhsxeMUGGwqgiPxj1fpw91vMnAi8\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IERC4626.sol\":{\"keccak256\":\"0x7d99427dc97cc1b469d205de5ced0eb15c6e305d0a7ef73d45fe7ef47ce7231e\",\"license\":\"GPL-2.0-or-later\",\"urls\":[\"bzz-raw://c7726091d2f569ff79057a693324886e2a5558c586684460b51cd20612be59d3\",\"dweb:/ipfs/QmZv6BBe22fZRaC5iYiTuZMD2ZgUXvMBHjwZLikVSoXjDP\"]},\"contracts/src/interfaces/IERC4626Hyperdrive.sol\":{\"keccak256\":\"0xc7f5a5cbfc5ba21f72fc7699d616e2483d4589514a14b6e39f624d0f4d9453e7\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a4d7b144f357e86bfd23c805bb670226aa0c87b078babcd4dd3ec8b8f0b3374f\",\"dweb:/ipfs/QmTYNfB4ABRtPjCVck2uq5wQA8PvxBS45mPkVevc82TTFa\"]},\"contracts/src/interfaces/IERC4626HyperdriveCore.sol\":{\"keccak256\":\"0x94cce9f221023ebf9d4ed4fbafac76d67aee4ee0aa7771c89fcd2d374dfb490a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5ed09d2369f7e9c057d20b0c069f6b9e5242d4c9cd85b3bd49ace51ad16fdba0\",\"dweb:/ipfs/QmNzy2ewTJePinzG4L4SAfxxBySPFJW5Shxb5w4ocBgn5F\"]},\"contracts/src/interfaces/IERC4626HyperdriveRead.sol\":{\"keccak256\":\"0x2039eef677ba37898e8e42dcb321d11d3c87f739122fd03726241252326dea33\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://31eacdd274ac0d6ff2969cb465e0fddb262d223f78f9001d7252bd7370449c73\",\"dweb:/ipfs/QmVNRFMvXk1r8h9pCdSsRhQr5rkj8XgGpNoLwhb6Q6Hzbk\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xbb41b77195a206fee42f1c801d1feeefcb84d1d33fcdb537ba2597a2eaf7bf94\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ad3474360d05cf4002ea0703ff36dba900dc1b17da8077f8bcaf159c0b0861eb\",\"dweb:/ipfs/QmYTehjAXpiuLErAWGfVw1LFn8g2oZ7YnjLNXcmU5ngPBf\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x2836b8e9e2b6e143d4601e0047dfd09232352038a2133670d2f40da5442ff4b3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://64eec4fc70dd4fdf3ad835ef343d56bd4a7c48f2bb0e1f338d9f090e42848660\",\"dweb:/ipfs/Qmeg2aX8QZBggY1tChJQJbkhkbxWFRQPDsZRxUMsGfFg5m\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x1841703b12d5b2ca7dedff94c7dd71a4ad0a0b47ca59ba9de98ea14929fb72e5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c192bfc8bee91341d7e7530d71df2fbaec69d7bf0017e7b318dea276b7f3e171\",\"dweb:/ipfs/QmRWCkdXJ7G2FDo4CpsNuRvDgYWzN9U3LXLzM3YKHs9M4y\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf\",\"dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0xf692b4673daac8627a185253b5fb99c843d9c5a2897be50599030fbd02c21a28\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ec28e35b2523d2f399c79ec5c8e29a4985a0e7a2d1d83c9a834d84dfc44130a2\",\"dweb:/ipfs/QmZLHmSUkDJsnU2FJ4FuaMfo2t6dPimmLaCDrfuxYF8nmD\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xeabffcfcd0fd642caaa2355dccad38269d25fbd4db1b0db43fd97328bf464862\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6970e3db54bfcca6748db01b871fcee4f8d74fea2e66c39e3320232086633355\",\"dweb:/ipfs/QmPq66eyA4DmnU7m1QpMgKGrJ3ebUeN6e8UEuhb64U3BH2\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xc28d1017afe010c20c2fbe9b78e0001eb8b7db16e0fe5038990692227be365ec\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8056e866c6da775c66cefc4e03d8856d75980d8c6eb98e954e1319b2478ad51c\",\"dweb:/ipfs/Qme9n2mBoeFUxf7Tzx4dD3iYt2kDsza6mqPXoUogPnS2hx\"]},\"contracts/src/internal/HyperdriveAdmin.sol\":{\"keccak256\":\"0x5485e3c9934c1e6596903966a19f1fd16d4ef28398e2652825540f981142b9d5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8c9625cfe2cd08ab2f1bc9e017482d6ab1ca740af5a5588ee23717a71bd435dc\",\"dweb:/ipfs/QmXBf4TUMsw8Th1rZRnPdpoVsgdXS82DJJq4UPAYjqMW6q\"]},\"contracts/src/internal/HyperdriveBase.sol\":{\"keccak256\":\"0x64568129b288bbc5ceda7a9f99afaa879353d6a3ccec737cce9c8827a52d3717\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://17f30a5d3b37e7e3aa45dba37efee31223a3d20e52ac25574df66706e69c15cc\",\"dweb:/ipfs/QmWTcWTuWZT7YyTE58QT5QsGfUBfyfx52kivRcAKJTvCv8\"]},\"contracts/src/internal/HyperdriveCheckpoint.sol\":{\"keccak256\":\"0x04d22b2ebf166f1ae6e9645eebeeb077e6eda42c782b685b8432e899b81c7582\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://47f974c18b069ab242498bf15451d1dd377ab0119d9a2f384a3bfc5ce60ff86e\",\"dweb:/ipfs/QmSKARBTcMuqku3Gs9YJfiCNhxZLarjNDty9tdqpYR6qXV\"]},\"contracts/src/internal/HyperdriveLP.sol\":{\"keccak256\":\"0x1b8bff5e5052adc67904952ec46d491ceb15811fd5110c3d30d371feb1b064bf\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://92a409bb02326f5b5890aba50d404fb7a3706e0d32187234445476852ef12ecc\",\"dweb:/ipfs/Qmck8L3UCeKDYsg4McMFdSi1SXQ1yurUMn7tc6sqCM5FMi\"]},\"contracts/src/internal/HyperdriveLong.sol\":{\"keccak256\":\"0xd169b91e1abe9c66e86ef97eeffc1f891a635865f73ca91fcd56c8ed938a6370\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8ece4e4575a34a652447fff0cd3686992d1f709257d54f8574d412e7400eb626\",\"dweb:/ipfs/QmcM6zBD94acnYkVGzFfZFVoG1nK7PoCW7ZnEGuacZPeed\"]},\"contracts/src/internal/HyperdriveMultiToken.sol\":{\"keccak256\":\"0xb93b227f7ab7e92c52a80c51cf6613500a2ff9e84ee44d17dcc4d97aabcdf058\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2cfa21ad93f76d4996db82e36b577907a54f58bb5cbe507c612da37b0efb4b11\",\"dweb:/ipfs/QmfSEiLwJdHhqreFjnoxbghHtiHMDPFGxE4zsPq5KmQFKw\"]},\"contracts/src/internal/HyperdriveShort.sol\":{\"keccak256\":\"0x36a3a99a25e79a948e7fc0a14a37e665eb7a5b2f537ffb7ce2d4cf6f1a9d4982\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://22c6461d8e767dcb2bdfd9137eea7f47ecd53893011a53855d0d6d0df078b07f\",\"dweb:/ipfs/QmbVBZBiMNyV3asHb4NPXkfRFxBeRYHm2kMj82MLwnh75C\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xfeac73551892783afcce85d23fb910baf2ad729d218756f3597ad23e3dcb077f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1f659070705bee17efda43c36f71d22b035752f610624c59238cae559c60530d\",\"dweb:/ipfs/QmTEXNYSWa8w3wY2TWzDPNZXxdThMFEbrtRwcQHfyN2CJb\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0xc2e36474285afd5b98999d648305f077a05b0e159dd63ef5f44f29cd42eb68c2\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fbf8aac982e8485dce3f8c7f85b9bbbd46b41d8d0d3deebe1fc927799de60c0b\",\"dweb:/ipfs/QmbUJsi5cqS4M4sVcJ8cDWvbMRSqYzfjRAp8gaP1v2dtst\"]},\"contracts/src/libraries/Errors.sol\":{\"keccak256\":\"0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88\",\"dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0xdcf0c77bc29a0b5b2ce06cccfa6f5e936128e5c0f14a5636bfe21faf95c515bf\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://088172c3f97db68914cdef042d942b0d0c585cce77d004625bfa62a72ac1e95d\",\"dweb:/ipfs/Qmewa9GJtYxBw4fAx4HZJaNuUCKEoQT4c5nmhPyXxVEwwq\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0x94662a356f9ab292c0935ff4c29f9b826a17176eb98b472efed7afbfe4d5d744\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://794c5605f8f0716b871a8747fea516d26fd73f0add45a944ac4034de96c60c7a\",\"dweb:/ipfs/QmYSsquDzxupHSwWMsjjooxNxuzQ29ezczFsP2VQ5PYYve\"]},\"contracts/src/libraries/LPMath.sol\":{\"keccak256\":\"0x8d9491ad62e48c7148389a72feca73a388076e3386d7ddc6788193be359e1266\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d340b65b76fc638d119d7d1d6f38fa044c34fc9297dc0c1627c9820218b2e244\",\"dweb:/ipfs/QmZo3nPVg3j2Ga8UXRZFQyTq7RuYuY6F2tYynnVUP4SbDY\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0x390a002b83e7ed8a99d4ca9b3ea514b2080c237911a3a3d0fa2ad4522a09d60b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://51ea972cf6d3c79ea6b93c63c85fbba2bd234e71704715a1d9bd897da9d6fcb1\",\"dweb:/ipfs/QmXEGDrLyeAYMZiDVNynVzRzAYgnspcdLfkMeGr81DmJpL\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x76f69d3104f3f97d67289512325306d7ea2c7b29a787eeef93ffc47e8a80f346\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6c8df31a46b4287c23c67e0157e6f6a4877608ed3fb1919a9c07f5bd9b81d7f6\",\"dweb:/ipfs/QmPua6efzJGnC7NarnPojk9yF2geqenUaXUNRmPVHJdXWk\"]},\"lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol\":{\"keccak256\":\"0x60c65f701957fdd6faea1acb0bb45825791d473693ed9ecb34726fdfaa849dd7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ea290300e0efc4d901244949dc4d877fd46e6c5e43dc2b26620e8efab3ab803f\",\"dweb:/ipfs/QmcLLJppxKeJWqHxE2CUkcfhuRTgHSn8J4kijcLa5MYhSt\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0xc3e1fa9d1987f8d349dfb4d6fe93bf2ca014b52ba335cfac30bfe71e357e6f80\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c5703ccdeb7b1d685e375ed719117e9edf2ab4bc544f24f23b0d50ec82257229\",\"dweb:/ipfs/QmTdwkbQq7owpCiyuzE7eh5LrD2ddrBCZ5WHVsWPi1RrTS\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c\",\"dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850\",\"dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x6008dabfe393240d73d7dd7688033f72740d570aa422254d29a7dce8568f3aff\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f5196ec75139918c6c7bb4251b36395e668f1fa6d206beba7e7520e74913940d\",\"dweb:/ipfs/QmSyqjksXxmm2mCG6qRd1yuwLykypkSVBbnBnGqJRcuJMi\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x37bb49513c49c87c4642a891b13b63571bc87013dde806617aa1efb54605f386\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b3036b3a83b7c48f96641f2a9002b9f2dcb6a5958dd670894ada21ae8229b3d0\",\"dweb:/ipfs/QmUNfSBdoVtjhETaUJCYcaC7pTMgbhht926tJ2uXJbiVd3\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245\",\"dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y\"]},\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":{\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12\",\"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF\"]},\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02\",\"dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd\"]}},\"version\":1}";
    readonly metadata: {
        readonly compiler: {
            readonly version: "0.8.20+commit.a1b79de6";
        };
        readonly language: "Solidity";
        readonly output: {
            readonly abi: readonly [{
                readonly inputs: readonly [{
                    readonly internalType: "struct IHyperdrive.PoolConfig";
                    readonly name: "_config";
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
                }, {
                    readonly internalType: "contract IERC4626";
                    readonly name: "__vault";
                    readonly type: "address";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "constructor";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "target";
                    readonly type: "address";
                }];
                readonly type: "error";
                readonly name: "AddressEmptyCode";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "account";
                    readonly type: "address";
                }];
                readonly type: "error";
                readonly name: "AddressInsufficientBalance";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "BatchInputLengthMismatch";
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
                readonly name: "FailedInnerCall";
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
                readonly name: "InvalidERC20Bridge";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidFeeDestination";
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
                readonly name: "NegativePresentValue";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "ReentrancyGuardReentrantCall";
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
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "token";
                    readonly type: "address";
                }];
                readonly type: "error";
                readonly name: "SafeERC20FailedOperation";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "SweepFailed";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "Unauthorized";
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
                    readonly name: "vaultShareAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "bool";
                    readonly name: "asBase";
                    readonly type: "bool";
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
                    readonly name: "vaultShareAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "bool";
                    readonly name: "asBase";
                    readonly type: "bool";
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
                    readonly name: "vaultShareAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "bool";
                    readonly name: "asBase";
                    readonly type: "bool";
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
                    readonly name: "vaultShareAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "bool";
                    readonly name: "asBase";
                    readonly type: "bool";
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
                    readonly name: "vaultShareAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "bool";
                    readonly name: "asBase";
                    readonly type: "bool";
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
                    readonly name: "vaultShareAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "bool";
                    readonly name: "asBase";
                    readonly type: "bool";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "baseProceeds";
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
                    readonly name: "vaultShareAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "bool";
                    readonly name: "asBase";
                    readonly type: "bool";
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
                    readonly name: "vaultShareAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "bool";
                    readonly name: "asBase";
                    readonly type: "bool";
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
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "tokenId";
                    readonly type: "uint256";
                }, {
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
                    readonly internalType: "address";
                    readonly name: "account";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "operator";
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
                readonly stateMutability: "pure";
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
                    readonly name: "account";
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
                    readonly name: "account";
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
                    readonly internalType: "bytes32";
                    readonly name: "domainSeparator";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "permitTypeHash";
                    readonly type: "bytes32";
                }, {
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
                    readonly internalType: "contract IERC20";
                    readonly name: "_target";
                    readonly type: "address";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "sweep";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "tokenId";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "pure";
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
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "vault";
                readonly outputs: readonly [{
                    readonly internalType: "contract IERC4626";
                    readonly name: "";
                    readonly type: "address";
                }];
            }];
            readonly devdoc: {
                readonly kind: "dev";
                readonly methods: {
                    readonly "balanceOf(uint256,address)": {
                        readonly params: {
                            readonly account: "The account.";
                            readonly tokenId: "The sub-token id.";
                        };
                        readonly returns: {
                            readonly _0: "The balance.";
                        };
                    };
                    readonly "baseToken()": {
                        readonly returns: {
                            readonly _0: "The base token.";
                        };
                    };
                    readonly "batchTransferFrom(address,address,uint256[],uint256[])": {
                        readonly params: {
                            readonly from: "The source account.";
                            readonly ids: "The array of token ids of the asset to transfer.";
                            readonly to: "The destination account.";
                            readonly values: "The amount of each token to transfer.";
                        };
                    };
                    readonly "collectGovernanceFee((address,bool,bytes))": {
                        readonly params: {
                            readonly _options: "The options that configure how the fees are settled.";
                        };
                        readonly returns: {
                            readonly proceeds: "The amount of base collected.";
                        };
                    };
                    readonly constructor: {
                        readonly params: {
                            readonly __vault: "The ERC4626 compatible vault.";
                            readonly _config: "The configuration of the Hyperdrive pool.";
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
                        readonly details: "These parameters are immutable, so this should only need to be      called once.";
                        readonly returns: {
                            readonly _0: "The PoolConfig struct.";
                        };
                    };
                    readonly "getPoolInfo()": {
                        readonly returns: {
                            readonly _0: "The pool info.";
                        };
                    };
                    readonly "getUncollectedGovernanceFees()": {
                        readonly returns: {
                            readonly _0: "Governance fees denominated in shares yet to be collected.";
                        };
                    };
                    readonly "getWithdrawPool()": {
                        readonly returns: {
                            readonly _0: "Hyperdrive's withdrawal pool information.";
                        };
                    };
                    readonly "isApprovedForAll(address,address)": {
                        readonly params: {
                            readonly account: "The account.";
                            readonly operator: "The operator.";
                        };
                        readonly returns: {
                            readonly _0: "The approval status.";
                        };
                    };
                    readonly "isPauser(address)": {
                        readonly params: {
                            readonly _account: "The account to check.";
                        };
                        readonly returns: {
                            readonly _0: "The pauser status.";
                        };
                    };
                    readonly "load(uint256[])": {
                        readonly params: {
                            readonly _slots: "The storage slots the caller wants the data from.";
                        };
                        readonly returns: {
                            readonly _0: "A raw array of loaded data.";
                        };
                    };
                    readonly "name(uint256)": {
                        readonly params: {
                            readonly tokenId: "The sub-token id.";
                        };
                        readonly returns: {
                            readonly _0: "The name.";
                        };
                    };
                    readonly "nonces(address)": {
                        readonly params: {
                            readonly account: "The account.";
                        };
                        readonly returns: {
                            readonly _0: "The signature nonce.";
                        };
                    };
                    readonly "pause(bool)": {
                        readonly params: {
                            readonly _status: "True to pause all deposits and false to unpause them.";
                        };
                    };
                    readonly "perTokenApprovals(uint256,address,address)": {
                        readonly params: {
                            readonly account: "The account.";
                            readonly spender: "The spender.";
                            readonly tokenId: "The sub-token id.";
                        };
                        readonly returns: {
                            readonly _0: "The approval status.";
                        };
                    };
                    readonly "permitForAll(bytes32,bytes32,address,address,bool,uint256,uint8,bytes32,bytes32)": {
                        readonly details: "The signature for this function follows EIP 712 standard and should      be generated with the eth_signTypedData JSON RPC call instead of      the eth_sign JSON RPC call. If using out of date parity signing      libraries the v component may need to be adjusted. Also it is very      rare but possible for v to be other values, those values are not      supported.";
                        readonly params: {
                            readonly _approved: "A boolean of the approval status to set to.";
                            readonly deadline: "The timestamp which the signature must be submitted by        to be valid.";
                            readonly domainSeparator: "The EIP712 domain separator of the contract.";
                            readonly owner: "The owner of the account which is having the new approval set.";
                            readonly permitTypeHash: "The EIP712 domain separator of the contract.";
                            readonly r: "The r component of the ECDSA signature.";
                            readonly s: "The s component of the ECDSA signature.";
                            readonly spender: "The address which will be allowed to spend owner's tokens.";
                            readonly v: "Extra ECDSA data which allows public key recovery from        signature assumed to be 27 or 28.";
                        };
                    };
                    readonly "setApproval(uint256,address,uint256)": {
                        readonly params: {
                            readonly amount: "The max tokens the approved person can use, setting to        uint256.max will cause the value to never decrement [saving gas        on transfer].";
                            readonly operator: "The address who will be able to use the tokens.";
                            readonly tokenID: "The asset to approve the use of.";
                        };
                    };
                    readonly "setApprovalBridge(uint256,address,uint256,address)": {
                        readonly params: {
                            readonly amount: "The max tokens the approved person can use, setting to        uint256.max will cause the value to never decrement [saving gas        on transfer].";
                            readonly caller: "The eth address which called the linking contract.";
                            readonly operator: "The address who will be able to use the tokens.";
                            readonly tokenID: "The asset to approve the use of.";
                        };
                    };
                    readonly "setApprovalForAll(address,bool)": {
                        readonly params: {
                            readonly approved: "True to approve, false to remove approval.";
                            readonly operator: "The eth address which can access the caller's assets.";
                        };
                    };
                    readonly "setGovernance(address)": {
                        readonly params: {
                            readonly _who: "The new governance address.";
                        };
                    };
                    readonly "setPauser(address,bool)": {
                        readonly params: {
                            readonly status: "The new pauser status.";
                            readonly who: "The address to change.";
                        };
                    };
                    readonly "sweep(address)": {
                        readonly details: "Some yield sources (e.g. Morpho) pay rewards directly to this      contract, but we can't handle distributing them internally. With      this in mind, we sweep the tokens to the fee collector address to      then redistribute to users.WARN: It is unlikely but possible that there is a selector overlap      with 'transferFrom'. Any integrating contracts should be checked      for that, as it may result in an unexpected call from this address.";
                        readonly params: {
                            readonly _target: "The target token to sweep.";
                        };
                    };
                    readonly "symbol(uint256)": {
                        readonly params: {
                            readonly tokenId: "The sub-token id.";
                        };
                        readonly returns: {
                            readonly _0: "The symbol.";
                        };
                    };
                    readonly "totalSupply(uint256)": {
                        readonly params: {
                            readonly tokenId: "The sub-token id.";
                        };
                        readonly returns: {
                            readonly _0: "The total supply.";
                        };
                    };
                    readonly "transferFrom(uint256,address,address,uint256)": {
                        readonly params: {
                            readonly amount: "The amount of token to move.";
                            readonly from: "The address whose balance will be reduced.";
                            readonly to: "The address whose balance will be increased.";
                            readonly tokenID: "The token identifier.";
                        };
                    };
                    readonly "transferFromBridge(uint256,address,address,uint256,address)": {
                        readonly params: {
                            readonly amount: "The amount of token to move.";
                            readonly caller: "The msg.sender from the bridge.";
                            readonly from: "The address whose balance will be reduced.";
                            readonly to: "The address whose balance will be increased.";
                            readonly tokenID: "The token identifier.";
                        };
                    };
                    readonly "vault()": {
                        readonly returns: {
                            readonly _0: "The ERC4626 compatible yield source.";
                        };
                    };
                };
                readonly version: 1;
            };
            readonly userdoc: {
                readonly kind: "user";
                readonly methods: {
                    readonly "balanceOf(uint256,address)": {
                        readonly notice: "Gets an account's balance of a sub-token.";
                    };
                    readonly "baseToken()": {
                        readonly notice: "Gets the base token.";
                    };
                    readonly "batchTransferFrom(address,address,uint256[],uint256[])": {
                        readonly notice: "Transfers several assets from one account to another.";
                    };
                    readonly "collectGovernanceFee((address,bool,bytes))": {
                        readonly notice: "This function collects the governance fees accrued by the pool.";
                    };
                    readonly constructor: {
                        readonly notice: "Initializes the target0 contract.";
                    };
                    readonly "decimals()": {
                        readonly notice: "Gets the decimals of the MultiToken. This is the same as the         decimals used by the base token.";
                    };
                    readonly "getCheckpoint(uint256)": {
                        readonly notice: "Gets a specified checkpoint.";
                    };
                    readonly "getCheckpointExposure(uint256)": {
                        readonly notice: "Gets the checkpoint exposure at a specified time.";
                    };
                    readonly "getMarketState()": {
                        readonly notice: "Gets the market state.";
                    };
                    readonly "getPoolConfig()": {
                        readonly notice: "Gets the pool's configuration parameters.";
                    };
                    readonly "getPoolInfo()": {
                        readonly notice: "Gets info about the pool's reserves and other state that is         important to evaluate potential trades.";
                    };
                    readonly "getUncollectedGovernanceFees()": {
                        readonly notice: "Gets info about the fees presently accrued by the pool.";
                    };
                    readonly "getWithdrawPool()": {
                        readonly notice: "Gets information about the withdrawal pool.";
                    };
                    readonly "isApprovedForAll(address,address)": {
                        readonly notice: "Gets the approval status of an operator for an account.";
                    };
                    readonly "isPauser(address)": {
                        readonly notice: "Gets the pauser status of an address.";
                    };
                    readonly "load(uint256[])": {
                        readonly notice: "Allows plugin data libs to provide getters or other complex         logic instead of the main.";
                    };
                    readonly "name(uint256)": {
                        readonly notice: "Gets the name of a sub-token.";
                    };
                    readonly "nonces(address)": {
                        readonly notice: "Gets the permitForAll signature nonce for an account.";
                    };
                    readonly "pause(bool)": {
                        readonly notice: "Allows an authorized address to pause this contract.";
                    };
                    readonly "perTokenApprovals(uint256,address,address)": {
                        readonly notice: "Gets the approval status of an operator for an account.";
                    };
                    readonly "permitForAll(bytes32,bytes32,address,address,bool,uint256,uint8,bytes32,bytes32)": {
                        readonly notice: "Allows a caller who is not the owner of an account to execute the         functionality of 'approve' for all assets with the owner's         signature.";
                    };
                    readonly "setApproval(uint256,address,uint256)": {
                        readonly notice: "Allows a user to set an approval for an individual asset with         specific amount.";
                    };
                    readonly "setApprovalBridge(uint256,address,uint256,address)": {
                        readonly notice: "Allows the compatibility linking contract to forward calls to         set asset approvals.";
                    };
                    readonly "setApprovalForAll(address,bool)": {
                        readonly notice: "Allows a user to approve an operator to use all of their assets.";
                    };
                    readonly "setGovernance(address)": {
                        readonly notice: "Allows governance to change governance.";
                    };
                    readonly "setPauser(address,bool)": {
                        readonly notice: "Allows governance to change the pauser status of an address.";
                    };
                    readonly "sweep(address)": {
                        readonly notice: "Transfers the contract's balance of a target token to the fee         collector address.";
                    };
                    readonly "symbol(uint256)": {
                        readonly notice: "Gets the symbol of a sub-token.";
                    };
                    readonly "totalSupply(uint256)": {
                        readonly notice: "Gets the total supply of a sub-token.";
                    };
                    readonly "transferFrom(uint256,address,address,uint256)": {
                        readonly notice: "Transfers an amount of assets from the source to the destination.";
                    };
                    readonly "transferFromBridge(uint256,address,address,uint256,address)": {
                        readonly notice: "Permissioned transfer for the bridge to access, only callable by         the ERC20 linking bridge.";
                    };
                    readonly "vault()": {
                        readonly notice: "Gets the ERC4626 compatible vault used as this pool's yield         source.";
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
                readonly "contracts/src/instances/erc4626/ERC4626Target0.sol": "ERC4626Target0";
            };
            readonly libraries: {};
        };
        readonly sources: {
            readonly "contracts/src/external/HyperdriveTarget0.sol": {
                readonly keccak256: "0x0908c7dee96e4a426e073dd92b524b6198a4c39a584b013e87921ae1d02530e3";
                readonly urls: readonly ["bzz-raw://3d0d4b3b851253d4da44cd30070b772e6adabc71a9ec298ff27848a319dedc3f", "dweb:/ipfs/QmcejBXXwRKSU4D2utpgrdhGjahL2tcjoxd552Ga5YQ3qk"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/instances/erc4626/ERC4626Base.sol": {
                readonly keccak256: "0xcd961bed2634599e8060353f5219cd4cebff4ce3f29c3131cf69543cb280ac18";
                readonly urls: readonly ["bzz-raw://d36f480b1e18086ff23ffead15ebbb42eb6bba82ab8f0357e4abcd14850a2a79", "dweb:/ipfs/QmNehYBaGMciT2ZepWZ88yq8GftqdW437RRt6587Hcs1qs"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/instances/erc4626/ERC4626Target0.sol": {
                readonly keccak256: "0x967da2883928d2ca98682a3e997d1f0ea416c402c666d1d18ef41668383b5c1f";
                readonly urls: readonly ["bzz-raw://fcf10a389a4265fe788d431791c270aaf65857152217a6c5e57607353c8ef49a", "dweb:/ipfs/QmQiEG1VztHPpRVN84RhsxeMUGGwqgiPxj1fpw91vMnAi8"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IERC20.sol": {
                readonly keccak256: "0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9";
                readonly urls: readonly ["bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac", "dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IERC4626.sol": {
                readonly keccak256: "0x7d99427dc97cc1b469d205de5ced0eb15c6e305d0a7ef73d45fe7ef47ce7231e";
                readonly urls: readonly ["bzz-raw://c7726091d2f569ff79057a693324886e2a5558c586684460b51cd20612be59d3", "dweb:/ipfs/QmZv6BBe22fZRaC5iYiTuZMD2ZgUXvMBHjwZLikVSoXjDP"];
                readonly license: "GPL-2.0-or-later";
            };
            readonly "contracts/src/interfaces/IERC4626Hyperdrive.sol": {
                readonly keccak256: "0xc7f5a5cbfc5ba21f72fc7699d616e2483d4589514a14b6e39f624d0f4d9453e7";
                readonly urls: readonly ["bzz-raw://a4d7b144f357e86bfd23c805bb670226aa0c87b078babcd4dd3ec8b8f0b3374f", "dweb:/ipfs/QmTYNfB4ABRtPjCVck2uq5wQA8PvxBS45mPkVevc82TTFa"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IERC4626HyperdriveCore.sol": {
                readonly keccak256: "0x94cce9f221023ebf9d4ed4fbafac76d67aee4ee0aa7771c89fcd2d374dfb490a";
                readonly urls: readonly ["bzz-raw://5ed09d2369f7e9c057d20b0c069f6b9e5242d4c9cd85b3bd49ace51ad16fdba0", "dweb:/ipfs/QmNzy2ewTJePinzG4L4SAfxxBySPFJW5Shxb5w4ocBgn5F"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IERC4626HyperdriveRead.sol": {
                readonly keccak256: "0x2039eef677ba37898e8e42dcb321d11d3c87f739122fd03726241252326dea33";
                readonly urls: readonly ["bzz-raw://31eacdd274ac0d6ff2969cb465e0fddb262d223f78f9001d7252bd7370449c73", "dweb:/ipfs/QmVNRFMvXk1r8h9pCdSsRhQr5rkj8XgGpNoLwhb6Q6Hzbk"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdrive.sol": {
                readonly keccak256: "0xbb41b77195a206fee42f1c801d1feeefcb84d1d33fcdb537ba2597a2eaf7bf94";
                readonly urls: readonly ["bzz-raw://ad3474360d05cf4002ea0703ff36dba900dc1b17da8077f8bcaf159c0b0861eb", "dweb:/ipfs/QmYTehjAXpiuLErAWGfVw1LFn8g2oZ7YnjLNXcmU5ngPBf"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveCore.sol": {
                readonly keccak256: "0x2836b8e9e2b6e143d4601e0047dfd09232352038a2133670d2f40da5442ff4b3";
                readonly urls: readonly ["bzz-raw://64eec4fc70dd4fdf3ad835ef343d56bd4a7c48f2bb0e1f338d9f090e42848660", "dweb:/ipfs/Qmeg2aX8QZBggY1tChJQJbkhkbxWFRQPDsZRxUMsGfFg5m"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveEvents.sol": {
                readonly keccak256: "0x1841703b12d5b2ca7dedff94c7dd71a4ad0a0b47ca59ba9de98ea14929fb72e5";
                readonly urls: readonly ["bzz-raw://c192bfc8bee91341d7e7530d71df2fbaec69d7bf0017e7b318dea276b7f3e171", "dweb:/ipfs/QmRWCkdXJ7G2FDo4CpsNuRvDgYWzN9U3LXLzM3YKHs9M4y"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveRead.sol": {
                readonly keccak256: "0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55";
                readonly urls: readonly ["bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf", "dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiToken.sol": {
                readonly keccak256: "0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f";
                readonly urls: readonly ["bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7", "dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenCore.sol": {
                readonly keccak256: "0xf692b4673daac8627a185253b5fb99c843d9c5a2897be50599030fbd02c21a28";
                readonly urls: readonly ["bzz-raw://ec28e35b2523d2f399c79ec5c8e29a4985a0e7a2d1d83c9a834d84dfc44130a2", "dweb:/ipfs/QmZLHmSUkDJsnU2FJ4FuaMfo2t6dPimmLaCDrfuxYF8nmD"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenEvents.sol": {
                readonly keccak256: "0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb";
                readonly urls: readonly ["bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222", "dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenMetadata.sol": {
                readonly keccak256: "0xeabffcfcd0fd642caaa2355dccad38269d25fbd4db1b0db43fd97328bf464862";
                readonly urls: readonly ["bzz-raw://6970e3db54bfcca6748db01b871fcee4f8d74fea2e66c39e3320232086633355", "dweb:/ipfs/QmPq66eyA4DmnU7m1QpMgKGrJ3ebUeN6e8UEuhb64U3BH2"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenRead.sol": {
                readonly keccak256: "0xc28d1017afe010c20c2fbe9b78e0001eb8b7db16e0fe5038990692227be365ec";
                readonly urls: readonly ["bzz-raw://8056e866c6da775c66cefc4e03d8856d75980d8c6eb98e954e1319b2478ad51c", "dweb:/ipfs/Qme9n2mBoeFUxf7Tzx4dD3iYt2kDsza6mqPXoUogPnS2hx"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/internal/HyperdriveAdmin.sol": {
                readonly keccak256: "0x5485e3c9934c1e6596903966a19f1fd16d4ef28398e2652825540f981142b9d5";
                readonly urls: readonly ["bzz-raw://8c9625cfe2cd08ab2f1bc9e017482d6ab1ca740af5a5588ee23717a71bd435dc", "dweb:/ipfs/QmXBf4TUMsw8Th1rZRnPdpoVsgdXS82DJJq4UPAYjqMW6q"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/internal/HyperdriveBase.sol": {
                readonly keccak256: "0x64568129b288bbc5ceda7a9f99afaa879353d6a3ccec737cce9c8827a52d3717";
                readonly urls: readonly ["bzz-raw://17f30a5d3b37e7e3aa45dba37efee31223a3d20e52ac25574df66706e69c15cc", "dweb:/ipfs/QmWTcWTuWZT7YyTE58QT5QsGfUBfyfx52kivRcAKJTvCv8"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/internal/HyperdriveCheckpoint.sol": {
                readonly keccak256: "0x04d22b2ebf166f1ae6e9645eebeeb077e6eda42c782b685b8432e899b81c7582";
                readonly urls: readonly ["bzz-raw://47f974c18b069ab242498bf15451d1dd377ab0119d9a2f384a3bfc5ce60ff86e", "dweb:/ipfs/QmSKARBTcMuqku3Gs9YJfiCNhxZLarjNDty9tdqpYR6qXV"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/internal/HyperdriveLP.sol": {
                readonly keccak256: "0x1b8bff5e5052adc67904952ec46d491ceb15811fd5110c3d30d371feb1b064bf";
                readonly urls: readonly ["bzz-raw://92a409bb02326f5b5890aba50d404fb7a3706e0d32187234445476852ef12ecc", "dweb:/ipfs/Qmck8L3UCeKDYsg4McMFdSi1SXQ1yurUMn7tc6sqCM5FMi"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/internal/HyperdriveLong.sol": {
                readonly keccak256: "0xd169b91e1abe9c66e86ef97eeffc1f891a635865f73ca91fcd56c8ed938a6370";
                readonly urls: readonly ["bzz-raw://8ece4e4575a34a652447fff0cd3686992d1f709257d54f8574d412e7400eb626", "dweb:/ipfs/QmcM6zBD94acnYkVGzFfZFVoG1nK7PoCW7ZnEGuacZPeed"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/internal/HyperdriveMultiToken.sol": {
                readonly keccak256: "0xb93b227f7ab7e92c52a80c51cf6613500a2ff9e84ee44d17dcc4d97aabcdf058";
                readonly urls: readonly ["bzz-raw://2cfa21ad93f76d4996db82e36b577907a54f58bb5cbe507c612da37b0efb4b11", "dweb:/ipfs/QmfSEiLwJdHhqreFjnoxbghHtiHMDPFGxE4zsPq5KmQFKw"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/internal/HyperdriveShort.sol": {
                readonly keccak256: "0x36a3a99a25e79a948e7fc0a14a37e665eb7a5b2f537ffb7ce2d4cf6f1a9d4982";
                readonly urls: readonly ["bzz-raw://22c6461d8e767dcb2bdfd9137eea7f47ecd53893011a53855d0d6d0df078b07f", "dweb:/ipfs/QmbVBZBiMNyV3asHb4NPXkfRFxBeRYHm2kMj82MLwnh75C"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/internal/HyperdriveStorage.sol": {
                readonly keccak256: "0xfeac73551892783afcce85d23fb910baf2ad729d218756f3597ad23e3dcb077f";
                readonly urls: readonly ["bzz-raw://1f659070705bee17efda43c36f71d22b035752f610624c59238cae559c60530d", "dweb:/ipfs/QmTEXNYSWa8w3wY2TWzDPNZXxdThMFEbrtRwcQHfyN2CJb"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/AssetId.sol": {
                readonly keccak256: "0xc2e36474285afd5b98999d648305f077a05b0e159dd63ef5f44f29cd42eb68c2";
                readonly urls: readonly ["bzz-raw://fbf8aac982e8485dce3f8c7f85b9bbbd46b41d8d0d3deebe1fc927799de60c0b", "dweb:/ipfs/QmbUJsi5cqS4M4sVcJ8cDWvbMRSqYzfjRAp8gaP1v2dtst"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/Errors.sol": {
                readonly keccak256: "0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0";
                readonly urls: readonly ["bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88", "dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/FixedPointMath.sol": {
                readonly keccak256: "0xdcf0c77bc29a0b5b2ce06cccfa6f5e936128e5c0f14a5636bfe21faf95c515bf";
                readonly urls: readonly ["bzz-raw://088172c3f97db68914cdef042d942b0d0c585cce77d004625bfa62a72ac1e95d", "dweb:/ipfs/Qmewa9GJtYxBw4fAx4HZJaNuUCKEoQT4c5nmhPyXxVEwwq"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/HyperdriveMath.sol": {
                readonly keccak256: "0x94662a356f9ab292c0935ff4c29f9b826a17176eb98b472efed7afbfe4d5d744";
                readonly urls: readonly ["bzz-raw://794c5605f8f0716b871a8747fea516d26fd73f0add45a944ac4034de96c60c7a", "dweb:/ipfs/QmYSsquDzxupHSwWMsjjooxNxuzQ29ezczFsP2VQ5PYYve"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/LPMath.sol": {
                readonly keccak256: "0x8d9491ad62e48c7148389a72feca73a388076e3386d7ddc6788193be359e1266";
                readonly urls: readonly ["bzz-raw://d340b65b76fc638d119d7d1d6f38fa044c34fc9297dc0c1627c9820218b2e244", "dweb:/ipfs/QmZo3nPVg3j2Ga8UXRZFQyTq7RuYuY6F2tYynnVUP4SbDY"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/SafeCast.sol": {
                readonly keccak256: "0x390a002b83e7ed8a99d4ca9b3ea514b2080c237911a3a3d0fa2ad4522a09d60b";
                readonly urls: readonly ["bzz-raw://51ea972cf6d3c79ea6b93c63c85fbba2bd234e71704715a1d9bd897da9d6fcb1", "dweb:/ipfs/QmXEGDrLyeAYMZiDVNynVzRzAYgnspcdLfkMeGr81DmJpL"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/YieldSpaceMath.sol": {
                readonly keccak256: "0x76f69d3104f3f97d67289512325306d7ea2c7b29a787eeef93ffc47e8a80f346";
                readonly urls: readonly ["bzz-raw://6c8df31a46b4287c23c67e0157e6f6a4877608ed3fb1919a9c07f5bd9b81d7f6", "dweb:/ipfs/QmPua6efzJGnC7NarnPojk9yF2geqenUaXUNRmPVHJdXWk"];
                readonly license: "Apache-2.0";
            };
            readonly "lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol": {
                readonly keccak256: "0x60c65f701957fdd6faea1acb0bb45825791d473693ed9ecb34726fdfaa849dd7";
                readonly urls: readonly ["bzz-raw://ea290300e0efc4d901244949dc4d877fd46e6c5e43dc2b26620e8efab3ab803f", "dweb:/ipfs/QmcLLJppxKeJWqHxE2CUkcfhuRTgHSn8J4kijcLa5MYhSt"];
                readonly license: "MIT";
            };
            readonly "lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol": {
                readonly keccak256: "0xc3e1fa9d1987f8d349dfb4d6fe93bf2ca014b52ba335cfac30bfe71e357e6f80";
                readonly urls: readonly ["bzz-raw://c5703ccdeb7b1d685e375ed719117e9edf2ab4bc544f24f23b0d50ec82257229", "dweb:/ipfs/QmTdwkbQq7owpCiyuzE7eh5LrD2ddrBCZ5WHVsWPi1RrTS"];
                readonly license: "MIT";
            };
            readonly "lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol": {
                readonly keccak256: "0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70";
                readonly urls: readonly ["bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c", "dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq"];
                readonly license: "MIT";
            };
            readonly "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol": {
                readonly keccak256: "0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2";
                readonly urls: readonly ["bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850", "dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV"];
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
            readonly "lib/openzeppelin-contracts/contracts/utils/Context.sol": {
                readonly keccak256: "0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2";
                readonly urls: readonly ["bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12", "dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF"];
                readonly license: "MIT";
            };
            readonly "lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol": {
                readonly keccak256: "0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236";
                readonly urls: readonly ["bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02", "dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd"];
                readonly license: "MIT";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "contracts/src/instances/erc4626/ERC4626Target0.sol";
        readonly id: 5968;
        readonly exportedSymbols: {
            readonly ERC20: readonly [66576];
            readonly ERC4626Base: readonly [5679];
            readonly ERC4626Target0: readonly [5967];
            readonly HyperdriveTarget0: readonly [3146];
            readonly IERC20: readonly [6793];
            readonly IERC4626: readonly [7076];
            readonly IHyperdrive: readonly [7480];
            readonly SafeERC20: readonly [67006];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:3492:25";
        readonly nodes: readonly [{
            readonly id: 5793;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:23:25";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 5795;
            readonly nodeType: "ImportDirective";
            readonly src: "64:59:25";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol";
            readonly file: "openzeppelin/token/ERC20/ERC20.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 5968;
            readonly sourceUnit: 66577;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 5794;
                    readonly name: "ERC20";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 66576;
                    readonly src: "73:5:25";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 5797;
            readonly nodeType: "ImportDirective";
            readonly src: "124:73:25";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol";
            readonly file: "openzeppelin/token/ERC20/utils/SafeERC20.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 5968;
            readonly sourceUnit: 67007;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 5796;
                    readonly name: "SafeERC20";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 67006;
                    readonly src: "133:9:25";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 5799;
            readonly nodeType: "ImportDirective";
            readonly src: "198:73:25";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/external/HyperdriveTarget0.sol";
            readonly file: "../../external/HyperdriveTarget0.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 5968;
            readonly sourceUnit: 3147;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 5798;
                    readonly name: "HyperdriveTarget0";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 3146;
                    readonly src: "207:17:25";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 5801;
            readonly nodeType: "ImportDirective";
            readonly src: "272:53:25";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IERC20.sol";
            readonly file: "../../interfaces/IERC20.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 5968;
            readonly sourceUnit: 6794;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 5800;
                    readonly name: "IERC20";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 6793;
                    readonly src: "281:6:25";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 5803;
            readonly nodeType: "ImportDirective";
            readonly src: "326:57:25";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IERC4626.sol";
            readonly file: "../../interfaces/IERC4626.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 5968;
            readonly sourceUnit: 7077;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 5802;
                    readonly name: "IERC4626";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 7076;
                    readonly src: "335:8:25";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 5805;
            readonly nodeType: "ImportDirective";
            readonly src: "384:63:25";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IHyperdrive.sol";
            readonly file: "../../interfaces/IHyperdrive.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 5968;
            readonly sourceUnit: 7481;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 5804;
                    readonly name: "IHyperdrive";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 7480;
                    readonly src: "393:11:25";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 5807;
            readonly nodeType: "ImportDirective";
            readonly src: "448:48:25";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/instances/erc4626/ERC4626Base.sol";
            readonly file: "./ERC4626Base.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 5968;
            readonly sourceUnit: 5680;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 5806;
                    readonly name: "ERC4626Base";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 5679;
                    readonly src: "457:11:25";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 5967;
            readonly nodeType: "ContractDefinition";
            readonly src: "938:2592:25";
            readonly nodes: readonly [{
                readonly id: 5816;
                readonly nodeType: "UsingForDirective";
                readonly src: "1002:26:25";
                readonly nodes: readonly [];
                readonly global: false;
                readonly libraryName: {
                    readonly id: 5813;
                    readonly name: "SafeERC20";
                    readonly nameLocations: readonly ["1008:9:25"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 67006;
                    readonly src: "1008:9:25";
                };
                readonly typeName: {
                    readonly id: 5815;
                    readonly nodeType: "UserDefinedTypeName";
                    readonly pathNode: {
                        readonly id: 5814;
                        readonly name: "ERC20";
                        readonly nameLocations: readonly ["1022:5:25"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 66576;
                        readonly src: "1022:5:25";
                    };
                    readonly referencedDeclaration: 66576;
                    readonly src: "1022:5:25";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_contract$_ERC20_$66576";
                        readonly typeString: "contract ERC20";
                    };
                };
            }, {
                readonly id: 5833;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1202:141:25";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 5832;
                    readonly nodeType: "Block";
                    readonly src: "1341:2:25";
                    readonly nodes: readonly [];
                    readonly statements: readonly [];
                };
                readonly documentation: {
                    readonly id: 5817;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1034:163:25";
                    readonly text: "@notice Initializes the target0 contract.\n @param _config The configuration of the Hyperdrive pool.\n @param __vault The ERC4626 compatible vault.";
                };
                readonly implemented: true;
                readonly kind: "constructor";
                readonly modifiers: readonly [{
                    readonly arguments: readonly [{
                        readonly id: 5826;
                        readonly name: "_config";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 5820;
                        readonly src: "1311:7:25";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$7280_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig memory";
                        };
                    }];
                    readonly id: 5827;
                    readonly kind: "baseConstructorSpecifier";
                    readonly modifierName: {
                        readonly id: 5825;
                        readonly name: "HyperdriveTarget0";
                        readonly nameLocations: readonly ["1293:17:25"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 3146;
                        readonly src: "1293:17:25";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "1293:26:25";
                }, {
                    readonly arguments: readonly [{
                        readonly id: 5829;
                        readonly name: "__vault";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 5823;
                        readonly src: "1332:7:25";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_IERC4626_$7076";
                            readonly typeString: "contract IERC4626";
                        };
                    }];
                    readonly id: 5830;
                    readonly kind: "baseConstructorSpecifier";
                    readonly modifierName: {
                        readonly id: 5828;
                        readonly name: "ERC4626Base";
                        readonly nameLocations: readonly ["1320:11:25"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 5679;
                        readonly src: "1320:11:25";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "1320:20:25";
                }];
                readonly name: "";
                readonly nameLocation: "-1:-1:-1";
                readonly parameters: {
                    readonly id: 5824;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 5820;
                        readonly mutability: "mutable";
                        readonly name: "_config";
                        readonly nameLocation: "1253:7:25";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 5833;
                        readonly src: "1223:37:25";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$7280_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig";
                        };
                        readonly typeName: {
                            readonly id: 5819;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 5818;
                                readonly name: "IHyperdrive.PoolConfig";
                                readonly nameLocations: readonly ["1223:11:25", "1235:10:25"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 7280;
                                readonly src: "1223:22:25";
                            };
                            readonly referencedDeclaration: 7280;
                            readonly src: "1223:22:25";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolConfig_$7280_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 5823;
                        readonly mutability: "mutable";
                        readonly name: "__vault";
                        readonly nameLocation: "1279:7:25";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 5833;
                        readonly src: "1270:16:25";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_IERC4626_$7076";
                            readonly typeString: "contract IERC4626";
                        };
                        readonly typeName: {
                            readonly id: 5822;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 5821;
                                readonly name: "IERC4626";
                                readonly nameLocations: readonly ["1270:8:25"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 7076;
                                readonly src: "1270:8:25";
                            };
                            readonly referencedDeclaration: 7076;
                            readonly src: "1270:8:25";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IERC4626_$7076";
                                readonly typeString: "contract IERC4626";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1213:79:25";
                };
                readonly returnParameters: {
                    readonly id: 5831;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1341:0:25";
                };
                readonly scope: 5967;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "public";
            }, {
                readonly id: 5951;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2044:1210:25";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 5950;
                    readonly nodeType: "Block";
                    readonly src: "2084:1170:25";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly id: 5849;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                                readonly id: 5843;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly expression: {
                                        readonly id: 5840;
                                        readonly name: "msg";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -15;
                                        readonly src: "2166:3:25";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_magic_message";
                                            readonly typeString: "msg";
                                        };
                                    };
                                    readonly id: 5841;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "2170:6:25";
                                    readonly memberName: "sender";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "2166:10:25";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "!=";
                                readonly rightExpression: {
                                    readonly id: 5842;
                                    readonly name: "_feeCollector";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13340;
                                    readonly src: "2180:13:25";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly src: "2166:27:25";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "&&";
                            readonly rightExpression: {
                                readonly id: 5848;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "UnaryOperation";
                                readonly operator: "!";
                                readonly prefix: true;
                                readonly src: "2197:21:25";
                                readonly subExpression: {
                                    readonly baseExpression: {
                                        readonly id: 5844;
                                        readonly name: "_pausers";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 13351;
                                        readonly src: "2198:8:25";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_mapping$_t_address_$_t_bool_$";
                                            readonly typeString: "mapping(address => bool)";
                                        };
                                    };
                                    readonly id: 5847;
                                    readonly indexExpression: {
                                        readonly expression: {
                                            readonly id: 5845;
                                            readonly name: "msg";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -15;
                                            readonly src: "2207:3:25";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_magic_message";
                                                readonly typeString: "msg";
                                            };
                                        };
                                        readonly id: 5846;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "2211:6:25";
                                        readonly memberName: "sender";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "2207:10:25";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    };
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "IndexAccess";
                                    readonly src: "2198:20:25";
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
                            readonly src: "2166:52:25";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 5856;
                        readonly nodeType: "IfStatement";
                        readonly src: "2162:116:25";
                        readonly trueBody: {
                            readonly id: 5855;
                            readonly nodeType: "Block";
                            readonly src: "2220:58:25";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 5850;
                                            readonly name: "IHyperdrive";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 7480;
                                            readonly src: "2241:11:25";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$7480_$";
                                                readonly typeString: "type(contract IHyperdrive)";
                                            };
                                        };
                                        readonly id: 5852;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "2253:12:25";
                                        readonly memberName: "Unauthorized";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 7434;
                                        readonly src: "2241:24:25";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 5853;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "2241:26:25";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 5854;
                                readonly nodeType: "RevertStatement";
                                readonly src: "2234:33:25";
                            }];
                        };
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly id: 5875;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                                readonly id: 5865;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly arguments: readonly [{
                                        readonly id: 5859;
                                        readonly name: "_target";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 5837;
                                        readonly src: "2378:7:25";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_IERC20_$6793";
                                            readonly typeString: "contract IERC20";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_contract$_IERC20_$6793";
                                            readonly typeString: "contract IERC20";
                                        }];
                                        readonly id: 5858;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "ElementaryTypeNameExpression";
                                        readonly src: "2370:7:25";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_address_$";
                                            readonly typeString: "type(address)";
                                        };
                                        readonly typeName: {
                                            readonly id: 5857;
                                            readonly name: "address";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "2370:7:25";
                                            readonly typeDescriptions: {};
                                        };
                                    };
                                    readonly id: 5860;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "typeConversion";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "2370:16:25";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "==";
                                readonly rightExpression: {
                                    readonly arguments: readonly [{
                                        readonly id: 5863;
                                        readonly name: "_baseToken";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 13293;
                                        readonly src: "2398:10:25";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_IERC20_$6793";
                                            readonly typeString: "contract IERC20";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_contract$_IERC20_$6793";
                                            readonly typeString: "contract IERC20";
                                        }];
                                        readonly id: 5862;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "ElementaryTypeNameExpression";
                                        readonly src: "2390:7:25";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_address_$";
                                            readonly typeString: "type(address)";
                                        };
                                        readonly typeName: {
                                            readonly id: 5861;
                                            readonly name: "address";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "2390:7:25";
                                            readonly typeDescriptions: {};
                                        };
                                    };
                                    readonly id: 5864;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "typeConversion";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "2390:19:25";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly src: "2370:39:25";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "||";
                            readonly rightExpression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                                readonly id: 5874;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly arguments: readonly [{
                                        readonly id: 5868;
                                        readonly name: "_target";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 5837;
                                        readonly src: "2433:7:25";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_IERC20_$6793";
                                            readonly typeString: "contract IERC20";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_contract$_IERC20_$6793";
                                            readonly typeString: "contract IERC20";
                                        }];
                                        readonly id: 5867;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "ElementaryTypeNameExpression";
                                        readonly src: "2425:7:25";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_address_$";
                                            readonly typeString: "type(address)";
                                        };
                                        readonly typeName: {
                                            readonly id: 5866;
                                            readonly name: "address";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "2425:7:25";
                                            readonly typeDescriptions: {};
                                        };
                                    };
                                    readonly id: 5869;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "typeConversion";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "2425:16:25";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "==";
                                readonly rightExpression: {
                                    readonly arguments: readonly [{
                                        readonly id: 5872;
                                        readonly name: "_vault";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 5478;
                                        readonly src: "2453:6:25";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_IERC4626_$7076";
                                            readonly typeString: "contract IERC4626";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_contract$_IERC4626_$7076";
                                            readonly typeString: "contract IERC4626";
                                        }];
                                        readonly id: 5871;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "ElementaryTypeNameExpression";
                                        readonly src: "2445:7:25";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_address_$";
                                            readonly typeString: "type(address)";
                                        };
                                        readonly typeName: {
                                            readonly id: 5870;
                                            readonly name: "address";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "2445:7:25";
                                            readonly typeDescriptions: {};
                                        };
                                    };
                                    readonly id: 5873;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "typeConversion";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "2445:15:25";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly src: "2425:35:25";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly src: "2370:90:25";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 5882;
                        readonly nodeType: "IfStatement";
                        readonly src: "2353:180:25";
                        readonly trueBody: {
                            readonly id: 5881;
                            readonly nodeType: "Block";
                            readonly src: "2471:62:25";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 5876;
                                            readonly name: "IHyperdrive";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 7480;
                                            readonly src: "2492:11:25";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$7480_$";
                                                readonly typeString: "type(contract IHyperdrive)";
                                            };
                                        };
                                        readonly id: 5878;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "2504:16:25";
                                        readonly memberName: "UnsupportedToken";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 7449;
                                        readonly src: "2492:28:25";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 5879;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "2492:30:25";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 5880;
                                readonly nodeType: "RevertStatement";
                                readonly src: "2485:37:25";
                            }];
                        };
                    }, {
                        readonly assignments: readonly [5884];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 5884;
                            readonly mutability: "mutable";
                            readonly name: "baseBalance";
                            readonly nameLocation: "2646:11:25";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 5950;
                            readonly src: "2638:19:25";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 5883;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2638:7:25";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 5892;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 5889;
                                    readonly name: "this";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -28;
                                    readonly src: "2689:4:25";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_ERC4626Target0_$5967";
                                        readonly typeString: "contract ERC4626Target0";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_contract$_ERC4626Target0_$5967";
                                        readonly typeString: "contract ERC4626Target0";
                                    }];
                                    readonly id: 5888;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "2681:7:25";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_address_$";
                                        readonly typeString: "type(address)";
                                    };
                                    readonly typeName: {
                                        readonly id: 5887;
                                        readonly name: "address";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "2681:7:25";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 5890;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "2681:13:25";
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
                                readonly expression: {
                                    readonly id: 5885;
                                    readonly name: "_baseToken";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13293;
                                    readonly src: "2660:10:25";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IERC20_$6793";
                                        readonly typeString: "contract IERC20";
                                    };
                                };
                                readonly id: 5886;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "2671:9:25";
                                readonly memberName: "balanceOf";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 6792;
                                readonly src: "2660:20:25";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_view$_t_address_$returns$_t_uint256_$";
                                    readonly typeString: "function (address) view external returns (uint256)";
                                };
                            };
                            readonly id: 5891;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2660:35:25";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "2638:57:25";
                    }, {
                        readonly assignments: readonly [5894];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 5894;
                            readonly mutability: "mutable";
                            readonly name: "vaultBalance";
                            readonly nameLocation: "2713:12:25";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 5950;
                            readonly src: "2705:20:25";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 5893;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2705:7:25";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 5902;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 5899;
                                    readonly name: "this";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -28;
                                    readonly src: "2753:4:25";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_ERC4626Target0_$5967";
                                        readonly typeString: "contract ERC4626Target0";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_contract$_ERC4626Target0_$5967";
                                        readonly typeString: "contract ERC4626Target0";
                                    }];
                                    readonly id: 5898;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "2745:7:25";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_address_$";
                                        readonly typeString: "type(address)";
                                    };
                                    readonly typeName: {
                                        readonly id: 5897;
                                        readonly name: "address";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "2745:7:25";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 5900;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "2745:13:25";
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
                                readonly expression: {
                                    readonly id: 5895;
                                    readonly name: "_vault";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 5478;
                                    readonly src: "2728:6:25";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IERC4626_$7076";
                                        readonly typeString: "contract IERC4626";
                                    };
                                };
                                readonly id: 5896;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "2735:9:25";
                                readonly memberName: "balanceOf";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 6792;
                                readonly src: "2728:16:25";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_view$_t_address_$returns$_t_uint256_$";
                                    readonly typeString: "function (address) view external returns (uint256)";
                                };
                            };
                            readonly id: 5901;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2728:31:25";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "2705:54:25";
                    }, {
                        readonly assignments: readonly [5904];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 5904;
                            readonly mutability: "mutable";
                            readonly name: "balance";
                            readonly nameLocation: "2859:7:25";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 5950;
                            readonly src: "2851:15:25";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 5903;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2851:7:25";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 5912;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 5909;
                                    readonly name: "this";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -28;
                                    readonly src: "2895:4:25";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_ERC4626Target0_$5967";
                                        readonly typeString: "contract ERC4626Target0";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_contract$_ERC4626Target0_$5967";
                                        readonly typeString: "contract ERC4626Target0";
                                    }];
                                    readonly id: 5908;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "2887:7:25";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_address_$";
                                        readonly typeString: "type(address)";
                                    };
                                    readonly typeName: {
                                        readonly id: 5907;
                                        readonly name: "address";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "2887:7:25";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 5910;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "2887:13:25";
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
                                readonly expression: {
                                    readonly id: 5905;
                                    readonly name: "_target";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 5837;
                                    readonly src: "2869:7:25";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IERC20_$6793";
                                        readonly typeString: "contract IERC20";
                                    };
                                };
                                readonly id: 5906;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "2877:9:25";
                                readonly memberName: "balanceOf";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 6792;
                                readonly src: "2869:17:25";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_view$_t_address_$returns$_t_uint256_$";
                                    readonly typeString: "function (address) view external returns (uint256)";
                                };
                            };
                            readonly id: 5911;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2869:32:25";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "2851:50:25";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 5920;
                                readonly name: "_feeCollector";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13340;
                                readonly src: "2948:13:25";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 5921;
                                readonly name: "balance";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 5904;
                                readonly src: "2963:7:25";
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
                                }];
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly id: 5916;
                                            readonly name: "_target";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 5837;
                                            readonly src: "2925:7:25";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_contract$_IERC20_$6793";
                                                readonly typeString: "contract IERC20";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_contract$_IERC20_$6793";
                                                readonly typeString: "contract IERC20";
                                            }];
                                            readonly id: 5915;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "2917:7:25";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_address_$";
                                                readonly typeString: "type(address)";
                                            };
                                            readonly typeName: {
                                                readonly id: 5914;
                                                readonly name: "address";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "2917:7:25";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 5917;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "2917:16:25";
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
                                        readonly id: 5913;
                                        readonly name: "ERC20";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 66576;
                                        readonly src: "2911:5:25";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_contract$_ERC20_$66576_$";
                                            readonly typeString: "type(contract ERC20)";
                                        };
                                    };
                                    readonly id: 5918;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "typeConversion";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "2911:23:25";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_ERC20_$66576";
                                        readonly typeString: "contract ERC20";
                                    };
                                };
                                readonly id: 5919;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "2935:12:25";
                                readonly memberName: "safeTransfer";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 66766;
                                readonly src: "2911:36:25";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_contract$_IERC20_$66654_$_t_address_$_t_uint256_$returns$__$attached_to$_t_contract$_IERC20_$66654_$";
                                    readonly typeString: "function (contract IERC20,address,uint256)";
                                };
                            };
                            readonly id: 5922;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2911:60:25";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 5923;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2911:60:25";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly id: 5942;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 5932;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly id: 5928;
                                            readonly name: "this";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -28;
                                            readonly src: "3096:4:25";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_contract$_ERC4626Target0_$5967";
                                                readonly typeString: "contract ERC4626Target0";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_contract$_ERC4626Target0_$5967";
                                                readonly typeString: "contract ERC4626Target0";
                                            }];
                                            readonly id: 5927;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "3088:7:25";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_address_$";
                                                readonly typeString: "type(address)";
                                            };
                                            readonly typeName: {
                                                readonly id: 5926;
                                                readonly name: "address";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "3088:7:25";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 5929;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "3088:13:25";
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
                                        readonly expression: {
                                            readonly id: 5924;
                                            readonly name: "_baseToken";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 13293;
                                            readonly src: "3067:10:25";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_contract$_IERC20_$6793";
                                                readonly typeString: "contract IERC20";
                                            };
                                        };
                                        readonly id: 5925;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "3078:9:25";
                                        readonly memberName: "balanceOf";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 6792;
                                        readonly src: "3067:20:25";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_external_view$_t_address_$returns$_t_uint256_$";
                                            readonly typeString: "function (address) view external returns (uint256)";
                                        };
                                    };
                                    readonly id: 5930;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "3067:35:25";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "!=";
                                readonly rightExpression: {
                                    readonly id: 5931;
                                    readonly name: "baseBalance";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 5884;
                                    readonly src: "3106:11:25";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "3067:50:25";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "||";
                            readonly rightExpression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 5941;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly id: 5937;
                                            readonly name: "this";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -28;
                                            readonly src: "3158:4:25";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_contract$_ERC4626Target0_$5967";
                                                readonly typeString: "contract ERC4626Target0";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_contract$_ERC4626Target0_$5967";
                                                readonly typeString: "contract ERC4626Target0";
                                            }];
                                            readonly id: 5936;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "3150:7:25";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_address_$";
                                                readonly typeString: "type(address)";
                                            };
                                            readonly typeName: {
                                                readonly id: 5935;
                                                readonly name: "address";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "3150:7:25";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 5938;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "3150:13:25";
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
                                        readonly expression: {
                                            readonly id: 5933;
                                            readonly name: "_vault";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 5478;
                                            readonly src: "3133:6:25";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_contract$_IERC4626_$7076";
                                                readonly typeString: "contract IERC4626";
                                            };
                                        };
                                        readonly id: 5934;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "3140:9:25";
                                        readonly memberName: "balanceOf";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 6792;
                                        readonly src: "3133:16:25";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_external_view$_t_address_$returns$_t_uint256_$";
                                            readonly typeString: "function (address) view external returns (uint256)";
                                        };
                                    };
                                    readonly id: 5939;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "3133:31:25";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "!=";
                                readonly rightExpression: {
                                    readonly id: 5940;
                                    readonly name: "vaultBalance";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 5894;
                                    readonly src: "3168:12:25";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "3133:47:25";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly src: "3067:113:25";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 5949;
                        readonly nodeType: "IfStatement";
                        readonly src: "3050:198:25";
                        readonly trueBody: {
                            readonly id: 5948;
                            readonly nodeType: "Block";
                            readonly src: "3191:57:25";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 5943;
                                            readonly name: "IHyperdrive";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 7480;
                                            readonly src: "3212:11:25";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$7480_$";
                                                readonly typeString: "type(contract IHyperdrive)";
                                            };
                                        };
                                        readonly id: 5945;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "3224:11:25";
                                        readonly memberName: "SweepFailed";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 7428;
                                        readonly src: "3212:23:25";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 5946;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "3212:25:25";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 5947;
                                readonly nodeType: "RevertStatement";
                                readonly src: "3205:32:25";
                            }];
                        };
                    }];
                };
                readonly documentation: {
                    readonly id: 5834;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1369:670:25";
                    readonly text: "@notice Transfers the contract's balance of a target token to the fee\n         collector address.\n @dev Some yield sources (e.g. Morpho) pay rewards directly to this\n      contract, but we can't handle distributing them internally. With\n      this in mind, we sweep the tokens to the fee collector address to\n      then redistribute to users.\n @dev WARN: It is unlikely but possible that there is a selector overlap\n      with 'transferFrom'. Any integrating contracts should be checked\n      for that, as it may result in an unexpected call from this address.\n @param _target The target token to sweep.";
                };
                readonly functionSelector: "01681a62";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "sweep";
                readonly nameLocation: "2053:5:25";
                readonly parameters: {
                    readonly id: 5838;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 5837;
                        readonly mutability: "mutable";
                        readonly name: "_target";
                        readonly nameLocation: "2066:7:25";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 5951;
                        readonly src: "2059:14:25";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_IERC20_$6793";
                            readonly typeString: "contract IERC20";
                        };
                        readonly typeName: {
                            readonly id: 5836;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 5835;
                                readonly name: "IERC20";
                                readonly nameLocations: readonly ["2059:6:25"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 6793;
                                readonly src: "2059:6:25";
                            };
                            readonly referencedDeclaration: 6793;
                            readonly src: "2059:6:25";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IERC20_$6793";
                                readonly typeString: "contract IERC20";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2058:16:25";
                };
                readonly returnParameters: {
                    readonly id: 5839;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2084:0:25";
                };
                readonly scope: 5967;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 5966;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3434:94:25";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 5965;
                    readonly nodeType: "Block";
                    readonly src: "3484:44:25";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 5961;
                                    readonly name: "_vault";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 5478;
                                    readonly src: "3513:6:25";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IERC4626_$7076";
                                        readonly typeString: "contract IERC4626";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_contract$_IERC4626_$7076";
                                        readonly typeString: "contract IERC4626";
                                    }];
                                    readonly expression: {
                                        readonly id: 5959;
                                        readonly name: "abi";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -1;
                                        readonly src: "3502:3:25";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_magic_abi";
                                            readonly typeString: "abi";
                                        };
                                    };
                                    readonly id: 5960;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "3506:6:25";
                                    readonly memberName: "encode";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "3502:10:25";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$";
                                        readonly typeString: "function () pure returns (bytes memory)";
                                    };
                                };
                                readonly id: 5962;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "3502:18:25";
                                readonly tryCall: false;
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
                                readonly id: 5958;
                                readonly name: "_revert";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 3145;
                                readonly src: "3494:7:25";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bytes memory) pure";
                                };
                            };
                            readonly id: 5963;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3494:27:25";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 5964;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "3494:27:25";
                    }];
                };
                readonly documentation: {
                    readonly id: 5952;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3281:148:25";
                    readonly text: "@notice Gets the ERC4626 compatible vault used as this pool's yield\n         source.\n @return The ERC4626 compatible yield source.";
                };
                readonly functionSelector: "fbfa77cf";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "vault";
                readonly nameLocation: "3443:5:25";
                readonly parameters: {
                    readonly id: 5953;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "3448:2:25";
                };
                readonly returnParameters: {
                    readonly id: 5957;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 5956;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 5966;
                        readonly src: "3474:8:25";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_IERC4626_$7076";
                            readonly typeString: "contract IERC4626";
                        };
                        readonly typeName: {
                            readonly id: 5955;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 5954;
                                readonly name: "IERC4626";
                                readonly nameLocations: readonly ["3474:8:25"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 7076;
                                readonly src: "3474:8:25";
                            };
                            readonly referencedDeclaration: 7076;
                            readonly src: "3474:8:25";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IERC4626_$7076";
                                readonly typeString: "contract IERC4626";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3473:10:25";
                };
                readonly scope: 5967;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 5809;
                    readonly name: "HyperdriveTarget0";
                    readonly nameLocations: readonly ["965:17:25"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 3146;
                    readonly src: "965:17:25";
                };
                readonly id: 5810;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "965:17:25";
            }, {
                readonly baseName: {
                    readonly id: 5811;
                    readonly name: "ERC4626Base";
                    readonly nameLocations: readonly ["984:11:25"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 5679;
                    readonly src: "984:11:25";
                };
                readonly id: 5812;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "984:11:25";
            }];
            readonly canonicalName: "ERC4626Target0";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly documentation: {
                readonly id: 5808;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "498:440:25";
                readonly text: "@author DELV\n @title ERC4626Target0\n @notice ERC4626Hyperdrive's target0 logic contract. This contract contains\n         all of the getters for Hyperdrive as well as some stateful\n         functions.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance.";
            };
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [5967, 5679, 3146, 10186, 13270, 11906, 11031, 12387, 8790, 9728, 13478, 67358, 7924, 8482, 8230, 8570];
            readonly name: "ERC4626Target0";
            readonly nameLocation: "947:14:25";
            readonly scope: 5968;
            readonly usedErrors: readonly [7345, 7351, 7354, 7363, 7375, 7378, 7387, 7390, 7393, 7402, 7420, 7425, 7428, 7434, 7449, 66733, 67014, 67019, 67022, 67303];
            readonly usedEvents: readonly [7773, 7788, 7805, 7818, 7835, 7854, 7871, 7888, 7901, 7908, 7913, 7918, 7923, 8463, 8472, 8481];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 25;
};
//# sourceMappingURL=ERC4626Target0.d.ts.map