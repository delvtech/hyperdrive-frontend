export declare const ERC4626Target0: {
    readonly abi: readonly [{
        readonly inputs: readonly [{
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
            readonly name: "_config";
            readonly type: "tuple";
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
        readonly inputs: readonly [];
        readonly name: "InvalidERC20Bridge";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidFeeDestination";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidPresentValue";
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
        readonly name: "UnsafeCastToInt256";
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
            readonly internalType: "address";
            readonly name: "destination";
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
            readonly internalType: "address";
            readonly name: "destination";
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
            readonly name: "basePayment";
            readonly type: "uint256";
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
            readonly name: "checkpointVaultSharePrice";
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
            readonly name: "newFeeCollector";
            readonly type: "address";
        }];
        readonly name: "FeeCollectorUpdated";
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
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "status";
            readonly type: "bool";
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
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "destination";
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
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "destination";
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
            readonly name: "collector";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "target";
            readonly type: "address";
        }];
        readonly name: "Sweep";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newSweepCollector";
            readonly type: "address";
        }];
        readonly name: "SweepCollectorUpdated";
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
        readonly name: "setFeeCollector";
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
            readonly internalType: "address";
            readonly name: "_who";
            readonly type: "address";
        }];
        readonly name: "setSweepCollector";
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
        readonly object: "0x6102406040523480156200001257600080fd5b5060405162004416380380620044168339810160408190526200003591620001e1565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c05260c0808501516101e0526101008086015190915260e0808601519052610120808601519091529184018051519092528151015161014090815281516040908101516101609081529251606090810151610180908152918601518516610200528501516102205290840151600a80546001600160a01b03199081169286169290921790559184015160088054841691851691909117905590920151600980549093169116179055620002d4565b6040516101c081016001600160401b03811182821017156200014957634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200016757600080fd5b919050565b6000608082840312156200017f57600080fd5b604051608081016001600160401b0381118282101715620001b057634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60006102208284031215620001f557600080fd5b620001ff62000117565b6200020a836200014f565b81526200021a602084016200014f565b60208201526200022d604084016200014f565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152506101406200028c8185016200014f565b90820152610160620002a08482016200014f565b90820152610180620002b48482016200014f565b908201526101a0620002c9858583016200016c565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e0516102005161022051614023620003f360003960008181610b440152611afd015260008181610b1d0152611ac0015260008181610bbe0152611cb5015260008181610b980152611c8f015260008181610b6e0152611c6901526000610cee01526000610cc901526000610ca401526000610c81015260008181610c310152611cdb015260008181610be401528181610e6f0152612370015260008181610c0a015261263e01526000818161054701528181610af1015281816120d4015281816122b1015281816125250152818161258b015261261001526000818161064f01528181610acc0152610e1601526140236000f3fe608060405234801561001057600080fd5b50600436106101fa5760003560e01c80637180c8ca1161011a578063becee9c3116100ad578063d81657431161007c578063d816574314610470578063e44808bc14610485578063e4af29d114610498578063e985e9c5146104ab578063fba56008146104be57600080fd5b8063becee9c31461042d578063c55dae631461044d578063c69e16ad14610455578063cf210e651461045d57600080fd5b8063a42dce80116100e9578063a42dce80146103df578063ab033ea9146103f2578063b0d9658014610405578063bd85b0391461041a57600080fd5b80637180c8ca146103935780637ecebe00146103a65780639cd241af146103b9578063a22cb465146103cc57600080fd5b806321ff32a91161019257806346fbf68e1161016157806346fbf68e146103355780634e41a1fb146103585780634ed2d6ac1461036b57806360246c881461037e57600080fd5b806321ff32a9146102d4578063313ce567146102f55780633656eec21461030f5780633e691db91461032257600080fd5b806314e5f07b116101ce57806314e5f07b1461027057806317fad7fc146102835780631c0f12b61461029657806320fc4881146102a957600080fd5b8062ad800c146101ff57806301681a621461022857806302329a291461023d5780630a4e149314610250575b600080fd5b61021261020d36600461351b565b6104ed565b60405161021f9190613584565b60405180910390f35b61023b6102363660046135ac565b610524565b005b61023b61024b3660046135d7565b610530565b610258610539565b6040516001600160a01b03909116815260200161021f565b61023b61027e366004613603565b61057c565b61023b6102913660046136d7565b610598565b61023b6102a436600461376c565b6105ae565b6102bc6102b736600461351b565b6105c1565b60405190516001600160801b0316815260200161021f565b6102e76102e23660046137b4565b610602565b60405190815260200161021f565b6102fd610648565b60405160ff909116815260200161021f565b6102e761031d3660046137f6565b6106e3565b6102e7610330366004613826565b61071c565b6103486103433660046135ac565b610727565b604051901515815260200161021f565b61021261036636600461351b565b61075d565b61023b610379366004613861565b61076b565b6103866107b9565b60405161021f91906138ab565b61023b6103a136600461394c565b6109e6565b6102e76103b43660046135ac565b6109f4565b61023b6103c736600461397a565b610a20565b61023b6103da36600461394c565b610a31565b61023b6103ed3660046135ac565b610a9d565b61023b6104003660046135ac565b610aa6565b61040d610aaf565b60405161021f91906139b2565b6102e761042836600461351b565b610d2b565b61044061043b366004613ac6565b610d4d565b60405161021f9190613b08565b610258610e08565b6102e7610e48565b6102e761046b36600461351b565b610e62565b610478610eab565b60405161021f9190613b4c565b61023b610493366004613c5d565b610fb7565b61023b6104a63660046135ac565b610fff565b6103486104b9366004613cbc565b611008565b6104c661104c565b6040805182516001600160801b03908116825260209384015116928101929092520161021f565b606061051f6104fb836110ab565b60405160200161050b9190613584565b6040516020818303038152906040526111d3565b919050565b61052d816111f7565b50565b61052d8161136d565b604080516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000166020820152600091610579910161050b565b90565b61058d8989898989898989896113f0565b505050505050505050565b6105a68686868686866115e7565b505050505050565b6105bb848484843361169b565b50505050565b60408051602081019091526000815261051f6007600084815260200190815260200160002060405160200161050b91546001600160801b0316815260200190565b60008381526010602090815260408083206001600160a01b0386811685529083528184209085168452825280832054815192830152610641910161050b565b9392505050565b60006105797f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156106ab573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106cf9190613cea565b6040805160ff90921660208301520161050b565b6000828152600d602090815260408083206001600160a01b0385168452825280832054815192830152610716910161050b565b92915050565b60006107168261185c565b6001600160a01b0381166000908152600c6020908152604080832054905161051f9261050b9260ff169101901515815260200190565b606061051f6104fb83611984565b8361077581611a82565b6001600160a01b0316336001600160a01b0316146107a657604051632aab8bd360e01b815260040160405180910390fd5b6107b285858585611b3f565b5050505050565b610832604051806101e001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b600061083c611bac565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b03909216916108a79190613d33565b6108b19190613d46565b905060008083116108c35760006108de565b6108de836108d86108d386611bc4565b611d5a565b90611d8a565b604080516101e0810182526001546001600160801b038082168352600354600f81900b60208501526005546001600160701b036201000082041695850195909552600160801b9485900482166060850152918490048116608084015260a0830187905260c08301889052600254849004811660e0840152600454808216610100850152918490048116610120840152908390048116610140830152600654808216610160840152929092049091166101808201529091506000906101a0810184156109b2576109ad8486611d9f565b6109b5565b60005b81526002546001600160801b03166020918201526040519192506109df9161050b918491016138ab565b5050505090565b6109f08282611db4565b5050565b6001600160a01b03811660009081526011602090815260408083205481519283015261051f910161050b565b610a2c83838333611b3f565b505050565b336000818152600f602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b61052d81611e3d565b61052d81611eb1565b610ab761344b565b604080516101c0810182526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811682527f000000000000000000000000000000000000000000000000000000000000000081166020808401919091527f00000000000000000000000000000000000000000000000000000000000000008216838501527f00000000000000000000000000000000000000000000000000000000000000006060808501919091527f00000000000000000000000000000000000000000000000000000000000000006080808601919091527f000000000000000000000000000000000000000000000000000000000000000060a08601527f000000000000000000000000000000000000000000000000000000000000000060c08601527f000000000000000000000000000000000000000000000000000000000000000060e08601527f00000000000000000000000000000000000000000000000000000000000000006101008601527f0000000000000000000000000000000000000000000000000000000000000000610120860152600a5484166101408601526008548416610160860152600954909316610180850152845192830185527f000000000000000000000000000000000000000000000000000000000000000083527f0000000000000000000000000000000000000000000000000000000000000000838301527f0000000000000000000000000000000000000000000000000000000000000000838601527f0000000000000000000000000000000000000000000000000000000000000000908301526101a083019190915291516105799261050b9291016139b2565b6000818152600e602090815260408083205481519283015261051f910161050b565b606060008267ffffffffffffffff811115610d6a57610d6a613d59565b604051908082528060200260200182016040528015610d93578160200160208202803683370190505b50905060005b83811015610dec576000858583818110610db557610db5613d6f565b90506020020135905060008154905080848481518110610dd757610dd7613d6f565b60209081029190910101525050600101610d99565b50610e018160405160200161050b9190613b08565b5092915050565b604080516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000166020820152600091610579910161050b565b6000610579600b5460405160200161050b91815260200190565b600061051f610e99610e947f000000000000000000000000000000000000000000000000000000000000000085613d33565b611f25565b60405160200161050b91815260200190565b6040805161018081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810191909152610579600160405160200161050b919081546001600160801b038082168352608091821c602084015260018401548082166040850152821c60608401526002840154600f81900b83850152821c60a0840152600384015490811660c0840152811c60e083015260049092015460ff8082161515610100840152600882901c1615156101208301526001600160701b03601082901c1661014083015290911c6101608201526101800190565b84610fc181611a82565b6001600160a01b0316336001600160a01b031614610ff257604051632aab8bd360e01b815260040160405180910390fd5b6105a6868686868661169b565b61052d81611f69565b6001600160a01b038281166000908152600f60209081526040808320938516835292815282822054835160ff9091161515918101919091529091610716910161050b565b60408051808201909152600080825260208201526040805180820182526006546001600160801b03808216808452600160801b90920481166020938401908152845193840192909252905116918101919091526105799060600161050b565b606060f882901c6001600160f81b03831660006110c782611fdd565b905060008360038111156110dd576110dd613d07565b0361110f576040518060400160405280600d81526020016c048797065726472697665204c5609c1b81525093506111cb565b600183600381111561112357611123613d07565b0361114f57806040516020016111399190613d85565b60405160208183030381529060405293506111cb565b600283600381111561116357611163613d07565b0361117957806040516020016111399190613dbe565b600383600381111561118d5761118d613d07565b036111cb576040518060400160405280601b81526020017f48797065726472697665205769746864726177616c205368617265000000000081525093505b505050919050565b80604051636e64089360e11b81526004016111ee9190613584565b60405180910390fd5b6111ff612092565b600954336000908152600c60205260409020546001600160a01b039091169060ff161580156112375750336001600160a01b03821614155b801561124e5750600a546001600160a01b03163314155b1561126b576040516282b42960e81b815260040160405180910390fd5b60006112756120bc565b6040516370a0823160e01b81523060048201529091506000906001600160a01b038516906370a0823190602401602060405180830381865afa1580156112bf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112e39190613df8565b90506112f96001600160a01b0385168483612147565b816113026120bc565b14611320576040516313dd85ff60e31b815260040160405180910390fd5b836001600160a01b0316836001600160a01b03167f951f51ee88c8e42633698bba90d1e53c0954470938036879e691c0232b47e09660405160405180910390a350505061052d6001600055565b336000908152600c602052604090205460ff1661139c576040516282b42960e81b815260040160405180910390fd5b600580548215156101000261ff00199091161790556040517f7c4d1fe30fdbfda9e9c4c43e759ef32e4db5128d4cb58ff3ae9583b89b6242a5906113e590831515815260200190565b60405180910390a150565b834211156114115760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b0387166114385760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b0387811660008181526011602090815260408083205481518084018f905280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b61010083015261010282018c90526101228201526101420160408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa158015611526573d6000803e3d6000fd5b505050602060405103519050886001600160a01b0316816001600160a01b03161461156457604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b03898116600081815260116020908152604080832080546001019055600f8252808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050505050505050505050565b6001600160a01b038616158061160457506001600160a01b038516155b156116225760405163f0dd15fd60e01b815260040160405180910390fd5b8281146116425760405163174861a760e31b815260040160405180910390fd5b60005b838110156116925761168a85858381811061166257611662613d6f565b90506020020135888886868681811061167d5761167d613d6f565b905060200201353361169b565b600101611645565b50505050505050565b6001600160a01b03841615806116b857506001600160a01b038316155b156116d65760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b03161461179a576001600160a01b038085166000908152600f602090815260408083209385168352929052205460ff1661179a5760008581526010602090815260408083206001600160a01b038089168552908352818420908516845290915290205460001981146117985760008681526010602090815260408083206001600160a01b03808a168552908352818420908616845290915281208054859290611792908490613d46565b90915550505b505b6000858152600d602090815260408083206001600160a01b0388168452909152812080548492906117cc908490613d46565b90915550506000858152600d602090815260408083206001600160a01b038716845290915281208054849290611803908490613d33565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b6000611866612092565b61186f82612199565b6008546001600160a01b03168061188960208501856135ac565b6001600160a01b0316146118b057604051630ad13b3360e21b815260040160405180910390fd5b336000908152600c602052604090205460ff161580156118d95750336001600160a01b03821614155b80156118f05750600a546001600160a01b03163314155b1561190d576040516282b42960e81b815260040160405180910390fd5b6000611917611bac565b600b8054600090915590915061192e8183876121cf565b9350826001600160a01b03167fa4bafc79b3f9fdba2427cd386f1fbc7d8779e9fd7229f6220d53bc04d3901e47611966868589612269565b60405190815260200160405180910390a250505061051f6001600055565b606060f882901c6001600160f81b03831660006119a082611fdd565b905060008360038111156119b6576119b6613d07565b036119e8576040518060400160405280600d81526020016c0485950455244524956452d4c5609c1b81525093506111cb565b60018360038111156119fc576119fc613d07565b03611a1257806040516020016111399190613e11565b6002836003811115611a2657611a26613d07565b03611a3c57806040516020016111399190613e49565b6003836003811115611a5057611a50613d07565b036111cb57505060408051808201909152600d81526c485950455244524956452d575360981b60208201529392505050565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b60008481526010602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b6000611bbf670de0b6b3a7640000612298565b905090565b611c286040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526002540482166101008201526004549091610120830191611d209116612325565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192611d5292900416612325565b905292915050565b6000806000611d688461239b565b9150915080610e0157604051635516328b60e11b815260040160405180910390fd5b60006106418383670de0b6b3a7640000612428565b600061064183670de0b6b3a764000084612428565b600a546001600160a01b03163314611dde576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0382166000818152600c6020908152604091829020805460ff191685151590811790915591519182527f902923dcd4814f6cef7005a70e01d5cf2035ab02d4523ef3b865f1d7bab885af910160405180910390a25050565b600a546001600160a01b03163314611e67576040516282b42960e81b815260040160405180910390fd5b600880546001600160a01b0319166001600160a01b0383169081179091556040517fe5693914d19c789bdee50a362998c0bc8d035a835f9871da5d51152f0582c34f90600090a250565b600a546001600160a01b03163314611edb576040516282b42960e81b815260040160405180910390fd5b600a80546001600160a01b0319166001600160a01b0383169081179091556040517f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab90600090a250565b6000611f4d600e6000611f39600286612446565b81526020019081526020016000205461247b565b611f5f600e6000611f39600187612446565b6107169190613e75565b600a546001600160a01b03163314611f93576040516282b42960e81b815260040160405180910390fd5b600980546001600160a01b0319166001600160a01b0383169081179091556040517fc049058b1df2dd8902739ceb78992df12fa8369c06c450b3c6787137b452fdd290600090a250565b60408051604e80825260808201909252606091906000908260208201818036833701905050905060005b841561208457612018600a86613eab565b612023906030613d33565b60f81b8260016120338487613d46565b61203d9190613d46565b8151811061204d5761204d613d6f565b60200101906001600160f81b031916908160001a9053508061206e81613ebf565b915061207d9050600a86613ed8565b9450612007565b918290030190815292915050565b6002600054036120b557604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b6040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015612123573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611bbf9190613df8565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610a2c9084906124a9565b60006121a860208301836135ac565b6001600160a01b03160361052d5760405163f0dd15fd60e01b815260040160405180910390fd5b6000806121dc8585611d8a565b90506121e78161250c565b9450846000036121fb576000915050610641565b61220b60408401602085016135d7565b1561223a576122338561222160208601866135ac565b61222e6040870187613eec565b61255c565b9150612261565b61225d8561224b60208601866135ac565b6122586040870187613eec565b612603565b8491505b509392505050565b600061227b60408301602084016135d7565b15612287575082610641565b6122918484611d8a565b9050610641565b6040516303d1689d60e11b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906307a2d13a906024015b602060405180830381865afa158015612301573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107169190613df8565b600080670de0b6b3a7640000612339612637565b6123439190613f33565b905080831161235357600061235d565b61235d8184613d46565b9150610641612394670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613f33565b8390611d9f565b60008060008060006123ac8661266d565b91509150806123c357506000958695509350505050565b6123d08660a0015161247b565b6123d9876129a7565b836123e7896000015161247b565b6123f19190613f4a565b6123fb9190613f4a565b6124059190613e75565b92505050600081121561241e5750600093849350915050565b9360019350915050565b600082600019048411830215820261243f57600080fd5b5091020490565b60006001600160f81b038211156124705760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60006001600160ff1b038211156124a55760405163396ea70160e11b815260040160405180910390fd5b5090565b60006124be6001600160a01b03841683612a0b565b905080516000141580156124e35750808060200190518101906124e19190613f6a565b155b15610a2c57604051635274afe760e01b81526001600160a01b03841660048201526024016111ee565b6040516363737ac960e11b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063c6e6f592906024016122e4565b604051635d043b2960e11b8152600481018590526001600160a01b0384811660248301523060448301526000917f00000000000000000000000000000000000000000000000000000000000000009091169063ba087652906064016020604051808303816000875af11580156125d6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906125fa9190613df8565b95945050505050565b6105bb6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168486612147565b60006126637f000000000000000000000000000000000000000000000000000000000000000042613eab565b611bbf9042613d46565b6000806000612697612692856101600151866101400151611d8a90919063ffffffff16565b61247b565b6126b7612692866101200151876101000151612a1990919063ffffffff16565b6126c19190613e75565b90506000806126d886600001518760200151612a2e565b91509150806126ef57506000958695509350505050565b600083131561283f576000839050600061273d886000015189602001518a604001518b60a001518c60e00151670de0b6b3a764000061272e9190613d46565b8d606001518e60800151612a6d565b9350905082612756575060009788975095505050505050565b8181106127f4576000612790858a60400151858c60e00151670de0b6b3a76400006127819190613d46565b8d606001518e60800151612b7f565b94509050831580156127a557508860c0015183105b156127bc5750600098600198509650505050505050565b836127d257506000988998509650505050505050565b6127db8161247b565b6127e490613f87565b9960019950975050505050505050565b600088602001511261282b576128138860a00151856126929190613d46565b61281c90613f87565b98600198509650505050505050565b60a088015188516128139161269291613d46565b600083121561299857600061285384613f87565b905060006128878489604001518a60e00151670de0b6b3a76400006128789190613d46565b8b606001518c60800151612c42565b93509050826128a0575060009788975095505050505050565b8181106129255760006128da858a60400151858c60e00151670de0b6b3a76400006128cb9190613d46565b8d606001518e60800151612cee565b94509050831580156128ef57508860c0015183105b156129065750600098600198509650505050505050565b8361291c57506000988998509650505050505050565b6127e48161247b565b6000612957858a604001518b60e00151670de0b6b3a76400006129489190613d46565b8c606001518d60800151612dc5565b945090508361297157506000988998509650505050505050565b6127e461298e8a6060015184866129889190613d46565b90611d9f565b6126929083613d33565b50600095600195509350505050565b60006129da612692836101200151670de0b6b3a76400006129c89190613d46565b60608501516101008601519190612e74565b611f5f612692846101600151670de0b6b3a76400006129f99190613d46565b60608601516101408701519190612428565b606061064183836000612e9a565b60006106418383670de0b6b3a7640000612e74565b600080600083612a3d8661247b565b612a479190613e75565b90506000811215612a5f576000809250925050612a66565b9150600190505b9250929050565b6000806000881215612a8f57612a8288613f87565b612a8c9087613d33565b95505b600080612a9c8b8b612a2e565b9150915080612ab357600080935093505050612b73565b6000612ac2838b8a8a8a612f37565b90506000612ae5612add8a612ad78a8e612a19565b90612f66565b899089612e74565b905080821015612aff576000809550955050505050612b73565b808203670de0b6b3a76400008110612b3457612b2d612b26670de0b6b3a76400008c611d9f565b8290612f66565b9050612b4c565b612b49612b26670de0b6b3a76400008c612fd1565b90505b8b811015612b6557600080965096505050505050612b73565b8b9003955060019450505050505b97509795505050505050565b6000806000612b918989888888612fe6565b9050612ba186612ad7898b613d33565b975087811015612bb8576000809250925050612c37565b878103612bc6818688612e74565b9050670de0b6b3a76400008110612bf357612bec612b26670de0b6b3a764000089612fd1565b9050612c0b565b612c08612b26670de0b6b3a764000089611d9f565b90505b612c158186612fd1565b9050808a1015612c2d57600080935093505050612c37565b8903925060019150505b965096945050505050565b6000806000612c548888888888612fe6565b90506000612c7f670de0b6b3a7640000612c6e8888611d9f565b612c789190613d33565b8390612fd1565b9050670de0b6b3a76400008110612cac57612ca5612b26670de0b6b3a764000089612fd1565b9050612cc4565b612cc1612b26670de0b6b3a764000089611d9f565b90505b80881015612cda57600080935093505050612ce4565b8703925060019150505b9550959350505050565b6000806000612d008989888888612fe6565b905086881015612d17576000809250925050612c37565b9686900396612d268887612f66565b975087811015612d3d576000809250925050612c37565b878103612d4b818688612e74565b9050670de0b6b3a76400008110612d7857612d71612b26670de0b6b3a764000089612fd1565b9050612d90565b612d8d612b26670de0b6b3a764000089611d9f565b90505b612d9a8186612fd1565b905089811015612db257600080935093505050612c37565b9890980398600198509650505050505050565b6000806000612dd78888888888612f37565b90506000612dfb670de0b6b3a7640000612df18888612fd1565b6123949190613d33565b9050670de0b6b3a76400008110612e2857612e21612b26670de0b6b3a764000089611d9f565b9050612e40565b612e3d612b26670de0b6b3a764000089612fd1565b90505b612e4a8186611d9f565b905088811015612e6257600080935093505050612ce4565b97909703976001975095505050505050565b6000826000190484118302158202612e8b57600080fd5b50910281810615159190040190565b606081471015612ebf5760405163cd78605960e01b81523060048201526024016111ee565b600080856001600160a01b03168486604051612edb9190613fa3565b60006040518083038185875af1925050503d8060008114612f18576040519150601f19603f3d011682016040523d82523d6000602084013e612f1d565b606091505b5091509150612f2d86838361300b565b9695505050505050565b6000612f438585612f66565b612f5c612f5486612ad7868b611d8a565b859085612428565b612f2d9190613d33565b600081600003612f7f5750670de0b6b3a7640000610716565b82600003612f8f57506000610716565b6000612f9a8361247b565b90506000612faf612faa8661247b565b613067565b9050818102612fc6670de0b6b3a764000082613fbf565b9050612f2d8161328d565b600061064183670de0b6b3a764000084612e74565b6000612ff28585612f66565b612f5c61300386612ad7868b612a19565b859085612e74565b6060826130205761301b82613422565b610641565b815115801561303757506001600160a01b0384163b155b1561306057604051639996b31560e01b81526001600160a01b03851660048201526024016111ee565b5080610641565b60008082136130895760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f1982019061310c9084901c61247b565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e1982136132a857506000919050565b680755bf798b4a1bf1e582126132d1576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190612f2d74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c61247b565b8051156134325780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b604051806101c0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b031681526020016000801916815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b031681526020016135166040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b60006020828403121561352d57600080fd5b5035919050565b60005b8381101561354f578181015183820152602001613537565b50506000910152565b60008151808452613570816020860160208601613534565b601f01601f19169290920160200192915050565b6020815260006106416020830184613558565b6001600160a01b038116811461052d57600080fd5b6000602082840312156135be57600080fd5b813561064181613597565b801515811461052d57600080fd5b6000602082840312156135e957600080fd5b8135610641816135c9565b60ff8116811461052d57600080fd5b60008060008060008060008060006101208a8c03121561362257600080fd5b8935985060208a0135975060408a013561363b81613597565b965060608a013561364b81613597565b955060808a013561365b816135c9565b945060a08a0135935060c08a0135613672816135f4565b8093505060e08a013591506101008a013590509295985092959850929598565b60008083601f8401126136a457600080fd5b50813567ffffffffffffffff8111156136bc57600080fd5b6020830191508360208260051b8501011115612a6657600080fd5b600080600080600080608087890312156136f057600080fd5b86356136fb81613597565b9550602087013561370b81613597565b9450604087013567ffffffffffffffff8082111561372857600080fd5b6137348a838b01613692565b9096509450606089013591508082111561374d57600080fd5b5061375a89828a01613692565b979a9699509497509295939492505050565b6000806000806080858703121561378257600080fd5b84359350602085013561379481613597565b925060408501356137a481613597565b9396929550929360600135925050565b6000806000606084860312156137c957600080fd5b8335925060208401356137db81613597565b915060408401356137eb81613597565b809150509250925092565b6000806040838503121561380957600080fd5b82359150602083013561381b81613597565b809150509250929050565b60006020828403121561383857600080fd5b813567ffffffffffffffff81111561384f57600080fd5b82016060818503121561064157600080fd5b6000806000806080858703121561387757600080fd5b84359350602085013561388981613597565b92506040850135915060608501356138a081613597565b939692955090935050565b815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160808301519082015261018080830151908201526101a080830151908201526101c091820151918101919091526101e00190565b6000806040838503121561395f57600080fd5b823561396a81613597565b9150602083013561381b816135c9565b60008060006060848603121561398f57600080fd5b8335925060208401356139a181613597565b929592945050506040919091013590565b81516001600160a01b03168152610220810160208301516139de60208401826001600160a01b03169052565b5060408301516139f960408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525061014080840151613a5f828501826001600160a01b03169052565b5050610160838101516001600160a01b038116848301525050610180838101516001600160a01b0381168483015250506101a08381015180518483015260208101516101c085015260408101516101e085015260608101516102008501525b505092915050565b60008060208385031215613ad957600080fd5b823567ffffffffffffffff811115613af057600080fd5b613afc85828601613692565b90969095509350505050565b6020808252825182820181905260009190848201906040850190845b81811015613b4057835183529284019291840191600101613b24565b50909695505050505050565b81516001600160801b0316815261018081016020830151613b7860208401826001600160801b03169052565b506040830151613b9360408401826001600160801b03169052565b506060830151613bae60608401826001600160801b03169052565b506080830151613bc36080840182600f0b9052565b5060a0830151613bde60a08401826001600160801b03169052565b5060c0830151613bf960c08401826001600160801b03169052565b5060e0830151613c1460e08401826001600160801b03169052565b506101008381015115159083015261012080840151151590830152610140808401516001600160701b031690830152610160808401516001600160801b03811682850152613abe565b600080600080600060a08688031215613c7557600080fd5b853594506020860135613c8781613597565b93506040860135613c9781613597565b9250606086013591506080860135613cae81613597565b809150509295509295909350565b60008060408385031215613ccf57600080fd5b8235613cda81613597565b9150602083013561381b81613597565b600060208284031215613cfc57600080fd5b8151610641816135f4565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b8082018082111561071657610716613d1d565b8181038181111561071657610716613d1d565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b700243cb832b9323934bb32902637b7339d1607d1b815260008251613db1816011850160208701613534565b9190910160110192915050565b710243cb832b9323934bb329029b437b93a1d160751b815260008251613deb816012850160208701613534565b9190910160120192915050565b600060208284031215613e0a57600080fd5b5051919050565b6f242ca822a9222924ab2296a627a7239d60811b815260008251613e3c816010850160208701613534565b9190910160100192915050565b70242ca822a9222924ab2296a9a427a92a1d60791b815260008251613db1816011850160208701613534565b8181036000831280158383131683831282161715610e0157610e01613d1d565b634e487b7160e01b600052601260045260246000fd5b600082613eba57613eba613e95565b500690565b600060018201613ed157613ed1613d1d565b5060010190565b600082613ee757613ee7613e95565b500490565b6000808335601e19843603018112613f0357600080fd5b83018035915067ffffffffffffffff821115613f1e57600080fd5b602001915036819003821315612a6657600080fd5b808202811582820484141761071657610716613d1d565b8082018281126000831280158216821582161715613abe57613abe613d1d565b600060208284031215613f7c57600080fd5b8151610641816135c9565b6000600160ff1b8201613f9c57613f9c613d1d565b5060000390565b60008251613fb5818460208701613534565b9190910192915050565b600082613fce57613fce613e95565b600160ff1b821460001984141615613fe857613fe8613d1d565b50059056fea264697066735822122046389dc0e77800202751cf0d5803496b478d265f49fc141019c996a69564ae2664736f6c63430008140033";
        readonly sourceMap: "692:275:46:-:0;;;871:94;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1713:1:169;1917:7;:21;5227:17:118;;-1:-1:-1;;;;;5214:30:118;;;;;;;5274:24;;;;;5254:44;;;;;;5388:30;;;;5362:56;;;;5841:28;;;;5817:52;;6157:32;;;;;6129:60;;6372:26;;;;;6350:48;;;-1:-1:-1;6428:24:118;;;;6408:44;;-1:-1:-1;6477:19:118;;;;6462:34;;;6561:12;;;;;:18;6549:30;;;6600:12;;:17;;6589:28;;;;6646:12;;-1:-1:-1;6646:25:118;;;;6627:44;;;;6704:12;;-1:-1:-1;6704:29:118;;;;6681:52;;;;-1:-1:-1;;;6810:21:118;6793:38;;;;-1:-1:-1;;6859:22:118;6841:40;;6984:18;;;;6970:11;:32;;-1:-1:-1;;;;;;6970:32:118;;;;;;;;;;;;7028:20;;;;7012:13;:36;;;;;;;;;;;;;7076:22;;;;7058:15;:40;;;;;;;;;;692:275:46;;14:347:234;81:2;75:9;123:6;111:19;;-1:-1:-1;;;;;145:34:234;;181:22;;;142:62;139:185;;;246:10;241:3;237:20;234:1;227:31;281:4;278:1;271:15;309:4;306:1;299:15;139:185;340:2;333:22;14:347;:::o;366:185::-;453:13;;-1:-1:-1;;;;;495:31:234;;485:42;;475:70;;541:1;538;531:12;475:70;366:185;;;:::o;556:681::-;618:5;666:4;654:9;649:3;645:19;641:30;638:50;;;684:1;681;674:12;638:50;717:2;711:9;759:4;747:17;;-1:-1:-1;;;;;779:34:234;;815:22;;;776:62;773:185;;;880:10;875:3;871:20;868:1;861:31;915:4;912:1;905:15;943:4;940:1;933:15;773:185;978:10;974:2;967:22;;1007:6;998:15;;1043:9;1037:16;1029:6;1022:32;1108:2;1097:9;1093:18;1087:25;1082:2;1074:6;1070:15;1063:50;1167:2;1156:9;1152:18;1146:25;1141:2;1133:6;1129:15;1122:50;1226:2;1215:9;1211:18;1205:25;1200:2;1192:6;1188:15;1181:50;;556:681;;;;:::o;1242:1405::-;1341:6;1394:3;1382:9;1373:7;1369:23;1365:33;1362:53;;;1411:1;1408;1401:12;1362:53;1437:17;;:::i;:::-;1477:48;1515:9;1477:48;:::i;:::-;1470:5;1463:63;1558:57;1611:2;1600:9;1596:18;1558:57;:::i;:::-;1553:2;1546:5;1542:14;1535:81;1648:57;1701:2;1690:9;1686:18;1648:57;:::i;:::-;1643:2;1636:5;1632:14;1625:81;1759:2;1748:9;1744:18;1738:25;1733:2;1726:5;1722:14;1715:49;1818:3;1807:9;1803:19;1797:26;1791:3;1784:5;1780:15;1773:51;1878:3;1867:9;1863:19;1857:26;1851:3;1844:5;1840:15;1833:51;1938:3;1927:9;1923:19;1917:26;1911:3;1904:5;1900:15;1893:51;1998:3;1987:9;1983:19;1977:26;1971:3;1964:5;1960:15;1953:51;2023:3;2079:2;2068:9;2064:18;2058:25;2053:2;2046:5;2042:14;2035:49;;2103:3;2159:2;2148:9;2144:18;2138:25;2133:2;2126:5;2122:14;2115:49;;2183:3;2218:57;2271:2;2260:9;2256:18;2218:57;:::i;:::-;2202:14;;;2195:81;2295:3;2330:57;2368:18;;;2330:57;:::i;:::-;2314:14;;;2307:81;2407:3;2442:57;2480:18;;;2442:57;:::i;:::-;2426:14;;;2419:81;2519:3;2554:62;2608:7;2588:18;;;2554:62;:::i;:::-;2538:14;;;2531:86;2542:5;1242:1405;-1:-1:-1;;;1242:1405:234:o;:::-;692:275:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly deployedBytecode: {
        readonly object: "0x608060405234801561001057600080fd5b50600436106101fa5760003560e01c80637180c8ca1161011a578063becee9c3116100ad578063d81657431161007c578063d816574314610470578063e44808bc14610485578063e4af29d114610498578063e985e9c5146104ab578063fba56008146104be57600080fd5b8063becee9c31461042d578063c55dae631461044d578063c69e16ad14610455578063cf210e651461045d57600080fd5b8063a42dce80116100e9578063a42dce80146103df578063ab033ea9146103f2578063b0d9658014610405578063bd85b0391461041a57600080fd5b80637180c8ca146103935780637ecebe00146103a65780639cd241af146103b9578063a22cb465146103cc57600080fd5b806321ff32a91161019257806346fbf68e1161016157806346fbf68e146103355780634e41a1fb146103585780634ed2d6ac1461036b57806360246c881461037e57600080fd5b806321ff32a9146102d4578063313ce567146102f55780633656eec21461030f5780633e691db91461032257600080fd5b806314e5f07b116101ce57806314e5f07b1461027057806317fad7fc146102835780631c0f12b61461029657806320fc4881146102a957600080fd5b8062ad800c146101ff57806301681a621461022857806302329a291461023d5780630a4e149314610250575b600080fd5b61021261020d36600461351b565b6104ed565b60405161021f9190613584565b60405180910390f35b61023b6102363660046135ac565b610524565b005b61023b61024b3660046135d7565b610530565b610258610539565b6040516001600160a01b03909116815260200161021f565b61023b61027e366004613603565b61057c565b61023b6102913660046136d7565b610598565b61023b6102a436600461376c565b6105ae565b6102bc6102b736600461351b565b6105c1565b60405190516001600160801b0316815260200161021f565b6102e76102e23660046137b4565b610602565b60405190815260200161021f565b6102fd610648565b60405160ff909116815260200161021f565b6102e761031d3660046137f6565b6106e3565b6102e7610330366004613826565b61071c565b6103486103433660046135ac565b610727565b604051901515815260200161021f565b61021261036636600461351b565b61075d565b61023b610379366004613861565b61076b565b6103866107b9565b60405161021f91906138ab565b61023b6103a136600461394c565b6109e6565b6102e76103b43660046135ac565b6109f4565b61023b6103c736600461397a565b610a20565b61023b6103da36600461394c565b610a31565b61023b6103ed3660046135ac565b610a9d565b61023b6104003660046135ac565b610aa6565b61040d610aaf565b60405161021f91906139b2565b6102e761042836600461351b565b610d2b565b61044061043b366004613ac6565b610d4d565b60405161021f9190613b08565b610258610e08565b6102e7610e48565b6102e761046b36600461351b565b610e62565b610478610eab565b60405161021f9190613b4c565b61023b610493366004613c5d565b610fb7565b61023b6104a63660046135ac565b610fff565b6103486104b9366004613cbc565b611008565b6104c661104c565b6040805182516001600160801b03908116825260209384015116928101929092520161021f565b606061051f6104fb836110ab565b60405160200161050b9190613584565b6040516020818303038152906040526111d3565b919050565b61052d816111f7565b50565b61052d8161136d565b604080516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000166020820152600091610579910161050b565b90565b61058d8989898989898989896113f0565b505050505050505050565b6105a68686868686866115e7565b505050505050565b6105bb848484843361169b565b50505050565b60408051602081019091526000815261051f6007600084815260200190815260200160002060405160200161050b91546001600160801b0316815260200190565b60008381526010602090815260408083206001600160a01b0386811685529083528184209085168452825280832054815192830152610641910161050b565b9392505050565b60006105797f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156106ab573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106cf9190613cea565b6040805160ff90921660208301520161050b565b6000828152600d602090815260408083206001600160a01b0385168452825280832054815192830152610716910161050b565b92915050565b60006107168261185c565b6001600160a01b0381166000908152600c6020908152604080832054905161051f9261050b9260ff169101901515815260200190565b606061051f6104fb83611984565b8361077581611a82565b6001600160a01b0316336001600160a01b0316146107a657604051632aab8bd360e01b815260040160405180910390fd5b6107b285858585611b3f565b5050505050565b610832604051806101e001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b600061083c611bac565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b03909216916108a79190613d33565b6108b19190613d46565b905060008083116108c35760006108de565b6108de836108d86108d386611bc4565b611d5a565b90611d8a565b604080516101e0810182526001546001600160801b038082168352600354600f81900b60208501526005546001600160701b036201000082041695850195909552600160801b9485900482166060850152918490048116608084015260a0830187905260c08301889052600254849004811660e0840152600454808216610100850152918490048116610120840152908390048116610140830152600654808216610160840152929092049091166101808201529091506000906101a0810184156109b2576109ad8486611d9f565b6109b5565b60005b81526002546001600160801b03166020918201526040519192506109df9161050b918491016138ab565b5050505090565b6109f08282611db4565b5050565b6001600160a01b03811660009081526011602090815260408083205481519283015261051f910161050b565b610a2c83838333611b3f565b505050565b336000818152600f602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b61052d81611e3d565b61052d81611eb1565b610ab761344b565b604080516101c0810182526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811682527f000000000000000000000000000000000000000000000000000000000000000081166020808401919091527f00000000000000000000000000000000000000000000000000000000000000008216838501527f00000000000000000000000000000000000000000000000000000000000000006060808501919091527f00000000000000000000000000000000000000000000000000000000000000006080808601919091527f000000000000000000000000000000000000000000000000000000000000000060a08601527f000000000000000000000000000000000000000000000000000000000000000060c08601527f000000000000000000000000000000000000000000000000000000000000000060e08601527f00000000000000000000000000000000000000000000000000000000000000006101008601527f0000000000000000000000000000000000000000000000000000000000000000610120860152600a5484166101408601526008548416610160860152600954909316610180850152845192830185527f000000000000000000000000000000000000000000000000000000000000000083527f0000000000000000000000000000000000000000000000000000000000000000838301527f0000000000000000000000000000000000000000000000000000000000000000838601527f0000000000000000000000000000000000000000000000000000000000000000908301526101a083019190915291516105799261050b9291016139b2565b6000818152600e602090815260408083205481519283015261051f910161050b565b606060008267ffffffffffffffff811115610d6a57610d6a613d59565b604051908082528060200260200182016040528015610d93578160200160208202803683370190505b50905060005b83811015610dec576000858583818110610db557610db5613d6f565b90506020020135905060008154905080848481518110610dd757610dd7613d6f565b60209081029190910101525050600101610d99565b50610e018160405160200161050b9190613b08565b5092915050565b604080516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000166020820152600091610579910161050b565b6000610579600b5460405160200161050b91815260200190565b600061051f610e99610e947f000000000000000000000000000000000000000000000000000000000000000085613d33565b611f25565b60405160200161050b91815260200190565b6040805161018081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810191909152610579600160405160200161050b919081546001600160801b038082168352608091821c602084015260018401548082166040850152821c60608401526002840154600f81900b83850152821c60a0840152600384015490811660c0840152811c60e083015260049092015460ff8082161515610100840152600882901c1615156101208301526001600160701b03601082901c1661014083015290911c6101608201526101800190565b84610fc181611a82565b6001600160a01b0316336001600160a01b031614610ff257604051632aab8bd360e01b815260040160405180910390fd5b6105a6868686868661169b565b61052d81611f69565b6001600160a01b038281166000908152600f60209081526040808320938516835292815282822054835160ff9091161515918101919091529091610716910161050b565b60408051808201909152600080825260208201526040805180820182526006546001600160801b03808216808452600160801b90920481166020938401908152845193840192909252905116918101919091526105799060600161050b565b606060f882901c6001600160f81b03831660006110c782611fdd565b905060008360038111156110dd576110dd613d07565b0361110f576040518060400160405280600d81526020016c048797065726472697665204c5609c1b81525093506111cb565b600183600381111561112357611123613d07565b0361114f57806040516020016111399190613d85565b60405160208183030381529060405293506111cb565b600283600381111561116357611163613d07565b0361117957806040516020016111399190613dbe565b600383600381111561118d5761118d613d07565b036111cb576040518060400160405280601b81526020017f48797065726472697665205769746864726177616c205368617265000000000081525093505b505050919050565b80604051636e64089360e11b81526004016111ee9190613584565b60405180910390fd5b6111ff612092565b600954336000908152600c60205260409020546001600160a01b039091169060ff161580156112375750336001600160a01b03821614155b801561124e5750600a546001600160a01b03163314155b1561126b576040516282b42960e81b815260040160405180910390fd5b60006112756120bc565b6040516370a0823160e01b81523060048201529091506000906001600160a01b038516906370a0823190602401602060405180830381865afa1580156112bf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112e39190613df8565b90506112f96001600160a01b0385168483612147565b816113026120bc565b14611320576040516313dd85ff60e31b815260040160405180910390fd5b836001600160a01b0316836001600160a01b03167f951f51ee88c8e42633698bba90d1e53c0954470938036879e691c0232b47e09660405160405180910390a350505061052d6001600055565b336000908152600c602052604090205460ff1661139c576040516282b42960e81b815260040160405180910390fd5b600580548215156101000261ff00199091161790556040517f7c4d1fe30fdbfda9e9c4c43e759ef32e4db5128d4cb58ff3ae9583b89b6242a5906113e590831515815260200190565b60405180910390a150565b834211156114115760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b0387166114385760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b0387811660008181526011602090815260408083205481518084018f905280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b61010083015261010282018c90526101228201526101420160408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa158015611526573d6000803e3d6000fd5b505050602060405103519050886001600160a01b0316816001600160a01b03161461156457604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b03898116600081815260116020908152604080832080546001019055600f8252808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050505050505050505050565b6001600160a01b038616158061160457506001600160a01b038516155b156116225760405163f0dd15fd60e01b815260040160405180910390fd5b8281146116425760405163174861a760e31b815260040160405180910390fd5b60005b838110156116925761168a85858381811061166257611662613d6f565b90506020020135888886868681811061167d5761167d613d6f565b905060200201353361169b565b600101611645565b50505050505050565b6001600160a01b03841615806116b857506001600160a01b038316155b156116d65760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b03161461179a576001600160a01b038085166000908152600f602090815260408083209385168352929052205460ff1661179a5760008581526010602090815260408083206001600160a01b038089168552908352818420908516845290915290205460001981146117985760008681526010602090815260408083206001600160a01b03808a168552908352818420908616845290915281208054859290611792908490613d46565b90915550505b505b6000858152600d602090815260408083206001600160a01b0388168452909152812080548492906117cc908490613d46565b90915550506000858152600d602090815260408083206001600160a01b038716845290915281208054849290611803908490613d33565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b6000611866612092565b61186f82612199565b6008546001600160a01b03168061188960208501856135ac565b6001600160a01b0316146118b057604051630ad13b3360e21b815260040160405180910390fd5b336000908152600c602052604090205460ff161580156118d95750336001600160a01b03821614155b80156118f05750600a546001600160a01b03163314155b1561190d576040516282b42960e81b815260040160405180910390fd5b6000611917611bac565b600b8054600090915590915061192e8183876121cf565b9350826001600160a01b03167fa4bafc79b3f9fdba2427cd386f1fbc7d8779e9fd7229f6220d53bc04d3901e47611966868589612269565b60405190815260200160405180910390a250505061051f6001600055565b606060f882901c6001600160f81b03831660006119a082611fdd565b905060008360038111156119b6576119b6613d07565b036119e8576040518060400160405280600d81526020016c0485950455244524956452d4c5609c1b81525093506111cb565b60018360038111156119fc576119fc613d07565b03611a1257806040516020016111399190613e11565b6002836003811115611a2657611a26613d07565b03611a3c57806040516020016111399190613e49565b6003836003811115611a5057611a50613d07565b036111cb57505060408051808201909152600d81526c485950455244524956452d575360981b60208201529392505050565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b60008481526010602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b6000611bbf670de0b6b3a7640000612298565b905090565b611c286040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526002540482166101008201526004549091610120830191611d209116612325565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192611d5292900416612325565b905292915050565b6000806000611d688461239b565b9150915080610e0157604051635516328b60e11b815260040160405180910390fd5b60006106418383670de0b6b3a7640000612428565b600061064183670de0b6b3a764000084612428565b600a546001600160a01b03163314611dde576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0382166000818152600c6020908152604091829020805460ff191685151590811790915591519182527f902923dcd4814f6cef7005a70e01d5cf2035ab02d4523ef3b865f1d7bab885af910160405180910390a25050565b600a546001600160a01b03163314611e67576040516282b42960e81b815260040160405180910390fd5b600880546001600160a01b0319166001600160a01b0383169081179091556040517fe5693914d19c789bdee50a362998c0bc8d035a835f9871da5d51152f0582c34f90600090a250565b600a546001600160a01b03163314611edb576040516282b42960e81b815260040160405180910390fd5b600a80546001600160a01b0319166001600160a01b0383169081179091556040517f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab90600090a250565b6000611f4d600e6000611f39600286612446565b81526020019081526020016000205461247b565b611f5f600e6000611f39600187612446565b6107169190613e75565b600a546001600160a01b03163314611f93576040516282b42960e81b815260040160405180910390fd5b600980546001600160a01b0319166001600160a01b0383169081179091556040517fc049058b1df2dd8902739ceb78992df12fa8369c06c450b3c6787137b452fdd290600090a250565b60408051604e80825260808201909252606091906000908260208201818036833701905050905060005b841561208457612018600a86613eab565b612023906030613d33565b60f81b8260016120338487613d46565b61203d9190613d46565b8151811061204d5761204d613d6f565b60200101906001600160f81b031916908160001a9053508061206e81613ebf565b915061207d9050600a86613ed8565b9450612007565b918290030190815292915050565b6002600054036120b557604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b6040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015612123573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611bbf9190613df8565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610a2c9084906124a9565b60006121a860208301836135ac565b6001600160a01b03160361052d5760405163f0dd15fd60e01b815260040160405180910390fd5b6000806121dc8585611d8a565b90506121e78161250c565b9450846000036121fb576000915050610641565b61220b60408401602085016135d7565b1561223a576122338561222160208601866135ac565b61222e6040870187613eec565b61255c565b9150612261565b61225d8561224b60208601866135ac565b6122586040870187613eec565b612603565b8491505b509392505050565b600061227b60408301602084016135d7565b15612287575082610641565b6122918484611d8a565b9050610641565b6040516303d1689d60e11b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906307a2d13a906024015b602060405180830381865afa158015612301573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107169190613df8565b600080670de0b6b3a7640000612339612637565b6123439190613f33565b905080831161235357600061235d565b61235d8184613d46565b9150610641612394670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613f33565b8390611d9f565b60008060008060006123ac8661266d565b91509150806123c357506000958695509350505050565b6123d08660a0015161247b565b6123d9876129a7565b836123e7896000015161247b565b6123f19190613f4a565b6123fb9190613f4a565b6124059190613e75565b92505050600081121561241e5750600093849350915050565b9360019350915050565b600082600019048411830215820261243f57600080fd5b5091020490565b60006001600160f81b038211156124705760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60006001600160ff1b038211156124a55760405163396ea70160e11b815260040160405180910390fd5b5090565b60006124be6001600160a01b03841683612a0b565b905080516000141580156124e35750808060200190518101906124e19190613f6a565b155b15610a2c57604051635274afe760e01b81526001600160a01b03841660048201526024016111ee565b6040516363737ac960e11b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063c6e6f592906024016122e4565b604051635d043b2960e11b8152600481018590526001600160a01b0384811660248301523060448301526000917f00000000000000000000000000000000000000000000000000000000000000009091169063ba087652906064016020604051808303816000875af11580156125d6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906125fa9190613df8565b95945050505050565b6105bb6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168486612147565b60006126637f000000000000000000000000000000000000000000000000000000000000000042613eab565b611bbf9042613d46565b6000806000612697612692856101600151866101400151611d8a90919063ffffffff16565b61247b565b6126b7612692866101200151876101000151612a1990919063ffffffff16565b6126c19190613e75565b90506000806126d886600001518760200151612a2e565b91509150806126ef57506000958695509350505050565b600083131561283f576000839050600061273d886000015189602001518a604001518b60a001518c60e00151670de0b6b3a764000061272e9190613d46565b8d606001518e60800151612a6d565b9350905082612756575060009788975095505050505050565b8181106127f4576000612790858a60400151858c60e00151670de0b6b3a76400006127819190613d46565b8d606001518e60800151612b7f565b94509050831580156127a557508860c0015183105b156127bc5750600098600198509650505050505050565b836127d257506000988998509650505050505050565b6127db8161247b565b6127e490613f87565b9960019950975050505050505050565b600088602001511261282b576128138860a00151856126929190613d46565b61281c90613f87565b98600198509650505050505050565b60a088015188516128139161269291613d46565b600083121561299857600061285384613f87565b905060006128878489604001518a60e00151670de0b6b3a76400006128789190613d46565b8b606001518c60800151612c42565b93509050826128a0575060009788975095505050505050565b8181106129255760006128da858a60400151858c60e00151670de0b6b3a76400006128cb9190613d46565b8d606001518e60800151612cee565b94509050831580156128ef57508860c0015183105b156129065750600098600198509650505050505050565b8361291c57506000988998509650505050505050565b6127e48161247b565b6000612957858a604001518b60e00151670de0b6b3a76400006129489190613d46565b8c606001518d60800151612dc5565b945090508361297157506000988998509650505050505050565b6127e461298e8a6060015184866129889190613d46565b90611d9f565b6126929083613d33565b50600095600195509350505050565b60006129da612692836101200151670de0b6b3a76400006129c89190613d46565b60608501516101008601519190612e74565b611f5f612692846101600151670de0b6b3a76400006129f99190613d46565b60608601516101408701519190612428565b606061064183836000612e9a565b60006106418383670de0b6b3a7640000612e74565b600080600083612a3d8661247b565b612a479190613e75565b90506000811215612a5f576000809250925050612a66565b9150600190505b9250929050565b6000806000881215612a8f57612a8288613f87565b612a8c9087613d33565b95505b600080612a9c8b8b612a2e565b9150915080612ab357600080935093505050612b73565b6000612ac2838b8a8a8a612f37565b90506000612ae5612add8a612ad78a8e612a19565b90612f66565b899089612e74565b905080821015612aff576000809550955050505050612b73565b808203670de0b6b3a76400008110612b3457612b2d612b26670de0b6b3a76400008c611d9f565b8290612f66565b9050612b4c565b612b49612b26670de0b6b3a76400008c612fd1565b90505b8b811015612b6557600080965096505050505050612b73565b8b9003955060019450505050505b97509795505050505050565b6000806000612b918989888888612fe6565b9050612ba186612ad7898b613d33565b975087811015612bb8576000809250925050612c37565b878103612bc6818688612e74565b9050670de0b6b3a76400008110612bf357612bec612b26670de0b6b3a764000089612fd1565b9050612c0b565b612c08612b26670de0b6b3a764000089611d9f565b90505b612c158186612fd1565b9050808a1015612c2d57600080935093505050612c37565b8903925060019150505b965096945050505050565b6000806000612c548888888888612fe6565b90506000612c7f670de0b6b3a7640000612c6e8888611d9f565b612c789190613d33565b8390612fd1565b9050670de0b6b3a76400008110612cac57612ca5612b26670de0b6b3a764000089612fd1565b9050612cc4565b612cc1612b26670de0b6b3a764000089611d9f565b90505b80881015612cda57600080935093505050612ce4565b8703925060019150505b9550959350505050565b6000806000612d008989888888612fe6565b905086881015612d17576000809250925050612c37565b9686900396612d268887612f66565b975087811015612d3d576000809250925050612c37565b878103612d4b818688612e74565b9050670de0b6b3a76400008110612d7857612d71612b26670de0b6b3a764000089612fd1565b9050612d90565b612d8d612b26670de0b6b3a764000089611d9f565b90505b612d9a8186612fd1565b905089811015612db257600080935093505050612c37565b9890980398600198509650505050505050565b6000806000612dd78888888888612f37565b90506000612dfb670de0b6b3a7640000612df18888612fd1565b6123949190613d33565b9050670de0b6b3a76400008110612e2857612e21612b26670de0b6b3a764000089611d9f565b9050612e40565b612e3d612b26670de0b6b3a764000089612fd1565b90505b612e4a8186611d9f565b905088811015612e6257600080935093505050612ce4565b97909703976001975095505050505050565b6000826000190484118302158202612e8b57600080fd5b50910281810615159190040190565b606081471015612ebf5760405163cd78605960e01b81523060048201526024016111ee565b600080856001600160a01b03168486604051612edb9190613fa3565b60006040518083038185875af1925050503d8060008114612f18576040519150601f19603f3d011682016040523d82523d6000602084013e612f1d565b606091505b5091509150612f2d86838361300b565b9695505050505050565b6000612f438585612f66565b612f5c612f5486612ad7868b611d8a565b859085612428565b612f2d9190613d33565b600081600003612f7f5750670de0b6b3a7640000610716565b82600003612f8f57506000610716565b6000612f9a8361247b565b90506000612faf612faa8661247b565b613067565b9050818102612fc6670de0b6b3a764000082613fbf565b9050612f2d8161328d565b600061064183670de0b6b3a764000084612e74565b6000612ff28585612f66565b612f5c61300386612ad7868b612a19565b859085612e74565b6060826130205761301b82613422565b610641565b815115801561303757506001600160a01b0384163b155b1561306057604051639996b31560e01b81526001600160a01b03851660048201526024016111ee565b5080610641565b60008082136130895760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f1982019061310c9084901c61247b565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e1982136132a857506000919050565b680755bf798b4a1bf1e582126132d1576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190612f2d74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c61247b565b8051156134325780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b604051806101c0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b031681526020016000801916815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b031681526020016135166040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b60006020828403121561352d57600080fd5b5035919050565b60005b8381101561354f578181015183820152602001613537565b50506000910152565b60008151808452613570816020860160208601613534565b601f01601f19169290920160200192915050565b6020815260006106416020830184613558565b6001600160a01b038116811461052d57600080fd5b6000602082840312156135be57600080fd5b813561064181613597565b801515811461052d57600080fd5b6000602082840312156135e957600080fd5b8135610641816135c9565b60ff8116811461052d57600080fd5b60008060008060008060008060006101208a8c03121561362257600080fd5b8935985060208a0135975060408a013561363b81613597565b965060608a013561364b81613597565b955060808a013561365b816135c9565b945060a08a0135935060c08a0135613672816135f4565b8093505060e08a013591506101008a013590509295985092959850929598565b60008083601f8401126136a457600080fd5b50813567ffffffffffffffff8111156136bc57600080fd5b6020830191508360208260051b8501011115612a6657600080fd5b600080600080600080608087890312156136f057600080fd5b86356136fb81613597565b9550602087013561370b81613597565b9450604087013567ffffffffffffffff8082111561372857600080fd5b6137348a838b01613692565b9096509450606089013591508082111561374d57600080fd5b5061375a89828a01613692565b979a9699509497509295939492505050565b6000806000806080858703121561378257600080fd5b84359350602085013561379481613597565b925060408501356137a481613597565b9396929550929360600135925050565b6000806000606084860312156137c957600080fd5b8335925060208401356137db81613597565b915060408401356137eb81613597565b809150509250925092565b6000806040838503121561380957600080fd5b82359150602083013561381b81613597565b809150509250929050565b60006020828403121561383857600080fd5b813567ffffffffffffffff81111561384f57600080fd5b82016060818503121561064157600080fd5b6000806000806080858703121561387757600080fd5b84359350602085013561388981613597565b92506040850135915060608501356138a081613597565b939692955090935050565b815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160808301519082015261018080830151908201526101a080830151908201526101c091820151918101919091526101e00190565b6000806040838503121561395f57600080fd5b823561396a81613597565b9150602083013561381b816135c9565b60008060006060848603121561398f57600080fd5b8335925060208401356139a181613597565b929592945050506040919091013590565b81516001600160a01b03168152610220810160208301516139de60208401826001600160a01b03169052565b5060408301516139f960408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525061014080840151613a5f828501826001600160a01b03169052565b5050610160838101516001600160a01b038116848301525050610180838101516001600160a01b0381168483015250506101a08381015180518483015260208101516101c085015260408101516101e085015260608101516102008501525b505092915050565b60008060208385031215613ad957600080fd5b823567ffffffffffffffff811115613af057600080fd5b613afc85828601613692565b90969095509350505050565b6020808252825182820181905260009190848201906040850190845b81811015613b4057835183529284019291840191600101613b24565b50909695505050505050565b81516001600160801b0316815261018081016020830151613b7860208401826001600160801b03169052565b506040830151613b9360408401826001600160801b03169052565b506060830151613bae60608401826001600160801b03169052565b506080830151613bc36080840182600f0b9052565b5060a0830151613bde60a08401826001600160801b03169052565b5060c0830151613bf960c08401826001600160801b03169052565b5060e0830151613c1460e08401826001600160801b03169052565b506101008381015115159083015261012080840151151590830152610140808401516001600160701b031690830152610160808401516001600160801b03811682850152613abe565b600080600080600060a08688031215613c7557600080fd5b853594506020860135613c8781613597565b93506040860135613c9781613597565b9250606086013591506080860135613cae81613597565b809150509295509295909350565b60008060408385031215613ccf57600080fd5b8235613cda81613597565b9150602083013561381b81613597565b600060208284031215613cfc57600080fd5b8151610641816135f4565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b8082018082111561071657610716613d1d565b8181038181111561071657610716613d1d565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b700243cb832b9323934bb32902637b7339d1607d1b815260008251613db1816011850160208701613534565b9190910160110192915050565b710243cb832b9323934bb329029b437b93a1d160751b815260008251613deb816012850160208701613534565b9190910160120192915050565b600060208284031215613e0a57600080fd5b5051919050565b6f242ca822a9222924ab2296a627a7239d60811b815260008251613e3c816010850160208701613534565b9190910160100192915050565b70242ca822a9222924ab2296a9a427a92a1d60791b815260008251613db1816011850160208701613534565b8181036000831280158383131683831282161715610e0157610e01613d1d565b634e487b7160e01b600052601260045260246000fd5b600082613eba57613eba613e95565b500690565b600060018201613ed157613ed1613d1d565b5060010190565b600082613ee757613ee7613e95565b500490565b6000808335601e19843603018112613f0357600080fd5b83018035915067ffffffffffffffff821115613f1e57600080fd5b602001915036819003821315612a6657600080fd5b808202811582820484141761071657610716613d1d565b8082018281126000831280158216821582161715613abe57613abe613d1d565b600060208284031215613f7c57600080fd5b8151610641816135c9565b6000600160ff1b8201613f9c57613f9c613d1d565b5060000390565b60008251613fb5818460208701613534565b9190910192915050565b600082613fce57613fce613e95565b600160ff1b821460001984141615613fe857613fe8613d1d565b50059056fea264697066735822122046389dc0e77800202751cf0d5803496b478d265f49fc141019c996a69564ae2664736f6c63430008140033";
        readonly sourceMap: "692:275:46:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;17432:137:37;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3708:72;;;;;;:::i;:::-;;:::i;:::-;;2353:70;;;;;;:::i;:::-;;:::i;9774:115::-;;;:::i;:::-;;;-1:-1:-1;;;;;2016:32:234;;;1998:51;;1986:2;1971:18;9774:115:37;1852:203:234;8726:482:37;;;;;;:::i;:::-;;:::i;7181:209::-;;;;;;:::i;:::-;;:::i;4114:240::-;;;;;;:::i;:::-;;:::i;10024:183::-;;;;;;:::i;:::-;;:::i;:::-;;;5545:13:234;;-1:-1:-1;;;;;5541:54:234;5523:73;;5511:2;5496:18;10024:183:37;5319:283:234;16793:223:37;;;;;;:::i;:::-;;:::i;:::-;;;6230:25:234;;;6218:2;6203:18;16793:223:37;6084:177:234;17196:117:37;;;:::i;:::-;;;6438:4:234;6426:17;;;6408:36;;6396:2;6381:18;17196:117:37;6266:184:234;15753:173:37;;;;;;:::i;:::-;;:::i;2027:174::-;;;;;;:::i;:::-;;:::i;9370:121::-;;;;;;:::i;:::-;;:::i;:::-;;;7696:14:234;;7689:22;7671:41;;7659:2;7644:18;9370:121:37;7531:187:234;17692:141:37;;;;;;:::i;:::-;;:::i;5551:225::-;;;;;;:::i;:::-;;:::i;12144:1619::-;;;:::i;:::-;;;;;;;:::i;3208:94::-;;;;;;:::i;:::-;;:::i;17982:119::-;;;;;;:::i;:::-;;:::i;6715:179::-;;;;;;:::i;:::-;;:::i;6008:277::-;;;;;;:::i;:::-;;:::i;2543:87::-;;;;;;:::i;:::-;;:::i;2955:83::-;;;;;;:::i;:::-;;:::i;10790:1185::-;;;:::i;:::-;;;;;;;:::i;16061:129::-;;;;;;:::i;:::-;;:::i;15018:565::-;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;9574:101::-;;;:::i;14407:132::-;;;:::i;10372:213::-;;;;;;:::i;:::-;;:::i;14618:159::-;;;:::i;:::-;;;;;;;:::i;4759:285::-;;;;;;:::i;:::-;;:::i;2754:91::-;;;;;;:::i;:::-;;:::i;16379:186::-;;;;;;:::i;:::-;;:::i;13887:367::-;;;:::i;:::-;;;;16664:13:234;;-1:-1:-1;;;;;16660:22:234;;;16642:41;;16743:4;16731:17;;;16725:24;16721:33;16699:20;;;16692:63;;;;16562:18;13887:367:37;16381:380:234;17432:137:37;17486:13;17511:51;17530:30;17552:7;17530:21;:30::i;:::-;17519:42;;;;;;;;:::i;:::-;;;;;;;;;;;;;17511:7;:51::i;:::-;17432:137;;;:::o;3708:72::-;3758:15;3765:7;3758:6;:15::i;:::-;3708:72;:::o;2353:70::-;2401:15;2408:7;2401:6;:15::i;9774:115::-;9852:29;;;-1:-1:-1;;;;;9863:17:37;2016:32:234;9852:29:37;;;1998:51:234;9825:7:37;;9844:38;;1971:18:234;9852:29:37;1852:203:234;9844:38:37;9774:115;:::o;8726:482::-;8991:210;9018:15;9047:14;9075:5;9094:7;9115:9;9138:8;9160:1;9175;9190;8991:13;:210::i;:::-;8726:482;;;;;;;;;:::o;7181:209::-;7342:41;7361:4;7367:2;7371:3;;7376:6;;7342:18;:41::i;:::-;7181:209;;;;;;:::o;4114:240::-;4295:52;4309:7;4318:4;4324:2;4328:6;4336:10;4295:13;:52::i;:::-;4114:240;;;;:::o;10024:183::-;-1:-1:-1;;;;;;;;;;;;10150:50:37;10169:12;:29;10182:15;10169:29;;;;;;;;;;;10158:41;;;;;;17212:13:234;-1:-1:-1;;;;;17208:54:234;17190:73;;17178:2;17163:18;;16989:280;16793:223:37;16924:7;16962:27;;;:18;:27;;;;;;;;-1:-1:-1;;;;;16962:36:37;;;;;;;;;;;:45;;;;;;;;;;;16951:57;;;;;6230:25:234;16943:66:37;;6203:18:234;16951:57:37;6084:177:234;16943:66:37;16793:223;;;;;:::o;17196:117::-;17247:5;17264:42;17283:10;-1:-1:-1;;;;;17283:19:37;;:21;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;17272:33;;;6438:4:234;6426:17;;;17272:33:37;;;6408:36:234;6381:18;17272:33:37;6266:184:234;15753:173:37;15851:7;15889:19;;;:10;:19;;;;;;;;-1:-1:-1;;;;;15889:28:37;;;;;;;;;;15878:40;;;;;6230:25:234;15870:49:37;;6203:18:234;15878:40:37;6084:177:234;15870:49:37;15753:173;;;;:::o;2027:174::-;2128:16;2163:31;2185:8;2163:21;:31::i;9370:121::-;-1:-1:-1;;;;;9464:18:37;;9429:4;9464:18;;;:8;:18;;;;;;;;;9453:30;;9445:39;;9453:30;;9464:18;;;9453:30;7696:14:234;;7689:22;7671:41;;7659:2;7644:18;;7531:187;17692:141:37;17748:13;17773:53;17792:32;17816:7;17792:23;:32::i;5551:225::-;5703:7;1805:32:116;1829:7;1805:23;:32::i;:::-;-1:-1:-1;;;;;1791:46:116;:10;-1:-1:-1;;;;;1791:46:116;;1787:116;;1860:32;;-1:-1:-1;;;1860:32:116;;;;;;;;;;;1787:116;5722:47:37::1;5735:7;5744:8;5754:6;5762;5722:12;:47::i;:::-;5551:225:::0;;;;;:::o;12144:1619::-;12190:27;-1:-1:-1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12190:27:37;12229:23;12255:21;:19;:21::i;:::-;12422:13;:29;12359:12;:48;;;;12286:21;12310:34;;;;;12229:47;;-1:-1:-1;12286:21:37;-1:-1:-1;;;;;12422:29:37;;;;12310:97;;12359:48;12310:97;:::i;:::-;:141;;;;:::i;:::-;12286:165;;12461:20;12502:1;12484:15;:19;:178;;12661:1;12484:178;;;12518:128;12630:15;12518:86;12564:39;12587:15;12564:22;:39::i;:::-;12518:45;:86::i;:::-;:111;;:128::i;:::-;12711:1006;;;;;;;;12761:12;:26;-1:-1:-1;;;;;12761:26:37;;;12711:1006;;12818:28;;;;;;12711:1006;;;;12880:31;;-1:-1:-1;;;;;12880:31:37;;;;12711:1006;;;;;;;-1:-1:-1;;;12946:32:37;;;;;;12711:1006;;;;13006:25;;;;;;12711:1006;;;;;;;;;;;;;;;;12818:28;13109:29;;;;;;12711:1006;;;;12880:31;13177:36;;;;12761:26;12711:1006;;;13246:30;;;;;;12711:1006;;;;13316:37;;;;;;12711:1006;;;;13562:13;:29;;;;12711:1006;;;;13631:22;;;;;;;12711:1006;;;;12461:201;;-1:-1:-1;12672:36:37;;12711:1006;;;13423:18;;:92;;13480:35;:12;13501:13;13480:20;:35::i;:::-;13423:92;;;13460:1;13423:92;12711:1006;;13681:25;;-1:-1:-1;;;;;13681:25:37;12711:1006;;;;;13735:20;;12672:1045;;-1:-1:-1;13727:29:37;;13735:20;;12672:1045;;13735:20;;:::i;13727:29::-;12219:1544;;;;12144:1619;:::o;3208:94::-;3272:23;3283:3;3288:6;3272:10;:23::i;:::-;3208:94;;:::o;17982:119::-;-1:-1:-1;;;;;18076:16:37;;18038:7;18076:16;;;:7;:16;;;;;;;;;18065:28;;;;;6230:25:234;18057:37:37;;6203:18:234;18065:28:37;6084:177:234;6715:179:37;6836:51;6849:7;6858:8;6868:6;6876:10;6836:12;:51::i;:::-;6715:179;;;:::o;6008:277::-;6142:10;6124:29;;;;:17;:29;;;;;;;;-1:-1:-1;;;;;6124:39:37;;;;;;;;;;;;:50;;-1:-1:-1;;6124:50:37;;;;;;;;;;6232:46;;7671:41:234;;;6124:39:37;;6142:10;6232:46;;7644:18:234;6232:46:37;;;;;;;6008:277;;:::o;2543:87::-;2601:22;2618:4;2601:16;:22::i;2955:83::-;3011:20;3026:4;3011:14;:20::i;10790:1185::-;10862:29;;:::i;:::-;10956:988;;;;;;;;-1:-1:-1;;;;;11012:10:37;10956:988;;;;11062:17;10956:988;;;;;;;;;;11116:14;10956:988;;;;;;11168:15;10956:988;;;;;;;;11229:23;10956:988;;;;;;;;11296:21;10956:988;;;;11365:25;10956:988;;;;11430:17;10956:988;;;;11489:19;10956:988;;;;11543:12;10956:988;;;;11589:11;;;;10956:988;;;;11636:13;;;;10956:988;;;;11687:15;;;;;10956:988;;;;11730:195;;;;;;;11772:9;11730:195;;11807:8;11730:195;;;;11841:16;11730:195;;;;11883:20;11730:195;;;;10956:988;;;;;;;10928:1030;;10907:1061;;10928:1030;;10956:988;10928:1030;;:::i;16061:129::-;16122:7;16160:21;;;:12;:21;;;;;;;;;16149:33;;;;;6230:25:234;16141:42:37;;6203:18:234;16149:33:37;6084:177:234;15018:565:37;15096:16;15124:23;15164:6;15150:28;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;15150:28:37;;15124:54;;15250:9;15245:294;15265:17;;;15245:294;;;15300:12;15315:6;;15322:1;15315:9;;;;;;;:::i;:::-;;;;;;;15300:24;;15338:12;15421:4;15415:11;15407:19;;15465:4;15453:6;15460:1;15453:9;;;;;;;;:::i;:::-;;;;;;;;;;:16;-1:-1:-1;;15511:3:37;;15245:294;;;;15549:27;15568:6;15557:18;;;;;;;;:::i;15549:27::-;15114:469;15018:565;;;;:::o;9574:101::-;9645:22;;;-1:-1:-1;;;;;9656:10:37;2016:32:234;9645:22:37;;;1998:51:234;9618:7:37;;9637:31;;1971:18:234;9645:22:37;1852:203:234;14407:132:37;14470:7;14489:43;14508:22;;14497:34;;;;;;6230:25:234;;6218:2;6203:18;;6084:177;10372:213:37;10465:6;10483:95;10515:52;10531:35;10549:17;10531:15;:35;:::i;:::-;10515:15;:52::i;:::-;10504:64;;;;;;6230:25:234;;6218:2;6203:18;;6084:177;14618:159:37;-1:-1:-1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;14737:33:37;14756:12;14745:24;;;;;;;18538:13:234;;-1:-1:-1;;;;;18632:18:234;;;5249:59;;18681:3;18712:18;;;18747:4;18732:20;;5249:59;18799:4;18787:17;;18781:24;18833:20;;;18870:4;18855:20;;5249:59;18904:20;;18941:4;18926:20;;5249:59;18993:4;18981:17;;18975:24;19037:2;19026:27;;;19055:18;;;13454:34;19102:20;;19139:4;19124:20;;5249:59;19191:4;19179:17;;19173:24;19225:20;;;19262:4;19247:20;;5249:59;19296:20;;19333:4;19318:20;;5249:59;19385:4;19373:17;;;19367:24;19433:4;19416:22;;;7505:13;7498:21;19455:6;19440:22;;7486:34;19496:1;19492:19;;;19488:30;7505:13;7498:21;19535:6;19520:22;;7486:34;-1:-1:-1;;;;;19579:2:234;19575:20;;;19571:57;19645:6;19630:22;;13553:55;19681:20;;;19718:6;19703:22;;5249:59;18508:3;18493:19;;18317:1415;4759:285:37;4928:7;1805:32:116;1829:7;1805:23;:32::i;:::-;-1:-1:-1;;;;;1791:46:116;:10;-1:-1:-1;;;;;1791:46:116;;1787:116;;1860:32;;-1:-1:-1;;;1860:32:116;;;;;;;;;;;1787:116;4989:48:37::1;5003:7;5012:4;5018:2;5022:6;5030;4989:13;:48::i;2754:91::-:0;2814:24;2833:4;2814:18;:24::i;16379:186::-;-1:-1:-1;;;;;16520:26:37;;;16485:4;16520:26;;;:17;:26;;;;;;;;:36;;;;;;;;;;;;16509:48;;16520:36;;;;7696:14:234;7689:22;16509:48:37;;;7671:41:234;;;;16485:4:37;;16501:57;;7644:18:234;16509:48:37;7531:187:234;13887:367:37;-1:-1:-1;;;;;;;;;;;;;;;;;14057:166:37;;;;;;;;14121:13;:29;-1:-1:-1;;;;;14121:29:37;;;14057:166;;;-1:-1:-1;;;14182:22:37;;;;;14057:166;;;;;;;14029:208;;;;;16642:41:234;;;;16725:24;;16721:33;16699:20;;;16692:63;;;;14008:239:37;;16562:18:234;;14029:208:37;16381:380:234;2533:693:119;2606:19;2200:4;2196:14;;;-1:-1:-1;;;;;2253:120:119;;2638:20;2736:19;2253:120;2736:8;:19::i;:::-;2709:46;-1:-1:-1;2779:16:119;2769:6;:26;;;;;;;;:::i;:::-;;2765:455;;2811:23;;;;;;;;;;;;;-1:-1:-1;;;2811:23:119;;;;;2765:455;;;2865:18;2855:6;:28;;;;;;;;:::i;:::-;;2851:369;;2952:10;2914:49;;;;;;;;:::i;:::-;;;;;;;;;;;;;2899:65;;2851:369;;;2995:19;2985:6;:29;;;;;;;;:::i;:::-;;2981:239;;3084:10;3045:50;;;;;;;;:::i;2981:239::-;3127:29;3117:6;:39;;;;;;;;:::i;:::-;;3113:107;;3172:37;;;;;;;;;;;;;;;;;;;3113:107;2627:599;;;2533:693;;;:::o;18310:106:37:-;18402:6;18379:30;;-1:-1:-1;;;18379:30:37;;;;;;;;:::i;:::-;;;;;;;;5270:960:111;2356:21:169;:19;:21::i;:::-;5424:15:111::1;::::0;5476:10:::1;5399:22;5467:20:::0;;;:8:::1;:20;::::0;;;;;-1:-1:-1;;;;;5424:15:111;;::::1;::::0;5467:20:::1;;5466:21;:65:::0;::::1;;;-1:-1:-1::0;5503:10:111::1;-1:-1:-1::0;;;;;5503:28:111;::::1;;;5466:65;:106;;;;-1:-1:-1::0;5561:11:111::1;::::0;-1:-1:-1;;;;;5561:11:111::1;5547:10;:25;;5466:106;5449:192;;;5604:26;;-1:-1:-1::0;;;5604:26:111::1;;;;;;;;;;;5449:192;5738:20;5761:14;:12;:14::i;:::-;5898:32;::::0;-1:-1:-1;;;5898:32:111;;5924:4:::1;5898:32;::::0;::::1;1998:51:234::0;5738:37:111;;-1:-1:-1;5880:15:111::1;::::0;-1:-1:-1;;;;;5898:17:111;::::1;::::0;::::1;::::0;1971:18:234;;5898:32:111::1;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;5880:50:::0;-1:-1:-1;5940:61:111::1;-1:-1:-1::0;;;;;5940:36:111;::::1;5977:14:::0;5880:50;5940:36:::1;:61::i;:::-;6098:12;6080:14;:12;:14::i;:::-;:30;6076:93;;6133:25;;-1:-1:-1::0;;;6133:25:111::1;;;;;;;;;;;6076:93;6214:7;-1:-1:-1::0;;;;;6184:39:111::1;6190:14;-1:-1:-1::0;;;;;6184:39:111::1;;;;;;;;;;;5324:906;;;2398:20:169::0;1713:1;2924:7;:21;2744:208;2648:350:111;2782:10;2773:20;;;;:8;:20;;;;;;;;2768:85;;2816:26;;-1:-1:-1;;;2816:26:111;;;;;;;;;;;2768:85;2918:21;:31;;;;;;;-1:-1:-1;;2918:31:111;;;;;;2964:27;;;;;;2942:7;7696:14:234;7689:22;7671:41;;7659:2;7644:18;;7531:187;2964:27:111;;;;;;;;2648:350;:::o;8430:1543:116:-;8772:8;8754:15;:26;8750:93;;;8803:29;;-1:-1:-1;;;8803:29:116;;;;;;;;;;;8750:93;-1:-1:-1;;;;;8904:19:116;;8900:92;;8946:35;;-1:-1:-1;;;8946:35:116;;;;;;;;;;;8900:92;-1:-1:-1;;;;;9419:14:116;;;9074:18;9419:14;;;:7;:14;;;;;;;;;9244:245;;;;;21339:25:234;;;21418:18;;;21411:43;;;;21490:15;;;21470:18;;;21463:43;21549:14;;21542:22;21522:18;;;21515:50;21581:19;;;21574:35;;;;21625:19;;;;21618:35;;;9244:245:116;;;;;;;;;;21311:19:234;;;9244:245:116;;;9213:294;;;;;;;;-1:-1:-1;;;9118:403:116;;;21922:27:234;21965:11;;;21958:27;;;22001:12;;;21994:28;22038:12;;9118:403:116;;;-1:-1:-1;;9118:403:116;;;;;;;;;9095:436;;9118:403;9095:436;;;;9541:14;9558:30;;;;;;;;;22288:25:234;;;22361:4;22349:17;;22329:18;;;22322:45;;;;22383:18;;;22376:34;;;22426:18;;;22419:34;;;9095:436:116;;-1:-1:-1;9541:14:116;9558:30;;22260:19:234;;9558:30:116;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9541:47;;9612:5;-1:-1:-1;;;;;9602:15:116;:6;-1:-1:-1;;;;;9602:15:116;;9598:83;;9640:30;;-1:-1:-1;;;9640:30:116;;;;;;;;;;;9598:83;-1:-1:-1;;;;;9759:14:116;;;;;;;:7;:14;;;;;;;;9757:16;;;;;;9820:17;:24;;;;;:33;;;;;;;;;;;;;:45;;-1:-1:-1;;9820:45:116;;;;;;;;;;9925:41;;7671::234;;;9925::116;;7644:18:234;9925:41:116;;;;;;;8686:1287;;8430:1543;;;;;;;;;:::o;2248:716::-;-1:-1:-1;;;;;2460:18:116;;;;:38;;-1:-1:-1;;;;;;2482:16:116;;;2460:38;2456:111;;;2521:35;;-1:-1:-1;;;2521:35:116;;;;;;;;;;;2456:111;2623:27;;;2619:103;;2673:38;;-1:-1:-1;;;2673:38:116;;;;;;;;;;;2619:103;2787:9;2782:176;2802:14;;;2782:176;;;2834:54;2848:3;;2852:1;2848:6;;;;;;;:::i;:::-;;;;;;;2856:4;2862:2;2866:6;;2873:1;2866:9;;;;;;;:::i;:::-;;;;;;;2877:10;2834:13;:54::i;:::-;2930:3;;2782:176;;;;2248:716;;;;;;:::o;3315:1591::-;-1:-1:-1;;;;;3528:18:116;;;;:38;;-1:-1:-1;;;;;;3550:16:116;;;3528:38;3524:111;;;3589:35;;-1:-1:-1;;;3589:35:116;;;;;;;;;;;3524:111;3739:4;-1:-1:-1;;;;;3729:14:116;:6;-1:-1:-1;;;;;3729:14:116;;3725:888;;-1:-1:-1;;;;;3880:23:116;;;;;;;:17;:23;;;;;;;;:31;;;;;;;;;;;;3875:728;;3990:16;4009:27;;;:18;:27;;;;;;;;-1:-1:-1;;;;;4009:33:116;;;;;;;;;;;:41;;;;;;;;;;;-1:-1:-1;;4125:29:116;;4121:468;;4519:27;;;;:18;:27;;;;;;;;-1:-1:-1;;;;;4519:33:116;;;;;;;;;;;:41;;;;;;;;;;:51;;4564:6;;4519:27;:51;;4564:6;;4519:51;:::i;:::-;;;;-1:-1:-1;;4121:468:116;3913:690;3875:728;4757:19;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;4757:25:116;;;;;;;;;:35;;4786:6;;4757:19;:35;;4786:6;;4757:35;:::i;:::-;;;;-1:-1:-1;;4802:19:116;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;4802:23:116;;;;;;;;;:33;;4829:6;;4802:19;:33;;4829:6;;4802:33;:::i;:::-;;;;-1:-1:-1;;4850:49:116;;;22638:25:234;;;22694:2;22679:18;;22672:34;;;-1:-1:-1;;;;;4850:49:116;;;;;;;;;;;;;;22611:18:234;4850:49:116;;;;;;;3315:1591;;;;;:::o;1317:1182:111:-;1432:16;2356:21:169;:19;:21::i;:::-;1514:23:111::1;1528:8;1514:13;:23::i;:::-;1639:13;::::0;-1:-1:-1;;;;;1639:13:111::1;::::0;1666:20:::1;;::::0;::::1;:8:::0;:20:::1;:::i;:::-;-1:-1:-1::0;;;;;1666:36:111::1;;1662:109;;1725:35;;-1:-1:-1::0;;;1725:35:111::1;;;;;;;;;;;1662:109;1873:10;1864:20;::::0;;;:8:::1;:20;::::0;;;;;::::1;;1863:21;:63:::0;::::1;;;-1:-1:-1::0;1900:10:111::1;-1:-1:-1::0;;;;;1900:26:111;::::1;;;1863:63;:104;;;;-1:-1:-1::0;1956:11:111::1;::::0;-1:-1:-1;;;;;1956:11:111::1;1942:10;:25;;1863:104;1846:190;;;1999:26;;-1:-1:-1::0;;;1999:26:111::1;;;;;;;;;;;1846:190;2116:23;2142:21;:19;:21::i;:::-;2205:22;::::0;;2173:29:::1;2237::::0;;;2116:47;;-1:-1:-1;2287:59:111::1;2205:22:::0;2116:47;2337:8;2287:9:::1;:59::i;:::-;2276:70;;2395:12;-1:-1:-1::0;;;;;2361:131:111::1;;2421:61;2446:8;2456:15;2473:8;2421:24;:61::i;:::-;2361:131;::::0;6230:25:234;;;6218:2;6203:18;2361:131:111::1;;;;;;;1450:1049;;;2398:20:169::0;1713:1;2924:7;:21;2744:208;3360:689:119;3435:21;2200:4;2196:14;;;-1:-1:-1;;;;;2253:120:119;;3469:20;3567:19;2253:120;3567:8;:19::i;:::-;3540:46;-1:-1:-1;3610:16:119;3600:6;:26;;;;;;;;:::i;:::-;;3596:447;;3642:25;;;;;;;;;;;;;-1:-1:-1;;;3642:25:119;;;;;3596:447;;;3698:18;3688:6;:28;;;;;;;;:::i;:::-;;3684:359;;3786:10;3749:48;;;;;;;;:::i;3684:359::-;3829:19;3819:6;:29;;;;;;;;:::i;:::-;;3815:228;;3919:10;3881:49;;;;;;;;:::i;3815:228::-;3962:29;3952:6;:39;;;;;;;;:::i;:::-;;3948:95;;-1:-1:-1;;4007:25:119;;;;;;;;;;;;-1:-1:-1;;;4007:25:119;;;;;3360:689;-1:-1:-1;;;3360:689:119:o;10223:590:116:-;10419:34;;;10438:4;10419:34;;;;23798:51:234;;;;23865:18;;;23858:34;;;;10419::116;;;;;;;;;23771:18:234;;;;10419:34:116;;10409:45;;;;;;;;;-1:-1:-1;;;;;;10593:147:116;;;24114:39:234;10657:14:116;24186:15:234;;;-1:-1:-1;;24182:53:234;24169:11;;;24162:74;24252:12;;;24245:28;10711:15:116;24289:12:234;;;;24282:28;;;;10593:147:116;;;;;;;;;;24326:12:234;;;;10593:147:116;;;10570:180;;;;;;10223:590::o;5363:301::-;5509:27;;;;:18;:27;;;;;;;;-1:-1:-1;;;;;5509:35:116;;;;;;;;;;;;:45;;;;;;;;;;;;;:54;;;5623:34;;6230:25:234;;;5509:35:116;;5623:34;;6203:18:234;5623:34:116;;;;;;;5363:301;;;;:::o;5543:150:112:-;5621:23;5667:19;193:4:122;5667:14:112;:19::i;:::-;5660:26;;5543:150;:::o;15671:1035::-;15766:39;-1:-1:-1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;15766:39:112;15826:873;;;;;;;;15881:12;:26;-1:-1:-1;;;;;15881:26:112;;;15826:873;;15938:28;;;;15826:873;;;;-1:-1:-1;;;15994:25:112;;;;;;15826:873;;;;;;;;;;;;;16104:23;15826:873;;;;16163:21;15826:873;;;;16224:25;15826:873;;;;16276:12;15826:873;;;;15938:28;16320:29;;;;15881:26;15826:873;;;16436:36;;15826:873;;;;;;16389:97;;16436:36;16389:29;:97::i;:::-;15826:873;;16519:30;;-1:-1:-1;;;;;;;;16519:30:112;;;;;;15826:873;;;;16637:37;;15826:873;;;;;16590:98;;16637:37;;;16590:29;:98::i;:::-;15826:873;;15817:882;15671:1035;-1:-1:-1;;15671:1035:112:o;6397:341:124:-;6500:7;6520:20;6542:12;6558:56;6597:7;6558:25;:56::i;:::-;6519:95;;;;6629:7;6624:79;;6659:33;;-1:-1:-1;;;6659:33:124;;;;;;;;;;;1610:118:122;1672:7;1699:21;1710:1;1713;193:4;1699:10;:21::i;1884:164::-;1946:7;1973:21;1984:1;193:4;1992:1;1973:10;:21::i;4526:344:111:-;4660:11;;-1:-1:-1;;;;;4660:11:111;4646:10;:25;4642:89;;4694:26;;-1:-1:-1;;;4694:26:111;;;;;;;;;;;4642:89;-1:-1:-1;;;;;4796:14:111;;;;;;:8;:14;;;;;;;;;:24;;-1:-1:-1;;4796:24:111;;;;;;;;;;4835:28;;7671:41:234;;;4835:28:111;;7644:18:234;4835:28:111;;;;;;;4526:344;;:::o;3114:334::-;3240:11;;-1:-1:-1;;;;;3240:11:111;3226:10;:25;3222:89;;3274:26;;-1:-1:-1;;;3274:26:111;;;;;;;;;;;3222:89;3381:13;:20;;-1:-1:-1;;;;;;3381:20:111;-1:-1:-1;;;;;3381:20:111;;;;;;;;3416:25;;;;-1:-1:-1;;3416:25:111;3114:334;:::o;4029:328::-;4153:11;;-1:-1:-1;;;;;4153:11:111;4139:10;:25;4135:89;;4187:26;;-1:-1:-1;;;4187:26:111;;;;;;;;;;;4135:89;4294:11;:18;;-1:-1:-1;;;;;;4294:18:111;-1:-1:-1;;;;;4294:18:111;;;;;;;;4327:23;;;;-1:-1:-1;;4327:23:111;4029:328;:::o;12625:675:112:-;12710:6;13115:178;:12;:167;13145:123;13188:27;13237:13;13145:21;:123::i;:::-;13115:167;;;;;;;;;;;;:176;:178::i;:::-;12981:119;:12;:108;13011:64;13033:26;13061:13;13011:21;:64::i;12981:119::-;:312;;;;:::i;3566:345:111:-;3694:11;;-1:-1:-1;;;;;3694:11:111;3680:10;:25;3676:89;;3728:26;;-1:-1:-1;;;3728:26:111;;;;;;;;;;;3676:89;3840:15;:22;;-1:-1:-1;;;;;;3840:22:111;-1:-1:-1;;;;;3840:22:111;;;;;;;;3877:27;;;;-1:-1:-1;;3877:27:111;3566:345;:::o;4207:1065:119:-;4599:26;;;4562:2;4599:26;;;;;;;;;4276:20;;4562:2;4536:23;;4562:2;4599:26;;;;;;;;;;-1:-1:-1;4599:26:119;4574:51;;4790:14;4818:180;4825:9;;4818:180;;4935:9;4942:2;4935:4;:9;:::i;:::-;4934:16;;4948:2;4934:16;:::i;:::-;4904:61;;4862:9;4899:1;4872:24;4890:6;4872:15;:24;:::i;:::-;:28;;;;:::i;:::-;4862:39;;;;;;;;:::i;:::-;;;;:103;-1:-1:-1;;;;;4862:103:119;;;;;;;;-1:-1:-1;4979:8:119;;;;:::i;:::-;;-1:-1:-1;4836:10:119;;-1:-1:-1;4844:2:119;4836:10;;:::i;:::-;;;4818:180;;;5169:28;;;;5154:44;5211:22;;;5154:44;4207:1065;-1:-1:-1;;4207:1065:119:o;2431:307:169:-;1755:1;2558:7;;:18;2554:86;;2599:30;;-1:-1:-1;;;2599:30:169;;;;;;;;;;;2554:86;1755:1;2714:7;:17;2431:307::o;5174:179:44:-;5304:42;;-1:-1:-1;;;5304:42:44;;5340:4;5304:42;;;1998:51:234;5262:19:44;;5304:17;-1:-1:-1;;;;;5304:27:44;;;;1971:18:234;;5304:42:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;1303:160:166:-;1412:43;;;-1:-1:-1;;;;;23816:32:234;;1412:43:166;;;23798:51:234;23865:18;;;;23858:34;;;1412:43:166;;;;;;;;;;23771:18:234;;;;1412:43:166;;;;;;;;-1:-1:-1;;;;;1412:43:166;-1:-1:-1;;;1412:43:166;;;1385:71;;1405:5;;1385:19;:71::i;8165:221:112:-;8309:1;8277:20;;;;:8;:20;:::i;:::-;-1:-1:-1;;;;;8277:34:112;;8273:107;;8334:35;;-1:-1:-1;;;8334:35:112;;;;;;;;;;;4093:1323;4242:23;;4579:33;:7;4595:16;4579:15;:33::i;:::-;4558:54;;4632:28;4649:10;4632:16;:28::i;:::-;4622:38;;4748:7;4759:1;4748:12;4744:51;;4783:1;4776:8;;;;;4744:51;4889:15;;;;;;;;:::i;:::-;4885:492;;;4985:130;5020:7;5045:20;;;;:8;:20;:::i;:::-;5083:18;;;;:8;:18;:::i;:::-;4985:17;:130::i;:::-;4967:148;;4885:492;;;5195:132;5232:7;5257:20;;;;:8;:20;:::i;:::-;5295:18;;;;:8;:18;:::i;:::-;5195:19;:132::i;:::-;5359:7;5341:25;;4885:492;5387:22;4093:1323;;;;;:::o;32876:391::-;33045:7;33068:15;;;;;;;;:::i;:::-;33064:197;;;-1:-1:-1;33106:7:112;33099:14;;33064:197;33217:33;:7;33233:16;33217:15;:33::i;:::-;33210:40;;;;4450:203:44;4580:66;;-1:-1:-1;;;4580:66:44;;;;;6230:25:234;;;4542:7:44;;4597:17;-1:-1:-1;;;;;4580:52:44;;;;6203:18:234;;4580:66:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;11067:450:112:-;11166:21;11199:24;193:4:122;11226:19:112;:17;:19::i;:::-;:25;;;;:::i;:::-;11199:52;;11293:16;11277:13;:32;:95;;11371:1;11277:95;;;11324:32;11340:16;11324:13;:32;:::i;:::-;11261:111;-1:-1:-1;11464:46:112;11486:23;193:4:122;11486:17:112;:23;:::i;:::-;11464:13;;:21;:46::i;7433:1173:124:-;7540:7;7549:4;7926:19;7970:20;7992:12;8008:65;8052:7;8008:26;:65::i;:::-;7969:104;;;;8092:7;8087:64;;-1:-1:-1;8127:1:124;;;;-1:-1:-1;7433:1173:124;-1:-1:-1;;;;7433:1173:124:o;8087:64::-;8327:39;:7;:28;;;:37;:39::i;:::-;8278:30;8300:7;8278:21;:30::i;:::-;8246:13;8195:32;:7;:21;;;:30;:32::i;:::-;:64;;;;:::i;:::-;:113;;;;:::i;:::-;:171;;;;:::i;:::-;8164:202;;7955:422;;8508:1;8493:12;:16;8489:64;;;-1:-1:-1;8533:1:124;;;;-1:-1:-1;7433:1173:124;-1:-1:-1;;7433:1173:124:o;8489:64::-;8579:12;8594:4;;-1:-1:-1;7433:1173:124;-1:-1:-1;;7433:1173:124:o;898:556:122:-;1014:9;1279:1;-1:-1:-1;;1262:19:122;1259:1;1256:26;1253:1;1249:34;1242:42;1229:11;1225:60;1198:146;;1328:1;1325;1318:12;1198:146;-1:-1:-1;1415:9:122;;1411:27;;898:556::o;1198:469:119:-;1309:10;-1:-1:-1;;;;;1401:10:119;:89;1384:179;;;1522:30;;-1:-1:-1;;;1522:30:119;;;;;;;;;;;1384:179;-1:-1:-1;1624:4:119;1620:18;;;;1617:34;;1198:469::o;2004:200:125:-;2056:8;-1:-1:-1;;;;;2080:1:125;:29;2076:99;;;2132:32;;-1:-1:-1;;;2132:32:125;;;;;;;;;;;2076:99;-1:-1:-1;2195:1:125;2004:200::o;4059:629:166:-;4478:23;4504:33;-1:-1:-1;;;;;4504:27:166;;4532:4;4504:27;:33::i;:::-;4478:59;;4551:10;:17;4572:1;4551:22;;:57;;;;;4589:10;4578:30;;;;;;;;;;;;:::i;:::-;4577:31;4551:57;4547:135;;;4631:40;;-1:-1:-1;;;4631:40:166;;-1:-1:-1;;;;;2016:32:234;;4631:40:166;;;1998:51:234;1971:18;;4631:40:166;1852:203:234;4813::44;4944:65;;-1:-1:-1;;;4944:65:44;;;;;6230:25:234;;;4906:7:44;;4961:17;-1:-1:-1;;;;;4944:52:44;;;;6203:18:234;;4944:65:44;6084:177:234;2969:490:44;3287:132;;-1:-1:-1;;;3287:132:44;;;;;26440:25:234;;;-1:-1:-1;;;;;26539:15:234;;;26519:18;;;26512:43;3404:4:44;26571:18:234;;;26564:43;3123:23:44;;3304:17;3287:43;;;;;;26413:18:234;;3287:132:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;3269:150;2969:490;-1:-1:-1;;;;;2969:490:44:o;3701:325::-;3911:108;-1:-1:-1;;;;;3925:17:44;3911:46;3971:12;3997;3911:46;:108::i;11630:223:112:-;11706:24;11808:37;11826:19;11808:15;:37;:::i;:::-;11777:69;;:15;:69;:::i;8934:9443:124:-;9042:6;9050:4;9852:23;10007:130;:102;10075:7;:33;;;10007:7;:42;;;:67;;:102;;;;:::i;:::-;:128;:130::i;:::-;9878:114;:90;9935:7;:32;;;9878:7;:37;;;:56;;:90;;;;:::i;:114::-;:259;;;;:::i;:::-;9852:285;;10148:30;10180:12;10196:157;10277:7;:21;;;10316:7;:23;;;10196:63;:157::i;:::-;10147:206;;;;10368:7;10363:160;;-1:-1:-1;10503:1:124;;;;-1:-1:-1;8934:9443:124;-1:-1:-1;;;;8934:9443:124:o;10363:160::-;10772:1;10753:16;:20;10749:7595;;;10789:25;10825:16;10789:53;;11030:21;11092:401;11173:7;:21;;;11216:7;:23;;;11261:7;:20;;;11303:7;:28;;;11359:7;:19;;;193:4:122;11353:25:124;;;;:::i;:::-;11400:7;:23;;;11445:7;:30;;;11092:59;:401::i;:::-;11065:428;-1:-1:-1;11065:428:124;-1:-1:-1;11065:428:124;11507:176;;-1:-1:-1;11659:1:124;;;;-1:-1:-1;8934:9443:124;-1:-1:-1;;;;;;8934:9443:124:o;11507:176::-;11860:17;11843:13;:34;11839:2891;;12151:21;12217:389;12317:22;12365:7;:20;;;12411:17;12460:7;:19;;;193:4:122;12454:25:124;;;;:::i;:::-;12505:7;:23;;;12554:7;:30;;;12217:74;:389::i;:::-;12190:416;-1:-1:-1;12190:416:124;-1:-1:-1;12912:8:124;;:84;;;;;12964:7;:32;;;12944:17;:52;12912:84;12887:335;;;-1:-1:-1;13045:1:124;;13048:4;;-1:-1:-1;8934:9443:124;-1:-1:-1;;;;;;;8934:9443:124:o;12887:335::-;13155:7;13150:72;;-1:-1:-1;13194:1:124;;;;-1:-1:-1;8934:9443:124;-1:-1:-1;;;;;;;8934:9443:124:o;13150:72::-;13249:24;:13;:22;:24::i;:::-;13248:25;;;:::i;:::-;13240:40;13275:4;;-1:-1:-1;8934:9443:124;-1:-1:-1;;;;;;;;8934:9443:124:o;11839:2891::-;13965:1;13938:7;:23;;;:28;13934:782;;14024:95;14050:7;:28;;;14025:22;:53;;;;:::i;14024:95::-;14023:96;;;:::i;:::-;13990:181;14145:4;;-1:-1:-1;8934:9443:124;-1:-1:-1;;;;;;;8934:9443:124:o;13934:782::-;14576:28;;;;14552:21;;14551:94;;14552:52;;;:::i;10749:7595::-;14855:1;14836:16;:20;14832:3512;;;14872:25;14908:17;14909:16;14908:17;:::i;:::-;14872:54;;15043:21;15105:307;15186:22;15230:7;:20;;;15278:7;:19;;;193:4:122;15272:25:124;;;;:::i;:::-;15319:7;:23;;;15364:7;:30;;;15105:59;:307::i;:::-;15078:334;-1:-1:-1;15078:334:124;-1:-1:-1;15078:334:124;15426:64;;-1:-1:-1;15466:1:124;;;;-1:-1:-1;8934:9443:124;-1:-1:-1;;;;;;8934:9443:124:o;15426:64::-;15667:17;15650:13;:34;15646:2688;;15959:21;16025:387;16123:22;16171:7;:20;;;16217:17;16266:7;:19;;;193:4:122;16260:25:124;;;;:::i;:::-;16311:7;:23;;;16360:7;:30;;;16025:72;:387::i;:::-;15998:414;-1:-1:-1;15998:414:124;-1:-1:-1;16718:8:124;;:84;;;;;16770:7;:32;;;16750:17;:52;16718:84;16693:335;;;-1:-1:-1;16851:1:124;;16854:4;;-1:-1:-1;8934:9443:124;-1:-1:-1;;;;;;;8934:9443:124:o;16693:335::-;16961:7;16956:72;;-1:-1:-1;17000:1:124;;;;-1:-1:-1;8934:9443:124;-1:-1:-1;;;;;;;8934:9443:124:o;16956:72::-;17054:24;:13;:22;:24::i;15646:2688::-;17412:23;17482:335;17571:22;17619:7;:20;;;17671:7;:19;;;193:4:122;17665:25:124;;;;:::i;:::-;17716:7;:23;;;17765:7;:30;;;17482:63;:335::i;:::-;17453:364;-1:-1:-1;17453:364:124;-1:-1:-1;17453:364:124;17835:72;;-1:-1:-1;17879:1:124;;;;-1:-1:-1;8934:9443:124;-1:-1:-1;;;;;;;8934:9443:124:o;17835:72::-;18098:177;18141:122;18214:7;:23;;;18162:13;18142:17;:33;;;;:::i;:::-;18141:43;;:122::i;:::-;18099:164;;:15;:164;:::i;14832:3512::-;-1:-1:-1;18362:1:124;;18365:4;;-1:-1:-1;8934:9443:124;-1:-1:-1;;;;8934:9443:124:o;18624:1167::-;18727:6;19585:199;19603:156;19664:7;:32;;;193:4:122;19658:38:124;;;;:::i;:::-;19718:23;;;;19603:24;;;;;:156;:33;:156::i;19585:199::-;19367:203;19385:160;19449:7;:33;;;193:4:122;19443:39:124;;;;:::i;:::-;19504:23;;;;19385:25;;;;;:160;:36;:160::i;2705:151:167:-;2780:12;2811:38;2833:6;2841:4;2847:1;2811:21;:38::i;3190:114:122:-;3250:7;3277:19;3286:1;3289;193:4;3277:8;:19::i;7132:398:123:-;7271:7;7280:4;7296:29;7368:16;7328:25;:14;:23;:25::i;:::-;:56;;;;:::i;:::-;7296:88;;7423:1;7398:22;:26;7394:74;;;7448:1;7451:5;7440:17;;;;;;;7394:74;7493:22;-1:-1:-1;7518:4:123;;-1:-1:-1;7132:398:123;;;;;;:::o;16958:2070:126:-;17163:7;17172:4;17469:1;17462:4;:8;17458:67;;;17508:5;17509:4;17508:5;:::i;:::-;17493:21;;:4;:21;:::i;:::-;17486:28;;17458:67;18021:10;18033:12;18049:72;18113:1;18116:4;18049:63;:72::i;:::-;18020:101;;;;18137:7;18132:56;;18168:1;18171:5;18160:17;;;;;;;;18132:56;18197:9;18209:22;18215:2;18219:1;18222;18225;18228:2;18209:5;:22::i;:::-;18197:34;-1:-1:-1;18241:11:126;18255:37;18266:21;18285:1;18266:14;:2;18275:4;18266:8;:14::i;:::-;:18;;:21::i;:::-;18255:1;;18289:2;18255:10;:37::i;:::-;18241:51;;18310:3;18306:1;:7;18302:55;;;18337:1;18340:5;18329:17;;;;;;;;;;18302:55;18427:7;;;193:4:122;18458:15:126;;18454:295;;18572:28;18585:14;193:4:122;18597:1:126;18585:11;:14::i;:::-;18572:8;;:12;:28::i;:::-;18561:39;;18454:295;;;18712:26;18725:12;193:4:122;18735:1:126;18725:9;:12::i;18712:26::-;18701:37;;18454:295;18906:1;18895:8;:12;18891:60;;;18931:1;18934:5;18923:17;;;;;;;;;;;18891:60;18992:12;;;;-1:-1:-1;19006:4:126;;-1:-1:-1;;;;;16958:2070:126;;;;;;;;;;;:::o;11086:1515::-;11280:7;11289:4;11443:9;11455:20;11459:2;11463:1;11466;11469;11472:2;11455:3;:20::i;:::-;11443:32;-1:-1:-1;11518:15:126;11531:1;11519:6;11523:2;11519:1;:6;:::i;11518:15::-;11514:19;;11615:1;11611;:5;11607:53;;;11640:1;11643:5;11632:17;;;;;;;11607:53;11864:5;;;11894:18;11864:5;11906:2;11910:1;11894:11;:18::i;:::-;11889:23;;193:4:122;11926:2:126;:9;11922:263;;12025:20;12032:12;193:4:122;12042:1:126;12032:9;:12::i;12025:20::-;12020:25;;11922:263;;;12152:22;12159:14;193:4:122;12171:1:126;12159:11;:14::i;12152:22::-;12147:27;;11922:263;12267:12;:2;12276;12267:8;:12::i;:::-;12262:17;;12404:2;12399;:7;12395:55;;;12430:1;12433:5;12422:17;;;;;;;;12395:55;12570:7;;;-1:-1:-1;12579:4:126;;-1:-1:-1;;11086:1515:126;;;;;;;;;;:::o;15269:1050::-;15432:7;15441:4;15653:9;15665:20;15669:2;15673:1;15676;15679;15682:2;15665:3;:20::i;:::-;15653:32;-1:-1:-1;15695:16:126;15714:28;193:4:122;15722:13:126;:1;15732:2;15722:9;:13::i;:::-;:19;;;;:::i;:::-;15714:1;;:7;:28::i;:::-;15695:47;;193:4:122;15756:8:126;:15;15752:293;;15867:26;15880:12;193:4:122;15890:1:126;15880:9;:12::i;15867:26::-;15856:37;;15752:293;;;16006:28;16019:14;193:4:122;16031:1:126;16019:11;:14::i;16006:28::-;15995:39;;15752:293;16190:8;16186:1;:12;16182:60;;;16222:1;16225:5;16214:17;;;;;;;;16182:60;16283:12;;;-1:-1:-1;16297:4:126;;-1:-1:-1;;15269:1050:126;;;;;;;;;:::o;5309:1765::-;5501:7;5510:4;5664:9;5676:20;5680:2;5684:1;5687;5690;5693:2;5676:3;:20::i;:::-;5664:32;;5819:2;5815:1;:6;5811:54;;;5845:1;5848:5;5837:17;;;;;;;5811:54;5927:7;;;;;5958:8;5927:7;5964:1;5958:5;:8::i;:::-;5954:12;;6088:1;6084;:5;6080:53;;;6113:1;6116:5;6105:17;;;;;;;6080:53;6337:5;;;6367:18;6337:5;6379:2;6383:1;6367:11;:18::i;:::-;6362:23;;193:4:122;6399:2:126;:9;6395:261;;6497:20;6504:12;193:4:122;6514:1:126;6504:9;:12::i;6497:20::-;6492:25;;6395:261;;;6623:22;6630:14;193:4:122;6642:1:126;6630:11;:14::i;6623:22::-;6618:27;;6395:261;6738:12;:2;6747;6738:8;:12::i;:::-;6733:17;;6875:2;6870;:7;6866:55;;;6901:1;6904:5;6893:17;;;;;;;;6866:55;7043:7;;;;;7052:4;;-1:-1:-1;5309:1765:126;-1:-1:-1;;;;;;;5309:1765:126:o;13236:1409::-;13399:7;13408:4;13920:9;13932:22;13938:2;13942:1;13945;13948;13951:2;13932:5;:22::i;:::-;13920:34;-1:-1:-1;13964:17:126;13984:28;193:4:122;13994:11:126;:1;14002:2;13994:7;:11::i;:::-;:17;;;;:::i;13984:28::-;13964:48;;193:4:122;14026:9:126;:16;14022:300;;14142:29;14156:14;193:4:122;14168:1:126;14156:11;:14::i;14142:29::-;14130:41;;14022:300;;;14284:27;14298:12;193:4:122;14308:1:126;14298:9;:12::i;14284:27::-;14272:39;;14022:300;14343:21;:9;14361:2;14343:17;:21::i;:::-;14331:33;;14520:2;14508:9;:14;14504:62;;;14546:1;14549:5;14538:17;;;;;;;;14504:62;14607:14;;;;;14623:4;;-1:-1:-1;13236:1409:126;-1:-1:-1;;;;;;13236:1409:126:o;2284:748:122:-;2398:9;2663:1;-1:-1:-1;;2646:19:122;2643:1;2640:26;2637:1;2633:34;2626:42;2613:11;2609:60;2582:146;;2712:1;2709;2702:12;2582:146;-1:-1:-1;2979:9:122;;2926:27;;;2923:34;;2975:27;;;2902:114;;2284:748::o;3180:392:167:-;3279:12;3331:5;3307:21;:29;3303:108;;;3359:41;;-1:-1:-1;;;3359:41:167;;3394:4;3359:41;;;1998:51:234;1971:18;;3359:41:167;1852:203:234;3303:108:167;3421:12;3435:23;3462:6;-1:-1:-1;;;;;3462:11:167;3481:5;3488:4;3462:31;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3420:73;;;;3510:55;3537:6;3545:7;3554:10;3510:26;:55::i;:::-;3503:62;3180:392;-1:-1:-1;;;;;;3180:392:167:o;20391:352:126:-;20532:7;20728:8;:1;20734;20728:5;:8::i;:::-;20686:39;20699:21;20718:1;20699:14;:2;20710;20699:10;:14::i;:21::-;20686:1;;20722:2;20686:12;:39::i;:::-;:50;;;;:::i;3811:844:122:-;3869:7;3935:1;3940;3935:6;3931:47;;-1:-1:-1;193:4:122;3957:10;;3931:47;4031:1;4036;4031:6;4027:45;;-1:-1:-1;4060:1:122;4053:8;;4027:45;4210:15;4228:12;:1;:10;:12::i;:::-;4210:30;;4402:10;4415:16;4418:12;:1;:10;:12::i;:::-;4415:2;:16::i;:::-;4402:29;-1:-1:-1;4509:18:122;;;4546:19;193:4;4509:18;4546:19;:::i;:::-;;;4638:9;4642:4;4638:3;:9::i;3462:114::-;3522:7;3549:19;3558:1;193:4;3566:1;3549:8;:19::i;19535:343:126:-;19674:7;19863:8;:1;19869;19863:5;:8::i;:::-;19825:35;19836:19;19853:1;19836:12;:2;19845;19836:8;:12::i;:19::-;19825:1;;19857:2;19825:10;:35::i;4625:582:167:-;4769:12;4798:7;4793:408;;4821:19;4829:10;4821:7;:19::i;:::-;4793:408;;;5045:17;;:22;:49;;;;-1:-1:-1;;;;;;5071:18:167;;;:23;5045:49;5041:119;;;5121:24;;-1:-1:-1;;;5121:24:167;;-1:-1:-1;;;;;2016:32:234;;5121:24:167;;;1998:51:234;1971:18;;5121:24:167;1852:203:234;5041:119:167;-1:-1:-1;5180:10:167;5173:17;;8508:3846:122;8553:8;8606:1;8601;:6;8597:80;;8634:28;;-1:-1:-1;;;8634:28:122;;;;;;;;;;;8597:80;-1:-1:-1;;;;;;9286:41:122;-1:-1:-1;9283:1:122;9279:49;9386:9;;;9366:18;9363:33;9360:1;9356:41;9350:48;9448:9;;;9436:10;9433:25;9430:1;9426:33;9420:40;9506:9;;;9498:6;9495:21;9492:1;9488:29;9482:36;9562:9;;;9556:4;9553:19;9550:1;9546:27;;;9540:34;;;9617:9;;;9612:3;9609:18;9606:1;9602:26;9596:33;9672:9;;;9664:18;;;9661:1;9657:26;;;9651:33;;;9720:9;;;9712:18;;;9706:25;9902:3;:7;;;9872:2;9902:7;9888:22;;;;;-1:-1:-1;;9868:6:122;;;9928:30;;9929:17;;;9928:28;:30::i;:::-;10733:31;10729:35;;10784:5;;10191:2;10783:13;;;10800:32;10782:50;10852:5;;10851:13;;10868:33;10850:51;10921:5;;10920:13;;10937:33;10919:51;10990:5;;10989:13;;11006:33;10988:51;11059:5;;11058:13;;11075:32;11057:50;11127:5;;11126:13;;11143:30;11125:48;10130:31;10126:35;;10181:5;;10180:13;;10197:32;10179:50;10249:5;;10248:13;;10265:32;10247:50;10317:5;;10316:13;;-1:-1:-1;;10315:50:122;10385:5;;10384:13;;-1:-1:-1;;10383:50:122;10453:5;;10452:13;;;-1:-1:-1;;10451:50:122;10519:5;;;-1:-1:-1;;10519:46:122;11514:10;11904:43;11899:48;12027:71;:91;;;;12006:112;12191:72;12186:77;12334:3;12328:9;;;-1:-1:-1;;8508:3846:122:o;4907:3302::-;4953:8;-1:-1:-1;;5130:1:122;:26;5126:40;;-1:-1:-1;5165:1:122;;4907:3302;-1:-1:-1;4907:3302:122:o;5126:40::-;5365:21;5360:1;:26;5356:87;;5411:32;;-1:-1:-1;;;5411:32:122;;;;;;;;;;;5356:87;5716:7;5710:2;5705:7;;;5704:19;;-1:-1:-1;6052:8:122;6136:2;6076:29;6065:7;;;6064:41;-1:-1:-1;;;6064:51:122;6063:75;;6164:29;6160:33;;6156:37;;;;-1:-1:-1;;6835:35:122;;6890:5;;6470:2;6889:13;;;6906:32;6888:50;6958:5;;6957:13;;-1:-1:-1;;6956:51:122;7027:5;;7026:13;;7043:34;7025:52;7097:5;;7096:13;;-1:-1:-1;;7095:53:122;7168:5;;7167:13;;7184:35;7166:53;6476:32;6409:31;6405:35;;6460:5;;6459:13;;6458:50;;;6533:5;;;-1:-1:-1;;6533:40:122;6593:5;;6592:13;;;6609:35;6591:53;6662:5;;-1:-1:-1;;;6662:50:122;7584:10;;;;-1:-1:-1;6063:75:122;;-1:-1:-1;6458:50:122;;6662;8063:129;8094:49;8065:78;;8172:3;:7;;;8064:116;8063:127;:129::i;5743:516:167:-;5874:17;;:21;5870:383;;6102:10;6096:17;6158:15;6145:10;6141:2;6137:19;6130:44;5870:383;6225:17;;-1:-1:-1;;;6225:17:167;;;;;;;;;;;-1:-1:-1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;14:180:234:-;73:6;126:2;114:9;105:7;101:23;97:32;94:52;;;142:1;139;132:12;94:52;-1:-1:-1;165:23:234;;14:180;-1:-1:-1;14:180:234:o;199:250::-;284:1;294:113;308:6;305:1;302:13;294:113;;;384:11;;;378:18;365:11;;;358:39;330:2;323:10;294:113;;;-1:-1:-1;;441:1:234;423:16;;416:27;199:250::o;454:271::-;496:3;534:5;528:12;561:6;556:3;549:19;577:76;646:6;639:4;634:3;630:14;623:4;616:5;612:16;577:76;:::i;:::-;707:2;686:15;-1:-1:-1;;682:29:234;673:39;;;;714:4;669:50;;454:271;-1:-1:-1;;454:271:234:o;730:220::-;879:2;868:9;861:21;842:4;899:45;940:2;929:9;925:18;917:6;899:45;:::i;955:139::-;-1:-1:-1;;;;;1038:31:234;;1028:42;;1018:70;;1084:1;1081;1074:12;1099:270;1173:6;1226:2;1214:9;1205:7;1201:23;1197:32;1194:52;;;1242:1;1239;1232:12;1194:52;1281:9;1268:23;1300:39;1333:5;1300:39;:::i;1374:118::-;1460:5;1453:13;1446:21;1439:5;1436:32;1426:60;;1482:1;1479;1472:12;1497:241;1553:6;1606:2;1594:9;1585:7;1581:23;1577:32;1574:52;;;1622:1;1619;1612:12;1574:52;1661:9;1648:23;1680:28;1702:5;1680:28;:::i;2060:114::-;2144:4;2137:5;2133:16;2126:5;2123:27;2113:55;;2164:1;2161;2154:12;2179:1022;2305:6;2313;2321;2329;2337;2345;2353;2361;2369;2422:3;2410:9;2401:7;2397:23;2393:33;2390:53;;;2439:1;2436;2429:12;2390:53;2475:9;2462:23;2452:33;;2532:2;2521:9;2517:18;2504:32;2494:42;;2586:2;2575:9;2571:18;2558:32;2599:39;2632:5;2599:39;:::i;:::-;2657:5;-1:-1:-1;2714:2:234;2699:18;;2686:32;2727:41;2686:32;2727:41;:::i;:::-;2787:7;-1:-1:-1;2846:3:234;2831:19;;2818:33;2860:30;2818:33;2860:30;:::i;:::-;2909:7;-1:-1:-1;2963:3:234;2948:19;;2935:33;;-1:-1:-1;3020:3:234;3005:19;;2992:33;3034:31;2992:33;3034:31;:::i;:::-;3084:7;3074:17;;;3138:3;3127:9;3123:19;3110:33;3100:43;;3190:3;3179:9;3175:19;3162:33;3152:43;;2179:1022;;;;;;;;;;;:::o;3206:367::-;3269:8;3279:6;3333:3;3326:4;3318:6;3314:17;3310:27;3300:55;;3351:1;3348;3341:12;3300:55;-1:-1:-1;3374:20:234;;3417:18;3406:30;;3403:50;;;3449:1;3446;3439:12;3403:50;3486:4;3478:6;3474:17;3462:29;;3546:3;3539:4;3529:6;3526:1;3522:14;3514:6;3510:27;3506:38;3503:47;3500:67;;;3563:1;3560;3553:12;3578:1066;3718:6;3726;3734;3742;3750;3758;3811:3;3799:9;3790:7;3786:23;3782:33;3779:53;;;3828:1;3825;3818:12;3779:53;3867:9;3854:23;3886:39;3919:5;3886:39;:::i;:::-;3944:5;-1:-1:-1;4001:2:234;3986:18;;3973:32;4014:41;3973:32;4014:41;:::i;:::-;4074:7;-1:-1:-1;4132:2:234;4117:18;;4104:32;4155:18;4185:14;;;4182:34;;;4212:1;4209;4202:12;4182:34;4251:70;4313:7;4304:6;4293:9;4289:22;4251:70;:::i;:::-;4340:8;;-1:-1:-1;4225:96:234;-1:-1:-1;4428:2:234;4413:18;;4400:32;;-1:-1:-1;4444:16:234;;;4441:36;;;4473:1;4470;4463:12;4441:36;;4512:72;4576:7;4565:8;4554:9;4550:24;4512:72;:::i;:::-;3578:1066;;;;-1:-1:-1;3578:1066:234;;-1:-1:-1;3578:1066:234;;4603:8;;3578:1066;-1:-1:-1;;;3578:1066:234:o;4649:541::-;4735:6;4743;4751;4759;4812:3;4800:9;4791:7;4787:23;4783:33;4780:53;;;4829:1;4826;4819:12;4780:53;4865:9;4852:23;4842:33;;4925:2;4914:9;4910:18;4897:32;4938:39;4971:5;4938:39;:::i;:::-;4996:5;-1:-1:-1;5053:2:234;5038:18;;5025:32;5066:41;5025:32;5066:41;:::i;:::-;4649:541;;;;-1:-1:-1;5126:7:234;;5180:2;5165:18;5152:32;;-1:-1:-1;;4649:541:234:o;5607:472::-;5684:6;5692;5700;5753:2;5741:9;5732:7;5728:23;5724:32;5721:52;;;5769:1;5766;5759:12;5721:52;5805:9;5792:23;5782:33;;5865:2;5854:9;5850:18;5837:32;5878:39;5911:5;5878:39;:::i;:::-;5936:5;-1:-1:-1;5993:2:234;5978:18;;5965:32;6006:41;5965:32;6006:41;:::i;:::-;6066:7;6056:17;;;5607:472;;;;;:::o;6455:323::-;6523:6;6531;6584:2;6572:9;6563:7;6559:23;6555:32;6552:52;;;6600:1;6597;6590:12;6552:52;6636:9;6623:23;6613:33;;6696:2;6685:9;6681:18;6668:32;6709:39;6742:5;6709:39;:::i;:::-;6767:5;6757:15;;;6455:323;;;;;:::o;6783:387::-;6870:6;6923:2;6911:9;6902:7;6898:23;6894:32;6891:52;;;6939:1;6936;6929:12;6891:52;6979:9;6966:23;7012:18;7004:6;7001:30;6998:50;;;7044:1;7041;7034:12;6998:50;7067:22;;7123:2;7105:16;;;7101:25;7098:45;;;7139:1;7136;7129:12;7723:541;7809:6;7817;7825;7833;7886:3;7874:9;7865:7;7861:23;7857:33;7854:53;;;7903:1;7900;7893:12;7854:53;7939:9;7926:23;7916:33;;7999:2;7988:9;7984:18;7971:32;8012:39;8045:5;8012:39;:::i;:::-;8070:5;-1:-1:-1;8122:2:234;8107:18;;8094:32;;-1:-1:-1;8178:2:234;8163:18;;8150:32;8191:41;8150:32;8191:41;:::i;:::-;7723:541;;;;-1:-1:-1;7723:541:234;;-1:-1:-1;;7723:541:234:o;8269:1268::-;8488:13;;8470:32;;8558:4;8546:17;;;8540:24;8518:20;;;8511:54;8621:4;8609:17;;;8603:24;8581:20;;;8574:54;8684:4;8672:17;;;8666:24;8644:20;;;8637:54;8747:4;8735:17;;;8729:24;8707:20;;;8700:54;8810:4;8798:17;;;8792:24;8770:20;;;8763:54;8873:4;8861:17;;;8855:24;8833:20;;;8826:54;8936:4;8924:17;;;8918:24;8896:20;;;8889:54;8962:6;9010:15;;;9004:22;8984:18;;;8977:50;9046:6;9094:15;;;9088:22;9068:18;;;9061:50;9130:6;9178:15;;;9172:22;9152:18;;;9145:50;9214:6;9262:15;;;9256:22;9236:18;;;9229:50;9298:6;9346:15;;;9340:22;9320:18;;;9313:50;9382:6;9430:15;;;9424:22;9404:18;;;9397:50;9466:6;9514:15;;;9508:22;9488:18;;;9481:50;;;;8457:3;8442:19;;8269:1268::o;9542:390::-;9607:6;9615;9668:2;9656:9;9647:7;9643:23;9639:32;9636:52;;;9684:1;9681;9674:12;9636:52;9723:9;9710:23;9742:39;9775:5;9742:39;:::i;:::-;9800:5;-1:-1:-1;9857:2:234;9842:18;;9829:32;9870:30;9829:32;9870:30;:::i;9937:391::-;10014:6;10022;10030;10083:2;10071:9;10062:7;10058:23;10054:32;10051:52;;;10099:1;10096;10089:12;10051:52;10135:9;10122:23;10112:33;;10195:2;10184:9;10180:18;10167:32;10208:39;10241:5;10208:39;:::i;:::-;9937:391;;10266:5;;-1:-1:-1;;;10318:2:234;10303:18;;;;10290:32;;9937:391::o;10595:1542::-;10819:13;;-1:-1:-1;;;;;1809:31:234;1797:44;;10787:3;10772:19;;10891:4;10883:6;10879:17;10873:24;10906:54;10954:4;10943:9;10939:20;10925:12;-1:-1:-1;;;;;1809:31:234;1797:44;;1743:104;10906:54;;11009:4;11001:6;10997:17;10991:24;11024:56;11074:4;11063:9;11059:20;11043:14;-1:-1:-1;;;;;1809:31:234;1797:44;;1743:104;11024:56;;11136:4;11128:6;11124:17;11118:24;11111:4;11100:9;11096:20;11089:54;11199:4;11191:6;11187:17;11181:24;11174:4;11163:9;11159:20;11152:54;11262:4;11254:6;11250:17;11244:24;11237:4;11226:9;11222:20;11215:54;11325:4;11317:6;11313:17;11307:24;11300:4;11289:9;11285:20;11278:54;11388:4;11380:6;11376:17;11370:24;11363:4;11352:9;11348:20;11341:54;11414:6;11474:2;11466:6;11462:15;11456:22;11451:2;11440:9;11436:18;11429:50;;11498:6;11558:2;11550:6;11546:15;11540:22;11535:2;11524:9;11520:18;11513:50;;11582:6;11637:2;11629:6;11625:15;11619:22;11650:54;11700:2;11689:9;11685:18;11669:14;-1:-1:-1;;;;;1809:31:234;1797:44;;1743:104;11650:54;-1:-1:-1;;11723:6:234;11766:15;;;11760:22;-1:-1:-1;;;;;1809:31:234;;11826:18;;;1797:44;-1:-1:-1;;11864:6:234;11907:15;;;11901:22;-1:-1:-1;;;;;1809:31:234;;11967:18;;;1797:44;-1:-1:-1;;12005:6:234;12048:15;;;12042:22;10403:12;;12112:18;;;10391:25;10465:4;10454:16;;10448:23;10432:14;;;10425:47;10521:4;10510:16;;10504:23;10488:14;;;10481:47;10577:4;10566:16;;10560:23;10544:14;;;10537:47;12073:58;;;10595:1542;;;;:::o;12142:437::-;12228:6;12236;12289:2;12277:9;12268:7;12264:23;12260:32;12257:52;;;12305:1;12302;12295:12;12257:52;12345:9;12332:23;12378:18;12370:6;12367:30;12364:50;;;12410:1;12407;12400:12;12364:50;12449:70;12511:7;12502:6;12491:9;12487:22;12449:70;:::i;:::-;12538:8;;12423:96;;-1:-1:-1;12142:437:234;-1:-1:-1;;;;12142:437:234:o;12584:632::-;12755:2;12807:21;;;12877:13;;12780:18;;;12899:22;;;12726:4;;12755:2;12978:15;;;;12952:2;12937:18;;;12726:4;13021:169;13035:6;13032:1;13029:13;13021:169;;;13096:13;;13084:26;;13165:15;;;;13130:12;;;;13057:1;13050:9;13021:169;;;-1:-1:-1;13207:3:234;;12584:632;-1:-1:-1;;;;;;12584:632:234:o;13619:1652::-;13845:13;;-1:-1:-1;;;;;5261:46:234;5249:59;;13813:3;13798:19;;13917:4;13909:6;13905:17;13899:24;13932:54;13980:4;13969:9;13965:20;13951:12;-1:-1:-1;;;;;5261:46:234;5249:59;;5195:119;13932:54;;14035:4;14027:6;14023:17;14017:24;14050:56;14100:4;14089:9;14085:20;14069:14;-1:-1:-1;;;;;5261:46:234;5249:59;;5195:119;14050:56;;14155:4;14147:6;14143:17;14137:24;14170:56;14220:4;14209:9;14205:20;14189:14;-1:-1:-1;;;;;5261:46:234;5249:59;;5195:119;14170:56;;14275:4;14267:6;14263:17;14257:24;14290:55;14339:4;14328:9;14324:20;14308:14;13477:2;13466:21;13454:34;;13401:93;14290:55;;14394:4;14386:6;14382:17;14376:24;14409:56;14459:4;14448:9;14444:20;14428:14;-1:-1:-1;;;;;5261:46:234;5249:59;;5195:119;14409:56;;14514:4;14506:6;14502:17;14496:24;14529:56;14579:4;14568:9;14564:20;14548:14;-1:-1:-1;;;;;5261:46:234;5249:59;;5195:119;14529:56;;14634:4;14626:6;14622:17;14616:24;14649:56;14699:4;14688:9;14684:20;14668:14;-1:-1:-1;;;;;5261:46:234;5249:59;;5195:119;14649:56;-1:-1:-1;14724:6:234;14767:15;;;14761:22;7505:13;7498:21;14824:18;;;7486:34;14862:6;14905:15;;;14899:22;7505:13;7498:21;14962:18;;;7486:34;15000:6;15043:15;;;15037:22;-1:-1:-1;;;;;13565:42:234;15103:18;;;13553:55;15141:6;15185:15;;;15179:22;-1:-1:-1;;;;;5261:46:234;;15246:18;;;5249:59;15210:55;5195:119;15276:691;15371:6;15379;15387;15395;15403;15456:3;15444:9;15435:7;15431:23;15427:33;15424:53;;;15473:1;15470;15463:12;15424:53;15509:9;15496:23;15486:33;;15569:2;15558:9;15554:18;15541:32;15582:39;15615:5;15582:39;:::i;:::-;15640:5;-1:-1:-1;15697:2:234;15682:18;;15669:32;15710:41;15669:32;15710:41;:::i;:::-;15770:7;-1:-1:-1;15824:2:234;15809:18;;15796:32;;-1:-1:-1;15880:3:234;15865:19;;15852:33;15894:41;15852:33;15894:41;:::i;:::-;15954:7;15944:17;;;15276:691;;;;;;;;:::o;15972:404::-;16040:6;16048;16101:2;16089:9;16080:7;16076:23;16072:32;16069:52;;;16117:1;16114;16107:12;16069:52;16156:9;16143:23;16175:39;16208:5;16175:39;:::i;:::-;16233:5;-1:-1:-1;16290:2:234;16275:18;;16262:32;16303:41;16262:32;16303:41;:::i;17274:247::-;17342:6;17395:2;17383:9;17374:7;17370:23;17366:32;17363:52;;;17411:1;17408;17401:12;17363:52;17443:9;17437:16;17462:29;17485:5;17462:29;:::i;17526:127::-;17587:10;17582:3;17578:20;17575:1;17568:31;17618:4;17615:1;17608:15;17642:4;17639:1;17632:15;17658:127;17719:10;17714:3;17710:20;17707:1;17700:31;17750:4;17747:1;17740:15;17774:4;17771:1;17764:15;17790:125;17855:9;;;17876:10;;;17873:36;;;17889:18;;:::i;17920:128::-;17987:9;;;18008:11;;;18005:37;;;18022:18;;:::i;18053:127::-;18114:10;18109:3;18105:20;18102:1;18095:31;18145:4;18142:1;18135:15;18169:4;18166:1;18159:15;18185:127;18246:10;18241:3;18237:20;18234:1;18227:31;18277:4;18274:1;18267:15;18301:4;18298:1;18291:15;19737:449;-1:-1:-1;;;19994:3:234;19987:32;19969:3;20048:6;20042:13;20064:75;20132:6;20127:2;20122:3;20118:12;20111:4;20103:6;20099:17;20064:75;:::i;:::-;20159:16;;;;20177:2;20155:25;;19737:449;-1:-1:-1;;19737:449:234:o;20191:450::-;-1:-1:-1;;;20448:3:234;20441:33;20423:3;20503:6;20497:13;20519:75;20587:6;20582:2;20577:3;20573:12;20566:4;20558:6;20554:17;20519:75;:::i;:::-;20614:16;;;;20632:2;20610:25;;20191:450;-1:-1:-1;;20191:450:234:o;20869:184::-;20939:6;20992:2;20980:9;20971:7;20967:23;20963:32;20960:52;;;21008:1;21005;20998:12;20960:52;-1:-1:-1;21031:16:234;;20869:184;-1:-1:-1;20869:184:234:o;22717:448::-;-1:-1:-1;;;22974:3:234;22967:31;22949:3;23027:6;23021:13;23043:75;23111:6;23106:2;23101:3;23097:12;23090:4;23082:6;23078:17;23043:75;:::i;:::-;23138:16;;;;23156:2;23134:25;;22717:448;-1:-1:-1;;22717:448:234:o;23170:449::-;-1:-1:-1;;;23427:3:234;23420:32;23402:3;23481:6;23475:13;23497:75;23565:6;23560:2;23555:3;23551:12;23544:4;23536:6;23532:17;23497:75;:::i;24349:200::-;24415:9;;;24388:4;24443:9;;24471:10;;24483:12;;;24467:29;24506:12;;;24498:21;;24464:56;24461:82;;;24523:18;;:::i;24554:127::-;24615:10;24610:3;24606:20;24603:1;24596:31;24646:4;24643:1;24636:15;24670:4;24667:1;24660:15;24686:112;24718:1;24744;24734:35;;24749:18;;:::i;:::-;-1:-1:-1;24783:9:234;;24686:112::o;24803:135::-;24842:3;24863:17;;;24860:43;;24883:18;;:::i;:::-;-1:-1:-1;24930:1:234;24919:13;;24803:135::o;24943:120::-;24983:1;25009;24999:35;;25014:18;;:::i;:::-;-1:-1:-1;25048:9:234;;24943:120::o;25068:521::-;25145:4;25151:6;25211:11;25198:25;25305:2;25301:7;25290:8;25274:14;25270:29;25266:43;25246:18;25242:68;25232:96;;25324:1;25321;25314:12;25232:96;25351:33;;25403:20;;;-1:-1:-1;25446:18:234;25435:30;;25432:50;;;25478:1;25475;25468:12;25432:50;25511:4;25499:17;;-1:-1:-1;25542:14:234;25538:27;;;25528:38;;25525:58;;;25579:1;25576;25569:12;25594:168;25667:9;;;25698;;25715:15;;;25709:22;;25695:37;25685:71;;25736:18;;:::i;25767:216::-;25831:9;;;25859:11;;;25806:3;25889:9;;25917:10;;25913:19;;25942:10;;25934:19;;25910:44;25907:70;;;25957:18;;:::i;25988:245::-;26055:6;26108:2;26096:9;26087:7;26083:23;26079:32;26076:52;;;26124:1;26121;26114:12;26076:52;26156:9;26150:16;26175:28;26197:5;26175:28;:::i;26618:136::-;26653:3;-1:-1:-1;;;26674:22:234;;26671:48;;26699:18;;:::i;:::-;-1:-1:-1;26739:1:234;26735:13;;26618:136::o;26759:287::-;26888:3;26926:6;26920:13;26942:66;27001:6;26996:3;26989:4;26981:6;26977:17;26942:66;:::i;:::-;27024:16;;;;;26759:287;-1:-1:-1;;26759:287:234:o;27051:193::-;27090:1;27116;27106:35;;27121:18;;:::i;:::-;-1:-1:-1;;;27157:18:234;;-1:-1:-1;;27177:13:234;;27153:38;27150:64;;;27194:18;;:::i;:::-;-1:-1:-1;27228:10:234;;27051:193::o";
        readonly linkReferences: {};
        readonly immutableReferences: {
            readonly "17532": readonly [{
                readonly start: 1615;
                readonly length: 32;
            }, {
                readonly start: 2764;
                readonly length: 32;
            }, {
                readonly start: 3606;
                readonly length: 32;
            }];
            readonly "17536": readonly [{
                readonly start: 1351;
                readonly length: 32;
            }, {
                readonly start: 2801;
                readonly length: 32;
            }, {
                readonly start: 8404;
                readonly length: 32;
            }, {
                readonly start: 8881;
                readonly length: 32;
            }, {
                readonly start: 9509;
                readonly length: 32;
            }, {
                readonly start: 9611;
                readonly length: 32;
            }, {
                readonly start: 9744;
                readonly length: 32;
            }];
            readonly "17539": readonly [{
                readonly start: 3082;
                readonly length: 32;
            }, {
                readonly start: 9790;
                readonly length: 32;
            }];
            readonly "17542": readonly [{
                readonly start: 3044;
                readonly length: 32;
            }, {
                readonly start: 3695;
                readonly length: 32;
            }, {
                readonly start: 9072;
                readonly length: 32;
            }];
            readonly "17545": readonly [{
                readonly start: 3121;
                readonly length: 32;
            }, {
                readonly start: 7387;
                readonly length: 32;
            }];
            readonly "17548": readonly [{
                readonly start: 3201;
                readonly length: 32;
            }];
            readonly "17551": readonly [{
                readonly start: 3236;
                readonly length: 32;
            }];
            readonly "17554": readonly [{
                readonly start: 3273;
                readonly length: 32;
            }];
            readonly "17557": readonly [{
                readonly start: 3310;
                readonly length: 32;
            }];
            readonly "17560": readonly [{
                readonly start: 2926;
                readonly length: 32;
            }, {
                readonly start: 7273;
                readonly length: 32;
            }];
            readonly "17563": readonly [{
                readonly start: 2968;
                readonly length: 32;
            }, {
                readonly start: 7311;
                readonly length: 32;
            }];
            readonly "17566": readonly [{
                readonly start: 3006;
                readonly length: 32;
            }, {
                readonly start: 7349;
                readonly length: 32;
            }];
            readonly "17600": readonly [{
                readonly start: 2845;
                readonly length: 32;
            }, {
                readonly start: 6848;
                readonly length: 32;
            }];
            readonly "17603": readonly [{
                readonly start: 2884;
                readonly length: 32;
            }, {
                readonly start: 6909;
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
        readonly "setFeeCollector(address)": "a42dce80";
        readonly "setGovernance(address)": "ab033ea9";
        readonly "setPauser(address,bool)": "7180c8ca";
        readonly "setSweepCollector(address)": "e4af29d1";
        readonly "sweep(address)": "01681a62";
        readonly "symbol(uint256)": "4e41a1fb";
        readonly "totalSupply(uint256)": "bd85b039";
        readonly "transferFrom(uint256,address,address,uint256)": "1c0f12b6";
        readonly "transferFromBridge(uint256,address,address,uint256,address)": "e44808bc";
        readonly "vaultSharesToken()": "0a4e1493";
    };
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"contract IERC20\",\"name\":\"vaultSharesToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"sweepCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolConfig\",\"name\":\"_config\",\"type\":\"tuple\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"name\":\"AddressEmptyCode\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"AddressInsufficientBalance\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"BatchInputLengthMismatch\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ExpInvalidExponent\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ExpiredDeadline\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FailedInnerCall\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidERC20Bridge\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFeeDestination\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPresentValue\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidSignature\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTimestamp\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"LnInvalidInput\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"RestrictedZeroAddress\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"ReturnData\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"}],\"name\":\"SafeERC20FailedOperation\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"SweepFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"Unauthorized\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToInt256\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"basePayment\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fees\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"checkpointVaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newFeeCollector\",\"type\":\"address\"}],\"name\":\"FeeCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseProceeds\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"}],\"name\":\"PauseStatusUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"name\":\"Sweep\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newSweepCollector\",\"type\":\"address\"}],\"name\":\"SweepCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"baseToken\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"values\",\"type\":\"uint256[]\"}],\"name\":\"batchTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"collectGovernanceFee\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"proceeds\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_checkpointTime\",\"type\":\"uint256\"}],\"name\":\"getCheckpoint\",\"outputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"vaultSharePrice\",\"type\":\"uint128\"}],\"internalType\":\"struct IHyperdrive.Checkpoint\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_checkpointTime\",\"type\":\"uint256\"}],\"name\":\"getCheckpointExposure\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getMarketState\",\"outputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"shareReserves\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"bondReserves\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longExposure\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longsOutstanding\",\"type\":\"uint128\"},{\"internalType\":\"int128\",\"name\":\"shareAdjustment\",\"type\":\"int128\"},{\"internalType\":\"uint128\",\"name\":\"shortsOutstanding\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longAverageMaturityTime\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"shortAverageMaturityTime\",\"type\":\"uint128\"},{\"internalType\":\"bool\",\"name\":\"isInitialized\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"},{\"internalType\":\"uint112\",\"name\":\"zombieBaseProceeds\",\"type\":\"uint112\"},{\"internalType\":\"uint128\",\"name\":\"zombieShareReserves\",\"type\":\"uint128\"}],\"internalType\":\"struct IHyperdrive.MarketState\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getPoolConfig\",\"outputs\":[{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"contract IERC20\",\"name\":\"vaultSharesToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"sweepCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolConfig\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getPoolInfo\",\"outputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"zombieBaseProceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"zombieShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"lpTotalSupply\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longAverageMaturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortAverageMaturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalSharesReadyToWithdraw\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalSharesProceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longExposure\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.PoolInfo\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getUncollectedGovernanceFees\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getWithdrawPool\",\"outputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"readyToWithdraw\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"proceeds\",\"type\":\"uint128\"}],\"internalType\":\"struct IHyperdrive.WithdrawPool\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_account\",\"type\":\"address\"}],\"name\":\"isPauser\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256[]\",\"name\":\"_slots\",\"type\":\"uint256[]\"}],\"name\":\"load\",\"outputs\":[{\"internalType\":\"bytes32[]\",\"name\":\"\",\"type\":\"bytes32[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"nonces\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"_status\",\"type\":\"bool\"}],\"name\":\"pause\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"perTokenApprovals\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"domainSeparator\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"permitTypeHash\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_approved\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permitForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"setApproval\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"setApprovalBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_who\",\"type\":\"address\"}],\"name\":\"setFeeCollector\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_who\",\"type\":\"address\"}],\"name\":\"setGovernance\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"who\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"setPauser\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_who\",\"type\":\"address\"}],\"name\":\"setSweepCollector\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"_target\",\"type\":\"address\"}],\"name\":\"sweep\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"transferFromBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"vaultSharesToken\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"errors\":{\"AddressEmptyCode(address)\":[{\"details\":\"There's no code at `target` (it is not a contract).\"}],\"AddressInsufficientBalance(address)\":[{\"details\":\"The ETH balance of the account is not enough to perform the operation.\"}],\"FailedInnerCall()\":[{\"details\":\"A call to an address target failed. The target may have reverted.\"}],\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}],\"SafeERC20FailedOperation(address)\":[{\"details\":\"An operation with an ERC20 token failed.\"}]},\"kind\":\"dev\",\"methods\":{\"balanceOf(uint256,address)\":{\"params\":{\"account\":\"The account.\",\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The balance.\"}},\"baseToken()\":{\"returns\":{\"_0\":\"The base token address.\"}},\"batchTransferFrom(address,address,uint256[],uint256[])\":{\"params\":{\"from\":\"The source account.\",\"ids\":\"The array of token ids of the asset to transfer.\",\"to\":\"The destination account.\",\"values\":\"The amount of each token to transfer.\"}},\"collectGovernanceFee((address,bool,bytes))\":{\"params\":{\"_options\":\"The options that configure how the fees are settled.\"},\"returns\":{\"proceeds\":\"The governance fees collected. The units of this         quantity are either base or vault shares, depending on the value         of `_options.asBase`.\"}},\"constructor\":{\"params\":{\"_config\":\"The configuration of the Hyperdrive pool.\"}},\"decimals()\":{\"returns\":{\"_0\":\"The decimals of the MultiToken.\"}},\"getCheckpoint(uint256)\":{\"params\":{\"_checkpointTime\":\"The checkpoint time.\"},\"returns\":{\"_0\":\"The checkpoint.\"}},\"getCheckpointExposure(uint256)\":{\"params\":{\"_checkpointTime\":\"The checkpoint time.\"},\"returns\":{\"_0\":\"The checkpoint exposure.\"}},\"getMarketState()\":{\"returns\":{\"_0\":\"The market state.\"}},\"getPoolConfig()\":{\"details\":\"These parameters are immutable, so this should only need to be      called once.\",\"returns\":{\"_0\":\"The PoolConfig struct.\"}},\"getPoolInfo()\":{\"returns\":{\"_0\":\"The pool info.\"}},\"getUncollectedGovernanceFees()\":{\"returns\":{\"_0\":\"Governance fees denominated in shares yet to be collected.\"}},\"getWithdrawPool()\":{\"returns\":{\"_0\":\"Hyperdrive's withdrawal pool information.\"}},\"isApprovedForAll(address,address)\":{\"params\":{\"account\":\"The account.\",\"operator\":\"The operator.\"},\"returns\":{\"_0\":\"The approval status.\"}},\"isPauser(address)\":{\"params\":{\"_account\":\"The account to check.\"},\"returns\":{\"_0\":\"The pauser status.\"}},\"load(uint256[])\":{\"params\":{\"_slots\":\"The storage slots the caller wants the data from.\"},\"returns\":{\"_0\":\"A raw array of loaded data.\"}},\"name(uint256)\":{\"params\":{\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The name.\"}},\"nonces(address)\":{\"params\":{\"account\":\"The account.\"},\"returns\":{\"_0\":\"The signature nonce.\"}},\"pause(bool)\":{\"params\":{\"_status\":\"True to pause all deposits and false to unpause them.\"}},\"perTokenApprovals(uint256,address,address)\":{\"params\":{\"account\":\"The account.\",\"spender\":\"The spender.\",\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The approval status.\"}},\"permitForAll(bytes32,bytes32,address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"details\":\"The signature for this function follows EIP 712 standard and should      be generated with the eth_signTypedData JSON RPC call instead of      the eth_sign JSON RPC call. If using out of date parity signing      libraries the v component may need to be adjusted. Also it is very      rare but possible for v to be other values, those values are not      supported.\",\"params\":{\"_approved\":\"A boolean of the approval status to set to.\",\"deadline\":\"The timestamp which the signature must be submitted by        to be valid.\",\"domainSeparator\":\"The EIP712 domain separator of the contract.\",\"owner\":\"The owner of the account which is having the new approval set.\",\"permitTypeHash\":\"The EIP712 domain separator of the contract.\",\"r\":\"The r component of the ECDSA signature.\",\"s\":\"The s component of the ECDSA signature.\",\"spender\":\"The address which will be allowed to spend owner's tokens.\",\"v\":\"Extra ECDSA data which allows public key recovery from        signature assumed to be 27 or 28.\"}},\"setApproval(uint256,address,uint256)\":{\"params\":{\"amount\":\"The max tokens the approved person can use, setting to        uint256.max will cause the value to never decrement (saving gas        on transfer).\",\"operator\":\"The address who will be able to use the tokens.\",\"tokenID\":\"The asset to approve the use of.\"}},\"setApprovalBridge(uint256,address,uint256,address)\":{\"params\":{\"amount\":\"The max tokens the approved person can use, setting to        uint256.max will cause the value to never decrement [saving gas        on transfer].\",\"caller\":\"The eth address which called the linking contract.\",\"operator\":\"The address who will be able to use the tokens.\",\"tokenID\":\"The asset to approve the use of.\"}},\"setApprovalForAll(address,bool)\":{\"params\":{\"approved\":\"True to approve, false to remove approval.\",\"operator\":\"The eth address which can access the caller's assets.\"}},\"setFeeCollector(address)\":{\"params\":{\"_who\":\"The new fee collector address.\"}},\"setGovernance(address)\":{\"params\":{\"_who\":\"The new governance address.\"}},\"setPauser(address,bool)\":{\"params\":{\"status\":\"The new pauser status.\",\"who\":\"The address to change.\"}},\"setSweepCollector(address)\":{\"params\":{\"_who\":\"The new sweep collector address.\"}},\"sweep(address)\":{\"details\":\"WARN: It is unlikely but possible that there is a selector overlap      with 'transfer'. Any integrating contracts should be checked      for that, as it may result in an unexpected call from this address.\",\"params\":{\"_target\":\"The target token to sweep.\"}},\"symbol(uint256)\":{\"params\":{\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The symbol.\"}},\"totalSupply(uint256)\":{\"params\":{\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The total supply.\"}},\"transferFrom(uint256,address,address,uint256)\":{\"params\":{\"amount\":\"The amount of token to move.\",\"from\":\"The address whose balance will be reduced.\",\"to\":\"The address whose balance will be increased.\",\"tokenID\":\"The token identifier.\"}},\"transferFromBridge(uint256,address,address,uint256,address)\":{\"params\":{\"amount\":\"The amount of token to move.\",\"caller\":\"The msg.sender from the bridge.\",\"from\":\"The address whose balance will be reduced.\",\"to\":\"The address whose balance will be increased.\",\"tokenID\":\"The token identifier.\"}},\"vaultSharesToken()\":{\"returns\":{\"_0\":\"The vault shares token address.\"}}},\"title\":\"ERC4626Target0\",\"version\":1},\"userdoc\":{\"errors\":{\"BatchInputLengthMismatch()\":[{\"notice\":\"Thrown when the inputs to a batch transfer don't match in         length.\"}],\"ExpInvalidExponent()\":[{\"notice\":\"Thrown when the exponent to `FixedPointMath.exp` would cause the         the result to be larger than the representable scale.\"}],\"ExpiredDeadline()\":[{\"notice\":\"Thrown when a permit signature is expired.\"}],\"InvalidERC20Bridge()\":[{\"notice\":\"Thrown when the caller of one of MultiToken's bridge-only         functions is not the corresponding bridge.\"}],\"InvalidFeeDestination()\":[{\"notice\":\"Thrown when a destination other than the fee collector is         specified in `collectGovernanceFee`.\"}],\"InvalidPresentValue()\":[{\"notice\":\"Thrown when the present value calculation fails.\"}],\"InvalidSignature()\":[{\"notice\":\"Thrown when an invalid signature is used provide permit access         to the MultiToken. A signature is considered to be invalid if         it fails to recover to the owner's address.\"}],\"InvalidTimestamp()\":[{\"notice\":\"Thrown when the timestamp used to construct an asset ID exceeds         the uint248 scale.\"}],\"LnInvalidInput()\":[{\"notice\":\"Thrown when the input to `FixedPointMath.ln` is less than or         equal to zero.\"}],\"RestrictedZeroAddress()\":[{\"notice\":\"Thrown when the owner passed to permit is the zero address. This         prevents users from spending the funds in address zero by         sending an invalid signature to ecrecover.\"}],\"ReturnData(bytes)\":[{\"notice\":\"Thrown by a read-only function called by the proxy. Unlike a         normal error, this error actually indicates that a read-only         call succeeded. The data that it wraps is the return data from         the read-only call.\"}],\"SweepFailed()\":[{\"notice\":\"Thrown when an asset is swept from the pool and one of the         pool's depository assets changes.\"}],\"Unauthorized()\":[{\"notice\":\"Thrown when an unauthorized user attempts to access admin         functionality.\"}],\"UnsafeCastToInt256()\":[{\"notice\":\"Thrown when casting a value to a int256 that is outside of the         int256 scale.\"}]},\"events\":{\"AddLiquidity(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when an LP adds liquidity to the Hyperdrive pool.\"},\"Approval(address,address,uint256)\":{\"notice\":\"Emitted when an account changes the allowance for another         account.\"},\"ApprovalForAll(address,address,bool)\":{\"notice\":\"Emitted when an account changes the approval for all of its         tokens.\"},\"CloseLong(address,address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is closed.\"},\"CloseShort(address,address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is closed.\"},\"CollectGovernanceFee(address,uint256)\":{\"notice\":\"Emitted when governance fees are collected.\"},\"CreateCheckpoint(uint256,uint256,uint256,uint256,uint256,uint256)\":{\"notice\":\"Emitted when a checkpoint is created.\"},\"FeeCollectorUpdated(address)\":{\"notice\":\"Emitted when the fee collector address is updated.\"},\"GovernanceUpdated(address)\":{\"notice\":\"Emitted when the governance address is updated.\"},\"Initialize(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when the Hyperdrive pool is initialized.\"},\"OpenLong(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is opened.\"},\"OpenShort(address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is opened.\"},\"PauseStatusUpdated(bool)\":{\"notice\":\"Emitted when the pause status is updated.\"},\"PauserUpdated(address,bool)\":{\"notice\":\"Emitted when a pauser is updated.\"},\"RedeemWithdrawalShares(address,address,uint256,uint256,uint256,bool)\":{\"notice\":\"Emitted when an LP redeems withdrawal shares.\"},\"RemoveLiquidity(address,address,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when an LP removes liquidity from the Hyperdrive pool.\"},\"Sweep(address,address)\":{\"notice\":\"Emitted when tokens are swept.\"},\"SweepCollectorUpdated(address)\":{\"notice\":\"Emitted when the sweep collector address is updated.\"},\"TransferSingle(address,address,address,uint256,uint256)\":{\"notice\":\"Emitted when tokens are transferred from one account to another.\"}},\"kind\":\"user\",\"methods\":{\"balanceOf(uint256,address)\":{\"notice\":\"Gets an account's balance of a sub-token.\"},\"baseToken()\":{\"notice\":\"Gets the base token.\"},\"batchTransferFrom(address,address,uint256[],uint256[])\":{\"notice\":\"Transfers several assets from one account to another.\"},\"collectGovernanceFee((address,bool,bytes))\":{\"notice\":\"This function collects the governance fees accrued by the pool.\"},\"constructor\":{\"notice\":\"Initializes the target0 contract.\"},\"decimals()\":{\"notice\":\"Gets the decimals of the MultiToken. This is the same as the         decimals used by the base token.\"},\"getCheckpoint(uint256)\":{\"notice\":\"Gets a specified checkpoint.\"},\"getCheckpointExposure(uint256)\":{\"notice\":\"Gets the checkpoint exposure at a specified time.\"},\"getMarketState()\":{\"notice\":\"Gets the market state.\"},\"getPoolConfig()\":{\"notice\":\"Gets the pool's configuration parameters.\"},\"getPoolInfo()\":{\"notice\":\"Gets info about the pool's reserves and other state that is         important to evaluate potential trades.\"},\"getUncollectedGovernanceFees()\":{\"notice\":\"Gets info about the fees presently accrued by the pool.\"},\"getWithdrawPool()\":{\"notice\":\"Gets information about the withdrawal pool.\"},\"isApprovedForAll(address,address)\":{\"notice\":\"Gets the approval status of an operator for an account.\"},\"isPauser(address)\":{\"notice\":\"Gets the pauser status of an address.\"},\"load(uint256[])\":{\"notice\":\"Allows plugin data libs to provide getters or other complex         logic instead of the main.\"},\"name(uint256)\":{\"notice\":\"Gets the name of a sub-token.\"},\"nonces(address)\":{\"notice\":\"Gets the permitForAll signature nonce for an account.\"},\"pause(bool)\":{\"notice\":\"Allows an authorized address to pause this contract.\"},\"perTokenApprovals(uint256,address,address)\":{\"notice\":\"Gets the approval status of an operator for an account.\"},\"permitForAll(bytes32,bytes32,address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"notice\":\"Allows a caller who is not the owner of an account to execute         the functionality of 'approve' for all assets with the owner's         signature.\"},\"setApproval(uint256,address,uint256)\":{\"notice\":\"Allows a user to set an approval for an individual asset with         specific amount.\"},\"setApprovalBridge(uint256,address,uint256,address)\":{\"notice\":\"Allows the compatibility linking contract to forward calls to         set asset approvals.\"},\"setApprovalForAll(address,bool)\":{\"notice\":\"Allows a user to approve an operator to use all of their assets.\"},\"setFeeCollector(address)\":{\"notice\":\"Allows governance to change the fee collector.\"},\"setGovernance(address)\":{\"notice\":\"Allows governance to change governance.\"},\"setPauser(address,bool)\":{\"notice\":\"Allows governance to change the pauser status of an address.\"},\"setSweepCollector(address)\":{\"notice\":\"Allows governance to change the sweep collector.\"},\"sweep(address)\":{\"notice\":\"Transfers the contract's balance of a target token to the sweep         collector address.\"},\"symbol(uint256)\":{\"notice\":\"Gets the symbol of a sub-token.\"},\"totalSupply(uint256)\":{\"notice\":\"Gets the total supply of a sub-token.\"},\"transferFrom(uint256,address,address,uint256)\":{\"notice\":\"Transfers an amount of assets from the source to the destination.\"},\"transferFromBridge(uint256,address,address,uint256,address)\":{\"notice\":\"Permissioned transfer for the bridge to access, only callable by         the ERC20 linking bridge.\"},\"vaultSharesToken()\":{\"notice\":\"Gets the vault shares token.\"}},\"notice\":\"ERC4626Hyperdrive's target0 logic contract. This contract contains         all of the getters for Hyperdrive as well as some stateful         functions.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/instances/erc4626/ERC4626Target0.sol\":\"ERC4626Target0\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/external/HyperdriveTarget0.sol\":{\"keccak256\":\"0x9cf2186541b5454544930c45d3ca5a7396a9122d7218e42670ae6e77eba7fe92\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6d3da4a8aadd58e9f2ddc4c0fed4b91be1f4d8d572c7cb9eea7c6f2aa416b206\",\"dweb:/ipfs/QmcSDMBvhpkMi2NPqWhbgvK2qBzUaihW28t3KpZMxmCrmF\"]},\"contracts/src/instances/erc4626/ERC4626Base.sol\":{\"keccak256\":\"0x3ccd195018546fef93ad3b59063f12c8fdba1b1cb3fa85306350b63a74433906\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ea807c6cb97a18c7fdaa60c862b64888d5fd771bc50d9ae17208fa4b759e82cd\",\"dweb:/ipfs/QmPycBtyqvaoBxZ1jSWGRmQUwVYCjDxc41diksgmrLkmXD\"]},\"contracts/src/instances/erc4626/ERC4626Target0.sol\":{\"keccak256\":\"0xc8f20640f79f31e06b7d055236b15059ad5e63ad6425b2809fe837fea6426d72\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6f65f9aee958abcea5ea07ba9ba2932efecc8f43dcdec4220e03a6dca0b5e74c\",\"dweb:/ipfs/QmNj4yX9n7nTxFeNxNjcsWim2KLCVQ4oX5byEem5tRybFV\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IERC4626.sol\":{\"keccak256\":\"0x891ede2965eda391b0e78cdba7490a5ddadcc43f039c22c183529300dada0741\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ec659582084892c1a857676bf39fa5e26532557a8210978408857315e9195366\",\"dweb:/ipfs/QmYYXo28FtBLEBQxK9YeFhyB2zdrpbrNQXfrzN4fmBuHuB\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x8b726cbf87e5dbec80207d47b64bb20e35a9fb42667b9d1612a87ad8b2d361b5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b2015112addc7b4ba33c0626a14c963294164906afce52296f3dc209737a7339\",\"dweb:/ipfs/QmZYR6qwGspufCtiofdvYbaHhxSrguNnP52rd3y3zXWiDz\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0xa48349cf2fcd27ce3aafcffeba25647d289e17653dc1a4e643c3de0b47e5c75f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4dee6d2061cc68e3bc52acfa0d35c973785e49170f49d2e09efd50ead85e2a19\",\"dweb:/ipfs/QmX6tpGgXTnVGt1CdD796N5kn8YrZWFX1FcRLqtBBhB5qk\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x567b78388802482303910be022299e39a0ef95b4a9a30d6acc4bea0d467fa784\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://338a9f960049c37d13b6e23e5bc2c9e6005366aa99c95168f57f170ef2a4bcfa\",\"dweb:/ipfs/QmaeAwacrvMgJGqrKDSXZkYNYRJ5FvirYFpY3xjbCbJTF9\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86\",\"dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/internal/HyperdriveAdmin.sol\":{\"keccak256\":\"0x98a928423936e48c06552ec01a44687d42219ced71d689596aef6c7052c969a8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://f0da6702fe7a686ab5b371697112d4d025d9e4f9ff2b0f36276b12ec8542fcfd\",\"dweb:/ipfs/QmQJrxcTRQ4kL6CroF6cdVZuv6S9QUuZrm5BMUTA6o23xN\"]},\"contracts/src/internal/HyperdriveBase.sol\":{\"keccak256\":\"0x6d10a1d7e62a374bd1c6cd1f41e16a8702ef2b25b1dac34479ef8e3b31abd2f3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a60f3227d4de9ab8163bc0625e5e66f1ea17b3b2901ae40547289d5ca6b82186\",\"dweb:/ipfs/QmWF4mUXAAYaTko7pWjje2Jc9XumnaAYURUNuvwSRoS28E\"]},\"contracts/src/internal/HyperdriveCheckpoint.sol\":{\"keccak256\":\"0x80e136696165d1ea5e1b0dbe7d04c99f3303b59a6e79c8917824892c3e7b4ee7\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://bf52ad7b2b9907331275ed5cdc7055d223224a8b539f82d9ba76c6dc67ae5334\",\"dweb:/ipfs/QmU3ncwDV4TkX6C377wgWSHm13ndDcFGLiBHzuHbfED19P\"]},\"contracts/src/internal/HyperdriveLP.sol\":{\"keccak256\":\"0x13a94b5343886983c874d8fb5cd4c9e7aa3f9e52d607a0fcfcbdfeeb64577488\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a7574afd3d91c62cae7a79e17c2cb7e93700aaebc74322f6fe119c61fbdcb4e4\",\"dweb:/ipfs/QmdWHYcuCoZNdQ2jMUg9zkbhsi25UVH5JXxoFm379Va4qF\"]},\"contracts/src/internal/HyperdriveLong.sol\":{\"keccak256\":\"0x02cd58cabac084c23a5abdd3d18e23bbf31629a9f847da7f738ffa83ac4627cc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://553b6fbe3f08078ca31a6ad1e15088a1724474a2d66abbfaaf4962b52a3572c4\",\"dweb:/ipfs/QmQpVa9HEJmaFKh4tANJXk9UBWzmmAsqVZ8RsfAN1rzVbZ\"]},\"contracts/src/internal/HyperdriveMultiToken.sol\":{\"keccak256\":\"0x21a9aafb8e23a22c77111e13538fa8f709446e4f3a64ef84b2eebc2aa9d04373\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://41517912353540de5b430587ca8220f9d34d4432d3c723951d5fb618d5907b5d\",\"dweb:/ipfs/QmU3cTCrAq94digVS97s5af1Pu86uGBpmpus6w7828fUbG\"]},\"contracts/src/internal/HyperdriveShort.sol\":{\"keccak256\":\"0xffefa815f96836971b6d92fd128fc9a14cd09a01b6845c8bcab7c778bfe1b87c\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ad050506fd4987240b09a7ace16062525491bbf17514e60f64a7b821e1a5c82c\",\"dweb:/ipfs/QmXqhwVmvC6w1rkAF6SpAgU3uim5H24E76LMBvavwJbJsx\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xde163699e55f6d6bd660fa7a1cf25927d2e895e16663a7c47fa45d6bc4878c2e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c9908cf875ad59413154825ea59e2635b16f0020a0e3368ec85b6c7379ab3f19\",\"dweb:/ipfs/QmeX22wqHYurD9J6WTxrQjtqUoh21bFmLm7E1SzCkgQV7d\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0x3031a1ec376be333eebe0062c474a22d7f970cb02de62ab6823c6918c0a7f83b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6c80cc2fd8b7908b6420ebb21cb99266c93e01d6cdd9d1a41f8847493849b131\",\"dweb:/ipfs/QmeMehWbF2RwQaf6c6yaj5KHjXboDRpzBCtvFnLW4BXBbc\"]},\"contracts/src/libraries/Errors.sol\":{\"keccak256\":\"0x015be7b5e24373828e26b4af217ecbf074c7f4dcab839703d97d7bc560aa40eb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3584c205f552b20d01dc902a687f346e10bde5f1a23f887f97e03b2fbff8e75c\",\"dweb:/ipfs/QmaVzjYr18cZueNaboBeyVb6CtgY2qMxtvNcn6nXzCgM2c\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x44e018888d5a9fe0c3e44d9d814879d8f0c3adb78154edc98ba07da86b976f5a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5e3990bc86aaa8b4eb4b948ed3a26f0b018f1422c6470a00d146aa69e599a90d\",\"dweb:/ipfs/QmWg9hKoQK1po8ZxRC4xrSWePtoJhgndkHXmwLCpCtwAUu\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0x391c141a11e995c912f55247d461c44bcd7d7c70de4c2d98ff9c81e89acd4424\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b4d80a70106debf9f2d4980e38572daeea11bfc398a1258e3b5dc344e9ce646a\",\"dweb:/ipfs/QmbdckkGQcuok6NDZPiUVAQhpG9HvigMwozFZRLe9YcL2n\"]},\"contracts/src/libraries/LPMath.sol\":{\"keccak256\":\"0x78ca3ee7c212a513f45a44ef42d362c4ab3cc59e246191c57011b86232967189\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://610b23be1ed7decae671a7cc8ae76298b5d3b10bbea532d3c10623462f899786\",\"dweb:/ipfs/QmV6i6JaY8EKYHUAq6r5267eMbQtfA43F3YNSvvxktW6hE\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xa15878749f26b198b59e039cf814143b141698064d341cd8b88cb4a04491551c\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b3fdd810b779630fce33fa7d2bfc17d6cca1bd3d646e5c702d09fd277167fde4\",\"dweb:/ipfs/QmW8C19uY5WLkVQfqFRsSU5NtuQDgoqt4jBoMhvuJ7kMn2\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x407ff362f1486784581f506ffd22cbcb74f638deed9e5c086d3639ea8e64025e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e0092121a10538a07f814b1fafdb2f8923ee35c4d0f18af595f65ce36849a797\",\"dweb:/ipfs/QmTVKGwXU2FyywANhcBnutWSu38QaaVqgG9eTYatfjGYGL\"]},\"lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol\":{\"keccak256\":\"0x60c65f701957fdd6faea1acb0bb45825791d473693ed9ecb34726fdfaa849dd7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ea290300e0efc4d901244949dc4d877fd46e6c5e43dc2b26620e8efab3ab803f\",\"dweb:/ipfs/QmcLLJppxKeJWqHxE2CUkcfhuRTgHSn8J4kijcLa5MYhSt\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0xc3e1fa9d1987f8d349dfb4d6fe93bf2ca014b52ba335cfac30bfe71e357e6f80\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c5703ccdeb7b1d685e375ed719117e9edf2ab4bc544f24f23b0d50ec82257229\",\"dweb:/ipfs/QmTdwkbQq7owpCiyuzE7eh5LrD2ddrBCZ5WHVsWPi1RrTS\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c\",\"dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850\",\"dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x6008dabfe393240d73d7dd7688033f72740d570aa422254d29a7dce8568f3aff\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f5196ec75139918c6c7bb4251b36395e668f1fa6d206beba7e7520e74913940d\",\"dweb:/ipfs/QmSyqjksXxmm2mCG6qRd1yuwLykypkSVBbnBnGqJRcuJMi\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x37bb49513c49c87c4642a891b13b63571bc87013dde806617aa1efb54605f386\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b3036b3a83b7c48f96641f2a9002b9f2dcb6a5958dd670894ada21ae8229b3d0\",\"dweb:/ipfs/QmUNfSBdoVtjhETaUJCYcaC7pTMgbhht926tJ2uXJbiVd3\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245\",\"dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y\"]},\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":{\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12\",\"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF\"]},\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02\",\"dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd\"]}},\"version\":1}";
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
                readonly name: "InvalidPresentValue";
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
                readonly name: "UnsafeCastToInt256";
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
                    readonly internalType: "address";
                    readonly name: "destination";
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
                    readonly internalType: "address";
                    readonly name: "destination";
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
                    readonly name: "basePayment";
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
                    readonly name: "checkpointVaultSharePrice";
                    readonly type: "uint256";
                    readonly indexed: false;
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
                    readonly name: "newFeeCollector";
                    readonly type: "address";
                    readonly indexed: true;
                }];
                readonly type: "event";
                readonly name: "FeeCollectorUpdated";
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
                }, {
                    readonly internalType: "bool";
                    readonly name: "status";
                    readonly type: "bool";
                    readonly indexed: false;
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
                    readonly internalType: "address";
                    readonly name: "destination";
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
                    readonly internalType: "address";
                    readonly name: "destination";
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
                    readonly name: "collector";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "address";
                    readonly name: "target";
                    readonly type: "address";
                    readonly indexed: true;
                }];
                readonly type: "event";
                readonly name: "Sweep";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "newSweepCollector";
                    readonly type: "address";
                    readonly indexed: true;
                }];
                readonly type: "event";
                readonly name: "SweepCollectorUpdated";
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
                readonly name: "setFeeCollector";
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
                    readonly internalType: "address";
                    readonly name: "_who";
                    readonly type: "address";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "setSweepCollector";
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
                            readonly account: "The account.";
                            readonly tokenId: "The sub-token id.";
                        };
                        readonly returns: {
                            readonly _0: "The balance.";
                        };
                    };
                    readonly "baseToken()": {
                        readonly returns: {
                            readonly _0: "The base token address.";
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
                            readonly proceeds: "The governance fees collected. The units of this         quantity are either base or vault shares, depending on the value         of `_options.asBase`.";
                        };
                    };
                    readonly constructor: {
                        readonly params: {
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
                            readonly amount: "The max tokens the approved person can use, setting to        uint256.max will cause the value to never decrement (saving gas        on transfer).";
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
                    readonly "setFeeCollector(address)": {
                        readonly params: {
                            readonly _who: "The new fee collector address.";
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
                    readonly "setSweepCollector(address)": {
                        readonly params: {
                            readonly _who: "The new sweep collector address.";
                        };
                    };
                    readonly "sweep(address)": {
                        readonly details: "WARN: It is unlikely but possible that there is a selector overlap      with 'transfer'. Any integrating contracts should be checked      for that, as it may result in an unexpected call from this address.";
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
                    readonly "vaultSharesToken()": {
                        readonly returns: {
                            readonly _0: "The vault shares token address.";
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
                        readonly notice: "Allows a caller who is not the owner of an account to execute         the functionality of 'approve' for all assets with the owner's         signature.";
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
                    readonly "setFeeCollector(address)": {
                        readonly notice: "Allows governance to change the fee collector.";
                    };
                    readonly "setGovernance(address)": {
                        readonly notice: "Allows governance to change governance.";
                    };
                    readonly "setPauser(address,bool)": {
                        readonly notice: "Allows governance to change the pauser status of an address.";
                    };
                    readonly "setSweepCollector(address)": {
                        readonly notice: "Allows governance to change the sweep collector.";
                    };
                    readonly "sweep(address)": {
                        readonly notice: "Transfers the contract's balance of a target token to the sweep         collector address.";
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
                    readonly "vaultSharesToken()": {
                        readonly notice: "Gets the vault shares token.";
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
                readonly "contracts/src/instances/erc4626/ERC4626Target0.sol": "ERC4626Target0";
            };
            readonly libraries: {};
        };
        readonly sources: {
            readonly "contracts/src/external/HyperdriveTarget0.sol": {
                readonly keccak256: "0x9cf2186541b5454544930c45d3ca5a7396a9122d7218e42670ae6e77eba7fe92";
                readonly urls: readonly ["bzz-raw://6d3da4a8aadd58e9f2ddc4c0fed4b91be1f4d8d572c7cb9eea7c6f2aa416b206", "dweb:/ipfs/QmcSDMBvhpkMi2NPqWhbgvK2qBzUaihW28t3KpZMxmCrmF"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/instances/erc4626/ERC4626Base.sol": {
                readonly keccak256: "0x3ccd195018546fef93ad3b59063f12c8fdba1b1cb3fa85306350b63a74433906";
                readonly urls: readonly ["bzz-raw://ea807c6cb97a18c7fdaa60c862b64888d5fd771bc50d9ae17208fa4b759e82cd", "dweb:/ipfs/QmPycBtyqvaoBxZ1jSWGRmQUwVYCjDxc41diksgmrLkmXD"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/instances/erc4626/ERC4626Target0.sol": {
                readonly keccak256: "0xc8f20640f79f31e06b7d055236b15059ad5e63ad6425b2809fe837fea6426d72";
                readonly urls: readonly ["bzz-raw://6f65f9aee958abcea5ea07ba9ba2932efecc8f43dcdec4220e03a6dca0b5e74c", "dweb:/ipfs/QmNj4yX9n7nTxFeNxNjcsWim2KLCVQ4oX5byEem5tRybFV"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IERC20.sol": {
                readonly keccak256: "0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9";
                readonly urls: readonly ["bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac", "dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IERC4626.sol": {
                readonly keccak256: "0x891ede2965eda391b0e78cdba7490a5ddadcc43f039c22c183529300dada0741";
                readonly urls: readonly ["bzz-raw://ec659582084892c1a857676bf39fa5e26532557a8210978408857315e9195366", "dweb:/ipfs/QmYYXo28FtBLEBQxK9YeFhyB2zdrpbrNQXfrzN4fmBuHuB"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdrive.sol": {
                readonly keccak256: "0x8b726cbf87e5dbec80207d47b64bb20e35a9fb42667b9d1612a87ad8b2d361b5";
                readonly urls: readonly ["bzz-raw://b2015112addc7b4ba33c0626a14c963294164906afce52296f3dc209737a7339", "dweb:/ipfs/QmZYR6qwGspufCtiofdvYbaHhxSrguNnP52rd3y3zXWiDz"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveCore.sol": {
                readonly keccak256: "0xa48349cf2fcd27ce3aafcffeba25647d289e17653dc1a4e643c3de0b47e5c75f";
                readonly urls: readonly ["bzz-raw://4dee6d2061cc68e3bc52acfa0d35c973785e49170f49d2e09efd50ead85e2a19", "dweb:/ipfs/QmX6tpGgXTnVGt1CdD796N5kn8YrZWFX1FcRLqtBBhB5qk"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveEvents.sol": {
                readonly keccak256: "0x567b78388802482303910be022299e39a0ef95b4a9a30d6acc4bea0d467fa784";
                readonly urls: readonly ["bzz-raw://338a9f960049c37d13b6e23e5bc2c9e6005366aa99c95168f57f170ef2a4bcfa", "dweb:/ipfs/QmaeAwacrvMgJGqrKDSXZkYNYRJ5FvirYFpY3xjbCbJTF9"];
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
            readonly "contracts/src/internal/HyperdriveAdmin.sol": {
                readonly keccak256: "0x98a928423936e48c06552ec01a44687d42219ced71d689596aef6c7052c969a8";
                readonly urls: readonly ["bzz-raw://f0da6702fe7a686ab5b371697112d4d025d9e4f9ff2b0f36276b12ec8542fcfd", "dweb:/ipfs/QmQJrxcTRQ4kL6CroF6cdVZuv6S9QUuZrm5BMUTA6o23xN"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/internal/HyperdriveBase.sol": {
                readonly keccak256: "0x6d10a1d7e62a374bd1c6cd1f41e16a8702ef2b25b1dac34479ef8e3b31abd2f3";
                readonly urls: readonly ["bzz-raw://a60f3227d4de9ab8163bc0625e5e66f1ea17b3b2901ae40547289d5ca6b82186", "dweb:/ipfs/QmWF4mUXAAYaTko7pWjje2Jc9XumnaAYURUNuvwSRoS28E"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/internal/HyperdriveCheckpoint.sol": {
                readonly keccak256: "0x80e136696165d1ea5e1b0dbe7d04c99f3303b59a6e79c8917824892c3e7b4ee7";
                readonly urls: readonly ["bzz-raw://bf52ad7b2b9907331275ed5cdc7055d223224a8b539f82d9ba76c6dc67ae5334", "dweb:/ipfs/QmU3ncwDV4TkX6C377wgWSHm13ndDcFGLiBHzuHbfED19P"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/internal/HyperdriveLP.sol": {
                readonly keccak256: "0x13a94b5343886983c874d8fb5cd4c9e7aa3f9e52d607a0fcfcbdfeeb64577488";
                readonly urls: readonly ["bzz-raw://a7574afd3d91c62cae7a79e17c2cb7e93700aaebc74322f6fe119c61fbdcb4e4", "dweb:/ipfs/QmdWHYcuCoZNdQ2jMUg9zkbhsi25UVH5JXxoFm379Va4qF"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/internal/HyperdriveLong.sol": {
                readonly keccak256: "0x02cd58cabac084c23a5abdd3d18e23bbf31629a9f847da7f738ffa83ac4627cc";
                readonly urls: readonly ["bzz-raw://553b6fbe3f08078ca31a6ad1e15088a1724474a2d66abbfaaf4962b52a3572c4", "dweb:/ipfs/QmQpVa9HEJmaFKh4tANJXk9UBWzmmAsqVZ8RsfAN1rzVbZ"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/internal/HyperdriveMultiToken.sol": {
                readonly keccak256: "0x21a9aafb8e23a22c77111e13538fa8f709446e4f3a64ef84b2eebc2aa9d04373";
                readonly urls: readonly ["bzz-raw://41517912353540de5b430587ca8220f9d34d4432d3c723951d5fb618d5907b5d", "dweb:/ipfs/QmU3cTCrAq94digVS97s5af1Pu86uGBpmpus6w7828fUbG"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/internal/HyperdriveShort.sol": {
                readonly keccak256: "0xffefa815f96836971b6d92fd128fc9a14cd09a01b6845c8bcab7c778bfe1b87c";
                readonly urls: readonly ["bzz-raw://ad050506fd4987240b09a7ace16062525491bbf17514e60f64a7b821e1a5c82c", "dweb:/ipfs/QmXqhwVmvC6w1rkAF6SpAgU3uim5H24E76LMBvavwJbJsx"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/internal/HyperdriveStorage.sol": {
                readonly keccak256: "0xde163699e55f6d6bd660fa7a1cf25927d2e895e16663a7c47fa45d6bc4878c2e";
                readonly urls: readonly ["bzz-raw://c9908cf875ad59413154825ea59e2635b16f0020a0e3368ec85b6c7379ab3f19", "dweb:/ipfs/QmeX22wqHYurD9J6WTxrQjtqUoh21bFmLm7E1SzCkgQV7d"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/AssetId.sol": {
                readonly keccak256: "0x3031a1ec376be333eebe0062c474a22d7f970cb02de62ab6823c6918c0a7f83b";
                readonly urls: readonly ["bzz-raw://6c80cc2fd8b7908b6420ebb21cb99266c93e01d6cdd9d1a41f8847493849b131", "dweb:/ipfs/QmeMehWbF2RwQaf6c6yaj5KHjXboDRpzBCtvFnLW4BXBbc"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/Errors.sol": {
                readonly keccak256: "0x015be7b5e24373828e26b4af217ecbf074c7f4dcab839703d97d7bc560aa40eb";
                readonly urls: readonly ["bzz-raw://3584c205f552b20d01dc902a687f346e10bde5f1a23f887f97e03b2fbff8e75c", "dweb:/ipfs/QmaVzjYr18cZueNaboBeyVb6CtgY2qMxtvNcn6nXzCgM2c"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/FixedPointMath.sol": {
                readonly keccak256: "0x44e018888d5a9fe0c3e44d9d814879d8f0c3adb78154edc98ba07da86b976f5a";
                readonly urls: readonly ["bzz-raw://5e3990bc86aaa8b4eb4b948ed3a26f0b018f1422c6470a00d146aa69e599a90d", "dweb:/ipfs/QmWg9hKoQK1po8ZxRC4xrSWePtoJhgndkHXmwLCpCtwAUu"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/HyperdriveMath.sol": {
                readonly keccak256: "0x391c141a11e995c912f55247d461c44bcd7d7c70de4c2d98ff9c81e89acd4424";
                readonly urls: readonly ["bzz-raw://b4d80a70106debf9f2d4980e38572daeea11bfc398a1258e3b5dc344e9ce646a", "dweb:/ipfs/QmbdckkGQcuok6NDZPiUVAQhpG9HvigMwozFZRLe9YcL2n"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/LPMath.sol": {
                readonly keccak256: "0x78ca3ee7c212a513f45a44ef42d362c4ab3cc59e246191c57011b86232967189";
                readonly urls: readonly ["bzz-raw://610b23be1ed7decae671a7cc8ae76298b5d3b10bbea532d3c10623462f899786", "dweb:/ipfs/QmV6i6JaY8EKYHUAq6r5267eMbQtfA43F3YNSvvxktW6hE"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/SafeCast.sol": {
                readonly keccak256: "0xa15878749f26b198b59e039cf814143b141698064d341cd8b88cb4a04491551c";
                readonly urls: readonly ["bzz-raw://b3fdd810b779630fce33fa7d2bfc17d6cca1bd3d646e5c702d09fd277167fde4", "dweb:/ipfs/QmW8C19uY5WLkVQfqFRsSU5NtuQDgoqt4jBoMhvuJ7kMn2"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/YieldSpaceMath.sol": {
                readonly keccak256: "0x407ff362f1486784581f506ffd22cbcb74f638deed9e5c086d3639ea8e64025e";
                readonly urls: readonly ["bzz-raw://e0092121a10538a07f814b1fafdb2f8923ee35c4d0f18af595f65ce36849a797", "dweb:/ipfs/QmTVKGwXU2FyywANhcBnutWSu38QaaVqgG9eTYatfjGYGL"];
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
        readonly id: 7826;
        readonly exportedSymbols: {
            readonly ERC4626Base: readonly [7736];
            readonly ERC4626Target0: readonly [7825];
            readonly HyperdriveTarget0: readonly [5190];
            readonly IHyperdrive: readonly [10351];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:929:46";
        readonly nodes: readonly [{
            readonly id: 7802;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:23:46";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 7804;
            readonly nodeType: "ImportDirective";
            readonly src: "64:73:46";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/external/HyperdriveTarget0.sol";
            readonly file: "../../external/HyperdriveTarget0.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 7826;
            readonly sourceUnit: 5191;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 7803;
                    readonly name: "HyperdriveTarget0";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 5190;
                    readonly src: "73:17:46";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 7806;
            readonly nodeType: "ImportDirective";
            readonly src: "138:63:46";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IHyperdrive.sol";
            readonly file: "../../interfaces/IHyperdrive.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 7826;
            readonly sourceUnit: 10352;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 7805;
                    readonly name: "IHyperdrive";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 10351;
                    readonly src: "147:11:46";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 7808;
            readonly nodeType: "ImportDirective";
            readonly src: "202:48:46";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/instances/erc4626/ERC4626Base.sol";
            readonly file: "./ERC4626Base.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 7826;
            readonly sourceUnit: 7737;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 7807;
                    readonly name: "ERC4626Base";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 7736;
                    readonly src: "211:11:46";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 7825;
            readonly nodeType: "ContractDefinition";
            readonly src: "692:275:46";
            readonly nodes: readonly [{
                readonly id: 7824;
                readonly nodeType: "FunctionDefinition";
                readonly src: "871:94:46";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 7823;
                    readonly nodeType: "Block";
                    readonly src: "963:2:46";
                    readonly nodes: readonly [];
                    readonly statements: readonly [];
                };
                readonly documentation: {
                    readonly id: 7814;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "756:110:46";
                    readonly text: "@notice Initializes the target0 contract.\n @param _config The configuration of the Hyperdrive pool.";
                };
                readonly implemented: true;
                readonly kind: "constructor";
                readonly modifiers: readonly [{
                    readonly arguments: readonly [{
                        readonly id: 7820;
                        readonly name: "_config";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 7817;
                        readonly src: "954:7:46";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10154_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig memory";
                        };
                    }];
                    readonly id: 7821;
                    readonly kind: "baseConstructorSpecifier";
                    readonly modifierName: {
                        readonly id: 7819;
                        readonly name: "HyperdriveTarget0";
                        readonly nameLocations: readonly ["936:17:46"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 5190;
                        readonly src: "936:17:46";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "936:26:46";
                }];
                readonly name: "";
                readonly nameLocation: "-1:-1:-1";
                readonly parameters: {
                    readonly id: 7818;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 7817;
                        readonly mutability: "mutable";
                        readonly name: "_config";
                        readonly nameLocation: "922:7:46";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 7824;
                        readonly src: "892:37:46";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10154_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig";
                        };
                        readonly typeName: {
                            readonly id: 7816;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 7815;
                                readonly name: "IHyperdrive.PoolConfig";
                                readonly nameLocations: readonly ["892:11:46", "904:10:46"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10154;
                                readonly src: "892:22:46";
                            };
                            readonly referencedDeclaration: 10154;
                            readonly src: "892:22:46";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolConfig_$10154_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "882:53:46";
                };
                readonly returnParameters: {
                    readonly id: 7822;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "963:0:46";
                };
                readonly scope: 7825;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "public";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 7810;
                    readonly name: "HyperdriveTarget0";
                    readonly nameLocations: readonly ["719:17:46"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 5190;
                    readonly src: "719:17:46";
                };
                readonly id: 7811;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "719:17:46";
            }, {
                readonly baseName: {
                    readonly id: 7812;
                    readonly name: "ERC4626Base";
                    readonly nameLocations: readonly ["738:11:46"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 7736;
                    readonly src: "738:11:46";
                };
                readonly id: 7813;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "738:11:46";
            }];
            readonly canonicalName: "ERC4626Target0";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly documentation: {
                readonly id: 7809;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "252:440:46";
                readonly text: "@author DELV\n @title ERC4626Target0\n @notice ERC4626Hyperdrive's target0 logic contract. This contract contains\n         all of the getters for Hyperdrive as well as some stateful\n         functions.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance.";
            };
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [7825, 7736, 5190, 14161, 17512, 16054, 15127, 16538, 12497, 13667, 17734, 71639, 10887, 11459, 11207, 11547];
            readonly name: "ERC4626Target0";
            readonly nameLocation: "701:14:46";
            readonly scope: 7826;
            readonly usedErrors: readonly [10213, 10219, 10222, 10237, 10240, 10249, 10252, 10255, 10258, 10282, 10287, 10290, 10299, 10314, 71014, 71295, 71300, 71303, 71584];
            readonly usedEvents: readonly [10705, 10720, 10739, 10754, 10771, 10790, 10809, 10830, 10845, 10852, 10857, 10862, 10867, 10874, 10879, 10886, 11440, 11449, 11458];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 46;
};
//# sourceMappingURL=ERC4626Target0.d.ts.map