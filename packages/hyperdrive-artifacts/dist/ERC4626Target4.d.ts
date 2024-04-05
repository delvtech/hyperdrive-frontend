export declare const ERC4626Target4: {
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
        readonly name: "DistributeExcessIdleFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ExpInvalidExponent";
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
        readonly name: "InvalidCheckpointTime";
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
            readonly name: "_checkpointTime";
            readonly type: "uint256";
        }];
        readonly name: "checkpoint";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
        readonly object: "0x6102406040523480156200001257600080fd5b50604051620047c4380380620047c48339810160408190526200003591620001e1565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c05260c0808501516101e0526101008086015190915260e0808601519052610120808601519091529184018051519092528151015161014090815281516040908101516101609081529251606090810151610180908152918601518516610200528501516102205290840151600a80546001600160a01b03199081169286169290921790559184015160088054841691851691909117905590920151600980549093169116179055620002d4565b6040516101c081016001600160401b03811182821017156200014957634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200016757600080fd5b919050565b6000608082840312156200017f57600080fd5b604051608081016001600160401b0381118282101715620001b057634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60006102208284031215620001f557600080fd5b620001ff62000117565b6200020a836200014f565b81526200021a602084016200014f565b60208201526200022d604084016200014f565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152506101406200028c8185016200014f565b90820152610160620002a08482016200014f565b90820152610180620002b48482016200014f565b908201526101a0620002c9858583016200016c565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516143996200042b60003960005050600050506000818160ec01526122f4015260008181610bb4015281816114070152818161146c01528181611dbc01528181611ee101528181611f1d0152818161217f01526122ce015260008181610947015281816109ad01526122a80152600061102a01526000818161115001528181611a0c0152611a8501526000818161066501528181610a47015281816111240152611a59015260006119d8015260008181610925015281816109ce015261231a015260008181610179015281816105a20152612ccc01526000818161033b01528181610448015281816104d5015261053a015260008181610ecc01528181611b4e01528181611bc80152611c5a015260008181611b210152611b8201526143996000f3fe6080604052600436106100295760003560e01c8063dbbe80701461002e578063ed64bab21461005a575b600080fd5b61004161003c366004614001565b61007c565b6040805192835260208301919091520160405180910390f35b34801561006657600080fd5b5061007a610075366004614060565b610099565b005b60008061008b868686866100a5565b915091505b94509492505050565b6100a281610304565b50565b6000806100b06103a8565b600554610100900460ff16156100d9576040516321081abf60e01b815260040160405180910390fd5b6100e16103d2565b6100ea836103f3565b7f000000000000000000000000000000000000000000000000000000000000000086101561012b5760405163211ddda360e11b815260040160405180910390fd5b6000610135610429565b905084811015610158576040516342af972b60e01b815260040160405180910390fd5b6000610162610441565b905060006101708284610477565b9050600061019e7f00000000000000000000000000000000000000000000000000000000000000008461408f565b905060008060006101b08d88876108ff565b92509250925080600b60008282546101c8919061408f565b90915550600090506101db84898d610a81565b9050808d10156101fe5760405163c972651760e01b815260040160405180910390fd5b610208818c610ab3565b50506102168e848a88610b8c565b6000610223600287610d99565b905060008f9050610247828e600001602081019061024191906140a2565b83610dce565b848a8e8461025860208301836140a2565b6001600160a01b03167fb354b32bd86ebd9f0968a338e5c2873d7f0d473aa7a668c2488e66038380258b8c8c61028f8b8888610e76565b61029f60408801602089016140d9565b6102b5898f8c6102af91906140f6565b90610e9e565b6040805195865260208601949094529284019190915215156060830152608082015260a0810188905260c00160405180910390a350979c50929a50505050505050505050506100906001600055565b61030c6103a8565b6000818152600760205260408120546001600160801b0316900361039e576000610334610441565b90506103607f00000000000000000000000000000000000000000000000000000000000000008361411f565b15158061036c57508181105b1561038a5760405163ecd29e8160e01b815260040160405180910390fd5b61039b82610396610429565b610477565b50505b6100a26001600055565b6002600054036103cb57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b34156103f157604051631574f9f360e01b815260040160405180910390fd5b565b600061040260208301836140a2565b6001600160a01b0316036100a25760405163f0dd15fd60e01b815260040160405180910390fd5b600061043c670de0b6b3a7640000610eb3565b905090565b600061046d7f00000000000000000000000000000000000000000000000000000000000000004261411f565b61043c90426140f6565b600082815260076020526040812080546001600160801b031615158061049c57504284115b156104b257546001600160801b031690506108f9565b6000806104bd610441565b90508086036104ce57849150610568565b60006104fa7f00000000000000000000000000000000000000000000000000000000000000008861408f565b90505b6000818152600760205260409020546001600160801b031692508181148015610524575082155b1561052d578592505b826000036105665761055f7f00000000000000000000000000000000000000000000000000000000000000008261408f565b90506104fd565b505b61057182610f3f565b83546001600160801b0319166001600160801b039190911617835561059585610f69565b50600090506007816105c77f00000000000000000000000000000000000000000000000000000000000000008a6140f6565b815260208101919091526040016000908120546001600160801b031691506105f0600289610d99565b6000818152600e602052604081205491925081156107365750600160008061061b84878a8e8561110d565b9150915080600b6000828254610631919061408f565b909155508c905061064e85600085610648816111dc565b85611206565b610658828461408f565b92508b61068986858a8d857f0000000000000000000000000000000000000000000000000000000000000000611380565b935061069d6106988583610e9e565b6113ca565b600580546002906106be9084906201000090046001600160701b0316614133565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506106eb84610f3f565b6005805460109061070d908490600160801b90046001600160801b0316614153565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505b600061074360018c610d99565b6000818152600e6020526040902054909150801561085557600192508a600080610770848a8d868a61110d565b9150915080600b6000828254610786919061408f565b909155508f90506107a38560008561079d816111dc565b856113f0565b6107ad82846140f6565b92506107bc6106988486610e9e565b600580546002906107dd9084906201000090046001600160701b0316614133565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061080a83610f3f565b6005805460109061082c908490600160801b90046001600160801b0316614153565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505b821561088c57610881610867856111dc565b610870836111dc565b61087a9190614173565b60006115e5565b61088a8b611698565b505b60006108978c61181d565b50604080518b8152602081018f905290810187905260608101849052608081018290529091508d907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a25096985050505050505050505b92915050565b600080600061096b61090f61190d565b600154600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f000000000000000000000000000000000000000000000000000000000000000061192e565b915085610978838761195a565b111561098857610988600261196f565b60008060006109f261099861190d565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611993565b9050610a0889670de0b6b3a7640000838b6119b3565b50919450909250610a1b905082846140f6565b610a2590866140f6565b9450610a7188610a6b8b610a39868a6140f6565b8b610a448e82611ac1565b8e7f0000000000000000000000000000000000000000000000000000000000000000611ad7565b9061195a565b9550909250505093509350939050565b6000610a9360408301602084016140d9565b15610a9f575082610aac565b610aa98484611afc565b90505b9392505050565b60008080610ac760408501602086016140d9565b15610aec57610ae285610add6040870187614193565b611b11565b9093509050610b08565b5034610b0485610aff6040870187614193565b611c4d565b8492505b610b10610429565b91508015610b8357604051600090339083908381818185875af1925050503d8060008114610b5a576040519150601f19603f3d011682016040523d82523d6000602084013e610b5f565b606091505b5050905080610b81576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b6001546001600160801b031683811015610baa57610baa600361196f565b60035490849003907f000000000000000000000000000000000000000000000000000000000000000090610be2908390600f0b611c82565b1015610bf257610bf2600161196f565b600354610c4190610c3c90600160801b90046001600160801b0316610c1f670de0b6b3a7640000866141da565b600454600160801b90046001600160801b03169190896001611caa565b610f3f565b600480546001600160801b03928316600160801b029216919091179055610c6781610f3f565b600180546001600160801b0319166001600160801b0392909216919091179055610c9085610f3f565b60018054601090610cb2908490600160801b90046001600160801b0316614153565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610cdf85610f3f565b60038054601090610d01908490600160801b90046001600160801b0316614153565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000610d3083611d71565b9050610d4e81610d3f886111dc565b610d499084614173565b6115e5565b610d5784611db5565b610d6557610d65600361196f565b6000610d7085611698565b905080610d9057604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b60006001600160f81b03821115610dc35760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600d602090815260408083206001600160a01b038616845290915281208054839290610e0090849061408f565b90915550506000838152600e602052604081208054839290610e2390849061408f565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b6000610e8860408301602084016140d9565b15610e9757610aa98484611afc565b5082610aac565b6000610aac8383670de0b6b3a7640000611e15565b6040516303d1689d60e11b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906307a2d13a90602401602060405180830381865afa158015610f1b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108f991906141f1565b6000600160801b8210610f6557604051630f0af95160e11b815260040160405180910390fd5b5090565b6005546000908190610f8c908490600160801b90046001600160801b0316610e9e565b6005546201000090046001600160701b03169250905081811115611108576000610fb683836140f6565b9050610fc5610c3c8286611e33565b60058054601090610fe7908490600160801b90046001600160801b031661420a565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006110208583611afc90919063ffffffff16565b9050600061104e827f0000000000000000000000000000000000000000000000000000000000000000610e9e565b905080600b6000828254611062919061408f565b90915550611072905081836140f6565b915061107d82610f3f565b600180546000906110989084906001600160801b0316614153565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506110c582611e48565b600380546000906110da908490600f0b61422a565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60008061111a8785611afc565b91506000611148837f0000000000000000000000000000000000000000000000000000000000000000610e9e565b9050611174817f0000000000000000000000000000000000000000000000000000000000000000610e9e565b915083156111975761118682826140f6565b61119090846140f6565b92506111ae565b6111a182826140f6565b6111ab908461408f565b92505b868610156111d1576111c1838789611e15565b92506111ce828789611e15565b91505b509550959350505050565b60006001600160ff1b03821115610f655760405163396ea70160e11b815260040160405180910390fd5b600354600160801b90046001600160801b031661124f610c3c82611232670de0b6b3a7640000866141da565b600454600160801b90046001600160801b031691908a6000611caa565b600480546001600160801b03928316600160801b02921691909117905561127586610f3f565b61127f908261420a565b600380546001600160801b03928316600160801b0292169190911790556112a584610f3f565b600180546000906112c09084906001600160801b0316614153565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506112ed83611e72565b60038054600090611302908490600f0b61422a565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061133285610f3f565b60018054601090611354908490600160801b90046001600160801b031661420a565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600080611398846113928a888a611e15565b90611afc565b90506113a5888486611e15565b6113af908261408f565b9050868111156113bf5786810391505b509695505050505050565b6000600160701b8210610f655760405163086b151760e11b815260040160405180910390fd5b6001546001600160801b03168381108061143257507f000000000000000000000000000000000000000000000000000000000000000061143085836140f6565b105b1561144157611441600361196f565b6003549084900390600f0b6114568482614173565b905083611462866111dc565b13801561149757507f00000000000000000000000000000000000000000000000000000000000000006114958383611c82565b105b156114a6576114a6600161196f565b600254600160801b90046001600160801b03166114e8610c3c826114d2670de0b6b3a7640000886141da565b6004546001600160801b031691908c6000611caa565b600480546001600160801b0319166001600160801b039290921691909117905561151288826140f6565b905061151d81610f3f565b600280546001600160801b03928316600160801b02921691909117905561154383610f3f565b600180546001600160801b0319166001600160801b039290921691909117905561156c82611e72565b600380546001600160801b0319166001600160801b039290921691909117905561159587610f3f565b600180546010906115b7908490600160801b90046001600160801b0316614153565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b600061160e6115f48483611eb0565b6115ff846000611eb0565b6116099190614173565b611e72565b9050600081600f0b1315611663576002805482919060009061163a9084906001600160801b0316614153565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b12156116935761167881614257565b6002805460009061163a9084906001600160801b031661420a565b505050565b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e954909182916116e3916001600160801b0316906140f6565b9050806000036116f65750600192915050565b600061170184611ebf565b905080600003611715575060019392505050565b600080611723838588611f64565b91509150806117385750600095945050505050565b6000806117448461206a565b91509150611762611754826111dc565b61175d9061427d565b612152565b92508261177757506000979650505050505050565b61178082610f3f565b6006805460009061179b9084906001600160801b0316614153565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506117c881610f3f565b600680546010906117ea908490600160801b90046001600160801b0316614153565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060019650505050505050919050565b60008060008061183461182f8661225f565b612399565b915091508061184a575060009485945092505050565b600080861161185a576000611864565b6118648387610e9e565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b03909216916118cf919061408f565b6118d991906140f6565b9050806000036118f25750600096879650945050505050565b60006118fe8383611afc565b98600198509650505050505050565b60015460035460009161043c916001600160801b0390911690600f0b611c82565b600061194f87878761194888670de0b6b3a76400006140f6565b8787612426565b979650505050505050565b6000610aac8383670de0b6b3a764000061244b565b80604051633c06d78b60e11b815260040161198a9190614299565b60405180910390fd5b60006119aa826119a4858888611e15565b90612471565b95945050505050565b6000808080611a0487866119fd8b610a6b6119d68c670de0b6b3a76400006140f6565b7f00000000000000000000000000000000000000000000000000000000000000009061195a565b919061244b565b9350611a30847f0000000000000000000000000000000000000000000000000000000000000000610e9e565b91506000611a51611a4989670de0b6b3a76400006140f6565b8a908861244b565b9050611a7d817f000000000000000000000000000000000000000000000000000000000000000061195a565b9350611aa9847f0000000000000000000000000000000000000000000000000000000000000000610e9e565b611ab3908461408f565b915050945094509450949050565b6000818311611ad05781610aac565b5090919050565b600080611aef84611ae98a888a61244b565b90611e33565b90506113a588848661244b565b6000610aac83670de0b6b3a764000084611e15565b600080611b496001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163330886124dc565b611ba97f0000000000000000000000000000000000000000000000000000000000000000611b7887600161408f565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169190612549565b604051636e553f6560e01b8152600481018690523060248201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636e553f65906044016020604051808303816000875af1158015611c19573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c3d91906141f1565b925060009150505b935093915050565b6116936001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163330866124dc565b600080611c8f84846125d9565b909250905080611ca357611ca3600161196f565b5092915050565b600082600003611cbb5750846119aa565b8115611d2d57611cec611cce848761408f565b611cd88587610e9e565b611ce2888a610e9e565b611392919061408f565b90506000611cfa8588612615565b90506000611d088689611ac1565b905081831015611d1a57819250611d26565b80831115611d26578092505b50506119aa565b828503611d3c575060006119aa565b611d67611d4984876140f6565b611d53858761195a565b611d5d888a610e9e565b61139291906140f6565b9695505050505050565b6000611d99600e6000611d85600286610d99565b8152602001908152602001600020546111dc565b611dab600e6000611d85600187610d99565b6108f99190614173565b6000611de17f00000000000000000000000000000000000000000000000000000000000000008361195a565b600254611df791906001600160801b031661408f565b600154611e0d906001600160801b031684610e9e565b101592915050565b6000826000190484118302158202611e2c57600080fd5b5091020490565b6000610aac83670de0b6b3a76400008461244b565b600060016001607f1b03821115610f655760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b03198212801590611e93575060016001607f1b038213155b610f655760405163a5353be560e01b815260040160405180910390fd5b6000818313611ad05781610aac565b6002546000908190611eda906001600160801b031684611e33565b9050611f067f00000000000000000000000000000000000000000000000000000000000000008261408f565b6001546001600160801b03161115611f5e576001547f000000000000000000000000000000000000000000000000000000000000000090611f519083906001600160801b03166140f6565b611f5b91906140f6565b91505b50919050565b611f6c613f4e565b600080611f788461225f565b90506000611f8582612399565b9350905082611f9a575060009150611c459050565b6000611fc1611fbc846101600151856101400151610e9e90919063ffffffff16565b6111dc565b611fe1611fbc85610120015186610100015161195a90919063ffffffff16565b611feb9190614173565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6000806000806120828560c001518660e001516125d9565b9150915080612098575060009485945092505050565b60006120a48684612624565b925090508115806120b3575080155b156120c657506000958695509350505050565b60006120d28783612733565b9050806000036120eb5750600096879650945050505050565b8660600151811161210157969095509350505050565b5060608601516000612114888685612804565b90508060000361212e575060009788975095505050505050565b828110612145575060009788975095505050505050565b9097909650945050505050565b6001546003546000916001600160801b0380821692600f0b91600160801b900416838080806121a48787877f00000000000000000000000000000000000000000000000000000000000000008d612b69565b9350935093509350806121c05750600098975050505050505050565b8684146121f1576121d084610f3f565b600180546001600160801b0319166001600160801b03929092169190911790555b8583146122225761220183611e72565b600380546001600160801b0319166001600160801b03929092169190911790555b8482146122505761223282610f3f565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612267613fa0565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e0830152600254048216610100820152600454909161012083019161235f9116612c81565b81526003546001600160801b03600160801b918290048116602084015260045460409093019261239192900416612c81565b905292915050565b60008060008060006123aa86612cf7565b91509150806123c157506000958695509350505050565b6123ce8660a001516111dc565b6123d787613017565b836123e589600001516111dc565b6123ef91906142c1565b6123f991906142c1565b6124039190614173565b92505050600081121561241c5750600093849350915050565b9360019350915050565b60008061243788888888888861307b565b9092509050806113bf576113bf600061196f565b600082600019048411830215820261246257600080fd5b50910281810615159190040190565b60008160000361248a5750670de0b6b3a76400006108f9565b8260000361249a575060006108f9565b60006124a5836111dc565b905060006124ba6124b5866111dc565b613145565b90508181026124d1670de0b6b3a7640000826142e9565b9050611d678161336b565b6040516001600160a01b0384811660248301528381166044830152606482018390526125439186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b038381831617835250505050613500565b50505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b17905261259a8482613563565b612543576040516001600160a01b038481166024830152600060448301526125cf91869182169063095ea7b390606401612511565b6125438482613500565b6000806000836125e8866111dc565b6125f29190614173565b9050600081121561260a576000809250925050610b85565b946001945092505050565b6000818311611f5e5782610aac565b60008060008460a001511261264157505060808201516001610b85565b60008460a001516126519061427d565b9050600061268d85876101000151886000015160e00151670de0b6b3a764000061267b91906140f6565b89516060810151608090910151613606565b9350905082158061269c575080155b156126af57600080935093505050610b85565b60006126bb8383611e33565b9050670de0b6b3a764000081116126f75780670de0b6b3a76400000394506126f08760c0015186610e9e90919063ffffffff16565b9450612706565b60008094509450505050610b85565b8660800151851115612725578660800151600194509450505050610b85565b506001925050509250929050565b6000806127698460c001518560e00151866101000151876000015160a0015161275b886111dc565b6127649061427d565b612b69565b875160408101929092526020820192909252919091529050806127905760009150506108f9565b600061279f8560000151612399565b92509050816127b3576000925050506108f9565b846020015181106127c9576000925050506108f9565b6000856060015186604001516127df919061408f565b90506127fa82876020015183611e159092919063ffffffff16565b611d6790826140f6565b6000808460600151856040015161281b919061408f565b602086015160608701519192506000916128359184611e15565b90508560a0015160000361284c579150610aac9050565b60005b6004811015612b5f576128628286612615565b9150600061288b8860c001518960e001518a61010001518b6000015160a0015161275b886111dc565b8b5160408101929092526020820192909252919091529050806128b5576000945050505050610aac565b60006128c48960000151612399565b92509050816128db57600095505050505050610aac565b6128e68982876136b2565b156128f2575050612b5f565b60008960a001511315612a5657885180516020820151604083015160a084015160e0909401518d9460009461294c949093909290919061293a90670de0b6b3a76400006140f6565b8751606081015160809091015161371e565b9450905083612965576000975050505050505050610aac565b808260a0015110612a535761297982613823565b909650935083612993576000975050505050505050610aac565b6129b88260c001518360e00151846101000151856000015160a0015161275b8b6111dc565b855160408101929092526020820192909252919091529350836129e5576000975050505050505050610aac565b815180516020820151604083015160a0909301518e5160e00151612a1794919061293a90670de0b6b3a76400006140f6565b9450905083612a30576000975050505050505050610aac565b8a60a001518111612a4a5785975050505050505050610aac565b5050505061284f565b50505b6000612a678a8a8c60a001516138f9565b93509050821580612a805750670de0b6b3a76400008110155b15612a945760009650505050505050610aac565b80670de0b6b3a76400000390506000612ac1611fbc8c604001518d6020015161195a90919063ffffffff16565b612ace611fbc858a610e9e565b612ad89190614173565b90506000811315612b0257612af1876113928385611afc565b612afb908761408f565b9550612b50565b6000811215612b47576000612b1c8861139285818661427d565b905086811015612b30578087039650612b41565b600098505050505050505050610aac565b50612b50565b50505050612b5f565b8460010194505050505061284f565b5095945050505050565b60008060008084600003612b8857508792508691508590506001612c75565b600085612b948b6111dc565b612b9e91906142c1565b9050612ba9876111dc565b811215612bc457600080600080945094509450945050612c75565b80945060008912612be457612bdd611fbc868b8d611e15565b9350612c07565b612bfb611fbc612bf38b61427d565b87908d61244b565b612c049061427d565b93505b600080612c148c8c6125d9565b9150915080612c33576000806000809650965096509650505050612c75565b6000612c3f88886125d9565b9250905081612c5f57600080600080975097509750975050505050612c75565b612c6a8b8285611e15565b955060019450505050505b95509550955095915050565b600080670de0b6b3a7640000612c95610441565b612c9f91906141da565b9050808311612caf576000612cb9565b612cb981846140f6565b9150611f5b612cf0670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006141da565b8390611afc565b6000806000612d1c611fbc856101600151866101400151610e9e90919063ffffffff16565b612d3c611fbc86610120015187610100015161195a90919063ffffffff16565b612d469190614173565b9050600080612d5d866000015187602001516125d9565b9150915080612d7457506000958695509350505050565b6000831315612eb55760008390506000612dc2886000015189602001518a604001518b60a001518c60e00151670de0b6b3a7640000612db391906140f6565b8d606001518e6080015161371e565b9350905082612ddb575060009788975095505050505050565b818110612e79576000612e15858a60400151858c60e00151670de0b6b3a7640000612e0691906140f6565b8d606001518e6080015161307b565b9450905083158015612e2a57508860c0015183105b15612e415750600098600198509650505050505050565b83612e5757506000988998509650505050505050565b612e60816111dc565b612e699061427d565b9960019950975050505050505050565b6000886020015112612ea157612e988860a0015185611fbc91906140f6565b6118fe9061427d565b60a08801518851612e9891611fbc916140f6565b6000831215613008576000612ec98461427d565b90506000612efd8489604001518a60e00151670de0b6b3a7640000612eee91906140f6565b8b606001518c60800151613606565b9350905082612f16575060009788975095505050505050565b818110612f9b576000612f50858a60400151858c60e00151670de0b6b3a7640000612f4191906140f6565b8d606001518e60800151613c53565b9450905083158015612f6557508860c0015183105b15612f7c5750600098600198509650505050505050565b83612f9257506000988998509650505050505050565b612e69816111dc565b6000612fcd858a604001518b60e00151670de0b6b3a7640000612fbe91906140f6565b8c606001518d60800151613d2a565b9450905083612fe757506000988998509650505050505050565b612e69612ffe8a60600151848661139291906140f6565b611fbc908361408f565b50600095600195509350505050565b600061304a611fbc836101200151670de0b6b3a764000061303891906140f6565b6060850151610100860151919061244b565b611dab611fbc846101600151670de0b6b3a764000061306991906140f6565b60608601516101408701519190611e15565b600080600061308d8989888888613dd9565b905061309d866119a4898b61408f565b9750878110156130b457600080925092505061313a565b8781036130c281868861244b565b9050670de0b6b3a764000081106130f6576130ef6130e8670de0b6b3a764000089611e33565b8290612471565b905061310e565b61310b6130e8670de0b6b3a764000089611afc565b90505b6131188186611e33565b9050808a10156131305760008093509350505061313a565b8903925060019150505b965096945050505050565b60008082136131675760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906131ea9084901c6111dc565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361338657506000919050565b680755bf798b4a1bf1e582126133af576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190611d6774029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6111dc565b60006135156001600160a01b03841683613e08565b9050805160001415801561353a5750808060200190518101906135389190614317565b155b1561169357604051635274afe760e01b81526001600160a01b038416600482015260240161198a565b6000806000846001600160a01b0316846040516135809190614334565b6000604051808303816000865af19150503d80600081146135bd576040519150601f19603f3d011682016040523d82523d6000602084013e6135c2565b606091505b50915091508180156135ec5750805115806135ec5750808060200190518101906135ec9190614317565b80156119aa5750505050506001600160a01b03163b151590565b60008060006136188888888888613dd9565b90506000613643670de0b6b3a76400006136328888611afc565b61363c919061408f565b8390611e33565b9050670de0b6b3a76400008110613670576136696130e8670de0b6b3a764000089611e33565b9050613688565b6136856130e8670de0b6b3a764000089611afc565b90505b8088101561369e576000809350935050506136a8565b8703925060019150505b9550959350505050565b60208301516000906136c49084611e33565b60408501516136d4908490611afc565b10158015610aa95750602084015161370490846136fd633b9aca00670de0b6b3a764000061408f565b9190611e15565b6040850151613714908490611e33565b1115949350505050565b6000806000881215613740576137338861427d565b61373d908761408f565b95505b60008061374d8b8b6125d9565b915091508061376457600080935093505050613817565b6000613773838b8a8a8a613e16565b905060006137906137888a6119a48a8e61195a565b89908961244b565b9050808210156137aa576000809550955050505050613817565b808203670de0b6b3a764000081106137d8576137d16130e8670de0b6b3a76400008c611afc565b90506137f0565b6137ed6130e8670de0b6b3a76400008c611e33565b90505b8b81101561380957600080965096505050505050613817565b8b9003955060019450505050505b97509795505050505050565b60008060008360e001511361383d57506000928392509050565b600061384c8460000151613017565b9050600061387885604001518660600151876040015161386c919061408f565b6020880151919061244b565b90506000821261389f5780821015613892578190036138b5565b5060009485945092505050565b6138a88261427d565b6138b2908261408f565b90505b60e085015160c08601516138ca91839061244b565b9050808560c0015110156138e5575060009485945092505050565b808560c00151036001935093505050915091565b600080600080841261391d5785516040015161391690859061408f565b9050613958565b60006139288561427d565b875160400151909150811015613948578651604001518190039150613956565b600080935093505050611c45565b505b85518051602090910151600091829161397191906125d9565b91509150806139895760008094509450505050611c45565b875160e08101516040909101516000916139be916139b2916139ab9190612471565b8a90610e9e565b6101008b015190611e33565b895160e08101516080909101516139e9916139dd916119a49088610e9e565b8b516060015190611e33565b6139f3919061408f565b90506000613a2b613a1f613a188c6000015160e001518861247190919063ffffffff16565b8b9061195a565b6101008c015190611afc565b905080821015613a4657600080965096505050505050611c45565b80820391506000613a88858c60000151604001518d6000015160e00151670de0b6b3a7640000613a7691906140f6565b8e516060810151608090910151613dd9565b90506000613ab28c6000015160e00151670de0b6b3a7640000613aab91906140f6565b8890612471565b905080821015613acf576000809850985050505050505050611c45565b8b51608081015160609091015191830391613aeb91839161244b565b9050670de0b6b3a76400008110613b2f578b5160e00151613b28906130e890613b1c90670de0b6b3a76400006140f6565b8e5160e0015190611e33565b9050613b5e565b8b5160e00151613b5b906130e890613b4f90670de0b6b3a76400006140f6565b8e5160e0015190611afc565b90505b8b5160600151613b71908590839061244b565b935083670de0b6b3a76400001115613b955783670de0b6b3a7640000039350613ba9565b600060019850985050505050505050611c45565b60008c60e0015112613c0b5760c08c015160e08d0151613bc891611e33565b9250670de0b6b3a76400008310613bec576000809850985050505050505050611c45565b670de0b6b3a76400009290920391613c048484610e9e565b9350613c40565b613c3d613c248d60c001518e60e001516113929061427d565b613c3690670de0b6b3a764000061408f565b8590610e9e565b93505b50919a60019a5098505050505050505050565b6000806000613c658989888888613dd9565b905086881015613c7c57600080925092505061313a565b9686900396613c8b8887612471565b975087811015613ca257600080925092505061313a565b878103613cb081868861244b565b9050670de0b6b3a76400008110613cdd57613cd66130e8670de0b6b3a764000089611e33565b9050613cf5565b613cf26130e8670de0b6b3a764000089611afc565b90505b613cff8186611e33565b905089811015613d175760008093509350505061313a565b9890980398600198509650505050505050565b6000806000613d3c8888888888613e16565b90506000613d60670de0b6b3a7640000613d568888611e33565b612cf0919061408f565b9050670de0b6b3a76400008110613d8d57613d866130e8670de0b6b3a764000089611afc565b9050613da5565b613da26130e8670de0b6b3a764000089611e33565b90505b613daf8186611afc565b905088811015613dc7576000809350935050506136a8565b97909703976001975095505050505050565b6000613de58585612471565b613dfe613df6866119a4868b61195a565b85908561244b565b611d67919061408f565b6060610aac83836000613e3b565b6000613e228585612471565b613dfe613e33866119a4868b610e9e565b859085611e15565b606081471015613e605760405163cd78605960e01b815230600482015260240161198a565b600080856001600160a01b03168486604051613e7c9190614334565b60006040518083038185875af1925050503d8060008114613eb9576040519150601f19603f3d011682016040523d82523d6000602084013e613ebe565b606091505b5091509150611d67868383606082613ede57613ed982613f25565b610aac565b8151158015613ef557506001600160a01b0384163b155b15613f1e57604051639996b31560e01b81526001600160a01b038516600482015260240161198a565b5080610aac565b805115613f355780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b604051806101200160405280613f62613fa0565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000806000806080858703121561401757600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561404357600080fd5b85016060818803121561405557600080fd5b939692955090935050565b60006020828403121561407257600080fd5b5035919050565b634e487b7160e01b600052601160045260246000fd5b808201808211156108f9576108f9614079565b6000602082840312156140b457600080fd5b81356001600160a01b0381168114610aac57600080fd5b80151581146100a257600080fd5b6000602082840312156140eb57600080fd5b8135610aac816140cb565b818103818111156108f9576108f9614079565b634e487b7160e01b600052601260045260246000fd5b60008261412e5761412e614109565b500690565b6001600160701b03818116838216019080821115611ca357611ca3614079565b6001600160801b03818116838216019080821115611ca357611ca3614079565b8181036000831280158383131683831282161715611ca357611ca3614079565b6000808335601e198436030181126141aa57600080fd5b83018035915067ffffffffffffffff8211156141c557600080fd5b602001915036819003821315610b8557600080fd5b80820281158282048414176108f9576108f9614079565b60006020828403121561420357600080fd5b5051919050565b6001600160801b03828116828216039080821115611ca357611ca3614079565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156108f9576108f9614079565b600081600f0b60016001607f1b0319810361427457614274614079565b60000392915050565b6000600160ff1b820161429257614292614079565b5060000390565b60208101600483106142bb57634e487b7160e01b600052602160045260246000fd5b91905290565b80820182811260008312801582168215821617156142e1576142e1614079565b505092915050565b6000826142f8576142f8614109565b600160ff1b82146000198414161561431257614312614079565b500590565b60006020828403121561432957600080fd5b8151610aac816140cb565b6000825160005b81811015614355576020818601810151858301520161433b565b50600092019182525091905056fea264697066735822122023663f2ab3ffe38b66c422da76aeee9224be496ce38a60a0297645a2503baaf364736f6c63430008140033";
        readonly sourceMap: "697:275:50:-:0;;;876:94;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1713:1:169;1917:7;:21;5298:17:118;;-1:-1:-1;;;;;5285:30:118;;;;;;;5345:24;;;;;5325:44;;;;;;5459:30;;;;5433:56;;;;5912:28;;;;5888:52;;6228:32;;;;;6200:60;;6443:26;;;;;6421:48;;;-1:-1:-1;6499:24:118;;;;6479:44;;-1:-1:-1;6548:19:118;;;;6533:34;;;6632:12;;;;;:18;6620:30;;;6671:12;;:17;;6660:28;;;;6717:12;;-1:-1:-1;6717:25:118;;;;6698:44;;;;6775:12;;-1:-1:-1;6775:29:118;;;;6752:52;;;;-1:-1:-1;;;6881:21:118;6864:38;;;;-1:-1:-1;;6930:22:118;6912:40;;7055:18;;;;7041:11;:32;;-1:-1:-1;;;;;;7041:32:118;;;;;;;;;;;;7099:20;;;;7083:13;:36;;;;;;;;;;;;;7147:22;;;;7129:15;:40;;;;;;;;;;697:275:50;;14:347:234;81:2;75:9;123:6;111:19;;-1:-1:-1;;;;;145:34:234;;181:22;;;142:62;139:185;;;246:10;241:3;237:20;234:1;227:31;281:4;278:1;271:15;309:4;306:1;299:15;139:185;340:2;333:22;14:347;:::o;366:185::-;453:13;;-1:-1:-1;;;;;495:31:234;;485:42;;475:70;;541:1;538;531:12;475:70;366:185;;;:::o;556:681::-;618:5;666:4;654:9;649:3;645:19;641:30;638:50;;;684:1;681;674:12;638:50;717:2;711:9;759:4;747:17;;-1:-1:-1;;;;;779:34:234;;815:22;;;776:62;773:185;;;880:10;875:3;871:20;868:1;861:31;915:4;912:1;905:15;943:4;940:1;933:15;773:185;978:10;974:2;967:22;;1007:6;998:15;;1043:9;1037:16;1029:6;1022:32;1108:2;1097:9;1093:18;1087:25;1082:2;1074:6;1070:15;1063:50;1167:2;1156:9;1152:18;1146:25;1141:2;1133:6;1129:15;1122:50;1226:2;1215:9;1211:18;1205:25;1200:2;1192:6;1188:15;1181:50;;556:681;;;;:::o;1242:1405::-;1341:6;1394:3;1382:9;1373:7;1369:23;1365:33;1362:53;;;1411:1;1408;1401:12;1362:53;1437:17;;:::i;:::-;1477:48;1515:9;1477:48;:::i;:::-;1470:5;1463:63;1558:57;1611:2;1600:9;1596:18;1558:57;:::i;:::-;1553:2;1546:5;1542:14;1535:81;1648:57;1701:2;1690:9;1686:18;1648:57;:::i;:::-;1643:2;1636:5;1632:14;1625:81;1759:2;1748:9;1744:18;1738:25;1733:2;1726:5;1722:14;1715:49;1818:3;1807:9;1803:19;1797:26;1791:3;1784:5;1780:15;1773:51;1878:3;1867:9;1863:19;1857:26;1851:3;1844:5;1840:15;1833:51;1938:3;1927:9;1923:19;1917:26;1911:3;1904:5;1900:15;1893:51;1998:3;1987:9;1983:19;1977:26;1971:3;1964:5;1960:15;1953:51;2023:3;2079:2;2068:9;2064:18;2058:25;2053:2;2046:5;2042:14;2035:49;;2103:3;2159:2;2148:9;2144:18;2138:25;2133:2;2126:5;2122:14;2115:49;;2183:3;2218:57;2271:2;2260:9;2256:18;2218:57;:::i;:::-;2202:14;;;2195:81;2295:3;2330:57;2368:18;;;2330:57;:::i;:::-;2314:14;;;2307:81;2407:3;2442:57;2480:18;;;2442:57;:::i;:::-;2426:14;;;2419:81;2519:3;2554:62;2608:7;2588:18;;;2554:62;:::i;:::-;2538:14;;;2531:86;2542:5;1242:1405;-1:-1:-1;;;1242:1405:234:o;:::-;697:275:50;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly deployedBytecode: {
        readonly object: "0x6080604052600436106100295760003560e01c8063dbbe80701461002e578063ed64bab21461005a575b600080fd5b61004161003c366004614001565b61007c565b6040805192835260208301919091520160405180910390f35b34801561006657600080fd5b5061007a610075366004614060565b610099565b005b60008061008b868686866100a5565b915091505b94509492505050565b6100a281610304565b50565b6000806100b06103a8565b600554610100900460ff16156100d9576040516321081abf60e01b815260040160405180910390fd5b6100e16103d2565b6100ea836103f3565b7f000000000000000000000000000000000000000000000000000000000000000086101561012b5760405163211ddda360e11b815260040160405180910390fd5b6000610135610429565b905084811015610158576040516342af972b60e01b815260040160405180910390fd5b6000610162610441565b905060006101708284610477565b9050600061019e7f00000000000000000000000000000000000000000000000000000000000000008461408f565b905060008060006101b08d88876108ff565b92509250925080600b60008282546101c8919061408f565b90915550600090506101db84898d610a81565b9050808d10156101fe5760405163c972651760e01b815260040160405180910390fd5b610208818c610ab3565b50506102168e848a88610b8c565b6000610223600287610d99565b905060008f9050610247828e600001602081019061024191906140a2565b83610dce565b848a8e8461025860208301836140a2565b6001600160a01b03167fb354b32bd86ebd9f0968a338e5c2873d7f0d473aa7a668c2488e66038380258b8c8c61028f8b8888610e76565b61029f60408801602089016140d9565b6102b5898f8c6102af91906140f6565b90610e9e565b6040805195865260208601949094529284019190915215156060830152608082015260a0810188905260c00160405180910390a350979c50929a50505050505050505050506100906001600055565b61030c6103a8565b6000818152600760205260408120546001600160801b0316900361039e576000610334610441565b90506103607f00000000000000000000000000000000000000000000000000000000000000008361411f565b15158061036c57508181105b1561038a5760405163ecd29e8160e01b815260040160405180910390fd5b61039b82610396610429565b610477565b50505b6100a26001600055565b6002600054036103cb57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b34156103f157604051631574f9f360e01b815260040160405180910390fd5b565b600061040260208301836140a2565b6001600160a01b0316036100a25760405163f0dd15fd60e01b815260040160405180910390fd5b600061043c670de0b6b3a7640000610eb3565b905090565b600061046d7f00000000000000000000000000000000000000000000000000000000000000004261411f565b61043c90426140f6565b600082815260076020526040812080546001600160801b031615158061049c57504284115b156104b257546001600160801b031690506108f9565b6000806104bd610441565b90508086036104ce57849150610568565b60006104fa7f00000000000000000000000000000000000000000000000000000000000000008861408f565b90505b6000818152600760205260409020546001600160801b031692508181148015610524575082155b1561052d578592505b826000036105665761055f7f00000000000000000000000000000000000000000000000000000000000000008261408f565b90506104fd565b505b61057182610f3f565b83546001600160801b0319166001600160801b039190911617835561059585610f69565b50600090506007816105c77f00000000000000000000000000000000000000000000000000000000000000008a6140f6565b815260208101919091526040016000908120546001600160801b031691506105f0600289610d99565b6000818152600e602052604081205491925081156107365750600160008061061b84878a8e8561110d565b9150915080600b6000828254610631919061408f565b909155508c905061064e85600085610648816111dc565b85611206565b610658828461408f565b92508b61068986858a8d857f0000000000000000000000000000000000000000000000000000000000000000611380565b935061069d6106988583610e9e565b6113ca565b600580546002906106be9084906201000090046001600160701b0316614133565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506106eb84610f3f565b6005805460109061070d908490600160801b90046001600160801b0316614153565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505b600061074360018c610d99565b6000818152600e6020526040902054909150801561085557600192508a600080610770848a8d868a61110d565b9150915080600b6000828254610786919061408f565b909155508f90506107a38560008561079d816111dc565b856113f0565b6107ad82846140f6565b92506107bc6106988486610e9e565b600580546002906107dd9084906201000090046001600160701b0316614133565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061080a83610f3f565b6005805460109061082c908490600160801b90046001600160801b0316614153565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505b821561088c57610881610867856111dc565b610870836111dc565b61087a9190614173565b60006115e5565b61088a8b611698565b505b60006108978c61181d565b50604080518b8152602081018f905290810187905260608101849052608081018290529091508d907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a25096985050505050505050505b92915050565b600080600061096b61090f61190d565b600154600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f000000000000000000000000000000000000000000000000000000000000000061192e565b915085610978838761195a565b111561098857610988600261196f565b60008060006109f261099861190d565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611993565b9050610a0889670de0b6b3a7640000838b6119b3565b50919450909250610a1b905082846140f6565b610a2590866140f6565b9450610a7188610a6b8b610a39868a6140f6565b8b610a448e82611ac1565b8e7f0000000000000000000000000000000000000000000000000000000000000000611ad7565b9061195a565b9550909250505093509350939050565b6000610a9360408301602084016140d9565b15610a9f575082610aac565b610aa98484611afc565b90505b9392505050565b60008080610ac760408501602086016140d9565b15610aec57610ae285610add6040870187614193565b611b11565b9093509050610b08565b5034610b0485610aff6040870187614193565b611c4d565b8492505b610b10610429565b91508015610b8357604051600090339083908381818185875af1925050503d8060008114610b5a576040519150601f19603f3d011682016040523d82523d6000602084013e610b5f565b606091505b5050905080610b81576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b6001546001600160801b031683811015610baa57610baa600361196f565b60035490849003907f000000000000000000000000000000000000000000000000000000000000000090610be2908390600f0b611c82565b1015610bf257610bf2600161196f565b600354610c4190610c3c90600160801b90046001600160801b0316610c1f670de0b6b3a7640000866141da565b600454600160801b90046001600160801b03169190896001611caa565b610f3f565b600480546001600160801b03928316600160801b029216919091179055610c6781610f3f565b600180546001600160801b0319166001600160801b0392909216919091179055610c9085610f3f565b60018054601090610cb2908490600160801b90046001600160801b0316614153565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610cdf85610f3f565b60038054601090610d01908490600160801b90046001600160801b0316614153565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000610d3083611d71565b9050610d4e81610d3f886111dc565b610d499084614173565b6115e5565b610d5784611db5565b610d6557610d65600361196f565b6000610d7085611698565b905080610d9057604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b60006001600160f81b03821115610dc35760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600d602090815260408083206001600160a01b038616845290915281208054839290610e0090849061408f565b90915550506000838152600e602052604081208054839290610e2390849061408f565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b6000610e8860408301602084016140d9565b15610e9757610aa98484611afc565b5082610aac565b6000610aac8383670de0b6b3a7640000611e15565b6040516303d1689d60e11b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906307a2d13a90602401602060405180830381865afa158015610f1b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108f991906141f1565b6000600160801b8210610f6557604051630f0af95160e11b815260040160405180910390fd5b5090565b6005546000908190610f8c908490600160801b90046001600160801b0316610e9e565b6005546201000090046001600160701b03169250905081811115611108576000610fb683836140f6565b9050610fc5610c3c8286611e33565b60058054601090610fe7908490600160801b90046001600160801b031661420a565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006110208583611afc90919063ffffffff16565b9050600061104e827f0000000000000000000000000000000000000000000000000000000000000000610e9e565b905080600b6000828254611062919061408f565b90915550611072905081836140f6565b915061107d82610f3f565b600180546000906110989084906001600160801b0316614153565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506110c582611e48565b600380546000906110da908490600f0b61422a565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60008061111a8785611afc565b91506000611148837f0000000000000000000000000000000000000000000000000000000000000000610e9e565b9050611174817f0000000000000000000000000000000000000000000000000000000000000000610e9e565b915083156111975761118682826140f6565b61119090846140f6565b92506111ae565b6111a182826140f6565b6111ab908461408f565b92505b868610156111d1576111c1838789611e15565b92506111ce828789611e15565b91505b509550959350505050565b60006001600160ff1b03821115610f655760405163396ea70160e11b815260040160405180910390fd5b600354600160801b90046001600160801b031661124f610c3c82611232670de0b6b3a7640000866141da565b600454600160801b90046001600160801b031691908a6000611caa565b600480546001600160801b03928316600160801b02921691909117905561127586610f3f565b61127f908261420a565b600380546001600160801b03928316600160801b0292169190911790556112a584610f3f565b600180546000906112c09084906001600160801b0316614153565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506112ed83611e72565b60038054600090611302908490600f0b61422a565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061133285610f3f565b60018054601090611354908490600160801b90046001600160801b031661420a565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600080611398846113928a888a611e15565b90611afc565b90506113a5888486611e15565b6113af908261408f565b9050868111156113bf5786810391505b509695505050505050565b6000600160701b8210610f655760405163086b151760e11b815260040160405180910390fd5b6001546001600160801b03168381108061143257507f000000000000000000000000000000000000000000000000000000000000000061143085836140f6565b105b1561144157611441600361196f565b6003549084900390600f0b6114568482614173565b905083611462866111dc565b13801561149757507f00000000000000000000000000000000000000000000000000000000000000006114958383611c82565b105b156114a6576114a6600161196f565b600254600160801b90046001600160801b03166114e8610c3c826114d2670de0b6b3a7640000886141da565b6004546001600160801b031691908c6000611caa565b600480546001600160801b0319166001600160801b039290921691909117905561151288826140f6565b905061151d81610f3f565b600280546001600160801b03928316600160801b02921691909117905561154383610f3f565b600180546001600160801b0319166001600160801b039290921691909117905561156c82611e72565b600380546001600160801b0319166001600160801b039290921691909117905561159587610f3f565b600180546010906115b7908490600160801b90046001600160801b0316614153565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b600061160e6115f48483611eb0565b6115ff846000611eb0565b6116099190614173565b611e72565b9050600081600f0b1315611663576002805482919060009061163a9084906001600160801b0316614153565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b12156116935761167881614257565b6002805460009061163a9084906001600160801b031661420a565b505050565b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e954909182916116e3916001600160801b0316906140f6565b9050806000036116f65750600192915050565b600061170184611ebf565b905080600003611715575060019392505050565b600080611723838588611f64565b91509150806117385750600095945050505050565b6000806117448461206a565b91509150611762611754826111dc565b61175d9061427d565b612152565b92508261177757506000979650505050505050565b61178082610f3f565b6006805460009061179b9084906001600160801b0316614153565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506117c881610f3f565b600680546010906117ea908490600160801b90046001600160801b0316614153565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060019650505050505050919050565b60008060008061183461182f8661225f565b612399565b915091508061184a575060009485945092505050565b600080861161185a576000611864565b6118648387610e9e565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b03909216916118cf919061408f565b6118d991906140f6565b9050806000036118f25750600096879650945050505050565b60006118fe8383611afc565b98600198509650505050505050565b60015460035460009161043c916001600160801b0390911690600f0b611c82565b600061194f87878761194888670de0b6b3a76400006140f6565b8787612426565b979650505050505050565b6000610aac8383670de0b6b3a764000061244b565b80604051633c06d78b60e11b815260040161198a9190614299565b60405180910390fd5b60006119aa826119a4858888611e15565b90612471565b95945050505050565b6000808080611a0487866119fd8b610a6b6119d68c670de0b6b3a76400006140f6565b7f00000000000000000000000000000000000000000000000000000000000000009061195a565b919061244b565b9350611a30847f0000000000000000000000000000000000000000000000000000000000000000610e9e565b91506000611a51611a4989670de0b6b3a76400006140f6565b8a908861244b565b9050611a7d817f000000000000000000000000000000000000000000000000000000000000000061195a565b9350611aa9847f0000000000000000000000000000000000000000000000000000000000000000610e9e565b611ab3908461408f565b915050945094509450949050565b6000818311611ad05781610aac565b5090919050565b600080611aef84611ae98a888a61244b565b90611e33565b90506113a588848661244b565b6000610aac83670de0b6b3a764000084611e15565b600080611b496001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163330886124dc565b611ba97f0000000000000000000000000000000000000000000000000000000000000000611b7887600161408f565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169190612549565b604051636e553f6560e01b8152600481018690523060248201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636e553f65906044016020604051808303816000875af1158015611c19573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c3d91906141f1565b925060009150505b935093915050565b6116936001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163330866124dc565b600080611c8f84846125d9565b909250905080611ca357611ca3600161196f565b5092915050565b600082600003611cbb5750846119aa565b8115611d2d57611cec611cce848761408f565b611cd88587610e9e565b611ce2888a610e9e565b611392919061408f565b90506000611cfa8588612615565b90506000611d088689611ac1565b905081831015611d1a57819250611d26565b80831115611d26578092505b50506119aa565b828503611d3c575060006119aa565b611d67611d4984876140f6565b611d53858761195a565b611d5d888a610e9e565b61139291906140f6565b9695505050505050565b6000611d99600e6000611d85600286610d99565b8152602001908152602001600020546111dc565b611dab600e6000611d85600187610d99565b6108f99190614173565b6000611de17f00000000000000000000000000000000000000000000000000000000000000008361195a565b600254611df791906001600160801b031661408f565b600154611e0d906001600160801b031684610e9e565b101592915050565b6000826000190484118302158202611e2c57600080fd5b5091020490565b6000610aac83670de0b6b3a76400008461244b565b600060016001607f1b03821115610f655760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b03198212801590611e93575060016001607f1b038213155b610f655760405163a5353be560e01b815260040160405180910390fd5b6000818313611ad05781610aac565b6002546000908190611eda906001600160801b031684611e33565b9050611f067f00000000000000000000000000000000000000000000000000000000000000008261408f565b6001546001600160801b03161115611f5e576001547f000000000000000000000000000000000000000000000000000000000000000090611f519083906001600160801b03166140f6565b611f5b91906140f6565b91505b50919050565b611f6c613f4e565b600080611f788461225f565b90506000611f8582612399565b9350905082611f9a575060009150611c459050565b6000611fc1611fbc846101600151856101400151610e9e90919063ffffffff16565b6111dc565b611fe1611fbc85610120015186610100015161195a90919063ffffffff16565b611feb9190614173565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6000806000806120828560c001518660e001516125d9565b9150915080612098575060009485945092505050565b60006120a48684612624565b925090508115806120b3575080155b156120c657506000958695509350505050565b60006120d28783612733565b9050806000036120eb5750600096879650945050505050565b8660600151811161210157969095509350505050565b5060608601516000612114888685612804565b90508060000361212e575060009788975095505050505050565b828110612145575060009788975095505050505050565b9097909650945050505050565b6001546003546000916001600160801b0380821692600f0b91600160801b900416838080806121a48787877f00000000000000000000000000000000000000000000000000000000000000008d612b69565b9350935093509350806121c05750600098975050505050505050565b8684146121f1576121d084610f3f565b600180546001600160801b0319166001600160801b03929092169190911790555b8583146122225761220183611e72565b600380546001600160801b0319166001600160801b03929092169190911790555b8482146122505761223282610f3f565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612267613fa0565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e0830152600254048216610100820152600454909161012083019161235f9116612c81565b81526003546001600160801b03600160801b918290048116602084015260045460409093019261239192900416612c81565b905292915050565b60008060008060006123aa86612cf7565b91509150806123c157506000958695509350505050565b6123ce8660a001516111dc565b6123d787613017565b836123e589600001516111dc565b6123ef91906142c1565b6123f991906142c1565b6124039190614173565b92505050600081121561241c5750600093849350915050565b9360019350915050565b60008061243788888888888861307b565b9092509050806113bf576113bf600061196f565b600082600019048411830215820261246257600080fd5b50910281810615159190040190565b60008160000361248a5750670de0b6b3a76400006108f9565b8260000361249a575060006108f9565b60006124a5836111dc565b905060006124ba6124b5866111dc565b613145565b90508181026124d1670de0b6b3a7640000826142e9565b9050611d678161336b565b6040516001600160a01b0384811660248301528381166044830152606482018390526125439186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b038381831617835250505050613500565b50505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b17905261259a8482613563565b612543576040516001600160a01b038481166024830152600060448301526125cf91869182169063095ea7b390606401612511565b6125438482613500565b6000806000836125e8866111dc565b6125f29190614173565b9050600081121561260a576000809250925050610b85565b946001945092505050565b6000818311611f5e5782610aac565b60008060008460a001511261264157505060808201516001610b85565b60008460a001516126519061427d565b9050600061268d85876101000151886000015160e00151670de0b6b3a764000061267b91906140f6565b89516060810151608090910151613606565b9350905082158061269c575080155b156126af57600080935093505050610b85565b60006126bb8383611e33565b9050670de0b6b3a764000081116126f75780670de0b6b3a76400000394506126f08760c0015186610e9e90919063ffffffff16565b9450612706565b60008094509450505050610b85565b8660800151851115612725578660800151600194509450505050610b85565b506001925050509250929050565b6000806127698460c001518560e00151866101000151876000015160a0015161275b886111dc565b6127649061427d565b612b69565b875160408101929092526020820192909252919091529050806127905760009150506108f9565b600061279f8560000151612399565b92509050816127b3576000925050506108f9565b846020015181106127c9576000925050506108f9565b6000856060015186604001516127df919061408f565b90506127fa82876020015183611e159092919063ffffffff16565b611d6790826140f6565b6000808460600151856040015161281b919061408f565b602086015160608701519192506000916128359184611e15565b90508560a0015160000361284c579150610aac9050565b60005b6004811015612b5f576128628286612615565b9150600061288b8860c001518960e001518a61010001518b6000015160a0015161275b886111dc565b8b5160408101929092526020820192909252919091529050806128b5576000945050505050610aac565b60006128c48960000151612399565b92509050816128db57600095505050505050610aac565b6128e68982876136b2565b156128f2575050612b5f565b60008960a001511315612a5657885180516020820151604083015160a084015160e0909401518d9460009461294c949093909290919061293a90670de0b6b3a76400006140f6565b8751606081015160809091015161371e565b9450905083612965576000975050505050505050610aac565b808260a0015110612a535761297982613823565b909650935083612993576000975050505050505050610aac565b6129b88260c001518360e00151846101000151856000015160a0015161275b8b6111dc565b855160408101929092526020820192909252919091529350836129e5576000975050505050505050610aac565b815180516020820151604083015160a0909301518e5160e00151612a1794919061293a90670de0b6b3a76400006140f6565b9450905083612a30576000975050505050505050610aac565b8a60a001518111612a4a5785975050505050505050610aac565b5050505061284f565b50505b6000612a678a8a8c60a001516138f9565b93509050821580612a805750670de0b6b3a76400008110155b15612a945760009650505050505050610aac565b80670de0b6b3a76400000390506000612ac1611fbc8c604001518d6020015161195a90919063ffffffff16565b612ace611fbc858a610e9e565b612ad89190614173565b90506000811315612b0257612af1876113928385611afc565b612afb908761408f565b9550612b50565b6000811215612b47576000612b1c8861139285818661427d565b905086811015612b30578087039650612b41565b600098505050505050505050610aac565b50612b50565b50505050612b5f565b8460010194505050505061284f565b5095945050505050565b60008060008084600003612b8857508792508691508590506001612c75565b600085612b948b6111dc565b612b9e91906142c1565b9050612ba9876111dc565b811215612bc457600080600080945094509450945050612c75565b80945060008912612be457612bdd611fbc868b8d611e15565b9350612c07565b612bfb611fbc612bf38b61427d565b87908d61244b565b612c049061427d565b93505b600080612c148c8c6125d9565b9150915080612c33576000806000809650965096509650505050612c75565b6000612c3f88886125d9565b9250905081612c5f57600080600080975097509750975050505050612c75565b612c6a8b8285611e15565b955060019450505050505b95509550955095915050565b600080670de0b6b3a7640000612c95610441565b612c9f91906141da565b9050808311612caf576000612cb9565b612cb981846140f6565b9150611f5b612cf0670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006141da565b8390611afc565b6000806000612d1c611fbc856101600151866101400151610e9e90919063ffffffff16565b612d3c611fbc86610120015187610100015161195a90919063ffffffff16565b612d469190614173565b9050600080612d5d866000015187602001516125d9565b9150915080612d7457506000958695509350505050565b6000831315612eb55760008390506000612dc2886000015189602001518a604001518b60a001518c60e00151670de0b6b3a7640000612db391906140f6565b8d606001518e6080015161371e565b9350905082612ddb575060009788975095505050505050565b818110612e79576000612e15858a60400151858c60e00151670de0b6b3a7640000612e0691906140f6565b8d606001518e6080015161307b565b9450905083158015612e2a57508860c0015183105b15612e415750600098600198509650505050505050565b83612e5757506000988998509650505050505050565b612e60816111dc565b612e699061427d565b9960019950975050505050505050565b6000886020015112612ea157612e988860a0015185611fbc91906140f6565b6118fe9061427d565b60a08801518851612e9891611fbc916140f6565b6000831215613008576000612ec98461427d565b90506000612efd8489604001518a60e00151670de0b6b3a7640000612eee91906140f6565b8b606001518c60800151613606565b9350905082612f16575060009788975095505050505050565b818110612f9b576000612f50858a60400151858c60e00151670de0b6b3a7640000612f4191906140f6565b8d606001518e60800151613c53565b9450905083158015612f6557508860c0015183105b15612f7c5750600098600198509650505050505050565b83612f9257506000988998509650505050505050565b612e69816111dc565b6000612fcd858a604001518b60e00151670de0b6b3a7640000612fbe91906140f6565b8c606001518d60800151613d2a565b9450905083612fe757506000988998509650505050505050565b612e69612ffe8a60600151848661139291906140f6565b611fbc908361408f565b50600095600195509350505050565b600061304a611fbc836101200151670de0b6b3a764000061303891906140f6565b6060850151610100860151919061244b565b611dab611fbc846101600151670de0b6b3a764000061306991906140f6565b60608601516101408701519190611e15565b600080600061308d8989888888613dd9565b905061309d866119a4898b61408f565b9750878110156130b457600080925092505061313a565b8781036130c281868861244b565b9050670de0b6b3a764000081106130f6576130ef6130e8670de0b6b3a764000089611e33565b8290612471565b905061310e565b61310b6130e8670de0b6b3a764000089611afc565b90505b6131188186611e33565b9050808a10156131305760008093509350505061313a565b8903925060019150505b965096945050505050565b60008082136131675760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906131ea9084901c6111dc565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361338657506000919050565b680755bf798b4a1bf1e582126133af576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190611d6774029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6111dc565b60006135156001600160a01b03841683613e08565b9050805160001415801561353a5750808060200190518101906135389190614317565b155b1561169357604051635274afe760e01b81526001600160a01b038416600482015260240161198a565b6000806000846001600160a01b0316846040516135809190614334565b6000604051808303816000865af19150503d80600081146135bd576040519150601f19603f3d011682016040523d82523d6000602084013e6135c2565b606091505b50915091508180156135ec5750805115806135ec5750808060200190518101906135ec9190614317565b80156119aa5750505050506001600160a01b03163b151590565b60008060006136188888888888613dd9565b90506000613643670de0b6b3a76400006136328888611afc565b61363c919061408f565b8390611e33565b9050670de0b6b3a76400008110613670576136696130e8670de0b6b3a764000089611e33565b9050613688565b6136856130e8670de0b6b3a764000089611afc565b90505b8088101561369e576000809350935050506136a8565b8703925060019150505b9550959350505050565b60208301516000906136c49084611e33565b60408501516136d4908490611afc565b10158015610aa95750602084015161370490846136fd633b9aca00670de0b6b3a764000061408f565b9190611e15565b6040850151613714908490611e33565b1115949350505050565b6000806000881215613740576137338861427d565b61373d908761408f565b95505b60008061374d8b8b6125d9565b915091508061376457600080935093505050613817565b6000613773838b8a8a8a613e16565b905060006137906137888a6119a48a8e61195a565b89908961244b565b9050808210156137aa576000809550955050505050613817565b808203670de0b6b3a764000081106137d8576137d16130e8670de0b6b3a76400008c611afc565b90506137f0565b6137ed6130e8670de0b6b3a76400008c611e33565b90505b8b81101561380957600080965096505050505050613817565b8b9003955060019450505050505b97509795505050505050565b60008060008360e001511361383d57506000928392509050565b600061384c8460000151613017565b9050600061387885604001518660600151876040015161386c919061408f565b6020880151919061244b565b90506000821261389f5780821015613892578190036138b5565b5060009485945092505050565b6138a88261427d565b6138b2908261408f565b90505b60e085015160c08601516138ca91839061244b565b9050808560c0015110156138e5575060009485945092505050565b808560c00151036001935093505050915091565b600080600080841261391d5785516040015161391690859061408f565b9050613958565b60006139288561427d565b875160400151909150811015613948578651604001518190039150613956565b600080935093505050611c45565b505b85518051602090910151600091829161397191906125d9565b91509150806139895760008094509450505050611c45565b875160e08101516040909101516000916139be916139b2916139ab9190612471565b8a90610e9e565b6101008b015190611e33565b895160e08101516080909101516139e9916139dd916119a49088610e9e565b8b516060015190611e33565b6139f3919061408f565b90506000613a2b613a1f613a188c6000015160e001518861247190919063ffffffff16565b8b9061195a565b6101008c015190611afc565b905080821015613a4657600080965096505050505050611c45565b80820391506000613a88858c60000151604001518d6000015160e00151670de0b6b3a7640000613a7691906140f6565b8e516060810151608090910151613dd9565b90506000613ab28c6000015160e00151670de0b6b3a7640000613aab91906140f6565b8890612471565b905080821015613acf576000809850985050505050505050611c45565b8b51608081015160609091015191830391613aeb91839161244b565b9050670de0b6b3a76400008110613b2f578b5160e00151613b28906130e890613b1c90670de0b6b3a76400006140f6565b8e5160e0015190611e33565b9050613b5e565b8b5160e00151613b5b906130e890613b4f90670de0b6b3a76400006140f6565b8e5160e0015190611afc565b90505b8b5160600151613b71908590839061244b565b935083670de0b6b3a76400001115613b955783670de0b6b3a7640000039350613ba9565b600060019850985050505050505050611c45565b60008c60e0015112613c0b5760c08c015160e08d0151613bc891611e33565b9250670de0b6b3a76400008310613bec576000809850985050505050505050611c45565b670de0b6b3a76400009290920391613c048484610e9e565b9350613c40565b613c3d613c248d60c001518e60e001516113929061427d565b613c3690670de0b6b3a764000061408f565b8590610e9e565b93505b50919a60019a5098505050505050505050565b6000806000613c658989888888613dd9565b905086881015613c7c57600080925092505061313a565b9686900396613c8b8887612471565b975087811015613ca257600080925092505061313a565b878103613cb081868861244b565b9050670de0b6b3a76400008110613cdd57613cd66130e8670de0b6b3a764000089611e33565b9050613cf5565b613cf26130e8670de0b6b3a764000089611afc565b90505b613cff8186611e33565b905089811015613d175760008093509350505061313a565b9890980398600198509650505050505050565b6000806000613d3c8888888888613e16565b90506000613d60670de0b6b3a7640000613d568888611e33565b612cf0919061408f565b9050670de0b6b3a76400008110613d8d57613d866130e8670de0b6b3a764000089611afc565b9050613da5565b613da26130e8670de0b6b3a764000089611e33565b90505b613daf8186611afc565b905088811015613dc7576000809350935050506136a8565b97909703976001975095505050505050565b6000613de58585612471565b613dfe613df6866119a4868b61195a565b85908561244b565b611d67919061408f565b6060610aac83836000613e3b565b6000613e228585612471565b613dfe613e33866119a4868b610e9e565b859085611e15565b606081471015613e605760405163cd78605960e01b815230600482015260240161198a565b600080856001600160a01b03168486604051613e7c9190614334565b60006040518083038185875af1925050503d8060008114613eb9576040519150601f19603f3d011682016040523d82523d6000602084013e613ebe565b606091505b5091509150611d67868383606082613ede57613ed982613f25565b610aac565b8151158015613ef557506001600160a01b0384163b155b15613f1e57604051639996b31560e01b81526001600160a01b038516600482015260240161198a565b5080610aac565b805115613f355780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b604051806101200160405280613f62613fa0565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000806000806080858703121561401757600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561404357600080fd5b85016060818803121561405557600080fd5b939692955090935050565b60006020828403121561407257600080fd5b5035919050565b634e487b7160e01b600052601160045260246000fd5b808201808211156108f9576108f9614079565b6000602082840312156140b457600080fd5b81356001600160a01b0381168114610aac57600080fd5b80151581146100a257600080fd5b6000602082840312156140eb57600080fd5b8135610aac816140cb565b818103818111156108f9576108f9614079565b634e487b7160e01b600052601260045260246000fd5b60008261412e5761412e614109565b500690565b6001600160701b03818116838216019080821115611ca357611ca3614079565b6001600160801b03818116838216019080821115611ca357611ca3614079565b8181036000831280158383131683831282161715611ca357611ca3614079565b6000808335601e198436030181126141aa57600080fd5b83018035915067ffffffffffffffff8211156141c557600080fd5b602001915036819003821315610b8557600080fd5b80820281158282048414176108f9576108f9614079565b60006020828403121561420357600080fd5b5051919050565b6001600160801b03828116828216039080821115611ca357611ca3614079565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156108f9576108f9614079565b600081600f0b60016001607f1b0319810361427457614274614079565b60000392915050565b6000600160ff1b820161429257614292614079565b5060000390565b60208101600483106142bb57634e487b7160e01b600052602160045260246000fd5b91905290565b80820182811260008312801582168215821617156142e1576142e1614079565b505092915050565b6000826142f8576142f8614109565b600160ff1b82146000198414161561431257614312614079565b500590565b60006020828403121561432957600080fd5b8151610aac816140cb565b6000825160005b81811015614355576020818601810151858301520161433b565b50600092019182525091905056fea264697066735822122023663f2ab3ffe38b66c422da76aeee9224be496ce38a60a0297645a2503baaf364736f6c63430008140033";
        readonly sourceMap: "697:275:50:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;2220:314:41;;;;;;:::i;:::-;;:::i;:::-;;;;785:25:234;;;841:2;826:18;;819:34;;;;758:18;2220:314:41;;;;;;;2690:99;;;;;;;;;;-1:-1:-1;2690:99:41;;;;;:::i;:::-;;:::i;:::-;;2220:314;2413:7;2422;2460:67;2471:11;2484;2497:19;2518:8;2460:10;:67::i;:::-;2441:86;;;;2220:314;;;;;;;;:::o;2690:99::-;2754:28;2766:15;2754:11;:28::i;:::-;2690:99;:::o;1957:4443:117:-;2168:7;2177;2356:21:169;:19;:21::i;:::-;9562::112;;::::1;::::0;::::1;;;9558:85;;;9606:26;;-1:-1:-1::0;;;9606:26:112::1;;;;;;;;;;;9558:85;2246:20:117::2;:18;:20::i;:::-;2331:23;2345:8;2331:13;:23::i;:::-;2493:25;2479:11;:39;2475:115;;;2541:38;;-1:-1:-1::0;;;2541:38:117::2;;;;;;;;;;;2475:115;2916:23;2942:21;:19;:21::i;:::-;2916:47;;2995:19;2977:15;:37;2973:106;;;3037:31;;-1:-1:-1::0;;;3037:31:117::2;;;;;;;;;;;2973:106;3088:24;3115:19;:17;:19::i;:::-;3088:46;;3144:27;3174:85;3204:16;3234:15;3174:16;:85::i;:::-;3144:115:::0;-1:-1:-1;3498:20:117::2;3521:36;3540:17;3521:16:::0;:36:::2;:::i;:::-;3498:59;;3581:19;3614:26:::0;3654::::2;3693:132;3730:11;3759:15;3792:19;3693;:132::i;:::-;3567:258;;;;;;3904:18;3878:22;;:44;;;;;;;:::i;:::-;::::0;;;-1:-1:-1;4556:15:117::2;::::0;-1:-1:-1;4574:110:117::2;4612:11:::0;4637:15;4666:8;4574:24:::2;:110::i;:::-;4556:128;;4712:7;4698:11;:21;4694:84;;;4742:25;;-1:-1:-1::0;;;4742:25:117::2;;;;;;;;;;;4694:84;4787:27;4796:7;4805:8;4787;:27::i;:::-;;;5042:137;5071:11;5096:18;5128:15;5157:12;5042:15;:137::i;:::-;5238:15;5256:98;5291:27;5332:12;5256:21;:98::i;:::-;5238:116;;5364:18;5385:11;5364:32;;5437:48;5443:7;5452:8;:20;;;;;;;;;;:::i;:::-;5474:10;5437:5;:48::i;:::-;5562:18:::0;5648:15;5743:8;5822:7;5789:19:::2;;::::0;::::2;5743:8:::0;5789:19:::2;:::i;:::-;-1:-1:-1::0;;;;;5766:586:117::2;;5843:12;5869:11;5910:67;5942:7;5951:16;5969:7;5910:31;:67::i;:::-;6015:14;::::0;;;::::2;::::0;::::2;;:::i;:::-;6220:98;6288:16;6243:18;6221:19;:40;;;;:::i;:::-;6220:50:::0;::::2;:98::i;:::-;5766:586;::::0;;2385:25:234;;;2441:2;2426:18;;2419:34;;;;2469:18;;;2462:34;;;;2539:14;2532:22;2527:2;2512:18;;2505:50;2586:3;2571:19;;2564:35;2630:3;2615:19;;2608:35;;;2372:3;2357:19;5766:586:117::2;;;;;;;-1:-1:-1::0;6371:12:117;;-1:-1:-1;6385:7:117;;-1:-1:-1;;;;;;;;;;;2398:20:169;1713:1;2924:7;:21;2744:208;1347:758:113;2356:21:169;:19;:21::i;:::-;1494:29:113::1;::::0;;;:12:::1;:29;::::0;;;;:45;-1:-1:-1;;;;;1494:45:113::1;:50:::0;;1560:7:::1;1490:87;1756:24;1783:19;:17;:19::i;:::-;1756:46:::0;-1:-1:-1;1829:37:113::1;1847:19;1829:15:::0;:37:::1;:::i;:::-;:42:::0;::::1;::::0;:92:::1;;;1906:15;1887:16;:34;1829:92;1812:187;;;1953:35;;-1:-1:-1::0;;;1953:35:113::1;;;;;;;;;;;1812:187;2042:56;2059:15;2076:21;:19;:21::i;:::-;2042:16;:56::i;:::-;;1415:690;2387:1:169;2398:20:::0;1713:1;2924:7;:21;2744:208;2431:307;1755:1;2558:7;;:18;2554:86;;2599:30;;-1:-1:-1;;;2599:30:169;;;;;;;;;;;2554:86;1755:1;2714:7;:17;2431:307::o;4144:145:44:-;4211:9;:14;4207:76;;4248:24;;-1:-1:-1;;;4248:24:44;;;;;;;;;;;4207:76;4144:145::o;8216:221:112:-;8360:1;8328:20;;;;:8;:20;:::i;:::-;-1:-1:-1;;;;;8328:34:112;;8324:107;;8385:35;;-1:-1:-1;;;8385:35:112;;;;;;;;;;;5594:150;5672:23;5718:19;193:4:122;5718:14:112;:19::i;:::-;5711:26;;5594:150;:::o;11561:223::-;11637:24;11739:37;11757:19;11739:15;:37;:::i;:::-;11708:69;;:15;:69;:::i;2367:8688:113:-;2493:7;2625:51;;;:12;:51;;;;;2703:27;;-1:-1:-1;;;;;2703:27:113;:32;;;:81;;;2769:15;2751;:33;2703:81;2686:168;;;2816:27;-1:-1:-1;;;;;2816:27:113;;-1:-1:-1;2809:34:113;;2686:168;3096:33;3139:24;3166:19;:17;:19::i;:::-;3139:46;;3218:16;3199:15;:35;3195:690;;3278:16;3250:44;;3195:690;;;3347:12;3362:37;3380:19;3362:15;:37;:::i;:::-;3347:52;;3325:550;3523:18;;;;:12;:18;;;;;:34;-1:-1:-1;;;;;3523:34:113;;-1:-1:-1;3600:24:113;;;:58;;;;-1:-1:-1;3628:30:113;;3600:58;3575:187;;;3727:16;3699:44;;3575:187;3783:25;3812:1;3783:30;3837:5;3779:82;3435:27;3443:19;3435:27;;:::i;:::-;;;3325:550;;;;3195:690;3977:37;:25;:35;:37::i;:::-;3947:67;;-1:-1:-1;;;;;;3947:67:113;-1:-1:-1;;;;;3947:67:113;;;;;;;4101:40;4124:16;4101:22;:40::i;:::-;-1:-1:-1;4605:27:113;;-1:-1:-1;4635:12:113;4605:27;4661:35;4679:17;4661:15;:35;:::i;:::-;4635:71;;;;;;;;;;;-1:-1:-1;4635:71:113;;;:87;-1:-1:-1;;;;;4635:87:113;;-1:-1:-1;4755:101:113;4790:27;4831:15;4755:21;:101::i;:::-;4866:27;4896:26;;;:12;:26;;;;;;4732:124;;-1:-1:-1;4966:23:113;;4962:2486;;-1:-1:-1;5180:4:113;5343:21;;5420:237;5467:19;5508;5549:25;5596:16;5343:21;5420:25;:237::i;:::-;5325:332;;;;5697:13;5671:22;;:39;;;;;;;:::i;:::-;;;;-1:-1:-1;5749:15:113;;-1:-1:-1;5802:237:113;5836:19;5724:22;5892:13;5923:24;5892:13;5923:22;:24::i;:::-;6011:14;5802:16;:237::i;:::-;6273:30;6290:13;6273:30;;:::i;:::-;;-1:-1:-1;6711:16:113;6781:262;6840:19;6273:30;6908:19;6945:25;6711:16;7021:8;6781:41;:262::i;:::-;6765:278;-1:-1:-1;7278:84:113;:55;6765:278;7317:15;7278:38;:55::i;:::-;:82;:84::i;:::-;7243:31;:119;;:31;;:119;;;;;;;-1:-1:-1;;;;;7243:119:113;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;7243:119:113;;;;;-1:-1:-1;;;;;7243:119:113;;;;;;7412:25;:13;:23;:25::i;:::-;7376:32;:61;;:32;;:61;;;;-1:-1:-1;;;7376:61:113;;-1:-1:-1;;;;;7376:61:113;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;7376:61:113;;;;;-1:-1:-1;;;;;7376:61:113;;;;;;4991:2457;;;;4962:2486;7566:19;7588:100;7623:26;7663:15;7588:21;:100::i;:::-;7698:26;7727:25;;;:12;:25;;;;;;7566:122;;-1:-1:-1;7766:22:113;;7762:1716;;7978:4;;-1:-1:-1;8148:16:113;8122:23;;8297:234;8344:18;8384:19;8425:25;8148:16;7978:4;8297:25;:234::i;:::-;8202:329;;;;8571:13;8545:22;;:39;;;;;;;:::i;:::-;;;;-1:-1:-1;8623:15:113;;-1:-1:-1;8676:235:113;8709:18;8598:22;8764:13;8795:24;8764:13;8795:22;:24::i;:::-;8883:14;8676:15;:235::i;:::-;9045:30;9062:13;9045:30;;:::i;:::-;;-1:-1:-1;9308:84:113;:55;9045:30;9347:15;9308:38;:55::i;:84::-;9273:31;:119;;:31;;:119;;;;;;;-1:-1:-1;;;;;9273:119:113;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;9273:119:113;;;;;-1:-1:-1;;;;;9273:119:113;;;;;;9442:25;:13;:23;:25::i;:::-;9406:32;:61;;:32;;:61;;;;-1:-1:-1;;;9406:61:113;;-1:-1:-1;;;;;9406:61:113;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;9406:61:113;;;;;-1:-1:-1;;;;;9406:61:113;;;;;;7790:1688;;;;7762:1716;9629:15;9625:701;;;9849:132;9918:30;:19;:28;:30::i;:::-;9886:29;:18;:27;:29::i;:::-;:62;;;;:::i;:::-;9966:1;9849:19;:132::i;:::-;10272:43;10298:16;10272:25;:43::i;:::-;;9625:701;10705:20;10731:44;10758:16;10731:26;:44::i;:::-;-1:-1:-1;10790:215:113;;;3767:25:234;;;3823:2;3808:18;;3801:34;;;3851:18;;;3844:34;;;3909:2;3894:18;;3887:34;;;3952:3;3937:19;;3930:35;;;10704:71:113;;-1:-1:-1;10820:15:113;;10790:215;;3754:3:234;3739:19;10790:215:113;;;;;;;-1:-1:-1;11023:25:113;;-1:-1:-1;;;;;;;;;2367:8688:113;;;;;:::o;19644:4007:117:-;19840:19;19873:26;19913;20201:239;20248:25;:23;:25::i;:::-;20287:12;:25;-1:-1:-1;;;20287:25:117;;-1:-1:-1;;;;;20287:25:117;20326:11;20351:12;20377:16;20407:23;20201:33;:239::i;:::-;20180:260;-1:-1:-1;20769:11:117;20724:42;20180:260;20749:16;20724:24;:42::i;:::-;:56;20720:213;;;20796:126;20852:56;20796:38;:126::i;:::-;21095:16;21121:26;21157:17;21177:184;21224:25;:23;:25::i;:::-;21263:12;:25;-1:-1:-1;;;21263:25:117;;-1:-1:-1;;;;;21263:25:117;21302:23;21339:12;21177:33;:184::i;:::-;21157:204;;21561:179;21599:11;193:4:122;21691:9:117;21714:16;21561:24;:179::i;:::-;-1:-1:-1;21524:216:117;;-1:-1:-1;21524:216:117;;-1:-1:-1;22413:29:117;;-1:-1:-1;21524:216:117;;22413:29;:::i;:::-;22391:51;;;;:::i;:::-;;-1:-1:-1;23031:542:117;23556:16;23031:505;23101:11;23325:39;23346:18;22391:51;23325:39;:::i;:::-;23382:20;23420:42;:16;23382:20;23420;:42::i;:::-;23480:16;23514:8;23031:52;:505::i;:::-;:524;;:542::i;:::-;23017:556;-1:-1:-1;23625:18:117;;-1:-1:-1;;;19644:4007:117;;;;;;;:::o;34231:393:112:-;34400:7;34423:15;;;;;;;;:::i;:::-;34419:199;;;-1:-1:-1;34461:7:112;34454:14;;34419:199;34574:33;:7;34590:16;34574:15;:33::i;:::-;34567:40;;34419:199;34231:393;;;;;:::o;1926:1509::-;2040:20;;;2206:15;;;;;;;;:::i;:::-;2202:812;;;2306:91;2340:7;2365:18;;;;:8;:18;:::i;:::-;2306:16;:91::i;:::-;2281:116;;-1:-1:-1;2281:116:112;-1:-1:-1;2202:812:112;;;-1:-1:-1;2553:9:112;2623:47;2642:7;2651:18;;;;:8;:18;:::i;:::-;2623;:47::i;:::-;2996:7;2981:22;;2202:812;3086:21;:19;:21::i;:::-;3068:39;-1:-1:-1;3184:10:112;;3180:200;;3229:45;;3211:12;;3237:10;;3262:6;;3211:12;3229:45;3211:12;3229:45;3262:6;3237:10;3229:45;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3210:64;;;3293:7;3288:82;;3327:28;;-1:-1:-1;;;3327:28:112;;;;;;;;;;;3288:82;3196:184;3180:200;3390:38;1926:1509;;;;;;:::o;13794:3622:117:-;14138:12;:26;-1:-1:-1;;;;;14138:26:117;14178:35;;;14174:192;;;14229:126;14285:56;14229:38;:126::i;:::-;14910:28;;14399:36;;;;;14955:21;;14815:137;;14399:36;;14910:28;;14815:46;:137::i;:::-;:161;14798:395;;;15001:181;15057:111;15001:38;:181::i;:::-;15428:30;;15307:311;;:286;;-1:-1:-1;;;15428:30:117;;-1:-1:-1;;;;;15428:30:117;15476:19;193:4:122;15476:13:117;:19;:::i;:::-;15328:37;;-1:-1:-1;;;15328:37:117;;-1:-1:-1;;;;;15328:37:117;;;15546:11;15575:4;15307:103;:286::i;:::-;:309;:311::i;:::-;15267:37;:351;;-1:-1:-1;;;;;15267:351:117;;;-1:-1:-1;;;15267:351:117;;;;;;;;;15941:25;:13;:23;:25::i;:::-;15912:12;:54;;-1:-1:-1;;;;;;15912:54:117;-1:-1:-1;;;;;15912:54:117;;;;;;;;;;16005:23;:11;:21;:23::i;:::-;15976:12;:52;;:25;;:52;;;;-1:-1:-1;;;15976:52:117;;-1:-1:-1;;;;;15976:52:117;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;15976:52:117;;;;;-1:-1:-1;;;;;15976:52:117;;;;;;16072:23;:11;:21;:23::i;:::-;16038:30;:57;;:30;;:57;;;;-1:-1:-1;;;16038:57:117;;-1:-1:-1;;;;;16038:57:117;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;16038:57:117;;;;;-1:-1:-1;;;;;16038:57:117;;;;;;16251:21;16275:30;16291:13;16275:15;:30::i;:::-;16251:54;;16315:110;16348:14;16393:22;:11;:20;:22::i;:::-;16376:39;;:14;:39;:::i;:::-;16315:19;:110::i;:::-;16842:28;16853:16;16842:10;:28::i;:::-;16837:186;;16886:126;16942:56;16886:38;:126::i;:::-;17256:12;17271:43;17297:16;17271:25;:43::i;:::-;17256:58;;17329:7;17324:86;;17359:40;;-1:-1:-1;;;17359:40:117;;;;;;;;;;;17324:86;13965:3451;;;13794:3622;;;;:::o;1198:469:119:-;1309:10;-1:-1:-1;;;;;1401:10:119;:89;1384:179;;;1522:30;;-1:-1:-1;;;1522:30:119;;;;;;;;;;;1384:179;-1:-1:-1;1624:4:119;1620:18;;;;1617:34;;1198:469::o;5934:316:116:-;6051:19;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;6051:23:116;;;;;;;;;:33;;6078:6;;6051:19;:33;;6078:6;;6051:33;:::i;:::-;;;;-1:-1:-1;;6094:21:116;;;;:12;:21;;;;;:31;;6119:6;;6094:21;:31;;6119:6;;6094:31;:::i;:::-;;;;-1:-1:-1;;6184:59:116;;;785:25:234;;;841:2;826:18;;819:34;;;-1:-1:-1;;;;;6184:59:116;;;6219:1;;6199:10;;6184:59;;758:18:234;6184:59:116;;;;;;;5934:316;;;:::o;33531:405:112:-;33707:7;33730:15;;;;;;;;:::i;:::-;33726:204;;;33841:33;:7;33857:16;33841:15;:33::i;33726:204::-;-1:-1:-1;33912:7:112;33905:14;;1610:118:122;1672:7;1699:21;1710:1;1713;193:4;1699:10;:21::i;4450:203:44:-;4580:66;;-1:-1:-1;;;4580:66:44;;;;;5031:25:234;;;4542:7:44;;4597:17;-1:-1:-1;;;;;4580:52:44;;;;5004:18:234;;4580:66:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;884:190:125:-;937:9;-1:-1:-1;;;964:1:125;:12;958:86;;1000:33;;-1:-1:-1;;;1000:33:125;;;;;;;;;;;958:86;-1:-1:-1;1065:1:125;884:190::o;21722:2511:112:-;22081:32;;21828:26;;;;22043:80;;:16;;-1:-1:-1;;;22081:32:112;;-1:-1:-1;;;;;22081:32:112;22043:24;:80::i;:::-;22154:31;;;;;-1:-1:-1;;;;;22154:31:112;;-1:-1:-1;22022:101:112;-1:-1:-1;22328:39:112;;;22324:1903;;;22533:22;22558:39;22579:18;22558;:39;:::i;:::-;22533:64;-1:-1:-1;22870:84:112;:55;22533:64;22908:16;22870:37;:55::i;:84::-;22834:32;:120;;:32;;:120;;;;-1:-1:-1;;;22834:120:112;;-1:-1:-1;;;;;22834:120:112;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;22834:120:112;;;;;-1:-1:-1;;;;;22834:120:112;;;;;;23253:28;23284:70;23324:16;23284:14;:22;;:70;;;;:::i;:::-;23253:101;-1:-1:-1;23368:36:112;23407:80;23253:101;23453:20;23407:28;:80::i;:::-;23368:119;;23527:28;23501:22;;:54;;;;;;;:::i;:::-;;;;-1:-1:-1;23832:52:112;;-1:-1:-1;23856:28:112;23832:52;;:::i;:::-;;;23928:32;:20;:30;:32::i;:::-;23898:12;:62;;:26;;:62;;;;-1:-1:-1;;;;;23898:62:112;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;23898:62:112;;;;;-1:-1:-1;;;;;23898:62:112;;;;;;24006:31;:20;:29;:31::i;:::-;23974:28;:63;;:28;;:63;;;;;;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;23974:63:112;;;;;;;-1:-1:-1;;;;;23974:63:112;;;;;;24198:18;24177:39;;22369:1858;;;22324:1903;21722:2511;;;:::o;11726:2452:113:-;11952:21;;12358:37;:11;12378:16;12358:19;:37::i;:::-;12342:53;-1:-1:-1;12405:15:113;12423:31;12342:53;12445:8;12423:21;:31::i;:::-;12405:49;-1:-1:-1;12480:33:113;12405:49;12496:16;12480:15;:33::i;:::-;12464:49;;12940:7;12936:557;;;12980:23;12990:13;12980:7;:23;:::i;:::-;12963:40;;;;:::i;:::-;;;12936:557;;;13459:23;13469:13;13459:7;:23;:::i;:::-;13442:40;;;;:::i;:::-;;;12936:557;13716:20;13692:21;:44;13688:484;;;13831:115;:13;13873:21;13912:20;13831:24;:115::i;:::-;13815:131;-1:-1:-1;14046:115:113;:13;14088:21;14127:20;14046:24;:115::i;:::-;14030:131;;13688:484;11998:2180;11726:2452;;;;;;;;:::o;2001:204:125:-;2053:8;-1:-1:-1;;;;;2079:1:125;:30;;2073:103;;2133:32;;-1:-1:-1;;;2133:32:125;;;;;;;;;;;17905:1127:117;18207:30;;-1:-1:-1;;;18207:30:117;;-1:-1:-1;;;;;18207:30:117;18287:300;:275;18207:30;18444:19;193:4:122;18444:13:117;:19;:::i;:::-;18308:37;;-1:-1:-1;;;18308:37:117;;-1:-1:-1;;;;;18308:37:117;;;18514:11;18543:5;18287:103;:275::i;:300::-;18247:37;:340;;-1:-1:-1;;;;;18247:340:117;;;-1:-1:-1;;;18247:340:117;;;;;;;;;18730:23;:11;:21;:23::i;:::-;18697:56;;:18;:56;:::i;:::-;18652:30;:101;;-1:-1:-1;;;;;18652:101:117;;;-1:-1:-1;;;18652:101:117;;;;;;;;;18851:31;:19;:29;:31::i;:::-;18821:12;:61;;:26;;:61;;;;-1:-1:-1;;;;;18821:61:117;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;18821:61:117;;;;;-1:-1:-1;;;;;18821:61:117;;;;;;18924:32;:21;:30;:32::i;:::-;18892:28;:64;;:28;;:64;;;;;;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;18892:64:117;;;;;;;-1:-1:-1;;;;;18892:64:117;;;;;;18995:30;:18;:28;:30::i;:::-;18966:12;:59;;:25;;:59;;;;-1:-1:-1;;;18966:59:117;;-1:-1:-1;;;;;18966:59:117;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;18966:59:117;;;;;-1:-1:-1;;;;;18966:59:117;;;;;;18117:915;17905:1127;;;;;:::o;14667:1674:123:-;14928:21;;15394:119;15496:16;15394:80;:11;15430:21;15453:20;15394:35;:80::i;:::-;:101;;:119::i;:::-;15373:140;-1:-1:-1;15764:50:123;:11;15787:8;15797:16;15764:22;:50::i;:::-;15750:64;;;;:::i;:::-;;;16130:12;16117:10;:25;16113:191;;;16267:12;16254:10;:25;16238:41;;16113:191;16314:20;14667:1674;;;;;;;;:::o;527:190:125:-;580:9;-1:-1:-1;;;607:1:125;:12;601:86;;643:33;;-1:-1:-1;;;643:33:125;;;;;;;;;;;14268:3167:115;14652:12;:26;-1:-1:-1;;;;;14652:26:115;14705:35;;;;:110;;-1:-1:-1;14794:21:115;14756:35;14772:19;14756:13;:35;:::i;:::-;:59;14705:110;14688:289;;;14840:126;14896:56;14840:38;:126::i;:::-;15539:28;;15010:36;;;;;15539:28;;15577:40;15596:21;15539:28;15577:40;:::i;:::-;;;15677:21;15644:30;:19;:28;:30::i;:::-;:54;:230;;;;;15853:21;15714:124;15778:13;15809:15;15714:46;:124::i;:::-;:160;15644:230;15627:464;;;15899:181;15955:111;15899:38;:181::i;:::-;16178:29;;-1:-1:-1;;;16178:29:115;;-1:-1:-1;;;;;16178:29:115;16256:297;:272;16178:29;16410:19;193:4:122;16410:13:115;:19;:::i;:::-;16277:36;;-1:-1:-1;;;;;16277:36:115;;16256:272;16480:11;16509:5;16256:102;:272::i;:297::-;16217:36;:336;;-1:-1:-1;;;;;;16217:336:115;-1:-1:-1;;;;;16217:336:115;;;;;;;;;;16615:31;16635:11;16615:31;;:::i;:::-;;;16688:28;:16;:26;:28::i;:::-;16656:29;:60;;-1:-1:-1;;;;;16656:60:115;;;-1:-1:-1;;;16656:60:115;;;;;;;;;17267:25;:13;:23;:25::i;:::-;17238:12;:54;;-1:-1:-1;;;;;;17238:54:115;-1:-1:-1;;;;;17238:54:115;;;;;;;;;;17333:26;:15;:24;:26::i;:::-;17302:28;:57;;-1:-1:-1;;;;;;17302:57:115;-1:-1:-1;;;;;17302:57:115;;;;;;;;;;17398:30;:18;:28;:30::i;:::-;17369:12;:59;;:25;;:59;;;;-1:-1:-1;;;17369:59:115;;-1:-1:-1;;;;;17369:59:115;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;17369:59:115;;;;;-1:-1:-1;;;;;17369:59:115;;;;;;14479:2956;;;14268:3167;;;;;:::o;18678:551:112:-;18982:12;18997:43;19014:14;:7;18982:12;19014:11;:14::i;:::-;18998:13;:6;19009:1;18998:10;:13::i;:::-;:30;;;;:::i;:::-;18997:41;:43::i;:::-;18982:58;;19062:1;19054:5;:9;;;19050:173;;;19079:25;:43;;19116:5;;19079:25;;;:43;;19116:5;;-1:-1:-1;;;;;19079:43:112;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;19079:43:112;;;;;-1:-1:-1;;;;;19079:43:112;;;;;;18747:482;18678:551;;:::o;19050:173::-;19151:1;19143:5;:9;;;19139:84;;;19205:6;19206:5;19205:6;:::i;:::-;19168:25;:44;;:25;;:44;;;;-1:-1:-1;;;;;19168:44:112;;:::i;19139:84::-;18747:482;18678:551;;:::o;21421:1762:114:-;21735:13;:29;-1:-1:-1;;;21514:4:114;21662:70;;;:12;:70;;;;21514:4;;;;21662:102;;-1:-1:-1;;;;;21735:29:114;;21662:102;:::i;:::-;21624:140;;21778:27;21809:1;21778:32;21774:74;;-1:-1:-1;21833:4:114;;21421:1762;-1:-1:-1;;21421:1762:114:o;21774:74::-;21934:12;21949:45;21977:16;21949:27;:45::i;:::-;21934:60;;22008:4;22016:1;22008:9;22004:51;;-1:-1:-1;22040:4:114;;21421:1762;-1:-1:-1;;;21421:1762:114:o;22004:51::-;22235:47;22296:12;22321:149;22373:4;22395:27;22440:16;22321:34;:149::i;:::-;22221:249;;;;22485:7;22480:51;;-1:-1:-1;22515:5:114;;21421:1762;-1:-1:-1;;;;;21421:1762:114:o;22480:51::-;22656:32;22690:21;22715:57;22765:6;22715:49;:57::i;:::-;22655:117;;;;22859:47;22881:24;:13;:22;:24::i;:::-;22880:25;;;:::i;:::-;22859:20;:47::i;:::-;22849:57;;22921:7;22916:51;;-1:-1:-1;22951:5:114;;21421:1762;-1:-1:-1;;;;;;;21421:1762:114:o;22916:51::-;23057:36;:24;:34;:36::i;:::-;23024:13;:69;;:29;;:69;;;;-1:-1:-1;;;;;23024:69:114;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;23024:69:114;;;;;-1:-1:-1;;;;;23024:69:114;;;;;;23129:25;:13;:23;:25::i;:::-;23103:13;:51;;:22;;:51;;;;-1:-1:-1;;;23103:51:114;;-1:-1:-1;;;;;23103:51:114;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;23103:51:114;;;;;-1:-1:-1;;;;;23103:51:114;;;;;;23172:4;23165:11;;;;;;;;21421:1762;;;:::o;25409:1358:112:-;25508:7;25517:4;25660:26;25688:12;25704:117;25767:40;25790:16;25767:22;:40::i;:::-;25704:45;:117::i;:::-;25659:162;;;;25836:7;25831:56;;-1:-1:-1;25867:1:112;;;;-1:-1:-1;25409:1358:112;-1:-1:-1;;;25409:1358:112:o;25831:56::-;26045:20;26087:1;26068:16;:20;:95;;26162:1;26068:95;;;26103:44;:18;26130:16;26103:26;:44::i;:::-;26309:13;:29;26246:12;:48;;;;26173:21;26197:34;;;;;26045:118;;-1:-1:-1;26173:21:112;-1:-1:-1;;;;;26309:29:112;;;;26197:97;;26246:48;26197:97;:::i;:::-;:141;;;;:::i;:::-;26173:165;;26475:13;26492:1;26475:18;26471:66;;-1:-1:-1;26517:1:112;;;;-1:-1:-1;25409:1358:112;-1:-1:-1;;;;;25409:1358:112:o;26471:66::-;26664:20;26687:35;:12;26708:13;26687:20;:35::i;:::-;26664:58;26755:4;;-1:-1:-1;25409:1358:112;-1:-1:-1;;;;;;;25409:1358:112:o;11965:253::-;12125:12;:26;12169:28;;12023:7;;12061:150;;-1:-1:-1;;;;;12125:26:112;;;;12169:28;;12061:46;:150::i;23940:866:123:-;24201:7;24317:482;24384:23;24425:13;24456:9;24692:18;24698:12;193:4:122;24692:18:123;:::i;:::-;24728:16;24762:23;24317:49;:482::i;:::-;24298:501;23940:866;-1:-1:-1;;;;;;;23940:866:123:o;3190:114:122:-;3250:7;3277:19;3286:1;3289;193:4;3277:8;:19::i;317:182:121:-;485:6;451:41;;-1:-1:-1;;;451:41:121;;;;;;;;:::i;:::-;;;;;;;;3330:531:123;3530:17;3736:118;3841:12;3736:87;:23;3784;3809:13;3736:47;:87::i;:::-;:104;;:118::i;:::-;3724:130;3330:531;-1:-1:-1;;;;;3330:531:123:o;29755:2727:112:-;29988:16;;;;30875:144;30976:24;31002:16;30875:78;30941:11;30875:46;30904:16;30910:10;193:4:122;30904:16:112;:::i;:::-;30875:9;;:28;:46::i;:78::-;:100;:144;:100;:144::i;:::-;30864:155;-1:-1:-1;31307:34:112;30864:155;31324:16;31307;:34::i;:::-;31286:55;-1:-1:-1;31849:12:112;31864:104;31898:30;31904:24;193:4:122;31898:30:112;:::i;:::-;31864:11;;31942:16;31864:20;:104::i;:::-;31849:119;-1:-1:-1;31988:20:112;31849:119;31999:8;31988:10;:20::i;:::-;31978:30;-1:-1:-1;32442:33:112;31978:30;32458:16;32442:15;:33::i;:::-;32409:66;;:18;:66;:::i;:::-;32376:99;;30128:2354;29755:2727;;;;;;;;;:::o;15264:104:122:-;15322:7;15352:1;15348;:5;:13;;15360:1;15348:13;;;-1:-1:-1;15356:1:122;;15264:104;-1:-1:-1;15264:104:122:o;11517:1660:123:-;11776:21;;12239:115;12337:16;12239:78;:11;12273:21;12296:20;12239:33;:78::i;:::-;:97;;:115::i;:::-;12218:136;-1:-1:-1;12602:48:123;:11;12623:8;12633:16;12602:20;:48::i;1884:164:122:-;1946:7;1973:21;1984:1;193:4;1992:1;1973:10;:21::i;1321:908:44:-;1443:7;;1519:129;-1:-1:-1;;;;;1533:10:44;1519:43;1576:10;1608:4;1627:11;1519:43;:129::i;:::-;1930:118;1991:17;2023:15;:11;2037:1;2023:15;:::i;:::-;-1:-1:-1;;;;;1944:10:44;1930:39;;:118;:39;:118::i;:::-;2081:106;;-1:-1:-1;;;2081:106:44;;;;;6742:25:234;;;2172:4:44;6783:18:234;;;6776:60;2058:20:44;;2098:17;-1:-1:-1;;;;;2081:44:44;;;;6715:18:234;;2081:106:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2058:129;-1:-1:-1;2220:1:44;;-1:-1:-1;;1321:908:44;;;;;;;:::o;2347:326::-;2529:137;-1:-1:-1;;;;;2543:17:44;2529:50;2593:10;2625:4;2644:12;2529:50;:137::i;6050:574:123:-;6185:30;6227:12;6285:103;6334:14;6362:16;6285:35;:103::i;:::-;6249:139;;-1:-1:-1;6249:139:123;-1:-1:-1;6249:139:123;6398:220;;6426:181;6482:111;6426:38;:181::i;:::-;6217:407;6050:574;;;;:::o;12712:2102:122:-;12906:15;13006:12;13022:1;13006:17;13002:63;;-1:-1:-1;13046:8:122;13039:15;;13002:63;13323:9;13319:1489;;;13420:154;13529:27;13544:12;13529;:27;:::i;:::-;13470:28;:12;13491:6;13470:20;:28::i;:::-;13421:30;:12;13442:8;13421:20;:30::i;:::-;:77;;;;:::i;13420:154::-;13410:164;-1:-1:-1;13921:18:122;13942:20;:6;13953:8;13942:10;:20::i;:::-;13921:41;-1:-1:-1;13976:18:122;13997:20;:6;14008:8;13997:10;:20::i;:::-;13976:41;;14045:10;14035:7;:20;14031:164;;;14085:10;14075:20;;14031:164;;;14130:10;14120:7;:20;14116:79;;;14170:10;14160:20;;14116:79;13334:871;;13319:1489;;;14504:12;14488;:28;14484:75;;-1:-1:-1;14543:1:122;14536:8;;14484:75;14645:152;14752:27;14767:12;14752;:27;:::i;:::-;14695:26;:12;14714:6;14695:18;:26::i;:::-;14646:30;:12;14667:8;14646:20;:30::i;:::-;:75;;;;:::i;14645:152::-;14635:162;12712:2102;-1:-1:-1;;;;;;12712:2102:122:o;12556:675:112:-;12641:6;13046:178;:12;:167;13076:123;13119:27;13168:13;13076:21;:123::i;:::-;13046:167;;;;;;;;;;;;:176;:178::i;:::-;12912:119;:12;:108;12942:64;12964:26;12992:13;12942:21;:64::i;12912:119::-;:312;;;;:::i;18131:376::-;18200:4;18455:45;:21;18483:16;18455:27;:45::i;:::-;18411:25;;:89;;;-1:-1:-1;;;;;18411:25:112;:89;:::i;:::-;18342:12;:26;18334:61;;-1:-1:-1;;;;;18342:26:112;18378:16;18334:43;:61::i;:::-;:166;;;18131:376;-1:-1:-1;;18131:376:112:o;898:556:122:-;1014:9;1279:1;-1:-1:-1;;1262:19:122;1259:1;1256:26;1253:1;1249:34;1242:42;1229:11;1225:60;1198:146;;1328:1;1325;1318:12;1198:146;-1:-1:-1;1415:9:122;;1411:27;;898:556::o;3462:114::-;3522:7;3549:19;3558:1;193:4;3566:1;3549:8;:19::i;1240:212:125:-;1292:8;-1:-1:-1;;;;;1318:30:125;;;1312:103;;1372:32;;-1:-1:-1;;;1372:32:125;;;;;;;;;;;1616:219;1667:8;-1:-1:-1;;;;;;1693:21:125;;;;;:46;;-1:-1:-1;;;;;;1718:21:125;;;1693:46;1687:119;;1763:32;;-1:-1:-1;;;1763:32:125;;;;;;;;;;;15815:101:122;15871:6;15900:1;15896;:5;:13;;15908:1;15896:13;;24513:558:112;24734:25;;24613:18;;;;24726:80;;-1:-1:-1;;;;;24734:25:112;24780:16;24726:40;:80::i;:::-;24703:103;-1:-1:-1;24849:36:112;24864:21;24703:103;24849:36;:::i;:::-;24820:12;:26;-1:-1:-1;;;;;24820:26:112;:65;24816:222;;;24930:12;:26;25006:21;;24930:57;;24975:12;;-1:-1:-1;;;;;24930:26:112;:57;:::i;:::-;:97;;;;:::i;:::-;24901:126;;24816:222;25047:17;24513:558;;;:::o;13522:1887::-;13722:47;;:::i;:::-;13771:12;13954:63;14020:70;14060:16;14020:22;:70::i;:::-;13954:136;;14100:28;14172:74;14218:18;14172:32;:74::i;:::-;14138:108;-1:-1:-1;14138:108:112;-1:-1:-1;14138:108:112;14256:61;;-1:-1:-1;14300:5:112;;-1:-1:-1;14284:22:112;;-1:-1:-1;14284:22:112;14256:61;14464:20;14638:152;:124;14717:18;:44;;;14638:18;:53;;;:78;;:124;;;;:::i;:::-;:150;:152::i;:::-;14487:136;:112;14555:18;:43;;;14487:18;:48;;;:67;;:112;;;;:::i;:136::-;:303;;;;:::i;:::-;14809:569;;;;;;;;;;;;;;;;;;;-1:-1:-1;14986:34:112;;:12;:34;;;;14809:569;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;15195:32:112;;14809:569;;;;15266:34;;;14809:569;;;;15336:31;;;;14809:569;;;;-1:-1:-1;14809:569:112;;15398:4;;-1:-1:-1;13522:1887:112;-1:-1:-1;13522:1887:112:o;21373:3408:124:-;21492:7;21501;21807:38;21847:12;21863:173;21944:7;:29;;;21991:7;:31;;;21863:63;:173::i;:::-;21806:230;;;;22051:7;22046:52;;-1:-1:-1;22082:1:124;;;;-1:-1:-1;21373:3408:124;-1:-1:-1;;;21373:3408:124:o;22046:52::-;22107:29;22181:109;22229:7;22250:30;22181:34;:109::i;:::-;22146:144;-1:-1:-1;22146:144:124;-1:-1:-1;22304:8:124;;;:38;;-1:-1:-1;22316:26:124;;22304:38;22300:82;;;-1:-1:-1;22366:1:124;;;;-1:-1:-1;21373:3408:124;-1:-1:-1;;;;21373:3408:124:o;22300:82::-;22670:32;22705:131;22776:7;22801:21;22705:53;:131::i;:::-;22670:166;;22973:24;23001:1;22973:29;22969:743;;-1:-1:-1;23026:1:124;;;;-1:-1:-1;21373:3408:124;-1:-1:-1;;;;;21373:3408:124:o;22969:743::-;23307:7;:35;;;23279:24;:63;23262:450;;23375:24;23401:21;;-1:-1:-1;21373:3408:124;-1:-1:-1;;;;21373:3408:124:o;23262:450::-;-1:-1:-1;23666:35:124;;;;23971:21;23995:152;24051:7;24072:30;24116:21;23995:42;:152::i;:::-;23971:176;;24161:13;24178:1;24161:18;24157:62;;-1:-1:-1;24203:1:124;;;;-1:-1:-1;21373:3408:124;-1:-1:-1;;;;;;21373:3408:124:o;24157:62::-;24553:21;24536:13;:38;24532:82;;-1:-1:-1;24598:1:124;;;;-1:-1:-1;21373:3408:124;-1:-1:-1;;;;;;21373:3408:124:o;24532:82::-;24734:24;;24760:13;;-1:-1:-1;21373:3408:124;-1:-1:-1;;;;;21373:3408:124:o;23871:1355:114:-;24087:12;:26;24149:28;;23961:4;;-1:-1:-1;;;;;24087:26:114;;;;24149:28;;;-1:-1:-1;;;24211:25:114;;;23961:4;;;;24411:222;24087:26;24149:28;24211:25;24561:21;24600:19;24411:35;:222::i;:::-;24246:387;;;;;;;;24648:7;24643:51;;-1:-1:-1;24678:5:114;;23871:1355;-1:-1:-1;;;;;;;;23871:1355:114:o;24643:51::-;24816:14;24792:20;:38;24788:130;;24875:32;:20;:30;:32::i;:::-;24846:12;:61;;-1:-1:-1;;;;;;24846:61:114;-1:-1:-1;;;;;24846:61:114;;;;;;;;;;24788:130;24957:16;24931:22;:42;24927:137;;25020:33;:22;:31;:33::i;:::-;24989:28;:64;;-1:-1:-1;;;;;;24989:64:114;-1:-1:-1;;;;;24989:64:114;;;;;;;;;;24927:137;25100:13;25077:19;:36;25073:126;;25157:31;:19;:29;:31::i;:::-;25129:12;:59;;-1:-1:-1;;;;;25129:59:114;;;-1:-1:-1;;;25129:59:114;;;;;;;;;25073:126;-1:-1:-1;25215:4:114;;23871:1355;-1:-1:-1;;;;;;;;23871:1355:114:o;15602:1035:112:-;15697:39;;:::i;:::-;15757:873;;;;;;;;15812:12;:26;-1:-1:-1;;;;;15812:26:112;;;15757:873;;15869:28;;;;15757:873;;;;-1:-1:-1;;;15925:25:112;;;;;;15757:873;;;;;;;;;;;;;16035:23;15757:873;;;;16094:21;15757:873;;;;16155:25;15757:873;;;;16207:12;15757:873;;;;15869:28;16251:29;;;;15812:26;15757:873;;;16367:36;;15757:873;;;;;;16320:97;;16367:36;16320:29;:97::i;:::-;15757:873;;16450:30;;-1:-1:-1;;;;;;;;16450:30:112;;;;;;15757:873;;;;16568:37;;15757:873;;;;;16521:98;;16568:37;;;16521:29;:98::i;:::-;15757:873;;15748:882;15602:1035;-1:-1:-1;;15602:1035:112:o;7264:1173:124:-;7371:7;7380:4;7757:19;7801:20;7823:12;7839:65;7883:7;7839:26;:65::i;:::-;7800:104;;;;7923:7;7918:64;;-1:-1:-1;7958:1:124;;;;-1:-1:-1;7264:1173:124;-1:-1:-1;;;;7264:1173:124:o;7918:64::-;8158:39;:7;:28;;;:37;:39::i;:::-;8109:30;8131:7;8109:21;:30::i;:::-;8077:13;8026:32;:7;:21;;;:30;:32::i;:::-;:64;;;;:::i;:::-;:113;;;;:::i;:::-;:171;;;;:::i;:::-;7995:202;;7786:422;;8339:1;8324:12;:16;8320:64;;;-1:-1:-1;8364:1:124;;;;-1:-1:-1;7264:1173:124;-1:-1:-1;;7264:1173:124:o;8320:64::-;8410:12;8425:4;;-1:-1:-1;7264:1173:124;-1:-1:-1;;7264:1173:124:o;10452:583:126:-;10642:14;10668:12;10710:141;10762:2;10778:1;10793:2;10809:1;10824;10839:2;10710:38;:141::i;:::-;10690:161;;-1:-1:-1;10690:161:126;-1:-1:-1;10690:161:126;10861:168;;10889:129;10945:59;10889:38;:129::i;2284:748:122:-;2398:9;2663:1;-1:-1:-1;;2646:19:122;2643:1;2640:26;2637:1;2633:34;2626:42;2613:11;2609:60;2582:146;;2712:1;2709;2702:12;2582:146;-1:-1:-1;2979:9:122;;2926:27;;;2923:34;;2975:27;;;2902:114;;2284:748::o;3811:844::-;3869:7;3935:1;3940;3935:6;3931:47;;-1:-1:-1;193:4:122;3957:10;;3931:47;4031:1;4036;4031:6;4027:45;;-1:-1:-1;4060:1:122;4053:8;;4027:45;4210:15;4228:12;:1;:10;:12::i;:::-;4210:30;;4402:10;4415:16;4418:12;:1;:10;:12::i;:::-;4415:2;:16::i;:::-;4402:29;-1:-1:-1;4509:18:122;;;4546:19;193:4;4509:18;4546:19;:::i;:::-;;;4638:9;4642:4;4638:3;:9::i;1702:188:166:-;1829:53;;-1:-1:-1;;;;;7524:15:234;;;1829:53:166;;;7506:34:234;7576:15;;;7556:18;;;7549:43;7608:18;;;7601:34;;;1802:81:166;;1822:5;;1844:18;;;;;7441::234;;1829:53:166;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;1829:53:166;;;;;;;;;;;1802:19;:81::i;:::-;1702:188;;;;:::o;3296:380::-;3411:47;;;-1:-1:-1;;;;;7838:32:234;;3411:47:166;;;7820:51:234;7887:18;;;;7880:34;;;3411:47:166;;;;;;;;;;7793:18:234;;;;3411:47:166;;;;;;;;-1:-1:-1;;;;;3411:47:166;-1:-1:-1;;;3411:47:166;;;3474:44;3426:13;3411:47;3474:23;:44::i;:::-;3469:201;;3561:43;;-1:-1:-1;;;;;7838:32:234;;;3561:43:166;;;7820:51:234;3601:1:166;7887:18:234;;;7880:34;3534:71:166;;3554:5;;3576:13;;;;;7793:18:234;;3561:43:166;7646:274:234;3534:71:166;3619:40;3639:5;3646:12;3619:19;:40::i;7273:398:123:-;7412:7;7421:4;7437:29;7509:16;7469:25;:14;:23;:25::i;:::-;:56;;;;:::i;:::-;7437:88;;7564:1;7539:22;:26;7535:74;;;7589:1;7592:5;7581:17;;;;;;;7535:74;7634:22;7659:4;;-1:-1:-1;7273:398:123;-1:-1:-1;;;7273:398:123:o;14987:104:122:-;15045:7;15075:1;15071;:5;:13;;15083:1;15071:13;;45699:3239:124;45872:29;45903:12;46092:1;46067:7;:21;;;:26;46063:84;;-1:-1:-1;;46117:12:124;;;;46131:4;46109:27;;46063:84;46156:21;46189:7;:21;;;46188:22;;;:::i;:::-;46156:55;;46460:21;46518:316;46574:31;46619:7;:28;;;46667:7;:26;;;:38;;;193:4:122;46661:44:124;;;;:::i;:::-;46719:26;;:42;;;;46775:49;;;;;46518:42;:316::i;:::-;46491:343;-1:-1:-1;46491:343:124;-1:-1:-1;46848:8:124;;;:30;;-1:-1:-1;46860:18:124;;46848:30;46844:78;;;46902:1;46905:5;46894:17;;;;;;;;46844:78;47945:24;47972:34;:13;47992;47972:19;:34::i;:::-;47945:61;;193:4:122;48189:16:124;:23;48185:453;;48286:16;193:4:122;48280:22:124;48256:46;;48354:90;48401:7;:29;;;48354:21;:29;;:90;;;;:::i;:::-;48330:114;;48185:453;;;48618:1;48621:5;48610:17;;;;;;;;;48185:453;48820:7;:12;;;48796:21;:36;48792:94;;;48856:7;:12;;;48870:4;48848:27;;;;;;;;;48792:94;-1:-1:-1;48926:4:124;;-1:-1:-1;;;45699:3239:124;;;;;:::o;25642:2209::-;25822:7;25921:12;26140:274;26182:7;:29;;;26225:7;:31;;;26270:7;:28;;;26312:7;:26;;;:47;;;26374:30;:19;:28;:30::i;:::-;26373:31;;;:::i;:::-;26140:28;:274::i;:::-;25957:26;;26067:39;;;25943:471;;;;26011:42;;;25943:471;;;;;;;;;-1:-1:-1;25943:471:124;26424:167;;26579:1;26572:8;;;;;26424:167;26600:26;26668:75;26707:7;:26;;;26668:25;:75::i;:::-;26636:107;-1:-1:-1;26636:107:124;-1:-1:-1;26636:107:124;26753:167;;26908:1;26901:8;;;;;;26753:167;27254:7;:28;;;27232:18;:50;27228:89;;27305:1;27298:8;;;;;;27228:89;27566:21;27632:7;:35;;;27590:7;:27;;;:77;;;;:::i;:::-;27566:101;;27724:120;27766:18;27802:7;:28;;;27724:13;:24;;:120;;;;;:::i;:::-;27696:148;;:13;:148;:::i;28733:10660::-;28954:7;29015:21;29081:7;:35;;;29039:7;:27;;;:77;;;;:::i;:::-;29674:28;;;;29614:35;;;;29015:101;;-1:-1:-1;29590:21:124;;29614:125;;29015:101;29614:46;:125::i;:::-;29590:149;;29852:7;:21;;;29877:1;29852:26;29848:77;;29901:13;-1:-1:-1;29894:20:124;;-1:-1:-1;29894:20:124;29848:77;30288:9;30283:9073;871:1;30303;:33;30283:9073;;;30511:41;:13;30529:22;30511:17;:41::i;:::-;30495:57;;30636:12;30879:292;30925:7;:29;;;30972:7;:31;;;31021:7;:28;;;31067:7;:26;;;:47;;;31133:24;:13;:22;:24::i;30879:292::-;30680:26;;30798:39;;;30662:509;;;;30738:42;;;30662:509;;;;;;;;;-1:-1:-1;30662:509:124;31185:268;;31437:1;31430:8;;;;;;;;31185:268;31513:20;31573:83;31616:7;:26;;;31573:25;:83::i;:::-;31547:109;-1:-1:-1;31547:109:124;-1:-1:-1;31547:109:124;31670:265;;31919:1;31912:8;;;;;;;;;31670:265;32039:167;32112:7;32141:12;32175:13;32039:51;:167::i;:::-;32018:241;;;32239:5;;;;32018:241;32509:1;32485:7;:21;;;:25;32481:4509;;;32898:25;;:39;;32963:41;;;;33030:38;;;;33094:46;;;;33172:37;;;;;32694:7;;32651:40;;32809:563;;32898:39;;32963:41;;33030:38;;33094:46;33166:43;;193:4:122;33166:43:124;:::i;:::-;33235:25;;:41;;;;33302:48;;;;;32809:63;:563::i;:::-;32782:590;-1:-1:-1;32782:590:124;-1:-1:-1;32782:590:124;33390:289;;33659:1;33652:8;;;;;;;;;;;33390:289;33890:13;33865:6;:20;;;33857:46;33853:3123;;34171:115;34258:6;34171:61;:115::i;:::-;34074:212;;-1:-1:-1;34074:212:124;-1:-1:-1;34074:212:124;34308:200;;34484:1;34477:8;;;;;;;;;;;34308:200;34920:336;34974:6;:28;;;35028:6;:30;;;35084:6;:27;;;35137:6;:25;;;:46;;;35210:24;:13;:22;:24::i;34920:336::-;34692:25;;34824:38;;;34666:590;;;;34757:41;;;34666:590;;;;;;;;;-1:-1:-1;34666:590:124;35278:200;;35454:1;35447:8;;;;;;;;;;;35278:200;35623:25;;:39;;35692:41;;;;35763:38;;;;35831:46;;;;;35913:26;;:38;;;35526:600;;35763:38;35831:46;35907:44;;193:4:122;35907:44:124;:::i;35526:600::-;35499:627;-1:-1:-1;35499:627:124;-1:-1:-1;35499:627:124;36148:200;;36324:1;36317:8;;;;;;;;;;;36148:200;36671:7;:21;;;36646:13;:47;36642:316;;36728:13;36721:20;;;;;;;;;;;36642:316;36927:8;;;;30283:9073;;36642:316;32512:4478;;32481:4509;37266:18;37368:176;37435:7;37460:31;37509:7;:21;;;37368:49;:176::i;:::-;37298:246;-1:-1:-1;37298:246:124;-1:-1:-1;37562:8:124;;;:29;;;193:4:122;37574:10:124;:17;;37562:29;37558:189;;;37731:1;37724:8;;;;;;;;;;37558:189;37807:10;193:4:122;37801:16:124;37788:29;;38119:12;38199:137;:105;38276:7;:27;;;38199:7;:49;;;:76;;:105;;;;:::i;:137::-;38134:46;:35;:12;38155:13;38134:20;:35::i;:46::-;:202;;;;:::i;:::-;38119:217;;38362:1;38354:5;:9;38350:893;;;38527:57;38570:13;38527:34;38535:5;38550:10;38527:22;:34::i;:57::-;38491:93;;:13;:93;:::i;:::-;38455:129;;38350:893;;;38617:1;38609:5;:9;38605:638;;;38710:14;38727:96;38792:13;38727:35;38751:10;38727:35;38736:5;38735:6;:::i;38727:96::-;38710:113;;38854:13;38845:6;:22;38841:344;;;38959:6;38943:13;:22;38927:38;;38841:344;;;39165:1;39158:8;;;;;;;;;;;;38841:344;38620:579;38605:638;;;39223:5;;;;;;38605:638;39328:3;;;;;30340:9016;;;;30283:9073;;;-1:-1:-1;39373:13:124;28733:10660;-1:-1:-1;;;;;28733:10660:124:o;1846:3557::-;2121:21;2156:22;2192:20;2226:4;2365:19;2388:1;2365:24;2361:117;;-1:-1:-1;2413:14:124;;-1:-1:-1;2429:16:124;;-1:-1:-1;2447:13:124;;-1:-1:-1;2462:4:124;2405:62;;2361:117;2647:21;2699:19;2671:25;:14;:23;:25::i;:::-;:47;;;;:::i;:::-;2647:71;;2749:32;:21;:30;:32::i;:::-;2732:14;:49;2728:103;;;2805:1;2808;2811;2814:5;2797:23;;;;;;;;;;;2728:103;2864:14;2840:39;;3454:1;3434:16;:21;3430:497;;3567:112;:84;:13;3617:16;3636:14;3567:41;:84::i;:112::-;3549:130;;3430:497;;;3805:111;:83;3853:17;3854:16;3853:17;:::i;:::-;3805:13;;3873:14;3805:39;:83::i;:111::-;3804:112;;;:::i;:::-;3786:130;;3430:497;4629:33;4664:12;4680:143;4761:14;4793:16;4680:63;:143::i;:::-;4628:195;;;;4838:7;4833:62;;4869:1;4872;4875;4878:5;4861:23;;;;;;;;;;;;;4833:62;4904:30;4980:141;5061:13;5092:15;4980:63;:141::i;:::-;4944:177;-1:-1:-1;4944:177:124;-1:-1:-1;4944:177:124;5131:62;;5167:1;5170;5173;5176:5;5159:23;;;;;;;;;;;;;;5131:62;5217:109;:13;5255:22;5291:25;5217:24;:109::i;:::-;5202:124;-1:-1:-1;5391:4:124;;-1:-1:-1;;;;;1846:3557:124;;;;;;;;;;;:::o;10998:450:112:-;11097:21;11130:24;193:4:122;11157:19:112;:17;:19::i;:::-;:25;;;;:::i;:::-;11130:52;;11224:16;11208:13;:32;:95;;11302:1;11208:95;;;11255:32;11271:16;11255:13;:32;:::i;:::-;11192:111;-1:-1:-1;11395:46:112;11417:23;193:4:122;11417:17:112;:23;:::i;:::-;11395:13;;:21;:46::i;8765:9443:124:-;8873:6;8881:4;9683:23;9838:130;:102;9906:7;:33;;;9838:7;:42;;;:67;;:102;;;;:::i;:130::-;9709:114;:90;9766:7;:32;;;9709:7;:37;;;:56;;:90;;;;:::i;:114::-;:259;;;;:::i;:::-;9683:285;;9979:30;10011:12;10027:157;10108:7;:21;;;10147:7;:23;;;10027:63;:157::i;:::-;9978:206;;;;10199:7;10194:160;;-1:-1:-1;10334:1:124;;;;-1:-1:-1;8765:9443:124;-1:-1:-1;;;;8765:9443:124:o;10194:160::-;10603:1;10584:16;:20;10580:7595;;;10620:25;10656:16;10620:53;;10861:21;10923:401;11004:7;:21;;;11047:7;:23;;;11092:7;:20;;;11134:7;:28;;;11190:7;:19;;;193:4:122;11184:25:124;;;;:::i;:::-;11231:7;:23;;;11276:7;:30;;;10923:59;:401::i;:::-;10896:428;-1:-1:-1;10896:428:124;-1:-1:-1;10896:428:124;11338:176;;-1:-1:-1;11490:1:124;;;;-1:-1:-1;8765:9443:124;-1:-1:-1;;;;;;8765:9443:124:o;11338:176::-;11691:17;11674:13;:34;11670:2891;;11982:21;12048:389;12148:22;12196:7;:20;;;12242:17;12291:7;:19;;;193:4:122;12285:25:124;;;;:::i;:::-;12336:7;:23;;;12385:7;:30;;;12048:74;:389::i;:::-;12021:416;-1:-1:-1;12021:416:124;-1:-1:-1;12743:8:124;;:84;;;;;12795:7;:32;;;12775:17;:52;12743:84;12718:335;;;-1:-1:-1;12876:1:124;;12879:4;;-1:-1:-1;8765:9443:124;-1:-1:-1;;;;;;;8765:9443:124:o;12718:335::-;12986:7;12981:72;;-1:-1:-1;13025:1:124;;;;-1:-1:-1;8765:9443:124;-1:-1:-1;;;;;;;8765:9443:124:o;12981:72::-;13080:24;:13;:22;:24::i;:::-;13079:25;;;:::i;:::-;13071:40;13106:4;;-1:-1:-1;8765:9443:124;-1:-1:-1;;;;;;;;8765:9443:124:o;11670:2891::-;13796:1;13769:7;:23;;;:28;13765:782;;13855:95;13881:7;:28;;;13856:22;:53;;;;:::i;13855:95::-;13854:96;;;:::i;13765:782::-;14407:28;;;;14383:21;;14382:94;;14383:52;;;:::i;10580:7595::-;14686:1;14667:16;:20;14663:3512;;;14703:25;14739:17;14740:16;14739:17;:::i;:::-;14703:54;;14874:21;14936:307;15017:22;15061:7;:20;;;15109:7;:19;;;193:4:122;15103:25:124;;;;:::i;:::-;15150:7;:23;;;15195:7;:30;;;14936:59;:307::i;:::-;14909:334;-1:-1:-1;14909:334:124;-1:-1:-1;14909:334:124;15257:64;;-1:-1:-1;15297:1:124;;;;-1:-1:-1;8765:9443:124;-1:-1:-1;;;;;;8765:9443:124:o;15257:64::-;15498:17;15481:13;:34;15477:2688;;15790:21;15856:387;15954:22;16002:7;:20;;;16048:17;16097:7;:19;;;193:4:122;16091:25:124;;;;:::i;:::-;16142:7;:23;;;16191:7;:30;;;15856:72;:387::i;:::-;15829:414;-1:-1:-1;15829:414:124;-1:-1:-1;16549:8:124;;:84;;;;;16601:7;:32;;;16581:17;:52;16549:84;16524:335;;;-1:-1:-1;16682:1:124;;16685:4;;-1:-1:-1;8765:9443:124;-1:-1:-1;;;;;;;8765:9443:124:o;16524:335::-;16792:7;16787:72;;-1:-1:-1;16831:1:124;;;;-1:-1:-1;8765:9443:124;-1:-1:-1;;;;;;;8765:9443:124:o;16787:72::-;16885:24;:13;:22;:24::i;15477:2688::-;17243:23;17313:335;17402:22;17450:7;:20;;;17502:7;:19;;;193:4:122;17496:25:124;;;;:::i;:::-;17547:7;:23;;;17596:7;:30;;;17313:63;:335::i;:::-;17284:364;-1:-1:-1;17284:364:124;-1:-1:-1;17284:364:124;17666:72;;-1:-1:-1;17710:1:124;;;;-1:-1:-1;8765:9443:124;-1:-1:-1;;;;;;;8765:9443:124:o;17666:72::-;17929:177;17972:122;18045:7;:23;;;17993:13;17973:17;:33;;;;:::i;17972:122::-;17930:164;;:15;:164;:::i;14663:3512::-;-1:-1:-1;18193:1:124;;18196:4;;-1:-1:-1;8765:9443:124;-1:-1:-1;;;;8765:9443:124:o;18455:1167::-;18558:6;19416:199;19434:156;19495:7;:32;;;193:4:122;19489:38:124;;;;:::i;:::-;19549:23;;;;19434:24;;;;;:156;:33;:156::i;19416:199::-;19198:203;19216:160;19280:7;:33;;;193:4:122;19274:39:124;;;;:::i;:::-;19335:23;;;;19216:25;;;;;:160;:36;:160::i;11709:1515:126:-;11903:7;11912:4;12066:9;12078:20;12082:2;12086:1;12089;12092;12095:2;12078:3;:20::i;:::-;12066:32;-1:-1:-1;12141:15:126;12154:1;12142:6;12146:2;12142:1;:6;:::i;12141:15::-;12137:19;;12238:1;12234;:5;12230:53;;;12263:1;12266:5;12255:17;;;;;;;12230:53;12487:5;;;12517:18;12487:5;12529:2;12533:1;12517:11;:18::i;:::-;12512:23;;193:4:122;12549:2:126;:9;12545:263;;12648:20;12655:12;193:4:122;12665:1:126;12655:9;:12::i;:::-;12648:2;;:6;:20::i;:::-;12643:25;;12545:263;;;12775:22;12782:14;193:4:122;12794:1:126;12782:11;:14::i;12775:22::-;12770:27;;12545:263;12890:12;:2;12899;12890:8;:12::i;:::-;12885:17;;13027:2;13022;:7;13018:55;;;13053:1;13056:5;13045:17;;;;;;;;13018:55;13193:7;;;-1:-1:-1;13202:4:126;;-1:-1:-1;;11709:1515:126;;;;;;;;;;:::o;8508:3846:122:-;8553:8;8606:1;8601;:6;8597:80;;8634:28;;-1:-1:-1;;;8634:28:122;;;;;;;;;;;8597:80;-1:-1:-1;;;;;;9286:41:122;-1:-1:-1;9283:1:122;9279:49;9386:9;;;9366:18;9363:33;9360:1;9356:41;9350:48;9448:9;;;9436:10;9433:25;9430:1;9426:33;9420:40;9506:9;;;9498:6;9495:21;9492:1;9488:29;9482:36;9562:9;;;9556:4;9553:19;9550:1;9546:27;;;9540:34;;;9617:9;;;9612:3;9609:18;9606:1;9602:26;9596:33;9672:9;;;9664:18;;;9661:1;9657:26;;;9651:33;;;9720:9;;;9712:18;;;9706:25;9902:3;:7;;;9872:2;9902:7;9888:22;;;;;-1:-1:-1;;9868:6:122;;;9928:30;;9929:17;;;9928:28;:30::i;:::-;10733:31;10729:35;;10784:5;;10191:2;10783:13;;;10800:32;10782:50;10852:5;;10851:13;;10868:33;10850:51;10921:5;;10920:13;;10937:33;10919:51;10990:5;;10989:13;;11006:33;10988:51;11059:5;;11058:13;;11075:32;11057:50;11127:5;;11126:13;;11143:30;11125:48;10130:31;10126:35;;10181:5;;10180:13;;10197:32;10179:50;10249:5;;10248:13;;10265:32;10247:50;10317:5;;10316:13;;-1:-1:-1;;10315:50:122;10385:5;;10384:13;;-1:-1:-1;;10383:50:122;10453:5;;10452:13;;;-1:-1:-1;;10451:50:122;10519:5;;;-1:-1:-1;;10519:46:122;11514:10;11904:43;11899:48;12027:71;:91;;;;12006:112;12191:72;12186:77;12334:3;12328:9;;;-1:-1:-1;;8508:3846:122:o;4907:3302::-;4953:8;-1:-1:-1;;5130:1:122;:26;5126:40;;-1:-1:-1;5165:1:122;;4907:3302;-1:-1:-1;4907:3302:122:o;5126:40::-;5365:21;5360:1;:26;5356:87;;5411:32;;-1:-1:-1;;;5411:32:122;;;;;;;;;;;5356:87;5716:7;5710:2;5705:7;;;5704:19;;-1:-1:-1;6052:8:122;6136:2;6076:29;6065:7;;;6064:41;-1:-1:-1;;;6064:51:122;6063:75;;6164:29;6160:33;;6156:37;;;;-1:-1:-1;;6835:35:122;;6890:5;;6470:2;6889:13;;;6906:32;6888:50;6958:5;;6957:13;;-1:-1:-1;;6956:51:122;7027:5;;7026:13;;7043:34;7025:52;7097:5;;7096:13;;-1:-1:-1;;7095:53:122;7168:5;;7167:13;;7184:35;7166:53;6476:32;6409:31;6405:35;;6460:5;;6459:13;;6458:50;;;6533:5;;;-1:-1:-1;;6533:40:122;6593:5;;6592:13;;;6609:35;6591:53;6662:5;;-1:-1:-1;;;6662:50:122;7584:10;;;;-1:-1:-1;6063:75:122;;-1:-1:-1;6458:50:122;;6662;8063:129;8094:49;8065:78;;8172:3;:7;;;8064:116;8063:127;:129::i;4059:629:166:-;4478:23;4504:33;-1:-1:-1;;;;;4504:27:166;;4532:4;4504:27;:33::i;:::-;4478:59;;4551:10;:17;4572:1;4551:22;;:57;;;;;4589:10;4578:30;;;;;;;;;;;;:::i;:::-;4577:31;4551:57;4547:135;;;4631:40;;-1:-1:-1;;;4631:40:166;;-1:-1:-1;;;;;8626:32:234;;4631:40:166;;;8608:51:234;8581:18;;4631:40:166;8462:203:234;5189:578:166;5272:4;5574:12;5588:23;5623:5;-1:-1:-1;;;;;5615:19:166;5635:4;5615:25;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5573:67;;;;5657:7;:69;;;;-1:-1:-1;5669:17:166;;:22;;:56;;;5706:10;5695:30;;;;;;;;;;;;:::i;:::-;5657:103;;;;-1:-1:-1;;;;;;;;;;5730:26:166;;:30;;;5189:578::o;15892:1050:126:-;16055:7;16064:4;16276:9;16288:20;16292:2;16296:1;16299;16302;16305:2;16288:3;:20::i;:::-;16276:32;-1:-1:-1;16318:16:126;16337:28;193:4:122;16345:13:126;:1;16355:2;16345:9;:13::i;:::-;:19;;;;:::i;:::-;16337:1;;:7;:28::i;:::-;16318:47;;193:4:122;16379:8:126;:15;16375:293;;16490:26;16503:12;193:4:122;16513:1:126;16503:9;:12::i;16490:26::-;16479:37;;16375:293;;;16629:28;16642:14;193:4:122;16654:1:126;16642:11;:14::i;16629:28::-;16618:39;;16375:293;16813:8;16809:1;:12;16805:60;;;16845:1;16848:5;16837:17;;;;;;;;16805:60;16906:12;;;-1:-1:-1;16920:4:126;;-1:-1:-1;;15892:1050:126;;;;;;;;;:::o;43668:1269:124:-;44295:28;;;;43872:4;;44295:50;;44330:14;44295:34;:50::i;:::-;44185:27;;;;44163:50;;:13;;:21;:50::i;:::-;:182;;:767;;;;-1:-1:-1;44856:28:124;;;;44791:139;;44902:14;44792:34;1037:3;193:4:122;44792:34:124;:::i;:::-;44791:47;:139;:47;:139::i;:::-;44679:27;;;;44659:48;;:13;;:19;:48::i;:::-;:271;;43888:1042;43668:1269;-1:-1:-1;;;;43668:1269:124:o;17581:2070:126:-;17786:7;17795:4;18092:1;18085:4;:8;18081:67;;;18131:5;18132:4;18131:5;:::i;:::-;18116:21;;:4;:21;:::i;:::-;18109:28;;18081:67;18644:10;18656:12;18672:72;18736:1;18739:4;18672:63;:72::i;:::-;18643:101;;;;18760:7;18755:56;;18791:1;18794:5;18783:17;;;;;;;;18755:56;18820:9;18832:22;18838:2;18842:1;18845;18848;18851:2;18832:5;:22::i;:::-;18820:34;-1:-1:-1;18864:11:126;18878:37;18889:21;18908:1;18889:14;:2;18898:4;18889:8;:14::i;:21::-;18878:1;;18912:2;18878:10;:37::i;:::-;18864:51;;18933:3;18929:1;:7;18925:55;;;18960:1;18963:5;18952:17;;;;;;;;;;18925:55;19050:7;;;193:4:122;19081:15:126;;19077:295;;19195:28;19208:14;193:4:122;19220:1:126;19208:11;:14::i;19195:28::-;19184:39;;19077:295;;;19335:26;19348:12;193:4:122;19358:1:126;19348:9;:12::i;19335:26::-;19324:37;;19077:295;19529:1;19518:8;:12;19514:60;;;19554:1;19557:5;19546:17;;;;;;;;;;;19514:60;19615:12;;;;-1:-1:-1;19629:4:126;;-1:-1:-1;;;;;17581:2070:126;;;;;;;;;;;:::o;41084:1866:124:-;41235:7;41244:4;41526:1;41491:7;:31;;;:36;41487:84;;-1:-1:-1;41551:1:124;;;;-1:-1:-1;41084:1866:124;-1:-1:-1;41084:1866:124:o;41487:84::-;41622:19;41644:49;41666:7;:26;;;41644:21;:49::i;:::-;41622:71;;41836:11;41850:167;41901:7;:27;;;41972:7;:35;;;41942:7;:27;;;:65;;;;:::i;:::-;41850:28;;;;;:167;:37;:167::i;:::-;41836:181;;42047:1;42031:12;:17;42027:411;;42092:3;42076:12;42068:27;42064:304;;;42147:28;;;42027:411;;42064:304;-1:-1:-1;42344:1:124;;;;-1:-1:-1;41084:1866:124;-1:-1:-1;;;41084:1866:124:o;42027:411::-;42413:13;42414:12;42413:13;:::i;:::-;42398:29;;;;:::i;:::-;;;42027:411;42678:31;;;;42601:29;;;;:119;;42653:3;;42601:38;:119::i;:::-;42595:125;;42803:3;42771:7;:29;;;:35;42767:83;;;-1:-1:-1;42830:1:124;;;;-1:-1:-1;41084:1866:124;-1:-1:-1;;;41084:1866:124:o;42767:83::-;42923:3;42891:7;:29;;;:35;42928:4;42883:50;;;;;;41084:1866;;;:::o;51344:5799::-;51560:7;51569:4;51658:20;51707:1;51692:11;:16;51688:670;;51755:26;;:39;;;:78;;51821:11;;51755:78;:::i;:::-;51724:109;;51688:670;;;51864:18;51893:12;51894:11;51893:12;:::i;:::-;51937:26;;:39;;;51864:42;;-1:-1:-1;51924:52:124;;51920:428;;;52067:26;;:39;;;:76;;;;-1:-1:-1;51920:428:124;;;52324:1;52327:5;52316:17;;;;;;;;51920:428;51850:508;51688:670;52747:26;;:40;;52805:42;;;;;52618:30;;;;52666:195;;52747:40;52666:63;:195::i;:::-;52617:244;;;;52876:7;52871:56;;52907:1;52910:5;52899:17;;;;;;;;;52871:56;53419:26;;:38;;;;53350:39;;;;;52936:18;;53237:274;;53289:208;;53350:129;;:39;:43;:129::i;:::-;53289:31;;:39;:208::i;:::-;53237:28;;;;;:34;:274::i;:::-;53173:26;;:38;;;;53019:83;;;;;52957:265;;53019:193;;:132;;53128:22;53019:108;:132::i;:193::-;52957:26;;:42;;;;:48;:265::i;:::-;:554;;;;:::i;:::-;52936:575;;53581:11;53595:185;53645:125;53700:56;53717:7;:26;;;:38;;;53700:12;:16;;:56;;;;:::i;:::-;53645:31;;:37;:125::i;:::-;53595:28;;;;;:36;:185::i;:::-;53581:199;;53807:3;53794:10;:16;53790:64;;;53834:1;53837:5;53826:17;;;;;;;;;;;53790:64;53901:3;53887:17;;;;54144:9;54156:294;54188:22;54224:7;:26;;;:39;;;54283:7;:26;;;:38;;;193:4:122;54277:44:124;;;;:::i;:::-;54335:26;;:42;;;;54391:49;;;;;54156:18;:294::i;:::-;54144:306;;54460:13;54476:84;54512:7;:26;;;:38;;;193:4:122;54506:44:124;;;;:::i;:::-;54476:12;;:16;:84::i;:::-;54460:100;;54578:5;54574:1;:9;54570:201;;;54751:1;54754:5;54743:17;;;;;;;;;;;;;54570:201;54877:26;;:49;;;;54940:42;;;;;54812:9;;;;54849:143;;54812:9;;54849:14;:143::i;:::-;54841:151;;193:4:122;55006:5:124;:12;55002:584;;55217:26;;:38;;;55118:169;;55145:128;;55211:44;;193:4:122;55211:44:124;:::i;:::-;55145:26;;:38;;;;:44;:128::i;55118:169::-;55110:177;;55002:584;;;55505:26;;:38;;;55404:171;;55431:130;;55499:44;;193:4:122;55499:44:124;:::i;:::-;55431:26;;:38;;;;:46;:130::i;55404:171::-;55396:179;;55002:584;55738:26;;:42;;;55686:104;;:10;;55719:5;;55686:19;:104::i;:::-;55673:117;;55850:10;193:4:122;55844:16:124;55840:398;;;55923:10;193:4:122;55917:16:124;55904:29;;55840:398;;;56219:1;56222:4;56211:16;;;;;;;;;;;;;55840:398;56412:1;56377:7;:31;;;:36;56373:728;;56499:29;;;;56443:31;;;;56435:107;;:46;:107::i;:::-;56429:113;;193:4:122;56560:3:124;:10;56556:168;;56700:1;56703:5;56692:17;;;;;;;;;;;;;56556:168;193:4:122;56771:9:124;;;;;56821:23;:10;56771:9;56821:18;:23::i;:::-;56808:36;;56373:728;;;56888:202;56950:126;57025:7;:29;;;56959:7;:31;;;56958:32;;;:::i;56950:126::-;56924:152;;193:4:122;56924:152:124;:::i;:::-;56888:10;;:18;:202::i;:::-;56875:215;;56373:728;-1:-1:-1;57119:10:124;;57131:4;;-1:-1:-1;51344:5799:124;-1:-1:-1;;;;;;;;;51344:5799:124:o;5576:1765:126:-;5768:7;5777:4;5931:9;5943:20;5947:2;5951:1;5954;5957;5960:2;5943:3;:20::i;:::-;5931:32;;6086:2;6082:1;:6;6078:54;;;6112:1;6115:5;6104:17;;;;;;;6078:54;6194:7;;;;;6225:8;6194:7;6231:1;6225:5;:8::i;:::-;6221:12;;6355:1;6351;:5;6347:53;;;6380:1;6383:5;6372:17;;;;;;;6347:53;6604:5;;;6634:18;6604:5;6646:2;6650:1;6634:11;:18::i;:::-;6629:23;;193:4:122;6666:2:126;:9;6662:261;;6764:20;6771:12;193:4:122;6781:1:126;6771:9;:12::i;6764:20::-;6759:25;;6662:261;;;6890:22;6897:14;193:4:122;6909:1:126;6897:11;:14::i;6890:22::-;6885:27;;6662:261;7005:12;:2;7014;7005:8;:12::i;:::-;7000:17;;7142:2;7137;:7;7133:55;;;7168:1;7171:5;7160:17;;;;;;;;7133:55;7310:7;;;;;7319:4;;-1:-1:-1;5576:1765:126;-1:-1:-1;;;;;;;5576:1765:126:o;13859:1409::-;14022:7;14031:4;14543:9;14555:22;14561:2;14565:1;14568;14571;14574:2;14555:5;:22::i;:::-;14543:34;-1:-1:-1;14587:17:126;14607:28;193:4:122;14617:11:126;:1;14625:2;14617:7;:11::i;:::-;:17;;;;:::i;14607:28::-;14587:48;;193:4:122;14649:9:126;:16;14645:300;;14765:29;14779:14;193:4:122;14791:1:126;14779:11;:14::i;14765:29::-;14753:41;;14645:300;;;14907:27;14921:12;193:4:122;14931:1:126;14921:9;:12::i;14907:27::-;14895:39;;14645:300;14966:21;:9;14984:2;14966:17;:21::i;:::-;14954:33;;15143:2;15131:9;:14;15127:62;;;15169:1;15172:5;15161:17;;;;;;;;15127:62;15230:14;;;;;15246:4;;-1:-1:-1;13859:1409:126;-1:-1:-1;;;;;;13859:1409:126:o;20158:343::-;20297:7;20486:8;:1;20492;20486:5;:8::i;:::-;20448:35;20459:19;20476:1;20459:12;:2;20468;20459:8;:12::i;:19::-;20448:1;;20480:2;20448:10;:35::i;:::-;:46;;;;:::i;2705:151:167:-;2780:12;2811:38;2833:6;2841:4;2847:1;2811:21;:38::i;21014:352:126:-;21155:7;21351:8;:1;21357;21351:5;:8::i;:::-;21309:39;21322:21;21341:1;21322:14;:2;21333;21322:10;:14::i;:21::-;21309:1;;21345:2;21309:12;:39::i;3180:392:167:-;3279:12;3331:5;3307:21;:29;3303:108;;;3359:41;;-1:-1:-1;;;3359:41:167;;3394:4;3359:41;;;8608:51:234;8581:18;;3359:41:167;8462:203:234;3303:108:167;3421:12;3435:23;3462:6;-1:-1:-1;;;;;3462:11:167;3481:5;3488:4;3462:31;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3420:73;;;;3510:55;3537:6;3545:7;3554:10;4769:12;4798:7;4793:408;;4821:19;4829:10;4821:7;:19::i;:::-;4793:408;;;5045:17;;:22;:49;;;;-1:-1:-1;;;;;;5071:18:167;;;:23;5045:49;5041:119;;;5121:24;;-1:-1:-1;;;5121:24:167;;-1:-1:-1;;;;;8626:32:234;;5121:24:167;;;8608:51:234;8581:18;;5121:24:167;8462:203:234;5041:119:167;-1:-1:-1;5180:10:167;5173:17;;5743:516;5874:17;;:21;5870:383;;6102:10;6096:17;6158:15;6145:10;6141:2;6137:19;6130:44;5870:383;6225:17;;-1:-1:-1;;;6225:17:167;;;;;;;;;;;-1:-1:-1;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;14:592:234:-;128:6;136;144;152;205:3;193:9;184:7;180:23;176:33;173:53;;;222:1;219;212:12;173:53;258:9;245:23;235:33;;315:2;304:9;300:18;287:32;277:42;;366:2;355:9;351:18;338:32;328:42;;421:2;410:9;406:18;393:32;448:18;440:6;437:30;434:50;;;480:1;477;470:12;434:50;503:22;;559:2;541:16;;;537:25;534:45;;;575:1;572;565:12;534:45;14:592;;;;-1:-1:-1;14:592:234;;-1:-1:-1;;14:592:234:o;864:180::-;923:6;976:2;964:9;955:7;951:23;947:32;944:52;;;992:1;989;982:12;944:52;-1:-1:-1;1015:23:234;;864:180;-1:-1:-1;864:180:234:o;1049:127::-;1110:10;1105:3;1101:20;1098:1;1091:31;1141:4;1138:1;1131:15;1165:4;1162:1;1155:15;1181:125;1246:9;;;1267:10;;;1264:36;;;1280:18;;:::i;1311:286::-;1370:6;1423:2;1411:9;1402:7;1398:23;1394:32;1391:52;;;1439:1;1436;1429:12;1391:52;1465:23;;-1:-1:-1;;;;;1517:31:234;;1507:42;;1497:70;;1563:1;1560;1553:12;1602:118;1688:5;1681:13;1674:21;1667:5;1664:32;1654:60;;1710:1;1707;1700:12;1725:241;1781:6;1834:2;1822:9;1813:7;1809:23;1805:32;1802:52;;;1850:1;1847;1840:12;1802:52;1889:9;1876:23;1908:28;1930:5;1908:28;:::i;1971:128::-;2038:9;;;2059:11;;;2056:37;;;2073:18;;:::i;2654:127::-;2715:10;2710:3;2706:20;2703:1;2696:31;2746:4;2743:1;2736:15;2770:4;2767:1;2760:15;2786:112;2818:1;2844;2834:35;;2849:18;;:::i;:::-;-1:-1:-1;2883:9:234;;2786:112::o;2903:193::-;-1:-1:-1;;;;;3021:10:234;;;3033;;;3017:27;;3056:11;;;3053:37;;;3070:18;;:::i;3101:197::-;-1:-1:-1;;;;;3223:10:234;;;3235;;;3219:27;;3258:11;;;3255:37;;;3272:18;;:::i;3303:200::-;3369:9;;;3342:4;3397:9;;3425:10;;3437:12;;;3421:29;3460:12;;;3452:21;;3418:56;3415:82;;;3477:18;;:::i;3976:521::-;4053:4;4059:6;4119:11;4106:25;4213:2;4209:7;4198:8;4182:14;4178:29;4174:43;4154:18;4150:68;4140:96;;4232:1;4229;4222:12;4140:96;4259:33;;4311:20;;;-1:-1:-1;4354:18:234;4343:30;;4340:50;;;4386:1;4383;4376:12;4340:50;4419:4;4407:17;;-1:-1:-1;4450:14:234;4446:27;;;4436:38;;4433:58;;;4487:1;4484;4477:12;4712:168;4785:9;;;4816;;4833:15;;;4827:22;;4813:37;4803:71;;4854:18;;:::i;5067:184::-;5137:6;5190:2;5178:9;5169:7;5165:23;5161:32;5158:52;;;5206:1;5203;5196:12;5158:52;-1:-1:-1;5229:16:234;;5067:184;-1:-1:-1;5067:184:234:o;5256:200::-;-1:-1:-1;;;;;5392:10:234;;;5380;;;5376:27;;5415:12;;;5412:38;;;5430:18;;:::i;5461:245::-;5559:2;5529:17;;;5548;;;;5525:41;-1:-1:-1;;;;;5581:44:234;;-1:-1:-1;;;;;;5627:49:234;;5578:99;5575:125;;;5680:18;;:::i;5711:213::-;5746:3;5794:5;5790:2;5779:21;-1:-1:-1;;;;;5824:39:234;5815:7;5812:52;5809:78;;5867:18;;:::i;:::-;5907:1;5903:15;;5711:213;-1:-1:-1;;5711:213:234:o;6061:136::-;6096:3;-1:-1:-1;;;6117:22:234;;6114:48;;6142:18;;:::i;:::-;-1:-1:-1;6182:1:234;6178:13;;6061:136::o;6202:361::-;6367:2;6352:18;;6400:1;6389:13;;6379:144;;6445:10;6440:3;6436:20;6433:1;6426:31;6480:4;6477:1;6470:15;6508:4;6505:1;6498:15;6379:144;6532:25;;;6202:361;:::o;6847:216::-;6911:9;;;6939:11;;;6886:3;6969:9;;6997:10;;6993:19;;7022:10;;7014:19;;6990:44;6987:70;;;7037:18;;:::i;:::-;6987:70;;6847:216;;;;:::o;7068:193::-;7107:1;7133;7123:35;;7138:18;;:::i;:::-;-1:-1:-1;;;7174:18:234;;-1:-1:-1;;7194:13:234;;7170:38;7167:64;;;7211:18;;:::i;:::-;-1:-1:-1;7245:10:234;;7068:193::o;8212:245::-;8279:6;8332:2;8320:9;8311:7;8307:23;8303:32;8300:52;;;8348:1;8345;8338:12;8300:52;8380:9;8374:16;8399:28;8421:5;8399:28;:::i;8670:412::-;8799:3;8837:6;8831:13;8862:1;8872:129;8886:6;8883:1;8880:13;8872:129;;;8984:4;8968:14;;;8964:25;;8958:32;8945:11;;;8938:53;8901:12;8872:129;;;-1:-1:-1;9056:1:234;9020:16;;9045:13;;;-1:-1:-1;9020:16:234;8670:412;-1:-1:-1;8670:412:234:o";
        readonly linkReferences: {};
        readonly immutableReferences: {
            readonly "17691": readonly [{
                readonly start: 6945;
                readonly length: 32;
            }, {
                readonly start: 7042;
                readonly length: 32;
            }];
            readonly "17695": readonly [{
                readonly start: 3788;
                readonly length: 32;
            }, {
                readonly start: 6990;
                readonly length: 32;
            }, {
                readonly start: 7112;
                readonly length: 32;
            }, {
                readonly start: 7258;
                readonly length: 32;
            }];
            readonly "17698": readonly [{
                readonly start: 827;
                readonly length: 32;
            }, {
                readonly start: 1096;
                readonly length: 32;
            }, {
                readonly start: 1237;
                readonly length: 32;
            }, {
                readonly start: 1338;
                readonly length: 32;
            }];
            readonly "17701": readonly [{
                readonly start: 377;
                readonly length: 32;
            }, {
                readonly start: 1442;
                readonly length: 32;
            }, {
                readonly start: 11468;
                readonly length: 32;
            }];
            readonly "17704": readonly [{
                readonly start: 2341;
                readonly length: 32;
            }, {
                readonly start: 2510;
                readonly length: 32;
            }, {
                readonly start: 8986;
                readonly length: 32;
            }];
            readonly "17707": readonly [{
                readonly start: 6616;
                readonly length: 32;
            }];
            readonly "17710": readonly [{
                readonly start: 1637;
                readonly length: 32;
            }, {
                readonly start: 2631;
                readonly length: 32;
            }, {
                readonly start: 4388;
                readonly length: 32;
            }, {
                readonly start: 6745;
                readonly length: 32;
            }];
            readonly "17713": readonly [{
                readonly start: 4432;
                readonly length: 32;
            }, {
                readonly start: 6668;
                readonly length: 32;
            }, {
                readonly start: 6789;
                readonly length: 32;
            }];
            readonly "17716": readonly [{
                readonly start: 4138;
                readonly length: 32;
            }];
            readonly "17719": readonly [{
                readonly start: 2375;
                readonly length: 32;
            }, {
                readonly start: 2477;
                readonly length: 32;
            }, {
                readonly start: 8872;
                readonly length: 32;
            }];
            readonly "17722": readonly [{
                readonly start: 2996;
                readonly length: 32;
            }, {
                readonly start: 5127;
                readonly length: 32;
            }, {
                readonly start: 5228;
                readonly length: 32;
            }, {
                readonly start: 7612;
                readonly length: 32;
            }, {
                readonly start: 7905;
                readonly length: 32;
            }, {
                readonly start: 7965;
                readonly length: 32;
            }, {
                readonly start: 8575;
                readonly length: 32;
            }, {
                readonly start: 8910;
                readonly length: 32;
            }];
            readonly "17725": readonly [{
                readonly start: 236;
                readonly length: 32;
            }, {
                readonly start: 8948;
                readonly length: 32;
            }];
        };
    };
    readonly methodIdentifiers: {
        readonly "checkpoint(uint256)": "ed64bab2";
        readonly "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070";
    };
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"contract IERC20\",\"name\":\"vaultSharesToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"sweepCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolConfig\",\"name\":\"_config\",\"type\":\"tuple\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"name\":\"AddressEmptyCode\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"AddressInsufficientBalance\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"DistributeExcessIdleFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ExpInvalidExponent\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FailedInnerCall\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"enum IHyperdrive.InsufficientLiquidityReason\",\"name\":\"reason\",\"type\":\"uint8\"}],\"name\":\"InsufficientLiquidity\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidCheckpointTime\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTimestamp\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"LnInvalidInput\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MinimumSharePrice\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MinimumTransactionAmount\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NotPayable\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"OutputLimit\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"PoolIsPaused\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"RestrictedZeroAddress\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"}],\"name\":\"SafeERC20FailedOperation\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"TransferFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToInt128\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToInt256\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToUint112\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToUint128\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"basePayment\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fees\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"checkpointVaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newFeeCollector\",\"type\":\"address\"}],\"name\":\"FeeCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseProceeds\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"}],\"name\":\"PauseStatusUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"name\":\"Sweep\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newSweepCollector\",\"type\":\"address\"}],\"name\":\"SweepCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_checkpointTime\",\"type\":\"uint256\"}],\"name\":\"checkpoint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_bondAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_maxDeposit\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minVaultSharePrice\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"openShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"errors\":{\"AddressEmptyCode(address)\":[{\"details\":\"There's no code at `target` (it is not a contract).\"}],\"AddressInsufficientBalance(address)\":[{\"details\":\"The ETH balance of the account is not enough to perform the operation.\"}],\"FailedInnerCall()\":[{\"details\":\"A call to an address target failed. The target may have reverted.\"}],\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}],\"SafeERC20FailedOperation(address)\":[{\"details\":\"An operation with an ERC20 token failed.\"}]},\"kind\":\"dev\",\"methods\":{\"checkpoint(uint256)\":{\"params\":{\"_checkpointTime\":\"The time of the checkpoint to create.\"}},\"constructor\":{\"params\":{\"_config\":\"The configuration of the Hyperdrive pool.\"}},\"openShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_bondAmount\":\"The amount of bonds to short.\",\"_maxDeposit\":\"The most the user expects to deposit for this trade.        The units of this quantity are either base or vault shares,        depending on the value of `_options.asBase`.\",\"_minVaultSharePrice\":\"The minimum vault share price at which to        open the short. This allows traders to protect themselves from        opening a short in a checkpoint where negative interest has        accrued.\",\"_options\":\"The options that configure how the trade is settled.\"},\"returns\":{\"_0\":\"The maturity time of the short.\",\"_1\":\"The amount the user deposited for this trade. The units of this         quantity are either base or vault shares, depending on the value         of `_options.asBase`.\"}}},\"title\":\"ERC4626Target4\",\"version\":1},\"userdoc\":{\"errors\":{\"DistributeExcessIdleFailed()\":[{\"notice\":\"Thrown when the distribute excess idle calculation fails due         to the starting present value calculation failing.\"}],\"ExpInvalidExponent()\":[{\"notice\":\"Thrown when the exponent to `FixedPointMath.exp` would cause the         the result to be larger than the representable scale.\"}],\"InsufficientLiquidity(uint8)\":[{\"notice\":\"Thrown when the pool doesn't have sufficient liquidity to         complete the trade.\"}],\"InvalidCheckpointTime()\":[{\"notice\":\"Thrown when the checkpoint time provided to `checkpoint` is         larger than the current checkpoint or isn't divisible by the         checkpoint duration.\"}],\"InvalidTimestamp()\":[{\"notice\":\"Thrown when the timestamp used to construct an asset ID exceeds         the uint248 scale.\"}],\"LnInvalidInput()\":[{\"notice\":\"Thrown when the input to `FixedPointMath.ln` is less than or         equal to zero.\"}],\"MinimumSharePrice()\":[{\"notice\":\"Thrown when vault share price is smaller than the minimum share         price. This protects traders from unknowingly opening a long or         short after negative interest has accrued.\"}],\"MinimumTransactionAmount()\":[{\"notice\":\"Thrown when the input or output amount of a trade is smaller         than the minimum transaction amount. This protects traders and         LPs from losses of precision that can occur at small scales.\"}],\"NotPayable()\":[{\"notice\":\"Thrown when ether is sent to an instance that doesn't accept         ether as a deposit asset.\"}],\"OutputLimit()\":[{\"notice\":\"Thrown when a slippage guard is violated.\"}],\"PoolIsPaused()\":[{\"notice\":\"Thrown when the pool is paused and a trader tries to add         liquidity, open a long, or open a short. Traders can still         close their existing positions while the pool is paused.\"}],\"RestrictedZeroAddress()\":[{\"notice\":\"Thrown when the owner passed to permit is the zero address. This         prevents users from spending the funds in address zero by         sending an invalid signature to ecrecover.\"}],\"TransferFailed()\":[{\"notice\":\"Thrown when an ether transfer fails.\"}],\"UnsafeCastToInt128()\":[{\"notice\":\"Thrown when casting a value to a int128 that is outside of the         int128 scale.\"}],\"UnsafeCastToInt256()\":[{\"notice\":\"Thrown when casting a value to a int256 that is outside of the         int256 scale.\"}],\"UnsafeCastToUint112()\":[{\"notice\":\"Thrown when casting a value to a uint112 that is outside of the         uint128 scale.\"}],\"UnsafeCastToUint128()\":[{\"notice\":\"Thrown when casting a value to a uint128 that is outside of the         uint128 scale.\"}]},\"events\":{\"AddLiquidity(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when an LP adds liquidity to the Hyperdrive pool.\"},\"Approval(address,address,uint256)\":{\"notice\":\"Emitted when an account changes the allowance for another         account.\"},\"ApprovalForAll(address,address,bool)\":{\"notice\":\"Emitted when an account changes the approval for all of its         tokens.\"},\"CloseLong(address,address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is closed.\"},\"CloseShort(address,address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is closed.\"},\"CollectGovernanceFee(address,uint256)\":{\"notice\":\"Emitted when governance fees are collected.\"},\"CreateCheckpoint(uint256,uint256,uint256,uint256,uint256,uint256)\":{\"notice\":\"Emitted when a checkpoint is created.\"},\"FeeCollectorUpdated(address)\":{\"notice\":\"Emitted when the fee collector address is updated.\"},\"GovernanceUpdated(address)\":{\"notice\":\"Emitted when the governance address is updated.\"},\"Initialize(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when the Hyperdrive pool is initialized.\"},\"OpenLong(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is opened.\"},\"OpenShort(address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is opened.\"},\"PauseStatusUpdated(bool)\":{\"notice\":\"Emitted when the pause status is updated.\"},\"PauserUpdated(address,bool)\":{\"notice\":\"Emitted when a pauser is updated.\"},\"RedeemWithdrawalShares(address,address,uint256,uint256,uint256,bool)\":{\"notice\":\"Emitted when an LP redeems withdrawal shares.\"},\"RemoveLiquidity(address,address,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when an LP removes liquidity from the Hyperdrive pool.\"},\"Sweep(address,address)\":{\"notice\":\"Emitted when tokens are swept.\"},\"SweepCollectorUpdated(address)\":{\"notice\":\"Emitted when the sweep collector address is updated.\"},\"TransferSingle(address,address,address,uint256,uint256)\":{\"notice\":\"Emitted when tokens are transferred from one account to another.\"}},\"kind\":\"user\",\"methods\":{\"checkpoint(uint256)\":{\"notice\":\"Allows anyone to mint a new checkpoint.\"},\"constructor\":{\"notice\":\"Initializes the target4 contract.\"},\"openShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Opens a short position.\"}},\"notice\":\"ERC4626Hyperdrive's target4 logic contract. This contract contains         several stateful functions that couldn't fit into the Hyperdrive         contract.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/instances/erc4626/ERC4626Target4.sol\":\"ERC4626Target4\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/external/HyperdriveTarget4.sol\":{\"keccak256\":\"0xfc2c1dfa778f4be903a0a078c7cfb29fdf2caded6b72cf222f5da4b39e512bfa\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8bf1a17cc51013e821f44c426b8911db6f51ea96c0883f00ad98ab70993c2886\",\"dweb:/ipfs/QmdW2jFRm2vgoWQc1thZCPSASezv2dKFjmxayyV715HhFN\"]},\"contracts/src/instances/erc4626/ERC4626Base.sol\":{\"keccak256\":\"0xc6f9ab1fa455f9d3199753c8b089248c93477a17bd1cc275b83b8f69c6577d55\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://98dc6cf2efacfd99df9a3dce9ae9ff236db364d907915fbb540b28f12ac45982\",\"dweb:/ipfs/QmRn7R2y6wLgkQg9oqL6qswjAsa6rKqJ1v69ghVnsWToaa\"]},\"contracts/src/instances/erc4626/ERC4626Target4.sol\":{\"keccak256\":\"0x37ec8d1eba1a13da0f703d796e328302bb2a15e541a53ebeb349e45ec1dc02d5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://9165b63be3da67cba46de81fa21304143d082ecb321eb13fe71c855e16a572fe\",\"dweb:/ipfs/QmVvXpNh9tcNLboi4Zs8w6cqVhYNAFja1nT9v3exaaedpC\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IERC4626.sol\":{\"keccak256\":\"0x891ede2965eda391b0e78cdba7490a5ddadcc43f039c22c183529300dada0741\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ec659582084892c1a857676bf39fa5e26532557a8210978408857315e9195366\",\"dweb:/ipfs/QmYYXo28FtBLEBQxK9YeFhyB2zdrpbrNQXfrzN4fmBuHuB\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xc293b4229674624983294b673d6fefce53ed8f6f3d9c6bbcb34da25f42ef2c71\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://084f43e7c42615faabfb6ae9100a8cea6bf9846eb1c433dc08fe634c59cadcaf\",\"dweb:/ipfs/QmXW3GgcbQQg5xnfAC6RT2KBL9ii8s1jwbDtZywWXFydpm\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x68adcd293ff25711add1698b6024faa45beec01eb044bd0103d3020aa96d856e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0e0f5e35a7d2c656e249394d25896e5adfb9af3e210c01b9ef5fa81d25a45e24\",\"dweb:/ipfs/QmbLASezHPWHcbodqSfw3Qh9NzqekqVPM8FhCXKGTCXL1h\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x567b78388802482303910be022299e39a0ef95b4a9a30d6acc4bea0d467fa784\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://338a9f960049c37d13b6e23e5bc2c9e6005366aa99c95168f57f170ef2a4bcfa\",\"dweb:/ipfs/QmaeAwacrvMgJGqrKDSXZkYNYRJ5FvirYFpY3xjbCbJTF9\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86\",\"dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/internal/HyperdriveAdmin.sol\":{\"keccak256\":\"0x93481611cf60c586320edf6a95162e96e9d9a3d691360e4b304cfff65af4ee95\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5294c86957cd2e19951fb4e836cae62dca2353c73cbcf4a462e10969b0d1f6ad\",\"dweb:/ipfs/QmT6FfvF9XwsaZhA3wHgBgyQY4mXmnq3uffEqd8V77GC9b\"]},\"contracts/src/internal/HyperdriveBase.sol\":{\"keccak256\":\"0x7feb8df22e6f91b1ee70f50f5ca16a7819601bcb88fc5a5fa9cf16c708cc52bb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://60ff7ff4faa45551099b025d03f2438477b5fd1f64f82b78c6ed26cbdafc64f6\",\"dweb:/ipfs/QmWtbftziGdSKAEvpRoaWRnTxMNwgUVs2nDN6nFugX1WYN\"]},\"contracts/src/internal/HyperdriveCheckpoint.sol\":{\"keccak256\":\"0x8c1f59668b8f9a7b07b70ec1d7180131a6e610d9f8ff3c99583dac3b0f0e2588\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b2ce3226b9f22f643b58378a5cc6effda1a4f278d0d4262c31c6e7b3a3f48557\",\"dweb:/ipfs/QmdmBETY7MUfozxTWuHeyjpDjKtRFYWierdSajHyeNepHv\"]},\"contracts/src/internal/HyperdriveLP.sol\":{\"keccak256\":\"0x3f1ff106b34d3161e4be0085385bffe4b842cff41687c763de7df1cb4f466976\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c26ba880f9501d0d1366d9f95087b6ba4056c7983d8336aa23d51ae2778e097c\",\"dweb:/ipfs/Qme7virH8wbgnuHfBGsDZjDvPu84msxD6U1BUXPfkpYaER\"]},\"contracts/src/internal/HyperdriveLong.sol\":{\"keccak256\":\"0xe791adb5c58a73ff2c978fcc79153f9042702e2c4fc5d71f60534323d5ba4832\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7ec4adf40e5f90574c7484ddeeed41cbe1f60b29847b18b169aa3130b8882aa7\",\"dweb:/ipfs/QmeY9y922jhcLzGw9d4VUNNoDkUeFhTJ8ZVThrvqzcGGjm\"]},\"contracts/src/internal/HyperdriveMultiToken.sol\":{\"keccak256\":\"0x21a9aafb8e23a22c77111e13538fa8f709446e4f3a64ef84b2eebc2aa9d04373\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://41517912353540de5b430587ca8220f9d34d4432d3c723951d5fb618d5907b5d\",\"dweb:/ipfs/QmU3cTCrAq94digVS97s5af1Pu86uGBpmpus6w7828fUbG\"]},\"contracts/src/internal/HyperdriveShort.sol\":{\"keccak256\":\"0xc42b5a9ee5eee3cb9177b136eb9f4b81a4b51d9468f8faa97309934b6b371bc5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b9291237fcdbb8ff97517acd19499cfa4afc6d670a89fd5cc0309a201a7b1006\",\"dweb:/ipfs/QmfQmUwvGhJgPFyNaHvur8AViePBzvSBNAdaZJBwMkY5Je\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xf965f50c6e452e4011a476c67e6cbea77e558570efb7532dbf1bd586e8705ab4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e81b4399e0e27f0a8d47dd7a79f7711d1bd4685e6b98d4ba778e32d1af7de50e\",\"dweb:/ipfs/QmQyCBv76GvWPxTjdR6yD7DTuvFAdxTkRp2A9wUgqP778N\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0x3031a1ec376be333eebe0062c474a22d7f970cb02de62ab6823c6918c0a7f83b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6c80cc2fd8b7908b6420ebb21cb99266c93e01d6cdd9d1a41f8847493849b131\",\"dweb:/ipfs/QmeMehWbF2RwQaf6c6yaj5KHjXboDRpzBCtvFnLW4BXBbc\"]},\"contracts/src/libraries/Errors.sol\":{\"keccak256\":\"0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88\",\"dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x631f6529908f62f71775f8c6120afdca3a836fb24fa9fa4701cad54f4a9da076\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2baf6ad8917a3fbb6d040334451f6b4f6936b00518c4cd308b9c6fa11569b2bd\",\"dweb:/ipfs/QmXD16vk6MRxmPRqy8ZXSpRA5XxhSf1pnsQH32ARDJTk8L\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0xcf305dde8aa320d1e1b767734ce8edce456af537525d40e30d5345f09f6e34ab\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://056c9a563f1a9e0133e17463497ad19be517d35b770170122edea50ca9fbe002\",\"dweb:/ipfs/QmS6dkVRHzdbv7etumcCtNtm9GuXDCjqZxxhtYfP6keAAY\"]},\"contracts/src/libraries/LPMath.sol\":{\"keccak256\":\"0x52cd64379d1fbb0acdd5152e84ff44ca2b2496e4bb43c0e02b61c28b97141bed\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b1d9aadc1b53622adee86e41371c3a4efde7b53cdd5a828b2b733f0e3392b26a\",\"dweb:/ipfs/QmXkiVwpe7UxgeC1nYPk2x4wD9NVXuyFsiViyuvrgdtKpX\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8\",\"dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x92618059cb1370412177754f6d63dc91028226760b4e2c77d13a5686421f5fd1\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4c7a27c21f1c57d9bb2857759ce41dd7e2afbc738cf47d3ae8c98639820ec8c9\",\"dweb:/ipfs/QmRF2Pz2Ezm5W84o4Fv8tqgrn1umy16i8Pis9H5CSsSSLh\"]},\"lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol\":{\"keccak256\":\"0x60c65f701957fdd6faea1acb0bb45825791d473693ed9ecb34726fdfaa849dd7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ea290300e0efc4d901244949dc4d877fd46e6c5e43dc2b26620e8efab3ab803f\",\"dweb:/ipfs/QmcLLJppxKeJWqHxE2CUkcfhuRTgHSn8J4kijcLa5MYhSt\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0xc3e1fa9d1987f8d349dfb4d6fe93bf2ca014b52ba335cfac30bfe71e357e6f80\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c5703ccdeb7b1d685e375ed719117e9edf2ab4bc544f24f23b0d50ec82257229\",\"dweb:/ipfs/QmTdwkbQq7owpCiyuzE7eh5LrD2ddrBCZ5WHVsWPi1RrTS\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c\",\"dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850\",\"dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x6008dabfe393240d73d7dd7688033f72740d570aa422254d29a7dce8568f3aff\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f5196ec75139918c6c7bb4251b36395e668f1fa6d206beba7e7520e74913940d\",\"dweb:/ipfs/QmSyqjksXxmm2mCG6qRd1yuwLykypkSVBbnBnGqJRcuJMi\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x37bb49513c49c87c4642a891b13b63571bc87013dde806617aa1efb54605f386\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b3036b3a83b7c48f96641f2a9002b9f2dcb6a5958dd670894ada21ae8229b3d0\",\"dweb:/ipfs/QmUNfSBdoVtjhETaUJCYcaC7pTMgbhht926tJ2uXJbiVd3\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245\",\"dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y\"]},\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":{\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12\",\"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF\"]},\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02\",\"dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd\"]}},\"version\":1}";
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
                readonly name: "DistributeExcessIdleFailed";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "ExpInvalidExponent";
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
                readonly name: "InvalidCheckpointTime";
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
                    readonly name: "_checkpointTime";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "checkpoint";
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
                    readonly "checkpoint(uint256)": {
                        readonly params: {
                            readonly _checkpointTime: "The time of the checkpoint to create.";
                        };
                    };
                    readonly constructor: {
                        readonly params: {
                            readonly _config: "The configuration of the Hyperdrive pool.";
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
                    readonly "checkpoint(uint256)": {
                        readonly notice: "Allows anyone to mint a new checkpoint.";
                    };
                    readonly constructor: {
                        readonly notice: "Initializes the target4 contract.";
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
                readonly "contracts/src/instances/erc4626/ERC4626Target4.sol": "ERC4626Target4";
            };
            readonly libraries: {};
        };
        readonly sources: {
            readonly "contracts/src/external/HyperdriveTarget4.sol": {
                readonly keccak256: "0xfc2c1dfa778f4be903a0a078c7cfb29fdf2caded6b72cf222f5da4b39e512bfa";
                readonly urls: readonly ["bzz-raw://8bf1a17cc51013e821f44c426b8911db6f51ea96c0883f00ad98ab70993c2886", "dweb:/ipfs/QmdW2jFRm2vgoWQc1thZCPSASezv2dKFjmxayyV715HhFN"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/instances/erc4626/ERC4626Base.sol": {
                readonly keccak256: "0xc6f9ab1fa455f9d3199753c8b089248c93477a17bd1cc275b83b8f69c6577d55";
                readonly urls: readonly ["bzz-raw://98dc6cf2efacfd99df9a3dce9ae9ff236db364d907915fbb540b28f12ac45982", "dweb:/ipfs/QmRn7R2y6wLgkQg9oqL6qswjAsa6rKqJ1v69ghVnsWToaa"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/instances/erc4626/ERC4626Target4.sol": {
                readonly keccak256: "0x37ec8d1eba1a13da0f703d796e328302bb2a15e541a53ebeb349e45ec1dc02d5";
                readonly urls: readonly ["bzz-raw://9165b63be3da67cba46de81fa21304143d082ecb321eb13fe71c855e16a572fe", "dweb:/ipfs/QmVvXpNh9tcNLboi4Zs8w6cqVhYNAFja1nT9v3exaaedpC"];
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
                readonly keccak256: "0x93481611cf60c586320edf6a95162e96e9d9a3d691360e4b304cfff65af4ee95";
                readonly urls: readonly ["bzz-raw://5294c86957cd2e19951fb4e836cae62dca2353c73cbcf4a462e10969b0d1f6ad", "dweb:/ipfs/QmT6FfvF9XwsaZhA3wHgBgyQY4mXmnq3uffEqd8V77GC9b"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/internal/HyperdriveBase.sol": {
                readonly keccak256: "0x7feb8df22e6f91b1ee70f50f5ca16a7819601bcb88fc5a5fa9cf16c708cc52bb";
                readonly urls: readonly ["bzz-raw://60ff7ff4faa45551099b025d03f2438477b5fd1f64f82b78c6ed26cbdafc64f6", "dweb:/ipfs/QmWtbftziGdSKAEvpRoaWRnTxMNwgUVs2nDN6nFugX1WYN"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/internal/HyperdriveCheckpoint.sol": {
                readonly keccak256: "0x8c1f59668b8f9a7b07b70ec1d7180131a6e610d9f8ff3c99583dac3b0f0e2588";
                readonly urls: readonly ["bzz-raw://b2ce3226b9f22f643b58378a5cc6effda1a4f278d0d4262c31c6e7b3a3f48557", "dweb:/ipfs/QmdmBETY7MUfozxTWuHeyjpDjKtRFYWierdSajHyeNepHv"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/internal/HyperdriveLP.sol": {
                readonly keccak256: "0x3f1ff106b34d3161e4be0085385bffe4b842cff41687c763de7df1cb4f466976";
                readonly urls: readonly ["bzz-raw://c26ba880f9501d0d1366d9f95087b6ba4056c7983d8336aa23d51ae2778e097c", "dweb:/ipfs/Qme7virH8wbgnuHfBGsDZjDvPu84msxD6U1BUXPfkpYaER"];
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
                readonly keccak256: "0x52cd64379d1fbb0acdd5152e84ff44ca2b2496e4bb43c0e02b61c28b97141bed";
                readonly urls: readonly ["bzz-raw://b1d9aadc1b53622adee86e41371c3a4efde7b53cdd5a828b2b733f0e3392b26a", "dweb:/ipfs/QmXkiVwpe7UxgeC1nYPk2x4wD9NVXuyFsiViyuvrgdtKpX"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/SafeCast.sol": {
                readonly keccak256: "0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148";
                readonly urls: readonly ["bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8", "dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/YieldSpaceMath.sol": {
                readonly keccak256: "0x92618059cb1370412177754f6d63dc91028226760b4e2c77d13a5686421f5fd1";
                readonly urls: readonly ["bzz-raw://4c7a27c21f1c57d9bb2857759ce41dd7e2afbc738cf47d3ae8c98639820ec8c9", "dweb:/ipfs/QmRF2Pz2Ezm5W84o4Fv8tqgrn1umy16i8Pis9H5CSsSSLh"];
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
        readonly absolutePath: "contracts/src/instances/erc4626/ERC4626Target4.sol";
        readonly id: 8011;
        readonly exportedSymbols: {
            readonly ERC4626Base: readonly [7819];
            readonly ERC4626Target4: readonly [8010];
            readonly HyperdriveTarget4: readonly [5611];
            readonly IHyperdrive: readonly [10506];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:934:50";
        readonly nodes: readonly [{
            readonly id: 7987;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:23:50";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 7989;
            readonly nodeType: "ImportDirective";
            readonly src: "64:73:50";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/external/HyperdriveTarget4.sol";
            readonly file: "../../external/HyperdriveTarget4.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 8011;
            readonly sourceUnit: 5612;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 7988;
                    readonly name: "HyperdriveTarget4";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 5611;
                    readonly src: "73:17:50";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 7991;
            readonly nodeType: "ImportDirective";
            readonly src: "138:63:50";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IHyperdrive.sol";
            readonly file: "../../interfaces/IHyperdrive.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 8011;
            readonly sourceUnit: 10507;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 7990;
                    readonly name: "IHyperdrive";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 10506;
                    readonly src: "147:11:50";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 7993;
            readonly nodeType: "ImportDirective";
            readonly src: "202:48:50";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/instances/erc4626/ERC4626Base.sol";
            readonly file: "./ERC4626Base.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 8011;
            readonly sourceUnit: 7820;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 7992;
                    readonly name: "ERC4626Base";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 7819;
                    readonly src: "211:11:50";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 8010;
            readonly nodeType: "ContractDefinition";
            readonly src: "697:275:50";
            readonly nodes: readonly [{
                readonly id: 8009;
                readonly nodeType: "FunctionDefinition";
                readonly src: "876:94:50";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 8008;
                    readonly nodeType: "Block";
                    readonly src: "968:2:50";
                    readonly nodes: readonly [];
                    readonly statements: readonly [];
                };
                readonly documentation: {
                    readonly id: 7999;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "761:110:50";
                    readonly text: "@notice Initializes the target4 contract.\n @param _config The configuration of the Hyperdrive pool.";
                };
                readonly implemented: true;
                readonly kind: "constructor";
                readonly modifiers: readonly [{
                    readonly arguments: readonly [{
                        readonly id: 8005;
                        readonly name: "_config";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 8002;
                        readonly src: "959:7:50";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10300_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig memory";
                        };
                    }];
                    readonly id: 8006;
                    readonly kind: "baseConstructorSpecifier";
                    readonly modifierName: {
                        readonly id: 8004;
                        readonly name: "HyperdriveTarget4";
                        readonly nameLocations: readonly ["941:17:50"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 5611;
                        readonly src: "941:17:50";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "941:26:50";
                }];
                readonly name: "";
                readonly nameLocation: "-1:-1:-1";
                readonly parameters: {
                    readonly id: 8003;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 8002;
                        readonly mutability: "mutable";
                        readonly name: "_config";
                        readonly nameLocation: "927:7:50";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 8009;
                        readonly src: "897:37:50";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10300_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig";
                        };
                        readonly typeName: {
                            readonly id: 8001;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 8000;
                                readonly name: "IHyperdrive.PoolConfig";
                                readonly nameLocations: readonly ["897:11:50", "909:10:50"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10300;
                                readonly src: "897:22:50";
                            };
                            readonly referencedDeclaration: 10300;
                            readonly src: "897:22:50";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolConfig_$10300_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "887:53:50";
                };
                readonly returnParameters: {
                    readonly id: 8007;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "968:0:50";
                };
                readonly scope: 8010;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "public";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 7995;
                    readonly name: "HyperdriveTarget4";
                    readonly nameLocations: readonly ["724:17:50"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 5611;
                    readonly src: "724:17:50";
                };
                readonly id: 7996;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "724:17:50";
            }, {
                readonly baseName: {
                    readonly id: 7997;
                    readonly name: "ERC4626Base";
                    readonly nameLocations: readonly ["743:11:50"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 7819;
                    readonly src: "743:11:50";
                };
                readonly id: 7998;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "743:11:50";
            }];
            readonly canonicalName: "ERC4626Target4";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly documentation: {
                readonly id: 7994;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "252:445:50";
                readonly text: "@author DELV\n @title ERC4626Target4\n @notice ERC4626Hyperdrive's target4 logic contract. This contract contains\n         several stateful functions that couldn't fit into the Hyperdrive\n         contract.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance.";
            };
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [8010, 7819, 5611, 14324, 17668, 16198, 15264, 16682, 12659, 13835, 17893, 71565, 11037, 11609];
            readonly name: "ERC4626Target4";
            readonly nameLocation: "706:14:50";
            readonly scope: 8011;
            readonly usedErrors: readonly [10371, 10383, 10389, 10410, 10413, 10416, 10419, 10425, 10428, 10434, 10437, 10448, 10451, 10460, 10463, 10466, 10469, 70940, 71221, 71226, 71229, 71510];
            readonly usedEvents: readonly [10855, 10870, 10889, 10904, 10921, 10940, 10959, 10980, 10995, 11002, 11007, 11012, 11017, 11024, 11029, 11036, 11590, 11599, 11608];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 50;
};
//# sourceMappingURL=ERC4626Target4.d.ts.map