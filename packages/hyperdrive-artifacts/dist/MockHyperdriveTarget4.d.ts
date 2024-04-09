export declare const MockHyperdriveTarget4: {
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
        readonly inputs: readonly [];
        readonly name: "DecreasedPresentValueWhenAddingLiquidity";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "DistributeExcessIdleFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ExpInvalidExponent";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InsufficientLiquidity";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidApr";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidPresentValue";
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
        readonly name: "MinimumSharePrice";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "MinimumTransactionAmount";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NotPayable";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "OutputLimit";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "PoolIsPaused";
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
        readonly inputs: readonly [];
        readonly name: "TransferFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "UnsafeCastToInt128";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "UnsafeCastToInt256";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "UnsafeCastToUint112";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "UnsafeCastToUint128";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "UpdateLiquidityFailed";
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
    }];
    readonly bytecode: {
        readonly object: "0x6102406040523480156200001257600080fd5b5060405162004f4538038062004f458339810160408190526200003591620001e1565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c05260c0808501516101e0526101008086015190915260e0808601519052610120808601519091529184018051519092528151015161014090815281516040908101516101609081529251606090810151610180908152918601518516610200528501516102205290840151600a80546001600160a01b03199081169286169290921790559184015160088054841691851691909117905590920151600980549093169116179055620002d4565b6040516101c081016001600160401b03811182821017156200014957634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200016757600080fd5b919050565b6000608082840312156200017f57600080fd5b604051608081016001600160401b0381118282101715620001b057634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60006102208284031215620001f557600080fd5b620001ff62000117565b6200020a836200014f565b81526200021a602084016200014f565b60208201526200022d604084016200014f565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152506101406200028c8185016200014f565b90820152610160620002a08482016200014f565b90820152610180620002b48482016200014f565b908201526101a0620002c9858583016200016c565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e0516102005161022051614ac96200047c60003960005050600050506000818160fa01528181610336015281816104e30152610e78015260008181610e52015281816112a901528181611e3201528181611e950152818161246a015281816128e501528181612b840152612bc001526000818161015b01528181610e2c015281816111230152818161118701528181611776015261180901526000611a81015260008181611ba7015281816126ed0152612766015260008181610b3e0152818161122101528181611b7b015261273a015260006126b901526000818161019d01528181610e9e0152818161110101526111a801526000818161017c0152818161057901528181610a79015261238501526000818161091f015281816109ac0152610a110152600050506000818161073001528181611574015281816115bd0152818161164f015281816116d001528181611877015281816118f801528181612565015281816125ae01528181612a0a0152612a530152614ac96000f3fe6080604052600436106100295760003560e01c80634c2ac1d91461002e578063dbbe807014610054575b600080fd5b61004161003c366004614742565b61007c565b6040519081526020015b60405180910390f35b6100676100623660046147a6565b610097565b6040805192835260208301919091520161004b565b600061008b86868686866100b4565b90505b95945050505050565b6000806100a68686868661049c565b915091505b94509492505050565b60006100be610704565b600554610100900460ff16156100e7576040516321081abf60e01b815260040160405180910390fd5b6100ef61072e565b6100f88261079a565b7f00000000000000000000000000000000000000000000000000000000000000008610156101395760405163211ddda360e11b815260040160405180910390fd5b60006101c16101466107d3565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006107f9565b9050848110806101d057508381115b156101ee57604051633b61151160e11b815260040160405180910390fd5b6000806101fb898661083f565b9150915061021261020a610918565b82600461094e565b50600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e954909161025e916001600160801b0390911690614816565b6000808052600e6020527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c5491925090610299908390614829565b905060008060006102a986610de3565b90506102b481610f1d565b91506102c76102c288610f54565b610f82565b6001546001600160801b038082168352600354600f0b6020840152600160801b9091041660408201526102f981610f1d565b92508183101561031c5760405163184d952160e11b815260040160405180910390fd5b610332848361032b8187614816565b9190610fa8565b98507f00000000000000000000000000000000000000000000000000000000000000008910156103755760405163211ddda360e11b815260040160405180910390fd5b508b6103818e8a610fc6565b10156103a05760405163c972651760e01b815260040160405180910390fd5b6103b860006103b260208c018c61483c565b8a610fe4565b60006103c38661108c565b9050806103e357604051638bdf918d60e01b815260040160405180910390fd5b600084156103fa576103f58386610fc6565b6103fd565b60005b90508e600061040d828a8f611099565b90508c61041d602082018261483c565b6001600160a01b03167fa59daf574c5c8db34377de83bceea2aa1433cc506d656f5e8f46e5f4b5c58a868e848e61045a6040870160208801614873565b60408051948552602085019390935291830152151560608201526080810187905260a00160405180910390a250505050505050505050505061008e6001600055565b6000806104a7610704565b600554610100900460ff16156104d0576040516321081abf60e01b815260040160405180910390fd5b6104d861072e565b6104e18361079a565b7f00000000000000000000000000000000000000000000000000000000000000008610156105225760405163211ddda360e11b815260040160405180910390fd5b600061052c6110c8565b90508481101561054f576040516342af972b60e01b815260040160405180910390fd5b6000610559610918565b90506000610570610568610918565b84600461094e565b9050600061059e7f000000000000000000000000000000000000000000000000000000000000000084614829565b905060008060006105b08d88876110db565b92509250925080600b60008282546105c89190614829565b90915550600090506105db84898d61125b565b9050808d10156105fe5760405163c972651760e01b815260040160405180910390fd5b610608818c61083f565b50506106168e848a88611283565b600061062360028761148a565b905060008f9050610647828e6000016020810190610641919061483c565b83610fe4565b848a8e84610658602083018361483c565b6001600160a01b03167fb354b32bd86ebd9f0968a338e5c2873d7f0d473aa7a668c2488e66038380258b8c8c61068f8b88886114bf565b61069f6040880160208901614873565b6106b5898f8c6106af9190614816565b906114e7565b6040805195865260208601949094529284019190915215156060830152608082015260a0810188905260c00160405180910390a350979c50929a50505050505050505050506100ab6001600055565b60026000540361072757604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1480159061077a57503415155b1561079857604051631574f9f360e01b815260040160405180910390fd5b565b60006107a9602083018361483c565b6001600160a01b0316036107d05760405163f0dd15fd60e01b815260040160405180910390fd5b50565b6001546003546000916107f4916001600160801b0390911690600f0b6114fc565b905090565b6000806108088787878661151b565b905061083461081c82866301e13380611532565b61082e83670de0b6b3a7640000614816565b90610fc6565b979650505050505050565b600080806108536040850160208601614873565b156108785761086e856108696040870187614890565b611558565b9093509050610894565b50346108908561088b6040870187614890565b6117ec565b8492505b61089c6110c8565b9150801561090f57604051600090339083908381818185875af1925050503d80600081146108e6576040519150601f19603f3d011682016040523d82523d6000602084013e6108eb565b606091505b505090508061090d576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b60006109447f0000000000000000000000000000000000000000000000000000000000000000426148ed565b6107f49042614816565b600083815260076020526040812080546001600160801b031615158061097357504285115b1561098957546001600160801b03169050610ddc565b600080610994610918565b90508087036109a557859150610a3f565b60006109d17f000000000000000000000000000000000000000000000000000000000000000089614829565b90505b6000818152600760205260409020546001600160801b0316925081811480156109fb575082155b15610a04578692505b82600003610a3d57610a367f000000000000000000000000000000000000000000000000000000000000000082614829565b90506109d4565b505b610a4882611996565b83546001600160801b0319166001600160801b0391909116178355610a6c866119c0565b5060009050600781610a9e7f00000000000000000000000000000000000000000000000000000000000000008b614816565b815260208101919091526040016000908120546001600160801b03169150610ac760028a61148a565b6000818152600e60205260408120549192508a8a8315610c0d5760019250600080610af686898c866000611b64565b9150915080600b6000828254610b0c9190614829565b90915550610b28905086600084610b2281610f54565b88611c33565b610b328183614829565b9150610b6286838a8d877f0000000000000000000000000000000000000000000000000000000000000000611dad565b9150610b76610b7183856114e7565b611df1565b60058054600290610b979084906201000090046001600160701b0316614901565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610bc482611996565b60058054601090610be6908490600160801b90046001600160801b0316614921565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000610c1a60018461148a565b6000818152600e60205260409020549091508015610d295760019450600080610c47838b8e886001611b64565b9150915080600b6000828254610c5d9190614829565b90915550610c79905083600084610c7381610f54565b8a611e1b565b610c838183614816565b9150610c92610b7183876114e7565b60058054600290610cb39084906201000090046001600160701b0316614901565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610ce082611996565b60058054601090610d02908490600160801b90046001600160801b0316614921565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610d6157610d55610d3b87610f54565b610d4483610f54565b610d4e9190614941565b600061200c565b610d5f8e8e6120bf565b505b6000610d6c8f61224a565b5090508f7fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab78c868a8686604051610dc5959493929190948552602085019390935260408401919091526060830152608082015260a00190565b60405180910390a250989a50505050505050505050505b9392505050565b610deb61467d565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526002540482166101008201526004549091610120830191610ee3911661233a565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192610f159290041661233a565b905292915050565b6000806000610f2b846123b0565b9150915080610f4d57604051635516328b60e11b815260040160405180910390fd5b5092915050565b60006001600160ff1b03821115610f7e5760405163396ea70160e11b815260040160405180910390fd5b5090565b610f8b8161243d565b6107d057604051635044b7f560e01b815260040160405180910390fd5b6000826000190484118302158202610fbf57600080fd5b5091020490565b6000610fdb83670de0b6b3a764000084610fa8565b90505b92915050565b6000838152600d602090815260408083206001600160a01b038616845290915281208054839290611016908490614829565b90915550506000838152600e602052604081208054839290611039908490614829565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b6000610fde8260046120bf565b60006110ab6040830160208401614873565b156110b7575082610ddc565b6110c184846114e7565b9050610ddc565b60006107f4670de0b6b3a764000061254a565b60008060006111476110eb6107d3565b600154600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f0000000000000000000000000000000000000000000000000000000000000000612645565b9150856111548387612666565b11156111625761116261267b565b60008060006111cc6111726107d3565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061151b565b90506111e289670de0b6b3a7640000838b612694565b509194509092506111f590508284614816565b6111ff9086614816565b945061124b886112458b611213868a614816565b8b61121e8e826127a2565b8e7f00000000000000000000000000000000000000000000000000000000000000006127b8565b90612666565b9550909250505093509350939050565b600061126d6040830160208401614873565b15611279575082610ddc565b6110c18484610fc6565b6001546001600160801b03168381101561129f5761129f61267b565b60035490849003907f0000000000000000000000000000000000000000000000000000000000000000906112d7908390600f0b6114fc565b10156112e5576112e561267b565b6003546113349061132f90600160801b90046001600160801b0316611312670de0b6b3a764000086614961565b600454600160801b90046001600160801b031691908960016127dd565b611996565b600480546001600160801b03928316600160801b02921691909117905561135a81611996565b600180546001600160801b0319166001600160801b039290921691909117905561138385611996565b600180546010906113a5908490600160801b90046001600160801b0316614921565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506113d285611996565b600380546010906113f4908490600160801b90046001600160801b0316614921565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006114238361289a565b90506114418161143288610f54565b61143c9084614941565b61200c565b61144a846128de565b6114565761145661267b565b60006114618561108c565b90508061148157604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b60006001600160f81b038211156114b45760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60006114d16040830160208401614873565b156114e0576110c18484610fc6565b5082610ddc565b6000610fdb8383670de0b6b3a7640000610fa8565b600080611509848461293e565b909250905080610f4d57610f4d61267b565b600061008e8261152c858888610fa8565b9061297a565b600082600019048411830215820261154957600080fd5b50910281810615159190040190565b6000808073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016115a8575047611633565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa15801561160c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116309190614978565b90505b6001600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016116ae578734101561169d576040516312171d8360e31b815260040160405180910390fd5b6116a78834614816565b9050611748565b6040516323b872dd60e01b8152336004820152306024820152604481018990527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015611721573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117459190614991565b91505b81611766576040516312171d8360e31b815260040160405180910390fd5b6012546000036117ab5761179a887f0000000000000000000000000000000000000000000000000000000000000000610fc6565b6012819055945092506117e4915050565b6012546000906117bd908a9086610fa8565b905080601260008282546117d19190614829565b909155509095509093506117e492505050565b935093915050565b60006117f78461254a565b90506012546000036118355761182d817f0000000000000000000000000000000000000000000000000000000000000000610fc6565b60125561185b565b6000611840826129ef565b905080601260008282546118549190614829565b9091555050505b6001600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016118d657823410156118c5576040516312171d8360e31b815260040160405180910390fd5b6118cf8334614816565b9050611970565b6040516323b872dd60e01b8152336004820152306024820152604481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015611949573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061196d9190614991565b91505b8161198e576040516312171d8360e31b815260040160405180910390fd5b505050505050565b60006001600160801b03821115610f7e57604051630f0af95160e11b815260040160405180910390fd5b60055460009081906119e3908490600160801b90046001600160801b03166114e7565b6005546201000090046001600160701b03169250905081811115611b5f576000611a0d8383614816565b9050611a1c61132f8286612ad8565b60058054601090611a3e908490600160801b90046001600160801b03166149ae565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611a778583610fc690919063ffffffff16565b90506000611aa5827f00000000000000000000000000000000000000000000000000000000000000006114e7565b905080600b6000828254611ab99190614829565b90915550611ac990508183614816565b9150611ad482611996565b60018054600090611aef9084906001600160801b0316614921565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611b1c82612aed565b60038054600090611b31908490600f0b6149ce565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b600080611b718785610fc6565b91506000611b9f837f00000000000000000000000000000000000000000000000000000000000000006114e7565b9050611bcb817f00000000000000000000000000000000000000000000000000000000000000006114e7565b91508315611bee57611bdd8282614816565b611be79084614816565b9250611c05565b611bf88282614816565b611c029084614829565b92505b86861015611c2857611c18838789610fa8565b9250611c25828789610fa8565b91505b509550959350505050565b600354600160801b90046001600160801b0316611c7c61132f82611c5f670de0b6b3a764000086614961565b600454600160801b90046001600160801b031691908a60006127dd565b600480546001600160801b03928316600160801b029216919091179055611ca286611996565b611cac90826149ae565b600380546001600160801b03928316600160801b029216919091179055611cd284611996565b60018054600090611ced9084906001600160801b0316614921565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611d1a83612b17565b60038054600090611d2f908490600f0b6149ce565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611d5f85611996565b60018054601090611d81908490600160801b90046001600160801b03166149ae565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600080611dbf8461082e8a888a610fa8565b9050611dcc888486610fa8565b611dd69082614829565b905086811115611de65786810391505b509695505050505050565b60006001600160701b03821115610f7e5760405163086b151760e11b815260040160405180910390fd5b6001546001600160801b031683811080611e5d57507f0000000000000000000000000000000000000000000000000000000000000000611e5b8583614816565b105b15611e6a57611e6a61267b565b6003549084900390600f0b611e7f8482614941565b905083611e8b86610f54565b138015611ec057507f0000000000000000000000000000000000000000000000000000000000000000611ebe83836114fc565b105b15611ecd57611ecd61267b565b600254600160801b90046001600160801b0316611f0f61132f82611ef9670de0b6b3a764000088614961565b6004546001600160801b031691908c60006127dd565b600480546001600160801b0319166001600160801b0392909216919091179055611f398882614816565b9050611f4481611996565b600280546001600160801b03928316600160801b029216919091179055611f6a83611996565b600180546001600160801b0319166001600160801b0392909216919091179055611f9382612b17565b600380546001600160801b0319166001600160801b0392909216919091179055611fbc87611996565b60018054601090611fde908490600160801b90046001600160801b0316614921565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b600061203561201b8483612b53565b612026846000612b53565b6120309190614941565b612b17565b9050600081600f0b131561208a57600280548291906000906120619084906001600160801b0316614921565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b12156120ba5761209f816149fb565b600280546000906120619084906001600160801b03166149ae565b505050565b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e9549091829161210a916001600160801b031690614816565b90508060000361211e576001915050610fde565b600061212985612b62565b90508060000361213e57600192505050610fde565b60008061214c838589612c04565b9150915080612162576000945050505050610fde565b60008061216f8489612d0a565b9150915061218d61217f82610f54565b61218890614a21565b61243d565b9250826121a35760009650505050505050610fde565b6121ac82611996565b600680546000906121c79084906001600160801b0316614921565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506121f481611996565b60068054601090612216908490600160801b90046001600160801b0316614921565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008061226161225c86610de3565b6123b0565b9150915080612277575060009485945092505050565b6000808611612287576000612291565b61229183876114e7565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b03909216916122fc9190614829565b6123069190614816565b90508060000361231f5750600096879650945050505050565b600061232b8383610fc6565b98600198509650505050505050565b600080670de0b6b3a764000061234e610918565b6123589190614961565b9050808311612368576000612372565b6123728184614816565b9150610ddc6123a9670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000614961565b8390610fc6565b60008060008060006123c186612dfa565b91509150806123d857506000958695509350505050565b6123e58660a00151610f54565b6123ee8761311a565b836123fc8960000151610f54565b6124069190614a3d565b6124109190614a3d565b61241a9190614941565b9250505060008112156124335750600093849350915050565b9360019350915050565b6001546003546000916001600160801b0380821692600f0b91600160801b9004168380808061248f8787877f00000000000000000000000000000000000000000000000000000000000000008d61317e565b9350935093509350806124ab5750600098975050505050505050565b8684146124dc576124bb84611996565b600180546001600160801b0319166001600160801b03929092169190911790555b85831461250d576124ec83612b17565b600380546001600160801b0319166001600160801b03929092169190911790555b84821461253b5761251d82611996565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612599575047612624565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156125fd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906126219190614978565b90505b601254600003612635576000610ddc565b601254610ddc9084908390610fa8565b600061083487878761265f88670de0b6b3a7640000614816565b8787613296565b6000610fdb8383670de0b6b3a7640000611532565b60405163bb55fd2760e01b815260040160405180910390fd5b60008080806126e587866126de8b6112456126b78c670de0b6b3a7640000614816565b7f000000000000000000000000000000000000000000000000000000000000000090612666565b9190611532565b9350612711847f00000000000000000000000000000000000000000000000000000000000000006114e7565b9150600061273261272a89670de0b6b3a7640000614816565b8a9088611532565b905061275e817f0000000000000000000000000000000000000000000000000000000000000000612666565b935061278a847f00000000000000000000000000000000000000000000000000000000000000006114e7565b6127949084614829565b915050945094509450949050565b60008183116127b15781610fdb565b5090919050565b6000806127d0846127ca8a888a611532565b90612ad8565b9050611dcc888486611532565b6000826000036127ee57508461008e565b81156128605761281f6128018487614829565b61280b85876114e7565b612815888a6114e7565b61082e9190614829565b9050600061282d85886132b9565b9050600061283b86896127a2565b90508183101561284d57819250612859565b80831115612859578092505b505061008e565b82850361286f5750600061008e565b61008b61287c8487614816565b6128868587612666565b612890888a6114e7565b61082e9190614816565b60006128c2600e60006128ae60028661148a565b815260200190815260200160002054610f54565b6128d4600e60006128ae60018761148a565b610fde9190614941565b600061290a7f000000000000000000000000000000000000000000000000000000000000000083612666565b60025461292091906001600160801b0316614829565b600154612936906001600160801b0316846114e7565b101592915050565b60008060008361294d86610f54565b6129579190614941565b9050600081121561296f576000809250925050610911565b946001945092505050565b6000816000036129935750670de0b6b3a7640000610fde565b826000036129a357506000610fde565b60006129ae83610f54565b905060006129c36129be86610f54565b6132c8565b90508181026129da670de0b6b3a764000082614a65565b90506129e5816134ee565b9695505050505050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612a3e575047612ac9565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015612aa2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612ac69190614978565b90505b601254610ddc90849083610fa8565b6000610fdb83670de0b6b3a764000084611532565b600060016001607f1b03821115610f7e5760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b0319821280612b35575060016001607f1b0382135b15610f7e5760405163a5353be560e01b815260040160405180910390fd5b60008183136127b15781610fdb565b6002546000908190612b7d906001600160801b031684612ad8565b9050612ba97f000000000000000000000000000000000000000000000000000000000000000082614829565b6001546001600160801b03161115612bfe576001547f000000000000000000000000000000000000000000000000000000000000000090612bf49083906001600160801b0316614816565b610ddc9190614816565b50919050565b612c0c6146de565b600080612c1884610de3565b90506000612c25826123b0565b9350905082612c3a5750600091506117e49050565b6000612c61612c5c8461016001518561014001516114e790919063ffffffff16565b610f54565b612c81612c5c85610120015186610100015161266690919063ffffffff16565b612c8b9190614941565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b600080600080612d228660c001518760e0015161293e565b9150915080612d3957600080935093505050610911565b6000612d458784613683565b92509050811580612d54575080155b15612d685760008094509450505050610911565b6000612d748883613792565b905080600003612d8e576000809550955050505050610911565b87606001518111612da55794509250610911915050565b5060608701516000612db98986858b613863565b905080600003612dd457600080965096505050505050610911565b828110612dec57600080965096505050505050610911565b909890975095505050505050565b6000806000612e1f612c5c8561016001518661014001516114e790919063ffffffff16565b612e3f612c5c86610120015187610100015161266690919063ffffffff16565b612e499190614941565b9050600080612e608660000151876020015161293e565b9150915080612e7757506000958695509350505050565b6000831315612fb85760008390506000612ec5886000015189602001518a604001518b60a001518c60e00151670de0b6b3a7640000612eb69190614816565b8d606001518e60800151613d7a565b9350905082612ede575060009788975095505050505050565b818110612f7c576000612f18858a60400151858c60e00151670de0b6b3a7640000612f099190614816565b8d606001518e60800151613e86565b9450905083158015612f2d57508860c0015183105b15612f445750600098600198509650505050505050565b83612f5a57506000988998509650505050505050565b612f6381610f54565b612f6c90614a21565b9960019950975050505050505050565b6000886020015112612fa457612f9b8860a0015185612c5c9190614816565b61232b90614a21565b60a08801518851612f9b91612c5c91614816565b600083121561310b576000612fcc84614a21565b905060006130008489604001518a60e00151670de0b6b3a7640000612ff19190614816565b8b606001518c60800151613f49565b9350905082613019575060009788975095505050505050565b81811061309e576000613053858a60400151858c60e00151670de0b6b3a76400006130449190614816565b8d606001518e60800151613ff5565b945090508315801561306857508860c0015183105b1561307f5750600098600198509650505050505050565b8361309557506000988998509650505050505050565b612f6c81610f54565b60006130d0858a604001518b60e00151670de0b6b3a76400006130c19190614816565b8c606001518d608001516140cc565b94509050836130ea57506000988998509650505050505050565b612f6c6131018a60600151848661082e9190614816565b612c5c9083614829565b50600095600195509350505050565b600061314d612c5c836101200151670de0b6b3a764000061313b9190614816565b60608501516101008601519190611532565b6128d4612c5c846101600151670de0b6b3a764000061316c9190614816565b60608601516101408701519190610fa8565b6000806000808460000361319d5750879250869150859050600161328a565b6000856131a98b610f54565b6131b39190614a3d565b90506131be87610f54565b8112156131d95760008060008094509450945094505061328a565b809450600089126131f9576131f2612c5c868b8d610fa8565b935061321c565b613210612c5c6132088b614a21565b87908d611532565b61321990614a21565b93505b6000806132298c8c61293e565b915091508061324857600080600080965096509650965050505061328a565b6000613254888861293e565b92509050816132745760008060008097509750975097505050505061328a565b61327f8b8285610fa8565b955060019450505050505b95509550955095915050565b6000806132a7888888888888613e86565b909250905080611de657611de661267b565b6000818311612bfe5782610fdb565b60008082136132ea5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f1982019061336d9084901c610f54565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361350957506000919050565b680755bf798b4a1bf1e58212613532576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b0181810595509293509091906129e574029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c610f54565b60008060008460a00151126136a057505060808201516001610911565b60008460a001516136b090614a21565b905060006136ec85876101000151886000015160e00151670de0b6b3a76400006136da9190614816565b89516060810151608090910151613f49565b935090508215806136fb575080155b1561370e57600080935093505050610911565b600061371a8383612ad8565b9050670de0b6b3a764000081116137565780670de0b6b3a764000003945061374f8760c00151866114e790919063ffffffff16565b9450613765565b60008094509450505050610911565b8660800151851115613784578660800151600194509450505050610911565b506001925050509250929050565b6000806137c88460c001518560e00151866101000151876000015160a001516137ba88610f54565b6137c390614a21565b61317e565b875160408101929092526020820192909252919091529050806137ef576000915050610fde565b60006137fe85600001516123b0565b925090508161381257600092505050610fde565b8460200151811061382857600092505050610fde565b60008560600151866040015161383e9190614829565b905061385982876020015183610fa89092919063ffffffff16565b6129e59082614816565b6000808560600151866040015161387a9190614829565b602087015160608801519192506000916138949184610fa8565b90508660a001516000036138ab579150613d729050565b600080808960048810156138be57600497505b60005b88811015613c1a576138d3868b6132b9565b955060006138fc8360c001518460e00151856101000151866000015160a001516137ba8c610f54565b8651604081019290925260208201929092529190915290508061392a57600098505050505050505050613d72565b60006139398e600001516123b0565b92509050816139545760009950505050505050505050613d72565b61395f84828b61417b565b1561397557879950505050505050505050613d72565b60008460a001511315613ade57835180516020820151604083015160a084015160e0909401516000946139c9949392916139b790670de0b6b3a7640000614816565b8a516060810151608090910151613d7a565b93509050826139e55760009a5050505050505050505050613d72565b808560a0015110613adc576139f9856141e0565b909950925082613a165760009a5050505050505050505050613d72565b613a3b8560c001518660e00151876101000151886000015160a001516137ba8e610f54565b88516040810192909252602082019290925291909152925082613a6b5760009a5050505050505050505050613d72565b845180516020820151604083015160a084015160e090940151613a9b94906139b790670de0b6b3a7640000614816565b9350905082613ab75760009a5050505050505050505050613d72565b8e60a001518111613ad457889a5050505050505050505050613d72565b5050506138c1565b505b6000613aef858f8760a001516142b6565b93509050821580613b085750670de0b6b3a76400008110155b15613b205760009a5050505050505050505050613d72565b80670de0b6b3a76400000390506000613b4d612c5c8760400151886020015161266690919063ffffffff16565b613b5a612c5c858e6114e7565b613b649190614941565b9050881580613b825750613b7789614611565b613b8082614611565b125b15613b91578098508997508296505b6000811315613bb957613ba88b61082e8385610fc6565b613bb2908b614829565b9950613c0b565b6000811215613c02576000613bd38c61082e858186614a21565b90508a811015613be757808b039a50613bfc565b60009c50505050505050505050505050613d72565b50613c0b565b50505050613c1a565b846001019450505050506138c1565b506000613c428260c001518360e00151846101000151856000015160a001516137ba8b610f54565b85516040810192909252602082019290925291909152905080613c6f576000975050505050505050613d72565b6000613c7e8360000151610f1d565b90506000613ca0612c5c8560400151866020015161266690919063ffffffff16565b613cad612c5c848c6114e7565b613cb79190614941565b9050613cc287614611565b613ccb82614611565b1215613cd8578795508194505b613cff613cf3655af3107a4000670de0b6b3a7640000614816565b6020860151908b611532565b6040850151613d0f908790610fc6565b1080613d4f5750613d3d613d31655af3107a4000670de0b6b3a7640000614829565b6020860151908b610fa8565b6040850151613d4d908790612ad8565b115b15613d665760009950505050505050505050613d72565b50939750505050505050505b949350505050565b6000806000881215613d9c57613d8f88614a21565b613d999087614829565b95505b600080613da98b8b61293e565b9150915080613dc057600080935093505050613e7a565b6000613dcf838b8a8a8a614629565b90506000613dec613de48a61152c8a8e612666565b899089611532565b905080821015613e06576000809550955050505050613e7a565b808203670de0b6b3a76400008110613e3b57613e34613e2d670de0b6b3a76400008c610fc6565b829061297a565b9050613e53565b613e50613e2d670de0b6b3a76400008c612ad8565b90505b8b811015613e6c57600080965096505050505050613e7a565b8b9003955060019450505050505b97509795505050505050565b6000806000613e988989888888614658565b9050613ea88661152c898b614829565b975087811015613ebf576000809250925050613f3e565b878103613ecd818688611532565b9050670de0b6b3a76400008110613efa57613ef3613e2d670de0b6b3a764000089612ad8565b9050613f12565b613f0f613e2d670de0b6b3a764000089610fc6565b90505b613f1c8186612ad8565b9050808a1015613f3457600080935093505050613f3e565b8903925060019150505b965096945050505050565b6000806000613f5b8888888888614658565b90506000613f86670de0b6b3a7640000613f758888610fc6565b613f7f9190614829565b8390612ad8565b9050670de0b6b3a76400008110613fb357613fac613e2d670de0b6b3a764000089612ad8565b9050613fcb565b613fc8613e2d670de0b6b3a764000089610fc6565b90505b80881015613fe157600080935093505050613feb565b8703925060019150505b9550959350505050565b60008060006140078989888888614658565b90508688101561401e576000809250925050613f3e565b968690039661402d888761297a565b975087811015614044576000809250925050613f3e565b878103614052818688611532565b9050670de0b6b3a7640000811061407f57614078613e2d670de0b6b3a764000089612ad8565b9050614097565b614094613e2d670de0b6b3a764000089610fc6565b90505b6140a18186612ad8565b9050898110156140b957600080935093505050613f3e565b9890980398600198509650505050505050565b60008060006140de8888888888614629565b90506000614102670de0b6b3a76400006140f88888612ad8565b6123a99190614829565b9050670de0b6b3a7640000811061412f57614128613e2d670de0b6b3a764000089610fc6565b9050614147565b614144613e2d670de0b6b3a764000089612ad8565b90505b6141518186610fc6565b90508881101561416957600080935093505050613feb565b97909703976001975095505050505050565b602083015160009061418d9084612ad8565b604085015161419d908490610fc6565b10158015613d72575060208401516141c6908461032b633b9aca00670de0b6b3a7640000614829565b60408501516141d6908490612ad8565b1115949350505050565b60008060008360e00151136141fa57506000928392509050565b6000614209846000015161311a565b905060006142358560400151866060015187604001516142299190614829565b60208801519190611532565b90506000821261425c578082101561424f57819003614272565b5060009485945092505050565b61426582614a21565b61426f9082614829565b90505b60e085015160c0860151614287918390611532565b9050808560c0015110156142a2575060009485945092505050565b808560c00151036001935093505050915091565b60008060008084126142da578551604001516142d3908590614829565b9050614315565b60006142e585614a21565b875160400151909150811015614305578651604001518190039150614313565b6000809350935050506117e4565b505b85518051602090910151600091829161432e919061293e565b915091508061434657600080945094505050506117e4565b875160e081015160409091015160009161437b9161436f91614368919061297a565b8a906114e7565b6101008b015190612ad8565b895160e08101516080909101516143a69161439a9161152c90886114e7565b8b516060015190612ad8565b6143b09190614829565b905060006143e86143dc6143d58c6000015160e001518861297a90919063ffffffff16565b8b90612666565b6101008c015190610fc6565b905080821015614403576000809650965050505050506117e4565b80820391506000614445858c60000151604001518d6000015160e00151670de0b6b3a76400006144339190614816565b8e516060810151608090910151614658565b9050600061446f8c6000015160e00151670de0b6b3a76400006144689190614816565b889061297a565b90508082101561448c5760008098509850505050505050506117e4565b8b516080810151606090910151918303916144a8918391611532565b9050670de0b6b3a764000081106144ec578b5160e001516144e590613e2d906144d990670de0b6b3a7640000614816565b8e5160e0015190612ad8565b905061451b565b8b5160e0015161451890613e2d9061450c90670de0b6b3a7640000614816565b8e5160e0015190610fc6565b90505b8b516060015161452e9085908390611532565b935083670de0b6b3a764000011156145525783670de0b6b3a7640000039350614566565b6000600198509850505050505050506117e4565b60008c60e00151126145c95760c08c015160e08d015161458591612ad8565b9250670de0b6b3a76400008311156145aa5760008098509850505050505050506117e4565b670de0b6b3a764000092909203916145c284846114e7565b93506145fe565b6145fb6145e28d60c001518e60e0015161082e90614a21565b6145f490670de0b6b3a7640000614829565b85906114e7565b93505b50919a60019a5098505050505050505050565b60008082126146205781610fde565b610fde82614a21565b6000614635858561297a565b61464e6146468661152c868b6114e7565b859085610fa8565b61008b9190614829565b6000614664858561297a565b61464e6146758661152c868b612666565b859085611532565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061012001604052806146f261467d565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b600060608284031215612bfe57600080fd5b600080600080600060a0868803121561475a57600080fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff81111561478d57600080fd5b61479988828901614730565b9150509295509295909350565b600080600080608085870312156147bc57600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff8111156147e857600080fd5b6147f487828801614730565b91505092959194509250565b634e487b7160e01b600052601160045260246000fd5b81810381811115610fde57610fde614800565b80820180821115610fde57610fde614800565b60006020828403121561484e57600080fd5b81356001600160a01b0381168114610ddc57600080fd5b80151581146107d057600080fd5b60006020828403121561488557600080fd5b8135610ddc81614865565b6000808335601e198436030181126148a757600080fd5b83018035915067ffffffffffffffff8211156148c257600080fd5b60200191503681900382131561091157600080fd5b634e487b7160e01b600052601260045260246000fd5b6000826148fc576148fc6148d7565b500690565b6001600160701b03818116838216019080821115610f4d57610f4d614800565b6001600160801b03818116838216019080821115610f4d57610f4d614800565b8181036000831280158383131683831282161715610f4d57610f4d614800565b8082028115828204841417610fde57610fde614800565b60006020828403121561498a57600080fd5b5051919050565b6000602082840312156149a357600080fd5b8151610ddc81614865565b6001600160801b03828116828216039080821115610f4d57610f4d614800565b600f81810b9083900b0160016001607f1b03811360016001607f1b031982121715610fde57610fde614800565b600081600f0b60016001607f1b03198103614a1857614a18614800565b60000392915050565b6000600160ff1b8201614a3657614a36614800565b5060000390565b8082018281126000831280158216821582161715614a5d57614a5d614800565b505092915050565b600082614a7457614a746148d7565b600160ff1b821460001984141615614a8e57614a8e614800565b50059056fea2646970667358221220afebf76abdd1ef1b53325754a234ddaf6db0c21d0275764f18bee99b9db6e42e64736f6c63430008140033";
        readonly sourceMap: "14441:174:135:-:0;;;14519:94;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1713:1:169;1917:7;:21;5227:17:118;;-1:-1:-1;;;;;5214:30:118;;;;;;;5274:24;;;;;5254:44;;;;;;5388:30;;;;5362:56;;;;5841:28;;;;5817:52;;6157:32;;;;;6129:60;;6372:26;;;;;6350:48;;;-1:-1:-1;6428:24:118;;;;6408:44;;-1:-1:-1;6477:19:118;;;;6462:34;;;6561:12;;;;;:18;6549:30;;;6600:12;;:17;;6589:28;;;;6646:12;;-1:-1:-1;6646:25:118;;;;6627:44;;;;6704:12;;-1:-1:-1;6704:29:118;;;;6681:52;;;;-1:-1:-1;;;6810:21:118;6793:38;;;;-1:-1:-1;;6859:22:118;6841:40;;6984:18;;;;6970:11;:32;;-1:-1:-1;;;;;;6970:32:118;;;;;;;;;;;;7028:20;;;;7012:13;:36;;;;;;;;;;;;;7076:22;;;;7058:15;:40;;;;;;;;;;14441:174:135;;14:347:234;81:2;75:9;123:6;111:19;;-1:-1:-1;;;;;145:34:234;;181:22;;;142:62;139:185;;;246:10;241:3;237:20;234:1;227:31;281:4;278:1;271:15;309:4;306:1;299:15;139:185;340:2;333:22;14:347;:::o;366:185::-;453:13;;-1:-1:-1;;;;;495:31:234;;485:42;;475:70;;541:1;538;531:12;475:70;366:185;;;:::o;556:681::-;618:5;666:4;654:9;649:3;645:19;641:30;638:50;;;684:1;681;674:12;638:50;717:2;711:9;759:4;747:17;;-1:-1:-1;;;;;779:34:234;;815:22;;;776:62;773:185;;;880:10;875:3;871:20;868:1;861:31;915:4;912:1;905:15;943:4;940:1;933:15;773:185;978:10;974:2;967:22;;1007:6;998:15;;1043:9;1037:16;1029:6;1022:32;1108:2;1097:9;1093:18;1087:25;1082:2;1074:6;1070:15;1063:50;1167:2;1156:9;1152:18;1146:25;1141:2;1133:6;1129:15;1122:50;1226:2;1215:9;1211:18;1205:25;1200:2;1192:6;1188:15;1181:50;;556:681;;;;:::o;1242:1405::-;1341:6;1394:3;1382:9;1373:7;1369:23;1365:33;1362:53;;;1411:1;1408;1401:12;1362:53;1437:17;;:::i;:::-;1477:48;1515:9;1477:48;:::i;:::-;1470:5;1463:63;1558:57;1611:2;1600:9;1596:18;1558:57;:::i;:::-;1553:2;1546:5;1542:14;1535:81;1648:57;1701:2;1690:9;1686:18;1648:57;:::i;:::-;1643:2;1636:5;1632:14;1625:81;1759:2;1748:9;1744:18;1738:25;1733:2;1726:5;1722:14;1715:49;1818:3;1807:9;1803:19;1797:26;1791:3;1784:5;1780:15;1773:51;1878:3;1867:9;1863:19;1857:26;1851:3;1844:5;1840:15;1833:51;1938:3;1927:9;1923:19;1917:26;1911:3;1904:5;1900:15;1893:51;1998:3;1987:9;1983:19;1977:26;1971:3;1964:5;1960:15;1953:51;2023:3;2079:2;2068:9;2064:18;2058:25;2053:2;2046:5;2042:14;2035:49;;2103:3;2159:2;2148:9;2144:18;2138:25;2133:2;2126:5;2122:14;2115:49;;2183:3;2218:57;2271:2;2260:9;2256:18;2218:57;:::i;:::-;2202:14;;;2195:81;2295:3;2330:57;2368:18;;;2330:57;:::i;:::-;2314:14;;;2307:81;2407:3;2442:57;2480:18;;;2442:57;:::i;:::-;2426:14;;;2419:81;2519:3;2554:62;2608:7;2588:18;;;2554:62;:::i;:::-;2538:14;;;2531:86;2542:5;1242:1405;-1:-1:-1;;;1242:1405:234:o;:::-;14441:174:135;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly deployedBytecode: {
        readonly object: "0x6080604052600436106100295760003560e01c80634c2ac1d91461002e578063dbbe807014610054575b600080fd5b61004161003c366004614742565b61007c565b6040519081526020015b60405180910390f35b6100676100623660046147a6565b610097565b6040805192835260208301919091520161004b565b600061008b86868686866100b4565b90505b95945050505050565b6000806100a68686868661049c565b915091505b94509492505050565b60006100be610704565b600554610100900460ff16156100e7576040516321081abf60e01b815260040160405180910390fd5b6100ef61072e565b6100f88261079a565b7f00000000000000000000000000000000000000000000000000000000000000008610156101395760405163211ddda360e11b815260040160405180910390fd5b60006101c16101466107d3565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006107f9565b9050848110806101d057508381115b156101ee57604051633b61151160e11b815260040160405180910390fd5b6000806101fb898661083f565b9150915061021261020a610918565b82600461094e565b50600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e954909161025e916001600160801b0390911690614816565b6000808052600e6020527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c5491925090610299908390614829565b905060008060006102a986610de3565b90506102b481610f1d565b91506102c76102c288610f54565b610f82565b6001546001600160801b038082168352600354600f0b6020840152600160801b9091041660408201526102f981610f1d565b92508183101561031c5760405163184d952160e11b815260040160405180910390fd5b610332848361032b8187614816565b9190610fa8565b98507f00000000000000000000000000000000000000000000000000000000000000008910156103755760405163211ddda360e11b815260040160405180910390fd5b508b6103818e8a610fc6565b10156103a05760405163c972651760e01b815260040160405180910390fd5b6103b860006103b260208c018c61483c565b8a610fe4565b60006103c38661108c565b9050806103e357604051638bdf918d60e01b815260040160405180910390fd5b600084156103fa576103f58386610fc6565b6103fd565b60005b90508e600061040d828a8f611099565b90508c61041d602082018261483c565b6001600160a01b03167fa59daf574c5c8db34377de83bceea2aa1433cc506d656f5e8f46e5f4b5c58a868e848e61045a6040870160208801614873565b60408051948552602085019390935291830152151560608201526080810187905260a00160405180910390a250505050505050505050505061008e6001600055565b6000806104a7610704565b600554610100900460ff16156104d0576040516321081abf60e01b815260040160405180910390fd5b6104d861072e565b6104e18361079a565b7f00000000000000000000000000000000000000000000000000000000000000008610156105225760405163211ddda360e11b815260040160405180910390fd5b600061052c6110c8565b90508481101561054f576040516342af972b60e01b815260040160405180910390fd5b6000610559610918565b90506000610570610568610918565b84600461094e565b9050600061059e7f000000000000000000000000000000000000000000000000000000000000000084614829565b905060008060006105b08d88876110db565b92509250925080600b60008282546105c89190614829565b90915550600090506105db84898d61125b565b9050808d10156105fe5760405163c972651760e01b815260040160405180910390fd5b610608818c61083f565b50506106168e848a88611283565b600061062360028761148a565b905060008f9050610647828e6000016020810190610641919061483c565b83610fe4565b848a8e84610658602083018361483c565b6001600160a01b03167fb354b32bd86ebd9f0968a338e5c2873d7f0d473aa7a668c2488e66038380258b8c8c61068f8b88886114bf565b61069f6040880160208901614873565b6106b5898f8c6106af9190614816565b906114e7565b6040805195865260208601949094529284019190915215156060830152608082015260a0810188905260c00160405180910390a350979c50929a50505050505050505050506100ab6001600055565b60026000540361072757604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1480159061077a57503415155b1561079857604051631574f9f360e01b815260040160405180910390fd5b565b60006107a9602083018361483c565b6001600160a01b0316036107d05760405163f0dd15fd60e01b815260040160405180910390fd5b50565b6001546003546000916107f4916001600160801b0390911690600f0b6114fc565b905090565b6000806108088787878661151b565b905061083461081c82866301e13380611532565b61082e83670de0b6b3a7640000614816565b90610fc6565b979650505050505050565b600080806108536040850160208601614873565b156108785761086e856108696040870187614890565b611558565b9093509050610894565b50346108908561088b6040870187614890565b6117ec565b8492505b61089c6110c8565b9150801561090f57604051600090339083908381818185875af1925050503d80600081146108e6576040519150601f19603f3d011682016040523d82523d6000602084013e6108eb565b606091505b505090508061090d576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b60006109447f0000000000000000000000000000000000000000000000000000000000000000426148ed565b6107f49042614816565b600083815260076020526040812080546001600160801b031615158061097357504285115b1561098957546001600160801b03169050610ddc565b600080610994610918565b90508087036109a557859150610a3f565b60006109d17f000000000000000000000000000000000000000000000000000000000000000089614829565b90505b6000818152600760205260409020546001600160801b0316925081811480156109fb575082155b15610a04578692505b82600003610a3d57610a367f000000000000000000000000000000000000000000000000000000000000000082614829565b90506109d4565b505b610a4882611996565b83546001600160801b0319166001600160801b0391909116178355610a6c866119c0565b5060009050600781610a9e7f00000000000000000000000000000000000000000000000000000000000000008b614816565b815260208101919091526040016000908120546001600160801b03169150610ac760028a61148a565b6000818152600e60205260408120549192508a8a8315610c0d5760019250600080610af686898c866000611b64565b9150915080600b6000828254610b0c9190614829565b90915550610b28905086600084610b2281610f54565b88611c33565b610b328183614829565b9150610b6286838a8d877f0000000000000000000000000000000000000000000000000000000000000000611dad565b9150610b76610b7183856114e7565b611df1565b60058054600290610b979084906201000090046001600160701b0316614901565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610bc482611996565b60058054601090610be6908490600160801b90046001600160801b0316614921565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000610c1a60018461148a565b6000818152600e60205260409020549091508015610d295760019450600080610c47838b8e886001611b64565b9150915080600b6000828254610c5d9190614829565b90915550610c79905083600084610c7381610f54565b8a611e1b565b610c838183614816565b9150610c92610b7183876114e7565b60058054600290610cb39084906201000090046001600160701b0316614901565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610ce082611996565b60058054601090610d02908490600160801b90046001600160801b0316614921565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610d6157610d55610d3b87610f54565b610d4483610f54565b610d4e9190614941565b600061200c565b610d5f8e8e6120bf565b505b6000610d6c8f61224a565b5090508f7fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab78c868a8686604051610dc5959493929190948552602085019390935260408401919091526060830152608082015260a00190565b60405180910390a250989a50505050505050505050505b9392505050565b610deb61467d565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526002540482166101008201526004549091610120830191610ee3911661233a565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192610f159290041661233a565b905292915050565b6000806000610f2b846123b0565b9150915080610f4d57604051635516328b60e11b815260040160405180910390fd5b5092915050565b60006001600160ff1b03821115610f7e5760405163396ea70160e11b815260040160405180910390fd5b5090565b610f8b8161243d565b6107d057604051635044b7f560e01b815260040160405180910390fd5b6000826000190484118302158202610fbf57600080fd5b5091020490565b6000610fdb83670de0b6b3a764000084610fa8565b90505b92915050565b6000838152600d602090815260408083206001600160a01b038616845290915281208054839290611016908490614829565b90915550506000838152600e602052604081208054839290611039908490614829565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b6000610fde8260046120bf565b60006110ab6040830160208401614873565b156110b7575082610ddc565b6110c184846114e7565b9050610ddc565b60006107f4670de0b6b3a764000061254a565b60008060006111476110eb6107d3565b600154600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f0000000000000000000000000000000000000000000000000000000000000000612645565b9150856111548387612666565b11156111625761116261267b565b60008060006111cc6111726107d3565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061151b565b90506111e289670de0b6b3a7640000838b612694565b509194509092506111f590508284614816565b6111ff9086614816565b945061124b886112458b611213868a614816565b8b61121e8e826127a2565b8e7f00000000000000000000000000000000000000000000000000000000000000006127b8565b90612666565b9550909250505093509350939050565b600061126d6040830160208401614873565b15611279575082610ddc565b6110c18484610fc6565b6001546001600160801b03168381101561129f5761129f61267b565b60035490849003907f0000000000000000000000000000000000000000000000000000000000000000906112d7908390600f0b6114fc565b10156112e5576112e561267b565b6003546113349061132f90600160801b90046001600160801b0316611312670de0b6b3a764000086614961565b600454600160801b90046001600160801b031691908960016127dd565b611996565b600480546001600160801b03928316600160801b02921691909117905561135a81611996565b600180546001600160801b0319166001600160801b039290921691909117905561138385611996565b600180546010906113a5908490600160801b90046001600160801b0316614921565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506113d285611996565b600380546010906113f4908490600160801b90046001600160801b0316614921565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006114238361289a565b90506114418161143288610f54565b61143c9084614941565b61200c565b61144a846128de565b6114565761145661267b565b60006114618561108c565b90508061148157604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b60006001600160f81b038211156114b45760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60006114d16040830160208401614873565b156114e0576110c18484610fc6565b5082610ddc565b6000610fdb8383670de0b6b3a7640000610fa8565b600080611509848461293e565b909250905080610f4d57610f4d61267b565b600061008e8261152c858888610fa8565b9061297a565b600082600019048411830215820261154957600080fd5b50910281810615159190040190565b6000808073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016115a8575047611633565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa15801561160c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116309190614978565b90505b6001600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016116ae578734101561169d576040516312171d8360e31b815260040160405180910390fd5b6116a78834614816565b9050611748565b6040516323b872dd60e01b8152336004820152306024820152604481018990527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015611721573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117459190614991565b91505b81611766576040516312171d8360e31b815260040160405180910390fd5b6012546000036117ab5761179a887f0000000000000000000000000000000000000000000000000000000000000000610fc6565b6012819055945092506117e4915050565b6012546000906117bd908a9086610fa8565b905080601260008282546117d19190614829565b909155509095509093506117e492505050565b935093915050565b60006117f78461254a565b90506012546000036118355761182d817f0000000000000000000000000000000000000000000000000000000000000000610fc6565b60125561185b565b6000611840826129ef565b905080601260008282546118549190614829565b9091555050505b6001600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016118d657823410156118c5576040516312171d8360e31b815260040160405180910390fd5b6118cf8334614816565b9050611970565b6040516323b872dd60e01b8152336004820152306024820152604481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015611949573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061196d9190614991565b91505b8161198e576040516312171d8360e31b815260040160405180910390fd5b505050505050565b60006001600160801b03821115610f7e57604051630f0af95160e11b815260040160405180910390fd5b60055460009081906119e3908490600160801b90046001600160801b03166114e7565b6005546201000090046001600160701b03169250905081811115611b5f576000611a0d8383614816565b9050611a1c61132f8286612ad8565b60058054601090611a3e908490600160801b90046001600160801b03166149ae565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611a778583610fc690919063ffffffff16565b90506000611aa5827f00000000000000000000000000000000000000000000000000000000000000006114e7565b905080600b6000828254611ab99190614829565b90915550611ac990508183614816565b9150611ad482611996565b60018054600090611aef9084906001600160801b0316614921565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611b1c82612aed565b60038054600090611b31908490600f0b6149ce565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b600080611b718785610fc6565b91506000611b9f837f00000000000000000000000000000000000000000000000000000000000000006114e7565b9050611bcb817f00000000000000000000000000000000000000000000000000000000000000006114e7565b91508315611bee57611bdd8282614816565b611be79084614816565b9250611c05565b611bf88282614816565b611c029084614829565b92505b86861015611c2857611c18838789610fa8565b9250611c25828789610fa8565b91505b509550959350505050565b600354600160801b90046001600160801b0316611c7c61132f82611c5f670de0b6b3a764000086614961565b600454600160801b90046001600160801b031691908a60006127dd565b600480546001600160801b03928316600160801b029216919091179055611ca286611996565b611cac90826149ae565b600380546001600160801b03928316600160801b029216919091179055611cd284611996565b60018054600090611ced9084906001600160801b0316614921565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611d1a83612b17565b60038054600090611d2f908490600f0b6149ce565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611d5f85611996565b60018054601090611d81908490600160801b90046001600160801b03166149ae565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600080611dbf8461082e8a888a610fa8565b9050611dcc888486610fa8565b611dd69082614829565b905086811115611de65786810391505b509695505050505050565b60006001600160701b03821115610f7e5760405163086b151760e11b815260040160405180910390fd5b6001546001600160801b031683811080611e5d57507f0000000000000000000000000000000000000000000000000000000000000000611e5b8583614816565b105b15611e6a57611e6a61267b565b6003549084900390600f0b611e7f8482614941565b905083611e8b86610f54565b138015611ec057507f0000000000000000000000000000000000000000000000000000000000000000611ebe83836114fc565b105b15611ecd57611ecd61267b565b600254600160801b90046001600160801b0316611f0f61132f82611ef9670de0b6b3a764000088614961565b6004546001600160801b031691908c60006127dd565b600480546001600160801b0319166001600160801b0392909216919091179055611f398882614816565b9050611f4481611996565b600280546001600160801b03928316600160801b029216919091179055611f6a83611996565b600180546001600160801b0319166001600160801b0392909216919091179055611f9382612b17565b600380546001600160801b0319166001600160801b0392909216919091179055611fbc87611996565b60018054601090611fde908490600160801b90046001600160801b0316614921565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b600061203561201b8483612b53565b612026846000612b53565b6120309190614941565b612b17565b9050600081600f0b131561208a57600280548291906000906120619084906001600160801b0316614921565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b12156120ba5761209f816149fb565b600280546000906120619084906001600160801b03166149ae565b505050565b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e9549091829161210a916001600160801b031690614816565b90508060000361211e576001915050610fde565b600061212985612b62565b90508060000361213e57600192505050610fde565b60008061214c838589612c04565b9150915080612162576000945050505050610fde565b60008061216f8489612d0a565b9150915061218d61217f82610f54565b61218890614a21565b61243d565b9250826121a35760009650505050505050610fde565b6121ac82611996565b600680546000906121c79084906001600160801b0316614921565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506121f481611996565b60068054601090612216908490600160801b90046001600160801b0316614921565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008061226161225c86610de3565b6123b0565b9150915080612277575060009485945092505050565b6000808611612287576000612291565b61229183876114e7565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b03909216916122fc9190614829565b6123069190614816565b90508060000361231f5750600096879650945050505050565b600061232b8383610fc6565b98600198509650505050505050565b600080670de0b6b3a764000061234e610918565b6123589190614961565b9050808311612368576000612372565b6123728184614816565b9150610ddc6123a9670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000614961565b8390610fc6565b60008060008060006123c186612dfa565b91509150806123d857506000958695509350505050565b6123e58660a00151610f54565b6123ee8761311a565b836123fc8960000151610f54565b6124069190614a3d565b6124109190614a3d565b61241a9190614941565b9250505060008112156124335750600093849350915050565b9360019350915050565b6001546003546000916001600160801b0380821692600f0b91600160801b9004168380808061248f8787877f00000000000000000000000000000000000000000000000000000000000000008d61317e565b9350935093509350806124ab5750600098975050505050505050565b8684146124dc576124bb84611996565b600180546001600160801b0319166001600160801b03929092169190911790555b85831461250d576124ec83612b17565b600380546001600160801b0319166001600160801b03929092169190911790555b84821461253b5761251d82611996565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612599575047612624565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156125fd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906126219190614978565b90505b601254600003612635576000610ddc565b601254610ddc9084908390610fa8565b600061083487878761265f88670de0b6b3a7640000614816565b8787613296565b6000610fdb8383670de0b6b3a7640000611532565b60405163bb55fd2760e01b815260040160405180910390fd5b60008080806126e587866126de8b6112456126b78c670de0b6b3a7640000614816565b7f000000000000000000000000000000000000000000000000000000000000000090612666565b9190611532565b9350612711847f00000000000000000000000000000000000000000000000000000000000000006114e7565b9150600061273261272a89670de0b6b3a7640000614816565b8a9088611532565b905061275e817f0000000000000000000000000000000000000000000000000000000000000000612666565b935061278a847f00000000000000000000000000000000000000000000000000000000000000006114e7565b6127949084614829565b915050945094509450949050565b60008183116127b15781610fdb565b5090919050565b6000806127d0846127ca8a888a611532565b90612ad8565b9050611dcc888486611532565b6000826000036127ee57508461008e565b81156128605761281f6128018487614829565b61280b85876114e7565b612815888a6114e7565b61082e9190614829565b9050600061282d85886132b9565b9050600061283b86896127a2565b90508183101561284d57819250612859565b80831115612859578092505b505061008e565b82850361286f5750600061008e565b61008b61287c8487614816565b6128868587612666565b612890888a6114e7565b61082e9190614816565b60006128c2600e60006128ae60028661148a565b815260200190815260200160002054610f54565b6128d4600e60006128ae60018761148a565b610fde9190614941565b600061290a7f000000000000000000000000000000000000000000000000000000000000000083612666565b60025461292091906001600160801b0316614829565b600154612936906001600160801b0316846114e7565b101592915050565b60008060008361294d86610f54565b6129579190614941565b9050600081121561296f576000809250925050610911565b946001945092505050565b6000816000036129935750670de0b6b3a7640000610fde565b826000036129a357506000610fde565b60006129ae83610f54565b905060006129c36129be86610f54565b6132c8565b90508181026129da670de0b6b3a764000082614a65565b90506129e5816134ee565b9695505050505050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612a3e575047612ac9565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015612aa2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612ac69190614978565b90505b601254610ddc90849083610fa8565b6000610fdb83670de0b6b3a764000084611532565b600060016001607f1b03821115610f7e5760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b0319821280612b35575060016001607f1b0382135b15610f7e5760405163a5353be560e01b815260040160405180910390fd5b60008183136127b15781610fdb565b6002546000908190612b7d906001600160801b031684612ad8565b9050612ba97f000000000000000000000000000000000000000000000000000000000000000082614829565b6001546001600160801b03161115612bfe576001547f000000000000000000000000000000000000000000000000000000000000000090612bf49083906001600160801b0316614816565b610ddc9190614816565b50919050565b612c0c6146de565b600080612c1884610de3565b90506000612c25826123b0565b9350905082612c3a5750600091506117e49050565b6000612c61612c5c8461016001518561014001516114e790919063ffffffff16565b610f54565b612c81612c5c85610120015186610100015161266690919063ffffffff16565b612c8b9190614941565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b600080600080612d228660c001518760e0015161293e565b9150915080612d3957600080935093505050610911565b6000612d458784613683565b92509050811580612d54575080155b15612d685760008094509450505050610911565b6000612d748883613792565b905080600003612d8e576000809550955050505050610911565b87606001518111612da55794509250610911915050565b5060608701516000612db98986858b613863565b905080600003612dd457600080965096505050505050610911565b828110612dec57600080965096505050505050610911565b909890975095505050505050565b6000806000612e1f612c5c8561016001518661014001516114e790919063ffffffff16565b612e3f612c5c86610120015187610100015161266690919063ffffffff16565b612e499190614941565b9050600080612e608660000151876020015161293e565b9150915080612e7757506000958695509350505050565b6000831315612fb85760008390506000612ec5886000015189602001518a604001518b60a001518c60e00151670de0b6b3a7640000612eb69190614816565b8d606001518e60800151613d7a565b9350905082612ede575060009788975095505050505050565b818110612f7c576000612f18858a60400151858c60e00151670de0b6b3a7640000612f099190614816565b8d606001518e60800151613e86565b9450905083158015612f2d57508860c0015183105b15612f445750600098600198509650505050505050565b83612f5a57506000988998509650505050505050565b612f6381610f54565b612f6c90614a21565b9960019950975050505050505050565b6000886020015112612fa457612f9b8860a0015185612c5c9190614816565b61232b90614a21565b60a08801518851612f9b91612c5c91614816565b600083121561310b576000612fcc84614a21565b905060006130008489604001518a60e00151670de0b6b3a7640000612ff19190614816565b8b606001518c60800151613f49565b9350905082613019575060009788975095505050505050565b81811061309e576000613053858a60400151858c60e00151670de0b6b3a76400006130449190614816565b8d606001518e60800151613ff5565b945090508315801561306857508860c0015183105b1561307f5750600098600198509650505050505050565b8361309557506000988998509650505050505050565b612f6c81610f54565b60006130d0858a604001518b60e00151670de0b6b3a76400006130c19190614816565b8c606001518d608001516140cc565b94509050836130ea57506000988998509650505050505050565b612f6c6131018a60600151848661082e9190614816565b612c5c9083614829565b50600095600195509350505050565b600061314d612c5c836101200151670de0b6b3a764000061313b9190614816565b60608501516101008601519190611532565b6128d4612c5c846101600151670de0b6b3a764000061316c9190614816565b60608601516101408701519190610fa8565b6000806000808460000361319d5750879250869150859050600161328a565b6000856131a98b610f54565b6131b39190614a3d565b90506131be87610f54565b8112156131d95760008060008094509450945094505061328a565b809450600089126131f9576131f2612c5c868b8d610fa8565b935061321c565b613210612c5c6132088b614a21565b87908d611532565b61321990614a21565b93505b6000806132298c8c61293e565b915091508061324857600080600080965096509650965050505061328a565b6000613254888861293e565b92509050816132745760008060008097509750975097505050505061328a565b61327f8b8285610fa8565b955060019450505050505b95509550955095915050565b6000806132a7888888888888613e86565b909250905080611de657611de661267b565b6000818311612bfe5782610fdb565b60008082136132ea5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f1982019061336d9084901c610f54565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361350957506000919050565b680755bf798b4a1bf1e58212613532576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b0181810595509293509091906129e574029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c610f54565b60008060008460a00151126136a057505060808201516001610911565b60008460a001516136b090614a21565b905060006136ec85876101000151886000015160e00151670de0b6b3a76400006136da9190614816565b89516060810151608090910151613f49565b935090508215806136fb575080155b1561370e57600080935093505050610911565b600061371a8383612ad8565b9050670de0b6b3a764000081116137565780670de0b6b3a764000003945061374f8760c00151866114e790919063ffffffff16565b9450613765565b60008094509450505050610911565b8660800151851115613784578660800151600194509450505050610911565b506001925050509250929050565b6000806137c88460c001518560e00151866101000151876000015160a001516137ba88610f54565b6137c390614a21565b61317e565b875160408101929092526020820192909252919091529050806137ef576000915050610fde565b60006137fe85600001516123b0565b925090508161381257600092505050610fde565b8460200151811061382857600092505050610fde565b60008560600151866040015161383e9190614829565b905061385982876020015183610fa89092919063ffffffff16565b6129e59082614816565b6000808560600151866040015161387a9190614829565b602087015160608801519192506000916138949184610fa8565b90508660a001516000036138ab579150613d729050565b600080808960048810156138be57600497505b60005b88811015613c1a576138d3868b6132b9565b955060006138fc8360c001518460e00151856101000151866000015160a001516137ba8c610f54565b8651604081019290925260208201929092529190915290508061392a57600098505050505050505050613d72565b60006139398e600001516123b0565b92509050816139545760009950505050505050505050613d72565b61395f84828b61417b565b1561397557879950505050505050505050613d72565b60008460a001511315613ade57835180516020820151604083015160a084015160e0909401516000946139c9949392916139b790670de0b6b3a7640000614816565b8a516060810151608090910151613d7a565b93509050826139e55760009a5050505050505050505050613d72565b808560a0015110613adc576139f9856141e0565b909950925082613a165760009a5050505050505050505050613d72565b613a3b8560c001518660e00151876101000151886000015160a001516137ba8e610f54565b88516040810192909252602082019290925291909152925082613a6b5760009a5050505050505050505050613d72565b845180516020820151604083015160a084015160e090940151613a9b94906139b790670de0b6b3a7640000614816565b9350905082613ab75760009a5050505050505050505050613d72565b8e60a001518111613ad457889a5050505050505050505050613d72565b5050506138c1565b505b6000613aef858f8760a001516142b6565b93509050821580613b085750670de0b6b3a76400008110155b15613b205760009a5050505050505050505050613d72565b80670de0b6b3a76400000390506000613b4d612c5c8760400151886020015161266690919063ffffffff16565b613b5a612c5c858e6114e7565b613b649190614941565b9050881580613b825750613b7789614611565b613b8082614611565b125b15613b91578098508997508296505b6000811315613bb957613ba88b61082e8385610fc6565b613bb2908b614829565b9950613c0b565b6000811215613c02576000613bd38c61082e858186614a21565b90508a811015613be757808b039a50613bfc565b60009c50505050505050505050505050613d72565b50613c0b565b50505050613c1a565b846001019450505050506138c1565b506000613c428260c001518360e00151846101000151856000015160a001516137ba8b610f54565b85516040810192909252602082019290925291909152905080613c6f576000975050505050505050613d72565b6000613c7e8360000151610f1d565b90506000613ca0612c5c8560400151866020015161266690919063ffffffff16565b613cad612c5c848c6114e7565b613cb79190614941565b9050613cc287614611565b613ccb82614611565b1215613cd8578795508194505b613cff613cf3655af3107a4000670de0b6b3a7640000614816565b6020860151908b611532565b6040850151613d0f908790610fc6565b1080613d4f5750613d3d613d31655af3107a4000670de0b6b3a7640000614829565b6020860151908b610fa8565b6040850151613d4d908790612ad8565b115b15613d665760009950505050505050505050613d72565b50939750505050505050505b949350505050565b6000806000881215613d9c57613d8f88614a21565b613d999087614829565b95505b600080613da98b8b61293e565b9150915080613dc057600080935093505050613e7a565b6000613dcf838b8a8a8a614629565b90506000613dec613de48a61152c8a8e612666565b899089611532565b905080821015613e06576000809550955050505050613e7a565b808203670de0b6b3a76400008110613e3b57613e34613e2d670de0b6b3a76400008c610fc6565b829061297a565b9050613e53565b613e50613e2d670de0b6b3a76400008c612ad8565b90505b8b811015613e6c57600080965096505050505050613e7a565b8b9003955060019450505050505b97509795505050505050565b6000806000613e988989888888614658565b9050613ea88661152c898b614829565b975087811015613ebf576000809250925050613f3e565b878103613ecd818688611532565b9050670de0b6b3a76400008110613efa57613ef3613e2d670de0b6b3a764000089612ad8565b9050613f12565b613f0f613e2d670de0b6b3a764000089610fc6565b90505b613f1c8186612ad8565b9050808a1015613f3457600080935093505050613f3e565b8903925060019150505b965096945050505050565b6000806000613f5b8888888888614658565b90506000613f86670de0b6b3a7640000613f758888610fc6565b613f7f9190614829565b8390612ad8565b9050670de0b6b3a76400008110613fb357613fac613e2d670de0b6b3a764000089612ad8565b9050613fcb565b613fc8613e2d670de0b6b3a764000089610fc6565b90505b80881015613fe157600080935093505050613feb565b8703925060019150505b9550959350505050565b60008060006140078989888888614658565b90508688101561401e576000809250925050613f3e565b968690039661402d888761297a565b975087811015614044576000809250925050613f3e565b878103614052818688611532565b9050670de0b6b3a7640000811061407f57614078613e2d670de0b6b3a764000089612ad8565b9050614097565b614094613e2d670de0b6b3a764000089610fc6565b90505b6140a18186612ad8565b9050898110156140b957600080935093505050613f3e565b9890980398600198509650505050505050565b60008060006140de8888888888614629565b90506000614102670de0b6b3a76400006140f88888612ad8565b6123a99190614829565b9050670de0b6b3a7640000811061412f57614128613e2d670de0b6b3a764000089610fc6565b9050614147565b614144613e2d670de0b6b3a764000089612ad8565b90505b6141518186610fc6565b90508881101561416957600080935093505050613feb565b97909703976001975095505050505050565b602083015160009061418d9084612ad8565b604085015161419d908490610fc6565b10158015613d72575060208401516141c6908461032b633b9aca00670de0b6b3a7640000614829565b60408501516141d6908490612ad8565b1115949350505050565b60008060008360e00151136141fa57506000928392509050565b6000614209846000015161311a565b905060006142358560400151866060015187604001516142299190614829565b60208801519190611532565b90506000821261425c578082101561424f57819003614272565b5060009485945092505050565b61426582614a21565b61426f9082614829565b90505b60e085015160c0860151614287918390611532565b9050808560c0015110156142a2575060009485945092505050565b808560c00151036001935093505050915091565b60008060008084126142da578551604001516142d3908590614829565b9050614315565b60006142e585614a21565b875160400151909150811015614305578651604001518190039150614313565b6000809350935050506117e4565b505b85518051602090910151600091829161432e919061293e565b915091508061434657600080945094505050506117e4565b875160e081015160409091015160009161437b9161436f91614368919061297a565b8a906114e7565b6101008b015190612ad8565b895160e08101516080909101516143a69161439a9161152c90886114e7565b8b516060015190612ad8565b6143b09190614829565b905060006143e86143dc6143d58c6000015160e001518861297a90919063ffffffff16565b8b90612666565b6101008c015190610fc6565b905080821015614403576000809650965050505050506117e4565b80820391506000614445858c60000151604001518d6000015160e00151670de0b6b3a76400006144339190614816565b8e516060810151608090910151614658565b9050600061446f8c6000015160e00151670de0b6b3a76400006144689190614816565b889061297a565b90508082101561448c5760008098509850505050505050506117e4565b8b516080810151606090910151918303916144a8918391611532565b9050670de0b6b3a764000081106144ec578b5160e001516144e590613e2d906144d990670de0b6b3a7640000614816565b8e5160e0015190612ad8565b905061451b565b8b5160e0015161451890613e2d9061450c90670de0b6b3a7640000614816565b8e5160e0015190610fc6565b90505b8b516060015161452e9085908390611532565b935083670de0b6b3a764000011156145525783670de0b6b3a7640000039350614566565b6000600198509850505050505050506117e4565b60008c60e00151126145c95760c08c015160e08d015161458591612ad8565b9250670de0b6b3a76400008311156145aa5760008098509850505050505050506117e4565b670de0b6b3a764000092909203916145c284846114e7565b93506145fe565b6145fb6145e28d60c001518e60e0015161082e90614a21565b6145f490670de0b6b3a7640000614829565b85906114e7565b93505b50919a60019a5098505050505050505050565b60008082126146205781610fde565b610fde82614a21565b6000614635858561297a565b61464e6146468661152c868b6114e7565b859085610fa8565b61008b9190614829565b6000614664858561297a565b61464e6146758661152c868b612666565b859085611532565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061012001604052806146f261467d565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b600060608284031215612bfe57600080fd5b600080600080600060a0868803121561475a57600080fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff81111561478d57600080fd5b61479988828901614730565b9150509295509295909350565b600080600080608085870312156147bc57600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff8111156147e857600080fd5b6147f487828801614730565b91505092959194509250565b634e487b7160e01b600052601160045260246000fd5b81810381811115610fde57610fde614800565b80820180821115610fde57610fde614800565b60006020828403121561484e57600080fd5b81356001600160a01b0381168114610ddc57600080fd5b80151581146107d057600080fd5b60006020828403121561488557600080fd5b8135610ddc81614865565b6000808335601e198436030181126148a757600080fd5b83018035915067ffffffffffffffff8211156148c257600080fd5b60200191503681900382131561091157600080fd5b634e487b7160e01b600052601260045260246000fd5b6000826148fc576148fc6148d7565b500690565b6001600160701b03818116838216019080821115610f4d57610f4d614800565b6001600160801b03818116838216019080821115610f4d57610f4d614800565b8181036000831280158383131683831282161715610f4d57610f4d614800565b8082028115828204841417610fde57610fde614800565b60006020828403121561498a57600080fd5b5051919050565b6000602082840312156149a357600080fd5b8151610ddc81614865565b6001600160801b03828116828216039080821115610f4d57610f4d614800565b600f81810b9083900b0160016001607f1b03811360016001607f1b031982121715610fde57610fde614800565b600081600f0b60016001607f1b03198103614a1857614a18614800565b60000392915050565b6000600160ff1b8201614a3657614a36614800565b5060000390565b8082018281126000831280158216821582161715614a5d57614a5d614800565b505092915050565b600082614a7457614a746148d7565b600160ff1b821460001984141615614a8e57614a8e614800565b50059056fea2646970667358221220afebf76abdd1ef1b53325754a234ddaf6db0c21d0275764f18bee99b9db6e42e64736f6c63430008140033";
        readonly sourceMap: "14441:174:135:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;2324:429:41;;;;;;:::i;:::-;;:::i;:::-;;;956:25:234;;;944:2;929:18;2324:429:41;;;;;;;;3669:314;;;;;;:::i;:::-;;:::i;:::-;;;;1733:25:234;;;1789:2;1774:18;;1767:34;;;;1706:18;3669:314:41;1559:248:234;2324:429:41;2540:7;2578:168;2609:13;2640:16;2674:7;2699;2724:8;2578:13;:168::i;:::-;2559:187;;2324:429;;;;;;;;:::o;3669:314::-;3862:7;3871;3909:67;3920:11;3933;3946:19;3967:8;3909:10;:67::i;:::-;3890:86;;;;3669:314;;;;;;;;:::o;6395:5630:114:-;6629:16;2356:21:169;:19;:21::i;:::-;9318::112;;::::1;::::0;::::1;;;9314:85;;;9362:26;;-1:-1:-1::0;;;9362:26:112::1;;;;;;;;;;;9314:85;6707:20:114::2;:18;:20::i;:::-;6792:23;6806:8;6792:13;:23::i;:::-;6957:25;6941:13;:41;6937:117;;;7005:38;;-1:-1:-1::0;;;7005:38:114::2;;;;;;;;;;;6937:117;7103:11;7117:213;7162:25;:23;:25::i;:::-;7201:12;:25:::0;-1:-1:-1;;;7201:25:114;::::2;-1:-1:-1::0;;;;;7201:25:114::2;7240:23;7277:17;7308:12;7117:31;:213::i;:::-;7103:227;;7350:7;7344:3;:13;:30;;;;7367:7;7361:3;:13;7344:30;7340:92;;;7397:24;;-1:-1:-1::0;;;7397:24:114::2;;;;;;;;;;;7340:92;7511:25;7538:23:::0;7565:67:::2;7587:13;7614:8;7565;:67::i;:::-;7510:122;;;;7676:138;7706:19;:17;:19::i;:::-;7739:15;871:1:124;7676:16:114;:138::i;:::-;-1:-1:-1::0;8343:13:114::2;:29:::0;-1:-1:-1;;;8232:35:114::2;8270:70:::0;;;:12:::2;:70;::::0;;;8232:35;;8270:102:::2;::::0;-1:-1:-1;;;;;8343:29:114;;::::2;::::0;8270:102:::2;:::i;:::-;8382:21;8406:34:::0;;;:12:::2;:34;::::0;;;8232:140;;-1:-1:-1;8382:21:114;8406:76:::2;::::0;8232:140;;8406:76:::2;:::i;:::-;8382:100;;8547:26;8583:28:::0;8708:39:::2;8750:69;8790:15;8750:22;:69::i;:::-;8708:111;;8856:36;8885:6;8856:28;:36::i;:::-;8833:59;;9015:46;9032:28;:17;:26;:28::i;:::-;9015:16;:46::i;:::-;9098:12;:26:::0;-1:-1:-1;;;;;9098:26:114;;::::2;9075:49:::0;;9163:28;;::::2;;9138:22;::::0;::::2;:53:::0;-1:-1:-1;;;9227:25:114;;::::2;;9205:19;::::0;::::2;:47:::0;9287:36:::2;9075:6:::0;9287:28:::2;:36::i;:::-;9266:57;;9440:20;9419:18;:41;9415:141;;;9487:54;;-1:-1:-1::0;;;9487:54:114::2;;;;;;;;;;;9415:141;10052:137;10124:13:::0;10155:20;10053:41:::2;10155:20:::0;10053:18;:41:::2;:::i;:::-;10052:54:::0;:137;:54:::2;:137::i;:::-;10041:148;;10304:25;10293:8;:36;10289:120;;;10356:38;;-1:-1:-1::0;;;10356:38:114::2;;;;;;;;;;;10289:120;-1:-1:-1::0;10605:16:114;10571:31:::2;:13:::0;10593:8;10571:21:::2;:31::i;:::-;:50;10567:113;;;10644:25;;-1:-1:-1::0;;;10644:25:114::2;;;;;;;;;;;10567:113;10733:59;554:1:119;10761:20:114;;::::0;::::2;:8:::0;:20:::2;:::i;:::-;10783:8;10733:5;:59::i;:::-;11079:12;11094:42;11120:15;11094:25;:42::i;:::-;11079:57;;11151:7;11146:86;;11181:40;;-1:-1:-1::0;;;11181:40:114::2;;;;;;;;;;;11146:86;11281:20;11304:18:::0;;:158:::2;;11419:43;:20:::0;11448:13;11419:28:::2;:43::i;:::-;11304:158;;;11337:1;11304:158;11281:181:::0;-1:-1:-1;11495:13:114;11472:20:::2;11569:111;11495:13:::0;11633:15;11662:8;11569:24:::2;:111::i;:::-;11542:138:::0;-1:-1:-1;11729:8:114;11802:19:::2;;::::0;::::2;11729:8:::0;11802:19:::2;:::i;:::-;-1:-1:-1::0;;;;;11776:242:114::2;;11835:8:::0;11857:16;11908:17;11968:14:::2;::::0;;;::::2;::::0;::::2;;:::i;:::-;11776:242;::::0;;3252:25:234;;;3308:2;3293:18;;3286:34;;;;3336:18;;;3329:34;3406:14;3399:22;3394:2;3379:18;;3372:50;3453:3;3438:19;;3431:35;;;3239:3;3224:19;11776:242:114::2;;;;;;;6647:5378;;;;;;;;;;;;2398:20:169::0;1713:1;2924:7;:21;2744:208;2007:4496:117;2218:7;2227;2356:21:169;:19;:21::i;:::-;9318::112;;::::1;::::0;::::1;;;9314:85;;;9362:26;;-1:-1:-1::0;;;9362:26:112::1;;;;;;;;;;;9314:85;2296:20:117::2;:18;:20::i;:::-;2381:23;2395:8;2381:13;:23::i;:::-;2543:25;2529:11;:39;2525:115;;;2591:38;;-1:-1:-1::0;;;2591:38:117::2;;;;;;;;;;;2525:115;2966:23;2992:21;:19;:21::i;:::-;2966:47;;3045:19;3027:15;:37;3023:106;;;3087:31;;-1:-1:-1::0;;;3087:31:117::2;;;;;;;;;;;3023:106;3138:24;3165:19;:17;:19::i;:::-;3138:46;;3194:27;3224:138;3254:19;:17;:19::i;:::-;3287:15;871:1:124;3224:16:117;:138::i;:::-;3194:168:::0;-1:-1:-1;3601:20:117::2;3624:36;3643:17;3624:16:::0;:36:::2;:::i;:::-;3601:59;;3684:19;3717:26:::0;3757::::2;3796:132;3833:11;3862:15;3895:19;3796;:132::i;:::-;3670:258;;;;;;4007:18;3981:22;;:44;;;;;;;:::i;:::-;::::0;;;-1:-1:-1;4659:15:117::2;::::0;-1:-1:-1;4677:110:117::2;4715:11:::0;4740:15;4769:8;4677:24:::2;:110::i;:::-;4659:128;;4815:7;4801:11;:21;4797:84;;;4845:25;;-1:-1:-1::0;;;4845:25:117::2;;;;;;;;;;;4797:84;4890:27;4899:7;4908:8;4890;:27::i;:::-;;;5145:137;5174:11;5199:18;5231:15;5260:12;5145:15;:137::i;:::-;5341:15;5359:98;5394:27;5435:12;5359:21;:98::i;:::-;5341:116;;5467:18;5488:11;5467:32;;5540:48;5546:7;5555:8;:20;;;;;;;;;;:::i;:::-;5577:10;5540:5;:48::i;:::-;5665:18:::0;5751:15;5846:8;5925:7;5892:19:::2;;::::0;::::2;5846:8:::0;5892:19:::2;:::i;:::-;-1:-1:-1::0;;;;;5869:586:117::2;;5946:12;5972:11;6013:67;6045:7;6054:16;6072:7;6013:31;:67::i;:::-;6118:14;::::0;;;::::2;::::0;::::2;;:::i;:::-;6323:98;6391:16;6346:18;6324:19;:40;;;;:::i;:::-;6323:50:::0;::::2;:98::i;:::-;5869:586;::::0;;3758:25:234;;;3814:2;3799:18;;3792:34;;;;3842:18;;;3835:34;;;;3912:14;3905:22;3900:2;3885:18;;3878:50;3959:3;3944:19;;3937:35;4003:3;3988:19;;3981:35;;;3745:3;3730:19;5869:586:117::2;;;;;;;-1:-1:-1::0;6474:12:117;;-1:-1:-1;6488:7:117;;-1:-1:-1;;;;;;;;;;;2398:20:169;1713:1;2924:7;:21;2744:208;2431:307;1755:1;2558:7;;:18;2554:86;;2599:30;;-1:-1:-1;;;2599:30:169;;;;;;;;;;;2554:86;1755:1;2714:7;:17;2431:307::o;7513:175:135:-;7588:10;-1:-1:-1;;;;;7580:26:135;129:42:120;7580:26:135;;;;:44;;-1:-1:-1;7610:9:135;:14;;7580:44;7576:106;;;7647:24;;-1:-1:-1;;;7647:24:135;;;;;;;;;;;7576:106;7513:175::o;8165:221:112:-;8309:1;8277:20;;;;:8;:20;:::i;:::-;-1:-1:-1;;;;;8277:34:112;;8273:107;;8334:35;;-1:-1:-1;;;8334:35:112;;;;;;;;;;;8273:107;8165:221;:::o;12034:253::-;12194:12;:26;12238:28;;12092:7;;12130:150;;-1:-1:-1;;;;;12194:26:112;;;;12238:28;;12130:46;:150::i;:::-;12111:169;;12034:253;:::o;4497:945:123:-;4730:11;5059:17;5079:155;5111:23;5148:13;5175:23;5212:12;5079:18;:155::i;:::-;5059:175;-1:-1:-1;5263:172:123;5374:47;5059:175;5393:17;5412:8;5374:18;:47::i;:::-;5264:15;5270:9;193:4:122;5264:15:123;:::i;:::-;5263:25;;:172::i;:::-;5244:191;4497:945;-1:-1:-1;;;;;;;4497:945:123:o;1875:1509:112:-;1989:20;;;2155:15;;;;;;;;:::i;:::-;2151:812;;;2255:91;2289:7;2314:18;;;;:8;:18;:::i;:::-;2255:16;:91::i;:::-;2230:116;;-1:-1:-1;2230:116:112;-1:-1:-1;2151:812:112;;;-1:-1:-1;2502:9:112;2572:47;2591:7;2600:18;;;;:8;:18;:::i;:::-;2572;:47::i;:::-;2945:7;2930:22;;2151:812;3035:21;:19;:21::i;:::-;3017:39;-1:-1:-1;3133:10:112;;3129:200;;3178:45;;3160:12;;3186:10;;3211:6;;3160:12;3178:45;3160:12;3178:45;3211:6;3186:10;3178:45;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3159:64;;;3242:7;3237:82;;3276:28;;-1:-1:-1;;;3276:28:112;;;;;;;;;;;3237:82;3145:184;3129:200;3339:38;1875:1509;;;;;;:::o;11630:223::-;11706:24;11808:37;11826:19;11808:15;:37;:::i;:::-;11777:69;;:15;:69;:::i;3383:8567:113:-;3541:7;3673:51;;;:12;:51;;;;;3751:27;;-1:-1:-1;;;;;3751:27:113;:32;;;:81;;;3817:15;3799;:33;3751:81;3734:168;;;3864:27;-1:-1:-1;;;;;3864:27:113;;-1:-1:-1;3857:34:113;;3734:168;4144:33;4187:24;4214:19;:17;:19::i;:::-;4187:46;;4266:16;4247:15;:35;4243:690;;4326:16;4298:44;;4243:690;;;4395:12;4410:37;4428:19;4410:15;:37;:::i;:::-;4395:52;;4373:550;4571:18;;;;:12;:18;;;;;:34;-1:-1:-1;;;;;4571:34:113;;-1:-1:-1;4648:24:113;;;:58;;;;-1:-1:-1;4676:30:113;;4648:58;4623:187;;;4775:16;4747:44;;4623:187;4831:25;4860:1;4831:30;4885:5;4827:82;4483:27;4491:19;4483:27;;:::i;:::-;;;4373:550;;;;4243:690;5025:37;:25;:35;:37::i;:::-;4995:67;;-1:-1:-1;;;;;;4995:67:113;-1:-1:-1;;;;;4995:67:113;;;;;;;5149:40;5172:16;5149:22;:40::i;:::-;-1:-1:-1;5653:27:113;;-1:-1:-1;5683:12:113;5653:27;5709:35;5727:17;5709:15;:35;:::i;:::-;5683:71;;;;;;;;;;;-1:-1:-1;5683:71:113;;;:87;-1:-1:-1;;;;;5683:87:113;;-1:-1:-1;5803:101:113;5838:27;5879:15;5803:21;:101::i;:::-;5914:27;5944:26;;;:12;:26;;;;;;5780:124;;-1:-1:-1;6035:15:113;6110:16;6164:23;;6160:2327;;6378:4;6360:22;;6541:21;6580;6618:236;6665:19;6706;6747:25;6794:15;6831:5;6618:25;:236::i;:::-;6523:331;;;;6894:13;6868:22;;:39;;;;;;;:::i;:::-;;;;-1:-1:-1;6921:237:113;;-1:-1:-1;6955:19:113;6992:1;7011:13;7042:24;7011:13;7042:22;:24::i;:::-;7130:14;6921:16;:237::i;:::-;7392:30;7409:13;7392:30;;:::i;:::-;;;7820:262;7879:19;7916:13;7947:19;7984:25;8027:15;8060:8;7820:41;:262::i;:::-;7804:278;-1:-1:-1;8317:84:113;:55;7804:278;8356:15;8317:38;:55::i;:::-;:82;:84::i;:::-;8282:31;:119;;:31;;:119;;;;;;;-1:-1:-1;;;;;8282:119:113;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;8282:119:113;;;;;-1:-1:-1;;;;;8282:119:113;;;;;;8451:25;:13;:23;:25::i;:::-;8415:32;:61;;:32;;:61;;;;-1:-1:-1;;;8415:61:113;;-1:-1:-1;;;;;8415:61:113;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;8415:61:113;;;;;-1:-1:-1;;;;;8415:61:113;;;;;;6189:2298;;6160:2327;8605:19;8627:99;8662:26;8702:14;8627:21;:99::i;:::-;8736:26;8765:25;;;:12;:25;;;;;;8605:121;;-1:-1:-1;8804:22:113;;8800:1558;;9016:4;8998:22;;9178:21;9217;9255:234;9302:18;9342:19;9383:25;9430:15;9467:4;9255:25;:234::i;:::-;9160:329;;;;9529:13;9503:22;;:39;;;;;;;:::i;:::-;;;;-1:-1:-1;9556:235:113;;-1:-1:-1;9589:18:113;9625:1;9644:13;9675:24;9644:13;9675:22;:24::i;:::-;9763:14;9556:15;:235::i;:::-;9925:30;9942:13;9925:30;;:::i;:::-;;-1:-1:-1;10188:84:113;:55;9925:30;10227:15;10188:38;:55::i;:84::-;10153:31;:119;;:31;;:119;;;;;;;-1:-1:-1;;;;;10153:119:113;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;10153:119:113;;;;;-1:-1:-1;;;;;10153:119:113;;;;;;10322:25;:13;:23;:25::i;:::-;10286:32;:61;;:32;;:61;;;;-1:-1:-1;;;10286:61:113;;-1:-1:-1;;;;;10286:61:113;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;10286:61:113;;;;;-1:-1:-1;;;;;10286:61:113;;;;;;8828:1530;;8800:1558;10509:15;10505:717;;;10729:132;10798:30;:19;:28;:30::i;:::-;10766:29;:18;:27;:29::i;:::-;:62;;;;:::i;:::-;10846:1;10729:19;:132::i;:::-;11152:59;11178:16;11196:14;11152:25;:59::i;:::-;;10505:717;11601:20;11627:44;11654:16;11627:26;:44::i;:::-;11600:71;;;11716:15;11686:214;11745:25;11784:15;11813:19;11846:18;11878:12;11686:214;;;;;;;;;5876:25:234;;;5932:2;5917:18;;5910:34;;;;5975:2;5960:18;;5953:34;;;;6018:2;6003:18;;5996:34;6061:3;6046:19;;6039:35;5863:3;5848:19;;5617:463;11686:214:113;;;;;;;;-1:-1:-1;11918:25:113;;-1:-1:-1;;;;;;;;;;;3383:8567:113;;;;;;:::o;15671:1035:112:-;15766:39;;:::i;:::-;15826:873;;;;;;;;15881:12;:26;-1:-1:-1;;;;;15881:26:112;;;15826:873;;15938:28;;;;15826:873;;;;-1:-1:-1;;;15994:25:112;;;;;;15826:873;;;;;;;;;;;;;16104:23;15826:873;;;;16163:21;15826:873;;;;16224:25;15826:873;;;;16276:12;15826:873;;;;15938:28;16320:29;;;;15881:26;15826:873;;;16436:36;;15826:873;;;;;;16389:97;;16436:36;16389:29;:97::i;:::-;15826:873;;16519:30;;-1:-1:-1;;;;;;;;16519:30:112;;;;;;15826:873;;;;16637:37;;15826:873;;;;;16590:98;;16637:37;;;16590:29;:98::i;:::-;15826:873;;15817:882;15671:1035;-1:-1:-1;;15671:1035:112:o;6397:341:124:-;6500:7;6520:20;6542:12;6558:56;6597:7;6558:25;:56::i;:::-;6519:95;;;;6629:7;6624:79;;6659:33;;-1:-1:-1;;;6659:33:124;;;;;;;;;;;6624:79;-1:-1:-1;6719:12:124;6397:341;-1:-1:-1;;6397:341:124:o;2004:200:125:-;2056:8;-1:-1:-1;;;;;2080:1:125;:29;2076:99;;;2132:32;;-1:-1:-1;;;2132:32:125;;;;;;;;;;;2076:99;-1:-1:-1;2195:1:125;2004:200::o;24570:275:114:-;24729:41;24750:19;24729:20;:41::i;:::-;24724:115;;24793:35;;-1:-1:-1;;;24793:35:114;;;;;;;;;;;898:556:122;1014:9;1279:1;-1:-1:-1;;1262:19:122;1259:1;1256:26;1253:1;1249:34;1242:42;1229:11;1225:60;1198:146;;1328:1;1325;1318:12;1198:146;-1:-1:-1;1415:9:122;;1411:27;;898:556::o;1884:164::-;1946:7;1973:21;1984:1;193:4;1992:1;1973:10;:21::i;:::-;1965:30;;1884:164;;;;;:::o;5934:316:116:-;6051:19;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;6051:23:116;;;;;;;;;:33;;6078:6;;6051:19;:33;;6078:6;;6051:33;:::i;:::-;;;;-1:-1:-1;;6094:21:116;;;;:12;:21;;;;;:31;;6119:6;;6094:21;:31;;6119:6;;6094:31;:::i;:::-;;;;-1:-1:-1;;6184:59:116;;;1733:25:234;;;1789:2;1774:18;;1767:34;;;-1:-1:-1;;;;;6184:59:116;;;6219:1;;6199:10;;6184:59;;1706:18:234;6184:59:116;;;;;;;5934:316;;;:::o;21757:262:114:-;21850:4;21885:127;21928:16;871:1:124;21885:25:114;:127::i;32876:391:112:-;33045:7;33068:15;;;;;;;;:::i;:::-;33064:197;;;-1:-1:-1;33106:7:112;33099:14;;33064:197;33217:33;:7;33233:16;33217:15;:33::i;:::-;33210:40;;;;5543:150;5621:23;5667:19;193:4:122;5667:14:112;:19::i;19540:3921:117:-;19736:19;19769:26;19809;20097:239;20144:25;:23;:25::i;:::-;20183:12;:25;-1:-1:-1;;;20183:25:117;;-1:-1:-1;;;;;20183:25:117;20222:11;20247:12;20273:16;20303:23;20097:33;:239::i;:::-;20076:260;-1:-1:-1;20665:11:117;20620:42;20076:260;20645:16;20620:24;:42::i;:::-;:56;20616:127;;;20692:40;:38;:40::i;:::-;20905:16;20931:26;20967:17;20987:184;21034:25;:23;:25::i;:::-;21073:12;:25;-1:-1:-1;;;21073:25:117;;-1:-1:-1;;;;;21073:25:117;21112:23;21149:12;20987:33;:184::i;:::-;20967:204;;21371:179;21409:11;193:4:122;21501:9:117;21524:16;21371:24;:179::i;:::-;-1:-1:-1;21334:216:117;;-1:-1:-1;21334:216:117;;-1:-1:-1;22223:29:117;;-1:-1:-1;21334:216:117;;22223:29;:::i;:::-;22201:51;;;;:::i;:::-;;-1:-1:-1;22841:542:117;23366:16;22841:505;22911:11;23135:39;23156:18;22201:51;23135:39;:::i;:::-;23192:20;23230:42;:16;23192:20;23230;:42::i;:::-;23290:16;23324:8;22841:52;:505::i;:::-;:524;;:542::i;:::-;22827:556;-1:-1:-1;23435:18:117;;-1:-1:-1;;;19540:3921:117;;;;;;;:::o;34300:393:112:-;34469:7;34492:15;;;;;;;;:::i;:::-;34488:199;;;-1:-1:-1;34530:7:112;34523:14;;34488:199;34643:33;:7;34659:16;34643:15;:33::i;14003:3309:117:-;14347:12;:26;-1:-1:-1;;;;;14347:26:117;14387:35;;;14383:106;;;14438:40;:38;:40::i;:::-;15033:28;;14522:36;;;;;15078:21;;14938:137;;14522:36;;15033:28;;14938:46;:137::i;:::-;:161;14921:254;;;15124:40;:38;:40::i;:::-;15410:30;;15289:311;;:286;;-1:-1:-1;;;15410:30:117;;-1:-1:-1;;;;;15410:30:117;15458:19;193:4:122;15458:13:117;:19;:::i;:::-;15310:37;;-1:-1:-1;;;15310:37:117;;-1:-1:-1;;;;;15310:37:117;;;15528:11;15557:4;15289:103;:286::i;:::-;:309;:311::i;:::-;15249:37;:351;;-1:-1:-1;;;;;15249:351:117;;;-1:-1:-1;;;15249:351:117;;;;;;;;;15923:25;:13;:23;:25::i;:::-;15894:12;:54;;-1:-1:-1;;;;;;15894:54:117;-1:-1:-1;;;;;15894:54:117;;;;;;;;;;15987:23;:11;:21;:23::i;:::-;15958:12;:52;;:25;;:52;;;;-1:-1:-1;;;15958:52:117;;-1:-1:-1;;;;;15958:52:117;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;15958:52:117;;;;;-1:-1:-1;;;;;15958:52:117;;;;;;16054:23;:11;:21;:23::i;:::-;16020:30;:57;;:30;;:57;;;;-1:-1:-1;;;16020:57:117;;-1:-1:-1;;;;;16020:57:117;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;16020:57:117;;;;;-1:-1:-1;;;;;16020:57:117;;;;;;16233:21;16257:30;16273:13;16257:15;:30::i;:::-;16233:54;;16297:110;16330:14;16375:22;:11;:20;:22::i;:::-;16358:39;;:14;:39;:::i;:::-;16297:19;:110::i;:::-;16824:28;16835:16;16824:10;:28::i;:::-;16819:100;;16868:40;:38;:40::i;:::-;17152:12;17167:43;17193:16;17167:25;:43::i;:::-;17152:58;;17225:7;17220:86;;17255:40;;-1:-1:-1;;;17255:40:117;;;;;;;;;;;17220:86;14174:3138;;;14003:3309;;;;:::o;1198:469:119:-;1309:10;-1:-1:-1;;;;;1401:10:119;:89;1384:179;;;1522:30;;-1:-1:-1;;;1522:30:119;;;;;;;;;;;1384:179;-1:-1:-1;1624:4:119;1620:18;;;;1617:34;;1198:469::o;33600:405:112:-;33776:7;33799:15;;;;;;;;:::i;:::-;33795:204;;;33910:33;:7;33926:16;33910:15;:33::i;33795:204::-;-1:-1:-1;33981:7:112;33974:14;;1610:118:122;1672:7;1699:21;1710:1;1713;193:4;1699:10;:21::i;6050:433:123:-;6185:30;6227:12;6285:103;6334:14;6362:16;6285:35;:103::i;:::-;6249:139;;-1:-1:-1;6249:139:123;-1:-1:-1;6249:139:123;6398:79;;6426:40;:38;:40::i;3330:531::-;3530:17;3736:118;3841:12;3736:87;:23;3784;3809:13;3736:47;:87::i;:::-;:104;;:118::i;2284:748:122:-;2398:9;2663:1;-1:-1:-1;;2646:19:122;2643:1;2640:26;2637:1;2633:34;2626:42;2613:11;2609:60;2582:146;;2712:1;2709;2702:12;2582:146;-1:-1:-1;2979:9:122;;2926:27;;;2923:34;;2975:27;;;2902:114;;2284:748::o;2054:1483:135:-;2176:7;;;-1:-1:-1;;2289:10:135;-1:-1:-1;;;;;2281:26:135;;2277:162;;-1:-1:-1;2332:21:135;2277:162;;;2393:35;;-1:-1:-1;;;2393:35:135;;2422:4;2393:35;;;6404:51:234;2393:10:135;-1:-1:-1;;;;;2393:20:135;;;;6377:18:234;;2393:35:135;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2384:44;;2277:162;2595:4;2580:12;-1:-1:-1;;2645:10:135;-1:-1:-1;;;;;2637:26:135;;2633:365;;2695:11;2683:9;:23;2679:97;;;2733:28;;-1:-1:-1;;;2733:28:135;;;;;;;;;;;2679:97;2798:23;2810:11;2798:9;:23;:::i;:::-;2789:32;;2633:365;;;2862:125;;-1:-1:-1;;;2862:125:135;;2903:10;2862:125;;;6895:34:234;2939:4:135;6945:18:234;;;6938:43;6997:18;;;6990:34;;;2862:10:135;-1:-1:-1;;;;;2862:23:135;;;;6830:18:234;;2862:125:135;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2852:135;;2633:365;3012:7;3007:74;;3042:28;;-1:-1:-1;;;3042:28:135;;;;;;;;;;;3007:74;3216:11;;3231:1;3216:16;3212:319;;3262:44;:11;3282:23;3262:19;:44::i;:::-;3248:11;:58;;;;-1:-1:-1;3341:6:135;-1:-1:-1;3320:28:135;;-1:-1:-1;;3320:28:135;3212:319;3422:11;;3379:17;;3399:43;;:11;;3435:6;3399:22;:43::i;:::-;3379:63;;3471:9;3456:11;;:24;;;;;;;:::i;:::-;;;;-1:-1:-1;3502:9:135;;-1:-1:-1;3513:6:135;;-1:-1:-1;3494:26:135;;-1:-1:-1;;;3494:26:135;2054:1483;;;;;;;:::o;3655:1226::-;3834:18;3855:28;3870:12;3855:14;:28::i;:::-;3834:49;;4019:11;;4034:1;4019:16;4015:221;;4065:43;:10;4084:23;4065:18;:43::i;:::-;4051:11;:57;4015:221;;;4139:17;4159:28;4176:10;4159:16;:28::i;:::-;4139:48;;4216:9;4201:11;;:24;;;;;;;:::i;:::-;;;;-1:-1:-1;;;4015:221:135;4392:4;4377:12;-1:-1:-1;;4442:10:135;-1:-1:-1;;;;;4434:26:135;;4430:362;;4492:10;4480:9;:22;4476:96;;;4529:28;;-1:-1:-1;;;4529:28:135;;;;;;;;;;;4476:96;4594:22;4606:10;4594:9;:22;:::i;:::-;4585:31;;4430:362;;;4657:124;;-1:-1:-1;;;4657:124:135;;4698:10;4657:124;;;6895:34:234;4734:4:135;6945:18:234;;;6938:43;6997:18;;;6990:34;;;4657:10:135;-1:-1:-1;;;;;4657:23:135;;;;6830:18:234;;4657:124:135;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;4647:134;;4430:362;4806:7;4801:74;;4836:28;;-1:-1:-1;;;4836:28:135;;;;;;;;;;;4801:74;3771:1110;;;3655:1226;;;:::o;890:196:125:-;943:9;-1:-1:-1;;;;;968:21:125;;964:92;;;1012:33;;-1:-1:-1;;;1012:33:125;;;;;;;;;;;21791:2511:112;22150:32;;21897:26;;;;22112:80;;:16;;-1:-1:-1;;;22150:32:112;;-1:-1:-1;;;;;22150:32:112;22112:24;:80::i;:::-;22223:31;;;;;-1:-1:-1;;;;;22223:31:112;;-1:-1:-1;22091:101:112;-1:-1:-1;22397:39:112;;;22393:1903;;;22602:22;22627:39;22648:18;22627;:39;:::i;:::-;22602:64;-1:-1:-1;22939:84:112;:55;22602:64;22977:16;22939:37;:55::i;:84::-;22903:32;:120;;:32;;:120;;;;-1:-1:-1;;;22903:120:112;;-1:-1:-1;;;;;22903:120:112;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;22903:120:112;;;;;-1:-1:-1;;;;;22903:120:112;;;;;;23322:28;23353:70;23393:16;23353:14;:22;;:70;;;;:::i;:::-;23322:101;-1:-1:-1;23437:36:112;23476:80;23322:101;23522:20;23476:28;:80::i;:::-;23437:119;;23596:28;23570:22;;:54;;;;;;;:::i;:::-;;;;-1:-1:-1;23901:52:112;;-1:-1:-1;23925:28:112;23901:52;;:::i;:::-;;;23997:32;:20;:30;:32::i;:::-;23967:12;:62;;:26;;:62;;;;-1:-1:-1;;;;;23967:62:112;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;23967:62:112;;;;;-1:-1:-1;;;;;23967:62:112;;;;;;24075:31;:20;:29;:31::i;:::-;24043:28;:63;;:28;;:63;;;;;;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;24043:63:112;;;;;;;-1:-1:-1;;;;;24043:63:112;;;;;;24267:18;24246:39;;22438:1858;;;22393:1903;21791:2511;;;:::o;12621:2452:113:-;12847:21;;13253:37;:11;13273:16;13253:19;:37::i;:::-;13237:53;-1:-1:-1;13300:15:113;13318:31;13237:53;13340:8;13318:21;:31::i;:::-;13300:49;-1:-1:-1;13375:33:113;13300:49;13391:16;13375:15;:33::i;:::-;13359:49;;13835:7;13831:557;;;13875:23;13885:13;13875:7;:23;:::i;:::-;13858:40;;;;:::i;:::-;;;13831:557;;;14354:23;14364:13;14354:7;:23;:::i;:::-;14337:40;;;;:::i;:::-;;;13831:557;14611:20;14587:21;:44;14583:484;;;14726:115;:13;14768:21;14807:20;14726:24;:115::i;:::-;14710:131;-1:-1:-1;14941:115:113;:13;14983:21;15022:20;14941:24;:115::i;:::-;14925:131;;14583:484;12893:2180;12621:2452;;;;;;;;:::o;17801:1127:117:-;18103:30;;-1:-1:-1;;;18103:30:117;;-1:-1:-1;;;;;18103:30:117;18183:300;:275;18103:30;18340:19;193:4:122;18340:13:117;:19;:::i;:::-;18204:37;;-1:-1:-1;;;18204:37:117;;-1:-1:-1;;;;;18204:37:117;;;18410:11;18439:5;18183:103;:275::i;:300::-;18143:37;:340;;-1:-1:-1;;;;;18143:340:117;;;-1:-1:-1;;;18143:340:117;;;;;;;;;18626:23;:11;:21;:23::i;:::-;18593:56;;:18;:56;:::i;:::-;18548:30;:101;;-1:-1:-1;;;;;18548:101:117;;;-1:-1:-1;;;18548:101:117;;;;;;;;;18747:31;:19;:29;:31::i;:::-;18717:12;:61;;:26;;:61;;;;-1:-1:-1;;;;;18717:61:117;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;18717:61:117;;;;;-1:-1:-1;;;;;18717:61:117;;;;;;18820:32;:21;:30;:32::i;:::-;18788:28;:64;;:28;;:64;;;;;;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;18788:64:117;;;;;;;-1:-1:-1;;;;;18788:64:117;;;;;;18891:30;:18;:28;:30::i;:::-;18862:12;:59;;:25;;:59;;;;-1:-1:-1;;;18862:59:117;;-1:-1:-1;;;;;18862:59:117;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;18862:59:117;;;;;-1:-1:-1;;;;;18862:59:117;;;;;;18013:915;17801:1127;;;;;:::o;14526:1674:123:-;14787:21;;15253:119;15355:16;15253:80;:11;15289:21;15312:20;15253:35;:80::i;:119::-;15232:140;-1:-1:-1;15623:50:123;:11;15646:8;15656:16;15623:22;:50::i;:::-;15609:64;;;;:::i;:::-;;;15989:12;15976:10;:25;15972:191;;;16126:12;16113:10;:25;16097:41;;15972:191;16173:20;14526:1674;;;;;;;;:::o;527:196:125:-;580:9;-1:-1:-1;;;;;605:21:125;;601:92;;;649:33;;-1:-1:-1;;;649:33:125;;;;;;;;;;;14516:2940:115;14900:12;:26;-1:-1:-1;;;;;14900:26:115;14953:35;;;;:110;;-1:-1:-1;15042:21:115;15004:35;15020:19;15004:13;:35;:::i;:::-;:59;14953:110;14936:203;;;15088:40;:38;:40::i;:::-;15701:28;;15172:36;;;;;15701:28;;15739:40;15758:21;15701:28;15739:40;:::i;:::-;;;15839:21;15806:30;:19;:28;:30::i;:::-;:54;:230;;;;;16015:21;15876:124;15940:13;15971:15;15876:46;:124::i;:::-;:160;15806:230;15789:323;;;16061:40;:38;:40::i;:::-;16199:29;;-1:-1:-1;;;16199:29:115;;-1:-1:-1;;;;;16199:29:115;16277:297;:272;16199:29;16431:19;193:4:122;16431:13:115;:19;:::i;:::-;16298:36;;-1:-1:-1;;;;;16298:36:115;;16277:272;16501:11;16530:5;16277:102;:272::i;:297::-;16238:36;:336;;-1:-1:-1;;;;;;16238:336:115;-1:-1:-1;;;;;16238:336:115;;;;;;;;;;16636:31;16656:11;16636:31;;:::i;:::-;;;16709:28;:16;:26;:28::i;:::-;16677:29;:60;;-1:-1:-1;;;;;16677:60:115;;;-1:-1:-1;;;16677:60:115;;;;;;;;;17288:25;:13;:23;:25::i;:::-;17259:12;:54;;-1:-1:-1;;;;;;17259:54:115;-1:-1:-1;;;;;17259:54:115;;;;;;;;;;17354:26;:15;:24;:26::i;:::-;17323:28;:57;;-1:-1:-1;;;;;;17323:57:115;-1:-1:-1;;;;;17323:57:115;;;;;;;;;;17419:30;:18;:28;:30::i;:::-;17390:12;:59;;:25;;:59;;;;-1:-1:-1;;;17390:59:115;;-1:-1:-1;;;;;17390:59:115;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;17390:59:115;;;;;-1:-1:-1;;;;;17390:59:115;;;;;;14727:2729;;;14516:2940;;;;;:::o;18747:551:112:-;19051:12;19066:43;19083:14;:7;19051:12;19083:11;:14::i;:::-;19067:13;:6;19078:1;19067:10;:13::i;:::-;:30;;;;:::i;:::-;19066:41;:43::i;:::-;19051:58;;19131:1;19123:5;:9;;;19119:173;;;19148:25;:43;;19185:5;;19148:25;;;:43;;19185:5;;-1:-1:-1;;;;;19148:43:112;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;19148:43:112;;;;;-1:-1:-1;;;;;19148:43:112;;;;;;18816:482;18747:551;;:::o;19119:173::-;19220:1;19212:5;:9;;;19208:84;;;19274:6;19275:5;19274:6;:::i;:::-;19237:25;:44;;:25;;:44;;;;-1:-1:-1;;;;;19237:44:112;;:::i;19208:84::-;18816:482;18747:551;;:::o;22583:1810:114:-;22929:13;:29;-1:-1:-1;;;22708:4:114;22856:70;;;:12;:70;;;;22708:4;;;;22856:102;;-1:-1:-1;;;;;22929:29:114;;22856:102;:::i;:::-;22818:140;;22972:27;23003:1;22972:32;22968:74;;23027:4;23020:11;;;;;22968:74;23128:12;23143:45;23171:16;23143:27;:45::i;:::-;23128:60;;23202:4;23210:1;23202:9;23198:51;;23234:4;23227:11;;;;;;23198:51;23429:47;23490:12;23515:149;23567:4;23589:27;23634:16;23515:34;:149::i;:::-;23415:249;;;;23679:7;23674:51;;23709:5;23702:12;;;;;;;;23674:51;23850:32;23884:21;23909:73;23959:6;23967:14;23909:49;:73::i;:::-;23849:133;;;;24069:47;24091:24;:13;:22;:24::i;:::-;24090:25;;;:::i;:::-;24069:20;:47::i;:::-;24059:57;;24131:7;24126:51;;24161:5;24154:12;;;;;;;;;;24126:51;24267:36;:24;:34;:36::i;:::-;24234:13;:69;;:29;;:69;;;;-1:-1:-1;;;;;24234:69:114;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;24234:69:114;;;;;-1:-1:-1;;;;;24234:69:114;;;;;;24339:25;:13;:23;:25::i;:::-;24313:13;:51;;:22;;:51;;;;-1:-1:-1;;;24313:51:114;;-1:-1:-1;;;;;24313:51:114;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;24313:51:114;;;;;-1:-1:-1;;;;;24313:51:114;;;;;;24382:4;24375:11;;;;;;;;22583:1810;;;;:::o;25478:1358:112:-;25577:7;25586:4;25729:26;25757:12;25773:117;25836:40;25859:16;25836:22;:40::i;:::-;25773:45;:117::i;:::-;25728:162;;;;25905:7;25900:56;;-1:-1:-1;25936:1:112;;;;-1:-1:-1;25478:1358:112;-1:-1:-1;;;25478:1358:112:o;25900:56::-;26114:20;26156:1;26137:16;:20;:95;;26231:1;26137:95;;;26172:44;:18;26199:16;26172:26;:44::i;:::-;26378:13;:29;26315:12;:48;;;;26242:21;26266:34;;;;;26114:118;;-1:-1:-1;26242:21:112;-1:-1:-1;;;;;26378:29:112;;;;26266:97;;26315:48;26266:97;:::i;:::-;:141;;;;:::i;:::-;26242:165;;26544:13;26561:1;26544:18;26540:66;;-1:-1:-1;26586:1:112;;;;-1:-1:-1;25478:1358:112;-1:-1:-1;;;;;25478:1358:112:o;26540:66::-;26733:20;26756:35;:12;26777:13;26756:20;:35::i;:::-;26733:58;26824:4;;-1:-1:-1;25478:1358:112;-1:-1:-1;;;;;;;25478:1358:112:o;11067:450::-;11166:21;11199:24;193:4:122;11226:19:112;:17;:19::i;:::-;:25;;;;:::i;:::-;11199:52;;11293:16;11277:13;:32;:95;;11371:1;11277:95;;;11324:32;11340:16;11324:13;:32;:::i;:::-;11261:111;-1:-1:-1;11464:46:112;11486:23;193:4:122;11486:17:112;:23;:::i;:::-;11464:13;;:21;:46::i;7433:1173:124:-;7540:7;7549:4;7926:19;7970:20;7992:12;8008:65;8052:7;8008:26;:65::i;:::-;7969:104;;;;8092:7;8087:64;;-1:-1:-1;8127:1:124;;;;-1:-1:-1;7433:1173:124;-1:-1:-1;;;;7433:1173:124:o;8087:64::-;8327:39;:7;:28;;;:37;:39::i;:::-;8278:30;8300:7;8278:21;:30::i;:::-;8246:13;8195:32;:7;:21;;;:30;:32::i;:::-;:64;;;;:::i;:::-;:113;;;;:::i;:::-;:171;;;;:::i;:::-;8164:202;;7955:422;;8508:1;8493:12;:16;8489:64;;;-1:-1:-1;8533:1:124;;;;-1:-1:-1;7433:1173:124;-1:-1:-1;;7433:1173:124:o;8489:64::-;8579:12;8594:4;;-1:-1:-1;7433:1173:124;-1:-1:-1;;7433:1173:124:o;25081:1355:114:-;25297:12;:26;25359:28;;25171:4;;-1:-1:-1;;;;;25297:26:114;;;;25359:28;;;-1:-1:-1;;;25421:25:114;;;25171:4;;;;25621:222;25297:26;25359:28;25421:25;25771:21;25810:19;25621:35;:222::i;:::-;25456:387;;;;;;;;25858:7;25853:51;;-1:-1:-1;25888:5:114;;25081:1355;-1:-1:-1;;;;;;;;25081:1355:114:o;25853:51::-;26026:14;26002:20;:38;25998:130;;26085:32;:20;:30;:32::i;:::-;26056:12;:61;;-1:-1:-1;;;;;;26056:61:114;-1:-1:-1;;;;;26056:61:114;;;;;;;;;;25998:130;26167:16;26141:22;:42;26137:137;;26230:33;:22;:31;:33::i;:::-;26199:28;:64;;-1:-1:-1;;;;;;26199:64:114;-1:-1:-1;;;;;26199:64:114;;;;;;;;;;26137:137;26310:13;26287:19;:36;26283:126;;26367:31;:19;:29;:31::i;:::-;26339:12;:59;;-1:-1:-1;;;;;26339:59:114;;;-1:-1:-1;;;26339:59:114;;;;;;;;;26283:126;-1:-1:-1;26425:4:114;;25081:1355;-1:-1:-1;;;;;;;;25081:1355:114:o;7849:460:135:-;7941:7;;-1:-1:-1;;8056:10:135;-1:-1:-1;;;;;8048:26:135;;8044:162;;-1:-1:-1;8099:21:135;8044:162;;;8160:35;;-1:-1:-1;;;8160:35:135;;8189:4;8160:35;;;6404:51:234;8160:10:135;-1:-1:-1;;;;;8160:20:135;;;;6377:18:234;;8160:35:135;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;8151:44;;8044:162;8235:11;;8250:1;8235:16;:67;;8301:1;8235:67;;;8286:11;;8254:44;;:12;;8278:6;;8254:23;:44::i;23799:866:123:-;24060:7;24176:482;24243:23;24284:13;24315:9;24551:18;24557:12;193:4:122;24551:18:123;:::i;:::-;24587:16;24621:23;24176:49;:482::i;3190:114:122:-;3250:7;3277:19;3286:1;3289;193:4;3277:8;:19::i;269:116:121:-;343:35;;-1:-1:-1;;;343:35:121;;;;;;;;;;;29824:2727:112;30057:16;;;;30944:144;31045:24;31071:16;30944:78;31010:11;30944:46;30973:16;30979:10;193:4:122;30973:16:112;:::i;:::-;30944:9;;:28;:46::i;:78::-;:100;:144;:100;:144::i;:::-;30933:155;-1:-1:-1;31376:34:112;30933:155;31393:16;31376;:34::i;:::-;31355:55;-1:-1:-1;31918:12:112;31933:104;31967:30;31973:24;193:4:122;31967:30:112;:::i;:::-;31933:11;;32011:16;31933:20;:104::i;:::-;31918:119;-1:-1:-1;32057:20:112;31918:119;32068:8;32057:10;:20::i;:::-;32047:30;-1:-1:-1;32511:33:112;32047:30;32527:16;32511:15;:33::i;:::-;32478:66;;:18;:66;:::i;:::-;32445:99;;30197:2354;29824:2727;;;;;;;;;:::o;15264:104:122:-;15322:7;15352:1;15348;:5;:13;;15360:1;15348:13;;;-1:-1:-1;15356:1:122;;15264:104;-1:-1:-1;15264:104:122:o;11376:1660:123:-;11635:21;;12098:115;12196:16;12098:78;:11;12132:21;12155:20;12098:33;:78::i;:::-;:97;;:115::i;:::-;12077:136;-1:-1:-1;12461:48:123;:11;12482:8;12492:16;12461:20;:48::i;12712:2102:122:-;12906:15;13006:12;13022:1;13006:17;13002:63;;-1:-1:-1;13046:8:122;13039:15;;13002:63;13323:9;13319:1489;;;13420:154;13529:27;13544:12;13529;:27;:::i;:::-;13470:28;:12;13491:6;13470:20;:28::i;:::-;13421:30;:12;13442:8;13421:20;:30::i;:::-;:77;;;;:::i;13420:154::-;13410:164;-1:-1:-1;13921:18:122;13942:20;:6;13953:8;13942:10;:20::i;:::-;13921:41;-1:-1:-1;13976:18:122;13997:20;:6;14008:8;13997:10;:20::i;:::-;13976:41;;14045:10;14035:7;:20;14031:164;;;14085:10;14075:20;;14031:164;;;14130:10;14120:7;:20;14116:79;;;14170:10;14160:20;;14116:79;13334:871;;13319:1489;;;14504:12;14488;:28;14484:75;;-1:-1:-1;14543:1:122;14536:8;;14484:75;14645:152;14752:27;14767:12;14752;:27;:::i;:::-;14695:26;:12;14714:6;14695:18;:26::i;:::-;14646:30;:12;14667:8;14646:20;:30::i;:::-;:75;;;;:::i;12625:675:112:-;12710:6;13115:178;:12;:167;13145:123;13188:27;13237:13;13145:21;:123::i;:::-;13115:167;;;;;;;;;;;;:176;:178::i;:::-;12981:119;:12;:108;13011:64;13033:26;13061:13;13011:21;:64::i;12981:119::-;:312;;;;:::i;18200:376::-;18269:4;18524:45;:21;18552:16;18524:27;:45::i;:::-;18480:25;;:89;;;-1:-1:-1;;;;;18480:25:112;:89;:::i;:::-;18411:12;:26;18403:61;;-1:-1:-1;;;;;18411:26:112;18447:16;18403:43;:61::i;:::-;:166;;;18200:376;-1:-1:-1;;18200:376:112:o;7132:398:123:-;7271:7;7280:4;7296:29;7368:16;7328:25;:14;:23;:25::i;:::-;:56;;;;:::i;:::-;7296:88;;7423:1;7398:22;:26;7394:74;;;7448:1;7451:5;7440:17;;;;;;;7394:74;7493:22;7518:4;;-1:-1:-1;7132:398:123;-1:-1:-1;;;7132:398:123:o;3811:844:122:-;3869:7;3935:1;3940;3935:6;3931:47;;-1:-1:-1;193:4:122;3957:10;;3931:47;4031:1;4036;4031:6;4027:45;;-1:-1:-1;4060:1:122;4053:8;;4027:45;4210:15;4228:12;:1;:10;:12::i;:::-;4210:30;;4402:10;4415:16;4418:12;:1;:10;:12::i;:::-;4415:2;:16::i;:::-;4402:29;-1:-1:-1;4509:18:122;;;4546:19;193:4;4509:18;4546:19;:::i;:::-;;;4638:9;4642:4;4638:3;:9::i;:::-;4623:25;3811:844;-1:-1:-1;;;;;;3811:844:122:o;8469:425:135:-;8562:7;;-1:-1:-1;;8677:10:135;-1:-1:-1;;;;;8669:26:135;;8665:162;;-1:-1:-1;8720:21:135;8665:162;;;8781:35;;-1:-1:-1;;;8781:35:135;;8810:4;8781:35;;;6404:51:234;8781:10:135;-1:-1:-1;;;;;8781:20:135;;;;6377:18:234;;8781:35:135;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;8772:44;;8665:162;8867:11;;8844:43;;:11;;8880:6;8844:22;:43::i;3462:114:122:-;3522:7;3549:19;3558:1;193:4;3566:1;3549:8;:19::i;1252:208:125:-;1304:8;-1:-1:-1;;;;;1328:29:125;;1324:99;;;1380:32;;-1:-1:-1;;;1380:32:125;;;;;;;;;;;1624:214;1675:8;-1:-1:-1;;;;;;1699:20:125;;;:44;;-1:-1:-1;;;;;;1723:20:125;;1699:44;1695:114;;;1766:32;;-1:-1:-1;;;1766:32:125;;;;;;;;;;;15815:101:122;15871:6;15900:1;15896;:5;:13;;15908:1;15896:13;;24582:558:112;24803:25;;24682:18;;;;24795:80;;-1:-1:-1;;;;;24803:25:112;24849:16;24795:40;:80::i;:::-;24772:103;-1:-1:-1;24918:36:112;24933:21;24772:103;24918:36;:::i;:::-;24889:12;:26;-1:-1:-1;;;;;24889:26:112;:65;24885:222;;;24999:12;:26;25075:21;;24999:57;;25044:12;;-1:-1:-1;;;;;24999:26:112;:57;:::i;:::-;:97;;;;:::i;24885:222::-;25116:17;24582:558;;;:::o;13591:1887::-;13791:47;;:::i;:::-;13840:12;14023:63;14089:70;14129:16;14089:22;:70::i;:::-;14023:136;;14169:28;14241:74;14287:18;14241:32;:74::i;:::-;14207:108;-1:-1:-1;14207:108:112;-1:-1:-1;14207:108:112;14325:61;;-1:-1:-1;14369:5:112;;-1:-1:-1;14353:22:112;;-1:-1:-1;14353:22:112;14325:61;14533:20;14707:152;:124;14786:18;:44;;;14707:18;:53;;;:78;;:124;;;;:::i;:::-;:150;:152::i;:::-;14556:136;:112;14624:18;:43;;;14556:18;:48;;;:67;;:112;;;;:::i;:136::-;:303;;;;:::i;:::-;14878:569;;;;;;;;;;;;;;;;;;;-1:-1:-1;15055:34:112;;:12;:34;;;;14878:569;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;15264:32:112;;14878:569;;;;15335:34;;;14878:569;;;;15405:31;;;;14878:569;;;;-1:-1:-1;14878:569:112;;15467:4;;-1:-1:-1;13591:1887:112;-1:-1:-1;13591:1887:112:o;21766:3468:124:-;21917:7;21926;22232:38;22272:12;22288:173;22369:7;:29;;;22416:7;:31;;;22288:63;:173::i;:::-;22231:230;;;;22476:7;22471:52;;22507:1;22510;22499:13;;;;;;;;22471:52;22532:29;22606:109;22654:7;22675:30;22606:34;:109::i;:::-;22571:144;-1:-1:-1;22571:144:124;-1:-1:-1;22729:8:124;;;:38;;-1:-1:-1;22741:26:124;;22729:38;22725:82;;;22791:1;22794;22783:13;;;;;;;;;22725:82;23095:32;23130:131;23201:7;23226:21;23130:53;:131::i;:::-;23095:166;;23398:24;23426:1;23398:29;23394:743;;23451:1;23454;23443:13;;;;;;;;;;23394:743;23732:7;:35;;;23704:24;:63;23687:450;;23800:24;-1:-1:-1;23826:21:124;-1:-1:-1;23792:56:124;;-1:-1:-1;;23792:56:124;23687:450;-1:-1:-1;24091:35:124;;;;24396:21;24420:180;24476:7;24497:30;24541:21;24576:14;24420:42;:180::i;:::-;24396:204;;24614:13;24631:1;24614:18;24610:62;;24656:1;24659;24648:13;;;;;;;;;;;24610:62;25006:21;24989:13;:38;24985:82;;25051:1;25054;25043:13;;;;;;;;;;;24985:82;25187:24;;;;-1:-1:-1;21766:3468:124;-1:-1:-1;;;;;;21766:3468:124:o;8934:9443::-;9042:6;9050:4;9852:23;10007:130;:102;10075:7;:33;;;10007:7;:42;;;:67;;:102;;;;:::i;:130::-;9878:114;:90;9935:7;:32;;;9878:7;:37;;;:56;;:90;;;;:::i;:114::-;:259;;;;:::i;:::-;9852:285;;10148:30;10180:12;10196:157;10277:7;:21;;;10316:7;:23;;;10196:63;:157::i;:::-;10147:206;;;;10368:7;10363:160;;-1:-1:-1;10503:1:124;;;;-1:-1:-1;8934:9443:124;-1:-1:-1;;;;8934:9443:124:o;10363:160::-;10772:1;10753:16;:20;10749:7595;;;10789:25;10825:16;10789:53;;11030:21;11092:401;11173:7;:21;;;11216:7;:23;;;11261:7;:20;;;11303:7;:28;;;11359:7;:19;;;193:4:122;11353:25:124;;;;:::i;:::-;11400:7;:23;;;11445:7;:30;;;11092:59;:401::i;:::-;11065:428;-1:-1:-1;11065:428:124;-1:-1:-1;11065:428:124;11507:176;;-1:-1:-1;11659:1:124;;;;-1:-1:-1;8934:9443:124;-1:-1:-1;;;;;;8934:9443:124:o;11507:176::-;11860:17;11843:13;:34;11839:2891;;12151:21;12217:389;12317:22;12365:7;:20;;;12411:17;12460:7;:19;;;193:4:122;12454:25:124;;;;:::i;:::-;12505:7;:23;;;12554:7;:30;;;12217:74;:389::i;:::-;12190:416;-1:-1:-1;12190:416:124;-1:-1:-1;12912:8:124;;:84;;;;;12964:7;:32;;;12944:17;:52;12912:84;12887:335;;;-1:-1:-1;13045:1:124;;13048:4;;-1:-1:-1;8934:9443:124;-1:-1:-1;;;;;;;8934:9443:124:o;12887:335::-;13155:7;13150:72;;-1:-1:-1;13194:1:124;;;;-1:-1:-1;8934:9443:124;-1:-1:-1;;;;;;;8934:9443:124:o;13150:72::-;13249:24;:13;:22;:24::i;:::-;13248:25;;;:::i;:::-;13240:40;13275:4;;-1:-1:-1;8934:9443:124;-1:-1:-1;;;;;;;;8934:9443:124:o;11839:2891::-;13965:1;13938:7;:23;;;:28;13934:782;;14024:95;14050:7;:28;;;14025:22;:53;;;;:::i;14024:95::-;14023:96;;;:::i;13934:782::-;14576:28;;;;14552:21;;14551:94;;14552:52;;;:::i;10749:7595::-;14855:1;14836:16;:20;14832:3512;;;14872:25;14908:17;14909:16;14908:17;:::i;:::-;14872:54;;15043:21;15105:307;15186:22;15230:7;:20;;;15278:7;:19;;;193:4:122;15272:25:124;;;;:::i;:::-;15319:7;:23;;;15364:7;:30;;;15105:59;:307::i;:::-;15078:334;-1:-1:-1;15078:334:124;-1:-1:-1;15078:334:124;15426:64;;-1:-1:-1;15466:1:124;;;;-1:-1:-1;8934:9443:124;-1:-1:-1;;;;;;8934:9443:124:o;15426:64::-;15667:17;15650:13;:34;15646:2688;;15959:21;16025:387;16123:22;16171:7;:20;;;16217:17;16266:7;:19;;;193:4:122;16260:25:124;;;;:::i;:::-;16311:7;:23;;;16360:7;:30;;;16025:72;:387::i;:::-;15998:414;-1:-1:-1;15998:414:124;-1:-1:-1;16718:8:124;;:84;;;;;16770:7;:32;;;16750:17;:52;16718:84;16693:335;;;-1:-1:-1;16851:1:124;;16854:4;;-1:-1:-1;8934:9443:124;-1:-1:-1;;;;;;;8934:9443:124:o;16693:335::-;16961:7;16956:72;;-1:-1:-1;17000:1:124;;;;-1:-1:-1;8934:9443:124;-1:-1:-1;;;;;;;8934:9443:124:o;16956:72::-;17054:24;:13;:22;:24::i;15646:2688::-;17412:23;17482:335;17571:22;17619:7;:20;;;17671:7;:19;;;193:4:122;17665:25:124;;;;:::i;:::-;17716:7;:23;;;17765:7;:30;;;17482:63;:335::i;:::-;17453:364;-1:-1:-1;17453:364:124;-1:-1:-1;17453:364:124;17835:72;;-1:-1:-1;17879:1:124;;;;-1:-1:-1;8934:9443:124;-1:-1:-1;;;;;;;8934:9443:124:o;17835:72::-;18098:177;18141:122;18214:7;:23;;;18162:13;18142:17;:33;;;;:::i;18141:122::-;18099:164;;:15;:164;:::i;14832:3512::-;-1:-1:-1;18362:1:124;;18365:4;;-1:-1:-1;8934:9443:124;-1:-1:-1;;;;8934:9443:124:o;18624:1167::-;18727:6;19585:199;19603:156;19664:7;:32;;;193:4:122;19658:38:124;;;;:::i;:::-;19718:23;;;;19603:24;;;;;:156;:33;:156::i;19585:199::-;19367:203;19385:160;19449:7;:33;;;193:4:122;19443:39:124;;;;:::i;:::-;19504:23;;;;19385:25;;;;;:160;:36;:160::i;2015:3557::-;2290:21;2325:22;2361:20;2395:4;2534:19;2557:1;2534:24;2530:117;;-1:-1:-1;2582:14:124;;-1:-1:-1;2598:16:124;;-1:-1:-1;2616:13:124;;-1:-1:-1;2631:4:124;2574:62;;2530:117;2816:21;2868:19;2840:25;:14;:23;:25::i;:::-;:47;;;;:::i;:::-;2816:71;;2918:32;:21;:30;:32::i;:::-;2901:14;:49;2897:103;;;2974:1;2977;2980;2983:5;2966:23;;;;;;;;;;;2897:103;3033:14;3009:39;;3623:1;3603:16;:21;3599:497;;3736:112;:84;:13;3786:16;3805:14;3736:41;:84::i;:112::-;3718:130;;3599:497;;;3974:111;:83;4022:17;4023:16;4022:17;:::i;:::-;3974:13;;4042:14;3974:39;:83::i;:111::-;3973:112;;;:::i;:::-;3955:130;;3599:497;4798:33;4833:12;4849:143;4930:14;4962:16;4849:63;:143::i;:::-;4797:195;;;;5007:7;5002:62;;5038:1;5041;5044;5047:5;5030:23;;;;;;;;;;;;;5002:62;5073:30;5149:141;5230:13;5261:15;5149:63;:141::i;:::-;5113:177;-1:-1:-1;5113:177:124;-1:-1:-1;5113:177:124;5300:62;;5336:1;5339;5342;5345:5;5328:23;;;;;;;;;;;;;;5300:62;5386:109;:13;5424:22;5460:25;5386:24;:109::i;:::-;5371:124;-1:-1:-1;5560:4:124;;-1:-1:-1;;;;;2015:3557:124;;;;;;;;;;;:::o;9918:494:126:-;10108:14;10134:12;10176:141;10228:2;10244:1;10259:2;10275:1;10290;10305:2;10176:38;:141::i;:::-;10156:161;;-1:-1:-1;10156:161:126;-1:-1:-1;10156:161:126;10327:79;;10355:40;:38;:40::i;14987:104:122:-;15045:7;15075:1;15071;:5;:13;;15083:1;15071:13;;8508:3846;8553:8;8606:1;8601;:6;8597:80;;8634:28;;-1:-1:-1;;;8634:28:122;;;;;;;;;;;8597:80;-1:-1:-1;;;;;;9286:41:122;-1:-1:-1;9283:1:122;9279:49;9386:9;;;9366:18;9363:33;9360:1;9356:41;9350:48;9448:9;;;9436:10;9433:25;9430:1;9426:33;9420:40;9506:9;;;9498:6;9495:21;9492:1;9488:29;9482:36;9562:9;;;9556:4;9553:19;9550:1;9546:27;;;9540:34;;;9617:9;;;9612:3;9609:18;9606:1;9602:26;9596:33;9672:9;;;9664:18;;;9661:1;9657:26;;;9651:33;;;9720:9;;;9712:18;;;9706:25;9902:3;:7;;;9872:2;9902:7;9888:22;;;;;-1:-1:-1;;9868:6:122;;;9928:30;;9929:17;;;9928:28;:30::i;:::-;10733:31;10729:35;;10784:5;;10191:2;10783:13;;;10800:32;10782:50;10852:5;;10851:13;;10868:33;10850:51;10921:5;;10920:13;;10937:33;10919:51;10990:5;;10989:13;;11006:33;10988:51;11059:5;;11058:13;;11075:32;11057:50;11127:5;;11126:13;;11143:30;11125:48;10130:31;10126:35;;10181:5;;10180:13;;10197:32;10179:50;10249:5;;10248:13;;10265:32;10247:50;10317:5;;10316:13;;-1:-1:-1;;10315:50:122;10385:5;;10384:13;;-1:-1:-1;;10383:50:122;10453:5;;10452:13;;;-1:-1:-1;;10451:50:122;10519:5;;;-1:-1:-1;;10519:46:122;11514:10;11904:43;11899:48;12027:71;:91;;;;12006:112;12191:72;12186:77;12334:3;12328:9;;;-1:-1:-1;;8508:3846:122:o;4907:3302::-;4953:8;-1:-1:-1;;5130:1:122;:26;5126:40;;-1:-1:-1;5165:1:122;;4907:3302;-1:-1:-1;4907:3302:122:o;5126:40::-;5365:21;5360:1;:26;5356:87;;5411:32;;-1:-1:-1;;;5411:32:122;;;;;;;;;;;5356:87;5716:7;5710:2;5705:7;;;5704:19;;-1:-1:-1;6052:8:122;6136:2;6076:29;6065:7;;;6064:41;-1:-1:-1;;;6064:51:122;6063:75;;6164:29;6160:33;;6156:37;;;;-1:-1:-1;;6835:35:122;;6890:5;;6470:2;6889:13;;;6906:32;6888:50;6958:5;;6957:13;;-1:-1:-1;;6956:51:122;7027:5;;7026:13;;7043:34;7025:52;7097:5;;7096:13;;-1:-1:-1;;7095:53:122;7168:5;;7167:13;;7184:35;7166:53;6476:32;6409:31;6405:35;;6460:5;;6459:13;;6458:50;;;6533:5;;;-1:-1:-1;;6533:40:122;6593:5;;6592:13;;;6609:35;6591:53;6662:5;;-1:-1:-1;;;6662:50:122;7584:10;;;;-1:-1:-1;6063:75:122;;-1:-1:-1;6458:50:122;;6662;8063:129;8094:49;8065:78;;8172:3;:7;;;8064:116;8063:127;:129::i;49421:3239:124:-;49594:29;49625:12;49814:1;49789:7;:21;;;:26;49785:84;;-1:-1:-1;;49839:12:124;;;;49853:4;49831:27;;49785:84;49878:21;49911:7;:21;;;49910:22;;;:::i;:::-;49878:55;;50182:21;50240:316;50296:31;50341:7;:28;;;50389:7;:26;;;:38;;;193:4:122;50383:44:124;;;;:::i;:::-;50441:26;;:42;;;;50497:49;;;;;50240:42;:316::i;:::-;50213:343;-1:-1:-1;50213:343:124;-1:-1:-1;50570:8:124;;;:30;;-1:-1:-1;50582:18:124;;50570:30;50566:78;;;50624:1;50627:5;50616:17;;;;;;;;50566:78;51667:24;51694:34;:13;51714;51694:19;:34::i;:::-;51667:61;;193:4:122;51911:16:124;:23;51907:453;;52008:16;193:4:122;52002:22:124;51978:46;;52076:90;52123:7;:29;;;52076:21;:29;;:90;;;;:::i;:::-;52052:114;;51907:453;;;52340:1;52343:5;52332:17;;;;;;;;;51907:453;52542:7;:12;;;52518:21;:36;52514:94;;;52578:7;:12;;;52592:4;52570:27;;;;;;;;;52514:94;-1:-1:-1;52648:4:124;;-1:-1:-1;;;49421:3239:124;;;;;:::o;26095:2209::-;26275:7;26374:12;26593:274;26635:7;:29;;;26678:7;:31;;;26723:7;:28;;;26765:7;:26;;;:47;;;26827:30;:19;:28;:30::i;:::-;26826:31;;;:::i;:::-;26593:28;:274::i;:::-;26410:26;;26520:39;;;26396:471;;;;26464:42;;;26396:471;;;;;;;;;-1:-1:-1;26396:471:124;26877:167;;27032:1;27025:8;;;;;26877:167;27053:26;27121:75;27160:7;:26;;;27121:25;:75::i;:::-;27089:107;-1:-1:-1;27089:107:124;-1:-1:-1;27089:107:124;27206:167;;27361:1;27354:8;;;;;;27206:167;27707:7;:28;;;27685:18;:50;27681:89;;27758:1;27751:8;;;;;;27681:89;28019:21;28085:7;:35;;;28043:7;:27;;;:77;;;;:::i;:::-;28019:101;;28177:120;28219:18;28255:7;:28;;;28177:13;:24;;:120;;;;;:::i;:::-;28149:148;;:13;:148;:::i;29410:13695::-;29663:7;29724:21;29790:7;:35;;;29748:7;:27;;;:77;;;;:::i;:::-;30383:28;;;;30323:35;;;;29724:101;;-1:-1:-1;30299:21:124;;30323:125;;29724:101;30323:46;:125::i;:::-;30299:149;;30561:7;:21;;;30586:1;30561:26;30557:77;;30610:13;-1:-1:-1;30603:20:124;;-1:-1:-1;30603:20:124;30557:77;30992:20;;;31140:7;871:1;31185:46;;31181:123;;;871:1;31247:46;;31181:123;31318:9;31313:9510;31337:14;31333:1;:18;31313:9510;;;31526:41;:13;31544:22;31526:17;:41::i;:::-;31510:57;;31651:12;31891:288;31937:6;:28;;;31983:6;:30;;;32031:6;:27;;;32076:6;:25;;;:46;;;32141:24;:13;:22;:24::i;31891:288::-;31695:25;;31811:38;;;31677:502;;;;31752:41;;;31677:502;;;;;;;;;-1:-1:-1;31677:502:124;32193:268;;32445:1;32438:8;;;;;;;;;;;;32193:268;32521:20;32581:83;32624:7;:26;;;32581:25;:83::i;:::-;32555:109;-1:-1:-1;32555:109:124;-1:-1:-1;32555:109:124;32678:265;;32927:1;32920:8;;;;;;;;;;;;;32678:265;33047:166;33120:6;33148:12;33182:13;33047:51;:166::i;:::-;33026:255;;;33253:13;33246:20;;;;;;;;;;;;;33026:255;33530:1;33507:6;:20;;;:24;33503:4415;;;33827:25;;:39;;33892:41;;;;33959:38;;;;34023:46;;;;34101:37;;;;;33672:21;;33738:563;;33827:39;33892:41;33959:38;34095:43;;193:4:122;34095:43:124;:::i;:::-;34164:25;;:41;;;;34231:48;;;;;33738:63;:563::i;:::-;33711:590;-1:-1:-1;33711:590:124;-1:-1:-1;33711:590:124;34319:289;;34588:1;34581:8;;;;;;;;;;;;;;34319:289;34819:13;34794:6;:20;;;34786:46;34782:3122;;35100:115;35187:6;35100:61;:115::i;:::-;35003:212;;-1:-1:-1;35003:212:124;-1:-1:-1;35003:212:124;35237:200;;35413:1;35406:8;;;;;;;;;;;;;;35237:200;35849:336;35903:6;:28;;;35957:6;:30;;;36013:6;:27;;;36066:6;:25;;;:46;;;36139:24;:13;:22;:24::i;35849:336::-;35621:25;;35753:38;;;35595:590;;;;35686:41;;;35595:590;;;;;;;;;-1:-1:-1;35595:590:124;36207:200;;36383:1;36376:8;;;;;;;;;;;;;;36207:200;36552:25;;:39;;36621:41;;;;36692:38;;;;36760:46;;;;36842:37;;;;;36455:599;;36760:46;36836:43;;193:4:122;36836:43:124;:::i;36455:599::-;36428:626;-1:-1:-1;36428:626:124;-1:-1:-1;36428:626:124;37076:200;;37252:1;37245:8;;;;;;;;;;;;;;37076:200;37599:7;:21;;;37574:13;:47;37570:316;;37656:13;37649:20;;;;;;;;;;;;;;37570:316;37855:8;;;31313:9510;;37570:316;33533:4385;33503:4415;38194:18;38296:174;38363:6;38387:31;38436:6;:20;;;38296:49;:174::i;:::-;38226:244;-1:-1:-1;38226:244:124;-1:-1:-1;38488:8:124;;;:29;;;193:4:122;38500:10:124;:17;;38488:29;38484:189;;;38657:1;38650:8;;;;;;;;;;;;;;38484:189;38733:10;193:4:122;38727:16:124;38714:29;;39160:12;39240:135;:103;39316:6;:26;;;39240:6;:48;;;:75;;:103;;;;:::i;:135::-;39175:46;:35;:12;39196:13;39175:20;:35::i;:46::-;:200;;;;:::i;:::-;39160:215;-1:-1:-1;39393:18:124;;;:55;;;39429:19;:13;:17;:19::i;:::-;39415:11;:5;:9;:11::i;:::-;:33;39393:55;39389:221;;;39484:5;39468:21;;39530:13;39507:36;;39583:12;39561:34;;39389:221;39829:1;39821:5;:9;39817:893;;;39994:57;40037:13;39994:34;40002:5;40017:10;39994:22;:34::i;:57::-;39958:93;;:13;:93;:::i;:::-;39922:129;;39817:893;;;40084:1;40076:5;:9;40072:638;;;40177:14;40194:96;40259:13;40194:35;40218:10;40194:35;40203:5;40202:6;:::i;40194:96::-;40177:113;;40321:13;40312:6;:22;40308:344;;;40426:6;40410:13;:22;40394:38;;40308:344;;;40632:1;40625:8;;;;;;;;;;;;;;;;40308:344;40087:579;40072:638;;;40690:5;;;;;;40072:638;40795:3;;;;;31355:9468;;;;31313:9510;;;;40907:13;41125:264;41167:6;:28;;;41209:6;:30;;;41253:6;:27;;;41294:6;:25;;;:46;;;41355:24;:13;:22;:24::i;41125:264::-;40944:25;;41052:38;;;40930:459;;;;40997:41;;;40930:459;;;;;;;;;-1:-1:-1;40930:459:124;41399:153;;41540:1;41533:8;;;;;;;;;;;41399:153;41561:21;41585:70;41620:6;:25;;;41585:21;:70::i;:::-;41561:94;;41888:16;41969:123;:95;42037:6;:26;;;41969:6;:44;;;:67;;:95;;;;:::i;:123::-;41907:47;:36;:13;41929;41907:21;:36::i;:47::-;:185;;;;:::i;:::-;41888:204;;42124:19;:13;:17;:19::i;:::-;42106:15;:9;:13;:15::i;:::-;:37;42102:153;;;42182:13;42159:36;;42231:13;42209:35;;42102:153;42510:129;42564:30;1205:4;193::122;42564:30:124;:::i;:::-;42510:27;;;;;42612:13;42510:36;:129::i;:::-;42468:26;;;;42440:55;;:19;;:27;:55::i;:::-;:199;:472;;;-1:-1:-1;42781:131:124;42837:30;1205:4;193::122;42837:30:124;:::i;:::-;42781:27;;;;;42885:13;42781:38;:131::i;:::-;42739:26;;;;42713:53;;:19;;:25;:53::i;:::-;:199;42440:472;42363:698;;;43049:1;43042:8;;;;;;;;;;;;;42363:698;-1:-1:-1;43078:20:124;;-1:-1:-1;;;;;;;;29410:13695:124;;;;;;;:::o;16958:2070:126:-;17163:7;17172:4;17469:1;17462:4;:8;17458:67;;;17508:5;17509:4;17508:5;:::i;:::-;17493:21;;:4;:21;:::i;:::-;17486:28;;17458:67;18021:10;18033:12;18049:72;18113:1;18116:4;18049:63;:72::i;:::-;18020:101;;;;18137:7;18132:56;;18168:1;18171:5;18160:17;;;;;;;;18132:56;18197:9;18209:22;18215:2;18219:1;18222;18225;18228:2;18209:5;:22::i;:::-;18197:34;-1:-1:-1;18241:11:126;18255:37;18266:21;18285:1;18266:14;:2;18275:4;18266:8;:14::i;:21::-;18255:1;;18289:2;18255:10;:37::i;:::-;18241:51;;18310:3;18306:1;:7;18302:55;;;18337:1;18340:5;18329:17;;;;;;;;;;18302:55;18427:7;;;193:4:122;18458:15:126;;18454:295;;18572:28;18585:14;193:4:122;18597:1:126;18585:11;:14::i;:::-;18572:8;;:12;:28::i;:::-;18561:39;;18454:295;;;18712:26;18725:12;193:4:122;18735:1:126;18725:9;:12::i;18712:26::-;18701:37;;18454:295;18906:1;18895:8;:12;18891:60;;;18931:1;18934:5;18923:17;;;;;;;;;;;18891:60;18992:12;;;;-1:-1:-1;19006:4:126;;-1:-1:-1;;;;;16958:2070:126;;;;;;;;;;;:::o;11086:1515::-;11280:7;11289:4;11443:9;11455:20;11459:2;11463:1;11466;11469;11472:2;11455:3;:20::i;:::-;11443:32;-1:-1:-1;11518:15:126;11531:1;11519:6;11523:2;11519:1;:6;:::i;11518:15::-;11514:19;;11615:1;11611;:5;11607:53;;;11640:1;11643:5;11632:17;;;;;;;11607:53;11864:5;;;11894:18;11864:5;11906:2;11910:1;11894:11;:18::i;:::-;11889:23;;193:4:122;11926:2:126;:9;11922:263;;12025:20;12032:12;193:4:122;12042:1:126;12032:9;:12::i;12025:20::-;12020:25;;11922:263;;;12152:22;12159:14;193:4:122;12171:1:126;12159:11;:14::i;12152:22::-;12147:27;;11922:263;12267:12;:2;12276;12267:8;:12::i;:::-;12262:17;;12404:2;12399;:7;12395:55;;;12430:1;12433:5;12422:17;;;;;;;;12395:55;12570:7;;;-1:-1:-1;12579:4:126;;-1:-1:-1;;11086:1515:126;;;;;;;;;;:::o;15269:1050::-;15432:7;15441:4;15653:9;15665:20;15669:2;15673:1;15676;15679;15682:2;15665:3;:20::i;:::-;15653:32;-1:-1:-1;15695:16:126;15714:28;193:4:122;15722:13:126;:1;15732:2;15722:9;:13::i;:::-;:19;;;;:::i;:::-;15714:1;;:7;:28::i;:::-;15695:47;;193:4:122;15756:8:126;:15;15752:293;;15867:26;15880:12;193:4:122;15890:1:126;15880:9;:12::i;15867:26::-;15856:37;;15752:293;;;16006:28;16019:14;193:4:122;16031:1:126;16019:11;:14::i;16006:28::-;15995:39;;15752:293;16190:8;16186:1;:12;16182:60;;;16222:1;16225:5;16214:17;;;;;;;;16182:60;16283:12;;;-1:-1:-1;16297:4:126;;-1:-1:-1;;15269:1050:126;;;;;;;;;:::o;5309:1765::-;5501:7;5510:4;5664:9;5676:20;5680:2;5684:1;5687;5690;5693:2;5676:3;:20::i;:::-;5664:32;;5819:2;5815:1;:6;5811:54;;;5845:1;5848:5;5837:17;;;;;;;5811:54;5927:7;;;;;5958:8;5927:7;5964:1;5958:5;:8::i;:::-;5954:12;;6088:1;6084;:5;6080:53;;;6113:1;6116:5;6105:17;;;;;;;6080:53;6337:5;;;6367:18;6337:5;6379:2;6383:1;6367:11;:18::i;:::-;6362:23;;193:4:122;6399:2:126;:9;6395:261;;6497:20;6504:12;193:4:122;6514:1:126;6504:9;:12::i;6497:20::-;6492:25;;6395:261;;;6623:22;6630:14;193:4:122;6642:1:126;6630:11;:14::i;6623:22::-;6618:27;;6395:261;6738:12;:2;6747;6738:8;:12::i;:::-;6733:17;;6875:2;6870;:7;6866:55;;;6901:1;6904:5;6893:17;;;;;;;;6866:55;7043:7;;;;;7052:4;;-1:-1:-1;5309:1765:126;-1:-1:-1;;;;;;;5309:1765:126:o;13236:1409::-;13399:7;13408:4;13920:9;13932:22;13938:2;13942:1;13945;13948;13951:2;13932:5;:22::i;:::-;13920:34;-1:-1:-1;13964:17:126;13984:28;193:4:122;13994:11:126;:1;14002:2;13994:7;:11::i;:::-;:17;;;;:::i;13984:28::-;13964:48;;193:4:122;14026:9:126;:16;14022:300;;14142:29;14156:14;193:4:122;14168:1:126;14156:11;:14::i;14142:29::-;14130:41;;14022:300;;;14284:27;14298:12;193:4:122;14308:1:126;14298:9;:12::i;14284:27::-;14272:39;;14022:300;14343:21;:9;14361:2;14343:17;:21::i;:::-;14331:33;;14520:2;14508:9;:14;14504:62;;;14546:1;14549:5;14538:17;;;;;;;;14504:62;14607:14;;;;;14623:4;;-1:-1:-1;13236:1409:126;-1:-1:-1;;;;;;13236:1409:126:o;47380:1279:124:-;48007:28;;;;47584:4;;48007:50;;48042:14;48007:34;:50::i;:::-;47897:27;;;;47875:50;;:13;;:21;:50::i;:::-;:182;;:777;;;;-1:-1:-1;48578:28:124;;;;48503:149;;48624:14;48504:44;1047:3;193:4:122;48504:44:124;:::i;48503:149::-;48391:27;;;;48371:48;;:13;;:19;:48::i;:::-;:281;;47600:1052;47380:1279;-1:-1:-1;;;;47380:1279:124:o;44796:1866::-;44947:7;44956:4;45238:1;45203:7;:31;;;:36;45199:84;;-1:-1:-1;45263:1:124;;;;-1:-1:-1;44796:1866:124;-1:-1:-1;44796:1866:124:o;45199:84::-;45334:19;45356:49;45378:7;:26;;;45356:21;:49::i;:::-;45334:71;;45548:11;45562:167;45613:7;:27;;;45684:7;:35;;;45654:7;:27;;;:65;;;;:::i;:::-;45562:28;;;;;:167;:37;:167::i;:::-;45548:181;;45759:1;45743:12;:17;45739:411;;45804:3;45788:12;45780:27;45776:304;;;45859:28;;;45739:411;;45776:304;-1:-1:-1;46056:1:124;;;;-1:-1:-1;44796:1866:124;-1:-1:-1;;;44796:1866:124:o;45739:411::-;46125:13;46126:12;46125:13;:::i;:::-;46110:29;;;;:::i;:::-;;;45739:411;46390:31;;;;46313:29;;;;:119;;46365:3;;46313:38;:119::i;:::-;46307:125;;46515:3;46483:7;:29;;;:35;46479:83;;;-1:-1:-1;46542:1:124;;;;-1:-1:-1;44796:1866:124;-1:-1:-1;;;44796:1866:124:o;46479:83::-;46635:3;46603:7;:29;;;:35;46640:4;46595:50;;;;;;44796:1866;;;:::o;55066:5798::-;55282:7;55291:4;55380:20;55429:1;55414:11;:16;55410:670;;55477:26;;:39;;;:78;;55543:11;;55477:78;:::i;:::-;55446:109;;55410:670;;;55586:18;55615:12;55616:11;55615:12;:::i;:::-;55659:26;;:39;;;55586:42;;-1:-1:-1;55646:52:124;;55642:428;;;55789:26;;:39;;;:76;;;;-1:-1:-1;55642:428:124;;;56046:1;56049:5;56038:17;;;;;;;;55642:428;55572:508;55410:670;56469:26;;:40;;56527:42;;;;;56340:30;;;;56388:195;;56469:40;56388:63;:195::i;:::-;56339:244;;;;56598:7;56593:56;;56629:1;56632:5;56621:17;;;;;;;;;56593:56;57141:26;;:38;;;;57072:39;;;;;56658:18;;56959:274;;57011:208;;57072:129;;:39;:43;:129::i;:::-;57011:31;;:39;:208::i;:::-;56959:28;;;;;:34;:274::i;:::-;56895:26;;:38;;;;56741:83;;;;;56679:265;;56741:193;;:132;;56850:22;56741:108;:132::i;:193::-;56679:26;;:42;;;;:48;:265::i;:::-;:554;;;;:::i;:::-;56658:575;;57303:11;57317:185;57367:125;57422:56;57439:7;:26;;;:38;;;57422:12;:16;;:56;;;;:::i;:::-;57367:31;;:37;:125::i;:::-;57317:28;;;;;:36;:185::i;:::-;57303:199;;57529:3;57516:10;:16;57512:64;;;57556:1;57559:5;57548:17;;;;;;;;;;;57512:64;57623:3;57609:17;;;;57866:9;57878:294;57910:22;57946:7;:26;;;:39;;;58005:7;:26;;;:38;;;193:4:122;57999:44:124;;;;:::i;:::-;58057:26;;:42;;;;58113:49;;;;;57878:18;:294::i;:::-;57866:306;;58182:13;58198:84;58234:7;:26;;;:38;;;193:4:122;58228:44:124;;;;:::i;:::-;58198:12;;:16;:84::i;:::-;58182:100;;58300:5;58296:1;:9;58292:201;;;58473:1;58476:5;58465:17;;;;;;;;;;;;;58292:201;58599:26;;:49;;;;58662:42;;;;;58534:9;;;;58571:143;;58534:9;;58571:14;:143::i;:::-;58563:151;;193:4:122;58728:5:124;:12;58724:584;;58939:26;;:38;;;58840:169;;58867:128;;58933:44;;193:4:122;58933:44:124;:::i;:::-;58867:26;;:38;;;;:44;:128::i;58840:169::-;58832:177;;58724:584;;;59227:26;;:38;;;59126:171;;59153:130;;59221:44;;193:4:122;59221:44:124;:::i;:::-;59153:26;;:38;;;;:46;:130::i;59126:171::-;59118:179;;58724:584;59460:26;;:42;;;59408:104;;:10;;59441:5;;59408:19;:104::i;:::-;59395:117;;59572:10;193:4:122;59566:16:124;59562:398;;;59645:10;193:4:122;59639:16:124;59626:29;;59562:398;;;59941:1;59944:4;59933:16;;;;;;;;;;;;;59562:398;60134:1;60099:7;:31;;;:36;60095:727;;60221:29;;;;60165:31;;;;60157:107;;:46;:107::i;:::-;60151:113;;193:4:122;60282:3:124;:9;60278:167;;;60421:1;60424:5;60413:17;;;;;;;;;;;;;60278:167;193:4:122;60492:9:124;;;;;60542:23;:10;60492:9;60542:18;:23::i;:::-;60529:36;;60095:727;;;60609:202;60671:126;60746:7;:29;;;60680:7;:31;;;60679:32;;;:::i;60671:126::-;60645:152;;193:4:122;60645:152:124;:::i;:::-;60609:10;;:18;:202::i;:::-;60596:215;;60095:727;-1:-1:-1;60840:10:124;;60852:4;;-1:-1:-1;55066:5798:124;-1:-1:-1;;;;;;;;;55066:5798:124:o;16056:92:122:-;16102:6;16131:1;16127;:5;:14;;16140:1;16127:14;;;16135:2;16136:1;16135:2;:::i;20391:352:126:-;20532:7;20728:8;:1;20734;20728:5;:8::i;:::-;20686:39;20699:21;20718:1;20699:14;:2;20710;20699:10;:14::i;:21::-;20686:1;;20722:2;20686:12;:39::i;:::-;:50;;;;:::i;19535:343::-;19674:7;19863:8;:1;19869;19863:5;:8::i;:::-;19825:35;19836:19;19853:1;19836:12;:2;19845;19836:8;:12::i;:19::-;19825:1;;19857:2;19825:10;:35::i;-1:-1:-1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;14:155:234:-;74:5;119:2;110:6;105:3;101:16;97:25;94:45;;;135:1;132;125:12;174:631;297:6;305;313;321;329;382:3;370:9;361:7;357:23;353:33;350:53;;;399:1;396;389:12;350:53;435:9;422:23;412:33;;492:2;481:9;477:18;464:32;454:42;;543:2;532:9;528:18;515:32;505:42;;594:2;583:9;579:18;566:32;556:42;;649:3;638:9;634:19;621:33;677:18;669:6;666:30;663:50;;;709:1;706;699:12;663:50;732:67;791:7;782:6;771:9;767:22;732:67;:::i;:::-;722:77;;;174:631;;;;;;;;:::o;992:562::-;1106:6;1114;1122;1130;1183:3;1171:9;1162:7;1158:23;1154:33;1151:53;;;1200:1;1197;1190:12;1151:53;1236:9;1223:23;1213:33;;1293:2;1282:9;1278:18;1265:32;1255:42;;1344:2;1333:9;1329:18;1316:32;1306:42;;1399:2;1388:9;1384:18;1371:32;1426:18;1418:6;1415:30;1412:50;;;1458:1;1455;1448:12;1412:50;1481:67;1540:7;1531:6;1520:9;1516:22;1481:67;:::i;:::-;1471:77;;;992:562;;;;;;;:::o;1944:127::-;2005:10;2000:3;1996:20;1993:1;1986:31;2036:4;2033:1;2026:15;2060:4;2057:1;2050:15;2076:128;2143:9;;;2164:11;;;2161:37;;;2178:18;;:::i;2209:125::-;2274:9;;;2295:10;;;2292:36;;;2308:18;;:::i;2339:286::-;2398:6;2451:2;2439:9;2430:7;2426:23;2422:32;2419:52;;;2467:1;2464;2457:12;2419:52;2493:23;;-1:-1:-1;;;;;2545:31:234;;2535:42;;2525:70;;2591:1;2588;2581:12;2630:118;2716:5;2709:13;2702:21;2695:5;2692:32;2682:60;;2738:1;2735;2728:12;2753:241;2809:6;2862:2;2850:9;2841:7;2837:23;2833:32;2830:52;;;2878:1;2875;2868:12;2830:52;2917:9;2904:23;2936:28;2958:5;2936:28;:::i;4027:521::-;4104:4;4110:6;4170:11;4157:25;4264:2;4260:7;4249:8;4233:14;4229:29;4225:43;4205:18;4201:68;4191:96;;4283:1;4280;4273:12;4191:96;4310:33;;4362:20;;;-1:-1:-1;4405:18:234;4394:30;;4391:50;;;4437:1;4434;4427:12;4391:50;4470:4;4458:17;;-1:-1:-1;4501:14:234;4497:27;;;4487:38;;4484:58;;;4538:1;4535;4528:12;4763:127;4824:10;4819:3;4815:20;4812:1;4805:31;4855:4;4852:1;4845:15;4879:4;4876:1;4869:15;4895:112;4927:1;4953;4943:35;;4958:18;;:::i;:::-;-1:-1:-1;4992:9:234;;4895:112::o;5012:193::-;-1:-1:-1;;;;;5130:10:234;;;5142;;;5126:27;;5165:11;;;5162:37;;;5179:18;;:::i;5210:197::-;-1:-1:-1;;;;;5332:10:234;;;5344;;;5328:27;;5367:11;;;5364:37;;;5381:18;;:::i;5412:200::-;5478:9;;;5451:4;5506:9;;5534:10;;5546:12;;;5530:29;5569:12;;;5561:21;;5527:56;5524:82;;;5586:18;;:::i;6085:168::-;6158:9;;;6189;;6206:15;;;6200:22;;6186:37;6176:71;;6227:18;;:::i;6466:184::-;6536:6;6589:2;6577:9;6568:7;6564:23;6560:32;6557:52;;;6605:1;6602;6595:12;6557:52;-1:-1:-1;6628:16:234;;6466:184;-1:-1:-1;6466:184:234:o;7035:245::-;7102:6;7155:2;7143:9;7134:7;7130:23;7126:32;7123:52;;;7171:1;7168;7161:12;7123:52;7203:9;7197:16;7222:28;7244:5;7222:28;:::i;7285:200::-;-1:-1:-1;;;;;7421:10:234;;;7409;;;7405:27;;7444:12;;;7441:38;;;7459:18;;:::i;7490:245::-;7588:2;7558:17;;;7577;;;;7554:41;-1:-1:-1;;;;;7610:44:234;;-1:-1:-1;;;;;;7656:49:234;;7607:99;7604:125;;;7709:18;;:::i;7740:213::-;7775:3;7823:5;7819:2;7808:21;-1:-1:-1;;;;;7853:39:234;7844:7;7841:52;7838:78;;7896:18;;:::i;:::-;7936:1;7932:15;;7740:213;-1:-1:-1;;7740:213:234:o;7958:136::-;7993:3;-1:-1:-1;;;8014:22:234;;8011:48;;8039:18;;:::i;:::-;-1:-1:-1;8079:1:234;8075:13;;7958:136::o;8099:216::-;8163:9;;;8191:11;;;8138:3;8221:9;;8249:10;;8245:19;;8274:10;;8266:19;;8242:44;8239:70;;;8289:18;;:::i;:::-;8239:70;;8099:216;;;;:::o;8320:193::-;8359:1;8385;8375:35;;8390:18;;:::i;:::-;-1:-1:-1;;;8426:18:234;;-1:-1:-1;;8446:13:234;;8422:38;8419:64;;;8463:18;;:::i;:::-;-1:-1:-1;8497:10:234;;8320:193::o";
        readonly linkReferences: {};
        readonly immutableReferences: {
            readonly "17532": readonly [{
                readonly start: 1840;
                readonly length: 32;
            }, {
                readonly start: 5492;
                readonly length: 32;
            }, {
                readonly start: 5565;
                readonly length: 32;
            }, {
                readonly start: 5711;
                readonly length: 32;
            }, {
                readonly start: 5840;
                readonly length: 32;
            }, {
                readonly start: 6263;
                readonly length: 32;
            }, {
                readonly start: 6392;
                readonly length: 32;
            }, {
                readonly start: 9573;
                readonly length: 32;
            }, {
                readonly start: 9646;
                readonly length: 32;
            }, {
                readonly start: 10762;
                readonly length: 32;
            }, {
                readonly start: 10835;
                readonly length: 32;
            }];
            readonly "17539": readonly [{
                readonly start: 2335;
                readonly length: 32;
            }, {
                readonly start: 2476;
                readonly length: 32;
            }, {
                readonly start: 2577;
                readonly length: 32;
            }];
            readonly "17542": readonly [{
                readonly start: 380;
                readonly length: 32;
            }, {
                readonly start: 1401;
                readonly length: 32;
            }, {
                readonly start: 2681;
                readonly length: 32;
            }, {
                readonly start: 9093;
                readonly length: 32;
            }];
            readonly "17545": readonly [{
                readonly start: 413;
                readonly length: 32;
            }, {
                readonly start: 3742;
                readonly length: 32;
            }, {
                readonly start: 4353;
                readonly length: 32;
            }, {
                readonly start: 4520;
                readonly length: 32;
            }];
            readonly "17548": readonly [{
                readonly start: 9913;
                readonly length: 32;
            }];
            readonly "17551": readonly [{
                readonly start: 2878;
                readonly length: 32;
            }, {
                readonly start: 4641;
                readonly length: 32;
            }, {
                readonly start: 7035;
                readonly length: 32;
            }, {
                readonly start: 10042;
                readonly length: 32;
            }];
            readonly "17554": readonly [{
                readonly start: 7079;
                readonly length: 32;
            }, {
                readonly start: 9965;
                readonly length: 32;
            }, {
                readonly start: 10086;
                readonly length: 32;
            }];
            readonly "17557": readonly [{
                readonly start: 6785;
                readonly length: 32;
            }];
            readonly "17560": readonly [{
                readonly start: 347;
                readonly length: 32;
            }, {
                readonly start: 3628;
                readonly length: 32;
            }, {
                readonly start: 4387;
                readonly length: 32;
            }, {
                readonly start: 4487;
                readonly length: 32;
            }, {
                readonly start: 6006;
                readonly length: 32;
            }, {
                readonly start: 6153;
                readonly length: 32;
            }];
            readonly "17563": readonly [{
                readonly start: 3666;
                readonly length: 32;
            }, {
                readonly start: 4777;
                readonly length: 32;
            }, {
                readonly start: 7730;
                readonly length: 32;
            }, {
                readonly start: 7829;
                readonly length: 32;
            }, {
                readonly start: 9322;
                readonly length: 32;
            }, {
                readonly start: 10469;
                readonly length: 32;
            }, {
                readonly start: 11140;
                readonly length: 32;
            }, {
                readonly start: 11200;
                readonly length: 32;
            }];
            readonly "17566": readonly [{
                readonly start: 250;
                readonly length: 32;
            }, {
                readonly start: 822;
                readonly length: 32;
            }, {
                readonly start: 1251;
                readonly length: 32;
            }, {
                readonly start: 3704;
                readonly length: 32;
            }];
        };
    };
    readonly methodIdentifiers: {
        readonly "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": "4c2ac1d9";
        readonly "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070";
    };
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"contract IERC20\",\"name\":\"vaultSharesToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"sweepCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolConfig\",\"name\":\"_config\",\"type\":\"tuple\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"DecreasedPresentValueWhenAddingLiquidity\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"DistributeExcessIdleFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ExpInvalidExponent\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InsufficientLiquidity\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidApr\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPresentValue\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTimestamp\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"LnInvalidInput\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MinimumSharePrice\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MinimumTransactionAmount\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NotPayable\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"OutputLimit\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"PoolIsPaused\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"RestrictedZeroAddress\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"TransferFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToInt128\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToInt256\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToUint112\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToUint128\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UpdateLiquidityFailed\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"basePayment\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fees\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"checkpointVaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newFeeCollector\",\"type\":\"address\"}],\"name\":\"FeeCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseProceeds\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"}],\"name\":\"PauseStatusUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"name\":\"Sweep\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newSweepCollector\",\"type\":\"address\"}],\"name\":\"SweepCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_contribution\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minLpSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minApr\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_maxApr\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"addLiquidity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_bondAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_maxDeposit\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minVaultSharePrice\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"openShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"}],\"devdoc\":{\"errors\":{\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}]},\"kind\":\"dev\",\"methods\":{\"addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_contribution\":\"The amount of capital to supply. The units of this        quantity are either base or vault shares, depending on the value        of `_options.asBase`.\",\"_maxApr\":\"The maximum APR at which the LP is willing to supply.\",\"_minApr\":\"The minimum APR at which the LP is willing to supply.\",\"_minLpSharePrice\":\"The minimum LP share price the LP is willing        to accept for their shares. LPs incur negative slippage when        adding liquidity if there is a net curve position in the market,        so this allows LPs to protect themselves from high levels of        slippage. The units of this quantity are either base or vault        shares, depending on the value of `_options.asBase`.\",\"_options\":\"The options that configure how the operation is settled.\"},\"returns\":{\"_0\":\"The number of LP tokens created.\"}},\"openShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_bondAmount\":\"The amount of bonds to short.\",\"_maxDeposit\":\"The most the user expects to deposit for this trade.        The units of this quantity are either base or vault shares,        depending on the value of `_options.asBase`.\",\"_minVaultSharePrice\":\"The minimum vault share price at which to        open the short. This allows traders to protect themselves from        opening a short in a checkpoint where negative interest has        accrued.\",\"_options\":\"The options that configure how the trade is settled.\"},\"returns\":{\"_0\":\"The maturity time of the short.\",\"_1\":\"The amount the user deposited for this trade. The units of this         quantity are either base or vault shares, depending on the value         of `_options.asBase`.\"}}},\"version\":1},\"userdoc\":{\"errors\":{\"DecreasedPresentValueWhenAddingLiquidity()\":[{\"notice\":\"Thrown when the present value prior to adding liquidity results in a         decrease in present value after liquidity. This is caused by a         shortage in liquidity that prevents all the open positions being         closed on the curve and therefore marked to 1.\"}],\"DistributeExcessIdleFailed()\":[{\"notice\":\"Thrown when the distribute excess idle calculation fails due         to the starting present value calculation failing.\"}],\"ExpInvalidExponent()\":[{\"notice\":\"Thrown when the exponent to `FixedPointMath.exp` would cause the         the result to be larger than the representable scale.\"}],\"InsufficientLiquidity()\":[{\"notice\":\"Thrown when the pool doesn't have sufficient liquidity to         complete the trade.\"}],\"InvalidApr()\":[{\"notice\":\"Thrown when the pool's APR is outside the bounds specified by         a LP when they are adding liquidity.\"}],\"InvalidPresentValue()\":[{\"notice\":\"Thrown when the present value calculation fails.\"}],\"InvalidTimestamp()\":[{\"notice\":\"Thrown when the timestamp used to construct an asset ID exceeds         the uint248 scale.\"}],\"LnInvalidInput()\":[{\"notice\":\"Thrown when the input to `FixedPointMath.ln` is less than or         equal to zero.\"}],\"MinimumSharePrice()\":[{\"notice\":\"Thrown when vault share price is smaller than the minimum share         price. This protects traders from unknowingly opening a long or         short after negative interest has accrued.\"}],\"MinimumTransactionAmount()\":[{\"notice\":\"Thrown when the input or output amount of a trade is smaller         than the minimum transaction amount. This protects traders and         LPs from losses of precision that can occur at small scales.\"}],\"NotPayable()\":[{\"notice\":\"Thrown when ether is sent to an instance that doesn't accept         ether as a deposit asset.\"}],\"OutputLimit()\":[{\"notice\":\"Thrown when a slippage guard is violated.\"}],\"PoolIsPaused()\":[{\"notice\":\"Thrown when the pool is paused and a trader tries to add         liquidity, open a long, or open a short. Traders can still         close their existing positions while the pool is paused.\"}],\"RestrictedZeroAddress()\":[{\"notice\":\"Thrown when the owner passed to permit is the zero address. This         prevents users from spending the funds in address zero by         sending an invalid signature to ecrecover.\"}],\"TransferFailed()\":[{\"notice\":\"Thrown when an ether transfer fails.\"}],\"UnsafeCastToInt128()\":[{\"notice\":\"Thrown when casting a value to a int128 that is outside of the         int128 scale.\"}],\"UnsafeCastToInt256()\":[{\"notice\":\"Thrown when casting a value to a int256 that is outside of the         int256 scale.\"}],\"UnsafeCastToUint112()\":[{\"notice\":\"Thrown when casting a value to a uint112 that is outside of the         uint128 scale.\"}],\"UnsafeCastToUint128()\":[{\"notice\":\"Thrown when casting a value to a uint128 that is outside of the         uint128 scale.\"}],\"UpdateLiquidityFailed()\":[{\"notice\":\"Thrown when `LPMath.calculateUpdateLiquidity` fails.\"}]},\"events\":{\"AddLiquidity(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when an LP adds liquidity to the Hyperdrive pool.\"},\"Approval(address,address,uint256)\":{\"notice\":\"Emitted when an account changes the allowance for another         account.\"},\"ApprovalForAll(address,address,bool)\":{\"notice\":\"Emitted when an account changes the approval for all of its         tokens.\"},\"CloseLong(address,address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is closed.\"},\"CloseShort(address,address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is closed.\"},\"CollectGovernanceFee(address,uint256)\":{\"notice\":\"Emitted when governance fees are collected.\"},\"CreateCheckpoint(uint256,uint256,uint256,uint256,uint256,uint256)\":{\"notice\":\"Emitted when a checkpoint is created.\"},\"FeeCollectorUpdated(address)\":{\"notice\":\"Emitted when the fee collector address is updated.\"},\"GovernanceUpdated(address)\":{\"notice\":\"Emitted when the governance address is updated.\"},\"Initialize(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when the Hyperdrive pool is initialized.\"},\"OpenLong(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is opened.\"},\"OpenShort(address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is opened.\"},\"PauseStatusUpdated(bool)\":{\"notice\":\"Emitted when the pause status is updated.\"},\"PauserUpdated(address,bool)\":{\"notice\":\"Emitted when a pauser is updated.\"},\"RedeemWithdrawalShares(address,address,uint256,uint256,uint256,bool)\":{\"notice\":\"Emitted when an LP redeems withdrawal shares.\"},\"RemoveLiquidity(address,address,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when an LP removes liquidity from the Hyperdrive pool.\"},\"Sweep(address,address)\":{\"notice\":\"Emitted when tokens are swept.\"},\"SweepCollectorUpdated(address)\":{\"notice\":\"Emitted when the sweep collector address is updated.\"},\"TransferSingle(address,address,address,uint256,uint256)\":{\"notice\":\"Emitted when tokens are transferred from one account to another.\"}},\"kind\":\"user\",\"methods\":{\"addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows LPs to supply liquidity for LP shares.\"},\"openShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Opens a short position.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/test/MockHyperdrive.sol\":\"MockHyperdriveTarget4\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/external/Hyperdrive.sol\":{\"keccak256\":\"0x3478db194907ee23ef666d80699c8c59077585ac00495f7ffd39c2118c5335f4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ec9adb042acce1841a51f7be158271b4c76c7c0084c682a31377885b72923b10\",\"dweb:/ipfs/QmaRe6yKaUqsbb84DmePqiB3DXnsZ5j3a6SvUxhwRpzFac\"]},\"contracts/src/external/HyperdriveTarget0.sol\":{\"keccak256\":\"0x9cf2186541b5454544930c45d3ca5a7396a9122d7218e42670ae6e77eba7fe92\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6d3da4a8aadd58e9f2ddc4c0fed4b91be1f4d8d572c7cb9eea7c6f2aa416b206\",\"dweb:/ipfs/QmcSDMBvhpkMi2NPqWhbgvK2qBzUaihW28t3KpZMxmCrmF\"]},\"contracts/src/external/HyperdriveTarget1.sol\":{\"keccak256\":\"0x18784df22ef6b0670e65514eff5a0f920c8756bd4ea3bf962412d925e0c4a6cf\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ae184b3c22b3b81dd9309930c939edadfbc9e9da11d043a9884787ffd1c4e8ec\",\"dweb:/ipfs/QmRQUwg4y2uftHWBhzatbg5rTpn6U2CFNYk3k8P2jqvysS\"]},\"contracts/src/external/HyperdriveTarget2.sol\":{\"keccak256\":\"0xd3c189e1c80966b1ee28ea39ac1ae1e0c4b176c0a9ea90497a5fba616b83ed39\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a54eddb841ec9657f9ca2f027be3ee12ff13a6c6b90b47d1b6e9266add95d6c6\",\"dweb:/ipfs/QmQbAnorBMTn6hxTW5XTXYZkP7o4nq7vY3qp472jdxzjYW\"]},\"contracts/src/external/HyperdriveTarget3.sol\":{\"keccak256\":\"0x5bd53a3d57952fc7fb5e72ff5b05cbf59777e396bbc3fec130e1097e1d0bed78\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d1ac2da2ea4bf5a7a740b30cf52aa0f0b31e3cb98cb9a97a142c9c1a73391b7c\",\"dweb:/ipfs/QmPE61DsM5Kd2pJBrk37LY9N3s41d55YayeRKsFWSjzPXD\"]},\"contracts/src/external/HyperdriveTarget4.sol\":{\"keccak256\":\"0x4a0a0c730b5b81d270bab97abfbb5d8bb94afd1bd321af488b6debdcbdbd0b3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fe9ea75b5f505968d1e4d608e6da81822584159ff3e46e970628e90e29b46df0\",\"dweb:/ipfs/QmejJLk91RvkhLTSVGNFVuL3DetzzngCPB9za2pHeNRtbM\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x8b726cbf87e5dbec80207d47b64bb20e35a9fb42667b9d1612a87ad8b2d361b5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b2015112addc7b4ba33c0626a14c963294164906afce52296f3dc209737a7339\",\"dweb:/ipfs/QmZYR6qwGspufCtiofdvYbaHhxSrguNnP52rd3y3zXWiDz\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0xa48349cf2fcd27ce3aafcffeba25647d289e17653dc1a4e643c3de0b47e5c75f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4dee6d2061cc68e3bc52acfa0d35c973785e49170f49d2e09efd50ead85e2a19\",\"dweb:/ipfs/QmX6tpGgXTnVGt1CdD796N5kn8YrZWFX1FcRLqtBBhB5qk\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x567b78388802482303910be022299e39a0ef95b4a9a30d6acc4bea0d467fa784\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://338a9f960049c37d13b6e23e5bc2c9e6005366aa99c95168f57f170ef2a4bcfa\",\"dweb:/ipfs/QmaeAwacrvMgJGqrKDSXZkYNYRJ5FvirYFpY3xjbCbJTF9\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86\",\"dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/internal/HyperdriveAdmin.sol\":{\"keccak256\":\"0x98a928423936e48c06552ec01a44687d42219ced71d689596aef6c7052c969a8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://f0da6702fe7a686ab5b371697112d4d025d9e4f9ff2b0f36276b12ec8542fcfd\",\"dweb:/ipfs/QmQJrxcTRQ4kL6CroF6cdVZuv6S9QUuZrm5BMUTA6o23xN\"]},\"contracts/src/internal/HyperdriveBase.sol\":{\"keccak256\":\"0x6d10a1d7e62a374bd1c6cd1f41e16a8702ef2b25b1dac34479ef8e3b31abd2f3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a60f3227d4de9ab8163bc0625e5e66f1ea17b3b2901ae40547289d5ca6b82186\",\"dweb:/ipfs/QmWF4mUXAAYaTko7pWjje2Jc9XumnaAYURUNuvwSRoS28E\"]},\"contracts/src/internal/HyperdriveCheckpoint.sol\":{\"keccak256\":\"0x80e136696165d1ea5e1b0dbe7d04c99f3303b59a6e79c8917824892c3e7b4ee7\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://bf52ad7b2b9907331275ed5cdc7055d223224a8b539f82d9ba76c6dc67ae5334\",\"dweb:/ipfs/QmU3ncwDV4TkX6C377wgWSHm13ndDcFGLiBHzuHbfED19P\"]},\"contracts/src/internal/HyperdriveLP.sol\":{\"keccak256\":\"0x13a94b5343886983c874d8fb5cd4c9e7aa3f9e52d607a0fcfcbdfeeb64577488\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a7574afd3d91c62cae7a79e17c2cb7e93700aaebc74322f6fe119c61fbdcb4e4\",\"dweb:/ipfs/QmdWHYcuCoZNdQ2jMUg9zkbhsi25UVH5JXxoFm379Va4qF\"]},\"contracts/src/internal/HyperdriveLong.sol\":{\"keccak256\":\"0x02cd58cabac084c23a5abdd3d18e23bbf31629a9f847da7f738ffa83ac4627cc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://553b6fbe3f08078ca31a6ad1e15088a1724474a2d66abbfaaf4962b52a3572c4\",\"dweb:/ipfs/QmQpVa9HEJmaFKh4tANJXk9UBWzmmAsqVZ8RsfAN1rzVbZ\"]},\"contracts/src/internal/HyperdriveMultiToken.sol\":{\"keccak256\":\"0x21a9aafb8e23a22c77111e13538fa8f709446e4f3a64ef84b2eebc2aa9d04373\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://41517912353540de5b430587ca8220f9d34d4432d3c723951d5fb618d5907b5d\",\"dweb:/ipfs/QmU3cTCrAq94digVS97s5af1Pu86uGBpmpus6w7828fUbG\"]},\"contracts/src/internal/HyperdriveShort.sol\":{\"keccak256\":\"0xffefa815f96836971b6d92fd128fc9a14cd09a01b6845c8bcab7c778bfe1b87c\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ad050506fd4987240b09a7ace16062525491bbf17514e60f64a7b821e1a5c82c\",\"dweb:/ipfs/QmXqhwVmvC6w1rkAF6SpAgU3uim5H24E76LMBvavwJbJsx\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xde163699e55f6d6bd660fa7a1cf25927d2e895e16663a7c47fa45d6bc4878c2e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c9908cf875ad59413154825ea59e2635b16f0020a0e3368ec85b6c7379ab3f19\",\"dweb:/ipfs/QmeX22wqHYurD9J6WTxrQjtqUoh21bFmLm7E1SzCkgQV7d\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0x3031a1ec376be333eebe0062c474a22d7f970cb02de62ab6823c6918c0a7f83b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6c80cc2fd8b7908b6420ebb21cb99266c93e01d6cdd9d1a41f8847493849b131\",\"dweb:/ipfs/QmeMehWbF2RwQaf6c6yaj5KHjXboDRpzBCtvFnLW4BXBbc\"]},\"contracts/src/libraries/Constants.sol\":{\"keccak256\":\"0xcf133c1d2db33dd318a51f8db58aa188225dd4383499cf82aa35bb49a678e30d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://bdfefbcdf520ad8790372e66571a9f0782886e1d754dc83c834b98a19f450418\",\"dweb:/ipfs/QmdVcLsnb29dUJT4GVTWgEmuExEZ1wVhQ9KAJ5pwNTh6WU\"]},\"contracts/src/libraries/Errors.sol\":{\"keccak256\":\"0x015be7b5e24373828e26b4af217ecbf074c7f4dcab839703d97d7bc560aa40eb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3584c205f552b20d01dc902a687f346e10bde5f1a23f887f97e03b2fbff8e75c\",\"dweb:/ipfs/QmaVzjYr18cZueNaboBeyVb6CtgY2qMxtvNcn6nXzCgM2c\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x44e018888d5a9fe0c3e44d9d814879d8f0c3adb78154edc98ba07da86b976f5a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5e3990bc86aaa8b4eb4b948ed3a26f0b018f1422c6470a00d146aa69e599a90d\",\"dweb:/ipfs/QmWg9hKoQK1po8ZxRC4xrSWePtoJhgndkHXmwLCpCtwAUu\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0x391c141a11e995c912f55247d461c44bcd7d7c70de4c2d98ff9c81e89acd4424\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b4d80a70106debf9f2d4980e38572daeea11bfc398a1258e3b5dc344e9ce646a\",\"dweb:/ipfs/QmbdckkGQcuok6NDZPiUVAQhpG9HvigMwozFZRLe9YcL2n\"]},\"contracts/src/libraries/LPMath.sol\":{\"keccak256\":\"0x78ca3ee7c212a513f45a44ef42d362c4ab3cc59e246191c57011b86232967189\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://610b23be1ed7decae671a7cc8ae76298b5d3b10bbea532d3c10623462f899786\",\"dweb:/ipfs/QmV6i6JaY8EKYHUAq6r5267eMbQtfA43F3YNSvvxktW6hE\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xa15878749f26b198b59e039cf814143b141698064d341cd8b88cb4a04491551c\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b3fdd810b779630fce33fa7d2bfc17d6cca1bd3d646e5c702d09fd277167fde4\",\"dweb:/ipfs/QmW8C19uY5WLkVQfqFRsSU5NtuQDgoqt4jBoMhvuJ7kMn2\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x407ff362f1486784581f506ffd22cbcb74f638deed9e5c086d3639ea8e64025e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e0092121a10538a07f814b1fafdb2f8923ee35c4d0f18af595f65ce36849a797\",\"dweb:/ipfs/QmTVKGwXU2FyywANhcBnutWSu38QaaVqgG9eTYatfjGYGL\"]},\"contracts/test/ERC20Mintable.sol\":{\"keccak256\":\"0xe39cce294bb9af75378c32ebd831b76f146d105d1a42c93a002a4c045f4e16e5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3f67e53359b189ad14ed9856b0c3cd4320569ccce9bc048dd8b38c30f95dad48\",\"dweb:/ipfs/Qmbq3UPGgb3FiHmnB1TR1vxaMX6hhG3cjUum59ekV9amMA\"]},\"contracts/test/MockHyperdrive.sol\":{\"keccak256\":\"0x203152ee92518ee1b1fa848e79c759b16da17f68487d946416bbf0dbedda1500\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a2c56e50ed287d1e6e915880378635d99f9bc30d70e2f4dc0cc15583c29071e0\",\"dweb:/ipfs/QmcdgPUgckaZWySF4xPoJ6U6iA3MwH6LJ6DXJYWvkYfXES\"]},\"lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol\":{\"keccak256\":\"0x60c65f701957fdd6faea1acb0bb45825791d473693ed9ecb34726fdfaa849dd7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ea290300e0efc4d901244949dc4d877fd46e6c5e43dc2b26620e8efab3ab803f\",\"dweb:/ipfs/QmcLLJppxKeJWqHxE2CUkcfhuRTgHSn8J4kijcLa5MYhSt\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0xc3e1fa9d1987f8d349dfb4d6fe93bf2ca014b52ba335cfac30bfe71e357e6f80\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c5703ccdeb7b1d685e375ed719117e9edf2ab4bc544f24f23b0d50ec82257229\",\"dweb:/ipfs/QmTdwkbQq7owpCiyuzE7eh5LrD2ddrBCZ5WHVsWPi1RrTS\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c\",\"dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850\",\"dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x6008dabfe393240d73d7dd7688033f72740d570aa422254d29a7dce8568f3aff\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f5196ec75139918c6c7bb4251b36395e668f1fa6d206beba7e7520e74913940d\",\"dweb:/ipfs/QmSyqjksXxmm2mCG6qRd1yuwLykypkSVBbnBnGqJRcuJMi\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x37bb49513c49c87c4642a891b13b63571bc87013dde806617aa1efb54605f386\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b3036b3a83b7c48f96641f2a9002b9f2dcb6a5958dd670894ada21ae8229b3d0\",\"dweb:/ipfs/QmUNfSBdoVtjhETaUJCYcaC7pTMgbhht926tJ2uXJbiVd3\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245\",\"dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y\"]},\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":{\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12\",\"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF\"]},\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02\",\"dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd\"]},\"lib/solmate/src/auth/Auth.sol\":{\"keccak256\":\"0x6e05238d59cd40172c04c1974eb8f1f6cef4fdc4b6553ef7844a7302b885f76c\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://a9743c21ca0470d9082e4cf00aea53786868c977d40775e6954463658ebb50ac\",\"dweb:/ipfs/QmPFdyrLHUX1zSipTC2tcJ58EzxxPp2TTvCZx9KCgqZn2W\"]},\"lib/solmate/src/auth/authorities/MultiRolesAuthority.sol\":{\"keccak256\":\"0x5544e61f98c0e80a8c4b9b691952122d3547ade0c0ad830ae6d5fd65f2d0dbe3\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://232d9054e5c087e0f416d995753051d352b9f24c5bd823be69a6061757fd1fef\",\"dweb:/ipfs/QmZTwcv8YycBRUWX3NLrxNyKud2SCGtfZJiCasTXpjKM4B\"]},\"lib/solmate/src/tokens/ERC20.sol\":{\"keccak256\":\"0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35\",\"dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97\"]},\"test/utils/HyperdriveUtils.sol\":{\"keccak256\":\"0x764719deaf8b833fc87b8436d166030eaa05832bf3d5e259172f431778666e04\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://04c4bd84c0d60f9a7c68604cbe76d0cc88170bb569298749bc97d40b197f62f6\",\"dweb:/ipfs/QmQV6zkCCvLkbta2vDzjbMXKUzYDrAhcEyFA7QSRTVZJ1P\"]}},\"version\":1}";
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
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "DecreasedPresentValueWhenAddingLiquidity";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "DistributeExcessIdleFailed";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "ExpInvalidExponent";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InsufficientLiquidity";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidApr";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidPresentValue";
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
                readonly name: "NotPayable";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "OutputLimit";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "PoolIsPaused";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "ReentrancyGuardReentrantCall";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "RestrictedZeroAddress";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "TransferFailed";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "UnsafeCastToInt128";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "UnsafeCastToInt256";
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
                readonly name: "UpdateLiquidityFailed";
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
                    readonly name: "";
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
                    readonly name: "";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "";
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
                            readonly _0: "The number of LP tokens created.";
                        };
                    };
                    readonly "openShort(uint256,uint256,uint256,(address,bool,bytes))": {
                        readonly params: {
                            readonly _bondAmount: "The amount of bonds to short.";
                            readonly _maxDeposit: "The most the user expects to deposit for this trade.        The units of this quantity are either base or vault shares,        depending on the value of `_options.asBase`.";
                            readonly _minVaultSharePrice: "The minimum vault share price at which to        open the short. This allows traders to protect themselves from        opening a short in a checkpoint where negative interest has        accrued.";
                            readonly _options: "The options that configure how the trade is settled.";
                        };
                        readonly returns: {
                            readonly _0: "The maturity time of the short.";
                            readonly _1: "The amount the user deposited for this trade. The units of this         quantity are either base or vault shares, depending on the value         of `_options.asBase`.";
                        };
                    };
                };
                readonly version: 1;
            };
            readonly userdoc: {
                readonly kind: "user";
                readonly methods: {
                    readonly "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": {
                        readonly notice: "Allows LPs to supply liquidity for LP shares.";
                    };
                    readonly "openShort(uint256,uint256,uint256,(address,bool,bytes))": {
                        readonly notice: "Opens a short position.";
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
                readonly "contracts/test/MockHyperdrive.sol": "MockHyperdriveTarget4";
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
            readonly "contracts/src/external/HyperdriveTarget1.sol": {
                readonly keccak256: "0x18784df22ef6b0670e65514eff5a0f920c8756bd4ea3bf962412d925e0c4a6cf";
                readonly urls: readonly ["bzz-raw://ae184b3c22b3b81dd9309930c939edadfbc9e9da11d043a9884787ffd1c4e8ec", "dweb:/ipfs/QmRQUwg4y2uftHWBhzatbg5rTpn6U2CFNYk3k8P2jqvysS"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/external/HyperdriveTarget2.sol": {
                readonly keccak256: "0xd3c189e1c80966b1ee28ea39ac1ae1e0c4b176c0a9ea90497a5fba616b83ed39";
                readonly urls: readonly ["bzz-raw://a54eddb841ec9657f9ca2f027be3ee12ff13a6c6b90b47d1b6e9266add95d6c6", "dweb:/ipfs/QmQbAnorBMTn6hxTW5XTXYZkP7o4nq7vY3qp472jdxzjYW"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/external/HyperdriveTarget3.sol": {
                readonly keccak256: "0x5bd53a3d57952fc7fb5e72ff5b05cbf59777e396bbc3fec130e1097e1d0bed78";
                readonly urls: readonly ["bzz-raw://d1ac2da2ea4bf5a7a740b30cf52aa0f0b31e3cb98cb9a97a142c9c1a73391b7c", "dweb:/ipfs/QmPE61DsM5Kd2pJBrk37LY9N3s41d55YayeRKsFWSjzPXD"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/external/HyperdriveTarget4.sol": {
                readonly keccak256: "0x4a0a0c730b5b81d270bab97abfbb5d8bb94afd1bd321af488b6debdcbdbd0b3f";
                readonly urls: readonly ["bzz-raw://fe9ea75b5f505968d1e4d608e6da81822584159ff3e46e970628e90e29b46df0", "dweb:/ipfs/QmejJLk91RvkhLTSVGNFVuL3DetzzngCPB9za2pHeNRtbM"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IERC20.sol": {
                readonly keccak256: "0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9";
                readonly urls: readonly ["bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac", "dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p"];
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
            readonly "contracts/src/libraries/Constants.sol": {
                readonly keccak256: "0xcf133c1d2db33dd318a51f8db58aa188225dd4383499cf82aa35bb49a678e30d";
                readonly urls: readonly ["bzz-raw://bdfefbcdf520ad8790372e66571a9f0782886e1d754dc83c834b98a19f450418", "dweb:/ipfs/QmdVcLsnb29dUJT4GVTWgEmuExEZ1wVhQ9KAJ5pwNTh6WU"];
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
            readonly "contracts/test/ERC20Mintable.sol": {
                readonly keccak256: "0xe39cce294bb9af75378c32ebd831b76f146d105d1a42c93a002a4c045f4e16e5";
                readonly urls: readonly ["bzz-raw://3f67e53359b189ad14ed9856b0c3cd4320569ccce9bc048dd8b38c30f95dad48", "dweb:/ipfs/Qmbq3UPGgb3FiHmnB1TR1vxaMX6hhG3cjUum59ekV9amMA"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/test/MockHyperdrive.sol": {
                readonly keccak256: "0x203152ee92518ee1b1fa848e79c759b16da17f68487d946416bbf0dbedda1500";
                readonly urls: readonly ["bzz-raw://a2c56e50ed287d1e6e915880378635d99f9bc30d70e2f4dc0cc15583c29071e0", "dweb:/ipfs/QmcdgPUgckaZWySF4xPoJ6U6iA3MwH6LJ6DXJYWvkYfXES"];
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
            readonly "lib/solmate/src/auth/Auth.sol": {
                readonly keccak256: "0x6e05238d59cd40172c04c1974eb8f1f6cef4fdc4b6553ef7844a7302b885f76c";
                readonly urls: readonly ["bzz-raw://a9743c21ca0470d9082e4cf00aea53786868c977d40775e6954463658ebb50ac", "dweb:/ipfs/QmPFdyrLHUX1zSipTC2tcJ58EzxxPp2TTvCZx9KCgqZn2W"];
                readonly license: "AGPL-3.0-only";
            };
            readonly "lib/solmate/src/auth/authorities/MultiRolesAuthority.sol": {
                readonly keccak256: "0x5544e61f98c0e80a8c4b9b691952122d3547ade0c0ad830ae6d5fd65f2d0dbe3";
                readonly urls: readonly ["bzz-raw://232d9054e5c087e0f416d995753051d352b9f24c5bd823be69a6061757fd1fef", "dweb:/ipfs/QmZTwcv8YycBRUWX3NLrxNyKud2SCGtfZJiCasTXpjKM4B"];
                readonly license: "AGPL-3.0-only";
            };
            readonly "lib/solmate/src/tokens/ERC20.sol": {
                readonly keccak256: "0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10";
                readonly urls: readonly ["bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35", "dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97"];
                readonly license: "AGPL-3.0-only";
            };
            readonly "test/utils/HyperdriveUtils.sol": {
                readonly keccak256: "0x764719deaf8b833fc87b8436d166030eaa05832bf3d5e259172f431778666e04";
                readonly urls: readonly ["bzz-raw://04c4bd84c0d60f9a7c68604cbe76d0cc88170bb569298749bc97d40b197f62f6", "dweb:/ipfs/QmQV6zkCCvLkbta2vDzjbMXKUzYDrAhcEyFA7QSRTVZJ1P"];
                readonly license: "Apache-2.0";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "contracts/test/MockHyperdrive.sol";
        readonly id: 25325;
        readonly exportedSymbols: {
            readonly ERC20Mintable: readonly [23490];
            readonly ETH: readonly [18015];
            readonly FixedPointMath: readonly [18822];
            readonly Hyperdrive: readonly [4375];
            readonly HyperdriveBase: readonly [13667];
            readonly HyperdriveTarget0: readonly [5190];
            readonly HyperdriveTarget1: readonly [5278];
            readonly HyperdriveTarget2: readonly [5366];
            readonly HyperdriveTarget3: readonly [5468];
            readonly HyperdriveTarget4: readonly [5562];
            readonly HyperdriveUtils: readonly [158674];
            readonly IHyperdrive: readonly [10351];
            readonly IMockHyperdrive: readonly [24382];
            readonly MockHyperdrive: readonly [25235];
            readonly MockHyperdriveBase: readonly [24906];
            readonly MockHyperdriveTarget0: readonly [25264];
            readonly MockHyperdriveTarget1: readonly [25279];
            readonly MockHyperdriveTarget2: readonly [25294];
            readonly MockHyperdriveTarget3: readonly [25309];
            readonly MockHyperdriveTarget4: readonly [25324];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:14577:135";
        readonly nodes: readonly [{
            readonly id: 24312;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:23:135";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 24314;
            readonly nodeType: "ImportDirective";
            readonly src: "64:67:135";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/external/Hyperdrive.sol";
            readonly file: "contracts/src/external/Hyperdrive.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25325;
            readonly sourceUnit: 4376;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 24313;
                    readonly name: "Hyperdrive";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 4375;
                    readonly src: "73:10:135";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 24316;
            readonly nodeType: "ImportDirective";
            readonly src: "132:81:135";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/external/HyperdriveTarget0.sol";
            readonly file: "contracts/src/external/HyperdriveTarget0.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25325;
            readonly sourceUnit: 5191;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 24315;
                    readonly name: "HyperdriveTarget0";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 5190;
                    readonly src: "141:17:135";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 24318;
            readonly nodeType: "ImportDirective";
            readonly src: "214:81:135";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/external/HyperdriveTarget1.sol";
            readonly file: "contracts/src/external/HyperdriveTarget1.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25325;
            readonly sourceUnit: 5279;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 24317;
                    readonly name: "HyperdriveTarget1";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 5278;
                    readonly src: "223:17:135";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 24320;
            readonly nodeType: "ImportDirective";
            readonly src: "296:81:135";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/external/HyperdriveTarget2.sol";
            readonly file: "contracts/src/external/HyperdriveTarget2.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25325;
            readonly sourceUnit: 5367;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 24319;
                    readonly name: "HyperdriveTarget2";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 5366;
                    readonly src: "305:17:135";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 24322;
            readonly nodeType: "ImportDirective";
            readonly src: "378:81:135";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/external/HyperdriveTarget3.sol";
            readonly file: "contracts/src/external/HyperdriveTarget3.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25325;
            readonly sourceUnit: 5469;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 24321;
                    readonly name: "HyperdriveTarget3";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 5468;
                    readonly src: "387:17:135";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 24324;
            readonly nodeType: "ImportDirective";
            readonly src: "460:81:135";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/external/HyperdriveTarget4.sol";
            readonly file: "contracts/src/external/HyperdriveTarget4.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25325;
            readonly sourceUnit: 5563;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 24323;
                    readonly name: "HyperdriveTarget4";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 5562;
                    readonly src: "469:17:135";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 24326;
            readonly nodeType: "ImportDirective";
            readonly src: "542:75:135";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/internal/HyperdriveBase.sol";
            readonly file: "contracts/src/internal/HyperdriveBase.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25325;
            readonly sourceUnit: 13668;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 24325;
                    readonly name: "HyperdriveBase";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 13667;
                    readonly src: "551:14:135";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 24328;
            readonly nodeType: "ImportDirective";
            readonly src: "618:71:135";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IHyperdrive.sol";
            readonly file: "contracts/src/interfaces/IHyperdrive.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25325;
            readonly sourceUnit: 10352;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 24327;
                    readonly name: "IHyperdrive";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 10351;
                    readonly src: "627:11:135";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 24330;
            readonly nodeType: "ImportDirective";
            readonly src: "690:71:135";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IHyperdrive.sol";
            readonly file: "contracts/src/interfaces/IHyperdrive.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25325;
            readonly sourceUnit: 10352;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 24329;
                    readonly name: "IHyperdrive";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 10351;
                    readonly src: "699:11:135";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 24332;
            readonly nodeType: "ImportDirective";
            readonly src: "762:60:135";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/libraries/Constants.sol";
            readonly file: "contracts/src/libraries/Constants.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25325;
            readonly sourceUnit: 18016;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 24331;
                    readonly name: "ETH";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 18015;
                    readonly src: "771:3:135";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 24334;
            readonly nodeType: "ImportDirective";
            readonly src: "823:76:135";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/libraries/FixedPointMath.sol";
            readonly file: "contracts/src/libraries/FixedPointMath.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25325;
            readonly sourceUnit: 18823;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 24333;
                    readonly name: "FixedPointMath";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 18822;
                    readonly src: "832:14:135";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 24336;
            readonly nodeType: "ImportDirective";
            readonly src: "900:65:135";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/test/ERC20Mintable.sol";
            readonly file: "contracts/test/ERC20Mintable.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25325;
            readonly sourceUnit: 23491;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 24335;
                    readonly name: "ERC20Mintable";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 23490;
                    readonly src: "909:13:135";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 24338;
            readonly nodeType: "ImportDirective";
            readonly src: "966:65:135";
            readonly nodes: readonly [];
            readonly absolutePath: "test/utils/HyperdriveUtils.sol";
            readonly file: "test/utils/HyperdriveUtils.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25325;
            readonly sourceUnit: 158675;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 24337;
                    readonly name: "HyperdriveUtils";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 158674;
                    readonly src: "975:15:135";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 24382;
            readonly nodeType: "ContractDefinition";
            readonly src: "1033:594:135";
            readonly nodes: readonly [{
                readonly id: 24345;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1065:51:135";
                readonly nodes: readonly [];
                readonly functionSelector: "68096239";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "accrue";
                readonly nameLocation: "1074:6:135";
                readonly parameters: {
                    readonly id: 24343;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24340;
                        readonly mutability: "mutable";
                        readonly name: "time";
                        readonly nameLocation: "1089:4:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24345;
                        readonly src: "1081:12:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24339;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1081:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 24342;
                        readonly mutability: "mutable";
                        readonly name: "apr";
                        readonly nameLocation: "1102:3:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24345;
                        readonly src: "1095:10:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 24341;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1095:6:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1080:26:135";
                };
                readonly returnParameters: {
                    readonly id: 24344;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1115:0:135";
                };
                readonly scope: 24382;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 24352;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1122:101:135";
                readonly nodes: readonly [];
                readonly functionSelector: "68c2ecb8";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateTimeRemaining";
                readonly nameLocation: "1131:22:135";
                readonly parameters: {
                    readonly id: 24348;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24347;
                        readonly mutability: "mutable";
                        readonly name: "_maturityTime";
                        readonly nameLocation: "1171:13:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24352;
                        readonly src: "1163:21:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24346;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1163:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1153:37:135";
                };
                readonly returnParameters: {
                    readonly id: 24351;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24350;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24352;
                        readonly src: "1214:7:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24349;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1214:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1213:9:135";
                };
                readonly scope: 24382;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 24359;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1229:107:135";
                readonly nodes: readonly [];
                readonly functionSelector: "ca6d38f7";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateTimeRemainingScaled";
                readonly nameLocation: "1238:28:135";
                readonly parameters: {
                    readonly id: 24355;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24354;
                        readonly mutability: "mutable";
                        readonly name: "_maturityTime";
                        readonly nameLocation: "1284:13:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24359;
                        readonly src: "1276:21:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24353;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1276:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1266:37:135";
                };
                readonly returnParameters: {
                    readonly id: 24358;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24357;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24359;
                        readonly src: "1327:7:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24356;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1327:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1326:9:135";
                };
                readonly scope: 24382;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 24364;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1342:60:135";
                readonly nodes: readonly [];
                readonly functionSelector: "907c0f92";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "latestCheckpoint";
                readonly nameLocation: "1351:16:135";
                readonly parameters: {
                    readonly id: 24360;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1367:2:135";
                };
                readonly returnParameters: {
                    readonly id: 24363;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24362;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24364;
                        readonly src: "1393:7:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24361;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1393:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1392:9:135";
                };
                readonly scope: 24382;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 24369;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1408:62:135";
                readonly nodes: readonly [];
                readonly functionSelector: "ced09112";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "updateLiquidity";
                readonly nameLocation: "1417:15:135";
                readonly parameters: {
                    readonly id: 24367;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24366;
                        readonly mutability: "mutable";
                        readonly name: "shareReservesDelta";
                        readonly nameLocation: "1441:18:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24369;
                        readonly src: "1433:26:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24365;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1433:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1432:28:135";
                };
                readonly returnParameters: {
                    readonly id: 24368;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1469:0:135";
                };
                readonly scope: 24382;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 24376;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1476:75:135";
                readonly nodes: readonly [];
                readonly functionSelector: "8392b8c0";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "setReserves";
                readonly nameLocation: "1485:11:135";
                readonly parameters: {
                    readonly id: 24374;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24371;
                        readonly mutability: "mutable";
                        readonly name: "shareReserves";
                        readonly nameLocation: "1505:13:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24376;
                        readonly src: "1497:21:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24370;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1497:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 24373;
                        readonly mutability: "mutable";
                        readonly name: "bondReserves";
                        readonly nameLocation: "1528:12:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24376;
                        readonly src: "1520:20:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24372;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1520:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1496:45:135";
                };
                readonly returnParameters: {
                    readonly id: 24375;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1550:0:135";
                };
                readonly scope: 24382;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 24381;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1557:68:135";
                readonly nodes: readonly [];
                readonly functionSelector: "8e67f87e";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getGovernanceFeesAccrued";
                readonly nameLocation: "1566:24:135";
                readonly parameters: {
                    readonly id: 24377;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1590:2:135";
                };
                readonly returnParameters: {
                    readonly id: 24380;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24379;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24381;
                        readonly src: "1616:7:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24378;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1616:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1615:9:135";
                };
                readonly scope: 24382;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [];
            readonly canonicalName: "IMockHyperdrive";
            readonly contractDependencies: readonly [];
            readonly contractKind: "interface";
            readonly fullyImplemented: false;
            readonly linearizedBaseContracts: readonly [24382];
            readonly name: "IMockHyperdrive";
            readonly nameLocation: "1043:15:135";
            readonly scope: 25325;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [];
        }, {
            readonly id: 24906;
            readonly nodeType: "ContractDefinition";
            readonly src: "1629:7615:135";
            readonly nodes: readonly [{
                readonly id: 24387;
                readonly nodeType: "UsingForDirective";
                readonly src: "1690:33:135";
                readonly nodes: readonly [];
                readonly global: false;
                readonly libraryName: {
                    readonly id: 24385;
                    readonly name: "FixedPointMath";
                    readonly nameLocations: readonly ["1696:14:135"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 18822;
                    readonly src: "1696:14:135";
                };
                readonly typeName: {
                    readonly id: 24386;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1715:7:135";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
            }, {
                readonly id: 24389;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1729:28:135";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly mutability: "mutable";
                readonly name: "totalShares";
                readonly nameLocation: "1746:11:135";
                readonly scope: 24906;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 24388;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1729:7:135";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 24522;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2054:1483:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 24521;
                    readonly nodeType: "Block";
                    readonly src: "2194:1343:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [24403];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 24403;
                            readonly mutability: "mutable";
                            readonly name: "assets";
                            readonly nameLocation: "2261:6:135";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 24521;
                            readonly src: "2253:14:135";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 24402;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2253:7:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 24404;
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "2253:14:135";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                            readonly id: 24410;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly arguments: readonly [{
                                    readonly id: 24407;
                                    readonly name: "_baseToken";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17532;
                                    readonly src: "2289:10:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IERC20_$9666";
                                        readonly typeString: "contract IERC20";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_contract$_IERC20_$9666";
                                        readonly typeString: "contract IERC20";
                                    }];
                                    readonly id: 24406;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "2281:7:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_address_$";
                                        readonly typeString: "type(address)";
                                    };
                                    readonly typeName: {
                                        readonly id: 24405;
                                        readonly name: "address";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "2281:7:135";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 24408;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "2281:19:135";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "==";
                            readonly rightExpression: {
                                readonly id: 24409;
                                readonly name: "ETH";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18015;
                                readonly src: "2304:3:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "2281:26:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly falseBody: {
                            readonly id: 24430;
                            readonly nodeType: "Block";
                            readonly src: "2370:69:135";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 24428;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 24420;
                                        readonly name: "assets";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24403;
                                        readonly src: "2384:6:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [{
                                                readonly id: 24425;
                                                readonly name: "this";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -28;
                                                readonly src: "2422:4:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$24906";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$24906";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                }];
                                                readonly id: 24424;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "2414:7:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_address_$";
                                                    readonly typeString: "type(address)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 24423;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "2414:7:135";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 24426;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "2414:13:135";
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
                                                readonly id: 24421;
                                                readonly name: "_baseToken";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 17532;
                                                readonly src: "2393:10:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_IERC20_$9666";
                                                    readonly typeString: "contract IERC20";
                                                };
                                            };
                                            readonly id: 24422;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "2404:9:135";
                                            readonly memberName: "balanceOf";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 9665;
                                            readonly src: "2393:20:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_external_view$_t_address_$returns$_t_uint256_$";
                                                readonly typeString: "function (address) view external returns (uint256)";
                                            };
                                        };
                                        readonly id: 24427;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "2393:35:135";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "2384:44:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 24429;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "2384:44:135";
                            }];
                        };
                        readonly id: 24431;
                        readonly nodeType: "IfStatement";
                        readonly src: "2277:162:135";
                        readonly trueBody: {
                            readonly id: 24419;
                            readonly nodeType: "Block";
                            readonly src: "2309:55:135";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 24417;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 24411;
                                        readonly name: "assets";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24403;
                                        readonly src: "2323:6:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly expression: {
                                            readonly arguments: readonly [{
                                                readonly id: 24414;
                                                readonly name: "this";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -28;
                                                readonly src: "2340:4:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$24906";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$24906";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                }];
                                                readonly id: 24413;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "2332:7:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_address_$";
                                                    readonly typeString: "type(address)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 24412;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "2332:7:135";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 24415;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "2332:13:135";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        };
                                        readonly id: 24416;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "2346:7:135";
                                        readonly memberName: "balance";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "2332:21:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "2323:30:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 24418;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "2323:30:135";
                            }];
                        };
                    }, {
                        readonly assignments: readonly [24433];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 24433;
                            readonly mutability: "mutable";
                            readonly name: "success";
                            readonly nameLocation: "2585:7:135";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 24521;
                            readonly src: "2580:12:135";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly typeName: {
                                readonly id: 24432;
                                readonly name: "bool";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2580:4:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 24435;
                        readonly initialValue: {
                            readonly hexValue: "74727565";
                            readonly id: 24434;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "bool";
                            readonly lValueRequested: false;
                            readonly nodeType: "Literal";
                            readonly src: "2595:4:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly value: "true";
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "2580:19:135";
                    }, {
                        readonly assignments: readonly [24437];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 24437;
                            readonly mutability: "mutable";
                            readonly name: "refund";
                            readonly nameLocation: "2617:6:135";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 24521;
                            readonly src: "2609:14:135";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 24436;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2609:7:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 24438;
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "2609:14:135";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                            readonly id: 24444;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly arguments: readonly [{
                                    readonly id: 24441;
                                    readonly name: "_baseToken";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17532;
                                    readonly src: "2645:10:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IERC20_$9666";
                                        readonly typeString: "contract IERC20";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_contract$_IERC20_$9666";
                                        readonly typeString: "contract IERC20";
                                    }];
                                    readonly id: 24440;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "2637:7:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_address_$";
                                        readonly typeString: "type(address)";
                                    };
                                    readonly typeName: {
                                        readonly id: 24439;
                                        readonly name: "address";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "2637:7:135";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 24442;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "2637:19:135";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "==";
                            readonly rightExpression: {
                                readonly id: 24443;
                                readonly name: "ETH";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18015;
                                readonly src: "2660:3:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "2637:26:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly falseBody: {
                            readonly id: 24477;
                            readonly nodeType: "Block";
                            readonly src: "2838:160:135";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 24475;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 24464;
                                        readonly name: "success";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24433;
                                        readonly src: "2852:7:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly expression: {
                                                readonly id: 24467;
                                                readonly name: "msg";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -15;
                                                readonly src: "2903:3:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_magic_message";
                                                    readonly typeString: "msg";
                                                };
                                            };
                                            readonly id: 24468;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "2907:6:135";
                                            readonly memberName: "sender";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "2903:10:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly id: 24471;
                                                readonly name: "this";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -28;
                                                readonly src: "2939:4:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$24906";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$24906";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                }];
                                                readonly id: 24470;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "2931:7:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_address_$";
                                                    readonly typeString: "type(address)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 24469;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "2931:7:135";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 24472;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "2931:13:135";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        }, {
                                            readonly id: 24473;
                                            readonly name: "_baseAmount";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 24392;
                                            readonly src: "2962:11:135";
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
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            }, {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            }];
                                            readonly expression: {
                                                readonly id: 24465;
                                                readonly name: "_baseToken";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 17532;
                                                readonly src: "2862:10:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_IERC20_$9666";
                                                    readonly typeString: "contract IERC20";
                                                };
                                            };
                                            readonly id: 24466;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "2873:12:135";
                                            readonly memberName: "transferFrom";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 9623;
                                            readonly src: "2862:23:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$";
                                                readonly typeString: "function (address,address,uint256) external returns (bool)";
                                            };
                                        };
                                        readonly id: 24474;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "2862:125:135";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly src: "2852:135:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly id: 24476;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "2852:135:135";
                            }];
                        };
                        readonly id: 24478;
                        readonly nodeType: "IfStatement";
                        readonly src: "2633:365:135";
                        readonly trueBody: {
                            readonly id: 24463;
                            readonly nodeType: "Block";
                            readonly src: "2665:167:135";
                            readonly statements: readonly [{
                                readonly condition: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 24448;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly expression: {
                                            readonly id: 24445;
                                            readonly name: "msg";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -15;
                                            readonly src: "2683:3:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_magic_message";
                                                readonly typeString: "msg";
                                            };
                                        };
                                        readonly id: 24446;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "2687:5:135";
                                        readonly memberName: "value";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "2683:9:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "<";
                                    readonly rightExpression: {
                                        readonly id: 24447;
                                        readonly name: "_baseAmount";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24392;
                                        readonly src: "2695:11:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "2683:23:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly id: 24455;
                                readonly nodeType: "IfStatement";
                                readonly src: "2679:97:135";
                                readonly trueBody: {
                                    readonly id: 24454;
                                    readonly nodeType: "Block";
                                    readonly src: "2708:68:135";
                                    readonly statements: readonly [{
                                        readonly errorCall: {
                                            readonly arguments: readonly [];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [];
                                                readonly expression: {
                                                    readonly id: 24449;
                                                    readonly name: "IHyperdrive";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 10351;
                                                    readonly src: "2733:11:135";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$10351_$";
                                                        readonly typeString: "type(contract IHyperdrive)";
                                                    };
                                                };
                                                readonly id: 24451;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "2745:14:135";
                                                readonly memberName: "TransferFailed";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 10296;
                                                readonly src: "2733:26:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                                    readonly typeString: "function () pure";
                                                };
                                            };
                                            readonly id: 24452;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "functionCall";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "2733:28:135";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_tuple$__$";
                                                readonly typeString: "tuple()";
                                            };
                                        };
                                        readonly id: 24453;
                                        readonly nodeType: "RevertStatement";
                                        readonly src: "2726:35:135";
                                    }];
                                };
                            }, {
                                readonly expression: {
                                    readonly id: 24461;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 24456;
                                        readonly name: "refund";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24437;
                                        readonly src: "2789:6:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                        readonly id: 24460;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly expression: {
                                                readonly id: 24457;
                                                readonly name: "msg";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -15;
                                                readonly src: "2798:3:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_magic_message";
                                                    readonly typeString: "msg";
                                                };
                                            };
                                            readonly id: 24458;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "2802:5:135";
                                            readonly memberName: "value";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "2798:9:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "-";
                                        readonly rightExpression: {
                                            readonly id: 24459;
                                            readonly name: "_baseAmount";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 24392;
                                            readonly src: "2810:11:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly src: "2798:23:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "2789:32:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 24462;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "2789:32:135";
                            }];
                        };
                    }, {
                        readonly condition: {
                            readonly id: 24480;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "UnaryOperation";
                            readonly operator: "!";
                            readonly prefix: true;
                            readonly src: "3011:8:135";
                            readonly subExpression: {
                                readonly id: 24479;
                                readonly name: "success";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24433;
                                readonly src: "3012:7:135";
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
                        readonly id: 24487;
                        readonly nodeType: "IfStatement";
                        readonly src: "3007:74:135";
                        readonly trueBody: {
                            readonly id: 24486;
                            readonly nodeType: "Block";
                            readonly src: "3021:60:135";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 24481;
                                            readonly name: "IHyperdrive";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 10351;
                                            readonly src: "3042:11:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$10351_$";
                                                readonly typeString: "type(contract IHyperdrive)";
                                            };
                                        };
                                        readonly id: 24483;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "3054:14:135";
                                        readonly memberName: "TransferFailed";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10296;
                                        readonly src: "3042:26:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 24484;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "3042:28:135";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 24485;
                                readonly nodeType: "RevertStatement";
                                readonly src: "3035:35:135";
                            }];
                        };
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 24490;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 24488;
                                readonly name: "totalShares";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24389;
                                readonly src: "3216:11:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "==";
                            readonly rightExpression: {
                                readonly hexValue: "30";
                                readonly id: 24489;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "3231:1:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly src: "3216:16:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly falseBody: {
                            readonly id: 24519;
                            readonly nodeType: "Block";
                            readonly src: "3365:166:135";
                            readonly statements: readonly [{
                                readonly assignments: readonly [24504];
                                readonly declarations: readonly [{
                                    readonly constant: false;
                                    readonly id: 24504;
                                    readonly mutability: "mutable";
                                    readonly name: "newShares";
                                    readonly nameLocation: "3387:9:135";
                                    readonly nodeType: "VariableDeclaration";
                                    readonly scope: 24519;
                                    readonly src: "3379:17:135";
                                    readonly stateVariable: false;
                                    readonly storageLocation: "default";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly typeName: {
                                        readonly id: 24503;
                                        readonly name: "uint256";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "3379:7:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly visibility: "internal";
                                }];
                                readonly id: 24510;
                                readonly initialValue: {
                                    readonly arguments: readonly [{
                                        readonly id: 24507;
                                        readonly name: "totalShares";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24389;
                                        readonly src: "3422:11:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }, {
                                        readonly id: 24508;
                                        readonly name: "assets";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24403;
                                        readonly src: "3435:6:135";
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
                                        }];
                                        readonly expression: {
                                            readonly id: 24505;
                                            readonly name: "_baseAmount";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 24392;
                                            readonly src: "3399:11:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly id: 24506;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "3411:10:135";
                                        readonly memberName: "mulDivDown";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 18067;
                                        readonly src: "3399:22:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                            readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                        };
                                    };
                                    readonly id: 24509;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "3399:43:135";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "VariableDeclarationStatement";
                                readonly src: "3379:63:135";
                            }, {
                                readonly expression: {
                                    readonly id: 24513;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 24511;
                                        readonly name: "totalShares";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24389;
                                        readonly src: "3456:11:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "+=";
                                    readonly rightHandSide: {
                                        readonly id: 24512;
                                        readonly name: "newShares";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24504;
                                        readonly src: "3471:9:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "3456:24:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 24514;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "3456:24:135";
                            }, {
                                readonly expression: {
                                    readonly components: readonly [{
                                        readonly id: 24515;
                                        readonly name: "newShares";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24504;
                                        readonly src: "3502:9:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }, {
                                        readonly id: 24516;
                                        readonly name: "refund";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24437;
                                        readonly src: "3513:6:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }];
                                    readonly id: 24517;
                                    readonly isConstant: false;
                                    readonly isInlineArray: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "TupleExpression";
                                    readonly src: "3501:19:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$";
                                        readonly typeString: "tuple(uint256,uint256)";
                                    };
                                };
                                readonly functionReturnParameters: 24401;
                                readonly id: 24518;
                                readonly nodeType: "Return";
                                readonly src: "3494:26:135";
                            }];
                        };
                        readonly id: 24520;
                        readonly nodeType: "IfStatement";
                        readonly src: "3212:319:135";
                        readonly trueBody: {
                            readonly id: 24502;
                            readonly nodeType: "Block";
                            readonly src: "3234:125:135";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 24496;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 24491;
                                        readonly name: "totalShares";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24389;
                                        readonly src: "3248:11:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly id: 24494;
                                            readonly name: "_initialVaultSharePrice";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 17560;
                                            readonly src: "3282:23:135";
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
                                                readonly id: 24492;
                                                readonly name: "_baseAmount";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 24392;
                                                readonly src: "3262:11:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly id: 24493;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "3274:7:135";
                                            readonly memberName: "divDown";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 18103;
                                            readonly src: "3262:19:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                                readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                            };
                                        };
                                        readonly id: 24495;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "3262:44:135";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "3248:58:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 24497;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "3248:58:135";
                            }, {
                                readonly expression: {
                                    readonly components: readonly [{
                                        readonly id: 24498;
                                        readonly name: "totalShares";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24389;
                                        readonly src: "3328:11:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }, {
                                        readonly id: 24499;
                                        readonly name: "refund";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24437;
                                        readonly src: "3341:6:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }];
                                    readonly id: 24500;
                                    readonly isConstant: false;
                                    readonly isInlineArray: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "TupleExpression";
                                    readonly src: "3327:21:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$";
                                        readonly typeString: "tuple(uint256,uint256)";
                                    };
                                };
                                readonly functionReturnParameters: 24401;
                                readonly id: 24501;
                                readonly nodeType: "Return";
                                readonly src: "3320:28:135";
                            }];
                        };
                    }];
                };
                readonly baseFunctions: readonly [12702];
                readonly documentation: {
                    readonly id: 24390;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1764:285:135";
                    readonly text: "@dev Accepts a deposit from the user in base.\n @param _baseAmount The base amount to deposit.\n @return The shares that were minted in the deposit.\n @return The amount of ETH to refund. Since this yield source isn't\n         payable, this is always zero.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_depositWithBase";
                readonly nameLocation: "2063:16:135";
                readonly overrides: {
                    readonly id: 24396;
                    readonly nodeType: "OverrideSpecifier";
                    readonly overrides: readonly [];
                    readonly src: "2158:8:135";
                };
                readonly parameters: {
                    readonly id: 24395;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24392;
                        readonly mutability: "mutable";
                        readonly name: "_baseAmount";
                        readonly nameLocation: "2097:11:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24522;
                        readonly src: "2089:19:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24391;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2089:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 24394;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24522;
                        readonly src: "2118:14:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_calldata_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 24393;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2118:5:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2079:69:135";
                };
                readonly returnParameters: {
                    readonly id: 24401;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24398;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24522;
                        readonly src: "2176:7:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24397;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2176:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 24400;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24522;
                        readonly src: "2185:7:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24399;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2185:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2175:18:135";
                };
                readonly scope: 24906;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 24617;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3655:1226:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 24616;
                    readonly nodeType: "Block";
                    readonly src: "3771:1110:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [24532];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 24532;
                            readonly mutability: "mutable";
                            readonly name: "baseAmount";
                            readonly nameLocation: "3842:10:135";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 24616;
                            readonly src: "3834:18:135";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 24531;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "3834:7:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 24536;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 24534;
                                readonly name: "_shareAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24525;
                                readonly src: "3870:12:135";
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
                                readonly id: 24533;
                                readonly name: "_convertToBase";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [24841];
                                readonly referencedDeclaration: 24841;
                                readonly src: "3855:14:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256) view returns (uint256)";
                                };
                            };
                            readonly id: 24535;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3855:28:135";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "3834:49:135";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 24539;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 24537;
                                readonly name: "totalShares";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24389;
                                readonly src: "4019:11:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "==";
                            readonly rightExpression: {
                                readonly hexValue: "30";
                                readonly id: 24538;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "4034:1:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly src: "4019:16:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly falseBody: {
                            readonly id: 24558;
                            readonly nodeType: "Block";
                            readonly src: "4125:111:135";
                            readonly statements: readonly [{
                                readonly assignments: readonly [24549];
                                readonly declarations: readonly [{
                                    readonly constant: false;
                                    readonly id: 24549;
                                    readonly mutability: "mutable";
                                    readonly name: "newShares";
                                    readonly nameLocation: "4147:9:135";
                                    readonly nodeType: "VariableDeclaration";
                                    readonly scope: 24558;
                                    readonly src: "4139:17:135";
                                    readonly stateVariable: false;
                                    readonly storageLocation: "default";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly typeName: {
                                        readonly id: 24548;
                                        readonly name: "uint256";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "4139:7:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly visibility: "internal";
                                }];
                                readonly id: 24553;
                                readonly initialValue: {
                                    readonly arguments: readonly [{
                                        readonly id: 24551;
                                        readonly name: "baseAmount";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24532;
                                        readonly src: "4176:10:135";
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
                                        readonly id: 24550;
                                        readonly name: "_convertToShares";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [24887];
                                        readonly referencedDeclaration: 24887;
                                        readonly src: "4159:16:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_view$_t_uint256_$returns$_t_uint256_$";
                                            readonly typeString: "function (uint256) view returns (uint256)";
                                        };
                                    };
                                    readonly id: 24552;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "4159:28:135";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "VariableDeclarationStatement";
                                readonly src: "4139:48:135";
                            }, {
                                readonly expression: {
                                    readonly id: 24556;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 24554;
                                        readonly name: "totalShares";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24389;
                                        readonly src: "4201:11:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "+=";
                                    readonly rightHandSide: {
                                        readonly id: 24555;
                                        readonly name: "newShares";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24549;
                                        readonly src: "4216:9:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "4201:24:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 24557;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "4201:24:135";
                            }];
                        };
                        readonly id: 24559;
                        readonly nodeType: "IfStatement";
                        readonly src: "4015:221:135";
                        readonly trueBody: {
                            readonly id: 24547;
                            readonly nodeType: "Block";
                            readonly src: "4037:82:135";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 24545;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 24540;
                                        readonly name: "totalShares";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24389;
                                        readonly src: "4051:11:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly id: 24543;
                                            readonly name: "_initialVaultSharePrice";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 17560;
                                            readonly src: "4084:23:135";
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
                                                readonly id: 24541;
                                                readonly name: "baseAmount";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 24532;
                                                readonly src: "4065:10:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly id: 24542;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "4076:7:135";
                                            readonly memberName: "divDown";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 18103;
                                            readonly src: "4065:18:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                                readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                            };
                                        };
                                        readonly id: 24544;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "4065:43:135";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "4051:57:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 24546;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "4051:57:135";
                            }];
                        };
                    }, {
                        readonly assignments: readonly [24561];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 24561;
                            readonly mutability: "mutable";
                            readonly name: "success";
                            readonly nameLocation: "4382:7:135";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 24616;
                            readonly src: "4377:12:135";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly typeName: {
                                readonly id: 24560;
                                readonly name: "bool";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "4377:4:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 24563;
                        readonly initialValue: {
                            readonly hexValue: "74727565";
                            readonly id: 24562;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "bool";
                            readonly lValueRequested: false;
                            readonly nodeType: "Literal";
                            readonly src: "4392:4:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly value: "true";
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "4377:19:135";
                    }, {
                        readonly assignments: readonly [24565];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 24565;
                            readonly mutability: "mutable";
                            readonly name: "refund";
                            readonly nameLocation: "4414:6:135";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 24616;
                            readonly src: "4406:14:135";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 24564;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "4406:7:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 24566;
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "4406:14:135";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                            readonly id: 24572;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly arguments: readonly [{
                                    readonly id: 24569;
                                    readonly name: "_baseToken";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17532;
                                    readonly src: "4442:10:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IERC20_$9666";
                                        readonly typeString: "contract IERC20";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_contract$_IERC20_$9666";
                                        readonly typeString: "contract IERC20";
                                    }];
                                    readonly id: 24568;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "4434:7:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_address_$";
                                        readonly typeString: "type(address)";
                                    };
                                    readonly typeName: {
                                        readonly id: 24567;
                                        readonly name: "address";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "4434:7:135";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 24570;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "4434:19:135";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "==";
                            readonly rightExpression: {
                                readonly id: 24571;
                                readonly name: "ETH";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18015;
                                readonly src: "4457:3:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "4434:26:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly falseBody: {
                            readonly id: 24605;
                            readonly nodeType: "Block";
                            readonly src: "4633:159:135";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 24603;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 24592;
                                        readonly name: "success";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24561;
                                        readonly src: "4647:7:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly expression: {
                                                readonly id: 24595;
                                                readonly name: "msg";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -15;
                                                readonly src: "4698:3:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_magic_message";
                                                    readonly typeString: "msg";
                                                };
                                            };
                                            readonly id: 24596;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "4702:6:135";
                                            readonly memberName: "sender";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "4698:10:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly id: 24599;
                                                readonly name: "this";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -28;
                                                readonly src: "4734:4:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$24906";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$24906";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                }];
                                                readonly id: 24598;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "4726:7:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_address_$";
                                                    readonly typeString: "type(address)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 24597;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "4726:7:135";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 24600;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "4726:13:135";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        }, {
                                            readonly id: 24601;
                                            readonly name: "baseAmount";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 24532;
                                            readonly src: "4757:10:135";
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
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            }, {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            }];
                                            readonly expression: {
                                                readonly id: 24593;
                                                readonly name: "_baseToken";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 17532;
                                                readonly src: "4657:10:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_IERC20_$9666";
                                                    readonly typeString: "contract IERC20";
                                                };
                                            };
                                            readonly id: 24594;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "4668:12:135";
                                            readonly memberName: "transferFrom";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 9623;
                                            readonly src: "4657:23:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$";
                                                readonly typeString: "function (address,address,uint256) external returns (bool)";
                                            };
                                        };
                                        readonly id: 24602;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "4657:124:135";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly src: "4647:134:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly id: 24604;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "4647:134:135";
                            }];
                        };
                        readonly id: 24606;
                        readonly nodeType: "IfStatement";
                        readonly src: "4430:362:135";
                        readonly trueBody: {
                            readonly id: 24591;
                            readonly nodeType: "Block";
                            readonly src: "4462:165:135";
                            readonly statements: readonly [{
                                readonly condition: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 24576;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly expression: {
                                            readonly id: 24573;
                                            readonly name: "msg";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -15;
                                            readonly src: "4480:3:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_magic_message";
                                                readonly typeString: "msg";
                                            };
                                        };
                                        readonly id: 24574;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "4484:5:135";
                                        readonly memberName: "value";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "4480:9:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "<";
                                    readonly rightExpression: {
                                        readonly id: 24575;
                                        readonly name: "baseAmount";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24532;
                                        readonly src: "4492:10:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "4480:22:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly id: 24583;
                                readonly nodeType: "IfStatement";
                                readonly src: "4476:96:135";
                                readonly trueBody: {
                                    readonly id: 24582;
                                    readonly nodeType: "Block";
                                    readonly src: "4504:68:135";
                                    readonly statements: readonly [{
                                        readonly errorCall: {
                                            readonly arguments: readonly [];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [];
                                                readonly expression: {
                                                    readonly id: 24577;
                                                    readonly name: "IHyperdrive";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 10351;
                                                    readonly src: "4529:11:135";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$10351_$";
                                                        readonly typeString: "type(contract IHyperdrive)";
                                                    };
                                                };
                                                readonly id: 24579;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "4541:14:135";
                                                readonly memberName: "TransferFailed";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 10296;
                                                readonly src: "4529:26:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                                    readonly typeString: "function () pure";
                                                };
                                            };
                                            readonly id: 24580;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "functionCall";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "4529:28:135";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_tuple$__$";
                                                readonly typeString: "tuple()";
                                            };
                                        };
                                        readonly id: 24581;
                                        readonly nodeType: "RevertStatement";
                                        readonly src: "4522:35:135";
                                    }];
                                };
                            }, {
                                readonly expression: {
                                    readonly id: 24589;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 24584;
                                        readonly name: "refund";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24565;
                                        readonly src: "4585:6:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                        readonly id: 24588;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly expression: {
                                                readonly id: 24585;
                                                readonly name: "msg";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -15;
                                                readonly src: "4594:3:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_magic_message";
                                                    readonly typeString: "msg";
                                                };
                                            };
                                            readonly id: 24586;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "4598:5:135";
                                            readonly memberName: "value";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "4594:9:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "-";
                                        readonly rightExpression: {
                                            readonly id: 24587;
                                            readonly name: "baseAmount";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 24532;
                                            readonly src: "4606:10:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly src: "4594:22:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "4585:31:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 24590;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "4585:31:135";
                            }];
                        };
                    }, {
                        readonly condition: {
                            readonly id: 24608;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "UnaryOperation";
                            readonly operator: "!";
                            readonly prefix: true;
                            readonly src: "4805:8:135";
                            readonly subExpression: {
                                readonly id: 24607;
                                readonly name: "success";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24561;
                                readonly src: "4806:7:135";
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
                        readonly id: 24615;
                        readonly nodeType: "IfStatement";
                        readonly src: "4801:74:135";
                        readonly trueBody: {
                            readonly id: 24614;
                            readonly nodeType: "Block";
                            readonly src: "4815:60:135";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 24609;
                                            readonly name: "IHyperdrive";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 10351;
                                            readonly src: "4836:11:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$10351_$";
                                                readonly typeString: "type(contract IHyperdrive)";
                                            };
                                        };
                                        readonly id: 24611;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "4848:14:135";
                                        readonly memberName: "TransferFailed";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10296;
                                        readonly src: "4836:26:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 24612;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "4836:28:135";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 24613;
                                readonly nodeType: "RevertStatement";
                                readonly src: "4829:35:135";
                            }];
                        };
                    }];
                };
                readonly baseFunctions: readonly [12710];
                readonly documentation: {
                    readonly id: 24523;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3543:107:135";
                    readonly text: "@dev Process a deposit in vault shares.\n @param _shareAmount The vault shares amount to deposit.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_depositWithShares";
                readonly nameLocation: "3664:18:135";
                readonly overrides: {
                    readonly id: 24529;
                    readonly nodeType: "OverrideSpecifier";
                    readonly overrides: readonly [];
                    readonly src: "3762:8:135";
                };
                readonly parameters: {
                    readonly id: 24528;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24525;
                        readonly mutability: "mutable";
                        readonly name: "_shareAmount";
                        readonly nameLocation: "3700:12:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24617;
                        readonly src: "3692:20:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24524;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3692:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 24527;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24617;
                        readonly src: "3722:14:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_calldata_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 24526;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3722:5:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3682:70:135";
                };
                readonly returnParameters: {
                    readonly id: 24530;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "3771:0:135";
                };
                readonly scope: 24906;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 24694;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5177:986:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 24693;
                    readonly nodeType: "Block";
                    readonly src: "5356:807:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 24637;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 24630;
                                readonly name: "_shareAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24620;
                                readonly src: "5478:12:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly condition: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 24633;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 24631;
                                        readonly name: "_shareAmount";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24620;
                                        readonly src: "5493:12:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: ">";
                                    readonly rightExpression: {
                                        readonly id: 24632;
                                        readonly name: "totalShares";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24389;
                                        readonly src: "5508:11:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "5493:26:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly falseExpression: {
                                    readonly id: 24635;
                                    readonly name: "_shareAmount";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 24620;
                                    readonly src: "5536:12:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 24636;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "Conditional";
                                readonly src: "5493:55:135";
                                readonly trueExpression: {
                                    readonly id: 24634;
                                    readonly name: "totalShares";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 24389;
                                    readonly src: "5522:11:135";
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
                            readonly src: "5478:70:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 24638;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "5478:70:135";
                    }, {
                        readonly assignments: readonly [24640];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 24640;
                            readonly mutability: "mutable";
                            readonly name: "withdrawValue";
                            readonly nameLocation: "5607:13:135";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 24693;
                            readonly src: "5599:21:135";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 24639;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "5599:7:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 24644;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 24642;
                                readonly name: "_shareAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24620;
                                readonly src: "5638:12:135";
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
                                readonly id: 24641;
                                readonly name: "_convertToBase";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [24841];
                                readonly referencedDeclaration: 24841;
                                readonly src: "5623:14:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256) view returns (uint256)";
                                };
                            };
                            readonly id: 24643;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "5623:28:135";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "5599:52:135";
                    }, {
                        readonly expression: {
                            readonly id: 24647;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 24645;
                                readonly name: "totalShares";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24389;
                                readonly src: "5740:11:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "-=";
                            readonly rightHandSide: {
                                readonly id: 24646;
                                readonly name: "_shareAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24620;
                                readonly src: "5755:12:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "5740:27:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 24648;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "5740:27:135";
                    }, {
                        readonly assignments: readonly [24650];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 24650;
                            readonly mutability: "mutable";
                            readonly name: "success";
                            readonly nameLocation: "5782:7:135";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 24693;
                            readonly src: "5777:12:135";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly typeName: {
                                readonly id: 24649;
                                readonly name: "bool";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "5777:4:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 24651;
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "5777:12:135";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                            readonly id: 24657;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly arguments: readonly [{
                                    readonly id: 24654;
                                    readonly name: "_baseToken";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17532;
                                    readonly src: "5811:10:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IERC20_$9666";
                                        readonly typeString: "contract IERC20";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_contract$_IERC20_$9666";
                                        readonly typeString: "contract IERC20";
                                    }];
                                    readonly id: 24653;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "5803:7:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_address_$";
                                        readonly typeString: "type(address)";
                                    };
                                    readonly typeName: {
                                        readonly id: 24652;
                                        readonly name: "address";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "5803:7:135";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 24655;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "5803:19:135";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "==";
                            readonly rightExpression: {
                                readonly id: 24656;
                                readonly name: "ETH";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18015;
                                readonly src: "5826:3:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "5803:26:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly falseBody: {
                            readonly id: 24680;
                            readonly nodeType: "Block";
                            readonly src: "5960:83:135";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 24678;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 24672;
                                        readonly name: "success";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24650;
                                        readonly src: "5974:7:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly id: 24675;
                                            readonly name: "_destination";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 24622;
                                            readonly src: "6004:12:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        }, {
                                            readonly id: 24676;
                                            readonly name: "withdrawValue";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 24640;
                                            readonly src: "6018:13:135";
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
                                                readonly id: 24673;
                                                readonly name: "_baseToken";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 17532;
                                                readonly src: "5984:10:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_IERC20_$9666";
                                                    readonly typeString: "contract IERC20";
                                                };
                                            };
                                            readonly id: 24674;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "5995:8:135";
                                            readonly memberName: "transfer";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 9611;
                                            readonly src: "5984:19:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$";
                                                readonly typeString: "function (address,uint256) external returns (bool)";
                                            };
                                        };
                                        readonly id: 24677;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "5984:48:135";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly src: "5974:58:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly id: 24679;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "5974:58:135";
                            }];
                        };
                        readonly id: 24681;
                        readonly nodeType: "IfStatement";
                        readonly src: "5799:244:135";
                        readonly trueBody: {
                            readonly id: 24671;
                            readonly nodeType: "Block";
                            readonly src: "5831:123:135";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 24669;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly components: readonly [{
                                            readonly id: 24658;
                                            readonly name: "success";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 24650;
                                            readonly src: "5846:7:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bool";
                                                readonly typeString: "bool";
                                            };
                                        }, null];
                                        readonly id: 24659;
                                        readonly isConstant: false;
                                        readonly isInlineArray: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: true;
                                        readonly nodeType: "TupleExpression";
                                        readonly src: "5845:11:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_tuple$_t_bool_$__$";
                                            readonly typeString: "tuple(bool,)";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly hexValue: "";
                                            readonly id: 24667;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "string";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "5927:2:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470";
                                                readonly typeString: "literal_string \"\"";
                                            };
                                            readonly value: "";
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470";
                                                readonly typeString: "literal_string \"\"";
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470";
                                                    readonly typeString: "literal_string \"\"";
                                                }];
                                                readonly expression: {
                                                    readonly arguments: readonly [{
                                                        readonly id: 24662;
                                                        readonly name: "_destination";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 24622;
                                                        readonly src: "5867:12:135";
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
                                                        readonly id: 24661;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: true;
                                                        readonly lValueRequested: false;
                                                        readonly nodeType: "ElementaryTypeNameExpression";
                                                        readonly src: "5859:8:135";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_type$_t_address_payable_$";
                                                            readonly typeString: "type(address payable)";
                                                        };
                                                        readonly typeName: {
                                                            readonly id: 24660;
                                                            readonly name: "address";
                                                            readonly nodeType: "ElementaryTypeName";
                                                            readonly src: "5859:8:135";
                                                            readonly stateMutability: "payable";
                                                            readonly typeDescriptions: {};
                                                        };
                                                    };
                                                    readonly id: 24663;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly kind: "typeConversion";
                                                    readonly lValueRequested: false;
                                                    readonly nameLocations: readonly [];
                                                    readonly names: readonly [];
                                                    readonly nodeType: "FunctionCall";
                                                    readonly src: "5859:21:135";
                                                    readonly tryCall: false;
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_address_payable";
                                                        readonly typeString: "address payable";
                                                    };
                                                };
                                                readonly id: 24664;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "5881:4:135";
                                                readonly memberName: "call";
                                                readonly nodeType: "MemberAccess";
                                                readonly src: "5859:26:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$";
                                                    readonly typeString: "function (bytes memory) payable returns (bool,bytes memory)";
                                                };
                                            };
                                            readonly id: 24666;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly names: readonly ["value"];
                                            readonly nodeType: "FunctionCallOptions";
                                            readonly options: readonly [{
                                                readonly id: 24665;
                                                readonly name: "withdrawValue";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 24640;
                                                readonly src: "5894:13:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            }];
                                            readonly src: "5859:50:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$value";
                                                readonly typeString: "function (bytes memory) payable returns (bool,bytes memory)";
                                            };
                                        };
                                        readonly id: 24668;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "5859:84:135";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_tuple$_t_bool_$_t_bytes_memory_ptr_$";
                                            readonly typeString: "tuple(bool,bytes memory)";
                                        };
                                    };
                                    readonly src: "5845:98:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 24670;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "5845:98:135";
                            }];
                        };
                    }, {
                        readonly condition: {
                            readonly id: 24683;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "UnaryOperation";
                            readonly operator: "!";
                            readonly prefix: true;
                            readonly src: "6056:8:135";
                            readonly subExpression: {
                                readonly id: 24682;
                                readonly name: "success";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24650;
                                readonly src: "6057:7:135";
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
                        readonly id: 24690;
                        readonly nodeType: "IfStatement";
                        readonly src: "6052:74:135";
                        readonly trueBody: {
                            readonly id: 24689;
                            readonly nodeType: "Block";
                            readonly src: "6066:60:135";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 24684;
                                            readonly name: "IHyperdrive";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 10351;
                                            readonly src: "6087:11:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$10351_$";
                                                readonly typeString: "type(contract IHyperdrive)";
                                            };
                                        };
                                        readonly id: 24686;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "6099:14:135";
                                        readonly memberName: "TransferFailed";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10296;
                                        readonly src: "6087:26:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 24687;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "6087:28:135";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 24688;
                                readonly nodeType: "RevertStatement";
                                readonly src: "6080:35:135";
                            }];
                        };
                    }, {
                        readonly expression: {
                            readonly id: 24691;
                            readonly name: "withdrawValue";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 24640;
                            readonly src: "6143:13:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 24629;
                        readonly id: 24692;
                        readonly nodeType: "Return";
                        readonly src: "6136:20:135";
                    }];
                };
                readonly baseFunctions: readonly [12722];
                readonly documentation: {
                    readonly id: 24618;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "4887:285:135";
                    readonly text: "@dev Process a withdrawal in base and send the proceeds to the\n      destination.\n @param _shareAmount The amount of vault shares to withdraw.\n @param _destination The destination of the withdrawal.\n @return amountWithdrawn The amount of base withdrawn.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_withdrawWithBase";
                readonly nameLocation: "5186:17:135";
                readonly overrides: {
                    readonly id: 24626;
                    readonly nodeType: "OverrideSpecifier";
                    readonly overrides: readonly [];
                    readonly src: "5313:8:135";
                };
                readonly parameters: {
                    readonly id: 24625;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24620;
                        readonly mutability: "mutable";
                        readonly name: "_shareAmount";
                        readonly nameLocation: "5221:12:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24694;
                        readonly src: "5213:20:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24619;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5213:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 24622;
                        readonly mutability: "mutable";
                        readonly name: "_destination";
                        readonly nameLocation: "5251:12:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24694;
                        readonly src: "5243:20:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 24621;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5243:7:135";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 24624;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24694;
                        readonly src: "5273:14:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_calldata_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 24623;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5273:5:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5203:100:135";
                };
                readonly returnParameters: {
                    readonly id: 24629;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24628;
                        readonly mutability: "mutable";
                        readonly name: "amountWithdrawn";
                        readonly nameLocation: "5339:15:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24694;
                        readonly src: "5331:23:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24627;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5331:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5330:25:135";
                };
                readonly scope: 24906;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 24767;
                readonly nodeType: "FunctionDefinition";
                readonly src: "6405:923:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 24766;
                    readonly nodeType: "Block";
                    readonly src: "6552:776:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 24712;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 24705;
                                readonly name: "_shareAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24697;
                                readonly src: "6674:12:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly condition: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 24708;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 24706;
                                        readonly name: "_shareAmount";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24697;
                                        readonly src: "6689:12:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: ">";
                                    readonly rightExpression: {
                                        readonly id: 24707;
                                        readonly name: "totalShares";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24389;
                                        readonly src: "6704:11:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "6689:26:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly falseExpression: {
                                    readonly id: 24710;
                                    readonly name: "_shareAmount";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 24697;
                                    readonly src: "6732:12:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 24711;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "Conditional";
                                readonly src: "6689:55:135";
                                readonly trueExpression: {
                                    readonly id: 24709;
                                    readonly name: "totalShares";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 24389;
                                    readonly src: "6718:11:135";
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
                            readonly src: "6674:70:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 24713;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6674:70:135";
                    }, {
                        readonly assignments: readonly [24715];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 24715;
                            readonly mutability: "mutable";
                            readonly name: "withdrawValue";
                            readonly nameLocation: "6803:13:135";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 24766;
                            readonly src: "6795:21:135";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 24714;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "6795:7:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 24719;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 24717;
                                readonly name: "_shareAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24697;
                                readonly src: "6834:12:135";
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
                                readonly id: 24716;
                                readonly name: "_convertToBase";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [24841];
                                readonly referencedDeclaration: 24841;
                                readonly src: "6819:14:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256) view returns (uint256)";
                                };
                            };
                            readonly id: 24718;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "6819:28:135";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "6795:52:135";
                    }, {
                        readonly expression: {
                            readonly id: 24722;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 24720;
                                readonly name: "totalShares";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24389;
                                readonly src: "6936:11:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "-=";
                            readonly rightHandSide: {
                                readonly id: 24721;
                                readonly name: "_shareAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24697;
                                readonly src: "6951:12:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "6936:27:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 24723;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6936:27:135";
                    }, {
                        readonly assignments: readonly [24725];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 24725;
                            readonly mutability: "mutable";
                            readonly name: "success";
                            readonly nameLocation: "6978:7:135";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 24766;
                            readonly src: "6973:12:135";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly typeName: {
                                readonly id: 24724;
                                readonly name: "bool";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "6973:4:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 24726;
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "6973:12:135";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                            readonly id: 24732;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly arguments: readonly [{
                                    readonly id: 24729;
                                    readonly name: "_baseToken";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17532;
                                    readonly src: "7007:10:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IERC20_$9666";
                                        readonly typeString: "contract IERC20";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_contract$_IERC20_$9666";
                                        readonly typeString: "contract IERC20";
                                    }];
                                    readonly id: 24728;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "6999:7:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_address_$";
                                        readonly typeString: "type(address)";
                                    };
                                    readonly typeName: {
                                        readonly id: 24727;
                                        readonly name: "address";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "6999:7:135";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 24730;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "6999:19:135";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "==";
                            readonly rightExpression: {
                                readonly id: 24731;
                                readonly name: "ETH";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18015;
                                readonly src: "7022:3:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "6999:26:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly falseBody: {
                            readonly id: 24755;
                            readonly nodeType: "Block";
                            readonly src: "7156:83:135";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 24753;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 24747;
                                        readonly name: "success";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24725;
                                        readonly src: "7170:7:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly id: 24750;
                                            readonly name: "_destination";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 24699;
                                            readonly src: "7200:12:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        }, {
                                            readonly id: 24751;
                                            readonly name: "withdrawValue";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 24715;
                                            readonly src: "7214:13:135";
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
                                                readonly id: 24748;
                                                readonly name: "_baseToken";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 17532;
                                                readonly src: "7180:10:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_IERC20_$9666";
                                                    readonly typeString: "contract IERC20";
                                                };
                                            };
                                            readonly id: 24749;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "7191:8:135";
                                            readonly memberName: "transfer";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 9611;
                                            readonly src: "7180:19:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$";
                                                readonly typeString: "function (address,uint256) external returns (bool)";
                                            };
                                        };
                                        readonly id: 24752;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "7180:48:135";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly src: "7170:58:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly id: 24754;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "7170:58:135";
                            }];
                        };
                        readonly id: 24756;
                        readonly nodeType: "IfStatement";
                        readonly src: "6995:244:135";
                        readonly trueBody: {
                            readonly id: 24746;
                            readonly nodeType: "Block";
                            readonly src: "7027:123:135";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 24744;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly components: readonly [{
                                            readonly id: 24733;
                                            readonly name: "success";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 24725;
                                            readonly src: "7042:7:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bool";
                                                readonly typeString: "bool";
                                            };
                                        }, null];
                                        readonly id: 24734;
                                        readonly isConstant: false;
                                        readonly isInlineArray: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: true;
                                        readonly nodeType: "TupleExpression";
                                        readonly src: "7041:11:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_tuple$_t_bool_$__$";
                                            readonly typeString: "tuple(bool,)";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly hexValue: "";
                                            readonly id: 24742;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "string";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "7123:2:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470";
                                                readonly typeString: "literal_string \"\"";
                                            };
                                            readonly value: "";
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470";
                                                readonly typeString: "literal_string \"\"";
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470";
                                                    readonly typeString: "literal_string \"\"";
                                                }];
                                                readonly expression: {
                                                    readonly arguments: readonly [{
                                                        readonly id: 24737;
                                                        readonly name: "_destination";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 24699;
                                                        readonly src: "7063:12:135";
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
                                                        readonly id: 24736;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: true;
                                                        readonly lValueRequested: false;
                                                        readonly nodeType: "ElementaryTypeNameExpression";
                                                        readonly src: "7055:8:135";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_type$_t_address_payable_$";
                                                            readonly typeString: "type(address payable)";
                                                        };
                                                        readonly typeName: {
                                                            readonly id: 24735;
                                                            readonly name: "address";
                                                            readonly nodeType: "ElementaryTypeName";
                                                            readonly src: "7055:8:135";
                                                            readonly stateMutability: "payable";
                                                            readonly typeDescriptions: {};
                                                        };
                                                    };
                                                    readonly id: 24738;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly kind: "typeConversion";
                                                    readonly lValueRequested: false;
                                                    readonly nameLocations: readonly [];
                                                    readonly names: readonly [];
                                                    readonly nodeType: "FunctionCall";
                                                    readonly src: "7055:21:135";
                                                    readonly tryCall: false;
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_address_payable";
                                                        readonly typeString: "address payable";
                                                    };
                                                };
                                                readonly id: 24739;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "7077:4:135";
                                                readonly memberName: "call";
                                                readonly nodeType: "MemberAccess";
                                                readonly src: "7055:26:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$";
                                                    readonly typeString: "function (bytes memory) payable returns (bool,bytes memory)";
                                                };
                                            };
                                            readonly id: 24741;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly names: readonly ["value"];
                                            readonly nodeType: "FunctionCallOptions";
                                            readonly options: readonly [{
                                                readonly id: 24740;
                                                readonly name: "withdrawValue";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 24715;
                                                readonly src: "7090:13:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            }];
                                            readonly src: "7055:50:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$value";
                                                readonly typeString: "function (bytes memory) payable returns (bool,bytes memory)";
                                            };
                                        };
                                        readonly id: 24743;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "7055:84:135";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_tuple$_t_bool_$_t_bytes_memory_ptr_$";
                                            readonly typeString: "tuple(bool,bytes memory)";
                                        };
                                    };
                                    readonly src: "7041:98:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 24745;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "7041:98:135";
                            }];
                        };
                    }, {
                        readonly condition: {
                            readonly id: 24758;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "UnaryOperation";
                            readonly operator: "!";
                            readonly prefix: true;
                            readonly src: "7252:8:135";
                            readonly subExpression: {
                                readonly id: 24757;
                                readonly name: "success";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24725;
                                readonly src: "7253:7:135";
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
                        readonly id: 24765;
                        readonly nodeType: "IfStatement";
                        readonly src: "7248:74:135";
                        readonly trueBody: {
                            readonly id: 24764;
                            readonly nodeType: "Block";
                            readonly src: "7262:60:135";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 24759;
                                            readonly name: "IHyperdrive";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 10351;
                                            readonly src: "7283:11:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$10351_$";
                                                readonly typeString: "type(contract IHyperdrive)";
                                            };
                                        };
                                        readonly id: 24761;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "7295:14:135";
                                        readonly memberName: "TransferFailed";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10296;
                                        readonly src: "7283:26:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 24762;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "7283:28:135";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 24763;
                                readonly nodeType: "RevertStatement";
                                readonly src: "7276:35:135";
                            }];
                        };
                    }];
                };
                readonly baseFunctions: readonly [12732];
                readonly documentation: {
                    readonly id: 24695;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "6169:231:135";
                    readonly text: "@dev Process a withdrawal in vault shares and send the proceeds to the\n      destination.\n @param _shareAmount The amount of vault shares to withdraw.\n @param _destination The destination of the withdrawal.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_withdrawWithShares";
                readonly nameLocation: "6414:19:135";
                readonly overrides: {
                    readonly id: 24703;
                    readonly nodeType: "OverrideSpecifier";
                    readonly overrides: readonly [];
                    readonly src: "6543:8:135";
                };
                readonly parameters: {
                    readonly id: 24702;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24697;
                        readonly mutability: "mutable";
                        readonly name: "_shareAmount";
                        readonly nameLocation: "6451:12:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24767;
                        readonly src: "6443:20:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24696;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6443:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 24699;
                        readonly mutability: "mutable";
                        readonly name: "_destination";
                        readonly nameLocation: "6481:12:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24767;
                        readonly src: "6473:20:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 24698;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6473:7:135";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 24701;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24767;
                        readonly src: "6503:14:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_calldata_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 24700;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6503:5:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6433:100:135";
                };
                readonly returnParameters: {
                    readonly id: 24704;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "6552:0:135";
                };
                readonly scope: 24906;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 24790;
                readonly nodeType: "FunctionDefinition";
                readonly src: "7513:175:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 24789;
                    readonly nodeType: "Block";
                    readonly src: "7566:122:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly id: 24781;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                                readonly id: 24776;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly arguments: readonly [{
                                        readonly id: 24773;
                                        readonly name: "_baseToken";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 17532;
                                        readonly src: "7588:10:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_IERC20_$9666";
                                            readonly typeString: "contract IERC20";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_contract$_IERC20_$9666";
                                            readonly typeString: "contract IERC20";
                                        }];
                                        readonly id: 24772;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "ElementaryTypeNameExpression";
                                        readonly src: "7580:7:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_address_$";
                                            readonly typeString: "type(address)";
                                        };
                                        readonly typeName: {
                                            readonly id: 24771;
                                            readonly name: "address";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "7580:7:135";
                                            readonly typeDescriptions: {};
                                        };
                                    };
                                    readonly id: 24774;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "typeConversion";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "7580:19:135";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "!=";
                                readonly rightExpression: {
                                    readonly id: 24775;
                                    readonly name: "ETH";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18015;
                                    readonly src: "7603:3:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly src: "7580:26:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "&&";
                            readonly rightExpression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 24780;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly expression: {
                                        readonly id: 24777;
                                        readonly name: "msg";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -15;
                                        readonly src: "7610:3:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_magic_message";
                                            readonly typeString: "msg";
                                        };
                                    };
                                    readonly id: 24778;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "7614:5:135";
                                    readonly memberName: "value";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "7610:9:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "!=";
                                readonly rightExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 24779;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "7623:1:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly src: "7610:14:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly src: "7580:44:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 24788;
                        readonly nodeType: "IfStatement";
                        readonly src: "7576:106:135";
                        readonly trueBody: {
                            readonly id: 24787;
                            readonly nodeType: "Block";
                            readonly src: "7626:56:135";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 24782;
                                            readonly name: "IHyperdrive";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 10351;
                                            readonly src: "7647:11:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$10351_$";
                                                readonly typeString: "type(contract IHyperdrive)";
                                            };
                                        };
                                        readonly id: 24784;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "7659:10:135";
                                        readonly memberName: "NotPayable";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10270;
                                        readonly src: "7647:22:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 24785;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "7647:24:135";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 24786;
                                readonly nodeType: "RevertStatement";
                                readonly src: "7640:31:135";
                            }];
                        };
                    }];
                };
                readonly baseFunctions: readonly [12736];
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_checkMessageValue";
                readonly nameLocation: "7522:18:135";
                readonly overrides: {
                    readonly id: 24769;
                    readonly nodeType: "OverrideSpecifier";
                    readonly overrides: readonly [];
                    readonly src: "7557:8:135";
                };
                readonly parameters: {
                    readonly id: 24768;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "7540:2:135";
                };
                readonly returnParameters: {
                    readonly id: 24770;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "7566:0:135";
                };
                readonly scope: 24906;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 24841;
                readonly nodeType: "FunctionDefinition";
                readonly src: "7849:460:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 24840;
                    readonly nodeType: "Block";
                    readonly src: "7950:359:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [24800];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 24800;
                            readonly mutability: "mutable";
                            readonly name: "assets";
                            readonly nameLocation: "8028:6:135";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 24840;
                            readonly src: "8020:14:135";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 24799;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "8020:7:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 24801;
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "8020:14:135";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                            readonly id: 24807;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly arguments: readonly [{
                                    readonly id: 24804;
                                    readonly name: "_baseToken";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17532;
                                    readonly src: "8056:10:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IERC20_$9666";
                                        readonly typeString: "contract IERC20";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_contract$_IERC20_$9666";
                                        readonly typeString: "contract IERC20";
                                    }];
                                    readonly id: 24803;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "8048:7:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_address_$";
                                        readonly typeString: "type(address)";
                                    };
                                    readonly typeName: {
                                        readonly id: 24802;
                                        readonly name: "address";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "8048:7:135";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 24805;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "8048:19:135";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "==";
                            readonly rightExpression: {
                                readonly id: 24806;
                                readonly name: "ETH";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18015;
                                readonly src: "8071:3:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "8048:26:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly falseBody: {
                            readonly id: 24827;
                            readonly nodeType: "Block";
                            readonly src: "8137:69:135";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 24825;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 24817;
                                        readonly name: "assets";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24800;
                                        readonly src: "8151:6:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [{
                                                readonly id: 24822;
                                                readonly name: "this";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -28;
                                                readonly src: "8189:4:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$24906";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$24906";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                }];
                                                readonly id: 24821;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "8181:7:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_address_$";
                                                    readonly typeString: "type(address)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 24820;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "8181:7:135";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 24823;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "8181:13:135";
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
                                                readonly id: 24818;
                                                readonly name: "_baseToken";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 17532;
                                                readonly src: "8160:10:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_IERC20_$9666";
                                                    readonly typeString: "contract IERC20";
                                                };
                                            };
                                            readonly id: 24819;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "8171:9:135";
                                            readonly memberName: "balanceOf";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 9665;
                                            readonly src: "8160:20:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_external_view$_t_address_$returns$_t_uint256_$";
                                                readonly typeString: "function (address) view external returns (uint256)";
                                            };
                                        };
                                        readonly id: 24824;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "8160:35:135";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "8151:44:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 24826;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "8151:44:135";
                            }];
                        };
                        readonly id: 24828;
                        readonly nodeType: "IfStatement";
                        readonly src: "8044:162:135";
                        readonly trueBody: {
                            readonly id: 24816;
                            readonly nodeType: "Block";
                            readonly src: "8076:55:135";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 24814;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 24808;
                                        readonly name: "assets";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24800;
                                        readonly src: "8090:6:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly expression: {
                                            readonly arguments: readonly [{
                                                readonly id: 24811;
                                                readonly name: "this";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -28;
                                                readonly src: "8107:4:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$24906";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$24906";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                }];
                                                readonly id: 24810;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "8099:7:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_address_$";
                                                    readonly typeString: "type(address)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 24809;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "8099:7:135";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 24812;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "8099:13:135";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        };
                                        readonly id: 24813;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "8113:7:135";
                                        readonly memberName: "balance";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "8099:21:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "8090:30:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 24815;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "8090:30:135";
                            }];
                        };
                    }, {
                        readonly expression: {
                            readonly condition: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 24831;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 24829;
                                    readonly name: "totalShares";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 24389;
                                    readonly src: "8235:11:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "!=";
                                readonly rightExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 24830;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "8250:1:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly src: "8235:16:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly falseExpression: {
                                readonly hexValue: "30";
                                readonly id: 24837;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "8301:1:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly id: 24838;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "Conditional";
                            readonly src: "8235:67:135";
                            readonly trueExpression: {
                                readonly arguments: readonly [{
                                    readonly id: 24834;
                                    readonly name: "assets";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 24800;
                                    readonly src: "8278:6:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 24835;
                                    readonly name: "totalShares";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 24389;
                                    readonly src: "8286:11:135";
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
                                    }];
                                    readonly expression: {
                                        readonly id: 24832;
                                        readonly name: "_shareAmount";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24793;
                                        readonly src: "8254:12:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 24833;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "8267:10:135";
                                    readonly memberName: "mulDivDown";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 18067;
                                    readonly src: "8254:23:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                    };
                                };
                                readonly id: 24836;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "8254:44:135";
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
                        readonly functionReturnParameters: 24798;
                        readonly id: 24839;
                        readonly nodeType: "Return";
                        readonly src: "8216:86:135";
                    }];
                };
                readonly baseFunctions: readonly [12766];
                readonly documentation: {
                    readonly id: 24791;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "7694:150:135";
                    readonly text: "@dev Convert an amount of vault shares to an amount of base.\n @param _shareAmount The vault shares amount.\n @return The base amount.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_convertToBase";
                readonly nameLocation: "7858:14:135";
                readonly overrides: {
                    readonly id: 24795;
                    readonly nodeType: "OverrideSpecifier";
                    readonly overrides: readonly [];
                    readonly src: "7923:8:135";
                };
                readonly parameters: {
                    readonly id: 24794;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24793;
                        readonly mutability: "mutable";
                        readonly name: "_shareAmount";
                        readonly nameLocation: "7890:12:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24841;
                        readonly src: "7882:20:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24792;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7882:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7872:36:135";
                };
                readonly returnParameters: {
                    readonly id: 24798;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24797;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24841;
                        readonly src: "7941:7:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24796;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7941:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7940:9:135";
                };
                readonly scope: 24906;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 24887;
                readonly nodeType: "FunctionDefinition";
                readonly src: "8469:425:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 24886;
                    readonly nodeType: "Block";
                    readonly src: "8571:323:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [24851];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 24851;
                            readonly mutability: "mutable";
                            readonly name: "assets";
                            readonly nameLocation: "8649:6:135";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 24886;
                            readonly src: "8641:14:135";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 24850;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "8641:7:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 24852;
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "8641:14:135";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                            readonly id: 24858;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly arguments: readonly [{
                                    readonly id: 24855;
                                    readonly name: "_baseToken";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17532;
                                    readonly src: "8677:10:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IERC20_$9666";
                                        readonly typeString: "contract IERC20";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_contract$_IERC20_$9666";
                                        readonly typeString: "contract IERC20";
                                    }];
                                    readonly id: 24854;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "8669:7:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_address_$";
                                        readonly typeString: "type(address)";
                                    };
                                    readonly typeName: {
                                        readonly id: 24853;
                                        readonly name: "address";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "8669:7:135";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 24856;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "8669:19:135";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "==";
                            readonly rightExpression: {
                                readonly id: 24857;
                                readonly name: "ETH";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18015;
                                readonly src: "8692:3:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "8669:26:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly falseBody: {
                            readonly id: 24878;
                            readonly nodeType: "Block";
                            readonly src: "8758:69:135";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 24876;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 24868;
                                        readonly name: "assets";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24851;
                                        readonly src: "8772:6:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [{
                                                readonly id: 24873;
                                                readonly name: "this";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -28;
                                                readonly src: "8810:4:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$24906";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$24906";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                }];
                                                readonly id: 24872;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "8802:7:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_address_$";
                                                    readonly typeString: "type(address)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 24871;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "8802:7:135";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 24874;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "8802:13:135";
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
                                                readonly id: 24869;
                                                readonly name: "_baseToken";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 17532;
                                                readonly src: "8781:10:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_IERC20_$9666";
                                                    readonly typeString: "contract IERC20";
                                                };
                                            };
                                            readonly id: 24870;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "8792:9:135";
                                            readonly memberName: "balanceOf";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 9665;
                                            readonly src: "8781:20:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_external_view$_t_address_$returns$_t_uint256_$";
                                                readonly typeString: "function (address) view external returns (uint256)";
                                            };
                                        };
                                        readonly id: 24875;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "8781:35:135";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "8772:44:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 24877;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "8772:44:135";
                            }];
                        };
                        readonly id: 24879;
                        readonly nodeType: "IfStatement";
                        readonly src: "8665:162:135";
                        readonly trueBody: {
                            readonly id: 24867;
                            readonly nodeType: "Block";
                            readonly src: "8697:55:135";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 24865;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 24859;
                                        readonly name: "assets";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24851;
                                        readonly src: "8711:6:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly expression: {
                                            readonly arguments: readonly [{
                                                readonly id: 24862;
                                                readonly name: "this";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -28;
                                                readonly src: "8728:4:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$24906";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$24906";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                }];
                                                readonly id: 24861;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "8720:7:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_address_$";
                                                    readonly typeString: "type(address)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 24860;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "8720:7:135";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 24863;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "8720:13:135";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        };
                                        readonly id: 24864;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "8734:7:135";
                                        readonly memberName: "balance";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "8720:21:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "8711:30:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 24866;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "8711:30:135";
                            }];
                        };
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 24882;
                                readonly name: "totalShares";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24389;
                                readonly src: "8867:11:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 24883;
                                readonly name: "assets";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24851;
                                readonly src: "8880:6:135";
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
                                }];
                                readonly expression: {
                                    readonly id: 24880;
                                    readonly name: "_baseAmount";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 24844;
                                    readonly src: "8844:11:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 24881;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "8856:10:135";
                                readonly memberName: "mulDivDown";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 18067;
                                readonly src: "8844:22:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 24884;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "8844:43:135";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 24849;
                        readonly id: 24885;
                        readonly nodeType: "Return";
                        readonly src: "8837:50:135";
                    }];
                };
                readonly baseFunctions: readonly [12774];
                readonly documentation: {
                    readonly id: 24842;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "8315:149:135";
                    readonly text: "@dev Convert an amount of base to an amount of vault shares.\n @param _baseAmount The base amount.\n @return The vault shares amount.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_convertToShares";
                readonly nameLocation: "8478:16:135";
                readonly overrides: {
                    readonly id: 24846;
                    readonly nodeType: "OverrideSpecifier";
                    readonly overrides: readonly [];
                    readonly src: "8544:8:135";
                };
                readonly parameters: {
                    readonly id: 24845;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24844;
                        readonly mutability: "mutable";
                        readonly name: "_baseAmount";
                        readonly nameLocation: "8512:11:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24887;
                        readonly src: "8504:19:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24843;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8504:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "8494:35:135";
                };
                readonly returnParameters: {
                    readonly id: 24849;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24848;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24887;
                        readonly src: "8562:7:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24847;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8562:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "8561:9:135";
                };
                readonly scope: 24906;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 24905;
                readonly nodeType: "FunctionDefinition";
                readonly src: "9052:190:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 24904;
                    readonly nodeType: "Block";
                    readonly src: "9165:77:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly id: 24899;
                                        readonly name: "this";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -28;
                                        readonly src: "9228:4:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$24906";
                                            readonly typeString: "contract MockHyperdriveBase";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$24906";
                                            readonly typeString: "contract MockHyperdriveBase";
                                        }];
                                        readonly id: 24898;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "ElementaryTypeNameExpression";
                                        readonly src: "9220:7:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_address_$";
                                            readonly typeString: "type(address)";
                                        };
                                        readonly typeName: {
                                            readonly id: 24897;
                                            readonly name: "address";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "9220:7:135";
                                            readonly typeDescriptions: {};
                                        };
                                    };
                                    readonly id: 24900;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "typeConversion";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "9220:13:135";
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
                                        readonly id: 24895;
                                        readonly name: "_baseToken";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 17532;
                                        readonly src: "9199:10:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_IERC20_$9666";
                                            readonly typeString: "contract IERC20";
                                        };
                                    };
                                    readonly id: 24896;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "9210:9:135";
                                    readonly memberName: "balanceOf";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 9665;
                                    readonly src: "9199:20:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_view$_t_address_$returns$_t_uint256_$";
                                        readonly typeString: "function (address) view external returns (uint256)";
                                    };
                                };
                                readonly id: 24901;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "9199:35:135";
                                readonly tryCall: false;
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
                                readonly id: 24894;
                                readonly name: "_convertToShares";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [24887];
                                readonly referencedDeclaration: 24887;
                                readonly src: "9182:16:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256) view returns (uint256)";
                                };
                            };
                            readonly id: 24902;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9182:53:135";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 24893;
                        readonly id: 24903;
                        readonly nodeType: "Return";
                        readonly src: "9175:60:135";
                    }];
                };
                readonly baseFunctions: readonly [12780];
                readonly documentation: {
                    readonly id: 24888;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "8900:147:135";
                    readonly text: "@dev Gets the total amount of shares held by the pool in the yield\n      source.\n @return shareAmount The total amount of shares.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_totalShares";
                readonly nameLocation: "9061:12:135";
                readonly overrides: {
                    readonly id: 24890;
                    readonly nodeType: "OverrideSpecifier";
                    readonly overrides: readonly [];
                    readonly src: "9114:8:135";
                };
                readonly parameters: {
                    readonly id: 24889;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "9073:2:135";
                };
                readonly returnParameters: {
                    readonly id: 24893;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24892;
                        readonly mutability: "mutable";
                        readonly name: "shareAmount";
                        readonly nameLocation: "9148:11:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24905;
                        readonly src: "9140:19:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24891;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9140:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "9139:21:135";
                };
                readonly scope: 24906;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "internal";
            }];
            readonly abstract: true;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 24383;
                    readonly name: "HyperdriveBase";
                    readonly nameLocations: readonly ["1669:14:135"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 13667;
                    readonly src: "1669:14:135";
                };
                readonly id: 24384;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "1669:14:135";
            }];
            readonly canonicalName: "MockHyperdriveBase";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly fullyImplemented: false;
            readonly linearizedBaseContracts: readonly [24906, 13667, 17734, 71745, 10887, 11459];
            readonly name: "MockHyperdriveBase";
            readonly nameLocation: "1647:18:135";
            readonly scope: 25325;
            readonly usedErrors: readonly [71690];
            readonly usedEvents: readonly [10705, 10720, 10739, 10754, 10771, 10790, 10809, 10830, 10845, 10852, 10857, 10862, 10867, 10874, 10879, 10886, 11440, 11449, 11458];
        }, {
            readonly id: 25235;
            readonly nodeType: "ContractDefinition";
            readonly src: "9246:4336:135";
            readonly nodes: readonly [{
                readonly id: 24913;
                readonly nodeType: "UsingForDirective";
                readonly src: "9310:33:135";
                readonly nodes: readonly [];
                readonly global: false;
                readonly libraryName: {
                    readonly id: 24911;
                    readonly name: "FixedPointMath";
                    readonly nameLocations: readonly ["9316:14:135"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 18822;
                    readonly src: "9316:14:135";
                };
                readonly typeName: {
                    readonly id: 24912;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "9335:7:135";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
            }, {
                readonly id: 24963;
                readonly nodeType: "FunctionDefinition";
                readonly src: "9349:406:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 24962;
                    readonly nodeType: "Block";
                    readonly src: "9753:2:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [];
                };
                readonly implemented: true;
                readonly kind: "constructor";
                readonly modifiers: readonly [{
                    readonly arguments: readonly [{
                        readonly id: 24919;
                        readonly name: "_config";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 24916;
                        readonly src: "9446:7:135";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10154_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig memory";
                        };
                    }, {
                        readonly arguments: readonly [{
                            readonly arguments: readonly [{
                                readonly id: 24925;
                                readonly name: "_config";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24916;
                                readonly src: "9501:7:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_PoolConfig_$10154_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_PoolConfig_$10154_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                }];
                                readonly id: 24924;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "NewExpression";
                                readonly src: "9475:25:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_creation_nonpayable$_t_struct$_PoolConfig_$10154_memory_ptr_$returns$_t_contract$_MockHyperdriveTarget0_$25264_$";
                                    readonly typeString: "function (struct IHyperdrive.PoolConfig memory) returns (contract MockHyperdriveTarget0)";
                                };
                                readonly typeName: {
                                    readonly id: 24923;
                                    readonly nodeType: "UserDefinedTypeName";
                                    readonly pathNode: {
                                        readonly id: 24922;
                                        readonly name: "MockHyperdriveTarget0";
                                        readonly nameLocations: readonly ["9479:21:135"];
                                        readonly nodeType: "IdentifierPath";
                                        readonly referencedDeclaration: 25264;
                                        readonly src: "9479:21:135";
                                    };
                                    readonly referencedDeclaration: 25264;
                                    readonly src: "9479:21:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_MockHyperdriveTarget0_$25264";
                                        readonly typeString: "contract MockHyperdriveTarget0";
                                    };
                                };
                            };
                            readonly id: 24926;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9475:34:135";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_MockHyperdriveTarget0_$25264";
                                readonly typeString: "contract MockHyperdriveTarget0";
                            };
                        }];
                        readonly expression: {
                            readonly argumentTypes: readonly [{
                                readonly typeIdentifier: "t_contract$_MockHyperdriveTarget0_$25264";
                                readonly typeString: "contract MockHyperdriveTarget0";
                            }];
                            readonly id: 24921;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly lValueRequested: false;
                            readonly nodeType: "ElementaryTypeNameExpression";
                            readonly src: "9467:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_type$_t_address_$";
                                readonly typeString: "type(address)";
                            };
                            readonly typeName: {
                                readonly id: 24920;
                                readonly name: "address";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "9467:7:135";
                                readonly typeDescriptions: {};
                            };
                        };
                        readonly id: 24927;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: false;
                        readonly kind: "typeConversion";
                        readonly lValueRequested: false;
                        readonly nameLocations: readonly [];
                        readonly names: readonly [];
                        readonly nodeType: "FunctionCall";
                        readonly src: "9467:43:135";
                        readonly tryCall: false;
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    }, {
                        readonly arguments: readonly [{
                            readonly arguments: readonly [{
                                readonly id: 24933;
                                readonly name: "_config";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24916;
                                readonly src: "9558:7:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_PoolConfig_$10154_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_PoolConfig_$10154_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                }];
                                readonly id: 24932;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "NewExpression";
                                readonly src: "9532:25:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_creation_nonpayable$_t_struct$_PoolConfig_$10154_memory_ptr_$returns$_t_contract$_MockHyperdriveTarget1_$25279_$";
                                    readonly typeString: "function (struct IHyperdrive.PoolConfig memory) returns (contract MockHyperdriveTarget1)";
                                };
                                readonly typeName: {
                                    readonly id: 24931;
                                    readonly nodeType: "UserDefinedTypeName";
                                    readonly pathNode: {
                                        readonly id: 24930;
                                        readonly name: "MockHyperdriveTarget1";
                                        readonly nameLocations: readonly ["9536:21:135"];
                                        readonly nodeType: "IdentifierPath";
                                        readonly referencedDeclaration: 25279;
                                        readonly src: "9536:21:135";
                                    };
                                    readonly referencedDeclaration: 25279;
                                    readonly src: "9536:21:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_MockHyperdriveTarget1_$25279";
                                        readonly typeString: "contract MockHyperdriveTarget1";
                                    };
                                };
                            };
                            readonly id: 24934;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9532:34:135";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_MockHyperdriveTarget1_$25279";
                                readonly typeString: "contract MockHyperdriveTarget1";
                            };
                        }];
                        readonly expression: {
                            readonly argumentTypes: readonly [{
                                readonly typeIdentifier: "t_contract$_MockHyperdriveTarget1_$25279";
                                readonly typeString: "contract MockHyperdriveTarget1";
                            }];
                            readonly id: 24929;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly lValueRequested: false;
                            readonly nodeType: "ElementaryTypeNameExpression";
                            readonly src: "9524:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_type$_t_address_$";
                                readonly typeString: "type(address)";
                            };
                            readonly typeName: {
                                readonly id: 24928;
                                readonly name: "address";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "9524:7:135";
                                readonly typeDescriptions: {};
                            };
                        };
                        readonly id: 24935;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: false;
                        readonly kind: "typeConversion";
                        readonly lValueRequested: false;
                        readonly nameLocations: readonly [];
                        readonly names: readonly [];
                        readonly nodeType: "FunctionCall";
                        readonly src: "9524:43:135";
                        readonly tryCall: false;
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    }, {
                        readonly arguments: readonly [{
                            readonly arguments: readonly [{
                                readonly id: 24941;
                                readonly name: "_config";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24916;
                                readonly src: "9615:7:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_PoolConfig_$10154_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_PoolConfig_$10154_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                }];
                                readonly id: 24940;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "NewExpression";
                                readonly src: "9589:25:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_creation_nonpayable$_t_struct$_PoolConfig_$10154_memory_ptr_$returns$_t_contract$_MockHyperdriveTarget2_$25294_$";
                                    readonly typeString: "function (struct IHyperdrive.PoolConfig memory) returns (contract MockHyperdriveTarget2)";
                                };
                                readonly typeName: {
                                    readonly id: 24939;
                                    readonly nodeType: "UserDefinedTypeName";
                                    readonly pathNode: {
                                        readonly id: 24938;
                                        readonly name: "MockHyperdriveTarget2";
                                        readonly nameLocations: readonly ["9593:21:135"];
                                        readonly nodeType: "IdentifierPath";
                                        readonly referencedDeclaration: 25294;
                                        readonly src: "9593:21:135";
                                    };
                                    readonly referencedDeclaration: 25294;
                                    readonly src: "9593:21:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_MockHyperdriveTarget2_$25294";
                                        readonly typeString: "contract MockHyperdriveTarget2";
                                    };
                                };
                            };
                            readonly id: 24942;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9589:34:135";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_MockHyperdriveTarget2_$25294";
                                readonly typeString: "contract MockHyperdriveTarget2";
                            };
                        }];
                        readonly expression: {
                            readonly argumentTypes: readonly [{
                                readonly typeIdentifier: "t_contract$_MockHyperdriveTarget2_$25294";
                                readonly typeString: "contract MockHyperdriveTarget2";
                            }];
                            readonly id: 24937;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly lValueRequested: false;
                            readonly nodeType: "ElementaryTypeNameExpression";
                            readonly src: "9581:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_type$_t_address_$";
                                readonly typeString: "type(address)";
                            };
                            readonly typeName: {
                                readonly id: 24936;
                                readonly name: "address";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "9581:7:135";
                                readonly typeDescriptions: {};
                            };
                        };
                        readonly id: 24943;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: false;
                        readonly kind: "typeConversion";
                        readonly lValueRequested: false;
                        readonly nameLocations: readonly [];
                        readonly names: readonly [];
                        readonly nodeType: "FunctionCall";
                        readonly src: "9581:43:135";
                        readonly tryCall: false;
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    }, {
                        readonly arguments: readonly [{
                            readonly arguments: readonly [{
                                readonly id: 24949;
                                readonly name: "_config";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24916;
                                readonly src: "9672:7:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_PoolConfig_$10154_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_PoolConfig_$10154_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                }];
                                readonly id: 24948;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "NewExpression";
                                readonly src: "9646:25:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_creation_nonpayable$_t_struct$_PoolConfig_$10154_memory_ptr_$returns$_t_contract$_MockHyperdriveTarget3_$25309_$";
                                    readonly typeString: "function (struct IHyperdrive.PoolConfig memory) returns (contract MockHyperdriveTarget3)";
                                };
                                readonly typeName: {
                                    readonly id: 24947;
                                    readonly nodeType: "UserDefinedTypeName";
                                    readonly pathNode: {
                                        readonly id: 24946;
                                        readonly name: "MockHyperdriveTarget3";
                                        readonly nameLocations: readonly ["9650:21:135"];
                                        readonly nodeType: "IdentifierPath";
                                        readonly referencedDeclaration: 25309;
                                        readonly src: "9650:21:135";
                                    };
                                    readonly referencedDeclaration: 25309;
                                    readonly src: "9650:21:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_MockHyperdriveTarget3_$25309";
                                        readonly typeString: "contract MockHyperdriveTarget3";
                                    };
                                };
                            };
                            readonly id: 24950;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9646:34:135";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_MockHyperdriveTarget3_$25309";
                                readonly typeString: "contract MockHyperdriveTarget3";
                            };
                        }];
                        readonly expression: {
                            readonly argumentTypes: readonly [{
                                readonly typeIdentifier: "t_contract$_MockHyperdriveTarget3_$25309";
                                readonly typeString: "contract MockHyperdriveTarget3";
                            }];
                            readonly id: 24945;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly lValueRequested: false;
                            readonly nodeType: "ElementaryTypeNameExpression";
                            readonly src: "9638:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_type$_t_address_$";
                                readonly typeString: "type(address)";
                            };
                            readonly typeName: {
                                readonly id: 24944;
                                readonly name: "address";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "9638:7:135";
                                readonly typeDescriptions: {};
                            };
                        };
                        readonly id: 24951;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: false;
                        readonly kind: "typeConversion";
                        readonly lValueRequested: false;
                        readonly nameLocations: readonly [];
                        readonly names: readonly [];
                        readonly nodeType: "FunctionCall";
                        readonly src: "9638:43:135";
                        readonly tryCall: false;
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    }, {
                        readonly arguments: readonly [{
                            readonly arguments: readonly [{
                                readonly id: 24957;
                                readonly name: "_config";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24916;
                                readonly src: "9729:7:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_PoolConfig_$10154_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_PoolConfig_$10154_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                }];
                                readonly id: 24956;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "NewExpression";
                                readonly src: "9703:25:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_creation_nonpayable$_t_struct$_PoolConfig_$10154_memory_ptr_$returns$_t_contract$_MockHyperdriveTarget4_$25324_$";
                                    readonly typeString: "function (struct IHyperdrive.PoolConfig memory) returns (contract MockHyperdriveTarget4)";
                                };
                                readonly typeName: {
                                    readonly id: 24955;
                                    readonly nodeType: "UserDefinedTypeName";
                                    readonly pathNode: {
                                        readonly id: 24954;
                                        readonly name: "MockHyperdriveTarget4";
                                        readonly nameLocations: readonly ["9707:21:135"];
                                        readonly nodeType: "IdentifierPath";
                                        readonly referencedDeclaration: 25324;
                                        readonly src: "9707:21:135";
                                    };
                                    readonly referencedDeclaration: 25324;
                                    readonly src: "9707:21:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_MockHyperdriveTarget4_$25324";
                                        readonly typeString: "contract MockHyperdriveTarget4";
                                    };
                                };
                            };
                            readonly id: 24958;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9703:34:135";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_MockHyperdriveTarget4_$25324";
                                readonly typeString: "contract MockHyperdriveTarget4";
                            };
                        }];
                        readonly expression: {
                            readonly argumentTypes: readonly [{
                                readonly typeIdentifier: "t_contract$_MockHyperdriveTarget4_$25324";
                                readonly typeString: "contract MockHyperdriveTarget4";
                            }];
                            readonly id: 24953;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly lValueRequested: false;
                            readonly nodeType: "ElementaryTypeNameExpression";
                            readonly src: "9695:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_type$_t_address_$";
                                readonly typeString: "type(address)";
                            };
                            readonly typeName: {
                                readonly id: 24952;
                                readonly name: "address";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "9695:7:135";
                                readonly typeDescriptions: {};
                            };
                        };
                        readonly id: 24959;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: false;
                        readonly kind: "typeConversion";
                        readonly lValueRequested: false;
                        readonly nameLocations: readonly [];
                        readonly names: readonly [];
                        readonly nodeType: "FunctionCall";
                        readonly src: "9695:43:135";
                        readonly tryCall: false;
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    }];
                    readonly id: 24960;
                    readonly kind: "baseConstructorSpecifier";
                    readonly modifierName: {
                        readonly id: 24918;
                        readonly name: "Hyperdrive";
                        readonly nameLocations: readonly ["9422:10:135"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 4375;
                        readonly src: "9422:10:135";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "9422:326:135";
                }];
                readonly name: "";
                readonly nameLocation: "-1:-1:-1";
                readonly parameters: {
                    readonly id: 24917;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24916;
                        readonly mutability: "mutable";
                        readonly name: "_config";
                        readonly nameLocation: "9400:7:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24963;
                        readonly src: "9370:37:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10154_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig";
                        };
                        readonly typeName: {
                            readonly id: 24915;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 24914;
                                readonly name: "IHyperdrive.PoolConfig";
                                readonly nameLocations: readonly ["9370:11:135", "9382:10:135"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10154;
                                readonly src: "9370:22:135";
                            };
                            readonly referencedDeclaration: 10154;
                            readonly src: "9370:22:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolConfig_$10154_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "9360:53:135";
                };
                readonly returnParameters: {
                    readonly id: 24961;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "9753:0:135";
                };
                readonly scope: 25235;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "public";
            }, {
                readonly id: 24975;
                readonly nodeType: "FunctionDefinition";
                readonly src: "9780:138:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 24974;
                    readonly nodeType: "Block";
                    readonly src: "9873:45:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 24972;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 24970;
                                readonly name: "_marketState";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 17570;
                                readonly src: "9883:12:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_MarketState_$10041_storage";
                                    readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 24971;
                                readonly name: "_marketState_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24967;
                                readonly src: "9898:13:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_MarketState_$10041_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.MarketState memory";
                                };
                            };
                            readonly src: "9883:28:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_MarketState_$10041_storage";
                                readonly typeString: "struct IHyperdrive.MarketState storage ref";
                            };
                        };
                        readonly id: 24973;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "9883:28:135";
                    }];
                };
                readonly documentation: {
                    readonly id: 24964;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "9761:14:135";
                    readonly text: "Mocks ///";
                };
                readonly functionSelector: "f45cf2e0";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "setMarketState";
                readonly nameLocation: "9789:14:135";
                readonly parameters: {
                    readonly id: 24968;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24967;
                        readonly mutability: "mutable";
                        readonly name: "_marketState_";
                        readonly nameLocation: "9844:13:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24975;
                        readonly src: "9813:44:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_MarketState_$10041_memory_ptr";
                            readonly typeString: "struct IHyperdrive.MarketState";
                        };
                        readonly typeName: {
                            readonly id: 24966;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 24965;
                                readonly name: "IHyperdrive.MarketState";
                                readonly nameLocations: readonly ["9813:11:135", "9825:11:135"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10041;
                                readonly src: "9813:23:135";
                            };
                            readonly referencedDeclaration: 10041;
                            readonly src: "9813:23:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_MarketState_$10041_storage_ptr";
                                readonly typeString: "struct IHyperdrive.MarketState";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "9803:60:135";
                };
                readonly returnParameters: {
                    readonly id: 24969;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "9873:0:135";
                };
                readonly scope: 25235;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 24985;
                readonly nodeType: "FunctionDefinition";
                readonly src: "9924:98:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 24984;
                    readonly nodeType: "Block";
                    readonly src: "9979:43:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 24982;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 24980;
                                readonly name: "totalShares";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24389;
                                readonly src: "9989:11:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 24981;
                                readonly name: "_totalShares";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24977;
                                readonly src: "10003:12:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "9989:26:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 24983;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "9989:26:135";
                    }];
                };
                readonly functionSelector: "a77384c1";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "setTotalShares";
                readonly nameLocation: "9933:14:135";
                readonly parameters: {
                    readonly id: 24978;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24977;
                        readonly mutability: "mutable";
                        readonly name: "_totalShares";
                        readonly nameLocation: "9956:12:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24985;
                        readonly src: "9948:20:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24976;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9948:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "9947:22:135";
                };
                readonly returnParameters: {
                    readonly id: 24979;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "9979:0:135";
                };
                readonly scope: 25235;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 25053;
                readonly nodeType: "FunctionDefinition";
                readonly src: "10154:566:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25052;
                    readonly nodeType: "Block";
                    readonly src: "10205:515:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [null, 24993];
                        readonly declarations: readonly [null, {
                            readonly constant: false;
                            readonly id: 24993;
                            readonly mutability: "mutable";
                            readonly name: "interest";
                            readonly nameLocation: "10225:8:135";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 25052;
                            readonly src: "10218:15:135";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                            readonly typeName: {
                                readonly id: 24992;
                                readonly name: "int256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "10218:6:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 25006;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly id: 25000;
                                        readonly name: "this";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -28;
                                        readonly src: "10321:4:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_MockHyperdrive_$25235";
                                            readonly typeString: "contract MockHyperdrive";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_contract$_MockHyperdrive_$25235";
                                            readonly typeString: "contract MockHyperdrive";
                                        }];
                                        readonly id: 24999;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "ElementaryTypeNameExpression";
                                        readonly src: "10313:7:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_address_$";
                                            readonly typeString: "type(address)";
                                        };
                                        readonly typeName: {
                                            readonly id: 24998;
                                            readonly name: "address";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "10313:7:135";
                                            readonly typeDescriptions: {};
                                        };
                                    };
                                    readonly id: 25001;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "typeConversion";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "10313:13:135";
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
                                        readonly id: 24996;
                                        readonly name: "_baseToken";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 17532;
                                        readonly src: "10292:10:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_IERC20_$9666";
                                            readonly typeString: "contract IERC20";
                                        };
                                    };
                                    readonly id: 24997;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "10303:9:135";
                                    readonly memberName: "balanceOf";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 9665;
                                    readonly src: "10292:20:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_view$_t_address_$returns$_t_uint256_$";
                                        readonly typeString: "function (address) view external returns (uint256)";
                                    };
                                };
                                readonly id: 25002;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "10292:35:135";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 25003;
                                readonly name: "apr";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24989;
                                readonly src: "10341:3:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            }, {
                                readonly id: 25004;
                                readonly name: "time";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24987;
                                readonly src: "10358:4:135";
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
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly id: 24994;
                                    readonly name: "HyperdriveUtils";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 158674;
                                    readonly src: "10237:15:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_HyperdriveUtils_$158674_$";
                                        readonly typeString: "type(library HyperdriveUtils)";
                                    };
                                };
                                readonly id: 24995;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "10253:25:135";
                                readonly memberName: "calculateCompoundInterest";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 156502;
                                readonly src: "10237:41:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_int256_$_t_uint256_$returns$_t_uint256_$_t_int256_$";
                                    readonly typeString: "function (uint256,int256,uint256) pure returns (uint256,int256)";
                                };
                            };
                            readonly id: 25005;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "10237:135:135";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_uint256_$_t_int256_$";
                                readonly typeString: "tuple(uint256,int256)";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "10215:157:135";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                            readonly id: 25009;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 25007;
                                readonly name: "interest";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24993;
                                readonly src: "10387:8:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: ">";
                            readonly rightExpression: {
                                readonly hexValue: "30";
                                readonly id: 25008;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "10398:1:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly src: "10387:12:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly falseBody: {
                            readonly condition: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                                readonly id: 25030;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 25028;
                                    readonly name: "interest";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 24993;
                                    readonly src: "10555:8:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "<";
                                readonly rightExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 25029;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "10566:1:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly src: "10555:12:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly id: 25050;
                            readonly nodeType: "IfStatement";
                            readonly src: "10551:163:135";
                            readonly trueBody: {
                                readonly id: 25049;
                                readonly nodeType: "Block";
                                readonly src: "10569:145:135";
                                readonly statements: readonly [{
                                    readonly expression: {
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [{
                                                readonly id: 25040;
                                                readonly name: "this";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -28;
                                                readonly src: "10648:4:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_MockHyperdrive_$25235";
                                                    readonly typeString: "contract MockHyperdrive";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_contract$_MockHyperdrive_$25235";
                                                    readonly typeString: "contract MockHyperdrive";
                                                }];
                                                readonly id: 25039;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "10640:7:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_address_$";
                                                    readonly typeString: "type(address)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 25038;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "10640:7:135";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 25041;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "10640:13:135";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly id: 25045;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "UnaryOperation";
                                                readonly operator: "-";
                                                readonly prefix: true;
                                                readonly src: "10679:9:135";
                                                readonly subExpression: {
                                                    readonly id: 25044;
                                                    readonly name: "interest";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 24993;
                                                    readonly src: "10680:8:135";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_int256";
                                                        readonly typeString: "int256";
                                                    };
                                                };
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
                                                readonly id: 25043;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "10671:7:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_uint256_$";
                                                    readonly typeString: "type(uint256)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 25042;
                                                    readonly name: "uint256";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "10671:7:135";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 25046;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "10671:18:135";
                                            readonly tryCall: false;
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
                                                        readonly id: 25034;
                                                        readonly name: "_baseToken";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 17532;
                                                        readonly src: "10605:10:135";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_contract$_IERC20_$9666";
                                                            readonly typeString: "contract IERC20";
                                                        };
                                                    }];
                                                    readonly expression: {
                                                        readonly argumentTypes: readonly [{
                                                            readonly typeIdentifier: "t_contract$_IERC20_$9666";
                                                            readonly typeString: "contract IERC20";
                                                        }];
                                                        readonly id: 25033;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: true;
                                                        readonly lValueRequested: false;
                                                        readonly nodeType: "ElementaryTypeNameExpression";
                                                        readonly src: "10597:7:135";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_type$_t_address_$";
                                                            readonly typeString: "type(address)";
                                                        };
                                                        readonly typeName: {
                                                            readonly id: 25032;
                                                            readonly name: "address";
                                                            readonly nodeType: "ElementaryTypeName";
                                                            readonly src: "10597:7:135";
                                                            readonly typeDescriptions: {};
                                                        };
                                                    };
                                                    readonly id: 25035;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly kind: "typeConversion";
                                                    readonly lValueRequested: false;
                                                    readonly nameLocations: readonly [];
                                                    readonly names: readonly [];
                                                    readonly nodeType: "FunctionCall";
                                                    readonly src: "10597:19:135";
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
                                                    readonly id: 25031;
                                                    readonly name: "ERC20Mintable";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 23490;
                                                    readonly src: "10583:13:135";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_contract$_ERC20Mintable_$23490_$";
                                                        readonly typeString: "type(contract ERC20Mintable)";
                                                    };
                                                };
                                                readonly id: 25036;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly kind: "typeConversion";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "10583:34:135";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_ERC20Mintable_$23490";
                                                    readonly typeString: "contract ERC20Mintable";
                                                };
                                            };
                                            readonly id: 25037;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "10618:4:135";
                                            readonly memberName: "burn";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 23489;
                                            readonly src: "10583:39:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$__$";
                                                readonly typeString: "function (address,uint256) external";
                                            };
                                        };
                                        readonly id: 25047;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "10583:120:135";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_tuple$__$";
                                            readonly typeString: "tuple()";
                                        };
                                    };
                                    readonly id: 25048;
                                    readonly nodeType: "ExpressionStatement";
                                    readonly src: "10583:120:135";
                                }];
                            };
                        };
                        readonly id: 25051;
                        readonly nodeType: "IfStatement";
                        readonly src: "10383:331:135";
                        readonly trueBody: {
                            readonly id: 25027;
                            readonly nodeType: "Block";
                            readonly src: "10401:144:135";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly id: 25019;
                                            readonly name: "this";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -28;
                                            readonly src: "10480:4:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_contract$_MockHyperdrive_$25235";
                                                readonly typeString: "contract MockHyperdrive";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_contract$_MockHyperdrive_$25235";
                                                readonly typeString: "contract MockHyperdrive";
                                            }];
                                            readonly id: 25018;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "10472:7:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_address_$";
                                                readonly typeString: "type(address)";
                                            };
                                            readonly typeName: {
                                                readonly id: 25017;
                                                readonly name: "address";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "10472:7:135";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 25020;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "10472:13:135";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly id: 25023;
                                            readonly name: "interest";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 24993;
                                            readonly src: "10511:8:135";
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
                                            readonly id: 25022;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "10503:7:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_uint256_$";
                                                readonly typeString: "type(uint256)";
                                            };
                                            readonly typeName: {
                                                readonly id: 25021;
                                                readonly name: "uint256";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "10503:7:135";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 25024;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "10503:17:135";
                                        readonly tryCall: false;
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
                                                    readonly id: 25013;
                                                    readonly name: "_baseToken";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 17532;
                                                    readonly src: "10437:10:135";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_contract$_IERC20_$9666";
                                                        readonly typeString: "contract IERC20";
                                                    };
                                                }];
                                                readonly expression: {
                                                    readonly argumentTypes: readonly [{
                                                        readonly typeIdentifier: "t_contract$_IERC20_$9666";
                                                        readonly typeString: "contract IERC20";
                                                    }];
                                                    readonly id: 25012;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "ElementaryTypeNameExpression";
                                                    readonly src: "10429:7:135";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_address_$";
                                                        readonly typeString: "type(address)";
                                                    };
                                                    readonly typeName: {
                                                        readonly id: 25011;
                                                        readonly name: "address";
                                                        readonly nodeType: "ElementaryTypeName";
                                                        readonly src: "10429:7:135";
                                                        readonly typeDescriptions: {};
                                                    };
                                                };
                                                readonly id: 25014;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly kind: "typeConversion";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "10429:19:135";
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
                                                readonly id: 25010;
                                                readonly name: "ERC20Mintable";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 23490;
                                                readonly src: "10415:13:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_contract$_ERC20Mintable_$23490_$";
                                                    readonly typeString: "type(contract ERC20Mintable)";
                                                };
                                            };
                                            readonly id: 25015;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "10415:34:135";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_contract$_ERC20Mintable_$23490";
                                                readonly typeString: "contract ERC20Mintable";
                                            };
                                        };
                                        readonly id: 25016;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "10450:4:135";
                                        readonly memberName: "mint";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 23460;
                                        readonly src: "10415:39:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$__$";
                                            readonly typeString: "function (address,uint256) external";
                                        };
                                    };
                                    readonly id: 25025;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "10415:119:135";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 25026;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "10415:119:135";
                            }];
                        };
                    }];
                };
                readonly functionSelector: "68096239";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "accrue";
                readonly nameLocation: "10163:6:135";
                readonly parameters: {
                    readonly id: 24990;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24987;
                        readonly mutability: "mutable";
                        readonly name: "time";
                        readonly nameLocation: "10178:4:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25053;
                        readonly src: "10170:12:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24986;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "10170:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 24989;
                        readonly mutability: "mutable";
                        readonly name: "apr";
                        readonly nameLocation: "10191:3:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25053;
                        readonly src: "10184:10:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 24988;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "10184:6:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "10169:26:135";
                };
                readonly returnParameters: {
                    readonly id: 24991;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "10205:0:135";
                };
                readonly scope: 25235;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 25081;
                readonly nodeType: "FunctionDefinition";
                readonly src: "10726:411:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25080;
                    readonly nodeType: "Block";
                    readonly src: "10926:211:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 25074;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly components: readonly [{
                                    readonly id: 25066;
                                    readonly name: "curveFee";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25062;
                                    readonly src: "10937:8:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 25067;
                                    readonly name: "governanceCurveFee";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25064;
                                    readonly src: "10947:18:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly id: 25068;
                                readonly isConstant: false;
                                readonly isInlineArray: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly nodeType: "TupleExpression";
                                readonly src: "10936:30:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$";
                                    readonly typeString: "tuple(uint256,uint256)";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly id: 25070;
                                    readonly name: "_shareAmount";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25055;
                                    readonly src: "11008:12:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 25071;
                                    readonly name: "_spotPrice";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25057;
                                    readonly src: "11034:10:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 25072;
                                    readonly name: "vaultSharePrice";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25059;
                                    readonly src: "11058:15:135";
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
                                    }];
                                    readonly id: 25069;
                                    readonly name: "_calculateFeesGivenShares";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13518;
                                    readonly src: "10969:25:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_view$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256,uint256) view returns (uint256,uint256)";
                                    };
                                };
                                readonly id: 25073;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "10969:114:135";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$";
                                    readonly typeString: "tuple(uint256,uint256)";
                                };
                            };
                            readonly src: "10936:147:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 25075;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "10936:147:135";
                    }, {
                        readonly expression: {
                            readonly components: readonly [{
                                readonly id: 25076;
                                readonly name: "curveFee";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25062;
                                readonly src: "11101:8:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 25077;
                                readonly name: "governanceCurveFee";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25064;
                                readonly src: "11111:18:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly id: 25078;
                            readonly isConstant: false;
                            readonly isInlineArray: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "TupleExpression";
                            readonly src: "11100:30:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$";
                                readonly typeString: "tuple(uint256,uint256)";
                            };
                        };
                        readonly functionReturnParameters: 25065;
                        readonly id: 25079;
                        readonly nodeType: "Return";
                        readonly src: "11093:37:135";
                    }];
                };
                readonly functionSelector: "71f88b7c";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateFeesGivenShares";
                readonly nameLocation: "10735:24:135";
                readonly parameters: {
                    readonly id: 25060;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25055;
                        readonly mutability: "mutable";
                        readonly name: "_shareAmount";
                        readonly nameLocation: "10777:12:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25081;
                        readonly src: "10769:20:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25054;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "10769:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25057;
                        readonly mutability: "mutable";
                        readonly name: "_spotPrice";
                        readonly nameLocation: "10807:10:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25081;
                        readonly src: "10799:18:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25056;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "10799:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25059;
                        readonly mutability: "mutable";
                        readonly name: "vaultSharePrice";
                        readonly nameLocation: "10835:15:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25081;
                        readonly src: "10827:23:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25058;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "10827:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "10759:97:135";
                };
                readonly returnParameters: {
                    readonly id: 25065;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25062;
                        readonly mutability: "mutable";
                        readonly name: "curveFee";
                        readonly nameLocation: "10888:8:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25081;
                        readonly src: "10880:16:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25061;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "10880:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25064;
                        readonly mutability: "mutable";
                        readonly name: "governanceCurveFee";
                        readonly nameLocation: "10906:18:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25081;
                        readonly src: "10898:26:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25063;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "10898:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "10879:46:135";
                };
                readonly scope: 25235;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 25120;
                readonly nodeType: "FunctionDefinition";
                readonly src: "11143:822:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25119;
                    readonly nodeType: "Block";
                    readonly src: "11524:441:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 25111;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly components: readonly [{
                                    readonly id: 25100;
                                    readonly name: "totalCurveFee";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25092;
                                    readonly src: "11548:13:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 25101;
                                    readonly name: "totalFlatFee";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25094;
                                    readonly src: "11575:12:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 25102;
                                    readonly name: "governanceCurveFee";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25096;
                                    readonly src: "11601:18:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 25103;
                                    readonly name: "totalGovernanceFee";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25098;
                                    readonly src: "11633:18:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly id: 25104;
                                readonly isConstant: false;
                                readonly isInlineArray: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly nodeType: "TupleExpression";
                                readonly src: "11534:127:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$";
                                    readonly typeString: "tuple(uint256,uint256,uint256,uint256)";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly id: 25106;
                                    readonly name: "_bondAmount";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25083;
                                    readonly src: "11702:11:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 25107;
                                    readonly name: "_normalizedTimeRemaining";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25085;
                                    readonly src: "11727:24:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 25108;
                                    readonly name: "_spotPrice";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25087;
                                    readonly src: "11765:10:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 25109;
                                    readonly name: "vaultSharePrice";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25089;
                                    readonly src: "11789:15:135";
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
                                    readonly id: 25105;
                                    readonly name: "_calculateFeesGivenBonds";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13588;
                                    readonly src: "11664:24:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_view$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256,uint256,uint256) view returns (uint256,uint256,uint256,uint256)";
                                    };
                                };
                                readonly id: 25110;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "11664:150:135";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$";
                                    readonly typeString: "tuple(uint256,uint256,uint256,uint256)";
                                };
                            };
                            readonly src: "11534:280:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 25112;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "11534:280:135";
                    }, {
                        readonly expression: {
                            readonly components: readonly [{
                                readonly id: 25113;
                                readonly name: "totalCurveFee";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25092;
                                readonly src: "11845:13:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 25114;
                                readonly name: "totalFlatFee";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25094;
                                readonly src: "11872:12:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 25115;
                                readonly name: "governanceCurveFee";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25096;
                                readonly src: "11898:18:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 25116;
                                readonly name: "totalGovernanceFee";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25098;
                                readonly src: "11930:18:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly id: 25117;
                            readonly isConstant: false;
                            readonly isInlineArray: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "TupleExpression";
                            readonly src: "11831:127:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$";
                                readonly typeString: "tuple(uint256,uint256,uint256,uint256)";
                            };
                        };
                        readonly functionReturnParameters: 25099;
                        readonly id: 25118;
                        readonly nodeType: "Return";
                        readonly src: "11824:134:135";
                    }];
                };
                readonly functionSelector: "22d5506b";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateFeesGivenBonds";
                readonly nameLocation: "11152:23:135";
                readonly parameters: {
                    readonly id: 25090;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25083;
                        readonly mutability: "mutable";
                        readonly name: "_bondAmount";
                        readonly nameLocation: "11193:11:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25120;
                        readonly src: "11185:19:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25082;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11185:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25085;
                        readonly mutability: "mutable";
                        readonly name: "_normalizedTimeRemaining";
                        readonly nameLocation: "11222:24:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25120;
                        readonly src: "11214:32:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25084;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11214:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25087;
                        readonly mutability: "mutable";
                        readonly name: "_spotPrice";
                        readonly nameLocation: "11264:10:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25120;
                        readonly src: "11256:18:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25086;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11256:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25089;
                        readonly mutability: "mutable";
                        readonly name: "vaultSharePrice";
                        readonly nameLocation: "11292:15:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25120;
                        readonly src: "11284:23:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25088;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11284:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "11175:138:135";
                };
                readonly returnParameters: {
                    readonly id: 25099;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25092;
                        readonly mutability: "mutable";
                        readonly name: "totalCurveFee";
                        readonly nameLocation: "11382:13:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25120;
                        readonly src: "11374:21:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25091;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11374:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25094;
                        readonly mutability: "mutable";
                        readonly name: "totalFlatFee";
                        readonly nameLocation: "11417:12:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25120;
                        readonly src: "11409:20:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25093;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11409:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25096;
                        readonly mutability: "mutable";
                        readonly name: "governanceCurveFee";
                        readonly nameLocation: "11451:18:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25120;
                        readonly src: "11443:26:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25095;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11443:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25098;
                        readonly mutability: "mutable";
                        readonly name: "totalGovernanceFee";
                        readonly nameLocation: "11491:18:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25120;
                        readonly src: "11483:26:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25097;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11483:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "11360:159:135";
                };
                readonly scope: 25235;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 25139;
                readonly nodeType: "FunctionDefinition";
                readonly src: "12014:351:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25138;
                    readonly nodeType: "Block";
                    readonly src: "12291:74:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 25134;
                                readonly name: "_shareAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25122;
                                readonly src: "12327:12:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 25135;
                                readonly name: "_vaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25124;
                                readonly src: "12341:16:135";
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
                                }];
                                readonly id: 25133;
                                readonly name: "_calculateOpenLong";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 15915;
                                readonly src: "12308:18:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256) view returns (uint256,uint256,uint256)";
                                };
                            };
                            readonly id: 25136;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "12308:50:135";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$";
                                readonly typeString: "tuple(uint256,uint256,uint256)";
                            };
                        };
                        readonly functionReturnParameters: 25132;
                        readonly id: 25137;
                        readonly nodeType: "Return";
                        readonly src: "12301:57:135";
                    }];
                };
                readonly functionSelector: "9bd33498";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateOpenLong";
                readonly nameLocation: "12023:17:135";
                readonly parameters: {
                    readonly id: 25125;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25122;
                        readonly mutability: "mutable";
                        readonly name: "_shareAmount";
                        readonly nameLocation: "12058:12:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25139;
                        readonly src: "12050:20:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25121;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "12050:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25124;
                        readonly mutability: "mutable";
                        readonly name: "_vaultSharePrice";
                        readonly nameLocation: "12088:16:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25139;
                        readonly src: "12080:24:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25123;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "12080:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "12040:70:135";
                };
                readonly returnParameters: {
                    readonly id: 25132;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25127;
                        readonly mutability: "mutable";
                        readonly name: "shareReservesDelta";
                        readonly nameLocation: "12179:18:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25139;
                        readonly src: "12171:26:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25126;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "12171:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25129;
                        readonly mutability: "mutable";
                        readonly name: "bondReservesDelta";
                        readonly nameLocation: "12219:17:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25139;
                        readonly src: "12211:25:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25128;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "12211:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25131;
                        readonly mutability: "mutable";
                        readonly name: "totalGovernanceFee";
                        readonly nameLocation: "12258:18:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25139;
                        readonly src: "12250:26:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25130;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "12250:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "12157:129:135";
                };
                readonly scope: 25235;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 25151;
                readonly nodeType: "FunctionDefinition";
                readonly src: "12371:177:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25150;
                    readonly nodeType: "Block";
                    readonly src: "12486:62:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 25147;
                                readonly name: "_maturityTime";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25141;
                                readonly src: "12527:13:135";
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
                                readonly id: 25146;
                                readonly name: "_calculateTimeRemaining";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 12838;
                                readonly src: "12503:23:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256) view returns (uint256)";
                                };
                            };
                            readonly id: 25148;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "12503:38:135";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 25145;
                        readonly id: 25149;
                        readonly nodeType: "Return";
                        readonly src: "12496:45:135";
                    }];
                };
                readonly functionSelector: "68c2ecb8";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateTimeRemaining";
                readonly nameLocation: "12380:22:135";
                readonly parameters: {
                    readonly id: 25142;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25141;
                        readonly mutability: "mutable";
                        readonly name: "_maturityTime";
                        readonly nameLocation: "12420:13:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25151;
                        readonly src: "12412:21:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25140;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "12412:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "12402:37:135";
                };
                readonly returnParameters: {
                    readonly id: 25145;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25144;
                        readonly mutability: "mutable";
                        readonly name: "timeRemaining";
                        readonly nameLocation: "12471:13:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25151;
                        readonly src: "12463:21:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25143;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "12463:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "12462:23:135";
                };
                readonly scope: 25235;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 25163;
                readonly nodeType: "FunctionDefinition";
                readonly src: "12554:189:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25162;
                    readonly nodeType: "Block";
                    readonly src: "12675:68:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 25159;
                                readonly name: "_maturityTime";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25153;
                                readonly src: "12722:13:135";
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
                                readonly id: 25158;
                                readonly name: "_calculateTimeRemainingScaled";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 12874;
                                readonly src: "12692:29:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256) view returns (uint256)";
                                };
                            };
                            readonly id: 25160;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "12692:44:135";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 25157;
                        readonly id: 25161;
                        readonly nodeType: "Return";
                        readonly src: "12685:51:135";
                    }];
                };
                readonly functionSelector: "ca6d38f7";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateTimeRemainingScaled";
                readonly nameLocation: "12563:28:135";
                readonly parameters: {
                    readonly id: 25154;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25153;
                        readonly mutability: "mutable";
                        readonly name: "_maturityTime";
                        readonly nameLocation: "12609:13:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25163;
                        readonly src: "12601:21:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25152;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "12601:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "12591:37:135";
                };
                readonly returnParameters: {
                    readonly id: 25157;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25156;
                        readonly mutability: "mutable";
                        readonly name: "timeRemaining";
                        readonly nameLocation: "12660:13:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25163;
                        readonly src: "12652:21:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25155;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "12652:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "12651:23:135";
                };
                readonly scope: 25235;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 25172;
                readonly nodeType: "FunctionDefinition";
                readonly src: "12749:118:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25171;
                    readonly nodeType: "Block";
                    readonly src: "12824:43:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [];
                            readonly expression: {
                                readonly argumentTypes: readonly [];
                                readonly id: 25168;
                                readonly name: "_latestCheckpoint";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 12892;
                                readonly src: "12841:17:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$__$returns$_t_uint256_$";
                                    readonly typeString: "function () view returns (uint256)";
                                };
                            };
                            readonly id: 25169;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "12841:19:135";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 25167;
                        readonly id: 25170;
                        readonly nodeType: "Return";
                        readonly src: "12834:26:135";
                    }];
                };
                readonly functionSelector: "907c0f92";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "latestCheckpoint";
                readonly nameLocation: "12758:16:135";
                readonly parameters: {
                    readonly id: 25164;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "12774:2:135";
                };
                readonly returnParameters: {
                    readonly id: 25167;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25166;
                        readonly mutability: "mutable";
                        readonly name: "checkpointTime";
                        readonly nameLocation: "12808:14:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25172;
                        readonly src: "12800:22:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25165;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "12800:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "12799:24:135";
                };
                readonly scope: 25235;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 25182;
                readonly nodeType: "FunctionDefinition";
                readonly src: "12873:116:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25181;
                    readonly nodeType: "Block";
                    readonly src: "12935:54:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 25178;
                                readonly name: "_shareReservesDelta";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25174;
                                readonly src: "12962:19:135";
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
                                readonly id: 25177;
                                readonly name: "_updateLiquidity";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 15038;
                                readonly src: "12945:16:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_int256_$returns$__$";
                                    readonly typeString: "function (int256)";
                                };
                            };
                            readonly id: 25179;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "12945:37:135";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 25180;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "12945:37:135";
                    }];
                };
                readonly functionSelector: "8120a3e2";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "updateLiquidity";
                readonly nameLocation: "12882:15:135";
                readonly parameters: {
                    readonly id: 25175;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25174;
                        readonly mutability: "mutable";
                        readonly name: "_shareReservesDelta";
                        readonly nameLocation: "12905:19:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25182;
                        readonly src: "12898:26:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 25173;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "12898:6:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "12897:28:135";
                };
                readonly returnParameters: {
                    readonly id: 25176;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "12935:0:135";
                };
                readonly scope: 25235;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 25194;
                readonly nodeType: "FunctionDefinition";
                readonly src: "12995:177:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25193;
                    readonly nodeType: "Block";
                    readonly src: "13103:69:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 25190;
                                readonly name: "_vaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25184;
                                readonly src: "13148:16:135";
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
                                readonly id: 25189;
                                readonly name: "_calculateIdleShareReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13400;
                                readonly src: "13120:27:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256) view returns (uint256)";
                                };
                            };
                            readonly id: 25191;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "13120:45:135";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 25188;
                        readonly id: 25192;
                        readonly nodeType: "Return";
                        readonly src: "13113:52:135";
                    }];
                };
                readonly functionSelector: "b1b4b170";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateIdleShareReserves";
                readonly nameLocation: "13004:26:135";
                readonly parameters: {
                    readonly id: 25185;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25184;
                        readonly mutability: "mutable";
                        readonly name: "_vaultSharePrice";
                        readonly nameLocation: "13048:16:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25194;
                        readonly src: "13040:24:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25183;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "13040:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "13030:40:135";
                };
                readonly returnParameters: {
                    readonly id: 25188;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25187;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25194;
                        readonly src: "13094:7:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25186;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "13094:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "13093:9:135";
                };
                readonly scope: 25235;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 25202;
                readonly nodeType: "FunctionDefinition";
                readonly src: "13178:93:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25201;
                    readonly nodeType: "Block";
                    readonly src: "13236:35:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 25199;
                            readonly name: "totalShares";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 24389;
                            readonly src: "13253:11:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 25198;
                        readonly id: 25200;
                        readonly nodeType: "Return";
                        readonly src: "13246:18:135";
                    }];
                };
                readonly functionSelector: "d5002f2e";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getTotalShares";
                readonly nameLocation: "13187:14:135";
                readonly parameters: {
                    readonly id: 25195;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "13201:2:135";
                };
                readonly returnParameters: {
                    readonly id: 25198;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25197;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25202;
                        readonly src: "13227:7:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25196;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "13227:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "13226:9:135";
                };
                readonly scope: 25235;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 25222;
                readonly nodeType: "FunctionDefinition";
                readonly src: "13277:184:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25221;
                    readonly nodeType: "Block";
                    readonly src: "13352:109:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 25213;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 25209;
                                    readonly name: "_marketState";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17570;
                                    readonly src: "13362:12:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_MarketState_$10041_storage";
                                        readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                    };
                                };
                                readonly id: 25211;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "13375:13:135";
                                readonly memberName: "shareReserves";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10007;
                                readonly src: "13362:26:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 25212;
                                readonly name: "shareReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25204;
                                readonly src: "13391:13:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                };
                            };
                            readonly src: "13362:42:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint128";
                                readonly typeString: "uint128";
                            };
                        };
                        readonly id: 25214;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "13362:42:135";
                    }, {
                        readonly expression: {
                            readonly id: 25219;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 25215;
                                    readonly name: "_marketState";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17570;
                                    readonly src: "13414:12:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_MarketState_$10041_storage";
                                        readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                    };
                                };
                                readonly id: 25217;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "13427:12:135";
                                readonly memberName: "bondReserves";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10010;
                                readonly src: "13414:25:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 25218;
                                readonly name: "bondReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25206;
                                readonly src: "13442:12:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                };
                            };
                            readonly src: "13414:40:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint128";
                                readonly typeString: "uint128";
                            };
                        };
                        readonly id: 25220;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "13414:40:135";
                    }];
                };
                readonly functionSelector: "702db0eb";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "setReserves";
                readonly nameLocation: "13286:11:135";
                readonly parameters: {
                    readonly id: 25207;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25204;
                        readonly mutability: "mutable";
                        readonly name: "shareReserves";
                        readonly nameLocation: "13306:13:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25222;
                        readonly src: "13298:21:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint128";
                            readonly typeString: "uint128";
                        };
                        readonly typeName: {
                            readonly id: 25203;
                            readonly name: "uint128";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "13298:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint128";
                                readonly typeString: "uint128";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25206;
                        readonly mutability: "mutable";
                        readonly name: "bondReserves";
                        readonly nameLocation: "13329:12:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25222;
                        readonly src: "13321:20:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint128";
                            readonly typeString: "uint128";
                        };
                        readonly typeName: {
                            readonly id: 25205;
                            readonly name: "uint128";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "13321:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint128";
                                readonly typeString: "uint128";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "13297:45:135";
                };
                readonly returnParameters: {
                    readonly id: 25208;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "13352:0:135";
                };
                readonly scope: 25235;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 25234;
                readonly nodeType: "FunctionDefinition";
                readonly src: "13467:113:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25233;
                    readonly nodeType: "Block";
                    readonly src: "13523:57:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 25231;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 25227;
                                    readonly name: "_marketState";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17570;
                                    readonly src: "13533:12:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_MarketState_$10041_storage";
                                        readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                    };
                                };
                                readonly id: 25229;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "13546:12:135";
                                readonly memberName: "longExposure";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10013;
                                readonly src: "13533:25:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 25230;
                                readonly name: "longExposure";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25224;
                                readonly src: "13561:12:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                };
                            };
                            readonly src: "13533:40:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint128";
                                readonly typeString: "uint128";
                            };
                        };
                        readonly id: 25232;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "13533:40:135";
                    }];
                };
                readonly functionSelector: "b4f8da39";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "setLongExposure";
                readonly nameLocation: "13476:15:135";
                readonly parameters: {
                    readonly id: 25225;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25224;
                        readonly mutability: "mutable";
                        readonly name: "longExposure";
                        readonly nameLocation: "13500:12:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25234;
                        readonly src: "13492:20:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint128";
                            readonly typeString: "uint128";
                        };
                        readonly typeName: {
                            readonly id: 25223;
                            readonly name: "uint128";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "13492:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint128";
                                readonly typeString: "uint128";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "13491:22:135";
                };
                readonly returnParameters: {
                    readonly id: 25226;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "13523:0:135";
                };
                readonly scope: 25235;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 24907;
                    readonly name: "Hyperdrive";
                    readonly nameLocations: readonly ["9273:10:135"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 4375;
                    readonly src: "9273:10:135";
                };
                readonly id: 24908;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "9273:10:135";
            }, {
                readonly baseName: {
                    readonly id: 24909;
                    readonly name: "MockHyperdriveBase";
                    readonly nameLocations: readonly ["9285:18:135"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 24906;
                    readonly src: "9285:18:135";
                };
                readonly id: 24910;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "9285:18:135";
            }];
            readonly canonicalName: "MockHyperdrive";
            readonly contractDependencies: readonly [25264, 25279, 25294, 25309, 25324];
            readonly contractKind: "contract";
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [25235, 24906, 4375, 14161, 17512, 16054, 15127, 16538, 12497, 13667, 17734, 71745, 10887, 11459, 10542, 11425];
            readonly name: "MockHyperdrive";
            readonly nameLocation: "9255:14:135";
            readonly scope: 25325;
            readonly usedErrors: readonly [10219, 10228, 10258, 10302, 10308, 10311, 10314, 10320, 71690];
            readonly usedEvents: readonly [10705, 10720, 10739, 10754, 10771, 10790, 10809, 10830, 10845, 10852, 10857, 10862, 10867, 10874, 10879, 10886, 11440, 11449, 11458];
        }, {
            readonly id: 25264;
            readonly nodeType: "ContractDefinition";
            readonly src: "13584:327:135";
            readonly nodes: readonly [{
                readonly id: 25249;
                readonly nodeType: "FunctionDefinition";
                readonly src: "13662:94:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25248;
                    readonly nodeType: "Block";
                    readonly src: "13754:2:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [];
                };
                readonly implemented: true;
                readonly kind: "constructor";
                readonly modifiers: readonly [{
                    readonly arguments: readonly [{
                        readonly id: 25245;
                        readonly name: "_config";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 25242;
                        readonly src: "13745:7:135";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10154_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig memory";
                        };
                    }];
                    readonly id: 25246;
                    readonly kind: "baseConstructorSpecifier";
                    readonly modifierName: {
                        readonly id: 25244;
                        readonly name: "HyperdriveTarget0";
                        readonly nameLocations: readonly ["13727:17:135"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 5190;
                        readonly src: "13727:17:135";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "13727:26:135";
                }];
                readonly name: "";
                readonly nameLocation: "-1:-1:-1";
                readonly parameters: {
                    readonly id: 25243;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25242;
                        readonly mutability: "mutable";
                        readonly name: "_config";
                        readonly nameLocation: "13713:7:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25249;
                        readonly src: "13683:37:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10154_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig";
                        };
                        readonly typeName: {
                            readonly id: 25241;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 25240;
                                readonly name: "IHyperdrive.PoolConfig";
                                readonly nameLocations: readonly ["13683:11:135", "13695:10:135"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10154;
                                readonly src: "13683:22:135";
                            };
                            readonly referencedDeclaration: 10154;
                            readonly src: "13683:22:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolConfig_$10154_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "13673:53:135";
                };
                readonly returnParameters: {
                    readonly id: 25247;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "13754:0:135";
                };
                readonly scope: 25264;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "public";
            }, {
                readonly id: 25263;
                readonly nodeType: "FunctionDefinition";
                readonly src: "13781:128:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25262;
                    readonly nodeType: "Block";
                    readonly src: "13849:60:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 25258;
                                    readonly name: "_governanceFeesAccrued";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17592;
                                    readonly src: "13878:22:135";
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
                                        readonly id: 25256;
                                        readonly name: "abi";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -1;
                                        readonly src: "13867:3:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_magic_abi";
                                            readonly typeString: "abi";
                                        };
                                    };
                                    readonly id: 25257;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "13871:6:135";
                                    readonly memberName: "encode";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "13867:10:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$";
                                        readonly typeString: "function () pure returns (bytes memory)";
                                    };
                                };
                                readonly id: 25259;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "13867:34:135";
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
                                readonly id: 25255;
                                readonly name: "_revert";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 5189;
                                readonly src: "13859:7:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bytes memory) pure";
                                };
                            };
                            readonly id: 25260;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "13859:43:135";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 25261;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "13859:43:135";
                    }];
                };
                readonly documentation: {
                    readonly id: 25250;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "13762:14:135";
                    readonly text: "Mocks ///";
                };
                readonly functionSelector: "8e67f87e";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getGovernanceFeesAccrued";
                readonly nameLocation: "13790:24:135";
                readonly parameters: {
                    readonly id: 25251;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "13814:2:135";
                };
                readonly returnParameters: {
                    readonly id: 25254;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25253;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25263;
                        readonly src: "13840:7:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25252;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "13840:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "13839:9:135";
                };
                readonly scope: 25264;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 25236;
                    readonly name: "HyperdriveTarget0";
                    readonly nameLocations: readonly ["13618:17:135"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 5190;
                    readonly src: "13618:17:135";
                };
                readonly id: 25237;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "13618:17:135";
            }, {
                readonly baseName: {
                    readonly id: 25238;
                    readonly name: "MockHyperdriveBase";
                    readonly nameLocations: readonly ["13637:18:135"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 24906;
                    readonly src: "13637:18:135";
                };
                readonly id: 25239;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "13637:18:135";
            }];
            readonly canonicalName: "MockHyperdriveTarget0";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [25264, 24906, 5190, 14161, 17512, 16054, 15127, 16538, 12497, 13667, 17734, 71745, 10887, 11459, 11207, 11547];
            readonly name: "MockHyperdriveTarget0";
            readonly nameLocation: "13593:21:135";
            readonly scope: 25325;
            readonly usedErrors: readonly [10213, 10219, 10222, 10237, 10240, 10249, 10252, 10255, 10258, 10282, 10287, 10290, 10296, 10299, 10314, 71120, 71401, 71406, 71409, 71690];
            readonly usedEvents: readonly [10705, 10720, 10739, 10754, 10771, 10790, 10809, 10830, 10845, 10852, 10857, 10862, 10867, 10874, 10879, 10886, 11440, 11449, 11458];
        }, {
            readonly id: 25279;
            readonly nodeType: "ContractDefinition";
            readonly src: "13913:174:135";
            readonly nodes: readonly [{
                readonly id: 25278;
                readonly nodeType: "FunctionDefinition";
                readonly src: "13991:94:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25277;
                    readonly nodeType: "Block";
                    readonly src: "14083:2:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [];
                };
                readonly implemented: true;
                readonly kind: "constructor";
                readonly modifiers: readonly [{
                    readonly arguments: readonly [{
                        readonly id: 25274;
                        readonly name: "_config";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 25271;
                        readonly src: "14074:7:135";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10154_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig memory";
                        };
                    }];
                    readonly id: 25275;
                    readonly kind: "baseConstructorSpecifier";
                    readonly modifierName: {
                        readonly id: 25273;
                        readonly name: "HyperdriveTarget1";
                        readonly nameLocations: readonly ["14056:17:135"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 5278;
                        readonly src: "14056:17:135";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "14056:26:135";
                }];
                readonly name: "";
                readonly nameLocation: "-1:-1:-1";
                readonly parameters: {
                    readonly id: 25272;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25271;
                        readonly mutability: "mutable";
                        readonly name: "_config";
                        readonly nameLocation: "14042:7:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25278;
                        readonly src: "14012:37:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10154_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig";
                        };
                        readonly typeName: {
                            readonly id: 25270;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 25269;
                                readonly name: "IHyperdrive.PoolConfig";
                                readonly nameLocations: readonly ["14012:11:135", "14024:10:135"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10154;
                                readonly src: "14012:22:135";
                            };
                            readonly referencedDeclaration: 10154;
                            readonly src: "14012:22:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolConfig_$10154_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "14002:53:135";
                };
                readonly returnParameters: {
                    readonly id: 25276;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "14083:0:135";
                };
                readonly scope: 25279;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "public";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 25265;
                    readonly name: "HyperdriveTarget1";
                    readonly nameLocations: readonly ["13947:17:135"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 5278;
                    readonly src: "13947:17:135";
                };
                readonly id: 25266;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "13947:17:135";
            }, {
                readonly baseName: {
                    readonly id: 25267;
                    readonly name: "MockHyperdriveBase";
                    readonly nameLocations: readonly ["13966:18:135"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 24906;
                    readonly src: "13966:18:135";
                };
                readonly id: 25268;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "13966:18:135";
            }];
            readonly canonicalName: "MockHyperdriveTarget1";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [25279, 24906, 5278, 14161, 17512, 16054, 15127, 16538, 12497, 13667, 17734, 71745, 10887, 11459];
            readonly name: "MockHyperdriveTarget1";
            readonly nameLocation: "13922:21:135";
            readonly scope: 25325;
            readonly usedErrors: readonly [10219, 10225, 10228, 10249, 10255, 10258, 10264, 10273, 10282, 10293, 10296, 10305, 10308, 10311, 10314, 71690];
            readonly usedEvents: readonly [10705, 10720, 10739, 10754, 10771, 10790, 10809, 10830, 10845, 10852, 10857, 10862, 10867, 10874, 10879, 10886, 11440, 11449, 11458];
        }, {
            readonly id: 25294;
            readonly nodeType: "ContractDefinition";
            readonly src: "14089:174:135";
            readonly nodes: readonly [{
                readonly id: 25293;
                readonly nodeType: "FunctionDefinition";
                readonly src: "14167:94:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25292;
                    readonly nodeType: "Block";
                    readonly src: "14259:2:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [];
                };
                readonly implemented: true;
                readonly kind: "constructor";
                readonly modifiers: readonly [{
                    readonly arguments: readonly [{
                        readonly id: 25289;
                        readonly name: "_config";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 25286;
                        readonly src: "14250:7:135";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10154_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig memory";
                        };
                    }];
                    readonly id: 25290;
                    readonly kind: "baseConstructorSpecifier";
                    readonly modifierName: {
                        readonly id: 25288;
                        readonly name: "HyperdriveTarget2";
                        readonly nameLocations: readonly ["14232:17:135"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 5366;
                        readonly src: "14232:17:135";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "14232:26:135";
                }];
                readonly name: "";
                readonly nameLocation: "-1:-1:-1";
                readonly parameters: {
                    readonly id: 25287;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25286;
                        readonly mutability: "mutable";
                        readonly name: "_config";
                        readonly nameLocation: "14218:7:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25293;
                        readonly src: "14188:37:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10154_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig";
                        };
                        readonly typeName: {
                            readonly id: 25285;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 25284;
                                readonly name: "IHyperdrive.PoolConfig";
                                readonly nameLocations: readonly ["14188:11:135", "14200:10:135"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10154;
                                readonly src: "14188:22:135";
                            };
                            readonly referencedDeclaration: 10154;
                            readonly src: "14188:22:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolConfig_$10154_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "14178:53:135";
                };
                readonly returnParameters: {
                    readonly id: 25291;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "14259:0:135";
                };
                readonly scope: 25294;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "public";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 25280;
                    readonly name: "HyperdriveTarget2";
                    readonly nameLocations: readonly ["14123:17:135"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 5366;
                    readonly src: "14123:17:135";
                };
                readonly id: 25281;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "14123:17:135";
            }, {
                readonly baseName: {
                    readonly id: 25282;
                    readonly name: "MockHyperdriveBase";
                    readonly nameLocations: readonly ["14142:18:135"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 24906;
                    readonly src: "14142:18:135";
                };
                readonly id: 25283;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "14142:18:135";
            }];
            readonly canonicalName: "MockHyperdriveTarget2";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [25294, 24906, 5366, 14161, 17512, 16054, 15127, 16538, 12497, 13667, 17734, 71745, 10887, 11459];
            readonly name: "MockHyperdriveTarget2";
            readonly nameLocation: "14098:21:135";
            readonly scope: 25325;
            readonly usedErrors: readonly [10219, 10225, 10228, 10249, 10255, 10258, 10264, 10273, 10282, 10293, 10296, 10305, 10308, 10311, 10314, 71690];
            readonly usedEvents: readonly [10705, 10720, 10739, 10754, 10771, 10790, 10809, 10830, 10845, 10852, 10857, 10862, 10867, 10874, 10879, 10886, 11440, 11449, 11458];
        }, {
            readonly id: 25309;
            readonly nodeType: "ContractDefinition";
            readonly src: "14265:174:135";
            readonly nodes: readonly [{
                readonly id: 25308;
                readonly nodeType: "FunctionDefinition";
                readonly src: "14343:94:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25307;
                    readonly nodeType: "Block";
                    readonly src: "14435:2:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [];
                };
                readonly implemented: true;
                readonly kind: "constructor";
                readonly modifiers: readonly [{
                    readonly arguments: readonly [{
                        readonly id: 25304;
                        readonly name: "_config";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 25301;
                        readonly src: "14426:7:135";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10154_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig memory";
                        };
                    }];
                    readonly id: 25305;
                    readonly kind: "baseConstructorSpecifier";
                    readonly modifierName: {
                        readonly id: 25303;
                        readonly name: "HyperdriveTarget3";
                        readonly nameLocations: readonly ["14408:17:135"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 5468;
                        readonly src: "14408:17:135";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "14408:26:135";
                }];
                readonly name: "";
                readonly nameLocation: "-1:-1:-1";
                readonly parameters: {
                    readonly id: 25302;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25301;
                        readonly mutability: "mutable";
                        readonly name: "_config";
                        readonly nameLocation: "14394:7:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25308;
                        readonly src: "14364:37:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10154_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig";
                        };
                        readonly typeName: {
                            readonly id: 25300;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 25299;
                                readonly name: "IHyperdrive.PoolConfig";
                                readonly nameLocations: readonly ["14364:11:135", "14376:10:135"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10154;
                                readonly src: "14364:22:135";
                            };
                            readonly referencedDeclaration: 10154;
                            readonly src: "14364:22:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolConfig_$10154_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "14354:53:135";
                };
                readonly returnParameters: {
                    readonly id: 25306;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "14435:0:135";
                };
                readonly scope: 25309;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "public";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 25295;
                    readonly name: "HyperdriveTarget3";
                    readonly nameLocations: readonly ["14299:17:135"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 5468;
                    readonly src: "14299:17:135";
                };
                readonly id: 25296;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "14299:17:135";
            }, {
                readonly baseName: {
                    readonly id: 25297;
                    readonly name: "MockHyperdriveBase";
                    readonly nameLocations: readonly ["14318:18:135"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 24906;
                    readonly src: "14318:18:135";
                };
                readonly id: 25298;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "14318:18:135";
            }];
            readonly canonicalName: "MockHyperdriveTarget3";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [25309, 24906, 5468, 14161, 17512, 16054, 15127, 16538, 12497, 13667, 17734, 71745, 10887, 11459];
            readonly name: "MockHyperdriveTarget3";
            readonly nameLocation: "14274:21:135";
            readonly scope: 25325;
            readonly usedErrors: readonly [10216, 10219, 10228, 10234, 10249, 10255, 10258, 10261, 10264, 10270, 10273, 10276, 10279, 10282, 10293, 10296, 10305, 10308, 10311, 10314, 71690];
            readonly usedEvents: readonly [10705, 10720, 10739, 10754, 10771, 10790, 10809, 10830, 10845, 10852, 10857, 10862, 10867, 10874, 10879, 10886, 11440, 11449, 11458];
        }, {
            readonly id: 25324;
            readonly nodeType: "ContractDefinition";
            readonly src: "14441:174:135";
            readonly nodes: readonly [{
                readonly id: 25323;
                readonly nodeType: "FunctionDefinition";
                readonly src: "14519:94:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25322;
                    readonly nodeType: "Block";
                    readonly src: "14611:2:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [];
                };
                readonly implemented: true;
                readonly kind: "constructor";
                readonly modifiers: readonly [{
                    readonly arguments: readonly [{
                        readonly id: 25319;
                        readonly name: "_config";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 25316;
                        readonly src: "14602:7:135";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10154_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig memory";
                        };
                    }];
                    readonly id: 25320;
                    readonly kind: "baseConstructorSpecifier";
                    readonly modifierName: {
                        readonly id: 25318;
                        readonly name: "HyperdriveTarget4";
                        readonly nameLocations: readonly ["14584:17:135"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 5562;
                        readonly src: "14584:17:135";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "14584:26:135";
                }];
                readonly name: "";
                readonly nameLocation: "-1:-1:-1";
                readonly parameters: {
                    readonly id: 25317;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25316;
                        readonly mutability: "mutable";
                        readonly name: "_config";
                        readonly nameLocation: "14570:7:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25323;
                        readonly src: "14540:37:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10154_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig";
                        };
                        readonly typeName: {
                            readonly id: 25315;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 25314;
                                readonly name: "IHyperdrive.PoolConfig";
                                readonly nameLocations: readonly ["14540:11:135", "14552:10:135"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10154;
                                readonly src: "14540:22:135";
                            };
                            readonly referencedDeclaration: 10154;
                            readonly src: "14540:22:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolConfig_$10154_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "14530:53:135";
                };
                readonly returnParameters: {
                    readonly id: 25321;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "14611:0:135";
                };
                readonly scope: 25324;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "public";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 25310;
                    readonly name: "HyperdriveTarget4";
                    readonly nameLocations: readonly ["14475:17:135"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 5562;
                    readonly src: "14475:17:135";
                };
                readonly id: 25311;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "14475:17:135";
            }, {
                readonly baseName: {
                    readonly id: 25312;
                    readonly name: "MockHyperdriveBase";
                    readonly nameLocations: readonly ["14494:18:135"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 24906;
                    readonly src: "14494:18:135";
                };
                readonly id: 25313;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "14494:18:135";
            }];
            readonly canonicalName: "MockHyperdriveTarget4";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [25324, 24906, 5562, 14161, 17512, 16054, 15127, 16538, 12497, 13667, 17734, 71745, 10887, 11459];
            readonly name: "MockHyperdriveTarget4";
            readonly nameLocation: "14450:21:135";
            readonly scope: 25325;
            readonly usedErrors: readonly [10219, 10228, 10231, 10249, 10255, 10258, 10261, 10264, 10267, 10270, 10273, 10279, 10282, 10293, 10296, 10305, 10308, 10311, 10314, 10320, 71690];
            readonly usedEvents: readonly [10705, 10720, 10739, 10754, 10771, 10790, 10809, 10830, 10845, 10852, 10857, 10862, 10867, 10874, 10879, 10886, 11440, 11449, 11458];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 135;
};
//# sourceMappingURL=MockHyperdriveTarget4.d.ts.map