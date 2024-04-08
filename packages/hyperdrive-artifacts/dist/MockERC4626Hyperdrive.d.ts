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
        }, {
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
        readonly object: "0x6102e06040523480156200001257600080fd5b50604051620023df380380620023df83398101604081905262000035916200056e565b6001600081905586516001600160a01b0390811660809081526020808a018051841660a0908152928b01516101a0908152928b01516101c05260c0808c01516101e052610100808d015190915260e0808d01519052610120808d0151909152928b0180515190935282519091015161014090815282516040908101516101609081529351606090810151610180908152918d01518616610200528c015161022052908b0151600a80549186166001600160a01b0319928316179055928b0151600880549186169185169190911790558a01516009805491851691909316179091558188166102405281871661026052818616610280528185166102a0528184166102c05251885189938993899389938993899362000157939216919062000169565b5050505050505050505050506200072d565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b17909152620001c390859083906200023516565b6200022f57604080516001600160a01b038516602482015260006044808301919091528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b1790915262000223918691620002e616565b6200022f8482620002e6565b50505050565b6000806000846001600160a01b031684604051620002549190620006d8565b6000604051808303816000865af19150503d806000811462000293576040519150601f19603f3d011682016040523d82523d6000602084013e62000298565b606091505b5091509150818015620002c6575080511580620002c6575080806020019051810190620002c6919062000709565b8015620002dd57506000856001600160a01b03163b115b95945050505050565b6000620002fd6001600160a01b0384168362000359565b905080516000141580156200032557508080602001905181019062000323919062000709565b155b156200035457604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b6060620003698383600062000370565b9392505050565b606081471015620003975760405163cd78605960e01b81523060048201526024016200034b565b600080856001600160a01b03168486604051620003b59190620006d8565b60006040518083038185875af1925050503d8060008114620003f4576040519150601f19603f3d011682016040523d82523d6000602084013e620003f9565b606091505b5090925090506200040c86838362000416565b9695505050505050565b6060826200042f5762000429826200047a565b62000369565b81511580156200044757506001600160a01b0384163b155b156200047257604051639996b31560e01b81526001600160a01b03851660048201526024016200034b565b508062000369565b8051156200048b5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6040516101c081016001600160401b0381118282101715620004d657634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b0381168114620004f457600080fd5b919050565b6000608082840312156200050c57600080fd5b604051608081016001600160401b03811182821017156200053d57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b6000806000806000808688036102c08112156200058a57600080fd5b610220808212156200059b57600080fd5b620005a5620004a4565b9150620005b289620004dc565b8252620005c260208a01620004dc565b6020830152620005d560408a01620004dc565b6040830152606089015160608301526080890151608083015260a089015160a083015260c089015160c083015260e089015160e0830152610100808a01518184015250610120808a0151818401525061014062000634818b01620004dc565b90830152610160620006488a8201620004dc565b908301526101806200065c8a8201620004dc565b908301526101a0620006718b8b8301620004f9565b818401525081975062000686818a01620004dc565b96505050620006996102408801620004dc565b9350620006aa6102608801620004dc565b9250620006bb6102808801620004dc565b9150620006cc6102a08801620004dc565b90509295509295509295565b6000825160005b81811015620006fb5760208186018101518583015201620006df565b506000920191825250919050565b6000602082840312156200071c57600080fd5b815180151581146200036957600080fd5b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051610280516102a0516102c051611b4862000897600039600081816106cd015281816108620152610afc0152600081816105fd01528181610832015281816108c00152610a8b01526000818161059601528181610ac10152610b270152600081816106990152818161073901526107cf015260008181610205015281816103c7015281816107090152818161076b0152818161079d01528181610803015281816108950152818161090a01528181610a420152610b50015260005050600050506000505060005050600050506000505060005050600050506000505060005050600050506000505060008181610de901528181610e6301528181610ef201528181610f5101528181610ff40152818161107901526110b9015260008181610dbc0152610e1d0152611b486000f3fe6080604052600436106101ee5760003560e01c80639cd241af1161010d578063d899e112116100a0578063e44808bc1161006f578063e44808bc14610667578063e4af29d1146102fe578063eac3e79914610687578063f3f70707146106bb578063f698da25146106ef576101ee565b8063d899e112146105eb578063daaa35fe1461061f578063dbbe807014610634578063ded0623114610647576101ee565b8063a6e8a859116100dc578063a6e8a85914610584578063ab033ea9146102fe578063cba2e58d146105b8578063cbc13434146105cb576101ee565b80639cd241af14610544578063a22cb465146104d1578063a314453114610564578063a42dce80146102fe576101ee565b80633e691db9116101855780637180c8ca116101545780637180c8ca146104d157806377d05ff4146104f1578063829555d4146105045780639032c72614610524576101ee565b80633e691db914610463578063414f826d146104835780634c2ac1d9146104a35780634ed2d6ac146104b6576101ee565b80631c0f12b6116101c15780631c0f12b61461039557806321b57d53146103b557806329b23fc11461040157806330adf81f1461042f576101ee565b806301681a62146102fe57806302329a2914610320578063074a6de91461033b57806317fad7fc14610375575b3480156101fa57600080fd5b5060003660606000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316858560405161023d92919061144b565b600060405180830381855af49150503d8060008114610278576040519150601f19603f3d011682016040523d82523d6000602084013e61027d565b606091505b509150915081156102a157604051638bb0a34b60e01b815260040160405180910390fd5b60006102ac8261145b565b90506001600160e01b03198116636e64089360e11b146102ce57815160208301fd5b8151600319810160048401908152926102ef918101602001906024016114cc565b80519650602001945050505050f35b34801561030a57600080fd5b5061031e61031936600461158e565b610704565b005b34801561032c57600080fd5b5061031e6103193660046115b9565b34801561034757600080fd5b5061035b6103563660046115e8565b610731565b604080519283526020830191909152015b60405180910390f35b34801561038157600080fd5b5061031e61039036600461167d565b610766565b3480156103a157600080fd5b5061031e6103b0366004611712565b610798565b3480156103c157600080fd5b506103e97f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200161036c565b34801561040d57600080fd5b5061042161041c36600461175a565b6107c8565b60405190815260200161036c565b34801561043b57600080fd5b506104217f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367381565b34801561046f57600080fd5b5061042161047e3660046117b4565b6107fc565b34801561048f57600080fd5b5061031e61049e3660046117f1565b61082d565b6104216104b1366004611813565b61085b565b3480156104c257600080fd5b5061031e6103b0366004611877565b3480156104dd57600080fd5b5061031e6104ec3660046118c1565b610890565b6104216104ff3660046115e8565b6108b9565b34801561051057600080fd5b5061035b61051f3660046118fa565b6108ec565b34801561053057600080fd5b5061031e61053f366004611941565b610905565b34801561055057600080fd5b5061031e61055f3660046119c1565b610a3d565b34801561057057600080fd5b5061042161057f3660046115e8565b610a6c565b34801561059057600080fd5b506103e97f000000000000000000000000000000000000000000000000000000000000000081565b61035b6105c636600461175a565b610a83565b3480156105d757600080fd5b5061035b6105e63660046115e8565b610ab9565b3480156105f757600080fd5b506103e97f000000000000000000000000000000000000000000000000000000000000000081565b34801561062b57600080fd5b50610421610ae5565b61035b61064236600461175a565b610af4565b34801561065357600080fd5b5061042161066236600461175a565b610b20565b34801561067357600080fd5b5061031e6106823660046119f9565b610b4b565b34801561069357600080fd5b506103e97f000000000000000000000000000000000000000000000000000000000000000081565b3480156106c757600080fd5b506103e97f000000000000000000000000000000000000000000000000000000000000000081565b3480156106fb57600080fd5b50610421610b7c565b61072d7f0000000000000000000000000000000000000000000000000000000000000000610c0a565b5050565b60008061075d7f0000000000000000000000000000000000000000000000000000000000000000610c0a565b50935093915050565b61078f7f0000000000000000000000000000000000000000000000000000000000000000610c0a565b50505050505050565b6107c17f0000000000000000000000000000000000000000000000000000000000000000610c0a565b5050505050565b60006107f37f0000000000000000000000000000000000000000000000000000000000000000610c0a565b50949350505050565b60006108277f0000000000000000000000000000000000000000000000000000000000000000610c0a565b50919050565b6108567f0000000000000000000000000000000000000000000000000000000000000000610c0a565b505050565b60006108867f0000000000000000000000000000000000000000000000000000000000000000610c0a565b5095945050505050565b6108567f0000000000000000000000000000000000000000000000000000000000000000610c0a565b60006108e47f0000000000000000000000000000000000000000000000000000000000000000610c0a565b509392505050565b6000806108f98484610c2a565b915091505b9250929050565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031661093a610b7c565b60405160248101919091527f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367360448201526001600160a01b03808c1660648301528a16608482015288151560a482015260c4810188905260ff871660e4820152610104810186905261012481018590526101440160408051601f198184030181529181526020820180516001600160e01b03166314e5f07b60e01b179052516109e39190611a58565b600060405180830381855af49150503d8060008114610a1e576040519150601f19603f3d011682016040523d82523d6000602084013e610a23565b606091505b509150915081610a3557805160208201fd5b805160208201f35b610a667f0000000000000000000000000000000000000000000000000000000000000000610c0a565b50505050565b6000610a79848484610d02565b90505b9392505050565b600080610aaf7f0000000000000000000000000000000000000000000000000000000000000000610c0a565b5094509492505050565b60008061075d7f0000000000000000000000000000000000000000000000000000000000000000610c0a565b6000610aef610d99565b905090565b600080610aaf7f0000000000000000000000000000000000000000000000000000000000000000610c0a565b60006107f37f0000000000000000000000000000000000000000000000000000000000000000610c0a565b610b747f0000000000000000000000000000000000000000000000000000000000000000610c0a565b505050505050565b60408051808201825260018152603160f81b60209182015281517f2aef22f9d7df5f9d21c56d14029233f3fdaa91917727e1eb68e504d27072d6cd818301527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc681840152466060820152306080808301919091528351808303909101815260a0909101909252815191012090565b6060600080836001600160a01b03166000366040516109e392919061144b565b60008080610c3e60408501602086016115b9565b15610c6357610c5985610c546040870187611a74565b610dac565b9093509050610c7f565b5034610c7b85610c766040870187611a74565b610ee5565b8492505b610c87610d99565b91508015610cfa57604051600090339083908381818185875af1925050503d8060008114610cd1576040519150601f19603f3d011682016040523d82523d6000602084013e610cd6565b606091505b5050905080610cf8576040516312171d8360e31b815260040160405180910390fd5b505b509250929050565b600080610d0f8585610f1a565b9050610d1a81610f38565b945084600003610d2e576000915050610a7c565b610d3e60408401602085016115b9565b15610d6d57610d6685610d54602086018661158e565b610d616040870187611a74565b610fc5565b91506108e4565b610d9085610d7e602086018661158e565b610d8b6040870187611a74565b61106c565b50929392505050565b6000610aef670de0b6b3a76400006110a0565b600080610de46001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163330886110f0565b610e447f0000000000000000000000000000000000000000000000000000000000000000610e13876001611abb565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169190611157565b604051636e553f6560e01b8152600481018690523060248201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636e553f65906044016020604051808303816000875af1158015610eb4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ed89190611adc565b9660009650945050505050565b6108566001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163330866110f0565b6000610f2f8383670de0b6b3a76400006111e7565b90505b92915050565b6040516363737ac960e11b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063c6e6f592906024015b602060405180830381865afa158015610fa1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f329190611adc565b604051635d043b2960e11b8152600481018590526001600160a01b0384811660248301523060448301526000917f00000000000000000000000000000000000000000000000000000000000000009091169063ba087652906064016020604051808303816000875af115801561103f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110639190611adc565b95945050505050565b610a666001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168486611205565b6040516303d1689d60e11b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906307a2d13a90602401610f84565b6040516001600160a01b038481166024830152838116604483015260648201839052610a669186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b038381831617835250505050611236565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b1790526111a8848261129e565b610a66576040516001600160a01b038481166024830152600060448301526111dd91869182169063095ea7b390606401611125565b610a668482611236565b60008260001904841183021582026111fe57600080fd5b5091020490565b6040516001600160a01b0383811660248301526044820183905261085691859182169063a9059cbb90606401611125565b600061124b6001600160a01b03841683611341565b9050805160001415801561127057508080602001905181019061126e9190611af5565b155b1561085657604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b6000806000846001600160a01b0316846040516112bb9190611a58565b6000604051808303816000865af19150503d80600081146112f8576040519150601f19603f3d011682016040523d82523d6000602084013e6112fd565b606091505b50915091508180156113275750805115806113275750808060200190518101906113279190611af5565b80156110635750505050506001600160a01b03163b151590565b6060610f2f8383600084600080856001600160a01b031684866040516113679190611a58565b60006040518083038185875af1925050503d80600081146113a4576040519150601f19603f3d011682016040523d82523d6000602084013e6113a9565b606091505b50915091506113b98683836113c3565b9695505050505050565b6060826113d8576113d38261141f565b610a7c565b81511580156113ef57506001600160a01b0384163b155b1561141857604051639996b31560e01b81526001600160a01b0385166004820152602401611295565b5080610a7c565b80511561142f5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b50565b8183823760009101908152919050565b805160208201516001600160e01b0319808216929190600483101561148a5780818460040360031b1b83161693505b505050919050565b634e487b7160e01b600052604160045260246000fd5b60005b838110156114c35781810151838201526020016114ab565b50506000910152565b6000602082840312156114de57600080fd5b815167ffffffffffffffff808211156114f657600080fd5b818401915084601f83011261150a57600080fd5b81518181111561151c5761151c611492565b604051601f8201601f19908116603f0116810190838211818310171561154457611544611492565b8160405282815287602084870101111561155d57600080fd5b61156e8360208301602088016114a8565b979650505050505050565b6001600160a01b038116811461144857600080fd5b6000602082840312156115a057600080fd5b8135610a7c81611579565b801515811461144857600080fd5b6000602082840312156115cb57600080fd5b8135610a7c816115ab565b60006060828403121561082757600080fd5b6000806000606084860312156115fd57600080fd5b8335925060208401359150604084013567ffffffffffffffff81111561162257600080fd5b61162e868287016115d6565b9150509250925092565b60008083601f84011261164a57600080fd5b50813567ffffffffffffffff81111561166257600080fd5b6020830191508360208260051b85010111156108fe57600080fd5b6000806000806000806080878903121561169657600080fd5b86356116a181611579565b955060208701356116b181611579565b9450604087013567ffffffffffffffff808211156116ce57600080fd5b6116da8a838b01611638565b909650945060608901359150808211156116f357600080fd5b5061170089828a01611638565b979a9699509497509295939492505050565b6000806000806080858703121561172857600080fd5b84359350602085013561173a81611579565b9250604085013561174a81611579565b9396929550929360600135925050565b6000806000806080858703121561177057600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561179c57600080fd5b6117a8878288016115d6565b91505092959194509250565b6000602082840312156117c657600080fd5b813567ffffffffffffffff8111156117dd57600080fd5b6117e9848285016115d6565b949350505050565b6000806040838503121561180457600080fd5b50508035926020909101359150565b600080600080600060a0868803121561182b57600080fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff81111561185e57600080fd5b61186a888289016115d6565b9150509295509295909350565b6000806000806080858703121561188d57600080fd5b84359350602085013561189f81611579565b92506040850135915060608501356118b681611579565b939692955090935050565b600080604083850312156118d457600080fd5b82356118df81611579565b915060208301356118ef816115ab565b809150509250929050565b6000806040838503121561190d57600080fd5b82359150602083013567ffffffffffffffff81111561192b57600080fd5b611937858286016115d6565b9150509250929050565b600080600080600080600060e0888a03121561195c57600080fd5b873561196781611579565b9650602088013561197781611579565b95506040880135611987816115ab565b945060608801359350608088013560ff811681146119a457600080fd5b9699959850939692959460a0840135945060c09093013592915050565b6000806000606084860312156119d657600080fd5b8335925060208401356119e881611579565b929592945050506040919091013590565b600080600080600060a08688031215611a1157600080fd5b853594506020860135611a2381611579565b93506040860135611a3381611579565b9250606086013591506080860135611a4a81611579565b809150509295509295909350565b60008251611a6a8184602087016114a8565b9190910192915050565b6000808335601e19843603018112611a8b57600080fd5b83018035915067ffffffffffffffff821115611aa657600080fd5b6020019150368190038213156108fe57600080fd5b80820180821115610f3257634e487b7160e01b600052601160045260246000fd5b600060208284031215611aee57600080fd5b5051919050565b600060208284031215611b0757600080fd5b8151610a7c816115ab56fea26469706673582212204c3a67d141824e9890ee5e8d69ae963fa9b5c0aa0a70753919a85f59351672f964736f6c63430008140033";
        readonly sourceMap: "381:1152:133:-:0;;;439:368;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1713:1:169;1917:7;:21;;;5227:17:118;;-1:-1:-1;;;;;5214:30:118;;;;;;;5274:24;;;;;;5254:44;;;;;;5388:30;;;;5362:56;;;;5841:28;;;;5817:52;;6157:32;;;;;6129:60;;6372:26;;;;;6350:48;;;-1:-1:-1;6428:24:118;;;;6408:44;;-1:-1:-1;6477:19:118;;;;6462:34;;;6561:12;;;;;:18;6549:30;;;6600:12;;:17;;;;6589:28;;;;6646:12;;-1:-1:-1;6646:25:118;;;;6627:44;;;;6704:12;;-1:-1:-1;6704:29:118;;;;6681:52;;;;-1:-1:-1;;;6810:21:118;6793:38;;;;-1:-1:-1;;6859:22:118;6841:40;;6984:18;;;;6970:11;:32;;;;;-1:-1:-1;;;;;;6970:32:118;;;;;;7028:20;;;;7012:13;:36;;;;;;;;;;;;;;7076:22;;;7058:15;:40;;;;;;;;;;;;;5945:18:36;;::::1;;::::0;5973;;::::1;;::::0;6001;;::::1;;::::0;6029;;::::1;;::::0;6057;;::::1;;::::0;4627:24:45;4573:17;;673:7:133;;694:8;;716;;738;;760;;782;;4559:118:45::1;::::0;:46;::::1;::::0;4627:24;4559:46:::1;:118::i;:::-;4136:548:::0;;;;;;439:368:133;;;;;;381:1152;;3296:380:166;3411:47;;;-1:-1:-1;;;;;3399:32:234;;3411:47:166;;;3381:51:234;3448:18;;;;3441:34;;;3411:47:166;;;;;;;;;;3354:18:234;;;;3411:47:166;;;;;;;;-1:-1:-1;;;;;3411:47:166;;;-1:-1:-1;;;3411:47:166;;;;3474:44;;3426:13;;3411:47;;3474:23;:44;:::i;:::-;3469:201;;3561:43;;;-1:-1:-1;;;;;3399:32:234;;3561:43:166;;;3381:51:234;3601:1:166;3448:18:234;;;;3441:34;;;;3561:43:166;;;;;;;;;;3354:18:234;;;;3561:43:166;;;;;;;;-1:-1:-1;;;;;3561:43:166;;;-1:-1:-1;;;3561:43:166;;;;3534:71;;3554:5;;3534:19;:71;:::i;:::-;3619:40;3639:5;3646:12;3619:19;:40::i;:::-;3373:303;3296:380;;;:::o;5189:578::-;5272:4;5574:12;5588:23;5623:5;-1:-1:-1;;;;;5615:19:166;5635:4;5615:25;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5573:67;;;;5657:7;:69;;;;-1:-1:-1;5669:17:166;;:22;;:56;;;5706:10;5695:30;;;;;;;;;;;;:::i;:::-;5657:103;;;;;5759:1;5738:5;-1:-1:-1;;;;;5730:26:166;;:30;5657:103;5650:110;5189:578;-1:-1:-1;;;;;5189:578:166:o;4059:629::-;4478:23;4504:33;-1:-1:-1;;;;;4504:27:166;;4532:4;4504:27;:33::i;:::-;4478:59;;4551:10;:17;4572:1;4551:22;;:57;;;;;4589:10;4578:30;;;;;;;;;;;;:::i;:::-;4577:31;4551:57;4547:135;;;4631:40;;-1:-1:-1;;;4631:40:166;;-1:-1:-1;;;;;4636:32:234;;4631:40:166;;;4618:51:234;4591:18;;4631:40:166;;;;;;;;4547:135;4129:559;4059:629;;:::o;2705:151:167:-;2780:12;2811:38;2833:6;2841:4;2847:1;2811:21;:38::i;:::-;2804:45;2705:151;-1:-1:-1;;;2705:151:167:o;3180:392::-;3279:12;3331:5;3307:21;:29;3303:108;;;3359:41;;-1:-1:-1;;;3359:41:167;;3394:4;3359:41;;;4618:51:234;4591:18;;3359:41:167;4472:203:234;3303:108:167;3421:12;3435:23;3462:6;-1:-1:-1;;;;;3462:11:167;3481:5;3488:4;3462:31;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;3420:73:167;;-1:-1:-1;3420:73:167;-1:-1:-1;3510:55:167;3537:6;3420:73;;3510:26;:55::i;:::-;3503:62;3180:392;-1:-1:-1;;;;;;3180:392:167:o;4625:582::-;4769:12;4798:7;4793:408;;4821:19;4829:10;4821:7;:19::i;:::-;4793:408;;;5045:17;;:22;:49;;;;-1:-1:-1;;;;;;5071:18:167;;;:23;5045:49;5041:119;;;5121:24;;-1:-1:-1;;;5121:24:167;;-1:-1:-1;;;;;4636:32:234;;5121:24:167;;;4618:51:234;4591:18;;5121:24:167;4472:203:234;5041:119:167;-1:-1:-1;5180:10:167;5173:17;;5743:516;5874:17;;:21;5870:383;;6102:10;6096:17;6158:15;6145:10;6141:2;6137:19;6130:44;5870:383;6225:17;;-1:-1:-1;;;6225:17:167;;;;;;;;;;;14:347:234;81:2;75:9;123:6;111:19;;-1:-1:-1;;;;;145:34:234;;181:22;;;142:62;139:185;;;246:10;241:3;237:20;234:1;227:31;281:4;278:1;271:15;309:4;306:1;299:15;139:185;340:2;333:22;14:347;:::o;366:185::-;453:13;;-1:-1:-1;;;;;495:31:234;;485:42;;475:70;;541:1;538;531:12;475:70;366:185;;;:::o;556:681::-;618:5;666:4;654:9;649:3;645:19;641:30;638:50;;;684:1;681;674:12;638:50;717:2;711:9;759:4;747:17;;-1:-1:-1;;;;;779:34:234;;815:22;;;776:62;773:185;;;880:10;875:3;871:20;868:1;861:31;915:4;912:1;905:15;943:4;940:1;933:15;773:185;978:10;974:2;967:22;;1007:6;998:15;;1043:9;1037:16;1029:6;1022:32;1108:2;1097:9;1093:18;1087:25;1082:2;1074:6;1070:15;1063:50;1167:2;1156:9;1152:18;1146:25;1141:2;1133:6;1129:15;1122:50;1226:2;1215:9;1211:18;1205:25;1200:2;1192:6;1188:15;1181:50;;556:681;;;;:::o;1242:1960::-;1386:6;1394;1402;1410;1418;1426;1470:9;1461:7;1457:23;1500:3;1496:2;1492:12;1489:32;;;1517:1;1514;1507:12;1489:32;1540:6;1566:2;1562;1558:11;1555:31;;;1582:1;1579;1572:12;1555:31;1608:17;;:::i;:::-;1595:30;;1648:48;1686:9;1648:48;:::i;:::-;1641:5;1634:63;1729:57;1782:2;1771:9;1767:18;1729:57;:::i;:::-;1724:2;1717:5;1713:14;1706:81;1819:57;1872:2;1861:9;1857:18;1819:57;:::i;:::-;1814:2;1807:5;1803:14;1796:81;1930:2;1919:9;1915:18;1909:25;1904:2;1897:5;1893:14;1886:49;1989:3;1978:9;1974:19;1968:26;1962:3;1955:5;1951:15;1944:51;2049:3;2038:9;2034:19;2028:26;2022:3;2015:5;2011:15;2004:51;2109:3;2098:9;2094:19;2088:26;2082:3;2075:5;2071:15;2064:51;2169:3;2158:9;2154:19;2148:26;2142:3;2135:5;2131:15;2124:51;2194:3;2250:2;2239:9;2235:18;2229:25;2224:2;2217:5;2213:14;2206:49;;2274:3;2330:2;2319:9;2315:18;2309:25;2304:2;2297:5;2293:14;2286:49;;2354:3;2389:57;2442:2;2431:9;2427:18;2389:57;:::i;:::-;2373:14;;;2366:81;2466:3;2501:57;2539:18;;;2501:57;:::i;:::-;2485:14;;;2478:81;2578:3;2613:57;2651:18;;;2613:57;:::i;:::-;2597:14;;;2590:81;2690:3;2725:62;2779:7;2759:18;;;2725:62;:::i;:::-;2720:2;2713:5;2709:14;2702:86;;2807:5;2797:15;;2831:57;2884:2;2873:9;2869:18;2831:57;:::i;:::-;2821:67;;;;2907:58;2960:3;2949:9;2945:19;2907:58;:::i;:::-;2897:68;;2984:58;3037:3;3026:9;3022:19;2984:58;:::i;:::-;2974:68;;3061:58;3114:3;3103:9;3099:19;3061:58;:::i;:::-;3051:68;;3138:58;3191:3;3180:9;3176:19;3138:58;:::i;:::-;3128:68;;1242:1960;;;;;;;;:::o;3773:412::-;3902:3;3940:6;3934:13;3965:1;3975:129;3989:6;3986:1;3983:13;3975:129;;;4087:4;4071:14;;;4067:25;;4061:32;4048:11;;;4041:53;4004:12;3975:129;;;-1:-1:-1;4159:1:234;4123:16;;4148:13;;;-1:-1:-1;4123:16:234;3773:412;-1:-1:-1;3773:412:234:o;4190:277::-;4257:6;4310:2;4298:9;4289:7;4285:23;4281:32;4278:52;;;4326:1;4323;4316:12;4278:52;4358:9;4352:16;4411:5;4404:13;4397:21;4390:5;4387:32;4377:60;;4433:1;4430;4423:12;4472:203;381:1152:133;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly deployedBytecode: {
        readonly object: "0x6080604052600436106101ee5760003560e01c80639cd241af1161010d578063d899e112116100a0578063e44808bc1161006f578063e44808bc14610667578063e4af29d1146102fe578063eac3e79914610687578063f3f70707146106bb578063f698da25146106ef576101ee565b8063d899e112146105eb578063daaa35fe1461061f578063dbbe807014610634578063ded0623114610647576101ee565b8063a6e8a859116100dc578063a6e8a85914610584578063ab033ea9146102fe578063cba2e58d146105b8578063cbc13434146105cb576101ee565b80639cd241af14610544578063a22cb465146104d1578063a314453114610564578063a42dce80146102fe576101ee565b80633e691db9116101855780637180c8ca116101545780637180c8ca146104d157806377d05ff4146104f1578063829555d4146105045780639032c72614610524576101ee565b80633e691db914610463578063414f826d146104835780634c2ac1d9146104a35780634ed2d6ac146104b6576101ee565b80631c0f12b6116101c15780631c0f12b61461039557806321b57d53146103b557806329b23fc11461040157806330adf81f1461042f576101ee565b806301681a62146102fe57806302329a2914610320578063074a6de91461033b57806317fad7fc14610375575b3480156101fa57600080fd5b5060003660606000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316858560405161023d92919061144b565b600060405180830381855af49150503d8060008114610278576040519150601f19603f3d011682016040523d82523d6000602084013e61027d565b606091505b509150915081156102a157604051638bb0a34b60e01b815260040160405180910390fd5b60006102ac8261145b565b90506001600160e01b03198116636e64089360e11b146102ce57815160208301fd5b8151600319810160048401908152926102ef918101602001906024016114cc565b80519650602001945050505050f35b34801561030a57600080fd5b5061031e61031936600461158e565b610704565b005b34801561032c57600080fd5b5061031e6103193660046115b9565b34801561034757600080fd5b5061035b6103563660046115e8565b610731565b604080519283526020830191909152015b60405180910390f35b34801561038157600080fd5b5061031e61039036600461167d565b610766565b3480156103a157600080fd5b5061031e6103b0366004611712565b610798565b3480156103c157600080fd5b506103e97f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200161036c565b34801561040d57600080fd5b5061042161041c36600461175a565b6107c8565b60405190815260200161036c565b34801561043b57600080fd5b506104217f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367381565b34801561046f57600080fd5b5061042161047e3660046117b4565b6107fc565b34801561048f57600080fd5b5061031e61049e3660046117f1565b61082d565b6104216104b1366004611813565b61085b565b3480156104c257600080fd5b5061031e6103b0366004611877565b3480156104dd57600080fd5b5061031e6104ec3660046118c1565b610890565b6104216104ff3660046115e8565b6108b9565b34801561051057600080fd5b5061035b61051f3660046118fa565b6108ec565b34801561053057600080fd5b5061031e61053f366004611941565b610905565b34801561055057600080fd5b5061031e61055f3660046119c1565b610a3d565b34801561057057600080fd5b5061042161057f3660046115e8565b610a6c565b34801561059057600080fd5b506103e97f000000000000000000000000000000000000000000000000000000000000000081565b61035b6105c636600461175a565b610a83565b3480156105d757600080fd5b5061035b6105e63660046115e8565b610ab9565b3480156105f757600080fd5b506103e97f000000000000000000000000000000000000000000000000000000000000000081565b34801561062b57600080fd5b50610421610ae5565b61035b61064236600461175a565b610af4565b34801561065357600080fd5b5061042161066236600461175a565b610b20565b34801561067357600080fd5b5061031e6106823660046119f9565b610b4b565b34801561069357600080fd5b506103e97f000000000000000000000000000000000000000000000000000000000000000081565b3480156106c757600080fd5b506103e97f000000000000000000000000000000000000000000000000000000000000000081565b3480156106fb57600080fd5b50610421610b7c565b61072d7f0000000000000000000000000000000000000000000000000000000000000000610c0a565b5050565b60008061075d7f0000000000000000000000000000000000000000000000000000000000000000610c0a565b50935093915050565b61078f7f0000000000000000000000000000000000000000000000000000000000000000610c0a565b50505050505050565b6107c17f0000000000000000000000000000000000000000000000000000000000000000610c0a565b5050505050565b60006107f37f0000000000000000000000000000000000000000000000000000000000000000610c0a565b50949350505050565b60006108277f0000000000000000000000000000000000000000000000000000000000000000610c0a565b50919050565b6108567f0000000000000000000000000000000000000000000000000000000000000000610c0a565b505050565b60006108867f0000000000000000000000000000000000000000000000000000000000000000610c0a565b5095945050505050565b6108567f0000000000000000000000000000000000000000000000000000000000000000610c0a565b60006108e47f0000000000000000000000000000000000000000000000000000000000000000610c0a565b509392505050565b6000806108f98484610c2a565b915091505b9250929050565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031661093a610b7c565b60405160248101919091527f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367360448201526001600160a01b03808c1660648301528a16608482015288151560a482015260c4810188905260ff871660e4820152610104810186905261012481018590526101440160408051601f198184030181529181526020820180516001600160e01b03166314e5f07b60e01b179052516109e39190611a58565b600060405180830381855af49150503d8060008114610a1e576040519150601f19603f3d011682016040523d82523d6000602084013e610a23565b606091505b509150915081610a3557805160208201fd5b805160208201f35b610a667f0000000000000000000000000000000000000000000000000000000000000000610c0a565b50505050565b6000610a79848484610d02565b90505b9392505050565b600080610aaf7f0000000000000000000000000000000000000000000000000000000000000000610c0a565b5094509492505050565b60008061075d7f0000000000000000000000000000000000000000000000000000000000000000610c0a565b6000610aef610d99565b905090565b600080610aaf7f0000000000000000000000000000000000000000000000000000000000000000610c0a565b60006107f37f0000000000000000000000000000000000000000000000000000000000000000610c0a565b610b747f0000000000000000000000000000000000000000000000000000000000000000610c0a565b505050505050565b60408051808201825260018152603160f81b60209182015281517f2aef22f9d7df5f9d21c56d14029233f3fdaa91917727e1eb68e504d27072d6cd818301527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc681840152466060820152306080808301919091528351808303909101815260a0909101909252815191012090565b6060600080836001600160a01b03166000366040516109e392919061144b565b60008080610c3e60408501602086016115b9565b15610c6357610c5985610c546040870187611a74565b610dac565b9093509050610c7f565b5034610c7b85610c766040870187611a74565b610ee5565b8492505b610c87610d99565b91508015610cfa57604051600090339083908381818185875af1925050503d8060008114610cd1576040519150601f19603f3d011682016040523d82523d6000602084013e610cd6565b606091505b5050905080610cf8576040516312171d8360e31b815260040160405180910390fd5b505b509250929050565b600080610d0f8585610f1a565b9050610d1a81610f38565b945084600003610d2e576000915050610a7c565b610d3e60408401602085016115b9565b15610d6d57610d6685610d54602086018661158e565b610d616040870187611a74565b610fc5565b91506108e4565b610d9085610d7e602086018661158e565b610d8b6040870187611a74565b61106c565b50929392505050565b6000610aef670de0b6b3a76400006110a0565b600080610de46001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163330886110f0565b610e447f0000000000000000000000000000000000000000000000000000000000000000610e13876001611abb565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169190611157565b604051636e553f6560e01b8152600481018690523060248201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636e553f65906044016020604051808303816000875af1158015610eb4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ed89190611adc565b9660009650945050505050565b6108566001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163330866110f0565b6000610f2f8383670de0b6b3a76400006111e7565b90505b92915050565b6040516363737ac960e11b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063c6e6f592906024015b602060405180830381865afa158015610fa1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f329190611adc565b604051635d043b2960e11b8152600481018590526001600160a01b0384811660248301523060448301526000917f00000000000000000000000000000000000000000000000000000000000000009091169063ba087652906064016020604051808303816000875af115801561103f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110639190611adc565b95945050505050565b610a666001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168486611205565b6040516303d1689d60e11b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906307a2d13a90602401610f84565b6040516001600160a01b038481166024830152838116604483015260648201839052610a669186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b038381831617835250505050611236565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b1790526111a8848261129e565b610a66576040516001600160a01b038481166024830152600060448301526111dd91869182169063095ea7b390606401611125565b610a668482611236565b60008260001904841183021582026111fe57600080fd5b5091020490565b6040516001600160a01b0383811660248301526044820183905261085691859182169063a9059cbb90606401611125565b600061124b6001600160a01b03841683611341565b9050805160001415801561127057508080602001905181019061126e9190611af5565b155b1561085657604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b6000806000846001600160a01b0316846040516112bb9190611a58565b6000604051808303816000865af19150503d80600081146112f8576040519150601f19603f3d011682016040523d82523d6000602084013e6112fd565b606091505b50915091508180156113275750805115806113275750808060200190518101906113279190611af5565b80156110635750505050506001600160a01b03163b151590565b6060610f2f8383600084600080856001600160a01b031684866040516113679190611a58565b60006040518083038185875af1925050503d80600081146113a4576040519150601f19603f3d011682016040523d82523d6000602084013e6113a9565b606091505b50915091506113b98683836113c3565b9695505050505050565b6060826113d8576113d38261141f565b610a7c565b81511580156113ef57506001600160a01b0384163b155b1561141857604051639996b31560e01b81526001600160a01b0385166004820152602401611295565b5080610a7c565b80511561142f5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b50565b8183823760009101908152919050565b805160208201516001600160e01b0319808216929190600483101561148a5780818460040360031b1b83161693505b505050919050565b634e487b7160e01b600052604160045260246000fd5b60005b838110156114c35781810151838201526020016114ab565b50506000910152565b6000602082840312156114de57600080fd5b815167ffffffffffffffff808211156114f657600080fd5b818401915084601f83011261150a57600080fd5b81518181111561151c5761151c611492565b604051601f8201601f19908116603f0116810190838211818310171561154457611544611492565b8160405282815287602084870101111561155d57600080fd5b61156e8360208301602088016114a8565b979650505050505050565b6001600160a01b038116811461144857600080fd5b6000602082840312156115a057600080fd5b8135610a7c81611579565b801515811461144857600080fd5b6000602082840312156115cb57600080fd5b8135610a7c816115ab565b60006060828403121561082757600080fd5b6000806000606084860312156115fd57600080fd5b8335925060208401359150604084013567ffffffffffffffff81111561162257600080fd5b61162e868287016115d6565b9150509250925092565b60008083601f84011261164a57600080fd5b50813567ffffffffffffffff81111561166257600080fd5b6020830191508360208260051b85010111156108fe57600080fd5b6000806000806000806080878903121561169657600080fd5b86356116a181611579565b955060208701356116b181611579565b9450604087013567ffffffffffffffff808211156116ce57600080fd5b6116da8a838b01611638565b909650945060608901359150808211156116f357600080fd5b5061170089828a01611638565b979a9699509497509295939492505050565b6000806000806080858703121561172857600080fd5b84359350602085013561173a81611579565b9250604085013561174a81611579565b9396929550929360600135925050565b6000806000806080858703121561177057600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561179c57600080fd5b6117a8878288016115d6565b91505092959194509250565b6000602082840312156117c657600080fd5b813567ffffffffffffffff8111156117dd57600080fd5b6117e9848285016115d6565b949350505050565b6000806040838503121561180457600080fd5b50508035926020909101359150565b600080600080600060a0868803121561182b57600080fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff81111561185e57600080fd5b61186a888289016115d6565b9150509295509295909350565b6000806000806080858703121561188d57600080fd5b84359350602085013561189f81611579565b92506040850135915060608501356118b681611579565b939692955090935050565b600080604083850312156118d457600080fd5b82356118df81611579565b915060208301356118ef816115ab565b809150509250929050565b6000806040838503121561190d57600080fd5b82359150602083013567ffffffffffffffff81111561192b57600080fd5b611937858286016115d6565b9150509250929050565b600080600080600080600060e0888a03121561195c57600080fd5b873561196781611579565b9650602088013561197781611579565b95506040880135611987816115ab565b945060608801359350608088013560ff811681146119a457600080fd5b9699959850939692959460a0840135945060c09093013592915050565b6000806000606084860312156119d657600080fd5b8335925060208401356119e881611579565b929592945050506040919091013590565b600080600080600060a08688031215611a1157600080fd5b853594506020860135611a2381611579565b93506040860135611a3381611579565b9250606086013591506080860135611a4a81611579565b809150509295509295909350565b60008251611a6a8184602087016114a8565b9190910192915050565b6000808335601e19843603018112611a8b57600080fd5b83018035915067ffffffffffffffff821115611aa657600080fd5b6020019150368190038213156108fe57600080fd5b80820180821115610f3257634e487b7160e01b600052601160045260246000fd5b600060208284031215611aee57600080fd5b5051919050565b600060208284031215611b0757600080fd5b8151610a7c816115ab56fea26469706673582212204c3a67d141824e9890ee5e8d69ae963fa9b5c0aa0a70753919a85f59351672f964736f6c63430008140033";
        readonly sourceMap: "381:1152:133:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6465:12:36;6619;6633:23;6660:7;-1:-1:-1;;;;;6660:20:36;6681:5;;6660:27;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6618:69;;;;6701:7;6697:76;;;6731:31;;-1:-1:-1;;;6731:31:36;;;;;;;;;;;6697:76;6782:15;6800:18;6807:10;6800:18;:::i;:::-;6782:36;-1:-1:-1;;;;;;;6832:43:36;;-1:-1:-1;;;6832:43:36;6828:160;;6952:10;6946:17;6941:2;6929:10;6925:19;6918:46;6828:160;7189:17;;-1:-1:-1;;7185:25:36;;7208:1;7163:20;;7156:55;;;7163:20;7290:31;;;;;;;;;;:::i;:::-;381:1152:133;;;-1:-1:-1;381:1152:133;;;-1:-1:-1;;;;;381:1152:133;10188:67:36;;;;;;;;;;-1:-1:-1;10188:67:36;;;;;:::i;:::-;;:::i;:::-;;9601:65;;;;;;;;;;-1:-1:-1;9601:65:36;;;;;:::i;9032:181::-;;;;;;;;;;-1:-1:-1;9032:181:36;;;;;:::i;:::-;;:::i;:::-;;;;3564:25:234;;;3620:2;3605:18;;3598:34;;;;3537:18;9032:181:36;;;;;;;;11081:167;;;;;;;;;;-1:-1:-1;11081:167:36;;;;;:::i;:::-;;:::i;10321:102::-;;;;;;;;;;-1:-1:-1;10321:102:36;;;;;:::i;:::-;;:::i;4435:32::-;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;5796:32:234;;;5778:51;;5766:2;5751:18;4435:32:36;5632:203:234;8124:177:36;;;;;;;;;;-1:-1:-1;8124:177:36;;;;;:::i;:::-;;:::i;:::-;;;6553:25:234;;;6541:2;6526:18;8124:177:36;6407::234;5161:174:36;;;;;;;;;;;;5211:124;5161:174;;9423:136;;;;;;;;;;-1:-1:-1;9423:136:36;;;;;:::i;:::-;;:::i;9280:82::-;;;;;;;;;;-1:-1:-1;9280:82:36;;;;;:::i;:::-;;:::i;8570:204::-;;;;;;:::i;:::-;;:::i;10670:107::-;;;;;;;;;;-1:-1:-1;10670:107:36;;;;;:::i;10068:78::-;;;;;;;;;;-1:-1:-1;10068:78:36;;;;;:::i;:::-;;:::i;8360:168::-;;;;;;:::i;:::-;;:::i;813:209:133:-;;;;;;;;;;-1:-1:-1;813:209:133;;;;;:::i;:::-;;:::i;12413:869:36:-;;;;;;;;;;-1:-1:-1;12413:869:36;;;;;:::i;:::-;;:::i;10947:92::-;;;;;;;;;;-1:-1:-1;10947:92:36;;;;;:::i;:::-;;:::i;1028:231:133:-;;;;;;;;;;-1:-1:-1;1028:231:133;;;;;:::i;:::-;;:::i;4737:32:36:-;;;;;;;;;;;;;;;7417:192;;;;;;:::i;:::-;;:::i;8816:174::-;;;;;;;;;;-1:-1:-1;8816:174:36;;;;;:::i;:::-;;:::i;4888:32::-;;;;;;;;;;;;;;;1382:149:133;;;;;;;;;;;;;:::i;7889:193:36:-;;;;;;:::i;:::-;;:::i;7651:176::-;;;;;;;;;;-1:-1:-1;7651:176:36;;;;;:::i;:::-;;:::i;10465:163::-;;;;;;;;;;-1:-1:-1;10465:163:36;;;;;:::i;:::-;;:::i;4586:32::-;;;;;;;;;;;;;;;5039;;;;;;;;;;;;;;;13563:426;;;;;;;;;;;;;:::i;10188:67::-;10230:18;10240:7;10230:9;:18::i;:::-;;10188:67;:::o;9032:181::-;9160:7;9169;9188:18;9198:7;9188:9;:18::i;:::-;;9032:181;;;;;;:::o;11081:167::-;11223:18;11233:7;11223:9;:18::i;:::-;;11081:167;;;;;;:::o;10321:102::-;10398:18;10408:7;10398:9;:18::i;:::-;;10321:102;;;;:::o;8124:177::-;8257:7;8276:18;8286:7;8276:9;:18::i;:::-;;8124:177;;;;;;:::o;9423:136::-;9515:7;9534:18;9544:7;9534:9;:18::i;:::-;;9423:136;;;:::o;9280:82::-;9337:18;9347:7;9337:9;:18::i;:::-;;9280:82;;:::o;8570:204::-;8730:7;8749:18;8759:7;8749:9;:18::i;:::-;;8570:204;;;;;;;:::o;10068:78::-;10121:18;10131:7;10121:9;:18::i;8360:168::-;8484:7;8503:18;8513:7;8503:9;:18::i;:::-;;8360:168;;;;;:::o;813:209:133:-;924:20;946:23;988:27;997:7;1006:8;988;:27::i;:::-;981:34;;;;813:209;;;;;;:::o;12413:869:36:-;12614:12;12628:19;12651:7;-1:-1:-1;;;;;12651:20:36;12787:17;:15;:17::i;:::-;12685:374;;;;;12023:25:234;;;;5211:124:36;12064:18:234;;;12057:34;-1:-1:-1;;;;;12165:15:234;;;12145:18;;;12138:43;12217:15;;12197:18;;;12190:43;12277:14;;12270:22;12249:19;;;12242:51;12309:19;;;12302:35;;;12386:4;12374:17;;12353:19;;;12346:46;12408:19;;;12401:35;;;12452:19;;;12445:35;;;11995:19;;12685:374:36;;;-1:-1:-1;;12685:374:36;;;;;;;;;;;;;;-1:-1:-1;;;;;12685:374:36;-1:-1:-1;;;12685:374:36;;;12651:418;;;12685:374;12651:418;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12613:456;;;;13084:7;13079:117;;13164:6;13158:13;13153:2;13145:6;13141:15;13134:38;13079:117;13258:6;13252:13;13247:2;13239:6;13235:15;13228:38;10947:92;11014:18;11024:7;11014:9;:18::i;:::-;;10947:92;;;:::o;1028:231:133:-;1169:23;1211:41;1221:7;1230:11;1243:8;1211:9;:41::i;:::-;1204:48;;1028:231;;;;;;:::o;7417:192:36:-;7556:7;7565;7584:18;7594:7;7584:9;:18::i;:::-;;7417:192;;;;;;;:::o;8816:174::-;8937:7;8946;8965:18;8975:7;8965:9;:18::i;1382:149:133:-;1457:23;1503:21;:19;:21::i;:::-;1496:28;;1382:149;:::o;7889:193:36:-;8029:7;8038;8057:18;8067:7;8057:9;:18::i;7651:176::-;7783:7;7802:18;7812:7;7802:9;:18::i;10465:163::-;10603:18;10613:7;10603:9;:18::i;:::-;;10465:163;;;;;:::o;13563:426::-;13869:10;;;;;;;;;;;-1:-1:-1;;;13869:10:36;;;;;13676:292;;13708:129;13676:292;;;13014:25:234;13859:21:36;13055:18:234;;;13048:34;13902:13:36;13098:18:234;;;13091:34;13945:4:36;13141:18:234;;;;13134:60;;;;13676:292:36;;;;;;;;;;12986:19:234;;;;13676:292:36;;;13649:333;;;;;;13563:426::o;14267:359::-;14321:12;14346;14360:19;14383:7;-1:-1:-1;;;;;14383:20:36;14404:8;;14383:30;;;;;;;:::i;1875:1509:112:-;1989:20;;;2155:15;;;;;;;;:::i;:::-;2151:812;;;2255:91;2289:7;2314:18;;;;:8;:18;:::i;:::-;2255:16;:91::i;:::-;2230:116;;-1:-1:-1;2230:116:112;-1:-1:-1;2151:812:112;;;-1:-1:-1;2502:9:112;2572:47;2591:7;2600:18;;;;:8;:18;:::i;:::-;2572;:47::i;:::-;2945:7;2930:22;;2151:812;3035:21;:19;:21::i;:::-;3017:39;-1:-1:-1;3133:10:112;;3129:200;;3178:45;;3160:12;;3186:10;;3211:6;;3160:12;3178:45;3160:12;3178:45;3211:6;3186:10;3178:45;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3159:64;;;3242:7;3237:82;;3276:28;;-1:-1:-1;;;3276:28:112;;;;;;;;;;;3237:82;3145:184;3129:200;3339:38;1875:1509;;;;;:::o;4093:1323::-;4242:23;;4579:33;:7;4595:16;4579:15;:33::i;:::-;4558:54;;4632:28;4649:10;4632:16;:28::i;:::-;4622:38;;4748:7;4759:1;4748:12;4744:51;;4783:1;4776:8;;;;;4744:51;4889:15;;;;;;;;:::i;:::-;4885:492;;;4985:130;5020:7;5045:20;;;;:8;:20;:::i;:::-;5083:18;;;;:8;:18;:::i;:::-;4985:17;:130::i;:::-;4967:148;;4885:492;;;5195:132;5232:7;5257:20;;;;:8;:20;:::i;:::-;5295:18;;;;:8;:18;:::i;:::-;5195:19;:132::i;:::-;-1:-1:-1;5359:7:112;;4093:1323;-1:-1:-1;;;4093:1323:112:o;5543:150::-;5621:23;5667:19;193:4:122;5667:14:112;:19::i;1321:908:44:-;1443:7;;1519:129;-1:-1:-1;;;;;1533:10:44;1519:43;1576:10;1608:4;1627:11;1519:43;:129::i;:::-;1930:118;1991:17;2023:15;:11;2037:1;2023:15;:::i;:::-;-1:-1:-1;;;;;1944:10:44;1930:39;;:118;:39;:118::i;:::-;2081:106;;-1:-1:-1;;;2081:106:44;;;;;14342:25:234;;;2172:4:44;14383:18:234;;;14376:60;2058:20:44;;2098:17;-1:-1:-1;;;;;2081:44:44;;;;14315:18:234;;2081:106:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2058:129;2220:1;;-1:-1:-1;1321:908:44;-1:-1:-1;;;;;1321:908:44:o;2347:326::-;2529:137;-1:-1:-1;;;;;2543:17:44;2529:50;2593:10;2625:4;2644:12;2529:50;:137::i;1610:118:122:-;1672:7;1699:21;1710:1;1713;193:4;1699:10;:21::i;:::-;1691:30;;1610:118;;;;;:::o;4813:203:44:-;4944:65;;-1:-1:-1;;;4944:65:44;;;;;6553:25:234;;;4906:7:44;;4961:17;-1:-1:-1;;;;;4944:52:44;;;;6526:18:234;;4944:65:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;2969:490::-;3287:132;;-1:-1:-1;;;3287:132:44;;;;;14838:25:234;;;-1:-1:-1;;;;;14937:15:234;;;14917:18;;;14910:43;3404:4:44;14969:18:234;;;14962:43;3123:23:44;;3304:17;3287:43;;;;;;14811:18:234;;3287:132:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;3269:150;2969:490;-1:-1:-1;;;;;2969:490:44:o;3701:325::-;3911:108;-1:-1:-1;;;;;3925:17:44;3911:46;3971:12;3997;3911:46;:108::i;4450:203::-;4580:66;;-1:-1:-1;;;4580:66:44;;;;;6553:25:234;;;4542:7:44;;4597:17;-1:-1:-1;;;;;4580:52:44;;;;6526:18:234;;4580:66:44;6407:177:234;1702:188:166;1829:53;;-1:-1:-1;;;;;15274:15:234;;;1829:53:166;;;15256:34:234;15326:15;;;15306:18;;;15299:43;15358:18;;;15351:34;;;1802:81:166;;1822:5;;1844:18;;;;;15191::234;;1829:53:166;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;1829:53:166;;;;;;;;;;;1802:19;:81::i;3296:380::-;3411:47;;;-1:-1:-1;;;;;15588:32:234;;3411:47:166;;;15570:51:234;15637:18;;;;15630:34;;;3411:47:166;;;;;;;;;;15543:18:234;;;;3411:47:166;;;;;;;;-1:-1:-1;;;;;3411:47:166;-1:-1:-1;;;3411:47:166;;;3474:44;3426:13;3411:47;3474:23;:44::i;:::-;3469:201;;3561:43;;-1:-1:-1;;;;;15588:32:234;;;3561:43:166;;;15570:51:234;3601:1:166;15637:18:234;;;15630:34;3534:71:166;;3554:5;;3576:13;;;;;15543:18:234;;3561:43:166;15396:274:234;3534:71:166;3619:40;3639:5;3646:12;3619:19;:40::i;898:556:122:-;1014:9;1279:1;-1:-1:-1;;1262:19:122;1259:1;1256:26;1253:1;1249:34;1242:42;1229:11;1225:60;1198:146;;1328:1;1325;1318:12;1198:146;-1:-1:-1;1415:9:122;;1411:27;;898:556::o;1303:160:166:-;1412:43;;-1:-1:-1;;;;;15588:32:234;;;1412:43:166;;;15570:51:234;15637:18;;;15630:34;;;1385:71:166;;1405:5;;1427:14;;;;;15543:18:234;;1412:43:166;15396:274:234;4059:629:166;4478:23;4504:33;-1:-1:-1;;;;;4504:27:166;;4532:4;4504:27;:33::i;:::-;4478:59;;4551:10;:17;4572:1;4551:22;;:57;;;;;4589:10;4578:30;;;;;;;;;;;;:::i;:::-;4577:31;4551:57;4547:135;;;4631:40;;-1:-1:-1;;;4631:40:166;;-1:-1:-1;;;;;5796:32:234;;4631:40:166;;;5778:51:234;5751:18;;4631:40:166;;;;;;;;5189:578;5272:4;5574:12;5588:23;5623:5;-1:-1:-1;;;;;5615:19:166;5635:4;5615:25;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5573:67;;;;5657:7;:69;;;;-1:-1:-1;5669:17:166;;:22;;:56;;;5706:10;5695:30;;;;;;;;;;;;:::i;:::-;5657:103;;;;-1:-1:-1;;;;;;;;;;5730:26:166;;:30;;;5189:578::o;2705:151:167:-;2780:12;2811:38;2833:6;2841:4;2847:1;2780:12;3421;3435:23;3462:6;-1:-1:-1;;;;;3462:11:167;3481:5;3488:4;3462:31;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3420:73;;;;3510:55;3537:6;3545:7;3554:10;3510:26;:55::i;:::-;3503:62;3180:392;-1:-1:-1;;;;;;3180:392:167:o;4625:582::-;4769:12;4798:7;4793:408;;4821:19;4829:10;4821:7;:19::i;:::-;4793:408;;;5045:17;;:22;:49;;;;-1:-1:-1;;;;;;5071:18:167;;;:23;5045:49;5041:119;;;5121:24;;-1:-1:-1;;;5121:24:167;;-1:-1:-1;;;;;5796:32:234;;5121:24:167;;;5778:51:234;5751:18;;5121:24:167;5632:203:234;5041:119:167;-1:-1:-1;5180:10:167;5173:17;;5743:516;5874:17;;:21;5870:383;;6102:10;6096:17;6158:15;6145:10;6141:2;6137:19;6130:44;5870:383;6225:17;;-1:-1:-1;;;6225:17:167;;;;;;;;;;;5870:383;5743:516;:::o;14:271:234:-;197:6;189;184:3;171:33;153:3;223:16;;248:13;;;223:16;14:271;-1:-1:-1;14:271:234:o;290:361::-;407:12;;455:4;444:16;;438:23;-1:-1:-1;;;;;;518:11:234;;;;407:12;438:23;552:1;541:13;;538:107;;;632:2;626;616:6;613:1;609:14;606:1;602:22;598:31;594:2;590:40;586:49;577:58;;538:107;;;;290:361;;;:::o;656:127::-;717:10;712:3;708:20;705:1;698:31;748:4;745:1;738:15;772:4;769:1;762:15;788:250;873:1;883:113;897:6;894:1;891:13;883:113;;;973:11;;;967:18;954:11;;;947:39;919:2;912:10;883:113;;;-1:-1:-1;;1030:1:234;1012:16;;1005:27;788:250::o;1043:896::-;1122:6;1175:2;1163:9;1154:7;1150:23;1146:32;1143:52;;;1191:1;1188;1181:12;1143:52;1224:9;1218:16;1253:18;1294:2;1286:6;1283:14;1280:34;;;1310:1;1307;1300:12;1280:34;1348:6;1337:9;1333:22;1323:32;;1393:7;1386:4;1382:2;1378:13;1374:27;1364:55;;1415:1;1412;1405:12;1364:55;1444:2;1438:9;1466:2;1462;1459:10;1456:36;;;1472:18;;:::i;:::-;1547:2;1541:9;1515:2;1601:13;;-1:-1:-1;;1597:22:234;;;1621:2;1593:31;1589:40;1577:53;;;1645:18;;;1665:22;;;1642:46;1639:72;;;1691:18;;:::i;:::-;1731:10;1727:2;1720:22;1766:2;1758:6;1751:18;1806:7;1801:2;1796;1792;1788:11;1784:20;1781:33;1778:53;;;1827:1;1824;1817:12;1778:53;1840:68;1905:2;1900;1892:6;1888:15;1883:2;1879;1875:11;1840:68;:::i;:::-;1927:6;1043:896;-1:-1:-1;;;;;;;1043:896:234:o;1944:139::-;-1:-1:-1;;;;;2027:31:234;;2017:42;;2007:70;;2073:1;2070;2063:12;2088:270;2162:6;2215:2;2203:9;2194:7;2190:23;2186:32;2183:52;;;2231:1;2228;2221:12;2183:52;2270:9;2257:23;2289:39;2322:5;2289:39;:::i;2363:118::-;2449:5;2442:13;2435:21;2428:5;2425:32;2415:60;;2471:1;2468;2461:12;2486:241;2542:6;2595:2;2583:9;2574:7;2570:23;2566:32;2563:52;;;2611:1;2608;2601:12;2563:52;2650:9;2637:23;2669:28;2691:5;2669:28;:::i;2732:155::-;2792:5;2837:2;2828:6;2823:3;2819:16;2815:25;2812:45;;;2853:1;2850;2843:12;2892:493;2997:6;3005;3013;3066:2;3054:9;3045:7;3041:23;3037:32;3034:52;;;3082:1;3079;3072:12;3034:52;3118:9;3105:23;3095:33;;3175:2;3164:9;3160:18;3147:32;3137:42;;3230:2;3219:9;3215:18;3202:32;3257:18;3249:6;3246:30;3243:50;;;3289:1;3286;3279:12;3243:50;3312:67;3371:7;3362:6;3351:9;3347:22;3312:67;:::i;:::-;3302:77;;;2892:493;;;;;:::o;3643:367::-;3706:8;3716:6;3770:3;3763:4;3755:6;3751:17;3747:27;3737:55;;3788:1;3785;3778:12;3737:55;-1:-1:-1;3811:20:234;;3854:18;3843:30;;3840:50;;;3886:1;3883;3876:12;3840:50;3923:4;3915:6;3911:17;3899:29;;3983:3;3976:4;3966:6;3963:1;3959:14;3951:6;3947:27;3943:38;3940:47;3937:67;;;4000:1;3997;3990:12;4015:1066;4155:6;4163;4171;4179;4187;4195;4248:3;4236:9;4227:7;4223:23;4219:33;4216:53;;;4265:1;4262;4255:12;4216:53;4304:9;4291:23;4323:39;4356:5;4323:39;:::i;:::-;4381:5;-1:-1:-1;4438:2:234;4423:18;;4410:32;4451:41;4410:32;4451:41;:::i;:::-;4511:7;-1:-1:-1;4569:2:234;4554:18;;4541:32;4592:18;4622:14;;;4619:34;;;4649:1;4646;4639:12;4619:34;4688:70;4750:7;4741:6;4730:9;4726:22;4688:70;:::i;:::-;4777:8;;-1:-1:-1;4662:96:234;-1:-1:-1;4865:2:234;4850:18;;4837:32;;-1:-1:-1;4881:16:234;;;4878:36;;;4910:1;4907;4900:12;4878:36;;4949:72;5013:7;5002:8;4991:9;4987:24;4949:72;:::i;:::-;4015:1066;;;;-1:-1:-1;4015:1066:234;;-1:-1:-1;4015:1066:234;;5040:8;;4015:1066;-1:-1:-1;;;4015:1066:234:o;5086:541::-;5172:6;5180;5188;5196;5249:3;5237:9;5228:7;5224:23;5220:33;5217:53;;;5266:1;5263;5256:12;5217:53;5302:9;5289:23;5279:33;;5362:2;5351:9;5347:18;5334:32;5375:39;5408:5;5375:39;:::i;:::-;5433:5;-1:-1:-1;5490:2:234;5475:18;;5462:32;5503:41;5462:32;5503:41;:::i;:::-;5086:541;;;;-1:-1:-1;5563:7:234;;5617:2;5602:18;5589:32;;-1:-1:-1;;5086:541:234:o;5840:562::-;5954:6;5962;5970;5978;6031:3;6019:9;6010:7;6006:23;6002:33;5999:53;;;6048:1;6045;6038:12;5999:53;6084:9;6071:23;6061:33;;6141:2;6130:9;6126:18;6113:32;6103:42;;6192:2;6181:9;6177:18;6164:32;6154:42;;6247:2;6236:9;6232:18;6219:32;6274:18;6266:6;6263:30;6260:50;;;6306:1;6303;6296:12;6260:50;6329:67;6388:7;6379:6;6368:9;6364:22;6329:67;:::i;:::-;6319:77;;;5840:562;;;;;;;:::o;6771:357::-;6858:6;6911:2;6899:9;6890:7;6886:23;6882:32;6879:52;;;6927:1;6924;6917:12;6879:52;6967:9;6954:23;7000:18;6992:6;6989:30;6986:50;;;7032:1;7029;7022:12;6986:50;7055:67;7114:7;7105:6;7094:9;7090:22;7055:67;:::i;:::-;7045:77;6771:357;-1:-1:-1;;;;6771:357:234:o;7133:248::-;7201:6;7209;7262:2;7250:9;7241:7;7237:23;7233:32;7230:52;;;7278:1;7275;7268:12;7230:52;-1:-1:-1;;7301:23:234;;;7371:2;7356:18;;;7343:32;;-1:-1:-1;7133:248:234:o;7386:631::-;7509:6;7517;7525;7533;7541;7594:3;7582:9;7573:7;7569:23;7565:33;7562:53;;;7611:1;7608;7601:12;7562:53;7647:9;7634:23;7624:33;;7704:2;7693:9;7689:18;7676:32;7666:42;;7755:2;7744:9;7740:18;7727:32;7717:42;;7806:2;7795:9;7791:18;7778:32;7768:42;;7861:3;7850:9;7846:19;7833:33;7889:18;7881:6;7878:30;7875:50;;;7921:1;7918;7911:12;7875:50;7944:67;8003:7;7994:6;7983:9;7979:22;7944:67;:::i;:::-;7934:77;;;7386:631;;;;;;;;:::o;8022:541::-;8108:6;8116;8124;8132;8185:3;8173:9;8164:7;8160:23;8156:33;8153:53;;;8202:1;8199;8192:12;8153:53;8238:9;8225:23;8215:33;;8298:2;8287:9;8283:18;8270:32;8311:39;8344:5;8311:39;:::i;:::-;8369:5;-1:-1:-1;8421:2:234;8406:18;;8393:32;;-1:-1:-1;8477:2:234;8462:18;;8449:32;8490:41;8449:32;8490:41;:::i;:::-;8022:541;;;;-1:-1:-1;8022:541:234;;-1:-1:-1;;8022:541:234:o;8568:390::-;8633:6;8641;8694:2;8682:9;8673:7;8669:23;8665:32;8662:52;;;8710:1;8707;8700:12;8662:52;8749:9;8736:23;8768:39;8801:5;8768:39;:::i;:::-;8826:5;-1:-1:-1;8883:2:234;8868:18;;8855:32;8896:30;8855:32;8896:30;:::i;:::-;8945:7;8935:17;;;8568:390;;;;;:::o;8963:425::-;9059:6;9067;9120:2;9108:9;9099:7;9095:23;9091:32;9088:52;;;9136:1;9133;9126:12;9088:52;9172:9;9159:23;9149:33;;9233:2;9222:9;9218:18;9205:32;9260:18;9252:6;9249:30;9246:50;;;9292:1;9289;9282:12;9246:50;9315:67;9374:7;9365:6;9354:9;9350:22;9315:67;:::i;:::-;9305:77;;;8963:425;;;;;:::o;9393:912::-;9501:6;9509;9517;9525;9533;9541;9549;9602:3;9590:9;9581:7;9577:23;9573:33;9570:53;;;9619:1;9616;9609:12;9570:53;9658:9;9645:23;9677:39;9710:5;9677:39;:::i;:::-;9735:5;-1:-1:-1;9792:2:234;9777:18;;9764:32;9805:41;9764:32;9805:41;:::i;:::-;9865:7;-1:-1:-1;9924:2:234;9909:18;;9896:32;9937:30;9896:32;9937:30;:::i;:::-;9986:7;-1:-1:-1;10040:2:234;10025:18;;10012:32;;-1:-1:-1;10096:3:234;10081:19;;10068:33;10145:4;10132:18;;10120:31;;10110:59;;10165:1;10162;10155:12;10110:59;9393:912;;;;-1:-1:-1;9393:912:234;;;;10188:7;10242:3;10227:19;;10214:33;;-1:-1:-1;10294:3:234;10279:19;;;10266:33;;9393:912;-1:-1:-1;;9393:912:234:o;10310:391::-;10387:6;10395;10403;10456:2;10444:9;10435:7;10431:23;10427:32;10424:52;;;10472:1;10469;10462:12;10424:52;10508:9;10495:23;10485:33;;10568:2;10557:9;10553:18;10540:32;10581:39;10614:5;10581:39;:::i;:::-;10310:391;;10639:5;;-1:-1:-1;;;10691:2:234;10676:18;;;;10663:32;;10310:391::o;10966:691::-;11061:6;11069;11077;11085;11093;11146:3;11134:9;11125:7;11121:23;11117:33;11114:53;;;11163:1;11160;11153:12;11114:53;11199:9;11186:23;11176:33;;11259:2;11248:9;11244:18;11231:32;11272:39;11305:5;11272:39;:::i;:::-;11330:5;-1:-1:-1;11387:2:234;11372:18;;11359:32;11400:41;11359:32;11400:41;:::i;:::-;11460:7;-1:-1:-1;11514:2:234;11499:18;;11486:32;;-1:-1:-1;11570:3:234;11555:19;;11542:33;11584:41;11542:33;11584:41;:::i;:::-;11644:7;11634:17;;;10966:691;;;;;;;;:::o;12491:287::-;12620:3;12658:6;12652:13;12674:66;12733:6;12728:3;12721:4;12713:6;12709:17;12674:66;:::i;:::-;12756:16;;;;;12491:287;-1:-1:-1;;12491:287:234:o;13205:521::-;13282:4;13288:6;13348:11;13335:25;13442:2;13438:7;13427:8;13411:14;13407:29;13403:43;13383:18;13379:68;13369:96;;13461:1;13458;13451:12;13369:96;13488:33;;13540:20;;;-1:-1:-1;13583:18:234;13572:30;;13569:50;;;13615:1;13612;13605:12;13569:50;13648:4;13636:17;;-1:-1:-1;13679:14:234;13675:27;;;13665:38;;13662:58;;;13716:1;13713;13706:12;13941:222;14006:9;;;14027:10;;;14024:133;;;14079:10;14074:3;14070:20;14067:1;14060:31;14114:4;14111:1;14104:15;14142:4;14139:1;14132:15;14447:184;14517:6;14570:2;14558:9;14549:7;14545:23;14541:32;14538:52;;;14586:1;14583;14576:12;14538:52;-1:-1:-1;14609:16:234;;14447:184;-1:-1:-1;14447:184:234:o;15962:245::-;16029:6;16082:2;16070:9;16061:7;16057:23;16053:32;16050:52;;;16098:1;16095;16088:12;16050:52;16130:9;16124:16;16149:28;16171:5;16149:28;:::i";
        readonly linkReferences: {};
        readonly immutableReferences: {
            readonly "17532": readonly [{
                readonly start: 3516;
                readonly length: 32;
            }, {
                readonly start: 3613;
                readonly length: 32;
            }];
            readonly "17536": readonly [{
                readonly start: 3561;
                readonly length: 32;
            }, {
                readonly start: 3683;
                readonly length: 32;
            }, {
                readonly start: 3826;
                readonly length: 32;
            }, {
                readonly start: 3921;
                readonly length: 32;
            }, {
                readonly start: 4084;
                readonly length: 32;
            }, {
                readonly start: 4217;
                readonly length: 32;
            }, {
                readonly start: 4281;
                readonly length: 32;
            }];
            readonly "3799": readonly [{
                readonly start: 517;
                readonly length: 32;
            }, {
                readonly start: 967;
                readonly length: 32;
            }, {
                readonly start: 1801;
                readonly length: 32;
            }, {
                readonly start: 1899;
                readonly length: 32;
            }, {
                readonly start: 1949;
                readonly length: 32;
            }, {
                readonly start: 2051;
                readonly length: 32;
            }, {
                readonly start: 2197;
                readonly length: 32;
            }, {
                readonly start: 2314;
                readonly length: 32;
            }, {
                readonly start: 2626;
                readonly length: 32;
            }, {
                readonly start: 2896;
                readonly length: 32;
            }];
            readonly "3802": readonly [{
                readonly start: 1689;
                readonly length: 32;
            }, {
                readonly start: 1849;
                readonly length: 32;
            }, {
                readonly start: 1999;
                readonly length: 32;
            }];
            readonly "3805": readonly [{
                readonly start: 1430;
                readonly length: 32;
            }, {
                readonly start: 2753;
                readonly length: 32;
            }, {
                readonly start: 2855;
                readonly length: 32;
            }];
            readonly "3808": readonly [{
                readonly start: 1533;
                readonly length: 32;
            }, {
                readonly start: 2098;
                readonly length: 32;
            }, {
                readonly start: 2240;
                readonly length: 32;
            }, {
                readonly start: 2699;
                readonly length: 32;
            }];
            readonly "3811": readonly [{
                readonly start: 1741;
                readonly length: 32;
            }, {
                readonly start: 2146;
                readonly length: 32;
            }, {
                readonly start: 2812;
                readonly length: 32;
            }];
        };
    };
    readonly methodIdentifiers: {
        readonly "PERMIT_TYPEHASH()": "30adf81f";
        readonly "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": "4c2ac1d9";
        readonly "batchTransferFrom(address,address,uint256[],uint256[])": "17fad7fc";
        readonly "checkpoint(uint256,uint256)": "414f826d";
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
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"contract IERC20\",\"name\":\"vaultSharesToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"sweepCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolConfig\",\"name\":\"_config\",\"type\":\"tuple\"},{\"internalType\":\"address\",\"name\":\"_target0\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_target1\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_target2\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_target3\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_target4\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"name\":\"AddressEmptyCode\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"AddressInsufficientBalance\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FailedInnerCall\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"}],\"name\":\"SafeERC20FailedOperation\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"TransferFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnexpectedSuccess\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"basePayment\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fees\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"checkpointVaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newFeeCollector\",\"type\":\"address\"}],\"name\":\"FeeCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseProceeds\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"}],\"name\":\"PauseStatusUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"name\":\"Sweep\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newSweepCollector\",\"type\":\"address\"}],\"name\":\"SweepCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"stateMutability\":\"nonpayable\",\"type\":\"fallback\"},{\"inputs\":[],\"name\":\"PERMIT_TYPEHASH\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"addLiquidity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"name\":\"batchTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"checkpoint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"closeLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"closeShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"collectGovernanceFee\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"deposit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"sharesMinted\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"domainSeparator\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"initialize\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"openLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"openShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"name\":\"pause\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_approved\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permitForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"pricePerVaultShare\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"redeemWithdrawalShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"removeLiquidity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"setApproval\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"setApprovalBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"setFeeCollector\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"setGovernance\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"name\":\"setPauser\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"setSweepCollector\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"sweep\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target0\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target1\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target2\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target3\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target4\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"transferFromBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_shares\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_sharePrice\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"withdraw\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"amountWithdrawn\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"errors\":{\"AddressEmptyCode(address)\":[{\"details\":\"There's no code at `target` (it is not a contract).\"}],\"AddressInsufficientBalance(address)\":[{\"details\":\"The ETH balance of the account is not enough to perform the operation.\"}],\"FailedInnerCall()\":[{\"details\":\"A call to an address target failed. The target may have reverted.\"}],\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}],\"SafeERC20FailedOperation(address)\":[{\"details\":\"An operation with an ERC20 token failed.\"}]},\"kind\":\"dev\",\"methods\":{\"addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_contribution\":\"The amount of capital to supply. The units of this        quantity are either base or vault shares, depending on the value        of `_options.asBase`.\",\"_maxApr\":\"The maximum APR at which the LP is willing to supply.\",\"_minApr\":\"The minimum APR at which the LP is willing to supply.\",\"_minLpSharePrice\":\"The minimum LP share price the LP is willing        to accept for their shares. LPs incur negative slippage when        adding liquidity if there is a net curve position in the market,        so this allows LPs to protect themselves from high levels of        slippage. The units of this quantity are either base or vault        shares, depending on the value of `_options.asBase`.\",\"_options\":\"The options that configure how the operation is settled.\"},\"returns\":{\"_0\":\"The LP shares received by the LP.\"}},\"batchTransferFrom(address,address,uint256[],uint256[])\":{\"params\":{\"from\":\"The source account.\",\"ids\":\"The array of token ids of the asset to transfer.\",\"to\":\"The destination account.\",\"values\":\"The amount of each token to transfer.\"}},\"checkpoint(uint256,uint256)\":{\"params\":{\"_checkpointTime\":\"The time of the checkpoint to create.\",\"_maxIterations\":\"The number of iterations to use in the Newton's        method component of `_distributeExcessIdleSafe`. This defaults to        `LPMath.SHARE_PROCEEDS_MAX_ITERATIONS` if the specified value is        smaller than the constant.\"}},\"closeLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_bondAmount\":\"The amount of longs to close.\",\"_maturityTime\":\"The maturity time of the long.\",\"_minOutput\":\"The minimum proceeds the trader will accept. The units        of this quantity are either base or vault shares, depending on        the value of `_options.asBase`.\",\"_options\":\"The options that configure how the trade is settled.\"},\"returns\":{\"_0\":\"The proceeds the user receives. The units of this         quantity are either base or vault shares, depending on the value         of `_options.asBase`.\"}},\"closeShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_bondAmount\":\"The amount of shorts to close.\",\"_maturityTime\":\"The maturity time of the short.\",\"_minOutput\":\"The minimum output of this trade. The units of this        quantity are either base or vault shares, depending on the value        of `_options.asBase`.\",\"_options\":\"The options that configure how the trade is settled.\"},\"returns\":{\"_0\":\"The proceeds of closing this short. The units of this         quantity are either base or vault shares, depending on the value         of `_options.asBase`.\"}},\"collectGovernanceFee((address,bool,bytes))\":{\"params\":{\"_options\":\"The options that configure how the fees are settled.\"},\"returns\":{\"_0\":\"The governance fees collected. The units of this         quantity are either base or vault shares, depending on the value         of `_options.asBase`.\"}},\"domainSeparator()\":{\"returns\":{\"_0\":\"The EIP712 domain separator.\"}},\"initialize(uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_apr\":\"The target APR.\",\"_contribution\":\"The amount of capital to supply. The units of this        quantity are either base or vault shares, depending on the value        of `_options.asBase`.\",\"_options\":\"The options that configure how the operation is settled.\"},\"returns\":{\"_0\":\"The initial number of LP shares created.\"}},\"openLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_amount\":\"The amount of capital provided to open the long. The        units of this quantity are either base or vault shares, depending        on the value of `_options.asBase`.\",\"_minOutput\":\"The minimum number of bonds to receive.\",\"_minVaultSharePrice\":\"The minimum vault share price at which to        open the long. This allows traders to protect themselves from        opening a long in a checkpoint where negative interest has        accrued.\",\"_options\":\"The options that configure how the trade is settled.\"},\"returns\":{\"_0\":\"The maturity time of the bonds.\",\"_1\":\"The amount of bonds the user received.\"}},\"openShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_bondAmount\":\"The amount of bonds to short.\",\"_maxDeposit\":\"The most the user expects to deposit for this trade.        The units of this quantity are either base or vault shares,        depending on the value of `_options.asBase`.\",\"_minVaultSharePrice\":\"The minimum vault share price at which to open        the short. This allows traders to protect themselves from opening        a short in a checkpoint where negative interest has accrued.\",\"_options\":\"The options that configure how the trade is settled.\"},\"returns\":{\"_0\":\"The maturity time of the short.\",\"_1\":\"The amount the user deposited for this trade. The units         of this quantity are either base or vault shares, depending on         the value of `_options.asBase`.\"}},\"pause(bool)\":{\"params\":{\"_status\":\"True to pause all deposits and false to unpause them.\"}},\"permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"details\":\"The signature for this function follows EIP 712 standard and should      be generated with the eth_signTypedData JSON RPC call instead of      the eth_sign JSON RPC call. If using out of date parity signing      libraries the v component may need to be adjusted. Also it is very      rare but possible for v to be other values, those values are not      supported.\",\"params\":{\"_approved\":\"A boolean of the approval status to set to.\",\"deadline\":\"The timestamp which the signature must be submitted by        to be valid.\",\"owner\":\"The owner of the account which is having the new approval set.\",\"r\":\"The r component of the ECDSA signature.\",\"s\":\"The s component of the ECDSA signature.\",\"spender\":\"The address which will be allowed to spend owner's tokens.\",\"v\":\"Extra ECDSA data which allows public key recovery from        signature assumed to be 27 or 28.\"}},\"pricePerVaultShare()\":{\"returns\":{\"vaultSharePrice\":\"The current share price.\"}},\"redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_minOutputPerShare\":\"The minimum amount the LP expects to        receive for each withdrawal share that is burned. The units of        this quantity are either base or vault shares, depending on the        value of `_options.asBase`.\",\"_options\":\"The options that configure how the operation is settled.\",\"_withdrawalShares\":\"The withdrawal shares to redeem.\"},\"returns\":{\"_0\":\"The amount the LP received. The units of this quantity         are either base or vault shares, depending on the value of         `_options.asBase`.\",\"_1\":\"The amount of withdrawal shares that         were redeemed.\"}},\"removeLiquidity(uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_lpShares\":\"The LP shares to burn.\",\"_minOutputPerShare\":\"The minimum amount the LP expects to receive        for each withdrawal share that is burned. The units of this        quantity are either base or vault shares, depending on the value        of `_options.asBase`.\",\"_options\":\"The options that configure how the operation is settled.\"},\"returns\":{\"_0\":\"The amount the LP removing liquidity receives. The         units of this quantity are either base or vault shares,         depending on the value of `_options.asBase`.\",\"_1\":\"The base that the LP receives buys out some of         their LP shares, but it may not be sufficient to fully buy the         LP out. In this case, the LP receives withdrawal shares equal in         value to the present value they are owed. As idle capital         becomes available, the pool will buy back these shares.\"}},\"setApproval(uint256,address,uint256)\":{\"params\":{\"amount\":\"The max tokens the approved person can use, setting to        uint256.max will cause the value to never decrement (saving gas        on transfer).\",\"operator\":\"The address who will be able to use the tokens.\",\"tokenID\":\"The asset to approve the use of.\"}},\"setApprovalBridge(uint256,address,uint256,address)\":{\"params\":{\"amount\":\"The max tokens the approved person can use, setting to        uint256.max will cause the value to never decrement [saving gas        on transfer].\",\"caller\":\"The eth address which called the linking contract.\",\"operator\":\"The address who will be able to use the tokens.\",\"tokenID\":\"The asset to approve the use of.\"}},\"setApprovalForAll(address,bool)\":{\"params\":{\"approved\":\"True to approve, false to remove approval.\",\"operator\":\"The eth address which can access the caller's assets.\"}},\"setFeeCollector(address)\":{\"params\":{\"_who\":\"The new fee collector address.\"}},\"setGovernance(address)\":{\"params\":{\"_who\":\"The new governance address.\"}},\"setPauser(address,bool)\":{\"params\":{\"status\":\"The new pauser status.\",\"who\":\"The address to change.\"}},\"setSweepCollector(address)\":{\"params\":{\"_who\":\"The new sweep collector address.\"}},\"sweep(address)\":{\"details\":\"WARN: It is unlikely but possible that there is a selector overlap      with 'transferFrom'. Any integrating contracts should be checked      for that, as it may result in an unexpected call from this address.\",\"params\":{\"_target\":\"The target token to sweep.\"}},\"transferFrom(uint256,address,address,uint256)\":{\"params\":{\"amount\":\"The amount of token to move.\",\"from\":\"The address whose balance will be reduced.\",\"to\":\"The address whose balance will be increased.\",\"tokenID\":\"The token identifier.\"}},\"transferFromBridge(uint256,address,address,uint256,address)\":{\"params\":{\"amount\":\"The amount of token to move.\",\"caller\":\"The msg.sender or the caller of the ERC20Forwarder.\",\"from\":\"The address whose balance will be reduced.\",\"to\":\"The address whose balance will be increased.\",\"tokenID\":\"The token identifier.\"}}},\"version\":1},\"userdoc\":{\"errors\":{\"TransferFailed()\":[{\"notice\":\"Thrown when an ether transfer fails.\"}],\"UnexpectedSuccess()\":[{\"notice\":\"Thrown when a read-only call succeeds. The proxy architecture         uses a force-revert delegatecall pattern to ensure that calls         that are intended to be read-only are actually read-only.\"}]},\"events\":{\"AddLiquidity(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when an LP adds liquidity to the Hyperdrive pool.\"},\"Approval(address,address,uint256)\":{\"notice\":\"Emitted when an account changes the allowance for another         account.\"},\"ApprovalForAll(address,address,bool)\":{\"notice\":\"Emitted when an account changes the approval for all of its         tokens.\"},\"CloseLong(address,address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is closed.\"},\"CloseShort(address,address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is closed.\"},\"CollectGovernanceFee(address,uint256)\":{\"notice\":\"Emitted when governance fees are collected.\"},\"CreateCheckpoint(uint256,uint256,uint256,uint256,uint256,uint256)\":{\"notice\":\"Emitted when a checkpoint is created.\"},\"FeeCollectorUpdated(address)\":{\"notice\":\"Emitted when the fee collector address is updated.\"},\"GovernanceUpdated(address)\":{\"notice\":\"Emitted when the governance address is updated.\"},\"Initialize(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when the Hyperdrive pool is initialized.\"},\"OpenLong(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is opened.\"},\"OpenShort(address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is opened.\"},\"PauseStatusUpdated(bool)\":{\"notice\":\"Emitted when the pause status is updated.\"},\"PauserUpdated(address,bool)\":{\"notice\":\"Emitted when a pauser is updated.\"},\"RedeemWithdrawalShares(address,address,uint256,uint256,uint256,bool)\":{\"notice\":\"Emitted when an LP redeems withdrawal shares.\"},\"RemoveLiquidity(address,address,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when an LP removes liquidity from the Hyperdrive pool.\"},\"Sweep(address,address)\":{\"notice\":\"Emitted when tokens are swept.\"},\"SweepCollectorUpdated(address)\":{\"notice\":\"Emitted when the sweep collector address is updated.\"},\"TransferSingle(address,address,address,uint256,uint256)\":{\"notice\":\"Emitted when tokens are transferred from one account to another.\"}},\"kind\":\"user\",\"methods\":{\"PERMIT_TYPEHASH()\":{\"notice\":\"The typehash used to calculate the EIP712 hash for `permitForAll`.\"},\"addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows LPs to supply liquidity for LP shares.\"},\"batchTransferFrom(address,address,uint256[],uint256[])\":{\"notice\":\"Transfers several assets from one account to another.\"},\"checkpoint(uint256,uint256)\":{\"notice\":\"Attempts to mint a checkpoint with the specified checkpoint time.\"},\"closeLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Closes a long position with a specified maturity time.\"},\"closeShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Closes a short position with a specified maturity time.\"},\"collectGovernanceFee((address,bool,bytes))\":{\"notice\":\"This function collects the governance fees accrued by the pool.\"},\"domainSeparator()\":{\"notice\":\"Computes the EIP712 domain separator which prevents user signed         messages for this contract to be replayed in other contracts:         https://eips.ethereum.org/EIPS/eip-712.\"},\"initialize(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows the first LP to initialize the market with a target APR.\"},\"openLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Opens a long position.\"},\"openShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Opens a short position.\"},\"pause(bool)\":{\"notice\":\"Allows an authorized address to pause this contract.\"},\"permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"notice\":\"Allows a caller who is not the owner of an account to execute the      functionality of 'approve' for all assets with the owners signature.\"},\"pricePerVaultShare()\":{\"notice\":\"Loads the share price from the yield source\"},\"redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Redeems withdrawal shares by giving the LP a pro-rata amount of         the withdrawal pool's proceeds. This function redeems the         maximum amount of the specified withdrawal shares given the         amount of withdrawal shares ready to withdraw.\"},\"removeLiquidity(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows an LP to burn shares and withdraw from the pool.\"},\"setApproval(uint256,address,uint256)\":{\"notice\":\"Allows a user to set an approval for an individual asset with         specific amount.\"},\"setApprovalBridge(uint256,address,uint256,address)\":{\"notice\":\"Allows the compatibility linking contract to forward calls to         set asset approvals.\"},\"setApprovalForAll(address,bool)\":{\"notice\":\"Allows a user to approve an operator to use all of their assets.\"},\"setFeeCollector(address)\":{\"notice\":\"Allows governance to transfer the fee collector role.\"},\"setGovernance(address)\":{\"notice\":\"Allows governance to transfer the governance role.\"},\"setPauser(address,bool)\":{\"notice\":\"Allows governance to change the pauser status of an address.\"},\"setSweepCollector(address)\":{\"notice\":\"Allows governance to transfer the sweep collector role.\"},\"sweep(address)\":{\"notice\":\"Transfers the contract's balance of a target token to the fee         collector address.\"},\"target0()\":{\"notice\":\"The target0 address. This is a logic contract that contains all         of the getters for the Hyperdrive pool as well as some stateful         functions.\"},\"target1()\":{\"notice\":\"The target1 address. This is a logic contract that contains         stateful functions.\"},\"target2()\":{\"notice\":\"The target2 address. This is a logic contract that contains         stateful functions.\"},\"target3()\":{\"notice\":\"The target3 address. This is a logic contract that contains         stateful functions.\"},\"target4()\":{\"notice\":\"The target4 address. This is a logic contract that contains         stateful functions.\"},\"transferFrom(uint256,address,address,uint256)\":{\"notice\":\"Transfers an amount of assets from the source to the destination.\"},\"transferFromBridge(uint256,address,address,uint256,address)\":{\"notice\":\"Permissioned transfer for the bridge to access, only callable by         the ERC20 linking bridge.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/test/MockERC4626Hyperdrive.sol\":\"MockERC4626Hyperdrive\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/external/Hyperdrive.sol\":{\"keccak256\":\"0x3478db194907ee23ef666d80699c8c59077585ac00495f7ffd39c2118c5335f4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ec9adb042acce1841a51f7be158271b4c76c7c0084c682a31377885b72923b10\",\"dweb:/ipfs/QmaRe6yKaUqsbb84DmePqiB3DXnsZ5j3a6SvUxhwRpzFac\"]},\"contracts/src/external/HyperdriveTarget0.sol\":{\"keccak256\":\"0x9cf2186541b5454544930c45d3ca5a7396a9122d7218e42670ae6e77eba7fe92\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6d3da4a8aadd58e9f2ddc4c0fed4b91be1f4d8d572c7cb9eea7c6f2aa416b206\",\"dweb:/ipfs/QmcSDMBvhpkMi2NPqWhbgvK2qBzUaihW28t3KpZMxmCrmF\"]},\"contracts/src/instances/erc4626/ERC4626Base.sol\":{\"keccak256\":\"0x3ccd195018546fef93ad3b59063f12c8fdba1b1cb3fa85306350b63a74433906\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ea807c6cb97a18c7fdaa60c862b64888d5fd771bc50d9ae17208fa4b759e82cd\",\"dweb:/ipfs/QmPycBtyqvaoBxZ1jSWGRmQUwVYCjDxc41diksgmrLkmXD\"]},\"contracts/src/instances/erc4626/ERC4626Hyperdrive.sol\":{\"keccak256\":\"0x2dac35b9b37ec389c4c032e67dd23ecde9e72d0737b6033f68e990d8f02e8bfd\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://138193829562c6f081bc9d9cf66b2d2b9313ba7efea56e40bdf20889f0cd5f87\",\"dweb:/ipfs/QmVTLXxt5spNxjqPfq2gQ7a3JWsx9tfuXqKdw6DHytjad4\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IERC4626.sol\":{\"keccak256\":\"0x891ede2965eda391b0e78cdba7490a5ddadcc43f039c22c183529300dada0741\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ec659582084892c1a857676bf39fa5e26532557a8210978408857315e9195366\",\"dweb:/ipfs/QmYYXo28FtBLEBQxK9YeFhyB2zdrpbrNQXfrzN4fmBuHuB\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x8b726cbf87e5dbec80207d47b64bb20e35a9fb42667b9d1612a87ad8b2d361b5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b2015112addc7b4ba33c0626a14c963294164906afce52296f3dc209737a7339\",\"dweb:/ipfs/QmZYR6qwGspufCtiofdvYbaHhxSrguNnP52rd3y3zXWiDz\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0xa48349cf2fcd27ce3aafcffeba25647d289e17653dc1a4e643c3de0b47e5c75f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4dee6d2061cc68e3bc52acfa0d35c973785e49170f49d2e09efd50ead85e2a19\",\"dweb:/ipfs/QmX6tpGgXTnVGt1CdD796N5kn8YrZWFX1FcRLqtBBhB5qk\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x567b78388802482303910be022299e39a0ef95b4a9a30d6acc4bea0d467fa784\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://338a9f960049c37d13b6e23e5bc2c9e6005366aa99c95168f57f170ef2a4bcfa\",\"dweb:/ipfs/QmaeAwacrvMgJGqrKDSXZkYNYRJ5FvirYFpY3xjbCbJTF9\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86\",\"dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/internal/HyperdriveAdmin.sol\":{\"keccak256\":\"0x98a928423936e48c06552ec01a44687d42219ced71d689596aef6c7052c969a8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://f0da6702fe7a686ab5b371697112d4d025d9e4f9ff2b0f36276b12ec8542fcfd\",\"dweb:/ipfs/QmQJrxcTRQ4kL6CroF6cdVZuv6S9QUuZrm5BMUTA6o23xN\"]},\"contracts/src/internal/HyperdriveBase.sol\":{\"keccak256\":\"0x6d10a1d7e62a374bd1c6cd1f41e16a8702ef2b25b1dac34479ef8e3b31abd2f3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a60f3227d4de9ab8163bc0625e5e66f1ea17b3b2901ae40547289d5ca6b82186\",\"dweb:/ipfs/QmWF4mUXAAYaTko7pWjje2Jc9XumnaAYURUNuvwSRoS28E\"]},\"contracts/src/internal/HyperdriveCheckpoint.sol\":{\"keccak256\":\"0x80e136696165d1ea5e1b0dbe7d04c99f3303b59a6e79c8917824892c3e7b4ee7\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://bf52ad7b2b9907331275ed5cdc7055d223224a8b539f82d9ba76c6dc67ae5334\",\"dweb:/ipfs/QmU3ncwDV4TkX6C377wgWSHm13ndDcFGLiBHzuHbfED19P\"]},\"contracts/src/internal/HyperdriveLP.sol\":{\"keccak256\":\"0x13a94b5343886983c874d8fb5cd4c9e7aa3f9e52d607a0fcfcbdfeeb64577488\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a7574afd3d91c62cae7a79e17c2cb7e93700aaebc74322f6fe119c61fbdcb4e4\",\"dweb:/ipfs/QmdWHYcuCoZNdQ2jMUg9zkbhsi25UVH5JXxoFm379Va4qF\"]},\"contracts/src/internal/HyperdriveLong.sol\":{\"keccak256\":\"0x02cd58cabac084c23a5abdd3d18e23bbf31629a9f847da7f738ffa83ac4627cc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://553b6fbe3f08078ca31a6ad1e15088a1724474a2d66abbfaaf4962b52a3572c4\",\"dweb:/ipfs/QmQpVa9HEJmaFKh4tANJXk9UBWzmmAsqVZ8RsfAN1rzVbZ\"]},\"contracts/src/internal/HyperdriveMultiToken.sol\":{\"keccak256\":\"0x21a9aafb8e23a22c77111e13538fa8f709446e4f3a64ef84b2eebc2aa9d04373\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://41517912353540de5b430587ca8220f9d34d4432d3c723951d5fb618d5907b5d\",\"dweb:/ipfs/QmU3cTCrAq94digVS97s5af1Pu86uGBpmpus6w7828fUbG\"]},\"contracts/src/internal/HyperdriveShort.sol\":{\"keccak256\":\"0xffefa815f96836971b6d92fd128fc9a14cd09a01b6845c8bcab7c778bfe1b87c\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ad050506fd4987240b09a7ace16062525491bbf17514e60f64a7b821e1a5c82c\",\"dweb:/ipfs/QmXqhwVmvC6w1rkAF6SpAgU3uim5H24E76LMBvavwJbJsx\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xde163699e55f6d6bd660fa7a1cf25927d2e895e16663a7c47fa45d6bc4878c2e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c9908cf875ad59413154825ea59e2635b16f0020a0e3368ec85b6c7379ab3f19\",\"dweb:/ipfs/QmeX22wqHYurD9J6WTxrQjtqUoh21bFmLm7E1SzCkgQV7d\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0x3031a1ec376be333eebe0062c474a22d7f970cb02de62ab6823c6918c0a7f83b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6c80cc2fd8b7908b6420ebb21cb99266c93e01d6cdd9d1a41f8847493849b131\",\"dweb:/ipfs/QmeMehWbF2RwQaf6c6yaj5KHjXboDRpzBCtvFnLW4BXBbc\"]},\"contracts/src/libraries/Errors.sol\":{\"keccak256\":\"0x015be7b5e24373828e26b4af217ecbf074c7f4dcab839703d97d7bc560aa40eb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3584c205f552b20d01dc902a687f346e10bde5f1a23f887f97e03b2fbff8e75c\",\"dweb:/ipfs/QmaVzjYr18cZueNaboBeyVb6CtgY2qMxtvNcn6nXzCgM2c\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x44e018888d5a9fe0c3e44d9d814879d8f0c3adb78154edc98ba07da86b976f5a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5e3990bc86aaa8b4eb4b948ed3a26f0b018f1422c6470a00d146aa69e599a90d\",\"dweb:/ipfs/QmWg9hKoQK1po8ZxRC4xrSWePtoJhgndkHXmwLCpCtwAUu\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0x391c141a11e995c912f55247d461c44bcd7d7c70de4c2d98ff9c81e89acd4424\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b4d80a70106debf9f2d4980e38572daeea11bfc398a1258e3b5dc344e9ce646a\",\"dweb:/ipfs/QmbdckkGQcuok6NDZPiUVAQhpG9HvigMwozFZRLe9YcL2n\"]},\"contracts/src/libraries/LPMath.sol\":{\"keccak256\":\"0x78ca3ee7c212a513f45a44ef42d362c4ab3cc59e246191c57011b86232967189\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://610b23be1ed7decae671a7cc8ae76298b5d3b10bbea532d3c10623462f899786\",\"dweb:/ipfs/QmV6i6JaY8EKYHUAq6r5267eMbQtfA43F3YNSvvxktW6hE\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xa15878749f26b198b59e039cf814143b141698064d341cd8b88cb4a04491551c\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b3fdd810b779630fce33fa7d2bfc17d6cca1bd3d646e5c702d09fd277167fde4\",\"dweb:/ipfs/QmW8C19uY5WLkVQfqFRsSU5NtuQDgoqt4jBoMhvuJ7kMn2\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x407ff362f1486784581f506ffd22cbcb74f638deed9e5c086d3639ea8e64025e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e0092121a10538a07f814b1fafdb2f8923ee35c4d0f18af595f65ce36849a797\",\"dweb:/ipfs/QmTVKGwXU2FyywANhcBnutWSu38QaaVqgG9eTYatfjGYGL\"]},\"contracts/test/MockERC4626Hyperdrive.sol\":{\"keccak256\":\"0x05b2eb5ac7a0d3956fade4a6711dfbaed716e07983153dd525adb5664ed86c41\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a715c105363c1ecec9a72e66dba1e5f129e1b168242405e66190a6be405e0f0d\",\"dweb:/ipfs/QmSMfgjmpGy2DmNhgiJnsEWpVmpTY2tDkAoWPuwRchvQ9T\"]},\"lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol\":{\"keccak256\":\"0x60c65f701957fdd6faea1acb0bb45825791d473693ed9ecb34726fdfaa849dd7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ea290300e0efc4d901244949dc4d877fd46e6c5e43dc2b26620e8efab3ab803f\",\"dweb:/ipfs/QmcLLJppxKeJWqHxE2CUkcfhuRTgHSn8J4kijcLa5MYhSt\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0xc3e1fa9d1987f8d349dfb4d6fe93bf2ca014b52ba335cfac30bfe71e357e6f80\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c5703ccdeb7b1d685e375ed719117e9edf2ab4bc544f24f23b0d50ec82257229\",\"dweb:/ipfs/QmTdwkbQq7owpCiyuzE7eh5LrD2ddrBCZ5WHVsWPi1RrTS\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c\",\"dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850\",\"dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x6008dabfe393240d73d7dd7688033f72740d570aa422254d29a7dce8568f3aff\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f5196ec75139918c6c7bb4251b36395e668f1fa6d206beba7e7520e74913940d\",\"dweb:/ipfs/QmSyqjksXxmm2mCG6qRd1yuwLykypkSVBbnBnGqJRcuJMi\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x37bb49513c49c87c4642a891b13b63571bc87013dde806617aa1efb54605f386\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b3036b3a83b7c48f96641f2a9002b9f2dcb6a5958dd670894ada21ae8229b3d0\",\"dweb:/ipfs/QmUNfSBdoVtjhETaUJCYcaC7pTMgbhht926tJ2uXJbiVd3\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245\",\"dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y\"]},\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":{\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12\",\"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF\"]},\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02\",\"dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd\"]}},\"version\":1}";
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
                }, {
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
                    readonly "checkpoint(uint256,uint256)": {
                        readonly params: {
                            readonly _checkpointTime: "The time of the checkpoint to create.";
                            readonly _maxIterations: "The number of iterations to use in the Newton's        method component of `_distributeExcessIdleSafe`. This defaults to        `LPMath.SHARE_PROCEEDS_MAX_ITERATIONS` if the specified value is        smaller than the constant.";
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
                    readonly "checkpoint(uint256,uint256)": {
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
                readonly keccak256: "0x3478db194907ee23ef666d80699c8c59077585ac00495f7ffd39c2118c5335f4";
                readonly urls: readonly ["bzz-raw://ec9adb042acce1841a51f7be158271b4c76c7c0084c682a31377885b72923b10", "dweb:/ipfs/QmaRe6yKaUqsbb84DmePqiB3DXnsZ5j3a6SvUxhwRpzFac"];
                readonly license: "Apache-2.0";
            };
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
            readonly "contracts/src/instances/erc4626/ERC4626Hyperdrive.sol": {
                readonly keccak256: "0x2dac35b9b37ec389c4c032e67dd23ecde9e72d0737b6033f68e990d8f02e8bfd";
                readonly urls: readonly ["bzz-raw://138193829562c6f081bc9d9cf66b2d2b9313ba7efea56e40bdf20889f0cd5f87", "dweb:/ipfs/QmVTLXxt5spNxjqPfq2gQ7a3JWsx9tfuXqKdw6DHytjad4"];
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
            readonly "contracts/test/MockERC4626Hyperdrive.sol": {
                readonly keccak256: "0x05b2eb5ac7a0d3956fade4a6711dfbaed716e07983153dd525adb5664ed86c41";
                readonly urls: readonly ["bzz-raw://a715c105363c1ecec9a72e66dba1e5f129e1b168242405e66190a6be405e0f0d", "dweb:/ipfs/QmSMfgjmpGy2DmNhgiJnsEWpVmpTY2tDkAoWPuwRchvQ9T"];
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
        readonly id: 23974;
        readonly exportedSymbols: {
            readonly ERC4626Hyperdrive: readonly [7800];
            readonly IHyperdrive: readonly [10351];
            readonly MockERC4626Hyperdrive: readonly [23973];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:1495:133";
        readonly nodes: readonly [{
            readonly id: 23894;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:23:133";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 23896;
            readonly nodeType: "ImportDirective";
            readonly src: "64:90:133";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/instances/erc4626/ERC4626Hyperdrive.sol";
            readonly file: "contracts/src/instances/erc4626/ERC4626Hyperdrive.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 23974;
            readonly sourceUnit: 7801;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 23895;
                    readonly name: "ERC4626Hyperdrive";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 7800;
                    readonly src: "73:17:133";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 23898;
            readonly nodeType: "ImportDirective";
            readonly src: "155:71:133";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IHyperdrive.sol";
            readonly file: "contracts/src/interfaces/IHyperdrive.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 23974;
            readonly sourceUnit: 10352;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 23897;
                    readonly name: "IHyperdrive";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 10351;
                    readonly src: "164:11:133";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 23973;
            readonly nodeType: "ContractDefinition";
            readonly src: "381:1152:133";
            readonly nodes: readonly [{
                readonly id: 23925;
                readonly nodeType: "FunctionDefinition";
                readonly src: "439:368:133";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 23924;
                    readonly nodeType: "Block";
                    readonly src: "805:2:133";
                    readonly nodes: readonly [];
                    readonly statements: readonly [];
                };
                readonly implemented: true;
                readonly kind: "constructor";
                readonly modifiers: readonly [{
                    readonly arguments: readonly [{
                        readonly id: 23916;
                        readonly name: "_config";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 23903;
                        readonly src: "673:7:133";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10154_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig memory";
                        };
                    }, {
                        readonly id: 23917;
                        readonly name: "_target0";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 23905;
                        readonly src: "694:8:133";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    }, {
                        readonly id: 23918;
                        readonly name: "_target1";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 23907;
                        readonly src: "716:8:133";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    }, {
                        readonly id: 23919;
                        readonly name: "_target2";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 23909;
                        readonly src: "738:8:133";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    }, {
                        readonly id: 23920;
                        readonly name: "_target3";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 23911;
                        readonly src: "760:8:133";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    }, {
                        readonly id: 23921;
                        readonly name: "_target4";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 23913;
                        readonly src: "782:8:133";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    }];
                    readonly id: 23922;
                    readonly kind: "baseConstructorSpecifier";
                    readonly modifierName: {
                        readonly id: 23915;
                        readonly name: "ERC4626Hyperdrive";
                        readonly nameLocations: readonly ["642:17:133"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 7800;
                        readonly src: "642:17:133";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "642:158:133";
                }];
                readonly name: "";
                readonly nameLocation: "-1:-1:-1";
                readonly parameters: {
                    readonly id: 23914;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 23903;
                        readonly mutability: "mutable";
                        readonly name: "_config";
                        readonly nameLocation: "490:7:133";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 23925;
                        readonly src: "460:37:133";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10154_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig";
                        };
                        readonly typeName: {
                            readonly id: 23902;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 23901;
                                readonly name: "IHyperdrive.PoolConfig";
                                readonly nameLocations: readonly ["460:11:133", "472:10:133"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10154;
                                readonly src: "460:22:133";
                            };
                            readonly referencedDeclaration: 10154;
                            readonly src: "460:22:133";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolConfig_$10154_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 23905;
                        readonly mutability: "mutable";
                        readonly name: "_target0";
                        readonly nameLocation: "515:8:133";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 23925;
                        readonly src: "507:16:133";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 23904;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "507:7:133";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 23907;
                        readonly mutability: "mutable";
                        readonly name: "_target1";
                        readonly nameLocation: "541:8:133";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 23925;
                        readonly src: "533:16:133";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 23906;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "533:7:133";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 23909;
                        readonly mutability: "mutable";
                        readonly name: "_target2";
                        readonly nameLocation: "567:8:133";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 23925;
                        readonly src: "559:16:133";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 23908;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "559:7:133";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 23911;
                        readonly mutability: "mutable";
                        readonly name: "_target3";
                        readonly nameLocation: "593:8:133";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 23925;
                        readonly src: "585:16:133";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 23910;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "585:7:133";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 23913;
                        readonly mutability: "mutable";
                        readonly name: "_target4";
                        readonly nameLocation: "619:8:133";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 23925;
                        readonly src: "611:16:133";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 23912;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "611:7:133";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "450:183:133";
                };
                readonly returnParameters: {
                    readonly id: 23923;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "805:0:133";
                };
                readonly scope: 23973;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "public";
            }, {
                readonly id: 23943;
                readonly nodeType: "FunctionDefinition";
                readonly src: "813:209:133";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 23942;
                    readonly nodeType: "Block";
                    readonly src: "971:51:133";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 23938;
                                readonly name: "_amount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 23927;
                                readonly src: "997:7:133";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 23939;
                                readonly name: "_options";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 23930;
                                readonly src: "1006:8:133";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Options_$10210_calldata_ptr";
                                    readonly typeString: "struct IHyperdrive.Options calldata";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_struct$_Options_$10210_calldata_ptr";
                                    readonly typeString: "struct IHyperdrive.Options calldata";
                                }];
                                readonly id: 23937;
                                readonly name: "_deposit";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 12616;
                                readonly src: "988:8:133";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_uint256_$_t_struct$_Options_$10210_calldata_ptr_$returns$_t_uint256_$_t_uint256_$";
                                    readonly typeString: "function (uint256,struct IHyperdrive.Options calldata) returns (uint256,uint256)";
                                };
                            };
                            readonly id: 23940;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "988:27:133";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$";
                                readonly typeString: "tuple(uint256,uint256)";
                            };
                        };
                        readonly functionReturnParameters: 23936;
                        readonly id: 23941;
                        readonly nodeType: "Return";
                        readonly src: "981:34:133";
                    }];
                };
                readonly functionSelector: "829555d4";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "deposit";
                readonly nameLocation: "822:7:133";
                readonly parameters: {
                    readonly id: 23931;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 23927;
                        readonly mutability: "mutable";
                        readonly name: "_amount";
                        readonly nameLocation: "847:7:133";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 23943;
                        readonly src: "839:15:133";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 23926;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "839:7:133";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 23930;
                        readonly mutability: "mutable";
                        readonly name: "_options";
                        readonly nameLocation: "893:8:133";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 23943;
                        readonly src: "864:37:133";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_Options_$10210_calldata_ptr";
                            readonly typeString: "struct IHyperdrive.Options";
                        };
                        readonly typeName: {
                            readonly id: 23929;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 23928;
                                readonly name: "IHyperdrive.Options";
                                readonly nameLocations: readonly ["864:11:133", "876:7:133"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10210;
                                readonly src: "864:19:133";
                            };
                            readonly referencedDeclaration: 10210;
                            readonly src: "864:19:133";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Options_$10210_storage_ptr";
                                readonly typeString: "struct IHyperdrive.Options";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "829:78:133";
                };
                readonly returnParameters: {
                    readonly id: 23936;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 23933;
                        readonly mutability: "mutable";
                        readonly name: "sharesMinted";
                        readonly nameLocation: "932:12:133";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 23943;
                        readonly src: "924:20:133";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 23932;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "924:7:133";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 23935;
                        readonly mutability: "mutable";
                        readonly name: "vaultSharePrice";
                        readonly nameLocation: "954:15:133";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 23943;
                        readonly src: "946:23:133";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 23934;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "946:7:133";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "923:47:133";
                };
                readonly scope: 23973;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "public";
            }, {
                readonly id: 23962;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1028:231:133";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 23961;
                    readonly nodeType: "Block";
                    readonly src: "1194:65:133";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 23956;
                                readonly name: "_shares";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 23945;
                                readonly src: "1221:7:133";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 23957;
                                readonly name: "_sharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 23947;
                                readonly src: "1230:11:133";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 23958;
                                readonly name: "_options";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 23950;
                                readonly src: "1243:8:133";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Options_$10210_calldata_ptr";
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
                                    readonly typeIdentifier: "t_struct$_Options_$10210_calldata_ptr";
                                    readonly typeString: "struct IHyperdrive.Options calldata";
                                }];
                                readonly id: 23955;
                                readonly name: "_withdraw";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 12679;
                                readonly src: "1211:9:133";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_struct$_Options_$10210_calldata_ptr_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,struct IHyperdrive.Options calldata) returns (uint256)";
                                };
                            };
                            readonly id: 23959;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1211:41:133";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 23954;
                        readonly id: 23960;
                        readonly nodeType: "Return";
                        readonly src: "1204:48:133";
                    }];
                };
                readonly functionSelector: "a3144531";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "withdraw";
                readonly nameLocation: "1037:8:133";
                readonly parameters: {
                    readonly id: 23951;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 23945;
                        readonly mutability: "mutable";
                        readonly name: "_shares";
                        readonly nameLocation: "1063:7:133";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 23962;
                        readonly src: "1055:15:133";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 23944;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1055:7:133";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 23947;
                        readonly mutability: "mutable";
                        readonly name: "_sharePrice";
                        readonly nameLocation: "1088:11:133";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 23962;
                        readonly src: "1080:19:133";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 23946;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1080:7:133";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 23950;
                        readonly mutability: "mutable";
                        readonly name: "_options";
                        readonly nameLocation: "1138:8:133";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 23962;
                        readonly src: "1109:37:133";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_Options_$10210_calldata_ptr";
                            readonly typeString: "struct IHyperdrive.Options";
                        };
                        readonly typeName: {
                            readonly id: 23949;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 23948;
                                readonly name: "IHyperdrive.Options";
                                readonly nameLocations: readonly ["1109:11:133", "1121:7:133"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10210;
                                readonly src: "1109:19:133";
                            };
                            readonly referencedDeclaration: 10210;
                            readonly src: "1109:19:133";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Options_$10210_storage_ptr";
                                readonly typeString: "struct IHyperdrive.Options";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1045:107:133";
                };
                readonly returnParameters: {
                    readonly id: 23954;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 23953;
                        readonly mutability: "mutable";
                        readonly name: "amountWithdrawn";
                        readonly nameLocation: "1177:15:133";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 23962;
                        readonly src: "1169:23:133";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 23952;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1169:7:133";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1168:25:133";
                };
                readonly scope: 23973;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "public";
            }, {
                readonly id: 23972;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1382:149:133";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 23971;
                    readonly nodeType: "Block";
                    readonly src: "1486:45:133";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [];
                            readonly expression: {
                                readonly argumentTypes: readonly [];
                                readonly id: 23968;
                                readonly name: "_pricePerVaultShare";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 12690;
                                readonly src: "1503:19:133";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$__$returns$_t_uint256_$";
                                    readonly typeString: "function () view returns (uint256)";
                                };
                            };
                            readonly id: 23969;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1503:21:133";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 23967;
                        readonly id: 23970;
                        readonly nodeType: "Return";
                        readonly src: "1496:28:133";
                    }];
                };
                readonly documentation: {
                    readonly id: 23963;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1265:112:133";
                    readonly text: "@notice Loads the share price from the yield source\n @return vaultSharePrice The current share price.";
                };
                readonly functionSelector: "daaa35fe";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "pricePerVaultShare";
                readonly nameLocation: "1391:18:133";
                readonly parameters: {
                    readonly id: 23964;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1409:2:133";
                };
                readonly returnParameters: {
                    readonly id: 23967;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 23966;
                        readonly mutability: "mutable";
                        readonly name: "vaultSharePrice";
                        readonly nameLocation: "1465:15:133";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 23972;
                        readonly src: "1457:23:133";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 23965;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1457:7:133";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1456:25:133";
                };
                readonly scope: 23973;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "public";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 23899;
                    readonly name: "ERC4626Hyperdrive";
                    readonly nameLocations: readonly ["415:17:133"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 7800;
                    readonly src: "415:17:133";
                };
                readonly id: 23900;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "415:17:133";
            }];
            readonly canonicalName: "MockERC4626Hyperdrive";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [23973, 7800, 7736, 4375, 14161, 17512, 16054, 15127, 16538, 12497, 13667, 17734, 71639, 10887, 11459, 10542, 11425];
            readonly name: "MockERC4626Hyperdrive";
            readonly nameLocation: "390:21:133";
            readonly scope: 23974;
            readonly usedErrors: readonly [10296, 10302, 71014, 71295, 71300, 71303, 71584];
            readonly usedEvents: readonly [10705, 10720, 10739, 10754, 10771, 10790, 10809, 10830, 10845, 10852, 10857, 10862, 10867, 10874, 10879, 10886, 11440, 11449, 11458];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 133;
};
//# sourceMappingURL=MockERC4626Hyperdrive.d.ts.map