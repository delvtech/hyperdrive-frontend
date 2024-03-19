export declare const Hyperdrive: {
    readonly abi: readonly [{
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
        readonly name: "ReentrancyGuardReentrantCall";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "UnexpectedSuccess";
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
        readonly "PERMIT_TYPEHASH()": "30adf81f";
        readonly "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": "4c2ac1d9";
        readonly "batchTransferFrom(address,address,uint256[],uint256[])": "17fad7fc";
        readonly "checkpoint(uint256)": "ed64bab2";
        readonly "closeLong(uint256,uint256,uint256,(address,bool,bytes))": "ded06231";
        readonly "closeShort(uint256,uint256,uint256,(address,bool,bytes))": "29b23fc1";
        readonly "collectGovernanceFee((address,bool,bytes))": "3e691db9";
        readonly "domainSeparator()": "f698da25";
        readonly "initialize(uint256,uint256,(address,bool,bytes))": "77d05ff4";
        readonly "openLong(uint256,uint256,uint256,(address,bool,bytes))": "cba2e58d";
        readonly "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070";
        readonly "pause(bool)": "02329a29";
        readonly "permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)": "9032c726";
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
    };
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnexpectedSuccess\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"basePayment\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fees\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newFeeCollector\",\"type\":\"address\"}],\"name\":\"FeeCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseProceeds\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"}],\"name\":\"PauseStatusUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"name\":\"Sweep\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newSweepCollector\",\"type\":\"address\"}],\"name\":\"SweepCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"stateMutability\":\"nonpayable\",\"type\":\"fallback\"},{\"inputs\":[],\"name\":\"PERMIT_TYPEHASH\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"addLiquidity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"name\":\"batchTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"checkpoint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"closeLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"closeShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"collectGovernanceFee\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"domainSeparator\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"initialize\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"openLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"openShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"name\":\"pause\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_approved\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permitForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"redeemWithdrawalShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"removeLiquidity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"setApproval\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"setApprovalBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"setFeeCollector\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"setGovernance\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"name\":\"setPauser\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"setSweepCollector\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"sweep\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target0\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target1\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target2\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target3\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target4\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"transferFromBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"errors\":{\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}]},\"kind\":\"dev\",\"methods\":{\"addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_contribution\":\"The amount of capital to supply. The units of this        quantity are either base or vault shares, depending on the value        of `_options.asBase`.\",\"_maxApr\":\"The maximum APR at which the LP is willing to supply.\",\"_minApr\":\"The minimum APR at which the LP is willing to supply.\",\"_minLpSharePrice\":\"The minimum LP share price the LP is willing        to accept for their shares. LPs incur negative slippage when        adding liquidity if there is a net curve position in the market,        so this allows LPs to protect themselves from high levels of        slippage. The units of this quantity are either base or vault        shares, depending on the value of `_options.asBase`.\",\"_options\":\"The options that configure how the operation is settled.\"},\"returns\":{\"_0\":\"The LP shares received by the LP.\"}},\"batchTransferFrom(address,address,uint256[],uint256[])\":{\"params\":{\"from\":\"The source account.\",\"ids\":\"The array of token ids of the asset to transfer.\",\"to\":\"The destination account.\",\"values\":\"The amount of each token to transfer.\"}},\"checkpoint(uint256)\":{\"params\":{\"_checkpointTime\":\"The time of the checkpoint to create.\"}},\"closeLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_bondAmount\":\"The amount of longs to close.\",\"_maturityTime\":\"The maturity time of the long.\",\"_minOutput\":\"The minimum proceeds the trader will accept. The units        of this quantity are either base or vault shares, depending on        the value of `_options.asBase`.\",\"_options\":\"The options that configure how the trade is settled.\"},\"returns\":{\"_0\":\"The proceeds the user receives. The units of this         quantity are either base or vault shares, depending on the value         of `_options.asBase`.\"}},\"closeShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_bondAmount\":\"The amount of shorts to close.\",\"_maturityTime\":\"The maturity time of the short.\",\"_minOutput\":\"The minimum output of this trade. The units of this        quantity are either base or vault shares, depending on the value        of `_options.asBase`.\",\"_options\":\"The options that configure how the trade is settled.\"},\"returns\":{\"_0\":\"The proceeds of closing this short. The units of this         quantity are either base or vault shares, depending on the value         of `_options.asBase`.\"}},\"collectGovernanceFee((address,bool,bytes))\":{\"params\":{\"_options\":\"The options that configure how the fees are settled.\"},\"returns\":{\"_0\":\"The governance fees collected. The units of this         quantity are either base or vault shares, depending on the value         of `_options.asBase`.\"}},\"constructor\":{\"params\":{\"_config\":\"The configuration of the pool.\",\"_target0\":\"The target0 address.\",\"_target1\":\"The target1 address.\",\"_target2\":\"The target2 address.\",\"_target3\":\"The target3 address.\",\"_target4\":\"The target4 address.\"}},\"domainSeparator()\":{\"returns\":{\"_0\":\"The EIP712 domain separator.\"}},\"initialize(uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_apr\":\"The target APR.\",\"_contribution\":\"The amount of capital to supply. The units of this        quantity are either base or vault shares, depending on the value        of `_options.asBase`.\",\"_options\":\"The options that configure how the operation is settled.\"},\"returns\":{\"_0\":\"The initial number of LP shares created.\"}},\"openLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_amount\":\"The amount of capital provided to open the long. The        units of this quantity are either base or vault shares, depending        on the value of `_options.asBase`.\",\"_minOutput\":\"The minimum number of bonds to receive.\",\"_minVaultSharePrice\":\"The minimum vault share price at which to        open the long. This allows traders to protect themselves from        opening a long in a checkpoint where negative interest has        accrued.\",\"_options\":\"The options that configure how the trade is settled.\"},\"returns\":{\"_0\":\"The maturity time of the bonds.\",\"_1\":\"The amount of bonds the user received.\"}},\"openShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_bondAmount\":\"The amount of bonds to short.\",\"_maxDeposit\":\"The most the user expects to deposit for this trade.        The units of this quantity are either base or vault shares,        depending on the value of `_options.asBase`.\",\"_minVaultSharePrice\":\"The minimum vault share price at which to open        the short. This allows traders to protect themselves from opening        a short in a checkpoint where negative interest has accrued.\",\"_options\":\"The options that configure how the trade is settled.\"},\"returns\":{\"_0\":\"The maturity time of the short.\",\"_1\":\"The amount the user deposited for this trade. The units         of this quantity are either base or vault shares, depending on         the value of `_options.asBase`.\"}},\"pause(bool)\":{\"params\":{\"_status\":\"True to pause all deposits and false to unpause them.\"}},\"permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"details\":\"The signature for this function follows EIP 712 standard and should      be generated with the eth_signTypedData JSON RPC call instead of      the eth_sign JSON RPC call. If using out of date parity signing      libraries the v component may need to be adjusted. Also it is very      rare but possible for v to be other values, those values are not      supported.\",\"params\":{\"_approved\":\"A boolean of the approval status to set to.\",\"deadline\":\"The timestamp which the signature must be submitted by        to be valid.\",\"owner\":\"The owner of the account which is having the new approval set.\",\"r\":\"The r component of the ECDSA signature.\",\"s\":\"The s component of the ECDSA signature.\",\"spender\":\"The address which will be allowed to spend owner's tokens.\",\"v\":\"Extra ECDSA data which allows public key recovery from        signature assumed to be 27 or 28.\"}},\"redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_minOutputPerShare\":\"The minimum amount the LP expects to        receive for each withdrawal share that is burned. The units of        this quantity are either base or vault shares, depending on the        value of `_options.asBase`.\",\"_options\":\"The options that configure how the operation is settled.\",\"_withdrawalShares\":\"The withdrawal shares to redeem.\"},\"returns\":{\"_0\":\"The amount the LP received. The units of this quantity         are either base or vault shares, depending on the value of         `_options.asBase`.\",\"_1\":\"The amount of withdrawal shares that         were redeemed.\"}},\"removeLiquidity(uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_lpShares\":\"The LP shares to burn.\",\"_minOutputPerShare\":\"The minimum amount the LP expects to receive        for each withdrawal share that is burned. The units of this        quantity are either base or vault shares, depending on the value        of `_options.asBase`.\",\"_options\":\"The options that configure how the operation is settled.\"},\"returns\":{\"_0\":\"The amount the LP removing liquidity receives. The         units of this quantity are either base or vault shares,         depending on the value of `_options.asBase`.\",\"_1\":\"The base that the LP receives buys out some of         their LP shares, but it may not be sufficient to fully buy the         LP out. In this case, the LP receives withdrawal shares equal in         value to the present value they are owed. As idle capital         becomes available, the pool will buy back these shares.\"}},\"setApproval(uint256,address,uint256)\":{\"params\":{\"amount\":\"The max tokens the approved person can use, setting to        uint256.max will cause the value to never decrement (saving gas        on transfer).\",\"operator\":\"The address who will be able to use the tokens.\",\"tokenID\":\"The asset to approve the use of.\"}},\"setApprovalBridge(uint256,address,uint256,address)\":{\"params\":{\"amount\":\"The max tokens the approved person can use, setting to        uint256.max will cause the value to never decrement [saving gas        on transfer].\",\"caller\":\"The eth address which called the linking contract.\",\"operator\":\"The address who will be able to use the tokens.\",\"tokenID\":\"The asset to approve the use of.\"}},\"setApprovalForAll(address,bool)\":{\"params\":{\"approved\":\"True to approve, false to remove approval.\",\"operator\":\"The eth address which can access the caller's assets.\"}},\"setFeeCollector(address)\":{\"params\":{\"_who\":\"The new fee collector address.\"}},\"setGovernance(address)\":{\"params\":{\"_who\":\"The new governance address.\"}},\"setPauser(address,bool)\":{\"params\":{\"status\":\"The new pauser status.\",\"who\":\"The address to change.\"}},\"setSweepCollector(address)\":{\"params\":{\"_who\":\"The new sweep collector address.\"}},\"sweep(address)\":{\"details\":\"WARN: It is unlikely but possible that there is a selector overlap      with 'transferFrom'. Any integrating contracts should be checked      for that, as it may result in an unexpected call from this address.\",\"params\":{\"_target\":\"The target token to sweep.\"}},\"transferFrom(uint256,address,address,uint256)\":{\"params\":{\"amount\":\"The amount of token to move.\",\"from\":\"The address whose balance will be reduced.\",\"to\":\"The address whose balance will be increased.\",\"tokenID\":\"The token identifier.\"}},\"transferFromBridge(uint256,address,address,uint256,address)\":{\"params\":{\"amount\":\"The amount of token to move.\",\"caller\":\"The msg.sender or the caller of the ERC20Forwarder.\",\"from\":\"The address whose balance will be reduced.\",\"to\":\"The address whose balance will be increased.\",\"tokenID\":\"The token identifier.\"}}},\"title\":\"Hyperdrive\",\"version\":1},\"userdoc\":{\"errors\":{\"UnexpectedSuccess()\":[{\"notice\":\"Thrown when a read-only call succeeds. The proxy architecture         uses a force-revert delegatecall pattern to ensure that calls         that are intended to be read-only are actually read-only.\"}]},\"events\":{\"AddLiquidity(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when an LP adds liquidity to the Hyperdrive pool.\"},\"Approval(address,address,uint256)\":{\"notice\":\"Emitted when an account changes the allowance for another         account.\"},\"ApprovalForAll(address,address,bool)\":{\"notice\":\"Emitted when an account changes the approval for all of its         tokens.\"},\"CloseLong(address,address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is closed.\"},\"CloseShort(address,address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is closed.\"},\"CollectGovernanceFee(address,uint256)\":{\"notice\":\"Emitted when governance fees are collected.\"},\"CreateCheckpoint(uint256,uint256,uint256,uint256,uint256)\":{\"notice\":\"Emitted when a checkpoint is created.\"},\"FeeCollectorUpdated(address)\":{\"notice\":\"Emitted when the fee collector address is updated.\"},\"GovernanceUpdated(address)\":{\"notice\":\"Emitted when the governance address is updated.\"},\"Initialize(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when the Hyperdrive pool is initialized.\"},\"OpenLong(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is opened.\"},\"OpenShort(address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is opened.\"},\"PauseStatusUpdated(bool)\":{\"notice\":\"Emitted when the pause status is updated.\"},\"PauserUpdated(address,bool)\":{\"notice\":\"Emitted when a pauser is updated.\"},\"RedeemWithdrawalShares(address,address,uint256,uint256,uint256,bool)\":{\"notice\":\"Emitted when an LP redeems withdrawal shares.\"},\"RemoveLiquidity(address,address,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when an LP removes liquidity from the Hyperdrive pool.\"},\"Sweep(address,address)\":{\"notice\":\"Emitted when tokens are swept.\"},\"SweepCollectorUpdated(address)\":{\"notice\":\"Emitted when the sweep collector address is updated.\"},\"TransferSingle(address,address,address,uint256,uint256)\":{\"notice\":\"Emitted when tokens are transferred from one account to another.\"}},\"kind\":\"user\",\"methods\":{\"PERMIT_TYPEHASH()\":{\"notice\":\"The typehash used to calculate the EIP712 hash for `permitForAll`.\"},\"addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows LPs to supply liquidity for LP shares.\"},\"batchTransferFrom(address,address,uint256[],uint256[])\":{\"notice\":\"Transfers several assets from one account to another.\"},\"checkpoint(uint256)\":{\"notice\":\"Attempts to mint a checkpoint with the specified checkpoint time.\"},\"closeLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Closes a long position with a specified maturity time.\"},\"closeShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Closes a short position with a specified maturity time.\"},\"collectGovernanceFee((address,bool,bytes))\":{\"notice\":\"This function collects the governance fees accrued by the pool.\"},\"constructor\":{\"notice\":\"Instantiates a Hyperdrive pool.\"},\"domainSeparator()\":{\"notice\":\"Computes the EIP712 domain separator which prevents user signed         messages for this contract to be replayed in other contracts:         https://eips.ethereum.org/EIPS/eip-712.\"},\"initialize(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows the first LP to initialize the market with a target APR.\"},\"openLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Opens a long position.\"},\"openShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Opens a short position.\"},\"pause(bool)\":{\"notice\":\"Allows an authorized address to pause this contract.\"},\"permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"notice\":\"Allows a caller who is not the owner of an account to execute the      functionality of 'approve' for all assets with the owners signature.\"},\"redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Redeems withdrawal shares by giving the LP a pro-rata amount of         the withdrawal pool's proceeds. This function redeems the         maximum amount of the specified withdrawal shares given the         amount of withdrawal shares ready to withdraw.\"},\"removeLiquidity(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows an LP to burn shares and withdraw from the pool.\"},\"setApproval(uint256,address,uint256)\":{\"notice\":\"Allows a user to set an approval for an individual asset with         specific amount.\"},\"setApprovalBridge(uint256,address,uint256,address)\":{\"notice\":\"Allows the compatibility linking contract to forward calls to         set asset approvals.\"},\"setApprovalForAll(address,bool)\":{\"notice\":\"Allows a user to approve an operator to use all of their assets.\"},\"setFeeCollector(address)\":{\"notice\":\"Allows governance to transfer the fee collector role.\"},\"setGovernance(address)\":{\"notice\":\"Allows governance to transfer the governance role.\"},\"setPauser(address,bool)\":{\"notice\":\"Allows governance to change the pauser status of an address.\"},\"setSweepCollector(address)\":{\"notice\":\"Allows governance to transfer the sweep collector role.\"},\"sweep(address)\":{\"notice\":\"Transfers the contract's balance of a target token to the fee         collector address.\"},\"target0()\":{\"notice\":\"The target0 address. This is a logic contract that contains all         of the getters for the Hyperdrive pool as well as some stateful         functions.\"},\"target1()\":{\"notice\":\"The target1 address. This is a logic contract that contains         stateful functions.\"},\"target2()\":{\"notice\":\"The target2 address. This is a logic contract that contains         stateful functions.\"},\"target3()\":{\"notice\":\"The target3 address. This is a logic contract that contains         stateful functions.\"},\"target4()\":{\"notice\":\"The target4 address. This is a logic contract that contains         stateful functions.\"},\"transferFrom(uint256,address,address,uint256)\":{\"notice\":\"Transfers an amount of assets from the source to the destination.\"},\"transferFromBridge(uint256,address,address,uint256,address)\":{\"notice\":\"Permissioned transfer for the bridge to access, only callable by         the ERC20 linking bridge.\"}},\"notice\":\"______  __                           _________      _____      ___  / / /____  ___________________________  /_________(_)__   ______      __  /_/ /__  / / /__  __ \\\\  _ \\\\_  ___/  __  /__  ___/_  /__ | / /  _ \\\\      _  __  / _  /_/ /__  /_/ /  __/  /   / /_/ / _  /   _  / __ |/ //  __/      /_/ /_/  _\\\\__, / _   ___/\\\\___//_/    \\\\__,_/  /_/    /_/  _____/ \\\\___/               /____/   /_/                     XXX          ++          ++          XXX     ############   XXXXX        ++0+        +0++        XXXXX   ###########   ##////////////########       ++00++      ++00++       ########///////////##  ##////////////##########      ++000++    ++000++      ##########///////////##  ##%%%%%%/////      ######     ++0000+    +0000++     ######     /////%%%%%%##    %%%%%%%%&&             ##   ++0000+    +0000++   ##           &&%%%%%%%%%         %&&&                ##  +o000+    +000o+  ##              &&&%                              ## ++00+-    -+00++ ##                               #% ++0+      +0++ %#                               ###-:Oo.++++.oO:-###                                ##: 00++++++00 :##                    #S###########* 0++00+++00++0 *##########S#                  #S               % $ 0+++0 $ %              S#                #S   ----------   %+++++:#:+++++%-----------    S#              #S   ------------- %++++: ### :++++%------------    S#             S    ---------------%++++*\\\\ | /*++++%-------------     S           #S     --------------- %++++ ~W~ ++++%666--o UUUU o-      S#         #S?      ---------------  %+++++~+++++%&&&8 o  \\\\  /  o       ?S#        ?*????**+++;::,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,::;+++**????*?      #?+////////////////////////////////////////////////////////////////+?#    #;;;;;//////////////////////////////////////////////////////////////;;;;;#  S;;;;;;;;;//////////////////////////////////////////////////////////;;;;;;;;;S /;;;;;;;;;;;///////////////////////////////////////////////////////;;;;;;;;;;;;\\\\ |||OOOOOOOO||OOOOOOOO=========== __  ___        ===========OOOOOOOO||OOOOOOOO||| |||OOOOOOOO||OOOOOOOO===========|  \\\\[__ |   \\\\  /===========OOOOOOOO||OOOOOOOO||| |||OOOOOOOO||OOOOOOOO===========|__/[___|___ \\\\/ ===========OOOOOOOO||OOOOOOOO||| |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| |||////////000000000000\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\|:::::::::::::::|////////00000000000\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\||| SSS\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\000000000000////////|:::::0x666:::::|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\00000000000//////////SSS SSS|||||||||||||||||||||||||||||:::::::::::::::||||||||||||||||||||||||||||||SSS SSSSSSSS|_______________|______________||_______________|______________|SSSSSSSS SSSSSSSS                                                                SSSSSSSS SSSSSSSS                                                                SSSSSSSSA fixed-rate AMM that mints bonds on demand for longs and shorts.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/external/Hyperdrive.sol\":\"Hyperdrive\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/external/Hyperdrive.sol\":{\"keccak256\":\"0x4d166ec6a8a2e3f2cae2d0f990d1cc40965ec995130d7a7be1af2b9e390d3fd8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2185afc7935052ce78427f3ee5629d4c6d93cbffad776fb281c2b79ff2234d67\",\"dweb:/ipfs/QmT6e2H7pXG3e2BM1EoHTxzWhTwxjGu75AxNkZ4CxyEbw6\"]},\"contracts/src/external/HyperdriveTarget0.sol\":{\"keccak256\":\"0x7336935ca8a1b3985f01f923c8444e0eaeffe1ce71ae2a84bf2514cc502b913d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://bd572503e6cc9f49d7cacef4242fa485035b7e46090c82bbfe2f4e9f9ed14597\",\"dweb:/ipfs/QmaXKWM58hzKtwtq7jn6pwY5UF7EtaL2sQW6mNXpaonckZ\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xb8ee04f3090b498966970e210f7de0f982f6445628556f2f176385423d8c5952\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://db789f03faa935c6e3b0882b6e873e8f683c9c8841a4b128366dcbe7321911bf\",\"dweb:/ipfs/QmSQh1cX79nApuSAfJbVN99dmEaE4CK9QwWfEGcwhJMBLK\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x68adcd293ff25711add1698b6024faa45beec01eb044bd0103d3020aa96d856e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0e0f5e35a7d2c656e249394d25896e5adfb9af3e210c01b9ef5fa81d25a45e24\",\"dweb:/ipfs/QmbLASezHPWHcbodqSfw3Qh9NzqekqVPM8FhCXKGTCXL1h\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x812ccb32dff907e8614c89a65196eec239eceb3e63f9f14dde2b2269c75a67c0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://da5f2ce974bfcd8185342c121c879ba5aef23e1e4e7b36cf9fcba68296b8892c\",\"dweb:/ipfs/QmSho3PWs9bzejTYYjySuXcH9tVP4xFnkbUmSzQA54g8eG\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf\",\"dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/internal/HyperdriveAdmin.sol\":{\"keccak256\":\"0x683548d598b303bc8bab561818a2f88c100f6d26fda478e89c02b46cf710726d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://054a605eeb41760fbe1922bb32f511c87e1ca4dd04f3fa64f40783060b371603\",\"dweb:/ipfs/QmezP1mjnbPCwdDCrh4GjL7RVzU61ohTrcW6A7yxLiKcQM\"]},\"contracts/src/internal/HyperdriveBase.sol\":{\"keccak256\":\"0x7feb8df22e6f91b1ee70f50f5ca16a7819601bcb88fc5a5fa9cf16c708cc52bb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://60ff7ff4faa45551099b025d03f2438477b5fd1f64f82b78c6ed26cbdafc64f6\",\"dweb:/ipfs/QmWtbftziGdSKAEvpRoaWRnTxMNwgUVs2nDN6nFugX1WYN\"]},\"contracts/src/internal/HyperdriveCheckpoint.sol\":{\"keccak256\":\"0x3514b829c99e0015385ff08dd1479e452529a6283e8b6800946542ff21dc9649\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://37ffd17baea5080f4184372ac835bf60694760499756235a61e41a480f4ab3c7\",\"dweb:/ipfs/QmUzEnJhRhpW18MH7GyXsug9u5FLehNfgjR7RAhZizLLVd\"]},\"contracts/src/internal/HyperdriveLP.sol\":{\"keccak256\":\"0x72410851e77940e66681e23b9d10f3c3de0e8c9a3e5b1cca627e93bba431775d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://82a9292f388b16572cc5c5e873d1ead666ddcc3e436cf5d7fb036fd6c63ee9a2\",\"dweb:/ipfs/Qmauzxkn46ACS4XV43m2MbDF91KYP4ExYwSxL3cm1SDL6j\"]},\"contracts/src/internal/HyperdriveLong.sol\":{\"keccak256\":\"0xe791adb5c58a73ff2c978fcc79153f9042702e2c4fc5d71f60534323d5ba4832\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7ec4adf40e5f90574c7484ddeeed41cbe1f60b29847b18b169aa3130b8882aa7\",\"dweb:/ipfs/QmeY9y922jhcLzGw9d4VUNNoDkUeFhTJ8ZVThrvqzcGGjm\"]},\"contracts/src/internal/HyperdriveMultiToken.sol\":{\"keccak256\":\"0x21a9aafb8e23a22c77111e13538fa8f709446e4f3a64ef84b2eebc2aa9d04373\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://41517912353540de5b430587ca8220f9d34d4432d3c723951d5fb618d5907b5d\",\"dweb:/ipfs/QmU3cTCrAq94digVS97s5af1Pu86uGBpmpus6w7828fUbG\"]},\"contracts/src/internal/HyperdriveShort.sol\":{\"keccak256\":\"0xc42b5a9ee5eee3cb9177b136eb9f4b81a4b51d9468f8faa97309934b6b371bc5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b9291237fcdbb8ff97517acd19499cfa4afc6d670a89fd5cc0309a201a7b1006\",\"dweb:/ipfs/QmfQmUwvGhJgPFyNaHvur8AViePBzvSBNAdaZJBwMkY5Je\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xf13ba4bcf41673bc04e4ae32a29c31b62514d66cfedee70b0d3bff574efc0e4a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e505639a656cf7c908e7c64cfd5cae6f4174a679de19d17a3f12f6e3fc4b2195\",\"dweb:/ipfs/QmNmcmz9nV9uDyeouo8yWAKMoMqEVx6JMTfZwCRa9QU83N\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0x3031a1ec376be333eebe0062c474a22d7f970cb02de62ab6823c6918c0a7f83b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6c80cc2fd8b7908b6420ebb21cb99266c93e01d6cdd9d1a41f8847493849b131\",\"dweb:/ipfs/QmeMehWbF2RwQaf6c6yaj5KHjXboDRpzBCtvFnLW4BXBbc\"]},\"contracts/src/libraries/Errors.sol\":{\"keccak256\":\"0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88\",\"dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x631f6529908f62f71775f8c6120afdca3a836fb24fa9fa4701cad54f4a9da076\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2baf6ad8917a3fbb6d040334451f6b4f6936b00518c4cd308b9c6fa11569b2bd\",\"dweb:/ipfs/QmXD16vk6MRxmPRqy8ZXSpRA5XxhSf1pnsQH32ARDJTk8L\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0xcf305dde8aa320d1e1b767734ce8edce456af537525d40e30d5345f09f6e34ab\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://056c9a563f1a9e0133e17463497ad19be517d35b770170122edea50ca9fbe002\",\"dweb:/ipfs/QmS6dkVRHzdbv7etumcCtNtm9GuXDCjqZxxhtYfP6keAAY\"]},\"contracts/src/libraries/LPMath.sol\":{\"keccak256\":\"0x5b3c0d159b1945a14227028d835e011bf740e007f664cba049ece1b6ab963067\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d8f4fef22462dabc799b2f8124440a7cc57076f7ceecb46219c69b09f50baf5f\",\"dweb:/ipfs/Qmcw9iC1RZt4Nh7dGH1yR7vUi6qZHJf6ReAvF2uLFHESqZ\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8\",\"dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x4a9c91313bed7cda6ef503af23c9f777008b5258e9cb2176eab6acc52be79891\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://88da1f5502a12fe1024be90f6a6ea08556cc1f2660ab8cbeb5e07640abb7711c\",\"dweb:/ipfs/QmVQoG9TyrAsVYcgvgZfgA5pQk8V8wvS4BewGNP4B3Txyy\"]},\"lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol\":{\"keccak256\":\"0x60c65f701957fdd6faea1acb0bb45825791d473693ed9ecb34726fdfaa849dd7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ea290300e0efc4d901244949dc4d877fd46e6c5e43dc2b26620e8efab3ab803f\",\"dweb:/ipfs/QmcLLJppxKeJWqHxE2CUkcfhuRTgHSn8J4kijcLa5MYhSt\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0xc3e1fa9d1987f8d349dfb4d6fe93bf2ca014b52ba335cfac30bfe71e357e6f80\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c5703ccdeb7b1d685e375ed719117e9edf2ab4bc544f24f23b0d50ec82257229\",\"dweb:/ipfs/QmTdwkbQq7owpCiyuzE7eh5LrD2ddrBCZ5WHVsWPi1RrTS\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c\",\"dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850\",\"dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x6008dabfe393240d73d7dd7688033f72740d570aa422254d29a7dce8568f3aff\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f5196ec75139918c6c7bb4251b36395e668f1fa6d206beba7e7520e74913940d\",\"dweb:/ipfs/QmSyqjksXxmm2mCG6qRd1yuwLykypkSVBbnBnGqJRcuJMi\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x37bb49513c49c87c4642a891b13b63571bc87013dde806617aa1efb54605f386\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b3036b3a83b7c48f96641f2a9002b9f2dcb6a5958dd670894ada21ae8229b3d0\",\"dweb:/ipfs/QmUNfSBdoVtjhETaUJCYcaC7pTMgbhht926tJ2uXJbiVd3\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245\",\"dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y\"]},\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":{\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12\",\"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF\"]},\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02\",\"dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd\"]}},\"version\":1}";
    readonly metadata: {
        readonly compiler: {
            readonly version: "0.8.20+commit.a1b79de6";
        };
        readonly language: "Solidity";
        readonly output: {
            readonly abi: readonly [{
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "ReentrancyGuardReentrantCall";
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
                    readonly constructor: {
                        readonly params: {
                            readonly _config: "The configuration of the pool.";
                            readonly _target0: "The target0 address.";
                            readonly _target1: "The target1 address.";
                            readonly _target2: "The target2 address.";
                            readonly _target3: "The target3 address.";
                            readonly _target4: "The target4 address.";
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
                    readonly constructor: {
                        readonly notice: "Instantiates a Hyperdrive pool.";
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
                readonly "contracts/src/external/Hyperdrive.sol": "Hyperdrive";
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
        readonly absolutePath: "contracts/src/external/Hyperdrive.sol";
        readonly id: 4610;
        readonly exportedSymbols: {
            readonly Hyperdrive: readonly [4609];
            readonly HyperdriveAdmin: readonly [13205];
            readonly HyperdriveBase: readonly [14381];
            readonly HyperdriveCheckpoint: readonly [14845];
            readonly HyperdriveLP: readonly [15747];
            readonly HyperdriveLong: readonly [16681];
            readonly HyperdriveShort: readonly [18151];
            readonly HyperdriveStorage: readonly [18367];
            readonly HyperdriveTarget0: readonly [5409];
            readonly IERC20: readonly [10358];
            readonly IHyperdrive: readonly [11076];
            readonly IHyperdriveCore: readonly [11265];
            readonly IMultiTokenCore: readonly [12131];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:14646:36";
        readonly nodes: readonly [{
            readonly id: 3995;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:23:36";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 3997;
            readonly nodeType: "ImportDirective";
            readonly src: "64:50:36";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IERC20.sol";
            readonly file: "../interfaces/IERC20.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 4610;
            readonly sourceUnit: 10359;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 3996;
                    readonly name: "IERC20";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 10358;
                    readonly src: "73:6:36";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 3999;
            readonly nodeType: "ImportDirective";
            readonly src: "115:70:36";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/external/HyperdriveTarget0.sol";
            readonly file: "../external/HyperdriveTarget0.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 4610;
            readonly sourceUnit: 5410;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 3998;
                    readonly name: "HyperdriveTarget0";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 5409;
                    readonly src: "124:17:36";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 4001;
            readonly nodeType: "ImportDirective";
            readonly src: "186:60:36";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IHyperdrive.sol";
            readonly file: "../interfaces/IHyperdrive.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 4610;
            readonly sourceUnit: 11077;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 4000;
                    readonly name: "IHyperdrive";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 11076;
                    readonly src: "195:11:36";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 4003;
            readonly nodeType: "ImportDirective";
            readonly src: "247:68:36";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IHyperdriveCore.sol";
            readonly file: "../interfaces/IHyperdriveCore.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 4610;
            readonly sourceUnit: 11266;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 4002;
                    readonly name: "IHyperdriveCore";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 11265;
                    readonly src: "256:15:36";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 4005;
            readonly nodeType: "ImportDirective";
            readonly src: "316:68:36";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IMultiTokenCore.sol";
            readonly file: "../interfaces/IMultiTokenCore.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 4610;
            readonly sourceUnit: 12132;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 4004;
                    readonly name: "IMultiTokenCore";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 12131;
                    readonly src: "325:15:36";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 4007;
            readonly nodeType: "ImportDirective";
            readonly src: "385:66:36";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/internal/HyperdriveAdmin.sol";
            readonly file: "../internal/HyperdriveAdmin.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 4610;
            readonly sourceUnit: 13206;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 4006;
                    readonly name: "HyperdriveAdmin";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 13205;
                    readonly src: "394:15:36";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 4009;
            readonly nodeType: "ImportDirective";
            readonly src: "452:64:36";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/internal/HyperdriveBase.sol";
            readonly file: "../internal/HyperdriveBase.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 4610;
            readonly sourceUnit: 14382;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 4008;
                    readonly name: "HyperdriveBase";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 14381;
                    readonly src: "461:14:36";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 4011;
            readonly nodeType: "ImportDirective";
            readonly src: "517:76:36";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/internal/HyperdriveCheckpoint.sol";
            readonly file: "../internal/HyperdriveCheckpoint.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 4610;
            readonly sourceUnit: 14846;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 4010;
                    readonly name: "HyperdriveCheckpoint";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 14845;
                    readonly src: "526:20:36";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 4013;
            readonly nodeType: "ImportDirective";
            readonly src: "594:64:36";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/internal/HyperdriveLong.sol";
            readonly file: "../internal/HyperdriveLong.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 4610;
            readonly sourceUnit: 16682;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 4012;
                    readonly name: "HyperdriveLong";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 16681;
                    readonly src: "603:14:36";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 4015;
            readonly nodeType: "ImportDirective";
            readonly src: "659:60:36";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/internal/HyperdriveLP.sol";
            readonly file: "../internal/HyperdriveLP.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 4610;
            readonly sourceUnit: 15748;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 4014;
                    readonly name: "HyperdriveLP";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 15747;
                    readonly src: "668:12:36";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 4017;
            readonly nodeType: "ImportDirective";
            readonly src: "720:66:36";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/internal/HyperdriveShort.sol";
            readonly file: "../internal/HyperdriveShort.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 4610;
            readonly sourceUnit: 18152;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 4016;
                    readonly name: "HyperdriveShort";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 18151;
                    readonly src: "729:15:36";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 4019;
            readonly nodeType: "ImportDirective";
            readonly src: "787:70:36";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/internal/HyperdriveStorage.sol";
            readonly file: "../internal/HyperdriveStorage.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 4610;
            readonly sourceUnit: 18368;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 4018;
                    readonly name: "HyperdriveStorage";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 18367;
                    readonly src: "796:17:36";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 4609;
            readonly nodeType: "ContractDefinition";
            readonly src: "4149:10535:36";
            readonly nodes: readonly [{
                readonly id: 4035;
                readonly nodeType: "VariableDeclaration";
                readonly src: "4500:32:36";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 4033;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "4313:182:36";
                    readonly text: "@notice The target0 address. This is a logic contract that contains all\n         of the getters for the Hyperdrive pool as well as some stateful\n         functions.";
                };
                readonly functionSelector: "21b57d53";
                readonly mutability: "immutable";
                readonly name: "target0";
                readonly nameLocation: "4525:7:36";
                readonly scope: 4609;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_address";
                    readonly typeString: "address";
                };
                readonly typeName: {
                    readonly id: 4034;
                    readonly name: "address";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "4500:7:36";
                    readonly stateMutability: "nonpayable";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                };
                readonly visibility: "public";
            }, {
                readonly id: 4038;
                readonly nodeType: "VariableDeclaration";
                readonly src: "4651:32:36";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 4036;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "4539:107:36";
                    readonly text: "@notice The target1 address. This is a logic contract that contains\n         stateful functions.";
                };
                readonly functionSelector: "eac3e799";
                readonly mutability: "immutable";
                readonly name: "target1";
                readonly nameLocation: "4676:7:36";
                readonly scope: 4609;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_address";
                    readonly typeString: "address";
                };
                readonly typeName: {
                    readonly id: 4037;
                    readonly name: "address";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "4651:7:36";
                    readonly stateMutability: "nonpayable";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                };
                readonly visibility: "public";
            }, {
                readonly id: 4041;
                readonly nodeType: "VariableDeclaration";
                readonly src: "4802:32:36";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 4039;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "4690:107:36";
                    readonly text: "@notice The target2 address. This is a logic contract that contains\n         stateful functions.";
                };
                readonly functionSelector: "a6e8a859";
                readonly mutability: "immutable";
                readonly name: "target2";
                readonly nameLocation: "4827:7:36";
                readonly scope: 4609;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_address";
                    readonly typeString: "address";
                };
                readonly typeName: {
                    readonly id: 4040;
                    readonly name: "address";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "4802:7:36";
                    readonly stateMutability: "nonpayable";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                };
                readonly visibility: "public";
            }, {
                readonly id: 4044;
                readonly nodeType: "VariableDeclaration";
                readonly src: "4953:32:36";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 4042;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "4841:107:36";
                    readonly text: "@notice The target3 address. This is a logic contract that contains\n         stateful functions.";
                };
                readonly functionSelector: "d899e112";
                readonly mutability: "immutable";
                readonly name: "target3";
                readonly nameLocation: "4978:7:36";
                readonly scope: 4609;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_address";
                    readonly typeString: "address";
                };
                readonly typeName: {
                    readonly id: 4043;
                    readonly name: "address";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "4953:7:36";
                    readonly stateMutability: "nonpayable";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                };
                readonly visibility: "public";
            }, {
                readonly id: 4047;
                readonly nodeType: "VariableDeclaration";
                readonly src: "5104:32:36";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly documentation: {
                    readonly id: 4045;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "4992:107:36";
                    readonly text: "@notice The target4 address. This is a logic contract that contains\n         stateful functions.";
                };
                readonly functionSelector: "f3f70707";
                readonly mutability: "immutable";
                readonly name: "target4";
                readonly nameLocation: "5129:7:36";
                readonly scope: 4609;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_address";
                    readonly typeString: "address";
                };
                readonly typeName: {
                    readonly id: 4046;
                    readonly name: "address";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "5104:7:36";
                    readonly stateMutability: "nonpayable";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                };
                readonly visibility: "public";
            }, {
                readonly id: 4053;
                readonly nodeType: "VariableDeclaration";
                readonly src: "5226:174:36";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly documentation: {
                    readonly id: 4048;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "5143:78:36";
                    readonly text: "@notice The typehash used to calculate the EIP712 hash for `permitForAll`.";
                };
                readonly functionSelector: "30adf81f";
                readonly mutability: "constant";
                readonly name: "PERMIT_TYPEHASH";
                readonly nameLocation: "5250:15:36";
                readonly scope: 4609;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_bytes32";
                    readonly typeString: "bytes32";
                };
                readonly typeName: {
                    readonly id: 4049;
                    readonly name: "bytes32";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "5226:7:36";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bytes32";
                        readonly typeString: "bytes32";
                    };
                };
                readonly value: {
                    readonly arguments: readonly [{
                        readonly hexValue: "5065726d6974466f72416c6c2861646472657373206f776e65722c61646472657373207370656e6465722c626f6f6c205f617070726f7665642c75696e74323536206e6f6e63652c75696e7432353620646561646c696e6529";
                        readonly id: 4051;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: true;
                        readonly kind: "string";
                        readonly lValueRequested: false;
                        readonly nodeType: "Literal";
                        readonly src: "5299:91:36";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_stringliteral_65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e973673";
                            readonly typeString: "literal_string \"PermitForAll(address owner,address spender,bool _approved,uint256 nonce,uint256 deadline)\"";
                        };
                        readonly value: "PermitForAll(address owner,address spender,bool _approved,uint256 nonce,uint256 deadline)";
                    }];
                    readonly expression: {
                        readonly argumentTypes: readonly [{
                            readonly typeIdentifier: "t_stringliteral_65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e973673";
                            readonly typeString: "literal_string \"PermitForAll(address owner,address spender,bool _approved,uint256 nonce,uint256 deadline)\"";
                        }];
                        readonly id: 4050;
                        readonly name: "keccak256";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: -8;
                        readonly src: "5276:9:36";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                            readonly typeString: "function (bytes memory) pure returns (bytes32)";
                        };
                    };
                    readonly id: 4052;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "functionCall";
                    readonly lValueRequested: false;
                    readonly nameLocations: readonly [];
                    readonly names: readonly [];
                    readonly nodeType: "FunctionCall";
                    readonly src: "5276:124:36";
                    readonly tryCall: false;
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bytes32";
                        readonly typeString: "bytes32";
                    };
                };
                readonly visibility: "public";
            }, {
                readonly id: 4094;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5734:413:36";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 4093;
                    readonly nodeType: "Block";
                    readonly src: "5956:191:36";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 4075;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 4073;
                                readonly name: "target0";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4035;
                                readonly src: "6010:7:36";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 4074;
                                readonly name: "_target0";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4059;
                                readonly src: "6020:8:36";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "6010:18:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly id: 4076;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6010:18:36";
                    }, {
                        readonly expression: {
                            readonly id: 4079;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 4077;
                                readonly name: "target1";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4038;
                                readonly src: "6038:7:36";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 4078;
                                readonly name: "_target1";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4061;
                                readonly src: "6048:8:36";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "6038:18:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly id: 4080;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6038:18:36";
                    }, {
                        readonly expression: {
                            readonly id: 4083;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 4081;
                                readonly name: "target2";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4041;
                                readonly src: "6066:7:36";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 4082;
                                readonly name: "_target2";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4063;
                                readonly src: "6076:8:36";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "6066:18:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly id: 4084;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6066:18:36";
                    }, {
                        readonly expression: {
                            readonly id: 4087;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 4085;
                                readonly name: "target3";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4044;
                                readonly src: "6094:7:36";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 4086;
                                readonly name: "_target3";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4065;
                                readonly src: "6104:8:36";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "6094:18:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly id: 4088;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6094:18:36";
                    }, {
                        readonly expression: {
                            readonly id: 4091;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 4089;
                                readonly name: "target4";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4047;
                                readonly src: "6122:7:36";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 4090;
                                readonly name: "_target4";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4067;
                                readonly src: "6132:8:36";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "6122:18:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly id: 4092;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6122:18:36";
                    }];
                };
                readonly documentation: {
                    readonly id: 4054;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "5407:322:36";
                    readonly text: "@notice Instantiates a Hyperdrive pool.\n @param _config The configuration of the pool.\n @param _target0 The target0 address.\n @param _target1 The target1 address.\n @param _target2 The target2 address.\n @param _target3 The target3 address.\n @param _target4 The target4 address.";
                };
                readonly implemented: true;
                readonly kind: "constructor";
                readonly modifiers: readonly [{
                    readonly arguments: readonly [{
                        readonly id: 4070;
                        readonly name: "_config";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 4057;
                        readonly src: "5947:7:36";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10867_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig memory";
                        };
                    }];
                    readonly id: 4071;
                    readonly kind: "baseConstructorSpecifier";
                    readonly modifierName: {
                        readonly id: 4069;
                        readonly name: "HyperdriveStorage";
                        readonly nameLocations: readonly ["5929:17:36"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 18367;
                        readonly src: "5929:17:36";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "5929:26:36";
                }];
                readonly name: "";
                readonly nameLocation: "-1:-1:-1";
                readonly parameters: {
                    readonly id: 4068;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 4057;
                        readonly mutability: "mutable";
                        readonly name: "_config";
                        readonly nameLocation: "5785:7:36";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4094;
                        readonly src: "5755:37:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10867_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig";
                        };
                        readonly typeName: {
                            readonly id: 4056;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 4055;
                                readonly name: "IHyperdrive.PoolConfig";
                                readonly nameLocations: readonly ["5755:11:36", "5767:10:36"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10867;
                                readonly src: "5755:22:36";
                            };
                            readonly referencedDeclaration: 10867;
                            readonly src: "5755:22:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolConfig_$10867_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4059;
                        readonly mutability: "mutable";
                        readonly name: "_target0";
                        readonly nameLocation: "5810:8:36";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4094;
                        readonly src: "5802:16:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 4058;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5802:7:36";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4061;
                        readonly mutability: "mutable";
                        readonly name: "_target1";
                        readonly nameLocation: "5836:8:36";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4094;
                        readonly src: "5828:16:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 4060;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5828:7:36";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4063;
                        readonly mutability: "mutable";
                        readonly name: "_target2";
                        readonly nameLocation: "5862:8:36";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4094;
                        readonly src: "5854:16:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 4062;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5854:7:36";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4065;
                        readonly mutability: "mutable";
                        readonly name: "_target3";
                        readonly nameLocation: "5888:8:36";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4094;
                        readonly src: "5880:16:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 4064;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5880:7:36";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4067;
                        readonly mutability: "mutable";
                        readonly name: "_target4";
                        readonly nameLocation: "5914:8:36";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4094;
                        readonly src: "5906:16:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 4066;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5906:7:36";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5745:183:36";
                };
                readonly returnParameters: {
                    readonly id: 4072;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "5956:0:36";
                };
                readonly scope: 4609;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 4148;
                readonly nodeType: "FunctionDefinition";
                readonly src: "6481:940:36";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 4147;
                    readonly nodeType: "Block";
                    readonly src: "6544:877:36";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [4103, 4105];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 4103;
                            readonly mutability: "mutable";
                            readonly name: "success";
                            readonly nameLocation: "6689:7:36";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 4147;
                            readonly src: "6684:12:36";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly typeName: {
                                readonly id: 4102;
                                readonly name: "bool";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "6684:4:36";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly visibility: "internal";
                        }, {
                            readonly constant: false;
                            readonly id: 4105;
                            readonly mutability: "mutable";
                            readonly name: "returndata";
                            readonly nameLocation: "6711:10:36";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 4147;
                            readonly src: "6698:23:36";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes";
                            };
                            readonly typeName: {
                                readonly id: 4104;
                                readonly name: "bytes";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "6698:5:36";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_storage_ptr";
                                    readonly typeString: "bytes";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 4110;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 4108;
                                readonly name: "_data";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4097;
                                readonly src: "6746:5:36";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_calldata_ptr";
                                    readonly typeString: "bytes calldata";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_bytes_calldata_ptr";
                                    readonly typeString: "bytes calldata";
                                }];
                                readonly expression: {
                                    readonly id: 4106;
                                    readonly name: "target0";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 4035;
                                    readonly src: "6725:7:36";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly id: 4107;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6733:12:36";
                                readonly memberName: "delegatecall";
                                readonly nodeType: "MemberAccess";
                                readonly src: "6725:20:36";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_baredelegatecall_nonpayable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$";
                                    readonly typeString: "function (bytes memory) returns (bool,bytes memory)";
                                };
                            };
                            readonly id: 4109;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "6725:27:36";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_bool_$_t_bytes_memory_ptr_$";
                                readonly typeString: "tuple(bool,bytes memory)";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "6683:69:36";
                    }, {
                        readonly condition: {
                            readonly id: 4111;
                            readonly name: "success";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 4103;
                            readonly src: "6766:7:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 4118;
                        readonly nodeType: "IfStatement";
                        readonly src: "6762:76:36";
                        readonly trueBody: {
                            readonly id: 4117;
                            readonly nodeType: "Block";
                            readonly src: "6775:63:36";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 4112;
                                            readonly name: "IHyperdrive";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 11076;
                                            readonly src: "6796:11:36";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$11076_$";
                                                readonly typeString: "type(contract IHyperdrive)";
                                            };
                                        };
                                        readonly id: 4114;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "6808:17:36";
                                        readonly memberName: "UnexpectedSuccess";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 11027;
                                        readonly src: "6796:29:36";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 4115;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "6796:31:36";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 4116;
                                readonly nodeType: "RevertStatement";
                                readonly src: "6789:38:36";
                            }];
                        };
                    }, {
                        readonly assignments: readonly [4120];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 4120;
                            readonly mutability: "mutable";
                            readonly name: "selector";
                            readonly nameLocation: "6854:8:36";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 4147;
                            readonly src: "6847:15:36";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes4";
                                readonly typeString: "bytes4";
                            };
                            readonly typeName: {
                                readonly id: 4119;
                                readonly name: "bytes4";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "6847:6:36";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes4";
                                    readonly typeString: "bytes4";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 4125;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 4123;
                                readonly name: "returndata";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4105;
                                readonly src: "6872:10:36";
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
                                readonly id: 4122;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly lValueRequested: false;
                                readonly nodeType: "ElementaryTypeNameExpression";
                                readonly src: "6865:6:36";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_type$_t_bytes4_$";
                                    readonly typeString: "type(bytes4)";
                                };
                                readonly typeName: {
                                    readonly id: 4121;
                                    readonly name: "bytes4";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "6865:6:36";
                                    readonly typeDescriptions: {};
                                };
                            };
                            readonly id: 4124;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "typeConversion";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "6865:18:36";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes4";
                                readonly typeString: "bytes4";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "6847:36:36";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_bytes4";
                                readonly typeString: "bytes4";
                            };
                            readonly id: 4130;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 4126;
                                readonly name: "selector";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4120;
                                readonly src: "6897:8:36";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes4";
                                    readonly typeString: "bytes4";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "!=";
                            readonly rightExpression: {
                                readonly expression: {
                                    readonly expression: {
                                        readonly id: 4127;
                                        readonly name: "IHyperdrive";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 11076;
                                        readonly src: "6909:11:36";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$11076_$";
                                            readonly typeString: "type(contract IHyperdrive)";
                                        };
                                    };
                                    readonly id: 4128;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "6921:10:36";
                                    readonly memberName: "ReturnData";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 11012;
                                    readonly src: "6909:22:36";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_error_pure$_t_bytes_memory_ptr_$returns$__$";
                                        readonly typeString: "function (bytes memory) pure";
                                    };
                                };
                                readonly id: 4129;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6932:8:36";
                                readonly memberName: "selector";
                                readonly nodeType: "MemberAccess";
                                readonly src: "6909:31:36";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes4";
                                    readonly typeString: "bytes4";
                                };
                            };
                            readonly src: "6897:43:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 4133;
                        readonly nodeType: "IfStatement";
                        readonly src: "6893:160:36";
                        readonly trueBody: {
                            readonly id: 4132;
                            readonly nodeType: "Block";
                            readonly src: "6942:111:36";
                            readonly statements: readonly [{
                                readonly AST: {
                                    readonly nodeType: "YulBlock";
                                    readonly src: "6965:78:36";
                                    readonly statements: readonly [{
                                        readonly expression: {
                                            readonly arguments: readonly [{
                                                readonly arguments: readonly [{
                                                    readonly name: "returndata";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "6994:10:36";
                                                }, {
                                                    readonly kind: "number";
                                                    readonly nodeType: "YulLiteral";
                                                    readonly src: "7006:2:36";
                                                    readonly type: "";
                                                    readonly value: "32";
                                                }];
                                                readonly functionName: {
                                                    readonly name: "add";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "6990:3:36";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "6990:19:36";
                                            }, {
                                                readonly arguments: readonly [{
                                                    readonly name: "returndata";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "7017:10:36";
                                                }];
                                                readonly functionName: {
                                                    readonly name: "mload";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "7011:5:36";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "7011:17:36";
                                            }];
                                            readonly functionName: {
                                                readonly name: "revert";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "6983:6:36";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "6983:46:36";
                                        };
                                        readonly nodeType: "YulExpressionStatement";
                                        readonly src: "6983:46:36";
                                    }];
                                };
                                readonly evmVersion: "paris";
                                readonly externalReferences: readonly [{
                                    readonly declaration: 4105;
                                    readonly isOffset: false;
                                    readonly isSlot: false;
                                    readonly src: "6994:10:36";
                                    readonly valueSize: 1;
                                }, {
                                    readonly declaration: 4105;
                                    readonly isOffset: false;
                                    readonly isSlot: false;
                                    readonly src: "7017:10:36";
                                    readonly valueSize: 1;
                                }];
                                readonly id: 4131;
                                readonly nodeType: "InlineAssembly";
                                readonly src: "6956:87:36";
                            }];
                        };
                    }, {
                        readonly AST: {
                            readonly nodeType: "YulBlock";
                            readonly src: "7207:126:36";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly name: "returndata";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "7232:10:36";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "7244:3:36";
                                            readonly type: "";
                                            readonly value: "0x4";
                                        }];
                                        readonly functionName: {
                                            readonly name: "add";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "7228:3:36";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "7228:20:36";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [{
                                                readonly name: "returndata";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "7260:10:36";
                                            }];
                                            readonly functionName: {
                                                readonly name: "mload";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "7254:5:36";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "7254:17:36";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "7273:1:36";
                                            readonly type: "";
                                            readonly value: "4";
                                        }];
                                        readonly functionName: {
                                            readonly name: "sub";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "7250:3:36";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "7250:25:36";
                                    }];
                                    readonly functionName: {
                                        readonly name: "mstore";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "7221:6:36";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "7221:55:36";
                                };
                                readonly nodeType: "YulExpressionStatement";
                                readonly src: "7221:55:36";
                            }, {
                                readonly nodeType: "YulAssignment";
                                readonly src: "7289:34:36";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly name: "returndata";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "7307:10:36";
                                    }, {
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "7319:3:36";
                                        readonly type: "";
                                        readonly value: "0x4";
                                    }];
                                    readonly functionName: {
                                        readonly name: "add";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "7303:3:36";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "7303:20:36";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "returndata";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "7289:10:36";
                                }];
                            }];
                        };
                        readonly evmVersion: "paris";
                        readonly externalReferences: readonly [{
                            readonly declaration: 4105;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "7232:10:36";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 4105;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "7260:10:36";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 4105;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "7289:10:36";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 4105;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "7307:10:36";
                            readonly valueSize: 1;
                        }];
                        readonly id: 4134;
                        readonly nodeType: "InlineAssembly";
                        readonly src: "7198:135:36";
                    }, {
                        readonly expression: {
                            readonly id: 4143;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 4135;
                                readonly name: "returndata";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4105;
                                readonly src: "7342:10:36";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                    readonly typeString: "bytes memory";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly id: 4138;
                                    readonly name: "returndata";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 4105;
                                    readonly src: "7366:10:36";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                        readonly typeString: "bytes memory";
                                    };
                                }, {
                                    readonly components: readonly [{
                                        readonly id: 4140;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "ElementaryTypeNameExpression";
                                        readonly src: "7379:5:36";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_bytes_storage_ptr_$";
                                            readonly typeString: "type(bytes storage pointer)";
                                        };
                                        readonly typeName: {
                                            readonly id: 4139;
                                            readonly name: "bytes";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "7379:5:36";
                                            readonly typeDescriptions: {};
                                        };
                                    }];
                                    readonly id: 4141;
                                    readonly isConstant: false;
                                    readonly isInlineArray: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "TupleExpression";
                                    readonly src: "7378:7:36";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_bytes_storage_ptr_$";
                                        readonly typeString: "type(bytes storage pointer)";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                        readonly typeString: "bytes memory";
                                    }, {
                                        readonly typeIdentifier: "t_type$_t_bytes_storage_ptr_$";
                                        readonly typeString: "type(bytes storage pointer)";
                                    }];
                                    readonly expression: {
                                        readonly id: 4136;
                                        readonly name: "abi";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -1;
                                        readonly src: "7355:3:36";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_magic_abi";
                                            readonly typeString: "abi";
                                        };
                                    };
                                    readonly id: 4137;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "7359:6:36";
                                    readonly memberName: "decode";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "7355:10:36";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_abidecode_pure$__$returns$__$";
                                        readonly typeString: "function () pure";
                                    };
                                };
                                readonly id: 4142;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "7355:31:36";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                    readonly typeString: "bytes memory";
                                };
                            };
                            readonly src: "7342:44:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes memory";
                            };
                        };
                        readonly id: 4144;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "7342:44:36";
                    }, {
                        readonly expression: {
                            readonly id: 4145;
                            readonly name: "returndata";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 4105;
                            readonly src: "7404:10:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes memory";
                            };
                        };
                        readonly functionReturnParameters: 4101;
                        readonly id: 4146;
                        readonly nodeType: "Return";
                        readonly src: "7397:17:36";
                    }];
                };
                readonly documentation: {
                    readonly id: 4095;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "6153:323:36";
                    readonly text: "@notice If we get to the fallback function, we make a read-only\n         delegatecall to the target0 contract. This target contains all\n         of the getters for the Hyperdrive pool.\n @param _data The data to be passed to the data provider.\n @return The return data from the data provider.";
                };
                readonly implemented: true;
                readonly kind: "fallback";
                readonly modifiers: readonly [];
                readonly name: "";
                readonly nameLocation: "-1:-1:-1";
                readonly parameters: {
                    readonly id: 4098;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 4097;
                        readonly mutability: "mutable";
                        readonly name: "_data";
                        readonly nameLocation: "6505:5:36";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4148;
                        readonly src: "6490:20:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_calldata_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 4096;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6490:5:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6489:22:36";
                };
                readonly returnParameters: {
                    readonly id: 4101;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 4100;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4148;
                        readonly src: "6530:12:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 4099;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6530:5:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6529:14:36";
                };
                readonly scope: 4609;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 4170;
                readonly nodeType: "FunctionDefinition";
                readonly src: "7482:192:36";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 4169;
                    readonly nodeType: "Block";
                    readonly src: "7639:35:36";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 4166;
                                readonly name: "target3";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4044;
                                readonly src: "7659:7:36";
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
                                readonly id: 4165;
                                readonly name: "_delegate";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4608;
                                readonly src: "7649:9:36";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_address_$returns$_t_bytes_memory_ptr_$";
                                    readonly typeString: "function (address) returns (bytes memory)";
                                };
                            };
                            readonly id: 4167;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "7649:18:36";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes memory";
                            };
                        };
                        readonly id: 4168;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "7649:18:36";
                    }];
                };
                readonly baseFunctions: readonly [11103];
                readonly documentation: {
                    readonly id: 4149;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "7446:31:36";
                    readonly text: "@inheritdoc IHyperdriveCore";
                };
                readonly functionSelector: "cba2e58d";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "openLong";
                readonly nameLocation: "7491:8:36";
                readonly parameters: {
                    readonly id: 4159;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 4151;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4170;
                        readonly src: "7509:7:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 4150;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7509:7:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4153;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4170;
                        readonly src: "7526:7:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 4152;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7526:7:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4155;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4170;
                        readonly src: "7543:7:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 4154;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7543:7:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4158;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4170;
                        readonly src: "7560:28:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_Options_$10923_calldata_ptr";
                            readonly typeString: "struct IHyperdrive.Options";
                        };
                        readonly typeName: {
                            readonly id: 4157;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 4156;
                                readonly name: "IHyperdrive.Options";
                                readonly nameLocations: readonly ["7560:11:36", "7572:7:36"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10923;
                                readonly src: "7560:19:36";
                            };
                            readonly referencedDeclaration: 10923;
                            readonly src: "7560:19:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Options_$10923_storage_ptr";
                                readonly typeString: "struct IHyperdrive.Options";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7499:95:36";
                };
                readonly returnParameters: {
                    readonly id: 4164;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 4161;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4170;
                        readonly src: "7621:7:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 4160;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7621:7:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4163;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4170;
                        readonly src: "7630:7:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 4162;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7630:7:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7620:18:36";
                };
                readonly scope: 4609;
                readonly stateMutability: "payable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 4190;
                readonly nodeType: "FunctionDefinition";
                readonly src: "7716:176:36";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 4189;
                    readonly nodeType: "Block";
                    readonly src: "7857:35:36";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 4186;
                                readonly name: "target2";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4041;
                                readonly src: "7877:7:36";
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
                                readonly id: 4185;
                                readonly name: "_delegate";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4608;
                                readonly src: "7867:9:36";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_address_$returns$_t_bytes_memory_ptr_$";
                                    readonly typeString: "function (address) returns (bytes memory)";
                                };
                            };
                            readonly id: 4187;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "7867:18:36";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes memory";
                            };
                        };
                        readonly id: 4188;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "7867:18:36";
                    }];
                };
                readonly baseFunctions: readonly [11118];
                readonly documentation: {
                    readonly id: 4171;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "7680:31:36";
                    readonly text: "@inheritdoc IHyperdriveCore";
                };
                readonly functionSelector: "ded06231";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "closeLong";
                readonly nameLocation: "7725:9:36";
                readonly parameters: {
                    readonly id: 4181;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 4173;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4190;
                        readonly src: "7744:7:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 4172;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7744:7:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4175;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4190;
                        readonly src: "7761:7:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 4174;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7761:7:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4177;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4190;
                        readonly src: "7778:7:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 4176;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7778:7:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4180;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4190;
                        readonly src: "7795:28:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_Options_$10923_calldata_ptr";
                            readonly typeString: "struct IHyperdrive.Options";
                        };
                        readonly typeName: {
                            readonly id: 4179;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 4178;
                                readonly name: "IHyperdrive.Options";
                                readonly nameLocations: readonly ["7795:11:36", "7807:7:36"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10923;
                                readonly src: "7795:19:36";
                            };
                            readonly referencedDeclaration: 10923;
                            readonly src: "7795:19:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Options_$10923_storage_ptr";
                                readonly typeString: "struct IHyperdrive.Options";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7734:95:36";
                };
                readonly returnParameters: {
                    readonly id: 4184;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 4183;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4190;
                        readonly src: "7848:7:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 4182;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7848:7:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7847:9:36";
                };
                readonly scope: 4609;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 4212;
                readonly nodeType: "FunctionDefinition";
                readonly src: "7954:193:36";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 4211;
                    readonly nodeType: "Block";
                    readonly src: "8112:35:36";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 4208;
                                readonly name: "target4";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4047;
                                readonly src: "8132:7:36";
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
                                readonly id: 4207;
                                readonly name: "_delegate";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4608;
                                readonly src: "8122:9:36";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_address_$returns$_t_bytes_memory_ptr_$";
                                    readonly typeString: "function (address) returns (bytes memory)";
                                };
                            };
                            readonly id: 4209;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "8122:18:36";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes memory";
                            };
                        };
                        readonly id: 4210;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "8122:18:36";
                    }];
                };
                readonly baseFunctions: readonly [11135];
                readonly documentation: {
                    readonly id: 4191;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "7918:31:36";
                    readonly text: "@inheritdoc IHyperdriveCore";
                };
                readonly functionSelector: "dbbe8070";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "openShort";
                readonly nameLocation: "7963:9:36";
                readonly parameters: {
                    readonly id: 4201;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 4193;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4212;
                        readonly src: "7982:7:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 4192;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7982:7:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4195;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4212;
                        readonly src: "7999:7:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 4194;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7999:7:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4197;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4212;
                        readonly src: "8016:7:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 4196;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8016:7:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4200;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4212;
                        readonly src: "8033:28:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_Options_$10923_calldata_ptr";
                            readonly typeString: "struct IHyperdrive.Options";
                        };
                        readonly typeName: {
                            readonly id: 4199;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 4198;
                                readonly name: "IHyperdrive.Options";
                                readonly nameLocations: readonly ["8033:11:36", "8045:7:36"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10923;
                                readonly src: "8033:19:36";
                            };
                            readonly referencedDeclaration: 10923;
                            readonly src: "8033:19:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Options_$10923_storage_ptr";
                                readonly typeString: "struct IHyperdrive.Options";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7972:95:36";
                };
                readonly returnParameters: {
                    readonly id: 4206;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 4203;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4212;
                        readonly src: "8094:7:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 4202;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8094:7:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4205;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4212;
                        readonly src: "8103:7:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 4204;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8103:7:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "8093:18:36";
                };
                readonly scope: 4609;
                readonly stateMutability: "payable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 4232;
                readonly nodeType: "FunctionDefinition";
                readonly src: "8189:177:36";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 4231;
                    readonly nodeType: "Block";
                    readonly src: "8331:35:36";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 4228;
                                readonly name: "target2";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4041;
                                readonly src: "8351:7:36";
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
                                readonly id: 4227;
                                readonly name: "_delegate";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4608;
                                readonly src: "8341:9:36";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_address_$returns$_t_bytes_memory_ptr_$";
                                    readonly typeString: "function (address) returns (bytes memory)";
                                };
                            };
                            readonly id: 4229;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "8341:18:36";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes memory";
                            };
                        };
                        readonly id: 4230;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "8341:18:36";
                    }];
                };
                readonly baseFunctions: readonly [11150];
                readonly documentation: {
                    readonly id: 4213;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "8153:31:36";
                    readonly text: "@inheritdoc IHyperdriveCore";
                };
                readonly functionSelector: "29b23fc1";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "closeShort";
                readonly nameLocation: "8198:10:36";
                readonly parameters: {
                    readonly id: 4223;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 4215;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4232;
                        readonly src: "8218:7:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 4214;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8218:7:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4217;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4232;
                        readonly src: "8235:7:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 4216;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8235:7:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4219;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4232;
                        readonly src: "8252:7:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 4218;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8252:7:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4222;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4232;
                        readonly src: "8269:28:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_Options_$10923_calldata_ptr";
                            readonly typeString: "struct IHyperdrive.Options";
                        };
                        readonly typeName: {
                            readonly id: 4221;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 4220;
                                readonly name: "IHyperdrive.Options";
                                readonly nameLocations: readonly ["8269:11:36", "8281:7:36"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10923;
                                readonly src: "8269:19:36";
                            };
                            readonly referencedDeclaration: 10923;
                            readonly src: "8269:19:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Options_$10923_storage_ptr";
                                readonly typeString: "struct IHyperdrive.Options";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "8208:95:36";
                };
                readonly returnParameters: {
                    readonly id: 4226;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 4225;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4232;
                        readonly src: "8322:7:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 4224;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8322:7:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "8321:9:36";
                };
                readonly scope: 4609;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 4250;
                readonly nodeType: "FunctionDefinition";
                readonly src: "8425:168:36";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 4249;
                    readonly nodeType: "Block";
                    readonly src: "8558:35:36";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 4246;
                                readonly name: "target3";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4044;
                                readonly src: "8578:7:36";
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
                                readonly id: 4245;
                                readonly name: "_delegate";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4608;
                                readonly src: "8568:9:36";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_address_$returns$_t_bytes_memory_ptr_$";
                                    readonly typeString: "function (address) returns (bytes memory)";
                                };
                            };
                            readonly id: 4247;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "8568:18:36";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes memory";
                            };
                        };
                        readonly id: 4248;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "8568:18:36";
                    }];
                };
                readonly baseFunctions: readonly [11163];
                readonly documentation: {
                    readonly id: 4233;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "8389:31:36";
                    readonly text: "@inheritdoc IHyperdriveCore";
                };
                readonly functionSelector: "77d05ff4";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "initialize";
                readonly nameLocation: "8434:10:36";
                readonly parameters: {
                    readonly id: 4241;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 4235;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4250;
                        readonly src: "8454:7:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 4234;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8454:7:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4237;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4250;
                        readonly src: "8471:7:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 4236;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8471:7:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4240;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4250;
                        readonly src: "8488:28:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_Options_$10923_calldata_ptr";
                            readonly typeString: "struct IHyperdrive.Options";
                        };
                        readonly typeName: {
                            readonly id: 4239;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 4238;
                                readonly name: "IHyperdrive.Options";
                                readonly nameLocations: readonly ["8488:11:36", "8500:7:36"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10923;
                                readonly src: "8488:19:36";
                            };
                            readonly referencedDeclaration: 10923;
                            readonly src: "8488:19:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Options_$10923_storage_ptr";
                                readonly typeString: "struct IHyperdrive.Options";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "8444:78:36";
                };
                readonly returnParameters: {
                    readonly id: 4244;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 4243;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4250;
                        readonly src: "8549:7:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 4242;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8549:7:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "8548:9:36";
                };
                readonly scope: 4609;
                readonly stateMutability: "payable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 4272;
                readonly nodeType: "FunctionDefinition";
                readonly src: "8635:204:36";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 4271;
                    readonly nodeType: "Block";
                    readonly src: "8804:35:36";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 4268;
                                readonly name: "target1";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4038;
                                readonly src: "8824:7:36";
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
                                readonly id: 4267;
                                readonly name: "_delegate";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4608;
                                readonly src: "8814:9:36";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_address_$returns$_t_bytes_memory_ptr_$";
                                    readonly typeString: "function (address) returns (bytes memory)";
                                };
                            };
                            readonly id: 4269;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "8814:18:36";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes memory";
                            };
                        };
                        readonly id: 4270;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "8814:18:36";
                    }];
                };
                readonly baseFunctions: readonly [11180];
                readonly documentation: {
                    readonly id: 4251;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "8599:31:36";
                    readonly text: "@inheritdoc IHyperdriveCore";
                };
                readonly functionSelector: "4c2ac1d9";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "addLiquidity";
                readonly nameLocation: "8644:12:36";
                readonly parameters: {
                    readonly id: 4263;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 4253;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4272;
                        readonly src: "8666:7:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 4252;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8666:7:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4255;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4272;
                        readonly src: "8683:7:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 4254;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8683:7:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4257;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4272;
                        readonly src: "8700:7:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 4256;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8700:7:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4259;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4272;
                        readonly src: "8717:7:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 4258;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8717:7:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4262;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4272;
                        readonly src: "8734:28:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_Options_$10923_calldata_ptr";
                            readonly typeString: "struct IHyperdrive.Options";
                        };
                        readonly typeName: {
                            readonly id: 4261;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 4260;
                                readonly name: "IHyperdrive.Options";
                                readonly nameLocations: readonly ["8734:11:36", "8746:7:36"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10923;
                                readonly src: "8734:19:36";
                            };
                            readonly referencedDeclaration: 10923;
                            readonly src: "8734:19:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Options_$10923_storage_ptr";
                                readonly typeString: "struct IHyperdrive.Options";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "8656:112:36";
                };
                readonly returnParameters: {
                    readonly id: 4266;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 4265;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4272;
                        readonly src: "8795:7:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 4264;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8795:7:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "8794:9:36";
                };
                readonly scope: 4609;
                readonly stateMutability: "payable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 4292;
                readonly nodeType: "FunctionDefinition";
                readonly src: "8881:174:36";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 4291;
                    readonly nodeType: "Block";
                    readonly src: "9020:35:36";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 4288;
                                readonly name: "target1";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4038;
                                readonly src: "9040:7:36";
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
                                readonly id: 4287;
                                readonly name: "_delegate";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4608;
                                readonly src: "9030:9:36";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_address_$returns$_t_bytes_memory_ptr_$";
                                    readonly typeString: "function (address) returns (bytes memory)";
                                };
                            };
                            readonly id: 4289;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9030:18:36";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes memory";
                            };
                        };
                        readonly id: 4290;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "9030:18:36";
                    }];
                };
                readonly baseFunctions: readonly [11195];
                readonly documentation: {
                    readonly id: 4273;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "8845:31:36";
                    readonly text: "@inheritdoc IHyperdriveCore";
                };
                readonly functionSelector: "cbc13434";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "removeLiquidity";
                readonly nameLocation: "8890:15:36";
                readonly parameters: {
                    readonly id: 4281;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 4275;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4292;
                        readonly src: "8915:7:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 4274;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8915:7:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4277;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4292;
                        readonly src: "8932:7:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 4276;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8932:7:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4280;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4292;
                        readonly src: "8949:28:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_Options_$10923_calldata_ptr";
                            readonly typeString: "struct IHyperdrive.Options";
                        };
                        readonly typeName: {
                            readonly id: 4279;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 4278;
                                readonly name: "IHyperdrive.Options";
                                readonly nameLocations: readonly ["8949:11:36", "8961:7:36"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10923;
                                readonly src: "8949:19:36";
                            };
                            readonly referencedDeclaration: 10923;
                            readonly src: "8949:19:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Options_$10923_storage_ptr";
                                readonly typeString: "struct IHyperdrive.Options";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "8905:78:36";
                };
                readonly returnParameters: {
                    readonly id: 4286;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 4283;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4292;
                        readonly src: "9002:7:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 4282;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9002:7:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4285;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4292;
                        readonly src: "9011:7:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 4284;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9011:7:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "9001:18:36";
                };
                readonly scope: 4609;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 4312;
                readonly nodeType: "FunctionDefinition";
                readonly src: "9097:181:36";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 4311;
                    readonly nodeType: "Block";
                    readonly src: "9243:35:36";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 4308;
                                readonly name: "target1";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4038;
                                readonly src: "9263:7:36";
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
                                readonly id: 4307;
                                readonly name: "_delegate";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4608;
                                readonly src: "9253:9:36";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_address_$returns$_t_bytes_memory_ptr_$";
                                    readonly typeString: "function (address) returns (bytes memory)";
                                };
                            };
                            readonly id: 4309;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9253:18:36";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes memory";
                            };
                        };
                        readonly id: 4310;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "9253:18:36";
                    }];
                };
                readonly baseFunctions: readonly [11210];
                readonly documentation: {
                    readonly id: 4293;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "9061:31:36";
                    readonly text: "@inheritdoc IHyperdriveCore";
                };
                readonly functionSelector: "074a6de9";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "redeemWithdrawalShares";
                readonly nameLocation: "9106:22:36";
                readonly parameters: {
                    readonly id: 4301;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 4295;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4312;
                        readonly src: "9138:7:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 4294;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9138:7:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4297;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4312;
                        readonly src: "9155:7:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 4296;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9155:7:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4300;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4312;
                        readonly src: "9172:28:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_Options_$10923_calldata_ptr";
                            readonly typeString: "struct IHyperdrive.Options";
                        };
                        readonly typeName: {
                            readonly id: 4299;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 4298;
                                readonly name: "IHyperdrive.Options";
                                readonly nameLocations: readonly ["9172:11:36", "9184:7:36"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10923;
                                readonly src: "9172:19:36";
                            };
                            readonly referencedDeclaration: 10923;
                            readonly src: "9172:19:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Options_$10923_storage_ptr";
                                readonly typeString: "struct IHyperdrive.Options";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "9128:78:36";
                };
                readonly returnParameters: {
                    readonly id: 4306;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 4303;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4312;
                        readonly src: "9225:7:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 4302;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9225:7:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4305;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4312;
                        readonly src: "9234:7:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 4304;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9234:7:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "9224:18:36";
                };
                readonly scope: 4609;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 4323;
                readonly nodeType: "FunctionDefinition";
                readonly src: "9345:73:36";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 4322;
                    readonly nodeType: "Block";
                    readonly src: "9383:35:36";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 4319;
                                readonly name: "target4";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4047;
                                readonly src: "9403:7:36";
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
                                readonly id: 4318;
                                readonly name: "_delegate";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4608;
                                readonly src: "9393:9:36";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_address_$returns$_t_bytes_memory_ptr_$";
                                    readonly typeString: "function (address) returns (bytes memory)";
                                };
                            };
                            readonly id: 4320;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9393:18:36";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes memory";
                            };
                        };
                        readonly id: 4321;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "9393:18:36";
                    }];
                };
                readonly baseFunctions: readonly [11216];
                readonly documentation: {
                    readonly id: 4313;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "9309:31:36";
                    readonly text: "@inheritdoc IHyperdriveCore";
                };
                readonly functionSelector: "ed64bab2";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "checkpoint";
                readonly nameLocation: "9354:10:36";
                readonly parameters: {
                    readonly id: 4316;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 4315;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4323;
                        readonly src: "9365:7:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 4314;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9365:7:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "9364:9:36";
                };
                readonly returnParameters: {
                    readonly id: 4317;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "9383:0:36";
                };
                readonly scope: 4609;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 4337;
                readonly nodeType: "FunctionDefinition";
                readonly src: "9479:136:36";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 4336;
                    readonly nodeType: "Block";
                    readonly src: "9580:35:36";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 4333;
                                readonly name: "target0";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4035;
                                readonly src: "9600:7:36";
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
                                readonly id: 4332;
                                readonly name: "_delegate";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4608;
                                readonly src: "9590:9:36";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_address_$returns$_t_bytes_memory_ptr_$";
                                    readonly typeString: "function (address) returns (bytes memory)";
                                };
                            };
                            readonly id: 4334;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9590:18:36";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes memory";
                            };
                        };
                        readonly id: 4335;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "9590:18:36";
                    }];
                };
                readonly baseFunctions: readonly [11225];
                readonly documentation: {
                    readonly id: 4324;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "9443:31:36";
                    readonly text: "@inheritdoc IHyperdriveCore";
                };
                readonly functionSelector: "3e691db9";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "collectGovernanceFee";
                readonly nameLocation: "9488:20:36";
                readonly parameters: {
                    readonly id: 4328;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 4327;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4337;
                        readonly src: "9518:28:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_Options_$10923_calldata_ptr";
                            readonly typeString: "struct IHyperdrive.Options";
                        };
                        readonly typeName: {
                            readonly id: 4326;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 4325;
                                readonly name: "IHyperdrive.Options";
                                readonly nameLocations: readonly ["9518:11:36", "9530:7:36"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10923;
                                readonly src: "9518:19:36";
                            };
                            readonly referencedDeclaration: 10923;
                            readonly src: "9518:19:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Options_$10923_storage_ptr";
                                readonly typeString: "struct IHyperdrive.Options";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "9508:44:36";
                };
                readonly returnParameters: {
                    readonly id: 4331;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 4330;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4337;
                        readonly src: "9571:7:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 4329;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9571:7:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "9570:9:36";
                };
                readonly scope: 4609;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 4348;
                readonly nodeType: "FunctionDefinition";
                readonly src: "9657:65:36";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 4347;
                    readonly nodeType: "Block";
                    readonly src: "9687:35:36";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 4344;
                                readonly name: "target0";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4035;
                                readonly src: "9707:7:36";
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
                                readonly id: 4343;
                                readonly name: "_delegate";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4608;
                                readonly src: "9697:9:36";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_address_$returns$_t_bytes_memory_ptr_$";
                                    readonly typeString: "function (address) returns (bytes memory)";
                                };
                            };
                            readonly id: 4345;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9697:18:36";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes memory";
                            };
                        };
                        readonly id: 4346;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "9697:18:36";
                    }];
                };
                readonly baseFunctions: readonly [11231];
                readonly documentation: {
                    readonly id: 4338;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "9621:31:36";
                    readonly text: "@inheritdoc IHyperdriveCore";
                };
                readonly functionSelector: "02329a29";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "pause";
                readonly nameLocation: "9666:5:36";
                readonly parameters: {
                    readonly id: 4341;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 4340;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4348;
                        readonly src: "9672:4:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 4339;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9672:4:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "9671:6:36";
                };
                readonly returnParameters: {
                    readonly id: 4342;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "9687:0:36";
                };
                readonly scope: 4609;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 4359;
                readonly nodeType: "FunctionDefinition";
                readonly src: "9764:78:36";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 4358;
                    readonly nodeType: "Block";
                    readonly src: "9807:35:36";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 4355;
                                readonly name: "target0";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4035;
                                readonly src: "9827:7:36";
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
                                readonly id: 4354;
                                readonly name: "_delegate";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4608;
                                readonly src: "9817:9:36";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_address_$returns$_t_bytes_memory_ptr_$";
                                    readonly typeString: "function (address) returns (bytes memory)";
                                };
                            };
                            readonly id: 4356;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9817:18:36";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes memory";
                            };
                        };
                        readonly id: 4357;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "9817:18:36";
                    }];
                };
                readonly baseFunctions: readonly [11237];
                readonly documentation: {
                    readonly id: 4349;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "9728:31:36";
                    readonly text: "@inheritdoc IHyperdriveCore";
                };
                readonly functionSelector: "a42dce80";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "setFeeCollector";
                readonly nameLocation: "9773:15:36";
                readonly parameters: {
                    readonly id: 4352;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 4351;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4359;
                        readonly src: "9789:7:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 4350;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9789:7:36";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "9788:9:36";
                };
                readonly returnParameters: {
                    readonly id: 4353;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "9807:0:36";
                };
                readonly scope: 4609;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 4370;
                readonly nodeType: "FunctionDefinition";
                readonly src: "9884:80:36";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 4369;
                    readonly nodeType: "Block";
                    readonly src: "9929:35:36";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 4366;
                                readonly name: "target0";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4035;
                                readonly src: "9949:7:36";
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
                                readonly id: 4365;
                                readonly name: "_delegate";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4608;
                                readonly src: "9939:9:36";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_address_$returns$_t_bytes_memory_ptr_$";
                                    readonly typeString: "function (address) returns (bytes memory)";
                                };
                            };
                            readonly id: 4367;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9939:18:36";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes memory";
                            };
                        };
                        readonly id: 4368;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "9939:18:36";
                    }];
                };
                readonly baseFunctions: readonly [11243];
                readonly documentation: {
                    readonly id: 4360;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "9848:31:36";
                    readonly text: "@inheritdoc IHyperdriveCore";
                };
                readonly functionSelector: "e4af29d1";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "setSweepCollector";
                readonly nameLocation: "9893:17:36";
                readonly parameters: {
                    readonly id: 4363;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 4362;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4370;
                        readonly src: "9911:7:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 4361;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9911:7:36";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "9910:9:36";
                };
                readonly returnParameters: {
                    readonly id: 4364;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "9929:0:36";
                };
                readonly scope: 4609;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 4381;
                readonly nodeType: "FunctionDefinition";
                readonly src: "10006:76:36";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 4380;
                    readonly nodeType: "Block";
                    readonly src: "10047:35:36";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 4377;
                                readonly name: "target0";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4035;
                                readonly src: "10067:7:36";
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
                                readonly id: 4376;
                                readonly name: "_delegate";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4608;
                                readonly src: "10057:9:36";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_address_$returns$_t_bytes_memory_ptr_$";
                                    readonly typeString: "function (address) returns (bytes memory)";
                                };
                            };
                            readonly id: 4378;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "10057:18:36";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes memory";
                            };
                        };
                        readonly id: 4379;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "10057:18:36";
                    }];
                };
                readonly baseFunctions: readonly [11249];
                readonly documentation: {
                    readonly id: 4371;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "9970:31:36";
                    readonly text: "@inheritdoc IHyperdriveCore";
                };
                readonly functionSelector: "ab033ea9";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "setGovernance";
                readonly nameLocation: "10015:13:36";
                readonly parameters: {
                    readonly id: 4374;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 4373;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4381;
                        readonly src: "10029:7:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 4372;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "10029:7:36";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "10028:9:36";
                };
                readonly returnParameters: {
                    readonly id: 4375;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "10047:0:36";
                };
                readonly scope: 4609;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 4394;
                readonly nodeType: "FunctionDefinition";
                readonly src: "10124:78:36";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 4393;
                    readonly nodeType: "Block";
                    readonly src: "10167:35:36";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 4390;
                                readonly name: "target0";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4035;
                                readonly src: "10187:7:36";
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
                                readonly id: 4389;
                                readonly name: "_delegate";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4608;
                                readonly src: "10177:9:36";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_address_$returns$_t_bytes_memory_ptr_$";
                                    readonly typeString: "function (address) returns (bytes memory)";
                                };
                            };
                            readonly id: 4391;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "10177:18:36";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes memory";
                            };
                        };
                        readonly id: 4392;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "10177:18:36";
                    }];
                };
                readonly baseFunctions: readonly [11257];
                readonly documentation: {
                    readonly id: 4382;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "10088:31:36";
                    readonly text: "@inheritdoc IHyperdriveCore";
                };
                readonly functionSelector: "7180c8ca";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "setPauser";
                readonly nameLocation: "10133:9:36";
                readonly parameters: {
                    readonly id: 4387;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 4384;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4394;
                        readonly src: "10143:7:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 4383;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "10143:7:36";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4386;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4394;
                        readonly src: "10152:4:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 4385;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "10152:4:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "10142:15:36";
                };
                readonly returnParameters: {
                    readonly id: 4388;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "10167:0:36";
                };
                readonly scope: 4609;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 4406;
                readonly nodeType: "FunctionDefinition";
                readonly src: "10244:67:36";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 4405;
                    readonly nodeType: "Block";
                    readonly src: "10276:35:36";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 4402;
                                readonly name: "target0";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4035;
                                readonly src: "10296:7:36";
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
                                readonly id: 4401;
                                readonly name: "_delegate";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4608;
                                readonly src: "10286:9:36";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_address_$returns$_t_bytes_memory_ptr_$";
                                    readonly typeString: "function (address) returns (bytes memory)";
                                };
                            };
                            readonly id: 4403;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "10286:18:36";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes memory";
                            };
                        };
                        readonly id: 4404;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "10286:18:36";
                    }];
                };
                readonly baseFunctions: readonly [11264];
                readonly documentation: {
                    readonly id: 4395;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "10208:31:36";
                    readonly text: "@inheritdoc IHyperdriveCore";
                };
                readonly functionSelector: "01681a62";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "sweep";
                readonly nameLocation: "10253:5:36";
                readonly parameters: {
                    readonly id: 4399;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 4398;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4406;
                        readonly src: "10259:6:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_IERC20_$10358";
                            readonly typeString: "contract IERC20";
                        };
                        readonly typeName: {
                            readonly id: 4397;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 4396;
                                readonly name: "IERC20";
                                readonly nameLocations: readonly ["10259:6:36"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10358;
                                readonly src: "10259:6:36";
                            };
                            readonly referencedDeclaration: 10358;
                            readonly src: "10259:6:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IERC20_$10358";
                                readonly typeString: "contract IERC20";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "10258:8:36";
                };
                readonly returnParameters: {
                    readonly id: 4400;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "10276:0:36";
                };
                readonly scope: 4609;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 4423;
                readonly nodeType: "FunctionDefinition";
                readonly src: "10377:102:36";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 4422;
                    readonly nodeType: "Block";
                    readonly src: "10444:35:36";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 4419;
                                readonly name: "target0";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4035;
                                readonly src: "10464:7:36";
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
                                readonly id: 4418;
                                readonly name: "_delegate";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4608;
                                readonly src: "10454:9:36";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_address_$returns$_t_bytes_memory_ptr_$";
                                    readonly typeString: "function (address) returns (bytes memory)";
                                };
                            };
                            readonly id: 4420;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "10454:18:36";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes memory";
                            };
                        };
                        readonly id: 4421;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "10454:18:36";
                    }];
                };
                readonly baseFunctions: readonly [12054];
                readonly documentation: {
                    readonly id: 4407;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "10341:31:36";
                    readonly text: "@inheritdoc IMultiTokenCore";
                };
                readonly functionSelector: "1c0f12b6";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "transferFrom";
                readonly nameLocation: "10386:12:36";
                readonly parameters: {
                    readonly id: 4416;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 4409;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4423;
                        readonly src: "10399:7:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 4408;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "10399:7:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4411;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4423;
                        readonly src: "10408:7:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 4410;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "10408:7:36";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4413;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4423;
                        readonly src: "10417:7:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 4412;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "10417:7:36";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4415;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4423;
                        readonly src: "10426:7:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 4414;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "10426:7:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "10398:36:36";
                };
                readonly returnParameters: {
                    readonly id: 4417;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "10444:0:36";
                };
                readonly scope: 4609;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 4442;
                readonly nodeType: "FunctionDefinition";
                readonly src: "10521:163:36";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 4441;
                    readonly nodeType: "Block";
                    readonly src: "10649:35:36";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 4438;
                                readonly name: "target0";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4035;
                                readonly src: "10669:7:36";
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
                                readonly id: 4437;
                                readonly name: "_delegate";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4608;
                                readonly src: "10659:9:36";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_address_$returns$_t_bytes_memory_ptr_$";
                                    readonly typeString: "function (address) returns (bytes memory)";
                                };
                            };
                            readonly id: 4439;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "10659:18:36";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes memory";
                            };
                        };
                        readonly id: 4440;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "10659:18:36";
                    }];
                };
                readonly baseFunctions: readonly [12068];
                readonly documentation: {
                    readonly id: 4424;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "10485:31:36";
                    readonly text: "@inheritdoc IMultiTokenCore";
                };
                readonly functionSelector: "e44808bc";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "transferFromBridge";
                readonly nameLocation: "10530:18:36";
                readonly parameters: {
                    readonly id: 4435;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 4426;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4442;
                        readonly src: "10558:7:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 4425;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "10558:7:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4428;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4442;
                        readonly src: "10575:7:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 4427;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "10575:7:36";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4430;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4442;
                        readonly src: "10592:7:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 4429;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "10592:7:36";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4432;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4442;
                        readonly src: "10609:7:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 4431;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "10609:7:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4434;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4442;
                        readonly src: "10626:7:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 4433;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "10626:7:36";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "10548:91:36";
                };
                readonly returnParameters: {
                    readonly id: 4436;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "10649:0:36";
                };
                readonly scope: 4609;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 4459;
                readonly nodeType: "FunctionDefinition";
                readonly src: "10726:107:36";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 4458;
                    readonly nodeType: "Block";
                    readonly src: "10798:35:36";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 4455;
                                readonly name: "target0";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4035;
                                readonly src: "10818:7:36";
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
                                readonly id: 4454;
                                readonly name: "_delegate";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4608;
                                readonly src: "10808:9:36";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_address_$returns$_t_bytes_memory_ptr_$";
                                    readonly typeString: "function (address) returns (bytes memory)";
                                };
                            };
                            readonly id: 4456;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "10808:18:36";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes memory";
                            };
                        };
                        readonly id: 4457;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "10808:18:36";
                    }];
                };
                readonly baseFunctions: readonly [12090];
                readonly documentation: {
                    readonly id: 4443;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "10690:31:36";
                    readonly text: "@inheritdoc IMultiTokenCore";
                };
                readonly functionSelector: "4ed2d6ac";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "setApprovalBridge";
                readonly nameLocation: "10735:17:36";
                readonly parameters: {
                    readonly id: 4452;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 4445;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4459;
                        readonly src: "10753:7:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 4444;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "10753:7:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4447;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4459;
                        readonly src: "10762:7:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 4446;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "10762:7:36";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4449;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4459;
                        readonly src: "10771:7:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 4448;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "10771:7:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4451;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4459;
                        readonly src: "10780:7:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 4450;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "10780:7:36";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "10752:36:36";
                };
                readonly returnParameters: {
                    readonly id: 4453;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "10798:0:36";
                };
                readonly scope: 4609;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 4472;
                readonly nodeType: "FunctionDefinition";
                readonly src: "10875:86:36";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 4471;
                    readonly nodeType: "Block";
                    readonly src: "10926:35:36";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 4468;
                                readonly name: "target0";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4035;
                                readonly src: "10946:7:36";
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
                                readonly id: 4467;
                                readonly name: "_delegate";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4608;
                                readonly src: "10936:9:36";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_address_$returns$_t_bytes_memory_ptr_$";
                                    readonly typeString: "function (address) returns (bytes memory)";
                                };
                            };
                            readonly id: 4469;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "10936:18:36";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes memory";
                            };
                        };
                        readonly id: 4470;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "10936:18:36";
                    }];
                };
                readonly baseFunctions: readonly [12098];
                readonly documentation: {
                    readonly id: 4460;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "10839:31:36";
                    readonly text: "@inheritdoc IMultiTokenCore";
                };
                readonly functionSelector: "a22cb465";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "setApprovalForAll";
                readonly nameLocation: "10884:17:36";
                readonly parameters: {
                    readonly id: 4465;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 4462;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4472;
                        readonly src: "10902:7:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 4461;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "10902:7:36";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4464;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4472;
                        readonly src: "10911:4:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 4463;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "10911:4:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "10901:15:36";
                };
                readonly returnParameters: {
                    readonly id: 4466;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "10926:0:36";
                };
                readonly scope: 4609;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 4487;
                readonly nodeType: "FunctionDefinition";
                readonly src: "11003:92:36";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 4486;
                    readonly nodeType: "Block";
                    readonly src: "11060:35:36";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 4483;
                                readonly name: "target0";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4035;
                                readonly src: "11080:7:36";
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
                                readonly id: 4482;
                                readonly name: "_delegate";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4608;
                                readonly src: "11070:9:36";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_address_$returns$_t_bytes_memory_ptr_$";
                                    readonly typeString: "function (address) returns (bytes memory)";
                                };
                            };
                            readonly id: 4484;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "11070:18:36";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes memory";
                            };
                        };
                        readonly id: 4485;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "11070:18:36";
                    }];
                };
                readonly baseFunctions: readonly [12078];
                readonly documentation: {
                    readonly id: 4473;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "10967:31:36";
                    readonly text: "@inheritdoc IMultiTokenCore";
                };
                readonly functionSelector: "9cd241af";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "setApproval";
                readonly nameLocation: "11012:11:36";
                readonly parameters: {
                    readonly id: 4480;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 4475;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4487;
                        readonly src: "11024:7:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 4474;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11024:7:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4477;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4487;
                        readonly src: "11033:7:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 4476;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11033:7:36";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4479;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4487;
                        readonly src: "11042:7:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 4478;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11042:7:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "11023:27:36";
                };
                readonly returnParameters: {
                    readonly id: 4481;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "11060:0:36";
                };
                readonly scope: 4609;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 4506;
                readonly nodeType: "FunctionDefinition";
                readonly src: "11137:167:36";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 4505;
                    readonly nodeType: "Block";
                    readonly src: "11269:35:36";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 4502;
                                readonly name: "target0";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4035;
                                readonly src: "11289:7:36";
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
                                readonly id: 4501;
                                readonly name: "_delegate";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4608;
                                readonly src: "11279:9:36";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_address_$returns$_t_bytes_memory_ptr_$";
                                    readonly typeString: "function (address) returns (bytes memory)";
                                };
                            };
                            readonly id: 4503;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "11279:18:36";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes memory";
                            };
                        };
                        readonly id: 4504;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "11279:18:36";
                    }];
                };
                readonly baseFunctions: readonly [12112];
                readonly documentation: {
                    readonly id: 4488;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "11101:31:36";
                    readonly text: "@inheritdoc IMultiTokenCore";
                };
                readonly functionSelector: "17fad7fc";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "batchTransferFrom";
                readonly nameLocation: "11146:17:36";
                readonly parameters: {
                    readonly id: 4499;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 4490;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4506;
                        readonly src: "11173:7:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 4489;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11173:7:36";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4492;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4506;
                        readonly src: "11190:7:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 4491;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11190:7:36";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4495;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4506;
                        readonly src: "11207:18:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_uint256_$dyn_calldata_ptr";
                            readonly typeString: "uint256[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 4493;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "11207:7:36";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly id: 4494;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "11207:9:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_uint256_$dyn_storage_ptr";
                                readonly typeString: "uint256[]";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4498;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4506;
                        readonly src: "11235:18:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_uint256_$dyn_calldata_ptr";
                            readonly typeString: "uint256[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 4496;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "11235:7:36";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly id: 4497;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "11235:9:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_uint256_$dyn_storage_ptr";
                                readonly typeString: "uint256[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "11163:96:36";
                };
                readonly returnParameters: {
                    readonly id: 4500;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "11269:0:36";
                };
                readonly scope: 4609;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 4555;
                readonly nodeType: "FunctionDefinition";
                readonly src: "12469:869:36";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 4554;
                    readonly nodeType: "Block";
                    readonly src: "12659:679:36";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [4525, 4527];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 4525;
                            readonly mutability: "mutable";
                            readonly name: "success";
                            readonly nameLocation: "12675:7:36";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 4554;
                            readonly src: "12670:12:36";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly typeName: {
                                readonly id: 4524;
                                readonly name: "bool";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "12670:4:36";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly visibility: "internal";
                        }, {
                            readonly constant: false;
                            readonly id: 4527;
                            readonly mutability: "mutable";
                            readonly name: "result";
                            readonly nameLocation: "12697:6:36";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 4554;
                            readonly src: "12684:19:36";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes";
                            };
                            readonly typeName: {
                                readonly id: 4526;
                                readonly name: "bytes";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "12684:5:36";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_storage_ptr";
                                    readonly typeString: "bytes";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 4547;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly expression: {
                                        readonly id: 4532;
                                        readonly name: "HyperdriveTarget0";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 5409;
                                        readonly src: "12773:17:36";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_contract$_HyperdriveTarget0_$5409_$";
                                            readonly typeString: "type(contract HyperdriveTarget0)";
                                        };
                                    };
                                    readonly id: 4533;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "12791:12:36";
                                    readonly memberName: "permitForAll";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 4922;
                                    readonly src: "12773:30:36";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_declaration_nonpayable$_t_bytes32_$_t_bytes32_$_t_address_$_t_address_$_t_bool_$_t_uint256_$_t_uint8_$_t_bytes32_$_t_bytes32_$returns$__$";
                                        readonly typeString: "function HyperdriveTarget0.permitForAll(bytes32,bytes32,address,address,bool,uint256,uint8,bytes32,bytes32)";
                                    };
                                }, {
                                    readonly components: readonly [{
                                        readonly arguments: readonly [];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [];
                                            readonly id: 4534;
                                            readonly name: "domainSeparator";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 4583;
                                            readonly src: "12843:15:36";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_internal_view$__$returns$_t_bytes32_$";
                                                readonly typeString: "function () view returns (bytes32)";
                                            };
                                        };
                                        readonly id: 4535;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "12843:17:36";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    }, {
                                        readonly id: 4536;
                                        readonly name: "PERMIT_TYPEHASH";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 4053;
                                        readonly src: "12882:15:36";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    }, {
                                        readonly id: 4537;
                                        readonly name: "owner";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 4509;
                                        readonly src: "12919:5:36";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    }, {
                                        readonly id: 4538;
                                        readonly name: "spender";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 4511;
                                        readonly src: "12946:7:36";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    }, {
                                        readonly id: 4539;
                                        readonly name: "_approved";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 4513;
                                        readonly src: "12975:9:36";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    }, {
                                        readonly id: 4540;
                                        readonly name: "deadline";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 4515;
                                        readonly src: "13006:8:36";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }, {
                                        readonly id: 4541;
                                        readonly name: "v";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 4517;
                                        readonly src: "13036:1:36";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint8";
                                            readonly typeString: "uint8";
                                        };
                                    }, {
                                        readonly id: 4542;
                                        readonly name: "r";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 4519;
                                        readonly src: "13059:1:36";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    }, {
                                        readonly id: 4543;
                                        readonly name: "s";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 4521;
                                        readonly src: "13082:1:36";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    }];
                                    readonly id: 4544;
                                    readonly isConstant: false;
                                    readonly isInlineArray: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "TupleExpression";
                                    readonly src: "12821:280:36";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$_t_bytes32_$_t_bytes32_$_t_address_$_t_address_$_t_bool_$_t_uint256_$_t_uint8_$_t_bytes32_$_t_bytes32_$";
                                        readonly typeString: "tuple(bytes32,bytes32,address,address,bool,uint256,uint8,bytes32,bytes32)";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_function_declaration_nonpayable$_t_bytes32_$_t_bytes32_$_t_address_$_t_address_$_t_bool_$_t_uint256_$_t_uint8_$_t_bytes32_$_t_bytes32_$returns$__$";
                                        readonly typeString: "function HyperdriveTarget0.permitForAll(bytes32,bytes32,address,address,bool,uint256,uint8,bytes32,bytes32)";
                                    }, {
                                        readonly typeIdentifier: "t_tuple$_t_bytes32_$_t_bytes32_$_t_address_$_t_address_$_t_bool_$_t_uint256_$_t_uint8_$_t_bytes32_$_t_bytes32_$";
                                        readonly typeString: "tuple(bytes32,bytes32,address,address,bool,uint256,uint8,bytes32,bytes32)";
                                    }];
                                    readonly expression: {
                                        readonly id: 4530;
                                        readonly name: "abi";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -1;
                                        readonly src: "12741:3:36";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_magic_abi";
                                            readonly typeString: "abi";
                                        };
                                    };
                                    readonly id: 4531;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "12745:10:36";
                                    readonly memberName: "encodeCall";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "12741:14:36";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_abiencodecall_pure$__$returns$_t_bytes_memory_ptr_$";
                                        readonly typeString: "function () pure returns (bytes memory)";
                                    };
                                };
                                readonly id: 4545;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "12741:374:36";
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
                                readonly expression: {
                                    readonly id: 4528;
                                    readonly name: "target0";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 4035;
                                    readonly src: "12707:7:36";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly id: 4529;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "12715:12:36";
                                readonly memberName: "delegatecall";
                                readonly nodeType: "MemberAccess";
                                readonly src: "12707:20:36";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_baredelegatecall_nonpayable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$";
                                    readonly typeString: "function (bytes memory) returns (bool,bytes memory)";
                                };
                            };
                            readonly id: 4546;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "12707:418:36";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_bool_$_t_bytes_memory_ptr_$";
                                readonly typeString: "tuple(bool,bytes memory)";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "12669:456:36";
                    }, {
                        readonly condition: {
                            readonly id: 4549;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "UnaryOperation";
                            readonly operator: "!";
                            readonly prefix: true;
                            readonly src: "13139:8:36";
                            readonly subExpression: {
                                readonly id: 4548;
                                readonly name: "success";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4525;
                                readonly src: "13140:7:36";
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
                        readonly id: 4552;
                        readonly nodeType: "IfStatement";
                        readonly src: "13135:117:36";
                        readonly trueBody: {
                            readonly id: 4551;
                            readonly nodeType: "Block";
                            readonly src: "13149:103:36";
                            readonly statements: readonly [{
                                readonly AST: {
                                    readonly nodeType: "YulBlock";
                                    readonly src: "13172:70:36";
                                    readonly statements: readonly [{
                                        readonly expression: {
                                            readonly arguments: readonly [{
                                                readonly arguments: readonly [{
                                                    readonly name: "result";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "13201:6:36";
                                                }, {
                                                    readonly kind: "number";
                                                    readonly nodeType: "YulLiteral";
                                                    readonly src: "13209:2:36";
                                                    readonly type: "";
                                                    readonly value: "32";
                                                }];
                                                readonly functionName: {
                                                    readonly name: "add";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "13197:3:36";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "13197:15:36";
                                            }, {
                                                readonly arguments: readonly [{
                                                    readonly name: "result";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "13220:6:36";
                                                }];
                                                readonly functionName: {
                                                    readonly name: "mload";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "13214:5:36";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "13214:13:36";
                                            }];
                                            readonly functionName: {
                                                readonly name: "revert";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "13190:6:36";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "13190:38:36";
                                        };
                                        readonly nodeType: "YulExpressionStatement";
                                        readonly src: "13190:38:36";
                                    }];
                                };
                                readonly evmVersion: "paris";
                                readonly externalReferences: readonly [{
                                    readonly declaration: 4527;
                                    readonly isOffset: false;
                                    readonly isSlot: false;
                                    readonly src: "13201:6:36";
                                    readonly valueSize: 1;
                                }, {
                                    readonly declaration: 4527;
                                    readonly isOffset: false;
                                    readonly isSlot: false;
                                    readonly src: "13220:6:36";
                                    readonly valueSize: 1;
                                }];
                                readonly id: 4550;
                                readonly nodeType: "InlineAssembly";
                                readonly src: "13163:79:36";
                            }];
                        };
                    }, {
                        readonly AST: {
                            readonly nodeType: "YulBlock";
                            readonly src: "13270:62:36";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly name: "result";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "13295:6:36";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "13303:2:36";
                                            readonly type: "";
                                            readonly value: "32";
                                        }];
                                        readonly functionName: {
                                            readonly name: "add";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "13291:3:36";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "13291:15:36";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly name: "result";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "13314:6:36";
                                        }];
                                        readonly functionName: {
                                            readonly name: "mload";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "13308:5:36";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "13308:13:36";
                                    }];
                                    readonly functionName: {
                                        readonly name: "return";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "13284:6:36";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "13284:38:36";
                                };
                                readonly nodeType: "YulExpressionStatement";
                                readonly src: "13284:38:36";
                            }];
                        };
                        readonly evmVersion: "paris";
                        readonly externalReferences: readonly [{
                            readonly declaration: 4527;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "13295:6:36";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 4527;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "13314:6:36";
                            readonly valueSize: 1;
                        }];
                        readonly id: 4553;
                        readonly nodeType: "InlineAssembly";
                        readonly src: "13261:71:36";
                    }];
                };
                readonly baseFunctions: readonly [12130];
                readonly documentation: {
                    readonly id: 4507;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "11310:1154:36";
                    readonly text: "@notice Allows a caller who is not the owner of an account to execute the\n      functionality of 'approve' for all assets with the owners signature.\n @param owner The owner of the account which is having the new approval set.\n @param spender The address which will be allowed to spend owner's tokens.\n @param _approved A boolean of the approval status to set to.\n @param deadline The timestamp which the signature must be submitted by\n        to be valid.\n @param v Extra ECDSA data which allows public key recovery from\n        signature assumed to be 27 or 28.\n @param r The r component of the ECDSA signature.\n @param s The s component of the ECDSA signature.\n @dev The signature for this function follows EIP 712 standard and should\n      be generated with the eth_signTypedData JSON RPC call instead of\n      the eth_sign JSON RPC call. If using out of date parity signing\n      libraries the v component may need to be adjusted. Also it is very\n      rare but possible for v to be other values, those values are not\n      supported.";
                };
                readonly functionSelector: "9032c726";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "permitForAll";
                readonly nameLocation: "12478:12:36";
                readonly parameters: {
                    readonly id: 4522;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 4509;
                        readonly mutability: "mutable";
                        readonly name: "owner";
                        readonly nameLocation: "12508:5:36";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4555;
                        readonly src: "12500:13:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 4508;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "12500:7:36";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4511;
                        readonly mutability: "mutable";
                        readonly name: "spender";
                        readonly nameLocation: "12531:7:36";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4555;
                        readonly src: "12523:15:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 4510;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "12523:7:36";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4513;
                        readonly mutability: "mutable";
                        readonly name: "_approved";
                        readonly nameLocation: "12553:9:36";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4555;
                        readonly src: "12548:14:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 4512;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "12548:4:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4515;
                        readonly mutability: "mutable";
                        readonly name: "deadline";
                        readonly nameLocation: "12580:8:36";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4555;
                        readonly src: "12572:16:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 4514;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "12572:7:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4517;
                        readonly mutability: "mutable";
                        readonly name: "v";
                        readonly nameLocation: "12604:1:36";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4555;
                        readonly src: "12598:7:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint8";
                            readonly typeString: "uint8";
                        };
                        readonly typeName: {
                            readonly id: 4516;
                            readonly name: "uint8";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "12598:5:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint8";
                                readonly typeString: "uint8";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4519;
                        readonly mutability: "mutable";
                        readonly name: "r";
                        readonly nameLocation: "12623:1:36";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4555;
                        readonly src: "12615:9:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 4518;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "12615:7:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 4521;
                        readonly mutability: "mutable";
                        readonly name: "s";
                        readonly nameLocation: "12642:1:36";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4555;
                        readonly src: "12634:9:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 4520;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "12634:7:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "12490:159:36";
                };
                readonly returnParameters: {
                    readonly id: 4523;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "12659:0:36";
                };
                readonly scope: 4609;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 4583;
                readonly nodeType: "FunctionDefinition";
                readonly src: "13619:426:36";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 4582;
                    readonly nodeType: "Block";
                    readonly src: "13676:369:36";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly hexValue: "454950373132446f6d61696e28737472696e672076657273696f6e2c75696e7432353620636861696e49642c6164647265737320766572696679696e67436f6e747261637429";
                                        readonly id: 4565;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "string";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "13799:72:36";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_stringliteral_2aef22f9d7df5f9d21c56d14029233f3fdaa91917727e1eb68e504d27072d6cd";
                                            readonly typeString: "literal_string \"EIP712Domain(string version,uint256 chainId,address verifyingContract)\"";
                                        };
                                        readonly value: "EIP712Domain(string version,uint256 chainId,address verifyingContract)";
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_stringliteral_2aef22f9d7df5f9d21c56d14029233f3fdaa91917727e1eb68e504d27072d6cd";
                                            readonly typeString: "literal_string \"EIP712Domain(string version,uint256 chainId,address verifyingContract)\"";
                                        }];
                                        readonly id: 4564;
                                        readonly name: "keccak256";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -8;
                                        readonly src: "13764:9:36";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                            readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                        };
                                    };
                                    readonly id: 4566;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "13764:129:36";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes32";
                                        readonly typeString: "bytes32";
                                    };
                                }, {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly hexValue: "31";
                                            readonly id: 4570;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "string";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "13931:3:36";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_stringliteral_c89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6";
                                                readonly typeString: "literal_string \"1\"";
                                            };
                                            readonly value: "1";
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_stringliteral_c89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6";
                                                readonly typeString: "literal_string \"1\"";
                                            }];
                                            readonly id: 4569;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "13925:5:36";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_bytes_storage_ptr_$";
                                                readonly typeString: "type(bytes storage pointer)";
                                            };
                                            readonly typeName: {
                                                readonly id: 4568;
                                                readonly name: "bytes";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "13925:5:36";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 4571;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "13925:10:36";
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
                                        readonly id: 4567;
                                        readonly name: "keccak256";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -8;
                                        readonly src: "13915:9:36";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                            readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                        };
                                    };
                                    readonly id: 4572;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "13915:21:36";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes32";
                                        readonly typeString: "bytes32";
                                    };
                                }, {
                                    readonly expression: {
                                        readonly id: 4573;
                                        readonly name: "block";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -4;
                                        readonly src: "13958:5:36";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_magic_block";
                                            readonly typeString: "block";
                                        };
                                    };
                                    readonly id: 4574;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "13964:7:36";
                                    readonly memberName: "chainid";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "13958:13:36";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly arguments: readonly [{
                                        readonly id: 4577;
                                        readonly name: "this";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -28;
                                        readonly src: "14001:4:36";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_Hyperdrive_$4609";
                                            readonly typeString: "contract Hyperdrive";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_contract$_Hyperdrive_$4609";
                                            readonly typeString: "contract Hyperdrive";
                                        }];
                                        readonly id: 4576;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "ElementaryTypeNameExpression";
                                        readonly src: "13993:7:36";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_address_$";
                                            readonly typeString: "type(address)";
                                        };
                                        readonly typeName: {
                                            readonly id: 4575;
                                            readonly name: "address";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "13993:7:36";
                                            readonly typeDescriptions: {};
                                        };
                                    };
                                    readonly id: 4578;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "typeConversion";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "13993:13:36";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
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
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    }];
                                    readonly expression: {
                                        readonly id: 4562;
                                        readonly name: "abi";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -1;
                                        readonly src: "13732:3:36";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_magic_abi";
                                            readonly typeString: "abi";
                                        };
                                    };
                                    readonly id: 4563;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "13736:6:36";
                                    readonly memberName: "encode";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "13732:10:36";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$";
                                        readonly typeString: "function () pure returns (bytes memory)";
                                    };
                                };
                                readonly id: 4579;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "13732:292:36";
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
                                readonly id: 4561;
                                readonly name: "keccak256";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: -8;
                                readonly src: "13705:9:36";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                    readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                };
                            };
                            readonly id: 4580;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "13705:333:36";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly functionReturnParameters: 4560;
                        readonly id: 4581;
                        readonly nodeType: "Return";
                        readonly src: "13686:352:36";
                    }];
                };
                readonly documentation: {
                    readonly id: 4556;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "13360:254:36";
                    readonly text: "@notice Computes the EIP712 domain separator which prevents user signed\n         messages for this contract to be replayed in other contracts:\n         https://eips.ethereum.org/EIPS/eip-712.\n @return The EIP712 domain separator.";
                };
                readonly functionSelector: "f698da25";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "domainSeparator";
                readonly nameLocation: "13628:15:36";
                readonly parameters: {
                    readonly id: 4557;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "13643:2:36";
                };
                readonly returnParameters: {
                    readonly id: 4560;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 4559;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4583;
                        readonly src: "13667:7:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 4558;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "13667:7:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "13666:9:36";
                };
                readonly scope: 4609;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "public";
            }, {
                readonly id: 4608;
                readonly nodeType: "FunctionDefinition";
                readonly src: "14323:359:36";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 4607;
                    readonly nodeType: "Block";
                    readonly src: "14391:291:36";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [4592, 4594];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 4592;
                            readonly mutability: "mutable";
                            readonly name: "success";
                            readonly nameLocation: "14407:7:36";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 4607;
                            readonly src: "14402:12:36";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly typeName: {
                                readonly id: 4591;
                                readonly name: "bool";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "14402:4:36";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly visibility: "internal";
                        }, {
                            readonly constant: false;
                            readonly id: 4594;
                            readonly mutability: "mutable";
                            readonly name: "result";
                            readonly nameLocation: "14429:6:36";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 4607;
                            readonly src: "14416:19:36";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes";
                            };
                            readonly typeName: {
                                readonly id: 4593;
                                readonly name: "bytes";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "14416:5:36";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_storage_ptr";
                                    readonly typeString: "bytes";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 4600;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly expression: {
                                    readonly id: 4597;
                                    readonly name: "msg";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -15;
                                    readonly src: "14460:3:36";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_magic_message";
                                        readonly typeString: "msg";
                                    };
                                };
                                readonly id: 4598;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "14464:4:36";
                                readonly memberName: "data";
                                readonly nodeType: "MemberAccess";
                                readonly src: "14460:8:36";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_calldata_ptr";
                                    readonly typeString: "bytes calldata";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_bytes_calldata_ptr";
                                    readonly typeString: "bytes calldata";
                                }];
                                readonly expression: {
                                    readonly id: 4595;
                                    readonly name: "_target";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 4586;
                                    readonly src: "14439:7:36";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly id: 4596;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "14447:12:36";
                                readonly memberName: "delegatecall";
                                readonly nodeType: "MemberAccess";
                                readonly src: "14439:20:36";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_baredelegatecall_nonpayable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$";
                                    readonly typeString: "function (bytes memory) returns (bool,bytes memory)";
                                };
                            };
                            readonly id: 4599;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "14439:30:36";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_bool_$_t_bytes_memory_ptr_$";
                                readonly typeString: "tuple(bool,bytes memory)";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "14401:68:36";
                    }, {
                        readonly condition: {
                            readonly id: 4602;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "UnaryOperation";
                            readonly operator: "!";
                            readonly prefix: true;
                            readonly src: "14483:8:36";
                            readonly subExpression: {
                                readonly id: 4601;
                                readonly name: "success";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 4592;
                                readonly src: "14484:7:36";
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
                        readonly id: 4605;
                        readonly nodeType: "IfStatement";
                        readonly src: "14479:117:36";
                        readonly trueBody: {
                            readonly id: 4604;
                            readonly nodeType: "Block";
                            readonly src: "14493:103:36";
                            readonly statements: readonly [{
                                readonly AST: {
                                    readonly nodeType: "YulBlock";
                                    readonly src: "14516:70:36";
                                    readonly statements: readonly [{
                                        readonly expression: {
                                            readonly arguments: readonly [{
                                                readonly arguments: readonly [{
                                                    readonly name: "result";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "14545:6:36";
                                                }, {
                                                    readonly kind: "number";
                                                    readonly nodeType: "YulLiteral";
                                                    readonly src: "14553:2:36";
                                                    readonly type: "";
                                                    readonly value: "32";
                                                }];
                                                readonly functionName: {
                                                    readonly name: "add";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "14541:3:36";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "14541:15:36";
                                            }, {
                                                readonly arguments: readonly [{
                                                    readonly name: "result";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "14564:6:36";
                                                }];
                                                readonly functionName: {
                                                    readonly name: "mload";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "14558:5:36";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "14558:13:36";
                                            }];
                                            readonly functionName: {
                                                readonly name: "revert";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "14534:6:36";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "14534:38:36";
                                        };
                                        readonly nodeType: "YulExpressionStatement";
                                        readonly src: "14534:38:36";
                                    }];
                                };
                                readonly evmVersion: "paris";
                                readonly externalReferences: readonly [{
                                    readonly declaration: 4594;
                                    readonly isOffset: false;
                                    readonly isSlot: false;
                                    readonly src: "14545:6:36";
                                    readonly valueSize: 1;
                                }, {
                                    readonly declaration: 4594;
                                    readonly isOffset: false;
                                    readonly isSlot: false;
                                    readonly src: "14564:6:36";
                                    readonly valueSize: 1;
                                }];
                                readonly id: 4603;
                                readonly nodeType: "InlineAssembly";
                                readonly src: "14507:79:36";
                            }];
                        };
                    }, {
                        readonly AST: {
                            readonly nodeType: "YulBlock";
                            readonly src: "14614:62:36";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly name: "result";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "14639:6:36";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "14647:2:36";
                                            readonly type: "";
                                            readonly value: "32";
                                        }];
                                        readonly functionName: {
                                            readonly name: "add";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "14635:3:36";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "14635:15:36";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly name: "result";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "14658:6:36";
                                        }];
                                        readonly functionName: {
                                            readonly name: "mload";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "14652:5:36";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "14652:13:36";
                                    }];
                                    readonly functionName: {
                                        readonly name: "return";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "14628:6:36";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "14628:38:36";
                                };
                                readonly nodeType: "YulExpressionStatement";
                                readonly src: "14628:38:36";
                            }];
                        };
                        readonly evmVersion: "paris";
                        readonly externalReferences: readonly [{
                            readonly declaration: 4594;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "14639:6:36";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 4594;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "14658:6:36";
                            readonly valueSize: 1;
                        }];
                        readonly id: 4606;
                        readonly nodeType: "InlineAssembly";
                        readonly src: "14605:71:36";
                    }];
                };
                readonly documentation: {
                    readonly id: 4584;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "14072:246:36";
                    readonly text: "@dev Makes a delegatecall to the extras contract with the provided\n      calldata. This will revert if the call is unsuccessful.\n @param _target The target of the delegatecall.\n @return The returndata of the delegatecall.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_delegate";
                readonly nameLocation: "14332:9:36";
                readonly parameters: {
                    readonly id: 4587;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 4586;
                        readonly mutability: "mutable";
                        readonly name: "_target";
                        readonly nameLocation: "14350:7:36";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4608;
                        readonly src: "14342:15:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 4585;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "14342:7:36";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "14341:17:36";
                };
                readonly returnParameters: {
                    readonly id: 4590;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 4589;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 4608;
                        readonly src: "14377:12:36";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 4588;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "14377:5:36";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "14376:14:36";
                };
                readonly scope: 4609;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }];
            readonly abstract: true;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 4021;
                    readonly name: "IHyperdriveCore";
                    readonly nameLocations: readonly ["4185:15:36"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 11265;
                    readonly src: "4185:15:36";
                };
                readonly id: 4022;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "4185:15:36";
            }, {
                readonly baseName: {
                    readonly id: 4023;
                    readonly name: "HyperdriveAdmin";
                    readonly nameLocations: readonly ["4206:15:36"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 13205;
                    readonly src: "4206:15:36";
                };
                readonly id: 4024;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "4206:15:36";
            }, {
                readonly baseName: {
                    readonly id: 4025;
                    readonly name: "HyperdriveLP";
                    readonly nameLocations: readonly ["4227:12:36"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 15747;
                    readonly src: "4227:12:36";
                };
                readonly id: 4026;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "4227:12:36";
            }, {
                readonly baseName: {
                    readonly id: 4027;
                    readonly name: "HyperdriveLong";
                    readonly nameLocations: readonly ["4245:14:36"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 16681;
                    readonly src: "4245:14:36";
                };
                readonly id: 4028;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "4245:14:36";
            }, {
                readonly baseName: {
                    readonly id: 4029;
                    readonly name: "HyperdriveShort";
                    readonly nameLocations: readonly ["4265:15:36"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 18151;
                    readonly src: "4265:15:36";
                };
                readonly id: 4030;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "4265:15:36";
            }, {
                readonly baseName: {
                    readonly id: 4031;
                    readonly name: "HyperdriveCheckpoint";
                    readonly nameLocations: readonly ["4286:20:36"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 14845;
                    readonly src: "4286:20:36";
                };
                readonly id: 4032;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "4286:20:36";
            }];
            readonly canonicalName: "Hyperdrive";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly documentation: {
                readonly id: 4020;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "859:3290:36";
                readonly text: "______  __                           _________      _____\n      ___  / / /____  ___________________________  /_________(_)__   ______\n      __  /_/ /__  / / /__  __ \\  _ \\_  ___/  __  /__  ___/_  /__ | / /  _ \\\n      _  __  / _  /_/ /__  /_/ /  __/  /   / /_/ / _  /   _  / __ |/ //  __/\n      /_/ /_/  _\\__, / _   ___/\\___//_/    \\__,_/  /_/    /_/  _____/ \\___/\n               /____/   /_/\n                     XXX          ++          ++          XXX\n     ############   XXXXX        ++0+        +0++        XXXXX   ###########\n   ##////////////########       ++00++      ++00++       ########///////////##\n  ##////////////##########      ++000++    ++000++      ##########///////////##\n  ##%%%%%%/////      ######     ++0000+    +0000++     ######     /////%%%%%%##\n    %%%%%%%%&&             ##   ++0000+    +0000++   ##           &&%%%%%%%%%\n         %&&&                ##  +o000+    +000o+  ##              &&&%\n                              ## ++00+-    -+00++ ##\n                               #% ++0+      +0++ %#\n                               ###-:Oo.++++.oO:-###\n                                ##: 00++++++00 :##\n                    #S###########* 0++00+++00++0 *##########S#\n                  #S               % $ 0+++0 $ %              S#\n                #S   ----------   %+++++:#:+++++%-----------    S#\n              #S   ------------- %++++: ### :++++%------------    S#\n             S    ---------------%++++*\\ | /*++++%-------------     S\n           #S     --------------- %++++ ~W~ ++++%666--o UUUU o-      S#\n         #S?      ---------------  %+++++~+++++%&&&8 o  \\  /  o       ?S#\n        ?*????**+++;::,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,::;+++**????*?\n      #?+////////////////////////////////////////////////////////////////+?#\n    #;;;;;//////////////////////////////////////////////////////////////;;;;;#\n  S;;;;;;;;;//////////////////////////////////////////////////////////;;;;;;;;;S\n /;;;;;;;;;;;///////////////////////////////////////////////////////;;;;;;;;;;;;\\\n |||OOOOOOOO||OOOOOOOO=========== __  ___        ===========OOOOOOOO||OOOOOOOO|||\n |||OOOOOOOO||OOOOOOOO===========|  \\[__ |   \\  /===========OOOOOOOO||OOOOOOOO|||\n |||OOOOOOOO||OOOOOOOO===========|__/[___|___ \\/ ===========OOOOOOOO||OOOOOOOO|||\n ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||\n |||////////000000000000\\\\\\\\\\\\\\\\|:::::::::::::::|////////00000000000\\\\\\\\\\\\\\\\\\\\|||\n SSS\\\\\\\\\\\\\\\\000000000000////////|:::::0x666:::::|\\\\\\\\\\\\\\\\00000000000//////////SSS\n SSS|||||||||||||||||||||||||||||:::::::::::::::||||||||||||||||||||||||||||||SSS\n SSSSSSSS|_______________|______________||_______________|______________|SSSSSSSS\n SSSSSSSS                                                                SSSSSSSS\n SSSSSSSS                                                                SSSSSSSS\n @author DELV\n @title Hyperdrive\n @notice A fixed-rate AMM that mints bonds on demand for longs and shorts.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance.";
            };
            readonly fullyImplemented: false;
            readonly linearizedBaseContracts: readonly [4609, 14845, 18151, 16681, 15747, 17165, 13205, 14381, 18367, 72043, 11599, 12165, 11265, 12131];
            readonly name: "Hyperdrive";
            readonly nameLocation: "4167:10:36";
            readonly scope: 4610;
            readonly usedErrors: readonly [11027, 71988];
            readonly usedEvents: readonly [11419, 11434, 11453, 11468, 11485, 11504, 11523, 11544, 11557, 11564, 11569, 11574, 11579, 11586, 11591, 11598, 12146, 12155, 12164];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 36;
};
//# sourceMappingURL=Hyperdrive.d.ts.map