export declare const MockERC4626Hyperdrive: {
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
        }, {
            readonly internalType: "address";
            readonly name: "_target0";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_target1";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_target2";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_target3";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_target4";
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
        readonly name: "FailedInnerCall";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ReentrancyGuardReentrantCall";
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
        readonly name: "TransferFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "UnexpectedSuccess";
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
        readonly stateMutability: "nonpayable";
        readonly type: "fallback";
    }, {
        readonly inputs: readonly [];
        readonly name: "PERMIT_TYPEHASH";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
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
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly name: "addLiquidity";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "";
            readonly type: "uint256[]";
        }];
        readonly name: "batchTransferFrom";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "checkpoint";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
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
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly name: "closeLong";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
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
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly name: "closeShort";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
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
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly name: "collectGovernanceFee";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }, {
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
        readonly name: "deposit";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "sharesMinted";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "vaultSharePrice";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "domainSeparator";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
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
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly name: "initialize";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
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
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly name: "openLong";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
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
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly name: "openShort";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly name: "pause";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
        readonly inputs: readonly [];
        readonly name: "pricePerVaultShare";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "vaultSharePrice";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
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
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly name: "redeemWithdrawalShares";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
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
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly name: "removeLiquidity";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "setApproval";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "setApprovalBridge";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly name: "setApprovalForAll";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "setFeeCollector";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "setGovernance";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly name: "setPauser";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "setSweepCollector";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "sweep";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "target0";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "target1";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "target2";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "target3";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "target4";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "transferFrom";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "transferFromBridge";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_shares";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_sharePrice";
            readonly type: "uint256";
        }, {
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
        readonly name: "withdraw";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amountWithdrawn";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    readonly bytecode: {
        readonly object: "0x6102e06040523480156200001257600080fd5b50604051620023313803806200233183398101604081905262000035916200056e565b6001600081905586516001600160a01b0390811660809081526020808a018051841660a0908152928b01516101a0908152928b01516101c05260c0808c01516101e052610100808d015190915260e0808d01519052610120808d0151909152928b0180515190935282519091015161014090815282516040908101516101609081529351606090810151610180908152918d01518616610200528c015161022052908b0151600a80549186166001600160a01b0319928316179055928b0151600880549186169185169190911790558a01516009805491851691909316179091558188166102405281871661026052818616610280528185166102a0528184166102c05251885189938993899389938993899362000157939216919062000169565b5050505050505050505050506200072d565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b17909152620001c390859083906200023516565b6200022f57604080516001600160a01b038516602482015260006044808301919091528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b1790915262000223918691620002e616565b6200022f8482620002e6565b50505050565b6000806000846001600160a01b031684604051620002549190620006d8565b6000604051808303816000865af19150503d806000811462000293576040519150601f19603f3d011682016040523d82523d6000602084013e62000298565b606091505b5091509150818015620002c6575080511580620002c6575080806020019051810190620002c6919062000709565b8015620002dd57506000856001600160a01b03163b115b95945050505050565b6000620002fd6001600160a01b0384168362000359565b905080516000141580156200032557508080602001905181019062000323919062000709565b155b156200035457604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b6060620003698383600062000370565b9392505050565b606081471015620003975760405163cd78605960e01b81523060048201526024016200034b565b600080856001600160a01b03168486604051620003b59190620006d8565b60006040518083038185875af1925050503d8060008114620003f4576040519150601f19603f3d011682016040523d82523d6000602084013e620003f9565b606091505b5090925090506200040c86838362000416565b9695505050505050565b6060826200042f5762000429826200047a565b62000369565b81511580156200044757506001600160a01b0384163b155b156200047257604051639996b31560e01b81526001600160a01b03851660048201526024016200034b565b508062000369565b8051156200048b5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6040516101c081016001600160401b0381118282101715620004d657634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b0381168114620004f457600080fd5b919050565b6000608082840312156200050c57600080fd5b604051608081016001600160401b03811182821017156200053d57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b6000806000806000808688036102c08112156200058a57600080fd5b610220808212156200059b57600080fd5b620005a5620004a4565b9150620005b289620004dc565b8252620005c260208a01620004dc565b6020830152620005d560408a01620004dc565b6040830152606089015160608301526080890151608083015260a089015160a083015260c089015160c083015260e089015160e0830152610100808a01518184015250610120808a0151818401525061014062000634818b01620004dc565b90830152610160620006488a8201620004dc565b908301526101806200065c8a8201620004dc565b908301526101a0620006718b8b8301620004f9565b818401525081975062000686818a01620004dc565b96505050620006996102408801620004dc565b9350620006aa6102608801620004dc565b9250620006bb6102808801620004dc565b9150620006cc6102a08801620004dc565b90509295509295509295565b6000825160005b81811015620006fb5760208186018101518583015201620006df565b506000920191825250919050565b6000602082840312156200071c57600080fd5b815180151581146200036957600080fd5b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051610280516102a0516102c051611aa8620008896000396000818161068d01528181610a670152610ac10152600081816105bd015281816108570152610a22015260008181610576015261078f015260008181610639015281816106f901526107f4015260008181610205015281816103c7015281816106c90152818161072b0152818161075d015281816107c301528181610827015281816108a1015281816109d90152610a90015260005050600050506000505060005050600050506000505060005050600050506000505060005050600050506000505060008181610d5201528181610dcc01528181610e5b01528181610eba01528181610f5d01528181610fe20152611022015260008181610d250152610d860152611aa86000f3fe6080604052600436106101ee5760003560e01c8063a22cb4651161010d578063daaa35fe116100a0578063e4af29d11161006f578063e4af29d1146102fe578063eac3e79914610627578063ed64bab21461065b578063f3f707071461067b578063f698da25146106af576101ee565b8063daaa35fe146105df578063dbbe8070146105f4578063ded0623114610401578063e44808bc14610607576101ee565b8063ab033ea9116100dc578063ab033ea9146102fe578063cba2e58d14610598578063cbc134341461033b578063d899e112146105ab576101ee565b8063a22cb465146104b1578063a314453114610544578063a42dce80146102fe578063a6e8a85914610564576101ee565b80633e691db91161018557806377d05ff41161015457806377d05ff4146104d1578063829555d4146104e45780639032c726146105045780639cd241af14610524576101ee565b80633e691db9146104635780634c2ac1d9146104835780634ed2d6ac146104965780637180c8ca146104b1576101ee565b80631c0f12b6116101c15780631c0f12b61461039557806321b57d53146103b557806329b23fc11461040157806330adf81f1461042f576101ee565b806301681a62146102fe57806302329a2914610320578063074a6de91461033b57806317fad7fc14610375575b3480156101fa57600080fd5b5060003660606000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316858560405161023d9291906113b4565b600060405180830381855af49150503d8060008114610278576040519150601f19603f3d011682016040523d82523d6000602084013e61027d565b606091505b509150915081156102a157604051638bb0a34b60e01b815260040160405180910390fd5b60006102ac826113c4565b90506001600160e01b03198116636e64089360e11b146102ce57815160208301fd5b8151600319810160048401908152926102ef91810160200190602401611435565b80519650602001945050505050f35b34801561030a57600080fd5b5061031e6103193660046114f7565b6106c4565b005b34801561032c57600080fd5b5061031e610319366004611522565b34801561034757600080fd5b5061035b610356366004611551565b6106f1565b604080519283526020830191909152015b60405180910390f35b34801561038157600080fd5b5061031e6103903660046115e6565b610726565b3480156103a157600080fd5b5061031e6103b036600461167b565b610758565b3480156103c157600080fd5b506103e97f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200161036c565b34801561040d57600080fd5b5061042161041c3660046116c3565b610788565b60405190815260200161036c565b34801561043b57600080fd5b506104217f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367381565b34801561046f57600080fd5b5061042161047e36600461171d565b6107bc565b61042161049136600461175a565b6107ed565b3480156104a257600080fd5b5061031e6103b03660046117be565b3480156104bd57600080fd5b5061031e6104cc366004611808565b610822565b6104216104df366004611551565b610850565b3480156104f057600080fd5b5061035b6104ff366004611841565b610883565b34801561051057600080fd5b5061031e61051f366004611888565b61089c565b34801561053057600080fd5b5061031e61053f366004611908565b6109d4565b34801561055057600080fd5b5061042161055f366004611551565b610a03565b34801561057057600080fd5b506103e97f000000000000000000000000000000000000000000000000000000000000000081565b61035b6105a63660046116c3565b610a1a565b3480156105b757600080fd5b506103e97f000000000000000000000000000000000000000000000000000000000000000081565b3480156105eb57600080fd5b50610421610a50565b61035b6106023660046116c3565b610a5f565b34801561061357600080fd5b5061031e610622366004611940565b610a8b565b34801561063357600080fd5b506103e97f000000000000000000000000000000000000000000000000000000000000000081565b34801561066757600080fd5b5061031e61067636600461199f565b610abc565b34801561068757600080fd5b506103e97f000000000000000000000000000000000000000000000000000000000000000081565b3480156106bb57600080fd5b50610421610ae5565b6106ed7f0000000000000000000000000000000000000000000000000000000000000000610b73565b5050565b60008061071d7f0000000000000000000000000000000000000000000000000000000000000000610b73565b50935093915050565b61074f7f0000000000000000000000000000000000000000000000000000000000000000610b73565b50505050505050565b6107817f0000000000000000000000000000000000000000000000000000000000000000610b73565b5050505050565b60006107b37f0000000000000000000000000000000000000000000000000000000000000000610b73565b50949350505050565b60006107e77f0000000000000000000000000000000000000000000000000000000000000000610b73565b50919050565b60006108187f0000000000000000000000000000000000000000000000000000000000000000610b73565b5095945050505050565b61084b7f0000000000000000000000000000000000000000000000000000000000000000610b73565b505050565b600061087b7f0000000000000000000000000000000000000000000000000000000000000000610b73565b509392505050565b6000806108908484610b93565b915091505b9250929050565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166108d1610ae5565b60405160248101919091527f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367360448201526001600160a01b03808c1660648301528a16608482015288151560a482015260c4810188905260ff871660e4820152610104810186905261012481018590526101440160408051601f198184030181529181526020820180516001600160e01b03166314e5f07b60e01b1790525161097a91906119b8565b600060405180830381855af49150503d80600081146109b5576040519150601f19603f3d011682016040523d82523d6000602084013e6109ba565b606091505b5091509150816109cc57805160208201fd5b805160208201f35b6109fd7f0000000000000000000000000000000000000000000000000000000000000000610b73565b50505050565b6000610a10848484610c6b565b90505b9392505050565b600080610a467f0000000000000000000000000000000000000000000000000000000000000000610b73565b5094509492505050565b6000610a5a610d02565b905090565b600080610a467f0000000000000000000000000000000000000000000000000000000000000000610b73565b610ab47f0000000000000000000000000000000000000000000000000000000000000000610b73565b505050505050565b6106ed7f0000000000000000000000000000000000000000000000000000000000000000610b73565b60408051808201825260018152603160f81b60209182015281517f2aef22f9d7df5f9d21c56d14029233f3fdaa91917727e1eb68e504d27072d6cd818301527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc681840152466060820152306080808301919091528351808303909101815260a0909101909252815191012090565b6060600080836001600160a01b031660003660405161097a9291906113b4565b60008080610ba76040850160208601611522565b15610bcc57610bc285610bbd60408701876119d4565b610d15565b9093509050610be8565b5034610be485610bdf60408701876119d4565b610e4e565b8492505b610bf0610d02565b91508015610c6357604051600090339083908381818185875af1925050503d8060008114610c3a576040519150601f19603f3d011682016040523d82523d6000602084013e610c3f565b606091505b5050905080610c61576040516312171d8360e31b815260040160405180910390fd5b505b509250929050565b600080610c788585610e83565b9050610c8381610ea1565b945084600003610c97576000915050610a13565b610ca76040840160208501611522565b15610cd657610ccf85610cbd60208601866114f7565b610cca60408701876119d4565b610f2e565b915061087b565b610cf985610ce760208601866114f7565b610cf460408701876119d4565b610fd5565b50929392505050565b6000610a5a670de0b6b3a7640000611009565b600080610d4d6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333088611059565b610dad7f0000000000000000000000000000000000000000000000000000000000000000610d7c876001611a1b565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001691906110c0565b604051636e553f6560e01b8152600481018690523060248201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636e553f65906044016020604051808303816000875af1158015610e1d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e419190611a3c565b9660009650945050505050565b61084b6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333086611059565b6000610e988383670de0b6b3a7640000611150565b90505b92915050565b6040516363737ac960e11b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063c6e6f592906024015b602060405180830381865afa158015610f0a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e9b9190611a3c565b604051635d043b2960e11b8152600481018590526001600160a01b0384811660248301523060448301526000917f00000000000000000000000000000000000000000000000000000000000000009091169063ba087652906064016020604051808303816000875af1158015610fa8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fcc9190611a3c565b95945050505050565b6109fd6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016848661116e565b6040516303d1689d60e11b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906307a2d13a90602401610eed565b6040516001600160a01b0384811660248301528381166044830152606482018390526109fd9186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b03838183161783525050505061119f565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b1790526111118482611207565b6109fd576040516001600160a01b0384811660248301526000604483015261114691869182169063095ea7b39060640161108e565b6109fd848261119f565b600082600019048411830215820261116757600080fd5b5091020490565b6040516001600160a01b0383811660248301526044820183905261084b91859182169063a9059cbb9060640161108e565b60006111b46001600160a01b038416836112aa565b905080516000141580156111d95750808060200190518101906111d79190611a55565b155b1561084b57604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b6000806000846001600160a01b03168460405161122491906119b8565b6000604051808303816000865af19150503d8060008114611261576040519150601f19603f3d011682016040523d82523d6000602084013e611266565b606091505b50915091508180156112905750805115806112905750808060200190518101906112909190611a55565b8015610fcc5750505050506001600160a01b03163b151590565b6060610e988383600084600080856001600160a01b031684866040516112d091906119b8565b60006040518083038185875af1925050503d806000811461130d576040519150601f19603f3d011682016040523d82523d6000602084013e611312565b606091505b509150915061132286838361132c565b9695505050505050565b6060826113415761133c82611388565b610a13565b815115801561135857506001600160a01b0384163b155b1561138157604051639996b31560e01b81526001600160a01b03851660048201526024016111fe565b5080610a13565b8051156113985780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b50565b8183823760009101908152919050565b805160208201516001600160e01b031980821692919060048310156113f35780818460040360031b1b83161693505b505050919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561142c578181015183820152602001611414565b50506000910152565b60006020828403121561144757600080fd5b815167ffffffffffffffff8082111561145f57600080fd5b818401915084601f83011261147357600080fd5b815181811115611485576114856113fb565b604051601f8201601f19908116603f011681019083821181831017156114ad576114ad6113fb565b816040528281528760208487010111156114c657600080fd5b6114d7836020830160208801611411565b979650505050505050565b6001600160a01b03811681146113b157600080fd5b60006020828403121561150957600080fd5b8135610a13816114e2565b80151581146113b157600080fd5b60006020828403121561153457600080fd5b8135610a1381611514565b6000606082840312156107e757600080fd5b60008060006060848603121561156657600080fd5b8335925060208401359150604084013567ffffffffffffffff81111561158b57600080fd5b6115978682870161153f565b9150509250925092565b60008083601f8401126115b357600080fd5b50813567ffffffffffffffff8111156115cb57600080fd5b6020830191508360208260051b850101111561089557600080fd5b600080600080600080608087890312156115ff57600080fd5b863561160a816114e2565b9550602087013561161a816114e2565b9450604087013567ffffffffffffffff8082111561163757600080fd5b6116438a838b016115a1565b9096509450606089013591508082111561165c57600080fd5b5061166989828a016115a1565b979a9699509497509295939492505050565b6000806000806080858703121561169157600080fd5b8435935060208501356116a3816114e2565b925060408501356116b3816114e2565b9396929550929360600135925050565b600080600080608085870312156116d957600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561170557600080fd5b6117118782880161153f565b91505092959194509250565b60006020828403121561172f57600080fd5b813567ffffffffffffffff81111561174657600080fd5b6117528482850161153f565b949350505050565b600080600080600060a0868803121561177257600080fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff8111156117a557600080fd5b6117b18882890161153f565b9150509295509295909350565b600080600080608085870312156117d457600080fd5b8435935060208501356117e6816114e2565b92506040850135915060608501356117fd816114e2565b939692955090935050565b6000806040838503121561181b57600080fd5b8235611826816114e2565b9150602083013561183681611514565b809150509250929050565b6000806040838503121561185457600080fd5b82359150602083013567ffffffffffffffff81111561187257600080fd5b61187e8582860161153f565b9150509250929050565b600080600080600080600060e0888a0312156118a357600080fd5b87356118ae816114e2565b965060208801356118be816114e2565b955060408801356118ce81611514565b945060608801359350608088013560ff811681146118eb57600080fd5b9699959850939692959460a0840135945060c09093013592915050565b60008060006060848603121561191d57600080fd5b83359250602084013561192f816114e2565b929592945050506040919091013590565b600080600080600060a0868803121561195857600080fd5b85359450602086013561196a816114e2565b9350604086013561197a816114e2565b9250606086013591506080860135611991816114e2565b809150509295509295909350565b6000602082840312156119b157600080fd5b5035919050565b600082516119ca818460208701611411565b9190910192915050565b6000808335601e198436030181126119eb57600080fd5b83018035915067ffffffffffffffff821115611a0657600080fd5b60200191503681900382131561089557600080fd5b80820180821115610e9b57634e487b7160e01b600052601160045260246000fd5b600060208284031215611a4e57600080fd5b5051919050565b600060208284031215611a6757600080fd5b8151610a138161151456fea2646970667358221220bd94e8e13e2bd82a19fd084a0e51e11948d8e71c35104eac20cdafa9c299eddf64736f6c63430008140033";
        readonly sourceMap: "447:1152:133:-:0;;;505:368;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1713:1:169;1917:7;:21;;;5298:17:118;;-1:-1:-1;;;;;5285:30:118;;;;;;;5345:24;;;;;;5325:44;;;;;;5459:30;;;;5433:56;;;;5912:28;;;;5888:52;;6228:32;;;;;6200:60;;6443:26;;;;;6421:48;;;-1:-1:-1;6499:24:118;;;;6479:44;;-1:-1:-1;6548:19:118;;;;6533:34;;;6632:12;;;;;:18;6620:30;;;6671:12;;:17;;;;6660:28;;;;6717:12;;-1:-1:-1;6717:25:118;;;;6698:44;;;;6775:12;;-1:-1:-1;6775:29:118;;;;6752:52;;;;-1:-1:-1;;;6881:21:118;6864:38;;;;-1:-1:-1;;6930:22:118;6912:40;;7055:18;;;;7041:11;:32;;;;;-1:-1:-1;;;;;;7041:32:118;;;;;;7099:20;;;;7083:13;:36;;;;;;;;;;;;;;7147:22;;;7129:15;:40;;;;;;;;;;;;;6010:18:36;;::::1;;::::0;6038;;::::1;;::::0;6066;;::::1;;::::0;6094;;::::1;;::::0;6122;;::::1;;::::0;4685:24:45;4631:17;;739:7:133;;760:8;;782;;804;;826;;848;;4617:118:45::1;::::0;:46;::::1;::::0;4685:24;4617:46:::1;:118::i;:::-;4194:548:::0;;;;;;505:368:133;;;;;;447:1152;;3296:380:166;3411:47;;;-1:-1:-1;;;;;3399:32:234;;3411:47:166;;;3381:51:234;3448:18;;;;3441:34;;;3411:47:166;;;;;;;;;;3354:18:234;;;;3411:47:166;;;;;;;;-1:-1:-1;;;;;3411:47:166;;;-1:-1:-1;;;3411:47:166;;;;3474:44;;3426:13;;3411:47;;3474:23;:44;:::i;:::-;3469:201;;3561:43;;;-1:-1:-1;;;;;3399:32:234;;3561:43:166;;;3381:51:234;3601:1:166;3448:18:234;;;;3441:34;;;;3561:43:166;;;;;;;;;;3354:18:234;;;;3561:43:166;;;;;;;;-1:-1:-1;;;;;3561:43:166;;;-1:-1:-1;;;3561:43:166;;;;3534:71;;3554:5;;3534:19;:71;:::i;:::-;3619:40;3639:5;3646:12;3619:19;:40::i;:::-;3373:303;3296:380;;;:::o;5189:578::-;5272:4;5574:12;5588:23;5623:5;-1:-1:-1;;;;;5615:19:166;5635:4;5615:25;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5573:67;;;;5657:7;:69;;;;-1:-1:-1;5669:17:166;;:22;;:56;;;5706:10;5695:30;;;;;;;;;;;;:::i;:::-;5657:103;;;;;5759:1;5738:5;-1:-1:-1;;;;;5730:26:166;;:30;5657:103;5650:110;5189:578;-1:-1:-1;;;;;5189:578:166:o;4059:629::-;4478:23;4504:33;-1:-1:-1;;;;;4504:27:166;;4532:4;4504:27;:33::i;:::-;4478:59;;4551:10;:17;4572:1;4551:22;;:57;;;;;4589:10;4578:30;;;;;;;;;;;;:::i;:::-;4577:31;4551:57;4547:135;;;4631:40;;-1:-1:-1;;;4631:40:166;;-1:-1:-1;;;;;4636:32:234;;4631:40:166;;;4618:51:234;4591:18;;4631:40:166;;;;;;;;4547:135;4129:559;4059:629;;:::o;2705:151:167:-;2780:12;2811:38;2833:6;2841:4;2847:1;2811:21;:38::i;:::-;2804:45;2705:151;-1:-1:-1;;;2705:151:167:o;3180:392::-;3279:12;3331:5;3307:21;:29;3303:108;;;3359:41;;-1:-1:-1;;;3359:41:167;;3394:4;3359:41;;;4618:51:234;4591:18;;3359:41:167;4472:203:234;3303:108:167;3421:12;3435:23;3462:6;-1:-1:-1;;;;;3462:11:167;3481:5;3488:4;3462:31;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;3420:73:167;;-1:-1:-1;3420:73:167;-1:-1:-1;3510:55:167;3537:6;3420:73;;3510:26;:55::i;:::-;3503:62;3180:392;-1:-1:-1;;;;;;3180:392:167:o;4625:582::-;4769:12;4798:7;4793:408;;4821:19;4829:10;4821:7;:19::i;:::-;4793:408;;;5045:17;;:22;:49;;;;-1:-1:-1;;;;;;5071:18:167;;;:23;5045:49;5041:119;;;5121:24;;-1:-1:-1;;;5121:24:167;;-1:-1:-1;;;;;4636:32:234;;5121:24:167;;;4618:51:234;4591:18;;5121:24:167;4472:203:234;5041:119:167;-1:-1:-1;5180:10:167;5173:17;;5743:516;5874:17;;:21;5870:383;;6102:10;6096:17;6158:15;6145:10;6141:2;6137:19;6130:44;5870:383;6225:17;;-1:-1:-1;;;6225:17:167;;;;;;;;;;;14:347:234;81:2;75:9;123:6;111:19;;-1:-1:-1;;;;;145:34:234;;181:22;;;142:62;139:185;;;246:10;241:3;237:20;234:1;227:31;281:4;278:1;271:15;309:4;306:1;299:15;139:185;340:2;333:22;14:347;:::o;366:185::-;453:13;;-1:-1:-1;;;;;495:31:234;;485:42;;475:70;;541:1;538;531:12;475:70;366:185;;;:::o;556:681::-;618:5;666:4;654:9;649:3;645:19;641:30;638:50;;;684:1;681;674:12;638:50;717:2;711:9;759:4;747:17;;-1:-1:-1;;;;;779:34:234;;815:22;;;776:62;773:185;;;880:10;875:3;871:20;868:1;861:31;915:4;912:1;905:15;943:4;940:1;933:15;773:185;978:10;974:2;967:22;;1007:6;998:15;;1043:9;1037:16;1029:6;1022:32;1108:2;1097:9;1093:18;1087:25;1082:2;1074:6;1070:15;1063:50;1167:2;1156:9;1152:18;1146:25;1141:2;1133:6;1129:15;1122:50;1226:2;1215:9;1211:18;1205:25;1200:2;1192:6;1188:15;1181:50;;556:681;;;;:::o;1242:1960::-;1386:6;1394;1402;1410;1418;1426;1470:9;1461:7;1457:23;1500:3;1496:2;1492:12;1489:32;;;1517:1;1514;1507:12;1489:32;1540:6;1566:2;1562;1558:11;1555:31;;;1582:1;1579;1572:12;1555:31;1608:17;;:::i;:::-;1595:30;;1648:48;1686:9;1648:48;:::i;:::-;1641:5;1634:63;1729:57;1782:2;1771:9;1767:18;1729:57;:::i;:::-;1724:2;1717:5;1713:14;1706:81;1819:57;1872:2;1861:9;1857:18;1819:57;:::i;:::-;1814:2;1807:5;1803:14;1796:81;1930:2;1919:9;1915:18;1909:25;1904:2;1897:5;1893:14;1886:49;1989:3;1978:9;1974:19;1968:26;1962:3;1955:5;1951:15;1944:51;2049:3;2038:9;2034:19;2028:26;2022:3;2015:5;2011:15;2004:51;2109:3;2098:9;2094:19;2088:26;2082:3;2075:5;2071:15;2064:51;2169:3;2158:9;2154:19;2148:26;2142:3;2135:5;2131:15;2124:51;2194:3;2250:2;2239:9;2235:18;2229:25;2224:2;2217:5;2213:14;2206:49;;2274:3;2330:2;2319:9;2315:18;2309:25;2304:2;2297:5;2293:14;2286:49;;2354:3;2389:57;2442:2;2431:9;2427:18;2389:57;:::i;:::-;2373:14;;;2366:81;2466:3;2501:57;2539:18;;;2501:57;:::i;:::-;2485:14;;;2478:81;2578:3;2613:57;2651:18;;;2613:57;:::i;:::-;2597:14;;;2590:81;2690:3;2725:62;2779:7;2759:18;;;2725:62;:::i;:::-;2720:2;2713:5;2709:14;2702:86;;2807:5;2797:15;;2831:57;2884:2;2873:9;2869:18;2831:57;:::i;:::-;2821:67;;;;2907:58;2960:3;2949:9;2945:19;2907:58;:::i;:::-;2897:68;;2984:58;3037:3;3026:9;3022:19;2984:58;:::i;:::-;2974:68;;3061:58;3114:3;3103:9;3099:19;3061:58;:::i;:::-;3051:68;;3138:58;3191:3;3180:9;3176:19;3138:58;:::i;:::-;3128:68;;1242:1960;;;;;;;;:::o;3773:412::-;3902:3;3940:6;3934:13;3965:1;3975:129;3989:6;3986:1;3983:13;3975:129;;;4087:4;4071:14;;;4067:25;;4061:32;4048:11;;;4041:53;4004:12;3975:129;;;-1:-1:-1;4159:1:234;4123:16;;4148:13;;;-1:-1:-1;4123:16:234;3773:412;-1:-1:-1;3773:412:234:o;4190:277::-;4257:6;4310:2;4298:9;4289:7;4285:23;4281:32;4278:52;;;4326:1;4323;4316:12;4278:52;4358:9;4352:16;4411:5;4404:13;4397:21;4390:5;4387:32;4377:60;;4433:1;4430;4423:12;4472:203;447:1152:133;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly deployedBytecode: {
        readonly object: "0x6080604052600436106101ee5760003560e01c8063a22cb4651161010d578063daaa35fe116100a0578063e4af29d11161006f578063e4af29d1146102fe578063eac3e79914610627578063ed64bab21461065b578063f3f707071461067b578063f698da25146106af576101ee565b8063daaa35fe146105df578063dbbe8070146105f4578063ded0623114610401578063e44808bc14610607576101ee565b8063ab033ea9116100dc578063ab033ea9146102fe578063cba2e58d14610598578063cbc134341461033b578063d899e112146105ab576101ee565b8063a22cb465146104b1578063a314453114610544578063a42dce80146102fe578063a6e8a85914610564576101ee565b80633e691db91161018557806377d05ff41161015457806377d05ff4146104d1578063829555d4146104e45780639032c726146105045780639cd241af14610524576101ee565b80633e691db9146104635780634c2ac1d9146104835780634ed2d6ac146104965780637180c8ca146104b1576101ee565b80631c0f12b6116101c15780631c0f12b61461039557806321b57d53146103b557806329b23fc11461040157806330adf81f1461042f576101ee565b806301681a62146102fe57806302329a2914610320578063074a6de91461033b57806317fad7fc14610375575b3480156101fa57600080fd5b5060003660606000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316858560405161023d9291906113b4565b600060405180830381855af49150503d8060008114610278576040519150601f19603f3d011682016040523d82523d6000602084013e61027d565b606091505b509150915081156102a157604051638bb0a34b60e01b815260040160405180910390fd5b60006102ac826113c4565b90506001600160e01b03198116636e64089360e11b146102ce57815160208301fd5b8151600319810160048401908152926102ef91810160200190602401611435565b80519650602001945050505050f35b34801561030a57600080fd5b5061031e6103193660046114f7565b6106c4565b005b34801561032c57600080fd5b5061031e610319366004611522565b34801561034757600080fd5b5061035b610356366004611551565b6106f1565b604080519283526020830191909152015b60405180910390f35b34801561038157600080fd5b5061031e6103903660046115e6565b610726565b3480156103a157600080fd5b5061031e6103b036600461167b565b610758565b3480156103c157600080fd5b506103e97f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200161036c565b34801561040d57600080fd5b5061042161041c3660046116c3565b610788565b60405190815260200161036c565b34801561043b57600080fd5b506104217f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367381565b34801561046f57600080fd5b5061042161047e36600461171d565b6107bc565b61042161049136600461175a565b6107ed565b3480156104a257600080fd5b5061031e6103b03660046117be565b3480156104bd57600080fd5b5061031e6104cc366004611808565b610822565b6104216104df366004611551565b610850565b3480156104f057600080fd5b5061035b6104ff366004611841565b610883565b34801561051057600080fd5b5061031e61051f366004611888565b61089c565b34801561053057600080fd5b5061031e61053f366004611908565b6109d4565b34801561055057600080fd5b5061042161055f366004611551565b610a03565b34801561057057600080fd5b506103e97f000000000000000000000000000000000000000000000000000000000000000081565b61035b6105a63660046116c3565b610a1a565b3480156105b757600080fd5b506103e97f000000000000000000000000000000000000000000000000000000000000000081565b3480156105eb57600080fd5b50610421610a50565b61035b6106023660046116c3565b610a5f565b34801561061357600080fd5b5061031e610622366004611940565b610a8b565b34801561063357600080fd5b506103e97f000000000000000000000000000000000000000000000000000000000000000081565b34801561066757600080fd5b5061031e61067636600461199f565b610abc565b34801561068757600080fd5b506103e97f000000000000000000000000000000000000000000000000000000000000000081565b3480156106bb57600080fd5b50610421610ae5565b6106ed7f0000000000000000000000000000000000000000000000000000000000000000610b73565b5050565b60008061071d7f0000000000000000000000000000000000000000000000000000000000000000610b73565b50935093915050565b61074f7f0000000000000000000000000000000000000000000000000000000000000000610b73565b50505050505050565b6107817f0000000000000000000000000000000000000000000000000000000000000000610b73565b5050505050565b60006107b37f0000000000000000000000000000000000000000000000000000000000000000610b73565b50949350505050565b60006107e77f0000000000000000000000000000000000000000000000000000000000000000610b73565b50919050565b60006108187f0000000000000000000000000000000000000000000000000000000000000000610b73565b5095945050505050565b61084b7f0000000000000000000000000000000000000000000000000000000000000000610b73565b505050565b600061087b7f0000000000000000000000000000000000000000000000000000000000000000610b73565b509392505050565b6000806108908484610b93565b915091505b9250929050565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166108d1610ae5565b60405160248101919091527f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367360448201526001600160a01b03808c1660648301528a16608482015288151560a482015260c4810188905260ff871660e4820152610104810186905261012481018590526101440160408051601f198184030181529181526020820180516001600160e01b03166314e5f07b60e01b1790525161097a91906119b8565b600060405180830381855af49150503d80600081146109b5576040519150601f19603f3d011682016040523d82523d6000602084013e6109ba565b606091505b5091509150816109cc57805160208201fd5b805160208201f35b6109fd7f0000000000000000000000000000000000000000000000000000000000000000610b73565b50505050565b6000610a10848484610c6b565b90505b9392505050565b600080610a467f0000000000000000000000000000000000000000000000000000000000000000610b73565b5094509492505050565b6000610a5a610d02565b905090565b600080610a467f0000000000000000000000000000000000000000000000000000000000000000610b73565b610ab47f0000000000000000000000000000000000000000000000000000000000000000610b73565b505050505050565b6106ed7f0000000000000000000000000000000000000000000000000000000000000000610b73565b60408051808201825260018152603160f81b60209182015281517f2aef22f9d7df5f9d21c56d14029233f3fdaa91917727e1eb68e504d27072d6cd818301527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc681840152466060820152306080808301919091528351808303909101815260a0909101909252815191012090565b6060600080836001600160a01b031660003660405161097a9291906113b4565b60008080610ba76040850160208601611522565b15610bcc57610bc285610bbd60408701876119d4565b610d15565b9093509050610be8565b5034610be485610bdf60408701876119d4565b610e4e565b8492505b610bf0610d02565b91508015610c6357604051600090339083908381818185875af1925050503d8060008114610c3a576040519150601f19603f3d011682016040523d82523d6000602084013e610c3f565b606091505b5050905080610c61576040516312171d8360e31b815260040160405180910390fd5b505b509250929050565b600080610c788585610e83565b9050610c8381610ea1565b945084600003610c97576000915050610a13565b610ca76040840160208501611522565b15610cd657610ccf85610cbd60208601866114f7565b610cca60408701876119d4565b610f2e565b915061087b565b610cf985610ce760208601866114f7565b610cf460408701876119d4565b610fd5565b50929392505050565b6000610a5a670de0b6b3a7640000611009565b600080610d4d6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333088611059565b610dad7f0000000000000000000000000000000000000000000000000000000000000000610d7c876001611a1b565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001691906110c0565b604051636e553f6560e01b8152600481018690523060248201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636e553f65906044016020604051808303816000875af1158015610e1d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e419190611a3c565b9660009650945050505050565b61084b6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333086611059565b6000610e988383670de0b6b3a7640000611150565b90505b92915050565b6040516363737ac960e11b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063c6e6f592906024015b602060405180830381865afa158015610f0a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e9b9190611a3c565b604051635d043b2960e11b8152600481018590526001600160a01b0384811660248301523060448301526000917f00000000000000000000000000000000000000000000000000000000000000009091169063ba087652906064016020604051808303816000875af1158015610fa8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fcc9190611a3c565b95945050505050565b6109fd6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016848661116e565b6040516303d1689d60e11b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906307a2d13a90602401610eed565b6040516001600160a01b0384811660248301528381166044830152606482018390526109fd9186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b03838183161783525050505061119f565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b1790526111118482611207565b6109fd576040516001600160a01b0384811660248301526000604483015261114691869182169063095ea7b39060640161108e565b6109fd848261119f565b600082600019048411830215820261116757600080fd5b5091020490565b6040516001600160a01b0383811660248301526044820183905261084b91859182169063a9059cbb9060640161108e565b60006111b46001600160a01b038416836112aa565b905080516000141580156111d95750808060200190518101906111d79190611a55565b155b1561084b57604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b6000806000846001600160a01b03168460405161122491906119b8565b6000604051808303816000865af19150503d8060008114611261576040519150601f19603f3d011682016040523d82523d6000602084013e611266565b606091505b50915091508180156112905750805115806112905750808060200190518101906112909190611a55565b8015610fcc5750505050506001600160a01b03163b151590565b6060610e988383600084600080856001600160a01b031684866040516112d091906119b8565b60006040518083038185875af1925050503d806000811461130d576040519150601f19603f3d011682016040523d82523d6000602084013e611312565b606091505b509150915061132286838361132c565b9695505050505050565b6060826113415761133c82611388565b610a13565b815115801561135857506001600160a01b0384163b155b1561138157604051639996b31560e01b81526001600160a01b03851660048201526024016111fe565b5080610a13565b8051156113985780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b50565b8183823760009101908152919050565b805160208201516001600160e01b031980821692919060048310156113f35780818460040360031b1b83161693505b505050919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561142c578181015183820152602001611414565b50506000910152565b60006020828403121561144757600080fd5b815167ffffffffffffffff8082111561145f57600080fd5b818401915084601f83011261147357600080fd5b815181811115611485576114856113fb565b604051601f8201601f19908116603f011681019083821181831017156114ad576114ad6113fb565b816040528281528760208487010111156114c657600080fd5b6114d7836020830160208801611411565b979650505050505050565b6001600160a01b03811681146113b157600080fd5b60006020828403121561150957600080fd5b8135610a13816114e2565b80151581146113b157600080fd5b60006020828403121561153457600080fd5b8135610a1381611514565b6000606082840312156107e757600080fd5b60008060006060848603121561156657600080fd5b8335925060208401359150604084013567ffffffffffffffff81111561158b57600080fd5b6115978682870161153f565b9150509250925092565b60008083601f8401126115b357600080fd5b50813567ffffffffffffffff8111156115cb57600080fd5b6020830191508360208260051b850101111561089557600080fd5b600080600080600080608087890312156115ff57600080fd5b863561160a816114e2565b9550602087013561161a816114e2565b9450604087013567ffffffffffffffff8082111561163757600080fd5b6116438a838b016115a1565b9096509450606089013591508082111561165c57600080fd5b5061166989828a016115a1565b979a9699509497509295939492505050565b6000806000806080858703121561169157600080fd5b8435935060208501356116a3816114e2565b925060408501356116b3816114e2565b9396929550929360600135925050565b600080600080608085870312156116d957600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561170557600080fd5b6117118782880161153f565b91505092959194509250565b60006020828403121561172f57600080fd5b813567ffffffffffffffff81111561174657600080fd5b6117528482850161153f565b949350505050565b600080600080600060a0868803121561177257600080fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff8111156117a557600080fd5b6117b18882890161153f565b9150509295509295909350565b600080600080608085870312156117d457600080fd5b8435935060208501356117e6816114e2565b92506040850135915060608501356117fd816114e2565b939692955090935050565b6000806040838503121561181b57600080fd5b8235611826816114e2565b9150602083013561183681611514565b809150509250929050565b6000806040838503121561185457600080fd5b82359150602083013567ffffffffffffffff81111561187257600080fd5b61187e8582860161153f565b9150509250929050565b600080600080600080600060e0888a0312156118a357600080fd5b87356118ae816114e2565b965060208801356118be816114e2565b955060408801356118ce81611514565b945060608801359350608088013560ff811681146118eb57600080fd5b9699959850939692959460a0840135945060c09093013592915050565b60008060006060848603121561191d57600080fd5b83359250602084013561192f816114e2565b929592945050506040919091013590565b600080600080600060a0868803121561195857600080fd5b85359450602086013561196a816114e2565b9350604086013561197a816114e2565b9250606086013591506080860135611991816114e2565b809150509295509295909350565b6000602082840312156119b157600080fd5b5035919050565b600082516119ca818460208701611411565b9190910192915050565b6000808335601e198436030181126119eb57600080fd5b83018035915067ffffffffffffffff821115611a0657600080fd5b60200191503681900382131561089557600080fd5b80820180821115610e9b57634e487b7160e01b600052601160045260246000fd5b600060208284031215611a4e57600080fd5b5051919050565b600060208284031215611a6757600080fd5b8151610a138161151456fea2646970667358221220bd94e8e13e2bd82a19fd084a0e51e11948d8e71c35104eac20cdafa9c299eddf64736f6c63430008140033";
        readonly sourceMap: "447:1152:133:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6530:12:36;6684;6698:23;6725:7;-1:-1:-1;;;;;6725:20:36;6746:5;;6725:27;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6683:69;;;;6766:7;6762:76;;;6796:31;;-1:-1:-1;;;6796:31:36;;;;;;;;;;;6762:76;6847:15;6865:18;6872:10;6865:18;:::i;:::-;6847:36;-1:-1:-1;;;;;;;6897:43:36;;-1:-1:-1;;;6897:43:36;6893:160;;7017:10;7011:17;7006:2;6994:10;6990:19;6983:46;6893:160;7254:17;;-1:-1:-1;;7250:25:36;;7273:1;7228:20;;7221:55;;;7228:20;7355:31;;;;;;;;;;:::i;:::-;447:1152:133;;;-1:-1:-1;447:1152:133;;;-1:-1:-1;;;;;447:1152:133;10244:67:36;;;;;;;;;;-1:-1:-1;10244:67:36;;;;;:::i;:::-;;:::i;:::-;;9657:65;;;;;;;;;;-1:-1:-1;9657:65:36;;;;;:::i;9097:181::-;;;;;;;;;;-1:-1:-1;9097:181:36;;;;;:::i;:::-;;:::i;:::-;;;;3564:25:234;;;3620:2;3605:18;;3598:34;;;;3537:18;9097:181:36;;;;;;;;11137:167;;;;;;;;;;-1:-1:-1;11137:167:36;;;;;:::i;:::-;;:::i;10377:102::-;;;;;;;;;;-1:-1:-1;10377:102:36;;;;;:::i;:::-;;:::i;4500:32::-;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;5796:32:234;;;5778:51;;5766:2;5751:18;4500:32:36;5632:203:234;8189:177:36;;;;;;;;;;-1:-1:-1;8189:177:36;;;;;:::i;:::-;;:::i;:::-;;;6553:25:234;;;6541:2;6526:18;8189:177:36;6407::234;5226:174:36;;;;;;;;;;;;5276:124;5226:174;;9479:136;;;;;;;;;;-1:-1:-1;9479:136:36;;;;;:::i;:::-;;:::i;8635:204::-;;;;;;:::i;:::-;;:::i;10726:107::-;;;;;;;;;;-1:-1:-1;10726:107:36;;;;;:::i;10124:78::-;;;;;;;;;;-1:-1:-1;10124:78:36;;;;;:::i;:::-;;:::i;8425:168::-;;;;;;:::i;:::-;;:::i;879:209:133:-;;;;;;;;;;-1:-1:-1;879:209:133;;;;;:::i;:::-;;:::i;12469:869:36:-;;;;;;;;;;-1:-1:-1;12469:869:36;;;;;:::i;:::-;;:::i;11003:92::-;;;;;;;;;;-1:-1:-1;11003:92:36;;;;;:::i;:::-;;:::i;1094:231:133:-;;;;;;;;;;-1:-1:-1;1094:231:133;;;;;:::i;:::-;;:::i;4802:32:36:-;;;;;;;;;;;;;;;7482:192;;;;;;:::i;:::-;;:::i;4953:32::-;;;;;;;;;;;;;;;1448:149:133;;;;;;;;;;;;;:::i;7954:193:36:-;;;;;;:::i;:::-;;:::i;10521:163::-;;;;;;;;;;-1:-1:-1;10521:163:36;;;;;:::i;:::-;;:::i;4651:32::-;;;;;;;;;;;;;;;9345:73;;;;;;;;;;-1:-1:-1;9345:73:36;;;;;:::i;:::-;;:::i;5104:32::-;;;;;;;;;;;;;;;13619:426;;;;;;;;;;;;;:::i;10244:67::-;10286:18;10296:7;10286:9;:18::i;:::-;;10244:67;:::o;9097:181::-;9225:7;9234;9253:18;9263:7;9253:9;:18::i;:::-;;9097:181;;;;;;:::o;11137:167::-;11279:18;11289:7;11279:9;:18::i;:::-;;11137:167;;;;;;:::o;10377:102::-;10454:18;10464:7;10454:9;:18::i;:::-;;10377:102;;;;:::o;8189:177::-;8322:7;8341:18;8351:7;8341:9;:18::i;:::-;;8189:177;;;;;;:::o;9479:136::-;9571:7;9590:18;9600:7;9590:9;:18::i;:::-;;9479:136;;;:::o;8635:204::-;8795:7;8814:18;8824:7;8814:9;:18::i;:::-;;8635:204;;;;;;;:::o;10124:78::-;10177:18;10187:7;10177:9;:18::i;:::-;;10124:78;;:::o;8425:168::-;8549:7;8568:18;8578:7;8568:9;:18::i;:::-;;8425:168;;;;;:::o;879:209:133:-;990:20;1012:23;1054:27;1063:7;1072:8;1054;:27::i;:::-;1047:34;;;;879:209;;;;;;:::o;12469:869:36:-;12670:12;12684:19;12707:7;-1:-1:-1;;;;;12707:20:36;12843:17;:15;:17::i;:::-;12741:374;;;;;11955:25:234;;;;5276:124:36;11996:18:234;;;11989:34;-1:-1:-1;;;;;12097:15:234;;;12077:18;;;12070:43;12149:15;;12129:18;;;12122:43;12209:14;;12202:22;12181:19;;;12174:51;12241:19;;;12234:35;;;12318:4;12306:17;;12285:19;;;12278:46;12340:19;;;12333:35;;;12384:19;;;12377:35;;;11927:19;;12741:374:36;;;-1:-1:-1;;12741:374:36;;;;;;;;;;;;;;-1:-1:-1;;;;;12741:374:36;-1:-1:-1;;;12741:374:36;;;12707:418;;;12741:374;12707:418;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12669:456;;;;13140:7;13135:117;;13220:6;13214:13;13209:2;13201:6;13197:15;13190:38;13135:117;13314:6;13308:13;13303:2;13295:6;13291:15;13284:38;11003:92;11070:18;11080:7;11070:9;:18::i;:::-;;11003:92;;;:::o;1094:231:133:-;1235:23;1277:41;1287:7;1296:11;1309:8;1277:9;:41::i;:::-;1270:48;;1094:231;;;;;;:::o;7482:192:36:-;7621:7;7630;7649:18;7659:7;7649:9;:18::i;:::-;;7482:192;;;;;;;:::o;1448:149:133:-;1523:23;1569:21;:19;:21::i;:::-;1562:28;;1448:149;:::o;7954:193:36:-;8094:7;8103;8122:18;8132:7;8122:9;:18::i;10521:163::-;10659:18;10669:7;10659:9;:18::i;:::-;;10521:163;;;;;:::o;9345:73::-;9393:18;9403:7;9393:9;:18::i;13619:426::-;13925:10;;;;;;;;;;;-1:-1:-1;;;13925:10:36;;;;;13732:292;;13764:129;13732:292;;;12946:25:234;13915:21:36;12987:18:234;;;12980:34;13958:13:36;13030:18:234;;;13023:34;14001:4:36;13073:18:234;;;;13066:60;;;;13732:292:36;;;;;;;;;;12918:19:234;;;;13732:292:36;;;13705:333;;;;;;13619:426::o;14323:359::-;14377:12;14402;14416:19;14439:7;-1:-1:-1;;;;;14439:20:36;14460:8;;14439:30;;;;;;;:::i;1926:1509:112:-;2040:20;;;2206:15;;;;;;;;:::i;:::-;2202:812;;;2306:91;2340:7;2365:18;;;;:8;:18;:::i;:::-;2306:16;:91::i;:::-;2281:116;;-1:-1:-1;2281:116:112;-1:-1:-1;2202:812:112;;;-1:-1:-1;2553:9:112;2623:47;2642:7;2651:18;;;;:8;:18;:::i;:::-;2623;:47::i;:::-;2996:7;2981:22;;2202:812;3086:21;:19;:21::i;:::-;3068:39;-1:-1:-1;3184:10:112;;3180:200;;3229:45;;3211:12;;3237:10;;3262:6;;3211:12;3229:45;3211:12;3229:45;3262:6;3237:10;3229:45;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3210:64;;;3293:7;3288:82;;3327:28;;-1:-1:-1;;;3327:28:112;;;;;;;;;;;3288:82;3196:184;3180:200;3390:38;1926:1509;;;;;:::o;4144:1323::-;4293:23;;4630:33;:7;4646:16;4630:15;:33::i;:::-;4609:54;;4683:28;4700:10;4683:16;:28::i;:::-;4673:38;;4799:7;4810:1;4799:12;4795:51;;4834:1;4827:8;;;;;4795:51;4940:15;;;;;;;;:::i;:::-;4936:492;;;5036:130;5071:7;5096:20;;;;:8;:20;:::i;:::-;5134:18;;;;:8;:18;:::i;:::-;5036:17;:130::i;:::-;5018:148;;4936:492;;;5246:132;5283:7;5308:20;;;;:8;:20;:::i;:::-;5346:18;;;;:8;:18;:::i;:::-;5246:19;:132::i;:::-;-1:-1:-1;5410:7:112;;4144:1323;-1:-1:-1;;;4144:1323:112:o;5594:150::-;5672:23;5718:19;193:4:122;5718:14:112;:19::i;1321:908:44:-;1443:7;;1519:129;-1:-1:-1;;;;;1533:10:44;1519:43;1576:10;1608:4;1627:11;1519:43;:129::i;:::-;1930:118;1991:17;2023:15;:11;2037:1;2023:15;:::i;:::-;-1:-1:-1;;;;;1944:10:44;1930:39;;:118;:39;:118::i;:::-;2081:106;;-1:-1:-1;;;2081:106:44;;;;;14274:25:234;;;2172:4:44;14315:18:234;;;14308:60;2058:20:44;;2098:17;-1:-1:-1;;;;;2081:44:44;;;;14247:18:234;;2081:106:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2058:129;2220:1;;-1:-1:-1;1321:908:44;-1:-1:-1;;;;;1321:908:44:o;2347:326::-;2529:137;-1:-1:-1;;;;;2543:17:44;2529:50;2593:10;2625:4;2644:12;2529:50;:137::i;1610:118:122:-;1672:7;1699:21;1710:1;1713;193:4;1699:10;:21::i;:::-;1691:30;;1610:118;;;;;:::o;4813:203:44:-;4944:65;;-1:-1:-1;;;4944:65:44;;;;;6553:25:234;;;4906:7:44;;4961:17;-1:-1:-1;;;;;4944:52:44;;;;6526:18:234;;4944:65:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;2969:490::-;3287:132;;-1:-1:-1;;;3287:132:44;;;;;14770:25:234;;;-1:-1:-1;;;;;14869:15:234;;;14849:18;;;14842:43;3404:4:44;14901:18:234;;;14894:43;3123:23:44;;3304:17;3287:43;;;;;;14743:18:234;;3287:132:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;3269:150;2969:490;-1:-1:-1;;;;;2969:490:44:o;3701:325::-;3911:108;-1:-1:-1;;;;;3925:17:44;3911:46;3971:12;3997;3911:46;:108::i;4450:203::-;4580:66;;-1:-1:-1;;;4580:66:44;;;;;6553:25:234;;;4542:7:44;;4597:17;-1:-1:-1;;;;;4580:52:44;;;;6526:18:234;;4580:66:44;6407:177:234;1702:188:166;1829:53;;-1:-1:-1;;;;;15206:15:234;;;1829:53:166;;;15188:34:234;15258:15;;;15238:18;;;15231:43;15290:18;;;15283:34;;;1802:81:166;;1822:5;;1844:18;;;;;15123::234;;1829:53:166;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;1829:53:166;;;;;;;;;;;1802:19;:81::i;3296:380::-;3411:47;;;-1:-1:-1;;;;;15520:32:234;;3411:47:166;;;15502:51:234;15569:18;;;;15562:34;;;3411:47:166;;;;;;;;;;15475:18:234;;;;3411:47:166;;;;;;;;-1:-1:-1;;;;;3411:47:166;-1:-1:-1;;;3411:47:166;;;3474:44;3426:13;3411:47;3474:23;:44::i;:::-;3469:201;;3561:43;;-1:-1:-1;;;;;15520:32:234;;;3561:43:166;;;15502:51:234;3601:1:166;15569:18:234;;;15562:34;3534:71:166;;3554:5;;3576:13;;;;;15475:18:234;;3561:43:166;15328:274:234;3534:71:166;3619:40;3639:5;3646:12;3619:19;:40::i;898:556:122:-;1014:9;1279:1;-1:-1:-1;;1262:19:122;1259:1;1256:26;1253:1;1249:34;1242:42;1229:11;1225:60;1198:146;;1328:1;1325;1318:12;1198:146;-1:-1:-1;1415:9:122;;1411:27;;898:556::o;1303:160:166:-;1412:43;;-1:-1:-1;;;;;15520:32:234;;;1412:43:166;;;15502:51:234;15569:18;;;15562:34;;;1385:71:166;;1405:5;;1427:14;;;;;15475:18:234;;1412:43:166;15328:274:234;4059:629:166;4478:23;4504:33;-1:-1:-1;;;;;4504:27:166;;4532:4;4504:27;:33::i;:::-;4478:59;;4551:10;:17;4572:1;4551:22;;:57;;;;;4589:10;4578:30;;;;;;;;;;;;:::i;:::-;4577:31;4551:57;4547:135;;;4631:40;;-1:-1:-1;;;4631:40:166;;-1:-1:-1;;;;;5796:32:234;;4631:40:166;;;5778:51:234;5751:18;;4631:40:166;;;;;;;;5189:578;5272:4;5574:12;5588:23;5623:5;-1:-1:-1;;;;;5615:19:166;5635:4;5615:25;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5573:67;;;;5657:7;:69;;;;-1:-1:-1;5669:17:166;;:22;;:56;;;5706:10;5695:30;;;;;;;;;;;;:::i;:::-;5657:103;;;;-1:-1:-1;;;;;;;;;;5730:26:166;;:30;;;5189:578::o;2705:151:167:-;2780:12;2811:38;2833:6;2841:4;2847:1;2780:12;3421;3435:23;3462:6;-1:-1:-1;;;;;3462:11:167;3481:5;3488:4;3462:31;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3420:73;;;;3510:55;3537:6;3545:7;3554:10;3510:26;:55::i;:::-;3503:62;3180:392;-1:-1:-1;;;;;;3180:392:167:o;4625:582::-;4769:12;4798:7;4793:408;;4821:19;4829:10;4821:7;:19::i;:::-;4793:408;;;5045:17;;:22;:49;;;;-1:-1:-1;;;;;;5071:18:167;;;:23;5045:49;5041:119;;;5121:24;;-1:-1:-1;;;5121:24:167;;-1:-1:-1;;;;;5796:32:234;;5121:24:167;;;5778:51:234;5751:18;;5121:24:167;5632:203:234;5041:119:167;-1:-1:-1;5180:10:167;5173:17;;5743:516;5874:17;;:21;5870:383;;6102:10;6096:17;6158:15;6145:10;6141:2;6137:19;6130:44;5870:383;6225:17;;-1:-1:-1;;;6225:17:167;;;;;;;;;;;5870:383;5743:516;:::o;14:271:234:-;197:6;189;184:3;171:33;153:3;223:16;;248:13;;;223:16;14:271;-1:-1:-1;14:271:234:o;290:361::-;407:12;;455:4;444:16;;438:23;-1:-1:-1;;;;;;518:11:234;;;;407:12;438:23;552:1;541:13;;538:107;;;632:2;626;616:6;613:1;609:14;606:1;602:22;598:31;594:2;590:40;586:49;577:58;;538:107;;;;290:361;;;:::o;656:127::-;717:10;712:3;708:20;705:1;698:31;748:4;745:1;738:15;772:4;769:1;762:15;788:250;873:1;883:113;897:6;894:1;891:13;883:113;;;973:11;;;967:18;954:11;;;947:39;919:2;912:10;883:113;;;-1:-1:-1;;1030:1:234;1012:16;;1005:27;788:250::o;1043:896::-;1122:6;1175:2;1163:9;1154:7;1150:23;1146:32;1143:52;;;1191:1;1188;1181:12;1143:52;1224:9;1218:16;1253:18;1294:2;1286:6;1283:14;1280:34;;;1310:1;1307;1300:12;1280:34;1348:6;1337:9;1333:22;1323:32;;1393:7;1386:4;1382:2;1378:13;1374:27;1364:55;;1415:1;1412;1405:12;1364:55;1444:2;1438:9;1466:2;1462;1459:10;1456:36;;;1472:18;;:::i;:::-;1547:2;1541:9;1515:2;1601:13;;-1:-1:-1;;1597:22:234;;;1621:2;1593:31;1589:40;1577:53;;;1645:18;;;1665:22;;;1642:46;1639:72;;;1691:18;;:::i;:::-;1731:10;1727:2;1720:22;1766:2;1758:6;1751:18;1806:7;1801:2;1796;1792;1788:11;1784:20;1781:33;1778:53;;;1827:1;1824;1817:12;1778:53;1840:68;1905:2;1900;1892:6;1888:15;1883:2;1879;1875:11;1840:68;:::i;:::-;1927:6;1043:896;-1:-1:-1;;;;;;;1043:896:234:o;1944:139::-;-1:-1:-1;;;;;2027:31:234;;2017:42;;2007:70;;2073:1;2070;2063:12;2088:270;2162:6;2215:2;2203:9;2194:7;2190:23;2186:32;2183:52;;;2231:1;2228;2221:12;2183:52;2270:9;2257:23;2289:39;2322:5;2289:39;:::i;2363:118::-;2449:5;2442:13;2435:21;2428:5;2425:32;2415:60;;2471:1;2468;2461:12;2486:241;2542:6;2595:2;2583:9;2574:7;2570:23;2566:32;2563:52;;;2611:1;2608;2601:12;2563:52;2650:9;2637:23;2669:28;2691:5;2669:28;:::i;2732:155::-;2792:5;2837:2;2828:6;2823:3;2819:16;2815:25;2812:45;;;2853:1;2850;2843:12;2892:493;2997:6;3005;3013;3066:2;3054:9;3045:7;3041:23;3037:32;3034:52;;;3082:1;3079;3072:12;3034:52;3118:9;3105:23;3095:33;;3175:2;3164:9;3160:18;3147:32;3137:42;;3230:2;3219:9;3215:18;3202:32;3257:18;3249:6;3246:30;3243:50;;;3289:1;3286;3279:12;3243:50;3312:67;3371:7;3362:6;3351:9;3347:22;3312:67;:::i;:::-;3302:77;;;2892:493;;;;;:::o;3643:367::-;3706:8;3716:6;3770:3;3763:4;3755:6;3751:17;3747:27;3737:55;;3788:1;3785;3778:12;3737:55;-1:-1:-1;3811:20:234;;3854:18;3843:30;;3840:50;;;3886:1;3883;3876:12;3840:50;3923:4;3915:6;3911:17;3899:29;;3983:3;3976:4;3966:6;3963:1;3959:14;3951:6;3947:27;3943:38;3940:47;3937:67;;;4000:1;3997;3990:12;4015:1066;4155:6;4163;4171;4179;4187;4195;4248:3;4236:9;4227:7;4223:23;4219:33;4216:53;;;4265:1;4262;4255:12;4216:53;4304:9;4291:23;4323:39;4356:5;4323:39;:::i;:::-;4381:5;-1:-1:-1;4438:2:234;4423:18;;4410:32;4451:41;4410:32;4451:41;:::i;:::-;4511:7;-1:-1:-1;4569:2:234;4554:18;;4541:32;4592:18;4622:14;;;4619:34;;;4649:1;4646;4639:12;4619:34;4688:70;4750:7;4741:6;4730:9;4726:22;4688:70;:::i;:::-;4777:8;;-1:-1:-1;4662:96:234;-1:-1:-1;4865:2:234;4850:18;;4837:32;;-1:-1:-1;4881:16:234;;;4878:36;;;4910:1;4907;4900:12;4878:36;;4949:72;5013:7;5002:8;4991:9;4987:24;4949:72;:::i;:::-;4015:1066;;;;-1:-1:-1;4015:1066:234;;-1:-1:-1;4015:1066:234;;5040:8;;4015:1066;-1:-1:-1;;;4015:1066:234:o;5086:541::-;5172:6;5180;5188;5196;5249:3;5237:9;5228:7;5224:23;5220:33;5217:53;;;5266:1;5263;5256:12;5217:53;5302:9;5289:23;5279:33;;5362:2;5351:9;5347:18;5334:32;5375:39;5408:5;5375:39;:::i;:::-;5433:5;-1:-1:-1;5490:2:234;5475:18;;5462:32;5503:41;5462:32;5503:41;:::i;:::-;5086:541;;;;-1:-1:-1;5563:7:234;;5617:2;5602:18;5589:32;;-1:-1:-1;;5086:541:234:o;5840:562::-;5954:6;5962;5970;5978;6031:3;6019:9;6010:7;6006:23;6002:33;5999:53;;;6048:1;6045;6038:12;5999:53;6084:9;6071:23;6061:33;;6141:2;6130:9;6126:18;6113:32;6103:42;;6192:2;6181:9;6177:18;6164:32;6154:42;;6247:2;6236:9;6232:18;6219:32;6274:18;6266:6;6263:30;6260:50;;;6306:1;6303;6296:12;6260:50;6329:67;6388:7;6379:6;6368:9;6364:22;6329:67;:::i;:::-;6319:77;;;5840:562;;;;;;;:::o;6771:357::-;6858:6;6911:2;6899:9;6890:7;6886:23;6882:32;6879:52;;;6927:1;6924;6917:12;6879:52;6967:9;6954:23;7000:18;6992:6;6989:30;6986:50;;;7032:1;7029;7022:12;6986:50;7055:67;7114:7;7105:6;7094:9;7090:22;7055:67;:::i;:::-;7045:77;6771:357;-1:-1:-1;;;;6771:357:234:o;7133:631::-;7256:6;7264;7272;7280;7288;7341:3;7329:9;7320:7;7316:23;7312:33;7309:53;;;7358:1;7355;7348:12;7309:53;7394:9;7381:23;7371:33;;7451:2;7440:9;7436:18;7423:32;7413:42;;7502:2;7491:9;7487:18;7474:32;7464:42;;7553:2;7542:9;7538:18;7525:32;7515:42;;7608:3;7597:9;7593:19;7580:33;7636:18;7628:6;7625:30;7622:50;;;7668:1;7665;7658:12;7622:50;7691:67;7750:7;7741:6;7730:9;7726:22;7691:67;:::i;:::-;7681:77;;;7133:631;;;;;;;;:::o;7769:541::-;7855:6;7863;7871;7879;7932:3;7920:9;7911:7;7907:23;7903:33;7900:53;;;7949:1;7946;7939:12;7900:53;7985:9;7972:23;7962:33;;8045:2;8034:9;8030:18;8017:32;8058:39;8091:5;8058:39;:::i;:::-;8116:5;-1:-1:-1;8168:2:234;8153:18;;8140:32;;-1:-1:-1;8224:2:234;8209:18;;8196:32;8237:41;8196:32;8237:41;:::i;:::-;7769:541;;;;-1:-1:-1;7769:541:234;;-1:-1:-1;;7769:541:234:o;8315:390::-;8380:6;8388;8441:2;8429:9;8420:7;8416:23;8412:32;8409:52;;;8457:1;8454;8447:12;8409:52;8496:9;8483:23;8515:39;8548:5;8515:39;:::i;:::-;8573:5;-1:-1:-1;8630:2:234;8615:18;;8602:32;8643:30;8602:32;8643:30;:::i;:::-;8692:7;8682:17;;;8315:390;;;;;:::o;8710:425::-;8806:6;8814;8867:2;8855:9;8846:7;8842:23;8838:32;8835:52;;;8883:1;8880;8873:12;8835:52;8919:9;8906:23;8896:33;;8980:2;8969:9;8965:18;8952:32;9007:18;8999:6;8996:30;8993:50;;;9039:1;9036;9029:12;8993:50;9062:67;9121:7;9112:6;9101:9;9097:22;9062:67;:::i;:::-;9052:77;;;8710:425;;;;;:::o;9140:912::-;9248:6;9256;9264;9272;9280;9288;9296;9349:3;9337:9;9328:7;9324:23;9320:33;9317:53;;;9366:1;9363;9356:12;9317:53;9405:9;9392:23;9424:39;9457:5;9424:39;:::i;:::-;9482:5;-1:-1:-1;9539:2:234;9524:18;;9511:32;9552:41;9511:32;9552:41;:::i;:::-;9612:7;-1:-1:-1;9671:2:234;9656:18;;9643:32;9684:30;9643:32;9684:30;:::i;:::-;9733:7;-1:-1:-1;9787:2:234;9772:18;;9759:32;;-1:-1:-1;9843:3:234;9828:19;;9815:33;9892:4;9879:18;;9867:31;;9857:59;;9912:1;9909;9902:12;9857:59;9140:912;;;;-1:-1:-1;9140:912:234;;;;9935:7;9989:3;9974:19;;9961:33;;-1:-1:-1;10041:3:234;10026:19;;;10013:33;;9140:912;-1:-1:-1;;9140:912:234:o;10057:391::-;10134:6;10142;10150;10203:2;10191:9;10182:7;10178:23;10174:32;10171:52;;;10219:1;10216;10209:12;10171:52;10255:9;10242:23;10232:33;;10315:2;10304:9;10300:18;10287:32;10328:39;10361:5;10328:39;:::i;:::-;10057:391;;10386:5;;-1:-1:-1;;;10438:2:234;10423:18;;;;10410:32;;10057:391::o;10713:691::-;10808:6;10816;10824;10832;10840;10893:3;10881:9;10872:7;10868:23;10864:33;10861:53;;;10910:1;10907;10900:12;10861:53;10946:9;10933:23;10923:33;;11006:2;10995:9;10991:18;10978:32;11019:39;11052:5;11019:39;:::i;:::-;11077:5;-1:-1:-1;11134:2:234;11119:18;;11106:32;11147:41;11106:32;11147:41;:::i;:::-;11207:7;-1:-1:-1;11261:2:234;11246:18;;11233:32;;-1:-1:-1;11317:3:234;11302:19;;11289:33;11331:41;11289:33;11331:41;:::i;:::-;11391:7;11381:17;;;10713:691;;;;;;;;:::o;11409:180::-;11468:6;11521:2;11509:9;11500:7;11496:23;11492:32;11489:52;;;11537:1;11534;11527:12;11489:52;-1:-1:-1;11560:23:234;;11409:180;-1:-1:-1;11409:180:234:o;12423:287::-;12552:3;12590:6;12584:13;12606:66;12665:6;12660:3;12653:4;12645:6;12641:17;12606:66;:::i;:::-;12688:16;;;;;12423:287;-1:-1:-1;;12423:287:234:o;13137:521::-;13214:4;13220:6;13280:11;13267:25;13374:2;13370:7;13359:8;13343:14;13339:29;13335:43;13315:18;13311:68;13301:96;;13393:1;13390;13383:12;13301:96;13420:33;;13472:20;;;-1:-1:-1;13515:18:234;13504:30;;13501:50;;;13547:1;13544;13537:12;13501:50;13580:4;13568:17;;-1:-1:-1;13611:14:234;13607:27;;;13597:38;;13594:58;;;13648:1;13645;13638:12;13873:222;13938:9;;;13959:10;;;13956:133;;;14011:10;14006:3;14002:20;13999:1;13992:31;14046:4;14043:1;14036:15;14074:4;14071:1;14064:15;14379:184;14449:6;14502:2;14490:9;14481:7;14477:23;14473:32;14470:52;;;14518:1;14515;14508:12;14470:52;-1:-1:-1;14541:16:234;;14379:184;-1:-1:-1;14379:184:234:o;15894:245::-;15961:6;16014:2;16002:9;15993:7;15989:23;15985:32;15982:52;;;16030:1;16027;16020:12;15982:52;16062:9;16056:16;16081:28;16103:5;16081:28;:::i";
        readonly linkReferences: {};
        readonly immutableReferences: {
            readonly "17788": readonly [{
                readonly start: 3365;
                readonly length: 32;
            }, {
                readonly start: 3462;
                readonly length: 32;
            }];
            readonly "17792": readonly [{
                readonly start: 3410;
                readonly length: 32;
            }, {
                readonly start: 3532;
                readonly length: 32;
            }, {
                readonly start: 3675;
                readonly length: 32;
            }, {
                readonly start: 3770;
                readonly length: 32;
            }, {
                readonly start: 3933;
                readonly length: 32;
            }, {
                readonly start: 4066;
                readonly length: 32;
            }, {
                readonly start: 4130;
                readonly length: 32;
            }];
            readonly "3944": readonly [{
                readonly start: 517;
                readonly length: 32;
            }, {
                readonly start: 967;
                readonly length: 32;
            }, {
                readonly start: 1737;
                readonly length: 32;
            }, {
                readonly start: 1835;
                readonly length: 32;
            }, {
                readonly start: 1885;
                readonly length: 32;
            }, {
                readonly start: 1987;
                readonly length: 32;
            }, {
                readonly start: 2087;
                readonly length: 32;
            }, {
                readonly start: 2209;
                readonly length: 32;
            }, {
                readonly start: 2521;
                readonly length: 32;
            }, {
                readonly start: 2704;
                readonly length: 32;
            }];
            readonly "3947": readonly [{
                readonly start: 1593;
                readonly length: 32;
            }, {
                readonly start: 1785;
                readonly length: 32;
            }, {
                readonly start: 2036;
                readonly length: 32;
            }];
            readonly "3950": readonly [{
                readonly start: 1398;
                readonly length: 32;
            }, {
                readonly start: 1935;
                readonly length: 32;
            }];
            readonly "3953": readonly [{
                readonly start: 1469;
                readonly length: 32;
            }, {
                readonly start: 2135;
                readonly length: 32;
            }, {
                readonly start: 2594;
                readonly length: 32;
            }];
            readonly "3956": readonly [{
                readonly start: 1677;
                readonly length: 32;
            }, {
                readonly start: 2663;
                readonly length: 32;
            }, {
                readonly start: 2753;
                readonly length: 32;
            }];
        };
    };
    readonly methodIdentifiers: {
        readonly "PERMIT_TYPEHASH()": "30adf81f";
        readonly "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": "4c2ac1d9";
        readonly "batchTransferFrom(address,address,uint256[],uint256[])": "17fad7fc";
        readonly "checkpoint(uint256)": "ed64bab2";
        readonly "closeLong(uint256,uint256,uint256,(address,bool,bytes))": "ded06231";
        readonly "closeShort(uint256,uint256,uint256,(address,bool,bytes))": "29b23fc1";
        readonly "collectGovernanceFee((address,bool,bytes))": "3e691db9";
        readonly "deposit(uint256,(address,bool,bytes))": "829555d4";
        readonly "domainSeparator()": "f698da25";
        readonly "initialize(uint256,uint256,(address,bool,bytes))": "77d05ff4";
        readonly "openLong(uint256,uint256,uint256,(address,bool,bytes))": "cba2e58d";
        readonly "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070";
        readonly "pause(bool)": "02329a29";
        readonly "permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)": "9032c726";
        readonly "pricePerVaultShare()": "daaa35fe";
        readonly "redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))": "074a6de9";
        readonly "removeLiquidity(uint256,uint256,(address,bool,bytes))": "cbc13434";
        readonly "setApproval(uint256,address,uint256)": "9cd241af";
        readonly "setApprovalBridge(uint256,address,uint256,address)": "4ed2d6ac";
        readonly "setApprovalForAll(address,bool)": "a22cb465";
        readonly "setFeeCollector(address)": "a42dce80";
        readonly "setGovernance(address)": "ab033ea9";
        readonly "setPauser(address,bool)": "7180c8ca";
        readonly "setSweepCollector(address)": "e4af29d1";
        readonly "sweep(address)": "01681a62";
        readonly "target0()": "21b57d53";
        readonly "target1()": "eac3e799";
        readonly "target2()": "a6e8a859";
        readonly "target3()": "d899e112";
        readonly "target4()": "f3f70707";
        readonly "transferFrom(uint256,address,address,uint256)": "1c0f12b6";
        readonly "transferFromBridge(uint256,address,address,uint256,address)": "e44808bc";
        readonly "withdraw(uint256,uint256,(address,bool,bytes))": "a3144531";
    };
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"contract IERC20\",\"name\":\"vaultSharesToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"sweepCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolConfig\",\"name\":\"_config\",\"type\":\"tuple\"},{\"internalType\":\"address\",\"name\":\"_target0\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_target1\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_target2\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_target3\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_target4\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"name\":\"AddressEmptyCode\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"AddressInsufficientBalance\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FailedInnerCall\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"}],\"name\":\"SafeERC20FailedOperation\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"TransferFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnexpectedSuccess\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"basePayment\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fees\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newFeeCollector\",\"type\":\"address\"}],\"name\":\"FeeCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseProceeds\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"}],\"name\":\"PauseStatusUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"name\":\"Sweep\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newSweepCollector\",\"type\":\"address\"}],\"name\":\"SweepCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"stateMutability\":\"nonpayable\",\"type\":\"fallback\"},{\"inputs\":[],\"name\":\"PERMIT_TYPEHASH\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"addLiquidity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"name\":\"batchTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"checkpoint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"closeLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"closeShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"collectGovernanceFee\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"deposit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"sharesMinted\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"domainSeparator\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"initialize\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"openLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"openShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"name\":\"pause\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_approved\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permitForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"pricePerVaultShare\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"redeemWithdrawalShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"removeLiquidity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"setApproval\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"setApprovalBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"setFeeCollector\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"setGovernance\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"name\":\"setPauser\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"setSweepCollector\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"sweep\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target0\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target1\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target2\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target3\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target4\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"transferFromBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_shares\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_sharePrice\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"withdraw\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"amountWithdrawn\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"errors\":{\"AddressEmptyCode(address)\":[{\"details\":\"There's no code at `target` (it is not a contract).\"}],\"AddressInsufficientBalance(address)\":[{\"details\":\"The ETH balance of the account is not enough to perform the operation.\"}],\"FailedInnerCall()\":[{\"details\":\"A call to an address target failed. The target may have reverted.\"}],\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}],\"SafeERC20FailedOperation(address)\":[{\"details\":\"An operation with an ERC20 token failed.\"}]},\"kind\":\"dev\",\"methods\":{\"addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_contribution\":\"The amount of capital to supply. The units of this        quantity are either base or vault shares, depending on the value        of `_options.asBase`.\",\"_maxApr\":\"The maximum APR at which the LP is willing to supply.\",\"_minApr\":\"The minimum APR at which the LP is willing to supply.\",\"_minLpSharePrice\":\"The minimum LP share price the LP is willing        to accept for their shares. LPs incur negative slippage when        adding liquidity if there is a net curve position in the market,        so this allows LPs to protect themselves from high levels of        slippage. The units of this quantity are either base or vault        shares, depending on the value of `_options.asBase`.\",\"_options\":\"The options that configure how the operation is settled.\"},\"returns\":{\"_0\":\"The LP shares received by the LP.\"}},\"batchTransferFrom(address,address,uint256[],uint256[])\":{\"params\":{\"from\":\"The source account.\",\"ids\":\"The array of token ids of the asset to transfer.\",\"to\":\"The destination account.\",\"values\":\"The amount of each token to transfer.\"}},\"checkpoint(uint256)\":{\"params\":{\"_checkpointTime\":\"The time of the checkpoint to create.\"}},\"closeLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_bondAmount\":\"The amount of longs to close.\",\"_maturityTime\":\"The maturity time of the long.\",\"_minOutput\":\"The minimum proceeds the trader will accept. The units        of this quantity are either base or vault shares, depending on        the value of `_options.asBase`.\",\"_options\":\"The options that configure how the trade is settled.\"},\"returns\":{\"_0\":\"The proceeds the user receives. The units of this         quantity are either base or vault shares, depending on the value         of `_options.asBase`.\"}},\"closeShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_bondAmount\":\"The amount of shorts to close.\",\"_maturityTime\":\"The maturity time of the short.\",\"_minOutput\":\"The minimum output of this trade. The units of this        quantity are either base or vault shares, depending on the value        of `_options.asBase`.\",\"_options\":\"The options that configure how the trade is settled.\"},\"returns\":{\"_0\":\"The proceeds of closing this short. The units of this         quantity are either base or vault shares, depending on the value         of `_options.asBase`.\"}},\"collectGovernanceFee((address,bool,bytes))\":{\"params\":{\"_options\":\"The options that configure how the fees are settled.\"},\"returns\":{\"_0\":\"The governance fees collected. The units of this         quantity are either base or vault shares, depending on the value         of `_options.asBase`.\"}},\"domainSeparator()\":{\"returns\":{\"_0\":\"The EIP712 domain separator.\"}},\"initialize(uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_apr\":\"The target APR.\",\"_contribution\":\"The amount of capital to supply. The units of this        quantity are either base or vault shares, depending on the value        of `_options.asBase`.\",\"_options\":\"The options that configure how the operation is settled.\"},\"returns\":{\"_0\":\"The initial number of LP shares created.\"}},\"openLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_amount\":\"The amount of capital provided to open the long. The        units of this quantity are either base or vault shares, depending        on the value of `_options.asBase`.\",\"_minOutput\":\"The minimum number of bonds to receive.\",\"_minVaultSharePrice\":\"The minimum vault share price at which to        open the long. This allows traders to protect themselves from        opening a long in a checkpoint where negative interest has        accrued.\",\"_options\":\"The options that configure how the trade is settled.\"},\"returns\":{\"_0\":\"The maturity time of the bonds.\",\"_1\":\"The amount of bonds the user received.\"}},\"openShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_bondAmount\":\"The amount of bonds to short.\",\"_maxDeposit\":\"The most the user expects to deposit for this trade.        The units of this quantity are either base or vault shares,        depending on the value of `_options.asBase`.\",\"_minVaultSharePrice\":\"The minimum vault share price at which to open        the short. This allows traders to protect themselves from opening        a short in a checkpoint where negative interest has accrued.\",\"_options\":\"The options that configure how the trade is settled.\"},\"returns\":{\"_0\":\"The maturity time of the short.\",\"_1\":\"The amount the user deposited for this trade. The units         of this quantity are either base or vault shares, depending on         the value of `_options.asBase`.\"}},\"pause(bool)\":{\"params\":{\"_status\":\"True to pause all deposits and false to unpause them.\"}},\"permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"details\":\"The signature for this function follows EIP 712 standard and should      be generated with the eth_signTypedData JSON RPC call instead of      the eth_sign JSON RPC call. If using out of date parity signing      libraries the v component may need to be adjusted. Also it is very      rare but possible for v to be other values, those values are not      supported.\",\"params\":{\"_approved\":\"A boolean of the approval status to set to.\",\"deadline\":\"The timestamp which the signature must be submitted by        to be valid.\",\"owner\":\"The owner of the account which is having the new approval set.\",\"r\":\"The r component of the ECDSA signature.\",\"s\":\"The s component of the ECDSA signature.\",\"spender\":\"The address which will be allowed to spend owner's tokens.\",\"v\":\"Extra ECDSA data which allows public key recovery from        signature assumed to be 27 or 28.\"}},\"pricePerVaultShare()\":{\"returns\":{\"vaultSharePrice\":\"The current share price.\"}},\"redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_minOutputPerShare\":\"The minimum amount the LP expects to        receive for each withdrawal share that is burned. The units of        this quantity are either base or vault shares, depending on the        value of `_options.asBase`.\",\"_options\":\"The options that configure how the operation is settled.\",\"_withdrawalShares\":\"The withdrawal shares to redeem.\"},\"returns\":{\"_0\":\"The amount the LP received. The units of this quantity         are either base or vault shares, depending on the value of         `_options.asBase`.\",\"_1\":\"The amount of withdrawal shares that         were redeemed.\"}},\"removeLiquidity(uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_lpShares\":\"The LP shares to burn.\",\"_minOutputPerShare\":\"The minimum amount the LP expects to receive        for each withdrawal share that is burned. The units of this        quantity are either base or vault shares, depending on the value        of `_options.asBase`.\",\"_options\":\"The options that configure how the operation is settled.\"},\"returns\":{\"_0\":\"The amount the LP removing liquidity receives. The         units of this quantity are either base or vault shares,         depending on the value of `_options.asBase`.\",\"_1\":\"The base that the LP receives buys out some of         their LP shares, but it may not be sufficient to fully buy the         LP out. In this case, the LP receives withdrawal shares equal in         value to the present value they are owed. As idle capital         becomes available, the pool will buy back these shares.\"}},\"setApproval(uint256,address,uint256)\":{\"params\":{\"amount\":\"The max tokens the approved person can use, setting to        uint256.max will cause the value to never decrement (saving gas        on transfer).\",\"operator\":\"The address who will be able to use the tokens.\",\"tokenID\":\"The asset to approve the use of.\"}},\"setApprovalBridge(uint256,address,uint256,address)\":{\"params\":{\"amount\":\"The max tokens the approved person can use, setting to        uint256.max will cause the value to never decrement [saving gas        on transfer].\",\"caller\":\"The eth address which called the linking contract.\",\"operator\":\"The address who will be able to use the tokens.\",\"tokenID\":\"The asset to approve the use of.\"}},\"setApprovalForAll(address,bool)\":{\"params\":{\"approved\":\"True to approve, false to remove approval.\",\"operator\":\"The eth address which can access the caller's assets.\"}},\"setFeeCollector(address)\":{\"params\":{\"_who\":\"The new fee collector address.\"}},\"setGovernance(address)\":{\"params\":{\"_who\":\"The new governance address.\"}},\"setPauser(address,bool)\":{\"params\":{\"status\":\"The new pauser status.\",\"who\":\"The address to change.\"}},\"setSweepCollector(address)\":{\"params\":{\"_who\":\"The new sweep collector address.\"}},\"sweep(address)\":{\"details\":\"WARN: It is unlikely but possible that there is a selector overlap      with 'transferFrom'. Any integrating contracts should be checked      for that, as it may result in an unexpected call from this address.\",\"params\":{\"_target\":\"The target token to sweep.\"}},\"transferFrom(uint256,address,address,uint256)\":{\"params\":{\"amount\":\"The amount of token to move.\",\"from\":\"The address whose balance will be reduced.\",\"to\":\"The address whose balance will be increased.\",\"tokenID\":\"The token identifier.\"}},\"transferFromBridge(uint256,address,address,uint256,address)\":{\"params\":{\"amount\":\"The amount of token to move.\",\"caller\":\"The msg.sender or the caller of the ERC20Forwarder.\",\"from\":\"The address whose balance will be reduced.\",\"to\":\"The address whose balance will be increased.\",\"tokenID\":\"The token identifier.\"}}},\"version\":1},\"userdoc\":{\"errors\":{\"TransferFailed()\":[{\"notice\":\"Thrown when an ether transfer fails.\"}],\"UnexpectedSuccess()\":[{\"notice\":\"Thrown when a read-only call succeeds. The proxy architecture         uses a force-revert delegatecall pattern to ensure that calls         that are intended to be read-only are actually read-only.\"}]},\"events\":{\"AddLiquidity(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when an LP adds liquidity to the Hyperdrive pool.\"},\"Approval(address,address,uint256)\":{\"notice\":\"Emitted when an account changes the allowance for another         account.\"},\"ApprovalForAll(address,address,bool)\":{\"notice\":\"Emitted when an account changes the approval for all of its         tokens.\"},\"CloseLong(address,address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is closed.\"},\"CloseShort(address,address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is closed.\"},\"CollectGovernanceFee(address,uint256)\":{\"notice\":\"Emitted when governance fees are collected.\"},\"CreateCheckpoint(uint256,uint256,uint256,uint256,uint256)\":{\"notice\":\"Emitted when a checkpoint is created.\"},\"FeeCollectorUpdated(address)\":{\"notice\":\"Emitted when the fee collector address is updated.\"},\"GovernanceUpdated(address)\":{\"notice\":\"Emitted when the governance address is updated.\"},\"Initialize(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when the Hyperdrive pool is initialized.\"},\"OpenLong(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is opened.\"},\"OpenShort(address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is opened.\"},\"PauseStatusUpdated(bool)\":{\"notice\":\"Emitted when the pause status is updated.\"},\"PauserUpdated(address,bool)\":{\"notice\":\"Emitted when a pauser is updated.\"},\"RedeemWithdrawalShares(address,address,uint256,uint256,uint256,bool)\":{\"notice\":\"Emitted when an LP redeems withdrawal shares.\"},\"RemoveLiquidity(address,address,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when an LP removes liquidity from the Hyperdrive pool.\"},\"Sweep(address,address)\":{\"notice\":\"Emitted when tokens are swept.\"},\"SweepCollectorUpdated(address)\":{\"notice\":\"Emitted when the sweep collector address is updated.\"},\"TransferSingle(address,address,address,uint256,uint256)\":{\"notice\":\"Emitted when tokens are transferred from one account to another.\"}},\"kind\":\"user\",\"methods\":{\"PERMIT_TYPEHASH()\":{\"notice\":\"The typehash used to calculate the EIP712 hash for `permitForAll`.\"},\"addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows LPs to supply liquidity for LP shares.\"},\"batchTransferFrom(address,address,uint256[],uint256[])\":{\"notice\":\"Transfers several assets from one account to another.\"},\"checkpoint(uint256)\":{\"notice\":\"Attempts to mint a checkpoint with the specified checkpoint time.\"},\"closeLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Closes a long position with a specified maturity time.\"},\"closeShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Closes a short position with a specified maturity time.\"},\"collectGovernanceFee((address,bool,bytes))\":{\"notice\":\"This function collects the governance fees accrued by the pool.\"},\"domainSeparator()\":{\"notice\":\"Computes the EIP712 domain separator which prevents user signed         messages for this contract to be replayed in other contracts:         https://eips.ethereum.org/EIPS/eip-712.\"},\"initialize(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows the first LP to initialize the market with a target APR.\"},\"openLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Opens a long position.\"},\"openShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Opens a short position.\"},\"pause(bool)\":{\"notice\":\"Allows an authorized address to pause this contract.\"},\"permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"notice\":\"Allows a caller who is not the owner of an account to execute the      functionality of 'approve' for all assets with the owners signature.\"},\"pricePerVaultShare()\":{\"notice\":\"Loads the share price from the yield source\"},\"redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Redeems withdrawal shares by giving the LP a pro-rata amount of         the withdrawal pool's proceeds. This function redeems the         maximum amount of the specified withdrawal shares given the         amount of withdrawal shares ready to withdraw.\"},\"removeLiquidity(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows an LP to burn shares and withdraw from the pool.\"},\"setApproval(uint256,address,uint256)\":{\"notice\":\"Allows a user to set an approval for an individual asset with         specific amount.\"},\"setApprovalBridge(uint256,address,uint256,address)\":{\"notice\":\"Allows the compatibility linking contract to forward calls to         set asset approvals.\"},\"setApprovalForAll(address,bool)\":{\"notice\":\"Allows a user to approve an operator to use all of their assets.\"},\"setFeeCollector(address)\":{\"notice\":\"Allows governance to transfer the fee collector role.\"},\"setGovernance(address)\":{\"notice\":\"Allows governance to transfer the governance role.\"},\"setPauser(address,bool)\":{\"notice\":\"Allows governance to change the pauser status of an address.\"},\"setSweepCollector(address)\":{\"notice\":\"Allows governance to transfer the sweep collector role.\"},\"sweep(address)\":{\"notice\":\"Transfers the contract's balance of a target token to the fee         collector address.\"},\"target0()\":{\"notice\":\"The target0 address. This is a logic contract that contains all         of the getters for the Hyperdrive pool as well as some stateful         functions.\"},\"target1()\":{\"notice\":\"The target1 address. This is a logic contract that contains         stateful functions.\"},\"target2()\":{\"notice\":\"The target2 address. This is a logic contract that contains         stateful functions.\"},\"target3()\":{\"notice\":\"The target3 address. This is a logic contract that contains         stateful functions.\"},\"target4()\":{\"notice\":\"The target4 address. This is a logic contract that contains         stateful functions.\"},\"transferFrom(uint256,address,address,uint256)\":{\"notice\":\"Transfers an amount of assets from the source to the destination.\"},\"transferFromBridge(uint256,address,address,uint256,address)\":{\"notice\":\"Permissioned transfer for the bridge to access, only callable by         the ERC20 linking bridge.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/test/MockERC4626Hyperdrive.sol\":\"MockERC4626Hyperdrive\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/external/Hyperdrive.sol\":{\"keccak256\":\"0x4d166ec6a8a2e3f2cae2d0f990d1cc40965ec995130d7a7be1af2b9e390d3fd8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2185afc7935052ce78427f3ee5629d4c6d93cbffad776fb281c2b79ff2234d67\",\"dweb:/ipfs/QmT6e2H7pXG3e2BM1EoHTxzWhTwxjGu75AxNkZ4CxyEbw6\"]},\"contracts/src/external/HyperdriveTarget0.sol\":{\"keccak256\":\"0x9cf2186541b5454544930c45d3ca5a7396a9122d7218e42670ae6e77eba7fe92\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6d3da4a8aadd58e9f2ddc4c0fed4b91be1f4d8d572c7cb9eea7c6f2aa416b206\",\"dweb:/ipfs/QmcSDMBvhpkMi2NPqWhbgvK2qBzUaihW28t3KpZMxmCrmF\"]},\"contracts/src/instances/erc4626/ERC4626Base.sol\":{\"keccak256\":\"0xc6f9ab1fa455f9d3199753c8b089248c93477a17bd1cc275b83b8f69c6577d55\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://98dc6cf2efacfd99df9a3dce9ae9ff236db364d907915fbb540b28f12ac45982\",\"dweb:/ipfs/QmRn7R2y6wLgkQg9oqL6qswjAsa6rKqJ1v69ghVnsWToaa\"]},\"contracts/src/instances/erc4626/ERC4626Hyperdrive.sol\":{\"keccak256\":\"0x265a9c0ffdb5be10ab4a10c859095ca27c10a832e970bbdb9c0cc0ba0b4aa236\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://cd515b76b7223c12a8d7285922242030a86631719ed894ed37e0ed170ce73610\",\"dweb:/ipfs/Qmdh7qsS9KWhjooJAfCFbKj4XpThKuPzqu8E4McnfSqxTh\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IERC4626.sol\":{\"keccak256\":\"0x891ede2965eda391b0e78cdba7490a5ddadcc43f039c22c183529300dada0741\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ec659582084892c1a857676bf39fa5e26532557a8210978408857315e9195366\",\"dweb:/ipfs/QmYYXo28FtBLEBQxK9YeFhyB2zdrpbrNQXfrzN4fmBuHuB\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xc293b4229674624983294b673d6fefce53ed8f6f3d9c6bbcb34da25f42ef2c71\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://084f43e7c42615faabfb6ae9100a8cea6bf9846eb1c433dc08fe634c59cadcaf\",\"dweb:/ipfs/QmXW3GgcbQQg5xnfAC6RT2KBL9ii8s1jwbDtZywWXFydpm\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x68adcd293ff25711add1698b6024faa45beec01eb044bd0103d3020aa96d856e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0e0f5e35a7d2c656e249394d25896e5adfb9af3e210c01b9ef5fa81d25a45e24\",\"dweb:/ipfs/QmbLASezHPWHcbodqSfw3Qh9NzqekqVPM8FhCXKGTCXL1h\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x812ccb32dff907e8614c89a65196eec239eceb3e63f9f14dde2b2269c75a67c0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://da5f2ce974bfcd8185342c121c879ba5aef23e1e4e7b36cf9fcba68296b8892c\",\"dweb:/ipfs/QmSho3PWs9bzejTYYjySuXcH9tVP4xFnkbUmSzQA54g8eG\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86\",\"dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/internal/HyperdriveAdmin.sol\":{\"keccak256\":\"0x683548d598b303bc8bab561818a2f88c100f6d26fda478e89c02b46cf710726d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://054a605eeb41760fbe1922bb32f511c87e1ca4dd04f3fa64f40783060b371603\",\"dweb:/ipfs/QmezP1mjnbPCwdDCrh4GjL7RVzU61ohTrcW6A7yxLiKcQM\"]},\"contracts/src/internal/HyperdriveBase.sol\":{\"keccak256\":\"0x7feb8df22e6f91b1ee70f50f5ca16a7819601bcb88fc5a5fa9cf16c708cc52bb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://60ff7ff4faa45551099b025d03f2438477b5fd1f64f82b78c6ed26cbdafc64f6\",\"dweb:/ipfs/QmWtbftziGdSKAEvpRoaWRnTxMNwgUVs2nDN6nFugX1WYN\"]},\"contracts/src/internal/HyperdriveCheckpoint.sol\":{\"keccak256\":\"0x3514b829c99e0015385ff08dd1479e452529a6283e8b6800946542ff21dc9649\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://37ffd17baea5080f4184372ac835bf60694760499756235a61e41a480f4ab3c7\",\"dweb:/ipfs/QmUzEnJhRhpW18MH7GyXsug9u5FLehNfgjR7RAhZizLLVd\"]},\"contracts/src/internal/HyperdriveLP.sol\":{\"keccak256\":\"0x72410851e77940e66681e23b9d10f3c3de0e8c9a3e5b1cca627e93bba431775d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://82a9292f388b16572cc5c5e873d1ead666ddcc3e436cf5d7fb036fd6c63ee9a2\",\"dweb:/ipfs/Qmauzxkn46ACS4XV43m2MbDF91KYP4ExYwSxL3cm1SDL6j\"]},\"contracts/src/internal/HyperdriveLong.sol\":{\"keccak256\":\"0xe791adb5c58a73ff2c978fcc79153f9042702e2c4fc5d71f60534323d5ba4832\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7ec4adf40e5f90574c7484ddeeed41cbe1f60b29847b18b169aa3130b8882aa7\",\"dweb:/ipfs/QmeY9y922jhcLzGw9d4VUNNoDkUeFhTJ8ZVThrvqzcGGjm\"]},\"contracts/src/internal/HyperdriveMultiToken.sol\":{\"keccak256\":\"0x21a9aafb8e23a22c77111e13538fa8f709446e4f3a64ef84b2eebc2aa9d04373\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://41517912353540de5b430587ca8220f9d34d4432d3c723951d5fb618d5907b5d\",\"dweb:/ipfs/QmU3cTCrAq94digVS97s5af1Pu86uGBpmpus6w7828fUbG\"]},\"contracts/src/internal/HyperdriveShort.sol\":{\"keccak256\":\"0xc42b5a9ee5eee3cb9177b136eb9f4b81a4b51d9468f8faa97309934b6b371bc5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b9291237fcdbb8ff97517acd19499cfa4afc6d670a89fd5cc0309a201a7b1006\",\"dweb:/ipfs/QmfQmUwvGhJgPFyNaHvur8AViePBzvSBNAdaZJBwMkY5Je\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xf965f50c6e452e4011a476c67e6cbea77e558570efb7532dbf1bd586e8705ab4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e81b4399e0e27f0a8d47dd7a79f7711d1bd4685e6b98d4ba778e32d1af7de50e\",\"dweb:/ipfs/QmQyCBv76GvWPxTjdR6yD7DTuvFAdxTkRp2A9wUgqP778N\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0x3031a1ec376be333eebe0062c474a22d7f970cb02de62ab6823c6918c0a7f83b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6c80cc2fd8b7908b6420ebb21cb99266c93e01d6cdd9d1a41f8847493849b131\",\"dweb:/ipfs/QmeMehWbF2RwQaf6c6yaj5KHjXboDRpzBCtvFnLW4BXBbc\"]},\"contracts/src/libraries/Errors.sol\":{\"keccak256\":\"0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88\",\"dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x631f6529908f62f71775f8c6120afdca3a836fb24fa9fa4701cad54f4a9da076\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2baf6ad8917a3fbb6d040334451f6b4f6936b00518c4cd308b9c6fa11569b2bd\",\"dweb:/ipfs/QmXD16vk6MRxmPRqy8ZXSpRA5XxhSf1pnsQH32ARDJTk8L\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0xcf305dde8aa320d1e1b767734ce8edce456af537525d40e30d5345f09f6e34ab\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://056c9a563f1a9e0133e17463497ad19be517d35b770170122edea50ca9fbe002\",\"dweb:/ipfs/QmS6dkVRHzdbv7etumcCtNtm9GuXDCjqZxxhtYfP6keAAY\"]},\"contracts/src/libraries/LPMath.sol\":{\"keccak256\":\"0x5b3c0d159b1945a14227028d835e011bf740e007f664cba049ece1b6ab963067\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d8f4fef22462dabc799b2f8124440a7cc57076f7ceecb46219c69b09f50baf5f\",\"dweb:/ipfs/Qmcw9iC1RZt4Nh7dGH1yR7vUi6qZHJf6ReAvF2uLFHESqZ\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8\",\"dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x4a9c91313bed7cda6ef503af23c9f777008b5258e9cb2176eab6acc52be79891\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://88da1f5502a12fe1024be90f6a6ea08556cc1f2660ab8cbeb5e07640abb7711c\",\"dweb:/ipfs/QmVQoG9TyrAsVYcgvgZfgA5pQk8V8wvS4BewGNP4B3Txyy\"]},\"contracts/test/MockERC4626Hyperdrive.sol\":{\"keccak256\":\"0x086b04fc3e700032b5d86f78c5d19540143a0215ced07de4db30a939c21910db\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7f1a71a2856e0fe87d2b6a969d8e2d1bd4c963d505e18bc40d67a515ec6d1538\",\"dweb:/ipfs/QmeG89pLVnkmciDznV1RdZcQJmnngCznV5qoX179vLf68Y\"]},\"lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol\":{\"keccak256\":\"0x60c65f701957fdd6faea1acb0bb45825791d473693ed9ecb34726fdfaa849dd7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ea290300e0efc4d901244949dc4d877fd46e6c5e43dc2b26620e8efab3ab803f\",\"dweb:/ipfs/QmcLLJppxKeJWqHxE2CUkcfhuRTgHSn8J4kijcLa5MYhSt\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0xc3e1fa9d1987f8d349dfb4d6fe93bf2ca014b52ba335cfac30bfe71e357e6f80\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c5703ccdeb7b1d685e375ed719117e9edf2ab4bc544f24f23b0d50ec82257229\",\"dweb:/ipfs/QmTdwkbQq7owpCiyuzE7eh5LrD2ddrBCZ5WHVsWPi1RrTS\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c\",\"dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850\",\"dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x6008dabfe393240d73d7dd7688033f72740d570aa422254d29a7dce8568f3aff\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f5196ec75139918c6c7bb4251b36395e668f1fa6d206beba7e7520e74913940d\",\"dweb:/ipfs/QmSyqjksXxmm2mCG6qRd1yuwLykypkSVBbnBnGqJRcuJMi\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x37bb49513c49c87c4642a891b13b63571bc87013dde806617aa1efb54605f386\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b3036b3a83b7c48f96641f2a9002b9f2dcb6a5958dd670894ada21ae8229b3d0\",\"dweb:/ipfs/QmUNfSBdoVtjhETaUJCYcaC7pTMgbhht926tJ2uXJbiVd3\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245\",\"dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y\"]},\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":{\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12\",\"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF\"]},\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02\",\"dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd\"]}},\"version\":1}";
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
                }, {
                    readonly internalType: "address";
                    readonly name: "_target0";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "_target1";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "_target2";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "_target3";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "_target4";
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
                readonly name: "FailedInnerCall";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "ReentrancyGuardReentrantCall";
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
                readonly name: "TransferFailed";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "UnexpectedSuccess";
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
                readonly inputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "fallback";
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
                    readonly name: "";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "struct IHyperdrive.Options";
                    readonly name: "";
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
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256[]";
                    readonly name: "";
                    readonly type: "uint256[]";
                }, {
                    readonly internalType: "uint256[]";
                    readonly name: "";
                    readonly type: "uint256[]";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "batchTransferFrom";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "checkpoint";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "struct IHyperdrive.Options";
                    readonly name: "";
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
                    readonly name: "";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "struct IHyperdrive.Options";
                    readonly name: "";
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
                    readonly name: "";
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
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_amount";
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
                readonly name: "deposit";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "sharesMinted";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "vaultSharePrice";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "domainSeparator";
                readonly outputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "";
                    readonly type: "bytes32";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "struct IHyperdrive.Options";
                    readonly name: "";
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
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "struct IHyperdrive.Options";
                    readonly name: "";
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
                    readonly name: "";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "struct IHyperdrive.Options";
                    readonly name: "";
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
                    readonly name: "";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "pause";
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
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "pricePerVaultShare";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "vaultSharePrice";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "struct IHyperdrive.Options";
                    readonly name: "";
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
                    readonly name: "";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "struct IHyperdrive.Options";
                    readonly name: "";
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
                    readonly name: "";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "setApproval";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "setApprovalBridge";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }, {
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "setApprovalForAll";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "setFeeCollector";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "setGovernance";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }, {
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "setPauser";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "setSweepCollector";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "contract IERC20";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "sweep";
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
                    readonly name: "";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "transferFrom";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "transferFromBridge";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_shares";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_sharePrice";
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
                readonly name: "withdraw";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "amountWithdrawn";
                    readonly type: "uint256";
                }];
            }];
            readonly devdoc: {
                readonly kind: "dev";
                readonly methods: {
                    readonly "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": {
                        readonly params: {
                            readonly _contribution: "The amount of capital to supply. The units of this        quantity are either base or vault shares, depending on the value        of `_options.asBase`.";
                            readonly _maxApr: "The maximum APR at which the LP is willing to supply.";
                            readonly _minApr: "The minimum APR at which the LP is willing to supply.";
                            readonly _minLpSharePrice: "The minimum LP share price the LP is willing        to accept for their shares. LPs incur negative slippage when        adding liquidity if there is a net curve position in the market,        so this allows LPs to protect themselves from high levels of        slippage. The units of this quantity are either base or vault        shares, depending on the value of `_options.asBase`.";
                            readonly _options: "The options that configure how the operation is settled.";
                        };
                        readonly returns: {
                            readonly _0: "The LP shares received by the LP.";
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
                    readonly "checkpoint(uint256)": {
                        readonly params: {
                            readonly _checkpointTime: "The time of the checkpoint to create.";
                        };
                    };
                    readonly "closeLong(uint256,uint256,uint256,(address,bool,bytes))": {
                        readonly params: {
                            readonly _bondAmount: "The amount of longs to close.";
                            readonly _maturityTime: "The maturity time of the long.";
                            readonly _minOutput: "The minimum proceeds the trader will accept. The units        of this quantity are either base or vault shares, depending on        the value of `_options.asBase`.";
                            readonly _options: "The options that configure how the trade is settled.";
                        };
                        readonly returns: {
                            readonly _0: "The proceeds the user receives. The units of this         quantity are either base or vault shares, depending on the value         of `_options.asBase`.";
                        };
                    };
                    readonly "closeShort(uint256,uint256,uint256,(address,bool,bytes))": {
                        readonly params: {
                            readonly _bondAmount: "The amount of shorts to close.";
                            readonly _maturityTime: "The maturity time of the short.";
                            readonly _minOutput: "The minimum output of this trade. The units of this        quantity are either base or vault shares, depending on the value        of `_options.asBase`.";
                            readonly _options: "The options that configure how the trade is settled.";
                        };
                        readonly returns: {
                            readonly _0: "The proceeds of closing this short. The units of this         quantity are either base or vault shares, depending on the value         of `_options.asBase`.";
                        };
                    };
                    readonly "collectGovernanceFee((address,bool,bytes))": {
                        readonly params: {
                            readonly _options: "The options that configure how the fees are settled.";
                        };
                        readonly returns: {
                            readonly _0: "The governance fees collected. The units of this         quantity are either base or vault shares, depending on the value         of `_options.asBase`.";
                        };
                    };
                    readonly "domainSeparator()": {
                        readonly returns: {
                            readonly _0: "The EIP712 domain separator.";
                        };
                    };
                    readonly "initialize(uint256,uint256,(address,bool,bytes))": {
                        readonly params: {
                            readonly _apr: "The target APR.";
                            readonly _contribution: "The amount of capital to supply. The units of this        quantity are either base or vault shares, depending on the value        of `_options.asBase`.";
                            readonly _options: "The options that configure how the operation is settled.";
                        };
                        readonly returns: {
                            readonly _0: "The initial number of LP shares created.";
                        };
                    };
                    readonly "openLong(uint256,uint256,uint256,(address,bool,bytes))": {
                        readonly params: {
                            readonly _amount: "The amount of capital provided to open the long. The        units of this quantity are either base or vault shares, depending        on the value of `_options.asBase`.";
                            readonly _minOutput: "The minimum number of bonds to receive.";
                            readonly _minVaultSharePrice: "The minimum vault share price at which to        open the long. This allows traders to protect themselves from        opening a long in a checkpoint where negative interest has        accrued.";
                            readonly _options: "The options that configure how the trade is settled.";
                        };
                        readonly returns: {
                            readonly _0: "The maturity time of the bonds.";
                            readonly _1: "The amount of bonds the user received.";
                        };
                    };
                    readonly "openShort(uint256,uint256,uint256,(address,bool,bytes))": {
                        readonly params: {
                            readonly _bondAmount: "The amount of bonds to short.";
                            readonly _maxDeposit: "The most the user expects to deposit for this trade.        The units of this quantity are either base or vault shares,        depending on the value of `_options.asBase`.";
                            readonly _minVaultSharePrice: "The minimum vault share price at which to open        the short. This allows traders to protect themselves from opening        a short in a checkpoint where negative interest has accrued.";
                            readonly _options: "The options that configure how the trade is settled.";
                        };
                        readonly returns: {
                            readonly _0: "The maturity time of the short.";
                            readonly _1: "The amount the user deposited for this trade. The units         of this quantity are either base or vault shares, depending on         the value of `_options.asBase`.";
                        };
                    };
                    readonly "pause(bool)": {
                        readonly params: {
                            readonly _status: "True to pause all deposits and false to unpause them.";
                        };
                    };
                    readonly "permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)": {
                        readonly details: "The signature for this function follows EIP 712 standard and should      be generated with the eth_signTypedData JSON RPC call instead of      the eth_sign JSON RPC call. If using out of date parity signing      libraries the v component may need to be adjusted. Also it is very      rare but possible for v to be other values, those values are not      supported.";
                        readonly params: {
                            readonly _approved: "A boolean of the approval status to set to.";
                            readonly deadline: "The timestamp which the signature must be submitted by        to be valid.";
                            readonly owner: "The owner of the account which is having the new approval set.";
                            readonly r: "The r component of the ECDSA signature.";
                            readonly s: "The s component of the ECDSA signature.";
                            readonly spender: "The address which will be allowed to spend owner's tokens.";
                            readonly v: "Extra ECDSA data which allows public key recovery from        signature assumed to be 27 or 28.";
                        };
                    };
                    readonly "pricePerVaultShare()": {
                        readonly returns: {
                            readonly vaultSharePrice: "The current share price.";
                        };
                    };
                    readonly "redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))": {
                        readonly params: {
                            readonly _minOutputPerShare: "The minimum amount the LP expects to        receive for each withdrawal share that is burned. The units of        this quantity are either base or vault shares, depending on the        value of `_options.asBase`.";
                            readonly _options: "The options that configure how the operation is settled.";
                            readonly _withdrawalShares: "The withdrawal shares to redeem.";
                        };
                        readonly returns: {
                            readonly _0: "The amount the LP received. The units of this quantity         are either base or vault shares, depending on the value of         `_options.asBase`.";
                            readonly _1: "The amount of withdrawal shares that         were redeemed.";
                        };
                    };
                    readonly "removeLiquidity(uint256,uint256,(address,bool,bytes))": {
                        readonly params: {
                            readonly _lpShares: "The LP shares to burn.";
                            readonly _minOutputPerShare: "The minimum amount the LP expects to receive        for each withdrawal share that is burned. The units of this        quantity are either base or vault shares, depending on the value        of `_options.asBase`.";
                            readonly _options: "The options that configure how the operation is settled.";
                        };
                        readonly returns: {
                            readonly _0: "The amount the LP removing liquidity receives. The         units of this quantity are either base or vault shares,         depending on the value of `_options.asBase`.";
                            readonly _1: "The base that the LP receives buys out some of         their LP shares, but it may not be sufficient to fully buy the         LP out. In this case, the LP receives withdrawal shares equal in         value to the present value they are owed. As idle capital         becomes available, the pool will buy back these shares.";
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
                        readonly details: "WARN: It is unlikely but possible that there is a selector overlap      with 'transferFrom'. Any integrating contracts should be checked      for that, as it may result in an unexpected call from this address.";
                        readonly params: {
                            readonly _target: "The target token to sweep.";
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
                            readonly caller: "The msg.sender or the caller of the ERC20Forwarder.";
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
                    readonly "PERMIT_TYPEHASH()": {
                        readonly notice: "The typehash used to calculate the EIP712 hash for `permitForAll`.";
                    };
                    readonly "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": {
                        readonly notice: "Allows LPs to supply liquidity for LP shares.";
                    };
                    readonly "batchTransferFrom(address,address,uint256[],uint256[])": {
                        readonly notice: "Transfers several assets from one account to another.";
                    };
                    readonly "checkpoint(uint256)": {
                        readonly notice: "Attempts to mint a checkpoint with the specified checkpoint time.";
                    };
                    readonly "closeLong(uint256,uint256,uint256,(address,bool,bytes))": {
                        readonly notice: "Closes a long position with a specified maturity time.";
                    };
                    readonly "closeShort(uint256,uint256,uint256,(address,bool,bytes))": {
                        readonly notice: "Closes a short position with a specified maturity time.";
                    };
                    readonly "collectGovernanceFee((address,bool,bytes))": {
                        readonly notice: "This function collects the governance fees accrued by the pool.";
                    };
                    readonly "domainSeparator()": {
                        readonly notice: "Computes the EIP712 domain separator which prevents user signed         messages for this contract to be replayed in other contracts:         https://eips.ethereum.org/EIPS/eip-712.";
                    };
                    readonly "initialize(uint256,uint256,(address,bool,bytes))": {
                        readonly notice: "Allows the first LP to initialize the market with a target APR.";
                    };
                    readonly "openLong(uint256,uint256,uint256,(address,bool,bytes))": {
                        readonly notice: "Opens a long position.";
                    };
                    readonly "openShort(uint256,uint256,uint256,(address,bool,bytes))": {
                        readonly notice: "Opens a short position.";
                    };
                    readonly "pause(bool)": {
                        readonly notice: "Allows an authorized address to pause this contract.";
                    };
                    readonly "permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)": {
                        readonly notice: "Allows a caller who is not the owner of an account to execute the      functionality of 'approve' for all assets with the owners signature.";
                    };
                    readonly "pricePerVaultShare()": {
                        readonly notice: "Loads the share price from the yield source";
                    };
                    readonly "redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))": {
                        readonly notice: "Redeems withdrawal shares by giving the LP a pro-rata amount of         the withdrawal pool's proceeds. This function redeems the         maximum amount of the specified withdrawal shares given the         amount of withdrawal shares ready to withdraw.";
                    };
                    readonly "removeLiquidity(uint256,uint256,(address,bool,bytes))": {
                        readonly notice: "Allows an LP to burn shares and withdraw from the pool.";
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
                        readonly notice: "Allows governance to transfer the fee collector role.";
                    };
                    readonly "setGovernance(address)": {
                        readonly notice: "Allows governance to transfer the governance role.";
                    };
                    readonly "setPauser(address,bool)": {
                        readonly notice: "Allows governance to change the pauser status of an address.";
                    };
                    readonly "setSweepCollector(address)": {
                        readonly notice: "Allows governance to transfer the sweep collector role.";
                    };
                    readonly "sweep(address)": {
                        readonly notice: "Transfers the contract's balance of a target token to the fee         collector address.";
                    };
                    readonly "target0()": {
                        readonly notice: "The target0 address. This is a logic contract that contains all         of the getters for the Hyperdrive pool as well as some stateful         functions.";
                    };
                    readonly "target1()": {
                        readonly notice: "The target1 address. This is a logic contract that contains         stateful functions.";
                    };
                    readonly "target2()": {
                        readonly notice: "The target2 address. This is a logic contract that contains         stateful functions.";
                    };
                    readonly "target3()": {
                        readonly notice: "The target3 address. This is a logic contract that contains         stateful functions.";
                    };
                    readonly "target4()": {
                        readonly notice: "The target4 address. This is a logic contract that contains         stateful functions.";
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
            readonly remappings: readonly ["@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/", "ds-test/=lib/forge-std/lib/ds-test/src/", "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/", "forge-std/=lib/forge-std/src/", "openzeppelin-contracts/=lib/openzeppelin-contracts/", "openzeppelin/=lib/openzeppelin-contracts/contracts/", "solmate/=lib/solmate/src/"];
            readonly optimizer: {
                readonly enabled: true;
                readonly runs: 200;
            };
            readonly metadata: {
                readonly bytecodeHash: "ipfs";
            };
            readonly compilationTarget: {
                readonly "contracts/test/MockERC4626Hyperdrive.sol": "MockERC4626Hyperdrive";
            };
            readonly libraries: {};
        };
        readonly sources: {
            readonly "contracts/src/external/Hyperdrive.sol": {
                readonly keccak256: "0x4d166ec6a8a2e3f2cae2d0f990d1cc40965ec995130d7a7be1af2b9e390d3fd8";
                readonly urls: readonly ["bzz-raw://2185afc7935052ce78427f3ee5629d4c6d93cbffad776fb281c2b79ff2234d67", "dweb:/ipfs/QmT6e2H7pXG3e2BM1EoHTxzWhTwxjGu75AxNkZ4CxyEbw6"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/external/HyperdriveTarget0.sol": {
                readonly keccak256: "0x9cf2186541b5454544930c45d3ca5a7396a9122d7218e42670ae6e77eba7fe92";
                readonly urls: readonly ["bzz-raw://6d3da4a8aadd58e9f2ddc4c0fed4b91be1f4d8d572c7cb9eea7c6f2aa416b206", "dweb:/ipfs/QmcSDMBvhpkMi2NPqWhbgvK2qBzUaihW28t3KpZMxmCrmF"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/instances/erc4626/ERC4626Base.sol": {
                readonly keccak256: "0xc6f9ab1fa455f9d3199753c8b089248c93477a17bd1cc275b83b8f69c6577d55";
                readonly urls: readonly ["bzz-raw://98dc6cf2efacfd99df9a3dce9ae9ff236db364d907915fbb540b28f12ac45982", "dweb:/ipfs/QmRn7R2y6wLgkQg9oqL6qswjAsa6rKqJ1v69ghVnsWToaa"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/instances/erc4626/ERC4626Hyperdrive.sol": {
                readonly keccak256: "0x265a9c0ffdb5be10ab4a10c859095ca27c10a832e970bbdb9c0cc0ba0b4aa236";
                readonly urls: readonly ["bzz-raw://cd515b76b7223c12a8d7285922242030a86631719ed894ed37e0ed170ce73610", "dweb:/ipfs/Qmdh7qsS9KWhjooJAfCFbKj4XpThKuPzqu8E4McnfSqxTh"];
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
                readonly keccak256: "0xf965f50c6e452e4011a476c67e6cbea77e558570efb7532dbf1bd586e8705ab4";
                readonly urls: readonly ["bzz-raw://e81b4399e0e27f0a8d47dd7a79f7711d1bd4685e6b98d4ba778e32d1af7de50e", "dweb:/ipfs/QmQyCBv76GvWPxTjdR6yD7DTuvFAdxTkRp2A9wUgqP778N"];
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
            readonly "contracts/test/MockERC4626Hyperdrive.sol": {
                readonly keccak256: "0x086b04fc3e700032b5d86f78c5d19540143a0215ced07de4db30a939c21910db";
                readonly urls: readonly ["bzz-raw://7f1a71a2856e0fe87d2b6a969d8e2d1bd4c963d505e18bc40d67a515ec6d1538", "dweb:/ipfs/QmeG89pLVnkmciDznV1RdZcQJmnngCznV5qoX179vLf68Y"];
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
        readonly absolutePath: "contracts/test/MockERC4626Hyperdrive.sol";
        readonly id: 24110;
        readonly exportedSymbols: {
            readonly ERC4626Hyperdrive: readonly [7976];
            readonly IERC4626: readonly [10262];
            readonly IHyperdrive: readonly [10676];
            readonly MockERC4626Hyperdrive: readonly [24109];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:1561:133";
        readonly nodes: readonly [{
            readonly id: 24028;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:23:133";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 24030;
            readonly nodeType: "ImportDirective";
            readonly src: "64:90:133";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/instances/erc4626/ERC4626Hyperdrive.sol";
            readonly file: "contracts/src/instances/erc4626/ERC4626Hyperdrive.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 24110;
            readonly sourceUnit: 7977;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 24029;
                    readonly name: "ERC4626Hyperdrive";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 7976;
                    readonly src: "73:17:133";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 24032;
            readonly nodeType: "ImportDirective";
            readonly src: "155:65:133";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IERC4626.sol";
            readonly file: "contracts/src/interfaces/IERC4626.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 24110;
            readonly sourceUnit: 10263;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 24031;
                    readonly name: "IERC4626";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 10262;
                    readonly src: "164:8:133";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 24034;
            readonly nodeType: "ImportDirective";
            readonly src: "221:71:133";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IHyperdrive.sol";
            readonly file: "contracts/src/interfaces/IHyperdrive.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 24110;
            readonly sourceUnit: 10677;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 24033;
                    readonly name: "IHyperdrive";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 10676;
                    readonly src: "230:11:133";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 24109;
            readonly nodeType: "ContractDefinition";
            readonly src: "447:1152:133";
            readonly nodes: readonly [{
                readonly id: 24061;
                readonly nodeType: "FunctionDefinition";
                readonly src: "505:368:133";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 24060;
                    readonly nodeType: "Block";
                    readonly src: "871:2:133";
                    readonly nodes: readonly [];
                    readonly statements: readonly [];
                };
                readonly implemented: true;
                readonly kind: "constructor";
                readonly modifiers: readonly [{
                    readonly arguments: readonly [{
                        readonly id: 24052;
                        readonly name: "_config";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 24039;
                        readonly src: "739:7:133";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10470_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig memory";
                        };
                    }, {
                        readonly id: 24053;
                        readonly name: "_target0";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 24041;
                        readonly src: "760:8:133";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    }, {
                        readonly id: 24054;
                        readonly name: "_target1";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 24043;
                        readonly src: "782:8:133";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    }, {
                        readonly id: 24055;
                        readonly name: "_target2";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 24045;
                        readonly src: "804:8:133";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    }, {
                        readonly id: 24056;
                        readonly name: "_target3";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 24047;
                        readonly src: "826:8:133";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    }, {
                        readonly id: 24057;
                        readonly name: "_target4";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 24049;
                        readonly src: "848:8:133";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    }];
                    readonly id: 24058;
                    readonly kind: "baseConstructorSpecifier";
                    readonly modifierName: {
                        readonly id: 24051;
                        readonly name: "ERC4626Hyperdrive";
                        readonly nameLocations: readonly ["708:17:133"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 7976;
                        readonly src: "708:17:133";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "708:158:133";
                }];
                readonly name: "";
                readonly nameLocation: "-1:-1:-1";
                readonly parameters: {
                    readonly id: 24050;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24039;
                        readonly mutability: "mutable";
                        readonly name: "_config";
                        readonly nameLocation: "556:7:133";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24061;
                        readonly src: "526:37:133";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10470_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig";
                        };
                        readonly typeName: {
                            readonly id: 24038;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 24037;
                                readonly name: "IHyperdrive.PoolConfig";
                                readonly nameLocations: readonly ["526:11:133", "538:10:133"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10470;
                                readonly src: "526:22:133";
                            };
                            readonly referencedDeclaration: 10470;
                            readonly src: "526:22:133";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolConfig_$10470_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 24041;
                        readonly mutability: "mutable";
                        readonly name: "_target0";
                        readonly nameLocation: "581:8:133";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24061;
                        readonly src: "573:16:133";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 24040;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "573:7:133";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 24043;
                        readonly mutability: "mutable";
                        readonly name: "_target1";
                        readonly nameLocation: "607:8:133";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24061;
                        readonly src: "599:16:133";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 24042;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "599:7:133";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 24045;
                        readonly mutability: "mutable";
                        readonly name: "_target2";
                        readonly nameLocation: "633:8:133";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24061;
                        readonly src: "625:16:133";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 24044;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "625:7:133";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 24047;
                        readonly mutability: "mutable";
                        readonly name: "_target3";
                        readonly nameLocation: "659:8:133";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24061;
                        readonly src: "651:16:133";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 24046;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "651:7:133";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 24049;
                        readonly mutability: "mutable";
                        readonly name: "_target4";
                        readonly nameLocation: "685:8:133";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24061;
                        readonly src: "677:16:133";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 24048;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "677:7:133";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "516:183:133";
                };
                readonly returnParameters: {
                    readonly id: 24059;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "871:0:133";
                };
                readonly scope: 24109;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "public";
            }, {
                readonly id: 24079;
                readonly nodeType: "FunctionDefinition";
                readonly src: "879:209:133";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 24078;
                    readonly nodeType: "Block";
                    readonly src: "1037:51:133";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 24074;
                                readonly name: "_amount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24063;
                                readonly src: "1063:7:133";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 24075;
                                readonly name: "_options";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24066;
                                readonly src: "1072:8:133";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Options_$10526_calldata_ptr";
                                    readonly typeString: "struct IHyperdrive.Options calldata";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_struct$_Options_$10526_calldata_ptr";
                                    readonly typeString: "struct IHyperdrive.Options calldata";
                                }];
                                readonly id: 24073;
                                readonly name: "_deposit";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 12940;
                                readonly src: "1054:8:133";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_uint256_$_t_struct$_Options_$10526_calldata_ptr_$returns$_t_uint256_$_t_uint256_$";
                                    readonly typeString: "function (uint256,struct IHyperdrive.Options calldata) returns (uint256,uint256)";
                                };
                            };
                            readonly id: 24076;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1054:27:133";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$";
                                readonly typeString: "tuple(uint256,uint256)";
                            };
                        };
                        readonly functionReturnParameters: 24072;
                        readonly id: 24077;
                        readonly nodeType: "Return";
                        readonly src: "1047:34:133";
                    }];
                };
                readonly functionSelector: "829555d4";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "deposit";
                readonly nameLocation: "888:7:133";
                readonly parameters: {
                    readonly id: 24067;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24063;
                        readonly mutability: "mutable";
                        readonly name: "_amount";
                        readonly nameLocation: "913:7:133";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24079;
                        readonly src: "905:15:133";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24062;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "905:7:133";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 24066;
                        readonly mutability: "mutable";
                        readonly name: "_options";
                        readonly nameLocation: "959:8:133";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24079;
                        readonly src: "930:37:133";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_Options_$10526_calldata_ptr";
                            readonly typeString: "struct IHyperdrive.Options";
                        };
                        readonly typeName: {
                            readonly id: 24065;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 24064;
                                readonly name: "IHyperdrive.Options";
                                readonly nameLocations: readonly ["930:11:133", "942:7:133"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10526;
                                readonly src: "930:19:133";
                            };
                            readonly referencedDeclaration: 10526;
                            readonly src: "930:19:133";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Options_$10526_storage_ptr";
                                readonly typeString: "struct IHyperdrive.Options";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "895:78:133";
                };
                readonly returnParameters: {
                    readonly id: 24072;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24069;
                        readonly mutability: "mutable";
                        readonly name: "sharesMinted";
                        readonly nameLocation: "998:12:133";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24079;
                        readonly src: "990:20:133";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24068;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "990:7:133";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 24071;
                        readonly mutability: "mutable";
                        readonly name: "vaultSharePrice";
                        readonly nameLocation: "1020:15:133";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24079;
                        readonly src: "1012:23:133";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24070;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1012:7:133";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "989:47:133";
                };
                readonly scope: 24109;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "public";
            }, {
                readonly id: 24098;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1094:231:133";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 24097;
                    readonly nodeType: "Block";
                    readonly src: "1260:65:133";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 24092;
                                readonly name: "_shares";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24081;
                                readonly src: "1287:7:133";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 24093;
                                readonly name: "_sharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24083;
                                readonly src: "1296:11:133";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 24094;
                                readonly name: "_options";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24086;
                                readonly src: "1309:8:133";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Options_$10526_calldata_ptr";
                                    readonly typeString: "struct IHyperdrive.Options calldata";
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
                                    readonly typeIdentifier: "t_struct$_Options_$10526_calldata_ptr";
                                    readonly typeString: "struct IHyperdrive.Options calldata";
                                }];
                                readonly id: 24091;
                                readonly name: "_withdraw";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13003;
                                readonly src: "1277:9:133";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_struct$_Options_$10526_calldata_ptr_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,struct IHyperdrive.Options calldata) returns (uint256)";
                                };
                            };
                            readonly id: 24095;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1277:41:133";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 24090;
                        readonly id: 24096;
                        readonly nodeType: "Return";
                        readonly src: "1270:48:133";
                    }];
                };
                readonly functionSelector: "a3144531";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "withdraw";
                readonly nameLocation: "1103:8:133";
                readonly parameters: {
                    readonly id: 24087;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24081;
                        readonly mutability: "mutable";
                        readonly name: "_shares";
                        readonly nameLocation: "1129:7:133";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24098;
                        readonly src: "1121:15:133";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24080;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1121:7:133";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 24083;
                        readonly mutability: "mutable";
                        readonly name: "_sharePrice";
                        readonly nameLocation: "1154:11:133";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24098;
                        readonly src: "1146:19:133";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24082;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1146:7:133";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 24086;
                        readonly mutability: "mutable";
                        readonly name: "_options";
                        readonly nameLocation: "1204:8:133";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24098;
                        readonly src: "1175:37:133";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_Options_$10526_calldata_ptr";
                            readonly typeString: "struct IHyperdrive.Options";
                        };
                        readonly typeName: {
                            readonly id: 24085;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 24084;
                                readonly name: "IHyperdrive.Options";
                                readonly nameLocations: readonly ["1175:11:133", "1187:7:133"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10526;
                                readonly src: "1175:19:133";
                            };
                            readonly referencedDeclaration: 10526;
                            readonly src: "1175:19:133";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Options_$10526_storage_ptr";
                                readonly typeString: "struct IHyperdrive.Options";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1111:107:133";
                };
                readonly returnParameters: {
                    readonly id: 24090;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24089;
                        readonly mutability: "mutable";
                        readonly name: "amountWithdrawn";
                        readonly nameLocation: "1243:15:133";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24098;
                        readonly src: "1235:23:133";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24088;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1235:7:133";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1234:25:133";
                };
                readonly scope: 24109;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "public";
            }, {
                readonly id: 24108;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1448:149:133";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 24107;
                    readonly nodeType: "Block";
                    readonly src: "1552:45:133";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [];
                            readonly expression: {
                                readonly argumentTypes: readonly [];
                                readonly id: 24104;
                                readonly name: "_pricePerVaultShare";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13014;
                                readonly src: "1569:19:133";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$__$returns$_t_uint256_$";
                                    readonly typeString: "function () view returns (uint256)";
                                };
                            };
                            readonly id: 24105;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1569:21:133";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 24103;
                        readonly id: 24106;
                        readonly nodeType: "Return";
                        readonly src: "1562:28:133";
                    }];
                };
                readonly documentation: {
                    readonly id: 24099;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1331:112:133";
                    readonly text: "@notice Loads the share price from the yield source\n @return vaultSharePrice The current share price.";
                };
                readonly functionSelector: "daaa35fe";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "pricePerVaultShare";
                readonly nameLocation: "1457:18:133";
                readonly parameters: {
                    readonly id: 24100;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1475:2:133";
                };
                readonly returnParameters: {
                    readonly id: 24103;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24102;
                        readonly mutability: "mutable";
                        readonly name: "vaultSharePrice";
                        readonly nameLocation: "1531:15:133";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24108;
                        readonly src: "1523:23:133";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24101;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1523:7:133";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1522:25:133";
                };
                readonly scope: 24109;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "public";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 24035;
                    readonly name: "ERC4626Hyperdrive";
                    readonly nameLocations: readonly ["481:17:133"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 7976;
                    readonly src: "481:17:133";
                };
                readonly id: 24036;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "481:17:133";
            }];
            readonly canonicalName: "MockERC4626Hyperdrive";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [24109, 7976, 7910, 4518, 14459, 17765, 16295, 15361, 16779, 12819, 13995, 17990, 71674, 11205, 11777, 10865, 11743];
            readonly name: "MockERC4626Hyperdrive";
            readonly nameLocation: "456:21:133";
            readonly scope: 24110;
            readonly usedErrors: readonly [10621, 10627, 71049, 71330, 71335, 71338, 71619];
            readonly usedEvents: readonly [11025, 11040, 11059, 11074, 11091, 11110, 11129, 11150, 11163, 11170, 11175, 11180, 11185, 11192, 11197, 11204, 11758, 11767, 11776];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 133;
};
//# sourceMappingURL=MockERC4626Hyperdrive.d.ts.map