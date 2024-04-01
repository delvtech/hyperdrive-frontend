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
        readonly name: "DistributeExcessIdleFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ExpInvalidExponent";
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
        readonly object: "0x6102406040523480156200001257600080fd5b50604051620048eb380380620048eb8339810160408190526200003591620001e1565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c05260c0808501516101e0526101008086015190915260e0808601519052610120808601519091529184018051519092528151015161014090815281516040908101516101609081529251606090810151610180908152918601518516610200528501516102205290840151600a80546001600160a01b03199081169286169290921790559184015160088054841691851691909117905590920151600980549093169116179055620002d4565b6040516101c081016001600160401b03811182821017156200014957634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200016757600080fd5b919050565b6000608082840312156200017f57600080fd5b604051608081016001600160401b0381118282101715620001b057634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60006102208284031215620001f557600080fd5b620001ff62000117565b6200020a836200014f565b81526200021a602084016200014f565b60208201526200022d604084016200014f565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152506101406200028c8185016200014f565b90820152610160620002a08482016200014f565b90820152610180620002b48482016200014f565b908201526101a0620002c9858583016200016c565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516144926200045960003960005050600050506000818160ec015261260e015260008181610bc90152818161148a015281816114ef015281816120f60152818161221b01528181612257015281816124b601526125e801526000818161095c015281816109c201528181611d9c01528181611e2f01526125c2015260006110ae0152600081816111d401528181611a790152611af201526000818161068601528181610a5c015281816111a80152611ac601526000611a4501526000818161093a015281816109e30152612634015260008181610179015281816105c60152612eec01526000818161033b015281816103fc01526105220152600050506000818161046201528181610ee301528181610f2c01528181611b9a01528181611be301528181611c7501528181611cf601528181611e9d01528181611f1e01528181612811015261285a01526144926000f3fe6080604052600436106100295760003560e01c8063dbbe80701461002e578063ed64bab21461005a575b600080fd5b61004161003c366004614129565b61007c565b6040805192835260208301919091520160405180910390f35b34801561006657600080fd5b5061007a610075366004614188565b610099565b005b60008061008b868686866100a5565b915091505b94509492505050565b6100a281610304565b50565b6000806100b0610436565b600554610100900460ff16156100d9576040516321081abf60e01b815260040160405180910390fd5b6100e1610460565b6100ea836104cd565b7f000000000000000000000000000000000000000000000000000000000000000086101561012b5760405163211ddda360e11b815260040160405180910390fd5b6000610135610503565b905084811015610158576040516342af972b60e01b815260040160405180910390fd5b600061016261051b565b905060006101708284610551565b9050600061019e7f0000000000000000000000000000000000000000000000000000000000000000846141b7565b905060008060006101b08d8887610914565b92509250925080600b60008282546101c891906141b7565b90915550600090506101db84898d610a96565b9050808d10156101fe5760405163c972651760e01b815260040160405180910390fd5b610208818c610ac8565b50506102168e848a88610ba1565b6000610223600287610dae565b905060008f9050610247828e600001602081019061024191906141ca565b83610de3565b848a8e8461025860208301836141ca565b6001600160a01b03167fb354b32bd86ebd9f0968a338e5c2873d7f0d473aa7a668c2488e66038380258b8c8c61028f8b8888610e8b565b61029f6040880160208901614201565b6102b5898f8c6102af919061421e565b90610eb3565b6040805195865260208601949094529284019190915215156060830152608082015260a0810188905260c00160405180910390a350979c50929a50505050505050505050506100906001600055565b61030c610436565b6000818152600760205260408120546001600160801b0316900361042c57600061033461051b565b90506103607f000000000000000000000000000000000000000000000000000000000000000083614247565b15158061036c57508181105b1561038a5760405163ecd29e8160e01b815260040160405180910390fd5b8082036103a8576103a28161039d610503565b610551565b5061042a565b815b6000818152600760205260409020546001600160801b031682821480156103cf575080155b156103df576103dc610503565b90505b80156103f6576103ef8482610551565b5050610428565b506104217f0000000000000000000000000000000000000000000000000000000000000000826141b7565b90506103aa565b505b505b6100a26001600055565b60026000540361045957604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee148015906104ad5750600034115b156104cb57604051631574f9f360e01b815260040160405180910390fd5b565b60006104dc60208301836141ca565b6001600160a01b0316036100a25760405163f0dd15fd60e01b815260040160405180910390fd5b6000610516670de0b6b3a7640000610ec8565b905090565b60006105477f000000000000000000000000000000000000000000000000000000000000000042614247565b610516904261421e565b600082815260076020526040812080546001600160801b031615158061057657504284115b1561058c57546001600160801b0316905061090e565b61059583610fc3565b81546001600160801b0319166001600160801b03919091161781556105b983610fed565b50600090506007816105eb7f00000000000000000000000000000000000000000000000000000000000000008861421e565b815260208101919091526040016000908120546001600160801b03169150610614600287610dae565b6000818152600e602052604081205491925081156107555750600160008061063e848a8884611191565b9150915080600b600082825461065491906141b7565b9091555061067090508460008461066a8161125f565b8e611289565b61067a81836141b7565b91506106aa8483888c8d7f0000000000000000000000000000000000000000000000000000000000000000611403565b91506106be6106b9838b610eb3565b61144d565b600580546002906106df9084906201000090046001600160701b031661425b565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061070c82610fc3565b6005805460109061072e908490600160801b90046001600160801b031661427b565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b600061076260018a610dae565b6000818152600e60205260409020549091508015610872576001925060008061078e838c8a6001611191565b9150915080600b60008282546107a491906141b7565b909155508c90506107c1846000856107bb8161125f565b85611473565b6107cb828461421e565b92506107da6106b9848e610eb3565b600580546002906107fb9084906201000090046001600160701b031661425b565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061082883610fc3565b6005805460109061084a908490600160801b90046001600160801b031661427b565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505b82156108a95761089e6108848561125f565b61088d8361125f565b610897919061429b565b6000611668565b6108a78961171b565b505b60006108b48a61188a565b50604080518c815260208101889052908101849052606081018290529091508b907f5012836090f6cac0f5b321be3188c3cd9c82c8252a23afea128ea014a6fd15519060800160405180910390a289985050505050505050505b92915050565b600080600061098061092461197a565b600154600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f000000000000000000000000000000000000000000000000000000000000000061199b565b91508561098d83876119c7565b111561099d5761099d60026119dc565b6000806000610a076109ad61197a565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a00565b9050610a1d89670de0b6b3a7640000838b611a20565b50919450909250610a309050828461421e565b610a3a908661421e565b9450610a8688610a808b610a4e868a61421e565b8b610a598e82611b2e565b8e7f0000000000000000000000000000000000000000000000000000000000000000611b44565b906119c7565b9550909250505093509350939050565b6000610aa86040830160208401614201565b15610ab4575082610ac1565b610abe8484611b69565b90505b9392505050565b60008080610adc6040850160208601614201565b15610b0157610af785610af260408701876142bb565b611b7e565b9093509050610b1d565b5034610b1985610b1460408701876142bb565b611e12565b8492505b610b25610503565b91508015610b9857604051600090339083908381818185875af1925050503d8060008114610b6f576040519150601f19603f3d011682016040523d82523d6000602084013e610b74565b606091505b5050905080610b96576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b6001546001600160801b031683811015610bbf57610bbf60036119dc565b60035490849003907f000000000000000000000000000000000000000000000000000000000000000090610bf7908390600f0b611fbc565b1015610c0757610c0760016119dc565b600354610c5690610c5190600160801b90046001600160801b0316610c34670de0b6b3a764000086614302565b600454600160801b90046001600160801b03169190896001611fe4565b610fc3565b600480546001600160801b03928316600160801b029216919091179055610c7c81610fc3565b600180546001600160801b0319166001600160801b0392909216919091179055610ca585610fc3565b60018054601090610cc7908490600160801b90046001600160801b031661427b565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610cf485610fc3565b60038054601090610d16908490600160801b90046001600160801b031661427b565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000610d45836120ab565b9050610d6381610d548861125f565b610d5e908461429b565b611668565b610d6c846120ef565b610d7a57610d7a60036119dc565b6000610d858561171b565b905080610da557604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b60006001600160f81b03821115610dd85760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600d602090815260408083206001600160a01b038616845290915281208054839290610e159084906141b7565b90915550506000838152600e602052604081208054839290610e389084906141b7565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b6000610e9d6040830160208401614201565b15610eac57610abe8484611b69565b5082610ac1565b6000610ac18383670de0b6b3a764000061214f565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601610f17575047610fa2565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015610f7b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f9f9190614319565b90505b601254600003610fb3576000610ac1565b601254610ac1908490839061214f565b6000600160801b8210610fe957604051630f0af95160e11b815260040160405180910390fd5b5090565b6005546000908190611010908490600160801b90046001600160801b0316610eb3565b6005546201000090046001600160701b0316925090508181111561118c57600061103a838361421e565b9050611049610c51828661216d565b6005805460109061106b908490600160801b90046001600160801b0316614332565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006110a48583611b6990919063ffffffff16565b905060006110d2827f0000000000000000000000000000000000000000000000000000000000000000610eb3565b905080600b60008282546110e691906141b7565b909155506110f69050818361421e565b915061110182610fc3565b6001805460009061111c9084906001600160801b031661427b565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061114982612182565b6003805460009061115e908490600f0b614352565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60008061119e8686611b69565b915060006111cc837f0000000000000000000000000000000000000000000000000000000000000000610eb3565b90506111f8817f0000000000000000000000000000000000000000000000000000000000000000610eb3565b9150831561121b5761120a828261421e565b611214908461421e565b9250611232565b611225828261421e565b61122f90846141b7565b92505b848610156112555761124583878761214f565b925061125282878761214f565b91505b5094509492505050565b60006001600160ff1b03821115610fe95760405163396ea70160e11b815260040160405180910390fd5b600354600160801b90046001600160801b03166112d2610c51826112b5670de0b6b3a764000086614302565b600454600160801b90046001600160801b031691908a6000611fe4565b600480546001600160801b03928316600160801b0292169190911790556112f886610fc3565b6113029082614332565b600380546001600160801b03928316600160801b02921691909117905561132884610fc3565b600180546000906113439084906001600160801b031661427b565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611370836121ac565b60038054600090611385908490600f0b614352565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506113b585610fc3565b600180546010906113d7908490600160801b90046001600160801b0316614332565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b60008061141b846114158a888a61214f565b90611b69565b905061142888848661214f565b61143290826141b7565b9050868111156114425786810391505b509695505050505050565b6000600160701b8210610fe95760405163086b151760e11b815260040160405180910390fd5b6001546001600160801b0316838110806114b557507f00000000000000000000000000000000000000000000000000000000000000006114b3858361421e565b105b156114c4576114c460036119dc565b6003549084900390600f0b6114d9848261429b565b9050836114e58661125f565b13801561151a57507f00000000000000000000000000000000000000000000000000000000000000006115188383611fbc565b105b156115295761152960016119dc565b600254600160801b90046001600160801b031661156b610c5182611555670de0b6b3a764000088614302565b6004546001600160801b031691908c6000611fe4565b600480546001600160801b0319166001600160801b0392909216919091179055611595888261421e565b90506115a081610fc3565b600280546001600160801b03928316600160801b0292169190911790556115c683610fc3565b600180546001600160801b0319166001600160801b03929092169190911790556115ef826121ac565b600380546001600160801b0319166001600160801b039290921691909117905561161887610fc3565b6001805460109061163a908490600160801b90046001600160801b031661427b565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b600061169161167784836121ea565b6116828460006121ea565b61168c919061429b565b6121ac565b9050600081600f0b13156116e657600280548291906000906116bd9084906001600160801b031661427b565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b1215611716576116fb8161437f565b600280546000906116bd9084906001600160801b0316614332565b505050565b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95490918291611766916001600160801b03169061421e565b9050806000036117795750600192915050565b6000611784846121f9565b905080600003611798575060019392505050565b6000806117a683858861229b565b91509150806117bb5750600095945050505050565b6000806117c7846123a1565b915091506117d482610fc3565b600680546000906117ef9084906001600160801b031661427b565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061181c81610fc3565b6006805460109061183e908490600160801b90046001600160801b031661427b565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061187c61186e8261125f565b611877906143a5565b612489565b506001979650505050505050565b6000806000806118a161189c86612579565b6126b3565b91509150806118b7575060009485945092505050565b60008086116118c75760006118d1565b6118d18387610eb3565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b039092169161193c91906141b7565b611946919061421e565b90508060000361195f5750600096879650945050505050565b600061196b8383611b69565b98600198509650505050505050565b600154600354600091610516916001600160801b0390911690600f0b611fbc565b60006119bc8787876119b588670de0b6b3a764000061421e565b8787612740565b979650505050505050565b6000610ac18383670de0b6b3a7640000612765565b80604051633c06d78b60e11b81526004016119f791906143c1565b60405180910390fd5b6000611a1782611a1185888861214f565b9061278b565b95945050505050565b6000808080611a718786611a6a8b610a80611a438c670de0b6b3a764000061421e565b7f0000000000000000000000000000000000000000000000000000000000000000906119c7565b9190612765565b9350611a9d847f0000000000000000000000000000000000000000000000000000000000000000610eb3565b91506000611abe611ab689670de0b6b3a764000061421e565b8a9088612765565b9050611aea817f00000000000000000000000000000000000000000000000000000000000000006119c7565b9350611b16847f0000000000000000000000000000000000000000000000000000000000000000610eb3565b611b2090846141b7565b915050945094509450949050565b6000818311611b3d5781610ac1565b5090919050565b600080611b5c84611b568a888a612765565b9061216d565b9050611428888486612765565b6000610ac183670de0b6b3a76400008461214f565b6000808073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601611bce575047611c59565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611c32573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c569190614319565b90505b6001600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601611cd45787341015611cc3576040516312171d8360e31b815260040160405180910390fd5b611ccd883461421e565b9050611d6e565b6040516323b872dd60e01b8152336004820152306024820152604481018990527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015611d47573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d6b91906143e9565b91505b81611d8c576040516312171d8360e31b815260040160405180910390fd5b601254600003611dd157611dc0887f0000000000000000000000000000000000000000000000000000000000000000611b69565b601281905594509250611e0a915050565b601254600090611de3908a908661214f565b90508060126000828254611df791906141b7565b90915550909550909350611e0a92505050565b935093915050565b6000611e1d84610ec8565b9050601254600003611e5b57611e53817f0000000000000000000000000000000000000000000000000000000000000000611b69565b601255611e81565b6000611e66826127f6565b90508060126000828254611e7a91906141b7565b9091555050505b6001600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601611efc5782341015611eeb576040516312171d8360e31b815260040160405180910390fd5b611ef5833461421e565b9050611f96565b6040516323b872dd60e01b8152336004820152306024820152604481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015611f6f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f9391906143e9565b91505b81611fb4576040516312171d8360e31b815260040160405180910390fd5b505050505050565b600080611fc984846128df565b909250905080611fdd57611fdd60016119dc565b5092915050565b600082600003611ff5575084611a17565b81156120675761202661200884876141b7565b6120128587610eb3565b61201c888a610eb3565b61141591906141b7565b90506000612034858861291b565b905060006120428689611b2e565b90508183101561205457819250612060565b80831115612060578092505b5050611a17565b82850361207657506000611a17565b6120a1612083848761421e565b61208d85876119c7565b612097888a610eb3565b611415919061421e565b9695505050505050565b60006120d3600e60006120bf600286610dae565b81526020019081526020016000205461125f565b6120e5600e60006120bf600187610dae565b61090e919061429b565b600061211b7f0000000000000000000000000000000000000000000000000000000000000000836119c7565b60025461213191906001600160801b03166141b7565b600154612147906001600160801b031684610eb3565b101592915050565b600082600019048411830215820261216657600080fd5b5091020490565b6000610ac183670de0b6b3a764000084612765565b600060016001607f1b03821115610fe95760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b031982128015906121cd575060016001607f1b038213155b610fe95760405163a5353be560e01b815260040160405180910390fd5b6000818313611b3d5781610ac1565b6002546000908190612214906001600160801b03168461216d565b90506122407f0000000000000000000000000000000000000000000000000000000000000000826141b7565b6001546001600160801b03161115612295576001547f00000000000000000000000000000000000000000000000000000000000000009061228b9083906001600160801b031661421e565b610ac1919061421e565b50919050565b6122a3614076565b6000806122af84612579565b905060006122bc826126b3565b93509050826122d1575060009150611e0a9050565b60006122f86122f3846101600151856101400151610eb390919063ffffffff16565b61125f565b6123186122f38561012001518661010001516119c790919063ffffffff16565b612322919061429b565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6000806000806123b98560c001518660e001516128df565b91509150806123cf575060009485945092505050565b60006123db868461292a565b925090508115806123ea575080155b156123fd57506000958695509350505050565b60006124098783612a39565b9050806000036124225750600096879650945050505050565b8660600151811161243857969095509350505050565b506060860151600061244b888685612b0a565b905080600003612465575060009788975095505050505050565b82811061247c575060009788975095505050505050565b9097909650945050505050565b6001546003546001600160801b0380831692600f9290920b91600160801b900416600080806124db8686867f00000000000000000000000000000000000000000000000000000000000000008b612e5a565b925092509250858314612512576124f183610fc3565b600180546001600160801b0319166001600160801b03929092169190911790555b84821461254357612522826121ac565b600380546001600160801b0319166001600160801b03929092169190911790555b838114610da55761255381610fc3565b600180546001600160801b03928316600160801b02921691909117905550505050505050565b6125816140c8565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e083015260025404821661010082015260045490916101208301916126799116612ea1565b81526003546001600160801b03600160801b91829004811660208401526004546040909301926126ab92900416612ea1565b905292915050565b60008060008060006126c486612f17565b91509150806126db57506000958695509350505050565b6126e88660a0015161125f565b6126f187613237565b836126ff896000015161125f565b6127099190614406565b6127139190614406565b61271d919061429b565b9250505060008112156127365750600093849350915050565b9360019350915050565b60008061275188888888888861329b565b9092509050806114425761144260006119dc565b600082600019048411830215820261277c57600080fd5b50910281810615159190040190565b6000816000036127a45750670de0b6b3a764000061090e565b826000036127b45750600061090e565b60006127bf8361125f565b905060006127d46127cf8661125f565b613365565b90508181026127eb670de0b6b3a76400008261442e565b90506120a18161358b565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016128455750476128d0565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156128a9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906128cd9190614319565b90505b601254610ac19084908361214f565b6000806000836128ee8661125f565b6128f8919061429b565b90506000811215612910576000809250925050610b9a565b946001945092505050565b60008183116122955782610ac1565b60008060008460a001511261294757505060808201516001610b9a565b60008460a00151612957906143a5565b9050600061299385876101000151886000015160e00151670de0b6b3a7640000612981919061421e565b89516060810151608090910151613720565b935090508215806129a2575080155b156129b557600080935093505050610b9a565b60006129c1838361216d565b9050670de0b6b3a764000081116129fd5780670de0b6b3a76400000394506129f68760c0015186610eb390919063ffffffff16565b9450612a0c565b60008094509450505050610b9a565b8660800151851115612a2b578660800151600194509450505050610b9a565b506001925050509250929050565b600080612a6f8460c001518560e00151866101000151876000015160a00151612a618861125f565b612a6a906143a5565b6137cc565b87516040810192909252602082019290925291909152905080612a9657600091505061090e565b6000612aa585600001516126b3565b9250905081612ab95760009250505061090e565b84602001518110612acf5760009250505061090e565b600085606001518660400151612ae591906141b7565b9050612b008287602001518361214f9092919063ffffffff16565b6120a1908261421e565b60008084606001518560400151612b2191906141b7565b60208601516060870151919250600091612b3b918461214f565b90508560a00151600003612b52579150610ac19050565b60005b6004811015612e5057612b68828661291b565b91506000612b918860c001518960e001518a61010001518b6000015160a00151612a618861125f565b8b516040810192909252602082019290925291909152905080612bbb576000945050505050610ac1565b6000612bca89600001516138e4565b9050612bd7898287613914565b15612be3575050612e50565b60008960a001511315612d4757885180516020820151604083015160a084015160e0909401518d94600094612c3d9490939092909190612c2b90670de0b6b3a764000061421e565b87516060810151608090910151613980565b9450905083612c56576000975050505050505050610ac1565b808260a0015110612d4457612c6a82613a6c565b909650935083612c84576000975050505050505050610ac1565b612ca98260c001518360e00151846101000151856000015160a00151612a618b61125f565b85516040810192909252602082019290925291909152935083612cd6576000975050505050505050610ac1565b815180516020820151604083015160a0909301518e5160e00151612d08949190612c2b90670de0b6b3a764000061421e565b9450905083612d21576000975050505050505050610ac1565b8a60a001518111612d3b5785975050505050505050610ac1565b50505050612b55565b50505b6000612d588a8a8c60a00151613b42565b93509050821580612d715750670de0b6b3a76400008110155b15612d855760009650505050505050610ac1565b80670de0b6b3a76400000390506000612db26122f38c604001518d602001516119c790919063ffffffff16565b612dbf6122f3858a610eb3565b612dc9919061429b565b90506000811315612df357612de2876114158385611b69565b612dec90876141b7565b9550612e41565b6000811215612e38576000612e0d886114158581866143a5565b905086811015612e21578087039650612e32565b600098505050505050505050610ac1565b50612e41565b50505050612e50565b84600101945050505050612b55565b5095945050505050565b600080600080612e6d89898989896137cc565b9296509094509250905080612e9557604051635044b7f560e01b815260040160405180910390fd5b50955095509592505050565b600080670de0b6b3a7640000612eb561051b565b612ebf9190614302565b9050808311612ecf576000612ed9565b612ed9818461421e565b9150610ac1612f10670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000614302565b8390611b69565b6000806000612f3c6122f3856101600151866101400151610eb390919063ffffffff16565b612f5c6122f38661012001518761010001516119c790919063ffffffff16565b612f66919061429b565b9050600080612f7d866000015187602001516128df565b9150915080612f9457506000958695509350505050565b60008313156130d55760008390506000612fe2886000015189602001518a604001518b60a001518c60e00151670de0b6b3a7640000612fd3919061421e565b8d606001518e60800151613980565b9350905082612ffb575060009788975095505050505050565b818110613099576000613035858a60400151858c60e00151670de0b6b3a7640000613026919061421e565b8d606001518e6080015161329b565b945090508315801561304a57508860c0015183105b156130615750600098600198509650505050505050565b8361307757506000988998509650505050505050565b6130808161125f565b613089906143a5565b9960019950975050505050505050565b60008860200151126130c1576130b88860a00151856122f3919061421e565b61196b906143a5565b60a088015188516130b8916122f39161421e565b60008312156132285760006130e9846143a5565b9050600061311d8489604001518a60e00151670de0b6b3a764000061310e919061421e565b8b606001518c60800151613720565b9350905082613136575060009788975095505050505050565b8181106131bb576000613170858a60400151858c60e00151670de0b6b3a7640000613161919061421e565b8d606001518e60800151613e9c565b945090508315801561318557508860c0015183105b1561319c5750600098600198509650505050505050565b836131b257506000988998509650505050505050565b6130898161125f565b60006131ed858a604001518b60e00151670de0b6b3a76400006131de919061421e565b8c606001518d60800151613f73565b945090508361320757506000988998509650505050505050565b61308961321e8a606001518486611415919061421e565b6122f390836141b7565b50600095600195509350505050565b600061326a6122f3836101200151670de0b6b3a7640000613258919061421e565b60608501516101008601519190612765565b6120e56122f3846101600151670de0b6b3a7640000613289919061421e565b6060860151610140870151919061214f565b60008060006132ad8989888888614022565b90506132bd86611a11898b6141b7565b9750878110156132d457600080925092505061335a565b8781036132e2818688612765565b9050670de0b6b3a764000081106133165761330f613308670de0b6b3a76400008961216d565b829061278b565b905061332e565b61332b613308670de0b6b3a764000089611b69565b90505b613338818661216d565b9050808a10156133505760008093509350505061335a565b8903925060019150505b965096945050505050565b60008082136133875760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f1982019061340a9084901c61125f565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e1982136135a657506000919050565b680755bf798b4a1bf1e582126135cf576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b0181810595509293509091906120a174029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c61125f565b60008060006137328888888888614022565b9050600061375d670de0b6b3a764000061374c8888611b69565b61375691906141b7565b839061216d565b9050670de0b6b3a7640000811061378a57613783613308670de0b6b3a76400008961216d565b90506137a2565b61379f613308670de0b6b3a764000089611b69565b90505b808810156137b8576000809350935050506137c2565b8703925060019150505b9550959350505050565b600080600080846000036137eb575087925086915085905060016138d8565b6000856137f78b61125f565b6138019190614406565b905061380c8761125f565b811215613827576000806000809450945094509450506138d8565b80945060008912613847576138406122f3868b8d61214f565b935061386a565b61385e6122f36138568b6143a5565b87908d612765565b613867906143a5565b93505b6000806138778c8c6128df565b91509150806138965760008060008096509650965096505050506138d8565b60006138a288886128df565b92509050816138c2576000806000809750975097509750505050506138d8565b6138cd8b828561214f565b955060019450505050505b95509550955095915050565b60008060006138f2846126b3565b9150915080611fdd57604051635516328b60e11b815260040160405180910390fd5b6020830151600090613926908461216d565b6040850151613936908490611b69565b10158015610abe57506020840151613966908461395f633b9aca00670de0b6b3a76400006141b7565b919061214f565b604085015161397690849061216d565b1115949350505050565b60008060008812156139a257613995886143a5565b61399f90876141b7565b95505b60006139ae8a8a611fbc565b905060006139bf828a898989614051565b905060006139dc6139d489611a11898d6119c7565b889088612765565b9050808210156139f55760008094509450505050613a60565b808203670de0b6b3a76400008110613a2357613a1c613308670de0b6b3a76400008b611b69565b9050613a3b565b613a38613308670de0b6b3a76400008b61216d565b90505b8a811015613a53576000809550955050505050613a60565b8a90039450600193505050505b97509795505050505050565b60008060008360e0015113613a8657506000928392509050565b6000613a958460000151613237565b90506000613ac1856040015186606001518760400151613ab591906141b7565b60208801519190612765565b905060008212613ae85780821015613adb57819003613afe565b5060009485945092505050565b613af1826143a5565b613afb90826141b7565b90505b60e085015160c0860151613b13918390612765565b9050808560c001511015613b2e575060009485945092505050565b808560c00151036001935093505050915091565b6000806000808412613b6657855160400151613b5f9085906141b7565b9050613ba1565b6000613b71856143a5565b875160400151909150811015613b91578651604001518190039150613b9f565b600080935093505050611e0a565b505b855180516020909101516000918291613bba91906128df565b9150915080613bd25760008094509450505050611e0a565b875160e0810151604090910151600091613c0791613bfb91613bf4919061278b565b8a90610eb3565b6101008b01519061216d565b895160e0810151608090910151613c3291613c2691611a119088610eb3565b8b51606001519061216d565b613c3c91906141b7565b90506000613c74613c68613c618c6000015160e001518861278b90919063ffffffff16565b8b906119c7565b6101008c015190611b69565b905080821015613c8f57600080965096505050505050611e0a565b80820391506000613cd1858c60000151604001518d6000015160e00151670de0b6b3a7640000613cbf919061421e565b8e516060810151608090910151614022565b90506000613cfb8c6000015160e00151670de0b6b3a7640000613cf4919061421e565b889061278b565b905080821015613d18576000809850985050505050505050611e0a565b8b51608081015160609091015191830391613d34918391612765565b9050670de0b6b3a76400008110613d78578b5160e00151613d719061330890613d6590670de0b6b3a764000061421e565b8e5160e001519061216d565b9050613da7565b8b5160e00151613da49061330890613d9890670de0b6b3a764000061421e565b8e5160e0015190611b69565b90505b8b5160600151613dba9085908390612765565b935083670de0b6b3a76400001115613dde5783670de0b6b3a7640000039350613df2565b600060019850985050505050505050611e0a565b60008c60e0015112613e545760c08c015160e08d0151613e119161216d565b9250670de0b6b3a76400008310613e35576000809850985050505050505050611e0a565b670de0b6b3a76400009290920391613e4d8484610eb3565b9350613e89565b613e86613e6d8d60c001518e60e00151611415906143a5565b613e7f90670de0b6b3a76400006141b7565b8590610eb3565b93505b50919a60019a5098505050505050505050565b6000806000613eae8989888888614022565b905086881015613ec557600080925092505061335a565b9686900396613ed4888761278b565b975087811015613eeb57600080925092505061335a565b878103613ef9818688612765565b9050670de0b6b3a76400008110613f2657613f1f613308670de0b6b3a76400008961216d565b9050613f3e565b613f3b613308670de0b6b3a764000089611b69565b90505b613f48818661216d565b905089811015613f605760008093509350505061335a565b9890980398600198509650505050505050565b6000806000613f858888888888614051565b90506000613fa9670de0b6b3a7640000613f9f888861216d565b612f1091906141b7565b9050670de0b6b3a76400008110613fd657613fcf613308670de0b6b3a764000089611b69565b9050613fee565b613feb613308670de0b6b3a76400008961216d565b90505b613ff88186611b69565b905088811015614010576000809350935050506137c2565b97909703976001975095505050505050565b600061402e858561278b565b61404761403f86611a11868b6119c7565b859085612765565b6120a191906141b7565b600061405d858561278b565b61404761406e86611a11868b610eb3565b85908561214f565b60405180610120016040528061408a6140c8565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000806000806080858703121561413f57600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561416b57600080fd5b85016060818803121561417d57600080fd5b939692955090935050565b60006020828403121561419a57600080fd5b5035919050565b634e487b7160e01b600052601160045260246000fd5b8082018082111561090e5761090e6141a1565b6000602082840312156141dc57600080fd5b81356001600160a01b0381168114610ac157600080fd5b80151581146100a257600080fd5b60006020828403121561421357600080fd5b8135610ac1816141f3565b8181038181111561090e5761090e6141a1565b634e487b7160e01b600052601260045260246000fd5b60008261425657614256614231565b500690565b6001600160701b03818116838216019080821115611fdd57611fdd6141a1565b6001600160801b03818116838216019080821115611fdd57611fdd6141a1565b8181036000831280158383131683831282161715611fdd57611fdd6141a1565b6000808335601e198436030181126142d257600080fd5b83018035915067ffffffffffffffff8211156142ed57600080fd5b602001915036819003821315610b9a57600080fd5b808202811582820484141761090e5761090e6141a1565b60006020828403121561432b57600080fd5b5051919050565b6001600160801b03828116828216039080821115611fdd57611fdd6141a1565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561090e5761090e6141a1565b600081600f0b60016001607f1b0319810361439c5761439c6141a1565b60000392915050565b6000600160ff1b82016143ba576143ba6141a1565b5060000390565b60208101600483106143e357634e487b7160e01b600052602160045260246000fd5b91905290565b6000602082840312156143fb57600080fd5b8151610ac1816141f3565b8082018281126000831280158216821582161715614426576144266141a1565b505092915050565b60008261443d5761443d614231565b600160ff1b821460001984141615614457576144576141a1565b50059056fea2646970667358221220e2c32dc1bdc0333fe12c2160a6d3e4476a49dfaf929003b66e1ef833992240d264736f6c63430008140033";
        readonly sourceMap: "14659:174:135:-:0;;;14737:94;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1713:1:169;1917:7;:21;5298:17:118;;-1:-1:-1;;;;;5285:30:118;;;;;;;5345:24;;;;;5325:44;;;;;;5459:30;;;;5433:56;;;;5912:28;;;;5888:52;;6228:32;;;;;6200:60;;6443:26;;;;;6421:48;;;-1:-1:-1;6499:24:118;;;;6479:44;;-1:-1:-1;6548:19:118;;;;6533:34;;;6632:12;;;;;:18;6620:30;;;6671:12;;:17;;6660:28;;;;6717:12;;-1:-1:-1;6717:25:118;;;;6698:44;;;;6775:12;;-1:-1:-1;6775:29:118;;;;6752:52;;;;-1:-1:-1;;;6881:21:118;6864:38;;;;-1:-1:-1;;6930:22:118;6912:40;;7055:18;;;;7041:11;:32;;-1:-1:-1;;;;;;7041:32:118;;;;;;;;;;;;7099:20;;;;7083:13;:36;;;;;;;;;;;;;7147:22;;;;7129:15;:40;;;;;;;;;;14659:174:135;;14:347:234;81:2;75:9;123:6;111:19;;-1:-1:-1;;;;;145:34:234;;181:22;;;142:62;139:185;;;246:10;241:3;237:20;234:1;227:31;281:4;278:1;271:15;309:4;306:1;299:15;139:185;340:2;333:22;14:347;:::o;366:185::-;453:13;;-1:-1:-1;;;;;495:31:234;;485:42;;475:70;;541:1;538;531:12;475:70;366:185;;;:::o;556:681::-;618:5;666:4;654:9;649:3;645:19;641:30;638:50;;;684:1;681;674:12;638:50;717:2;711:9;759:4;747:17;;-1:-1:-1;;;;;779:34:234;;815:22;;;776:62;773:185;;;880:10;875:3;871:20;868:1;861:31;915:4;912:1;905:15;943:4;940:1;933:15;773:185;978:10;974:2;967:22;;1007:6;998:15;;1043:9;1037:16;1029:6;1022:32;1108:2;1097:9;1093:18;1087:25;1082:2;1074:6;1070:15;1063:50;1167:2;1156:9;1152:18;1146:25;1141:2;1133:6;1129:15;1122:50;1226:2;1215:9;1211:18;1205:25;1200:2;1192:6;1188:15;1181:50;;556:681;;;;:::o;1242:1405::-;1341:6;1394:3;1382:9;1373:7;1369:23;1365:33;1362:53;;;1411:1;1408;1401:12;1362:53;1437:17;;:::i;:::-;1477:48;1515:9;1477:48;:::i;:::-;1470:5;1463:63;1558:57;1611:2;1600:9;1596:18;1558:57;:::i;:::-;1553:2;1546:5;1542:14;1535:81;1648:57;1701:2;1690:9;1686:18;1648:57;:::i;:::-;1643:2;1636:5;1632:14;1625:81;1759:2;1748:9;1744:18;1738:25;1733:2;1726:5;1722:14;1715:49;1818:3;1807:9;1803:19;1797:26;1791:3;1784:5;1780:15;1773:51;1878:3;1867:9;1863:19;1857:26;1851:3;1844:5;1840:15;1833:51;1938:3;1927:9;1923:19;1917:26;1911:3;1904:5;1900:15;1893:51;1998:3;1987:9;1983:19;1977:26;1971:3;1964:5;1960:15;1953:51;2023:3;2079:2;2068:9;2064:18;2058:25;2053:2;2046:5;2042:14;2035:49;;2103:3;2159:2;2148:9;2144:18;2138:25;2133:2;2126:5;2122:14;2115:49;;2183:3;2218:57;2271:2;2260:9;2256:18;2218:57;:::i;:::-;2202:14;;;2195:81;2295:3;2330:57;2368:18;;;2330:57;:::i;:::-;2314:14;;;2307:81;2407:3;2442:57;2480:18;;;2442:57;:::i;:::-;2426:14;;;2419:81;2519:3;2554:62;2608:7;2588:18;;;2554:62;:::i;:::-;2538:14;;;2531:86;2542:5;1242:1405;-1:-1:-1;;;1242:1405:234:o;:::-;14659:174:135;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly deployedBytecode: {
        readonly object: "0x6080604052600436106100295760003560e01c8063dbbe80701461002e578063ed64bab21461005a575b600080fd5b61004161003c366004614129565b61007c565b6040805192835260208301919091520160405180910390f35b34801561006657600080fd5b5061007a610075366004614188565b610099565b005b60008061008b868686866100a5565b915091505b94509492505050565b6100a281610304565b50565b6000806100b0610436565b600554610100900460ff16156100d9576040516321081abf60e01b815260040160405180910390fd5b6100e1610460565b6100ea836104cd565b7f000000000000000000000000000000000000000000000000000000000000000086101561012b5760405163211ddda360e11b815260040160405180910390fd5b6000610135610503565b905084811015610158576040516342af972b60e01b815260040160405180910390fd5b600061016261051b565b905060006101708284610551565b9050600061019e7f0000000000000000000000000000000000000000000000000000000000000000846141b7565b905060008060006101b08d8887610914565b92509250925080600b60008282546101c891906141b7565b90915550600090506101db84898d610a96565b9050808d10156101fe5760405163c972651760e01b815260040160405180910390fd5b610208818c610ac8565b50506102168e848a88610ba1565b6000610223600287610dae565b905060008f9050610247828e600001602081019061024191906141ca565b83610de3565b848a8e8461025860208301836141ca565b6001600160a01b03167fb354b32bd86ebd9f0968a338e5c2873d7f0d473aa7a668c2488e66038380258b8c8c61028f8b8888610e8b565b61029f6040880160208901614201565b6102b5898f8c6102af919061421e565b90610eb3565b6040805195865260208601949094529284019190915215156060830152608082015260a0810188905260c00160405180910390a350979c50929a50505050505050505050506100906001600055565b61030c610436565b6000818152600760205260408120546001600160801b0316900361042c57600061033461051b565b90506103607f000000000000000000000000000000000000000000000000000000000000000083614247565b15158061036c57508181105b1561038a5760405163ecd29e8160e01b815260040160405180910390fd5b8082036103a8576103a28161039d610503565b610551565b5061042a565b815b6000818152600760205260409020546001600160801b031682821480156103cf575080155b156103df576103dc610503565b90505b80156103f6576103ef8482610551565b5050610428565b506104217f0000000000000000000000000000000000000000000000000000000000000000826141b7565b90506103aa565b505b505b6100a26001600055565b60026000540361045957604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee148015906104ad5750600034115b156104cb57604051631574f9f360e01b815260040160405180910390fd5b565b60006104dc60208301836141ca565b6001600160a01b0316036100a25760405163f0dd15fd60e01b815260040160405180910390fd5b6000610516670de0b6b3a7640000610ec8565b905090565b60006105477f000000000000000000000000000000000000000000000000000000000000000042614247565b610516904261421e565b600082815260076020526040812080546001600160801b031615158061057657504284115b1561058c57546001600160801b0316905061090e565b61059583610fc3565b81546001600160801b0319166001600160801b03919091161781556105b983610fed565b50600090506007816105eb7f00000000000000000000000000000000000000000000000000000000000000008861421e565b815260208101919091526040016000908120546001600160801b03169150610614600287610dae565b6000818152600e602052604081205491925081156107555750600160008061063e848a8884611191565b9150915080600b600082825461065491906141b7565b9091555061067090508460008461066a8161125f565b8e611289565b61067a81836141b7565b91506106aa8483888c8d7f0000000000000000000000000000000000000000000000000000000000000000611403565b91506106be6106b9838b610eb3565b61144d565b600580546002906106df9084906201000090046001600160701b031661425b565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061070c82610fc3565b6005805460109061072e908490600160801b90046001600160801b031661427b565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b600061076260018a610dae565b6000818152600e60205260409020549091508015610872576001925060008061078e838c8a6001611191565b9150915080600b60008282546107a491906141b7565b909155508c90506107c1846000856107bb8161125f565b85611473565b6107cb828461421e565b92506107da6106b9848e610eb3565b600580546002906107fb9084906201000090046001600160701b031661425b565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061082883610fc3565b6005805460109061084a908490600160801b90046001600160801b031661427b565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505b82156108a95761089e6108848561125f565b61088d8361125f565b610897919061429b565b6000611668565b6108a78961171b565b505b60006108b48a61188a565b50604080518c815260208101889052908101849052606081018290529091508b907f5012836090f6cac0f5b321be3188c3cd9c82c8252a23afea128ea014a6fd15519060800160405180910390a289985050505050505050505b92915050565b600080600061098061092461197a565b600154600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f000000000000000000000000000000000000000000000000000000000000000061199b565b91508561098d83876119c7565b111561099d5761099d60026119dc565b6000806000610a076109ad61197a565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a00565b9050610a1d89670de0b6b3a7640000838b611a20565b50919450909250610a309050828461421e565b610a3a908661421e565b9450610a8688610a808b610a4e868a61421e565b8b610a598e82611b2e565b8e7f0000000000000000000000000000000000000000000000000000000000000000611b44565b906119c7565b9550909250505093509350939050565b6000610aa86040830160208401614201565b15610ab4575082610ac1565b610abe8484611b69565b90505b9392505050565b60008080610adc6040850160208601614201565b15610b0157610af785610af260408701876142bb565b611b7e565b9093509050610b1d565b5034610b1985610b1460408701876142bb565b611e12565b8492505b610b25610503565b91508015610b9857604051600090339083908381818185875af1925050503d8060008114610b6f576040519150601f19603f3d011682016040523d82523d6000602084013e610b74565b606091505b5050905080610b96576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b6001546001600160801b031683811015610bbf57610bbf60036119dc565b60035490849003907f000000000000000000000000000000000000000000000000000000000000000090610bf7908390600f0b611fbc565b1015610c0757610c0760016119dc565b600354610c5690610c5190600160801b90046001600160801b0316610c34670de0b6b3a764000086614302565b600454600160801b90046001600160801b03169190896001611fe4565b610fc3565b600480546001600160801b03928316600160801b029216919091179055610c7c81610fc3565b600180546001600160801b0319166001600160801b0392909216919091179055610ca585610fc3565b60018054601090610cc7908490600160801b90046001600160801b031661427b565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610cf485610fc3565b60038054601090610d16908490600160801b90046001600160801b031661427b565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000610d45836120ab565b9050610d6381610d548861125f565b610d5e908461429b565b611668565b610d6c846120ef565b610d7a57610d7a60036119dc565b6000610d858561171b565b905080610da557604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b60006001600160f81b03821115610dd85760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600d602090815260408083206001600160a01b038616845290915281208054839290610e159084906141b7565b90915550506000838152600e602052604081208054839290610e389084906141b7565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b6000610e9d6040830160208401614201565b15610eac57610abe8484611b69565b5082610ac1565b6000610ac18383670de0b6b3a764000061214f565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601610f17575047610fa2565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015610f7b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f9f9190614319565b90505b601254600003610fb3576000610ac1565b601254610ac1908490839061214f565b6000600160801b8210610fe957604051630f0af95160e11b815260040160405180910390fd5b5090565b6005546000908190611010908490600160801b90046001600160801b0316610eb3565b6005546201000090046001600160701b0316925090508181111561118c57600061103a838361421e565b9050611049610c51828661216d565b6005805460109061106b908490600160801b90046001600160801b0316614332565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006110a48583611b6990919063ffffffff16565b905060006110d2827f0000000000000000000000000000000000000000000000000000000000000000610eb3565b905080600b60008282546110e691906141b7565b909155506110f69050818361421e565b915061110182610fc3565b6001805460009061111c9084906001600160801b031661427b565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061114982612182565b6003805460009061115e908490600f0b614352565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60008061119e8686611b69565b915060006111cc837f0000000000000000000000000000000000000000000000000000000000000000610eb3565b90506111f8817f0000000000000000000000000000000000000000000000000000000000000000610eb3565b9150831561121b5761120a828261421e565b611214908461421e565b9250611232565b611225828261421e565b61122f90846141b7565b92505b848610156112555761124583878761214f565b925061125282878761214f565b91505b5094509492505050565b60006001600160ff1b03821115610fe95760405163396ea70160e11b815260040160405180910390fd5b600354600160801b90046001600160801b03166112d2610c51826112b5670de0b6b3a764000086614302565b600454600160801b90046001600160801b031691908a6000611fe4565b600480546001600160801b03928316600160801b0292169190911790556112f886610fc3565b6113029082614332565b600380546001600160801b03928316600160801b02921691909117905561132884610fc3565b600180546000906113439084906001600160801b031661427b565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611370836121ac565b60038054600090611385908490600f0b614352565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506113b585610fc3565b600180546010906113d7908490600160801b90046001600160801b0316614332565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b60008061141b846114158a888a61214f565b90611b69565b905061142888848661214f565b61143290826141b7565b9050868111156114425786810391505b509695505050505050565b6000600160701b8210610fe95760405163086b151760e11b815260040160405180910390fd5b6001546001600160801b0316838110806114b557507f00000000000000000000000000000000000000000000000000000000000000006114b3858361421e565b105b156114c4576114c460036119dc565b6003549084900390600f0b6114d9848261429b565b9050836114e58661125f565b13801561151a57507f00000000000000000000000000000000000000000000000000000000000000006115188383611fbc565b105b156115295761152960016119dc565b600254600160801b90046001600160801b031661156b610c5182611555670de0b6b3a764000088614302565b6004546001600160801b031691908c6000611fe4565b600480546001600160801b0319166001600160801b0392909216919091179055611595888261421e565b90506115a081610fc3565b600280546001600160801b03928316600160801b0292169190911790556115c683610fc3565b600180546001600160801b0319166001600160801b03929092169190911790556115ef826121ac565b600380546001600160801b0319166001600160801b039290921691909117905561161887610fc3565b6001805460109061163a908490600160801b90046001600160801b031661427b565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b600061169161167784836121ea565b6116828460006121ea565b61168c919061429b565b6121ac565b9050600081600f0b13156116e657600280548291906000906116bd9084906001600160801b031661427b565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b1215611716576116fb8161437f565b600280546000906116bd9084906001600160801b0316614332565b505050565b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95490918291611766916001600160801b03169061421e565b9050806000036117795750600192915050565b6000611784846121f9565b905080600003611798575060019392505050565b6000806117a683858861229b565b91509150806117bb5750600095945050505050565b6000806117c7846123a1565b915091506117d482610fc3565b600680546000906117ef9084906001600160801b031661427b565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061181c81610fc3565b6006805460109061183e908490600160801b90046001600160801b031661427b565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061187c61186e8261125f565b611877906143a5565b612489565b506001979650505050505050565b6000806000806118a161189c86612579565b6126b3565b91509150806118b7575060009485945092505050565b60008086116118c75760006118d1565b6118d18387610eb3565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b039092169161193c91906141b7565b611946919061421e565b90508060000361195f5750600096879650945050505050565b600061196b8383611b69565b98600198509650505050505050565b600154600354600091610516916001600160801b0390911690600f0b611fbc565b60006119bc8787876119b588670de0b6b3a764000061421e565b8787612740565b979650505050505050565b6000610ac18383670de0b6b3a7640000612765565b80604051633c06d78b60e11b81526004016119f791906143c1565b60405180910390fd5b6000611a1782611a1185888861214f565b9061278b565b95945050505050565b6000808080611a718786611a6a8b610a80611a438c670de0b6b3a764000061421e565b7f0000000000000000000000000000000000000000000000000000000000000000906119c7565b9190612765565b9350611a9d847f0000000000000000000000000000000000000000000000000000000000000000610eb3565b91506000611abe611ab689670de0b6b3a764000061421e565b8a9088612765565b9050611aea817f00000000000000000000000000000000000000000000000000000000000000006119c7565b9350611b16847f0000000000000000000000000000000000000000000000000000000000000000610eb3565b611b2090846141b7565b915050945094509450949050565b6000818311611b3d5781610ac1565b5090919050565b600080611b5c84611b568a888a612765565b9061216d565b9050611428888486612765565b6000610ac183670de0b6b3a76400008461214f565b6000808073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601611bce575047611c59565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611c32573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c569190614319565b90505b6001600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601611cd45787341015611cc3576040516312171d8360e31b815260040160405180910390fd5b611ccd883461421e565b9050611d6e565b6040516323b872dd60e01b8152336004820152306024820152604481018990527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015611d47573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d6b91906143e9565b91505b81611d8c576040516312171d8360e31b815260040160405180910390fd5b601254600003611dd157611dc0887f0000000000000000000000000000000000000000000000000000000000000000611b69565b601281905594509250611e0a915050565b601254600090611de3908a908661214f565b90508060126000828254611df791906141b7565b90915550909550909350611e0a92505050565b935093915050565b6000611e1d84610ec8565b9050601254600003611e5b57611e53817f0000000000000000000000000000000000000000000000000000000000000000611b69565b601255611e81565b6000611e66826127f6565b90508060126000828254611e7a91906141b7565b9091555050505b6001600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601611efc5782341015611eeb576040516312171d8360e31b815260040160405180910390fd5b611ef5833461421e565b9050611f96565b6040516323b872dd60e01b8152336004820152306024820152604481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015611f6f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f9391906143e9565b91505b81611fb4576040516312171d8360e31b815260040160405180910390fd5b505050505050565b600080611fc984846128df565b909250905080611fdd57611fdd60016119dc565b5092915050565b600082600003611ff5575084611a17565b81156120675761202661200884876141b7565b6120128587610eb3565b61201c888a610eb3565b61141591906141b7565b90506000612034858861291b565b905060006120428689611b2e565b90508183101561205457819250612060565b80831115612060578092505b5050611a17565b82850361207657506000611a17565b6120a1612083848761421e565b61208d85876119c7565b612097888a610eb3565b611415919061421e565b9695505050505050565b60006120d3600e60006120bf600286610dae565b81526020019081526020016000205461125f565b6120e5600e60006120bf600187610dae565b61090e919061429b565b600061211b7f0000000000000000000000000000000000000000000000000000000000000000836119c7565b60025461213191906001600160801b03166141b7565b600154612147906001600160801b031684610eb3565b101592915050565b600082600019048411830215820261216657600080fd5b5091020490565b6000610ac183670de0b6b3a764000084612765565b600060016001607f1b03821115610fe95760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b031982128015906121cd575060016001607f1b038213155b610fe95760405163a5353be560e01b815260040160405180910390fd5b6000818313611b3d5781610ac1565b6002546000908190612214906001600160801b03168461216d565b90506122407f0000000000000000000000000000000000000000000000000000000000000000826141b7565b6001546001600160801b03161115612295576001547f00000000000000000000000000000000000000000000000000000000000000009061228b9083906001600160801b031661421e565b610ac1919061421e565b50919050565b6122a3614076565b6000806122af84612579565b905060006122bc826126b3565b93509050826122d1575060009150611e0a9050565b60006122f86122f3846101600151856101400151610eb390919063ffffffff16565b61125f565b6123186122f38561012001518661010001516119c790919063ffffffff16565b612322919061429b565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6000806000806123b98560c001518660e001516128df565b91509150806123cf575060009485945092505050565b60006123db868461292a565b925090508115806123ea575080155b156123fd57506000958695509350505050565b60006124098783612a39565b9050806000036124225750600096879650945050505050565b8660600151811161243857969095509350505050565b506060860151600061244b888685612b0a565b905080600003612465575060009788975095505050505050565b82811061247c575060009788975095505050505050565b9097909650945050505050565b6001546003546001600160801b0380831692600f9290920b91600160801b900416600080806124db8686867f00000000000000000000000000000000000000000000000000000000000000008b612e5a565b925092509250858314612512576124f183610fc3565b600180546001600160801b0319166001600160801b03929092169190911790555b84821461254357612522826121ac565b600380546001600160801b0319166001600160801b03929092169190911790555b838114610da55761255381610fc3565b600180546001600160801b03928316600160801b02921691909117905550505050505050565b6125816140c8565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e083015260025404821661010082015260045490916101208301916126799116612ea1565b81526003546001600160801b03600160801b91829004811660208401526004546040909301926126ab92900416612ea1565b905292915050565b60008060008060006126c486612f17565b91509150806126db57506000958695509350505050565b6126e88660a0015161125f565b6126f187613237565b836126ff896000015161125f565b6127099190614406565b6127139190614406565b61271d919061429b565b9250505060008112156127365750600093849350915050565b9360019350915050565b60008061275188888888888861329b565b9092509050806114425761144260006119dc565b600082600019048411830215820261277c57600080fd5b50910281810615159190040190565b6000816000036127a45750670de0b6b3a764000061090e565b826000036127b45750600061090e565b60006127bf8361125f565b905060006127d46127cf8661125f565b613365565b90508181026127eb670de0b6b3a76400008261442e565b90506120a18161358b565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016128455750476128d0565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156128a9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906128cd9190614319565b90505b601254610ac19084908361214f565b6000806000836128ee8661125f565b6128f8919061429b565b90506000811215612910576000809250925050610b9a565b946001945092505050565b60008183116122955782610ac1565b60008060008460a001511261294757505060808201516001610b9a565b60008460a00151612957906143a5565b9050600061299385876101000151886000015160e00151670de0b6b3a7640000612981919061421e565b89516060810151608090910151613720565b935090508215806129a2575080155b156129b557600080935093505050610b9a565b60006129c1838361216d565b9050670de0b6b3a764000081116129fd5780670de0b6b3a76400000394506129f68760c0015186610eb390919063ffffffff16565b9450612a0c565b60008094509450505050610b9a565b8660800151851115612a2b578660800151600194509450505050610b9a565b506001925050509250929050565b600080612a6f8460c001518560e00151866101000151876000015160a00151612a618861125f565b612a6a906143a5565b6137cc565b87516040810192909252602082019290925291909152905080612a9657600091505061090e565b6000612aa585600001516126b3565b9250905081612ab95760009250505061090e565b84602001518110612acf5760009250505061090e565b600085606001518660400151612ae591906141b7565b9050612b008287602001518361214f9092919063ffffffff16565b6120a1908261421e565b60008084606001518560400151612b2191906141b7565b60208601516060870151919250600091612b3b918461214f565b90508560a00151600003612b52579150610ac19050565b60005b6004811015612e5057612b68828661291b565b91506000612b918860c001518960e001518a61010001518b6000015160a00151612a618861125f565b8b516040810192909252602082019290925291909152905080612bbb576000945050505050610ac1565b6000612bca89600001516138e4565b9050612bd7898287613914565b15612be3575050612e50565b60008960a001511315612d4757885180516020820151604083015160a084015160e0909401518d94600094612c3d9490939092909190612c2b90670de0b6b3a764000061421e565b87516060810151608090910151613980565b9450905083612c56576000975050505050505050610ac1565b808260a0015110612d4457612c6a82613a6c565b909650935083612c84576000975050505050505050610ac1565b612ca98260c001518360e00151846101000151856000015160a00151612a618b61125f565b85516040810192909252602082019290925291909152935083612cd6576000975050505050505050610ac1565b815180516020820151604083015160a0909301518e5160e00151612d08949190612c2b90670de0b6b3a764000061421e565b9450905083612d21576000975050505050505050610ac1565b8a60a001518111612d3b5785975050505050505050610ac1565b50505050612b55565b50505b6000612d588a8a8c60a00151613b42565b93509050821580612d715750670de0b6b3a76400008110155b15612d855760009650505050505050610ac1565b80670de0b6b3a76400000390506000612db26122f38c604001518d602001516119c790919063ffffffff16565b612dbf6122f3858a610eb3565b612dc9919061429b565b90506000811315612df357612de2876114158385611b69565b612dec90876141b7565b9550612e41565b6000811215612e38576000612e0d886114158581866143a5565b905086811015612e21578087039650612e32565b600098505050505050505050610ac1565b50612e41565b50505050612e50565b84600101945050505050612b55565b5095945050505050565b600080600080612e6d89898989896137cc565b9296509094509250905080612e9557604051635044b7f560e01b815260040160405180910390fd5b50955095509592505050565b600080670de0b6b3a7640000612eb561051b565b612ebf9190614302565b9050808311612ecf576000612ed9565b612ed9818461421e565b9150610ac1612f10670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000614302565b8390611b69565b6000806000612f3c6122f3856101600151866101400151610eb390919063ffffffff16565b612f5c6122f38661012001518761010001516119c790919063ffffffff16565b612f66919061429b565b9050600080612f7d866000015187602001516128df565b9150915080612f9457506000958695509350505050565b60008313156130d55760008390506000612fe2886000015189602001518a604001518b60a001518c60e00151670de0b6b3a7640000612fd3919061421e565b8d606001518e60800151613980565b9350905082612ffb575060009788975095505050505050565b818110613099576000613035858a60400151858c60e00151670de0b6b3a7640000613026919061421e565b8d606001518e6080015161329b565b945090508315801561304a57508860c0015183105b156130615750600098600198509650505050505050565b8361307757506000988998509650505050505050565b6130808161125f565b613089906143a5565b9960019950975050505050505050565b60008860200151126130c1576130b88860a00151856122f3919061421e565b61196b906143a5565b60a088015188516130b8916122f39161421e565b60008312156132285760006130e9846143a5565b9050600061311d8489604001518a60e00151670de0b6b3a764000061310e919061421e565b8b606001518c60800151613720565b9350905082613136575060009788975095505050505050565b8181106131bb576000613170858a60400151858c60e00151670de0b6b3a7640000613161919061421e565b8d606001518e60800151613e9c565b945090508315801561318557508860c0015183105b1561319c5750600098600198509650505050505050565b836131b257506000988998509650505050505050565b6130898161125f565b60006131ed858a604001518b60e00151670de0b6b3a76400006131de919061421e565b8c606001518d60800151613f73565b945090508361320757506000988998509650505050505050565b61308961321e8a606001518486611415919061421e565b6122f390836141b7565b50600095600195509350505050565b600061326a6122f3836101200151670de0b6b3a7640000613258919061421e565b60608501516101008601519190612765565b6120e56122f3846101600151670de0b6b3a7640000613289919061421e565b6060860151610140870151919061214f565b60008060006132ad8989888888614022565b90506132bd86611a11898b6141b7565b9750878110156132d457600080925092505061335a565b8781036132e2818688612765565b9050670de0b6b3a764000081106133165761330f613308670de0b6b3a76400008961216d565b829061278b565b905061332e565b61332b613308670de0b6b3a764000089611b69565b90505b613338818661216d565b9050808a10156133505760008093509350505061335a565b8903925060019150505b965096945050505050565b60008082136133875760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f1982019061340a9084901c61125f565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e1982136135a657506000919050565b680755bf798b4a1bf1e582126135cf576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b0181810595509293509091906120a174029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c61125f565b60008060006137328888888888614022565b9050600061375d670de0b6b3a764000061374c8888611b69565b61375691906141b7565b839061216d565b9050670de0b6b3a7640000811061378a57613783613308670de0b6b3a76400008961216d565b90506137a2565b61379f613308670de0b6b3a764000089611b69565b90505b808810156137b8576000809350935050506137c2565b8703925060019150505b9550959350505050565b600080600080846000036137eb575087925086915085905060016138d8565b6000856137f78b61125f565b6138019190614406565b905061380c8761125f565b811215613827576000806000809450945094509450506138d8565b80945060008912613847576138406122f3868b8d61214f565b935061386a565b61385e6122f36138568b6143a5565b87908d612765565b613867906143a5565b93505b6000806138778c8c6128df565b91509150806138965760008060008096509650965096505050506138d8565b60006138a288886128df565b92509050816138c2576000806000809750975097509750505050506138d8565b6138cd8b828561214f565b955060019450505050505b95509550955095915050565b60008060006138f2846126b3565b9150915080611fdd57604051635516328b60e11b815260040160405180910390fd5b6020830151600090613926908461216d565b6040850151613936908490611b69565b10158015610abe57506020840151613966908461395f633b9aca00670de0b6b3a76400006141b7565b919061214f565b604085015161397690849061216d565b1115949350505050565b60008060008812156139a257613995886143a5565b61399f90876141b7565b95505b60006139ae8a8a611fbc565b905060006139bf828a898989614051565b905060006139dc6139d489611a11898d6119c7565b889088612765565b9050808210156139f55760008094509450505050613a60565b808203670de0b6b3a76400008110613a2357613a1c613308670de0b6b3a76400008b611b69565b9050613a3b565b613a38613308670de0b6b3a76400008b61216d565b90505b8a811015613a53576000809550955050505050613a60565b8a90039450600193505050505b97509795505050505050565b60008060008360e0015113613a8657506000928392509050565b6000613a958460000151613237565b90506000613ac1856040015186606001518760400151613ab591906141b7565b60208801519190612765565b905060008212613ae85780821015613adb57819003613afe565b5060009485945092505050565b613af1826143a5565b613afb90826141b7565b90505b60e085015160c0860151613b13918390612765565b9050808560c001511015613b2e575060009485945092505050565b808560c00151036001935093505050915091565b6000806000808412613b6657855160400151613b5f9085906141b7565b9050613ba1565b6000613b71856143a5565b875160400151909150811015613b91578651604001518190039150613b9f565b600080935093505050611e0a565b505b855180516020909101516000918291613bba91906128df565b9150915080613bd25760008094509450505050611e0a565b875160e0810151604090910151600091613c0791613bfb91613bf4919061278b565b8a90610eb3565b6101008b01519061216d565b895160e0810151608090910151613c3291613c2691611a119088610eb3565b8b51606001519061216d565b613c3c91906141b7565b90506000613c74613c68613c618c6000015160e001518861278b90919063ffffffff16565b8b906119c7565b6101008c015190611b69565b905080821015613c8f57600080965096505050505050611e0a565b80820391506000613cd1858c60000151604001518d6000015160e00151670de0b6b3a7640000613cbf919061421e565b8e516060810151608090910151614022565b90506000613cfb8c6000015160e00151670de0b6b3a7640000613cf4919061421e565b889061278b565b905080821015613d18576000809850985050505050505050611e0a565b8b51608081015160609091015191830391613d34918391612765565b9050670de0b6b3a76400008110613d78578b5160e00151613d719061330890613d6590670de0b6b3a764000061421e565b8e5160e001519061216d565b9050613da7565b8b5160e00151613da49061330890613d9890670de0b6b3a764000061421e565b8e5160e0015190611b69565b90505b8b5160600151613dba9085908390612765565b935083670de0b6b3a76400001115613dde5783670de0b6b3a7640000039350613df2565b600060019850985050505050505050611e0a565b60008c60e0015112613e545760c08c015160e08d0151613e119161216d565b9250670de0b6b3a76400008310613e35576000809850985050505050505050611e0a565b670de0b6b3a76400009290920391613e4d8484610eb3565b9350613e89565b613e86613e6d8d60c001518e60e00151611415906143a5565b613e7f90670de0b6b3a76400006141b7565b8590610eb3565b93505b50919a60019a5098505050505050505050565b6000806000613eae8989888888614022565b905086881015613ec557600080925092505061335a565b9686900396613ed4888761278b565b975087811015613eeb57600080925092505061335a565b878103613ef9818688612765565b9050670de0b6b3a76400008110613f2657613f1f613308670de0b6b3a76400008961216d565b9050613f3e565b613f3b613308670de0b6b3a764000089611b69565b90505b613f48818661216d565b905089811015613f605760008093509350505061335a565b9890980398600198509650505050505050565b6000806000613f858888888888614051565b90506000613fa9670de0b6b3a7640000613f9f888861216d565b612f1091906141b7565b9050670de0b6b3a76400008110613fd657613fcf613308670de0b6b3a764000089611b69565b9050613fee565b613feb613308670de0b6b3a76400008961216d565b90505b613ff88186611b69565b905088811015614010576000809350935050506137c2565b97909703976001975095505050505050565b600061402e858561278b565b61404761403f86611a11868b6119c7565b859085612765565b6120a191906141b7565b600061405d858561278b565b61404761406e86611a11868b610eb3565b85908561214f565b60405180610120016040528061408a6140c8565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000806000806080858703121561413f57600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561416b57600080fd5b85016060818803121561417d57600080fd5b939692955090935050565b60006020828403121561419a57600080fd5b5035919050565b634e487b7160e01b600052601160045260246000fd5b8082018082111561090e5761090e6141a1565b6000602082840312156141dc57600080fd5b81356001600160a01b0381168114610ac157600080fd5b80151581146100a257600080fd5b60006020828403121561421357600080fd5b8135610ac1816141f3565b8181038181111561090e5761090e6141a1565b634e487b7160e01b600052601260045260246000fd5b60008261425657614256614231565b500690565b6001600160701b03818116838216019080821115611fdd57611fdd6141a1565b6001600160801b03818116838216019080821115611fdd57611fdd6141a1565b8181036000831280158383131683831282161715611fdd57611fdd6141a1565b6000808335601e198436030181126142d257600080fd5b83018035915067ffffffffffffffff8211156142ed57600080fd5b602001915036819003821315610b9a57600080fd5b808202811582820484141761090e5761090e6141a1565b60006020828403121561432b57600080fd5b5051919050565b6001600160801b03828116828216039080821115611fdd57611fdd6141a1565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561090e5761090e6141a1565b600081600f0b60016001607f1b0319810361439c5761439c6141a1565b60000392915050565b6000600160ff1b82016143ba576143ba6141a1565b5060000390565b60208101600483106143e357634e487b7160e01b600052602160045260246000fd5b91905290565b6000602082840312156143fb57600080fd5b8151610ac1816141f3565b8082018281126000831280158216821582161715614426576144266141a1565b505092915050565b60008261443d5761443d614231565b600160ff1b821460001984141615614457576144576141a1565b50059056fea2646970667358221220e2c32dc1bdc0333fe12c2160a6d3e4476a49dfaf929003b66e1ef833992240d264736f6c63430008140033";
        readonly sourceMap: "14659:174:135:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;2220:314:41;;;;;;:::i;:::-;;:::i;:::-;;;;785:25:234;;;841:2;826:18;;819:34;;;;758:18;2220:314:41;;;;;;;2690:99;;;;;;;;;;-1:-1:-1;2690:99:41;;;;;:::i;:::-;;:::i;:::-;;2220:314;2413:7;2422;2460:67;2471:11;2484;2497:19;2518:8;2460:10;:67::i;:::-;2441:86;;;;2220:314;;;;;;;;:::o;2690:99::-;2754:28;2766:15;2754:11;:28::i;:::-;2690:99;:::o;1957:4443:117:-;2168:7;2177;2356:21:169;:19;:21::i;:::-;9562::112;;::::1;::::0;::::1;;;9558:85;;;9606:26;;-1:-1:-1::0;;;9606:26:112::1;;;;;;;;;;;9558:85;2246:20:117::2;:18;:20::i;:::-;2331:23;2345:8;2331:13;:23::i;:::-;2493:25;2479:11;:39;2475:115;;;2541:38;;-1:-1:-1::0;;;2541:38:117::2;;;;;;;;;;;2475:115;2916:23;2942:21;:19;:21::i;:::-;2916:47;;2995:19;2977:15;:37;2973:106;;;3037:31;;-1:-1:-1::0;;;3037:31:117::2;;;;;;;;;;;2973:106;3088:24;3115:19;:17;:19::i;:::-;3088:46;;3144:27;3174:85;3204:16;3234:15;3174:16;:85::i;:::-;3144:115:::0;-1:-1:-1;3498:20:117::2;3521:36;3540:17;3521:16:::0;:36:::2;:::i;:::-;3498:59;;3581:19;3614:26:::0;3654::::2;3693:132;3730:11;3759:15;3792:19;3693;:132::i;:::-;3567:258;;;;;;3904:18;3878:22;;:44;;;;;;;:::i;:::-;::::0;;;-1:-1:-1;4556:15:117::2;::::0;-1:-1:-1;4574:110:117::2;4612:11:::0;4637:15;4666:8;4574:24:::2;:110::i;:::-;4556:128;;4712:7;4698:11;:21;4694:84;;;4742:25;;-1:-1:-1::0;;;4742:25:117::2;;;;;;;;;;;4694:84;4787:27;4796:7;4805:8;4787;:27::i;:::-;;;5042:137;5071:11;5096:18;5128:15;5157:12;5042:15;:137::i;:::-;5238:15;5256:98;5291:27;5332:12;5256:21;:98::i;:::-;5238:116;;5364:18;5385:11;5364:32;;5437:48;5443:7;5452:8;:20;;;;;;;;;;:::i;:::-;5474:10;5437:5;:48::i;:::-;5562:18:::0;5648:15;5743:8;5822:7;5789:19:::2;;::::0;::::2;5743:8:::0;5789:19:::2;:::i;:::-;-1:-1:-1::0;;;;;5766:586:117::2;;5843:12;5869:11;5910:67;5942:7;5951:16;5969:7;5910:31;:67::i;:::-;6015:14;::::0;;;::::2;::::0;::::2;;:::i;:::-;6220:98;6288:16;6243:18;6221:19;:40;;;;:::i;:::-;6220:50:::0;::::2;:98::i;:::-;5766:586;::::0;;2385:25:234;;;2441:2;2426:18;;2419:34;;;;2469:18;;;2462:34;;;;2539:14;2532:22;2527:2;2512:18;;2505:50;2586:3;2571:19;;2564:35;2630:3;2615:19;;2608:35;;;2372:3;2357:19;5766:586:117::2;;;;;;;-1:-1:-1::0;6371:12:117;;-1:-1:-1;6385:7:117;;-1:-1:-1;;;;;;;;;;;2398:20:169;1713:1;2924:7;:21;2744:208;1347:1644:113;2356:21:169;:19;:21::i;:::-;1494:29:113::1;::::0;;;:12:::1;:29;::::0;;;;:45;-1:-1:-1;;;;;1494:45:113::1;:50:::0;;1560:7:::1;1490:87;1756:24;1783:19;:17;:19::i;:::-;1756:46:::0;-1:-1:-1;1829:37:113::1;1847:19;1829:15:::0;:37:::1;:::i;:::-;:42:::0;::::1;::::0;:92:::1;;;1906:15;1887:16;:34;1829:92;1812:187;;;1953:35;;-1:-1:-1::0;;;1953:35:113::1;;;;;;;;;;;1812:187;2264:16;2245:15;:35:::0;2241:744:::1;;2296:57;2313:16;2331:21;:19;:21::i;:::-;2296:16;:57::i;:::-;;2241:744;;;2421:15:::0;2384:591:::1;2532:30;2565:18:::0;;;:12:::1;:18;::::0;;;;:55;-1:-1:-1;;;;;2565:55:113::1;2642:24:::0;;::::1;:55:::0;::::1;;;-1:-1:-1::0;2670:27:113;;2642:55:::1;2638:148;;;2746:21;:19;:21::i;:::-;2721:46;;2638:148;2807:27:::0;;2803:158:::1;;2858:57;2875:15;2892:22;2858:16;:57::i;:::-;;2937:5;;;2803:158;-1:-1:-1::0;2472:27:113::1;2480:19;2472:27:::0;::::1;:::i;:::-;;;2384:591;;;;2241:744;1415:1576;2387:1:169;2398:20:::0;1713:1;2924:7;:21;2744:208;2431:307;1755:1;2558:7;;:18;2554:86;;2599:30;;-1:-1:-1;;;2599:30:169;;;;;;;;;;;2554:86;1755:1;2714:7;:17;2431:307::o;7513:174:135:-;7588:10;-1:-1:-1;;;;;7580:26:135;129:42:120;7580:26:135;;;;:43;;;7622:1;7610:9;:13;7580:43;7576:105;;;7646:24;;-1:-1:-1;;;7646:24:135;;;;;;;;;;;7576:105;7513:174::o;8216:221:112:-;8360:1;8328:20;;;;:8;:20;:::i;:::-;-1:-1:-1;;;;;8328:34:112;;8324:107;;8385:35;;-1:-1:-1;;;8385:35:112;;;;;;;;;;;5594:150;5672:23;5718:19;193:4:122;5718:14:112;:19::i;:::-;5711:26;;5594:150;:::o;11561:223::-;11637:24;11739:37;11757:19;11739:15;:37;:::i;:::-;11708:69;;:15;:69;:::i;3253:7270:113:-;3379:7;3511:51;;;:12;:51;;;;;3589:27;;-1:-1:-1;;;;;3589:27:113;:32;;;:81;;;3655:15;3637;:33;3589:81;3572:168;;;3702:27;-1:-1:-1;;;;;3702:27:113;;-1:-1:-1;3695:34:113;;3572:168;3832:28;:16;:26;:28::i;:::-;3802:58;;-1:-1:-1;;;;;;3802:58:113;-1:-1:-1;;;;;3802:58:113;;;;;;;3947:40;3970:16;3947:22;:40::i;:::-;-1:-1:-1;4451:27:113;;-1:-1:-1;4481:12:113;4451:27;4507:35;4525:17;4507:15;:35;:::i;:::-;4481:71;;;;;;;;;;;-1:-1:-1;4481:71:113;;;:87;-1:-1:-1;;;;;4481:87:113;;-1:-1:-1;4601:101:113;4636:27;4677:15;4601:21;:101::i;:::-;4712:27;4742:26;;;:12;:26;;;;;;4578:124;;-1:-1:-1;4812:23:113;;4808:2275;;-1:-1:-1;5026:4:113;5189:21;;5266:190;5313:19;5354:16;5392:19;5189:21;5266:25;:190::i;:::-;5171:285;;;;5496:13;5470:22;;:39;;;;;;;:::i;:::-;;;;-1:-1:-1;5523:238:113;;-1:-1:-1;5557:19:113;5594:1;5613:13;5644:24;5613:13;5644:22;:24::i;:::-;5732:15;5523:16;:238::i;:::-;5995:30;6012:13;5995:30;;:::i;:::-;;;6423:254;6482:19;6519:13;6550:19;6587:16;6621;6655:8;6423:41;:254::i;:::-;6407:270;-1:-1:-1;6912:85:113;:56;6407:270;6951:16;6912:38;:56::i;:::-;:83;:85::i;:::-;6877:31;:120;;:31;;:120;;;;;;;-1:-1:-1;;;;;6877:120:113;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;6877:120:113;;;;;-1:-1:-1;;;;;6877:120:113;;;;;;7047:25;:13;:23;:25::i;:::-;7011:32;:61;;:32;;:61;;;;-1:-1:-1;;;7011:61:113;;-1:-1:-1;;;;;7011:61:113;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;7011:61:113;;;;;-1:-1:-1;;;;;7011:61:113;;;;;;4837:2246;;4808:2275;7201:19;7223:100;7258:26;7298:15;7223:21;:100::i;:::-;7333:26;7362:25;;;:12;:25;;;;;;7201:122;;-1:-1:-1;7401:22:113;;7397:1597;;7613:4;7595:22;;7775:21;7814;7852:188;7899:18;7939:16;7977:19;8018:4;7852:25;:188::i;:::-;7757:283;;;;8080:13;8054:22;;:39;;;;;;;:::i;:::-;;;;-1:-1:-1;8132:15:113;;-1:-1:-1;8191:235:113;8224:18;8107:22;8279:13;8310:24;8279:13;8310:22;:24::i;:::-;8398:14;8191:15;:235::i;:::-;8560:30;8577:13;8560:30;;:::i;:::-;;-1:-1:-1;8823:85:113;:56;8560:30;8862:16;8823:38;:56::i;:85::-;8788:31;:120;;:31;;:120;;;;;;;-1:-1:-1;;;;;8788:120:113;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;8788:120:113;;;;;-1:-1:-1;;;;;8788:120:113;;;;;;8958:25;:13;:23;:25::i;:::-;8922:32;:61;;:32;;:61;;;;-1:-1:-1;;;8922:61:113;;-1:-1:-1;;;;;8922:61:113;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;8922:61:113;;;;;-1:-1:-1;;;;;8922:61:113;;;;;;7425:1569;;;7397:1597;9145:15;9141:701;;;9365:132;9434:30;:19;:28;:30::i;:::-;9402:29;:18;:27;:29::i;:::-;:62;;;;:::i;:::-;9482:1;9365:19;:132::i;:::-;9788:43;9814:16;9788:25;:43::i;:::-;;9141:701;10221:20;10247:44;10274:16;10247:26;:44::i;:::-;-1:-1:-1;10306:176:113;;;3739:25:234;;;3795:2;3780:18;;3773:34;;;3823:18;;;3816:34;;;3881:2;3866:18;;3859:34;;;10220:71:113;;-1:-1:-1;10336:15:113;;10306:176;;3726:3:234;3711:19;10306:176:113;;;;;;;10500:16;10493:23;;;;;;;;;;3253:7270;;;;;:::o;19644:4007:117:-;19840:19;19873:26;19913;20201:239;20248:25;:23;:25::i;:::-;20287:12;:25;-1:-1:-1;;;20287:25:117;;-1:-1:-1;;;;;20287:25:117;20326:11;20351:12;20377:16;20407:23;20201:33;:239::i;:::-;20180:260;-1:-1:-1;20769:11:117;20724:42;20180:260;20749:16;20724:24;:42::i;:::-;:56;20720:213;;;20796:126;20852:56;20796:38;:126::i;:::-;21095:16;21121:26;21157:17;21177:184;21224:25;:23;:25::i;:::-;21263:12;:25;-1:-1:-1;;;21263:25:117;;-1:-1:-1;;;;;21263:25:117;21302:23;21339:12;21177:33;:184::i;:::-;21157:204;;21561:179;21599:11;193:4:122;21691:9:117;21714:16;21561:24;:179::i;:::-;-1:-1:-1;21524:216:117;;-1:-1:-1;21524:216:117;;-1:-1:-1;22413:29:117;;-1:-1:-1;21524:216:117;;22413:29;:::i;:::-;22391:51;;;;:::i;:::-;;-1:-1:-1;23031:542:117;23556:16;23031:505;23101:11;23325:39;23346:18;22391:51;23325:39;:::i;:::-;23382:20;23420:42;:16;23382:20;23420;:42::i;:::-;23480:16;23514:8;23031:52;:505::i;:::-;:524;;:542::i;:::-;23017:556;-1:-1:-1;23625:18:117;;-1:-1:-1;;;19644:4007:117;;;;;;;:::o;34231:393:112:-;34400:7;34423:15;;;;;;;;:::i;:::-;34419:199;;;-1:-1:-1;34461:7:112;34454:14;;34419:199;34574:33;:7;34590:16;34574:15;:33::i;:::-;34567:40;;34419:199;34231:393;;;;;:::o;1926:1509::-;2040:20;;;2206:15;;;;;;;;:::i;:::-;2202:812;;;2306:91;2340:7;2365:18;;;;:8;:18;:::i;:::-;2306:16;:91::i;:::-;2281:116;;-1:-1:-1;2281:116:112;-1:-1:-1;2202:812:112;;;-1:-1:-1;2553:9:112;2623:47;2642:7;2651:18;;;;:8;:18;:::i;:::-;2623;:47::i;:::-;2996:7;2981:22;;2202:812;3086:21;:19;:21::i;:::-;3068:39;-1:-1:-1;3184:10:112;;3180:200;;3229:45;;3211:12;;3237:10;;3262:6;;3211:12;3229:45;3211:12;3229:45;3262:6;3237:10;3229:45;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3210:64;;;3293:7;3288:82;;3327:28;;-1:-1:-1;;;3327:28:112;;;;;;;;;;;3288:82;3196:184;3180:200;3390:38;1926:1509;;;;;;:::o;13794:3622:117:-;14138:12;:26;-1:-1:-1;;;;;14138:26:117;14178:35;;;14174:192;;;14229:126;14285:56;14229:38;:126::i;:::-;14910:28;;14399:36;;;;;14955:21;;14815:137;;14399:36;;14910:28;;14815:46;:137::i;:::-;:161;14798:395;;;15001:181;15057:111;15001:38;:181::i;:::-;15428:30;;15307:311;;:286;;-1:-1:-1;;;15428:30:117;;-1:-1:-1;;;;;15428:30:117;15476:19;193:4:122;15476:13:117;:19;:::i;:::-;15328:37;;-1:-1:-1;;;15328:37:117;;-1:-1:-1;;;;;15328:37:117;;;15546:11;15575:4;15307:103;:286::i;:::-;:309;:311::i;:::-;15267:37;:351;;-1:-1:-1;;;;;15267:351:117;;;-1:-1:-1;;;15267:351:117;;;;;;;;;15941:25;:13;:23;:25::i;:::-;15912:12;:54;;-1:-1:-1;;;;;;15912:54:117;-1:-1:-1;;;;;15912:54:117;;;;;;;;;;16005:23;:11;:21;:23::i;:::-;15976:12;:52;;:25;;:52;;;;-1:-1:-1;;;15976:52:117;;-1:-1:-1;;;;;15976:52:117;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;15976:52:117;;;;;-1:-1:-1;;;;;15976:52:117;;;;;;16072:23;:11;:21;:23::i;:::-;16038:30;:57;;:30;;:57;;;;-1:-1:-1;;;16038:57:117;;-1:-1:-1;;;;;16038:57:117;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;16038:57:117;;;;;-1:-1:-1;;;;;16038:57:117;;;;;;16251:21;16275:30;16291:13;16275:15;:30::i;:::-;16251:54;;16315:110;16348:14;16393:22;:11;:20;:22::i;:::-;16376:39;;:14;:39;:::i;:::-;16315:19;:110::i;:::-;16842:28;16853:16;16842:10;:28::i;:::-;16837:186;;16886:126;16942:56;16886:38;:126::i;:::-;17256:12;17271:43;17297:16;17271:25;:43::i;:::-;17256:58;;17329:7;17324:86;;17359:40;;-1:-1:-1;;;17359:40:117;;;;;;;;;;;17324:86;13965:3451;;;13794:3622;;;;:::o;1198:469:119:-;1309:10;-1:-1:-1;;;;;1401:10:119;:89;1384:179;;;1522:30;;-1:-1:-1;;;1522:30:119;;;;;;;;;;;1384:179;-1:-1:-1;1624:4:119;1620:18;;;;1617:34;;1198:469::o;5934:316:116:-;6051:19;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;6051:23:116;;;;;;;;;:33;;6078:6;;6051:19;:33;;6078:6;;6051:33;:::i;:::-;;;;-1:-1:-1;;6094:21:116;;;;:12;:21;;;;;:31;;6119:6;;6094:21;:31;;6119:6;;6094:31;:::i;:::-;;;;-1:-1:-1;;6184:59:116;;;785:25:234;;;841:2;826:18;;819:34;;;-1:-1:-1;;;;;6184:59:116;;;6219:1;;6199:10;;6184:59;;758:18:234;6184:59:116;;;;;;;5934:316;;;:::o;33531:405:112:-;33707:7;33730:15;;;;;;;;:::i;:::-;33726:204;;;33841:33;:7;33857:16;33841:15;:33::i;33726:204::-;-1:-1:-1;33912:7:112;33905:14;;1610:118:122;1672:7;1699:21;1710:1;1713;193:4;1699:10;:21::i;7848:460:135:-;7940:7;;-1:-1:-1;;8055:10:135;-1:-1:-1;;;;;8047:26:135;;8043:162;;-1:-1:-1;8098:21:135;8043:162;;;8159:35;;-1:-1:-1;;;8159:35:135;;8188:4;8159:35;;;4959:51:234;8159:10:135;-1:-1:-1;;;;;8159:20:135;;;;4932:18:234;;8159:35:135;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;8150:44;;8043:162;8234:11;;8249:1;8234:16;:67;;8300:1;8234:67;;;8285:11;;8253:44;;:12;;8277:6;;8253:23;:44::i;884:190:125:-;937:9;-1:-1:-1;;;964:1:125;:12;958:86;;1000:33;;-1:-1:-1;;;1000:33:125;;;;;;;;;;;958:86;-1:-1:-1;1065:1:125;884:190::o;21722:2511:112:-;22081:32;;21828:26;;;;22043:80;;:16;;-1:-1:-1;;;22081:32:112;;-1:-1:-1;;;;;22081:32:112;22043:24;:80::i;:::-;22154:31;;;;;-1:-1:-1;;;;;22154:31:112;;-1:-1:-1;22022:101:112;-1:-1:-1;22328:39:112;;;22324:1903;;;22533:22;22558:39;22579:18;22558;:39;:::i;:::-;22533:64;-1:-1:-1;22870:84:112;:55;22533:64;22908:16;22870:37;:55::i;:84::-;22834:32;:120;;:32;;:120;;;;-1:-1:-1;;;22834:120:112;;-1:-1:-1;;;;;22834:120:112;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;22834:120:112;;;;;-1:-1:-1;;;;;22834:120:112;;;;;;23253:28;23284:70;23324:16;23284:14;:22;;:70;;;;:::i;:::-;23253:101;-1:-1:-1;23368:36:112;23407:80;23253:101;23453:20;23407:28;:80::i;:::-;23368:119;;23527:28;23501:22;;:54;;;;;;;:::i;:::-;;;;-1:-1:-1;23832:52:112;;-1:-1:-1;23856:28:112;23832:52;;:::i;:::-;;;23928:32;:20;:30;:32::i;:::-;23898:12;:62;;:26;;:62;;;;-1:-1:-1;;;;;23898:62:112;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;23898:62:112;;;;;-1:-1:-1;;;;;23898:62:112;;;;;;24006:31;:20;:29;:31::i;:::-;23974:28;:63;;:28;;:63;;;;;;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;23974:63:112;;;;;;;-1:-1:-1;;;;;23974:63:112;;;;;;24198:18;24177:39;;22369:1858;;;22324:1903;21722:2511;;;:::o;11087:2398:113:-;11274:21;;11680:37;:11;11700:16;11680:19;:37::i;:::-;11664:53;-1:-1:-1;11727:15:113;11745:31;11664:53;11767:8;11745:21;:31::i;:::-;11727:49;-1:-1:-1;11802:33:113;11727:49;11818:16;11802:15;:33::i;:::-;11786:49;;12262:7;12258:557;;;12302:23;12312:13;12302:7;:23;:::i;:::-;12285:40;;;;:::i;:::-;;;12258:557;;;12781:23;12791:13;12781:7;:23;:::i;:::-;12764:40;;;;:::i;:::-;;;12258:557;13033:20;13014:16;:39;13010:469;;;13148:110;:13;13190:16;13224:20;13148:24;:110::i;:::-;13132:126;-1:-1:-1;13358:110:113;:13;13400:16;13434:20;13358:24;:110::i;:::-;13342:126;;13010:469;11320:2165;11087:2398;;;;;;;:::o;2001:204:125:-;2053:8;-1:-1:-1;;;;;2079:1:125;:30;;2073:103;;2133:32;;-1:-1:-1;;;2133:32:125;;;;;;;;;;;17905:1127:117;18207:30;;-1:-1:-1;;;18207:30:117;;-1:-1:-1;;;;;18207:30:117;18287:300;:275;18207:30;18444:19;193:4:122;18444:13:117;:19;:::i;:::-;18308:37;;-1:-1:-1;;;18308:37:117;;-1:-1:-1;;;;;18308:37:117;;;18514:11;18543:5;18287:103;:275::i;:300::-;18247:37;:340;;-1:-1:-1;;;;;18247:340:117;;;-1:-1:-1;;;18247:340:117;;;;;;;;;18730:23;:11;:21;:23::i;:::-;18697:56;;:18;:56;:::i;:::-;18652:30;:101;;-1:-1:-1;;;;;18652:101:117;;;-1:-1:-1;;;18652:101:117;;;;;;;;;18851:31;:19;:29;:31::i;:::-;18821:12;:61;;:26;;:61;;;;-1:-1:-1;;;;;18821:61:117;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;18821:61:117;;;;;-1:-1:-1;;;;;18821:61:117;;;;;;18924:32;:21;:30;:32::i;:::-;18892:28;:64;;:28;;:64;;;;;;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;18892:64:117;;;;;;;-1:-1:-1;;;;;18892:64:117;;;;;;18995:30;:18;:28;:30::i;:::-;18966:12;:59;;:25;;:59;;;;-1:-1:-1;;;18966:59:117;;-1:-1:-1;;;;;18966:59:117;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;18966:59:117;;;;;-1:-1:-1;;;;;18966:59:117;;;;;;18117:915;17905:1127;;;;;:::o;14667:1674:123:-;14928:21;;15394:119;15496:16;15394:80;:11;15430:21;15453:20;15394:35;:80::i;:::-;:101;;:119::i;:::-;15373:140;-1:-1:-1;15764:50:123;:11;15787:8;15797:16;15764:22;:50::i;:::-;15750:64;;;;:::i;:::-;;;16130:12;16117:10;:25;16113:191;;;16267:12;16254:10;:25;16238:41;;16113:191;16314:20;14667:1674;;;;;;;;:::o;527:190:125:-;580:9;-1:-1:-1;;;607:1:125;:12;601:86;;643:33;;-1:-1:-1;;;643:33:125;;;;;;;;;;;14268:3167:115;14652:12;:26;-1:-1:-1;;;;;14652:26:115;14705:35;;;;:110;;-1:-1:-1;14794:21:115;14756:35;14772:19;14756:13;:35;:::i;:::-;:59;14705:110;14688:289;;;14840:126;14896:56;14840:38;:126::i;:::-;15539:28;;15010:36;;;;;15539:28;;15577:40;15596:21;15539:28;15577:40;:::i;:::-;;;15677:21;15644:30;:19;:28;:30::i;:::-;:54;:230;;;;;15853:21;15714:124;15778:13;15809:15;15714:46;:124::i;:::-;:160;15644:230;15627:464;;;15899:181;15955:111;15899:38;:181::i;:::-;16178:29;;-1:-1:-1;;;16178:29:115;;-1:-1:-1;;;;;16178:29:115;16256:297;:272;16178:29;16410:19;193:4:122;16410:13:115;:19;:::i;:::-;16277:36;;-1:-1:-1;;;;;16277:36:115;;16256:272;16480:11;16509:5;16256:102;:272::i;:297::-;16217:36;:336;;-1:-1:-1;;;;;;16217:336:115;-1:-1:-1;;;;;16217:336:115;;;;;;;;;;16615:31;16635:11;16615:31;;:::i;:::-;;;16688:28;:16;:26;:28::i;:::-;16656:29;:60;;-1:-1:-1;;;;;16656:60:115;;;-1:-1:-1;;;16656:60:115;;;;;;;;;17267:25;:13;:23;:25::i;:::-;17238:12;:54;;-1:-1:-1;;;;;;17238:54:115;-1:-1:-1;;;;;17238:54:115;;;;;;;;;;17333:26;:15;:24;:26::i;:::-;17302:28;:57;;-1:-1:-1;;;;;;17302:57:115;-1:-1:-1;;;;;17302:57:115;;;;;;;;;;17398:30;:18;:28;:30::i;:::-;17369:12;:59;;:25;;:59;;;;-1:-1:-1;;;17369:59:115;;-1:-1:-1;;;;;17369:59:115;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;17369:59:115;;;;;-1:-1:-1;;;;;17369:59:115;;;;;;14479:2956;;;14268:3167;;;;;:::o;18678:551:112:-;18982:12;18997:43;19014:14;:7;18982:12;19014:11;:14::i;:::-;18998:13;:6;19009:1;18998:10;:13::i;:::-;:30;;;;:::i;:::-;18997:41;:43::i;:::-;18982:58;;19062:1;19054:5;:9;;;19050:173;;;19079:25;:43;;19116:5;;19079:25;;;:43;;19116:5;;-1:-1:-1;;;;;19079:43:112;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;19079:43:112;;;;;-1:-1:-1;;;;;19079:43:112;;;;;;18747:482;18678:551;;:::o;19050:173::-;19151:1;19143:5;:9;;;19139:84;;;19205:6;19206:5;19205:6;:::i;:::-;19168:25;:44;;:25;;:44;;;;-1:-1:-1;;;;;19168:44:112;;:::i;19139:84::-;18747:482;18678:551;;:::o;21421:1688:114:-;21735:13;:29;-1:-1:-1;;;21514:4:114;21662:70;;;:12;:70;;;;21514:4;;;;21662:102;;-1:-1:-1;;;;;21735:29:114;;21662:102;:::i;:::-;21624:140;;21778:27;21809:1;21778:32;21774:74;;-1:-1:-1;21833:4:114;;21421:1688;-1:-1:-1;;21421:1688:114:o;21774:74::-;21934:12;21949:45;21977:16;21949:27;:45::i;:::-;21934:60;;22008:4;22016:1;22008:9;22004:51;;-1:-1:-1;22040:4:114;;21421:1688;-1:-1:-1;;;21421:1688:114:o;22004:51::-;22235:47;22296:12;22321:149;22373:4;22395:27;22440:16;22321:34;:149::i;:::-;22221:249;;;;22485:7;22480:51;;-1:-1:-1;22515:5:114;;21421:1688;-1:-1:-1;;;;;21421:1688:114:o;22480:51::-;22656:32;22690:21;22715:57;22765:6;22715:49;:57::i;:::-;22655:117;;;;22863:36;:24;:34;:36::i;:::-;22830:13;:69;;:29;;:69;;;;-1:-1:-1;;;;;22830:69:114;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;22830:69:114;;;;;-1:-1:-1;;;;;22830:69:114;;;;;;22935:25;:13;:23;:25::i;:::-;22909:13;:51;;:22;;:51;;;;-1:-1:-1;;;22909:51:114;;-1:-1:-1;;;;;22909:51:114;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;22909:51:114;;;;;-1:-1:-1;;;;;22909:51:114;;;;;;23037:43;23055:24;:13;:22;:24::i;:::-;23054:25;;;:::i;:::-;23037:16;:43::i;:::-;-1:-1:-1;23098:4:114;;21421:1688;-1:-1:-1;;;;;;;21421:1688:114:o;25409:1358:112:-;25508:7;25517:4;25660:26;25688:12;25704:117;25767:40;25790:16;25767:22;:40::i;:::-;25704:45;:117::i;:::-;25659:162;;;;25836:7;25831:56;;-1:-1:-1;25867:1:112;;;;-1:-1:-1;25409:1358:112;-1:-1:-1;;;25409:1358:112:o;25831:56::-;26045:20;26087:1;26068:16;:20;:95;;26162:1;26068:95;;;26103:44;:18;26130:16;26103:26;:44::i;:::-;26309:13;:29;26246:12;:48;;;;26173:21;26197:34;;;;;26045:118;;-1:-1:-1;26173:21:112;-1:-1:-1;;;;;26309:29:112;;;;26197:97;;26246:48;26197:97;:::i;:::-;:141;;;;:::i;:::-;26173:165;;26475:13;26492:1;26475:18;26471:66;;-1:-1:-1;26517:1:112;;;;-1:-1:-1;25409:1358:112;-1:-1:-1;;;;;25409:1358:112:o;26471:66::-;26664:20;26687:35;:12;26708:13;26687:20;:35::i;:::-;26664:58;26755:4;;-1:-1:-1;25409:1358:112;-1:-1:-1;;;;;;;25409:1358:112:o;11965:253::-;12125:12;:26;12169:28;;12023:7;;12061:150;;-1:-1:-1;;;;;12125:26:112;;;;12169:28;;12061:46;:150::i;23940:866:123:-;24201:7;24317:482;24384:23;24425:13;24456:9;24692:18;24698:12;193:4:122;24692:18:123;:::i;:::-;24728:16;24762:23;24317:49;:482::i;:::-;24298:501;23940:866;-1:-1:-1;;;;;;;23940:866:123:o;3190:114:122:-;3250:7;3277:19;3286:1;3289;193:4;3277:8;:19::i;317:182:121:-;485:6;451:41;;-1:-1:-1;;;451:41:121;;;;;;;;:::i;:::-;;;;;;;;3330:531:123;3530:17;3736:118;3841:12;3736:87;:23;3784;3809:13;3736:47;:87::i;:::-;:104;;:118::i;:::-;3724:130;3330:531;-1:-1:-1;;;;;3330:531:123:o;29755:2727:112:-;29988:16;;;;30875:144;30976:24;31002:16;30875:78;30941:11;30875:46;30904:16;30910:10;193:4:122;30904:16:112;:::i;:::-;30875:9;;:28;:46::i;:78::-;:100;:144;:100;:144::i;:::-;30864:155;-1:-1:-1;31307:34:112;30864:155;31324:16;31307;:34::i;:::-;31286:55;-1:-1:-1;31849:12:112;31864:104;31898:30;31904:24;193:4:122;31898:30:112;:::i;:::-;31864:11;;31942:16;31864:20;:104::i;:::-;31849:119;-1:-1:-1;31988:20:112;31849:119;31999:8;31988:10;:20::i;:::-;31978:30;-1:-1:-1;32442:33:112;31978:30;32458:16;32442:15;:33::i;:::-;32409:66;;:18;:66;:::i;:::-;32376:99;;30128:2354;29755:2727;;;;;;;;;:::o;15264:104:122:-;15322:7;15352:1;15348;:5;:13;;15360:1;15348:13;;;-1:-1:-1;15356:1:122;;15264:104;-1:-1:-1;15264:104:122:o;11517:1660:123:-;11776:21;;12239:115;12337:16;12239:78;:11;12273:21;12296:20;12239:33;:78::i;:::-;:97;;:115::i;:::-;12218:136;-1:-1:-1;12602:48:123;:11;12623:8;12633:16;12602:20;:48::i;1884:164:122:-;1946:7;1973:21;1984:1;193:4;1992:1;1973:10;:21::i;2054:1483:135:-;2176:7;;;-1:-1:-1;;2289:10:135;-1:-1:-1;;;;;2281:26:135;;2277:162;;-1:-1:-1;2332:21:135;2277:162;;;2393:35;;-1:-1:-1;;;2393:35:135;;2422:4;2393:35;;;4959:51:234;2393:10:135;-1:-1:-1;;;;;2393:20:135;;;;4932:18:234;;2393:35:135;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2384:44;;2277:162;2595:4;2580:12;-1:-1:-1;;2645:10:135;-1:-1:-1;;;;;2637:26:135;;2633:365;;2695:11;2683:9;:23;2679:97;;;2733:28;;-1:-1:-1;;;2733:28:135;;;;;;;;;;;2679:97;2798:23;2810:11;2798:9;:23;:::i;:::-;2789:32;;2633:365;;;2862:125;;-1:-1:-1;;;2862:125:135;;2903:10;2862:125;;;6762:34:234;2939:4:135;6812:18:234;;;6805:43;6864:18;;;6857:34;;;2862:10:135;-1:-1:-1;;;;;2862:23:135;;;;6697:18:234;;2862:125:135;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2852:135;;2633:365;3012:7;3007:74;;3042:28;;-1:-1:-1;;;3042:28:135;;;;;;;;;;;3007:74;3216:11;;3231:1;3216:16;3212:319;;3262:44;:11;3282:23;3262:19;:44::i;:::-;3248:11;:58;;;;-1:-1:-1;3341:6:135;-1:-1:-1;3320:28:135;;-1:-1:-1;;3320:28:135;3212:319;3422:11;;3379:17;;3399:43;;:11;;3435:6;3399:22;:43::i;:::-;3379:63;;3471:9;3456:11;;:24;;;;;;;:::i;:::-;;;;-1:-1:-1;3502:9:135;;-1:-1:-1;3513:6:135;;-1:-1:-1;3494:26:135;;-1:-1:-1;;;3494:26:135;2054:1483;;;;;;;:::o;3655:1226::-;3834:18;3855:28;3870:12;3855:14;:28::i;:::-;3834:49;;4019:11;;4034:1;4019:16;4015:221;;4065:43;:10;4084:23;4065:18;:43::i;:::-;4051:11;:57;4015:221;;;4139:17;4159:28;4176:10;4159:16;:28::i;:::-;4139:48;;4216:9;4201:11;;:24;;;;;;;:::i;:::-;;;;-1:-1:-1;;;4015:221:135;4392:4;4377:12;-1:-1:-1;;4442:10:135;-1:-1:-1;;;;;4434:26:135;;4430:362;;4492:10;4480:9;:22;4476:96;;;4529:28;;-1:-1:-1;;;4529:28:135;;;;;;;;;;;4476:96;4594:22;4606:10;4594:9;:22;:::i;:::-;4585:31;;4430:362;;;4657:124;;-1:-1:-1;;;4657:124:135;;4698:10;4657:124;;;6762:34:234;4734:4:135;6812:18:234;;;6805:43;6864:18;;;6857:34;;;4657:10:135;-1:-1:-1;;;;;4657:23:135;;;;6697:18:234;;4657:124:135;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;4647:134;;4430:362;4806:7;4801:74;;4836:28;;-1:-1:-1;;;4836:28:135;;;;;;;;;;;4801:74;3771:1110;;;3655:1226;;;:::o;6050:574:123:-;6185:30;6227:12;6285:103;6334:14;6362:16;6285:35;:103::i;:::-;6249:139;;-1:-1:-1;6249:139:123;-1:-1:-1;6249:139:123;6398:220;;6426:181;6482:111;6426:38;:181::i;:::-;6217:407;6050:574;;;;:::o;12712:2102:122:-;12906:15;13006:12;13022:1;13006:17;13002:63;;-1:-1:-1;13046:8:122;13039:15;;13002:63;13323:9;13319:1489;;;13420:154;13529:27;13544:12;13529;:27;:::i;:::-;13470:28;:12;13491:6;13470:20;:28::i;:::-;13421:30;:12;13442:8;13421:20;:30::i;:::-;:77;;;;:::i;13420:154::-;13410:164;-1:-1:-1;13921:18:122;13942:20;:6;13953:8;13942:10;:20::i;:::-;13921:41;-1:-1:-1;13976:18:122;13997:20;:6;14008:8;13997:10;:20::i;:::-;13976:41;;14045:10;14035:7;:20;14031:164;;;14085:10;14075:20;;14031:164;;;14130:10;14120:7;:20;14116:79;;;14170:10;14160:20;;14116:79;13334:871;;13319:1489;;;14504:12;14488;:28;14484:75;;-1:-1:-1;14543:1:122;14536:8;;14484:75;14645:152;14752:27;14767:12;14752;:27;:::i;:::-;14695:26;:12;14714:6;14695:18;:26::i;:::-;14646:30;:12;14667:8;14646:20;:30::i;:::-;:75;;;;:::i;14645:152::-;14635:162;12712:2102;-1:-1:-1;;;;;;12712:2102:122:o;12556:675:112:-;12641:6;13046:178;:12;:167;13076:123;13119:27;13168:13;13076:21;:123::i;:::-;13046:167;;;;;;;;;;;;:176;:178::i;:::-;12912:119;:12;:108;12942:64;12964:26;12992:13;12942:21;:64::i;12912:119::-;:312;;;;:::i;18131:376::-;18200:4;18455:45;:21;18483:16;18455:27;:45::i;:::-;18411:25;;:89;;;-1:-1:-1;;;;;18411:25:112;:89;:::i;:::-;18342:12;:26;18334:61;;-1:-1:-1;;;;;18342:26:112;18378:16;18334:43;:61::i;:::-;:166;;;18131:376;-1:-1:-1;;18131:376:112:o;898:556:122:-;1014:9;1279:1;-1:-1:-1;;1262:19:122;1259:1;1256:26;1253:1;1249:34;1242:42;1229:11;1225:60;1198:146;;1328:1;1325;1318:12;1198:146;-1:-1:-1;1415:9:122;;1411:27;;898:556::o;3462:114::-;3522:7;3549:19;3558:1;193:4;3566:1;3549:8;:19::i;1240:212:125:-;1292:8;-1:-1:-1;;;;;1318:30:125;;;1312:103;;1372:32;;-1:-1:-1;;;1372:32:125;;;;;;;;;;;1616:219;1667:8;-1:-1:-1;;;;;;1693:21:125;;;;;:46;;-1:-1:-1;;;;;;1718:21:125;;;1693:46;1687:119;;1763:32;;-1:-1:-1;;;1763:32:125;;;;;;;;;;;15815:101:122;15871:6;15900:1;15896;:5;:13;;15908:1;15896:13;;24513:558:112;24734:25;;24613:18;;;;24726:80;;-1:-1:-1;;;;;24734:25:112;24780:16;24726:40;:80::i;:::-;24703:103;-1:-1:-1;24849:36:112;24864:21;24703:103;24849:36;:::i;:::-;24820:12;:26;-1:-1:-1;;;;;24820:26:112;:65;24816:222;;;24930:12;:26;25006:21;;24930:57;;24975:12;;-1:-1:-1;;;;;24930:26:112;:57;:::i;:::-;:97;;;;:::i;24816:222::-;25047:17;24513:558;;;:::o;13522:1887::-;13722:47;;:::i;:::-;13771:12;13954:63;14020:70;14060:16;14020:22;:70::i;:::-;13954:136;;14100:28;14172:74;14218:18;14172:32;:74::i;:::-;14138:108;-1:-1:-1;14138:108:112;-1:-1:-1;14138:108:112;14256:61;;-1:-1:-1;14300:5:112;;-1:-1:-1;14284:22:112;;-1:-1:-1;14284:22:112;14256:61;14464:20;14638:152;:124;14717:18;:44;;;14638:18;:53;;;:78;;:124;;;;:::i;:::-;:150;:152::i;:::-;14487:136;:112;14555:18;:43;;;14487:18;:48;;;:67;;:112;;;;:::i;:136::-;:303;;;;:::i;:::-;14809:569;;;;;;;;;;;;;;;;;;;-1:-1:-1;14986:34:112;;:12;:34;;;;14809:569;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;15195:32:112;;14809:569;;;;15266:34;;;14809:569;;;;15336:31;;;;14809:569;;;;-1:-1:-1;14809:569:112;;15398:4;;-1:-1:-1;13522:1887:112;-1:-1:-1;13522:1887:112:o;22927:3408:124:-;23046:7;23055;23361:38;23401:12;23417:173;23498:7;:29;;;23545:7;:31;;;23417:63;:173::i;:::-;23360:230;;;;23605:7;23600:52;;-1:-1:-1;23636:1:124;;;;-1:-1:-1;22927:3408:124;-1:-1:-1;;;22927:3408:124:o;23600:52::-;23661:29;23735:109;23783:7;23804:30;23735:34;:109::i;:::-;23700:144;-1:-1:-1;23700:144:124;-1:-1:-1;23858:8:124;;;:38;;-1:-1:-1;23870:26:124;;23858:38;23854:82;;;-1:-1:-1;23920:1:124;;;;-1:-1:-1;22927:3408:124;-1:-1:-1;;;;22927:3408:124:o;23854:82::-;24224:32;24259:131;24330:7;24355:21;24259:53;:131::i;:::-;24224:166;;24527:24;24555:1;24527:29;24523:743;;-1:-1:-1;24580:1:124;;;;-1:-1:-1;22927:3408:124;-1:-1:-1;;;;;22927:3408:124:o;24523:743::-;24861:7;:35;;;24833:24;:63;24816:450;;24929:24;24955:21;;-1:-1:-1;22927:3408:124;-1:-1:-1;;;;22927:3408:124:o;24816:450::-;-1:-1:-1;25220:35:124;;;;25525:21;25549:152;25605:7;25626:30;25670:21;25549:42;:152::i;:::-;25525:176;;25715:13;25732:1;25715:18;25711:62;;-1:-1:-1;25757:1:124;;;;-1:-1:-1;22927:3408:124;-1:-1:-1;;;;;;22927:3408:124:o;25711:62::-;26107:21;26090:13;:38;26086:82;;-1:-1:-1;26152:1:124;;;;-1:-1:-1;22927:3408:124;-1:-1:-1;;;;;;22927:3408:124:o;26086:82::-;26288:24;;26314:13;;-1:-1:-1;22927:3408:124;-1:-1:-1;;;;;22927:3408:124:o;23286:1121:114:-;23427:12;:26;23489:28;;-1:-1:-1;;;;;23427:26:114;;;;23489:28;;;;;;-1:-1:-1;;;23551:25:114;;;23402:22;;;23725:218;23427:26;23489:28;23551:25;23871:21;23910:19;23725:31;:218::i;:::-;23586:357;;;;;;24018:14;23994:20;:38;23990:130;;24077:32;:20;:30;:32::i;:::-;24048:12;:61;;-1:-1:-1;;;;;;24048:61:114;-1:-1:-1;;;;;24048:61:114;;;;;;;;;;23990:130;24159:16;24133:22;:42;24129:137;;24222:33;:22;:31;:33::i;:::-;24191:28;:64;;-1:-1:-1;;;;;;24191:64:114;-1:-1:-1;;;;;24191:64:114;;;;;;;;;;24129:137;24302:13;24279:19;:36;24275:126;;24359:31;:19;:29;:31::i;:::-;24331:12;:59;;-1:-1:-1;;;;;24331:59:114;;;-1:-1:-1;;;24331:59:114;;;;;;;;;23349:1058;;;;;;23286:1121;:::o;15602:1035:112:-;15697:39;;:::i;:::-;15757:873;;;;;;;;15812:12;:26;-1:-1:-1;;;;;15812:26:112;;;15757:873;;15869:28;;;;15757:873;;;;-1:-1:-1;;;15925:25:112;;;;;;15757:873;;;;;;;;;;;;;16035:23;15757:873;;;;16094:21;15757:873;;;;16155:25;15757:873;;;;16207:12;15757:873;;;;15869:28;16251:29;;;;15812:26;15757:873;;;16367:36;;15757:873;;;;;;16320:97;;16367:36;16320:29;:97::i;:::-;15757:873;;16450:30;;-1:-1:-1;;;;;;;;16450:30:112;;;;;;15757:873;;;;16568:37;;15757:873;;;;;16521:98;;16568:37;;;16521:29;:98::i;:::-;15757:873;;15748:882;15602:1035;-1:-1:-1;;15602:1035:112:o;8818:1173:124:-;8925:7;8934:4;9311:19;9355:20;9377:12;9393:65;9437:7;9393:26;:65::i;:::-;9354:104;;;;9477:7;9472:64;;-1:-1:-1;9512:1:124;;;;-1:-1:-1;8818:1173:124;-1:-1:-1;;;;8818:1173:124:o;9472:64::-;9712:39;:7;:28;;;:37;:39::i;:::-;9663:30;9685:7;9663:21;:30::i;:::-;9631:13;9580:32;:7;:21;;;:30;:32::i;:::-;:64;;;;:::i;:::-;:113;;;;:::i;:::-;:171;;;;:::i;:::-;9549:202;;9340:422;;9893:1;9878:12;:16;9874:64;;;-1:-1:-1;9918:1:124;;;;-1:-1:-1;8818:1173:124;-1:-1:-1;;8818:1173:124:o;9874:64::-;9964:12;9979:4;;-1:-1:-1;8818:1173:124;-1:-1:-1;;8818:1173:124:o;10452:583:126:-;10642:14;10668:12;10710:141;10762:2;10778:1;10793:2;10809:1;10824;10839:2;10710:38;:141::i;:::-;10690:161;;-1:-1:-1;10690:161:126;-1:-1:-1;10690:161:126;10861:168;;10889:129;10945:59;10889:38;:129::i;2284:748:122:-;2398:9;2663:1;-1:-1:-1;;2646:19:122;2643:1;2640:26;2637:1;2633:34;2626:42;2613:11;2609:60;2582:146;;2712:1;2709;2702:12;2582:146;-1:-1:-1;2979:9:122;;2926:27;;;2923:34;;2975:27;;;2902:114;;2284:748::o;3811:844::-;3869:7;3935:1;3940;3935:6;3931:47;;-1:-1:-1;193:4:122;3957:10;;3931:47;4031:1;4036;4031:6;4027:45;;-1:-1:-1;4060:1:122;4053:8;;4027:45;4210:15;4228:12;:1;:10;:12::i;:::-;4210:30;;4402:10;4415:16;4418:12;:1;:10;:12::i;:::-;4415:2;:16::i;:::-;4402:29;-1:-1:-1;4509:18:122;;;4546:19;193:4;4509:18;4546:19;:::i;:::-;;;4638:9;4642:4;4638:3;:9::i;8468:425:135:-;8561:7;;-1:-1:-1;;8676:10:135;-1:-1:-1;;;;;8668:26:135;;8664:162;;-1:-1:-1;8719:21:135;8664:162;;;8780:35;;-1:-1:-1;;;8780:35:135;;8809:4;8780:35;;;4959:51:234;8780:10:135;-1:-1:-1;;;;;8780:20:135;;;;4932:18:234;;8780:35:135;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;8771:44;;8664:162;8866:11;;8843:43;;:11;;8879:6;8843:22;:43::i;7273:398:123:-;7412:7;7421:4;7437:29;7509:16;7469:25;:14;:23;:25::i;:::-;:56;;;;:::i;:::-;7437:88;;7564:1;7539:22;:26;7535:74;;;7589:1;7592:5;7581:17;;;;;;;7535:74;7634:22;7659:4;;-1:-1:-1;7273:398:123;-1:-1:-1;;;7273:398:123:o;14987:104:122:-;15045:7;15075:1;15071;:5;:13;;15083:1;15071:13;;46936:3239:124;47109:29;47140:12;47329:1;47304:7;:21;;;:26;47300:84;;-1:-1:-1;;47354:12:124;;;;47368:4;47346:27;;47300:84;47393:21;47426:7;:21;;;47425:22;;;:::i;:::-;47393:55;;47697:21;47755:316;47811:31;47856:7;:28;;;47904:7;:26;;;:38;;;193:4:122;47898:44:124;;;;:::i;:::-;47956:26;;:42;;;;48012:49;;;;;47755:42;:316::i;:::-;47728:343;-1:-1:-1;47728:343:124;-1:-1:-1;48085:8:124;;;:30;;-1:-1:-1;48097:18:124;;48085:30;48081:78;;;48139:1;48142:5;48131:17;;;;;;;;48081:78;49182:24;49209:34;:13;49229;49209:19;:34::i;:::-;49182:61;;193:4:122;49426:16:124;:23;49422:453;;49523:16;193:4:122;49517:22:124;49493:46;;49591:90;49638:7;:29;;;49591:21;:29;;:90;;;;:::i;:::-;49567:114;;49422:453;;;49855:1;49858:5;49847:17;;;;;;;;;49422:453;50057:7;:12;;;50033:21;:36;50029:94;;;50093:7;:12;;;50107:4;50085:27;;;;;;;;;50029:94;-1:-1:-1;50163:4:124;;-1:-1:-1;;;46936:3239:124;;;;;:::o;27196:2209::-;27376:7;27475:12;27694:274;27736:7;:29;;;27779:7;:31;;;27824:7;:28;;;27866:7;:26;;;:47;;;27928:30;:19;:28;:30::i;:::-;27927:31;;;:::i;:::-;27694:28;:274::i;:::-;27511:26;;27621:39;;;27497:471;;;;27565:42;;;27497:471;;;;;;;;;-1:-1:-1;27497:471:124;27978:167;;28133:1;28126:8;;;;;27978:167;28154:26;28222:75;28261:7;:26;;;28222:25;:75::i;:::-;28190:107;-1:-1:-1;28190:107:124;-1:-1:-1;28190:107:124;28307:167;;28462:1;28455:8;;;;;;28307:167;28808:7;:28;;;28786:18;:50;28782:89;;28859:1;28852:8;;;;;;28782:89;29120:21;29186:7;:35;;;29144:7;:27;;;:77;;;;:::i;:::-;29120:101;;29278:120;29320:18;29356:7;:28;;;29278:13;:24;;:120;;;;;:::i;:::-;29250:148;;:13;:148;:::i;30287:10343::-;30508:7;30569:21;30635:7;:35;;;30593:7;:27;;;:77;;;;:::i;:::-;31228:28;;;;31168:35;;;;30569:101;;-1:-1:-1;31144:21:124;;31168:125;;30569:101;31168:46;:125::i;:::-;31144:149;;31406:7;:21;;;31431:1;31406:26;31402:77;;31455:13;-1:-1:-1;31448:20:124;;-1:-1:-1;31448:20:124;31402:77;31842:9;31837:8756;871:1;31857;:33;31837:8756;;;32065:41;:13;32083:22;32065:17;:41::i;:::-;32049:57;;32239:12;32482:292;32528:7;:29;;;32575:7;:31;;;32624:7;:28;;;32670:7;:26;;;:47;;;32736:24;:13;:22;:24::i;32482:292::-;32283:26;;32401:39;;;32265:509;;;;32341:42;;;32265:509;;;;;;;;;-1:-1:-1;32265:509:124;32788:268;;33040:1;33033:8;;;;;;;;32788:268;33069:20;33092:79;33131:7;:26;;;33092:21;:79::i;:::-;33069:102;;33276:167;33349:7;33378:12;33412:13;33276:51;:167::i;:::-;33255:241;;;33476:5;;;;33255:241;33746:1;33722:7;:21;;;:25;33718:4509;;;34135:25;;:39;;34200:41;;;;34267:38;;;;34331:46;;;;34409:37;;;;;33931:7;;33888:40;;34046:563;;34135:39;;34200:41;;34267:38;;34331:46;34403:43;;193:4:122;34403:43:124;:::i;:::-;34472:25;;:41;;;;34539:48;;;;;34046:63;:563::i;:::-;34019:590;-1:-1:-1;34019:590:124;-1:-1:-1;34019:590:124;34627:289;;34896:1;34889:8;;;;;;;;;;;34627:289;35127:13;35102:6;:20;;;35094:46;35090:3123;;35408:115;35495:6;35408:61;:115::i;:::-;35311:212;;-1:-1:-1;35311:212:124;-1:-1:-1;35311:212:124;35545:200;;35721:1;35714:8;;;;;;;;;;;35545:200;36157:336;36211:6;:28;;;36265:6;:30;;;36321:6;:27;;;36374:6;:25;;;:46;;;36447:24;:13;:22;:24::i;36157:336::-;35929:25;;36061:38;;;35903:590;;;;35994:41;;;35903:590;;;;;;;;;-1:-1:-1;35903:590:124;36515:200;;36691:1;36684:8;;;;;;;;;;;36515:200;36860:25;;:39;;36929:41;;;;37000:38;;;;37068:46;;;;;37150:26;;:38;;;36763:600;;37000:38;37068:46;37144:44;;193:4:122;37144:44:124;:::i;36763:600::-;36736:627;-1:-1:-1;36736:627:124;-1:-1:-1;36736:627:124;37385:200;;37561:1;37554:8;;;;;;;;;;;37385:200;37908:7;:21;;;37883:13;:47;37879:316;;37965:13;37958:20;;;;;;;;;;;37879:316;38164:8;;;;31837:8756;;37879:316;33749:4478;;33718:4509;38503:18;38605:176;38672:7;38697:31;38746:7;:21;;;38605:49;:176::i;:::-;38535:246;-1:-1:-1;38535:246:124;-1:-1:-1;38799:8:124;;;:29;;;193:4:122;38811:10:124;:17;;38799:29;38795:189;;;38968:1;38961:8;;;;;;;;;;38795:189;39044:10;193:4:122;39038:16:124;39025:29;;39356:12;39436:137;:105;39513:7;:27;;;39436:7;:49;;;:76;;:105;;;;:::i;:137::-;39371:46;:35;:12;39392:13;39371:20;:35::i;:46::-;:202;;;;:::i;:::-;39356:217;;39599:1;39591:5;:9;39587:893;;;39764:57;39807:13;39764:34;39772:5;39787:10;39764:22;:34::i;:57::-;39728:93;;:13;:93;:::i;:::-;39692:129;;39587:893;;;39854:1;39846:5;:9;39842:638;;;39947:14;39964:96;40029:13;39964:35;39988:10;39964:35;39973:5;39972:6;:::i;39964:96::-;39947:113;;40091:13;40082:6;:22;40078:344;;;40196:6;40180:13;:22;40164:38;;40078:344;;;40402:1;40395:8;;;;;;;;;;;;40078:344;39857:579;39842:638;;;40460:5;;;;;;39842:638;40565:3;;;;;31894:8699;;;;31837:8756;;;-1:-1:-1;40610:13:124;30287:10343;-1:-1:-1;;;;;30287:10343:124:o;1782:813::-;2053:21;2088:22;2124:20;2169:12;2307:191;2349:14;2377:16;2407:13;2434:21;2469:19;2307:28;:191::i;:::-;2191:307;;-1:-1:-1;2191:307:124;;-1:-1:-1;2191:307:124;-1:-1:-1;2191:307:124;-1:-1:-1;2191:307:124;2508:81;;2543:35;;-1:-1:-1;;;2543:35:124;;;;;;;;;;;2508:81;2159:436;1782:813;;;;;;;;;:::o;10998:450:112:-;11097:21;11130:24;193:4:122;11157:19:112;:17;:19::i;:::-;:25;;;;:::i;:::-;11130:52;;11224:16;11208:13;:32;:95;;11302:1;11208:95;;;11255:32;11271:16;11255:13;:32;:::i;:::-;11192:111;-1:-1:-1;11395:46:112;11417:23;193:4:122;11417:17:112;:23;:::i;:::-;11395:13;;:21;:46::i;10319:9443:124:-;10427:6;10435:4;11237:23;11392:130;:102;11460:7;:33;;;11392:7;:42;;;:67;;:102;;;;:::i;:130::-;11263:114;:90;11320:7;:32;;;11263:7;:37;;;:56;;:90;;;;:::i;:114::-;:259;;;;:::i;:::-;11237:285;;11533:30;11565:12;11581:157;11662:7;:21;;;11701:7;:23;;;11581:63;:157::i;:::-;11532:206;;;;11753:7;11748:160;;-1:-1:-1;11888:1:124;;;;-1:-1:-1;10319:9443:124;-1:-1:-1;;;;10319:9443:124:o;11748:160::-;12157:1;12138:16;:20;12134:7595;;;12174:25;12210:16;12174:53;;12415:21;12477:401;12558:7;:21;;;12601:7;:23;;;12646:7;:20;;;12688:7;:28;;;12744:7;:19;;;193:4:122;12738:25:124;;;;:::i;:::-;12785:7;:23;;;12830:7;:30;;;12477:59;:401::i;:::-;12450:428;-1:-1:-1;12450:428:124;-1:-1:-1;12450:428:124;12892:176;;-1:-1:-1;13044:1:124;;;;-1:-1:-1;10319:9443:124;-1:-1:-1;;;;;;10319:9443:124:o;12892:176::-;13245:17;13228:13;:34;13224:2891;;13536:21;13602:389;13702:22;13750:7;:20;;;13796:17;13845:7;:19;;;193:4:122;13839:25:124;;;;:::i;:::-;13890:7;:23;;;13939:7;:30;;;13602:74;:389::i;:::-;13575:416;-1:-1:-1;13575:416:124;-1:-1:-1;14297:8:124;;:84;;;;;14349:7;:32;;;14329:17;:52;14297:84;14272:335;;;-1:-1:-1;14430:1:124;;14433:4;;-1:-1:-1;10319:9443:124;-1:-1:-1;;;;;;;10319:9443:124:o;14272:335::-;14540:7;14535:72;;-1:-1:-1;14579:1:124;;;;-1:-1:-1;10319:9443:124;-1:-1:-1;;;;;;;10319:9443:124:o;14535:72::-;14634:24;:13;:22;:24::i;:::-;14633:25;;;:::i;:::-;14625:40;14660:4;;-1:-1:-1;10319:9443:124;-1:-1:-1;;;;;;;;10319:9443:124:o;13224:2891::-;15350:1;15323:7;:23;;;:28;15319:782;;15409:95;15435:7;:28;;;15410:22;:53;;;;:::i;15409:95::-;15408:96;;;:::i;15319:782::-;15961:28;;;;15937:21;;15936:94;;15937:52;;;:::i;12134:7595::-;16240:1;16221:16;:20;16217:3512;;;16257:25;16293:17;16294:16;16293:17;:::i;:::-;16257:54;;16428:21;16490:307;16571:22;16615:7;:20;;;16663:7;:19;;;193:4:122;16657:25:124;;;;:::i;:::-;16704:7;:23;;;16749:7;:30;;;16490:59;:307::i;:::-;16463:334;-1:-1:-1;16463:334:124;-1:-1:-1;16463:334:124;16811:64;;-1:-1:-1;16851:1:124;;;;-1:-1:-1;10319:9443:124;-1:-1:-1;;;;;;10319:9443:124:o;16811:64::-;17052:17;17035:13;:34;17031:2688;;17344:21;17410:387;17508:22;17556:7;:20;;;17602:17;17651:7;:19;;;193:4:122;17645:25:124;;;;:::i;:::-;17696:7;:23;;;17745:7;:30;;;17410:72;:387::i;:::-;17383:414;-1:-1:-1;17383:414:124;-1:-1:-1;18103:8:124;;:84;;;;;18155:7;:32;;;18135:17;:52;18103:84;18078:335;;;-1:-1:-1;18236:1:124;;18239:4;;-1:-1:-1;10319:9443:124;-1:-1:-1;;;;;;;10319:9443:124:o;18078:335::-;18346:7;18341:72;;-1:-1:-1;18385:1:124;;;;-1:-1:-1;10319:9443:124;-1:-1:-1;;;;;;;10319:9443:124:o;18341:72::-;18439:24;:13;:22;:24::i;17031:2688::-;18797:23;18867:335;18956:22;19004:7;:20;;;19056:7;:19;;;193:4:122;19050:25:124;;;;:::i;:::-;19101:7;:23;;;19150:7;:30;;;18867:63;:335::i;:::-;18838:364;-1:-1:-1;18838:364:124;-1:-1:-1;18838:364:124;19220:72;;-1:-1:-1;19264:1:124;;;;-1:-1:-1;10319:9443:124;-1:-1:-1;;;;;;;10319:9443:124:o;19220:72::-;19483:177;19526:122;19599:7;:23;;;19547:13;19527:17;:33;;;;:::i;19526:122::-;19484:164;;:15;:164;:::i;16217:3512::-;-1:-1:-1;19747:1:124;;19750:4;;-1:-1:-1;10319:9443:124;-1:-1:-1;;;;10319:9443:124:o;20009:1167::-;20112:6;20970:199;20988:156;21049:7;:32;;;193:4:122;21043:38:124;;;;:::i;:::-;21103:23;;;;20988:24;;;;;:156;:33;:156::i;20970:199::-;20752:203;20770:160;20834:7;:33;;;193:4:122;20828:39:124;;;;:::i;:::-;20889:23;;;;20770:25;;;;;:160;:36;:160::i;11709:1515:126:-;11903:7;11912:4;12066:9;12078:20;12082:2;12086:1;12089;12092;12095:2;12078:3;:20::i;:::-;12066:32;-1:-1:-1;12141:15:126;12154:1;12142:6;12146:2;12142:1;:6;:::i;12141:15::-;12137:19;;12238:1;12234;:5;12230:53;;;12263:1;12266:5;12255:17;;;;;;;12230:53;12487:5;;;12517:18;12487:5;12529:2;12533:1;12517:11;:18::i;:::-;12512:23;;193:4:122;12549:2:126;:9;12545:263;;12648:20;12655:12;193:4:122;12665:1:126;12655:9;:12::i;:::-;12648:2;;:6;:20::i;:::-;12643:25;;12545:263;;;12775:22;12782:14;193:4:122;12794:1:126;12782:11;:14::i;12775:22::-;12770:27;;12545:263;12890:12;:2;12899;12890:8;:12::i;:::-;12885:17;;13027:2;13022;:7;13018:55;;;13053:1;13056:5;13045:17;;;;;;;;13018:55;13193:7;;;-1:-1:-1;13202:4:126;;-1:-1:-1;;11709:1515:126;;;;;;;;;;:::o;8508:3846:122:-;8553:8;8606:1;8601;:6;8597:80;;8634:28;;-1:-1:-1;;;8634:28:122;;;;;;;;;;;8597:80;-1:-1:-1;;;;;;9286:41:122;-1:-1:-1;9283:1:122;9279:49;9386:9;;;9366:18;9363:33;9360:1;9356:41;9350:48;9448:9;;;9436:10;9433:25;9430:1;9426:33;9420:40;9506:9;;;9498:6;9495:21;9492:1;9488:29;9482:36;9562:9;;;9556:4;9553:19;9550:1;9546:27;;;9540:34;;;9617:9;;;9612:3;9609:18;9606:1;9602:26;9596:33;9672:9;;;9664:18;;;9661:1;9657:26;;;9651:33;;;9720:9;;;9712:18;;;9706:25;9902:3;:7;;;9872:2;9902:7;9888:22;;;;;-1:-1:-1;;9868:6:122;;;9928:30;;9929:17;;;9928:28;:30::i;:::-;10733:31;10729:35;;10784:5;;10191:2;10783:13;;;10800:32;10782:50;10852:5;;10851:13;;10868:33;10850:51;10921:5;;10920:13;;10937:33;10919:51;10990:5;;10989:13;;11006:33;10988:51;11059:5;;11058:13;;11075:32;11057:50;11127:5;;11126:13;;11143:30;11125:48;10130:31;10126:35;;10181:5;;10180:13;;10197:32;10179:50;10249:5;;10248:13;;10265:32;10247:50;10317:5;;10316:13;;-1:-1:-1;;10315:50:122;10385:5;;10384:13;;-1:-1:-1;;10383:50:122;10453:5;;10452:13;;;-1:-1:-1;;10451:50:122;10519:5;;;-1:-1:-1;;10519:46:122;11514:10;11904:43;11899:48;12027:71;:91;;;;12006:112;12191:72;12186:77;12334:3;12328:9;;;-1:-1:-1;;8508:3846:122:o;4907:3302::-;4953:8;-1:-1:-1;;5130:1:122;:26;5126:40;;-1:-1:-1;5165:1:122;;4907:3302;-1:-1:-1;4907:3302:122:o;5126:40::-;5365:21;5360:1;:26;5356:87;;5411:32;;-1:-1:-1;;;5411:32:122;;;;;;;;;;;5356:87;5716:7;5710:2;5705:7;;;5704:19;;-1:-1:-1;6052:8:122;6136:2;6076:29;6065:7;;;6064:41;-1:-1:-1;;;6064:51:122;6063:75;;6164:29;6160:33;;6156:37;;;;-1:-1:-1;;6835:35:122;;6890:5;;6470:2;6889:13;;;6906:32;6888:50;6958:5;;6957:13;;-1:-1:-1;;6956:51:122;7027:5;;7026:13;;7043:34;7025:52;7097:5;;7096:13;;-1:-1:-1;;7095:53:122;7168:5;;7167:13;;7184:35;7166:53;6476:32;6409:31;6405:35;;6460:5;;6459:13;;6458:50;;;6533:5;;;-1:-1:-1;;6533:40:122;6593:5;;6592:13;;;6609:35;6591:53;6662:5;;-1:-1:-1;;;6662:50:122;7584:10;;;;-1:-1:-1;6063:75:122;;-1:-1:-1;6458:50:122;;6662;8063:129;8094:49;8065:78;;8172:3;:7;;;8064:116;8063:127;:129::i;15892:1050:126:-;16055:7;16064:4;16276:9;16288:20;16292:2;16296:1;16299;16302;16305:2;16288:3;:20::i;:::-;16276:32;-1:-1:-1;16318:16:126;16337:28;193:4:122;16345:13:126;:1;16355:2;16345:9;:13::i;:::-;:19;;;;:::i;:::-;16337:1;;:7;:28::i;:::-;16318:47;;193:4:122;16379:8:126;:15;16375:293;;16490:26;16503:12;193:4:122;16513:1:126;16503:9;:12::i;16490:26::-;16479:37;;16375:293;;;16629:28;16642:14;193:4:122;16654:1:126;16642:11;:14::i;16629:28::-;16618:39;;16375:293;16813:8;16809:1;:12;16805:60;;;16845:1;16848:5;16837:17;;;;;;;;16805:60;16906:12;;;-1:-1:-1;16920:4:126;;-1:-1:-1;;15892:1050:126;;;;;;;;;:::o;3400:3557:124:-;3675:21;3710:22;3746:20;3780:4;3919:19;3942:1;3919:24;3915:117;;-1:-1:-1;3967:14:124;;-1:-1:-1;3983:16:124;;-1:-1:-1;4001:13:124;;-1:-1:-1;4016:4:124;3959:62;;3915:117;4201:21;4253:19;4225:25;:14;:23;:25::i;:::-;:47;;;;:::i;:::-;4201:71;;4303:32;:21;:30;:32::i;:::-;4286:14;:49;4282:103;;;4359:1;4362;4365;4368:5;4351:23;;;;;;;;;;;4282:103;4418:14;4394:39;;5008:1;4988:16;:21;4984:497;;5121:112;:84;:13;5171:16;5190:14;5121:41;:84::i;:112::-;5103:130;;4984:497;;;5359:111;:83;5407:17;5408:16;5407:17;:::i;:::-;5359:13;;5427:14;5359:39;:83::i;:111::-;5358:112;;;:::i;:::-;5340:130;;4984:497;6183:33;6218:12;6234:143;6315:14;6347:16;6234:63;:143::i;:::-;6182:195;;;;6392:7;6387:62;;6423:1;6426;6429;6432:5;6415:23;;;;;;;;;;;;;6387:62;6458:30;6534:141;6615:13;6646:15;6534:63;:141::i;:::-;6498:177;-1:-1:-1;6498:177:124;-1:-1:-1;6498:177:124;6685:62;;6721:1;6724;6727;6730:5;6713:23;;;;;;;;;;;;;;6685:62;6771:109;:13;6809:22;6845:25;6771:24;:109::i;:::-;6756:124;-1:-1:-1;6945:4:124;;-1:-1:-1;;;;;3400:3557:124;;;;;;;;;;;:::o;7782:341::-;7885:7;7905:20;7927:12;7943:56;7982:7;7943:25;:56::i;:::-;7904:95;;;;8014:7;8009:79;;8044:33;;-1:-1:-1;;;8044:33:124;;;;;;;;;;;44905:1269;45532:28;;;;45109:4;;45532:50;;45567:14;45532:34;:50::i;:::-;45422:27;;;;45400:50;;:13;;:21;:50::i;:::-;:182;;:767;;;;-1:-1:-1;46093:28:124;;;;46028:139;;46139:14;46029:34;1037:3;193:4:122;46029:34:124;:::i;:::-;46028:47;:139;:47;:139::i;:::-;45916:27;;;;45896:48;;:13;;:19;:48::i;:::-;:271;;45125:1042;44905:1269;-1:-1:-1;;;;44905:1269:124:o;17581:1971:126:-;17786:7;17795:4;18092:1;18085:4;:8;18081:67;;;18131:5;18132:4;18131:5;:::i;:::-;18116:21;;:4;:21;:::i;:::-;18109:28;;18081:67;18643:10;18656:55;18703:1;18706:4;18656:46;:55::i;:::-;18643:68;;18721:9;18733:22;18739:2;18743:1;18746;18749;18752:2;18733:5;:22::i;:::-;18721:34;-1:-1:-1;18765:11:126;18779:37;18790:21;18809:1;18790:14;:2;18799:4;18790:8;:14::i;:21::-;18779:1;;18813:2;18779:10;:37::i;:::-;18765:51;;18834:3;18830:1;:7;18826:55;;;18861:1;18864:5;18853:17;;;;;;;;;18826:55;18951:7;;;193:4:122;18982:15:126;;18978:295;;19096:28;19109:14;193:4:122;19121:1:126;19109:11;:14::i;19096:28::-;19085:39;;18978:295;;;19236:26;19249:12;193:4:122;19259:1:126;19249:9;:12::i;19236:26::-;19225:37;;18978:295;19430:1;19419:8;:12;19415:60;;;19455:1;19458:5;19447:17;;;;;;;;;;19415:60;19516:12;;;;-1:-1:-1;19530:4:126;;-1:-1:-1;;;;17581:1971:126;;;;;;;;;;;:::o;42321:1866:124:-;42472:7;42481:4;42763:1;42728:7;:31;;;:36;42724:84;;-1:-1:-1;42788:1:124;;;;-1:-1:-1;42321:1866:124;-1:-1:-1;42321:1866:124:o;42724:84::-;42859:19;42881:49;42903:7;:26;;;42881:21;:49::i;:::-;42859:71;;43073:11;43087:167;43138:7;:27;;;43209:7;:35;;;43179:7;:27;;;:65;;;;:::i;:::-;43087:28;;;;;:167;:37;:167::i;:::-;43073:181;;43284:1;43268:12;:17;43264:411;;43329:3;43313:12;43305:27;43301:304;;;43384:28;;;43264:411;;43301:304;-1:-1:-1;43581:1:124;;;;-1:-1:-1;42321:1866:124;-1:-1:-1;;;42321:1866:124:o;43264:411::-;43650:13;43651:12;43650:13;:::i;:::-;43635:29;;;;:::i;:::-;;;43264:411;43915:31;;;;43838:29;;;;:119;;43890:3;;43838:38;:119::i;:::-;43832:125;;44040:3;44008:7;:29;;;:35;44004:83;;;-1:-1:-1;44067:1:124;;;;-1:-1:-1;42321:1866:124;-1:-1:-1;;;42321:1866:124:o;44004:83::-;44160:3;44128:7;:29;;;:35;44165:4;44120:50;;;;;;42321:1866;;;:::o;52581:5799::-;52797:7;52806:4;52895:20;52944:1;52929:11;:16;52925:670;;52992:26;;:39;;;:78;;53058:11;;52992:78;:::i;:::-;52961:109;;52925:670;;;53101:18;53130:12;53131:11;53130:12;:::i;:::-;53174:26;;:39;;;53101:42;;-1:-1:-1;53161:52:124;;53157:428;;;53304:26;;:39;;;:76;;;;-1:-1:-1;53157:428:124;;;53561:1;53564:5;53553:17;;;;;;;;53157:428;53087:508;52925:670;53984:26;;:40;;54042:42;;;;;53855:30;;;;53903:195;;53984:40;53903:63;:195::i;:::-;53854:244;;;;54113:7;54108:56;;54144:1;54147:5;54136:17;;;;;;;;;54108:56;54656:26;;:38;;;;54587:39;;;;;54173:18;;54474:274;;54526:208;;54587:129;;:39;:43;:129::i;:::-;54526:31;;:39;:208::i;:::-;54474:28;;;;;:34;:274::i;:::-;54410:26;;:38;;;;54256:83;;;;;54194:265;;54256:193;;:132;;54365:22;54256:108;:132::i;:193::-;54194:26;;:42;;;;:48;:265::i;:::-;:554;;;;:::i;:::-;54173:575;;54818:11;54832:185;54882:125;54937:56;54954:7;:26;;;:38;;;54937:12;:16;;:56;;;;:::i;:::-;54882:31;;:37;:125::i;:::-;54832:28;;;;;:36;:185::i;:::-;54818:199;;55044:3;55031:10;:16;55027:64;;;55071:1;55074:5;55063:17;;;;;;;;;;;55027:64;55138:3;55124:17;;;;55381:9;55393:294;55425:22;55461:7;:26;;;:39;;;55520:7;:26;;;:38;;;193:4:122;55514:44:124;;;;:::i;:::-;55572:26;;:42;;;;55628:49;;;;;55393:18;:294::i;:::-;55381:306;;55697:13;55713:84;55749:7;:26;;;:38;;;193:4:122;55743:44:124;;;;:::i;:::-;55713:12;;:16;:84::i;:::-;55697:100;;55815:5;55811:1;:9;55807:201;;;55988:1;55991:5;55980:17;;;;;;;;;;;;;55807:201;56114:26;;:49;;;;56177:42;;;;;56049:9;;;;56086:143;;56049:9;;56086:14;:143::i;:::-;56078:151;;193:4:122;56243:5:124;:12;56239:584;;56454:26;;:38;;;56355:169;;56382:128;;56448:44;;193:4:122;56448:44:124;:::i;:::-;56382:26;;:38;;;;:44;:128::i;56355:169::-;56347:177;;56239:584;;;56742:26;;:38;;;56641:171;;56668:130;;56736:44;;193:4:122;56736:44:124;:::i;:::-;56668:26;;:38;;;;:46;:130::i;56641:171::-;56633:179;;56239:584;56975:26;;:42;;;56923:104;;:10;;56956:5;;56923:19;:104::i;:::-;56910:117;;57087:10;193:4:122;57081:16:124;57077:398;;;57160:10;193:4:122;57154:16:124;57141:29;;57077:398;;;57456:1;57459:4;57448:16;;;;;;;;;;;;;57077:398;57649:1;57614:7;:31;;;:36;57610:728;;57736:29;;;;57680:31;;;;57672:107;;:46;:107::i;:::-;57666:113;;193:4:122;57797:3:124;:10;57793:168;;57937:1;57940:5;57929:17;;;;;;;;;;;;;57793:168;193:4:122;58008:9:124;;;;;58058:23;:10;58008:9;58058:18;:23::i;:::-;58045:36;;57610:728;;;58125:202;58187:126;58262:7;:29;;;58196:7;:31;;;58195:32;;;:::i;58187:126::-;58161:152;;193:4:122;58161:152:124;:::i;:::-;58125:10;;:18;:202::i;:::-;58112:215;;57610:728;-1:-1:-1;58356:10:124;;58368:4;;-1:-1:-1;52581:5799:124;-1:-1:-1;;;;;;;;;52581:5799:124:o;5576:1765:126:-;5768:7;5777:4;5931:9;5943:20;5947:2;5951:1;5954;5957;5960:2;5943:3;:20::i;:::-;5931:32;;6086:2;6082:1;:6;6078:54;;;6112:1;6115:5;6104:17;;;;;;;6078:54;6194:7;;;;;6225:8;6194:7;6231:1;6225:5;:8::i;:::-;6221:12;;6355:1;6351;:5;6347:53;;;6380:1;6383:5;6372:17;;;;;;;6347:53;6604:5;;;6634:18;6604:5;6646:2;6650:1;6634:11;:18::i;:::-;6629:23;;193:4:122;6666:2:126;:9;6662:261;;6764:20;6771:12;193:4:122;6781:1:126;6771:9;:12::i;6764:20::-;6759:25;;6662:261;;;6890:22;6897:14;193:4:122;6909:1:126;6897:11;:14::i;6890:22::-;6885:27;;6662:261;7005:12;:2;7014;7005:8;:12::i;:::-;7000:17;;7142:2;7137;:7;7133:55;;;7168:1;7171:5;7160:17;;;;;;;;7133:55;7310:7;;;;;7319:4;;-1:-1:-1;5576:1765:126;-1:-1:-1;;;;;;;5576:1765:126:o;13859:1409::-;14022:7;14031:4;14543:9;14555:22;14561:2;14565:1;14568;14571;14574:2;14555:5;:22::i;:::-;14543:34;-1:-1:-1;14587:17:126;14607:28;193:4:122;14617:11:126;:1;14625:2;14617:7;:11::i;:::-;:17;;;;:::i;14607:28::-;14587:48;;193:4:122;14649:9:126;:16;14645:300;;14765:29;14779:14;193:4:122;14791:1:126;14779:11;:14::i;14765:29::-;14753:41;;14645:300;;;14907:27;14921:12;193:4:122;14931:1:126;14921:9;:12::i;14907:27::-;14895:39;;14645:300;14966:21;:9;14984:2;14966:17;:21::i;:::-;14954:33;;15143:2;15131:9;:14;15127:62;;;15169:1;15172:5;15161:17;;;;;;;;15127:62;15230:14;;;;;15246:4;;-1:-1:-1;13859:1409:126;-1:-1:-1;;;;;;13859:1409:126:o;20059:343::-;20198:7;20387:8;:1;20393;20387:5;:8::i;:::-;20349:35;20360:19;20377:1;20360:12;:2;20369;20360:8;:12::i;:19::-;20349:1;;20381:2;20349:10;:35::i;:::-;:46;;;;:::i;20915:352::-;21056:7;21252:8;:1;21258;21252:5;:8::i;:::-;21210:39;21223:21;21242:1;21223:14;:2;21234;21223:10;:14::i;:21::-;21210:1;;21246:2;21210:12;:39::i;-1:-1:-1:-;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;14:592:234:-;128:6;136;144;152;205:3;193:9;184:7;180:23;176:33;173:53;;;222:1;219;212:12;173:53;258:9;245:23;235:33;;315:2;304:9;300:18;287:32;277:42;;366:2;355:9;351:18;338:32;328:42;;421:2;410:9;406:18;393:32;448:18;440:6;437:30;434:50;;;480:1;477;470:12;434:50;503:22;;559:2;541:16;;;537:25;534:45;;;575:1;572;565:12;534:45;14:592;;;;-1:-1:-1;14:592:234;;-1:-1:-1;;14:592:234:o;864:180::-;923:6;976:2;964:9;955:7;951:23;947:32;944:52;;;992:1;989;982:12;944:52;-1:-1:-1;1015:23:234;;864:180;-1:-1:-1;864:180:234:o;1049:127::-;1110:10;1105:3;1101:20;1098:1;1091:31;1141:4;1138:1;1131:15;1165:4;1162:1;1155:15;1181:125;1246:9;;;1267:10;;;1264:36;;;1280:18;;:::i;1311:286::-;1370:6;1423:2;1411:9;1402:7;1398:23;1394:32;1391:52;;;1439:1;1436;1429:12;1391:52;1465:23;;-1:-1:-1;;;;;1517:31:234;;1507:42;;1497:70;;1563:1;1560;1553:12;1602:118;1688:5;1681:13;1674:21;1667:5;1664:32;1654:60;;1710:1;1707;1700:12;1725:241;1781:6;1834:2;1822:9;1813:7;1809:23;1805:32;1802:52;;;1850:1;1847;1840:12;1802:52;1889:9;1876:23;1908:28;1930:5;1908:28;:::i;1971:128::-;2038:9;;;2059:11;;;2056:37;;;2073:18;;:::i;2654:127::-;2715:10;2710:3;2706:20;2703:1;2696:31;2746:4;2743:1;2736:15;2770:4;2767:1;2760:15;2786:112;2818:1;2844;2834:35;;2849:18;;:::i;:::-;-1:-1:-1;2883:9:234;;2786:112::o;2903:193::-;-1:-1:-1;;;;;3021:10:234;;;3033;;;3017:27;;3056:11;;;3053:37;;;3070:18;;:::i;3101:197::-;-1:-1:-1;;;;;3223:10:234;;;3235;;;3219:27;;3258:11;;;3255:37;;;3272:18;;:::i;3303:200::-;3369:9;;;3342:4;3397:9;;3425:10;;3437:12;;;3421:29;3460:12;;;3452:21;;3418:56;3415:82;;;3477:18;;:::i;3904:521::-;3981:4;3987:6;4047:11;4034:25;4141:2;4137:7;4126:8;4110:14;4106:29;4102:43;4082:18;4078:68;4068:96;;4160:1;4157;4150:12;4068:96;4187:33;;4239:20;;;-1:-1:-1;4282:18:234;4271:30;;4268:50;;;4314:1;4311;4304:12;4268:50;4347:4;4335:17;;-1:-1:-1;4378:14:234;4374:27;;;4364:38;;4361:58;;;4415:1;4412;4405:12;4640:168;4713:9;;;4744;;4761:15;;;4755:22;;4741:37;4731:71;;4782:18;;:::i;5021:184::-;5091:6;5144:2;5132:9;5123:7;5119:23;5115:32;5112:52;;;5160:1;5157;5150:12;5112:52;-1:-1:-1;5183:16:234;;5021:184;-1:-1:-1;5021:184:234:o;5210:200::-;-1:-1:-1;;;;;5346:10:234;;;5334;;;5330:27;;5369:12;;;5366:38;;;5384:18;;:::i;5415:245::-;5513:2;5483:17;;;5502;;;;5479:41;-1:-1:-1;;;;;5535:44:234;;-1:-1:-1;;;;;;5581:49:234;;5532:99;5529:125;;;5634:18;;:::i;5665:213::-;5700:3;5748:5;5744:2;5733:21;-1:-1:-1;;;;;5778:39:234;5769:7;5766:52;5763:78;;5821:18;;:::i;:::-;5861:1;5857:15;;5665:213;-1:-1:-1;;5665:213:234:o;6015:136::-;6050:3;-1:-1:-1;;;6071:22:234;;6068:48;;6096:18;;:::i;:::-;-1:-1:-1;6136:1:234;6132:13;;6015:136::o;6156:361::-;6321:2;6306:18;;6354:1;6343:13;;6333:144;;6399:10;6394:3;6390:20;6387:1;6380:31;6434:4;6431:1;6424:15;6462:4;6459:1;6452:15;6333:144;6486:25;;;6156:361;:::o;6902:245::-;6969:6;7022:2;7010:9;7001:7;6997:23;6993:32;6990:52;;;7038:1;7035;7028:12;6990:52;7070:9;7064:16;7089:28;7111:5;7089:28;:::i;7152:216::-;7216:9;;;7244:11;;;7191:3;7274:9;;7302:10;;7298:19;;7327:10;;7319:19;;7295:44;7292:70;;;7342:18;;:::i;:::-;7292:70;;7152:216;;;;:::o;7373:193::-;7412:1;7438;7428:35;;7443:18;;:::i;:::-;-1:-1:-1;;;7479:18:234;;-1:-1:-1;;7499:13:234;;7475:38;7472:64;;;7516:18;;:::i;:::-;-1:-1:-1;7550:10:234;;7373:193::o";
        readonly linkReferences: {};
        readonly immutableReferences: {
            readonly "17788": readonly [{
                readonly start: 1122;
                readonly length: 32;
            }, {
                readonly start: 3811;
                readonly length: 32;
            }, {
                readonly start: 3884;
                readonly length: 32;
            }, {
                readonly start: 7066;
                readonly length: 32;
            }, {
                readonly start: 7139;
                readonly length: 32;
            }, {
                readonly start: 7285;
                readonly length: 32;
            }, {
                readonly start: 7414;
                readonly length: 32;
            }, {
                readonly start: 7837;
                readonly length: 32;
            }, {
                readonly start: 7966;
                readonly length: 32;
            }, {
                readonly start: 10257;
                readonly length: 32;
            }, {
                readonly start: 10330;
                readonly length: 32;
            }];
            readonly "17795": readonly [{
                readonly start: 827;
                readonly length: 32;
            }, {
                readonly start: 1020;
                readonly length: 32;
            }, {
                readonly start: 1314;
                readonly length: 32;
            }];
            readonly "17798": readonly [{
                readonly start: 377;
                readonly length: 32;
            }, {
                readonly start: 1478;
                readonly length: 32;
            }, {
                readonly start: 12012;
                readonly length: 32;
            }];
            readonly "17801": readonly [{
                readonly start: 2362;
                readonly length: 32;
            }, {
                readonly start: 2531;
                readonly length: 32;
            }, {
                readonly start: 9780;
                readonly length: 32;
            }];
            readonly "17804": readonly [{
                readonly start: 6725;
                readonly length: 32;
            }];
            readonly "17807": readonly [{
                readonly start: 1670;
                readonly length: 32;
            }, {
                readonly start: 2652;
                readonly length: 32;
            }, {
                readonly start: 4520;
                readonly length: 32;
            }, {
                readonly start: 6854;
                readonly length: 32;
            }];
            readonly "17810": readonly [{
                readonly start: 4564;
                readonly length: 32;
            }, {
                readonly start: 6777;
                readonly length: 32;
            }, {
                readonly start: 6898;
                readonly length: 32;
            }];
            readonly "17813": readonly [{
                readonly start: 4270;
                readonly length: 32;
            }];
            readonly "17816": readonly [{
                readonly start: 2396;
                readonly length: 32;
            }, {
                readonly start: 2498;
                readonly length: 32;
            }, {
                readonly start: 7580;
                readonly length: 32;
            }, {
                readonly start: 7727;
                readonly length: 32;
            }, {
                readonly start: 9666;
                readonly length: 32;
            }];
            readonly "17819": readonly [{
                readonly start: 3017;
                readonly length: 32;
            }, {
                readonly start: 5258;
                readonly length: 32;
            }, {
                readonly start: 5359;
                readonly length: 32;
            }, {
                readonly start: 8438;
                readonly length: 32;
            }, {
                readonly start: 8731;
                readonly length: 32;
            }, {
                readonly start: 8791;
                readonly length: 32;
            }, {
                readonly start: 9398;
                readonly length: 32;
            }, {
                readonly start: 9704;
                readonly length: 32;
            }];
            readonly "17822": readonly [{
                readonly start: 236;
                readonly length: 32;
            }, {
                readonly start: 9742;
                readonly length: 32;
            }];
        };
    };
    readonly methodIdentifiers: {
        readonly "checkpoint(uint256)": "ed64bab2";
        readonly "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070";
    };
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"contract IERC20\",\"name\":\"vaultSharesToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"sweepCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolConfig\",\"name\":\"_config\",\"type\":\"tuple\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"DistributeExcessIdleFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ExpInvalidExponent\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"enum IHyperdrive.InsufficientLiquidityReason\",\"name\":\"reason\",\"type\":\"uint8\"}],\"name\":\"InsufficientLiquidity\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidCheckpointTime\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPresentValue\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTimestamp\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"LnInvalidInput\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MinimumSharePrice\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MinimumTransactionAmount\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NotPayable\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"OutputLimit\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"PoolIsPaused\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"RestrictedZeroAddress\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"TransferFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToInt128\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToInt256\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToUint112\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToUint128\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UpdateLiquidityFailed\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"basePayment\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fees\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newFeeCollector\",\"type\":\"address\"}],\"name\":\"FeeCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseProceeds\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"}],\"name\":\"PauseStatusUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"name\":\"Sweep\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newSweepCollector\",\"type\":\"address\"}],\"name\":\"SweepCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_checkpointTime\",\"type\":\"uint256\"}],\"name\":\"checkpoint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_bondAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_maxDeposit\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minVaultSharePrice\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"openShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"}],\"devdoc\":{\"errors\":{\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}]},\"kind\":\"dev\",\"methods\":{\"checkpoint(uint256)\":{\"params\":{\"_checkpointTime\":\"The time of the checkpoint to create.\"}},\"openShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_bondAmount\":\"The amount of bonds to short.\",\"_maxDeposit\":\"The most the user expects to deposit for this trade.        The units of this quantity are either base or vault shares,        depending on the value of `_options.asBase`.\",\"_minVaultSharePrice\":\"The minimum vault share price at which to        open the short. This allows traders to protect themselves from        opening a short in a checkpoint where negative interest has        accrued.\",\"_options\":\"The options that configure how the trade is settled.\"},\"returns\":{\"_0\":\"The maturity time of the short.\",\"_1\":\"The amount the user deposited for this trade. The units of this         quantity are either base or vault shares, depending on the value         of `_options.asBase`.\"}}},\"version\":1},\"userdoc\":{\"errors\":{\"DistributeExcessIdleFailed()\":[{\"notice\":\"Thrown when the distribute excess idle calculation fails due         to the starting present value calculation failing.\"}],\"ExpInvalidExponent()\":[{\"notice\":\"Thrown when the exponent to `FixedPointMath.exp` would cause the         the result to be larger than the representable scale.\"}],\"InsufficientLiquidity(uint8)\":[{\"notice\":\"Thrown when the pool doesn't have sufficient liquidity to         complete the trade.\"}],\"InvalidCheckpointTime()\":[{\"notice\":\"Thrown when the checkpoint time provided to `checkpoint` is         larger than the current checkpoint or isn't divisible by the         checkpoint duration.\"}],\"InvalidPresentValue()\":[{\"notice\":\"Thrown when the present value calculation fails.\"}],\"InvalidTimestamp()\":[{\"notice\":\"Thrown when the timestamp used to construct an asset ID exceeds         the uint248 scale.\"}],\"LnInvalidInput()\":[{\"notice\":\"Thrown when the input to `FixedPointMath.ln` is less than or         equal to zero.\"}],\"MinimumSharePrice()\":[{\"notice\":\"Thrown when vault share price is smaller than the minimum share         price. This protects traders from unknowingly opening a long or         short after negative interest has accrued.\"}],\"MinimumTransactionAmount()\":[{\"notice\":\"Thrown when the input or output amount of a trade is smaller         than the minimum transaction amount. This protects traders and         LPs from losses of precision that can occur at small scales.\"}],\"NotPayable()\":[{\"notice\":\"Thrown when ether is sent to an instance that doesn't accept         ether as a deposit asset.\"}],\"OutputLimit()\":[{\"notice\":\"Thrown when a slippage guard is violated.\"}],\"PoolIsPaused()\":[{\"notice\":\"Thrown when the pool is paused and a trader tries to add         liquidity, open a long, or open a short. Traders can still         close their existing positions while the pool is paused.\"}],\"RestrictedZeroAddress()\":[{\"notice\":\"Thrown when the owner passed to permit is the zero address. This         prevents users from spending the funds in address zero by         sending an invalid signature to ecrecover.\"}],\"TransferFailed()\":[{\"notice\":\"Thrown when an ether transfer fails.\"}],\"UnsafeCastToInt128()\":[{\"notice\":\"Thrown when casting a value to a int128 that is outside of the         int128 scale.\"}],\"UnsafeCastToInt256()\":[{\"notice\":\"Thrown when casting a value to a int256 that is outside of the         int256 scale.\"}],\"UnsafeCastToUint112()\":[{\"notice\":\"Thrown when casting a value to a uint112 that is outside of the         uint128 scale.\"}],\"UnsafeCastToUint128()\":[{\"notice\":\"Thrown when casting a value to a uint128 that is outside of the         uint128 scale.\"}],\"UpdateLiquidityFailed()\":[{\"notice\":\"Thrown when `LPMath.calculateUpdateLiquidity` fails.\"}]},\"events\":{\"AddLiquidity(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when an LP adds liquidity to the Hyperdrive pool.\"},\"Approval(address,address,uint256)\":{\"notice\":\"Emitted when an account changes the allowance for another         account.\"},\"ApprovalForAll(address,address,bool)\":{\"notice\":\"Emitted when an account changes the approval for all of its         tokens.\"},\"CloseLong(address,address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is closed.\"},\"CloseShort(address,address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is closed.\"},\"CollectGovernanceFee(address,uint256)\":{\"notice\":\"Emitted when governance fees are collected.\"},\"CreateCheckpoint(uint256,uint256,uint256,uint256,uint256)\":{\"notice\":\"Emitted when a checkpoint is created.\"},\"FeeCollectorUpdated(address)\":{\"notice\":\"Emitted when the fee collector address is updated.\"},\"GovernanceUpdated(address)\":{\"notice\":\"Emitted when the governance address is updated.\"},\"Initialize(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when the Hyperdrive pool is initialized.\"},\"OpenLong(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is opened.\"},\"OpenShort(address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is opened.\"},\"PauseStatusUpdated(bool)\":{\"notice\":\"Emitted when the pause status is updated.\"},\"PauserUpdated(address,bool)\":{\"notice\":\"Emitted when a pauser is updated.\"},\"RedeemWithdrawalShares(address,address,uint256,uint256,uint256,bool)\":{\"notice\":\"Emitted when an LP redeems withdrawal shares.\"},\"RemoveLiquidity(address,address,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when an LP removes liquidity from the Hyperdrive pool.\"},\"Sweep(address,address)\":{\"notice\":\"Emitted when tokens are swept.\"},\"SweepCollectorUpdated(address)\":{\"notice\":\"Emitted when the sweep collector address is updated.\"},\"TransferSingle(address,address,address,uint256,uint256)\":{\"notice\":\"Emitted when tokens are transferred from one account to another.\"}},\"kind\":\"user\",\"methods\":{\"checkpoint(uint256)\":{\"notice\":\"Allows anyone to mint a new checkpoint.\"},\"openShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Opens a short position.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/test/MockHyperdrive.sol\":\"MockHyperdriveTarget4\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/external/Hyperdrive.sol\":{\"keccak256\":\"0x4d166ec6a8a2e3f2cae2d0f990d1cc40965ec995130d7a7be1af2b9e390d3fd8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2185afc7935052ce78427f3ee5629d4c6d93cbffad776fb281c2b79ff2234d67\",\"dweb:/ipfs/QmT6e2H7pXG3e2BM1EoHTxzWhTwxjGu75AxNkZ4CxyEbw6\"]},\"contracts/src/external/HyperdriveTarget0.sol\":{\"keccak256\":\"0x9cf2186541b5454544930c45d3ca5a7396a9122d7218e42670ae6e77eba7fe92\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6d3da4a8aadd58e9f2ddc4c0fed4b91be1f4d8d572c7cb9eea7c6f2aa416b206\",\"dweb:/ipfs/QmcSDMBvhpkMi2NPqWhbgvK2qBzUaihW28t3KpZMxmCrmF\"]},\"contracts/src/external/HyperdriveTarget1.sol\":{\"keccak256\":\"0xafc075dac84c3c9d5be703d5068cc2a30875f16107b884c8ee416e877422c6da\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://12d86af9b6684898a97a67e268137da7a5fcff8f484c01dd73d92d2b2f1b881e\",\"dweb:/ipfs/QmQg2gg35jjmuG27HWjRVG65gYCdGmCHmCoiDC3GRoAMr7\"]},\"contracts/src/external/HyperdriveTarget2.sol\":{\"keccak256\":\"0xf5501de742b9054f1c8cbf6234e66aac5ca0380016cfa65ecd01840c2e857e79\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3d971dfdd0986a75c0fa5d55fc3b7c4edb8126201a53f325d8bb6df293b94d39\",\"dweb:/ipfs/QmNnJsAcJEoChpJcCneEmwmAQ2n2F1u4YrYFS4hfwyiwVA\"]},\"contracts/src/external/HyperdriveTarget3.sol\":{\"keccak256\":\"0x805a1d075059fa6a4247f49e9b356f8df3da3bd37d778ad88591766c165529e1\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6bbe4411d4b5fe5f9db08e4c4acef28a6cff80c5a9ae75d2d65a35f1616f0d5a\",\"dweb:/ipfs/QmZLYZU9Wz4gZEiY1vm1JT9me13oWj9scVMgV1tbDLMNup\"]},\"contracts/src/external/HyperdriveTarget4.sol\":{\"keccak256\":\"0xfc2c1dfa778f4be903a0a078c7cfb29fdf2caded6b72cf222f5da4b39e512bfa\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8bf1a17cc51013e821f44c426b8911db6f51ea96c0883f00ad98ab70993c2886\",\"dweb:/ipfs/QmdW2jFRm2vgoWQc1thZCPSASezv2dKFjmxayyV715HhFN\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xc293b4229674624983294b673d6fefce53ed8f6f3d9c6bbcb34da25f42ef2c71\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://084f43e7c42615faabfb6ae9100a8cea6bf9846eb1c433dc08fe634c59cadcaf\",\"dweb:/ipfs/QmXW3GgcbQQg5xnfAC6RT2KBL9ii8s1jwbDtZywWXFydpm\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x68adcd293ff25711add1698b6024faa45beec01eb044bd0103d3020aa96d856e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0e0f5e35a7d2c656e249394d25896e5adfb9af3e210c01b9ef5fa81d25a45e24\",\"dweb:/ipfs/QmbLASezHPWHcbodqSfw3Qh9NzqekqVPM8FhCXKGTCXL1h\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x812ccb32dff907e8614c89a65196eec239eceb3e63f9f14dde2b2269c75a67c0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://da5f2ce974bfcd8185342c121c879ba5aef23e1e4e7b36cf9fcba68296b8892c\",\"dweb:/ipfs/QmSho3PWs9bzejTYYjySuXcH9tVP4xFnkbUmSzQA54g8eG\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86\",\"dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/internal/HyperdriveAdmin.sol\":{\"keccak256\":\"0x683548d598b303bc8bab561818a2f88c100f6d26fda478e89c02b46cf710726d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://054a605eeb41760fbe1922bb32f511c87e1ca4dd04f3fa64f40783060b371603\",\"dweb:/ipfs/QmezP1mjnbPCwdDCrh4GjL7RVzU61ohTrcW6A7yxLiKcQM\"]},\"contracts/src/internal/HyperdriveBase.sol\":{\"keccak256\":\"0x7feb8df22e6f91b1ee70f50f5ca16a7819601bcb88fc5a5fa9cf16c708cc52bb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://60ff7ff4faa45551099b025d03f2438477b5fd1f64f82b78c6ed26cbdafc64f6\",\"dweb:/ipfs/QmWtbftziGdSKAEvpRoaWRnTxMNwgUVs2nDN6nFugX1WYN\"]},\"contracts/src/internal/HyperdriveCheckpoint.sol\":{\"keccak256\":\"0x3514b829c99e0015385ff08dd1479e452529a6283e8b6800946542ff21dc9649\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://37ffd17baea5080f4184372ac835bf60694760499756235a61e41a480f4ab3c7\",\"dweb:/ipfs/QmUzEnJhRhpW18MH7GyXsug9u5FLehNfgjR7RAhZizLLVd\"]},\"contracts/src/internal/HyperdriveLP.sol\":{\"keccak256\":\"0x72410851e77940e66681e23b9d10f3c3de0e8c9a3e5b1cca627e93bba431775d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://82a9292f388b16572cc5c5e873d1ead666ddcc3e436cf5d7fb036fd6c63ee9a2\",\"dweb:/ipfs/Qmauzxkn46ACS4XV43m2MbDF91KYP4ExYwSxL3cm1SDL6j\"]},\"contracts/src/internal/HyperdriveLong.sol\":{\"keccak256\":\"0xe791adb5c58a73ff2c978fcc79153f9042702e2c4fc5d71f60534323d5ba4832\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7ec4adf40e5f90574c7484ddeeed41cbe1f60b29847b18b169aa3130b8882aa7\",\"dweb:/ipfs/QmeY9y922jhcLzGw9d4VUNNoDkUeFhTJ8ZVThrvqzcGGjm\"]},\"contracts/src/internal/HyperdriveMultiToken.sol\":{\"keccak256\":\"0x21a9aafb8e23a22c77111e13538fa8f709446e4f3a64ef84b2eebc2aa9d04373\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://41517912353540de5b430587ca8220f9d34d4432d3c723951d5fb618d5907b5d\",\"dweb:/ipfs/QmU3cTCrAq94digVS97s5af1Pu86uGBpmpus6w7828fUbG\"]},\"contracts/src/internal/HyperdriveShort.sol\":{\"keccak256\":\"0xc42b5a9ee5eee3cb9177b136eb9f4b81a4b51d9468f8faa97309934b6b371bc5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b9291237fcdbb8ff97517acd19499cfa4afc6d670a89fd5cc0309a201a7b1006\",\"dweb:/ipfs/QmfQmUwvGhJgPFyNaHvur8AViePBzvSBNAdaZJBwMkY5Je\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xf965f50c6e452e4011a476c67e6cbea77e558570efb7532dbf1bd586e8705ab4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e81b4399e0e27f0a8d47dd7a79f7711d1bd4685e6b98d4ba778e32d1af7de50e\",\"dweb:/ipfs/QmQyCBv76GvWPxTjdR6yD7DTuvFAdxTkRp2A9wUgqP778N\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0x3031a1ec376be333eebe0062c474a22d7f970cb02de62ab6823c6918c0a7f83b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6c80cc2fd8b7908b6420ebb21cb99266c93e01d6cdd9d1a41f8847493849b131\",\"dweb:/ipfs/QmeMehWbF2RwQaf6c6yaj5KHjXboDRpzBCtvFnLW4BXBbc\"]},\"contracts/src/libraries/Constants.sol\":{\"keccak256\":\"0xcf133c1d2db33dd318a51f8db58aa188225dd4383499cf82aa35bb49a678e30d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://bdfefbcdf520ad8790372e66571a9f0782886e1d754dc83c834b98a19f450418\",\"dweb:/ipfs/QmdVcLsnb29dUJT4GVTWgEmuExEZ1wVhQ9KAJ5pwNTh6WU\"]},\"contracts/src/libraries/Errors.sol\":{\"keccak256\":\"0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88\",\"dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x631f6529908f62f71775f8c6120afdca3a836fb24fa9fa4701cad54f4a9da076\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2baf6ad8917a3fbb6d040334451f6b4f6936b00518c4cd308b9c6fa11569b2bd\",\"dweb:/ipfs/QmXD16vk6MRxmPRqy8ZXSpRA5XxhSf1pnsQH32ARDJTk8L\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0xcf305dde8aa320d1e1b767734ce8edce456af537525d40e30d5345f09f6e34ab\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://056c9a563f1a9e0133e17463497ad19be517d35b770170122edea50ca9fbe002\",\"dweb:/ipfs/QmS6dkVRHzdbv7etumcCtNtm9GuXDCjqZxxhtYfP6keAAY\"]},\"contracts/src/libraries/LPMath.sol\":{\"keccak256\":\"0x5b3c0d159b1945a14227028d835e011bf740e007f664cba049ece1b6ab963067\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d8f4fef22462dabc799b2f8124440a7cc57076f7ceecb46219c69b09f50baf5f\",\"dweb:/ipfs/Qmcw9iC1RZt4Nh7dGH1yR7vUi6qZHJf6ReAvF2uLFHESqZ\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8\",\"dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x4a9c91313bed7cda6ef503af23c9f777008b5258e9cb2176eab6acc52be79891\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://88da1f5502a12fe1024be90f6a6ea08556cc1f2660ab8cbeb5e07640abb7711c\",\"dweb:/ipfs/QmVQoG9TyrAsVYcgvgZfgA5pQk8V8wvS4BewGNP4B3Txyy\"]},\"contracts/test/ERC20Mintable.sol\":{\"keccak256\":\"0xa6b1089f313e782a365731db38adb49895a60cceb9e0815e2c68f01519e0060d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b816baf88a891a35c30eb264c83b27d087778efbb33a8c9b1086f3710e02e7df\",\"dweb:/ipfs/QmV24rEUp75368eJBfgo3MJfj65cvzfbzCD8zFyEaCUaTR\"]},\"contracts/test/MockHyperdrive.sol\":{\"keccak256\":\"0x70110f424c1f1f19ee883acad7b22609b8b2fd2b0da99227bae7e3880d3ee0d1\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4a3766f58274f66e6f8909896cdb27349126fe86da7558124ab088137c695ace\",\"dweb:/ipfs/QmVreuQKTnvPVdgiuQxeSaEwKJrX4L7wtZqfzwNdozwV7S\"]},\"lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol\":{\"keccak256\":\"0x60c65f701957fdd6faea1acb0bb45825791d473693ed9ecb34726fdfaa849dd7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ea290300e0efc4d901244949dc4d877fd46e6c5e43dc2b26620e8efab3ab803f\",\"dweb:/ipfs/QmcLLJppxKeJWqHxE2CUkcfhuRTgHSn8J4kijcLa5MYhSt\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0xc3e1fa9d1987f8d349dfb4d6fe93bf2ca014b52ba335cfac30bfe71e357e6f80\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c5703ccdeb7b1d685e375ed719117e9edf2ab4bc544f24f23b0d50ec82257229\",\"dweb:/ipfs/QmTdwkbQq7owpCiyuzE7eh5LrD2ddrBCZ5WHVsWPi1RrTS\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c\",\"dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850\",\"dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x6008dabfe393240d73d7dd7688033f72740d570aa422254d29a7dce8568f3aff\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f5196ec75139918c6c7bb4251b36395e668f1fa6d206beba7e7520e74913940d\",\"dweb:/ipfs/QmSyqjksXxmm2mCG6qRd1yuwLykypkSVBbnBnGqJRcuJMi\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x37bb49513c49c87c4642a891b13b63571bc87013dde806617aa1efb54605f386\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b3036b3a83b7c48f96641f2a9002b9f2dcb6a5958dd670894ada21ae8229b3d0\",\"dweb:/ipfs/QmUNfSBdoVtjhETaUJCYcaC7pTMgbhht926tJ2uXJbiVd3\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245\",\"dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y\"]},\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":{\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12\",\"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF\"]},\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02\",\"dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd\"]},\"lib/solmate/src/auth/Auth.sol\":{\"keccak256\":\"0x6e05238d59cd40172c04c1974eb8f1f6cef4fdc4b6553ef7844a7302b885f76c\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://a9743c21ca0470d9082e4cf00aea53786868c977d40775e6954463658ebb50ac\",\"dweb:/ipfs/QmPFdyrLHUX1zSipTC2tcJ58EzxxPp2TTvCZx9KCgqZn2W\"]},\"lib/solmate/src/auth/authorities/MultiRolesAuthority.sol\":{\"keccak256\":\"0x5544e61f98c0e80a8c4b9b691952122d3547ade0c0ad830ae6d5fd65f2d0dbe3\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://232d9054e5c087e0f416d995753051d352b9f24c5bd823be69a6061757fd1fef\",\"dweb:/ipfs/QmZTwcv8YycBRUWX3NLrxNyKud2SCGtfZJiCasTXpjKM4B\"]},\"lib/solmate/src/tokens/ERC20.sol\":{\"keccak256\":\"0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35\",\"dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97\"]},\"test/utils/HyperdriveUtils.sol\":{\"keccak256\":\"0x764719deaf8b833fc87b8436d166030eaa05832bf3d5e259172f431778666e04\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://04c4bd84c0d60f9a7c68604cbe76d0cc88170bb569298749bc97d40b197f62f6\",\"dweb:/ipfs/QmQV6zkCCvLkbta2vDzjbMXKUzYDrAhcEyFA7QSRTVZJ1P\"]}},\"version\":1}";
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
                readonly name: "DistributeExcessIdleFailed";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "ExpInvalidExponent";
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
                readonly keccak256: "0x4d166ec6a8a2e3f2cae2d0f990d1cc40965ec995130d7a7be1af2b9e390d3fd8";
                readonly urls: readonly ["bzz-raw://2185afc7935052ce78427f3ee5629d4c6d93cbffad776fb281c2b79ff2234d67", "dweb:/ipfs/QmT6e2H7pXG3e2BM1EoHTxzWhTwxjGu75AxNkZ4CxyEbw6"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/external/HyperdriveTarget0.sol": {
                readonly keccak256: "0x9cf2186541b5454544930c45d3ca5a7396a9122d7218e42670ae6e77eba7fe92";
                readonly urls: readonly ["bzz-raw://6d3da4a8aadd58e9f2ddc4c0fed4b91be1f4d8d572c7cb9eea7c6f2aa416b206", "dweb:/ipfs/QmcSDMBvhpkMi2NPqWhbgvK2qBzUaihW28t3KpZMxmCrmF"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/external/HyperdriveTarget1.sol": {
                readonly keccak256: "0xafc075dac84c3c9d5be703d5068cc2a30875f16107b884c8ee416e877422c6da";
                readonly urls: readonly ["bzz-raw://12d86af9b6684898a97a67e268137da7a5fcff8f484c01dd73d92d2b2f1b881e", "dweb:/ipfs/QmQg2gg35jjmuG27HWjRVG65gYCdGmCHmCoiDC3GRoAMr7"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/external/HyperdriveTarget2.sol": {
                readonly keccak256: "0xf5501de742b9054f1c8cbf6234e66aac5ca0380016cfa65ecd01840c2e857e79";
                readonly urls: readonly ["bzz-raw://3d971dfdd0986a75c0fa5d55fc3b7c4edb8126201a53f325d8bb6df293b94d39", "dweb:/ipfs/QmNnJsAcJEoChpJcCneEmwmAQ2n2F1u4YrYFS4hfwyiwVA"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/external/HyperdriveTarget3.sol": {
                readonly keccak256: "0x805a1d075059fa6a4247f49e9b356f8df3da3bd37d778ad88591766c165529e1";
                readonly urls: readonly ["bzz-raw://6bbe4411d4b5fe5f9db08e4c4acef28a6cff80c5a9ae75d2d65a35f1616f0d5a", "dweb:/ipfs/QmZLYZU9Wz4gZEiY1vm1JT9me13oWj9scVMgV1tbDLMNup"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/external/HyperdriveTarget4.sol": {
                readonly keccak256: "0xfc2c1dfa778f4be903a0a078c7cfb29fdf2caded6b72cf222f5da4b39e512bfa";
                readonly urls: readonly ["bzz-raw://8bf1a17cc51013e821f44c426b8911db6f51ea96c0883f00ad98ab70993c2886", "dweb:/ipfs/QmdW2jFRm2vgoWQc1thZCPSASezv2dKFjmxayyV715HhFN"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IERC20.sol": {
                readonly keccak256: "0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9";
                readonly urls: readonly ["bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac", "dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p"];
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
            readonly "contracts/src/libraries/Constants.sol": {
                readonly keccak256: "0xcf133c1d2db33dd318a51f8db58aa188225dd4383499cf82aa35bb49a678e30d";
                readonly urls: readonly ["bzz-raw://bdfefbcdf520ad8790372e66571a9f0782886e1d754dc83c834b98a19f450418", "dweb:/ipfs/QmdVcLsnb29dUJT4GVTWgEmuExEZ1wVhQ9KAJ5pwNTh6WU"];
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
            readonly "contracts/test/ERC20Mintable.sol": {
                readonly keccak256: "0xa6b1089f313e782a365731db38adb49895a60cceb9e0815e2c68f01519e0060d";
                readonly urls: readonly ["bzz-raw://b816baf88a891a35c30eb264c83b27d087778efbb33a8c9b1086f3710e02e7df", "dweb:/ipfs/QmV24rEUp75368eJBfgo3MJfj65cvzfbzCD8zFyEaCUaTR"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/test/MockHyperdrive.sol": {
                readonly keccak256: "0x70110f424c1f1f19ee883acad7b22609b8b2fd2b0da99227bae7e3880d3ee0d1";
                readonly urls: readonly ["bzz-raw://4a3766f58274f66e6f8909896cdb27349126fe86da7558124ab088137c695ace", "dweb:/ipfs/QmVreuQKTnvPVdgiuQxeSaEwKJrX4L7wtZqfzwNdozwV7S"];
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
        readonly id: 25352;
        readonly exportedSymbols: {
            readonly ERC20Mintable: readonly [23602];
            readonly ETH: readonly [18271];
            readonly FixedPointMath: readonly [19065];
            readonly Hyperdrive: readonly [4518];
            readonly HyperdriveBase: readonly [13995];
            readonly HyperdriveTarget0: readonly [5333];
            readonly HyperdriveTarget1: readonly [5446];
            readonly HyperdriveTarget2: readonly [5535];
            readonly HyperdriveTarget3: readonly [5623];
            readonly HyperdriveTarget4: readonly [5702];
            readonly HyperdriveUtils: readonly [156416];
            readonly IHyperdrive: readonly [10676];
            readonly IMockHyperdrive: readonly [24398];
            readonly MockHyperdrive: readonly [25262];
            readonly MockHyperdriveBase: readonly [24933];
            readonly MockHyperdriveTarget0: readonly [25291];
            readonly MockHyperdriveTarget1: readonly [25306];
            readonly MockHyperdriveTarget2: readonly [25321];
            readonly MockHyperdriveTarget3: readonly [25336];
            readonly MockHyperdriveTarget4: readonly [25351];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:14795:135";
        readonly nodes: readonly [{
            readonly id: 24328;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:23:135";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 24330;
            readonly nodeType: "ImportDirective";
            readonly src: "64:67:135";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/external/Hyperdrive.sol";
            readonly file: "contracts/src/external/Hyperdrive.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25352;
            readonly sourceUnit: 4519;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 24329;
                    readonly name: "Hyperdrive";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 4518;
                    readonly src: "73:10:135";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 24332;
            readonly nodeType: "ImportDirective";
            readonly src: "132:81:135";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/external/HyperdriveTarget0.sol";
            readonly file: "contracts/src/external/HyperdriveTarget0.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25352;
            readonly sourceUnit: 5334;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 24331;
                    readonly name: "HyperdriveTarget0";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 5333;
                    readonly src: "141:17:135";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 24334;
            readonly nodeType: "ImportDirective";
            readonly src: "214:81:135";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/external/HyperdriveTarget1.sol";
            readonly file: "contracts/src/external/HyperdriveTarget1.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25352;
            readonly sourceUnit: 5447;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 24333;
                    readonly name: "HyperdriveTarget1";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 5446;
                    readonly src: "223:17:135";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 24336;
            readonly nodeType: "ImportDirective";
            readonly src: "296:81:135";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/external/HyperdriveTarget2.sol";
            readonly file: "contracts/src/external/HyperdriveTarget2.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25352;
            readonly sourceUnit: 5536;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 24335;
                    readonly name: "HyperdriveTarget2";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 5535;
                    readonly src: "305:17:135";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 24338;
            readonly nodeType: "ImportDirective";
            readonly src: "378:81:135";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/external/HyperdriveTarget3.sol";
            readonly file: "contracts/src/external/HyperdriveTarget3.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25352;
            readonly sourceUnit: 5624;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 24337;
                    readonly name: "HyperdriveTarget3";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 5623;
                    readonly src: "387:17:135";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 24340;
            readonly nodeType: "ImportDirective";
            readonly src: "460:81:135";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/external/HyperdriveTarget4.sol";
            readonly file: "contracts/src/external/HyperdriveTarget4.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25352;
            readonly sourceUnit: 5703;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 24339;
                    readonly name: "HyperdriveTarget4";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 5702;
                    readonly src: "469:17:135";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 24342;
            readonly nodeType: "ImportDirective";
            readonly src: "542:75:135";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/internal/HyperdriveBase.sol";
            readonly file: "contracts/src/internal/HyperdriveBase.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25352;
            readonly sourceUnit: 13996;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 24341;
                    readonly name: "HyperdriveBase";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 13995;
                    readonly src: "551:14:135";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 24344;
            readonly nodeType: "ImportDirective";
            readonly src: "618:71:135";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IHyperdrive.sol";
            readonly file: "contracts/src/interfaces/IHyperdrive.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25352;
            readonly sourceUnit: 10677;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 24343;
                    readonly name: "IHyperdrive";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 10676;
                    readonly src: "627:11:135";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 24346;
            readonly nodeType: "ImportDirective";
            readonly src: "690:71:135";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IHyperdrive.sol";
            readonly file: "contracts/src/interfaces/IHyperdrive.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25352;
            readonly sourceUnit: 10677;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 24345;
                    readonly name: "IHyperdrive";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 10676;
                    readonly src: "699:11:135";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 24348;
            readonly nodeType: "ImportDirective";
            readonly src: "762:60:135";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/libraries/Constants.sol";
            readonly file: "contracts/src/libraries/Constants.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25352;
            readonly sourceUnit: 18272;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 24347;
                    readonly name: "ETH";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 18271;
                    readonly src: "771:3:135";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 24350;
            readonly nodeType: "ImportDirective";
            readonly src: "823:76:135";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/libraries/FixedPointMath.sol";
            readonly file: "contracts/src/libraries/FixedPointMath.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25352;
            readonly sourceUnit: 19066;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 24349;
                    readonly name: "FixedPointMath";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 19065;
                    readonly src: "832:14:135";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 24352;
            readonly nodeType: "ImportDirective";
            readonly src: "900:65:135";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/test/ERC20Mintable.sol";
            readonly file: "contracts/test/ERC20Mintable.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25352;
            readonly sourceUnit: 23603;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 24351;
                    readonly name: "ERC20Mintable";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 23602;
                    readonly src: "909:13:135";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 24354;
            readonly nodeType: "ImportDirective";
            readonly src: "966:65:135";
            readonly nodes: readonly [];
            readonly absolutePath: "test/utils/HyperdriveUtils.sol";
            readonly file: "test/utils/HyperdriveUtils.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25352;
            readonly sourceUnit: 156417;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 24353;
                    readonly name: "HyperdriveUtils";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 156416;
                    readonly src: "975:15:135";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 24398;
            readonly nodeType: "ContractDefinition";
            readonly src: "1033:594:135";
            readonly nodes: readonly [{
                readonly id: 24361;
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
                    readonly id: 24359;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24356;
                        readonly mutability: "mutable";
                        readonly name: "time";
                        readonly nameLocation: "1089:4:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24361;
                        readonly src: "1081:12:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24355;
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
                        readonly id: 24358;
                        readonly mutability: "mutable";
                        readonly name: "apr";
                        readonly nameLocation: "1102:3:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24361;
                        readonly src: "1095:10:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 24357;
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
                    readonly id: 24360;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1115:0:135";
                };
                readonly scope: 24398;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 24368;
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
                    readonly id: 24364;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24363;
                        readonly mutability: "mutable";
                        readonly name: "_maturityTime";
                        readonly nameLocation: "1171:13:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24368;
                        readonly src: "1163:21:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24362;
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
                    readonly id: 24367;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24366;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24368;
                        readonly src: "1214:7:135";
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
                readonly scope: 24398;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 24375;
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
                    readonly id: 24371;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24370;
                        readonly mutability: "mutable";
                        readonly name: "_maturityTime";
                        readonly nameLocation: "1284:13:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24375;
                        readonly src: "1276:21:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24369;
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
                    readonly id: 24374;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24373;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24375;
                        readonly src: "1327:7:135";
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
                readonly scope: 24398;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 24380;
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
                    readonly id: 24376;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1367:2:135";
                };
                readonly returnParameters: {
                    readonly id: 24379;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24378;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24380;
                        readonly src: "1393:7:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24377;
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
                readonly scope: 24398;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 24385;
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
                    readonly id: 24383;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24382;
                        readonly mutability: "mutable";
                        readonly name: "shareReservesDelta";
                        readonly nameLocation: "1441:18:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24385;
                        readonly src: "1433:26:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24381;
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
                    readonly id: 24384;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1469:0:135";
                };
                readonly scope: 24398;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 24392;
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
                    readonly id: 24390;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24387;
                        readonly mutability: "mutable";
                        readonly name: "shareReserves";
                        readonly nameLocation: "1505:13:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24392;
                        readonly src: "1497:21:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24386;
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
                        readonly id: 24389;
                        readonly mutability: "mutable";
                        readonly name: "bondReserves";
                        readonly nameLocation: "1528:12:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24392;
                        readonly src: "1520:20:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24388;
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
                    readonly id: 24391;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1550:0:135";
                };
                readonly scope: 24398;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 24397;
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
                    readonly id: 24393;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1590:2:135";
                };
                readonly returnParameters: {
                    readonly id: 24396;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24395;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24397;
                        readonly src: "1616:7:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24394;
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
                readonly scope: 24398;
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
            readonly linearizedBaseContracts: readonly [24398];
            readonly name: "IMockHyperdrive";
            readonly nameLocation: "1043:15:135";
            readonly scope: 25352;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [];
        }, {
            readonly id: 24933;
            readonly nodeType: "ContractDefinition";
            readonly src: "1629:7833:135";
            readonly nodes: readonly [{
                readonly id: 24403;
                readonly nodeType: "UsingForDirective";
                readonly src: "1690:33:135";
                readonly nodes: readonly [];
                readonly global: false;
                readonly libraryName: {
                    readonly id: 24401;
                    readonly name: "FixedPointMath";
                    readonly nameLocations: readonly ["1696:14:135"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 19065;
                    readonly src: "1696:14:135";
                };
                readonly typeName: {
                    readonly id: 24402;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1715:7:135";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
            }, {
                readonly id: 24405;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1729:28:135";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly mutability: "mutable";
                readonly name: "totalShares";
                readonly nameLocation: "1746:11:135";
                readonly scope: 24933;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 24404;
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
                readonly id: 24538;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2054:1483:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 24537;
                    readonly nodeType: "Block";
                    readonly src: "2194:1343:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [24419];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 24419;
                            readonly mutability: "mutable";
                            readonly name: "assets";
                            readonly nameLocation: "2261:6:135";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 24537;
                            readonly src: "2253:14:135";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 24418;
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
                        readonly id: 24420;
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "2253:14:135";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                            readonly id: 24426;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly arguments: readonly [{
                                    readonly id: 24423;
                                    readonly name: "_baseToken";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17788;
                                    readonly src: "2289:10:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IERC20_$9980";
                                        readonly typeString: "contract IERC20";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_contract$_IERC20_$9980";
                                        readonly typeString: "contract IERC20";
                                    }];
                                    readonly id: 24422;
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
                                        readonly id: 24421;
                                        readonly name: "address";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "2281:7:135";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 24424;
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
                                readonly id: 24425;
                                readonly name: "ETH";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18271;
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
                            readonly id: 24446;
                            readonly nodeType: "Block";
                            readonly src: "2370:69:135";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 24444;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 24436;
                                        readonly name: "assets";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24419;
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
                                                readonly id: 24441;
                                                readonly name: "this";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -28;
                                                readonly src: "2422:4:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$24933";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$24933";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                }];
                                                readonly id: 24440;
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
                                                    readonly id: 24439;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "2414:7:135";
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
                                                readonly id: 24437;
                                                readonly name: "_baseToken";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 17788;
                                                readonly src: "2393:10:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_IERC20_$9980";
                                                    readonly typeString: "contract IERC20";
                                                };
                                            };
                                            readonly id: 24438;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "2404:9:135";
                                            readonly memberName: "balanceOf";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 9979;
                                            readonly src: "2393:20:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_external_view$_t_address_$returns$_t_uint256_$";
                                                readonly typeString: "function (address) view external returns (uint256)";
                                            };
                                        };
                                        readonly id: 24443;
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
                                readonly id: 24445;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "2384:44:135";
                            }];
                        };
                        readonly id: 24447;
                        readonly nodeType: "IfStatement";
                        readonly src: "2277:162:135";
                        readonly trueBody: {
                            readonly id: 24435;
                            readonly nodeType: "Block";
                            readonly src: "2309:55:135";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 24433;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 24427;
                                        readonly name: "assets";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24419;
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
                                                readonly id: 24430;
                                                readonly name: "this";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -28;
                                                readonly src: "2340:4:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$24933";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$24933";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                }];
                                                readonly id: 24429;
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
                                                    readonly id: 24428;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "2332:7:135";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 24431;
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
                                        readonly id: 24432;
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
                                readonly id: 24434;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "2323:30:135";
                            }];
                        };
                    }, {
                        readonly assignments: readonly [24449];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 24449;
                            readonly mutability: "mutable";
                            readonly name: "success";
                            readonly nameLocation: "2585:7:135";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 24537;
                            readonly src: "2580:12:135";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly typeName: {
                                readonly id: 24448;
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
                        readonly id: 24451;
                        readonly initialValue: {
                            readonly hexValue: "74727565";
                            readonly id: 24450;
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
                        readonly assignments: readonly [24453];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 24453;
                            readonly mutability: "mutable";
                            readonly name: "refund";
                            readonly nameLocation: "2617:6:135";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 24537;
                            readonly src: "2609:14:135";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 24452;
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
                        readonly id: 24454;
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "2609:14:135";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                            readonly id: 24460;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly arguments: readonly [{
                                    readonly id: 24457;
                                    readonly name: "_baseToken";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17788;
                                    readonly src: "2645:10:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IERC20_$9980";
                                        readonly typeString: "contract IERC20";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_contract$_IERC20_$9980";
                                        readonly typeString: "contract IERC20";
                                    }];
                                    readonly id: 24456;
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
                                        readonly id: 24455;
                                        readonly name: "address";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "2637:7:135";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 24458;
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
                                readonly id: 24459;
                                readonly name: "ETH";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18271;
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
                            readonly id: 24493;
                            readonly nodeType: "Block";
                            readonly src: "2838:160:135";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 24491;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 24480;
                                        readonly name: "success";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24449;
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
                                                readonly id: 24483;
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
                                            readonly id: 24484;
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
                                                readonly id: 24487;
                                                readonly name: "this";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -28;
                                                readonly src: "2939:4:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$24933";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$24933";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                }];
                                                readonly id: 24486;
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
                                                    readonly id: 24485;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "2931:7:135";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 24488;
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
                                            readonly id: 24489;
                                            readonly name: "_baseAmount";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 24408;
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
                                                readonly id: 24481;
                                                readonly name: "_baseToken";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 17788;
                                                readonly src: "2862:10:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_IERC20_$9980";
                                                    readonly typeString: "contract IERC20";
                                                };
                                            };
                                            readonly id: 24482;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "2873:12:135";
                                            readonly memberName: "transferFrom";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 9937;
                                            readonly src: "2862:23:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$";
                                                readonly typeString: "function (address,address,uint256) external returns (bool)";
                                            };
                                        };
                                        readonly id: 24490;
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
                                readonly id: 24492;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "2852:135:135";
                            }];
                        };
                        readonly id: 24494;
                        readonly nodeType: "IfStatement";
                        readonly src: "2633:365:135";
                        readonly trueBody: {
                            readonly id: 24479;
                            readonly nodeType: "Block";
                            readonly src: "2665:167:135";
                            readonly statements: readonly [{
                                readonly condition: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 24464;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly expression: {
                                            readonly id: 24461;
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
                                        readonly id: 24462;
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
                                        readonly id: 24463;
                                        readonly name: "_baseAmount";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24408;
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
                                readonly id: 24471;
                                readonly nodeType: "IfStatement";
                                readonly src: "2679:97:135";
                                readonly trueBody: {
                                    readonly id: 24470;
                                    readonly nodeType: "Block";
                                    readonly src: "2708:68:135";
                                    readonly statements: readonly [{
                                        readonly errorCall: {
                                            readonly arguments: readonly [];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [];
                                                readonly expression: {
                                                    readonly id: 24465;
                                                    readonly name: "IHyperdrive";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 10676;
                                                    readonly src: "2733:11:135";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$10676_$";
                                                        readonly typeString: "type(contract IHyperdrive)";
                                                    };
                                                };
                                                readonly id: 24467;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "2745:14:135";
                                                readonly memberName: "TransferFailed";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 10621;
                                                readonly src: "2733:26:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                                    readonly typeString: "function () pure";
                                                };
                                            };
                                            readonly id: 24468;
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
                                        readonly id: 24469;
                                        readonly nodeType: "RevertStatement";
                                        readonly src: "2726:35:135";
                                    }];
                                };
                            }, {
                                readonly expression: {
                                    readonly id: 24477;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 24472;
                                        readonly name: "refund";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24453;
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
                                        readonly id: 24476;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly expression: {
                                                readonly id: 24473;
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
                                            readonly id: 24474;
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
                                            readonly id: 24475;
                                            readonly name: "_baseAmount";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 24408;
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
                                readonly id: 24478;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "2789:32:135";
                            }];
                        };
                    }, {
                        readonly condition: {
                            readonly id: 24496;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "UnaryOperation";
                            readonly operator: "!";
                            readonly prefix: true;
                            readonly src: "3011:8:135";
                            readonly subExpression: {
                                readonly id: 24495;
                                readonly name: "success";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24449;
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
                        readonly id: 24503;
                        readonly nodeType: "IfStatement";
                        readonly src: "3007:74:135";
                        readonly trueBody: {
                            readonly id: 24502;
                            readonly nodeType: "Block";
                            readonly src: "3021:60:135";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 24497;
                                            readonly name: "IHyperdrive";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 10676;
                                            readonly src: "3042:11:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$10676_$";
                                                readonly typeString: "type(contract IHyperdrive)";
                                            };
                                        };
                                        readonly id: 24499;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "3054:14:135";
                                        readonly memberName: "TransferFailed";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10621;
                                        readonly src: "3042:26:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 24500;
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
                                readonly id: 24501;
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
                            readonly id: 24506;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 24504;
                                readonly name: "totalShares";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24405;
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
                                readonly id: 24505;
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
                            readonly id: 24535;
                            readonly nodeType: "Block";
                            readonly src: "3365:166:135";
                            readonly statements: readonly [{
                                readonly assignments: readonly [24520];
                                readonly declarations: readonly [{
                                    readonly constant: false;
                                    readonly id: 24520;
                                    readonly mutability: "mutable";
                                    readonly name: "newShares";
                                    readonly nameLocation: "3387:9:135";
                                    readonly nodeType: "VariableDeclaration";
                                    readonly scope: 24535;
                                    readonly src: "3379:17:135";
                                    readonly stateVariable: false;
                                    readonly storageLocation: "default";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly typeName: {
                                        readonly id: 24519;
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
                                readonly id: 24526;
                                readonly initialValue: {
                                    readonly arguments: readonly [{
                                        readonly id: 24523;
                                        readonly name: "totalShares";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24405;
                                        readonly src: "3422:11:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }, {
                                        readonly id: 24524;
                                        readonly name: "assets";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24419;
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
                                            readonly id: 24521;
                                            readonly name: "_baseAmount";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 24408;
                                            readonly src: "3399:11:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly id: 24522;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "3411:10:135";
                                        readonly memberName: "mulDivDown";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 18327;
                                        readonly src: "3399:22:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                            readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                        };
                                    };
                                    readonly id: 24525;
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
                                    readonly id: 24529;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 24527;
                                        readonly name: "totalShares";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24405;
                                        readonly src: "3456:11:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "+=";
                                    readonly rightHandSide: {
                                        readonly id: 24528;
                                        readonly name: "newShares";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24520;
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
                                readonly id: 24530;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "3456:24:135";
                            }, {
                                readonly expression: {
                                    readonly components: readonly [{
                                        readonly id: 24531;
                                        readonly name: "newShares";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24520;
                                        readonly src: "3502:9:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }, {
                                        readonly id: 24532;
                                        readonly name: "refund";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24453;
                                        readonly src: "3513:6:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }];
                                    readonly id: 24533;
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
                                readonly functionReturnParameters: 24417;
                                readonly id: 24534;
                                readonly nodeType: "Return";
                                readonly src: "3494:26:135";
                            }];
                        };
                        readonly id: 24536;
                        readonly nodeType: "IfStatement";
                        readonly src: "3212:319:135";
                        readonly trueBody: {
                            readonly id: 24518;
                            readonly nodeType: "Block";
                            readonly src: "3234:125:135";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 24512;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 24507;
                                        readonly name: "totalShares";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24405;
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
                                            readonly id: 24510;
                                            readonly name: "_initialVaultSharePrice";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 17816;
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
                                                readonly id: 24508;
                                                readonly name: "_baseAmount";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 24408;
                                                readonly src: "3262:11:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly id: 24509;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "3274:7:135";
                                            readonly memberName: "divDown";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 18363;
                                            readonly src: "3262:19:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                                readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                            };
                                        };
                                        readonly id: 24511;
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
                                readonly id: 24513;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "3248:58:135";
                            }, {
                                readonly expression: {
                                    readonly components: readonly [{
                                        readonly id: 24514;
                                        readonly name: "totalShares";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24405;
                                        readonly src: "3328:11:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }, {
                                        readonly id: 24515;
                                        readonly name: "refund";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24453;
                                        readonly src: "3341:6:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }];
                                    readonly id: 24516;
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
                                readonly functionReturnParameters: 24417;
                                readonly id: 24517;
                                readonly nodeType: "Return";
                                readonly src: "3320:28:135";
                            }];
                        };
                    }];
                };
                readonly baseFunctions: readonly [13026];
                readonly documentation: {
                    readonly id: 24406;
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
                    readonly id: 24412;
                    readonly nodeType: "OverrideSpecifier";
                    readonly overrides: readonly [];
                    readonly src: "2158:8:135";
                };
                readonly parameters: {
                    readonly id: 24411;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24408;
                        readonly mutability: "mutable";
                        readonly name: "_baseAmount";
                        readonly nameLocation: "2097:11:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24538;
                        readonly src: "2089:19:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24407;
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
                        readonly id: 24410;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24538;
                        readonly src: "2118:14:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_calldata_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 24409;
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
                    readonly id: 24417;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24414;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24538;
                        readonly src: "2176:7:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24413;
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
                        readonly id: 24416;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24538;
                        readonly src: "2185:7:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24415;
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
                readonly scope: 24933;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 24633;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3655:1226:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 24632;
                    readonly nodeType: "Block";
                    readonly src: "3771:1110:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [24548];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 24548;
                            readonly mutability: "mutable";
                            readonly name: "baseAmount";
                            readonly nameLocation: "3842:10:135";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 24632;
                            readonly src: "3834:18:135";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 24547;
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
                        readonly id: 24552;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 24550;
                                readonly name: "_shareAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24541;
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
                                readonly id: 24549;
                                readonly name: "_convertToBase";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [24857];
                                readonly referencedDeclaration: 24857;
                                readonly src: "3855:14:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256) view returns (uint256)";
                                };
                            };
                            readonly id: 24551;
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
                            readonly id: 24555;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 24553;
                                readonly name: "totalShares";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24405;
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
                                readonly id: 24554;
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
                            readonly id: 24574;
                            readonly nodeType: "Block";
                            readonly src: "4125:111:135";
                            readonly statements: readonly [{
                                readonly assignments: readonly [24565];
                                readonly declarations: readonly [{
                                    readonly constant: false;
                                    readonly id: 24565;
                                    readonly mutability: "mutable";
                                    readonly name: "newShares";
                                    readonly nameLocation: "4147:9:135";
                                    readonly nodeType: "VariableDeclaration";
                                    readonly scope: 24574;
                                    readonly src: "4139:17:135";
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
                                        readonly src: "4139:7:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly visibility: "internal";
                                }];
                                readonly id: 24569;
                                readonly initialValue: {
                                    readonly arguments: readonly [{
                                        readonly id: 24567;
                                        readonly name: "baseAmount";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24548;
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
                                        readonly id: 24566;
                                        readonly name: "_convertToShares";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [24903];
                                        readonly referencedDeclaration: 24903;
                                        readonly src: "4159:16:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_view$_t_uint256_$returns$_t_uint256_$";
                                            readonly typeString: "function (uint256) view returns (uint256)";
                                        };
                                    };
                                    readonly id: 24568;
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
                                    readonly id: 24572;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 24570;
                                        readonly name: "totalShares";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24405;
                                        readonly src: "4201:11:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "+=";
                                    readonly rightHandSide: {
                                        readonly id: 24571;
                                        readonly name: "newShares";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24565;
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
                                readonly id: 24573;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "4201:24:135";
                            }];
                        };
                        readonly id: 24575;
                        readonly nodeType: "IfStatement";
                        readonly src: "4015:221:135";
                        readonly trueBody: {
                            readonly id: 24563;
                            readonly nodeType: "Block";
                            readonly src: "4037:82:135";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 24561;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 24556;
                                        readonly name: "totalShares";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24405;
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
                                            readonly id: 24559;
                                            readonly name: "_initialVaultSharePrice";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 17816;
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
                                                readonly id: 24557;
                                                readonly name: "baseAmount";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 24548;
                                                readonly src: "4065:10:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly id: 24558;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "4076:7:135";
                                            readonly memberName: "divDown";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 18363;
                                            readonly src: "4065:18:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                                readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                            };
                                        };
                                        readonly id: 24560;
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
                                readonly id: 24562;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "4051:57:135";
                            }];
                        };
                    }, {
                        readonly assignments: readonly [24577];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 24577;
                            readonly mutability: "mutable";
                            readonly name: "success";
                            readonly nameLocation: "4382:7:135";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 24632;
                            readonly src: "4377:12:135";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly typeName: {
                                readonly id: 24576;
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
                        readonly id: 24579;
                        readonly initialValue: {
                            readonly hexValue: "74727565";
                            readonly id: 24578;
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
                        readonly assignments: readonly [24581];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 24581;
                            readonly mutability: "mutable";
                            readonly name: "refund";
                            readonly nameLocation: "4414:6:135";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 24632;
                            readonly src: "4406:14:135";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 24580;
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
                        readonly id: 24582;
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "4406:14:135";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                            readonly id: 24588;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly arguments: readonly [{
                                    readonly id: 24585;
                                    readonly name: "_baseToken";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17788;
                                    readonly src: "4442:10:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IERC20_$9980";
                                        readonly typeString: "contract IERC20";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_contract$_IERC20_$9980";
                                        readonly typeString: "contract IERC20";
                                    }];
                                    readonly id: 24584;
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
                                        readonly id: 24583;
                                        readonly name: "address";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "4434:7:135";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 24586;
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
                                readonly id: 24587;
                                readonly name: "ETH";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18271;
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
                            readonly id: 24621;
                            readonly nodeType: "Block";
                            readonly src: "4633:159:135";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 24619;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 24608;
                                        readonly name: "success";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24577;
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
                                                readonly id: 24611;
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
                                            readonly id: 24612;
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
                                                readonly id: 24615;
                                                readonly name: "this";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -28;
                                                readonly src: "4734:4:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$24933";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$24933";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                }];
                                                readonly id: 24614;
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
                                                    readonly id: 24613;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "4726:7:135";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 24616;
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
                                            readonly id: 24617;
                                            readonly name: "baseAmount";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 24548;
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
                                                readonly id: 24609;
                                                readonly name: "_baseToken";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 17788;
                                                readonly src: "4657:10:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_IERC20_$9980";
                                                    readonly typeString: "contract IERC20";
                                                };
                                            };
                                            readonly id: 24610;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "4668:12:135";
                                            readonly memberName: "transferFrom";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 9937;
                                            readonly src: "4657:23:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$";
                                                readonly typeString: "function (address,address,uint256) external returns (bool)";
                                            };
                                        };
                                        readonly id: 24618;
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
                                readonly id: 24620;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "4647:134:135";
                            }];
                        };
                        readonly id: 24622;
                        readonly nodeType: "IfStatement";
                        readonly src: "4430:362:135";
                        readonly trueBody: {
                            readonly id: 24607;
                            readonly nodeType: "Block";
                            readonly src: "4462:165:135";
                            readonly statements: readonly [{
                                readonly condition: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 24592;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly expression: {
                                            readonly id: 24589;
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
                                        readonly id: 24590;
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
                                        readonly id: 24591;
                                        readonly name: "baseAmount";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24548;
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
                                readonly id: 24599;
                                readonly nodeType: "IfStatement";
                                readonly src: "4476:96:135";
                                readonly trueBody: {
                                    readonly id: 24598;
                                    readonly nodeType: "Block";
                                    readonly src: "4504:68:135";
                                    readonly statements: readonly [{
                                        readonly errorCall: {
                                            readonly arguments: readonly [];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [];
                                                readonly expression: {
                                                    readonly id: 24593;
                                                    readonly name: "IHyperdrive";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 10676;
                                                    readonly src: "4529:11:135";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$10676_$";
                                                        readonly typeString: "type(contract IHyperdrive)";
                                                    };
                                                };
                                                readonly id: 24595;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "4541:14:135";
                                                readonly memberName: "TransferFailed";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 10621;
                                                readonly src: "4529:26:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                                    readonly typeString: "function () pure";
                                                };
                                            };
                                            readonly id: 24596;
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
                                        readonly id: 24597;
                                        readonly nodeType: "RevertStatement";
                                        readonly src: "4522:35:135";
                                    }];
                                };
                            }, {
                                readonly expression: {
                                    readonly id: 24605;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 24600;
                                        readonly name: "refund";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24581;
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
                                        readonly id: 24604;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly expression: {
                                                readonly id: 24601;
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
                                            readonly id: 24602;
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
                                            readonly id: 24603;
                                            readonly name: "baseAmount";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 24548;
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
                                readonly id: 24606;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "4585:31:135";
                            }];
                        };
                    }, {
                        readonly condition: {
                            readonly id: 24624;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "UnaryOperation";
                            readonly operator: "!";
                            readonly prefix: true;
                            readonly src: "4805:8:135";
                            readonly subExpression: {
                                readonly id: 24623;
                                readonly name: "success";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24577;
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
                        readonly id: 24631;
                        readonly nodeType: "IfStatement";
                        readonly src: "4801:74:135";
                        readonly trueBody: {
                            readonly id: 24630;
                            readonly nodeType: "Block";
                            readonly src: "4815:60:135";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 24625;
                                            readonly name: "IHyperdrive";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 10676;
                                            readonly src: "4836:11:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$10676_$";
                                                readonly typeString: "type(contract IHyperdrive)";
                                            };
                                        };
                                        readonly id: 24627;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "4848:14:135";
                                        readonly memberName: "TransferFailed";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10621;
                                        readonly src: "4836:26:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 24628;
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
                                readonly id: 24629;
                                readonly nodeType: "RevertStatement";
                                readonly src: "4829:35:135";
                            }];
                        };
                    }];
                };
                readonly baseFunctions: readonly [13034];
                readonly documentation: {
                    readonly id: 24539;
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
                    readonly id: 24545;
                    readonly nodeType: "OverrideSpecifier";
                    readonly overrides: readonly [];
                    readonly src: "3762:8:135";
                };
                readonly parameters: {
                    readonly id: 24544;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24541;
                        readonly mutability: "mutable";
                        readonly name: "_shareAmount";
                        readonly nameLocation: "3700:12:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24633;
                        readonly src: "3692:20:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24540;
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
                        readonly id: 24543;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24633;
                        readonly src: "3722:14:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_calldata_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 24542;
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
                    readonly id: 24546;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "3771:0:135";
                };
                readonly scope: 24933;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 24710;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5177:986:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 24709;
                    readonly nodeType: "Block";
                    readonly src: "5356:807:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 24653;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 24646;
                                readonly name: "_shareAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24636;
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
                                    readonly id: 24649;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 24647;
                                        readonly name: "_shareAmount";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24636;
                                        readonly src: "5493:12:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: ">";
                                    readonly rightExpression: {
                                        readonly id: 24648;
                                        readonly name: "totalShares";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24405;
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
                                    readonly id: 24651;
                                    readonly name: "_shareAmount";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 24636;
                                    readonly src: "5536:12:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 24652;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "Conditional";
                                readonly src: "5493:55:135";
                                readonly trueExpression: {
                                    readonly id: 24650;
                                    readonly name: "totalShares";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 24405;
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
                        readonly id: 24654;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "5478:70:135";
                    }, {
                        readonly assignments: readonly [24656];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 24656;
                            readonly mutability: "mutable";
                            readonly name: "withdrawValue";
                            readonly nameLocation: "5607:13:135";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 24709;
                            readonly src: "5599:21:135";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 24655;
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
                        readonly id: 24660;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 24658;
                                readonly name: "_shareAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24636;
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
                                readonly id: 24657;
                                readonly name: "_convertToBase";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [24857];
                                readonly referencedDeclaration: 24857;
                                readonly src: "5623:14:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256) view returns (uint256)";
                                };
                            };
                            readonly id: 24659;
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
                            readonly id: 24663;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 24661;
                                readonly name: "totalShares";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24405;
                                readonly src: "5740:11:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "-=";
                            readonly rightHandSide: {
                                readonly id: 24662;
                                readonly name: "_shareAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24636;
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
                        readonly id: 24664;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "5740:27:135";
                    }, {
                        readonly assignments: readonly [24666];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 24666;
                            readonly mutability: "mutable";
                            readonly name: "success";
                            readonly nameLocation: "5782:7:135";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 24709;
                            readonly src: "5777:12:135";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly typeName: {
                                readonly id: 24665;
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
                        readonly id: 24667;
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "5777:12:135";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                            readonly id: 24673;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly arguments: readonly [{
                                    readonly id: 24670;
                                    readonly name: "_baseToken";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17788;
                                    readonly src: "5811:10:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IERC20_$9980";
                                        readonly typeString: "contract IERC20";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_contract$_IERC20_$9980";
                                        readonly typeString: "contract IERC20";
                                    }];
                                    readonly id: 24669;
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
                                        readonly id: 24668;
                                        readonly name: "address";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "5803:7:135";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 24671;
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
                                readonly id: 24672;
                                readonly name: "ETH";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18271;
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
                            readonly id: 24696;
                            readonly nodeType: "Block";
                            readonly src: "5960:83:135";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 24694;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 24688;
                                        readonly name: "success";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24666;
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
                                            readonly id: 24691;
                                            readonly name: "_destination";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 24638;
                                            readonly src: "6004:12:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        }, {
                                            readonly id: 24692;
                                            readonly name: "withdrawValue";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 24656;
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
                                                readonly id: 24689;
                                                readonly name: "_baseToken";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 17788;
                                                readonly src: "5984:10:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_IERC20_$9980";
                                                    readonly typeString: "contract IERC20";
                                                };
                                            };
                                            readonly id: 24690;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "5995:8:135";
                                            readonly memberName: "transfer";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 9925;
                                            readonly src: "5984:19:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$";
                                                readonly typeString: "function (address,uint256) external returns (bool)";
                                            };
                                        };
                                        readonly id: 24693;
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
                                readonly id: 24695;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "5974:58:135";
                            }];
                        };
                        readonly id: 24697;
                        readonly nodeType: "IfStatement";
                        readonly src: "5799:244:135";
                        readonly trueBody: {
                            readonly id: 24687;
                            readonly nodeType: "Block";
                            readonly src: "5831:123:135";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 24685;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly components: readonly [{
                                            readonly id: 24674;
                                            readonly name: "success";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 24666;
                                            readonly src: "5846:7:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bool";
                                                readonly typeString: "bool";
                                            };
                                        }, null];
                                        readonly id: 24675;
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
                                            readonly id: 24683;
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
                                                        readonly id: 24678;
                                                        readonly name: "_destination";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 24638;
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
                                                        readonly id: 24677;
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
                                                            readonly id: 24676;
                                                            readonly name: "address";
                                                            readonly nodeType: "ElementaryTypeName";
                                                            readonly src: "5859:8:135";
                                                            readonly stateMutability: "payable";
                                                            readonly typeDescriptions: {};
                                                        };
                                                    };
                                                    readonly id: 24679;
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
                                                readonly id: 24680;
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
                                            readonly id: 24682;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly names: readonly ["value"];
                                            readonly nodeType: "FunctionCallOptions";
                                            readonly options: readonly [{
                                                readonly id: 24681;
                                                readonly name: "withdrawValue";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 24656;
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
                                        readonly id: 24684;
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
                                readonly id: 24686;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "5845:98:135";
                            }];
                        };
                    }, {
                        readonly condition: {
                            readonly id: 24699;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "UnaryOperation";
                            readonly operator: "!";
                            readonly prefix: true;
                            readonly src: "6056:8:135";
                            readonly subExpression: {
                                readonly id: 24698;
                                readonly name: "success";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24666;
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
                        readonly id: 24706;
                        readonly nodeType: "IfStatement";
                        readonly src: "6052:74:135";
                        readonly trueBody: {
                            readonly id: 24705;
                            readonly nodeType: "Block";
                            readonly src: "6066:60:135";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 24700;
                                            readonly name: "IHyperdrive";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 10676;
                                            readonly src: "6087:11:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$10676_$";
                                                readonly typeString: "type(contract IHyperdrive)";
                                            };
                                        };
                                        readonly id: 24702;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "6099:14:135";
                                        readonly memberName: "TransferFailed";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10621;
                                        readonly src: "6087:26:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 24703;
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
                                readonly id: 24704;
                                readonly nodeType: "RevertStatement";
                                readonly src: "6080:35:135";
                            }];
                        };
                    }, {
                        readonly expression: {
                            readonly id: 24707;
                            readonly name: "withdrawValue";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 24656;
                            readonly src: "6143:13:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 24645;
                        readonly id: 24708;
                        readonly nodeType: "Return";
                        readonly src: "6136:20:135";
                    }];
                };
                readonly baseFunctions: readonly [13046];
                readonly documentation: {
                    readonly id: 24634;
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
                    readonly id: 24642;
                    readonly nodeType: "OverrideSpecifier";
                    readonly overrides: readonly [];
                    readonly src: "5313:8:135";
                };
                readonly parameters: {
                    readonly id: 24641;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24636;
                        readonly mutability: "mutable";
                        readonly name: "_shareAmount";
                        readonly nameLocation: "5221:12:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24710;
                        readonly src: "5213:20:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24635;
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
                        readonly id: 24638;
                        readonly mutability: "mutable";
                        readonly name: "_destination";
                        readonly nameLocation: "5251:12:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24710;
                        readonly src: "5243:20:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 24637;
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
                        readonly id: 24640;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24710;
                        readonly src: "5273:14:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_calldata_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 24639;
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
                    readonly id: 24645;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24644;
                        readonly mutability: "mutable";
                        readonly name: "amountWithdrawn";
                        readonly nameLocation: "5339:15:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24710;
                        readonly src: "5331:23:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24643;
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
                readonly scope: 24933;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 24783;
                readonly nodeType: "FunctionDefinition";
                readonly src: "6405:923:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 24782;
                    readonly nodeType: "Block";
                    readonly src: "6552:776:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 24728;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 24721;
                                readonly name: "_shareAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24713;
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
                                    readonly id: 24724;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 24722;
                                        readonly name: "_shareAmount";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24713;
                                        readonly src: "6689:12:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: ">";
                                    readonly rightExpression: {
                                        readonly id: 24723;
                                        readonly name: "totalShares";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24405;
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
                                    readonly id: 24726;
                                    readonly name: "_shareAmount";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 24713;
                                    readonly src: "6732:12:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 24727;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "Conditional";
                                readonly src: "6689:55:135";
                                readonly trueExpression: {
                                    readonly id: 24725;
                                    readonly name: "totalShares";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 24405;
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
                        readonly id: 24729;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6674:70:135";
                    }, {
                        readonly assignments: readonly [24731];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 24731;
                            readonly mutability: "mutable";
                            readonly name: "withdrawValue";
                            readonly nameLocation: "6803:13:135";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 24782;
                            readonly src: "6795:21:135";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 24730;
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
                        readonly id: 24735;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 24733;
                                readonly name: "_shareAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24713;
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
                                readonly id: 24732;
                                readonly name: "_convertToBase";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [24857];
                                readonly referencedDeclaration: 24857;
                                readonly src: "6819:14:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256) view returns (uint256)";
                                };
                            };
                            readonly id: 24734;
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
                            readonly id: 24738;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 24736;
                                readonly name: "totalShares";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24405;
                                readonly src: "6936:11:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "-=";
                            readonly rightHandSide: {
                                readonly id: 24737;
                                readonly name: "_shareAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24713;
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
                        readonly id: 24739;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6936:27:135";
                    }, {
                        readonly assignments: readonly [24741];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 24741;
                            readonly mutability: "mutable";
                            readonly name: "success";
                            readonly nameLocation: "6978:7:135";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 24782;
                            readonly src: "6973:12:135";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly typeName: {
                                readonly id: 24740;
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
                        readonly id: 24742;
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "6973:12:135";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                            readonly id: 24748;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly arguments: readonly [{
                                    readonly id: 24745;
                                    readonly name: "_baseToken";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17788;
                                    readonly src: "7007:10:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IERC20_$9980";
                                        readonly typeString: "contract IERC20";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_contract$_IERC20_$9980";
                                        readonly typeString: "contract IERC20";
                                    }];
                                    readonly id: 24744;
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
                                        readonly id: 24743;
                                        readonly name: "address";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "6999:7:135";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 24746;
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
                                readonly id: 24747;
                                readonly name: "ETH";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18271;
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
                            readonly id: 24771;
                            readonly nodeType: "Block";
                            readonly src: "7156:83:135";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 24769;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 24763;
                                        readonly name: "success";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24741;
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
                                            readonly id: 24766;
                                            readonly name: "_destination";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 24715;
                                            readonly src: "7200:12:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        }, {
                                            readonly id: 24767;
                                            readonly name: "withdrawValue";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 24731;
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
                                                readonly id: 24764;
                                                readonly name: "_baseToken";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 17788;
                                                readonly src: "7180:10:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_IERC20_$9980";
                                                    readonly typeString: "contract IERC20";
                                                };
                                            };
                                            readonly id: 24765;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "7191:8:135";
                                            readonly memberName: "transfer";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 9925;
                                            readonly src: "7180:19:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$";
                                                readonly typeString: "function (address,uint256) external returns (bool)";
                                            };
                                        };
                                        readonly id: 24768;
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
                                readonly id: 24770;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "7170:58:135";
                            }];
                        };
                        readonly id: 24772;
                        readonly nodeType: "IfStatement";
                        readonly src: "6995:244:135";
                        readonly trueBody: {
                            readonly id: 24762;
                            readonly nodeType: "Block";
                            readonly src: "7027:123:135";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 24760;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly components: readonly [{
                                            readonly id: 24749;
                                            readonly name: "success";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 24741;
                                            readonly src: "7042:7:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bool";
                                                readonly typeString: "bool";
                                            };
                                        }, null];
                                        readonly id: 24750;
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
                                            readonly id: 24758;
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
                                                        readonly id: 24753;
                                                        readonly name: "_destination";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 24715;
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
                                                        readonly id: 24752;
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
                                                            readonly id: 24751;
                                                            readonly name: "address";
                                                            readonly nodeType: "ElementaryTypeName";
                                                            readonly src: "7055:8:135";
                                                            readonly stateMutability: "payable";
                                                            readonly typeDescriptions: {};
                                                        };
                                                    };
                                                    readonly id: 24754;
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
                                                readonly id: 24755;
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
                                            readonly id: 24757;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly names: readonly ["value"];
                                            readonly nodeType: "FunctionCallOptions";
                                            readonly options: readonly [{
                                                readonly id: 24756;
                                                readonly name: "withdrawValue";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 24731;
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
                                        readonly id: 24759;
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
                                readonly id: 24761;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "7041:98:135";
                            }];
                        };
                    }, {
                        readonly condition: {
                            readonly id: 24774;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "UnaryOperation";
                            readonly operator: "!";
                            readonly prefix: true;
                            readonly src: "7252:8:135";
                            readonly subExpression: {
                                readonly id: 24773;
                                readonly name: "success";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24741;
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
                        readonly id: 24781;
                        readonly nodeType: "IfStatement";
                        readonly src: "7248:74:135";
                        readonly trueBody: {
                            readonly id: 24780;
                            readonly nodeType: "Block";
                            readonly src: "7262:60:135";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 24775;
                                            readonly name: "IHyperdrive";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 10676;
                                            readonly src: "7283:11:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$10676_$";
                                                readonly typeString: "type(contract IHyperdrive)";
                                            };
                                        };
                                        readonly id: 24777;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "7295:14:135";
                                        readonly memberName: "TransferFailed";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10621;
                                        readonly src: "7283:26:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 24778;
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
                                readonly id: 24779;
                                readonly nodeType: "RevertStatement";
                                readonly src: "7276:35:135";
                            }];
                        };
                    }];
                };
                readonly baseFunctions: readonly [13056];
                readonly documentation: {
                    readonly id: 24711;
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
                    readonly id: 24719;
                    readonly nodeType: "OverrideSpecifier";
                    readonly overrides: readonly [];
                    readonly src: "6543:8:135";
                };
                readonly parameters: {
                    readonly id: 24718;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24713;
                        readonly mutability: "mutable";
                        readonly name: "_shareAmount";
                        readonly nameLocation: "6451:12:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24783;
                        readonly src: "6443:20:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24712;
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
                        readonly id: 24715;
                        readonly mutability: "mutable";
                        readonly name: "_destination";
                        readonly nameLocation: "6481:12:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24783;
                        readonly src: "6473:20:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 24714;
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
                        readonly id: 24717;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24783;
                        readonly src: "6503:14:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_calldata_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 24716;
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
                    readonly id: 24720;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "6552:0:135";
                };
                readonly scope: 24933;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 24806;
                readonly nodeType: "FunctionDefinition";
                readonly src: "7513:174:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 24805;
                    readonly nodeType: "Block";
                    readonly src: "7566:121:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly id: 24797;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                                readonly id: 24792;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly arguments: readonly [{
                                        readonly id: 24789;
                                        readonly name: "_baseToken";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 17788;
                                        readonly src: "7588:10:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_IERC20_$9980";
                                            readonly typeString: "contract IERC20";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_contract$_IERC20_$9980";
                                            readonly typeString: "contract IERC20";
                                        }];
                                        readonly id: 24788;
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
                                            readonly id: 24787;
                                            readonly name: "address";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "7580:7:135";
                                            readonly typeDescriptions: {};
                                        };
                                    };
                                    readonly id: 24790;
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
                                    readonly id: 24791;
                                    readonly name: "ETH";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18271;
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
                                readonly id: 24796;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly expression: {
                                        readonly id: 24793;
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
                                    readonly id: 24794;
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
                                readonly operator: ">";
                                readonly rightExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 24795;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "7622:1:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly src: "7610:13:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly src: "7580:43:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 24804;
                        readonly nodeType: "IfStatement";
                        readonly src: "7576:105:135";
                        readonly trueBody: {
                            readonly id: 24803;
                            readonly nodeType: "Block";
                            readonly src: "7625:56:135";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 24798;
                                            readonly name: "IHyperdrive";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 10676;
                                            readonly src: "7646:11:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$10676_$";
                                                readonly typeString: "type(contract IHyperdrive)";
                                            };
                                        };
                                        readonly id: 24800;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "7658:10:135";
                                        readonly memberName: "NotPayable";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10595;
                                        readonly src: "7646:22:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 24801;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "7646:24:135";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 24802;
                                readonly nodeType: "RevertStatement";
                                readonly src: "7639:31:135";
                            }];
                        };
                    }];
                };
                readonly baseFunctions: readonly [13060];
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_checkMessageValue";
                readonly nameLocation: "7522:18:135";
                readonly overrides: {
                    readonly id: 24785;
                    readonly nodeType: "OverrideSpecifier";
                    readonly overrides: readonly [];
                    readonly src: "7557:8:135";
                };
                readonly parameters: {
                    readonly id: 24784;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "7540:2:135";
                };
                readonly returnParameters: {
                    readonly id: 24786;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "7566:0:135";
                };
                readonly scope: 24933;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 24857;
                readonly nodeType: "FunctionDefinition";
                readonly src: "7848:460:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 24856;
                    readonly nodeType: "Block";
                    readonly src: "7949:359:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [24816];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 24816;
                            readonly mutability: "mutable";
                            readonly name: "assets";
                            readonly nameLocation: "8027:6:135";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 24856;
                            readonly src: "8019:14:135";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 24815;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "8019:7:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 24817;
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "8019:14:135";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                            readonly id: 24823;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly arguments: readonly [{
                                    readonly id: 24820;
                                    readonly name: "_baseToken";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17788;
                                    readonly src: "8055:10:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IERC20_$9980";
                                        readonly typeString: "contract IERC20";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_contract$_IERC20_$9980";
                                        readonly typeString: "contract IERC20";
                                    }];
                                    readonly id: 24819;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "8047:7:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_address_$";
                                        readonly typeString: "type(address)";
                                    };
                                    readonly typeName: {
                                        readonly id: 24818;
                                        readonly name: "address";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "8047:7:135";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 24821;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "8047:19:135";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "==";
                            readonly rightExpression: {
                                readonly id: 24822;
                                readonly name: "ETH";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18271;
                                readonly src: "8070:3:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "8047:26:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly falseBody: {
                            readonly id: 24843;
                            readonly nodeType: "Block";
                            readonly src: "8136:69:135";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 24841;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 24833;
                                        readonly name: "assets";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24816;
                                        readonly src: "8150:6:135";
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
                                                readonly id: 24838;
                                                readonly name: "this";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -28;
                                                readonly src: "8188:4:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$24933";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$24933";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                }];
                                                readonly id: 24837;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "8180:7:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_address_$";
                                                    readonly typeString: "type(address)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 24836;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "8180:7:135";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 24839;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "8180:13:135";
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
                                                readonly id: 24834;
                                                readonly name: "_baseToken";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 17788;
                                                readonly src: "8159:10:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_IERC20_$9980";
                                                    readonly typeString: "contract IERC20";
                                                };
                                            };
                                            readonly id: 24835;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "8170:9:135";
                                            readonly memberName: "balanceOf";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 9979;
                                            readonly src: "8159:20:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_external_view$_t_address_$returns$_t_uint256_$";
                                                readonly typeString: "function (address) view external returns (uint256)";
                                            };
                                        };
                                        readonly id: 24840;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "8159:35:135";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "8150:44:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 24842;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "8150:44:135";
                            }];
                        };
                        readonly id: 24844;
                        readonly nodeType: "IfStatement";
                        readonly src: "8043:162:135";
                        readonly trueBody: {
                            readonly id: 24832;
                            readonly nodeType: "Block";
                            readonly src: "8075:55:135";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 24830;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 24824;
                                        readonly name: "assets";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24816;
                                        readonly src: "8089:6:135";
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
                                                readonly id: 24827;
                                                readonly name: "this";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -28;
                                                readonly src: "8106:4:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$24933";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$24933";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                }];
                                                readonly id: 24826;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "8098:7:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_address_$";
                                                    readonly typeString: "type(address)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 24825;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "8098:7:135";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 24828;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "8098:13:135";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        };
                                        readonly id: 24829;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "8112:7:135";
                                        readonly memberName: "balance";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "8098:21:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "8089:30:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 24831;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "8089:30:135";
                            }];
                        };
                    }, {
                        readonly expression: {
                            readonly condition: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 24847;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 24845;
                                    readonly name: "totalShares";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 24405;
                                    readonly src: "8234:11:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "!=";
                                readonly rightExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 24846;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "8249:1:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly src: "8234:16:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly falseExpression: {
                                readonly hexValue: "30";
                                readonly id: 24853;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "8300:1:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly id: 24854;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "Conditional";
                            readonly src: "8234:67:135";
                            readonly trueExpression: {
                                readonly arguments: readonly [{
                                    readonly id: 24850;
                                    readonly name: "assets";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 24816;
                                    readonly src: "8277:6:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 24851;
                                    readonly name: "totalShares";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 24405;
                                    readonly src: "8285:11:135";
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
                                        readonly id: 24848;
                                        readonly name: "_shareAmount";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24809;
                                        readonly src: "8253:12:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 24849;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "8266:10:135";
                                    readonly memberName: "mulDivDown";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 18327;
                                    readonly src: "8253:23:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                    };
                                };
                                readonly id: 24852;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "8253:44:135";
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
                        readonly functionReturnParameters: 24814;
                        readonly id: 24855;
                        readonly nodeType: "Return";
                        readonly src: "8215:86:135";
                    }];
                };
                readonly baseFunctions: readonly [13090];
                readonly documentation: {
                    readonly id: 24807;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "7693:150:135";
                    readonly text: "@dev Convert an amount of vault shares to an amount of base.\n @param _shareAmount The vault shares amount.\n @return The base amount.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_convertToBase";
                readonly nameLocation: "7857:14:135";
                readonly overrides: {
                    readonly id: 24811;
                    readonly nodeType: "OverrideSpecifier";
                    readonly overrides: readonly [];
                    readonly src: "7922:8:135";
                };
                readonly parameters: {
                    readonly id: 24810;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24809;
                        readonly mutability: "mutable";
                        readonly name: "_shareAmount";
                        readonly nameLocation: "7889:12:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24857;
                        readonly src: "7881:20:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24808;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7881:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7871:36:135";
                };
                readonly returnParameters: {
                    readonly id: 24814;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24813;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24857;
                        readonly src: "7940:7:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24812;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7940:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7939:9:135";
                };
                readonly scope: 24933;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 24903;
                readonly nodeType: "FunctionDefinition";
                readonly src: "8468:425:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 24902;
                    readonly nodeType: "Block";
                    readonly src: "8570:323:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [24867];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 24867;
                            readonly mutability: "mutable";
                            readonly name: "assets";
                            readonly nameLocation: "8648:6:135";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 24902;
                            readonly src: "8640:14:135";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 24866;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "8640:7:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 24868;
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "8640:14:135";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                            readonly id: 24874;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly arguments: readonly [{
                                    readonly id: 24871;
                                    readonly name: "_baseToken";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17788;
                                    readonly src: "8676:10:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IERC20_$9980";
                                        readonly typeString: "contract IERC20";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_contract$_IERC20_$9980";
                                        readonly typeString: "contract IERC20";
                                    }];
                                    readonly id: 24870;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "8668:7:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_address_$";
                                        readonly typeString: "type(address)";
                                    };
                                    readonly typeName: {
                                        readonly id: 24869;
                                        readonly name: "address";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "8668:7:135";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 24872;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "8668:19:135";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "==";
                            readonly rightExpression: {
                                readonly id: 24873;
                                readonly name: "ETH";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18271;
                                readonly src: "8691:3:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "8668:26:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly falseBody: {
                            readonly id: 24894;
                            readonly nodeType: "Block";
                            readonly src: "8757:69:135";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 24892;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 24884;
                                        readonly name: "assets";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24867;
                                        readonly src: "8771:6:135";
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
                                                readonly id: 24889;
                                                readonly name: "this";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -28;
                                                readonly src: "8809:4:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$24933";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$24933";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                }];
                                                readonly id: 24888;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "8801:7:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_address_$";
                                                    readonly typeString: "type(address)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 24887;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "8801:7:135";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 24890;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "8801:13:135";
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
                                                readonly id: 24885;
                                                readonly name: "_baseToken";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 17788;
                                                readonly src: "8780:10:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_IERC20_$9980";
                                                    readonly typeString: "contract IERC20";
                                                };
                                            };
                                            readonly id: 24886;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "8791:9:135";
                                            readonly memberName: "balanceOf";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 9979;
                                            readonly src: "8780:20:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_external_view$_t_address_$returns$_t_uint256_$";
                                                readonly typeString: "function (address) view external returns (uint256)";
                                            };
                                        };
                                        readonly id: 24891;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "8780:35:135";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "8771:44:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 24893;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "8771:44:135";
                            }];
                        };
                        readonly id: 24895;
                        readonly nodeType: "IfStatement";
                        readonly src: "8664:162:135";
                        readonly trueBody: {
                            readonly id: 24883;
                            readonly nodeType: "Block";
                            readonly src: "8696:55:135";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 24881;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 24875;
                                        readonly name: "assets";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24867;
                                        readonly src: "8710:6:135";
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
                                                readonly id: 24878;
                                                readonly name: "this";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -28;
                                                readonly src: "8727:4:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$24933";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$24933";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                }];
                                                readonly id: 24877;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "8719:7:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_address_$";
                                                    readonly typeString: "type(address)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 24876;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "8719:7:135";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 24879;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "8719:13:135";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        };
                                        readonly id: 24880;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "8733:7:135";
                                        readonly memberName: "balance";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "8719:21:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "8710:30:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 24882;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "8710:30:135";
                            }];
                        };
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 24898;
                                readonly name: "totalShares";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24405;
                                readonly src: "8866:11:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 24899;
                                readonly name: "assets";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24867;
                                readonly src: "8879:6:135";
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
                                    readonly id: 24896;
                                    readonly name: "_baseAmount";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 24860;
                                    readonly src: "8843:11:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 24897;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "8855:10:135";
                                readonly memberName: "mulDivDown";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 18327;
                                readonly src: "8843:22:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 24900;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "8843:43:135";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 24865;
                        readonly id: 24901;
                        readonly nodeType: "Return";
                        readonly src: "8836:50:135";
                    }];
                };
                readonly baseFunctions: readonly [13098];
                readonly documentation: {
                    readonly id: 24858;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "8314:149:135";
                    readonly text: "@dev Convert an amount of base to an amount of vault shares.\n @param _baseAmount The base amount.\n @return The vault shares amount.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_convertToShares";
                readonly nameLocation: "8477:16:135";
                readonly overrides: {
                    readonly id: 24862;
                    readonly nodeType: "OverrideSpecifier";
                    readonly overrides: readonly [];
                    readonly src: "8543:8:135";
                };
                readonly parameters: {
                    readonly id: 24861;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24860;
                        readonly mutability: "mutable";
                        readonly name: "_baseAmount";
                        readonly nameLocation: "8511:11:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24903;
                        readonly src: "8503:19:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24859;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8503:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "8493:35:135";
                };
                readonly returnParameters: {
                    readonly id: 24865;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24864;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24903;
                        readonly src: "8561:7:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24863;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8561:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "8560:9:135";
                };
                readonly scope: 24933;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 24919;
                readonly nodeType: "FunctionDefinition";
                readonly src: "9013:122:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 24918;
                    readonly nodeType: "Block";
                    readonly src: "9076:59:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 24914;
                                    readonly name: "this";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -28;
                                    readonly src: "9122:4:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$24933";
                                        readonly typeString: "contract MockHyperdriveBase";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$24933";
                                        readonly typeString: "contract MockHyperdriveBase";
                                    }];
                                    readonly id: 24913;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "9114:7:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_address_$";
                                        readonly typeString: "type(address)";
                                    };
                                    readonly typeName: {
                                        readonly id: 24912;
                                        readonly name: "address";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "9114:7:135";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 24915;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "9114:13:135";
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
                                    readonly id: 24910;
                                    readonly name: "_baseToken";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17788;
                                    readonly src: "9093:10:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IERC20_$9980";
                                        readonly typeString: "contract IERC20";
                                    };
                                };
                                readonly id: 24911;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "9104:9:135";
                                readonly memberName: "balanceOf";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 9979;
                                readonly src: "9093:20:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_view$_t_address_$returns$_t_uint256_$";
                                    readonly typeString: "function (address) view external returns (uint256)";
                                };
                            };
                            readonly id: 24916;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9093:35:135";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 24909;
                        readonly id: 24917;
                        readonly nodeType: "Return";
                        readonly src: "9086:42:135";
                    }];
                };
                readonly baseFunctions: readonly [13104];
                readonly documentation: {
                    readonly id: 24904;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "8899:109:135";
                    readonly text: "@dev Gets the total amount of base held by the pool.\n @return baseAmount The total amount of base.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_totalBase";
                readonly nameLocation: "9022:10:135";
                readonly overrides: {
                    readonly id: 24906;
                    readonly nodeType: "OverrideSpecifier";
                    readonly overrides: readonly [];
                    readonly src: "9049:8:135";
                };
                readonly parameters: {
                    readonly id: 24905;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "9032:2:135";
                };
                readonly returnParameters: {
                    readonly id: 24909;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24908;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24919;
                        readonly src: "9067:7:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24907;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9067:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "9066:9:135";
                };
                readonly scope: 24933;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 24932;
                readonly nodeType: "FunctionDefinition";
                readonly src: "9293:167:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 24931;
                    readonly nodeType: "Block";
                    readonly src: "9406:54:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [];
                                readonly expression: {
                                    readonly argumentTypes: readonly [];
                                    readonly id: 24927;
                                    readonly name: "_totalBase";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [24919];
                                    readonly referencedDeclaration: 24919;
                                    readonly src: "9440:10:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_view$__$returns$_t_uint256_$";
                                        readonly typeString: "function () view returns (uint256)";
                                    };
                                };
                                readonly id: 24928;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "9440:12:135";
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
                                readonly id: 24926;
                                readonly name: "_convertToShares";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [24903];
                                readonly referencedDeclaration: 24903;
                                readonly src: "9423:16:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256) view returns (uint256)";
                                };
                            };
                            readonly id: 24929;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9423:30:135";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 24925;
                        readonly id: 24930;
                        readonly nodeType: "Return";
                        readonly src: "9416:37:135";
                    }];
                };
                readonly baseFunctions: readonly [13110];
                readonly documentation: {
                    readonly id: 24920;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "9141:147:135";
                    readonly text: "@dev Gets the total amount of shares held by the pool in the yield\n      source.\n @return shareAmount The total amount of shares.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_totalShares";
                readonly nameLocation: "9302:12:135";
                readonly overrides: {
                    readonly id: 24922;
                    readonly nodeType: "OverrideSpecifier";
                    readonly overrides: readonly [];
                    readonly src: "9355:8:135";
                };
                readonly parameters: {
                    readonly id: 24921;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "9314:2:135";
                };
                readonly returnParameters: {
                    readonly id: 24925;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24924;
                        readonly mutability: "mutable";
                        readonly name: "shareAmount";
                        readonly nameLocation: "9389:11:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24932;
                        readonly src: "9381:19:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24923;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9381:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "9380:21:135";
                };
                readonly scope: 24933;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "internal";
            }];
            readonly abstract: true;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 24399;
                    readonly name: "HyperdriveBase";
                    readonly nameLocations: readonly ["1669:14:135"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 13995;
                    readonly src: "1669:14:135";
                };
                readonly id: 24400;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "1669:14:135";
            }];
            readonly canonicalName: "MockHyperdriveBase";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly fullyImplemented: false;
            readonly linearizedBaseContracts: readonly [24933, 13995, 17990, 71674, 11205, 11777];
            readonly name: "MockHyperdriveBase";
            readonly nameLocation: "1647:18:135";
            readonly scope: 25352;
            readonly usedErrors: readonly [71619];
            readonly usedEvents: readonly [11025, 11040, 11059, 11074, 11091, 11110, 11129, 11150, 11163, 11170, 11175, 11180, 11185, 11192, 11197, 11204, 11758, 11767, 11776];
        }, {
            readonly id: 25262;
            readonly nodeType: "ContractDefinition";
            readonly src: "9464:4336:135";
            readonly nodes: readonly [{
                readonly id: 24940;
                readonly nodeType: "UsingForDirective";
                readonly src: "9528:33:135";
                readonly nodes: readonly [];
                readonly global: false;
                readonly libraryName: {
                    readonly id: 24938;
                    readonly name: "FixedPointMath";
                    readonly nameLocations: readonly ["9534:14:135"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 19065;
                    readonly src: "9534:14:135";
                };
                readonly typeName: {
                    readonly id: 24939;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "9553:7:135";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
            }, {
                readonly id: 24990;
                readonly nodeType: "FunctionDefinition";
                readonly src: "9567:406:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 24989;
                    readonly nodeType: "Block";
                    readonly src: "9971:2:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [];
                };
                readonly implemented: true;
                readonly kind: "constructor";
                readonly modifiers: readonly [{
                    readonly arguments: readonly [{
                        readonly id: 24946;
                        readonly name: "_config";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 24943;
                        readonly src: "9664:7:135";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10470_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig memory";
                        };
                    }, {
                        readonly arguments: readonly [{
                            readonly arguments: readonly [{
                                readonly id: 24952;
                                readonly name: "_config";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24943;
                                readonly src: "9719:7:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_PoolConfig_$10470_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_PoolConfig_$10470_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                }];
                                readonly id: 24951;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "NewExpression";
                                readonly src: "9693:25:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_creation_nonpayable$_t_struct$_PoolConfig_$10470_memory_ptr_$returns$_t_contract$_MockHyperdriveTarget0_$25291_$";
                                    readonly typeString: "function (struct IHyperdrive.PoolConfig memory) returns (contract MockHyperdriveTarget0)";
                                };
                                readonly typeName: {
                                    readonly id: 24950;
                                    readonly nodeType: "UserDefinedTypeName";
                                    readonly pathNode: {
                                        readonly id: 24949;
                                        readonly name: "MockHyperdriveTarget0";
                                        readonly nameLocations: readonly ["9697:21:135"];
                                        readonly nodeType: "IdentifierPath";
                                        readonly referencedDeclaration: 25291;
                                        readonly src: "9697:21:135";
                                    };
                                    readonly referencedDeclaration: 25291;
                                    readonly src: "9697:21:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_MockHyperdriveTarget0_$25291";
                                        readonly typeString: "contract MockHyperdriveTarget0";
                                    };
                                };
                            };
                            readonly id: 24953;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9693:34:135";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_MockHyperdriveTarget0_$25291";
                                readonly typeString: "contract MockHyperdriveTarget0";
                            };
                        }];
                        readonly expression: {
                            readonly argumentTypes: readonly [{
                                readonly typeIdentifier: "t_contract$_MockHyperdriveTarget0_$25291";
                                readonly typeString: "contract MockHyperdriveTarget0";
                            }];
                            readonly id: 24948;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly lValueRequested: false;
                            readonly nodeType: "ElementaryTypeNameExpression";
                            readonly src: "9685:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_type$_t_address_$";
                                readonly typeString: "type(address)";
                            };
                            readonly typeName: {
                                readonly id: 24947;
                                readonly name: "address";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "9685:7:135";
                                readonly typeDescriptions: {};
                            };
                        };
                        readonly id: 24954;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: false;
                        readonly kind: "typeConversion";
                        readonly lValueRequested: false;
                        readonly nameLocations: readonly [];
                        readonly names: readonly [];
                        readonly nodeType: "FunctionCall";
                        readonly src: "9685:43:135";
                        readonly tryCall: false;
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    }, {
                        readonly arguments: readonly [{
                            readonly arguments: readonly [{
                                readonly id: 24960;
                                readonly name: "_config";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24943;
                                readonly src: "9776:7:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_PoolConfig_$10470_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_PoolConfig_$10470_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                }];
                                readonly id: 24959;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "NewExpression";
                                readonly src: "9750:25:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_creation_nonpayable$_t_struct$_PoolConfig_$10470_memory_ptr_$returns$_t_contract$_MockHyperdriveTarget1_$25306_$";
                                    readonly typeString: "function (struct IHyperdrive.PoolConfig memory) returns (contract MockHyperdriveTarget1)";
                                };
                                readonly typeName: {
                                    readonly id: 24958;
                                    readonly nodeType: "UserDefinedTypeName";
                                    readonly pathNode: {
                                        readonly id: 24957;
                                        readonly name: "MockHyperdriveTarget1";
                                        readonly nameLocations: readonly ["9754:21:135"];
                                        readonly nodeType: "IdentifierPath";
                                        readonly referencedDeclaration: 25306;
                                        readonly src: "9754:21:135";
                                    };
                                    readonly referencedDeclaration: 25306;
                                    readonly src: "9754:21:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_MockHyperdriveTarget1_$25306";
                                        readonly typeString: "contract MockHyperdriveTarget1";
                                    };
                                };
                            };
                            readonly id: 24961;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9750:34:135";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_MockHyperdriveTarget1_$25306";
                                readonly typeString: "contract MockHyperdriveTarget1";
                            };
                        }];
                        readonly expression: {
                            readonly argumentTypes: readonly [{
                                readonly typeIdentifier: "t_contract$_MockHyperdriveTarget1_$25306";
                                readonly typeString: "contract MockHyperdriveTarget1";
                            }];
                            readonly id: 24956;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly lValueRequested: false;
                            readonly nodeType: "ElementaryTypeNameExpression";
                            readonly src: "9742:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_type$_t_address_$";
                                readonly typeString: "type(address)";
                            };
                            readonly typeName: {
                                readonly id: 24955;
                                readonly name: "address";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "9742:7:135";
                                readonly typeDescriptions: {};
                            };
                        };
                        readonly id: 24962;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: false;
                        readonly kind: "typeConversion";
                        readonly lValueRequested: false;
                        readonly nameLocations: readonly [];
                        readonly names: readonly [];
                        readonly nodeType: "FunctionCall";
                        readonly src: "9742:43:135";
                        readonly tryCall: false;
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    }, {
                        readonly arguments: readonly [{
                            readonly arguments: readonly [{
                                readonly id: 24968;
                                readonly name: "_config";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24943;
                                readonly src: "9833:7:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_PoolConfig_$10470_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_PoolConfig_$10470_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                }];
                                readonly id: 24967;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "NewExpression";
                                readonly src: "9807:25:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_creation_nonpayable$_t_struct$_PoolConfig_$10470_memory_ptr_$returns$_t_contract$_MockHyperdriveTarget2_$25321_$";
                                    readonly typeString: "function (struct IHyperdrive.PoolConfig memory) returns (contract MockHyperdriveTarget2)";
                                };
                                readonly typeName: {
                                    readonly id: 24966;
                                    readonly nodeType: "UserDefinedTypeName";
                                    readonly pathNode: {
                                        readonly id: 24965;
                                        readonly name: "MockHyperdriveTarget2";
                                        readonly nameLocations: readonly ["9811:21:135"];
                                        readonly nodeType: "IdentifierPath";
                                        readonly referencedDeclaration: 25321;
                                        readonly src: "9811:21:135";
                                    };
                                    readonly referencedDeclaration: 25321;
                                    readonly src: "9811:21:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_MockHyperdriveTarget2_$25321";
                                        readonly typeString: "contract MockHyperdriveTarget2";
                                    };
                                };
                            };
                            readonly id: 24969;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9807:34:135";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_MockHyperdriveTarget2_$25321";
                                readonly typeString: "contract MockHyperdriveTarget2";
                            };
                        }];
                        readonly expression: {
                            readonly argumentTypes: readonly [{
                                readonly typeIdentifier: "t_contract$_MockHyperdriveTarget2_$25321";
                                readonly typeString: "contract MockHyperdriveTarget2";
                            }];
                            readonly id: 24964;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly lValueRequested: false;
                            readonly nodeType: "ElementaryTypeNameExpression";
                            readonly src: "9799:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_type$_t_address_$";
                                readonly typeString: "type(address)";
                            };
                            readonly typeName: {
                                readonly id: 24963;
                                readonly name: "address";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "9799:7:135";
                                readonly typeDescriptions: {};
                            };
                        };
                        readonly id: 24970;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: false;
                        readonly kind: "typeConversion";
                        readonly lValueRequested: false;
                        readonly nameLocations: readonly [];
                        readonly names: readonly [];
                        readonly nodeType: "FunctionCall";
                        readonly src: "9799:43:135";
                        readonly tryCall: false;
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    }, {
                        readonly arguments: readonly [{
                            readonly arguments: readonly [{
                                readonly id: 24976;
                                readonly name: "_config";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24943;
                                readonly src: "9890:7:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_PoolConfig_$10470_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_PoolConfig_$10470_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                }];
                                readonly id: 24975;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "NewExpression";
                                readonly src: "9864:25:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_creation_nonpayable$_t_struct$_PoolConfig_$10470_memory_ptr_$returns$_t_contract$_MockHyperdriveTarget3_$25336_$";
                                    readonly typeString: "function (struct IHyperdrive.PoolConfig memory) returns (contract MockHyperdriveTarget3)";
                                };
                                readonly typeName: {
                                    readonly id: 24974;
                                    readonly nodeType: "UserDefinedTypeName";
                                    readonly pathNode: {
                                        readonly id: 24973;
                                        readonly name: "MockHyperdriveTarget3";
                                        readonly nameLocations: readonly ["9868:21:135"];
                                        readonly nodeType: "IdentifierPath";
                                        readonly referencedDeclaration: 25336;
                                        readonly src: "9868:21:135";
                                    };
                                    readonly referencedDeclaration: 25336;
                                    readonly src: "9868:21:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_MockHyperdriveTarget3_$25336";
                                        readonly typeString: "contract MockHyperdriveTarget3";
                                    };
                                };
                            };
                            readonly id: 24977;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9864:34:135";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_MockHyperdriveTarget3_$25336";
                                readonly typeString: "contract MockHyperdriveTarget3";
                            };
                        }];
                        readonly expression: {
                            readonly argumentTypes: readonly [{
                                readonly typeIdentifier: "t_contract$_MockHyperdriveTarget3_$25336";
                                readonly typeString: "contract MockHyperdriveTarget3";
                            }];
                            readonly id: 24972;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly lValueRequested: false;
                            readonly nodeType: "ElementaryTypeNameExpression";
                            readonly src: "9856:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_type$_t_address_$";
                                readonly typeString: "type(address)";
                            };
                            readonly typeName: {
                                readonly id: 24971;
                                readonly name: "address";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "9856:7:135";
                                readonly typeDescriptions: {};
                            };
                        };
                        readonly id: 24978;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: false;
                        readonly kind: "typeConversion";
                        readonly lValueRequested: false;
                        readonly nameLocations: readonly [];
                        readonly names: readonly [];
                        readonly nodeType: "FunctionCall";
                        readonly src: "9856:43:135";
                        readonly tryCall: false;
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    }, {
                        readonly arguments: readonly [{
                            readonly arguments: readonly [{
                                readonly id: 24984;
                                readonly name: "_config";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24943;
                                readonly src: "9947:7:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_PoolConfig_$10470_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_PoolConfig_$10470_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                }];
                                readonly id: 24983;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "NewExpression";
                                readonly src: "9921:25:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_creation_nonpayable$_t_struct$_PoolConfig_$10470_memory_ptr_$returns$_t_contract$_MockHyperdriveTarget4_$25351_$";
                                    readonly typeString: "function (struct IHyperdrive.PoolConfig memory) returns (contract MockHyperdriveTarget4)";
                                };
                                readonly typeName: {
                                    readonly id: 24982;
                                    readonly nodeType: "UserDefinedTypeName";
                                    readonly pathNode: {
                                        readonly id: 24981;
                                        readonly name: "MockHyperdriveTarget4";
                                        readonly nameLocations: readonly ["9925:21:135"];
                                        readonly nodeType: "IdentifierPath";
                                        readonly referencedDeclaration: 25351;
                                        readonly src: "9925:21:135";
                                    };
                                    readonly referencedDeclaration: 25351;
                                    readonly src: "9925:21:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_MockHyperdriveTarget4_$25351";
                                        readonly typeString: "contract MockHyperdriveTarget4";
                                    };
                                };
                            };
                            readonly id: 24985;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9921:34:135";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_MockHyperdriveTarget4_$25351";
                                readonly typeString: "contract MockHyperdriveTarget4";
                            };
                        }];
                        readonly expression: {
                            readonly argumentTypes: readonly [{
                                readonly typeIdentifier: "t_contract$_MockHyperdriveTarget4_$25351";
                                readonly typeString: "contract MockHyperdriveTarget4";
                            }];
                            readonly id: 24980;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly lValueRequested: false;
                            readonly nodeType: "ElementaryTypeNameExpression";
                            readonly src: "9913:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_type$_t_address_$";
                                readonly typeString: "type(address)";
                            };
                            readonly typeName: {
                                readonly id: 24979;
                                readonly name: "address";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "9913:7:135";
                                readonly typeDescriptions: {};
                            };
                        };
                        readonly id: 24986;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: false;
                        readonly kind: "typeConversion";
                        readonly lValueRequested: false;
                        readonly nameLocations: readonly [];
                        readonly names: readonly [];
                        readonly nodeType: "FunctionCall";
                        readonly src: "9913:43:135";
                        readonly tryCall: false;
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    }];
                    readonly id: 24987;
                    readonly kind: "baseConstructorSpecifier";
                    readonly modifierName: {
                        readonly id: 24945;
                        readonly name: "Hyperdrive";
                        readonly nameLocations: readonly ["9640:10:135"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 4518;
                        readonly src: "9640:10:135";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "9640:326:135";
                }];
                readonly name: "";
                readonly nameLocation: "-1:-1:-1";
                readonly parameters: {
                    readonly id: 24944;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24943;
                        readonly mutability: "mutable";
                        readonly name: "_config";
                        readonly nameLocation: "9618:7:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24990;
                        readonly src: "9588:37:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10470_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig";
                        };
                        readonly typeName: {
                            readonly id: 24942;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 24941;
                                readonly name: "IHyperdrive.PoolConfig";
                                readonly nameLocations: readonly ["9588:11:135", "9600:10:135"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10470;
                                readonly src: "9588:22:135";
                            };
                            readonly referencedDeclaration: 10470;
                            readonly src: "9588:22:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolConfig_$10470_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "9578:53:135";
                };
                readonly returnParameters: {
                    readonly id: 24988;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "9971:0:135";
                };
                readonly scope: 25262;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "public";
            }, {
                readonly id: 25002;
                readonly nodeType: "FunctionDefinition";
                readonly src: "9998:138:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25001;
                    readonly nodeType: "Block";
                    readonly src: "10091:45:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 24999;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 24997;
                                readonly name: "_marketState";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 17826;
                                readonly src: "10101:12:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_MarketState_$10357_storage";
                                    readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 24998;
                                readonly name: "_marketState_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24994;
                                readonly src: "10116:13:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_MarketState_$10357_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.MarketState memory";
                                };
                            };
                            readonly src: "10101:28:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_MarketState_$10357_storage";
                                readonly typeString: "struct IHyperdrive.MarketState storage ref";
                            };
                        };
                        readonly id: 25000;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "10101:28:135";
                    }];
                };
                readonly documentation: {
                    readonly id: 24991;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "9979:14:135";
                    readonly text: "Mocks ///";
                };
                readonly functionSelector: "f45cf2e0";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "setMarketState";
                readonly nameLocation: "10007:14:135";
                readonly parameters: {
                    readonly id: 24995;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24994;
                        readonly mutability: "mutable";
                        readonly name: "_marketState_";
                        readonly nameLocation: "10062:13:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25002;
                        readonly src: "10031:44:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_MarketState_$10357_memory_ptr";
                            readonly typeString: "struct IHyperdrive.MarketState";
                        };
                        readonly typeName: {
                            readonly id: 24993;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 24992;
                                readonly name: "IHyperdrive.MarketState";
                                readonly nameLocations: readonly ["10031:11:135", "10043:11:135"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10357;
                                readonly src: "10031:23:135";
                            };
                            readonly referencedDeclaration: 10357;
                            readonly src: "10031:23:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_MarketState_$10357_storage_ptr";
                                readonly typeString: "struct IHyperdrive.MarketState";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "10021:60:135";
                };
                readonly returnParameters: {
                    readonly id: 24996;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "10091:0:135";
                };
                readonly scope: 25262;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 25012;
                readonly nodeType: "FunctionDefinition";
                readonly src: "10142:98:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25011;
                    readonly nodeType: "Block";
                    readonly src: "10197:43:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 25009;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 25007;
                                readonly name: "totalShares";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24405;
                                readonly src: "10207:11:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 25008;
                                readonly name: "_totalShares";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25004;
                                readonly src: "10221:12:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "10207:26:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 25010;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "10207:26:135";
                    }];
                };
                readonly functionSelector: "a77384c1";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "setTotalShares";
                readonly nameLocation: "10151:14:135";
                readonly parameters: {
                    readonly id: 25005;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25004;
                        readonly mutability: "mutable";
                        readonly name: "_totalShares";
                        readonly nameLocation: "10174:12:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25012;
                        readonly src: "10166:20:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25003;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "10166:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "10165:22:135";
                };
                readonly returnParameters: {
                    readonly id: 25006;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "10197:0:135";
                };
                readonly scope: 25262;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 25080;
                readonly nodeType: "FunctionDefinition";
                readonly src: "10372:566:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25079;
                    readonly nodeType: "Block";
                    readonly src: "10423:515:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [null, 25020];
                        readonly declarations: readonly [null, {
                            readonly constant: false;
                            readonly id: 25020;
                            readonly mutability: "mutable";
                            readonly name: "interest";
                            readonly nameLocation: "10443:8:135";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 25079;
                            readonly src: "10436:15:135";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                            readonly typeName: {
                                readonly id: 25019;
                                readonly name: "int256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "10436:6:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 25033;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly id: 25027;
                                        readonly name: "this";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -28;
                                        readonly src: "10539:4:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_MockHyperdrive_$25262";
                                            readonly typeString: "contract MockHyperdrive";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_contract$_MockHyperdrive_$25262";
                                            readonly typeString: "contract MockHyperdrive";
                                        }];
                                        readonly id: 25026;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "ElementaryTypeNameExpression";
                                        readonly src: "10531:7:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_address_$";
                                            readonly typeString: "type(address)";
                                        };
                                        readonly typeName: {
                                            readonly id: 25025;
                                            readonly name: "address";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "10531:7:135";
                                            readonly typeDescriptions: {};
                                        };
                                    };
                                    readonly id: 25028;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "typeConversion";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "10531:13:135";
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
                                        readonly id: 25023;
                                        readonly name: "_baseToken";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 17788;
                                        readonly src: "10510:10:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_IERC20_$9980";
                                            readonly typeString: "contract IERC20";
                                        };
                                    };
                                    readonly id: 25024;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "10521:9:135";
                                    readonly memberName: "balanceOf";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 9979;
                                    readonly src: "10510:20:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_view$_t_address_$returns$_t_uint256_$";
                                        readonly typeString: "function (address) view external returns (uint256)";
                                    };
                                };
                                readonly id: 25029;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "10510:35:135";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 25030;
                                readonly name: "apr";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25016;
                                readonly src: "10559:3:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            }, {
                                readonly id: 25031;
                                readonly name: "time";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25014;
                                readonly src: "10576:4:135";
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
                                    readonly id: 25021;
                                    readonly name: "HyperdriveUtils";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 156416;
                                    readonly src: "10455:15:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_HyperdriveUtils_$156416_$";
                                        readonly typeString: "type(library HyperdriveUtils)";
                                    };
                                };
                                readonly id: 25022;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "10471:25:135";
                                readonly memberName: "calculateCompoundInterest";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 154244;
                                readonly src: "10455:41:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_int256_$_t_uint256_$returns$_t_uint256_$_t_int256_$";
                                    readonly typeString: "function (uint256,int256,uint256) pure returns (uint256,int256)";
                                };
                            };
                            readonly id: 25032;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "10455:135:135";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_uint256_$_t_int256_$";
                                readonly typeString: "tuple(uint256,int256)";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "10433:157:135";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                            readonly id: 25036;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 25034;
                                readonly name: "interest";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25020;
                                readonly src: "10605:8:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: ">";
                            readonly rightExpression: {
                                readonly hexValue: "30";
                                readonly id: 25035;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "10616:1:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly src: "10605:12:135";
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
                                readonly id: 25057;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 25055;
                                    readonly name: "interest";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25020;
                                    readonly src: "10773:8:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "<";
                                readonly rightExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 25056;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "10784:1:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly src: "10773:12:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly id: 25077;
                            readonly nodeType: "IfStatement";
                            readonly src: "10769:163:135";
                            readonly trueBody: {
                                readonly id: 25076;
                                readonly nodeType: "Block";
                                readonly src: "10787:145:135";
                                readonly statements: readonly [{
                                    readonly expression: {
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [{
                                                readonly id: 25067;
                                                readonly name: "this";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -28;
                                                readonly src: "10866:4:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_MockHyperdrive_$25262";
                                                    readonly typeString: "contract MockHyperdrive";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_contract$_MockHyperdrive_$25262";
                                                    readonly typeString: "contract MockHyperdrive";
                                                }];
                                                readonly id: 25066;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "10858:7:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_address_$";
                                                    readonly typeString: "type(address)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 25065;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "10858:7:135";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 25068;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "10858:13:135";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly id: 25072;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "UnaryOperation";
                                                readonly operator: "-";
                                                readonly prefix: true;
                                                readonly src: "10897:9:135";
                                                readonly subExpression: {
                                                    readonly id: 25071;
                                                    readonly name: "interest";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 25020;
                                                    readonly src: "10898:8:135";
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
                                                readonly id: 25070;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "10889:7:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_uint256_$";
                                                    readonly typeString: "type(uint256)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 25069;
                                                    readonly name: "uint256";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "10889:7:135";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 25073;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "10889:18:135";
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
                                                        readonly id: 25061;
                                                        readonly name: "_baseToken";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 17788;
                                                        readonly src: "10823:10:135";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_contract$_IERC20_$9980";
                                                            readonly typeString: "contract IERC20";
                                                        };
                                                    }];
                                                    readonly expression: {
                                                        readonly argumentTypes: readonly [{
                                                            readonly typeIdentifier: "t_contract$_IERC20_$9980";
                                                            readonly typeString: "contract IERC20";
                                                        }];
                                                        readonly id: 25060;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: true;
                                                        readonly lValueRequested: false;
                                                        readonly nodeType: "ElementaryTypeNameExpression";
                                                        readonly src: "10815:7:135";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_type$_t_address_$";
                                                            readonly typeString: "type(address)";
                                                        };
                                                        readonly typeName: {
                                                            readonly id: 25059;
                                                            readonly name: "address";
                                                            readonly nodeType: "ElementaryTypeName";
                                                            readonly src: "10815:7:135";
                                                            readonly typeDescriptions: {};
                                                        };
                                                    };
                                                    readonly id: 25062;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly kind: "typeConversion";
                                                    readonly lValueRequested: false;
                                                    readonly nameLocations: readonly [];
                                                    readonly names: readonly [];
                                                    readonly nodeType: "FunctionCall";
                                                    readonly src: "10815:19:135";
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
                                                    readonly id: 25058;
                                                    readonly name: "ERC20Mintable";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 23602;
                                                    readonly src: "10801:13:135";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_contract$_ERC20Mintable_$23602_$";
                                                        readonly typeString: "type(contract ERC20Mintable)";
                                                    };
                                                };
                                                readonly id: 25063;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly kind: "typeConversion";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "10801:34:135";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_ERC20Mintable_$23602";
                                                    readonly typeString: "contract ERC20Mintable";
                                                };
                                            };
                                            readonly id: 25064;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "10836:4:135";
                                            readonly memberName: "burn";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 23601;
                                            readonly src: "10801:39:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$__$";
                                                readonly typeString: "function (address,uint256) external";
                                            };
                                        };
                                        readonly id: 25074;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "10801:120:135";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_tuple$__$";
                                            readonly typeString: "tuple()";
                                        };
                                    };
                                    readonly id: 25075;
                                    readonly nodeType: "ExpressionStatement";
                                    readonly src: "10801:120:135";
                                }];
                            };
                        };
                        readonly id: 25078;
                        readonly nodeType: "IfStatement";
                        readonly src: "10601:331:135";
                        readonly trueBody: {
                            readonly id: 25054;
                            readonly nodeType: "Block";
                            readonly src: "10619:144:135";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly id: 25046;
                                            readonly name: "this";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -28;
                                            readonly src: "10698:4:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_contract$_MockHyperdrive_$25262";
                                                readonly typeString: "contract MockHyperdrive";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_contract$_MockHyperdrive_$25262";
                                                readonly typeString: "contract MockHyperdrive";
                                            }];
                                            readonly id: 25045;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "10690:7:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_address_$";
                                                readonly typeString: "type(address)";
                                            };
                                            readonly typeName: {
                                                readonly id: 25044;
                                                readonly name: "address";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "10690:7:135";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 25047;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "10690:13:135";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly id: 25050;
                                            readonly name: "interest";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 25020;
                                            readonly src: "10729:8:135";
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
                                            readonly id: 25049;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "10721:7:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_uint256_$";
                                                readonly typeString: "type(uint256)";
                                            };
                                            readonly typeName: {
                                                readonly id: 25048;
                                                readonly name: "uint256";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "10721:7:135";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 25051;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "10721:17:135";
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
                                                    readonly id: 25040;
                                                    readonly name: "_baseToken";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 17788;
                                                    readonly src: "10655:10:135";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_contract$_IERC20_$9980";
                                                        readonly typeString: "contract IERC20";
                                                    };
                                                }];
                                                readonly expression: {
                                                    readonly argumentTypes: readonly [{
                                                        readonly typeIdentifier: "t_contract$_IERC20_$9980";
                                                        readonly typeString: "contract IERC20";
                                                    }];
                                                    readonly id: 25039;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "ElementaryTypeNameExpression";
                                                    readonly src: "10647:7:135";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_address_$";
                                                        readonly typeString: "type(address)";
                                                    };
                                                    readonly typeName: {
                                                        readonly id: 25038;
                                                        readonly name: "address";
                                                        readonly nodeType: "ElementaryTypeName";
                                                        readonly src: "10647:7:135";
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
                                                readonly src: "10647:19:135";
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
                                                readonly id: 25037;
                                                readonly name: "ERC20Mintable";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 23602;
                                                readonly src: "10633:13:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_contract$_ERC20Mintable_$23602_$";
                                                    readonly typeString: "type(contract ERC20Mintable)";
                                                };
                                            };
                                            readonly id: 25042;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "10633:34:135";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_contract$_ERC20Mintable_$23602";
                                                readonly typeString: "contract ERC20Mintable";
                                            };
                                        };
                                        readonly id: 25043;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "10668:4:135";
                                        readonly memberName: "mint";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 23572;
                                        readonly src: "10633:39:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$__$";
                                            readonly typeString: "function (address,uint256) external";
                                        };
                                    };
                                    readonly id: 25052;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "10633:119:135";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 25053;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "10633:119:135";
                            }];
                        };
                    }];
                };
                readonly functionSelector: "68096239";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "accrue";
                readonly nameLocation: "10381:6:135";
                readonly parameters: {
                    readonly id: 25017;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25014;
                        readonly mutability: "mutable";
                        readonly name: "time";
                        readonly nameLocation: "10396:4:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25080;
                        readonly src: "10388:12:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25013;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "10388:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25016;
                        readonly mutability: "mutable";
                        readonly name: "apr";
                        readonly nameLocation: "10409:3:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25080;
                        readonly src: "10402:10:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 25015;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "10402:6:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "10387:26:135";
                };
                readonly returnParameters: {
                    readonly id: 25018;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "10423:0:135";
                };
                readonly scope: 25262;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 25108;
                readonly nodeType: "FunctionDefinition";
                readonly src: "10944:411:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25107;
                    readonly nodeType: "Block";
                    readonly src: "11144:211:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 25101;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly components: readonly [{
                                    readonly id: 25093;
                                    readonly name: "curveFee";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25089;
                                    readonly src: "11155:8:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 25094;
                                    readonly name: "governanceCurveFee";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25091;
                                    readonly src: "11165:18:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly id: 25095;
                                readonly isConstant: false;
                                readonly isInlineArray: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly nodeType: "TupleExpression";
                                readonly src: "11154:30:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$";
                                    readonly typeString: "tuple(uint256,uint256)";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly id: 25097;
                                    readonly name: "_shareAmount";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25082;
                                    readonly src: "11226:12:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 25098;
                                    readonly name: "_spotPrice";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25084;
                                    readonly src: "11252:10:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 25099;
                                    readonly name: "vaultSharePrice";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25086;
                                    readonly src: "11276:15:135";
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
                                    readonly id: 25096;
                                    readonly name: "_calculateFeesGivenShares";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13846;
                                    readonly src: "11187:25:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_view$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256,uint256) view returns (uint256,uint256)";
                                    };
                                };
                                readonly id: 25100;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "11187:114:135";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$";
                                    readonly typeString: "tuple(uint256,uint256)";
                                };
                            };
                            readonly src: "11154:147:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 25102;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "11154:147:135";
                    }, {
                        readonly expression: {
                            readonly components: readonly [{
                                readonly id: 25103;
                                readonly name: "curveFee";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25089;
                                readonly src: "11319:8:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 25104;
                                readonly name: "governanceCurveFee";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25091;
                                readonly src: "11329:18:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly id: 25105;
                            readonly isConstant: false;
                            readonly isInlineArray: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "TupleExpression";
                            readonly src: "11318:30:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$";
                                readonly typeString: "tuple(uint256,uint256)";
                            };
                        };
                        readonly functionReturnParameters: 25092;
                        readonly id: 25106;
                        readonly nodeType: "Return";
                        readonly src: "11311:37:135";
                    }];
                };
                readonly functionSelector: "71f88b7c";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateFeesGivenShares";
                readonly nameLocation: "10953:24:135";
                readonly parameters: {
                    readonly id: 25087;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25082;
                        readonly mutability: "mutable";
                        readonly name: "_shareAmount";
                        readonly nameLocation: "10995:12:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25108;
                        readonly src: "10987:20:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25081;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "10987:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25084;
                        readonly mutability: "mutable";
                        readonly name: "_spotPrice";
                        readonly nameLocation: "11025:10:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25108;
                        readonly src: "11017:18:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25083;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11017:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25086;
                        readonly mutability: "mutable";
                        readonly name: "vaultSharePrice";
                        readonly nameLocation: "11053:15:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25108;
                        readonly src: "11045:23:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25085;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11045:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "10977:97:135";
                };
                readonly returnParameters: {
                    readonly id: 25092;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25089;
                        readonly mutability: "mutable";
                        readonly name: "curveFee";
                        readonly nameLocation: "11106:8:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25108;
                        readonly src: "11098:16:135";
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
                            readonly src: "11098:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25091;
                        readonly mutability: "mutable";
                        readonly name: "governanceCurveFee";
                        readonly nameLocation: "11124:18:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25108;
                        readonly src: "11116:26:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25090;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11116:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "11097:46:135";
                };
                readonly scope: 25262;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 25147;
                readonly nodeType: "FunctionDefinition";
                readonly src: "11361:822:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25146;
                    readonly nodeType: "Block";
                    readonly src: "11742:441:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 25138;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly components: readonly [{
                                    readonly id: 25127;
                                    readonly name: "totalCurveFee";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25119;
                                    readonly src: "11766:13:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 25128;
                                    readonly name: "totalFlatFee";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25121;
                                    readonly src: "11793:12:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 25129;
                                    readonly name: "governanceCurveFee";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25123;
                                    readonly src: "11819:18:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 25130;
                                    readonly name: "totalGovernanceFee";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25125;
                                    readonly src: "11851:18:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly id: 25131;
                                readonly isConstant: false;
                                readonly isInlineArray: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly nodeType: "TupleExpression";
                                readonly src: "11752:127:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$";
                                    readonly typeString: "tuple(uint256,uint256,uint256,uint256)";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly id: 25133;
                                    readonly name: "_bondAmount";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25110;
                                    readonly src: "11920:11:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 25134;
                                    readonly name: "_normalizedTimeRemaining";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25112;
                                    readonly src: "11945:24:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 25135;
                                    readonly name: "_spotPrice";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25114;
                                    readonly src: "11983:10:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 25136;
                                    readonly name: "vaultSharePrice";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25116;
                                    readonly src: "12007:15:135";
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
                                    readonly id: 25132;
                                    readonly name: "_calculateFeesGivenBonds";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13916;
                                    readonly src: "11882:24:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_view$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256,uint256,uint256) view returns (uint256,uint256,uint256,uint256)";
                                    };
                                };
                                readonly id: 25137;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "11882:150:135";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$";
                                    readonly typeString: "tuple(uint256,uint256,uint256,uint256)";
                                };
                            };
                            readonly src: "11752:280:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 25139;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "11752:280:135";
                    }, {
                        readonly expression: {
                            readonly components: readonly [{
                                readonly id: 25140;
                                readonly name: "totalCurveFee";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25119;
                                readonly src: "12063:13:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 25141;
                                readonly name: "totalFlatFee";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25121;
                                readonly src: "12090:12:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 25142;
                                readonly name: "governanceCurveFee";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25123;
                                readonly src: "12116:18:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 25143;
                                readonly name: "totalGovernanceFee";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25125;
                                readonly src: "12148:18:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly id: 25144;
                            readonly isConstant: false;
                            readonly isInlineArray: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "TupleExpression";
                            readonly src: "12049:127:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$";
                                readonly typeString: "tuple(uint256,uint256,uint256,uint256)";
                            };
                        };
                        readonly functionReturnParameters: 25126;
                        readonly id: 25145;
                        readonly nodeType: "Return";
                        readonly src: "12042:134:135";
                    }];
                };
                readonly functionSelector: "22d5506b";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateFeesGivenBonds";
                readonly nameLocation: "11370:23:135";
                readonly parameters: {
                    readonly id: 25117;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25110;
                        readonly mutability: "mutable";
                        readonly name: "_bondAmount";
                        readonly nameLocation: "11411:11:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25147;
                        readonly src: "11403:19:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25109;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11403:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25112;
                        readonly mutability: "mutable";
                        readonly name: "_normalizedTimeRemaining";
                        readonly nameLocation: "11440:24:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25147;
                        readonly src: "11432:32:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25111;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11432:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25114;
                        readonly mutability: "mutable";
                        readonly name: "_spotPrice";
                        readonly nameLocation: "11482:10:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25147;
                        readonly src: "11474:18:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25113;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11474:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25116;
                        readonly mutability: "mutable";
                        readonly name: "vaultSharePrice";
                        readonly nameLocation: "11510:15:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25147;
                        readonly src: "11502:23:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25115;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11502:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "11393:138:135";
                };
                readonly returnParameters: {
                    readonly id: 25126;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25119;
                        readonly mutability: "mutable";
                        readonly name: "totalCurveFee";
                        readonly nameLocation: "11600:13:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25147;
                        readonly src: "11592:21:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25118;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11592:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25121;
                        readonly mutability: "mutable";
                        readonly name: "totalFlatFee";
                        readonly nameLocation: "11635:12:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25147;
                        readonly src: "11627:20:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25120;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11627:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25123;
                        readonly mutability: "mutable";
                        readonly name: "governanceCurveFee";
                        readonly nameLocation: "11669:18:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25147;
                        readonly src: "11661:26:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25122;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11661:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25125;
                        readonly mutability: "mutable";
                        readonly name: "totalGovernanceFee";
                        readonly nameLocation: "11709:18:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25147;
                        readonly src: "11701:26:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25124;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11701:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "11578:159:135";
                };
                readonly scope: 25262;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 25166;
                readonly nodeType: "FunctionDefinition";
                readonly src: "12232:351:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25165;
                    readonly nodeType: "Block";
                    readonly src: "12509:74:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 25161;
                                readonly name: "_shareAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25149;
                                readonly src: "12545:12:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 25162;
                                readonly name: "_vaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25151;
                                readonly src: "12559:16:135";
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
                                readonly id: 25160;
                                readonly name: "_calculateOpenLong";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 16156;
                                readonly src: "12526:18:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256) view returns (uint256,uint256,uint256)";
                                };
                            };
                            readonly id: 25163;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "12526:50:135";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$";
                                readonly typeString: "tuple(uint256,uint256,uint256)";
                            };
                        };
                        readonly functionReturnParameters: 25159;
                        readonly id: 25164;
                        readonly nodeType: "Return";
                        readonly src: "12519:57:135";
                    }];
                };
                readonly functionSelector: "9bd33498";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateOpenLong";
                readonly nameLocation: "12241:17:135";
                readonly parameters: {
                    readonly id: 25152;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25149;
                        readonly mutability: "mutable";
                        readonly name: "_shareAmount";
                        readonly nameLocation: "12276:12:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25166;
                        readonly src: "12268:20:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25148;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "12268:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25151;
                        readonly mutability: "mutable";
                        readonly name: "_vaultSharePrice";
                        readonly nameLocation: "12306:16:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25166;
                        readonly src: "12298:24:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25150;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "12298:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "12258:70:135";
                };
                readonly returnParameters: {
                    readonly id: 25159;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25154;
                        readonly mutability: "mutable";
                        readonly name: "shareReservesDelta";
                        readonly nameLocation: "12397:18:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25166;
                        readonly src: "12389:26:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25153;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "12389:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25156;
                        readonly mutability: "mutable";
                        readonly name: "bondReservesDelta";
                        readonly nameLocation: "12437:17:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25166;
                        readonly src: "12429:25:135";
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
                            readonly src: "12429:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25158;
                        readonly mutability: "mutable";
                        readonly name: "totalGovernanceFee";
                        readonly nameLocation: "12476:18:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25166;
                        readonly src: "12468:26:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25157;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "12468:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "12375:129:135";
                };
                readonly scope: 25262;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 25178;
                readonly nodeType: "FunctionDefinition";
                readonly src: "12589:177:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25177;
                    readonly nodeType: "Block";
                    readonly src: "12704:62:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 25174;
                                readonly name: "_maturityTime";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25168;
                                readonly src: "12745:13:135";
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
                                readonly id: 25173;
                                readonly name: "_calculateTimeRemaining";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13166;
                                readonly src: "12721:23:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256) view returns (uint256)";
                                };
                            };
                            readonly id: 25175;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "12721:38:135";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 25172;
                        readonly id: 25176;
                        readonly nodeType: "Return";
                        readonly src: "12714:45:135";
                    }];
                };
                readonly functionSelector: "68c2ecb8";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateTimeRemaining";
                readonly nameLocation: "12598:22:135";
                readonly parameters: {
                    readonly id: 25169;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25168;
                        readonly mutability: "mutable";
                        readonly name: "_maturityTime";
                        readonly nameLocation: "12638:13:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25178;
                        readonly src: "12630:21:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25167;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "12630:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "12620:37:135";
                };
                readonly returnParameters: {
                    readonly id: 25172;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25171;
                        readonly mutability: "mutable";
                        readonly name: "timeRemaining";
                        readonly nameLocation: "12689:13:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25178;
                        readonly src: "12681:21:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25170;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "12681:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "12680:23:135";
                };
                readonly scope: 25262;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 25190;
                readonly nodeType: "FunctionDefinition";
                readonly src: "12772:189:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25189;
                    readonly nodeType: "Block";
                    readonly src: "12893:68:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 25186;
                                readonly name: "_maturityTime";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25180;
                                readonly src: "12940:13:135";
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
                                readonly id: 25185;
                                readonly name: "_calculateTimeRemainingScaled";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13202;
                                readonly src: "12910:29:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256) view returns (uint256)";
                                };
                            };
                            readonly id: 25187;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "12910:44:135";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 25184;
                        readonly id: 25188;
                        readonly nodeType: "Return";
                        readonly src: "12903:51:135";
                    }];
                };
                readonly functionSelector: "ca6d38f7";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateTimeRemainingScaled";
                readonly nameLocation: "12781:28:135";
                readonly parameters: {
                    readonly id: 25181;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25180;
                        readonly mutability: "mutable";
                        readonly name: "_maturityTime";
                        readonly nameLocation: "12827:13:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25190;
                        readonly src: "12819:21:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25179;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "12819:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "12809:37:135";
                };
                readonly returnParameters: {
                    readonly id: 25184;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25183;
                        readonly mutability: "mutable";
                        readonly name: "timeRemaining";
                        readonly nameLocation: "12878:13:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25190;
                        readonly src: "12870:21:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25182;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "12870:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "12869:23:135";
                };
                readonly scope: 25262;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 25199;
                readonly nodeType: "FunctionDefinition";
                readonly src: "12967:118:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25198;
                    readonly nodeType: "Block";
                    readonly src: "13042:43:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [];
                            readonly expression: {
                                readonly argumentTypes: readonly [];
                                readonly id: 25195;
                                readonly name: "_latestCheckpoint";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13220;
                                readonly src: "13059:17:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$__$returns$_t_uint256_$";
                                    readonly typeString: "function () view returns (uint256)";
                                };
                            };
                            readonly id: 25196;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "13059:19:135";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 25194;
                        readonly id: 25197;
                        readonly nodeType: "Return";
                        readonly src: "13052:26:135";
                    }];
                };
                readonly functionSelector: "907c0f92";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "latestCheckpoint";
                readonly nameLocation: "12976:16:135";
                readonly parameters: {
                    readonly id: 25191;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "12992:2:135";
                };
                readonly returnParameters: {
                    readonly id: 25194;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25193;
                        readonly mutability: "mutable";
                        readonly name: "checkpointTime";
                        readonly nameLocation: "13026:14:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25199;
                        readonly src: "13018:22:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25192;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "13018:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "13017:24:135";
                };
                readonly scope: 25262;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 25209;
                readonly nodeType: "FunctionDefinition";
                readonly src: "13091:116:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25208;
                    readonly nodeType: "Block";
                    readonly src: "13153:54:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 25205;
                                readonly name: "_shareReservesDelta";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25201;
                                readonly src: "13180:19:135";
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
                                readonly id: 25204;
                                readonly name: "_updateLiquidity";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 15360;
                                readonly src: "13163:16:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_int256_$returns$__$";
                                    readonly typeString: "function (int256)";
                                };
                            };
                            readonly id: 25206;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "13163:37:135";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 25207;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "13163:37:135";
                    }];
                };
                readonly functionSelector: "8120a3e2";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "updateLiquidity";
                readonly nameLocation: "13100:15:135";
                readonly parameters: {
                    readonly id: 25202;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25201;
                        readonly mutability: "mutable";
                        readonly name: "_shareReservesDelta";
                        readonly nameLocation: "13123:19:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25209;
                        readonly src: "13116:26:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 25200;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "13116:6:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "13115:28:135";
                };
                readonly returnParameters: {
                    readonly id: 25203;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "13153:0:135";
                };
                readonly scope: 25262;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 25221;
                readonly nodeType: "FunctionDefinition";
                readonly src: "13213:177:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25220;
                    readonly nodeType: "Block";
                    readonly src: "13321:69:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 25217;
                                readonly name: "_vaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25211;
                                readonly src: "13366:16:135";
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
                                readonly id: 25216;
                                readonly name: "_calculateIdleShareReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13728;
                                readonly src: "13338:27:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256) view returns (uint256)";
                                };
                            };
                            readonly id: 25218;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "13338:45:135";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 25215;
                        readonly id: 25219;
                        readonly nodeType: "Return";
                        readonly src: "13331:52:135";
                    }];
                };
                readonly functionSelector: "b1b4b170";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateIdleShareReserves";
                readonly nameLocation: "13222:26:135";
                readonly parameters: {
                    readonly id: 25212;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25211;
                        readonly mutability: "mutable";
                        readonly name: "_vaultSharePrice";
                        readonly nameLocation: "13266:16:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25221;
                        readonly src: "13258:24:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25210;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "13258:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "13248:40:135";
                };
                readonly returnParameters: {
                    readonly id: 25215;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25214;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25221;
                        readonly src: "13312:7:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25213;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "13312:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "13311:9:135";
                };
                readonly scope: 25262;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 25229;
                readonly nodeType: "FunctionDefinition";
                readonly src: "13396:93:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25228;
                    readonly nodeType: "Block";
                    readonly src: "13454:35:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 25226;
                            readonly name: "totalShares";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 24405;
                            readonly src: "13471:11:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 25225;
                        readonly id: 25227;
                        readonly nodeType: "Return";
                        readonly src: "13464:18:135";
                    }];
                };
                readonly functionSelector: "d5002f2e";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getTotalShares";
                readonly nameLocation: "13405:14:135";
                readonly parameters: {
                    readonly id: 25222;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "13419:2:135";
                };
                readonly returnParameters: {
                    readonly id: 25225;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25224;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25229;
                        readonly src: "13445:7:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25223;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "13445:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "13444:9:135";
                };
                readonly scope: 25262;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 25249;
                readonly nodeType: "FunctionDefinition";
                readonly src: "13495:184:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25248;
                    readonly nodeType: "Block";
                    readonly src: "13570:109:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 25240;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 25236;
                                    readonly name: "_marketState";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17826;
                                    readonly src: "13580:12:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_MarketState_$10357_storage";
                                        readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                    };
                                };
                                readonly id: 25238;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "13593:13:135";
                                readonly memberName: "shareReserves";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10323;
                                readonly src: "13580:26:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 25239;
                                readonly name: "shareReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25231;
                                readonly src: "13609:13:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                };
                            };
                            readonly src: "13580:42:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint128";
                                readonly typeString: "uint128";
                            };
                        };
                        readonly id: 25241;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "13580:42:135";
                    }, {
                        readonly expression: {
                            readonly id: 25246;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 25242;
                                    readonly name: "_marketState";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17826;
                                    readonly src: "13632:12:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_MarketState_$10357_storage";
                                        readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                    };
                                };
                                readonly id: 25244;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "13645:12:135";
                                readonly memberName: "bondReserves";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10326;
                                readonly src: "13632:25:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 25245;
                                readonly name: "bondReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25233;
                                readonly src: "13660:12:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                };
                            };
                            readonly src: "13632:40:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint128";
                                readonly typeString: "uint128";
                            };
                        };
                        readonly id: 25247;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "13632:40:135";
                    }];
                };
                readonly functionSelector: "702db0eb";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "setReserves";
                readonly nameLocation: "13504:11:135";
                readonly parameters: {
                    readonly id: 25234;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25231;
                        readonly mutability: "mutable";
                        readonly name: "shareReserves";
                        readonly nameLocation: "13524:13:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25249;
                        readonly src: "13516:21:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint128";
                            readonly typeString: "uint128";
                        };
                        readonly typeName: {
                            readonly id: 25230;
                            readonly name: "uint128";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "13516:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint128";
                                readonly typeString: "uint128";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25233;
                        readonly mutability: "mutable";
                        readonly name: "bondReserves";
                        readonly nameLocation: "13547:12:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25249;
                        readonly src: "13539:20:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint128";
                            readonly typeString: "uint128";
                        };
                        readonly typeName: {
                            readonly id: 25232;
                            readonly name: "uint128";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "13539:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint128";
                                readonly typeString: "uint128";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "13515:45:135";
                };
                readonly returnParameters: {
                    readonly id: 25235;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "13570:0:135";
                };
                readonly scope: 25262;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 25261;
                readonly nodeType: "FunctionDefinition";
                readonly src: "13685:113:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25260;
                    readonly nodeType: "Block";
                    readonly src: "13741:57:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 25258;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 25254;
                                    readonly name: "_marketState";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17826;
                                    readonly src: "13751:12:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_MarketState_$10357_storage";
                                        readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                    };
                                };
                                readonly id: 25256;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "13764:12:135";
                                readonly memberName: "longExposure";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10329;
                                readonly src: "13751:25:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 25257;
                                readonly name: "longExposure";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25251;
                                readonly src: "13779:12:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                };
                            };
                            readonly src: "13751:40:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint128";
                                readonly typeString: "uint128";
                            };
                        };
                        readonly id: 25259;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "13751:40:135";
                    }];
                };
                readonly functionSelector: "b4f8da39";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "setLongExposure";
                readonly nameLocation: "13694:15:135";
                readonly parameters: {
                    readonly id: 25252;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25251;
                        readonly mutability: "mutable";
                        readonly name: "longExposure";
                        readonly nameLocation: "13718:12:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25261;
                        readonly src: "13710:20:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint128";
                            readonly typeString: "uint128";
                        };
                        readonly typeName: {
                            readonly id: 25250;
                            readonly name: "uint128";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "13710:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint128";
                                readonly typeString: "uint128";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "13709:22:135";
                };
                readonly returnParameters: {
                    readonly id: 25253;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "13741:0:135";
                };
                readonly scope: 25262;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 24934;
                    readonly name: "Hyperdrive";
                    readonly nameLocations: readonly ["9491:10:135"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 4518;
                    readonly src: "9491:10:135";
                };
                readonly id: 24935;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "9491:10:135";
            }, {
                readonly baseName: {
                    readonly id: 24936;
                    readonly name: "MockHyperdriveBase";
                    readonly nameLocations: readonly ["9503:18:135"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 24933;
                    readonly src: "9503:18:135";
                };
                readonly id: 24937;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "9503:18:135";
            }];
            readonly canonicalName: "MockHyperdrive";
            readonly contractDependencies: readonly [25291, 25306, 25321, 25336, 25351];
            readonly contractKind: "contract";
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [25262, 24933, 4518, 14459, 17765, 16295, 15361, 16779, 12819, 13995, 17990, 71674, 11205, 11777, 10865, 11743];
            readonly name: "MockHyperdrive";
            readonly nameLocation: "9473:14:135";
            readonly scope: 25352;
            readonly usedErrors: readonly [10541, 10553, 10583, 10627, 10633, 10636, 10639, 10645, 71619];
            readonly usedEvents: readonly [11025, 11040, 11059, 11074, 11091, 11110, 11129, 11150, 11163, 11170, 11175, 11180, 11185, 11192, 11197, 11204, 11758, 11767, 11776];
        }, {
            readonly id: 25291;
            readonly nodeType: "ContractDefinition";
            readonly src: "13802:327:135";
            readonly nodes: readonly [{
                readonly id: 25276;
                readonly nodeType: "FunctionDefinition";
                readonly src: "13880:94:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25275;
                    readonly nodeType: "Block";
                    readonly src: "13972:2:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [];
                };
                readonly implemented: true;
                readonly kind: "constructor";
                readonly modifiers: readonly [{
                    readonly arguments: readonly [{
                        readonly id: 25272;
                        readonly name: "_config";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 25269;
                        readonly src: "13963:7:135";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10470_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig memory";
                        };
                    }];
                    readonly id: 25273;
                    readonly kind: "baseConstructorSpecifier";
                    readonly modifierName: {
                        readonly id: 25271;
                        readonly name: "HyperdriveTarget0";
                        readonly nameLocations: readonly ["13945:17:135"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 5333;
                        readonly src: "13945:17:135";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "13945:26:135";
                }];
                readonly name: "";
                readonly nameLocation: "-1:-1:-1";
                readonly parameters: {
                    readonly id: 25270;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25269;
                        readonly mutability: "mutable";
                        readonly name: "_config";
                        readonly nameLocation: "13931:7:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25276;
                        readonly src: "13901:37:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10470_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig";
                        };
                        readonly typeName: {
                            readonly id: 25268;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 25267;
                                readonly name: "IHyperdrive.PoolConfig";
                                readonly nameLocations: readonly ["13901:11:135", "13913:10:135"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10470;
                                readonly src: "13901:22:135";
                            };
                            readonly referencedDeclaration: 10470;
                            readonly src: "13901:22:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolConfig_$10470_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "13891:53:135";
                };
                readonly returnParameters: {
                    readonly id: 25274;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "13972:0:135";
                };
                readonly scope: 25291;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "public";
            }, {
                readonly id: 25290;
                readonly nodeType: "FunctionDefinition";
                readonly src: "13999:128:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25289;
                    readonly nodeType: "Block";
                    readonly src: "14067:60:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 25285;
                                    readonly name: "_governanceFeesAccrued";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17848;
                                    readonly src: "14096:22:135";
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
                                        readonly id: 25283;
                                        readonly name: "abi";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -1;
                                        readonly src: "14085:3:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_magic_abi";
                                            readonly typeString: "abi";
                                        };
                                    };
                                    readonly id: 25284;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "14089:6:135";
                                    readonly memberName: "encode";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "14085:10:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$";
                                        readonly typeString: "function () pure returns (bytes memory)";
                                    };
                                };
                                readonly id: 25286;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "14085:34:135";
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
                                readonly id: 25282;
                                readonly name: "_revert";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 5332;
                                readonly src: "14077:7:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bytes memory) pure";
                                };
                            };
                            readonly id: 25287;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "14077:43:135";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 25288;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "14077:43:135";
                    }];
                };
                readonly documentation: {
                    readonly id: 25277;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "13980:14:135";
                    readonly text: "Mocks ///";
                };
                readonly functionSelector: "8e67f87e";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getGovernanceFeesAccrued";
                readonly nameLocation: "14008:24:135";
                readonly parameters: {
                    readonly id: 25278;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "14032:2:135";
                };
                readonly returnParameters: {
                    readonly id: 25281;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25280;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25290;
                        readonly src: "14058:7:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25279;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "14058:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "14057:9:135";
                };
                readonly scope: 25291;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 25263;
                    readonly name: "HyperdriveTarget0";
                    readonly nameLocations: readonly ["13836:17:135"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 5333;
                    readonly src: "13836:17:135";
                };
                readonly id: 25264;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "13836:17:135";
            }, {
                readonly baseName: {
                    readonly id: 25265;
                    readonly name: "MockHyperdriveBase";
                    readonly nameLocations: readonly ["13855:18:135"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 24933;
                    readonly src: "13855:18:135";
                };
                readonly id: 25266;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "13855:18:135";
            }];
            readonly canonicalName: "MockHyperdriveTarget0";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [25291, 24933, 5333, 14459, 17765, 16295, 15361, 16779, 12819, 13995, 17990, 71674, 11205, 11777, 11525, 11865];
            readonly name: "MockHyperdriveTarget0";
            readonly nameLocation: "13811:21:135";
            readonly scope: 25352;
            readonly usedErrors: readonly [10535, 10541, 10544, 10553, 10562, 10565, 10574, 10577, 10580, 10583, 10607, 10612, 10615, 10621, 10624, 10639, 71049, 71330, 71335, 71338, 71619];
            readonly usedEvents: readonly [11025, 11040, 11059, 11074, 11091, 11110, 11129, 11150, 11163, 11170, 11175, 11180, 11185, 11192, 11197, 11204, 11758, 11767, 11776];
        }, {
            readonly id: 25306;
            readonly nodeType: "ContractDefinition";
            readonly src: "14131:174:135";
            readonly nodes: readonly [{
                readonly id: 25305;
                readonly nodeType: "FunctionDefinition";
                readonly src: "14209:94:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25304;
                    readonly nodeType: "Block";
                    readonly src: "14301:2:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [];
                };
                readonly implemented: true;
                readonly kind: "constructor";
                readonly modifiers: readonly [{
                    readonly arguments: readonly [{
                        readonly id: 25301;
                        readonly name: "_config";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 25298;
                        readonly src: "14292:7:135";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10470_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig memory";
                        };
                    }];
                    readonly id: 25302;
                    readonly kind: "baseConstructorSpecifier";
                    readonly modifierName: {
                        readonly id: 25300;
                        readonly name: "HyperdriveTarget1";
                        readonly nameLocations: readonly ["14274:17:135"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 5446;
                        readonly src: "14274:17:135";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "14274:26:135";
                }];
                readonly name: "";
                readonly nameLocation: "-1:-1:-1";
                readonly parameters: {
                    readonly id: 25299;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25298;
                        readonly mutability: "mutable";
                        readonly name: "_config";
                        readonly nameLocation: "14260:7:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25305;
                        readonly src: "14230:37:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10470_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig";
                        };
                        readonly typeName: {
                            readonly id: 25297;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 25296;
                                readonly name: "IHyperdrive.PoolConfig";
                                readonly nameLocations: readonly ["14230:11:135", "14242:10:135"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10470;
                                readonly src: "14230:22:135";
                            };
                            readonly referencedDeclaration: 10470;
                            readonly src: "14230:22:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolConfig_$10470_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "14220:53:135";
                };
                readonly returnParameters: {
                    readonly id: 25303;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "14301:0:135";
                };
                readonly scope: 25306;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "public";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 25292;
                    readonly name: "HyperdriveTarget1";
                    readonly nameLocations: readonly ["14165:17:135"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 5446;
                    readonly src: "14165:17:135";
                };
                readonly id: 25293;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "14165:17:135";
            }, {
                readonly baseName: {
                    readonly id: 25294;
                    readonly name: "MockHyperdriveBase";
                    readonly nameLocations: readonly ["14184:18:135"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 24933;
                    readonly src: "14184:18:135";
                };
                readonly id: 25295;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "14184:18:135";
            }];
            readonly canonicalName: "MockHyperdriveTarget1";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [25306, 24933, 5446, 14459, 17765, 16295, 15361, 16779, 12819, 13995, 17990, 71674, 11205, 11777];
            readonly name: "MockHyperdriveTarget1";
            readonly nameLocation: "14140:21:135";
            readonly scope: 25352;
            readonly usedErrors: readonly [10541, 10547, 10553, 10556, 10574, 10580, 10583, 10589, 10592, 10595, 10598, 10604, 10607, 10618, 10621, 10630, 10633, 10636, 10639, 10645, 71619];
            readonly usedEvents: readonly [11025, 11040, 11059, 11074, 11091, 11110, 11129, 11150, 11163, 11170, 11175, 11180, 11185, 11192, 11197, 11204, 11758, 11767, 11776];
        }, {
            readonly id: 25321;
            readonly nodeType: "ContractDefinition";
            readonly src: "14307:174:135";
            readonly nodes: readonly [{
                readonly id: 25320;
                readonly nodeType: "FunctionDefinition";
                readonly src: "14385:94:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25319;
                    readonly nodeType: "Block";
                    readonly src: "14477:2:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [];
                };
                readonly implemented: true;
                readonly kind: "constructor";
                readonly modifiers: readonly [{
                    readonly arguments: readonly [{
                        readonly id: 25316;
                        readonly name: "_config";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 25313;
                        readonly src: "14468:7:135";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10470_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig memory";
                        };
                    }];
                    readonly id: 25317;
                    readonly kind: "baseConstructorSpecifier";
                    readonly modifierName: {
                        readonly id: 25315;
                        readonly name: "HyperdriveTarget2";
                        readonly nameLocations: readonly ["14450:17:135"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 5535;
                        readonly src: "14450:17:135";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "14450:26:135";
                }];
                readonly name: "";
                readonly nameLocation: "-1:-1:-1";
                readonly parameters: {
                    readonly id: 25314;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25313;
                        readonly mutability: "mutable";
                        readonly name: "_config";
                        readonly nameLocation: "14436:7:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25320;
                        readonly src: "14406:37:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10470_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig";
                        };
                        readonly typeName: {
                            readonly id: 25312;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 25311;
                                readonly name: "IHyperdrive.PoolConfig";
                                readonly nameLocations: readonly ["14406:11:135", "14418:10:135"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10470;
                                readonly src: "14406:22:135";
                            };
                            readonly referencedDeclaration: 10470;
                            readonly src: "14406:22:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolConfig_$10470_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "14396:53:135";
                };
                readonly returnParameters: {
                    readonly id: 25318;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "14477:0:135";
                };
                readonly scope: 25321;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "public";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 25307;
                    readonly name: "HyperdriveTarget2";
                    readonly nameLocations: readonly ["14341:17:135"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 5535;
                    readonly src: "14341:17:135";
                };
                readonly id: 25308;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "14341:17:135";
            }, {
                readonly baseName: {
                    readonly id: 25309;
                    readonly name: "MockHyperdriveBase";
                    readonly nameLocations: readonly ["14360:18:135"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 24933;
                    readonly src: "14360:18:135";
                };
                readonly id: 25310;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "14360:18:135";
            }];
            readonly canonicalName: "MockHyperdriveTarget2";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [25321, 24933, 5535, 14459, 17765, 16295, 15361, 16779, 12819, 13995, 17990, 71674, 11205, 11777];
            readonly name: "MockHyperdriveTarget2";
            readonly nameLocation: "14316:21:135";
            readonly scope: 25352;
            readonly usedErrors: readonly [10541, 10547, 10553, 10574, 10580, 10583, 10589, 10598, 10607, 10618, 10621, 10630, 10633, 10636, 10639, 10645, 71619];
            readonly usedEvents: readonly [11025, 11040, 11059, 11074, 11091, 11110, 11129, 11150, 11163, 11170, 11175, 11180, 11185, 11192, 11197, 11204, 11758, 11767, 11776];
        }, {
            readonly id: 25336;
            readonly nodeType: "ContractDefinition";
            readonly src: "14483:174:135";
            readonly nodes: readonly [{
                readonly id: 25335;
                readonly nodeType: "FunctionDefinition";
                readonly src: "14561:94:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25334;
                    readonly nodeType: "Block";
                    readonly src: "14653:2:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [];
                };
                readonly implemented: true;
                readonly kind: "constructor";
                readonly modifiers: readonly [{
                    readonly arguments: readonly [{
                        readonly id: 25331;
                        readonly name: "_config";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 25328;
                        readonly src: "14644:7:135";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10470_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig memory";
                        };
                    }];
                    readonly id: 25332;
                    readonly kind: "baseConstructorSpecifier";
                    readonly modifierName: {
                        readonly id: 25330;
                        readonly name: "HyperdriveTarget3";
                        readonly nameLocations: readonly ["14626:17:135"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 5623;
                        readonly src: "14626:17:135";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "14626:26:135";
                }];
                readonly name: "";
                readonly nameLocation: "-1:-1:-1";
                readonly parameters: {
                    readonly id: 25329;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25328;
                        readonly mutability: "mutable";
                        readonly name: "_config";
                        readonly nameLocation: "14612:7:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25335;
                        readonly src: "14582:37:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10470_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig";
                        };
                        readonly typeName: {
                            readonly id: 25327;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 25326;
                                readonly name: "IHyperdrive.PoolConfig";
                                readonly nameLocations: readonly ["14582:11:135", "14594:10:135"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10470;
                                readonly src: "14582:22:135";
                            };
                            readonly referencedDeclaration: 10470;
                            readonly src: "14582:22:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolConfig_$10470_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "14572:53:135";
                };
                readonly returnParameters: {
                    readonly id: 25333;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "14653:0:135";
                };
                readonly scope: 25336;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "public";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 25322;
                    readonly name: "HyperdriveTarget3";
                    readonly nameLocations: readonly ["14517:17:135"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 5623;
                    readonly src: "14517:17:135";
                };
                readonly id: 25323;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "14517:17:135";
            }, {
                readonly baseName: {
                    readonly id: 25324;
                    readonly name: "MockHyperdriveBase";
                    readonly nameLocations: readonly ["14536:18:135"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 24933;
                    readonly src: "14536:18:135";
                };
                readonly id: 25325;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "14536:18:135";
            }];
            readonly canonicalName: "MockHyperdriveTarget3";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [25336, 24933, 5623, 14459, 17765, 16295, 15361, 16779, 12819, 13995, 17990, 71674, 11205, 11777];
            readonly name: "MockHyperdriveTarget3";
            readonly nameLocation: "14492:21:135";
            readonly scope: 25352;
            readonly usedErrors: readonly [10538, 10541, 10553, 10574, 10580, 10583, 10586, 10589, 10595, 10598, 10601, 10604, 10607, 10618, 10621, 10630, 10633, 10636, 10639, 10645, 71619];
            readonly usedEvents: readonly [11025, 11040, 11059, 11074, 11091, 11110, 11129, 11150, 11163, 11170, 11175, 11180, 11185, 11192, 11197, 11204, 11758, 11767, 11776];
        }, {
            readonly id: 25351;
            readonly nodeType: "ContractDefinition";
            readonly src: "14659:174:135";
            readonly nodes: readonly [{
                readonly id: 25350;
                readonly nodeType: "FunctionDefinition";
                readonly src: "14737:94:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25349;
                    readonly nodeType: "Block";
                    readonly src: "14829:2:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [];
                };
                readonly implemented: true;
                readonly kind: "constructor";
                readonly modifiers: readonly [{
                    readonly arguments: readonly [{
                        readonly id: 25346;
                        readonly name: "_config";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 25343;
                        readonly src: "14820:7:135";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10470_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig memory";
                        };
                    }];
                    readonly id: 25347;
                    readonly kind: "baseConstructorSpecifier";
                    readonly modifierName: {
                        readonly id: 25345;
                        readonly name: "HyperdriveTarget4";
                        readonly nameLocations: readonly ["14802:17:135"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 5702;
                        readonly src: "14802:17:135";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "14802:26:135";
                }];
                readonly name: "";
                readonly nameLocation: "-1:-1:-1";
                readonly parameters: {
                    readonly id: 25344;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25343;
                        readonly mutability: "mutable";
                        readonly name: "_config";
                        readonly nameLocation: "14788:7:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25350;
                        readonly src: "14758:37:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10470_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig";
                        };
                        readonly typeName: {
                            readonly id: 25342;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 25341;
                                readonly name: "IHyperdrive.PoolConfig";
                                readonly nameLocations: readonly ["14758:11:135", "14770:10:135"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10470;
                                readonly src: "14758:22:135";
                            };
                            readonly referencedDeclaration: 10470;
                            readonly src: "14758:22:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolConfig_$10470_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "14748:53:135";
                };
                readonly returnParameters: {
                    readonly id: 25348;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "14829:0:135";
                };
                readonly scope: 25351;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "public";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 25337;
                    readonly name: "HyperdriveTarget4";
                    readonly nameLocations: readonly ["14693:17:135"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 5702;
                    readonly src: "14693:17:135";
                };
                readonly id: 25338;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "14693:17:135";
            }, {
                readonly baseName: {
                    readonly id: 25339;
                    readonly name: "MockHyperdriveBase";
                    readonly nameLocations: readonly ["14712:18:135"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 24933;
                    readonly src: "14712:18:135";
                };
                readonly id: 25340;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "14712:18:135";
            }];
            readonly canonicalName: "MockHyperdriveTarget4";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [25351, 24933, 5702, 14459, 17765, 16295, 15361, 16779, 12819, 13995, 17990, 71674, 11205, 11777];
            readonly name: "MockHyperdriveTarget4";
            readonly nameLocation: "14668:21:135";
            readonly scope: 25352;
            readonly usedErrors: readonly [10541, 10553, 10559, 10574, 10580, 10583, 10586, 10589, 10595, 10598, 10604, 10607, 10618, 10621, 10630, 10633, 10636, 10639, 10645, 71619];
            readonly usedEvents: readonly [11025, 11040, 11059, 11074, 11091, 11110, 11129, 11150, 11163, 11170, 11175, 11180, 11185, 11192, 11197, 11204, 11758, 11767, 11776];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 135;
};
//# sourceMappingURL=MockHyperdriveTarget4.d.ts.map