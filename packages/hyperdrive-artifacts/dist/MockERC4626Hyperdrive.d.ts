export declare const MockERC4626Hyperdrive: {
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
        readonly name: "InvalidBaseToken";
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
        readonly stateMutability: "nonpayable";
        readonly type: "fallback";
    }, {
        readonly inputs: readonly [];
        readonly name: "DOMAIN_SEPARATOR";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
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
        readonly object: "0x6103206040523480156200001257600080fd5b5060405162002337380380620023378339810160408190526200003591620006c8565b6001600081905587516001600160a01b0390811660809081526060808b015161018052908a01516101a05260a0808b01516101c05260e0808c015190915260c0808c01519052610100808c0151909152610160808c0180515190925281516020908101516101209081528351604090810151610140908152945190950151909252808d0151851661020052838d015161022052908c0151600880549186166001600160a01b0319909216919091179055908b015183166101e052828a166102405282891661026052828816610280528287166102a0529185166102c05280518082018252928352603160f81b92820192909252905188918891889188918891889188918291899189918991899189918991620001b8917f2aef22f9d7df5f9d21c56d14029233f3fdaa91917727e1eb68e504d27072d6cd917fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6914691309101938452602084019290925260408301526001600160a01b0316606082015260800190565b60408051601f1981840301815282825280516020918201206102e0526001600160a01b039099166103008190526338d52e0f60e01b8352905190986338d52e0f98506004808401985090965090945090849003019150829050865afa15801562000226573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200024c91906200081e565b6001600160a01b031687600001516001600160a01b0316146200028257604051630722152560e11b815260040160405180910390fd5b610300518751620002a1916001600160a01b03909116906001620002b5565b505050505050505050505050505062000893565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b179091526200030f90859083906200038116565b6200037b57604080516001600160a01b038516602482015260006044808301919091528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b179091526200036f9186916200043216565b6200037b848262000432565b50505050565b6000806000846001600160a01b031684604051620003a091906200083e565b6000604051808303816000865af19150503d8060008114620003df576040519150601f19603f3d011682016040523d82523d6000602084013e620003e4565b606091505b509150915081801562000412575080511580620004125750808060200190518101906200041291906200086f565b80156200042957506000856001600160a01b03163b115b95945050505050565b6000620004496001600160a01b03841683620004a5565b90508051600014158015620004715750808060200190518101906200046f91906200086f565b155b15620004a057604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b6060620004b583836000620004bc565b9392505050565b606081471015620004e35760405163cd78605960e01b815230600482015260240162000497565b600080856001600160a01b031684866040516200050191906200083e565b60006040518083038185875af1925050503d806000811462000540576040519150601f19603f3d011682016040523d82523d6000602084013e62000545565b606091505b5090925090506200055886838362000562565b9695505050505050565b6060826200057b576200057582620005c6565b620004b5565b81511580156200059357506001600160a01b0384163b155b15620005be57604051639996b31560e01b81526001600160a01b038516600482015260240162000497565b5080620004b5565b805115620005d75780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b50565b60405161018081016001600160401b03811182821017156200062557634e487b7160e01b600052604160045260246000fd5b60405290565b6001600160a01b0381168114620005f057600080fd5b80516200064e816200062b565b919050565b6000608082840312156200066657600080fd5b604051608081016001600160401b03811182821017156200069757634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60008060008060008060008789036102a0811215620006e657600080fd5b6101e080821215620006f757600080fd5b62000701620005f3565b91506200070e8a62000641565b82526200071e60208b0162000641565b602083015260408a0151604083015260608a0151606083015260808a0151608083015260a08a015160a083015260c08a015160c083015260e08a015160e0830152610100808b015181840152506101206200077b818c0162000641565b908301526101406200078f8b820162000641565b90830152610160620007a48c8c830162000653565b8184015250819850620007b9818b0162000641565b97505050620007cc610200890162000641565b9450620007dd610220890162000641565b9350620007ee610240890162000641565b9250620007ff610260890162000641565b915062000810610280890162000641565b905092959891949750929550565b6000602082840312156200083157600080fd5b8151620004b5816200062b565b6000825160005b8181101562000861576020818601810151858301520162000845565b506000920191825250919050565b6000602082840312156200088257600080fd5b81518015158114620004b557600080fd5b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051610280516102a0516102c0516102e0516103005161192e62000a0960003960008181610b6e01528181610be501528181610c7101528181610cd001528181610d7601528181610e400152610e9001526000818161045f01526108aa0152600081816106ab0152610a820152600081816105db015281816108600152610a3d015260008181610594015281816107980152610adc0152600081816106570152818161070201526107fd0152600081816101ef015281816103b1015281816106d20152818161073401528181610766015281816107cc015281816108300152818161093b015281816109f40152610aab01526000505060005050600050506000505060005050600050506000505060005050600050506000505060005050600050506000505060008181610b410152610ba2015261192e6000f3fe6080604052600436106101d85760003560e01c80639032c72611610102578063d899e11211610095578063e44808bc11610064578063e44808bc14610625578063eac3e79914610645578063ed64bab214610679578063f3f7070714610699576101d8565b8063d899e112146105c9578063daaa35fe146105fd578063dbbe807014610612578063ded06231146103eb576101d8565b8063a6e8a859116100d1578063a6e8a85914610582578063ab033ea9146102e8578063cba2e58d146105b6578063cbc1343414610325576101d8565b80639032c726146105225780639cd241af14610542578063a22cb465146104cf578063a314453114610562576101d8565b806330adf81f1161017a5780634ed2d6ac116101495780634ed2d6ac146104b45780637180c8ca146104cf57806377d05ff4146104ef578063829555d414610502576101d8565b806330adf81f146104195780633644e5151461044d5780633e691db9146104815780634c2ac1d9146104a1576101d8565b806317fad7fc116101b657806317fad7fc1461035f5780631c0f12b61461037f57806321b57d531461039f57806329b23fc1146103eb576101d8565b806301681a62146102e857806302329a291461030a578063074a6de914610325575b3480156101e457600080fd5b5060003660606000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168585604051610227929190611281565b600060405180830381855af49150503d8060008114610262576040519150601f19603f3d011682016040523d82523d6000602084013e610267565b606091505b5091509150811561028b57604051638bb0a34b60e01b815260040160405180910390fd5b600061029682611291565b90506001600160e01b03198116636e64089360e11b146102b857815160208301fd5b8151600319810160048401908152926102d991810160200190602401611302565b80519650602001945050505050f35b3480156102f457600080fd5b506103086103033660046113c4565b6106cd565b005b34801561031657600080fd5b506103086103033660046113ef565b34801561033157600080fd5b5061034561034036600461141e565b6106fa565b604080519283526020830191909152015b60405180910390f35b34801561036b57600080fd5b5061030861037a3660046114b3565b61072f565b34801561038b57600080fd5b5061030861039a366004611548565b610761565b3480156103ab57600080fd5b506103d37f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610356565b3480156103f757600080fd5b5061040b610406366004611590565b610791565b604051908152602001610356565b34801561042557600080fd5b5061040b7f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367381565b34801561045957600080fd5b5061040b7f000000000000000000000000000000000000000000000000000000000000000081565b34801561048d57600080fd5b5061040b61049c3660046115ea565b6107c5565b61040b6104af366004611627565b6107f6565b3480156104c057600080fd5b5061030861039a36600461168b565b3480156104db57600080fd5b506103086104ea3660046116d5565b61082b565b61040b6104fd36600461141e565b610859565b34801561050e57600080fd5b5061034561051d36600461170e565b61088c565b34801561052e57600080fd5b5061030861053d366004611755565b6108a5565b34801561054e57600080fd5b5061030861055d3660046117d5565b6109ef565b34801561056e57600080fd5b5061040b61057d36600461141e565b610a1e565b34801561058e57600080fd5b506103d37f000000000000000000000000000000000000000000000000000000000000000081565b6103456105c4366004611590565b610a35565b3480156105d557600080fd5b506103d37f000000000000000000000000000000000000000000000000000000000000000081565b34801561060957600080fd5b5061040b610a6b565b610345610620366004611590565b610a7a565b34801561063157600080fd5b5061030861064036600461180d565b610aa6565b34801561065157600080fd5b506103d37f000000000000000000000000000000000000000000000000000000000000000081565b34801561068557600080fd5b5061030861069436600461186c565b610ad7565b3480156106a557600080fd5b506103d37f000000000000000000000000000000000000000000000000000000000000000081565b6106f67f0000000000000000000000000000000000000000000000000000000000000000610afc565b5050565b6000806107267f0000000000000000000000000000000000000000000000000000000000000000610afc565b50935093915050565b6107587f0000000000000000000000000000000000000000000000000000000000000000610afc565b50505050505050565b61078a7f0000000000000000000000000000000000000000000000000000000000000000610afc565b5050505050565b60006107bc7f0000000000000000000000000000000000000000000000000000000000000000610afc565b50949350505050565b60006107f07f0000000000000000000000000000000000000000000000000000000000000000610afc565b50919050565b60006108217f0000000000000000000000000000000000000000000000000000000000000000610afc565b5095945050505050565b6108547f0000000000000000000000000000000000000000000000000000000000000000610afc565b505050565b60006108847f0000000000000000000000000000000000000000000000000000000000000000610afc565b509392505050565b6000806108998484610b1c565b915091505b9250929050565b6040517f000000000000000000000000000000000000000000000000000000000000000060248201527f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367360448201526001600160a01b038881166064830152878116608483015286151560a483015260c4820186905260ff851660e48301526101048201849052610124820183905260009182917f000000000000000000000000000000000000000000000000000000000000000016906101440160408051601f198184030181529181526020820180516001600160e01b03166314e5f07b60e01b179052516109959190611885565b600060405180830381855af49150503d80600081146109d0576040519150601f19603f3d011682016040523d82523d6000602084013e6109d5565b606091505b5091509150816109e757805160208201fd5b805160208201f35b610a187f0000000000000000000000000000000000000000000000000000000000000000610afc565b50505050565b6000610a2b848484610caa565b90505b9392505050565b600080610a617f0000000000000000000000000000000000000000000000000000000000000000610afc565b5094509492505050565b6000610a75610e70565b905090565b600080610a617f0000000000000000000000000000000000000000000000000000000000000000610afc565b610acf7f0000000000000000000000000000000000000000000000000000000000000000610afc565b505050505050565b6106f67f00000000000000000000000000000000000000000000000000000000000000005b6060600080836001600160a01b0316600036604051610995929190611281565b600080610b2f60408401602085016113ef565b15610c6157610b696001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333087610f03565b610bc97f0000000000000000000000000000000000000000000000000000000000000000610b988660016118a1565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169190610f6a565b604051636e553f6560e01b8152600481018590523060248201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636e553f65906044016020604051808303816000875af1158015610c36573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c5a91906118c2565b9150610c99565b839150610c996001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333085610f03565b610ca1610e70565b90509250929050565b600080610cb78585610ffa565b6040516363737ac960e11b8152600481018290529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063c6e6f59290602401602060405180830381865afa158015610d1f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d4391906118c2565b945084600003610d57576000915050610a2e565b610d6760408401602085016113ef565b15610e26576001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001663ba08765286610da960208701876113c4565b6040516001600160e01b031960e085901b16815260048101929092526001600160a01b031660248201523060448201526064016020604051808303816000875af1158015610dfb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e1f91906118c2565b9150610884565b610e67610e3660208501856113c4565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169087611018565b50929392505050565b6040516303d1689d60e11b8152670de0b6b3a764000060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906307a2d13a90602401602060405180830381865afa158015610edf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a7591906118c2565b6040516001600160a01b038481166024830152838116604483015260648201839052610a189186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b038381831617835250505050611049565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b179052610fbb84826110b1565b610a18576040516001600160a01b03848116602483015260006044830152610ff091869182169063095ea7b390606401610f38565b610a188482611049565b600061100f8383670de0b6b3a7640000611159565b90505b92915050565b6040516001600160a01b0383811660248301526044820183905261085491859182169063a9059cbb90606401610f38565b600061105e6001600160a01b03841683611177565b9050805160001415801561108357508080602001905181019061108191906118db565b155b1561085457604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b6000806000846001600160a01b0316846040516110ce9190611885565b6000604051808303816000865af19150503d806000811461110b576040519150601f19603f3d011682016040523d82523d6000602084013e611110565b606091505b509150915081801561113a57508051158061113a57508080602001905181019061113a91906118db565b801561115057506000856001600160a01b03163b115b95945050505050565b600082600019048411830215820261117057600080fd5b5091020490565b606061100f8383600084600080856001600160a01b0316848660405161119d9190611885565b60006040518083038185875af1925050503d80600081146111da576040519150601f19603f3d011682016040523d82523d6000602084013e6111df565b606091505b50915091506111ef8683836111f9565b9695505050505050565b60608261120e5761120982611255565b610a2e565b815115801561122557506001600160a01b0384163b155b1561124e57604051639996b31560e01b81526001600160a01b03851660048201526024016110a8565b5080610a2e565b8051156112655780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b50565b8183823760009101908152919050565b805160208201516001600160e01b031980821692919060048310156112c05780818460040360031b1b83161693505b505050919050565b634e487b7160e01b600052604160045260246000fd5b60005b838110156112f95781810151838201526020016112e1565b50506000910152565b60006020828403121561131457600080fd5b815167ffffffffffffffff8082111561132c57600080fd5b818401915084601f83011261134057600080fd5b815181811115611352576113526112c8565b604051601f8201601f19908116603f0116810190838211818310171561137a5761137a6112c8565b8160405282815287602084870101111561139357600080fd5b6113a48360208301602088016112de565b979650505050505050565b6001600160a01b038116811461127e57600080fd5b6000602082840312156113d657600080fd5b8135610a2e816113af565b801515811461127e57600080fd5b60006020828403121561140157600080fd5b8135610a2e816113e1565b6000606082840312156107f057600080fd5b60008060006060848603121561143357600080fd5b8335925060208401359150604084013567ffffffffffffffff81111561145857600080fd5b6114648682870161140c565b9150509250925092565b60008083601f84011261148057600080fd5b50813567ffffffffffffffff81111561149857600080fd5b6020830191508360208260051b850101111561089e57600080fd5b600080600080600080608087890312156114cc57600080fd5b86356114d7816113af565b955060208701356114e7816113af565b9450604087013567ffffffffffffffff8082111561150457600080fd5b6115108a838b0161146e565b9096509450606089013591508082111561152957600080fd5b5061153689828a0161146e565b979a9699509497509295939492505050565b6000806000806080858703121561155e57600080fd5b843593506020850135611570816113af565b92506040850135611580816113af565b9396929550929360600135925050565b600080600080608085870312156115a657600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff8111156115d257600080fd5b6115de8782880161140c565b91505092959194509250565b6000602082840312156115fc57600080fd5b813567ffffffffffffffff81111561161357600080fd5b61161f8482850161140c565b949350505050565b600080600080600060a0868803121561163f57600080fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff81111561167257600080fd5b61167e8882890161140c565b9150509295509295909350565b600080600080608085870312156116a157600080fd5b8435935060208501356116b3816113af565b92506040850135915060608501356116ca816113af565b939692955090935050565b600080604083850312156116e857600080fd5b82356116f3816113af565b91506020830135611703816113e1565b809150509250929050565b6000806040838503121561172157600080fd5b82359150602083013567ffffffffffffffff81111561173f57600080fd5b61174b8582860161140c565b9150509250929050565b600080600080600080600060e0888a03121561177057600080fd5b873561177b816113af565b9650602088013561178b816113af565b9550604088013561179b816113e1565b945060608801359350608088013560ff811681146117b857600080fd5b9699959850939692959460a0840135945060c09093013592915050565b6000806000606084860312156117ea57600080fd5b8335925060208401356117fc816113af565b929592945050506040919091013590565b600080600080600060a0868803121561182557600080fd5b853594506020860135611837816113af565b93506040860135611847816113af565b925060608601359150608086013561185e816113af565b809150509295509295909350565b60006020828403121561187e57600080fd5b5035919050565b600082516118978184602087016112de565b9190910192915050565b8082018082111561101257634e487b7160e01b600052601160045260246000fd5b6000602082840312156118d457600080fd5b5051919050565b6000602082840312156118ed57600080fd5b8151610a2e816113e156fea2646970667358221220c2028124ffbe6d67b279c224514e35fba6f0c02d8549e202e4cff6b5f3bffd4b64736f6c63430008140033";
        readonly sourceMap: "447:1195:84:-:0;;;505:411;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1713:1:120;1917:7;:21;;;5109:17:70;;-1:-1:-1;;;;;5096:30:70;;;;;;;5216;;;;;5190:56;;5669:28;;;;5645:52;;5985:32;;;;;5957:60;;6200:26;;;;;6178:48;;;6256:24;;;;;6236:44;;-1:-1:-1;6305:19:70;;;;6290:34;;;6389:12;;;;;;:18;6377:30;;;6428:12;;-1:-1:-1;6428:17:70;;;;-1:-1:-1;6417:28:70;;;6474:12;;-1:-1:-1;6474:25:70;;;;6455:44;;;;6532:12;;:29;;;;6509:52;;;-1:-1:-1;;;6638:21:70;6621:38;;;;-1:-1:-1;;;6687:22:70;6669:40;;6790:18;;;;6776:11;:32;;;;;-1:-1:-1;;;;;;6776:32:70;;;;;;;;;6834:20;;;;6818:36;;;;6116:18:15;;::::1;;::::0;6144;;::::1;;::::0;6172;;::::1;;::::0;6200;;::::1;;::::0;6228;;::::1;;::::0;6810:10;;;;::::1;::::0;;;;;-1:-1:-1;;;6810:10:15;;::::1;::::0;;;;6633:264;;763:7:84;;784:8;;806;;828;;850;;872;;894:5;;;;763:7;;784:8;;806;;828;;850;;872;;6633:264:15::1;::::0;6661:121:::1;::::0;6800:21;;6839:13:::1;::::0;6878:4:::1;::::0;6633:264:::1;3437:25:182::0;;;3493:2;3478:18;;3471:34;;;;3536:2;3521:18;;3514:34;-1:-1:-1;;;;;3584:32:182;3579:2;3564:18;;3557:60;3424:3;3409:19;;3206:417;6633:264:15::1;;::::0;;-1:-1:-1;;6633:264:15;;::::1;::::0;;;;;;6610:297;;6633:264:::1;6610:297:::0;;::::1;::::0;6591:316:::1;::::0;-1:-1:-1;;;;;1315:16:23;;;;;;;-1:-1:-1;;;4995:24:24;;;;1315:16:23;;4995:22:24::2;::::0;-1:-1:-1;4995:24:24::2;::::0;;::::2;::::0;-1:-1:-1;6633:264:15;;-1:-1:-1;4995:24:24;;-1:-1:-1;4995:24:24;;;;;;-1:-1:-1;4995:24:24;;-1:-1:-1;1315:16:23;4995:24:24::2;;;;;;;;;::::0;::::2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1::0;;;;;4965:54:24::2;4973:7;:17;;;-1:-1:-1::0;;;;;4965:54:24::2;;4961:122;;5042:30;;-1:-1:-1::0;;;5042:30:24::2;;;;;;;;;;;4961:122;5296:6;::::0;5255:17;;5241:66:::2;::::0;-1:-1:-1;;;;;5241:46:24;;::::2;::::0;5305:1:::2;5241:46;:66::i;:::-;4525:789:::0;;;;;;;505:411:84;;;;;;;447:1195;;3296:380:117;3411:47;;;-1:-1:-1;;;;;4084:32:182;;3411:47:117;;;4066:51:182;4133:18;;;;4126:34;;;3411:47:117;;;;;;;;;;4039:18:182;;;;3411:47:117;;;;;;;;-1:-1:-1;;;;;3411:47:117;;;-1:-1:-1;;;3411:47:117;;;;3474:44;;3426:13;;3411:47;;3474:23;:44;:::i;:::-;3469:201;;3561:43;;;-1:-1:-1;;;;;4084:32:182;;3561:43:117;;;4066:51:182;3601:1:117;4133:18:182;;;;4126:34;;;;3561:43:117;;;;;;;;;;4039:18:182;;;;3561:43:117;;;;;;;;-1:-1:-1;;;;;3561:43:117;;;-1:-1:-1;;;3561:43:117;;;;3534:71;;3554:5;;3534:19;:71;:::i;:::-;3619:40;3639:5;3646:12;3619:19;:40::i;:::-;3373:303;3296:380;;;:::o;5189:578::-;5272:4;5574:12;5588:23;5623:5;-1:-1:-1;;;;;5615:19:117;5635:4;5615:25;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5573:67;;;;5657:7;:69;;;;-1:-1:-1;5669:17:117;;:22;;:56;;;5706:10;5695:30;;;;;;;;;;;;:::i;:::-;5657:103;;;;;5759:1;5738:5;-1:-1:-1;;;;;5730:26:117;;:30;5657:103;5650:110;5189:578;-1:-1:-1;;;;;5189:578:117:o;4059:629::-;4478:23;4504:33;-1:-1:-1;;;;;4504:27:117;;4532:4;4504:27;:33::i;:::-;4478:59;;4551:10;:17;4572:1;4551:22;;:57;;;;;4589:10;4578:30;;;;;;;;;;;;:::i;:::-;4577:31;4551:57;4547:135;;;4631:40;;-1:-1:-1;;;4631:40:117;;-1:-1:-1;;;;;5321:32:182;;4631:40:117;;;5303:51:182;5276:18;;4631:40:117;;;;;;;;4547:135;4129:559;4059:629;;:::o;2705:151:118:-;2780:12;2811:38;2833:6;2841:4;2847:1;2811:21;:38::i;:::-;2804:45;2705:151;-1:-1:-1;;;2705:151:118:o;3180:392::-;3279:12;3331:5;3307:21;:29;3303:108;;;3359:41;;-1:-1:-1;;;3359:41:118;;3394:4;3359:41;;;5303:51:182;5276:18;;3359:41:118;5157:203:182;3303:108:118;3421:12;3435:23;3462:6;-1:-1:-1;;;;;3462:11:118;3481:5;3488:4;3462:31;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;3420:73:118;;-1:-1:-1;3420:73:118;-1:-1:-1;3510:55:118;3537:6;3420:73;;3510:26;:55::i;:::-;3503:62;3180:392;-1:-1:-1;;;;;;3180:392:118:o;4625:582::-;4769:12;4798:7;4793:408;;4821:19;4829:10;4821:7;:19::i;:::-;4793:408;;;5045:17;;:22;:49;;;;-1:-1:-1;;;;;;5071:18:118;;;:23;5045:49;5041:119;;;5121:24;;-1:-1:-1;;;5121:24:118;;-1:-1:-1;;;;;5321:32:182;;5121:24:118;;;5303:51:182;5276:18;;5121:24:118;5157:203:182;5041:119:118;-1:-1:-1;5180:10:118;5173:17;;5743:516;5874:17;;:21;5870:383;;6102:10;6096:17;6158:15;6145:10;6141:2;6137:19;6130:44;5870:383;6225:17;;-1:-1:-1;;;6225:17:118;;;;;;;;;;;5870:383;5743:516;:::o;14:347:182:-;81:2;75:9;123:6;111:19;;-1:-1:-1;;;;;145:34:182;;181:22;;;142:62;139:185;;;246:10;241:3;237:20;234:1;227:31;281:4;278:1;271:15;309:4;306:1;299:15;139:185;340:2;333:22;14:347;:::o;366:139::-;-1:-1:-1;;;;;449:31:182;;439:42;;429:70;;495:1;492;485:12;510:154;597:13;;619:39;597:13;619:39;:::i;:::-;510:154;;;:::o;669:681::-;731:5;779:4;767:9;762:3;758:19;754:30;751:50;;;797:1;794;787:12;751:50;830:2;824:9;872:4;860:17;;-1:-1:-1;;;;;892:34:182;;928:22;;;889:62;886:185;;;993:10;988:3;984:20;981:1;974:31;1028:4;1025:1;1018:15;1056:4;1053:1;1046:15;886:185;1091:10;1087:2;1080:22;;1120:6;1111:15;;1156:9;1150:16;1142:6;1135:32;1221:2;1210:9;1206:18;1200:25;1195:2;1187:6;1183:15;1176:50;1280:2;1269:9;1265:18;1259:25;1254:2;1246:6;1242:15;1235:50;1339:2;1328:9;1324:18;1318:25;1313:2;1305:6;1301:15;1294:50;;669:681;;;;:::o;1355:1846::-;1524:6;1532;1540;1548;1556;1564;1572;1616:9;1607:7;1603:23;1646:3;1642:2;1638:12;1635:32;;;1663:1;1660;1653:12;1635:32;1686:6;1712:2;1708;1704:11;1701:31;;;1728:1;1725;1718:12;1701:31;1754:17;;:::i;:::-;1741:30;;1794:48;1832:9;1794:48;:::i;:::-;1787:5;1780:63;1875:57;1928:2;1917:9;1913:18;1875:57;:::i;:::-;1870:2;1863:5;1859:14;1852:81;1986:2;1975:9;1971:18;1965:25;1960:2;1953:5;1949:14;1942:49;2044:2;2033:9;2029:18;2023:25;2018:2;2011:5;2007:14;2000:49;2103:3;2092:9;2088:19;2082:26;2076:3;2069:5;2065:15;2058:51;2163:3;2152:9;2148:19;2142:26;2136:3;2129:5;2125:15;2118:51;2223:3;2212:9;2208:19;2202:26;2196:3;2189:5;2185:15;2178:51;2283:3;2272:9;2268:19;2262:26;2256:3;2249:5;2245:15;2238:51;2308:3;2364:2;2353:9;2349:18;2343:25;2338:2;2331:5;2327:14;2320:49;;2388:3;2423:57;2476:2;2465:9;2461:18;2423:57;:::i;:::-;2407:14;;;2400:81;2500:3;2535:57;2573:18;;;2535:57;:::i;:::-;2519:14;;;2512:81;2612:3;2647:62;2701:7;2681:18;;;2647:62;:::i;:::-;2642:2;2635:5;2631:14;2624:86;;2729:5;2719:15;;2753:57;2806:2;2795:9;2791:18;2753:57;:::i;:::-;2743:67;;;;2829:58;2882:3;2871:9;2867:19;2829:58;:::i;:::-;2819:68;;2906:58;2959:3;2948:9;2944:19;2906:58;:::i;:::-;2896:68;;2983:58;3036:3;3025:9;3021:19;2983:58;:::i;:::-;2973:68;;3060:58;3113:3;3102:9;3098:19;3060:58;:::i;:::-;3050:68;;3137:58;3190:3;3179:9;3175:19;3137:58;:::i;:::-;3127:68;;1355:1846;;;;;;;;;;:::o;3628:259::-;3698:6;3751:2;3739:9;3730:7;3726:23;3722:32;3719:52;;;3767:1;3764;3757:12;3719:52;3799:9;3793:16;3818:39;3851:5;3818:39;:::i;4458:412::-;4587:3;4625:6;4619:13;4650:1;4660:129;4674:6;4671:1;4668:13;4660:129;;;4772:4;4756:14;;;4752:25;;4746:32;4733:11;;;4726:53;4689:12;4660:129;;;-1:-1:-1;4844:1:182;4808:16;;4833:13;;;-1:-1:-1;4808:16:182;4458:412;-1:-1:-1;4458:412:182:o;4875:277::-;4942:6;4995:2;4983:9;4974:7;4970:23;4966:32;4963:52;;;5011:1;5008;5001:12;4963:52;5043:9;5037:16;5096:5;5089:13;5082:21;5075:5;5072:32;5062:60;;5118:1;5115;5108:12;5157:203;447:1195:84;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly deployedBytecode: {
        readonly object: "0x6080604052600436106101d85760003560e01c80639032c72611610102578063d899e11211610095578063e44808bc11610064578063e44808bc14610625578063eac3e79914610645578063ed64bab214610679578063f3f7070714610699576101d8565b8063d899e112146105c9578063daaa35fe146105fd578063dbbe807014610612578063ded06231146103eb576101d8565b8063a6e8a859116100d1578063a6e8a85914610582578063ab033ea9146102e8578063cba2e58d146105b6578063cbc1343414610325576101d8565b80639032c726146105225780639cd241af14610542578063a22cb465146104cf578063a314453114610562576101d8565b806330adf81f1161017a5780634ed2d6ac116101495780634ed2d6ac146104b45780637180c8ca146104cf57806377d05ff4146104ef578063829555d414610502576101d8565b806330adf81f146104195780633644e5151461044d5780633e691db9146104815780634c2ac1d9146104a1576101d8565b806317fad7fc116101b657806317fad7fc1461035f5780631c0f12b61461037f57806321b57d531461039f57806329b23fc1146103eb576101d8565b806301681a62146102e857806302329a291461030a578063074a6de914610325575b3480156101e457600080fd5b5060003660606000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168585604051610227929190611281565b600060405180830381855af49150503d8060008114610262576040519150601f19603f3d011682016040523d82523d6000602084013e610267565b606091505b5091509150811561028b57604051638bb0a34b60e01b815260040160405180910390fd5b600061029682611291565b90506001600160e01b03198116636e64089360e11b146102b857815160208301fd5b8151600319810160048401908152926102d991810160200190602401611302565b80519650602001945050505050f35b3480156102f457600080fd5b506103086103033660046113c4565b6106cd565b005b34801561031657600080fd5b506103086103033660046113ef565b34801561033157600080fd5b5061034561034036600461141e565b6106fa565b604080519283526020830191909152015b60405180910390f35b34801561036b57600080fd5b5061030861037a3660046114b3565b61072f565b34801561038b57600080fd5b5061030861039a366004611548565b610761565b3480156103ab57600080fd5b506103d37f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610356565b3480156103f757600080fd5b5061040b610406366004611590565b610791565b604051908152602001610356565b34801561042557600080fd5b5061040b7f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367381565b34801561045957600080fd5b5061040b7f000000000000000000000000000000000000000000000000000000000000000081565b34801561048d57600080fd5b5061040b61049c3660046115ea565b6107c5565b61040b6104af366004611627565b6107f6565b3480156104c057600080fd5b5061030861039a36600461168b565b3480156104db57600080fd5b506103086104ea3660046116d5565b61082b565b61040b6104fd36600461141e565b610859565b34801561050e57600080fd5b5061034561051d36600461170e565b61088c565b34801561052e57600080fd5b5061030861053d366004611755565b6108a5565b34801561054e57600080fd5b5061030861055d3660046117d5565b6109ef565b34801561056e57600080fd5b5061040b61057d36600461141e565b610a1e565b34801561058e57600080fd5b506103d37f000000000000000000000000000000000000000000000000000000000000000081565b6103456105c4366004611590565b610a35565b3480156105d557600080fd5b506103d37f000000000000000000000000000000000000000000000000000000000000000081565b34801561060957600080fd5b5061040b610a6b565b610345610620366004611590565b610a7a565b34801561063157600080fd5b5061030861064036600461180d565b610aa6565b34801561065157600080fd5b506103d37f000000000000000000000000000000000000000000000000000000000000000081565b34801561068557600080fd5b5061030861069436600461186c565b610ad7565b3480156106a557600080fd5b506103d37f000000000000000000000000000000000000000000000000000000000000000081565b6106f67f0000000000000000000000000000000000000000000000000000000000000000610afc565b5050565b6000806107267f0000000000000000000000000000000000000000000000000000000000000000610afc565b50935093915050565b6107587f0000000000000000000000000000000000000000000000000000000000000000610afc565b50505050505050565b61078a7f0000000000000000000000000000000000000000000000000000000000000000610afc565b5050505050565b60006107bc7f0000000000000000000000000000000000000000000000000000000000000000610afc565b50949350505050565b60006107f07f0000000000000000000000000000000000000000000000000000000000000000610afc565b50919050565b60006108217f0000000000000000000000000000000000000000000000000000000000000000610afc565b5095945050505050565b6108547f0000000000000000000000000000000000000000000000000000000000000000610afc565b505050565b60006108847f0000000000000000000000000000000000000000000000000000000000000000610afc565b509392505050565b6000806108998484610b1c565b915091505b9250929050565b6040517f000000000000000000000000000000000000000000000000000000000000000060248201527f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367360448201526001600160a01b038881166064830152878116608483015286151560a483015260c4820186905260ff851660e48301526101048201849052610124820183905260009182917f000000000000000000000000000000000000000000000000000000000000000016906101440160408051601f198184030181529181526020820180516001600160e01b03166314e5f07b60e01b179052516109959190611885565b600060405180830381855af49150503d80600081146109d0576040519150601f19603f3d011682016040523d82523d6000602084013e6109d5565b606091505b5091509150816109e757805160208201fd5b805160208201f35b610a187f0000000000000000000000000000000000000000000000000000000000000000610afc565b50505050565b6000610a2b848484610caa565b90505b9392505050565b600080610a617f0000000000000000000000000000000000000000000000000000000000000000610afc565b5094509492505050565b6000610a75610e70565b905090565b600080610a617f0000000000000000000000000000000000000000000000000000000000000000610afc565b610acf7f0000000000000000000000000000000000000000000000000000000000000000610afc565b505050505050565b6106f67f00000000000000000000000000000000000000000000000000000000000000005b6060600080836001600160a01b0316600036604051610995929190611281565b600080610b2f60408401602085016113ef565b15610c6157610b696001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333087610f03565b610bc97f0000000000000000000000000000000000000000000000000000000000000000610b988660016118a1565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169190610f6a565b604051636e553f6560e01b8152600481018590523060248201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636e553f65906044016020604051808303816000875af1158015610c36573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c5a91906118c2565b9150610c99565b839150610c996001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333085610f03565b610ca1610e70565b90509250929050565b600080610cb78585610ffa565b6040516363737ac960e11b8152600481018290529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063c6e6f59290602401602060405180830381865afa158015610d1f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d4391906118c2565b945084600003610d57576000915050610a2e565b610d6760408401602085016113ef565b15610e26576001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001663ba08765286610da960208701876113c4565b6040516001600160e01b031960e085901b16815260048101929092526001600160a01b031660248201523060448201526064016020604051808303816000875af1158015610dfb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e1f91906118c2565b9150610884565b610e67610e3660208501856113c4565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169087611018565b50929392505050565b6040516303d1689d60e11b8152670de0b6b3a764000060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906307a2d13a90602401602060405180830381865afa158015610edf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a7591906118c2565b6040516001600160a01b038481166024830152838116604483015260648201839052610a189186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b038381831617835250505050611049565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b179052610fbb84826110b1565b610a18576040516001600160a01b03848116602483015260006044830152610ff091869182169063095ea7b390606401610f38565b610a188482611049565b600061100f8383670de0b6b3a7640000611159565b90505b92915050565b6040516001600160a01b0383811660248301526044820183905261085491859182169063a9059cbb90606401610f38565b600061105e6001600160a01b03841683611177565b9050805160001415801561108357508080602001905181019061108191906118db565b155b1561085457604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b6000806000846001600160a01b0316846040516110ce9190611885565b6000604051808303816000865af19150503d806000811461110b576040519150601f19603f3d011682016040523d82523d6000602084013e611110565b606091505b509150915081801561113a57508051158061113a57508080602001905181019061113a91906118db565b801561115057506000856001600160a01b03163b115b95945050505050565b600082600019048411830215820261117057600080fd5b5091020490565b606061100f8383600084600080856001600160a01b0316848660405161119d9190611885565b60006040518083038185875af1925050503d80600081146111da576040519150601f19603f3d011682016040523d82523d6000602084013e6111df565b606091505b50915091506111ef8683836111f9565b9695505050505050565b60608261120e5761120982611255565b610a2e565b815115801561122557506001600160a01b0384163b155b1561124e57604051639996b31560e01b81526001600160a01b03851660048201526024016110a8565b5080610a2e565b8051156112655780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b50565b8183823760009101908152919050565b805160208201516001600160e01b031980821692919060048310156112c05780818460040360031b1b83161693505b505050919050565b634e487b7160e01b600052604160045260246000fd5b60005b838110156112f95781810151838201526020016112e1565b50506000910152565b60006020828403121561131457600080fd5b815167ffffffffffffffff8082111561132c57600080fd5b818401915084601f83011261134057600080fd5b815181811115611352576113526112c8565b604051601f8201601f19908116603f0116810190838211818310171561137a5761137a6112c8565b8160405282815287602084870101111561139357600080fd5b6113a48360208301602088016112de565b979650505050505050565b6001600160a01b038116811461127e57600080fd5b6000602082840312156113d657600080fd5b8135610a2e816113af565b801515811461127e57600080fd5b60006020828403121561140157600080fd5b8135610a2e816113e1565b6000606082840312156107f057600080fd5b60008060006060848603121561143357600080fd5b8335925060208401359150604084013567ffffffffffffffff81111561145857600080fd5b6114648682870161140c565b9150509250925092565b60008083601f84011261148057600080fd5b50813567ffffffffffffffff81111561149857600080fd5b6020830191508360208260051b850101111561089e57600080fd5b600080600080600080608087890312156114cc57600080fd5b86356114d7816113af565b955060208701356114e7816113af565b9450604087013567ffffffffffffffff8082111561150457600080fd5b6115108a838b0161146e565b9096509450606089013591508082111561152957600080fd5b5061153689828a0161146e565b979a9699509497509295939492505050565b6000806000806080858703121561155e57600080fd5b843593506020850135611570816113af565b92506040850135611580816113af565b9396929550929360600135925050565b600080600080608085870312156115a657600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff8111156115d257600080fd5b6115de8782880161140c565b91505092959194509250565b6000602082840312156115fc57600080fd5b813567ffffffffffffffff81111561161357600080fd5b61161f8482850161140c565b949350505050565b600080600080600060a0868803121561163f57600080fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff81111561167257600080fd5b61167e8882890161140c565b9150509295509295909350565b600080600080608085870312156116a157600080fd5b8435935060208501356116b3816113af565b92506040850135915060608501356116ca816113af565b939692955090935050565b600080604083850312156116e857600080fd5b82356116f3816113af565b91506020830135611703816113e1565b809150509250929050565b6000806040838503121561172157600080fd5b82359150602083013567ffffffffffffffff81111561173f57600080fd5b61174b8582860161140c565b9150509250929050565b600080600080600080600060e0888a03121561177057600080fd5b873561177b816113af565b9650602088013561178b816113af565b9550604088013561179b816113e1565b945060608801359350608088013560ff811681146117b857600080fd5b9699959850939692959460a0840135945060c09093013592915050565b6000806000606084860312156117ea57600080fd5b8335925060208401356117fc816113af565b929592945050506040919091013590565b600080600080600060a0868803121561182557600080fd5b853594506020860135611837816113af565b93506040860135611847816113af565b925060608601359150608086013561185e816113af565b809150509295509295909350565b60006020828403121561187e57600080fd5b5035919050565b600082516118978184602087016112de565b9190910192915050565b8082018082111561101257634e487b7160e01b600052601160045260246000fd5b6000602082840312156118d457600080fd5b5051919050565b6000602082840312156118ed57600080fd5b8151610a2e816113e156fea2646970667358221220c2028124ffbe6d67b279c224514e35fba6f0c02d8549e202e4cff6b5f3bffd4b64736f6c63430008140033";
        readonly sourceMap: "447:1195:84:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7297:12:15;7451;7465:23;7492:7;-1:-1:-1;;;;;7492:20:15;7513:5;;7492:27;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7450:69;;;;7533:7;7529:76;;;7563:31;;-1:-1:-1;;;7563:31:15;;;;;;;;;;;7529:76;7614:15;7632:18;7639:10;7632:18;:::i;:::-;7614:36;-1:-1:-1;;;;;;;7664:43:15;;-1:-1:-1;;;7664:43:15;7660:160;;7784:10;7778:17;7773:2;7761:10;7757:19;7750:46;7660:160;8021:17;;-1:-1:-1;;8017:25:15;;8040:1;7995:20;;7988:55;;;7995:20;8122:31;;;;;;;;;;:::i;:::-;447:1195:84;;;-1:-1:-1;447:1195:84;;;-1:-1:-1;;;;;447:1195:84;5363:67:24;;;;;;;;;;-1:-1:-1;5363:67:24;;;;;:::i;:::-;;:::i;:::-;;10424:65:15;;;;;;;;;;-1:-1:-1;10424:65:15;;;;;:::i;9864:181::-;;;;;;;;;;-1:-1:-1;9864:181:15;;;;;:::i;:::-;;:::i;:::-;;;;3563:25:182;;;3619:2;3604:18;;3597:34;;;;3536:18;9864:181:15;;;;;;;;11553:167;;;;;;;;;;-1:-1:-1;11553:167:15;;;;;:::i;:::-;;:::i;10793:102::-;;;;;;;;;;-1:-1:-1;10793:102:15;;;;;:::i;:::-;;:::i;4449:32::-;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;5795:32:182;;;5777:51;;5765:2;5750:18;4449:32:15;5631:203:182;8956:177:15;;;;;;;;;;-1:-1:-1;8956:177:15;;;;;:::i;:::-;;:::i;:::-;;;6551:25:182;;;6539:2;6524:18;8956:177:15;6405::182;5184:174:15;;;;;;;;;;;;5234:124;5184:174;;5422:41;;;;;;;;;;;;;;;10246:136;;;;;;;;;;-1:-1:-1;10246:136:15;;;;;:::i;:::-;;:::i;9402:204::-;;;;;;:::i;:::-;;:::i;11142:107::-;;;;;;;;;;-1:-1:-1;11142:107:15;;;;;:::i;10649:78::-;;;;;;;;;;-1:-1:-1;10649:78:15;;;;;:::i;:::-;;:::i;9192:168::-;;;;;;:::i;:::-;;:::i;922:209:84:-;;;;;;;;;;-1:-1:-1;922:209:84;;;;;:::i;:::-;;:::i;12885:868:15:-;;;;;;;;;;-1:-1:-1;12885:868:15;;;;;:::i;:::-;;:::i;11419:92::-;;;;;;;;;;-1:-1:-1;11419:92:15;;;;;:::i;:::-;;:::i;1137:231:84:-;;;;;;;;;;-1:-1:-1;1137:231:84;;;;;:::i;:::-;;:::i;4751:32:15:-;;;;;;;;;;;;;;;8249:192;;;;;;:::i;:::-;;:::i;4902:32::-;;;;;;;;;;;;;;;1491:149:84;;;;;;;;;;;;;:::i;8721:193:15:-;;;;;;:::i;:::-;;:::i;10937:163::-;;;;;;;;;;-1:-1:-1;10937:163:15;;;;;:::i;:::-;;:::i;4600:32::-;;;;;;;;;;;;;;;10112:73;;;;;;;;;;-1:-1:-1;10112:73:15;;;;;:::i;:::-;;:::i;5062:32::-;;;;;;;;;;;;;;;5363:67:24;5405:18;5415:7;5405:9;:18::i;:::-;;5363:67;:::o;9864:181:15:-;9992:7;10001;10020:18;10030:7;10020:9;:18::i;:::-;;9864:181;;;;;;:::o;11553:167::-;11695:18;11705:7;11695:9;:18::i;:::-;;11553:167;;;;;;:::o;10793:102::-;10870:18;10880:7;10870:9;:18::i;:::-;;10793:102;;;;:::o;8956:177::-;9089:7;9108:18;9118:7;9108:9;:18::i;:::-;;8956:177;;;;;;:::o;10246:136::-;10338:7;10357:18;10367:7;10357:9;:18::i;:::-;;10246:136;;;:::o;9402:204::-;9562:7;9581:18;9591:7;9581:9;:18::i;:::-;;9402:204;;;;;;;:::o;10649:78::-;10702:18;10712:7;10702:9;:18::i;:::-;;10649:78;;:::o;9192:168::-;9316:7;9335:18;9345:7;9335:9;:18::i;:::-;;9192:168;;;;;:::o;922:209:84:-;1033:20;1055:23;1097:27;1106:7;1115:8;1097;:27::i;:::-;1090:34;;;;922:209;;;;;;:::o;12885:868:15:-;13157:373;;13259:16;13157:373;;;11950:25:182;5234:124:15;11991:18:182;;;11984:34;-1:-1:-1;;;;;12092:15:182;;;12072:18;;;12065:43;12144:15;;;12124:18;;;12117:43;12204:14;;12197:22;12176:19;;;12169:51;12236:19;;;12229:35;;;12313:4;12301:17;;12280:19;;;12273:46;12335:19;;;12328:35;;;12379:19;;;12372:35;;;13086:12:15;;;;13123:7;:20;;11922:19:182;;13157:373:15;;;-1:-1:-1;;13157:373:15;;;;;;;;;;;;;;-1:-1:-1;;;;;13157:373:15;-1:-1:-1;;;13157:373:15;;;13123:417;;;13157:373;13123:417;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;13085:455;;;;13555:7;13550:117;;13635:6;13629:13;13624:2;13616:6;13612:15;13605:38;13550:117;13729:6;13723:13;13718:2;13710:6;13706:15;13699:38;11419:92;11486:18;11496:7;11486:9;:18::i;:::-;;11419:92;;;:::o;1137:231:84:-;1278:23;1320:41;1330:7;1339:11;1352:8;1320:9;:41::i;:::-;1313:48;;1137:231;;;;;;:::o;8249:192:15:-;8388:7;8397;8416:18;8426:7;8416:9;:18::i;:::-;;8249:192;;;;;;;:::o;1491:149:84:-;1566:23;1612:21;:19;:21::i;:::-;1605:28;;1491:149;:::o;8721:193:15:-;8861:7;8870;8889:18;8899:7;8889:9;:18::i;10937:163::-;11075:18;11085:7;11075:9;:18::i;:::-;;10937:163;;;;;:::o;10112:73::-;10160:18;10170:7;14031:359;14085:12;14110;14124:19;14147:7;-1:-1:-1;;;;;14147:20:15;14168:8;;14147:30;;;;;;;:::i;2066:1468:23:-;2213:20;;2278:15;;;;;;;;:::i;:::-;2274:1205;;;2361:141;-1:-1:-1;;;;;2375:10:23;2361:43;2422:10;2458:4;2481:7;2361:43;:141::i;:::-;2808:115;2873:6;2898:11;:7;2908:1;2898:11;:::i;:::-;-1:-1:-1;;;;;2822:10:23;2808:39;;:115;:39;:115::i;:::-;2952:38;;-1:-1:-1;;;2952:38:23;;;;;13111:25:182;;;2984:4:23;13152:18:182;;;13145:60;2952:6:23;-1:-1:-1;;;;;2952:14:23;;;;13084:18:182;;2952:38:23;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2937:53;;2274:1205;;;3244:7;;-1:-1:-1;3326:142:23;-1:-1:-1;;;;;3340:6:23;3326:39;3383:10;3419:4;3244:7;3326:39;:142::i;:::-;3506:21;:19;:21::i;:::-;3488:39;;2066:1468;;;;;:::o;4345:1482::-;4498:23;;4835:28;:7;4851:11;4835:15;:28::i;:::-;4883:34;;-1:-1:-1;;;4883:34:23;;;;;6551:25:182;;;4814:49:23;;-1:-1:-1;4883:6:23;-1:-1:-1;;;;;4883:22:23;;;;6524:18:182;;4883:34:23;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;4873:44;;5005:7;5016:1;5005:12;5001:51;;5040:1;5033:8;;;;;5001:51;5203:15;;;;;;;;:::i;:::-;5199:622;;;-1:-1:-1;;;;;5371:6:23;:13;;5402:7;5427:20;;;;:8;:20;:::i;:::-;5371:121;;-1:-1:-1;;;;;;5371:121:23;;;;;;;;;;13607:25:182;;;;-1:-1:-1;;;;;13706:15:182;13686:18;;;13679:43;5473:4:23;13738:18:182;;;13731:43;13580:18;;5371:121:23;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;5353:139;;5199:622;;;5705:66;5741:20;;;;:8;:20;:::i;:::-;-1:-1:-1;;;;;5719:6:23;5705:35;;5763:7;5705:35;:66::i;:::-;-1:-1:-1;5803:7:23;;4345:1482;-1:-1:-1;;;4345:1482:23:o;6024:123::-;6113:27;;-1:-1:-1;;;6113:27:23;;150:4:73;6113:27:23;;;6551:25:182;6087:7:23;;6113:6;-1:-1:-1;;;;;6113:22:23;;;;6524:18:182;;6113:27:23;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;1702:188:117:-;1829:53;;-1:-1:-1;;;;;14043:15:182;;;1829:53:117;;;14025:34:182;14095:15;;;14075:18;;;14068:43;14127:18;;;14120:34;;;1802:81:117;;1822:5;;1844:18;;;;;13960::182;;1829:53:117;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;1829:53:117;;;;;;;;;;;1802:19;:81::i;3296:380::-;3411:47;;;-1:-1:-1;;;;;14357:32:182;;3411:47:117;;;14339:51:182;14406:18;;;;14399:34;;;3411:47:117;;;;;;;;;;14312:18:182;;;;3411:47:117;;;;;;;;-1:-1:-1;;;;;3411:47:117;-1:-1:-1;;;3411:47:117;;;3474:44;3426:13;3411:47;3474:23;:44::i;:::-;3469:201;;3561:43;;-1:-1:-1;;;;;14357:32:182;;;3561:43:117;;;14339:51:182;3601:1:117;14406:18:182;;;14399:34;3534:71:117;;3554:5;;3576:13;;;;;14312:18:182;;3561:43:117;14165:274:182;3534:71:117;3619:40;3639:5;3646:12;3619:19;:40::i;1535:119:73:-;1597:7;1624:22;1635:1;1638;1641:4;1624:10;:22::i;:::-;1616:31;;1535:119;;;;;:::o;1303:160:117:-;1412:43;;-1:-1:-1;;;;;14357:32:182;;;1412:43:117;;;14339:51:182;14406:18;;;14399:34;;;1385:71:117;;1405:5;;1427:14;;;;;14312:18:182;;1412:43:117;14165:274:182;4059:629:117;4478:23;4504:33;-1:-1:-1;;;;;4504:27:117;;4532:4;4504:27;:33::i;:::-;4478:59;;4551:10;:17;4572:1;4551:22;;:57;;;;;4589:10;4578:30;;;;;;;;;;;;:::i;:::-;4577:31;4551:57;4547:135;;;4631:40;;-1:-1:-1;;;4631:40:117;;-1:-1:-1;;;;;5795:32:182;;4631:40:117;;;5777:51:182;5750:18;;4631:40:117;;;;;;;;5189:578;5272:4;5574:12;5588:23;5623:5;-1:-1:-1;;;;;5615:19:117;5635:4;5615:25;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5573:67;;;;5657:7;:69;;;;-1:-1:-1;5669:17:117;;:22;;:56;;;5706:10;5695:30;;;;;;;;;;;;:::i;:::-;5657:103;;;;;5759:1;5738:5;-1:-1:-1;;;;;5730:26:117;;:30;5657:103;5650:110;5189:578;-1:-1:-1;;;;;5189:578:117:o;823:556:73:-;939:9;1204:1;-1:-1:-1;;1187:19:73;1184:1;1181:26;1178:1;1174:34;1167:42;1154:11;1150:60;1123:146;;1253:1;1250;1243:12;1123:146;-1:-1:-1;1340:9:73;;1336:27;;823:556::o;2705:151:118:-;2780:12;2811:38;2833:6;2841:4;2847:1;2780:12;3421;3435:23;3462:6;-1:-1:-1;;;;;3462:11:118;3481:5;3488:4;3462:31;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3420:73;;;;3510:55;3537:6;3545:7;3554:10;3510:26;:55::i;:::-;3503:62;3180:392;-1:-1:-1;;;;;;3180:392:118:o;4625:582::-;4769:12;4798:7;4793:408;;4821:19;4829:10;4821:7;:19::i;:::-;4793:408;;;5045:17;;:22;:49;;;;-1:-1:-1;;;;;;5071:18:118;;;:23;5045:49;5041:119;;;5121:24;;-1:-1:-1;;;5121:24:118;;-1:-1:-1;;;;;5795:32:182;;5121:24:118;;;5777:51:182;5750:18;;5121:24:118;5631:203:182;5041:119:118;-1:-1:-1;5180:10:118;5173:17;;5743:516;5874:17;;:21;5870:383;;6102:10;6096:17;6158:15;6145:10;6141:2;6137:19;6130:44;5870:383;6225:17;;-1:-1:-1;;;6225:17:118;;;;;;;;;;;5870:383;5743:516;:::o;14:271:182:-;197:6;189;184:3;171:33;153:3;223:16;;248:13;;;223:16;14:271;-1:-1:-1;14:271:182:o;290:361::-;407:12;;455:4;444:16;;438:23;-1:-1:-1;;;;;;518:11:182;;;;407:12;438:23;552:1;541:13;;538:107;;;632:2;626;616:6;613:1;609:14;606:1;602:22;598:31;594:2;590:40;586:49;577:58;;538:107;;;;290:361;;;:::o;656:127::-;717:10;712:3;708:20;705:1;698:31;748:4;745:1;738:15;772:4;769:1;762:15;788:250;873:1;883:113;897:6;894:1;891:13;883:113;;;973:11;;;967:18;954:11;;;947:39;919:2;912:10;883:113;;;-1:-1:-1;;1030:1:182;1012:16;;1005:27;788:250::o;1043:896::-;1122:6;1175:2;1163:9;1154:7;1150:23;1146:32;1143:52;;;1191:1;1188;1181:12;1143:52;1224:9;1218:16;1253:18;1294:2;1286:6;1283:14;1280:34;;;1310:1;1307;1300:12;1280:34;1348:6;1337:9;1333:22;1323:32;;1393:7;1386:4;1382:2;1378:13;1374:27;1364:55;;1415:1;1412;1405:12;1364:55;1444:2;1438:9;1466:2;1462;1459:10;1456:36;;;1472:18;;:::i;:::-;1547:2;1541:9;1515:2;1601:13;;-1:-1:-1;;1597:22:182;;;1621:2;1593:31;1589:40;1577:53;;;1645:18;;;1665:22;;;1642:46;1639:72;;;1691:18;;:::i;:::-;1731:10;1727:2;1720:22;1766:2;1758:6;1751:18;1806:7;1801:2;1796;1792;1788:11;1784:20;1781:33;1778:53;;;1827:1;1824;1817:12;1778:53;1840:68;1905:2;1900;1892:6;1888:15;1883:2;1879;1875:11;1840:68;:::i;:::-;1927:6;1043:896;-1:-1:-1;;;;;;;1043:896:182:o;1944:139::-;-1:-1:-1;;;;;2027:31:182;;2017:42;;2007:70;;2073:1;2070;2063:12;2088:270;2162:6;2215:2;2203:9;2194:7;2190:23;2186:32;2183:52;;;2231:1;2228;2221:12;2183:52;2270:9;2257:23;2289:39;2322:5;2289:39;:::i;2363:118::-;2449:5;2442:13;2435:21;2428:5;2425:32;2415:60;;2471:1;2468;2461:12;2486:241;2542:6;2595:2;2583:9;2574:7;2570:23;2566:32;2563:52;;;2611:1;2608;2601:12;2563:52;2650:9;2637:23;2669:28;2691:5;2669:28;:::i;2732:155::-;2792:5;2837:2;2828:6;2823:3;2819:16;2815:25;2812:45;;;2853:1;2850;2843:12;2892:492;2996:6;3004;3012;3065:2;3053:9;3044:7;3040:23;3036:32;3033:52;;;3081:1;3078;3071:12;3033:52;3117:9;3104:23;3094:33;;3174:2;3163:9;3159:18;3146:32;3136:42;;3229:2;3218:9;3214:18;3201:32;3256:18;3248:6;3245:30;3242:50;;;3288:1;3285;3278:12;3242:50;3311:67;3370:7;3361:6;3350:9;3346:22;3311:67;:::i;:::-;3301:77;;;2892:492;;;;;:::o;3642:367::-;3705:8;3715:6;3769:3;3762:4;3754:6;3750:17;3746:27;3736:55;;3787:1;3784;3777:12;3736:55;-1:-1:-1;3810:20:182;;3853:18;3842:30;;3839:50;;;3885:1;3882;3875:12;3839:50;3922:4;3914:6;3910:17;3898:29;;3982:3;3975:4;3965:6;3962:1;3958:14;3950:6;3946:27;3942:38;3939:47;3936:67;;;3999:1;3996;3989:12;4014:1066;4154:6;4162;4170;4178;4186;4194;4247:3;4235:9;4226:7;4222:23;4218:33;4215:53;;;4264:1;4261;4254:12;4215:53;4303:9;4290:23;4322:39;4355:5;4322:39;:::i;:::-;4380:5;-1:-1:-1;4437:2:182;4422:18;;4409:32;4450:41;4409:32;4450:41;:::i;:::-;4510:7;-1:-1:-1;4568:2:182;4553:18;;4540:32;4591:18;4621:14;;;4618:34;;;4648:1;4645;4638:12;4618:34;4687:70;4749:7;4740:6;4729:9;4725:22;4687:70;:::i;:::-;4776:8;;-1:-1:-1;4661:96:182;-1:-1:-1;4864:2:182;4849:18;;4836:32;;-1:-1:-1;4880:16:182;;;4877:36;;;4909:1;4906;4899:12;4877:36;;4948:72;5012:7;5001:8;4990:9;4986:24;4948:72;:::i;:::-;4014:1066;;;;-1:-1:-1;4014:1066:182;;-1:-1:-1;4014:1066:182;;5039:8;;4014:1066;-1:-1:-1;;;4014:1066:182:o;5085:541::-;5171:6;5179;5187;5195;5248:3;5236:9;5227:7;5223:23;5219:33;5216:53;;;5265:1;5262;5255:12;5216:53;5301:9;5288:23;5278:33;;5361:2;5350:9;5346:18;5333:32;5374:39;5407:5;5374:39;:::i;:::-;5432:5;-1:-1:-1;5489:2:182;5474:18;;5461:32;5502:41;5461:32;5502:41;:::i;:::-;5085:541;;;;-1:-1:-1;5562:7:182;;5616:2;5601:18;5588:32;;-1:-1:-1;;5085:541:182:o;5839:561::-;5952:6;5960;5968;5976;6029:3;6017:9;6008:7;6004:23;6000:33;5997:53;;;6046:1;6043;6036:12;5997:53;6082:9;6069:23;6059:33;;6139:2;6128:9;6124:18;6111:32;6101:42;;6190:2;6179:9;6175:18;6162:32;6152:42;;6245:2;6234:9;6230:18;6217:32;6272:18;6264:6;6261:30;6258:50;;;6304:1;6301;6294:12;6258:50;6327:67;6386:7;6377:6;6366:9;6362:22;6327:67;:::i;:::-;6317:77;;;5839:561;;;;;;;:::o;6769:356::-;6855:6;6908:2;6896:9;6887:7;6883:23;6879:32;6876:52;;;6924:1;6921;6914:12;6876:52;6964:9;6951:23;6997:18;6989:6;6986:30;6983:50;;;7029:1;7026;7019:12;6983:50;7052:67;7111:7;7102:6;7091:9;7087:22;7052:67;:::i;:::-;7042:77;6769:356;-1:-1:-1;;;;6769:356:182:o;7130:630::-;7252:6;7260;7268;7276;7284;7337:3;7325:9;7316:7;7312:23;7308:33;7305:53;;;7354:1;7351;7344:12;7305:53;7390:9;7377:23;7367:33;;7447:2;7436:9;7432:18;7419:32;7409:42;;7498:2;7487:9;7483:18;7470:32;7460:42;;7549:2;7538:9;7534:18;7521:32;7511:42;;7604:3;7593:9;7589:19;7576:33;7632:18;7624:6;7621:30;7618:50;;;7664:1;7661;7654:12;7618:50;7687:67;7746:7;7737:6;7726:9;7722:22;7687:67;:::i;:::-;7677:77;;;7130:630;;;;;;;;:::o;7765:541::-;7851:6;7859;7867;7875;7928:3;7916:9;7907:7;7903:23;7899:33;7896:53;;;7945:1;7942;7935:12;7896:53;7981:9;7968:23;7958:33;;8041:2;8030:9;8026:18;8013:32;8054:39;8087:5;8054:39;:::i;:::-;8112:5;-1:-1:-1;8164:2:182;8149:18;;8136:32;;-1:-1:-1;8220:2:182;8205:18;;8192:32;8233:41;8192:32;8233:41;:::i;:::-;7765:541;;;;-1:-1:-1;7765:541:182;;-1:-1:-1;;7765:541:182:o;8311:390::-;8376:6;8384;8437:2;8425:9;8416:7;8412:23;8408:32;8405:52;;;8453:1;8450;8443:12;8405:52;8492:9;8479:23;8511:39;8544:5;8511:39;:::i;:::-;8569:5;-1:-1:-1;8626:2:182;8611:18;;8598:32;8639:30;8598:32;8639:30;:::i;:::-;8688:7;8678:17;;;8311:390;;;;;:::o;8706:424::-;8801:6;8809;8862:2;8850:9;8841:7;8837:23;8833:32;8830:52;;;8878:1;8875;8868:12;8830:52;8914:9;8901:23;8891:33;;8975:2;8964:9;8960:18;8947:32;9002:18;8994:6;8991:30;8988:50;;;9034:1;9031;9024:12;8988:50;9057:67;9116:7;9107:6;9096:9;9092:22;9057:67;:::i;:::-;9047:77;;;8706:424;;;;;:::o;9135:912::-;9243:6;9251;9259;9267;9275;9283;9291;9344:3;9332:9;9323:7;9319:23;9315:33;9312:53;;;9361:1;9358;9351:12;9312:53;9400:9;9387:23;9419:39;9452:5;9419:39;:::i;:::-;9477:5;-1:-1:-1;9534:2:182;9519:18;;9506:32;9547:41;9506:32;9547:41;:::i;:::-;9607:7;-1:-1:-1;9666:2:182;9651:18;;9638:32;9679:30;9638:32;9679:30;:::i;:::-;9728:7;-1:-1:-1;9782:2:182;9767:18;;9754:32;;-1:-1:-1;9838:3:182;9823:19;;9810:33;9887:4;9874:18;;9862:31;;9852:59;;9907:1;9904;9897:12;9852:59;9135:912;;;;-1:-1:-1;9135:912:182;;;;9930:7;9984:3;9969:19;;9956:33;;-1:-1:-1;10036:3:182;10021:19;;;10008:33;;9135:912;-1:-1:-1;;9135:912:182:o;10052:391::-;10129:6;10137;10145;10198:2;10186:9;10177:7;10173:23;10169:32;10166:52;;;10214:1;10211;10204:12;10166:52;10250:9;10237:23;10227:33;;10310:2;10299:9;10295:18;10282:32;10323:39;10356:5;10323:39;:::i;:::-;10052:391;;10381:5;;-1:-1:-1;;;10433:2:182;10418:18;;;;10405:32;;10052:391::o;10708:691::-;10803:6;10811;10819;10827;10835;10888:3;10876:9;10867:7;10863:23;10859:33;10856:53;;;10905:1;10902;10895:12;10856:53;10941:9;10928:23;10918:33;;11001:2;10990:9;10986:18;10973:32;11014:39;11047:5;11014:39;:::i;:::-;11072:5;-1:-1:-1;11129:2:182;11114:18;;11101:32;11142:41;11101:32;11142:41;:::i;:::-;11202:7;-1:-1:-1;11256:2:182;11241:18;;11228:32;;-1:-1:-1;11312:3:182;11297:19;;11284:33;11326:41;11284:33;11326:41;:::i;:::-;11386:7;11376:17;;;10708:691;;;;;;;;:::o;11404:180::-;11463:6;11516:2;11504:9;11495:7;11491:23;11487:32;11484:52;;;11532:1;11529;11522:12;11484:52;-1:-1:-1;11555:23:182;;11404:180;-1:-1:-1;11404:180:182:o;12418:287::-;12547:3;12585:6;12579:13;12601:66;12660:6;12655:3;12648:4;12640:6;12636:17;12601:66;:::i;:::-;12683:16;;;;;12418:287;-1:-1:-1;;12418:287:182:o;12710:222::-;12775:9;;;12796:10;;;12793:133;;;12848:10;12843:3;12839:20;12836:1;12829:31;12883:4;12880:1;12873:15;12911:4;12908:1;12901:15;13216:184;13286:6;13339:2;13327:9;13318:7;13314:23;13310:32;13307:52;;;13355:1;13352;13345:12;13307:52;-1:-1:-1;13378:16:182;;13216:184;-1:-1:-1;13216:184:182:o;14731:245::-;14798:6;14851:2;14839:9;14830:7;14826:23;14822:32;14819:52;;;14867:1;14864;14857:12;14819:52;14899:9;14893:16;14918:28;14940:5;14918:28;:::i";
        readonly linkReferences: {};
        readonly immutableReferences: {
            readonly "13293": readonly [{
                readonly start: 2881;
                readonly length: 32;
            }, {
                readonly start: 2978;
                readonly length: 32;
            }];
            readonly "1846": readonly [{
                readonly start: 495;
                readonly length: 32;
            }, {
                readonly start: 945;
                readonly length: 32;
            }, {
                readonly start: 1746;
                readonly length: 32;
            }, {
                readonly start: 1844;
                readonly length: 32;
            }, {
                readonly start: 1894;
                readonly length: 32;
            }, {
                readonly start: 1996;
                readonly length: 32;
            }, {
                readonly start: 2096;
                readonly length: 32;
            }, {
                readonly start: 2363;
                readonly length: 32;
            }, {
                readonly start: 2548;
                readonly length: 32;
            }, {
                readonly start: 2731;
                readonly length: 32;
            }];
            readonly "1849": readonly [{
                readonly start: 1623;
                readonly length: 32;
            }, {
                readonly start: 1794;
                readonly length: 32;
            }, {
                readonly start: 2045;
                readonly length: 32;
            }];
            readonly "1852": readonly [{
                readonly start: 1428;
                readonly length: 32;
            }, {
                readonly start: 1944;
                readonly length: 32;
            }, {
                readonly start: 2780;
                readonly length: 32;
            }];
            readonly "1855": readonly [{
                readonly start: 1499;
                readonly length: 32;
            }, {
                readonly start: 2144;
                readonly length: 32;
            }, {
                readonly start: 2621;
                readonly length: 32;
            }];
            readonly "1858": readonly [{
                readonly start: 1707;
                readonly length: 32;
            }, {
                readonly start: 2690;
                readonly length: 32;
            }];
            readonly "1867": readonly [{
                readonly start: 1119;
                readonly length: 32;
            }, {
                readonly start: 2218;
                readonly length: 32;
            }];
            readonly "5478": readonly [{
                readonly start: 2926;
                readonly length: 32;
            }, {
                readonly start: 3045;
                readonly length: 32;
            }, {
                readonly start: 3185;
                readonly length: 32;
            }, {
                readonly start: 3280;
                readonly length: 32;
            }, {
                readonly start: 3446;
                readonly length: 32;
            }, {
                readonly start: 3648;
                readonly length: 32;
            }, {
                readonly start: 3728;
                readonly length: 32;
            }];
        };
    };
    readonly methodIdentifiers: {
        readonly "DOMAIN_SEPARATOR()": "3644e515";
        readonly "PERMIT_TYPEHASH()": "30adf81f";
        readonly "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": "4c2ac1d9";
        readonly "batchTransferFrom(address,address,uint256[],uint256[])": "17fad7fc";
        readonly "checkpoint(uint256)": "ed64bab2";
        readonly "closeLong(uint256,uint256,uint256,(address,bool,bytes))": "ded06231";
        readonly "closeShort(uint256,uint256,uint256,(address,bool,bytes))": "29b23fc1";
        readonly "collectGovernanceFee((address,bool,bytes))": "3e691db9";
        readonly "deposit(uint256,(address,bool,bytes))": "829555d4";
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
        readonly "setGovernance(address)": "ab033ea9";
        readonly "setPauser(address,bool)": "7180c8ca";
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
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolConfig\",\"name\":\"_config\",\"type\":\"tuple\"},{\"internalType\":\"address\",\"name\":\"_target0\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_target1\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_target2\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_target3\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_target4\",\"type\":\"address\"},{\"internalType\":\"contract IERC4626\",\"name\":\"_pool\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"name\":\"AddressEmptyCode\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"AddressInsufficientBalance\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FailedInnerCall\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidBaseToken\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"}],\"name\":\"SafeERC20FailedOperation\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnexpectedSuccess\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fees\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseProceeds\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"}],\"name\":\"PauseStatusUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"stateMutability\":\"nonpayable\",\"type\":\"fallback\"},{\"inputs\":[],\"name\":\"DOMAIN_SEPARATOR\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"PERMIT_TYPEHASH\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"addLiquidity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"name\":\"batchTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"checkpoint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"closeLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"closeShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"collectGovernanceFee\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"deposit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"sharesMinted\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"initialize\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"openLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"openShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"name\":\"pause\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_approved\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permitForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"pricePerVaultShare\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"redeemWithdrawalShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"removeLiquidity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"setApproval\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"setApprovalBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"setGovernance\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"name\":\"setPauser\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"sweep\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target0\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target1\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target2\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target3\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target4\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"transferFromBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_shares\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_sharePrice\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"withdraw\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"amountWithdrawn\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"errors\":{\"AddressEmptyCode(address)\":[{\"details\":\"There's no code at `target` (it is not a contract).\"}],\"AddressInsufficientBalance(address)\":[{\"details\":\"The ETH balance of the account is not enough to perform the operation.\"}],\"FailedInnerCall()\":[{\"details\":\"A call to an address target failed. The target may have reverted.\"}],\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}],\"SafeERC20FailedOperation(address)\":[{\"details\":\"An operation with an ERC20 token failed.\"}]},\"kind\":\"dev\",\"methods\":{\"addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_contribution\":\"The amount to supply.\",\"_maxApr\":\"The maximum APR at which the LP is willing to supply.\",\"_minApr\":\"The minimum APR at which the LP is willing to supply.\",\"_minLpSharePrice\":\"The minimum LP share price the LP is willing        to accept for their shares. LPs incur negative slippage when        adding liquidity if there is a net curve position in the market,        so this allows LPs to protect themselves from high levels of        slippage.\",\"_options\":\"The options that configure how the operation is settled.\"},\"returns\":{\"_0\":\"The number of LP tokens created.\"}},\"batchTransferFrom(address,address,uint256[],uint256[])\":{\"params\":{\"from\":\"The source account.\",\"ids\":\"The array of token ids of the asset to transfer.\",\"to\":\"The destination account.\",\"values\":\"The amount of each token to transfer.\"}},\"checkpoint(uint256)\":{\"params\":{\"_checkpointTime\":\"The time of the checkpoint to create.\"}},\"closeLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_bondAmount\":\"The amount of longs to close.\",\"_maturityTime\":\"The maturity time of the short.\",\"_minOutput\":\"The minimum amount of base the trader will accept.\",\"_options\":\"The options that configure how the trade is settled.\"},\"returns\":{\"_0\":\"The amount of underlying the user receives.\"}},\"closeShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_bondAmount\":\"The amount of shorts to close.\",\"_maturityTime\":\"The maturity time of the short.\",\"_minOutput\":\"The minimum output of this trade.\",\"_options\":\"The options that configure how the trade is settled.\"},\"returns\":{\"_0\":\"The amount of base tokens produced by closing this short.\"}},\"collectGovernanceFee((address,bool,bytes))\":{\"params\":{\"_options\":\"The options that configure how the fees are settled.\"},\"returns\":{\"_0\":\"The amount collected in units specified by _options.\"}},\"initialize(uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_apr\":\"The target APR.\",\"_contribution\":\"The amount to supply.\",\"_options\":\"The options that configure how the operation is settled.\"},\"returns\":{\"_0\":\"The initial number of LP shares created.\"}},\"openLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_amount\":\"The amount to open a long with.\",\"_minOutput\":\"The minimum number of bonds to receive.\",\"_minVaultSharePrice\":\"The minimum vault share price at which to        open the long. This allows traders to protect themselves from        opening a long in a checkpoint where negative interest has        accrued.\",\"_options\":\"The options that configure how the trade is settled.\"},\"returns\":{\"_0\":\"The maturity time of the bonds.\",\"_1\":\"The amount of bonds the user received\"}},\"openShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_bondAmount\":\"The amount of bonds to short.\",\"_maxDeposit\":\"The most the user expects to deposit for this trade.\",\"_minVaultSharePrice\":\"The minimum vault share price at which to open        the short. This allows traders to protect themselves from opening        a short in a checkpoint where negative interest has accrued.\",\"_options\":\"The options that configure how the trade is settled.\"},\"returns\":{\"_0\":\"The maturity time of the short.\",\"_1\":\"The amount the user deposited for this trade.\"}},\"pause(bool)\":{\"params\":{\"_status\":\"True to pause all deposits and false to unpause them.\"}},\"permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"details\":\"The signature for this function follows EIP 712 standard and should      be generated with the eth_signTypedData JSON RPC call instead of      the eth_sign JSON RPC call. If using out of date parity signing      libraries the v component may need to be adjusted. Also it is very      rare but possible for v to be other values, those values are not      supported.\",\"params\":{\"_approved\":\"A boolean of the approval status to set to.\",\"deadline\":\"The timestamp which the signature must be submitted by        to be valid.\",\"owner\":\"The owner of the account which is having the new approval set.\",\"r\":\"The r component of the ECDSA signature.\",\"s\":\"The s component of the ECDSA signature.\",\"spender\":\"The address which will be allowed to spend owner's tokens.\",\"v\":\"Extra ECDSA data which allows public key recovery from        signature assumed to be 27 or 28.\"}},\"pricePerVaultShare()\":{\"returns\":{\"vaultSharePrice\":\"The current share price.\"}},\"redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_minOutputPerShare\":\"The minimum amount of base the LP expects to        receive for each withdrawal share that is burned.\",\"_options\":\"The options that configure how the operation is settled.\",\"_withdrawalShares\":\"The withdrawal shares to redeem.\"},\"returns\":{\"_0\":\"The amount the LP received.\",\"_1\":\"The amount of withdrawal shares that         were redeemed.\"}},\"removeLiquidity(uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_lpShares\":\"The LP shares to burn.\",\"_minOutputPerShare\":\"The minimum amount of base per LP share that        was redeemed.\",\"_options\":\"The options that configure how the operation is settled.\"},\"returns\":{\"_0\":\"The amount the LP removing liquidity receives. The         LP receives a proportional amount of the pool's idle capital\",\"_1\":\"The base that the LP receives buys out some of         their LP shares, but it may not be sufficient to fully buy the         LP out. In this case, the LP receives withdrawal shares equal         in value to the present value they are owed. As idle capital         becomes available, the pool will buy back these shares.\"}},\"setApprovalBridge(uint256,address,uint256,address)\":{\"params\":{\"amount\":\"The max tokens the approved person can use, setting to        uint256.max will cause the value to never decrement [saving gas        on transfer].\",\"caller\":\"The eth address which called the linking contract.\",\"operator\":\"The address who will be able to use the tokens.\",\"tokenID\":\"The asset to approve the use of.\"}},\"setApprovalForAll(address,bool)\":{\"params\":{\"approved\":\"True to approve, false to remove approval.\",\"operator\":\"The eth address which can access the caller's assets.\"}},\"setGovernance(address)\":{\"params\":{\"_who\":\"The new governance address.\"}},\"setPauser(address,bool)\":{\"params\":{\"status\":\"The new pauser status.\",\"who\":\"The address to change.\"}},\"sweep(address)\":{\"details\":\"Some yield sources (e.g. Morpho) pay rewards directly to this      contract, but we can't handle distributing them internally. With      this in mind, we sweep the tokens to the fee collector address to      then redistribute to users.WARN: It is unlikely but possible that there is a selector overlap      with 'transferFrom'. Any integrating contracts should be checked      for that, as it may result in an unexpected call from this address.\",\"params\":{\"_target\":\"The target token to sweep.\"}},\"transferFrom(uint256,address,address,uint256)\":{\"params\":{\"amount\":\"The amount of token to move.\",\"from\":\"The address whose balance will be reduced.\",\"to\":\"The address whose balance will be increased.\",\"tokenID\":\"The token identifier.\"}},\"transferFromBridge(uint256,address,address,uint256,address)\":{\"params\":{\"amount\":\"The amount of token to move.\",\"caller\":\"The msg.sender or the caller of the ERC20Forwarder.\",\"from\":\"The address whose balance will be reduced.\",\"to\":\"The address whose balance will be increased.\",\"tokenID\":\"The token identifier.\"}}},\"version\":1},\"userdoc\":{\"errors\":{\"InvalidBaseToken()\":[{\"notice\":\"Thrown when the base token isn't valid. Each instance will have         different criteria for what constitutes a valid base token.\"}],\"UnexpectedSuccess()\":[{\"notice\":\"Thrown when a read-only call succeeds. The proxy architecture         uses a force-revert delegatecall pattern to ensure that calls         that are intended to be read-only are actually read-only.\"}]},\"events\":{\"AddLiquidity(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when an LP adds liquidity to the Hyperdrive pool.\"},\"Approval(address,address,uint256)\":{\"notice\":\"Emitted when an account changes the allowance for another         account.\"},\"ApprovalForAll(address,address,bool)\":{\"notice\":\"Emitted when an account changes the approval for all of its         tokens.\"},\"CloseLong(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is closed.\"},\"CloseShort(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a short position is closed.\"},\"CollectGovernanceFee(address,uint256)\":{\"notice\":\"Emitted when governance fees are collected.\"},\"CreateCheckpoint(uint256,uint256,uint256,uint256,uint256)\":{\"notice\":\"Emitted when a checkpoint is created.\"},\"GovernanceUpdated(address)\":{\"notice\":\"Emitted when the governance address is updated.\"},\"Initialize(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when the Hyperdrive pool is initialized.\"},\"OpenLong(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is opened.\"},\"OpenShort(address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is opened.\"},\"PauseStatusUpdated(bool)\":{\"notice\":\"Emitted when the pause status is updated.\"},\"PauserUpdated(address)\":{\"notice\":\"Emitted when a pauser is updated.\"},\"RedeemWithdrawalShares(address,uint256,uint256,uint256,bool)\":{\"notice\":\"Emitted when an LP redeems withdrawal shares.\"},\"RemoveLiquidity(address,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when an LP removes liquidity from the Hyperdrive pool.\"},\"TransferSingle(address,address,address,uint256,uint256)\":{\"notice\":\"Emitted when tokens are transferred from one account to another.\"}},\"kind\":\"user\",\"methods\":{\"DOMAIN_SEPARATOR()\":{\"notice\":\"This contract's EIP712 domain separator.\"},\"PERMIT_TYPEHASH()\":{\"notice\":\"The typehash used to calculate the EIP712 hash for `permitForAll`.\"},\"addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows LPs to supply liquidity for LP shares.\"},\"batchTransferFrom(address,address,uint256[],uint256[])\":{\"notice\":\"Transfers several assets from one account to another.\"},\"checkpoint(uint256)\":{\"notice\":\"Attempts to mint a checkpoint with the specified checkpoint time.\"},\"closeLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Closes a long position with a specified maturity time.\"},\"closeShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Closes a short position with a specified maturity time.\"},\"collectGovernanceFee((address,bool,bytes))\":{\"notice\":\"This function collects the governance fees accrued by the pool.\"},\"initialize(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows the first LP to initialize the market with a target APR.\"},\"openLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Opens a long position.\"},\"openShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Opens a short position.\"},\"pause(bool)\":{\"notice\":\"Allows an authorized address to pause this contract.\"},\"permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"notice\":\"Allows a caller who is not the owner of an account to execute the      functionality of 'approve' for all assets with the owners signature.\"},\"pricePerVaultShare()\":{\"notice\":\"Loads the share price from the yield source\"},\"redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Redeems withdrawal shares by giving the LP a pro-rata amount of the      withdrawal pool's proceeds. This function redeems the maximum      amount of the specified withdrawal shares given the amount of      withdrawal shares ready to withdraw.\"},\"removeLiquidity(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows an LP to burn shares and withdraw from the pool.\"},\"setApproval(uint256,address,uint256)\":{\"notice\":\"Allows a user to set an approval for an individual asset with         specific amount.\"},\"setApprovalBridge(uint256,address,uint256,address)\":{\"notice\":\"Allows the compatibility linking contract to forward calls to         set asset approvals.\"},\"setApprovalForAll(address,bool)\":{\"notice\":\"Allows a user to approve an operator to use all of their assets.\"},\"setGovernance(address)\":{\"notice\":\"Allows governance to transfer the governance role.\"},\"setPauser(address,bool)\":{\"notice\":\"Allows governance to change the pauser status of an address.\"},\"sweep(address)\":{\"notice\":\"Transfers the contract's balance of a target token to the fee         collector address.\"},\"target0()\":{\"notice\":\"The target0 address. This is a logic contract that contains all         of the getters for the Hyperdrive pool as well as some stateful         functions.\"},\"target1()\":{\"notice\":\"The target1 address. This is a logic contract that contains         stateful functions.\"},\"target2()\":{\"notice\":\"The target2 address. This is a logic contract that contains         stateful functions.\"},\"target3()\":{\"notice\":\"The target3 address. This is a logic contract that contains         stateful functions.\"},\"target4()\":{\"notice\":\"The target4 address. This is a logic contract that contains all         some stateful functions.\"},\"transferFrom(uint256,address,address,uint256)\":{\"notice\":\"Transfers an amount of assets from the source to the destination.\"},\"transferFromBridge(uint256,address,address,uint256,address)\":{\"notice\":\"Permissioned transfer for the bridge to access, only callable by         the ERC20 linking bridge.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/test/MockERC4626Hyperdrive.sol\":\"MockERC4626Hyperdrive\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/external/Hyperdrive.sol\":{\"keccak256\":\"0xc2189f1a4de63dd1562ac9939de0c141cfd19bab10ac2fac2a02b7fd927ee965\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d37667c5618cad0f45ad3b2cdc551a1154f5072e04d40f3cfba1445f45e40634\",\"dweb:/ipfs/QmaWRpwFzJysShBUzxH4K3aWrUw68HBnmR2T8q6S85tc4Z\"]},\"contracts/src/external/HyperdriveTarget0.sol\":{\"keccak256\":\"0x0908c7dee96e4a426e073dd92b524b6198a4c39a584b013e87921ae1d02530e3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3d0d4b3b851253d4da44cd30070b772e6adabc71a9ec298ff27848a319dedc3f\",\"dweb:/ipfs/QmcejBXXwRKSU4D2utpgrdhGjahL2tcjoxd552Ga5YQ3qk\"]},\"contracts/src/instances/erc4626/ERC4626Base.sol\":{\"keccak256\":\"0xcd961bed2634599e8060353f5219cd4cebff4ce3f29c3131cf69543cb280ac18\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d36f480b1e18086ff23ffead15ebbb42eb6bba82ab8f0357e4abcd14850a2a79\",\"dweb:/ipfs/QmNehYBaGMciT2ZepWZ88yq8GftqdW437RRt6587Hcs1qs\"]},\"contracts/src/instances/erc4626/ERC4626Hyperdrive.sol\":{\"keccak256\":\"0x1e8ed5e6af9e6ea940c6d5e9431b28c698b56207ca380f1ccc0a555132790278\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6aa6f3f295f7be833f832926512418a3c8f0628891b2af06d5e5f138d2de1b4d\",\"dweb:/ipfs/QmQvB7gGmTVVXgZQXjCYWgzCuwhLmtwWBVn72AifZn9zC9\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IERC4626.sol\":{\"keccak256\":\"0x7d99427dc97cc1b469d205de5ced0eb15c6e305d0a7ef73d45fe7ef47ce7231e\",\"license\":\"GPL-2.0-or-later\",\"urls\":[\"bzz-raw://c7726091d2f569ff79057a693324886e2a5558c586684460b51cd20612be59d3\",\"dweb:/ipfs/QmZv6BBe22fZRaC5iYiTuZMD2ZgUXvMBHjwZLikVSoXjDP\"]},\"contracts/src/interfaces/IERC4626Hyperdrive.sol\":{\"keccak256\":\"0xc7f5a5cbfc5ba21f72fc7699d616e2483d4589514a14b6e39f624d0f4d9453e7\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a4d7b144f357e86bfd23c805bb670226aa0c87b078babcd4dd3ec8b8f0b3374f\",\"dweb:/ipfs/QmTYNfB4ABRtPjCVck2uq5wQA8PvxBS45mPkVevc82TTFa\"]},\"contracts/src/interfaces/IERC4626HyperdriveCore.sol\":{\"keccak256\":\"0x94cce9f221023ebf9d4ed4fbafac76d67aee4ee0aa7771c89fcd2d374dfb490a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5ed09d2369f7e9c057d20b0c069f6b9e5242d4c9cd85b3bd49ace51ad16fdba0\",\"dweb:/ipfs/QmNzy2ewTJePinzG4L4SAfxxBySPFJW5Shxb5w4ocBgn5F\"]},\"contracts/src/interfaces/IERC4626HyperdriveRead.sol\":{\"keccak256\":\"0x2039eef677ba37898e8e42dcb321d11d3c87f739122fd03726241252326dea33\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://31eacdd274ac0d6ff2969cb465e0fddb262d223f78f9001d7252bd7370449c73\",\"dweb:/ipfs/QmVNRFMvXk1r8h9pCdSsRhQr5rkj8XgGpNoLwhb6Q6Hzbk\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xbb41b77195a206fee42f1c801d1feeefcb84d1d33fcdb537ba2597a2eaf7bf94\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ad3474360d05cf4002ea0703ff36dba900dc1b17da8077f8bcaf159c0b0861eb\",\"dweb:/ipfs/QmYTehjAXpiuLErAWGfVw1LFn8g2oZ7YnjLNXcmU5ngPBf\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x2836b8e9e2b6e143d4601e0047dfd09232352038a2133670d2f40da5442ff4b3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://64eec4fc70dd4fdf3ad835ef343d56bd4a7c48f2bb0e1f338d9f090e42848660\",\"dweb:/ipfs/Qmeg2aX8QZBggY1tChJQJbkhkbxWFRQPDsZRxUMsGfFg5m\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x1841703b12d5b2ca7dedff94c7dd71a4ad0a0b47ca59ba9de98ea14929fb72e5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c192bfc8bee91341d7e7530d71df2fbaec69d7bf0017e7b318dea276b7f3e171\",\"dweb:/ipfs/QmRWCkdXJ7G2FDo4CpsNuRvDgYWzN9U3LXLzM3YKHs9M4y\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf\",\"dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0xf692b4673daac8627a185253b5fb99c843d9c5a2897be50599030fbd02c21a28\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ec28e35b2523d2f399c79ec5c8e29a4985a0e7a2d1d83c9a834d84dfc44130a2\",\"dweb:/ipfs/QmZLHmSUkDJsnU2FJ4FuaMfo2t6dPimmLaCDrfuxYF8nmD\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xeabffcfcd0fd642caaa2355dccad38269d25fbd4db1b0db43fd97328bf464862\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6970e3db54bfcca6748db01b871fcee4f8d74fea2e66c39e3320232086633355\",\"dweb:/ipfs/QmPq66eyA4DmnU7m1QpMgKGrJ3ebUeN6e8UEuhb64U3BH2\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xc28d1017afe010c20c2fbe9b78e0001eb8b7db16e0fe5038990692227be365ec\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8056e866c6da775c66cefc4e03d8856d75980d8c6eb98e954e1319b2478ad51c\",\"dweb:/ipfs/Qme9n2mBoeFUxf7Tzx4dD3iYt2kDsza6mqPXoUogPnS2hx\"]},\"contracts/src/internal/HyperdriveAdmin.sol\":{\"keccak256\":\"0x5485e3c9934c1e6596903966a19f1fd16d4ef28398e2652825540f981142b9d5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8c9625cfe2cd08ab2f1bc9e017482d6ab1ca740af5a5588ee23717a71bd435dc\",\"dweb:/ipfs/QmXBf4TUMsw8Th1rZRnPdpoVsgdXS82DJJq4UPAYjqMW6q\"]},\"contracts/src/internal/HyperdriveBase.sol\":{\"keccak256\":\"0x64568129b288bbc5ceda7a9f99afaa879353d6a3ccec737cce9c8827a52d3717\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://17f30a5d3b37e7e3aa45dba37efee31223a3d20e52ac25574df66706e69c15cc\",\"dweb:/ipfs/QmWTcWTuWZT7YyTE58QT5QsGfUBfyfx52kivRcAKJTvCv8\"]},\"contracts/src/internal/HyperdriveCheckpoint.sol\":{\"keccak256\":\"0x04d22b2ebf166f1ae6e9645eebeeb077e6eda42c782b685b8432e899b81c7582\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://47f974c18b069ab242498bf15451d1dd377ab0119d9a2f384a3bfc5ce60ff86e\",\"dweb:/ipfs/QmSKARBTcMuqku3Gs9YJfiCNhxZLarjNDty9tdqpYR6qXV\"]},\"contracts/src/internal/HyperdriveLP.sol\":{\"keccak256\":\"0x1b8bff5e5052adc67904952ec46d491ceb15811fd5110c3d30d371feb1b064bf\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://92a409bb02326f5b5890aba50d404fb7a3706e0d32187234445476852ef12ecc\",\"dweb:/ipfs/Qmck8L3UCeKDYsg4McMFdSi1SXQ1yurUMn7tc6sqCM5FMi\"]},\"contracts/src/internal/HyperdriveLong.sol\":{\"keccak256\":\"0xd169b91e1abe9c66e86ef97eeffc1f891a635865f73ca91fcd56c8ed938a6370\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8ece4e4575a34a652447fff0cd3686992d1f709257d54f8574d412e7400eb626\",\"dweb:/ipfs/QmcM6zBD94acnYkVGzFfZFVoG1nK7PoCW7ZnEGuacZPeed\"]},\"contracts/src/internal/HyperdriveMultiToken.sol\":{\"keccak256\":\"0xb93b227f7ab7e92c52a80c51cf6613500a2ff9e84ee44d17dcc4d97aabcdf058\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2cfa21ad93f76d4996db82e36b577907a54f58bb5cbe507c612da37b0efb4b11\",\"dweb:/ipfs/QmfSEiLwJdHhqreFjnoxbghHtiHMDPFGxE4zsPq5KmQFKw\"]},\"contracts/src/internal/HyperdriveShort.sol\":{\"keccak256\":\"0x36a3a99a25e79a948e7fc0a14a37e665eb7a5b2f537ffb7ce2d4cf6f1a9d4982\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://22c6461d8e767dcb2bdfd9137eea7f47ecd53893011a53855d0d6d0df078b07f\",\"dweb:/ipfs/QmbVBZBiMNyV3asHb4NPXkfRFxBeRYHm2kMj82MLwnh75C\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xfeac73551892783afcce85d23fb910baf2ad729d218756f3597ad23e3dcb077f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1f659070705bee17efda43c36f71d22b035752f610624c59238cae559c60530d\",\"dweb:/ipfs/QmTEXNYSWa8w3wY2TWzDPNZXxdThMFEbrtRwcQHfyN2CJb\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0xc2e36474285afd5b98999d648305f077a05b0e159dd63ef5f44f29cd42eb68c2\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fbf8aac982e8485dce3f8c7f85b9bbbd46b41d8d0d3deebe1fc927799de60c0b\",\"dweb:/ipfs/QmbUJsi5cqS4M4sVcJ8cDWvbMRSqYzfjRAp8gaP1v2dtst\"]},\"contracts/src/libraries/Errors.sol\":{\"keccak256\":\"0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88\",\"dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0xdcf0c77bc29a0b5b2ce06cccfa6f5e936128e5c0f14a5636bfe21faf95c515bf\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://088172c3f97db68914cdef042d942b0d0c585cce77d004625bfa62a72ac1e95d\",\"dweb:/ipfs/Qmewa9GJtYxBw4fAx4HZJaNuUCKEoQT4c5nmhPyXxVEwwq\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0x94662a356f9ab292c0935ff4c29f9b826a17176eb98b472efed7afbfe4d5d744\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://794c5605f8f0716b871a8747fea516d26fd73f0add45a944ac4034de96c60c7a\",\"dweb:/ipfs/QmYSsquDzxupHSwWMsjjooxNxuzQ29ezczFsP2VQ5PYYve\"]},\"contracts/src/libraries/LPMath.sol\":{\"keccak256\":\"0x8d9491ad62e48c7148389a72feca73a388076e3386d7ddc6788193be359e1266\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d340b65b76fc638d119d7d1d6f38fa044c34fc9297dc0c1627c9820218b2e244\",\"dweb:/ipfs/QmZo3nPVg3j2Ga8UXRZFQyTq7RuYuY6F2tYynnVUP4SbDY\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0x390a002b83e7ed8a99d4ca9b3ea514b2080c237911a3a3d0fa2ad4522a09d60b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://51ea972cf6d3c79ea6b93c63c85fbba2bd234e71704715a1d9bd897da9d6fcb1\",\"dweb:/ipfs/QmXEGDrLyeAYMZiDVNynVzRzAYgnspcdLfkMeGr81DmJpL\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x76f69d3104f3f97d67289512325306d7ea2c7b29a787eeef93ffc47e8a80f346\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6c8df31a46b4287c23c67e0157e6f6a4877608ed3fb1919a9c07f5bd9b81d7f6\",\"dweb:/ipfs/QmPua6efzJGnC7NarnPojk9yF2geqenUaXUNRmPVHJdXWk\"]},\"contracts/test/MockERC4626Hyperdrive.sol\":{\"keccak256\":\"0xd214ab2a5d329f52a8f2455e776623771dc7fdbb6b8f89111fd59b37ae9a6a74\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ab45f5330075acbb091d697e2dd87438d3bf8900cb59bb976fa6f00255e85fd9\",\"dweb:/ipfs/Qma5mTAbxzTPxLVTi3fmMPV9QhnfHquyHgd979PAA9z2gc\"]},\"lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol\":{\"keccak256\":\"0x60c65f701957fdd6faea1acb0bb45825791d473693ed9ecb34726fdfaa849dd7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ea290300e0efc4d901244949dc4d877fd46e6c5e43dc2b26620e8efab3ab803f\",\"dweb:/ipfs/QmcLLJppxKeJWqHxE2CUkcfhuRTgHSn8J4kijcLa5MYhSt\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0xc3e1fa9d1987f8d349dfb4d6fe93bf2ca014b52ba335cfac30bfe71e357e6f80\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c5703ccdeb7b1d685e375ed719117e9edf2ab4bc544f24f23b0d50ec82257229\",\"dweb:/ipfs/QmTdwkbQq7owpCiyuzE7eh5LrD2ddrBCZ5WHVsWPi1RrTS\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c\",\"dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850\",\"dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x6008dabfe393240d73d7dd7688033f72740d570aa422254d29a7dce8568f3aff\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f5196ec75139918c6c7bb4251b36395e668f1fa6d206beba7e7520e74913940d\",\"dweb:/ipfs/QmSyqjksXxmm2mCG6qRd1yuwLykypkSVBbnBnGqJRcuJMi\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x37bb49513c49c87c4642a891b13b63571bc87013dde806617aa1efb54605f386\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b3036b3a83b7c48f96641f2a9002b9f2dcb6a5958dd670894ada21ae8229b3d0\",\"dweb:/ipfs/QmUNfSBdoVtjhETaUJCYcaC7pTMgbhht926tJ2uXJbiVd3\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245\",\"dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y\"]},\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":{\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12\",\"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF\"]},\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02\",\"dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd\"]}},\"version\":1}";
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
                readonly inputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "fallback";
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
                            readonly _contribution: "The amount to supply.";
                            readonly _maxApr: "The maximum APR at which the LP is willing to supply.";
                            readonly _minApr: "The minimum APR at which the LP is willing to supply.";
                            readonly _minLpSharePrice: "The minimum LP share price the LP is willing        to accept for their shares. LPs incur negative slippage when        adding liquidity if there is a net curve position in the market,        so this allows LPs to protect themselves from high levels of        slippage.";
                            readonly _options: "The options that configure how the operation is settled.";
                        };
                        readonly returns: {
                            readonly _0: "The number of LP tokens created.";
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
                            readonly _maturityTime: "The maturity time of the short.";
                            readonly _minOutput: "The minimum amount of base the trader will accept.";
                            readonly _options: "The options that configure how the trade is settled.";
                        };
                        readonly returns: {
                            readonly _0: "The amount of underlying the user receives.";
                        };
                    };
                    readonly "closeShort(uint256,uint256,uint256,(address,bool,bytes))": {
                        readonly params: {
                            readonly _bondAmount: "The amount of shorts to close.";
                            readonly _maturityTime: "The maturity time of the short.";
                            readonly _minOutput: "The minimum output of this trade.";
                            readonly _options: "The options that configure how the trade is settled.";
                        };
                        readonly returns: {
                            readonly _0: "The amount of base tokens produced by closing this short.";
                        };
                    };
                    readonly "collectGovernanceFee((address,bool,bytes))": {
                        readonly params: {
                            readonly _options: "The options that configure how the fees are settled.";
                        };
                        readonly returns: {
                            readonly _0: "The amount collected in units specified by _options.";
                        };
                    };
                    readonly "initialize(uint256,uint256,(address,bool,bytes))": {
                        readonly params: {
                            readonly _apr: "The target APR.";
                            readonly _contribution: "The amount to supply.";
                            readonly _options: "The options that configure how the operation is settled.";
                        };
                        readonly returns: {
                            readonly _0: "The initial number of LP shares created.";
                        };
                    };
                    readonly "openLong(uint256,uint256,uint256,(address,bool,bytes))": {
                        readonly params: {
                            readonly _amount: "The amount to open a long with.";
                            readonly _minOutput: "The minimum number of bonds to receive.";
                            readonly _minVaultSharePrice: "The minimum vault share price at which to        open the long. This allows traders to protect themselves from        opening a long in a checkpoint where negative interest has        accrued.";
                            readonly _options: "The options that configure how the trade is settled.";
                        };
                        readonly returns: {
                            readonly _0: "The maturity time of the bonds.";
                            readonly _1: "The amount of bonds the user received";
                        };
                    };
                    readonly "openShort(uint256,uint256,uint256,(address,bool,bytes))": {
                        readonly params: {
                            readonly _bondAmount: "The amount of bonds to short.";
                            readonly _maxDeposit: "The most the user expects to deposit for this trade.";
                            readonly _minVaultSharePrice: "The minimum vault share price at which to open        the short. This allows traders to protect themselves from opening        a short in a checkpoint where negative interest has accrued.";
                            readonly _options: "The options that configure how the trade is settled.";
                        };
                        readonly returns: {
                            readonly _0: "The maturity time of the short.";
                            readonly _1: "The amount the user deposited for this trade.";
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
                            readonly _minOutputPerShare: "The minimum amount of base the LP expects to        receive for each withdrawal share that is burned.";
                            readonly _options: "The options that configure how the operation is settled.";
                            readonly _withdrawalShares: "The withdrawal shares to redeem.";
                        };
                        readonly returns: {
                            readonly _0: "The amount the LP received.";
                            readonly _1: "The amount of withdrawal shares that         were redeemed.";
                        };
                    };
                    readonly "removeLiquidity(uint256,uint256,(address,bool,bytes))": {
                        readonly params: {
                            readonly _lpShares: "The LP shares to burn.";
                            readonly _minOutputPerShare: "The minimum amount of base per LP share that        was redeemed.";
                            readonly _options: "The options that configure how the operation is settled.";
                        };
                        readonly returns: {
                            readonly _0: "The amount the LP removing liquidity receives. The         LP receives a proportional amount of the pool's idle capital";
                            readonly _1: "The base that the LP receives buys out some of         their LP shares, but it may not be sufficient to fully buy the         LP out. In this case, the LP receives withdrawal shares equal         in value to the present value they are owed. As idle capital         becomes available, the pool will buy back these shares.";
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
                    readonly "DOMAIN_SEPARATOR()": {
                        readonly notice: "This contract's EIP712 domain separator.";
                    };
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
                        readonly notice: "Redeems withdrawal shares by giving the LP a pro-rata amount of the      withdrawal pool's proceeds. This function redeems the maximum      amount of the specified withdrawal shares given the amount of      withdrawal shares ready to withdraw.";
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
                    readonly "setGovernance(address)": {
                        readonly notice: "Allows governance to transfer the governance role.";
                    };
                    readonly "setPauser(address,bool)": {
                        readonly notice: "Allows governance to change the pauser status of an address.";
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
                        readonly notice: "The target4 address. This is a logic contract that contains all         some stateful functions.";
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
                readonly keccak256: "0xc2189f1a4de63dd1562ac9939de0c141cfd19bab10ac2fac2a02b7fd927ee965";
                readonly urls: readonly ["bzz-raw://d37667c5618cad0f45ad3b2cdc551a1154f5072e04d40f3cfba1445f45e40634", "dweb:/ipfs/QmaWRpwFzJysShBUzxH4K3aWrUw68HBnmR2T8q6S85tc4Z"];
                readonly license: "Apache-2.0";
            };
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
            readonly "contracts/src/instances/erc4626/ERC4626Hyperdrive.sol": {
                readonly keccak256: "0x1e8ed5e6af9e6ea940c6d5e9431b28c698b56207ca380f1ccc0a555132790278";
                readonly urls: readonly ["bzz-raw://6aa6f3f295f7be833f832926512418a3c8f0628891b2af06d5e5f138d2de1b4d", "dweb:/ipfs/QmQvB7gGmTVVXgZQXjCYWgzCuwhLmtwWBVn72AifZn9zC9"];
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
        readonly id: 20067;
        readonly exportedSymbols: {
            readonly ERC4626Hyperdrive: readonly [5791];
            readonly IERC4626: readonly [7076];
            readonly IHyperdrive: readonly [7480];
            readonly MockERC4626Hyperdrive: readonly [20066];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:1604:84";
        readonly nodes: readonly [{
            readonly id: 19981;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:23:84";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 19983;
            readonly nodeType: "ImportDirective";
            readonly src: "64:90:84";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/instances/erc4626/ERC4626Hyperdrive.sol";
            readonly file: "contracts/src/instances/erc4626/ERC4626Hyperdrive.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 20067;
            readonly sourceUnit: 5792;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 19982;
                    readonly name: "ERC4626Hyperdrive";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 5791;
                    readonly src: "73:17:84";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 19985;
            readonly nodeType: "ImportDirective";
            readonly src: "155:65:84";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IERC4626.sol";
            readonly file: "contracts/src/interfaces/IERC4626.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 20067;
            readonly sourceUnit: 7077;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 19984;
                    readonly name: "IERC4626";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 7076;
                    readonly src: "164:8:84";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 19987;
            readonly nodeType: "ImportDirective";
            readonly src: "221:71:84";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IHyperdrive.sol";
            readonly file: "contracts/src/interfaces/IHyperdrive.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 20067;
            readonly sourceUnit: 7481;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 19986;
                    readonly name: "IHyperdrive";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 7480;
                    readonly src: "230:11:84";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 20066;
            readonly nodeType: "ContractDefinition";
            readonly src: "447:1195:84";
            readonly nodes: readonly [{
                readonly id: 20018;
                readonly nodeType: "FunctionDefinition";
                readonly src: "505:411:84";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 20017;
                    readonly nodeType: "Block";
                    readonly src: "914:2:84";
                    readonly nodes: readonly [];
                    readonly statements: readonly [];
                };
                readonly implemented: true;
                readonly kind: "constructor";
                readonly modifiers: readonly [{
                    readonly arguments: readonly [{
                        readonly id: 20008;
                        readonly name: "_config";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 19992;
                        readonly src: "763:7:84";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$7280_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig memory";
                        };
                    }, {
                        readonly id: 20009;
                        readonly name: "_target0";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 19994;
                        readonly src: "784:8:84";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    }, {
                        readonly id: 20010;
                        readonly name: "_target1";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 19996;
                        readonly src: "806:8:84";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    }, {
                        readonly id: 20011;
                        readonly name: "_target2";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 19998;
                        readonly src: "828:8:84";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    }, {
                        readonly id: 20012;
                        readonly name: "_target3";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 20000;
                        readonly src: "850:8:84";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    }, {
                        readonly id: 20013;
                        readonly name: "_target4";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 20002;
                        readonly src: "872:8:84";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    }, {
                        readonly id: 20014;
                        readonly name: "_pool";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 20005;
                        readonly src: "894:5:84";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_IERC4626_$7076";
                            readonly typeString: "contract IERC4626";
                        };
                    }];
                    readonly id: 20015;
                    readonly kind: "baseConstructorSpecifier";
                    readonly modifierName: {
                        readonly id: 20007;
                        readonly name: "ERC4626Hyperdrive";
                        readonly nameLocations: readonly ["732:17:84"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 5791;
                        readonly src: "732:17:84";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "732:177:84";
                }];
                readonly name: "";
                readonly nameLocation: "-1:-1:-1";
                readonly parameters: {
                    readonly id: 20006;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 19992;
                        readonly mutability: "mutable";
                        readonly name: "_config";
                        readonly nameLocation: "556:7:84";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 20018;
                        readonly src: "526:37:84";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$7280_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig";
                        };
                        readonly typeName: {
                            readonly id: 19991;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 19990;
                                readonly name: "IHyperdrive.PoolConfig";
                                readonly nameLocations: readonly ["526:11:84", "538:10:84"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 7280;
                                readonly src: "526:22:84";
                            };
                            readonly referencedDeclaration: 7280;
                            readonly src: "526:22:84";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolConfig_$7280_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19994;
                        readonly mutability: "mutable";
                        readonly name: "_target0";
                        readonly nameLocation: "581:8:84";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 20018;
                        readonly src: "573:16:84";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 19993;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "573:7:84";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19996;
                        readonly mutability: "mutable";
                        readonly name: "_target1";
                        readonly nameLocation: "607:8:84";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 20018;
                        readonly src: "599:16:84";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 19995;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "599:7:84";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 19998;
                        readonly mutability: "mutable";
                        readonly name: "_target2";
                        readonly nameLocation: "633:8:84";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 20018;
                        readonly src: "625:16:84";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 19997;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "625:7:84";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 20000;
                        readonly mutability: "mutable";
                        readonly name: "_target3";
                        readonly nameLocation: "659:8:84";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 20018;
                        readonly src: "651:16:84";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 19999;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "651:7:84";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 20002;
                        readonly mutability: "mutable";
                        readonly name: "_target4";
                        readonly nameLocation: "685:8:84";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 20018;
                        readonly src: "677:16:84";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 20001;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "677:7:84";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 20005;
                        readonly mutability: "mutable";
                        readonly name: "_pool";
                        readonly nameLocation: "712:5:84";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 20018;
                        readonly src: "703:14:84";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_IERC4626_$7076";
                            readonly typeString: "contract IERC4626";
                        };
                        readonly typeName: {
                            readonly id: 20004;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 20003;
                                readonly name: "IERC4626";
                                readonly nameLocations: readonly ["703:8:84"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 7076;
                                readonly src: "703:8:84";
                            };
                            readonly referencedDeclaration: 7076;
                            readonly src: "703:8:84";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IERC4626_$7076";
                                readonly typeString: "contract IERC4626";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "516:207:84";
                };
                readonly returnParameters: {
                    readonly id: 20016;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "914:0:84";
                };
                readonly scope: 20066;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "public";
            }, {
                readonly id: 20036;
                readonly nodeType: "FunctionDefinition";
                readonly src: "922:209:84";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 20035;
                    readonly nodeType: "Block";
                    readonly src: "1080:51:84";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 20031;
                                readonly name: "_amount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 20020;
                                readonly src: "1106:7:84";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 20032;
                                readonly name: "_options";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 20023;
                                readonly src: "1115:8:84";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Options_$7336_calldata_ptr";
                                    readonly typeString: "struct IHyperdrive.Options calldata";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_struct$_Options_$7336_calldata_ptr";
                                    readonly typeString: "struct IHyperdrive.Options calldata";
                                }];
                                readonly id: 20030;
                                readonly name: "_deposit";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [5578];
                                readonly referencedDeclaration: 5578;
                                readonly src: "1097:8:84";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_uint256_$_t_struct$_Options_$7336_calldata_ptr_$returns$_t_uint256_$_t_uint256_$";
                                    readonly typeString: "function (uint256,struct IHyperdrive.Options calldata) returns (uint256,uint256)";
                                };
                            };
                            readonly id: 20033;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1097:27:84";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$";
                                readonly typeString: "tuple(uint256,uint256)";
                            };
                        };
                        readonly functionReturnParameters: 20029;
                        readonly id: 20034;
                        readonly nodeType: "Return";
                        readonly src: "1090:34:84";
                    }];
                };
                readonly functionSelector: "829555d4";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "deposit";
                readonly nameLocation: "931:7:84";
                readonly parameters: {
                    readonly id: 20024;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 20020;
                        readonly mutability: "mutable";
                        readonly name: "_amount";
                        readonly nameLocation: "956:7:84";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 20036;
                        readonly src: "948:15:84";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 20019;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "948:7:84";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 20023;
                        readonly mutability: "mutable";
                        readonly name: "_options";
                        readonly nameLocation: "1002:8:84";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 20036;
                        readonly src: "973:37:84";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_Options_$7336_calldata_ptr";
                            readonly typeString: "struct IHyperdrive.Options";
                        };
                        readonly typeName: {
                            readonly id: 20022;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 20021;
                                readonly name: "IHyperdrive.Options";
                                readonly nameLocations: readonly ["973:11:84", "985:7:84"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 7336;
                                readonly src: "973:19:84";
                            };
                            readonly referencedDeclaration: 7336;
                            readonly src: "973:19:84";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Options_$7336_storage_ptr";
                                readonly typeString: "struct IHyperdrive.Options";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "938:78:84";
                };
                readonly returnParameters: {
                    readonly id: 20029;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 20026;
                        readonly mutability: "mutable";
                        readonly name: "sharesMinted";
                        readonly nameLocation: "1041:12:84";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 20036;
                        readonly src: "1033:20:84";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 20025;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1033:7:84";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 20028;
                        readonly mutability: "mutable";
                        readonly name: "vaultSharePrice";
                        readonly nameLocation: "1063:15:84";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 20036;
                        readonly src: "1055:23:84";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 20027;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1055:7:84";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1032:47:84";
                };
                readonly scope: 20066;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "public";
            }, {
                readonly id: 20055;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1137:231:84";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 20054;
                    readonly nodeType: "Block";
                    readonly src: "1303:65:84";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 20049;
                                readonly name: "_shares";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 20038;
                                readonly src: "1330:7:84";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 20050;
                                readonly name: "_sharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 20040;
                                readonly src: "1339:11:84";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 20051;
                                readonly name: "_options";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 20043;
                                readonly src: "1352:8:84";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Options_$7336_calldata_ptr";
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
                                    readonly typeIdentifier: "t_struct$_Options_$7336_calldata_ptr";
                                    readonly typeString: "struct IHyperdrive.Options calldata";
                                }];
                                readonly id: 20048;
                                readonly name: "_withdraw";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [5648];
                                readonly referencedDeclaration: 5648;
                                readonly src: "1320:9:84";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_struct$_Options_$7336_calldata_ptr_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,struct IHyperdrive.Options calldata) returns (uint256)";
                                };
                            };
                            readonly id: 20052;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1320:41:84";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 20047;
                        readonly id: 20053;
                        readonly nodeType: "Return";
                        readonly src: "1313:48:84";
                    }];
                };
                readonly functionSelector: "a3144531";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "withdraw";
                readonly nameLocation: "1146:8:84";
                readonly parameters: {
                    readonly id: 20044;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 20038;
                        readonly mutability: "mutable";
                        readonly name: "_shares";
                        readonly nameLocation: "1172:7:84";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 20055;
                        readonly src: "1164:15:84";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 20037;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1164:7:84";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 20040;
                        readonly mutability: "mutable";
                        readonly name: "_sharePrice";
                        readonly nameLocation: "1197:11:84";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 20055;
                        readonly src: "1189:19:84";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 20039;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1189:7:84";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 20043;
                        readonly mutability: "mutable";
                        readonly name: "_options";
                        readonly nameLocation: "1247:8:84";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 20055;
                        readonly src: "1218:37:84";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_Options_$7336_calldata_ptr";
                            readonly typeString: "struct IHyperdrive.Options";
                        };
                        readonly typeName: {
                            readonly id: 20042;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 20041;
                                readonly name: "IHyperdrive.Options";
                                readonly nameLocations: readonly ["1218:11:84", "1230:7:84"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 7336;
                                readonly src: "1218:19:84";
                            };
                            readonly referencedDeclaration: 7336;
                            readonly src: "1218:19:84";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Options_$7336_storage_ptr";
                                readonly typeString: "struct IHyperdrive.Options";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1154:107:84";
                };
                readonly returnParameters: {
                    readonly id: 20047;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 20046;
                        readonly mutability: "mutable";
                        readonly name: "amountWithdrawn";
                        readonly nameLocation: "1286:15:84";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 20055;
                        readonly src: "1278:23:84";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 20045;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1278:7:84";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1277:25:84";
                };
                readonly scope: 20066;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "public";
            }, {
                readonly id: 20065;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1491:149:84";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 20064;
                    readonly nodeType: "Block";
                    readonly src: "1595:45:84";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [];
                            readonly expression: {
                                readonly argumentTypes: readonly [];
                                readonly id: 20061;
                                readonly name: "_pricePerVaultShare";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [5661];
                                readonly referencedDeclaration: 5661;
                                readonly src: "1612:19:84";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$__$returns$_t_uint256_$";
                                    readonly typeString: "function () view returns (uint256)";
                                };
                            };
                            readonly id: 20062;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1612:21:84";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 20060;
                        readonly id: 20063;
                        readonly nodeType: "Return";
                        readonly src: "1605:28:84";
                    }];
                };
                readonly documentation: {
                    readonly id: 20056;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1374:112:84";
                    readonly text: "@notice Loads the share price from the yield source\n @return vaultSharePrice The current share price.";
                };
                readonly functionSelector: "daaa35fe";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "pricePerVaultShare";
                readonly nameLocation: "1500:18:84";
                readonly parameters: {
                    readonly id: 20057;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1518:2:84";
                };
                readonly returnParameters: {
                    readonly id: 20060;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 20059;
                        readonly mutability: "mutable";
                        readonly name: "vaultSharePrice";
                        readonly nameLocation: "1574:15:84";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 20065;
                        readonly src: "1566:23:84";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 20058;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1566:7:84";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1565:25:84";
                };
                readonly scope: 20066;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "public";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 19988;
                    readonly name: "ERC4626Hyperdrive";
                    readonly nameLocations: readonly ["481:17:84"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 5791;
                    readonly src: "481:17:84";
                };
                readonly id: 19989;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "481:17:84";
            }];
            readonly canonicalName: "MockERC4626Hyperdrive";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [20066, 5791, 5679, 2383, 10186, 13270, 11906, 11031, 12387, 8790, 9728, 13478, 67358, 7924, 8482, 7107, 7648, 8448];
            readonly name: "MockERC4626Hyperdrive";
            readonly nameLocation: "456:21:84";
            readonly scope: 20067;
            readonly usedErrors: readonly [7369, 7437, 66733, 67014, 67019, 67022, 67303];
            readonly usedEvents: readonly [7773, 7788, 7805, 7818, 7835, 7854, 7871, 7888, 7901, 7908, 7913, 7918, 7923, 8463, 8472, 8481];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 84;
};
//# sourceMappingURL=MockERC4626Hyperdrive.d.ts.map