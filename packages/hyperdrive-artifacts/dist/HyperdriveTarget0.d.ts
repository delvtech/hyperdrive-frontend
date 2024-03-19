export declare const HyperdriveTarget0: {
    readonly abi: readonly [{
        readonly type: "function";
        readonly name: "balanceOf";
        readonly inputs: readonly [{
            readonly name: "tokenId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "account";
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
                readonly name: "sweepCollector";
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
        readonly name: "isApprovedForAll";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "operator";
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
            readonly name: "tokenId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "nonces";
        readonly inputs: readonly [{
            readonly name: "account";
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
            readonly name: "account";
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
            readonly name: "domainSeparator";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "permitTypeHash";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
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
        readonly name: "setFeeCollector";
        readonly inputs: readonly [{
            readonly name: "_who";
            readonly type: "address";
            readonly internalType: "address";
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
        readonly name: "setSweepCollector";
        readonly inputs: readonly [{
            readonly name: "_who";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "sweep";
        readonly inputs: readonly [{
            readonly name: "_target";
            readonly type: "address";
            readonly internalType: "contract IERC20";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
        readonly stateMutability: "pure";
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
            readonly name: "vaultShareAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "asBase";
            readonly type: "bool";
            readonly indexed: false;
            readonly internalType: "bool";
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
            readonly name: "destination";
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
            readonly name: "vaultShareAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "asBase";
            readonly type: "bool";
            readonly indexed: false;
            readonly internalType: "bool";
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
            readonly name: "destination";
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
            readonly name: "vaultShareAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "asBase";
            readonly type: "bool";
            readonly indexed: false;
            readonly internalType: "bool";
        }, {
            readonly name: "basePayment";
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
        readonly name: "FeeCollectorUpdated";
        readonly inputs: readonly [{
            readonly name: "newFeeCollector";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
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
            readonly name: "vaultShareAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "asBase";
            readonly type: "bool";
            readonly indexed: false;
            readonly internalType: "bool";
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
            readonly name: "vaultShareAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "asBase";
            readonly type: "bool";
            readonly indexed: false;
            readonly internalType: "bool";
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
            readonly name: "vaultShareAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "asBase";
            readonly type: "bool";
            readonly indexed: false;
            readonly internalType: "bool";
        }, {
            readonly name: "baseProceeds";
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
        }, {
            readonly name: "status";
            readonly type: "bool";
            readonly indexed: false;
            readonly internalType: "bool";
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
            readonly name: "destination";
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
            readonly name: "vaultShareAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "asBase";
            readonly type: "bool";
            readonly indexed: false;
            readonly internalType: "bool";
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
            readonly name: "destination";
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
            readonly name: "vaultShareAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "asBase";
            readonly type: "bool";
            readonly indexed: false;
            readonly internalType: "bool";
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
        readonly name: "Sweep";
        readonly inputs: readonly [{
            readonly name: "collector";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "target";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "SweepCollectorUpdated";
        readonly inputs: readonly [{
            readonly name: "newSweepCollector";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
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
        readonly name: "AddressEmptyCode";
        readonly inputs: readonly [{
            readonly name: "target";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly type: "error";
        readonly name: "AddressInsufficientBalance";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly type: "error";
        readonly name: "BatchInputLengthMismatch";
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
        readonly name: "FailedInnerCall";
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
        readonly name: "InvalidERC20Bridge";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidFeeDestination";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidPresentValue";
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
        readonly name: "ReentrancyGuardReentrantCall";
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
        readonly name: "SafeERC20FailedOperation";
        readonly inputs: readonly [{
            readonly name: "token";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly type: "error";
        readonly name: "SweepFailed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "Unauthorized";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "UnsafeCastToInt256";
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
    };
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"name\":\"AddressEmptyCode\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"AddressInsufficientBalance\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"BatchInputLengthMismatch\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ExpInvalidExponent\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ExpiredDeadline\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FailedInnerCall\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"enum IHyperdrive.InsufficientLiquidityReason\",\"name\":\"reason\",\"type\":\"uint8\"}],\"name\":\"InsufficientLiquidity\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidERC20Bridge\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFeeDestination\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPresentValue\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidSignature\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTimestamp\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"LnInvalidInput\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"RestrictedZeroAddress\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"ReturnData\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"}],\"name\":\"SafeERC20FailedOperation\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"SweepFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"Unauthorized\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToInt256\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"basePayment\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fees\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newFeeCollector\",\"type\":\"address\"}],\"name\":\"FeeCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseProceeds\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"}],\"name\":\"PauseStatusUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"name\":\"Sweep\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newSweepCollector\",\"type\":\"address\"}],\"name\":\"SweepCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"baseToken\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"values\",\"type\":\"uint256[]\"}],\"name\":\"batchTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"collectGovernanceFee\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"proceeds\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_checkpointTime\",\"type\":\"uint256\"}],\"name\":\"getCheckpoint\",\"outputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"vaultSharePrice\",\"type\":\"uint128\"}],\"internalType\":\"struct IHyperdrive.Checkpoint\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_checkpointTime\",\"type\":\"uint256\"}],\"name\":\"getCheckpointExposure\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getMarketState\",\"outputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"shareReserves\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"bondReserves\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longExposure\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longsOutstanding\",\"type\":\"uint128\"},{\"internalType\":\"int128\",\"name\":\"shareAdjustment\",\"type\":\"int128\"},{\"internalType\":\"uint128\",\"name\":\"shortsOutstanding\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longAverageMaturityTime\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"shortAverageMaturityTime\",\"type\":\"uint128\"},{\"internalType\":\"bool\",\"name\":\"isInitialized\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"},{\"internalType\":\"uint112\",\"name\":\"zombieBaseProceeds\",\"type\":\"uint112\"},{\"internalType\":\"uint128\",\"name\":\"zombieShareReserves\",\"type\":\"uint128\"}],\"internalType\":\"struct IHyperdrive.MarketState\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getPoolConfig\",\"outputs\":[{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"sweepCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolConfig\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getPoolInfo\",\"outputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"zombieBaseProceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"zombieShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"lpTotalSupply\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longAverageMaturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortAverageMaturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalSharesReadyToWithdraw\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalSharesProceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longExposure\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.PoolInfo\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getUncollectedGovernanceFees\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getWithdrawPool\",\"outputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"readyToWithdraw\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"proceeds\",\"type\":\"uint128\"}],\"internalType\":\"struct IHyperdrive.WithdrawPool\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_account\",\"type\":\"address\"}],\"name\":\"isPauser\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256[]\",\"name\":\"_slots\",\"type\":\"uint256[]\"}],\"name\":\"load\",\"outputs\":[{\"internalType\":\"bytes32[]\",\"name\":\"\",\"type\":\"bytes32[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"nonces\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"_status\",\"type\":\"bool\"}],\"name\":\"pause\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"perTokenApprovals\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"domainSeparator\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"permitTypeHash\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_approved\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permitForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"setApproval\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"setApprovalBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_who\",\"type\":\"address\"}],\"name\":\"setFeeCollector\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_who\",\"type\":\"address\"}],\"name\":\"setGovernance\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"who\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"setPauser\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_who\",\"type\":\"address\"}],\"name\":\"setSweepCollector\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"_target\",\"type\":\"address\"}],\"name\":\"sweep\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"transferFromBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"errors\":{\"AddressEmptyCode(address)\":[{\"details\":\"There's no code at `target` (it is not a contract).\"}],\"AddressInsufficientBalance(address)\":[{\"details\":\"The ETH balance of the account is not enough to perform the operation.\"}],\"FailedInnerCall()\":[{\"details\":\"A call to an address target failed. The target may have reverted.\"}],\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}],\"SafeERC20FailedOperation(address)\":[{\"details\":\"An operation with an ERC20 token failed.\"}]},\"kind\":\"dev\",\"methods\":{\"balanceOf(uint256,address)\":{\"params\":{\"account\":\"The account.\",\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The balance.\"}},\"baseToken()\":{\"returns\":{\"_0\":\"The base token.\"}},\"batchTransferFrom(address,address,uint256[],uint256[])\":{\"params\":{\"from\":\"The source account.\",\"ids\":\"The array of token ids of the asset to transfer.\",\"to\":\"The destination account.\",\"values\":\"The amount of each token to transfer.\"}},\"collectGovernanceFee((address,bool,bytes))\":{\"params\":{\"_options\":\"The options that configure how the fees are settled.\"},\"returns\":{\"proceeds\":\"The governance fees collected. The units of this         quantity are either base or vault shares, depending on the value         of `_options.asBase`.\"}},\"constructor\":{\"params\":{\"_config\":\"The configuration of the Hyperdrive pool.\"}},\"decimals()\":{\"returns\":{\"_0\":\"The decimals of the MultiToken.\"}},\"getCheckpoint(uint256)\":{\"params\":{\"_checkpointTime\":\"The checkpoint time.\"},\"returns\":{\"_0\":\"The checkpoint.\"}},\"getCheckpointExposure(uint256)\":{\"params\":{\"_checkpointTime\":\"The checkpoint time.\"},\"returns\":{\"_0\":\"The checkpoint exposure.\"}},\"getMarketState()\":{\"returns\":{\"_0\":\"The market state.\"}},\"getPoolConfig()\":{\"details\":\"These parameters are immutable, so this should only need to be      called once.\",\"returns\":{\"_0\":\"The PoolConfig struct.\"}},\"getPoolInfo()\":{\"returns\":{\"_0\":\"The pool info.\"}},\"getUncollectedGovernanceFees()\":{\"returns\":{\"_0\":\"Governance fees denominated in shares yet to be collected.\"}},\"getWithdrawPool()\":{\"returns\":{\"_0\":\"Hyperdrive's withdrawal pool information.\"}},\"isApprovedForAll(address,address)\":{\"params\":{\"account\":\"The account.\",\"operator\":\"The operator.\"},\"returns\":{\"_0\":\"The approval status.\"}},\"isPauser(address)\":{\"params\":{\"_account\":\"The account to check.\"},\"returns\":{\"_0\":\"The pauser status.\"}},\"load(uint256[])\":{\"params\":{\"_slots\":\"The storage slots the caller wants the data from.\"},\"returns\":{\"_0\":\"A raw array of loaded data.\"}},\"name(uint256)\":{\"params\":{\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The name.\"}},\"nonces(address)\":{\"params\":{\"account\":\"The account.\"},\"returns\":{\"_0\":\"The signature nonce.\"}},\"pause(bool)\":{\"params\":{\"_status\":\"True to pause all deposits and false to unpause them.\"}},\"perTokenApprovals(uint256,address,address)\":{\"params\":{\"account\":\"The account.\",\"spender\":\"The spender.\",\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The approval status.\"}},\"permitForAll(bytes32,bytes32,address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"details\":\"The signature for this function follows EIP 712 standard and should      be generated with the eth_signTypedData JSON RPC call instead of      the eth_sign JSON RPC call. If using out of date parity signing      libraries the v component may need to be adjusted. Also it is very      rare but possible for v to be other values, those values are not      supported.\",\"params\":{\"_approved\":\"A boolean of the approval status to set to.\",\"deadline\":\"The timestamp which the signature must be submitted by        to be valid.\",\"domainSeparator\":\"The EIP712 domain separator of the contract.\",\"owner\":\"The owner of the account which is having the new approval set.\",\"permitTypeHash\":\"The EIP712 domain separator of the contract.\",\"r\":\"The r component of the ECDSA signature.\",\"s\":\"The s component of the ECDSA signature.\",\"spender\":\"The address which will be allowed to spend owner's tokens.\",\"v\":\"Extra ECDSA data which allows public key recovery from        signature assumed to be 27 or 28.\"}},\"setApproval(uint256,address,uint256)\":{\"params\":{\"amount\":\"The max tokens the approved person can use, setting to        uint256.max will cause the value to never decrement (saving gas        on transfer).\",\"operator\":\"The address who will be able to use the tokens.\",\"tokenID\":\"The asset to approve the use of.\"}},\"setApprovalBridge(uint256,address,uint256,address)\":{\"params\":{\"amount\":\"The max tokens the approved person can use, setting to        uint256.max will cause the value to never decrement [saving gas        on transfer].\",\"caller\":\"The eth address which called the linking contract.\",\"operator\":\"The address who will be able to use the tokens.\",\"tokenID\":\"The asset to approve the use of.\"}},\"setApprovalForAll(address,bool)\":{\"params\":{\"approved\":\"True to approve, false to remove approval.\",\"operator\":\"The eth address which can access the caller's assets.\"}},\"setFeeCollector(address)\":{\"params\":{\"_who\":\"The new fee collector address.\"}},\"setGovernance(address)\":{\"params\":{\"_who\":\"The new governance address.\"}},\"setPauser(address,bool)\":{\"params\":{\"status\":\"The new pauser status.\",\"who\":\"The address to change.\"}},\"setSweepCollector(address)\":{\"params\":{\"_who\":\"The new sweep collector address.\"}},\"sweep(address)\":{\"details\":\"WARN: It is unlikely but possible that there is a selector overlap      with 'transfer'. Any integrating contracts should be checked      for that, as it may result in an unexpected call from this address.\",\"params\":{\"_target\":\"The target token to sweep.\"}},\"symbol(uint256)\":{\"params\":{\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The symbol.\"}},\"totalSupply(uint256)\":{\"params\":{\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The total supply.\"}},\"transferFrom(uint256,address,address,uint256)\":{\"params\":{\"amount\":\"The amount of token to move.\",\"from\":\"The address whose balance will be reduced.\",\"to\":\"The address whose balance will be increased.\",\"tokenID\":\"The token identifier.\"}},\"transferFromBridge(uint256,address,address,uint256,address)\":{\"params\":{\"amount\":\"The amount of token to move.\",\"caller\":\"The msg.sender from the bridge.\",\"from\":\"The address whose balance will be reduced.\",\"to\":\"The address whose balance will be increased.\",\"tokenID\":\"The token identifier.\"}}},\"title\":\"HyperdriveTarget0\",\"version\":1},\"userdoc\":{\"errors\":{\"BatchInputLengthMismatch()\":[{\"notice\":\"Thrown when the inputs to a batch transfer don't match in         length.\"}],\"ExpInvalidExponent()\":[{\"notice\":\"Thrown when the exponent to `FixedPointMath.exp` would cause the         the result to be larger than the representable scale.\"}],\"ExpiredDeadline()\":[{\"notice\":\"Thrown when a permit signature is expired.\"}],\"InsufficientLiquidity(uint8)\":[{\"notice\":\"Thrown when the pool doesn't have sufficient liquidity to         complete the trade.\"}],\"InvalidERC20Bridge()\":[{\"notice\":\"Thrown when the caller of one of MultiToken's bridge-only         functions is not the corresponding bridge.\"}],\"InvalidFeeDestination()\":[{\"notice\":\"Thrown when a destination other than the fee collector is         specified in `collectGovernanceFee`.\"}],\"InvalidPresentValue()\":[{\"notice\":\"Thrown when the present value calculation fails.\"}],\"InvalidSignature()\":[{\"notice\":\"Thrown when an invalid signature is used provide permit access         to the MultiToken. A signature is considered to be invalid if         it fails to recover to the owner's address.\"}],\"InvalidTimestamp()\":[{\"notice\":\"Thrown when the timestamp used to construct an asset ID exceeds         the uint248 scale.\"}],\"LnInvalidInput()\":[{\"notice\":\"Thrown when the input to `FixedPointMath.ln` is less than or         equal to zero.\"}],\"RestrictedZeroAddress()\":[{\"notice\":\"Thrown when the owner passed to permit is the zero address. This         prevents users from spending the funds in address zero by         sending an invalid signature to ecrecover.\"}],\"ReturnData(bytes)\":[{\"notice\":\"Thrown by a read-only function called by the proxy. Unlike a         normal error, this error actually indicates that a read-only         call succeeded. The data that it wraps is the return data from         the read-only call.\"}],\"SweepFailed()\":[{\"notice\":\"Thrown when an asset is swept from the pool and one of the         pool's depository assets changes.\"}],\"Unauthorized()\":[{\"notice\":\"Thrown when an unauthorized user attempts to access admin         functionality.\"}],\"UnsafeCastToInt256()\":[{\"notice\":\"Thrown when casting a value to a int256 that is outside of the         int256 scale.\"}]},\"events\":{\"AddLiquidity(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when an LP adds liquidity to the Hyperdrive pool.\"},\"Approval(address,address,uint256)\":{\"notice\":\"Emitted when an account changes the allowance for another         account.\"},\"ApprovalForAll(address,address,bool)\":{\"notice\":\"Emitted when an account changes the approval for all of its         tokens.\"},\"CloseLong(address,address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is closed.\"},\"CloseShort(address,address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is closed.\"},\"CollectGovernanceFee(address,uint256)\":{\"notice\":\"Emitted when governance fees are collected.\"},\"CreateCheckpoint(uint256,uint256,uint256,uint256,uint256)\":{\"notice\":\"Emitted when a checkpoint is created.\"},\"FeeCollectorUpdated(address)\":{\"notice\":\"Emitted when the fee collector address is updated.\"},\"GovernanceUpdated(address)\":{\"notice\":\"Emitted when the governance address is updated.\"},\"Initialize(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when the Hyperdrive pool is initialized.\"},\"OpenLong(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is opened.\"},\"OpenShort(address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is opened.\"},\"PauseStatusUpdated(bool)\":{\"notice\":\"Emitted when the pause status is updated.\"},\"PauserUpdated(address,bool)\":{\"notice\":\"Emitted when a pauser is updated.\"},\"RedeemWithdrawalShares(address,address,uint256,uint256,uint256,bool)\":{\"notice\":\"Emitted when an LP redeems withdrawal shares.\"},\"RemoveLiquidity(address,address,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when an LP removes liquidity from the Hyperdrive pool.\"},\"Sweep(address,address)\":{\"notice\":\"Emitted when tokens are swept.\"},\"SweepCollectorUpdated(address)\":{\"notice\":\"Emitted when the sweep collector address is updated.\"},\"TransferSingle(address,address,address,uint256,uint256)\":{\"notice\":\"Emitted when tokens are transferred from one account to another.\"}},\"kind\":\"user\",\"methods\":{\"balanceOf(uint256,address)\":{\"notice\":\"Gets an account's balance of a sub-token.\"},\"baseToken()\":{\"notice\":\"Gets the base token.\"},\"batchTransferFrom(address,address,uint256[],uint256[])\":{\"notice\":\"Transfers several assets from one account to another.\"},\"collectGovernanceFee((address,bool,bytes))\":{\"notice\":\"This function collects the governance fees accrued by the pool.\"},\"constructor\":{\"notice\":\"Instantiates target0.\"},\"decimals()\":{\"notice\":\"Gets the decimals of the MultiToken. This is the same as the         decimals used by the base token.\"},\"getCheckpoint(uint256)\":{\"notice\":\"Gets a specified checkpoint.\"},\"getCheckpointExposure(uint256)\":{\"notice\":\"Gets the checkpoint exposure at a specified time.\"},\"getMarketState()\":{\"notice\":\"Gets the market state.\"},\"getPoolConfig()\":{\"notice\":\"Gets the pool's configuration parameters.\"},\"getPoolInfo()\":{\"notice\":\"Gets info about the pool's reserves and other state that is         important to evaluate potential trades.\"},\"getUncollectedGovernanceFees()\":{\"notice\":\"Gets info about the fees presently accrued by the pool.\"},\"getWithdrawPool()\":{\"notice\":\"Gets information about the withdrawal pool.\"},\"isApprovedForAll(address,address)\":{\"notice\":\"Gets the approval status of an operator for an account.\"},\"isPauser(address)\":{\"notice\":\"Gets the pauser status of an address.\"},\"load(uint256[])\":{\"notice\":\"Allows plugin data libs to provide getters or other complex         logic instead of the main.\"},\"name(uint256)\":{\"notice\":\"Gets the name of a sub-token.\"},\"nonces(address)\":{\"notice\":\"Gets the permitForAll signature nonce for an account.\"},\"pause(bool)\":{\"notice\":\"Allows an authorized address to pause this contract.\"},\"perTokenApprovals(uint256,address,address)\":{\"notice\":\"Gets the approval status of an operator for an account.\"},\"permitForAll(bytes32,bytes32,address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"notice\":\"Allows a caller who is not the owner of an account to execute         the functionality of 'approve' for all assets with the owner's         signature.\"},\"setApproval(uint256,address,uint256)\":{\"notice\":\"Allows a user to set an approval for an individual asset with         specific amount.\"},\"setApprovalBridge(uint256,address,uint256,address)\":{\"notice\":\"Allows the compatibility linking contract to forward calls to         set asset approvals.\"},\"setApprovalForAll(address,bool)\":{\"notice\":\"Allows a user to approve an operator to use all of their assets.\"},\"setFeeCollector(address)\":{\"notice\":\"Allows governance to change the fee collector.\"},\"setGovernance(address)\":{\"notice\":\"Allows governance to change governance.\"},\"setPauser(address,bool)\":{\"notice\":\"Allows governance to change the pauser status of an address.\"},\"setSweepCollector(address)\":{\"notice\":\"Allows governance to change the sweep collector.\"},\"sweep(address)\":{\"notice\":\"Transfers the contract's balance of a target token to the sweep         collector address.\"},\"symbol(uint256)\":{\"notice\":\"Gets the symbol of a sub-token.\"},\"totalSupply(uint256)\":{\"notice\":\"Gets the total supply of a sub-token.\"},\"transferFrom(uint256,address,address,uint256)\":{\"notice\":\"Transfers an amount of assets from the source to the destination.\"},\"transferFromBridge(uint256,address,address,uint256,address)\":{\"notice\":\"Permissioned transfer for the bridge to access, only callable by         the ERC20 linking bridge.\"}},\"notice\":\"Hyperdrive's target 0 logic contract.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/external/HyperdriveTarget0.sol\":\"HyperdriveTarget0\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/external/HyperdriveTarget0.sol\":{\"keccak256\":\"0x7336935ca8a1b3985f01f923c8444e0eaeffe1ce71ae2a84bf2514cc502b913d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://bd572503e6cc9f49d7cacef4242fa485035b7e46090c82bbfe2f4e9f9ed14597\",\"dweb:/ipfs/QmaXKWM58hzKtwtq7jn6pwY5UF7EtaL2sQW6mNXpaonckZ\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xb8ee04f3090b498966970e210f7de0f982f6445628556f2f176385423d8c5952\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://db789f03faa935c6e3b0882b6e873e8f683c9c8841a4b128366dcbe7321911bf\",\"dweb:/ipfs/QmSQh1cX79nApuSAfJbVN99dmEaE4CK9QwWfEGcwhJMBLK\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x68adcd293ff25711add1698b6024faa45beec01eb044bd0103d3020aa96d856e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0e0f5e35a7d2c656e249394d25896e5adfb9af3e210c01b9ef5fa81d25a45e24\",\"dweb:/ipfs/QmbLASezHPWHcbodqSfw3Qh9NzqekqVPM8FhCXKGTCXL1h\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x812ccb32dff907e8614c89a65196eec239eceb3e63f9f14dde2b2269c75a67c0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://da5f2ce974bfcd8185342c121c879ba5aef23e1e4e7b36cf9fcba68296b8892c\",\"dweb:/ipfs/QmSho3PWs9bzejTYYjySuXcH9tVP4xFnkbUmSzQA54g8eG\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf\",\"dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/internal/HyperdriveAdmin.sol\":{\"keccak256\":\"0x683548d598b303bc8bab561818a2f88c100f6d26fda478e89c02b46cf710726d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://054a605eeb41760fbe1922bb32f511c87e1ca4dd04f3fa64f40783060b371603\",\"dweb:/ipfs/QmezP1mjnbPCwdDCrh4GjL7RVzU61ohTrcW6A7yxLiKcQM\"]},\"contracts/src/internal/HyperdriveBase.sol\":{\"keccak256\":\"0x7feb8df22e6f91b1ee70f50f5ca16a7819601bcb88fc5a5fa9cf16c708cc52bb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://60ff7ff4faa45551099b025d03f2438477b5fd1f64f82b78c6ed26cbdafc64f6\",\"dweb:/ipfs/QmWtbftziGdSKAEvpRoaWRnTxMNwgUVs2nDN6nFugX1WYN\"]},\"contracts/src/internal/HyperdriveCheckpoint.sol\":{\"keccak256\":\"0x3514b829c99e0015385ff08dd1479e452529a6283e8b6800946542ff21dc9649\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://37ffd17baea5080f4184372ac835bf60694760499756235a61e41a480f4ab3c7\",\"dweb:/ipfs/QmUzEnJhRhpW18MH7GyXsug9u5FLehNfgjR7RAhZizLLVd\"]},\"contracts/src/internal/HyperdriveLP.sol\":{\"keccak256\":\"0x72410851e77940e66681e23b9d10f3c3de0e8c9a3e5b1cca627e93bba431775d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://82a9292f388b16572cc5c5e873d1ead666ddcc3e436cf5d7fb036fd6c63ee9a2\",\"dweb:/ipfs/Qmauzxkn46ACS4XV43m2MbDF91KYP4ExYwSxL3cm1SDL6j\"]},\"contracts/src/internal/HyperdriveLong.sol\":{\"keccak256\":\"0xe791adb5c58a73ff2c978fcc79153f9042702e2c4fc5d71f60534323d5ba4832\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7ec4adf40e5f90574c7484ddeeed41cbe1f60b29847b18b169aa3130b8882aa7\",\"dweb:/ipfs/QmeY9y922jhcLzGw9d4VUNNoDkUeFhTJ8ZVThrvqzcGGjm\"]},\"contracts/src/internal/HyperdriveMultiToken.sol\":{\"keccak256\":\"0x21a9aafb8e23a22c77111e13538fa8f709446e4f3a64ef84b2eebc2aa9d04373\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://41517912353540de5b430587ca8220f9d34d4432d3c723951d5fb618d5907b5d\",\"dweb:/ipfs/QmU3cTCrAq94digVS97s5af1Pu86uGBpmpus6w7828fUbG\"]},\"contracts/src/internal/HyperdriveShort.sol\":{\"keccak256\":\"0xc42b5a9ee5eee3cb9177b136eb9f4b81a4b51d9468f8faa97309934b6b371bc5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b9291237fcdbb8ff97517acd19499cfa4afc6d670a89fd5cc0309a201a7b1006\",\"dweb:/ipfs/QmfQmUwvGhJgPFyNaHvur8AViePBzvSBNAdaZJBwMkY5Je\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xf13ba4bcf41673bc04e4ae32a29c31b62514d66cfedee70b0d3bff574efc0e4a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e505639a656cf7c908e7c64cfd5cae6f4174a679de19d17a3f12f6e3fc4b2195\",\"dweb:/ipfs/QmNmcmz9nV9uDyeouo8yWAKMoMqEVx6JMTfZwCRa9QU83N\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0x3031a1ec376be333eebe0062c474a22d7f970cb02de62ab6823c6918c0a7f83b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6c80cc2fd8b7908b6420ebb21cb99266c93e01d6cdd9d1a41f8847493849b131\",\"dweb:/ipfs/QmeMehWbF2RwQaf6c6yaj5KHjXboDRpzBCtvFnLW4BXBbc\"]},\"contracts/src/libraries/Errors.sol\":{\"keccak256\":\"0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88\",\"dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x631f6529908f62f71775f8c6120afdca3a836fb24fa9fa4701cad54f4a9da076\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2baf6ad8917a3fbb6d040334451f6b4f6936b00518c4cd308b9c6fa11569b2bd\",\"dweb:/ipfs/QmXD16vk6MRxmPRqy8ZXSpRA5XxhSf1pnsQH32ARDJTk8L\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0xcf305dde8aa320d1e1b767734ce8edce456af537525d40e30d5345f09f6e34ab\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://056c9a563f1a9e0133e17463497ad19be517d35b770170122edea50ca9fbe002\",\"dweb:/ipfs/QmS6dkVRHzdbv7etumcCtNtm9GuXDCjqZxxhtYfP6keAAY\"]},\"contracts/src/libraries/LPMath.sol\":{\"keccak256\":\"0x5b3c0d159b1945a14227028d835e011bf740e007f664cba049ece1b6ab963067\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d8f4fef22462dabc799b2f8124440a7cc57076f7ceecb46219c69b09f50baf5f\",\"dweb:/ipfs/Qmcw9iC1RZt4Nh7dGH1yR7vUi6qZHJf6ReAvF2uLFHESqZ\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8\",\"dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x4a9c91313bed7cda6ef503af23c9f777008b5258e9cb2176eab6acc52be79891\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://88da1f5502a12fe1024be90f6a6ea08556cc1f2660ab8cbeb5e07640abb7711c\",\"dweb:/ipfs/QmVQoG9TyrAsVYcgvgZfgA5pQk8V8wvS4BewGNP4B3Txyy\"]},\"lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol\":{\"keccak256\":\"0x60c65f701957fdd6faea1acb0bb45825791d473693ed9ecb34726fdfaa849dd7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ea290300e0efc4d901244949dc4d877fd46e6c5e43dc2b26620e8efab3ab803f\",\"dweb:/ipfs/QmcLLJppxKeJWqHxE2CUkcfhuRTgHSn8J4kijcLa5MYhSt\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0xc3e1fa9d1987f8d349dfb4d6fe93bf2ca014b52ba335cfac30bfe71e357e6f80\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c5703ccdeb7b1d685e375ed719117e9edf2ab4bc544f24f23b0d50ec82257229\",\"dweb:/ipfs/QmTdwkbQq7owpCiyuzE7eh5LrD2ddrBCZ5WHVsWPi1RrTS\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c\",\"dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850\",\"dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x6008dabfe393240d73d7dd7688033f72740d570aa422254d29a7dce8568f3aff\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f5196ec75139918c6c7bb4251b36395e668f1fa6d206beba7e7520e74913940d\",\"dweb:/ipfs/QmSyqjksXxmm2mCG6qRd1yuwLykypkSVBbnBnGqJRcuJMi\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x37bb49513c49c87c4642a891b13b63571bc87013dde806617aa1efb54605f386\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b3036b3a83b7c48f96641f2a9002b9f2dcb6a5958dd670894ada21ae8229b3d0\",\"dweb:/ipfs/QmUNfSBdoVtjhETaUJCYcaC7pTMgbhht926tJ2uXJbiVd3\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245\",\"dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y\"]},\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":{\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12\",\"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF\"]},\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02\",\"dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd\"]}},\"version\":1}";
    readonly metadata: {
        readonly compiler: {
            readonly version: "0.8.20+commit.a1b79de6";
        };
        readonly language: "Solidity";
        readonly output: {
            readonly abi: readonly [{
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
                        readonly notice: "Instantiates target0.";
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
                readonly "contracts/src/external/HyperdriveTarget0.sol": "HyperdriveTarget0";
            };
            readonly libraries: {};
        };
        readonly sources: {
            readonly "contracts/src/external/HyperdriveTarget0.sol": {
                readonly keccak256: "0x7336935ca8a1b3985f01f923c8444e0eaeffe1ce71ae2a84bf2514cc502b913d";
                readonly urls: readonly ["bzz-raw://bd572503e6cc9f49d7cacef4242fa485035b7e46090c82bbfe2f4e9f9ed14597", "dweb:/ipfs/QmaXKWM58hzKtwtq7jn6pwY5UF7EtaL2sQW6mNXpaonckZ"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IERC20.sol": {
                readonly keccak256: "0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9";
                readonly urls: readonly ["bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac", "dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdrive.sol": {
                readonly keccak256: "0xb8ee04f3090b498966970e210f7de0f982f6445628556f2f176385423d8c5952";
                readonly urls: readonly ["bzz-raw://db789f03faa935c6e3b0882b6e873e8f683c9c8841a4b128366dcbe7321911bf", "dweb:/ipfs/QmSQh1cX79nApuSAfJbVN99dmEaE4CK9QwWfEGcwhJMBLK"];
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
                readonly keccak256: "0x683548d598b303bc8bab561818a2f88c100f6d26fda478e89c02b46cf710726d";
                readonly urls: readonly ["bzz-raw://054a605eeb41760fbe1922bb32f511c87e1ca4dd04f3fa64f40783060b371603", "dweb:/ipfs/QmezP1mjnbPCwdDCrh4GjL7RVzU61ohTrcW6A7yxLiKcQM"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/internal/HyperdriveBase.sol": {
                readonly keccak256: "0x7feb8df22e6f91b1ee70f50f5ca16a7819601bcb88fc5a5fa9cf16c708cc52bb";
                readonly urls: readonly ["bzz-raw://60ff7ff4faa45551099b025d03f2438477b5fd1f64f82b78c6ed26cbdafc64f6", "dweb:/ipfs/QmWtbftziGdSKAEvpRoaWRnTxMNwgUVs2nDN6nFugX1WYN"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/internal/HyperdriveCheckpoint.sol": {
                readonly keccak256: "0x3514b829c99e0015385ff08dd1479e452529a6283e8b6800946542ff21dc9649";
                readonly urls: readonly ["bzz-raw://37ffd17baea5080f4184372ac835bf60694760499756235a61e41a480f4ab3c7", "dweb:/ipfs/QmUzEnJhRhpW18MH7GyXsug9u5FLehNfgjR7RAhZizLLVd"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/internal/HyperdriveLP.sol": {
                readonly keccak256: "0x72410851e77940e66681e23b9d10f3c3de0e8c9a3e5b1cca627e93bba431775d";
                readonly urls: readonly ["bzz-raw://82a9292f388b16572cc5c5e873d1ead666ddcc3e436cf5d7fb036fd6c63ee9a2", "dweb:/ipfs/Qmauzxkn46ACS4XV43m2MbDF91KYP4ExYwSxL3cm1SDL6j"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/internal/HyperdriveLong.sol": {
                readonly keccak256: "0xe791adb5c58a73ff2c978fcc79153f9042702e2c4fc5d71f60534323d5ba4832";
                readonly urls: readonly ["bzz-raw://7ec4adf40e5f90574c7484ddeeed41cbe1f60b29847b18b169aa3130b8882aa7", "dweb:/ipfs/QmeY9y922jhcLzGw9d4VUNNoDkUeFhTJ8ZVThrvqzcGGjm"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/internal/HyperdriveMultiToken.sol": {
                readonly keccak256: "0x21a9aafb8e23a22c77111e13538fa8f709446e4f3a64ef84b2eebc2aa9d04373";
                readonly urls: readonly ["bzz-raw://41517912353540de5b430587ca8220f9d34d4432d3c723951d5fb618d5907b5d", "dweb:/ipfs/QmU3cTCrAq94digVS97s5af1Pu86uGBpmpus6w7828fUbG"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/internal/HyperdriveShort.sol": {
                readonly keccak256: "0xc42b5a9ee5eee3cb9177b136eb9f4b81a4b51d9468f8faa97309934b6b371bc5";
                readonly urls: readonly ["bzz-raw://b9291237fcdbb8ff97517acd19499cfa4afc6d670a89fd5cc0309a201a7b1006", "dweb:/ipfs/QmfQmUwvGhJgPFyNaHvur8AViePBzvSBNAdaZJBwMkY5Je"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/internal/HyperdriveStorage.sol": {
                readonly keccak256: "0xf13ba4bcf41673bc04e4ae32a29c31b62514d66cfedee70b0d3bff574efc0e4a";
                readonly urls: readonly ["bzz-raw://e505639a656cf7c908e7c64cfd5cae6f4174a679de19d17a3f12f6e3fc4b2195", "dweb:/ipfs/QmNmcmz9nV9uDyeouo8yWAKMoMqEVx6JMTfZwCRa9QU83N"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/AssetId.sol": {
                readonly keccak256: "0x3031a1ec376be333eebe0062c474a22d7f970cb02de62ab6823c6918c0a7f83b";
                readonly urls: readonly ["bzz-raw://6c80cc2fd8b7908b6420ebb21cb99266c93e01d6cdd9d1a41f8847493849b131", "dweb:/ipfs/QmeMehWbF2RwQaf6c6yaj5KHjXboDRpzBCtvFnLW4BXBbc"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/Errors.sol": {
                readonly keccak256: "0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0";
                readonly urls: readonly ["bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88", "dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/FixedPointMath.sol": {
                readonly keccak256: "0x631f6529908f62f71775f8c6120afdca3a836fb24fa9fa4701cad54f4a9da076";
                readonly urls: readonly ["bzz-raw://2baf6ad8917a3fbb6d040334451f6b4f6936b00518c4cd308b9c6fa11569b2bd", "dweb:/ipfs/QmXD16vk6MRxmPRqy8ZXSpRA5XxhSf1pnsQH32ARDJTk8L"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/HyperdriveMath.sol": {
                readonly keccak256: "0xcf305dde8aa320d1e1b767734ce8edce456af537525d40e30d5345f09f6e34ab";
                readonly urls: readonly ["bzz-raw://056c9a563f1a9e0133e17463497ad19be517d35b770170122edea50ca9fbe002", "dweb:/ipfs/QmS6dkVRHzdbv7etumcCtNtm9GuXDCjqZxxhtYfP6keAAY"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/LPMath.sol": {
                readonly keccak256: "0x5b3c0d159b1945a14227028d835e011bf740e007f664cba049ece1b6ab963067";
                readonly urls: readonly ["bzz-raw://d8f4fef22462dabc799b2f8124440a7cc57076f7ceecb46219c69b09f50baf5f", "dweb:/ipfs/Qmcw9iC1RZt4Nh7dGH1yR7vUi6qZHJf6ReAvF2uLFHESqZ"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/SafeCast.sol": {
                readonly keccak256: "0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148";
                readonly urls: readonly ["bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8", "dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/YieldSpaceMath.sol": {
                readonly keccak256: "0x4a9c91313bed7cda6ef503af23c9f777008b5258e9cb2176eab6acc52be79891";
                readonly urls: readonly ["bzz-raw://88da1f5502a12fe1024be90f6a6ea08556cc1f2660ab8cbeb5e07640abb7711c", "dweb:/ipfs/QmVQoG9TyrAsVYcgvgZfgA5pQk8V8wvS4BewGNP4B3Txyy"];
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
        readonly absolutePath: "contracts/src/external/HyperdriveTarget0.sol";
        readonly id: 5410;
        readonly exportedSymbols: {
            readonly AssetId: readonly [18642];
            readonly FixedPointMath: readonly [19442];
            readonly HyperdriveAdmin: readonly [13205];
            readonly HyperdriveCheckpoint: readonly [14845];
            readonly HyperdriveLP: readonly [15747];
            readonly HyperdriveLong: readonly [16681];
            readonly HyperdriveMultiToken: readonly [17165];
            readonly HyperdriveShort: readonly [18151];
            readonly HyperdriveStorage: readonly [18367];
            readonly HyperdriveTarget0: readonly [5409];
            readonly IERC20: readonly [10358];
            readonly IHyperdrive: readonly [11076];
            readonly IHyperdriveRead: readonly [11913];
            readonly LPMath: readonly [22134];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:18101:37";
        readonly nodes: readonly [{
            readonly id: 4611;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:23:37";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 4613;
            readonly nodeType: "ImportDirective";
            readonly src: "64:50:37";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IERC20.sol";
            readonly file: "../interfaces/IERC20.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 5410;
            readonly sourceUnit: 10359;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 4612;
                    readonly name: "IERC20";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 10358;
                    readonly src: "73:6:37";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 4615;
            readonly nodeType: "ImportDirective";
            readonly src: "115:60:37";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IHyperdrive.sol";
            readonly file: "../interfaces/IHyperdrive.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 5410;
            readonly sourceUnit: 11077;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 4614;
                    readonly name: "IHyperdrive";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 11076;
                    readonly src: "124:11:37";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 4617;
            readonly nodeType: "ImportDirective";
            readonly src: "176:68:37";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IHyperdriveRead.sol";
            readonly file: "../interfaces/IHyperdriveRead.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 5410;
            readonly sourceUnit: 11914;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 4616;
                    readonly name: "IHyperdriveRead";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 11913;
                    readonly src: "185:15:37";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 4619;
            readonly nodeType: "ImportDirective";
            readonly src: "245:66:37";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/internal/HyperdriveAdmin.sol";
            readonly file: "../internal/HyperdriveAdmin.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 5410;
            readonly sourceUnit: 13206;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 4618;
                    readonly name: "HyperdriveAdmin";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 13205;
                    readonly src: "254:15:37";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 4621;
            readonly nodeType: "ImportDirective";
            readonly src: "312:76:37";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/internal/HyperdriveCheckpoint.sol";
            readonly file: "../internal/HyperdriveCheckpoint.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 5410;
            readonly sourceUnit: 14846;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 4620;
                    readonly name: "HyperdriveCheckpoint";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 14845;
                    readonly src: "321:20:37";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 4623;
            readonly nodeType: "ImportDirective";
            readonly src: "389:64:37";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/internal/HyperdriveLong.sol";
            readonly file: "../internal/HyperdriveLong.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 5410;
            readonly sourceUnit: 16682;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 4622;
                    readonly name: "HyperdriveLong";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 16681;
                    readonly src: "398:14:37";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 4625;
            readonly nodeType: "ImportDirective";
            readonly src: "454:60:37";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/internal/HyperdriveLP.sol";
            readonly file: "../internal/HyperdriveLP.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 5410;
            readonly sourceUnit: 15748;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 4624;
                    readonly name: "HyperdriveLP";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 15747;
                    readonly src: "463:12:37";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 4627;
            readonly nodeType: "ImportDirective";
            readonly src: "515:76:37";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/internal/HyperdriveMultiToken.sol";
            readonly file: "../internal/HyperdriveMultiToken.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 5410;
            readonly sourceUnit: 17166;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 4626;
                    readonly name: "HyperdriveMultiToken";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 17165;
                    readonly src: "524:20:37";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 4629;
            readonly nodeType: "ImportDirective";
            readonly src: "592:66:37";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/internal/HyperdriveShort.sol";
            readonly file: "../internal/HyperdriveShort.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 5410;
            readonly sourceUnit: 18152;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 4628;
                    readonly name: "HyperdriveShort";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 18151;
                    readonly src: "601:15:37";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 4631;
            readonly nodeType: "ImportDirective";
            readonly src: "659:70:37";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/internal/HyperdriveStorage.sol";
            readonly file: "../internal/HyperdriveStorage.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 5410;
            readonly sourceUnit: 18368;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 4630;
                    readonly name: "HyperdriveStorage";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 18367;
                    readonly src: "668:17:37";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 4633;
            readonly nodeType: "ImportDirective";
            readonly src: "730:51:37";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/libraries/AssetId.sol";
            readonly file: "../libraries/AssetId.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 5410;
            readonly sourceUnit: 18643;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 4632;
                    readonly name: "AssetId";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 18642;
                    readonly src: "739:7:37";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 4635;
            readonly nodeType: "ImportDirective";
            readonly src: "782:65:37";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/libraries/FixedPointMath.sol";
            readonly file: "../libraries/FixedPointMath.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 5410;
            readonly sourceUnit: 19443;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 4634;
                    readonly name: "FixedPointMath";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 19442;
                    readonly src: "791:14:37";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 4637;
            readonly nodeType: "ImportDirective";
            readonly src: "848:49:37";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/libraries/LPMath.sol";
            readonly file: "../libraries/LPMath.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 5410;
            readonly sourceUnit: 22135;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 4636;
                    readonly name: "LPMath";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 22134;
                    readonly src: "857:6:37";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 5409;
            readonly nodeType: "ContractDefinition";
            readonly src: "1219:16920:37";
            readonly nodes: readonly [{
                readonly id: 4655;
                readonly nodeType: "UsingForDirective";
                readonly src: "1416:33:37";
                readonly nodes: readonly [];
                readonly global: false;
                readonly libraryName: {
                    readonly id: 4653;
                    readonly name: "FixedPointMath";
                    readonly nameLocations: readonly ["1422:14:37"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 19442;
                    readonly src: "1422:14:37";
                };
                readonly typeName: {
                    readonly id: 4654;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1441:7:37";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
            }, {
                readonly id: 4666;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1558:94:37";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 4665;
                    readonly nodeType: "Block";
                    readonly src: "1650:2:37";
                    readonly nodes: readonly [];
                    readonly statements: readonly [];
                };
                readonly documentation: {
                    readonly id: 4656;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1455:98:37";
                    readonly text: "@notice Instantiates target0.\n @param _config The configuration of the Hyperdrive pool.";
                };
                readonly implemented: true;
                readonly kind: "constructor";
                readonly modifiers: readonly [{
                    readonly arguments: readonly [{
                        readonly id: 4662;
                        readonly name: "_config";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 4659;
                        readonly src: "1641:7:37";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10867_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig memory";
                        };
                    }];
                    readonly id: 4663;
                    readonly kind: "baseConstructorSpecifier";
                    readonly modifierName: {
                        readonly id: 4661;
                        readonly name: "HyperdriveStorage";
                        readonly nameLocations: readonly ["1623:17:37"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 18367;
                        readonly src: "1623:17:37";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "1623:26:37";
                }];
                readonly name: "";
                readonly nameLocation: "-1:-1:-1";
                readonly parameters: {
                    readonly id: 4660;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 4659;
                        readonly mutability: "mutable";
                        readonly name: "_config";
                        readonly nameLocation: "1609:7:37";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4666;
                        readonly src: "1579:37:37";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10867_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig";
                        };
                        readonly typeName: {
                            readonly id: 4658;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 4657;
                                readonly name: "IHyperdrive.PoolConfig";
                                readonly nameLocations: readonly ["1579:11:37", "1591:10:37"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10867;
                                readonly src: "1579:22:37";
                            };
                            readonly referencedDeclaration: 10867;
                            readonly src: "1579:22:37";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolConfig_$10867_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1569:53:37";
                };
                readonly returnParameters: {
                    readonly id: 4664;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1650:0:37";
                };
                readonly scope: 5409;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 4680;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2027:174:37";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 4679;
                    readonly nodeType: "Block";
                    readonly src: "2146:55:37";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 4676;
                                readonly name: "_options";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4670;
                                readonly src: "2185:8:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Options_$10923_calldata_ptr";
                                    readonly typeString: "struct IHyperdrive.Options calldata";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_Options_$10923_calldata_ptr";
                                    readonly typeString: "struct IHyperdrive.Options calldata";
                                }];
                                readonly id: 4675;
                                readonly name: "_collectGovernanceFee";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 12979;
                                readonly src: "2163:21:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_struct$_Options_$10923_calldata_ptr_$returns$_t_uint256_$";
                                    readonly typeString: "function (struct IHyperdrive.Options calldata) returns (uint256)";
                                };
                            };
                            readonly id: 4677;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2163:31:37";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 4674;
                        readonly id: 4678;
                        readonly nodeType: "Return";
                        readonly src: "2156:38:37";
                    }];
                };
                readonly documentation: {
                    readonly id: 4667;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1677:345:37";
                    readonly text: "@notice This function collects the governance fees accrued by the pool.\n @param _options The options that configure how the fees are settled.\n @return proceeds The governance fees collected. The units of this\n         quantity are either base or vault shares, depending on the value\n         of `_options.asBase`.";
                };
                readonly functionSelector: "3e691db9";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "collectGovernanceFee";
                readonly nameLocation: "2036:20:37";
                readonly parameters: {
                    readonly id: 4671;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 4670;
                        readonly mutability: "mutable";
                        readonly name: "_options";
                        readonly nameLocation: "2095:8:37";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4680;
                        readonly src: "2066:37:37";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_Options_$10923_calldata_ptr";
                            readonly typeString: "struct IHyperdrive.Options";
                        };
                        readonly typeName: {
                            readonly id: 4669;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 4668;
                                readonly name: "IHyperdrive.Options";
                                readonly nameLocations: readonly ["2066:11:37", "2078:7:37"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10923;
                                readonly src: "2066:19:37";
                            };
                            readonly referencedDeclaration: 10923;
                            readonly src: "2066:19:37";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Options_$10923_storage_ptr";
                                readonly typeString: "struct IHyperdrive.Options";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2056:53:37";
                };
                readonly returnParameters: {
                    readonly id: 4674;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 4673;
                        readonly mutability: "mutable";
                        readonly name: "proceeds";
                        readonly nameLocation: "2136:8:37";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4680;
                        readonly src: "2128:16:37";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 4672;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2128:7:37";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2127:18:37";
                };
                readonly scope: 5409;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 4691;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2353:70:37";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 4690;
                    readonly nodeType: "Block";
                    readonly src: "2391:32:37";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 4687;
                                readonly name: "_status";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4683;
                                readonly src: "2408:7:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                }];
                                readonly id: 4686;
                                readonly name: "_pause";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13008;
                                readonly src: "2401:6:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_bool_$returns$__$";
                                    readonly typeString: "function (bool)";
                                };
                            };
                            readonly id: 4688;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2401:15:37";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 4689;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2401:15:37";
                    }];
                };
                readonly documentation: {
                    readonly id: 4681;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2207:141:37";
                    readonly text: "@notice Allows an authorized address to pause this contract.\n @param _status True to pause all deposits and false to unpause them.";
                };
                readonly functionSelector: "02329a29";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "pause";
                readonly nameLocation: "2362:5:37";
                readonly parameters: {
                    readonly id: 4684;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 4683;
                        readonly mutability: "mutable";
                        readonly name: "_status";
                        readonly nameLocation: "2373:7:37";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4691;
                        readonly src: "2368:12:37";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 4682;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2368:4:37";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2367:14:37";
                };
                readonly returnParameters: {
                    readonly id: 4685;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2391:0:37";
                };
                readonly scope: 5409;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 4702;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2543:87:37";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 4701;
                    readonly nodeType: "Block";
                    readonly src: "2591:39:37";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 4698;
                                readonly name: "_who";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4694;
                                readonly src: "2618:4:37";
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
                                readonly id: 4697;
                                readonly name: "_setFeeCollector";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13034;
                                readonly src: "2601:16:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_address_$returns$__$";
                                    readonly typeString: "function (address)";
                                };
                            };
                            readonly id: 4699;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2601:22:37";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 4700;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2601:22:37";
                    }];
                };
                readonly documentation: {
                    readonly id: 4692;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2429:109:37";
                    readonly text: "@notice Allows governance to change the fee collector.\n @param _who The new fee collector address.";
                };
                readonly functionSelector: "a42dce80";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "setFeeCollector";
                readonly nameLocation: "2552:15:37";
                readonly parameters: {
                    readonly id: 4695;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 4694;
                        readonly mutability: "mutable";
                        readonly name: "_who";
                        readonly nameLocation: "2576:4:37";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4702;
                        readonly src: "2568:12:37";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 4693;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2568:7:37";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2567:14:37";
                };
                readonly returnParameters: {
                    readonly id: 4696;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2591:0:37";
                };
                readonly scope: 5409;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 4713;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2754:91:37";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 4712;
                    readonly nodeType: "Block";
                    readonly src: "2804:41:37";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 4709;
                                readonly name: "_who";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4705;
                                readonly src: "2833:4:37";
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
                                readonly id: 4708;
                                readonly name: "_setSweepCollector";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13060;
                                readonly src: "2814:18:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_address_$returns$__$";
                                    readonly typeString: "function (address)";
                                };
                            };
                            readonly id: 4710;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2814:24:37";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 4711;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2814:24:37";
                    }];
                };
                readonly documentation: {
                    readonly id: 4703;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2636:113:37";
                    readonly text: "@notice Allows governance to change the sweep collector.\n @param _who The new sweep collector address.";
                };
                readonly functionSelector: "e4af29d1";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "setSweepCollector";
                readonly nameLocation: "2763:17:37";
                readonly parameters: {
                    readonly id: 4706;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 4705;
                        readonly mutability: "mutable";
                        readonly name: "_who";
                        readonly nameLocation: "2789:4:37";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4713;
                        readonly src: "2781:12:37";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 4704;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2781:7:37";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2780:14:37";
                };
                readonly returnParameters: {
                    readonly id: 4707;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2804:0:37";
                };
                readonly scope: 5409;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 4724;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2955:83:37";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 4723;
                    readonly nodeType: "Block";
                    readonly src: "3001:37:37";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 4720;
                                readonly name: "_who";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4716;
                                readonly src: "3026:4:37";
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
                                readonly id: 4719;
                                readonly name: "_setGovernance";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13086;
                                readonly src: "3011:14:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_address_$returns$__$";
                                    readonly typeString: "function (address)";
                                };
                            };
                            readonly id: 4721;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3011:20:37";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 4722;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "3011:20:37";
                    }];
                };
                readonly documentation: {
                    readonly id: 4714;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2851:99:37";
                    readonly text: "@notice Allows governance to change governance.\n @param _who The new governance address.";
                };
                readonly functionSelector: "ab033ea9";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "setGovernance";
                readonly nameLocation: "2964:13:37";
                readonly parameters: {
                    readonly id: 4717;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 4716;
                        readonly mutability: "mutable";
                        readonly name: "_who";
                        readonly nameLocation: "2986:4:37";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4724;
                        readonly src: "2978:12:37";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 4715;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2978:7:37";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2977:14:37";
                };
                readonly returnParameters: {
                    readonly id: 4718;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "3001:0:37";
                };
                readonly scope: 5409;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 4738;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3208:94:37";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 4737;
                    readonly nodeType: "Block";
                    readonly src: "3262:40:37";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 4733;
                                readonly name: "who";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4727;
                                readonly src: "3283:3:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 4734;
                                readonly name: "status";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4729;
                                readonly src: "3288:6:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                }];
                                readonly id: 4732;
                                readonly name: "_setPauser";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13117;
                                readonly src: "3272:10:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_address_$_t_bool_$returns$__$";
                                    readonly typeString: "function (address,bool)";
                                };
                            };
                            readonly id: 4735;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3272:23:37";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 4736;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "3272:23:37";
                    }];
                };
                readonly documentation: {
                    readonly id: 4725;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3044:159:37";
                    readonly text: "@notice Allows governance to change the pauser status of an address.\n @param who The address to change.\n @param status The new pauser status.";
                };
                readonly functionSelector: "7180c8ca";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "setPauser";
                readonly nameLocation: "3217:9:37";
                readonly parameters: {
                    readonly id: 4730;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 4727;
                        readonly mutability: "mutable";
                        readonly name: "who";
                        readonly nameLocation: "3235:3:37";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4738;
                        readonly src: "3227:11:37";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 4726;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3227:7:37";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4729;
                        readonly mutability: "mutable";
                        readonly name: "status";
                        readonly nameLocation: "3245:6:37";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4738;
                        readonly src: "3240:11:37";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 4728;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3240:4:37";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3226:26:37";
                };
                readonly returnParameters: {
                    readonly id: 4731;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "3262:0:37";
                };
                readonly scope: 5409;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 4750;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3708:72:37";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 4749;
                    readonly nodeType: "Block";
                    readonly src: "3748:32:37";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 4746;
                                readonly name: "_target";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4742;
                                readonly src: "3765:7:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_IERC20_$10358";
                                    readonly typeString: "contract IERC20";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_contract$_IERC20_$10358";
                                    readonly typeString: "contract IERC20";
                                }];
                                readonly id: 4745;
                                readonly name: "_sweep";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13204;
                                readonly src: "3758:6:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_contract$_IERC20_$10358_$returns$__$";
                                    readonly typeString: "function (contract IERC20)";
                                };
                            };
                            readonly id: 4747;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3758:15:37";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 4748;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "3758:15:37";
                    }];
                };
                readonly documentation: {
                    readonly id: 4739;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3308:395:37";
                    readonly text: "@notice Transfers the contract's balance of a target token to the sweep\n         collector address.\n @dev WARN: It is unlikely but possible that there is a selector overlap\n      with 'transfer'. Any integrating contracts should be checked\n      for that, as it may result in an unexpected call from this address.\n @param _target The target token to sweep.";
                };
                readonly functionSelector: "01681a62";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "sweep";
                readonly nameLocation: "3717:5:37";
                readonly parameters: {
                    readonly id: 4743;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 4742;
                        readonly mutability: "mutable";
                        readonly name: "_target";
                        readonly nameLocation: "3730:7:37";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4750;
                        readonly src: "3723:14:37";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_IERC20_$10358";
                            readonly typeString: "contract IERC20";
                        };
                        readonly typeName: {
                            readonly id: 4741;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 4740;
                                readonly name: "IERC20";
                                readonly nameLocations: readonly ["3723:6:37"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10358;
                                readonly src: "3723:6:37";
                            };
                            readonly referencedDeclaration: 10358;
                            readonly src: "3723:6:37";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IERC20_$10358";
                                readonly typeString: "contract IERC20";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3722:16:37";
                };
                readonly returnParameters: {
                    readonly id: 4744;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "3748:0:37";
                };
                readonly scope: 5409;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 4772;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4114:240:37";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 4771;
                    readonly nodeType: "Block";
                    readonly src: "4242:112:37";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 4763;
                                readonly name: "tokenID";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4753;
                                readonly src: "4309:7:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 4764;
                                readonly name: "from";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4755;
                                readonly src: "4318:4:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 4765;
                                readonly name: "to";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4757;
                                readonly src: "4324:2:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 4766;
                                readonly name: "amount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4759;
                                readonly src: "4328:6:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly expression: {
                                    readonly id: 4767;
                                    readonly name: "msg";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -15;
                                    readonly src: "4336:3:37";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_magic_message";
                                        readonly typeString: "msg";
                                    };
                                };
                                readonly id: 4768;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "4340:6:37";
                                readonly memberName: "sender";
                                readonly nodeType: "MemberAccess";
                                readonly src: "4336:10:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }];
                                readonly id: 4762;
                                readonly name: "_transferFrom";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 16889;
                                readonly src: "4295:13:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_uint256_$_t_address_$_t_address_$_t_uint256_$_t_address_$returns$__$";
                                    readonly typeString: "function (uint256,address,address,uint256,address)";
                                };
                            };
                            readonly id: 4769;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4295:52:37";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 4770;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "4295:52:37";
                    }];
                };
                readonly documentation: {
                    readonly id: 4751;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3810:299:37";
                    readonly text: "@notice Transfers an amount of assets from the source to the destination.\n @param tokenID The token identifier.\n @param from The address whose balance will be reduced.\n @param to The address whose balance will be increased.\n @param amount The amount of token to move.";
                };
                readonly functionSelector: "1c0f12b6";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "transferFrom";
                readonly nameLocation: "4123:12:37";
                readonly parameters: {
                    readonly id: 4760;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 4753;
                        readonly mutability: "mutable";
                        readonly name: "tokenID";
                        readonly nameLocation: "4153:7:37";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4772;
                        readonly src: "4145:15:37";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 4752;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4145:7:37";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4755;
                        readonly mutability: "mutable";
                        readonly name: "from";
                        readonly nameLocation: "4178:4:37";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4772;
                        readonly src: "4170:12:37";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 4754;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4170:7:37";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4757;
                        readonly mutability: "mutable";
                        readonly name: "to";
                        readonly nameLocation: "4200:2:37";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4772;
                        readonly src: "4192:10:37";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 4756;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4192:7:37";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4759;
                        readonly mutability: "mutable";
                        readonly name: "amount";
                        readonly nameLocation: "4220:6:37";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4772;
                        readonly src: "4212:14:37";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 4758;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4212:7:37";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4135:97:37";
                };
                readonly returnParameters: {
                    readonly id: 4761;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "4242:0:37";
                };
                readonly scope: 5409;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 4798;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4759:285:37";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 4797;
                    readonly nodeType: "Block";
                    readonly src: "4937:107:37";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 4790;
                                readonly name: "tokenID";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4775;
                                readonly src: "5003:7:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 4791;
                                readonly name: "from";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4777;
                                readonly src: "5012:4:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 4792;
                                readonly name: "to";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4779;
                                readonly src: "5018:2:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 4793;
                                readonly name: "amount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4781;
                                readonly src: "5022:6:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 4794;
                                readonly name: "caller";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4783;
                                readonly src: "5030:6:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }];
                                readonly id: 4789;
                                readonly name: "_transferFrom";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 16889;
                                readonly src: "4989:13:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_uint256_$_t_address_$_t_address_$_t_uint256_$_t_address_$returns$__$";
                                    readonly typeString: "function (uint256,address,address,uint256,address)";
                                };
                            };
                            readonly id: 4795;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4989:48:37";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 4796;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "4989:48:37";
                    }];
                };
                readonly documentation: {
                    readonly id: 4773;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "4360:394:37";
                    readonly text: "@notice Permissioned transfer for the bridge to access, only callable by\n         the ERC20 linking bridge.\n @param tokenID The token identifier.\n @param from The address whose balance will be reduced.\n @param to The address whose balance will be increased.\n @param amount The amount of token to move.\n @param caller The msg.sender from the bridge.";
                };
                readonly functionSelector: "e44808bc";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [{
                    readonly arguments: readonly [{
                        readonly id: 4786;
                        readonly name: "tokenID";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 4775;
                        readonly src: "4928:7:37";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    }];
                    readonly id: 4787;
                    readonly kind: "modifierInvocation";
                    readonly modifierName: {
                        readonly id: 4785;
                        readonly name: "onlyLinker";
                        readonly nameLocations: readonly ["4917:10:37"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 16714;
                        readonly src: "4917:10:37";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "4917:19:37";
                }];
                readonly name: "transferFromBridge";
                readonly nameLocation: "4768:18:37";
                readonly parameters: {
                    readonly id: 4784;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 4775;
                        readonly mutability: "mutable";
                        readonly name: "tokenID";
                        readonly nameLocation: "4804:7:37";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4798;
                        readonly src: "4796:15:37";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 4774;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4796:7:37";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4777;
                        readonly mutability: "mutable";
                        readonly name: "from";
                        readonly nameLocation: "4829:4:37";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4798;
                        readonly src: "4821:12:37";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 4776;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4821:7:37";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4779;
                        readonly mutability: "mutable";
                        readonly name: "to";
                        readonly nameLocation: "4851:2:37";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4798;
                        readonly src: "4843:10:37";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 4778;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4843:7:37";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4781;
                        readonly mutability: "mutable";
                        readonly name: "amount";
                        readonly nameLocation: "4871:6:37";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4798;
                        readonly src: "4863:14:37";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 4780;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4863:7:37";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4783;
                        readonly mutability: "mutable";
                        readonly name: "caller";
                        readonly nameLocation: "4895:6:37";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4798;
                        readonly src: "4887:14:37";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 4782;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4887:7:37";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4786:121:37";
                };
                readonly returnParameters: {
                    readonly id: 4788;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "4937:0:37";
                };
                readonly scope: 5409;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 4821;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5551:225:37";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 4820;
                    readonly nodeType: "Block";
                    readonly src: "5712:64:37";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 4814;
                                readonly name: "tokenID";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4801;
                                readonly src: "5735:7:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 4815;
                                readonly name: "operator";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4803;
                                readonly src: "5744:8:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 4816;
                                readonly name: "amount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4805;
                                readonly src: "5754:6:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 4817;
                                readonly name: "caller";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4807;
                                readonly src: "5762:6:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }];
                                readonly id: 4813;
                                readonly name: "_setApproval";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 16918;
                                readonly src: "5722:12:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_uint256_$_t_address_$_t_uint256_$_t_address_$returns$__$";
                                    readonly typeString: "function (uint256,address,uint256,address)";
                                };
                            };
                            readonly id: 4818;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "5722:47:37";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 4819;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "5722:47:37";
                    }];
                };
                readonly documentation: {
                    readonly id: 4799;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "5050:496:37";
                    readonly text: "@notice Allows the compatibility linking contract to forward calls to\n         set asset approvals.\n @param tokenID The asset to approve the use of.\n @param operator The address who will be able to use the tokens.\n @param amount The max tokens the approved person can use, setting to\n        uint256.max will cause the value to never decrement [saving gas\n        on transfer].\n @param caller The eth address which called the linking contract.";
                };
                readonly functionSelector: "4ed2d6ac";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [{
                    readonly arguments: readonly [{
                        readonly id: 4810;
                        readonly name: "tokenID";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 4801;
                        readonly src: "5703:7:37";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    }];
                    readonly id: 4811;
                    readonly kind: "modifierInvocation";
                    readonly modifierName: {
                        readonly id: 4809;
                        readonly name: "onlyLinker";
                        readonly nameLocations: readonly ["5692:10:37"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 16714;
                        readonly src: "5692:10:37";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "5692:19:37";
                }];
                readonly name: "setApprovalBridge";
                readonly nameLocation: "5560:17:37";
                readonly parameters: {
                    readonly id: 4808;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 4801;
                        readonly mutability: "mutable";
                        readonly name: "tokenID";
                        readonly nameLocation: "5595:7:37";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4821;
                        readonly src: "5587:15:37";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 4800;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5587:7:37";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4803;
                        readonly mutability: "mutable";
                        readonly name: "operator";
                        readonly nameLocation: "5620:8:37";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4821;
                        readonly src: "5612:16:37";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 4802;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5612:7:37";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4805;
                        readonly mutability: "mutable";
                        readonly name: "amount";
                        readonly nameLocation: "5646:6:37";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4821;
                        readonly src: "5638:14:37";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 4804;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5638:7:37";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4807;
                        readonly mutability: "mutable";
                        readonly name: "caller";
                        readonly nameLocation: "5670:6:37";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4821;
                        readonly src: "5662:14:37";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 4806;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5662:7:37";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5577:105:37";
                };
                readonly returnParameters: {
                    readonly id: 4812;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "5712:0:37";
                };
                readonly scope: 5409;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 4846;
                readonly nodeType: "FunctionDefinition";
                readonly src: "6008:277:37";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 4845;
                    readonly nodeType: "Block";
                    readonly src: "6077:208:37";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 4836;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly baseExpression: {
                                    readonly baseExpression: {
                                        readonly id: 4829;
                                        readonly name: "_isApprovedForAll";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 18260;
                                        readonly src: "6124:17:37";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$";
                                            readonly typeString: "mapping(address => mapping(address => bool))";
                                        };
                                    };
                                    readonly id: 4833;
                                    readonly indexExpression: {
                                        readonly expression: {
                                            readonly id: 4830;
                                            readonly name: "msg";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -15;
                                            readonly src: "6142:3:37";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_magic_message";
                                                readonly typeString: "msg";
                                            };
                                        };
                                        readonly id: 4831;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "6146:6:37";
                                        readonly memberName: "sender";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "6142:10:37";
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
                                    readonly src: "6124:29:37";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_mapping$_t_address_$_t_bool_$";
                                        readonly typeString: "mapping(address => bool)";
                                    };
                                };
                                readonly id: 4834;
                                readonly indexExpression: {
                                    readonly id: 4832;
                                    readonly name: "operator";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 4824;
                                    readonly src: "6154:8:37";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly nodeType: "IndexAccess";
                                readonly src: "6124:39:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 4835;
                                readonly name: "approved";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4826;
                                readonly src: "6166:8:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly src: "6124:50:37";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 4837;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6124:50:37";
                    }, {
                        readonly eventCall: {
                            readonly arguments: readonly [{
                                readonly expression: {
                                    readonly id: 4839;
                                    readonly name: "msg";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -15;
                                    readonly src: "6247:3:37";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_magic_message";
                                        readonly typeString: "msg";
                                    };
                                };
                                readonly id: 4840;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6251:6:37";
                                readonly memberName: "sender";
                                readonly nodeType: "MemberAccess";
                                readonly src: "6247:10:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 4841;
                                readonly name: "operator";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4824;
                                readonly src: "6259:8:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 4842;
                                readonly name: "approved";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4826;
                                readonly src: "6269:8:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                }];
                                readonly id: 4838;
                                readonly name: "ApprovalForAll";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 12164;
                                readonly src: "6232:14:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_event_nonpayable$_t_address_$_t_address_$_t_bool_$returns$__$";
                                    readonly typeString: "function (address,address,bool)";
                                };
                            };
                            readonly id: 4843;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "6232:46:37";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 4844;
                        readonly nodeType: "EmitStatement";
                        readonly src: "6227:51:37";
                    }];
                };
                readonly documentation: {
                    readonly id: 4822;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "5782:221:37";
                    readonly text: "@notice Allows a user to approve an operator to use all of their assets.\n @param operator The eth address which can access the caller's assets.\n @param approved True to approve, false to remove approval.";
                };
                readonly functionSelector: "a22cb465";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "setApprovalForAll";
                readonly nameLocation: "6017:17:37";
                readonly parameters: {
                    readonly id: 4827;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 4824;
                        readonly mutability: "mutable";
                        readonly name: "operator";
                        readonly nameLocation: "6043:8:37";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4846;
                        readonly src: "6035:16:37";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 4823;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6035:7:37";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4826;
                        readonly mutability: "mutable";
                        readonly name: "approved";
                        readonly nameLocation: "6058:8:37";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4846;
                        readonly src: "6053:13:37";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 4825;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6053:4:37";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6034:33:37";
                };
                readonly returnParameters: {
                    readonly id: 4828;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "6077:0:37";
                };
                readonly scope: 5409;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 4865;
                readonly nodeType: "FunctionDefinition";
                readonly src: "6715:179:37";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 4864;
                    readonly nodeType: "Block";
                    readonly src: "6826:68:37";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 4857;
                                readonly name: "tokenID";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4849;
                                readonly src: "6849:7:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 4858;
                                readonly name: "operator";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4851;
                                readonly src: "6858:8:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 4859;
                                readonly name: "amount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4853;
                                readonly src: "6868:6:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly expression: {
                                    readonly id: 4860;
                                    readonly name: "msg";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -15;
                                    readonly src: "6876:3:37";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_magic_message";
                                        readonly typeString: "msg";
                                    };
                                };
                                readonly id: 4861;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6880:6:37";
                                readonly memberName: "sender";
                                readonly nodeType: "MemberAccess";
                                readonly src: "6876:10:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }];
                                readonly id: 4856;
                                readonly name: "_setApproval";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 16918;
                                readonly src: "6836:12:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_uint256_$_t_address_$_t_uint256_$_t_address_$returns$__$";
                                    readonly typeString: "function (uint256,address,uint256,address)";
                                };
                            };
                            readonly id: 4862;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "6836:51:37";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 4863;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6836:51:37";
                    }];
                };
                readonly documentation: {
                    readonly id: 4847;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "6291:419:37";
                    readonly text: "@notice Allows a user to set an approval for an individual asset with\n         specific amount.\n @param tokenID The asset to approve the use of.\n @param operator The address who will be able to use the tokens.\n @param amount The max tokens the approved person can use, setting to\n        uint256.max will cause the value to never decrement (saving gas\n        on transfer).";
                };
                readonly functionSelector: "9cd241af";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "setApproval";
                readonly nameLocation: "6724:11:37";
                readonly parameters: {
                    readonly id: 4854;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 4849;
                        readonly mutability: "mutable";
                        readonly name: "tokenID";
                        readonly nameLocation: "6753:7:37";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4865;
                        readonly src: "6745:15:37";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 4848;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6745:7:37";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4851;
                        readonly mutability: "mutable";
                        readonly name: "operator";
                        readonly nameLocation: "6778:8:37";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4865;
                        readonly src: "6770:16:37";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 4850;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6770:7:37";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4853;
                        readonly mutability: "mutable";
                        readonly name: "amount";
                        readonly nameLocation: "6804:6:37";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4865;
                        readonly src: "6796:14:37";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 4852;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6796:7:37";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6735:81:37";
                };
                readonly returnParameters: {
                    readonly id: 4855;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "6826:0:37";
                };
                readonly scope: 5409;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 4887;
                readonly nodeType: "FunctionDefinition";
                readonly src: "7181:209:37";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 4886;
                    readonly nodeType: "Block";
                    readonly src: "7332:58:37";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 4880;
                                readonly name: "from";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4868;
                                readonly src: "7361:4:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 4881;
                                readonly name: "to";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4870;
                                readonly src: "7367:2:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 4882;
                                readonly name: "ids";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4873;
                                readonly src: "7371:3:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_uint256_$dyn_calldata_ptr";
                                    readonly typeString: "uint256[] calldata";
                                };
                            }, {
                                readonly id: 4883;
                                readonly name: "values";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4876;
                                readonly src: "7376:6:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_uint256_$dyn_calldata_ptr";
                                    readonly typeString: "uint256[] calldata";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_array$_t_uint256_$dyn_calldata_ptr";
                                    readonly typeString: "uint256[] calldata";
                                }, {
                                    readonly typeIdentifier: "t_array$_t_uint256_$dyn_calldata_ptr";
                                    readonly typeString: "uint256[] calldata";
                                }];
                                readonly id: 4879;
                                readonly name: "_batchTransferFrom";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 16788;
                                readonly src: "7342:18:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_address_$_t_address_$_t_array$_t_uint256_$dyn_calldata_ptr_$_t_array$_t_uint256_$dyn_calldata_ptr_$returns$__$";
                                    readonly typeString: "function (address,address,uint256[] calldata,uint256[] calldata)";
                                };
                            };
                            readonly id: 4884;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "7342:41:37";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 4885;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "7342:41:37";
                    }];
                };
                readonly documentation: {
                    readonly id: 4866;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "6900:276:37";
                    readonly text: "@notice Transfers several assets from one account to another.\n @param from The source account.\n @param to The destination account.\n @param ids The array of token ids of the asset to transfer.\n @param values The amount of each token to transfer.";
                };
                readonly functionSelector: "17fad7fc";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "batchTransferFrom";
                readonly nameLocation: "7190:17:37";
                readonly parameters: {
                    readonly id: 4877;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 4868;
                        readonly mutability: "mutable";
                        readonly name: "from";
                        readonly nameLocation: "7225:4:37";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4887;
                        readonly src: "7217:12:37";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 4867;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7217:7:37";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4870;
                        readonly mutability: "mutable";
                        readonly name: "to";
                        readonly nameLocation: "7247:2:37";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4887;
                        readonly src: "7239:10:37";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 4869;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7239:7:37";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4873;
                        readonly mutability: "mutable";
                        readonly name: "ids";
                        readonly nameLocation: "7278:3:37";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4887;
                        readonly src: "7259:22:37";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_uint256_$dyn_calldata_ptr";
                            readonly typeString: "uint256[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 4871;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "7259:7:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly id: 4872;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "7259:9:37";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_uint256_$dyn_storage_ptr";
                                readonly typeString: "uint256[]";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4876;
                        readonly mutability: "mutable";
                        readonly name: "values";
                        readonly nameLocation: "7310:6:37";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4887;
                        readonly src: "7291:25:37";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_uint256_$dyn_calldata_ptr";
                            readonly typeString: "uint256[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 4874;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "7291:7:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly id: 4875;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "7291:9:37";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_uint256_$dyn_storage_ptr";
                                readonly typeString: "uint256[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7207:115:37";
                };
                readonly returnParameters: {
                    readonly id: 4878;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "7332:0:37";
                };
                readonly scope: 5409;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 4922;
                readonly nodeType: "FunctionDefinition";
                readonly src: "8726:482:37";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 4921;
                    readonly nodeType: "Block";
                    readonly src: "8981:227:37";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 4910;
                                readonly name: "domainSeparator";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4890;
                                readonly src: "9018:15:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            }, {
                                readonly id: 4911;
                                readonly name: "permitTypeHash";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4892;
                                readonly src: "9047:14:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            }, {
                                readonly id: 4912;
                                readonly name: "owner";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4894;
                                readonly src: "9075:5:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 4913;
                                readonly name: "spender";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4896;
                                readonly src: "9094:7:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 4914;
                                readonly name: "_approved";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4898;
                                readonly src: "9115:9:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }, {
                                readonly id: 4915;
                                readonly name: "deadline";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4900;
                                readonly src: "9138:8:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 4916;
                                readonly name: "v";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4902;
                                readonly src: "9160:1:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint8";
                                    readonly typeString: "uint8";
                                };
                            }, {
                                readonly id: 4917;
                                readonly name: "r";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4904;
                                readonly src: "9175:1:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            }, {
                                readonly id: 4918;
                                readonly name: "s";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4906;
                                readonly src: "9190:1:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                }, {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                }, {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint8";
                                    readonly typeString: "uint8";
                                }, {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                }, {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                }];
                                readonly id: 4909;
                                readonly name: "_permitForAll";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 17116;
                                readonly src: "8991:13:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_bytes32_$_t_bytes32_$_t_address_$_t_address_$_t_bool_$_t_uint256_$_t_uint8_$_t_bytes32_$_t_bytes32_$returns$__$";
                                    readonly typeString: "function (bytes32,bytes32,address,address,bool,uint256,uint8,bytes32,bytes32)";
                                };
                            };
                            readonly id: 4919;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "8991:210:37";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 4920;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "8991:210:37";
                    }];
                };
                readonly documentation: {
                    readonly id: 4888;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "7396:1325:37";
                    readonly text: "@notice Allows a caller who is not the owner of an account to execute\n         the functionality of 'approve' for all assets with the owner's\n         signature.\n @param domainSeparator The EIP712 domain separator of the contract.\n @param permitTypeHash The EIP712 domain separator of the contract.\n @param owner The owner of the account which is having the new approval set.\n @param spender The address which will be allowed to spend owner's tokens.\n @param _approved A boolean of the approval status to set to.\n @param deadline The timestamp which the signature must be submitted by\n        to be valid.\n @param v Extra ECDSA data which allows public key recovery from\n        signature assumed to be 27 or 28.\n @param r The r component of the ECDSA signature.\n @param s The s component of the ECDSA signature.\n @dev The signature for this function follows EIP 712 standard and should\n      be generated with the eth_signTypedData JSON RPC call instead of\n      the eth_sign JSON RPC call. If using out of date parity signing\n      libraries the v component may need to be adjusted. Also it is very\n      rare but possible for v to be other values, those values are not\n      supported.";
                };
                readonly functionSelector: "14e5f07b";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "permitForAll";
                readonly nameLocation: "8735:12:37";
                readonly parameters: {
                    readonly id: 4907;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 4890;
                        readonly mutability: "mutable";
                        readonly name: "domainSeparator";
                        readonly nameLocation: "8765:15:37";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4922;
                        readonly src: "8757:23:37";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 4889;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8757:7:37";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4892;
                        readonly mutability: "mutable";
                        readonly name: "permitTypeHash";
                        readonly nameLocation: "8798:14:37";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4922;
                        readonly src: "8790:22:37";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 4891;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8790:7:37";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4894;
                        readonly mutability: "mutable";
                        readonly name: "owner";
                        readonly nameLocation: "8830:5:37";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4922;
                        readonly src: "8822:13:37";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 4893;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8822:7:37";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4896;
                        readonly mutability: "mutable";
                        readonly name: "spender";
                        readonly nameLocation: "8853:7:37";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4922;
                        readonly src: "8845:15:37";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 4895;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8845:7:37";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4898;
                        readonly mutability: "mutable";
                        readonly name: "_approved";
                        readonly nameLocation: "8875:9:37";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4922;
                        readonly src: "8870:14:37";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 4897;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8870:4:37";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4900;
                        readonly mutability: "mutable";
                        readonly name: "deadline";
                        readonly nameLocation: "8902:8:37";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4922;
                        readonly src: "8894:16:37";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 4899;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8894:7:37";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4902;
                        readonly mutability: "mutable";
                        readonly name: "v";
                        readonly nameLocation: "8926:1:37";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4922;
                        readonly src: "8920:7:37";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint8";
                            readonly typeString: "uint8";
                        };
                        readonly typeName: {
                            readonly id: 4901;
                            readonly name: "uint8";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8920:5:37";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint8";
                                readonly typeString: "uint8";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4904;
                        readonly mutability: "mutable";
                        readonly name: "r";
                        readonly nameLocation: "8945:1:37";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4922;
                        readonly src: "8937:9:37";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 4903;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8937:7:37";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4906;
                        readonly mutability: "mutable";
                        readonly name: "s";
                        readonly nameLocation: "8964:1:37";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4922;
                        readonly src: "8956:9:37";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 4905;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8956:7:37";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "8747:224:37";
                };
                readonly returnParameters: {
                    readonly id: 4908;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "8981:0:37";
                };
                readonly scope: 5409;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 4940;
                readonly nodeType: "FunctionDefinition";
                readonly src: "9370:121:37";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 4939;
                    readonly nodeType: "Block";
                    readonly src: "9435:56:37";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly baseExpression: {
                                        readonly id: 4933;
                                        readonly name: "_pausers";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 18235;
                                        readonly src: "9464:8:37";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_mapping$_t_address_$_t_bool_$";
                                            readonly typeString: "mapping(address => bool)";
                                        };
                                    };
                                    readonly id: 4935;
                                    readonly indexExpression: {
                                        readonly id: 4934;
                                        readonly name: "_account";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 4925;
                                        readonly src: "9473:8:37";
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
                                    readonly src: "9464:18:37";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    }];
                                    readonly expression: {
                                        readonly id: 4931;
                                        readonly name: "abi";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -1;
                                        readonly src: "9453:3:37";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_magic_abi";
                                            readonly typeString: "abi";
                                        };
                                    };
                                    readonly id: 4932;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "9457:6:37";
                                    readonly memberName: "encode";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "9453:10:37";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$";
                                        readonly typeString: "function () pure returns (bytes memory)";
                                    };
                                };
                                readonly id: 4936;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "9453:30:37";
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
                                readonly id: 4930;
                                readonly name: "_revert";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 5408;
                                readonly src: "9445:7:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bytes memory) pure";
                                };
                            };
                            readonly id: 4937;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9445:39:37";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 4938;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "9445:39:37";
                    }];
                };
                readonly baseFunctions: readonly [11902];
                readonly documentation: {
                    readonly id: 4923;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "9235:130:37";
                    readonly text: "@notice Gets the pauser status of an address.\n @param _account The account to check.\n @return The pauser status.";
                };
                readonly functionSelector: "46fbf68e";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "isPauser";
                readonly nameLocation: "9379:8:37";
                readonly parameters: {
                    readonly id: 4926;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 4925;
                        readonly mutability: "mutable";
                        readonly name: "_account";
                        readonly nameLocation: "9396:8:37";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4940;
                        readonly src: "9388:16:37";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 4924;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9388:7:37";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "9387:18:37";
                };
                readonly returnParameters: {
                    readonly id: 4929;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 4928;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4940;
                        readonly src: "9429:4:37";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 4927;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9429:4:37";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "9428:6:37";
                };
                readonly scope: 5409;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 4954;
                readonly nodeType: "FunctionDefinition";
                readonly src: "9566:101:37";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 4953;
                    readonly nodeType: "Block";
                    readonly src: "9619:48:37";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 4949;
                                    readonly name: "_baseToken";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18174;
                                    readonly src: "9648:10:37";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IERC20_$10358";
                                        readonly typeString: "contract IERC20";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_contract$_IERC20_$10358";
                                        readonly typeString: "contract IERC20";
                                    }];
                                    readonly expression: {
                                        readonly id: 4947;
                                        readonly name: "abi";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -1;
                                        readonly src: "9637:3:37";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_magic_abi";
                                            readonly typeString: "abi";
                                        };
                                    };
                                    readonly id: 4948;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "9641:6:37";
                                    readonly memberName: "encode";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "9637:10:37";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$";
                                        readonly typeString: "function () pure returns (bytes memory)";
                                    };
                                };
                                readonly id: 4950;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "9637:22:37";
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
                                readonly id: 4946;
                                readonly name: "_revert";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 5408;
                                readonly src: "9629:7:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bytes memory) pure";
                                };
                            };
                            readonly id: 4951;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9629:31:37";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 4952;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "9629:31:37";
                    }];
                };
                readonly baseFunctions: readonly [11843];
                readonly documentation: {
                    readonly id: 4941;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "9497:64:37";
                    readonly text: "@notice Gets the base token.\n @return The base token.";
                };
                readonly functionSelector: "c55dae63";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "baseToken";
                readonly nameLocation: "9575:9:37";
                readonly parameters: {
                    readonly id: 4942;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "9584:2:37";
                };
                readonly returnParameters: {
                    readonly id: 4945;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 4944;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4954;
                        readonly src: "9610:7:37";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 4943;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9610:7:37";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "9609:9:37";
                };
                readonly scope: 5409;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 4973;
                readonly nodeType: "FunctionDefinition";
                readonly src: "9802:183:37";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 4972;
                    readonly nodeType: "Block";
                    readonly src: "9918:67:37";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly baseExpression: {
                                        readonly id: 4966;
                                        readonly name: "_checkpoints";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 18218;
                                        readonly src: "9947:12:37";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_mapping$_t_uint256_$_t_struct$_Checkpoint_$10766_storage_$";
                                            readonly typeString: "mapping(uint256 => struct IHyperdrive.Checkpoint storage ref)";
                                        };
                                    };
                                    readonly id: 4968;
                                    readonly indexExpression: {
                                        readonly id: 4967;
                                        readonly name: "_checkpointTime";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 4957;
                                        readonly src: "9960:15:37";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "IndexAccess";
                                    readonly src: "9947:29:37";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Checkpoint_$10766_storage";
                                        readonly typeString: "struct IHyperdrive.Checkpoint storage ref";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_struct$_Checkpoint_$10766_storage";
                                        readonly typeString: "struct IHyperdrive.Checkpoint storage ref";
                                    }];
                                    readonly expression: {
                                        readonly id: 4964;
                                        readonly name: "abi";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -1;
                                        readonly src: "9936:3:37";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_magic_abi";
                                            readonly typeString: "abi";
                                        };
                                    };
                                    readonly id: 4965;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "9940:6:37";
                                    readonly memberName: "encode";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "9936:10:37";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$";
                                        readonly typeString: "function () pure returns (bytes memory)";
                                    };
                                };
                                readonly id: 4969;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "9936:41:37";
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
                                readonly id: 4963;
                                readonly name: "_revert";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 5408;
                                readonly src: "9928:7:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bytes memory) pure";
                                };
                            };
                            readonly id: 4970;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9928:50:37";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 4971;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "9928:50:37";
                    }];
                };
                readonly baseFunctions: readonly [11852];
                readonly documentation: {
                    readonly id: 4955;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "9673:124:37";
                    readonly text: "@notice Gets a specified checkpoint.\n @param _checkpointTime The checkpoint time.\n @return The checkpoint.";
                };
                readonly functionSelector: "20fc4881";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getCheckpoint";
                readonly nameLocation: "9811:13:37";
                readonly parameters: {
                    readonly id: 4958;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 4957;
                        readonly mutability: "mutable";
                        readonly name: "_checkpointTime";
                        readonly nameLocation: "9842:15:37";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4973;
                        readonly src: "9834:23:37";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 4956;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9834:7:37";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "9824:39:37";
                };
                readonly returnParameters: {
                    readonly id: 4962;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 4961;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4973;
                        readonly src: "9887:29:37";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_Checkpoint_$10766_memory_ptr";
                            readonly typeString: "struct IHyperdrive.Checkpoint";
                        };
                        readonly typeName: {
                            readonly id: 4960;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 4959;
                                readonly name: "IHyperdrive.Checkpoint";
                                readonly nameLocations: readonly ["9887:11:37", "9899:10:37"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10766;
                                readonly src: "9887:22:37";
                            };
                            readonly referencedDeclaration: 10766;
                            readonly src: "9887:22:37";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Checkpoint_$10766_storage_ptr";
                                readonly typeString: "struct IHyperdrive.Checkpoint";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "9886:31:37";
                };
                readonly scope: 5409;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 4993;
                readonly nodeType: "FunctionDefinition";
                readonly src: "10150:213:37";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 4992;
                    readonly nodeType: "Block";
                    readonly src: "10251:112:37";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                        readonly id: 4987;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly id: 4985;
                                            readonly name: "_checkpointTime";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 4976;
                                            readonly src: "10309:15:37";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "+";
                                        readonly rightExpression: {
                                            readonly id: 4986;
                                            readonly name: "_positionDuration";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 18180;
                                            readonly src: "10327:17:37";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly src: "10309:35:37";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        }];
                                        readonly id: 4984;
                                        readonly name: "_nonNettedLongs";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 13654;
                                        readonly src: "10293:15:37";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_view$_t_uint256_$returns$_t_int256_$";
                                            readonly typeString: "function (uint256) view returns (int256)";
                                        };
                                    };
                                    readonly id: 4988;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "10293:52:37";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    }];
                                    readonly expression: {
                                        readonly id: 4982;
                                        readonly name: "abi";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -1;
                                        readonly src: "10282:3:37";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_magic_abi";
                                            readonly typeString: "abi";
                                        };
                                    };
                                    readonly id: 4983;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "10286:6:37";
                                    readonly memberName: "encode";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "10282:10:37";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$";
                                        readonly typeString: "function () pure returns (bytes memory)";
                                    };
                                };
                                readonly id: 4989;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "10282:64:37";
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
                                readonly id: 4981;
                                readonly name: "_revert";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 5408;
                                readonly src: "10261:7:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bytes memory) pure";
                                };
                            };
                            readonly id: 4990;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "10261:95:37";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 4991;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "10261:95:37";
                    }];
                };
                readonly baseFunctions: readonly [11860];
                readonly documentation: {
                    readonly id: 4974;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "9991:154:37";
                    readonly text: "@notice Gets the checkpoint exposure at a specified time.\n @param _checkpointTime The checkpoint time.\n @return The checkpoint exposure.";
                };
                readonly functionSelector: "cf210e65";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getCheckpointExposure";
                readonly nameLocation: "10159:21:37";
                readonly parameters: {
                    readonly id: 4977;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 4976;
                        readonly mutability: "mutable";
                        readonly name: "_checkpointTime";
                        readonly nameLocation: "10198:15:37";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4993;
                        readonly src: "10190:23:37";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 4975;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "10190:7:37";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "10180:39:37";
                };
                readonly returnParameters: {
                    readonly id: 4980;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 4979;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4993;
                        readonly src: "10243:6:37";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 4978;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "10243:6:37";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "10242:8:37";
                };
                readonly scope: 5409;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 5029;
                readonly nodeType: "FunctionDefinition";
                readonly src: "10568:1128:37";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 5028;
                    readonly nodeType: "Block";
                    readonly src: "10675:1021:37";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly id: 5005;
                                        readonly name: "_baseToken";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 18174;
                                        readonly src: "10790:10:37";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_IERC20_$10358";
                                            readonly typeString: "contract IERC20";
                                        };
                                    }, {
                                        readonly id: 5006;
                                        readonly name: "_linkerFactory";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 18238;
                                        readonly src: "10837:14:37";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    }, {
                                        readonly id: 5007;
                                        readonly name: "_linkerCodeHash";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 18241;
                                        readonly src: "10889:15:37";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    }, {
                                        readonly id: 5008;
                                        readonly name: "_initialVaultSharePrice";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 18198;
                                        readonly src: "10950:23:37";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }, {
                                        readonly id: 5009;
                                        readonly name: "_minimumShareReserves";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 18201;
                                        readonly src: "11017:21:37";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }, {
                                        readonly id: 5010;
                                        readonly name: "_minimumTransactionAmount";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 18204;
                                        readonly src: "11086:25:37";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }, {
                                        readonly id: 5011;
                                        readonly name: "_positionDuration";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 18180;
                                        readonly src: "11151:17:37";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }, {
                                        readonly id: 5012;
                                        readonly name: "_checkpointDuration";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 18177;
                                        readonly src: "11210:19:37";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }, {
                                        readonly id: 5013;
                                        readonly name: "_timeStretch";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 18183;
                                        readonly src: "11264:12:37";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }, {
                                        readonly id: 5014;
                                        readonly name: "_governance";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 18227;
                                        readonly src: "11310:11:37";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    }, {
                                        readonly id: 5015;
                                        readonly name: "_feeCollector";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 18221;
                                        readonly src: "11357:13:37";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    }, {
                                        readonly id: 5016;
                                        readonly name: "_sweepCollector";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 18224;
                                        readonly src: "11408:15:37";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly id: 5019;
                                            readonly name: "_curveFee";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 18186;
                                            readonly src: "11493:9:37";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        }, {
                                            readonly id: 5020;
                                            readonly name: "_flatFee";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 18189;
                                            readonly src: "11528:8:37";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        }, {
                                            readonly id: 5021;
                                            readonly name: "_governanceLPFee";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 18192;
                                            readonly src: "11562:16:37";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        }, {
                                            readonly id: 5022;
                                            readonly name: "_governanceZombieFee";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 18195;
                                            readonly src: "11604:20:37";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            }, {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            }, {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            }, {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            }];
                                            readonly expression: {
                                                readonly id: 5017;
                                                readonly name: "IHyperdrive";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 11076;
                                                readonly src: "11451:11:37";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$11076_$";
                                                    readonly typeString: "type(contract IHyperdrive)";
                                                };
                                            };
                                            readonly id: 5018;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "11463:4:37";
                                            readonly memberName: "Fees";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 10786;
                                            readonly src: "11451:16:37";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_struct$_Fees_$10786_storage_ptr_$";
                                                readonly typeString: "type(struct IHyperdrive.Fees storage pointer)";
                                            };
                                        };
                                        readonly id: 5023;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "structConstructorCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "11451:195:37";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_Fees_$10786_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.Fees memory";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_contract$_IERC20_$10358";
                                            readonly typeString: "contract IERC20";
                                        }, {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        }, {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        }, {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        }, {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        }, {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        }, {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        }, {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        }, {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        }, {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        }, {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        }, {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        }, {
                                            readonly typeIdentifier: "t_struct$_Fees_$10786_memory_ptr";
                                            readonly typeString: "struct IHyperdrive.Fees memory";
                                        }];
                                        readonly expression: {
                                            readonly id: 5003;
                                            readonly name: "IHyperdrive";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 11076;
                                            readonly src: "10734:11:37";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$11076_$";
                                                readonly typeString: "type(contract IHyperdrive)";
                                            };
                                        };
                                        readonly id: 5004;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "10746:10:37";
                                        readonly memberName: "PoolConfig";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10867;
                                        readonly src: "10734:22:37";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_struct$_PoolConfig_$10867_storage_ptr_$";
                                            readonly typeString: "type(struct IHyperdrive.PoolConfig storage pointer)";
                                        };
                                    };
                                    readonly id: 5024;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "structConstructorCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly ["10779:9:37", "10822:13:37", "10873:14:37", "10926:22:37", "10995:20:37", "11060:24:37", "11133:16:37", "11190:18:37", "11251:11:37", "11298:10:37", "11343:12:37", "11392:14:37", "11445:4:37"];
                                    readonly names: readonly ["baseToken", "linkerFactory", "linkerCodeHash", "initialVaultSharePrice", "minimumShareReserves", "minimumTransactionAmount", "positionDuration", "checkpointDuration", "timeStretch", "governance", "feeCollector", "sweepCollector", "fees"];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "10734:931:37";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$10867_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_struct$_PoolConfig_$10867_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                    }];
                                    readonly expression: {
                                        readonly id: 5001;
                                        readonly name: "abi";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -1;
                                        readonly src: "10706:3:37";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_magic_abi";
                                            readonly typeString: "abi";
                                        };
                                    };
                                    readonly id: 5002;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "10710:6:37";
                                    readonly memberName: "encode";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "10706:10:37";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$";
                                        readonly typeString: "function () pure returns (bytes memory)";
                                    };
                                };
                                readonly id: 5025;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "10706:973:37";
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
                                readonly id: 5000;
                                readonly name: "_revert";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 5408;
                                readonly src: "10685:7:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bytes memory) pure";
                                };
                            };
                            readonly id: 5026;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "10685:1004:37";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 5027;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "10685:1004:37";
                    }];
                };
                readonly baseFunctions: readonly [11874];
                readonly documentation: {
                    readonly id: 4994;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "10369:194:37";
                    readonly text: "@notice Gets the pool's configuration parameters.\n @dev These parameters are immutable, so this should only need to be\n      called once.\n @return The PoolConfig struct.";
                };
                readonly functionSelector: "b0d96580";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getPoolConfig";
                readonly nameLocation: "10577:13:37";
                readonly parameters: {
                    readonly id: 4995;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "10590:2:37";
                };
                readonly returnParameters: {
                    readonly id: 4999;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 4998;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 5029;
                        readonly src: "10640:29:37";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10867_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig";
                        };
                        readonly typeName: {
                            readonly id: 4997;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 4996;
                                readonly name: "IHyperdrive.PoolConfig";
                                readonly nameLocations: readonly ["10640:11:37", "10652:10:37"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10867;
                                readonly src: "10640:22:37";
                            };
                            readonly referencedDeclaration: 10867;
                            readonly src: "10640:22:37";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolConfig_$10867_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "10639:31:37";
                };
                readonly scope: 5409;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 5125;
                readonly nodeType: "FunctionDefinition";
                readonly src: "11865:1619:37";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 5124;
                    readonly nodeType: "Block";
                    readonly src: "11940:1544:37";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [5037];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 5037;
                            readonly mutability: "mutable";
                            readonly name: "vaultSharePrice";
                            readonly nameLocation: "11958:15:37";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 5124;
                            readonly src: "11950:23:37";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 5036;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "11950:7:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 5040;
                        readonly initialValue: {
                            readonly arguments: readonly [];
                            readonly expression: {
                                readonly argumentTypes: readonly [];
                                readonly id: 5038;
                                readonly name: "_pricePerVaultShare";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13400;
                                readonly src: "11976:19:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$__$returns$_t_uint256_$";
                                    readonly typeString: "function () view returns (uint256)";
                                };
                            };
                            readonly id: 5039;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "11976:21:37";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "11950:47:37";
                    }, {
                        readonly assignments: readonly [5042];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 5042;
                            readonly mutability: "mutable";
                            readonly name: "lpTotalSupply";
                            readonly nameLocation: "12015:13:37";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 5124;
                            readonly src: "12007:21:37";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 5041;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "12007:7:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 5055;
                        readonly initialValue: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 5054;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 5051;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly baseExpression: {
                                        readonly id: 5043;
                                        readonly name: "_totalSupply";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 18253;
                                        readonly src: "12031:12:37";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_mapping$_t_uint256_$_t_uint256_$";
                                            readonly typeString: "mapping(uint256 => uint256)";
                                        };
                                    };
                                    readonly id: 5046;
                                    readonly indexExpression: {
                                        readonly expression: {
                                            readonly id: 5044;
                                            readonly name: "AssetId";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 18642;
                                            readonly src: "12044:7:37";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_AssetId_$18642_$";
                                                readonly typeString: "type(library AssetId)";
                                            };
                                        };
                                        readonly id: 5045;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "12052:12:37";
                                        readonly memberName: "_LP_ASSET_ID";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 18375;
                                        readonly src: "12044:20:37";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "IndexAccess";
                                    readonly src: "12031:34:37";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "+";
                                readonly rightExpression: {
                                    readonly baseExpression: {
                                        readonly id: 5047;
                                        readonly name: "_totalSupply";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 18253;
                                        readonly src: "12080:12:37";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_mapping$_t_uint256_$_t_uint256_$";
                                            readonly typeString: "mapping(uint256 => uint256)";
                                        };
                                    };
                                    readonly id: 5050;
                                    readonly indexExpression: {
                                        readonly expression: {
                                            readonly id: 5048;
                                            readonly name: "AssetId";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 18642;
                                            readonly src: "12093:7:37";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_AssetId_$18642_$";
                                                readonly typeString: "type(library AssetId)";
                                            };
                                        };
                                        readonly id: 5049;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "12101:26:37";
                                        readonly memberName: "_WITHDRAWAL_SHARE_ASSET_ID";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 18384;
                                        readonly src: "12093:34:37";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "IndexAccess";
                                    readonly src: "12080:48:37";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "12031:97:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "-";
                            readonly rightExpression: {
                                readonly expression: {
                                    readonly id: 5052;
                                    readonly name: "_withdrawPool";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18212;
                                    readonly src: "12143:13:37";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_WithdrawPool_$10773_storage";
                                        readonly typeString: "struct IHyperdrive.WithdrawPool storage ref";
                                    };
                                };
                                readonly id: 5053;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "12157:15:37";
                                readonly memberName: "readyToWithdraw";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10769;
                                readonly src: "12143:29:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                };
                            };
                            readonly src: "12031:141:37";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "12007:165:37";
                    }, {
                        readonly assignments: readonly [5057];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 5057;
                            readonly mutability: "mutable";
                            readonly name: "presentValue";
                            readonly nameLocation: "12190:12:37";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 5124;
                            readonly src: "12182:20:37";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 5056;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "12182:7:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 5072;
                        readonly initialValue: {
                            readonly condition: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 5060;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 5058;
                                    readonly name: "vaultSharePrice";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 5037;
                                    readonly src: "12205:15:37";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: ">";
                                readonly rightExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 5059;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "12223:1:37";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly src: "12205:19:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly falseExpression: {
                                readonly hexValue: "30";
                                readonly id: 5070;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "12382:1:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly id: 5071;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "Conditional";
                            readonly src: "12205:178:37";
                            readonly trueExpression: {
                                readonly arguments: readonly [{
                                    readonly id: 5068;
                                    readonly name: "vaultSharePrice";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 5037;
                                    readonly src: "12351:15:37";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }];
                                    readonly expression: {
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [{
                                                readonly id: 5064;
                                                readonly name: "vaultSharePrice";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 5037;
                                                readonly src: "12308:15:37";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                }];
                                                readonly id: 5063;
                                                readonly name: "_getPresentValueParams";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 13783;
                                                readonly src: "12285:22:37";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_internal_view$_t_uint256_$returns$_t_struct$_PresentValueParams_$20442_memory_ptr_$";
                                                    readonly typeString: "function (uint256) view returns (struct LPMath.PresentValueParams memory)";
                                                };
                                            };
                                            readonly id: 5065;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "functionCall";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "12285:39:37";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_PresentValueParams_$20442_memory_ptr";
                                                readonly typeString: "struct LPMath.PresentValueParams memory";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_struct$_PresentValueParams_$20442_memory_ptr";
                                                readonly typeString: "struct LPMath.PresentValueParams memory";
                                            }];
                                            readonly expression: {
                                                readonly id: 5061;
                                                readonly name: "LPMath";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 22134;
                                                readonly src: "12239:6:37";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_contract$_LPMath_$22134_$";
                                                    readonly typeString: "type(library LPMath)";
                                                };
                                            };
                                            readonly id: 5062;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "12263:21:37";
                                            readonly memberName: "calculatePresentValue";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 20471;
                                            readonly src: "12239:45:37";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_internal_pure$_t_struct$_PresentValueParams_$20442_memory_ptr_$returns$_t_uint256_$";
                                                readonly typeString: "function (struct LPMath.PresentValueParams memory) pure returns (uint256)";
                                            };
                                        };
                                        readonly id: 5066;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "12239:86:37";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 5067;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "12343:7:37";
                                    readonly memberName: "mulDown";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 18722;
                                    readonly src: "12239:111:37";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                    };
                                };
                                readonly id: 5069;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "12239:128:37";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "12182:201:37";
                    }, {
                        readonly assignments: readonly [5077];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 5077;
                            readonly mutability: "mutable";
                            readonly name: "poolInfo";
                            readonly nameLocation: "12421:8:37";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 5124;
                            readonly src: "12393:36:37";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolInfo_$10913_memory_ptr";
                                readonly typeString: "struct IHyperdrive.PoolInfo";
                            };
                            readonly typeName: {
                                readonly id: 5076;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 5075;
                                    readonly name: "IHyperdrive.PoolInfo";
                                    readonly nameLocations: readonly ["12393:11:37", "12405:8:37"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 10913;
                                    readonly src: "12393:20:37";
                                };
                                readonly referencedDeclaration: 10913;
                                readonly src: "12393:20:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_PoolInfo_$10913_storage_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolInfo";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 5116;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly expression: {
                                    readonly id: 5080;
                                    readonly name: "_marketState";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18208;
                                    readonly src: "12482:12:37";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_MarketState_$10762_storage";
                                        readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                    };
                                };
                                readonly id: 5081;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "12495:13:37";
                                readonly memberName: "shareReserves";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10728;
                                readonly src: "12482:26:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                };
                            }, {
                                readonly expression: {
                                    readonly id: 5082;
                                    readonly name: "_marketState";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18208;
                                    readonly src: "12539:12:37";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_MarketState_$10762_storage";
                                        readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                    };
                                };
                                readonly id: 5083;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "12552:15:37";
                                readonly memberName: "shareAdjustment";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10740;
                                readonly src: "12539:28:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int128";
                                    readonly typeString: "int128";
                                };
                            }, {
                                readonly expression: {
                                    readonly id: 5084;
                                    readonly name: "_marketState";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18208;
                                    readonly src: "12601:12:37";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_MarketState_$10762_storage";
                                        readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                    };
                                };
                                readonly id: 5085;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "12614:18:37";
                                readonly memberName: "zombieBaseProceeds";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10758;
                                readonly src: "12601:31:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint112";
                                    readonly typeString: "uint112";
                                };
                            }, {
                                readonly expression: {
                                    readonly id: 5086;
                                    readonly name: "_marketState";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18208;
                                    readonly src: "12667:12:37";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_MarketState_$10762_storage";
                                        readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                    };
                                };
                                readonly id: 5087;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "12680:19:37";
                                readonly memberName: "zombieShareReserves";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10761;
                                readonly src: "12667:32:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                };
                            }, {
                                readonly expression: {
                                    readonly id: 5088;
                                    readonly name: "_marketState";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18208;
                                    readonly src: "12727:12:37";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_MarketState_$10762_storage";
                                        readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                    };
                                };
                                readonly id: 5089;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "12740:12:37";
                                readonly memberName: "bondReserves";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10731;
                                readonly src: "12727:25:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                };
                            }, {
                                readonly id: 5090;
                                readonly name: "vaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 5037;
                                readonly src: "12783:15:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly expression: {
                                    readonly id: 5091;
                                    readonly name: "_marketState";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18208;
                                    readonly src: "12830:12:37";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_MarketState_$10762_storage";
                                        readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                    };
                                };
                                readonly id: 5092;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "12843:16:37";
                                readonly memberName: "longsOutstanding";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10737;
                                readonly src: "12830:29:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                };
                            }, {
                                readonly expression: {
                                    readonly id: 5093;
                                    readonly name: "_marketState";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18208;
                                    readonly src: "12898:12:37";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_MarketState_$10762_storage";
                                        readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                    };
                                };
                                readonly id: 5094;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "12911:23:37";
                                readonly memberName: "longAverageMaturityTime";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10746;
                                readonly src: "12898:36:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                };
                            }, {
                                readonly expression: {
                                    readonly id: 5095;
                                    readonly name: "_marketState";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18208;
                                    readonly src: "12967:12:37";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_MarketState_$10762_storage";
                                        readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                    };
                                };
                                readonly id: 5096;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "12980:17:37";
                                readonly memberName: "shortsOutstanding";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10743;
                                readonly src: "12967:30:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                };
                            }, {
                                readonly expression: {
                                    readonly id: 5097;
                                    readonly name: "_marketState";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18208;
                                    readonly src: "13037:12:37";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_MarketState_$10762_storage";
                                        readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                    };
                                };
                                readonly id: 5098;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "13050:24:37";
                                readonly memberName: "shortAverageMaturityTime";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10749;
                                readonly src: "13037:37:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                };
                            }, {
                                readonly id: 5099;
                                readonly name: "lpTotalSupply";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 5042;
                                readonly src: "13103:13:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly condition: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 5102;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 5100;
                                        readonly name: "lpTotalSupply";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 5042;
                                        readonly src: "13144:13:37";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "==";
                                    readonly rightExpression: {
                                        readonly hexValue: "30";
                                        readonly id: 5101;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "13161:1:37";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_0_by_1";
                                            readonly typeString: "int_const 0";
                                        };
                                        readonly value: "0";
                                    };
                                    readonly src: "13144:18:37";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly falseExpression: {
                                    readonly arguments: readonly [{
                                        readonly id: 5106;
                                        readonly name: "lpTotalSupply";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 5042;
                                        readonly src: "13222:13:37";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        }];
                                        readonly expression: {
                                            readonly id: 5104;
                                            readonly name: "presentValue";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 5057;
                                            readonly src: "13201:12:37";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly id: 5105;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "13214:7:37";
                                        readonly memberName: "divDown";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 18740;
                                        readonly src: "13201:20:37";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                            readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                        };
                                    };
                                    readonly id: 5107;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "13201:35:37";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 5108;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "Conditional";
                                readonly src: "13144:92:37";
                                readonly trueExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 5103;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "13181:1:37";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly expression: {
                                    readonly id: 5109;
                                    readonly name: "_withdrawPool";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18212;
                                    readonly src: "13283:13:37";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_WithdrawPool_$10773_storage";
                                        readonly typeString: "struct IHyperdrive.WithdrawPool storage ref";
                                    };
                                };
                                readonly id: 5110;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "13297:15:37";
                                readonly memberName: "readyToWithdraw";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10769;
                                readonly src: "13283:29:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                };
                            }, {
                                readonly expression: {
                                    readonly id: 5111;
                                    readonly name: "_withdrawPool";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18212;
                                    readonly src: "13352:13:37";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_WithdrawPool_$10773_storage";
                                        readonly typeString: "struct IHyperdrive.WithdrawPool storage ref";
                                    };
                                };
                                readonly id: 5112;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "13366:8:37";
                                readonly memberName: "proceeds";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10772;
                                readonly src: "13352:22:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                };
                            }, {
                                readonly expression: {
                                    readonly id: 5113;
                                    readonly name: "_marketState";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18208;
                                    readonly src: "13402:12:37";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_MarketState_$10762_storage";
                                        readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                    };
                                };
                                readonly id: 5114;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "13415:12:37";
                                readonly memberName: "longExposure";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10734;
                                readonly src: "13402:25:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                }, {
                                    readonly typeIdentifier: "t_int128";
                                    readonly typeString: "int128";
                                }, {
                                    readonly typeIdentifier: "t_uint112";
                                    readonly typeString: "uint112";
                                }, {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                }, {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                }, {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                }, {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                }, {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                }, {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                }, {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                }];
                                readonly expression: {
                                    readonly id: 5078;
                                    readonly name: "IHyperdrive";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 11076;
                                    readonly src: "12432:11:37";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$11076_$";
                                        readonly typeString: "type(contract IHyperdrive)";
                                    };
                                };
                                readonly id: 5079;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "12444:8:37";
                                readonly memberName: "PoolInfo";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10913;
                                readonly src: "12432:20:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_type$_t_struct$_PoolInfo_$10913_storage_ptr_$";
                                    readonly typeString: "type(struct IHyperdrive.PoolInfo storage pointer)";
                                };
                            };
                            readonly id: 5115;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "structConstructorCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly ["12467:13:37", "12522:15:37", "12581:18:37", "12646:19:37", "12713:12:37", "12766:15:37", "12812:16:37", "12873:23:37", "12948:17:37", "13011:24:37", "13088:13:37", "13130:12:37", "13250:31:37", "13326:24:37", "13388:12:37"];
                            readonly names: readonly ["shareReserves", "shareAdjustment", "zombieBaseProceeds", "zombieShareReserves", "bondReserves", "vaultSharePrice", "longsOutstanding", "longAverageMaturityTime", "shortsOutstanding", "shortAverageMaturityTime", "lpTotalSupply", "lpSharePrice", "withdrawalSharesReadyToWithdraw", "withdrawalSharesProceeds", "longExposure"];
                            readonly nodeType: "FunctionCall";
                            readonly src: "12432:1006:37";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolInfo_$10913_memory_ptr";
                                readonly typeString: "struct IHyperdrive.PoolInfo memory";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "12393:1045:37";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 5120;
                                    readonly name: "poolInfo";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 5077;
                                    readonly src: "13467:8:37";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_PoolInfo_$10913_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolInfo memory";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_struct$_PoolInfo_$10913_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.PoolInfo memory";
                                    }];
                                    readonly expression: {
                                        readonly id: 5118;
                                        readonly name: "abi";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -1;
                                        readonly src: "13456:3:37";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_magic_abi";
                                            readonly typeString: "abi";
                                        };
                                    };
                                    readonly id: 5119;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "13460:6:37";
                                    readonly memberName: "encode";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "13456:10:37";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$";
                                        readonly typeString: "function () pure returns (bytes memory)";
                                    };
                                };
                                readonly id: 5121;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "13456:20:37";
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
                                readonly id: 5117;
                                readonly name: "_revert";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 5408;
                                readonly src: "13448:7:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bytes memory) pure";
                                };
                            };
                            readonly id: 5122;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "13448:29:37";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 5123;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "13448:29:37";
                    }];
                };
                readonly baseFunctions: readonly [11881];
                readonly documentation: {
                    readonly id: 5030;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "11702:158:37";
                    readonly text: "@notice Gets info about the pool's reserves and other state that is\n         important to evaluate potential trades.\n @return The pool info.";
                };
                readonly functionSelector: "60246c88";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getPoolInfo";
                readonly nameLocation: "11874:11:37";
                readonly parameters: {
                    readonly id: 5031;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "11885:2:37";
                };
                readonly returnParameters: {
                    readonly id: 5035;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 5034;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 5125;
                        readonly src: "11911:27:37";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolInfo_$10913_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolInfo";
                        };
                        readonly typeName: {
                            readonly id: 5033;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 5032;
                                readonly name: "IHyperdrive.PoolInfo";
                                readonly nameLocations: readonly ["11911:11:37", "11923:8:37"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10913;
                                readonly src: "11911:20:37";
                            };
                            readonly referencedDeclaration: 10913;
                            readonly src: "11911:20:37";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolInfo_$10913_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolInfo";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "11910:29:37";
                };
                readonly scope: 5409;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 5146;
                readonly nodeType: "FunctionDefinition";
                readonly src: "13608:367:37";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 5145;
                    readonly nodeType: "Block";
                    readonly src: "13719:256:37";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly expression: {
                                            readonly id: 5137;
                                            readonly name: "_withdrawPool";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 18212;
                                            readonly src: "13842:13:37";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_WithdrawPool_$10773_storage";
                                                readonly typeString: "struct IHyperdrive.WithdrawPool storage ref";
                                            };
                                        };
                                        readonly id: 5138;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "13856:15:37";
                                        readonly memberName: "readyToWithdraw";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10769;
                                        readonly src: "13842:29:37";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint128";
                                            readonly typeString: "uint128";
                                        };
                                    }, {
                                        readonly expression: {
                                            readonly id: 5139;
                                            readonly name: "_withdrawPool";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 18212;
                                            readonly src: "13903:13:37";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_WithdrawPool_$10773_storage";
                                                readonly typeString: "struct IHyperdrive.WithdrawPool storage ref";
                                            };
                                        };
                                        readonly id: 5140;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "13917:8:37";
                                        readonly memberName: "proceeds";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10772;
                                        readonly src: "13903:22:37";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint128";
                                            readonly typeString: "uint128";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_uint128";
                                            readonly typeString: "uint128";
                                        }, {
                                            readonly typeIdentifier: "t_uint128";
                                            readonly typeString: "uint128";
                                        }];
                                        readonly expression: {
                                            readonly id: 5135;
                                            readonly name: "IHyperdrive";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 11076;
                                            readonly src: "13778:11:37";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$11076_$";
                                                readonly typeString: "type(contract IHyperdrive)";
                                            };
                                        };
                                        readonly id: 5136;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "13790:12:37";
                                        readonly memberName: "WithdrawPool";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10773;
                                        readonly src: "13778:24:37";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_struct$_WithdrawPool_$10773_storage_ptr_$";
                                            readonly typeString: "type(struct IHyperdrive.WithdrawPool storage pointer)";
                                        };
                                    };
                                    readonly id: 5141;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "structConstructorCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly ["13825:15:37", "13893:8:37"];
                                    readonly names: readonly ["readyToWithdraw", "proceeds"];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "13778:166:37";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_WithdrawPool_$10773_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.WithdrawPool memory";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_struct$_WithdrawPool_$10773_memory_ptr";
                                        readonly typeString: "struct IHyperdrive.WithdrawPool memory";
                                    }];
                                    readonly expression: {
                                        readonly id: 5133;
                                        readonly name: "abi";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -1;
                                        readonly src: "13750:3:37";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_magic_abi";
                                            readonly typeString: "abi";
                                        };
                                    };
                                    readonly id: 5134;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "13754:6:37";
                                    readonly memberName: "encode";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "13750:10:37";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$";
                                        readonly typeString: "function () pure returns (bytes memory)";
                                    };
                                };
                                readonly id: 5142;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "13750:208:37";
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
                                readonly id: 5132;
                                readonly name: "_revert";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 5408;
                                readonly src: "13729:7:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bytes memory) pure";
                                };
                            };
                            readonly id: 5143;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "13729:239:37";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 5144;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "13729:239:37";
                    }];
                };
                readonly baseFunctions: readonly [11894];
                readonly documentation: {
                    readonly id: 5126;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "13490:113:37";
                    readonly text: "@notice Gets information about the withdrawal pool.\n @return Hyperdrive's withdrawal pool information.";
                };
                readonly functionSelector: "fba56008";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getWithdrawPool";
                readonly nameLocation: "13617:15:37";
                readonly parameters: {
                    readonly id: 5127;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "13632:2:37";
                };
                readonly returnParameters: {
                    readonly id: 5131;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 5130;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 5146;
                        readonly src: "13682:31:37";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_WithdrawPool_$10773_memory_ptr";
                            readonly typeString: "struct IHyperdrive.WithdrawPool";
                        };
                        readonly typeName: {
                            readonly id: 5129;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 5128;
                                readonly name: "IHyperdrive.WithdrawPool";
                                readonly nameLocations: readonly ["13682:11:37", "13694:12:37"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10773;
                                readonly src: "13682:24:37";
                            };
                            readonly referencedDeclaration: 10773;
                            readonly src: "13682:24:37";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_WithdrawPool_$10773_storage_ptr";
                                readonly typeString: "struct IHyperdrive.WithdrawPool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "13681:33:37";
                };
                readonly scope: 5409;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 5160;
                readonly nodeType: "FunctionDefinition";
                readonly src: "14128:132:37";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 5159;
                    readonly nodeType: "Block";
                    readonly src: "14200:60:37";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 5155;
                                    readonly name: "_governanceFeesAccrued";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18230;
                                    readonly src: "14229:22:37";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }];
                                    readonly expression: {
                                        readonly id: 5153;
                                        readonly name: "abi";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -1;
                                        readonly src: "14218:3:37";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_magic_abi";
                                            readonly typeString: "abi";
                                        };
                                    };
                                    readonly id: 5154;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "14222:6:37";
                                    readonly memberName: "encode";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "14218:10:37";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$";
                                        readonly typeString: "function () pure returns (bytes memory)";
                                    };
                                };
                                readonly id: 5156;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "14218:34:37";
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
                                readonly id: 5152;
                                readonly name: "_revert";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 5408;
                                readonly src: "14210:7:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bytes memory) pure";
                                };
                            };
                            readonly id: 5157;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "14210:43:37";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 5158;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "14210:43:37";
                    }];
                };
                readonly baseFunctions: readonly [11887];
                readonly documentation: {
                    readonly id: 5147;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "13981:142:37";
                    readonly text: "@notice Gets info about the fees presently accrued by the pool.\n @return Governance fees denominated in shares yet to be collected.";
                };
                readonly functionSelector: "c69e16ad";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getUncollectedGovernanceFees";
                readonly nameLocation: "14137:28:37";
                readonly parameters: {
                    readonly id: 5148;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "14165:2:37";
                };
                readonly returnParameters: {
                    readonly id: 5151;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 5150;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 5160;
                        readonly src: "14191:7:37";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 5149;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "14191:7:37";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "14190:9:37";
                };
                readonly scope: 5409;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 5175;
                readonly nodeType: "FunctionDefinition";
                readonly src: "14339:159:37";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 5174;
                    readonly nodeType: "Block";
                    readonly src: "14448:50:37";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 5170;
                                    readonly name: "_marketState";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18208;
                                    readonly src: "14477:12:37";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_MarketState_$10762_storage";
                                        readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_struct$_MarketState_$10762_storage";
                                        readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                    }];
                                    readonly expression: {
                                        readonly id: 5168;
                                        readonly name: "abi";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -1;
                                        readonly src: "14466:3:37";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_magic_abi";
                                            readonly typeString: "abi";
                                        };
                                    };
                                    readonly id: 5169;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "14470:6:37";
                                    readonly memberName: "encode";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "14466:10:37";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$";
                                        readonly typeString: "function () pure returns (bytes memory)";
                                    };
                                };
                                readonly id: 5171;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "14466:24:37";
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
                                readonly id: 5167;
                                readonly name: "_revert";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 5408;
                                readonly src: "14458:7:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bytes memory) pure";
                                };
                            };
                            readonly id: 5172;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "14458:33:37";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 5173;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "14458:33:37";
                    }];
                };
                readonly baseFunctions: readonly [11867];
                readonly documentation: {
                    readonly id: 5161;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "14266:68:37";
                    readonly text: "@notice Gets the market state.\n @return The market state.";
                };
                readonly functionSelector: "d8165743";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getMarketState";
                readonly nameLocation: "14348:14:37";
                readonly parameters: {
                    readonly id: 5162;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "14362:2:37";
                };
                readonly returnParameters: {
                    readonly id: 5166;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 5165;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 5175;
                        readonly src: "14412:30:37";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_MarketState_$10762_memory_ptr";
                            readonly typeString: "struct IHyperdrive.MarketState";
                        };
                        readonly typeName: {
                            readonly id: 5164;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 5163;
                                readonly name: "IHyperdrive.MarketState";
                                readonly nameLocations: readonly ["14412:11:37", "14424:11:37"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10762;
                                readonly src: "14412:23:37";
                            };
                            readonly referencedDeclaration: 10762;
                            readonly src: "14412:23:37";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_MarketState_$10762_storage_ptr";
                                readonly typeString: "struct IHyperdrive.MarketState";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "14411:32:37";
                };
                readonly scope: 5409;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 5235;
                readonly nodeType: "FunctionDefinition";
                readonly src: "14739:565:37";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 5234;
                    readonly nodeType: "Block";
                    readonly src: "14835:469:37";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [5189];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 5189;
                            readonly mutability: "mutable";
                            readonly name: "loaded";
                            readonly nameLocation: "14862:6:37";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 5234;
                            readonly src: "14845:23:37";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_bytes32_$dyn_memory_ptr";
                                readonly typeString: "bytes32[]";
                            };
                            readonly typeName: {
                                readonly baseType: {
                                    readonly id: 5187;
                                    readonly name: "bytes32";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "14845:7:37";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes32";
                                        readonly typeString: "bytes32";
                                    };
                                };
                                readonly id: 5188;
                                readonly nodeType: "ArrayTypeName";
                                readonly src: "14845:9:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_bytes32_$dyn_storage_ptr";
                                    readonly typeString: "bytes32[]";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 5196;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly expression: {
                                    readonly id: 5193;
                                    readonly name: "_slots";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 5179;
                                    readonly src: "14885:6:37";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_array$_t_uint256_$dyn_calldata_ptr";
                                        readonly typeString: "uint256[] calldata";
                                    };
                                };
                                readonly id: 5194;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "14892:6:37";
                                readonly memberName: "length";
                                readonly nodeType: "MemberAccess";
                                readonly src: "14885:13:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly id: 5192;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly lValueRequested: false;
                                readonly nodeType: "NewExpression";
                                readonly src: "14871:13:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_bytes32_$dyn_memory_ptr_$";
                                    readonly typeString: "function (uint256) pure returns (bytes32[] memory)";
                                };
                                readonly typeName: {
                                    readonly baseType: {
                                        readonly id: 5190;
                                        readonly name: "bytes32";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "14875:7:37";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    };
                                    readonly id: 5191;
                                    readonly nodeType: "ArrayTypeName";
                                    readonly src: "14875:9:37";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_array$_t_bytes32_$dyn_storage_ptr";
                                        readonly typeString: "bytes32[]";
                                    };
                                };
                            };
                            readonly id: 5195;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "14871:28:37";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_bytes32_$dyn_memory_ptr";
                                readonly typeString: "bytes32[] memory";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "14845:54:37";
                    }, {
                        readonly body: {
                            readonly id: 5225;
                            readonly nodeType: "Block";
                            readonly src: "15007:253:37";
                            readonly statements: readonly [{
                                readonly assignments: readonly [5206];
                                readonly declarations: readonly [{
                                    readonly constant: false;
                                    readonly id: 5206;
                                    readonly mutability: "mutable";
                                    readonly name: "slot";
                                    readonly nameLocation: "15029:4:37";
                                    readonly nodeType: "VariableDeclaration";
                                    readonly scope: 5225;
                                    readonly src: "15021:12:37";
                                    readonly stateVariable: false;
                                    readonly storageLocation: "default";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly typeName: {
                                        readonly id: 5205;
                                        readonly name: "uint256";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "15021:7:37";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly visibility: "internal";
                                }];
                                readonly id: 5210;
                                readonly initialValue: {
                                    readonly baseExpression: {
                                        readonly id: 5207;
                                        readonly name: "_slots";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 5179;
                                        readonly src: "15036:6:37";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_array$_t_uint256_$dyn_calldata_ptr";
                                            readonly typeString: "uint256[] calldata";
                                        };
                                    };
                                    readonly id: 5209;
                                    readonly indexExpression: {
                                        readonly id: 5208;
                                        readonly name: "i";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 5198;
                                        readonly src: "15043:1:37";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "IndexAccess";
                                    readonly src: "15036:9:37";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "VariableDeclarationStatement";
                                readonly src: "15021:24:37";
                            }, {
                                readonly assignments: readonly [5212];
                                readonly declarations: readonly [{
                                    readonly constant: false;
                                    readonly id: 5212;
                                    readonly mutability: "mutable";
                                    readonly name: "data";
                                    readonly nameLocation: "15067:4:37";
                                    readonly nodeType: "VariableDeclaration";
                                    readonly scope: 5225;
                                    readonly src: "15059:12:37";
                                    readonly stateVariable: false;
                                    readonly storageLocation: "default";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes32";
                                        readonly typeString: "bytes32";
                                    };
                                    readonly typeName: {
                                        readonly id: 5211;
                                        readonly name: "bytes32";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "15059:7:37";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    };
                                    readonly visibility: "internal";
                                }];
                                readonly id: 5213;
                                readonly nodeType: "VariableDeclarationStatement";
                                readonly src: "15059:12:37";
                            }, {
                                readonly AST: {
                                    readonly nodeType: "YulBlock";
                                    readonly src: "15110:51:37";
                                    readonly statements: readonly [{
                                        readonly nodeType: "YulAssignment";
                                        readonly src: "15128:19:37";
                                        readonly value: {
                                            readonly arguments: readonly [{
                                                readonly name: "slot";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "15142:4:37";
                                            }];
                                            readonly functionName: {
                                                readonly name: "sload";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "15136:5:37";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "15136:11:37";
                                        };
                                        readonly variableNames: readonly [{
                                            readonly name: "data";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "15128:4:37";
                                        }];
                                    }];
                                };
                                readonly evmVersion: "paris";
                                readonly externalReferences: readonly [{
                                    readonly declaration: 5212;
                                    readonly isOffset: false;
                                    readonly isSlot: false;
                                    readonly src: "15128:4:37";
                                    readonly valueSize: 1;
                                }, {
                                    readonly declaration: 5206;
                                    readonly isOffset: false;
                                    readonly isSlot: false;
                                    readonly src: "15142:4:37";
                                    readonly valueSize: 1;
                                }];
                                readonly flags: readonly ["memory-safe"];
                                readonly id: 5214;
                                readonly nodeType: "InlineAssembly";
                                readonly src: "15085:76:37";
                            }, {
                                readonly expression: {
                                    readonly id: 5219;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly baseExpression: {
                                            readonly id: 5215;
                                            readonly name: "loaded";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 5189;
                                            readonly src: "15174:6:37";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_array$_t_bytes32_$dyn_memory_ptr";
                                                readonly typeString: "bytes32[] memory";
                                            };
                                        };
                                        readonly id: 5217;
                                        readonly indexExpression: {
                                            readonly id: 5216;
                                            readonly name: "i";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 5198;
                                            readonly src: "15181:1:37";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: true;
                                        readonly nodeType: "IndexAccess";
                                        readonly src: "15174:9:37";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly id: 5218;
                                        readonly name: "data";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 5212;
                                        readonly src: "15186:4:37";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    };
                                    readonly src: "15174:16:37";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes32";
                                        readonly typeString: "bytes32";
                                    };
                                };
                                readonly id: 5220;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "15174:16:37";
                            }, {
                                readonly id: 5224;
                                readonly nodeType: "UncheckedBlock";
                                readonly src: "15204:46:37";
                                readonly statements: readonly [{
                                    readonly expression: {
                                        readonly id: 5222;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "UnaryOperation";
                                        readonly operator: "++";
                                        readonly prefix: true;
                                        readonly src: "15232:3:37";
                                        readonly subExpression: {
                                            readonly id: 5221;
                                            readonly name: "i";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 5198;
                                            readonly src: "15234:1:37";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 5223;
                                    readonly nodeType: "ExpressionStatement";
                                    readonly src: "15232:3:37";
                                }];
                            }];
                        };
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 5204;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 5201;
                                readonly name: "i";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 5198;
                                readonly src: "14986:1:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "<";
                            readonly rightExpression: {
                                readonly expression: {
                                    readonly id: 5202;
                                    readonly name: "_slots";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 5179;
                                    readonly src: "14990:6:37";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_array$_t_uint256_$dyn_calldata_ptr";
                                        readonly typeString: "uint256[] calldata";
                                    };
                                };
                                readonly id: 5203;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "14997:6:37";
                                readonly memberName: "length";
                                readonly nodeType: "MemberAccess";
                                readonly src: "14990:13:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "14986:17:37";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 5226;
                        readonly initializationExpression: {
                            readonly assignments: readonly [5198];
                            readonly declarations: readonly [{
                                readonly constant: false;
                                readonly id: 5198;
                                readonly mutability: "mutable";
                                readonly name: "i";
                                readonly nameLocation: "14979:1:37";
                                readonly nodeType: "VariableDeclaration";
                                readonly scope: 5226;
                                readonly src: "14971:9:37";
                                readonly stateVariable: false;
                                readonly storageLocation: "default";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly typeName: {
                                    readonly id: 5197;
                                    readonly name: "uint256";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "14971:7:37";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly visibility: "internal";
                            }];
                            readonly id: 5200;
                            readonly initialValue: {
                                readonly hexValue: "30";
                                readonly id: 5199;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "14983:1:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly nodeType: "VariableDeclarationStatement";
                            readonly src: "14971:13:37";
                        };
                        readonly nodeType: "ForStatement";
                        readonly src: "14966:294:37";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 5230;
                                    readonly name: "loaded";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 5189;
                                    readonly src: "15289:6:37";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_array$_t_bytes32_$dyn_memory_ptr";
                                        readonly typeString: "bytes32[] memory";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_array$_t_bytes32_$dyn_memory_ptr";
                                        readonly typeString: "bytes32[] memory";
                                    }];
                                    readonly expression: {
                                        readonly id: 5228;
                                        readonly name: "abi";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -1;
                                        readonly src: "15278:3:37";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_magic_abi";
                                            readonly typeString: "abi";
                                        };
                                    };
                                    readonly id: 5229;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "15282:6:37";
                                    readonly memberName: "encode";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "15278:10:37";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$";
                                        readonly typeString: "function () pure returns (bytes memory)";
                                    };
                                };
                                readonly id: 5231;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "15278:18:37";
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
                                readonly id: 5227;
                                readonly name: "_revert";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 5408;
                                readonly src: "15270:7:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bytes memory) pure";
                                };
                            };
                            readonly id: 5232;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "15270:27:37";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 5233;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "15270:27:37";
                    }];
                };
                readonly baseFunctions: readonly [11912];
                readonly documentation: {
                    readonly id: 5176;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "14504:230:37";
                    readonly text: "@notice Allows plugin data libs to provide getters or other complex\n         logic instead of the main.\n @param _slots The storage slots the caller wants the data from.\n @return A raw array of loaded data.";
                };
                readonly functionSelector: "becee9c3";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "load";
                readonly nameLocation: "14748:4:37";
                readonly parameters: {
                    readonly id: 5180;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 5179;
                        readonly mutability: "mutable";
                        readonly name: "_slots";
                        readonly nameLocation: "14781:6:37";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 5235;
                        readonly src: "14762:25:37";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_uint256_$dyn_calldata_ptr";
                            readonly typeString: "uint256[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 5177;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "14762:7:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly id: 5178;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "14762:9:37";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_uint256_$dyn_storage_ptr";
                                readonly typeString: "uint256[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "14752:41:37";
                };
                readonly returnParameters: {
                    readonly id: 5184;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 5183;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 5235;
                        readonly src: "14817:16:37";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_bytes32_$dyn_memory_ptr";
                            readonly typeString: "bytes32[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 5181;
                                readonly name: "bytes32";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "14817:7:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly id: 5182;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "14817:9:37";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_bytes32_$dyn_storage_ptr";
                                readonly typeString: "bytes32[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "14816:18:37";
                };
                readonly scope: 5409;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 5257;
                readonly nodeType: "FunctionDefinition";
                readonly src: "15474:173:37";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 5256;
                    readonly nodeType: "Block";
                    readonly src: "15581:66:37";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly baseExpression: {
                                        readonly baseExpression: {
                                            readonly id: 5248;
                                            readonly name: "_balanceOf";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 18248;
                                            readonly src: "15610:10:37";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$";
                                                readonly typeString: "mapping(uint256 => mapping(address => uint256))";
                                            };
                                        };
                                        readonly id: 5250;
                                        readonly indexExpression: {
                                            readonly id: 5249;
                                            readonly name: "tokenId";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 5238;
                                            readonly src: "15621:7:37";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "IndexAccess";
                                        readonly src: "15610:19:37";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_mapping$_t_address_$_t_uint256_$";
                                            readonly typeString: "mapping(address => uint256)";
                                        };
                                    };
                                    readonly id: 5252;
                                    readonly indexExpression: {
                                        readonly id: 5251;
                                        readonly name: "account";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 5240;
                                        readonly src: "15630:7:37";
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
                                    readonly src: "15610:28:37";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }];
                                    readonly expression: {
                                        readonly id: 5246;
                                        readonly name: "abi";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -1;
                                        readonly src: "15599:3:37";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_magic_abi";
                                            readonly typeString: "abi";
                                        };
                                    };
                                    readonly id: 5247;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "15603:6:37";
                                    readonly memberName: "encode";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "15599:10:37";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$";
                                        readonly typeString: "function () pure returns (bytes memory)";
                                    };
                                };
                                readonly id: 5253;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "15599:40:37";
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
                                readonly id: 5245;
                                readonly name: "_revert";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 5408;
                                readonly src: "15591:7:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bytes memory) pure";
                                };
                            };
                            readonly id: 5254;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "15591:49:37";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 5255;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "15591:49:37";
                    }];
                };
                readonly baseFunctions: readonly [12244];
                readonly documentation: {
                    readonly id: 5236;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "15310:159:37";
                    readonly text: "@notice Gets an account's balance of a sub-token.\n @param tokenId The sub-token id.\n @param account The account.\n @return The balance.";
                };
                readonly functionSelector: "3656eec2";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "balanceOf";
                readonly nameLocation: "15483:9:37";
                readonly parameters: {
                    readonly id: 5241;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 5238;
                        readonly mutability: "mutable";
                        readonly name: "tokenId";
                        readonly nameLocation: "15510:7:37";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 5257;
                        readonly src: "15502:15:37";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 5237;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "15502:7:37";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 5240;
                        readonly mutability: "mutable";
                        readonly name: "account";
                        readonly nameLocation: "15535:7:37";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 5257;
                        readonly src: "15527:15:37";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 5239;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "15527:7:37";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "15492:56:37";
                };
                readonly returnParameters: {
                    readonly id: 5244;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 5243;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 5257;
                        readonly src: "15572:7:37";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 5242;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "15572:7:37";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "15571:9:37";
                };
                readonly scope: 5409;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 5275;
                readonly nodeType: "FunctionDefinition";
                readonly src: "15782:129:37";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 5274;
                    readonly nodeType: "Block";
                    readonly src: "15852:59:37";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly baseExpression: {
                                        readonly id: 5268;
                                        readonly name: "_totalSupply";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 18253;
                                        readonly src: "15881:12:37";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_mapping$_t_uint256_$_t_uint256_$";
                                            readonly typeString: "mapping(uint256 => uint256)";
                                        };
                                    };
                                    readonly id: 5270;
                                    readonly indexExpression: {
                                        readonly id: 5269;
                                        readonly name: "tokenId";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 5260;
                                        readonly src: "15894:7:37";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "IndexAccess";
                                    readonly src: "15881:21:37";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }];
                                    readonly expression: {
                                        readonly id: 5266;
                                        readonly name: "abi";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -1;
                                        readonly src: "15870:3:37";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_magic_abi";
                                            readonly typeString: "abi";
                                        };
                                    };
                                    readonly id: 5267;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "15874:6:37";
                                    readonly memberName: "encode";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "15870:10:37";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$";
                                        readonly typeString: "function () pure returns (bytes memory)";
                                    };
                                };
                                readonly id: 5271;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "15870:33:37";
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
                                readonly id: 5265;
                                readonly name: "_revert";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 5408;
                                readonly src: "15862:7:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bytes memory) pure";
                                };
                            };
                            readonly id: 5272;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "15862:42:37";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 5273;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "15862:42:37";
                    }];
                };
                readonly baseFunctions: readonly [12212];
                readonly documentation: {
                    readonly id: 5258;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "15653:124:37";
                    readonly text: "@notice Gets the total supply of a sub-token.\n @param tokenId The sub-token id.\n @return The total supply.";
                };
                readonly functionSelector: "bd85b039";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "totalSupply";
                readonly nameLocation: "15791:11:37";
                readonly parameters: {
                    readonly id: 5261;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 5260;
                        readonly mutability: "mutable";
                        readonly name: "tokenId";
                        readonly nameLocation: "15811:7:37";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 5275;
                        readonly src: "15803:15:37";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 5259;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "15803:7:37";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "15802:17:37";
                };
                readonly returnParameters: {
                    readonly id: 5264;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 5263;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 5275;
                        readonly src: "15843:7:37";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 5262;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "15843:7:37";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "15842:9:37";
                };
                readonly scope: 5409;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 5297;
                readonly nodeType: "FunctionDefinition";
                readonly src: "16100:186:37";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 5296;
                    readonly nodeType: "Block";
                    readonly src: "16212:74:37";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly baseExpression: {
                                        readonly baseExpression: {
                                            readonly id: 5288;
                                            readonly name: "_isApprovedForAll";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 18260;
                                            readonly src: "16241:17:37";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$";
                                                readonly typeString: "mapping(address => mapping(address => bool))";
                                            };
                                        };
                                        readonly id: 5290;
                                        readonly indexExpression: {
                                            readonly id: 5289;
                                            readonly name: "account";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 5278;
                                            readonly src: "16259:7:37";
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
                                        readonly src: "16241:26:37";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_mapping$_t_address_$_t_bool_$";
                                            readonly typeString: "mapping(address => bool)";
                                        };
                                    };
                                    readonly id: 5292;
                                    readonly indexExpression: {
                                        readonly id: 5291;
                                        readonly name: "operator";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 5280;
                                        readonly src: "16268:8:37";
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
                                    readonly src: "16241:36:37";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    }];
                                    readonly expression: {
                                        readonly id: 5286;
                                        readonly name: "abi";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -1;
                                        readonly src: "16230:3:37";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_magic_abi";
                                            readonly typeString: "abi";
                                        };
                                    };
                                    readonly id: 5287;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "16234:6:37";
                                    readonly memberName: "encode";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "16230:10:37";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$";
                                        readonly typeString: "function () pure returns (bytes memory)";
                                    };
                                };
                                readonly id: 5293;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "16230:48:37";
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
                                readonly id: 5285;
                                readonly name: "_revert";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 5408;
                                readonly src: "16222:7:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bytes memory) pure";
                                };
                            };
                            readonly id: 5294;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "16222:57:37";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 5295;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "16222:57:37";
                    }];
                };
                readonly baseFunctions: readonly [12222];
                readonly documentation: {
                    readonly id: 5276;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "15917:178:37";
                    readonly text: "@notice Gets the approval status of an operator for an account.\n @param account The account.\n @param operator The operator.\n @return The approval status.";
                };
                readonly functionSelector: "e985e9c5";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "isApprovedForAll";
                readonly nameLocation: "16109:16:37";
                readonly parameters: {
                    readonly id: 5281;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 5278;
                        readonly mutability: "mutable";
                        readonly name: "account";
                        readonly nameLocation: "16143:7:37";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 5297;
                        readonly src: "16135:15:37";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 5277;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "16135:7:37";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 5280;
                        readonly mutability: "mutable";
                        readonly name: "operator";
                        readonly nameLocation: "16168:8:37";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 5297;
                        readonly src: "16160:16:37";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 5279;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "16160:7:37";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "16125:57:37";
                };
                readonly returnParameters: {
                    readonly id: 5284;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 5283;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 5297;
                        readonly src: "16206:4:37";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 5282;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "16206:4:37";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "16205:6:37";
                };
                readonly scope: 5409;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 5323;
                readonly nodeType: "FunctionDefinition";
                readonly src: "16514:223:37";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 5322;
                    readonly nodeType: "Block";
                    readonly src: "16654:83:37";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly baseExpression: {
                                        readonly baseExpression: {
                                            readonly baseExpression: {
                                                readonly id: 5312;
                                                readonly name: "_perTokenApprovals";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 18269;
                                                readonly src: "16683:18:37";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$_$";
                                                    readonly typeString: "mapping(uint256 => mapping(address => mapping(address => uint256)))";
                                                };
                                            };
                                            readonly id: 5314;
                                            readonly indexExpression: {
                                                readonly id: 5313;
                                                readonly name: "tokenId";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 5300;
                                                readonly src: "16702:7:37";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly isConstant: false;
                                            readonly isLValue: true;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "IndexAccess";
                                            readonly src: "16683:27:37";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$";
                                                readonly typeString: "mapping(address => mapping(address => uint256))";
                                            };
                                        };
                                        readonly id: 5316;
                                        readonly indexExpression: {
                                            readonly id: 5315;
                                            readonly name: "account";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 5302;
                                            readonly src: "16711:7:37";
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
                                        readonly src: "16683:36:37";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_mapping$_t_address_$_t_uint256_$";
                                            readonly typeString: "mapping(address => uint256)";
                                        };
                                    };
                                    readonly id: 5318;
                                    readonly indexExpression: {
                                        readonly id: 5317;
                                        readonly name: "spender";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 5304;
                                        readonly src: "16720:7:37";
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
                                    readonly src: "16683:45:37";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }];
                                    readonly expression: {
                                        readonly id: 5310;
                                        readonly name: "abi";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -1;
                                        readonly src: "16672:3:37";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_magic_abi";
                                            readonly typeString: "abi";
                                        };
                                    };
                                    readonly id: 5311;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "16676:6:37";
                                    readonly memberName: "encode";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "16672:10:37";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$";
                                        readonly typeString: "function () pure returns (bytes memory)";
                                    };
                                };
                                readonly id: 5319;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "16672:57:37";
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
                                readonly id: 5309;
                                readonly name: "_revert";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 5408;
                                readonly src: "16664:7:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bytes memory) pure";
                                };
                            };
                            readonly id: 5320;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "16664:66:37";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 5321;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "16664:66:37";
                    }];
                };
                readonly baseFunctions: readonly [12234];
                readonly documentation: {
                    readonly id: 5298;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "16292:217:37";
                    readonly text: "@notice Gets the approval status of an operator for an account.\n @param tokenId The sub-token id.\n @param account The account.\n @param spender The spender.\n @return The approval status.";
                };
                readonly functionSelector: "21ff32a9";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "perTokenApprovals";
                readonly nameLocation: "16523:17:37";
                readonly parameters: {
                    readonly id: 5305;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 5300;
                        readonly mutability: "mutable";
                        readonly name: "tokenId";
                        readonly nameLocation: "16558:7:37";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 5323;
                        readonly src: "16550:15:37";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 5299;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "16550:7:37";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 5302;
                        readonly mutability: "mutable";
                        readonly name: "account";
                        readonly nameLocation: "16583:7:37";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 5323;
                        readonly src: "16575:15:37";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 5301;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "16575:7:37";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 5304;
                        readonly mutability: "mutable";
                        readonly name: "spender";
                        readonly nameLocation: "16608:7:37";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 5323;
                        readonly src: "16600:15:37";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 5303;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "16600:7:37";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "16540:81:37";
                };
                readonly returnParameters: {
                    readonly id: 5308;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 5307;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 5323;
                        readonly src: "16645:7:37";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 5306;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "16645:7:37";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "16644:9:37";
                };
                readonly scope: 5409;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 5339;
                readonly nodeType: "FunctionDefinition";
                readonly src: "16917:117:37";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 5338;
                    readonly nodeType: "Block";
                    readonly src: "16975:59:37";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 5332;
                                            readonly name: "_baseToken";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 18174;
                                            readonly src: "17004:10:37";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_contract$_IERC20_$10358";
                                                readonly typeString: "contract IERC20";
                                            };
                                        };
                                        readonly id: 5333;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "17015:8:37";
                                        readonly memberName: "decimals";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10333;
                                        readonly src: "17004:19:37";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_external_view$__$returns$_t_uint8_$";
                                            readonly typeString: "function () view external returns (uint8)";
                                        };
                                    };
                                    readonly id: 5334;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "17004:21:37";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint8";
                                        readonly typeString: "uint8";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_uint8";
                                        readonly typeString: "uint8";
                                    }];
                                    readonly expression: {
                                        readonly id: 5330;
                                        readonly name: "abi";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -1;
                                        readonly src: "16993:3:37";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_magic_abi";
                                            readonly typeString: "abi";
                                        };
                                    };
                                    readonly id: 5331;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "16997:6:37";
                                    readonly memberName: "encode";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "16993:10:37";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$";
                                        readonly typeString: "function () pure returns (bytes memory)";
                                    };
                                };
                                readonly id: 5335;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "16993:33:37";
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
                                readonly id: 5329;
                                readonly name: "_revert";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 5408;
                                readonly src: "16985:7:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bytes memory) pure";
                                };
                            };
                            readonly id: 5336;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "16985:42:37";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 5337;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "16985:42:37";
                    }];
                };
                readonly baseFunctions: readonly [12188];
                readonly documentation: {
                    readonly id: 5324;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "16743:169:37";
                    readonly text: "@notice Gets the decimals of the MultiToken. This is the same as the\n         decimals used by the base token.\n @return The decimals of the MultiToken.";
                };
                readonly functionSelector: "313ce567";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "decimals";
                readonly nameLocation: "16926:8:37";
                readonly parameters: {
                    readonly id: 5325;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "16934:2:37";
                };
                readonly returnParameters: {
                    readonly id: 5328;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 5327;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 5339;
                        readonly src: "16968:5:37";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint8";
                            readonly typeString: "uint8";
                        };
                        readonly typeName: {
                            readonly id: 5326;
                            readonly name: "uint8";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "16968:5:37";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint8";
                                readonly typeString: "uint8";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "16967:7:37";
                };
                readonly scope: 5409;
                readonly stateMutability: "view";
                readonly virtual: true;
                readonly visibility: "external";
            }, {
                readonly id: 5358;
                readonly nodeType: "FunctionDefinition";
                readonly src: "17153:137:37";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 5357;
                    readonly nodeType: "Block";
                    readonly src: "17222:68:37";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly id: 5352;
                                        readonly name: "tokenId";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 5342;
                                        readonly src: "17273:7:37";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        }];
                                        readonly expression: {
                                            readonly id: 5350;
                                            readonly name: "AssetId";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 18642;
                                            readonly src: "17251:7:37";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_AssetId_$18642_$";
                                                readonly typeString: "type(library AssetId)";
                                            };
                                        };
                                        readonly id: 5351;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "17259:13:37";
                                        readonly memberName: "assetIdToName";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 18503;
                                        readonly src: "17251:21:37";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$returns$_t_string_memory_ptr_$";
                                            readonly typeString: "function (uint256) pure returns (string memory)";
                                        };
                                    };
                                    readonly id: 5353;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "17251:30:37";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_string_memory_ptr";
                                        readonly typeString: "string memory";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_string_memory_ptr";
                                        readonly typeString: "string memory";
                                    }];
                                    readonly expression: {
                                        readonly id: 5348;
                                        readonly name: "abi";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -1;
                                        readonly src: "17240:3:37";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_magic_abi";
                                            readonly typeString: "abi";
                                        };
                                    };
                                    readonly id: 5349;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "17244:6:37";
                                    readonly memberName: "encode";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "17240:10:37";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$";
                                        readonly typeString: "function () pure returns (bytes memory)";
                                    };
                                };
                                readonly id: 5354;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "17240:42:37";
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
                                readonly id: 5347;
                                readonly name: "_revert";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 5408;
                                readonly src: "17232:7:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bytes memory) pure";
                                };
                            };
                            readonly id: 5355;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "17232:51:37";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 5356;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "17232:51:37";
                    }];
                };
                readonly baseFunctions: readonly [12196];
                readonly documentation: {
                    readonly id: 5340;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "17040:108:37";
                    readonly text: "@notice Gets the name of a sub-token.\n @param tokenId The sub-token id.\n @return The name.";
                };
                readonly functionSelector: "00ad800c";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "name";
                readonly nameLocation: "17162:4:37";
                readonly parameters: {
                    readonly id: 5343;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 5342;
                        readonly mutability: "mutable";
                        readonly name: "tokenId";
                        readonly nameLocation: "17175:7:37";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 5358;
                        readonly src: "17167:15:37";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 5341;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "17167:7:37";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "17166:17:37";
                };
                readonly returnParameters: {
                    readonly id: 5346;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 5345;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 5358;
                        readonly src: "17207:13:37";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 5344;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "17207:6:37";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "17206:15:37";
                };
                readonly scope: 5409;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 5377;
                readonly nodeType: "FunctionDefinition";
                readonly src: "17413:141:37";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 5376;
                    readonly nodeType: "Block";
                    readonly src: "17484:70:37";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly id: 5371;
                                        readonly name: "tokenId";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 5361;
                                        readonly src: "17537:7:37";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        }];
                                        readonly expression: {
                                            readonly id: 5369;
                                            readonly name: "AssetId";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 18642;
                                            readonly src: "17513:7:37";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_AssetId_$18642_$";
                                                readonly typeString: "type(library AssetId)";
                                            };
                                        };
                                        readonly id: 5370;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "17521:15:37";
                                        readonly memberName: "assetIdToSymbol";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 18581;
                                        readonly src: "17513:23:37";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$returns$_t_string_memory_ptr_$";
                                            readonly typeString: "function (uint256) pure returns (string memory)";
                                        };
                                    };
                                    readonly id: 5372;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "17513:32:37";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_string_memory_ptr";
                                        readonly typeString: "string memory";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_string_memory_ptr";
                                        readonly typeString: "string memory";
                                    }];
                                    readonly expression: {
                                        readonly id: 5367;
                                        readonly name: "abi";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -1;
                                        readonly src: "17502:3:37";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_magic_abi";
                                            readonly typeString: "abi";
                                        };
                                    };
                                    readonly id: 5368;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "17506:6:37";
                                    readonly memberName: "encode";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "17502:10:37";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$";
                                        readonly typeString: "function () pure returns (bytes memory)";
                                    };
                                };
                                readonly id: 5373;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "17502:44:37";
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
                                readonly id: 5366;
                                readonly name: "_revert";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 5408;
                                readonly src: "17494:7:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bytes memory) pure";
                                };
                            };
                            readonly id: 5374;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "17494:53:37";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 5375;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "17494:53:37";
                    }];
                };
                readonly baseFunctions: readonly [12204];
                readonly documentation: {
                    readonly id: 5359;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "17296:112:37";
                    readonly text: "@notice Gets the symbol of a sub-token.\n @param tokenId The sub-token id.\n @return The symbol.";
                };
                readonly functionSelector: "4e41a1fb";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "symbol";
                readonly nameLocation: "17422:6:37";
                readonly parameters: {
                    readonly id: 5362;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 5361;
                        readonly mutability: "mutable";
                        readonly name: "tokenId";
                        readonly nameLocation: "17437:7:37";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 5377;
                        readonly src: "17429:15:37";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 5360;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "17429:7:37";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "17428:17:37";
                };
                readonly returnParameters: {
                    readonly id: 5365;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 5364;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 5377;
                        readonly src: "17469:13:37";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 5363;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "17469:6:37";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "17468:15:37";
                };
                readonly scope: 5409;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 5395;
                readonly nodeType: "FunctionDefinition";
                readonly src: "17703:119:37";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 5394;
                    readonly nodeType: "Block";
                    readonly src: "17768:54:37";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly baseExpression: {
                                        readonly id: 5388;
                                        readonly name: "_nonces";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 18274;
                                        readonly src: "17797:7:37";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_mapping$_t_address_$_t_uint256_$";
                                            readonly typeString: "mapping(address => uint256)";
                                        };
                                    };
                                    readonly id: 5390;
                                    readonly indexExpression: {
                                        readonly id: 5389;
                                        readonly name: "account";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 5380;
                                        readonly src: "17805:7:37";
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
                                    readonly src: "17797:16:37";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }];
                                    readonly expression: {
                                        readonly id: 5386;
                                        readonly name: "abi";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -1;
                                        readonly src: "17786:3:37";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_magic_abi";
                                            readonly typeString: "abi";
                                        };
                                    };
                                    readonly id: 5387;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "17790:6:37";
                                    readonly memberName: "encode";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "17786:10:37";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$";
                                        readonly typeString: "function () pure returns (bytes memory)";
                                    };
                                };
                                readonly id: 5391;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "17786:28:37";
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
                                readonly id: 5385;
                                readonly name: "_revert";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 5408;
                                readonly src: "17778:7:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bytes memory) pure";
                                };
                            };
                            readonly id: 5392;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "17778:37:37";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 5393;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "17778:37:37";
                    }];
                };
                readonly baseFunctions: readonly [12252];
                readonly documentation: {
                    readonly id: 5378;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "17560:138:37";
                    readonly text: "@notice Gets the permitForAll signature nonce for an account.\n @param account The account.\n @return The signature nonce.";
                };
                readonly functionSelector: "7ecebe00";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "nonces";
                readonly nameLocation: "17712:6:37";
                readonly parameters: {
                    readonly id: 5381;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 5380;
                        readonly mutability: "mutable";
                        readonly name: "account";
                        readonly nameLocation: "17727:7:37";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 5395;
                        readonly src: "17719:15:37";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 5379;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "17719:7:37";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "17718:17:37";
                };
                readonly returnParameters: {
                    readonly id: 5384;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 5383;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 5395;
                        readonly src: "17759:7:37";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 5382;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "17759:7:37";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "17758:9:37";
                };
                readonly scope: 5409;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 5408;
                readonly nodeType: "FunctionDefinition";
                readonly src: "18031:106:37";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 5407;
                    readonly nodeType: "Block";
                    readonly src: "18083:54:37";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly errorCall: {
                            readonly arguments: readonly [{
                                readonly id: 5404;
                                readonly name: "_bytes";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 5398;
                                readonly src: "18123:6:37";
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
                                readonly expression: {
                                    readonly id: 5401;
                                    readonly name: "IHyperdrive";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 11076;
                                    readonly src: "18100:11:37";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$11076_$";
                                        readonly typeString: "type(contract IHyperdrive)";
                                    };
                                };
                                readonly id: 5403;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "18112:10:37";
                                readonly memberName: "ReturnData";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 11012;
                                readonly src: "18100:22:37";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_error_pure$_t_bytes_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bytes memory) pure";
                                };
                            };
                            readonly id: 5405;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "18100:30:37";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 5406;
                        readonly nodeType: "RevertStatement";
                        readonly src: "18093:37:37";
                    }];
                };
                readonly documentation: {
                    readonly id: 5396;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "17849:177:37";
                    readonly text: "@dev Reverts with the provided bytes. This is useful in getters used\n      with the force-revert delegatecall pattern.\n @param _bytes The bytes to revert with.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_revert";
                readonly nameLocation: "18040:7:37";
                readonly parameters: {
                    readonly id: 5399;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 5398;
                        readonly mutability: "mutable";
                        readonly name: "_bytes";
                        readonly nameLocation: "18061:6:37";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 5408;
                        readonly src: "18048:19:37";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 5397;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "18048:5:37";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "18047:21:37";
                };
                readonly returnParameters: {
                    readonly id: 5400;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "18083:0:37";
                };
                readonly scope: 5409;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }];
            readonly abstract: true;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 4639;
                    readonly name: "IHyperdriveRead";
                    readonly nameLocations: readonly ["1262:15:37"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 11913;
                    readonly src: "1262:15:37";
                };
                readonly id: 4640;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "1262:15:37";
            }, {
                readonly baseName: {
                    readonly id: 4641;
                    readonly name: "HyperdriveAdmin";
                    readonly nameLocations: readonly ["1283:15:37"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 13205;
                    readonly src: "1283:15:37";
                };
                readonly id: 4642;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "1283:15:37";
            }, {
                readonly baseName: {
                    readonly id: 4643;
                    readonly name: "HyperdriveMultiToken";
                    readonly nameLocations: readonly ["1304:20:37"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 17165;
                    readonly src: "1304:20:37";
                };
                readonly id: 4644;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "1304:20:37";
            }, {
                readonly baseName: {
                    readonly id: 4645;
                    readonly name: "HyperdriveLP";
                    readonly nameLocations: readonly ["1330:12:37"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 15747;
                    readonly src: "1330:12:37";
                };
                readonly id: 4646;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "1330:12:37";
            }, {
                readonly baseName: {
                    readonly id: 4647;
                    readonly name: "HyperdriveLong";
                    readonly nameLocations: readonly ["1348:14:37"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 16681;
                    readonly src: "1348:14:37";
                };
                readonly id: 4648;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "1348:14:37";
            }, {
                readonly baseName: {
                    readonly id: 4649;
                    readonly name: "HyperdriveShort";
                    readonly nameLocations: readonly ["1368:15:37"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 18151;
                    readonly src: "1368:15:37";
                };
                readonly id: 4650;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "1368:15:37";
            }, {
                readonly baseName: {
                    readonly id: 4651;
                    readonly name: "HyperdriveCheckpoint";
                    readonly nameLocations: readonly ["1389:20:37"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 14845;
                    readonly src: "1389:20:37";
                };
                readonly id: 4652;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "1389:20:37";
            }];
            readonly canonicalName: "HyperdriveTarget0";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly documentation: {
                readonly id: 4638;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "899:320:37";
                readonly text: "@author DELV\n @title HyperdriveTarget0\n @notice Hyperdrive's target 0 logic contract.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance.";
            };
            readonly fullyImplemented: false;
            readonly linearizedBaseContracts: readonly [5409, 14845, 18151, 16681, 15747, 17165, 13205, 14381, 18367, 72043, 11599, 12165, 11913, 12253];
            readonly name: "HyperdriveTarget0";
            readonly nameLocation: "1237:17:37";
            readonly scope: 5410;
            readonly usedErrors: readonly [10932, 10938, 10941, 10950, 10962, 10965, 10974, 10977, 10980, 10983, 11007, 11012, 11015, 11024, 11039, 71418, 71699, 71704, 71707, 71988];
            readonly usedEvents: readonly [11419, 11434, 11453, 11468, 11485, 11504, 11523, 11544, 11557, 11564, 11569, 11574, 11579, 11586, 11591, 11598, 12146, 12155, 12164];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 37;
};
//# sourceMappingURL=HyperdriveTarget0.d.ts.map