export declare const MockERC4626Hyperdrive: {
    readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_config";
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
        }, {
            readonly name: "_target0";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_target1";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_target2";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_target3";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_target4";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_pool";
            readonly type: "address";
            readonly internalType: "contract IERC4626";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "fallback";
        readonly stateMutability: "nonpayable";
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
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "";
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
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "batchTransferFrom";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }, {
            readonly name: "";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "checkpoint";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "closeLong";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "";
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
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "";
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
            readonly name: "";
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
        readonly name: "deposit";
        readonly inputs: readonly [{
            readonly name: "_amount";
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
            readonly name: "sharesMinted";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "vaultSharePrice";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "domainSeparator";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "initialize";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "";
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
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "openLong";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "";
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
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "openShort";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "";
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
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "pause";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
        readonly name: "pricePerVaultShare";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "vaultSharePrice";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "redeemWithdrawalShares";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "";
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
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "removeLiquidity";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "";
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
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setApproval";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setApprovalBridge";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setApprovalForAll";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setFeeCollector";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setGovernance";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setPauser";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setSweepCollector";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "sweep";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IERC20";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
        readonly name: "transferFrom";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "transferFromBridge";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "withdraw";
        readonly inputs: readonly [{
            readonly name: "_shares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_sharePrice";
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
            readonly name: "amountWithdrawn";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
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
        readonly name: "FailedInnerCall";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidBaseToken";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ReentrancyGuardReentrantCall";
        readonly inputs: readonly [];
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
        readonly name: "TransferFailed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "UnexpectedSuccess";
        readonly inputs: readonly [];
    }];
    readonly bytecode: {
        readonly object: "0x6102e06040523480156200001257600080fd5b50604051620023fe380380620023fe83398101604081905262000035916200061b565b600160005586516001600160a01b0390811660809081526060808a0151610180908152918a01516101a05260a0808b01516101c05260e0808c015190915260c0808c01519052610100808c0151909152918a0180515190925281516020908101516101209081528351604090810151610140908152945190930151610160908152828d015186166101e052838d015161020052908c0151600a80549187166001600160a01b0319928316179055938c0151600880549187169186169190911790558b0151600980549186169190941617909255828916610220528288166102405282871661026052828616610280528285166102a0529183166102c081905282516338d52e0f60e01b815292518a938a938a938a938a938a938a93926338d52e0f9260048082019392918290030181865afa15801562000179573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200019f919062000785565b6001600160a01b031687600001516001600160a01b031614620001d557604051630722152560e11b815260040160405180910390fd5b6102c0518751620001f4916001600160a01b0390911690600162000208565b5050505050505050505050505050620007fa565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b17909152620002629085908390620002d416565b620002ce57604080516001600160a01b038516602482015260006044808301919091528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b17909152620002c29186916200038516565b620002ce848262000385565b50505050565b6000806000846001600160a01b031684604051620002f39190620007a5565b6000604051808303816000865af19150503d806000811462000332576040519150601f19603f3d011682016040523d82523d6000602084013e62000337565b606091505b50915091508180156200036557508051158062000365575080806020019051810190620003659190620007d6565b80156200037c57506000856001600160a01b03163b115b95945050505050565b60006200039c6001600160a01b03841683620003f8565b90508051600014158015620003c4575080806020019051810190620003c29190620007d6565b155b15620003f357604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b606062000408838360006200040f565b9392505050565b606081471015620004365760405163cd78605960e01b8152306004820152602401620003ea565b600080856001600160a01b03168486604051620004549190620007a5565b60006040518083038185875af1925050503d806000811462000493576040519150601f19603f3d011682016040523d82523d6000602084013e62000498565b606091505b509092509050620004ab868383620004b5565b9695505050505050565b606082620004ce57620004c88262000519565b62000408565b8151158015620004e657506001600160a01b0384163b155b156200051157604051639996b31560e01b81526001600160a01b0385166004820152602401620003ea565b508062000408565b8051156200052a5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b50565b6040516101a081016001600160401b03811182821017156200057857634e487b7160e01b600052604160045260246000fd5b60405290565b6001600160a01b03811681146200054357600080fd5b8051620005a1816200057e565b919050565b600060808284031215620005b957600080fd5b604051608081016001600160401b0381118282101715620005ea57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60008060008060008060008789036102c08112156200063957600080fd5b610200808212156200064a57600080fd5b6200065462000546565b9150620006618a62000594565b82526200067160208b0162000594565b602083015260408a0151604083015260608a0151606083015260808a0151608083015260a08a015160a083015260c08a015160c083015260e08a015160e0830152610100808b01518184015250610120620006ce818c0162000594565b90830152610140620006e28b820162000594565b90830152610160620006f68b820162000594565b908301526101806200070b8c8c8301620005a6565b818401525081985062000720818b0162000594565b9750505062000733610220890162000594565b945062000744610240890162000594565b935062000755610260890162000594565b925062000766610280890162000594565b9150620007776102a0890162000594565b905092959891949750929550565b6000602082840312156200079857600080fd5b815162000408816200057e565b6000825160005b81811015620007c85760208186018101518583015201620007ac565b506000920191825250919050565b600060208284031215620007e957600080fd5b815180151581146200040857600080fd5b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051610280516102a0516102c051611aa86200095660003960008181610d5201528181610dcc01528181610e5b01528181610eba01528181610f5d01528181610fe2015261102201526000818161068d01528181610a670152610ac10152600081816105bd015281816108570152610a22015260008181610576015261078f015260008181610639015281816106f901526107f4015260008181610205015281816103c7015281816106c90152818161072b0152818161075d015281816107c301528181610827015281816108a1015281816109d90152610a90015260005050600050506000505060005050600050506000505060005050600050506000505060005050600050506000505060008181610d250152610d860152611aa86000f3fe6080604052600436106101ee5760003560e01c8063a22cb4651161010d578063daaa35fe116100a0578063e4af29d11161006f578063e4af29d1146102fe578063eac3e79914610627578063ed64bab21461065b578063f3f707071461067b578063f698da25146106af576101ee565b8063daaa35fe146105df578063dbbe8070146105f4578063ded0623114610401578063e44808bc14610607576101ee565b8063ab033ea9116100dc578063ab033ea9146102fe578063cba2e58d14610598578063cbc134341461033b578063d899e112146105ab576101ee565b8063a22cb465146104b1578063a314453114610544578063a42dce80146102fe578063a6e8a85914610564576101ee565b80633e691db91161018557806377d05ff41161015457806377d05ff4146104d1578063829555d4146104e45780639032c726146105045780639cd241af14610524576101ee565b80633e691db9146104635780634c2ac1d9146104835780634ed2d6ac146104965780637180c8ca146104b1576101ee565b80631c0f12b6116101c15780631c0f12b61461039557806321b57d53146103b557806329b23fc11461040157806330adf81f1461042f576101ee565b806301681a62146102fe57806302329a2914610320578063074a6de91461033b57806317fad7fc14610375575b3480156101fa57600080fd5b5060003660606000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316858560405161023d9291906113b4565b600060405180830381855af49150503d8060008114610278576040519150601f19603f3d011682016040523d82523d6000602084013e61027d565b606091505b509150915081156102a157604051638bb0a34b60e01b815260040160405180910390fd5b60006102ac826113c4565b90506001600160e01b03198116636e64089360e11b146102ce57815160208301fd5b8151600319810160048401908152926102ef91810160200190602401611435565b80519650602001945050505050f35b34801561030a57600080fd5b5061031e6103193660046114f7565b6106c4565b005b34801561032c57600080fd5b5061031e610319366004611522565b34801561034757600080fd5b5061035b610356366004611551565b6106f1565b604080519283526020830191909152015b60405180910390f35b34801561038157600080fd5b5061031e6103903660046115e6565b610726565b3480156103a157600080fd5b5061031e6103b036600461167b565b610758565b3480156103c157600080fd5b506103e97f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200161036c565b34801561040d57600080fd5b5061042161041c3660046116c3565b610788565b60405190815260200161036c565b34801561043b57600080fd5b506104217f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367381565b34801561046f57600080fd5b5061042161047e36600461171d565b6107bc565b61042161049136600461175a565b6107ed565b3480156104a257600080fd5b5061031e6103b03660046117be565b3480156104bd57600080fd5b5061031e6104cc366004611808565b610822565b6104216104df366004611551565b610850565b3480156104f057600080fd5b5061035b6104ff366004611841565b610883565b34801561051057600080fd5b5061031e61051f366004611888565b61089c565b34801561053057600080fd5b5061031e61053f366004611908565b6109d4565b34801561055057600080fd5b5061042161055f366004611551565b610a03565b34801561057057600080fd5b506103e97f000000000000000000000000000000000000000000000000000000000000000081565b61035b6105a63660046116c3565b610a1a565b3480156105b757600080fd5b506103e97f000000000000000000000000000000000000000000000000000000000000000081565b3480156105eb57600080fd5b50610421610a50565b61035b6106023660046116c3565b610a5f565b34801561061357600080fd5b5061031e610622366004611940565b610a8b565b34801561063357600080fd5b506103e97f000000000000000000000000000000000000000000000000000000000000000081565b34801561066757600080fd5b5061031e61067636600461199f565b610abc565b34801561068757600080fd5b506103e97f000000000000000000000000000000000000000000000000000000000000000081565b3480156106bb57600080fd5b50610421610ae5565b6106ed7f0000000000000000000000000000000000000000000000000000000000000000610b73565b5050565b60008061071d7f0000000000000000000000000000000000000000000000000000000000000000610b73565b50935093915050565b61074f7f0000000000000000000000000000000000000000000000000000000000000000610b73565b50505050505050565b6107817f0000000000000000000000000000000000000000000000000000000000000000610b73565b5050505050565b60006107b37f0000000000000000000000000000000000000000000000000000000000000000610b73565b50949350505050565b60006107e77f0000000000000000000000000000000000000000000000000000000000000000610b73565b50919050565b60006108187f0000000000000000000000000000000000000000000000000000000000000000610b73565b5095945050505050565b61084b7f0000000000000000000000000000000000000000000000000000000000000000610b73565b505050565b600061087b7f0000000000000000000000000000000000000000000000000000000000000000610b73565b509392505050565b6000806108908484610b93565b915091505b9250929050565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166108d1610ae5565b60405160248101919091527f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367360448201526001600160a01b03808c1660648301528a16608482015288151560a482015260c4810188905260ff871660e4820152610104810186905261012481018590526101440160408051601f198184030181529181526020820180516001600160e01b03166314e5f07b60e01b1790525161097a91906119b8565b600060405180830381855af49150503d80600081146109b5576040519150601f19603f3d011682016040523d82523d6000602084013e6109ba565b606091505b5091509150816109cc57805160208201fd5b805160208201f35b6109fd7f0000000000000000000000000000000000000000000000000000000000000000610b73565b50505050565b6000610a10848484610c6b565b90505b9392505050565b600080610a467f0000000000000000000000000000000000000000000000000000000000000000610b73565b5094509492505050565b6000610a5a610d02565b905090565b600080610a467f0000000000000000000000000000000000000000000000000000000000000000610b73565b610ab47f0000000000000000000000000000000000000000000000000000000000000000610b73565b505050505050565b6106ed7f0000000000000000000000000000000000000000000000000000000000000000610b73565b60408051808201825260018152603160f81b60209182015281517f2aef22f9d7df5f9d21c56d14029233f3fdaa91917727e1eb68e504d27072d6cd818301527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc681840152466060820152306080808301919091528351808303909101815260a0909101909252815191012090565b6060600080836001600160a01b031660003660405161097a9291906113b4565b60008080610ba76040850160208601611522565b15610bcc57610bc285610bbd60408701876119d4565b610d15565b9093509050610be8565b5034610be485610bdf60408701876119d4565b610e4e565b8492505b610bf0610d02565b91508015610c6357604051600090339083908381818185875af1925050503d8060008114610c3a576040519150601f19603f3d011682016040523d82523d6000602084013e610c3f565b606091505b5050905080610c61576040516312171d8360e31b815260040160405180910390fd5b505b509250929050565b600080610c788585610e83565b9050610c8381610ea1565b945084600003610c97576000915050610a13565b610ca76040840160208501611522565b15610cd657610ccf85610cbd60208601866114f7565b610cca60408701876119d4565b610f2e565b915061087b565b610cf985610ce760208601866114f7565b610cf460408701876119d4565b610fd5565b50929392505050565b6000610a5a670de0b6b3a7640000611009565b600080610d4d6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333088611059565b610dad7f0000000000000000000000000000000000000000000000000000000000000000610d7c876001611a1b565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001691906110c0565b604051636e553f6560e01b8152600481018690523060248201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636e553f65906044016020604051808303816000875af1158015610e1d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e419190611a3c565b9660009650945050505050565b61084b6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333086611059565b6000610e988383670de0b6b3a7640000611150565b90505b92915050565b6040516363737ac960e11b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063c6e6f592906024015b602060405180830381865afa158015610f0a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e9b9190611a3c565b604051635d043b2960e11b8152600481018590526001600160a01b0384811660248301523060448301526000917f00000000000000000000000000000000000000000000000000000000000000009091169063ba087652906064016020604051808303816000875af1158015610fa8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fcc9190611a3c565b95945050505050565b6109fd6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016848661116e565b6040516303d1689d60e11b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906307a2d13a90602401610eed565b6040516001600160a01b0384811660248301528381166044830152606482018390526109fd9186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b03838183161783525050505061119f565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b1790526111118482611207565b6109fd576040516001600160a01b0384811660248301526000604483015261114691869182169063095ea7b39060640161108e565b6109fd848261119f565b600082600019048411830215820261116757600080fd5b5091020490565b6040516001600160a01b0383811660248301526044820183905261084b91859182169063a9059cbb9060640161108e565b60006111b46001600160a01b038416836112aa565b905080516000141580156111d95750808060200190518101906111d79190611a55565b155b1561084b57604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b6000806000846001600160a01b03168460405161122491906119b8565b6000604051808303816000865af19150503d8060008114611261576040519150601f19603f3d011682016040523d82523d6000602084013e611266565b606091505b50915091508180156112905750805115806112905750808060200190518101906112909190611a55565b8015610fcc5750505050506001600160a01b03163b151590565b6060610e988383600084600080856001600160a01b031684866040516112d091906119b8565b60006040518083038185875af1925050503d806000811461130d576040519150601f19603f3d011682016040523d82523d6000602084013e611312565b606091505b509150915061132286838361132c565b9695505050505050565b6060826113415761133c82611388565b610a13565b815115801561135857506001600160a01b0384163b155b1561138157604051639996b31560e01b81526001600160a01b03851660048201526024016111fe565b5080610a13565b8051156113985780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b50565b8183823760009101908152919050565b805160208201516001600160e01b031980821692919060048310156113f35780818460040360031b1b83161693505b505050919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561142c578181015183820152602001611414565b50506000910152565b60006020828403121561144757600080fd5b815167ffffffffffffffff8082111561145f57600080fd5b818401915084601f83011261147357600080fd5b815181811115611485576114856113fb565b604051601f8201601f19908116603f011681019083821181831017156114ad576114ad6113fb565b816040528281528760208487010111156114c657600080fd5b6114d7836020830160208801611411565b979650505050505050565b6001600160a01b03811681146113b157600080fd5b60006020828403121561150957600080fd5b8135610a13816114e2565b80151581146113b157600080fd5b60006020828403121561153457600080fd5b8135610a1381611514565b6000606082840312156107e757600080fd5b60008060006060848603121561156657600080fd5b8335925060208401359150604084013567ffffffffffffffff81111561158b57600080fd5b6115978682870161153f565b9150509250925092565b60008083601f8401126115b357600080fd5b50813567ffffffffffffffff8111156115cb57600080fd5b6020830191508360208260051b850101111561089557600080fd5b600080600080600080608087890312156115ff57600080fd5b863561160a816114e2565b9550602087013561161a816114e2565b9450604087013567ffffffffffffffff8082111561163757600080fd5b6116438a838b016115a1565b9096509450606089013591508082111561165c57600080fd5b5061166989828a016115a1565b979a9699509497509295939492505050565b6000806000806080858703121561169157600080fd5b8435935060208501356116a3816114e2565b925060408501356116b3816114e2565b9396929550929360600135925050565b600080600080608085870312156116d957600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561170557600080fd5b6117118782880161153f565b91505092959194509250565b60006020828403121561172f57600080fd5b813567ffffffffffffffff81111561174657600080fd5b6117528482850161153f565b949350505050565b600080600080600060a0868803121561177257600080fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff8111156117a557600080fd5b6117b18882890161153f565b9150509295509295909350565b600080600080608085870312156117d457600080fd5b8435935060208501356117e6816114e2565b92506040850135915060608501356117fd816114e2565b939692955090935050565b6000806040838503121561181b57600080fd5b8235611826816114e2565b9150602083013561183681611514565b809150509250929050565b6000806040838503121561185457600080fd5b82359150602083013567ffffffffffffffff81111561187257600080fd5b61187e8582860161153f565b9150509250929050565b600080600080600080600060e0888a0312156118a357600080fd5b87356118ae816114e2565b965060208801356118be816114e2565b955060408801356118ce81611514565b945060608801359350608088013560ff811681146118eb57600080fd5b9699959850939692959460a0840135945060c09093013592915050565b60008060006060848603121561191d57600080fd5b83359250602084013561192f816114e2565b929592945050506040919091013590565b600080600080600060a0868803121561195857600080fd5b85359450602086013561196a816114e2565b9350604086013561197a816114e2565b9250606086013591506080860135611991816114e2565b809150509295509295909350565b6000602082840312156119b157600080fd5b5035919050565b600082516119ca818460208701611411565b9190910192915050565b6000808335601e198436030181126119eb57600080fd5b83018035915067ffffffffffffffff821115611a0657600080fd5b60200191503681900382131561089557600080fd5b80820180821115610e9b57634e487b7160e01b600052601160045260246000fd5b600060208284031215611a4e57600080fd5b5051919050565b600060208284031215611a6757600080fd5b8151610a138161151456fea2646970667358221220807a5de4249be9e38980ed95f2963a82f6ca8ff34e1a800e312db5fa629a52b064736f6c63430008140033";
        readonly sourceMap: "447:1195:135:-:0;;;505:411;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1713:1:171;1917:7;:21;5192:17:120;;-1:-1:-1;;;;;5179:30:120;;;;;;;5299;;;;;5273:56;;;;5752:28;;;;5728:52;;6068:32;;;;;6040:60;;6283:26;;;;;6261:48;;;6339:24;;;;;6319:44;;-1:-1:-1;6388:19:120;;;;6373:34;;;6472:12;;;;;:18;6460:30;;;6511:12;;-1:-1:-1;6511:17:120;;;;-1:-1:-1;6500:28:120;;;6557:12;;-1:-1:-1;6557:25:120;;;;6538:44;;;;6615:12;;:29;;;;6592:52;;;;-1:-1:-1;;;6721:21:120;6704:38;;;;-1:-1:-1;;;6770:22:120;6752:40;;6895:18;;;;6881:11;:32;;;;;-1:-1:-1;;;;;;6881:32:120;;;;;;6939:20;;;;6923:13;:36;;;;;;;;;;;;;;6987:22;;;6969:15;:40;;;;;;;;;;;;;6010:18:36;;::::1;;::::0;6038;;::::1;;::::0;6066;;::::1;;::::0;6094;;::::1;;::::0;6122;;::::1;;::::0;1508:16:44;;;;;;;4885:24:45;;-1:-1:-1;;;4885:24:45;;;;763:7:135;;784:8;;806;;828;;850;;872;;894:5;;1508:16:44;4885:22:45::2;::::0;:24:::2;::::0;;::::2;::::0;-1:-1:-1;4885:24:45;;;;;;1508:16:44;4885:24:45::2;;;;;;;;;::::0;::::2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1::0;;;;;4855:54:45::2;4863:7;:17;;;-1:-1:-1::0;;;;;4855:54:45::2;;4851:122;;4932:30;;-1:-1:-1::0;;;4932:30:45::2;;;;;;;;;;;4851:122;5186:6;::::0;5145:17;;5131:66:::2;::::0;-1:-1:-1;;;;;5131:46:45;;::::2;::::0;5195:1:::2;5131:46;:66::i;:::-;4415:789:::0;;;;;;;505:411:135;;;;;;;447:1195;;3296:380:168;3411:47;;;-1:-1:-1;;;;;3776:32:235;;3411:47:168;;;3758:51:235;3825:18;;;;3818:34;;;3411:47:168;;;;;;;;;;3731:18:235;;;;3411:47:168;;;;;;;;-1:-1:-1;;;;;3411:47:168;;;-1:-1:-1;;;3411:47:168;;;;3474:44;;3426:13;;3411:47;;3474:23;:44;:::i;:::-;3469:201;;3561:43;;;-1:-1:-1;;;;;3776:32:235;;3561:43:168;;;3758:51:235;3601:1:168;3825:18:235;;;;3818:34;;;;3561:43:168;;;;;;;;;;3731:18:235;;;;3561:43:168;;;;;;;;-1:-1:-1;;;;;3561:43:168;;;-1:-1:-1;;;3561:43:168;;;;3534:71;;3554:5;;3534:19;:71;:::i;:::-;3619:40;3639:5;3646:12;3619:19;:40::i;:::-;3373:303;3296:380;;;:::o;5189:578::-;5272:4;5574:12;5588:23;5623:5;-1:-1:-1;;;;;5615:19:168;5635:4;5615:25;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5573:67;;;;5657:7;:69;;;;-1:-1:-1;5669:17:168;;:22;;:56;;;5706:10;5695:30;;;;;;;;;;;;:::i;:::-;5657:103;;;;;5759:1;5738:5;-1:-1:-1;;;;;5730:26:168;;:30;5657:103;5650:110;5189:578;-1:-1:-1;;;;;5189:578:168:o;4059:629::-;4478:23;4504:33;-1:-1:-1;;;;;4504:27:168;;4532:4;4504:27;:33::i;:::-;4478:59;;4551:10;:17;4572:1;4551:22;;:57;;;;;4589:10;4578:30;;;;;;;;;;;;:::i;:::-;4577:31;4551:57;4547:135;;;4631:40;;-1:-1:-1;;;4631:40:168;;-1:-1:-1;;;;;5013:32:235;;4631:40:168;;;4995:51:235;4968:18;;4631:40:168;;;;;;;;4547:135;4129:559;4059:629;;:::o;2705:151:169:-;2780:12;2811:38;2833:6;2841:4;2847:1;2811:21;:38::i;:::-;2804:45;2705:151;-1:-1:-1;;;2705:151:169:o;3180:392::-;3279:12;3331:5;3307:21;:29;3303:108;;;3359:41;;-1:-1:-1;;;3359:41:169;;3394:4;3359:41;;;4995:51:235;4968:18;;3359:41:169;4849:203:235;3303:108:169;3421:12;3435:23;3462:6;-1:-1:-1;;;;;3462:11:169;3481:5;3488:4;3462:31;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;3420:73:169;;-1:-1:-1;3420:73:169;-1:-1:-1;3510:55:169;3537:6;3420:73;;3510:26;:55::i;:::-;3503:62;3180:392;-1:-1:-1;;;;;;3180:392:169:o;4625:582::-;4769:12;4798:7;4793:408;;4821:19;4829:10;4821:7;:19::i;:::-;4793:408;;;5045:17;;:22;:49;;;;-1:-1:-1;;;;;;5071:18:169;;;:23;5045:49;5041:119;;;5121:24;;-1:-1:-1;;;5121:24:169;;-1:-1:-1;;;;;5013:32:235;;5121:24:169;;;4995:51:235;4968:18;;5121:24:169;4849:203:235;5041:119:169;-1:-1:-1;5180:10:169;5173:17;;5743:516;5874:17;;:21;5870:383;;6102:10;6096:17;6158:15;6145:10;6141:2;6137:19;6130:44;5870:383;6225:17;;-1:-1:-1;;;6225:17:169;;;;;;;;;;;5870:383;5743:516;:::o;14:347:235:-;81:2;75:9;123:6;111:19;;-1:-1:-1;;;;;145:34:235;;181:22;;;142:62;139:185;;;246:10;241:3;237:20;234:1;227:31;281:4;278:1;271:15;309:4;306:1;299:15;139:185;340:2;333:22;14:347;:::o;366:139::-;-1:-1:-1;;;;;449:31:235;;439:42;;429:70;;495:1;492;485:12;510:154;597:13;;619:39;597:13;619:39;:::i;:::-;510:154;;;:::o;669:681::-;731:5;779:4;767:9;762:3;758:19;754:30;751:50;;;797:1;794;787:12;751:50;830:2;824:9;872:4;860:17;;-1:-1:-1;;;;;892:34:235;;928:22;;;889:62;886:185;;;993:10;988:3;984:20;981:1;974:31;1028:4;1025:1;1018:15;1056:4;1053:1;1046:15;886:185;1091:10;1087:2;1080:22;;1120:6;1111:15;;1156:9;1150:16;1142:6;1135:32;1221:2;1210:9;1206:18;1200:25;1195:2;1187:6;1183:15;1176:50;1280:2;1269:9;1265:18;1259:25;1254:2;1246:6;1242:15;1235:50;1339:2;1328:9;1324:18;1318:25;1313:2;1305:6;1301:15;1294:50;;669:681;;;;:::o;1355:1960::-;1526:6;1534;1542;1550;1558;1566;1574;1618:9;1609:7;1605:23;1648:3;1644:2;1640:12;1637:32;;;1665:1;1662;1655:12;1637:32;1688:6;1714:2;1710;1706:11;1703:31;;;1730:1;1727;1720:12;1703:31;1756:17;;:::i;:::-;1743:30;;1796:48;1834:9;1796:48;:::i;:::-;1789:5;1782:63;1877:57;1930:2;1919:9;1915:18;1877:57;:::i;:::-;1872:2;1865:5;1861:14;1854:81;1988:2;1977:9;1973:18;1967:25;1962:2;1955:5;1951:14;1944:49;2046:2;2035:9;2031:18;2025:25;2020:2;2013:5;2009:14;2002:49;2105:3;2094:9;2090:19;2084:26;2078:3;2071:5;2067:15;2060:51;2165:3;2154:9;2150:19;2144:26;2138:3;2131:5;2127:15;2120:51;2225:3;2214:9;2210:19;2204:26;2198:3;2191:5;2187:15;2180:51;2285:3;2274:9;2270:19;2264:26;2258:3;2251:5;2247:15;2240:51;2310:3;2366:2;2355:9;2351:18;2345:25;2340:2;2333:5;2329:14;2322:49;;2390:3;2425:57;2478:2;2467:9;2463:18;2425:57;:::i;:::-;2409:14;;;2402:81;2502:3;2537:57;2575:18;;;2537:57;:::i;:::-;2521:14;;;2514:81;2614:3;2649:57;2687:18;;;2649:57;:::i;:::-;2633:14;;;2626:81;2726:3;2761:62;2815:7;2795:18;;;2761:62;:::i;:::-;2756:2;2749:5;2745:14;2738:86;;2843:5;2833:15;;2867:57;2920:2;2909:9;2905:18;2867:57;:::i;:::-;2857:67;;;;2943:58;2996:3;2985:9;2981:19;2943:58;:::i;:::-;2933:68;;3020:58;3073:3;3062:9;3058:19;3020:58;:::i;:::-;3010:68;;3097:58;3150:3;3139:9;3135:19;3097:58;:::i;:::-;3087:68;;3174:58;3227:3;3216:9;3212:19;3174:58;:::i;:::-;3164:68;;3251:58;3304:3;3293:9;3289:19;3251:58;:::i;:::-;3241:68;;1355:1960;;;;;;;;;;:::o;3320:259::-;3390:6;3443:2;3431:9;3422:7;3418:23;3414:32;3411:52;;;3459:1;3456;3449:12;3411:52;3491:9;3485:16;3510:39;3543:5;3510:39;:::i;4150:412::-;4279:3;4317:6;4311:13;4342:1;4352:129;4366:6;4363:1;4360:13;4352:129;;;4464:4;4448:14;;;4444:25;;4438:32;4425:11;;;4418:53;4381:12;4352:129;;;-1:-1:-1;4536:1:235;4500:16;;4525:13;;;-1:-1:-1;4500:16:235;4150:412;-1:-1:-1;4150:412:235:o;4567:277::-;4634:6;4687:2;4675:9;4666:7;4662:23;4658:32;4655:52;;;4703:1;4700;4693:12;4655:52;4735:9;4729:16;4788:5;4781:13;4774:21;4767:5;4764:32;4754:60;;4810:1;4807;4800:12;4849:203;447:1195:135;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly deployedBytecode: {
        readonly object: "0x6080604052600436106101ee5760003560e01c8063a22cb4651161010d578063daaa35fe116100a0578063e4af29d11161006f578063e4af29d1146102fe578063eac3e79914610627578063ed64bab21461065b578063f3f707071461067b578063f698da25146106af576101ee565b8063daaa35fe146105df578063dbbe8070146105f4578063ded0623114610401578063e44808bc14610607576101ee565b8063ab033ea9116100dc578063ab033ea9146102fe578063cba2e58d14610598578063cbc134341461033b578063d899e112146105ab576101ee565b8063a22cb465146104b1578063a314453114610544578063a42dce80146102fe578063a6e8a85914610564576101ee565b80633e691db91161018557806377d05ff41161015457806377d05ff4146104d1578063829555d4146104e45780639032c726146105045780639cd241af14610524576101ee565b80633e691db9146104635780634c2ac1d9146104835780634ed2d6ac146104965780637180c8ca146104b1576101ee565b80631c0f12b6116101c15780631c0f12b61461039557806321b57d53146103b557806329b23fc11461040157806330adf81f1461042f576101ee565b806301681a62146102fe57806302329a2914610320578063074a6de91461033b57806317fad7fc14610375575b3480156101fa57600080fd5b5060003660606000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316858560405161023d9291906113b4565b600060405180830381855af49150503d8060008114610278576040519150601f19603f3d011682016040523d82523d6000602084013e61027d565b606091505b509150915081156102a157604051638bb0a34b60e01b815260040160405180910390fd5b60006102ac826113c4565b90506001600160e01b03198116636e64089360e11b146102ce57815160208301fd5b8151600319810160048401908152926102ef91810160200190602401611435565b80519650602001945050505050f35b34801561030a57600080fd5b5061031e6103193660046114f7565b6106c4565b005b34801561032c57600080fd5b5061031e610319366004611522565b34801561034757600080fd5b5061035b610356366004611551565b6106f1565b604080519283526020830191909152015b60405180910390f35b34801561038157600080fd5b5061031e6103903660046115e6565b610726565b3480156103a157600080fd5b5061031e6103b036600461167b565b610758565b3480156103c157600080fd5b506103e97f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200161036c565b34801561040d57600080fd5b5061042161041c3660046116c3565b610788565b60405190815260200161036c565b34801561043b57600080fd5b506104217f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367381565b34801561046f57600080fd5b5061042161047e36600461171d565b6107bc565b61042161049136600461175a565b6107ed565b3480156104a257600080fd5b5061031e6103b03660046117be565b3480156104bd57600080fd5b5061031e6104cc366004611808565b610822565b6104216104df366004611551565b610850565b3480156104f057600080fd5b5061035b6104ff366004611841565b610883565b34801561051057600080fd5b5061031e61051f366004611888565b61089c565b34801561053057600080fd5b5061031e61053f366004611908565b6109d4565b34801561055057600080fd5b5061042161055f366004611551565b610a03565b34801561057057600080fd5b506103e97f000000000000000000000000000000000000000000000000000000000000000081565b61035b6105a63660046116c3565b610a1a565b3480156105b757600080fd5b506103e97f000000000000000000000000000000000000000000000000000000000000000081565b3480156105eb57600080fd5b50610421610a50565b61035b6106023660046116c3565b610a5f565b34801561061357600080fd5b5061031e610622366004611940565b610a8b565b34801561063357600080fd5b506103e97f000000000000000000000000000000000000000000000000000000000000000081565b34801561066757600080fd5b5061031e61067636600461199f565b610abc565b34801561068757600080fd5b506103e97f000000000000000000000000000000000000000000000000000000000000000081565b3480156106bb57600080fd5b50610421610ae5565b6106ed7f0000000000000000000000000000000000000000000000000000000000000000610b73565b5050565b60008061071d7f0000000000000000000000000000000000000000000000000000000000000000610b73565b50935093915050565b61074f7f0000000000000000000000000000000000000000000000000000000000000000610b73565b50505050505050565b6107817f0000000000000000000000000000000000000000000000000000000000000000610b73565b5050505050565b60006107b37f0000000000000000000000000000000000000000000000000000000000000000610b73565b50949350505050565b60006107e77f0000000000000000000000000000000000000000000000000000000000000000610b73565b50919050565b60006108187f0000000000000000000000000000000000000000000000000000000000000000610b73565b5095945050505050565b61084b7f0000000000000000000000000000000000000000000000000000000000000000610b73565b505050565b600061087b7f0000000000000000000000000000000000000000000000000000000000000000610b73565b509392505050565b6000806108908484610b93565b915091505b9250929050565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166108d1610ae5565b60405160248101919091527f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367360448201526001600160a01b03808c1660648301528a16608482015288151560a482015260c4810188905260ff871660e4820152610104810186905261012481018590526101440160408051601f198184030181529181526020820180516001600160e01b03166314e5f07b60e01b1790525161097a91906119b8565b600060405180830381855af49150503d80600081146109b5576040519150601f19603f3d011682016040523d82523d6000602084013e6109ba565b606091505b5091509150816109cc57805160208201fd5b805160208201f35b6109fd7f0000000000000000000000000000000000000000000000000000000000000000610b73565b50505050565b6000610a10848484610c6b565b90505b9392505050565b600080610a467f0000000000000000000000000000000000000000000000000000000000000000610b73565b5094509492505050565b6000610a5a610d02565b905090565b600080610a467f0000000000000000000000000000000000000000000000000000000000000000610b73565b610ab47f0000000000000000000000000000000000000000000000000000000000000000610b73565b505050505050565b6106ed7f0000000000000000000000000000000000000000000000000000000000000000610b73565b60408051808201825260018152603160f81b60209182015281517f2aef22f9d7df5f9d21c56d14029233f3fdaa91917727e1eb68e504d27072d6cd818301527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc681840152466060820152306080808301919091528351808303909101815260a0909101909252815191012090565b6060600080836001600160a01b031660003660405161097a9291906113b4565b60008080610ba76040850160208601611522565b15610bcc57610bc285610bbd60408701876119d4565b610d15565b9093509050610be8565b5034610be485610bdf60408701876119d4565b610e4e565b8492505b610bf0610d02565b91508015610c6357604051600090339083908381818185875af1925050503d8060008114610c3a576040519150601f19603f3d011682016040523d82523d6000602084013e610c3f565b606091505b5050905080610c61576040516312171d8360e31b815260040160405180910390fd5b505b509250929050565b600080610c788585610e83565b9050610c8381610ea1565b945084600003610c97576000915050610a13565b610ca76040840160208501611522565b15610cd657610ccf85610cbd60208601866114f7565b610cca60408701876119d4565b610f2e565b915061087b565b610cf985610ce760208601866114f7565b610cf460408701876119d4565b610fd5565b50929392505050565b6000610a5a670de0b6b3a7640000611009565b600080610d4d6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333088611059565b610dad7f0000000000000000000000000000000000000000000000000000000000000000610d7c876001611a1b565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001691906110c0565b604051636e553f6560e01b8152600481018690523060248201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636e553f65906044016020604051808303816000875af1158015610e1d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e419190611a3c565b9660009650945050505050565b61084b6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333086611059565b6000610e988383670de0b6b3a7640000611150565b90505b92915050565b6040516363737ac960e11b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063c6e6f592906024015b602060405180830381865afa158015610f0a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e9b9190611a3c565b604051635d043b2960e11b8152600481018590526001600160a01b0384811660248301523060448301526000917f00000000000000000000000000000000000000000000000000000000000000009091169063ba087652906064016020604051808303816000875af1158015610fa8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fcc9190611a3c565b95945050505050565b6109fd6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016848661116e565b6040516303d1689d60e11b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906307a2d13a90602401610eed565b6040516001600160a01b0384811660248301528381166044830152606482018390526109fd9186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b03838183161783525050505061119f565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b1790526111118482611207565b6109fd576040516001600160a01b0384811660248301526000604483015261114691869182169063095ea7b39060640161108e565b6109fd848261119f565b600082600019048411830215820261116757600080fd5b5091020490565b6040516001600160a01b0383811660248301526044820183905261084b91859182169063a9059cbb9060640161108e565b60006111b46001600160a01b038416836112aa565b905080516000141580156111d95750808060200190518101906111d79190611a55565b155b1561084b57604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b6000806000846001600160a01b03168460405161122491906119b8565b6000604051808303816000865af19150503d8060008114611261576040519150601f19603f3d011682016040523d82523d6000602084013e611266565b606091505b50915091508180156112905750805115806112905750808060200190518101906112909190611a55565b8015610fcc5750505050506001600160a01b03163b151590565b6060610e988383600084600080856001600160a01b031684866040516112d091906119b8565b60006040518083038185875af1925050503d806000811461130d576040519150601f19603f3d011682016040523d82523d6000602084013e611312565b606091505b509150915061132286838361132c565b9695505050505050565b6060826113415761133c82611388565b610a13565b815115801561135857506001600160a01b0384163b155b1561138157604051639996b31560e01b81526001600160a01b03851660048201526024016111fe565b5080610a13565b8051156113985780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b50565b8183823760009101908152919050565b805160208201516001600160e01b031980821692919060048310156113f35780818460040360031b1b83161693505b505050919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561142c578181015183820152602001611414565b50506000910152565b60006020828403121561144757600080fd5b815167ffffffffffffffff8082111561145f57600080fd5b818401915084601f83011261147357600080fd5b815181811115611485576114856113fb565b604051601f8201601f19908116603f011681019083821181831017156114ad576114ad6113fb565b816040528281528760208487010111156114c657600080fd5b6114d7836020830160208801611411565b979650505050505050565b6001600160a01b03811681146113b157600080fd5b60006020828403121561150957600080fd5b8135610a13816114e2565b80151581146113b157600080fd5b60006020828403121561153457600080fd5b8135610a1381611514565b6000606082840312156107e757600080fd5b60008060006060848603121561156657600080fd5b8335925060208401359150604084013567ffffffffffffffff81111561158b57600080fd5b6115978682870161153f565b9150509250925092565b60008083601f8401126115b357600080fd5b50813567ffffffffffffffff8111156115cb57600080fd5b6020830191508360208260051b850101111561089557600080fd5b600080600080600080608087890312156115ff57600080fd5b863561160a816114e2565b9550602087013561161a816114e2565b9450604087013567ffffffffffffffff8082111561163757600080fd5b6116438a838b016115a1565b9096509450606089013591508082111561165c57600080fd5b5061166989828a016115a1565b979a9699509497509295939492505050565b6000806000806080858703121561169157600080fd5b8435935060208501356116a3816114e2565b925060408501356116b3816114e2565b9396929550929360600135925050565b600080600080608085870312156116d957600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561170557600080fd5b6117118782880161153f565b91505092959194509250565b60006020828403121561172f57600080fd5b813567ffffffffffffffff81111561174657600080fd5b6117528482850161153f565b949350505050565b600080600080600060a0868803121561177257600080fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff8111156117a557600080fd5b6117b18882890161153f565b9150509295509295909350565b600080600080608085870312156117d457600080fd5b8435935060208501356117e6816114e2565b92506040850135915060608501356117fd816114e2565b939692955090935050565b6000806040838503121561181b57600080fd5b8235611826816114e2565b9150602083013561183681611514565b809150509250929050565b6000806040838503121561185457600080fd5b82359150602083013567ffffffffffffffff81111561187257600080fd5b61187e8582860161153f565b9150509250929050565b600080600080600080600060e0888a0312156118a357600080fd5b87356118ae816114e2565b965060208801356118be816114e2565b955060408801356118ce81611514565b945060608801359350608088013560ff811681146118eb57600080fd5b9699959850939692959460a0840135945060c09093013592915050565b60008060006060848603121561191d57600080fd5b83359250602084013561192f816114e2565b929592945050506040919091013590565b600080600080600060a0868803121561195857600080fd5b85359450602086013561196a816114e2565b9350604086013561197a816114e2565b9250606086013591506080860135611991816114e2565b809150509295509295909350565b6000602082840312156119b157600080fd5b5035919050565b600082516119ca818460208701611411565b9190910192915050565b6000808335601e198436030181126119eb57600080fd5b83018035915067ffffffffffffffff821115611a0657600080fd5b60200191503681900382131561089557600080fd5b80820180821115610e9b57634e487b7160e01b600052601160045260246000fd5b600060208284031215611a4e57600080fd5b5051919050565b600060208284031215611a6757600080fd5b8151610a138161151456fea2646970667358221220807a5de4249be9e38980ed95f2963a82f6ca8ff34e1a800e312db5fa629a52b064736f6c63430008140033";
        readonly sourceMap: "447:1195:135:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6530:12:36;6684;6698:23;6725:7;-1:-1:-1;;;;;6725:20:36;6746:5;;6725:27;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6683:69;;;;6766:7;6762:76;;;6796:31;;-1:-1:-1;;;6796:31:36;;;;;;;;;;;6762:76;6847:15;6865:18;6872:10;6865:18;:::i;:::-;6847:36;-1:-1:-1;;;;;;;6897:43:36;;-1:-1:-1;;;6897:43:36;6893:160;;7017:10;7011:17;7006:2;6994:10;6990:19;6983:46;6893:160;7254:17;;-1:-1:-1;;7250:25:36;;7273:1;7228:20;;7221:55;;;7228:20;7355:31;;;;;;;;;;:::i;:::-;447:1195:135;;;-1:-1:-1;447:1195:135;;;-1:-1:-1;;;;;447:1195:135;10244:67:36;;;;;;;;;;-1:-1:-1;10244:67:36;;;;;:::i;:::-;;:::i;:::-;;9657:65;;;;;;;;;;-1:-1:-1;9657:65:36;;;;;:::i;9097:181::-;;;;;;;;;;-1:-1:-1;9097:181:36;;;;;:::i;:::-;;:::i;:::-;;;;3565:25:235;;;3621:2;3606:18;;3599:34;;;;3538:18;9097:181:36;;;;;;;;11137:167;;;;;;;;;;-1:-1:-1;11137:167:36;;;;;:::i;:::-;;:::i;10377:102::-;;;;;;;;;;-1:-1:-1;10377:102:36;;;;;:::i;:::-;;:::i;4500:32::-;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;5797:32:235;;;5779:51;;5767:2;5752:18;4500:32:36;5633:203:235;8189:177:36;;;;;;;;;;-1:-1:-1;8189:177:36;;;;;:::i;:::-;;:::i;:::-;;;6554:25:235;;;6542:2;6527:18;8189:177:36;6408::235;5226:174:36;;;;;;;;;;;;5276:124;5226:174;;9479:136;;;;;;;;;;-1:-1:-1;9479:136:36;;;;;:::i;:::-;;:::i;8635:204::-;;;;;;:::i;:::-;;:::i;10726:107::-;;;;;;;;;;-1:-1:-1;10726:107:36;;;;;:::i;10124:78::-;;;;;;;;;;-1:-1:-1;10124:78:36;;;;;:::i;:::-;;:::i;8425:168::-;;;;;;:::i;:::-;;:::i;922:209:135:-;;;;;;;;;;-1:-1:-1;922:209:135;;;;;:::i;:::-;;:::i;12469:869:36:-;;;;;;;;;;-1:-1:-1;12469:869:36;;;;;:::i;:::-;;:::i;11003:92::-;;;;;;;;;;-1:-1:-1;11003:92:36;;;;;:::i;:::-;;:::i;1137:231:135:-;;;;;;;;;;-1:-1:-1;1137:231:135;;;;;:::i;:::-;;:::i;4802:32:36:-;;;;;;;;;;;;;;;7482:192;;;;;;:::i;:::-;;:::i;4953:32::-;;;;;;;;;;;;;;;1491:149:135;;;;;;;;;;;;;:::i;7954:193:36:-;;;;;;:::i;:::-;;:::i;10521:163::-;;;;;;;;;;-1:-1:-1;10521:163:36;;;;;:::i;:::-;;:::i;4651:32::-;;;;;;;;;;;;;;;9345:73;;;;;;;;;;-1:-1:-1;9345:73:36;;;;;:::i;:::-;;:::i;5104:32::-;;;;;;;;;;;;;;;13619:426;;;;;;;;;;;;;:::i;10244:67::-;10286:18;10296:7;10286:9;:18::i;:::-;;10244:67;:::o;9097:181::-;9225:7;9234;9253:18;9263:7;9253:9;:18::i;:::-;;9097:181;;;;;;:::o;11137:167::-;11279:18;11289:7;11279:9;:18::i;:::-;;11137:167;;;;;;:::o;10377:102::-;10454:18;10464:7;10454:9;:18::i;:::-;;10377:102;;;;:::o;8189:177::-;8322:7;8341:18;8351:7;8341:9;:18::i;:::-;;8189:177;;;;;;:::o;9479:136::-;9571:7;9590:18;9600:7;9590:9;:18::i;:::-;;9479:136;;;:::o;8635:204::-;8795:7;8814:18;8824:7;8814:9;:18::i;:::-;;8635:204;;;;;;;:::o;10124:78::-;10177:18;10187:7;10177:9;:18::i;:::-;;10124:78;;:::o;8425:168::-;8549:7;8568:18;8578:7;8568:9;:18::i;:::-;;8425:168;;;;;:::o;922:209:135:-;1033:20;1055:23;1097:27;1106:7;1115:8;1097;:27::i;:::-;1090:34;;;;922:209;;;;;;:::o;12469:869:36:-;12670:12;12684:19;12707:7;-1:-1:-1;;;;;12707:20:36;12843:17;:15;:17::i;:::-;12741:374;;;;;11956:25:235;;;;5276:124:36;11997:18:235;;;11990:34;-1:-1:-1;;;;;12098:15:235;;;12078:18;;;12071:43;12150:15;;12130:18;;;12123:43;12210:14;;12203:22;12182:19;;;12175:51;12242:19;;;12235:35;;;12319:4;12307:17;;12286:19;;;12279:46;12341:19;;;12334:35;;;12385:19;;;12378:35;;;11928:19;;12741:374:36;;;-1:-1:-1;;12741:374:36;;;;;;;;;;;;;;-1:-1:-1;;;;;12741:374:36;-1:-1:-1;;;12741:374:36;;;12707:418;;;12741:374;12707:418;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12669:456;;;;13140:7;13135:117;;13220:6;13214:13;13209:2;13201:6;13197:15;13190:38;13135:117;13314:6;13308:13;13303:2;13295:6;13291:15;13284:38;11003:92;11070:18;11080:7;11070:9;:18::i;:::-;;11003:92;;;:::o;1137:231:135:-;1278:23;1320:41;1330:7;1339:11;1352:8;1320:9;:41::i;:::-;1313:48;;1137:231;;;;;;:::o;7482:192:36:-;7621:7;7630;7649:18;7659:7;7649:9;:18::i;:::-;;7482:192;;;;;;;:::o;1491:149:135:-;1566:23;1612:21;:19;:21::i;:::-;1605:28;;1491:149;:::o;7954:193:36:-;8094:7;8103;8122:18;8132:7;8122:9;:18::i;10521:163::-;10659:18;10669:7;10659:9;:18::i;:::-;;10521:163;;;;;:::o;9345:73::-;9393:18;9403:7;9393:9;:18::i;13619:426::-;13925:10;;;;;;;;;;;-1:-1:-1;;;13925:10:36;;;;;13732:292;;13764:129;13732:292;;;12947:25:235;13915:21:36;12988:18:235;;;12981:34;13958:13:36;13031:18:235;;;13024:34;14001:4:36;13074:18:235;;;;13067:60;;;;13732:292:36;;;;;;;;;;12919:19:235;;;;13732:292:36;;;13705:333;;;;;;13619:426::o;14323:359::-;14377:12;14402;14416:19;14439:7;-1:-1:-1;;;;;14439:20:36;14460:8;;14439:30;;;;;;;:::i;1926:1509:114:-;2040:20;;;2206:15;;;;;;;;:::i;:::-;2202:812;;;2306:91;2340:7;2365:18;;;;:8;:18;:::i;:::-;2306:16;:91::i;:::-;2281:116;;-1:-1:-1;2281:116:114;-1:-1:-1;2202:812:114;;;-1:-1:-1;2553:9:114;2623:47;2642:7;2651:18;;;;:8;:18;:::i;:::-;2623;:47::i;:::-;2996:7;2981:22;;2202:812;3086:21;:19;:21::i;:::-;3068:39;-1:-1:-1;3184:10:114;;3180:200;;3229:45;;3211:12;;3237:10;;3262:6;;3211:12;3229:45;3211:12;3229:45;3262:6;3237:10;3229:45;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3210:64;;;3293:7;3288:82;;3327:28;;-1:-1:-1;;;3327:28:114;;;;;;;;;;;3288:82;3196:184;3180:200;3390:38;1926:1509;;;;;:::o;4144:1323::-;4293:23;;4630:33;:7;4646:16;4630:15;:33::i;:::-;4609:54;;4683:28;4700:10;4683:16;:28::i;:::-;4673:38;;4799:7;4810:1;4799:12;4795:51;;4834:1;4827:8;;;;;4795:51;4940:15;;;;;;;;:::i;:::-;4936:492;;;5036:130;5071:7;5096:20;;;;:8;:20;:::i;:::-;5134:18;;;;:8;:18;:::i;:::-;5036:17;:130::i;:::-;5018:148;;4936:492;;;5246:132;5283:7;5308:20;;;;:8;:20;:::i;:::-;5346:18;;;;:8;:18;:::i;:::-;5246:19;:132::i;:::-;-1:-1:-1;5410:7:114;;4144:1323;-1:-1:-1;;;4144:1323:114:o;5594:150::-;5672:23;5718:19;193:4:124;5718:14:114;:19::i;1853:833:44:-;1975:7;;2051:129;-1:-1:-1;;;;;2065:10:44;2051:43;2108:10;2140:4;2159:11;2051:43;:129::i;:::-;2462:107;2523:6;2544:15;:11;2558:1;2544:15;:::i;:::-;-1:-1:-1;;;;;2476:10:44;2462:39;;:107;:39;:107::i;:::-;2602:42;;-1:-1:-1;;;2602:42:44;;;;;14275:25:235;;;2638:4:44;14316:18:235;;;14309:60;2579:20:44;;2602:6;-1:-1:-1;;;;;2602:14:44;;;;14248:18:235;;2602:42:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2579:65;2677:1;;-1:-1:-1;1853:833:44;-1:-1:-1;;;;;1853:833:44:o;2804:315::-;2986:126;-1:-1:-1;;;;;3000:6:44;2986:39;3039:10;3071:4;3090:12;2986:39;:126::i;1610:118:124:-;1672:7;1699:21;1710:1;1713;193:4;1699:10;:21::i;:::-;1691:30;;1610:118;;;;;:::o;5142:161:44:-;5261:35;;-1:-1:-1;;;5261:35:44;;;;;6554:25:235;;;5235:7:44;;5261:6;-1:-1:-1;;;;;5261:22:44;;;;6527:18:235;;5261:35:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;3415:460::-;3733:102;;-1:-1:-1;;;3733:102:44;;;;;14771:25:235;;;-1:-1:-1;;;;;14870:15:235;;;14850:18;;;14843:43;3820:4:44;14902:18:235;;;14895:43;3569:23:44;;3733:6;:13;;;;;;14744:18:235;;3733:102:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;3715:120;3415:460;-1:-1:-1;;;;;3415:460:44:o;4117:280::-;4327:63;-1:-1:-1;;;;;4341:6:44;4327:35;4363:12;4377;4327:35;:63::i;4821:161::-;4939:36;;-1:-1:-1;;;4939:36:44;;;;;6554:25:235;;;4913:7:44;;4939:6;-1:-1:-1;;;;;4939:22:44;;;;6527:18:235;;4939:36:44;6408:177:235;1702:188:168;1829:53;;-1:-1:-1;;;;;15207:15:235;;;1829:53:168;;;15189:34:235;15259:15;;;15239:18;;;15232:43;15291:18;;;15284:34;;;1802:81:168;;1822:5;;1844:18;;;;;15124::235;;1829:53:168;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;1829:53:168;;;;;;;;;;;1802:19;:81::i;3296:380::-;3411:47;;;-1:-1:-1;;;;;15521:32:235;;3411:47:168;;;15503:51:235;15570:18;;;;15563:34;;;3411:47:168;;;;;;;;;;15476:18:235;;;;3411:47:168;;;;;;;;-1:-1:-1;;;;;3411:47:168;-1:-1:-1;;;3411:47:168;;;3474:44;3426:13;3411:47;3474:23;:44::i;:::-;3469:201;;3561:43;;-1:-1:-1;;;;;15521:32:235;;;3561:43:168;;;15503:51:235;3601:1:168;15570:18:235;;;15563:34;3534:71:168;;3554:5;;3576:13;;;;;15476:18:235;;3561:43:168;15329:274:235;3534:71:168;3619:40;3639:5;3646:12;3619:19;:40::i;898:556:124:-;1014:9;1279:1;-1:-1:-1;;1262:19:124;1259:1;1256:26;1253:1;1249:34;1242:42;1229:11;1225:60;1198:146;;1328:1;1325;1318:12;1198:146;-1:-1:-1;1415:9:124;;1411:27;;898:556::o;1303:160:168:-;1412:43;;-1:-1:-1;;;;;15521:32:235;;;1412:43:168;;;15503:51:235;15570:18;;;15563:34;;;1385:71:168;;1405:5;;1427:14;;;;;15476:18:235;;1412:43:168;15329:274:235;4059:629:168;4478:23;4504:33;-1:-1:-1;;;;;4504:27:168;;4532:4;4504:27;:33::i;:::-;4478:59;;4551:10;:17;4572:1;4551:22;;:57;;;;;4589:10;4578:30;;;;;;;;;;;;:::i;:::-;4577:31;4551:57;4547:135;;;4631:40;;-1:-1:-1;;;4631:40:168;;-1:-1:-1;;;;;5797:32:235;;4631:40:168;;;5779:51:235;5752:18;;4631:40:168;;;;;;;;5189:578;5272:4;5574:12;5588:23;5623:5;-1:-1:-1;;;;;5615:19:168;5635:4;5615:25;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5573:67;;;;5657:7;:69;;;;-1:-1:-1;5669:17:168;;:22;;:56;;;5706:10;5695:30;;;;;;;;;;;;:::i;:::-;5657:103;;;;-1:-1:-1;;;;;;;;;;5730:26:168;;:30;;;5189:578::o;2705:151:169:-;2780:12;2811:38;2833:6;2841:4;2847:1;2780:12;3421;3435:23;3462:6;-1:-1:-1;;;;;3462:11:169;3481:5;3488:4;3462:31;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3420:73;;;;3510:55;3537:6;3545:7;3554:10;3510:26;:55::i;:::-;3503:62;3180:392;-1:-1:-1;;;;;;3180:392:169:o;4625:582::-;4769:12;4798:7;4793:408;;4821:19;4829:10;4821:7;:19::i;:::-;4793:408;;;5045:17;;:22;:49;;;;-1:-1:-1;;;;;;5071:18:169;;;:23;5045:49;5041:119;;;5121:24;;-1:-1:-1;;;5121:24:169;;-1:-1:-1;;;;;5797:32:235;;5121:24:169;;;5779:51:235;5752:18;;5121:24:169;5633:203:235;5041:119:169;-1:-1:-1;5180:10:169;5173:17;;5743:516;5874:17;;:21;5870:383;;6102:10;6096:17;6158:15;6145:10;6141:2;6137:19;6130:44;5870:383;6225:17;;-1:-1:-1;;;6225:17:169;;;;;;;;;;;5870:383;5743:516;:::o;14:271:235:-;197:6;189;184:3;171:33;153:3;223:16;;248:13;;;223:16;14:271;-1:-1:-1;14:271:235:o;290:361::-;407:12;;455:4;444:16;;438:23;-1:-1:-1;;;;;;518:11:235;;;;407:12;438:23;552:1;541:13;;538:107;;;632:2;626;616:6;613:1;609:14;606:1;602:22;598:31;594:2;590:40;586:49;577:58;;538:107;;;;290:361;;;:::o;656:127::-;717:10;712:3;708:20;705:1;698:31;748:4;745:1;738:15;772:4;769:1;762:15;788:250;873:1;883:113;897:6;894:1;891:13;883:113;;;973:11;;;967:18;954:11;;;947:39;919:2;912:10;883:113;;;-1:-1:-1;;1030:1:235;1012:16;;1005:27;788:250::o;1043:896::-;1122:6;1175:2;1163:9;1154:7;1150:23;1146:32;1143:52;;;1191:1;1188;1181:12;1143:52;1224:9;1218:16;1253:18;1294:2;1286:6;1283:14;1280:34;;;1310:1;1307;1300:12;1280:34;1348:6;1337:9;1333:22;1323:32;;1393:7;1386:4;1382:2;1378:13;1374:27;1364:55;;1415:1;1412;1405:12;1364:55;1444:2;1438:9;1466:2;1462;1459:10;1456:36;;;1472:18;;:::i;:::-;1547:2;1541:9;1515:2;1601:13;;-1:-1:-1;;1597:22:235;;;1621:2;1593:31;1589:40;1577:53;;;1645:18;;;1665:22;;;1642:46;1639:72;;;1691:18;;:::i;:::-;1731:10;1727:2;1720:22;1766:2;1758:6;1751:18;1806:7;1801:2;1796;1792;1788:11;1784:20;1781:33;1778:53;;;1827:1;1824;1817:12;1778:53;1840:68;1905:2;1900;1892:6;1888:15;1883:2;1879;1875:11;1840:68;:::i;:::-;1927:6;1043:896;-1:-1:-1;;;;;;;1043:896:235:o;1944:139::-;-1:-1:-1;;;;;2027:31:235;;2017:42;;2007:70;;2073:1;2070;2063:12;2088:271;2163:6;2216:2;2204:9;2195:7;2191:23;2187:32;2184:52;;;2232:1;2229;2222:12;2184:52;2271:9;2258:23;2290:39;2323:5;2290:39;:::i;2364:118::-;2450:5;2443:13;2436:21;2429:5;2426:32;2416:60;;2472:1;2469;2462:12;2487:241;2543:6;2596:2;2584:9;2575:7;2571:23;2567:32;2564:52;;;2612:1;2609;2602:12;2564:52;2651:9;2638:23;2670:28;2692:5;2670:28;:::i;2733:155::-;2793:5;2838:2;2829:6;2824:3;2820:16;2816:25;2813:45;;;2854:1;2851;2844:12;2893:493;2998:6;3006;3014;3067:2;3055:9;3046:7;3042:23;3038:32;3035:52;;;3083:1;3080;3073:12;3035:52;3119:9;3106:23;3096:33;;3176:2;3165:9;3161:18;3148:32;3138:42;;3231:2;3220:9;3216:18;3203:32;3258:18;3250:6;3247:30;3244:50;;;3290:1;3287;3280:12;3244:50;3313:67;3372:7;3363:6;3352:9;3348:22;3313:67;:::i;:::-;3303:77;;;2893:493;;;;;:::o;3644:367::-;3707:8;3717:6;3771:3;3764:4;3756:6;3752:17;3748:27;3738:55;;3789:1;3786;3779:12;3738:55;-1:-1:-1;3812:20:235;;3855:18;3844:30;;3841:50;;;3887:1;3884;3877:12;3841:50;3924:4;3916:6;3912:17;3900:29;;3984:3;3977:4;3967:6;3964:1;3960:14;3952:6;3948:27;3944:38;3941:47;3938:67;;;4001:1;3998;3991:12;4016:1066;4156:6;4164;4172;4180;4188;4196;4249:3;4237:9;4228:7;4224:23;4220:33;4217:53;;;4266:1;4263;4256:12;4217:53;4305:9;4292:23;4324:39;4357:5;4324:39;:::i;:::-;4382:5;-1:-1:-1;4439:2:235;4424:18;;4411:32;4452:41;4411:32;4452:41;:::i;:::-;4512:7;-1:-1:-1;4570:2:235;4555:18;;4542:32;4593:18;4623:14;;;4620:34;;;4650:1;4647;4640:12;4620:34;4689:70;4751:7;4742:6;4731:9;4727:22;4689:70;:::i;:::-;4778:8;;-1:-1:-1;4663:96:235;-1:-1:-1;4866:2:235;4851:18;;4838:32;;-1:-1:-1;4882:16:235;;;4879:36;;;4911:1;4908;4901:12;4879:36;;4950:72;5014:7;5003:8;4992:9;4988:24;4950:72;:::i;:::-;4016:1066;;;;-1:-1:-1;4016:1066:235;;-1:-1:-1;4016:1066:235;;5041:8;;4016:1066;-1:-1:-1;;;4016:1066:235:o;5087:541::-;5173:6;5181;5189;5197;5250:3;5238:9;5229:7;5225:23;5221:33;5218:53;;;5267:1;5264;5257:12;5218:53;5303:9;5290:23;5280:33;;5363:2;5352:9;5348:18;5335:32;5376:39;5409:5;5376:39;:::i;:::-;5434:5;-1:-1:-1;5491:2:235;5476:18;;5463:32;5504:41;5463:32;5504:41;:::i;:::-;5087:541;;;;-1:-1:-1;5564:7:235;;5618:2;5603:18;5590:32;;-1:-1:-1;;5087:541:235:o;5841:562::-;5955:6;5963;5971;5979;6032:3;6020:9;6011:7;6007:23;6003:33;6000:53;;;6049:1;6046;6039:12;6000:53;6085:9;6072:23;6062:33;;6142:2;6131:9;6127:18;6114:32;6104:42;;6193:2;6182:9;6178:18;6165:32;6155:42;;6248:2;6237:9;6233:18;6220:32;6275:18;6267:6;6264:30;6261:50;;;6307:1;6304;6297:12;6261:50;6330:67;6389:7;6380:6;6369:9;6365:22;6330:67;:::i;:::-;6320:77;;;5841:562;;;;;;;:::o;6772:357::-;6859:6;6912:2;6900:9;6891:7;6887:23;6883:32;6880:52;;;6928:1;6925;6918:12;6880:52;6968:9;6955:23;7001:18;6993:6;6990:30;6987:50;;;7033:1;7030;7023:12;6987:50;7056:67;7115:7;7106:6;7095:9;7091:22;7056:67;:::i;:::-;7046:77;6772:357;-1:-1:-1;;;;6772:357:235:o;7134:631::-;7257:6;7265;7273;7281;7289;7342:3;7330:9;7321:7;7317:23;7313:33;7310:53;;;7359:1;7356;7349:12;7310:53;7395:9;7382:23;7372:33;;7452:2;7441:9;7437:18;7424:32;7414:42;;7503:2;7492:9;7488:18;7475:32;7465:42;;7554:2;7543:9;7539:18;7526:32;7516:42;;7609:3;7598:9;7594:19;7581:33;7637:18;7629:6;7626:30;7623:50;;;7669:1;7666;7659:12;7623:50;7692:67;7751:7;7742:6;7731:9;7727:22;7692:67;:::i;:::-;7682:77;;;7134:631;;;;;;;;:::o;7770:541::-;7856:6;7864;7872;7880;7933:3;7921:9;7912:7;7908:23;7904:33;7901:53;;;7950:1;7947;7940:12;7901:53;7986:9;7973:23;7963:33;;8046:2;8035:9;8031:18;8018:32;8059:39;8092:5;8059:39;:::i;:::-;8117:5;-1:-1:-1;8169:2:235;8154:18;;8141:32;;-1:-1:-1;8225:2:235;8210:18;;8197:32;8238:41;8197:32;8238:41;:::i;:::-;7770:541;;;;-1:-1:-1;7770:541:235;;-1:-1:-1;;7770:541:235:o;8316:390::-;8381:6;8389;8442:2;8430:9;8421:7;8417:23;8413:32;8410:52;;;8458:1;8455;8448:12;8410:52;8497:9;8484:23;8516:39;8549:5;8516:39;:::i;:::-;8574:5;-1:-1:-1;8631:2:235;8616:18;;8603:32;8644:30;8603:32;8644:30;:::i;:::-;8693:7;8683:17;;;8316:390;;;;;:::o;8711:425::-;8807:6;8815;8868:2;8856:9;8847:7;8843:23;8839:32;8836:52;;;8884:1;8881;8874:12;8836:52;8920:9;8907:23;8897:33;;8981:2;8970:9;8966:18;8953:32;9008:18;9000:6;8997:30;8994:50;;;9040:1;9037;9030:12;8994:50;9063:67;9122:7;9113:6;9102:9;9098:22;9063:67;:::i;:::-;9053:77;;;8711:425;;;;;:::o;9141:912::-;9249:6;9257;9265;9273;9281;9289;9297;9350:3;9338:9;9329:7;9325:23;9321:33;9318:53;;;9367:1;9364;9357:12;9318:53;9406:9;9393:23;9425:39;9458:5;9425:39;:::i;:::-;9483:5;-1:-1:-1;9540:2:235;9525:18;;9512:32;9553:41;9512:32;9553:41;:::i;:::-;9613:7;-1:-1:-1;9672:2:235;9657:18;;9644:32;9685:30;9644:32;9685:30;:::i;:::-;9734:7;-1:-1:-1;9788:2:235;9773:18;;9760:32;;-1:-1:-1;9844:3:235;9829:19;;9816:33;9893:4;9880:18;;9868:31;;9858:59;;9913:1;9910;9903:12;9858:59;9141:912;;;;-1:-1:-1;9141:912:235;;;;9936:7;9990:3;9975:19;;9962:33;;-1:-1:-1;10042:3:235;10027:19;;;10014:33;;9141:912;-1:-1:-1;;9141:912:235:o;10058:391::-;10135:6;10143;10151;10204:2;10192:9;10183:7;10179:23;10175:32;10172:52;;;10220:1;10217;10210:12;10172:52;10256:9;10243:23;10233:33;;10316:2;10305:9;10301:18;10288:32;10329:39;10362:5;10329:39;:::i;:::-;10058:391;;10387:5;;-1:-1:-1;;;10439:2:235;10424:18;;;;10411:32;;10058:391::o;10714:691::-;10809:6;10817;10825;10833;10841;10894:3;10882:9;10873:7;10869:23;10865:33;10862:53;;;10911:1;10908;10901:12;10862:53;10947:9;10934:23;10924:33;;11007:2;10996:9;10992:18;10979:32;11020:39;11053:5;11020:39;:::i;:::-;11078:5;-1:-1:-1;11135:2:235;11120:18;;11107:32;11148:41;11107:32;11148:41;:::i;:::-;11208:7;-1:-1:-1;11262:2:235;11247:18;;11234:32;;-1:-1:-1;11318:3:235;11303:19;;11290:33;11332:41;11290:33;11332:41;:::i;:::-;11392:7;11382:17;;;10714:691;;;;;;;;:::o;11410:180::-;11469:6;11522:2;11510:9;11501:7;11497:23;11493:32;11490:52;;;11538:1;11535;11528:12;11490:52;-1:-1:-1;11561:23:235;;11410:180;-1:-1:-1;11410:180:235:o;12424:287::-;12553:3;12591:6;12585:13;12607:66;12666:6;12661:3;12654:4;12646:6;12642:17;12607:66;:::i;:::-;12689:16;;;;;12424:287;-1:-1:-1;;12424:287:235:o;13138:521::-;13215:4;13221:6;13281:11;13268:25;13375:2;13371:7;13360:8;13344:14;13340:29;13336:43;13316:18;13312:68;13302:96;;13394:1;13391;13384:12;13302:96;13421:33;;13473:20;;;-1:-1:-1;13516:18:235;13505:30;;13502:50;;;13548:1;13545;13538:12;13502:50;13581:4;13569:17;;-1:-1:-1;13612:14:235;13608:27;;;13598:38;;13595:58;;;13649:1;13646;13639:12;13874:222;13939:9;;;13960:10;;;13957:133;;;14012:10;14007:3;14003:20;14000:1;13993:31;14047:4;14044:1;14037:15;14075:4;14072:1;14065:15;14380:184;14450:6;14503:2;14491:9;14482:7;14478:23;14474:32;14471:52;;;14519:1;14516;14509:12;14471:52;-1:-1:-1;14542:16:235;;14380:184;-1:-1:-1;14380:184:235:o;15895:245::-;15962:6;16015:2;16003:9;15994:7;15990:23;15986:32;15983:52;;;16031:1;16028;16021:12;15983:52;16063:9;16057:16;16082:28;16104:5;16082:28;:::i";
        readonly linkReferences: {};
        readonly immutableReferences: {
            readonly "18174": readonly [{
                readonly start: 3365;
                readonly length: 32;
            }, {
                readonly start: 3462;
                readonly length: 32;
            }];
            readonly "4035": readonly [{
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
            readonly "4038": readonly [{
                readonly start: 1593;
                readonly length: 32;
            }, {
                readonly start: 1785;
                readonly length: 32;
            }, {
                readonly start: 2036;
                readonly length: 32;
            }];
            readonly "4041": readonly [{
                readonly start: 1398;
                readonly length: 32;
            }, {
                readonly start: 1935;
                readonly length: 32;
            }];
            readonly "4044": readonly [{
                readonly start: 1469;
                readonly length: 32;
            }, {
                readonly start: 2135;
                readonly length: 32;
            }, {
                readonly start: 2594;
                readonly length: 32;
            }];
            readonly "4047": readonly [{
                readonly start: 1677;
                readonly length: 32;
            }, {
                readonly start: 2663;
                readonly length: 32;
            }, {
                readonly start: 2753;
                readonly length: 32;
            }];
            readonly "7760": readonly [{
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
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"sweepCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolConfig\",\"name\":\"_config\",\"type\":\"tuple\"},{\"internalType\":\"address\",\"name\":\"_target0\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_target1\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_target2\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_target3\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_target4\",\"type\":\"address\"},{\"internalType\":\"contract IERC4626\",\"name\":\"_pool\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"name\":\"AddressEmptyCode\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"AddressInsufficientBalance\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FailedInnerCall\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidBaseToken\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"}],\"name\":\"SafeERC20FailedOperation\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"TransferFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnexpectedSuccess\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"basePayment\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fees\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newFeeCollector\",\"type\":\"address\"}],\"name\":\"FeeCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseProceeds\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"}],\"name\":\"PauseStatusUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"name\":\"Sweep\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newSweepCollector\",\"type\":\"address\"}],\"name\":\"SweepCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"stateMutability\":\"nonpayable\",\"type\":\"fallback\"},{\"inputs\":[],\"name\":\"PERMIT_TYPEHASH\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"addLiquidity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"name\":\"batchTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"checkpoint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"closeLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"closeShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"collectGovernanceFee\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"deposit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"sharesMinted\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"domainSeparator\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"initialize\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"openLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"openShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"name\":\"pause\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_approved\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permitForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"pricePerVaultShare\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"redeemWithdrawalShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"removeLiquidity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"setApproval\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"setApprovalBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"setFeeCollector\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"setGovernance\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"name\":\"setPauser\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"setSweepCollector\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"sweep\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target0\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target1\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target2\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target3\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target4\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"transferFromBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_shares\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_sharePrice\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"withdraw\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"amountWithdrawn\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"errors\":{\"AddressEmptyCode(address)\":[{\"details\":\"There's no code at `target` (it is not a contract).\"}],\"AddressInsufficientBalance(address)\":[{\"details\":\"The ETH balance of the account is not enough to perform the operation.\"}],\"FailedInnerCall()\":[{\"details\":\"A call to an address target failed. The target may have reverted.\"}],\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}],\"SafeERC20FailedOperation(address)\":[{\"details\":\"An operation with an ERC20 token failed.\"}]},\"kind\":\"dev\",\"methods\":{\"addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_contribution\":\"The amount of capital to supply. The units of this        quantity are either base or vault shares, depending on the value        of `_options.asBase`.\",\"_maxApr\":\"The maximum APR at which the LP is willing to supply.\",\"_minApr\":\"The minimum APR at which the LP is willing to supply.\",\"_minLpSharePrice\":\"The minimum LP share price the LP is willing        to accept for their shares. LPs incur negative slippage when        adding liquidity if there is a net curve position in the market,        so this allows LPs to protect themselves from high levels of        slippage. The units of this quantity are either base or vault        shares, depending on the value of `_options.asBase`.\",\"_options\":\"The options that configure how the operation is settled.\"},\"returns\":{\"_0\":\"The LP shares received by the LP.\"}},\"batchTransferFrom(address,address,uint256[],uint256[])\":{\"params\":{\"from\":\"The source account.\",\"ids\":\"The array of token ids of the asset to transfer.\",\"to\":\"The destination account.\",\"values\":\"The amount of each token to transfer.\"}},\"checkpoint(uint256)\":{\"params\":{\"_checkpointTime\":\"The time of the checkpoint to create.\"}},\"closeLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_bondAmount\":\"The amount of longs to close.\",\"_maturityTime\":\"The maturity time of the long.\",\"_minOutput\":\"The minimum proceeds the trader will accept. The units        of this quantity are either base or vault shares, depending on        the value of `_options.asBase`.\",\"_options\":\"The options that configure how the trade is settled.\"},\"returns\":{\"_0\":\"The proceeds the user receives. The units of this         quantity are either base or vault shares, depending on the value         of `_options.asBase`.\"}},\"closeShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_bondAmount\":\"The amount of shorts to close.\",\"_maturityTime\":\"The maturity time of the short.\",\"_minOutput\":\"The minimum output of this trade. The units of this        quantity are either base or vault shares, depending on the value        of `_options.asBase`.\",\"_options\":\"The options that configure how the trade is settled.\"},\"returns\":{\"_0\":\"The proceeds of closing this short. The units of this         quantity are either base or vault shares, depending on the value         of `_options.asBase`.\"}},\"collectGovernanceFee((address,bool,bytes))\":{\"params\":{\"_options\":\"The options that configure how the fees are settled.\"},\"returns\":{\"_0\":\"The governance fees collected. The units of this         quantity are either base or vault shares, depending on the value         of `_options.asBase`.\"}},\"domainSeparator()\":{\"returns\":{\"_0\":\"The EIP712 domain separator.\"}},\"initialize(uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_apr\":\"The target APR.\",\"_contribution\":\"The amount of capital to supply. The units of this        quantity are either base or vault shares, depending on the value        of `_options.asBase`.\",\"_options\":\"The options that configure how the operation is settled.\"},\"returns\":{\"_0\":\"The initial number of LP shares created.\"}},\"openLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_amount\":\"The amount of capital provided to open the long. The        units of this quantity are either base or vault shares, depending        on the value of `_options.asBase`.\",\"_minOutput\":\"The minimum number of bonds to receive.\",\"_minVaultSharePrice\":\"The minimum vault share price at which to        open the long. This allows traders to protect themselves from        opening a long in a checkpoint where negative interest has        accrued.\",\"_options\":\"The options that configure how the trade is settled.\"},\"returns\":{\"_0\":\"The maturity time of the bonds.\",\"_1\":\"The amount of bonds the user received.\"}},\"openShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_bondAmount\":\"The amount of bonds to short.\",\"_maxDeposit\":\"The most the user expects to deposit for this trade.        The units of this quantity are either base or vault shares,        depending on the value of `_options.asBase`.\",\"_minVaultSharePrice\":\"The minimum vault share price at which to open        the short. This allows traders to protect themselves from opening        a short in a checkpoint where negative interest has accrued.\",\"_options\":\"The options that configure how the trade is settled.\"},\"returns\":{\"_0\":\"The maturity time of the short.\",\"_1\":\"The amount the user deposited for this trade. The units         of this quantity are either base or vault shares, depending on         the value of `_options.asBase`.\"}},\"pause(bool)\":{\"params\":{\"_status\":\"True to pause all deposits and false to unpause them.\"}},\"permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"details\":\"The signature for this function follows EIP 712 standard and should      be generated with the eth_signTypedData JSON RPC call instead of      the eth_sign JSON RPC call. If using out of date parity signing      libraries the v component may need to be adjusted. Also it is very      rare but possible for v to be other values, those values are not      supported.\",\"params\":{\"_approved\":\"A boolean of the approval status to set to.\",\"deadline\":\"The timestamp which the signature must be submitted by        to be valid.\",\"owner\":\"The owner of the account which is having the new approval set.\",\"r\":\"The r component of the ECDSA signature.\",\"s\":\"The s component of the ECDSA signature.\",\"spender\":\"The address which will be allowed to spend owner's tokens.\",\"v\":\"Extra ECDSA data which allows public key recovery from        signature assumed to be 27 or 28.\"}},\"pricePerVaultShare()\":{\"returns\":{\"vaultSharePrice\":\"The current share price.\"}},\"redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_minOutputPerShare\":\"The minimum amount the LP expects to        receive for each withdrawal share that is burned. The units of        this quantity are either base or vault shares, depending on the        value of `_options.asBase`.\",\"_options\":\"The options that configure how the operation is settled.\",\"_withdrawalShares\":\"The withdrawal shares to redeem.\"},\"returns\":{\"_0\":\"The amount the LP received. The units of this quantity         are either base or vault shares, depending on the value of         `_options.asBase`.\",\"_1\":\"The amount of withdrawal shares that         were redeemed.\"}},\"removeLiquidity(uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_lpShares\":\"The LP shares to burn.\",\"_minOutputPerShare\":\"The minimum amount the LP expects to receive        for each withdrawal share that is burned. The units of this        quantity are either base or vault shares, depending on the value        of `_options.asBase`.\",\"_options\":\"The options that configure how the operation is settled.\"},\"returns\":{\"_0\":\"The amount the LP removing liquidity receives. The         units of this quantity are either base or vault shares,         depending on the value of `_options.asBase`.\",\"_1\":\"The base that the LP receives buys out some of         their LP shares, but it may not be sufficient to fully buy the         LP out. In this case, the LP receives withdrawal shares equal in         value to the present value they are owed. As idle capital         becomes available, the pool will buy back these shares.\"}},\"setApproval(uint256,address,uint256)\":{\"params\":{\"amount\":\"The max tokens the approved person can use, setting to        uint256.max will cause the value to never decrement (saving gas        on transfer).\",\"operator\":\"The address who will be able to use the tokens.\",\"tokenID\":\"The asset to approve the use of.\"}},\"setApprovalBridge(uint256,address,uint256,address)\":{\"params\":{\"amount\":\"The max tokens the approved person can use, setting to        uint256.max will cause the value to never decrement [saving gas        on transfer].\",\"caller\":\"The eth address which called the linking contract.\",\"operator\":\"The address who will be able to use the tokens.\",\"tokenID\":\"The asset to approve the use of.\"}},\"setApprovalForAll(address,bool)\":{\"params\":{\"approved\":\"True to approve, false to remove approval.\",\"operator\":\"The eth address which can access the caller's assets.\"}},\"setFeeCollector(address)\":{\"params\":{\"_who\":\"The new fee collector address.\"}},\"setGovernance(address)\":{\"params\":{\"_who\":\"The new governance address.\"}},\"setPauser(address,bool)\":{\"params\":{\"status\":\"The new pauser status.\",\"who\":\"The address to change.\"}},\"setSweepCollector(address)\":{\"params\":{\"_who\":\"The new sweep collector address.\"}},\"sweep(address)\":{\"details\":\"WARN: It is unlikely but possible that there is a selector overlap      with 'transferFrom'. Any integrating contracts should be checked      for that, as it may result in an unexpected call from this address.\",\"params\":{\"_target\":\"The target token to sweep.\"}},\"transferFrom(uint256,address,address,uint256)\":{\"params\":{\"amount\":\"The amount of token to move.\",\"from\":\"The address whose balance will be reduced.\",\"to\":\"The address whose balance will be increased.\",\"tokenID\":\"The token identifier.\"}},\"transferFromBridge(uint256,address,address,uint256,address)\":{\"params\":{\"amount\":\"The amount of token to move.\",\"caller\":\"The msg.sender or the caller of the ERC20Forwarder.\",\"from\":\"The address whose balance will be reduced.\",\"to\":\"The address whose balance will be increased.\",\"tokenID\":\"The token identifier.\"}}},\"version\":1},\"userdoc\":{\"errors\":{\"InvalidBaseToken()\":[{\"notice\":\"Thrown when the base token isn't valid. Each instance will have         different criteria for what constitutes a valid base token.\"}],\"TransferFailed()\":[{\"notice\":\"Thrown when an ether transfer fails.\"}],\"UnexpectedSuccess()\":[{\"notice\":\"Thrown when a read-only call succeeds. The proxy architecture         uses a force-revert delegatecall pattern to ensure that calls         that are intended to be read-only are actually read-only.\"}]},\"events\":{\"AddLiquidity(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when an LP adds liquidity to the Hyperdrive pool.\"},\"Approval(address,address,uint256)\":{\"notice\":\"Emitted when an account changes the allowance for another         account.\"},\"ApprovalForAll(address,address,bool)\":{\"notice\":\"Emitted when an account changes the approval for all of its         tokens.\"},\"CloseLong(address,address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is closed.\"},\"CloseShort(address,address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is closed.\"},\"CollectGovernanceFee(address,uint256)\":{\"notice\":\"Emitted when governance fees are collected.\"},\"CreateCheckpoint(uint256,uint256,uint256,uint256,uint256)\":{\"notice\":\"Emitted when a checkpoint is created.\"},\"FeeCollectorUpdated(address)\":{\"notice\":\"Emitted when the fee collector address is updated.\"},\"GovernanceUpdated(address)\":{\"notice\":\"Emitted when the governance address is updated.\"},\"Initialize(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when the Hyperdrive pool is initialized.\"},\"OpenLong(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is opened.\"},\"OpenShort(address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is opened.\"},\"PauseStatusUpdated(bool)\":{\"notice\":\"Emitted when the pause status is updated.\"},\"PauserUpdated(address,bool)\":{\"notice\":\"Emitted when a pauser is updated.\"},\"RedeemWithdrawalShares(address,address,uint256,uint256,uint256,bool)\":{\"notice\":\"Emitted when an LP redeems withdrawal shares.\"},\"RemoveLiquidity(address,address,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when an LP removes liquidity from the Hyperdrive pool.\"},\"Sweep(address,address)\":{\"notice\":\"Emitted when tokens are swept.\"},\"SweepCollectorUpdated(address)\":{\"notice\":\"Emitted when the sweep collector address is updated.\"},\"TransferSingle(address,address,address,uint256,uint256)\":{\"notice\":\"Emitted when tokens are transferred from one account to another.\"}},\"kind\":\"user\",\"methods\":{\"PERMIT_TYPEHASH()\":{\"notice\":\"The typehash used to calculate the EIP712 hash for `permitForAll`.\"},\"addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows LPs to supply liquidity for LP shares.\"},\"batchTransferFrom(address,address,uint256[],uint256[])\":{\"notice\":\"Transfers several assets from one account to another.\"},\"checkpoint(uint256)\":{\"notice\":\"Attempts to mint a checkpoint with the specified checkpoint time.\"},\"closeLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Closes a long position with a specified maturity time.\"},\"closeShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Closes a short position with a specified maturity time.\"},\"collectGovernanceFee((address,bool,bytes))\":{\"notice\":\"This function collects the governance fees accrued by the pool.\"},\"domainSeparator()\":{\"notice\":\"Computes the EIP712 domain separator which prevents user signed         messages for this contract to be replayed in other contracts:         https://eips.ethereum.org/EIPS/eip-712.\"},\"initialize(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows the first LP to initialize the market with a target APR.\"},\"openLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Opens a long position.\"},\"openShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Opens a short position.\"},\"pause(bool)\":{\"notice\":\"Allows an authorized address to pause this contract.\"},\"permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"notice\":\"Allows a caller who is not the owner of an account to execute the      functionality of 'approve' for all assets with the owners signature.\"},\"pricePerVaultShare()\":{\"notice\":\"Loads the share price from the yield source\"},\"redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Redeems withdrawal shares by giving the LP a pro-rata amount of         the withdrawal pool's proceeds. This function redeems the         maximum amount of the specified withdrawal shares given the         amount of withdrawal shares ready to withdraw.\"},\"removeLiquidity(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows an LP to burn shares and withdraw from the pool.\"},\"setApproval(uint256,address,uint256)\":{\"notice\":\"Allows a user to set an approval for an individual asset with         specific amount.\"},\"setApprovalBridge(uint256,address,uint256,address)\":{\"notice\":\"Allows the compatibility linking contract to forward calls to         set asset approvals.\"},\"setApprovalForAll(address,bool)\":{\"notice\":\"Allows a user to approve an operator to use all of their assets.\"},\"setFeeCollector(address)\":{\"notice\":\"Allows governance to transfer the fee collector role.\"},\"setGovernance(address)\":{\"notice\":\"Allows governance to transfer the governance role.\"},\"setPauser(address,bool)\":{\"notice\":\"Allows governance to change the pauser status of an address.\"},\"setSweepCollector(address)\":{\"notice\":\"Allows governance to transfer the sweep collector role.\"},\"sweep(address)\":{\"notice\":\"Transfers the contract's balance of a target token to the fee         collector address.\"},\"target0()\":{\"notice\":\"The target0 address. This is a logic contract that contains all         of the getters for the Hyperdrive pool as well as some stateful         functions.\"},\"target1()\":{\"notice\":\"The target1 address. This is a logic contract that contains         stateful functions.\"},\"target2()\":{\"notice\":\"The target2 address. This is a logic contract that contains         stateful functions.\"},\"target3()\":{\"notice\":\"The target3 address. This is a logic contract that contains         stateful functions.\"},\"target4()\":{\"notice\":\"The target4 address. This is a logic contract that contains         stateful functions.\"},\"transferFrom(uint256,address,address,uint256)\":{\"notice\":\"Transfers an amount of assets from the source to the destination.\"},\"transferFromBridge(uint256,address,address,uint256,address)\":{\"notice\":\"Permissioned transfer for the bridge to access, only callable by         the ERC20 linking bridge.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/test/MockERC4626Hyperdrive.sol\":\"MockERC4626Hyperdrive\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/external/Hyperdrive.sol\":{\"keccak256\":\"0x4d166ec6a8a2e3f2cae2d0f990d1cc40965ec995130d7a7be1af2b9e390d3fd8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2185afc7935052ce78427f3ee5629d4c6d93cbffad776fb281c2b79ff2234d67\",\"dweb:/ipfs/QmT6e2H7pXG3e2BM1EoHTxzWhTwxjGu75AxNkZ4CxyEbw6\"]},\"contracts/src/external/HyperdriveTarget0.sol\":{\"keccak256\":\"0x7336935ca8a1b3985f01f923c8444e0eaeffe1ce71ae2a84bf2514cc502b913d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://bd572503e6cc9f49d7cacef4242fa485035b7e46090c82bbfe2f4e9f9ed14597\",\"dweb:/ipfs/QmaXKWM58hzKtwtq7jn6pwY5UF7EtaL2sQW6mNXpaonckZ\"]},\"contracts/src/instances/erc4626/ERC4626Base.sol\":{\"keccak256\":\"0x946feca7353542dc4095e98601d99be5e1c75ef1bb8e6d53fdb119d62618eb18\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://506a0ba5690c1ad5f0f9f0ed21e1635ac37d9dcb2b0a11db92c04acdfa853cad\",\"dweb:/ipfs/QmdteWqBq6K3XAKvyPbpKGCVERwvEN8r2pkTTv8hZc73gb\"]},\"contracts/src/instances/erc4626/ERC4626Hyperdrive.sol\":{\"keccak256\":\"0xa9b4ee92ed0e3ab456e59425d21b1f1efd404afbfa10022559cb3045c5149551\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://accf719a3e39fad37443689733282de5d8f2a99e92814cda9e7e7b12ac507531\",\"dweb:/ipfs/QmY6xmaYEFPXcSEt8fCk1Diov3QBm5RP4wm1CQmbf5Ms3Q\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IERC4626.sol\":{\"keccak256\":\"0x7d99427dc97cc1b469d205de5ced0eb15c6e305d0a7ef73d45fe7ef47ce7231e\",\"license\":\"GPL-2.0-or-later\",\"urls\":[\"bzz-raw://c7726091d2f569ff79057a693324886e2a5558c586684460b51cd20612be59d3\",\"dweb:/ipfs/QmZv6BBe22fZRaC5iYiTuZMD2ZgUXvMBHjwZLikVSoXjDP\"]},\"contracts/src/interfaces/IERC4626Hyperdrive.sol\":{\"keccak256\":\"0x95d34e3dbf7a85d9d5d0071baddf3a8d73cf8a68a5c062d7656f4984b3ef5cb6\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2067273085c326e2f1789d1f571ea6fe4ecf211e551ffcda03b98ae0c9cdb724\",\"dweb:/ipfs/QmYxrY9uCXkaTSTCqvQvYx9phDcvkJim1JFbopxJRFEPbw\"]},\"contracts/src/interfaces/IERC4626HyperdriveRead.sol\":{\"keccak256\":\"0x2039eef677ba37898e8e42dcb321d11d3c87f739122fd03726241252326dea33\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://31eacdd274ac0d6ff2969cb465e0fddb262d223f78f9001d7252bd7370449c73\",\"dweb:/ipfs/QmVNRFMvXk1r8h9pCdSsRhQr5rkj8XgGpNoLwhb6Q6Hzbk\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xb8ee04f3090b498966970e210f7de0f982f6445628556f2f176385423d8c5952\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://db789f03faa935c6e3b0882b6e873e8f683c9c8841a4b128366dcbe7321911bf\",\"dweb:/ipfs/QmSQh1cX79nApuSAfJbVN99dmEaE4CK9QwWfEGcwhJMBLK\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x68adcd293ff25711add1698b6024faa45beec01eb044bd0103d3020aa96d856e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0e0f5e35a7d2c656e249394d25896e5adfb9af3e210c01b9ef5fa81d25a45e24\",\"dweb:/ipfs/QmbLASezHPWHcbodqSfw3Qh9NzqekqVPM8FhCXKGTCXL1h\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x812ccb32dff907e8614c89a65196eec239eceb3e63f9f14dde2b2269c75a67c0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://da5f2ce974bfcd8185342c121c879ba5aef23e1e4e7b36cf9fcba68296b8892c\",\"dweb:/ipfs/QmSho3PWs9bzejTYYjySuXcH9tVP4xFnkbUmSzQA54g8eG\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf\",\"dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/internal/HyperdriveAdmin.sol\":{\"keccak256\":\"0x683548d598b303bc8bab561818a2f88c100f6d26fda478e89c02b46cf710726d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://054a605eeb41760fbe1922bb32f511c87e1ca4dd04f3fa64f40783060b371603\",\"dweb:/ipfs/QmezP1mjnbPCwdDCrh4GjL7RVzU61ohTrcW6A7yxLiKcQM\"]},\"contracts/src/internal/HyperdriveBase.sol\":{\"keccak256\":\"0x7feb8df22e6f91b1ee70f50f5ca16a7819601bcb88fc5a5fa9cf16c708cc52bb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://60ff7ff4faa45551099b025d03f2438477b5fd1f64f82b78c6ed26cbdafc64f6\",\"dweb:/ipfs/QmWtbftziGdSKAEvpRoaWRnTxMNwgUVs2nDN6nFugX1WYN\"]},\"contracts/src/internal/HyperdriveCheckpoint.sol\":{\"keccak256\":\"0x3514b829c99e0015385ff08dd1479e452529a6283e8b6800946542ff21dc9649\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://37ffd17baea5080f4184372ac835bf60694760499756235a61e41a480f4ab3c7\",\"dweb:/ipfs/QmUzEnJhRhpW18MH7GyXsug9u5FLehNfgjR7RAhZizLLVd\"]},\"contracts/src/internal/HyperdriveLP.sol\":{\"keccak256\":\"0x72410851e77940e66681e23b9d10f3c3de0e8c9a3e5b1cca627e93bba431775d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://82a9292f388b16572cc5c5e873d1ead666ddcc3e436cf5d7fb036fd6c63ee9a2\",\"dweb:/ipfs/Qmauzxkn46ACS4XV43m2MbDF91KYP4ExYwSxL3cm1SDL6j\"]},\"contracts/src/internal/HyperdriveLong.sol\":{\"keccak256\":\"0xe791adb5c58a73ff2c978fcc79153f9042702e2c4fc5d71f60534323d5ba4832\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7ec4adf40e5f90574c7484ddeeed41cbe1f60b29847b18b169aa3130b8882aa7\",\"dweb:/ipfs/QmeY9y922jhcLzGw9d4VUNNoDkUeFhTJ8ZVThrvqzcGGjm\"]},\"contracts/src/internal/HyperdriveMultiToken.sol\":{\"keccak256\":\"0x21a9aafb8e23a22c77111e13538fa8f709446e4f3a64ef84b2eebc2aa9d04373\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://41517912353540de5b430587ca8220f9d34d4432d3c723951d5fb618d5907b5d\",\"dweb:/ipfs/QmU3cTCrAq94digVS97s5af1Pu86uGBpmpus6w7828fUbG\"]},\"contracts/src/internal/HyperdriveShort.sol\":{\"keccak256\":\"0xc42b5a9ee5eee3cb9177b136eb9f4b81a4b51d9468f8faa97309934b6b371bc5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b9291237fcdbb8ff97517acd19499cfa4afc6d670a89fd5cc0309a201a7b1006\",\"dweb:/ipfs/QmfQmUwvGhJgPFyNaHvur8AViePBzvSBNAdaZJBwMkY5Je\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xf13ba4bcf41673bc04e4ae32a29c31b62514d66cfedee70b0d3bff574efc0e4a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e505639a656cf7c908e7c64cfd5cae6f4174a679de19d17a3f12f6e3fc4b2195\",\"dweb:/ipfs/QmNmcmz9nV9uDyeouo8yWAKMoMqEVx6JMTfZwCRa9QU83N\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0x3031a1ec376be333eebe0062c474a22d7f970cb02de62ab6823c6918c0a7f83b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6c80cc2fd8b7908b6420ebb21cb99266c93e01d6cdd9d1a41f8847493849b131\",\"dweb:/ipfs/QmeMehWbF2RwQaf6c6yaj5KHjXboDRpzBCtvFnLW4BXBbc\"]},\"contracts/src/libraries/Errors.sol\":{\"keccak256\":\"0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88\",\"dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x631f6529908f62f71775f8c6120afdca3a836fb24fa9fa4701cad54f4a9da076\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2baf6ad8917a3fbb6d040334451f6b4f6936b00518c4cd308b9c6fa11569b2bd\",\"dweb:/ipfs/QmXD16vk6MRxmPRqy8ZXSpRA5XxhSf1pnsQH32ARDJTk8L\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0xcf305dde8aa320d1e1b767734ce8edce456af537525d40e30d5345f09f6e34ab\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://056c9a563f1a9e0133e17463497ad19be517d35b770170122edea50ca9fbe002\",\"dweb:/ipfs/QmS6dkVRHzdbv7etumcCtNtm9GuXDCjqZxxhtYfP6keAAY\"]},\"contracts/src/libraries/LPMath.sol\":{\"keccak256\":\"0x5b3c0d159b1945a14227028d835e011bf740e007f664cba049ece1b6ab963067\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d8f4fef22462dabc799b2f8124440a7cc57076f7ceecb46219c69b09f50baf5f\",\"dweb:/ipfs/Qmcw9iC1RZt4Nh7dGH1yR7vUi6qZHJf6ReAvF2uLFHESqZ\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8\",\"dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x4a9c91313bed7cda6ef503af23c9f777008b5258e9cb2176eab6acc52be79891\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://88da1f5502a12fe1024be90f6a6ea08556cc1f2660ab8cbeb5e07640abb7711c\",\"dweb:/ipfs/QmVQoG9TyrAsVYcgvgZfgA5pQk8V8wvS4BewGNP4B3Txyy\"]},\"contracts/test/MockERC4626Hyperdrive.sol\":{\"keccak256\":\"0xd214ab2a5d329f52a8f2455e776623771dc7fdbb6b8f89111fd59b37ae9a6a74\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ab45f5330075acbb091d697e2dd87438d3bf8900cb59bb976fa6f00255e85fd9\",\"dweb:/ipfs/Qma5mTAbxzTPxLVTi3fmMPV9QhnfHquyHgd979PAA9z2gc\"]},\"lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol\":{\"keccak256\":\"0x60c65f701957fdd6faea1acb0bb45825791d473693ed9ecb34726fdfaa849dd7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ea290300e0efc4d901244949dc4d877fd46e6c5e43dc2b26620e8efab3ab803f\",\"dweb:/ipfs/QmcLLJppxKeJWqHxE2CUkcfhuRTgHSn8J4kijcLa5MYhSt\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0xc3e1fa9d1987f8d349dfb4d6fe93bf2ca014b52ba335cfac30bfe71e357e6f80\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c5703ccdeb7b1d685e375ed719117e9edf2ab4bc544f24f23b0d50ec82257229\",\"dweb:/ipfs/QmTdwkbQq7owpCiyuzE7eh5LrD2ddrBCZ5WHVsWPi1RrTS\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c\",\"dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850\",\"dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x6008dabfe393240d73d7dd7688033f72740d570aa422254d29a7dce8568f3aff\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f5196ec75139918c6c7bb4251b36395e668f1fa6d206beba7e7520e74913940d\",\"dweb:/ipfs/QmSyqjksXxmm2mCG6qRd1yuwLykypkSVBbnBnGqJRcuJMi\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x37bb49513c49c87c4642a891b13b63571bc87013dde806617aa1efb54605f386\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b3036b3a83b7c48f96641f2a9002b9f2dcb6a5958dd670894ada21ae8229b3d0\",\"dweb:/ipfs/QmUNfSBdoVtjhETaUJCYcaC7pTMgbhht926tJ2uXJbiVd3\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245\",\"dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y\"]},\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":{\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12\",\"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF\"]},\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02\",\"dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd\"]}},\"version\":1}";
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
                }, {
                    readonly internalType: "contract IERC4626";
                    readonly name: "_pool";
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
                readonly name: "InvalidBaseToken";
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
            readonly remappings: readonly ["@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/", "aave-v3-core/=lib/aave-v3-core/", "ds-test/=lib/forge-std/lib/ds-test/src/", "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/", "forge-std/=lib/forge-std/src/", "openzeppelin-contracts/=lib/openzeppelin-contracts/", "openzeppelin/=lib/openzeppelin-contracts/contracts/", "solmate/=lib/solmate/src/"];
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
                readonly keccak256: "0x7336935ca8a1b3985f01f923c8444e0eaeffe1ce71ae2a84bf2514cc502b913d";
                readonly urls: readonly ["bzz-raw://bd572503e6cc9f49d7cacef4242fa485035b7e46090c82bbfe2f4e9f9ed14597", "dweb:/ipfs/QmaXKWM58hzKtwtq7jn6pwY5UF7EtaL2sQW6mNXpaonckZ"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/instances/erc4626/ERC4626Base.sol": {
                readonly keccak256: "0x946feca7353542dc4095e98601d99be5e1c75ef1bb8e6d53fdb119d62618eb18";
                readonly urls: readonly ["bzz-raw://506a0ba5690c1ad5f0f9f0ed21e1635ac37d9dcb2b0a11db92c04acdfa853cad", "dweb:/ipfs/QmdteWqBq6K3XAKvyPbpKGCVERwvEN8r2pkTTv8hZc73gb"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/instances/erc4626/ERC4626Hyperdrive.sol": {
                readonly keccak256: "0xa9b4ee92ed0e3ab456e59425d21b1f1efd404afbfa10022559cb3045c5149551";
                readonly urls: readonly ["bzz-raw://accf719a3e39fad37443689733282de5d8f2a99e92814cda9e7e7b12ac507531", "dweb:/ipfs/QmY6xmaYEFPXcSEt8fCk1Diov3QBm5RP4wm1CQmbf5Ms3Q"];
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
                readonly keccak256: "0x95d34e3dbf7a85d9d5d0071baddf3a8d73cf8a68a5c062d7656f4984b3ef5cb6";
                readonly urls: readonly ["bzz-raw://2067273085c326e2f1789d1f571ea6fe4ecf211e551ffcda03b98ae0c9cdb724", "dweb:/ipfs/QmYxrY9uCXkaTSTCqvQvYx9phDcvkJim1JFbopxJRFEPbw"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IERC4626HyperdriveRead.sol": {
                readonly keccak256: "0x2039eef677ba37898e8e42dcb321d11d3c87f739122fd03726241252326dea33";
                readonly urls: readonly ["bzz-raw://31eacdd274ac0d6ff2969cb465e0fddb262d223f78f9001d7252bd7370449c73", "dweb:/ipfs/QmVNRFMvXk1r8h9pCdSsRhQr5rkj8XgGpNoLwhb6Q6Hzbk"];
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
            readonly "contracts/test/MockERC4626Hyperdrive.sol": {
                readonly keccak256: "0xd214ab2a5d329f52a8f2455e776623771dc7fdbb6b8f89111fd59b37ae9a6a74";
                readonly urls: readonly ["bzz-raw://ab45f5330075acbb091d697e2dd87438d3bf8900cb59bb976fa6f00255e85fd9", "dweb:/ipfs/Qma5mTAbxzTPxLVTi3fmMPV9QhnfHquyHgd979PAA9z2gc"];
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
        readonly id: 24491;
        readonly exportedSymbols: {
            readonly ERC4626Hyperdrive: readonly [8086];
            readonly IERC4626: readonly [10641];
            readonly IHyperdrive: readonly [11076];
            readonly MockERC4626Hyperdrive: readonly [24490];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:1604:135";
        readonly nodes: readonly [{
            readonly id: 24405;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:23:135";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 24407;
            readonly nodeType: "ImportDirective";
            readonly src: "64:90:135";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/instances/erc4626/ERC4626Hyperdrive.sol";
            readonly file: "contracts/src/instances/erc4626/ERC4626Hyperdrive.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 24491;
            readonly sourceUnit: 8087;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 24406;
                    readonly name: "ERC4626Hyperdrive";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 8086;
                    readonly src: "73:17:135";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 24409;
            readonly nodeType: "ImportDirective";
            readonly src: "155:65:135";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IERC4626.sol";
            readonly file: "contracts/src/interfaces/IERC4626.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 24491;
            readonly sourceUnit: 10642;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 24408;
                    readonly name: "IERC4626";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 10641;
                    readonly src: "164:8:135";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 24411;
            readonly nodeType: "ImportDirective";
            readonly src: "221:71:135";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IHyperdrive.sol";
            readonly file: "contracts/src/interfaces/IHyperdrive.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 24491;
            readonly sourceUnit: 11077;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 24410;
                    readonly name: "IHyperdrive";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 11076;
                    readonly src: "230:11:135";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 24490;
            readonly nodeType: "ContractDefinition";
            readonly src: "447:1195:135";
            readonly nodes: readonly [{
                readonly id: 24442;
                readonly nodeType: "FunctionDefinition";
                readonly src: "505:411:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 24441;
                    readonly nodeType: "Block";
                    readonly src: "914:2:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [];
                };
                readonly implemented: true;
                readonly kind: "constructor";
                readonly modifiers: readonly [{
                    readonly arguments: readonly [{
                        readonly id: 24432;
                        readonly name: "_config";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 24416;
                        readonly src: "763:7:135";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10867_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig memory";
                        };
                    }, {
                        readonly id: 24433;
                        readonly name: "_target0";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 24418;
                        readonly src: "784:8:135";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    }, {
                        readonly id: 24434;
                        readonly name: "_target1";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 24420;
                        readonly src: "806:8:135";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    }, {
                        readonly id: 24435;
                        readonly name: "_target2";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 24422;
                        readonly src: "828:8:135";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    }, {
                        readonly id: 24436;
                        readonly name: "_target3";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 24424;
                        readonly src: "850:8:135";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    }, {
                        readonly id: 24437;
                        readonly name: "_target4";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 24426;
                        readonly src: "872:8:135";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    }, {
                        readonly id: 24438;
                        readonly name: "_pool";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 24429;
                        readonly src: "894:5:135";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_IERC4626_$10641";
                            readonly typeString: "contract IERC4626";
                        };
                    }];
                    readonly id: 24439;
                    readonly kind: "baseConstructorSpecifier";
                    readonly modifierName: {
                        readonly id: 24431;
                        readonly name: "ERC4626Hyperdrive";
                        readonly nameLocations: readonly ["732:17:135"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 8086;
                        readonly src: "732:17:135";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "732:177:135";
                }];
                readonly name: "";
                readonly nameLocation: "-1:-1:-1";
                readonly parameters: {
                    readonly id: 24430;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24416;
                        readonly mutability: "mutable";
                        readonly name: "_config";
                        readonly nameLocation: "556:7:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24442;
                        readonly src: "526:37:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10867_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig";
                        };
                        readonly typeName: {
                            readonly id: 24415;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 24414;
                                readonly name: "IHyperdrive.PoolConfig";
                                readonly nameLocations: readonly ["526:11:135", "538:10:135"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10867;
                                readonly src: "526:22:135";
                            };
                            readonly referencedDeclaration: 10867;
                            readonly src: "526:22:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolConfig_$10867_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 24418;
                        readonly mutability: "mutable";
                        readonly name: "_target0";
                        readonly nameLocation: "581:8:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24442;
                        readonly src: "573:16:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 24417;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "573:7:135";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 24420;
                        readonly mutability: "mutable";
                        readonly name: "_target1";
                        readonly nameLocation: "607:8:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24442;
                        readonly src: "599:16:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 24419;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "599:7:135";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 24422;
                        readonly mutability: "mutable";
                        readonly name: "_target2";
                        readonly nameLocation: "633:8:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24442;
                        readonly src: "625:16:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 24421;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "625:7:135";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 24424;
                        readonly mutability: "mutable";
                        readonly name: "_target3";
                        readonly nameLocation: "659:8:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24442;
                        readonly src: "651:16:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 24423;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "651:7:135";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 24426;
                        readonly mutability: "mutable";
                        readonly name: "_target4";
                        readonly nameLocation: "685:8:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24442;
                        readonly src: "677:16:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 24425;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "677:7:135";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 24429;
                        readonly mutability: "mutable";
                        readonly name: "_pool";
                        readonly nameLocation: "712:5:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24442;
                        readonly src: "703:14:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_IERC4626_$10641";
                            readonly typeString: "contract IERC4626";
                        };
                        readonly typeName: {
                            readonly id: 24428;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 24427;
                                readonly name: "IERC4626";
                                readonly nameLocations: readonly ["703:8:135"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10641;
                                readonly src: "703:8:135";
                            };
                            readonly referencedDeclaration: 10641;
                            readonly src: "703:8:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IERC4626_$10641";
                                readonly typeString: "contract IERC4626";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "516:207:135";
                };
                readonly returnParameters: {
                    readonly id: 24440;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "914:0:135";
                };
                readonly scope: 24490;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "public";
            }, {
                readonly id: 24460;
                readonly nodeType: "FunctionDefinition";
                readonly src: "922:209:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 24459;
                    readonly nodeType: "Block";
                    readonly src: "1080:51:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 24455;
                                readonly name: "_amount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24444;
                                readonly src: "1106:7:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 24456;
                                readonly name: "_options";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24447;
                                readonly src: "1115:8:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Options_$10923_calldata_ptr";
                                    readonly typeString: "struct IHyperdrive.Options calldata";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_struct$_Options_$10923_calldata_ptr";
                                    readonly typeString: "struct IHyperdrive.Options calldata";
                                }];
                                readonly id: 24454;
                                readonly name: "_deposit";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13326;
                                readonly src: "1097:8:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_uint256_$_t_struct$_Options_$10923_calldata_ptr_$returns$_t_uint256_$_t_uint256_$";
                                    readonly typeString: "function (uint256,struct IHyperdrive.Options calldata) returns (uint256,uint256)";
                                };
                            };
                            readonly id: 24457;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1097:27:135";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$";
                                readonly typeString: "tuple(uint256,uint256)";
                            };
                        };
                        readonly functionReturnParameters: 24453;
                        readonly id: 24458;
                        readonly nodeType: "Return";
                        readonly src: "1090:34:135";
                    }];
                };
                readonly functionSelector: "829555d4";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "deposit";
                readonly nameLocation: "931:7:135";
                readonly parameters: {
                    readonly id: 24448;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24444;
                        readonly mutability: "mutable";
                        readonly name: "_amount";
                        readonly nameLocation: "956:7:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24460;
                        readonly src: "948:15:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24443;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "948:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 24447;
                        readonly mutability: "mutable";
                        readonly name: "_options";
                        readonly nameLocation: "1002:8:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24460;
                        readonly src: "973:37:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_Options_$10923_calldata_ptr";
                            readonly typeString: "struct IHyperdrive.Options";
                        };
                        readonly typeName: {
                            readonly id: 24446;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 24445;
                                readonly name: "IHyperdrive.Options";
                                readonly nameLocations: readonly ["973:11:135", "985:7:135"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10923;
                                readonly src: "973:19:135";
                            };
                            readonly referencedDeclaration: 10923;
                            readonly src: "973:19:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Options_$10923_storage_ptr";
                                readonly typeString: "struct IHyperdrive.Options";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "938:78:135";
                };
                readonly returnParameters: {
                    readonly id: 24453;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24450;
                        readonly mutability: "mutable";
                        readonly name: "sharesMinted";
                        readonly nameLocation: "1041:12:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24460;
                        readonly src: "1033:20:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24449;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1033:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 24452;
                        readonly mutability: "mutable";
                        readonly name: "vaultSharePrice";
                        readonly nameLocation: "1063:15:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24460;
                        readonly src: "1055:23:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24451;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1055:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1032:47:135";
                };
                readonly scope: 24490;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "public";
            }, {
                readonly id: 24479;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1137:231:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 24478;
                    readonly nodeType: "Block";
                    readonly src: "1303:65:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 24473;
                                readonly name: "_shares";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24462;
                                readonly src: "1330:7:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 24474;
                                readonly name: "_sharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24464;
                                readonly src: "1339:11:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 24475;
                                readonly name: "_options";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24467;
                                readonly src: "1352:8:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Options_$10923_calldata_ptr";
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
                                    readonly typeIdentifier: "t_struct$_Options_$10923_calldata_ptr";
                                    readonly typeString: "struct IHyperdrive.Options calldata";
                                }];
                                readonly id: 24472;
                                readonly name: "_withdraw";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13389;
                                readonly src: "1320:9:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_struct$_Options_$10923_calldata_ptr_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,struct IHyperdrive.Options calldata) returns (uint256)";
                                };
                            };
                            readonly id: 24476;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1320:41:135";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 24471;
                        readonly id: 24477;
                        readonly nodeType: "Return";
                        readonly src: "1313:48:135";
                    }];
                };
                readonly functionSelector: "a3144531";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "withdraw";
                readonly nameLocation: "1146:8:135";
                readonly parameters: {
                    readonly id: 24468;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24462;
                        readonly mutability: "mutable";
                        readonly name: "_shares";
                        readonly nameLocation: "1172:7:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24479;
                        readonly src: "1164:15:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24461;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1164:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 24464;
                        readonly mutability: "mutable";
                        readonly name: "_sharePrice";
                        readonly nameLocation: "1197:11:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24479;
                        readonly src: "1189:19:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24463;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1189:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 24467;
                        readonly mutability: "mutable";
                        readonly name: "_options";
                        readonly nameLocation: "1247:8:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24479;
                        readonly src: "1218:37:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_Options_$10923_calldata_ptr";
                            readonly typeString: "struct IHyperdrive.Options";
                        };
                        readonly typeName: {
                            readonly id: 24466;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 24465;
                                readonly name: "IHyperdrive.Options";
                                readonly nameLocations: readonly ["1218:11:135", "1230:7:135"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10923;
                                readonly src: "1218:19:135";
                            };
                            readonly referencedDeclaration: 10923;
                            readonly src: "1218:19:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Options_$10923_storage_ptr";
                                readonly typeString: "struct IHyperdrive.Options";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1154:107:135";
                };
                readonly returnParameters: {
                    readonly id: 24471;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24470;
                        readonly mutability: "mutable";
                        readonly name: "amountWithdrawn";
                        readonly nameLocation: "1286:15:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24479;
                        readonly src: "1278:23:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24469;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1278:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1277:25:135";
                };
                readonly scope: 24490;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "public";
            }, {
                readonly id: 24489;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1491:149:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 24488;
                    readonly nodeType: "Block";
                    readonly src: "1595:45:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [];
                            readonly expression: {
                                readonly argumentTypes: readonly [];
                                readonly id: 24485;
                                readonly name: "_pricePerVaultShare";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13400;
                                readonly src: "1612:19:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$__$returns$_t_uint256_$";
                                    readonly typeString: "function () view returns (uint256)";
                                };
                            };
                            readonly id: 24486;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1612:21:135";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 24484;
                        readonly id: 24487;
                        readonly nodeType: "Return";
                        readonly src: "1605:28:135";
                    }];
                };
                readonly documentation: {
                    readonly id: 24480;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1374:112:135";
                    readonly text: "@notice Loads the share price from the yield source\n @return vaultSharePrice The current share price.";
                };
                readonly functionSelector: "daaa35fe";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "pricePerVaultShare";
                readonly nameLocation: "1500:18:135";
                readonly parameters: {
                    readonly id: 24481;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1518:2:135";
                };
                readonly returnParameters: {
                    readonly id: 24484;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24483;
                        readonly mutability: "mutable";
                        readonly name: "vaultSharePrice";
                        readonly nameLocation: "1574:15:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24489;
                        readonly src: "1566:23:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24482;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1566:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1565:25:135";
                };
                readonly scope: 24490;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "public";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 24412;
                    readonly name: "ERC4626Hyperdrive";
                    readonly nameLocations: readonly ["481:17:135"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 8086;
                    readonly src: "481:17:135";
                };
                readonly id: 24413;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "481:17:135";
            }];
            readonly canonicalName: "MockERC4626Hyperdrive";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [24490, 8086, 7990, 4609, 14845, 18151, 16681, 15747, 17165, 13205, 14381, 18367, 72043, 11599, 12165, 11265, 12131];
            readonly name: "MockERC4626Hyperdrive";
            readonly nameLocation: "456:21:135";
            readonly scope: 24491;
            readonly usedErrors: readonly [10956, 11021, 11027, 71418, 71699, 71704, 71707, 71988];
            readonly usedEvents: readonly [11419, 11434, 11453, 11468, 11485, 11504, 11523, 11544, 11557, 11564, 11569, 11574, 11579, 11586, 11591, 11598, 12146, 12155, 12164];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 135;
};
//# sourceMappingURL=MockERC4626Hyperdrive.d.ts.map