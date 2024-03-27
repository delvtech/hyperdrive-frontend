export declare const MockHyperdriveTarget3: {
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
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "initialize";
        readonly inputs: readonly [{
            readonly name: "_contribution";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_apr";
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
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "openLong";
        readonly inputs: readonly [{
            readonly name: "_amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_minOutput";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_minVaultSharePrice";
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
        readonly name: "BelowMinimumContribution";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "DistributeExcessIdleFailed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ExpInvalidExponent";
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
        readonly name: "InvalidPresentValue";
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
        readonly name: "MinimumSharePrice";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "MinimumTransactionAmount";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NotPayable";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "OutputLimit";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "PoolAlreadyInitialized";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "PoolIsPaused";
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
        readonly name: "TransferFailed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "UnsafeCastToInt128";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "UnsafeCastToInt256";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "UnsafeCastToUint112";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "UnsafeCastToUint128";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "UpdateLiquidityFailed";
        readonly inputs: readonly [];
    }];
    readonly bytecode: {
        readonly object: "0x6102206040523480156200001257600080fd5b5060405162004b7938038062004b798339810160408190526200003591620001d8565b600160005580516001600160a01b039081166080908152606080840151610180908152918401516101a05260a0808501516101c05260e08086015190915260c080860151905261010080860151909152918401805151909252815160209081015161012090815283516040908101516101409081529451909301516101609081529186015185166101e052918501516102005290840151600a80546001600160a01b03199081169286169290921790559184015160088054841691851691909117905590920151600980549093169116179055620002b6565b6040516101a081016001600160401b03811182821017156200014057634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200015e57600080fd5b919050565b6000608082840312156200017657600080fd5b604051608081016001600160401b0381118282101715620001a757634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60006102008284031215620001ec57600080fd5b620001f66200010e565b620002018362000146565b8152620002116020840162000146565b602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101206200026e81850162000146565b908201526101406200028284820162000146565b908201526101606200029684820162000146565b90820152610180620002ab8585830162000163565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516147296200045060003960005050600050506000818161038b0152612ced0152600081816101060152818161015d0152818161024401528181611a4901528181611aae01528181612214015281816128fa0152818161293601528181612b950152612cc70152600081816101b301528181610cfa01528181610d4201528181610e64015281816112da0152818161136d0152612ca10152600061166d01526000818161179301526120de0152600081816109e001528181610db50152611767015260008181610d94015261209a0152600081816101f601528181610cd801528181610d6301528181610e850152612d130152600081816101d50152818161045501528181610920015261350101526000610877015260008181610582015281816110d801528181611121015281816111b301528181611234015281816113db0152818161145c01528181612288015281816122d10152818161238301526123cc01526147296000f3fe6080604052600436106100295760003560e01c806377d05ff41461002e578063cba2e58d14610054575b600080fd5b61004161003c36600461438e565b61007c565b6040519081526020015b60405180910390f35b6100676100623660046143de565b610093565b6040805192835260208301919091520161004b565b60006100898484846100b0565b90505b9392505050565b6000806100a286868686610324565b915091505b94509492505050565b60006100ba610556565b6100c2610580565b6100cb826105ed565b60055460ff16156100ef57604051637983c05160e01b815260040160405180910390fd5b6000806100fc8685610626565b909250905061012c7f0000000000000000000000000000000000000000000000000000000000000000600261444e565b82101561014c57604051632afb507160e21b815260040160405180910390fd5b6005805460ff1916600117905560027f0000000000000000000000000000000000000000000000000000000000000000028203925061018a826106ff565b600180546001600160801b0319166001600160801b039290921691909117905561021f61021a837f0000000000000000000000000000000000000000000000000000000000000000887f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000610729565b6106ff565b600180546001600160801b03928316600160801b0292169190911790556102686000807f00000000000000000000000000000000000000000000000000000000000000006107c8565b610280600061027a6020870187614465565b856107c8565b61029161028b610870565b826108ab565b50600061029f878387610c6e565b90506102ae6020860186614465565b6001600160a01b03167fdfe2bf9f580df5ec15438120ffa6f0603237c4e6b65d07140a4695317da4f9528583866102eb60408b0160208c0161449c565b60408051948552602085019390935291830152151560608201526080810189905260a00160405180910390a250505061008c6001600055565b60008061032f610556565b600554610100900460ff1615610358576040516321081abf60e01b815260040160405180910390fd5b610360610580565b610369836105ed565b6000806103768886610626565b909250905060006103878383610c9d565b90507f00000000000000000000000000000000000000000000000000000000000000008110156103ca5760405163211ddda360e11b815260040160405180910390fd5b868210156103eb576040516342af972b60e01b815260040160405180910390fd5b60006103f5610870565b905061040181846108ab565b5060008061040f8686610cb2565b90985090925090508a8710156104385760405163c972651760e01b815260040160405180910390fd5b80600b600082825461044a91906144b9565b9091555061047a90507f0000000000000000000000000000000000000000000000000000000000000000846144b9565b97506104888288878b610ec3565b600061049560018a61105f565b90506104ae816104a860208d018d614465565b8a6107c8565b8c8989888d856104c16020830183614465565b6001600160a01b03167f88087800d03445c97e2009f3f90906bf6ede79bbd194e275c66224e977a5b84c866104f7898787610c6e565b6105028a8888611094565b610512604088016020890161449c565b60408051948552602085019390935291830152151560608201526080810187905260a00160405180910390a350909a50505050505050505050506100a76001600055565b60026000540361057957604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee148015906105cd5750600034115b156105eb57604051631574f9f360e01b815260040160405180910390fd5b565b60006105fc6020830183614465565b6001600160a01b0316036106235760405163f0dd15fd60e01b815260040160405180910390fd5b50565b6000808061063a604085016020860161449c565b1561065f576106558561065060408701876144cc565b6110bc565b909350905061067b565b50346106778561067260408701876144cc565b611350565b8492505b6106836114fa565b915080156106f657604051600090339083908381818185875af1925050503d80600081146106cd576040519150601f19603f3d011682016040523d82523d6000602084013e6106d2565b606091505b50509050806106f4576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b6000600160801b821061072557604051630f0af95160e11b815260040160405180910390fd5b5090565b60008061073a846301e1338061150d565b905060006107488683610c9d565b61075a90670de0b6b3a76400006144b9565b9050670de0b6b3a7640000811061078e57610787610780670de0b6b3a76400008661150d565b8290611522565b90506107a6565b6107a3610780670de0b6b3a764000086611597565b90505b6107ba816107b4898b610c9d565b90610c9d565b925050505b95945050505050565b6000838152600d602090815260408083206001600160a01b0386168452909152812080548392906107fa9084906144b9565b90915550506000838152600e60205260408120805483929061081d9084906144b9565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b600061089c7f000000000000000000000000000000000000000000000000000000000000000042614529565b6108a6904261453d565b905090565b600082815260076020526040812080546001600160801b03161515806108d057504284115b156108e657546001600160801b03169050610c68565b6108ef836106ff565b81546001600160801b0319166001600160801b0391909116178155610913836115ac565b50600090506007816109457f00000000000000000000000000000000000000000000000000000000000000008861453d565b815260208101919091526040016000908120546001600160801b0316915061096e60028761105f565b6000818152600e60205260408120549192508115610aaf57506001600080610998848a8884611750565b9150915080600b60008282546109ae91906144b9565b909155506109ca9050846000846109c48161181e565b8e611848565b6109d481836144b9565b9150610a048483888c8d7f00000000000000000000000000000000000000000000000000000000000000006119c2565b9150610a18610a13838b610c9d565b611a0c565b60058054600290610a399084906201000090046001600160701b0316614550565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a66826106ff565b60058054601090610a88908490600160801b90046001600160801b0316614570565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000610abc60018a61105f565b6000818152600e60205260409020549091508015610bcc5760019250600080610ae8838c8a6001611750565b9150915080600b6000828254610afe91906144b9565b909155508c9050610b1b84600085610b158161181e565b85611a32565b610b25828461453d565b9250610b34610a13848e610c9d565b60058054600290610b559084906201000090046001600160701b0316614550565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610b82836106ff565b60058054601090610ba4908490600160801b90046001600160801b0316614570565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505b8215610c0357610bf8610bde8561181e565b610be78361181e565b610bf19190614590565b6000611c27565b610c0189611cda565b505b6000610c0e8a611e49565b50604080518c815260208101889052908101849052606081018290529091508b907f5012836090f6cac0f5b321be3188c3cd9c82c8252a23afea128ea014a6fd15519060800160405180910390a289985050505050505050505b92915050565b6000610c80604083016020840161449c565b15610c8c57508261008c565b610c968484610c9d565b905061008c565b600061008c8383670de0b6b3a7640000611f39565b6000806000610d1e610cc2611f57565b600154600160801b90046001600160801b0316877f0000000000000000000000000000000000000000000000000000000000000000887f0000000000000000000000000000000000000000000000000000000000000000611f78565b91506000610d87610d2d611f57565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611fa4565b9050610dde8684610dd9847f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611fbb565b612026565b15610ded57610ded6002612068565b600080610dfb88848961208c565b9092509050610e0a828661453d565b9450610e17818489611f39565b9350610e23848961453d565b9550670de0b6b3a7640000610ea987610e3a611f57565b610e4491906144b9565b600154610e62908990600160801b90046001600160801b031661453d565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611fa4565b1115610eb957610eb96002612068565b5050509250925092565b600254600160801b90046001600160801b0316610f0561021a82610eef670de0b6b3a76400008661444e565b6004546001600160801b0316919088600161210c565b600480546001600160801b0319166001600160801b0392909216919091179055610f2e856106ff565b60018054600090610f499084906001600160801b0316614570565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610f76846106ff565b60018054601090610f98908490600160801b90046001600160801b03166145b0565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610fc5846106ff565b610fcf9082614570565b600280546001600160801b03808416600160801b02911617905590506000610ff6836121c9565b9050611014816110058761181e565b61100f90846145d0565b611c27565b61101d8461220d565b61102b5761102b6003612068565b600061103685611cda565b90508061105657604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b60006001600160f81b038211156110895760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60006110a6604083016020840161449c565b156110b557610c96848461150d565b508261008c565b6000808073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161110c575047611197565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611170573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061119491906145f8565b90505b6001600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016112125787341015611201576040516312171d8360e31b815260040160405180910390fd5b61120b883461453d565b90506112ac565b6040516323b872dd60e01b8152336004820152306024820152604481018990527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015611285573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112a99190614611565b91505b816112ca576040516312171d8360e31b815260040160405180910390fd5b60125460000361130f576112fe887f000000000000000000000000000000000000000000000000000000000000000061150d565b601281905594509250611348915050565b601254600090611321908a9086611f39565b9050806012600082825461133591906144b9565b9091555090955090935061134892505050565b935093915050565b600061135b8461226d565b905060125460000361139957611391817f000000000000000000000000000000000000000000000000000000000000000061150d565b6012556113bf565b60006113a482612368565b905080601260008282546113b891906144b9565b9091555050505b6001600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161143a5782341015611429576040516312171d8360e31b815260040160405180910390fd5b611433833461453d565b90506114d4565b6040516323b872dd60e01b8152336004820152306024820152604481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af11580156114ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114d19190614611565b91505b816114f2576040516312171d8360e31b815260040160405180910390fd5b505050505050565b60006108a6670de0b6b3a764000061226d565b600061008c83670de0b6b3a764000084611f39565b60008160000361153b5750670de0b6b3a7640000610c68565b8260000361154b57506000610c68565b60006115568361181e565b9050600061156b6115668661181e565b612451565b9050818102611582670de0b6b3a76400008261462e565b905061158d81612677565b9695505050505050565b600061008c83670de0b6b3a76400008461280c565b60055460009081906115cf908490600160801b90046001600160801b0316610c9d565b6005546201000090046001600160701b0316925090508181111561174b5760006115f9838361453d565b905061160861021a8286611597565b6005805460109061162a908490600160801b90046001600160801b03166145b0565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611663858361150d90919063ffffffff16565b90506000611691827f0000000000000000000000000000000000000000000000000000000000000000610c9d565b905080600b60008282546116a591906144b9565b909155506116b59050818361453d565b91506116c0826106ff565b600180546000906116db9084906001600160801b0316614570565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061170882612832565b6003805460009061171d908490600f0b61465c565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60008061175d868661150d565b9150600061178b837f0000000000000000000000000000000000000000000000000000000000000000610c9d565b90506117b7817f0000000000000000000000000000000000000000000000000000000000000000610c9d565b915083156117da576117c9828261453d565b6117d3908461453d565b92506117f1565b6117e4828261453d565b6117ee90846144b9565b92505b8486101561181457611804838787611f39565b9250611811828787611f39565b91505b5094509492505050565b60006001600160ff1b038211156107255760405163396ea70160e11b815260040160405180910390fd5b600354600160801b90046001600160801b031661189161021a82611874670de0b6b3a76400008661444e565b600454600160801b90046001600160801b031691908a600061210c565b600480546001600160801b03928316600160801b0292169190911790556118b7866106ff565b6118c190826145b0565b600380546001600160801b03928316600160801b0292169190911790556118e7846106ff565b600180546000906119029084906001600160801b0316614570565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061192f8361285c565b60038054600090611944908490600f0b61465c565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611974856106ff565b60018054601090611996908490600160801b90046001600160801b03166145b0565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b6000806119da846119d48a888a611f39565b9061150d565b90506119e7888486611f39565b6119f190826144b9565b905086811115611a015786810391505b509695505050505050565b6000600160701b82106107255760405163086b151760e11b815260040160405180910390fd5b6001546001600160801b031683811080611a7457507f0000000000000000000000000000000000000000000000000000000000000000611a72858361453d565b105b15611a8357611a836003612068565b6003549084900390600f0b611a988482614590565b905083611aa48661181e565b138015611ad957507f0000000000000000000000000000000000000000000000000000000000000000611ad7838361289a565b105b15611ae857611ae86001612068565b600254600160801b90046001600160801b0316611b2a61021a82611b14670de0b6b3a76400008861444e565b6004546001600160801b031691908c600061210c565b600480546001600160801b0319166001600160801b0392909216919091179055611b54888261453d565b9050611b5f816106ff565b600280546001600160801b03928316600160801b029216919091179055611b85836106ff565b600180546001600160801b0319166001600160801b0392909216919091179055611bae8261285c565b600380546001600160801b0319166001600160801b0392909216919091179055611bd7876106ff565b60018054601090611bf9908490600160801b90046001600160801b0316614570565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b6000611c50611c3684836128c2565b611c418460006128c2565b611c4b9190614590565b61285c565b9050600081600f0b1315611ca55760028054829190600090611c7c9084906001600160801b0316614570565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b1215611cd557611cba81614689565b60028054600090611c7c9084906001600160801b03166145b0565b505050565b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95490918291611d25916001600160801b03169061453d565b905080600003611d385750600192915050565b6000611d43846128d8565b905080600003611d57575060019392505050565b600080611d6583858861297a565b9150915080611d7a5750600095945050505050565b600080611d8684612a80565b91509150611d93826106ff565b60068054600090611dae9084906001600160801b0316614570565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611ddb816106ff565b60068054601090611dfd908490600160801b90046001600160801b0316614570565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611e3b611e2d8261181e565b611e36906146af565b612b68565b506001979650505050505050565b600080600080611e60611e5b86612c58565b612d92565b9150915080611e76575060009485945092505050565b6000808611611e86576000611e90565b611e908387610c9d565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b0390921691611efb91906144b9565b611f05919061453d565b905080600003611f1e5750600096879650945050505050565b6000611f2a838361150d565b98600198509650505050505050565b6000826000190484118302158202611f5057600080fd5b5091020490565b6001546003546000916108a6916001600160801b0390911690600f0b61289a565b6000611f99878787611f9288670de0b6b3a764000061453d565b8787612e1f565b979650505050505050565b60006107bf82611fb5858888611f39565b90611522565b6000610089612002611fd584670de0b6b3a764000061453d565b611ffc670de0b6b3a7640000611feb818a611597565b611ff5919061453d565b8790612ed0565b90612ed0565b61201490670de0b6b3a76400006144b9565b6119d484670de0b6b3a764000061453d565b60008061205d85612035611f57565b61203f91906144b9565b600154610e62908790600160801b90046001600160801b031661453d565b909210949350505050565b80604051633c06d78b60e11b815260040161208391906146cb565b60405180910390fd5b6000806120d685611ffc85817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a76400006120cc818c611597565b611ffc919061453d565b9150612102827f0000000000000000000000000000000000000000000000000000000000000000610c9d565b9050935093915050565b60008260000361211d5750846107bf565b811561218f5761214e61213084876144b9565b61213a8587610c9d565b612144888a610c9d565b6119d491906144b9565b9050600061215c8588612ee5565b9050600061216a8689612ef4565b90508183101561217c57819250612188565b80831115612188578092505b50506107bf565b82850361219e575060006107bf565b61158d6121ab848761453d565b6121b58587612ed0565b6121bf888a610c9d565b6119d4919061453d565b60006121f1600e60006121dd60028661105f565b81526020019081526020016000205461181e565b612203600e60006121dd60018761105f565b610c689190614590565b60006122397f000000000000000000000000000000000000000000000000000000000000000083612ed0565b60025461224f91906001600160801b03166144b9565b600154612265906001600160801b031684610c9d565b101592915050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016122bc575047612347565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015612320573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061234491906145f8565b90505b60125460000361235857600061008c565b60125461008c9084908390611f39565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016123b7575047612442565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa15801561241b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061243f91906145f8565b90505b60125461008c90849083611f39565b60008082136124735760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906124f69084901c61181e565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361269257506000919050565b680755bf798b4a1bf1e582126126bb576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061158d74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c61181e565b600082600019048411830215820261282357600080fd5b50910281810615159190040190565b600060016001607f1b038211156107255760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b0319821280159061287d575060016001607f1b038213155b6107255760405163a5353be560e01b815260040160405180910390fd5b6000806128a78484612f03565b9092509050806128bb576128bb6001612068565b5092915050565b60008183136128d1578161008c565b5090919050565b60025460009081906128f3906001600160801b031684611597565b905061291f7f0000000000000000000000000000000000000000000000000000000000000000826144b9565b6001546001600160801b03161115612974576001547f00000000000000000000000000000000000000000000000000000000000000009061296a9083906001600160801b031661453d565b61008c919061453d565b50919050565b6129826142c9565b60008061298e84612c58565b9050600061299b82612d92565b93509050826129b05750600091506113489050565b60006129d76129d2846101600151856101400151610c9d90919063ffffffff16565b61181e565b6129f76129d2856101200151866101000151612ed090919063ffffffff16565b612a019190614590565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b600080600080612a988560c001518660e00151612f03565b9150915080612aae575060009485945092505050565b6000612aba8684612f3f565b92509050811580612ac9575080155b15612adc57506000958695509350505050565b6000612ae8878361304e565b905080600003612b015750600096879650945050505050565b86606001518111612b1757969095509350505050565b5060608601516000612b2a88868561311f565b905080600003612b44575060009788975095505050505050565b828110612b5b575060009788975095505050505050565b9097909650945050505050565b6001546003546001600160801b0380831692600f9290920b91600160801b90041660008080612bba8686867f00000000000000000000000000000000000000000000000000000000000000008b61346f565b925092509250858314612bf157612bd0836106ff565b600180546001600160801b0319166001600160801b03929092169190911790555b848214612c2257612c018261285c565b600380546001600160801b0319166001600160801b03929092169190911790555b83811461105657612c32816106ff565b600180546001600160801b03928316600160801b02921691909117905550505050505050565b612c6061431b565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526002540482166101008201526004549091610120830191612d5891166134b6565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192612d8a929004166134b6565b905292915050565b6000806000806000612da38661352c565b9150915080612dba57506000958695509350505050565b612dc78660a0015161181e565b612dd08761384c565b83612dde896000015161181e565b612de891906145d0565b612df291906145d0565b612dfc9190614590565b925050506000811215612e155750600093849350915050565b9360019350915050565b600080612e2f88888787876138b0565b9050612e4985611fb5612e42898c6144b9565b8690610c9d565b9750612e56848985611f39565b975087811015612e6a57612e6a6000612068565b878103670de0b6b3a76400008110612e9857612e91610780670de0b6b3a764000088611597565b9050612eb0565b612ead610780670de0b6b3a76400008861150d565b90505b80881015612ec257612ec26000612068565b909603979650505050505050565b600061008c8383670de0b6b3a764000061280c565b6000818311612974578261008c565b60008183116128d1578161008c565b600080600083612f128661181e565b612f1c9190614590565b90506000811215612f345760008092509250506106f8565b946001945092505050565b60008060008460a0015112612f5c575050608082015160016106f8565b60008460a00151612f6c906146af565b90506000612fa885876101000151886000015160e00151670de0b6b3a7640000612f96919061453d565b895160608101516080909101516138df565b93509050821580612fb7575080155b15612fca576000809350935050506106f8565b6000612fd68383611597565b9050670de0b6b3a764000081116130125780670de0b6b3a764000003945061300b8760c0015186610c9d90919063ffffffff16565b9450613021565b600080945094505050506106f8565b86608001518511156130405786608001516001945094505050506106f8565b506001925050509250929050565b6000806130848460c001518560e00151866101000151876000015160a001516130768861181e565b61307f906146af565b61398b565b875160408101929092526020820192909252919091529050806130ab576000915050610c68565b60006130ba8560000151612d92565b92509050816130ce57600092505050610c68565b846020015181106130e457600092505050610c68565b6000856060015186604001516130fa91906144b9565b905061311582876020015183611f399092919063ffffffff16565b61158d908261453d565b6000808460600151856040015161313691906144b9565b602086015160608701519192506000916131509184611f39565b90508560a0015160000361316757915061008c9050565b60005b60048110156134655761317d8286612ee5565b915060006131a68860c001518960e001518a61010001518b6000015160a001516130768861181e565b8b5160408101929092526020820192909252919091529050806131d057600094505050505061008c565b60006131df8960000151613aa3565b90506131ec898287613ad3565b156131f8575050613465565b60008960a00151131561335c57885180516020820151604083015160a084015160e0909401518d94600094613252949093909290919061324090670de0b6b3a764000061453d565b87516060810151608090910151613b3f565b945090508361326b57600097505050505050505061008c565b808260a00151106133595761327f82613c2b565b90965093508361329957600097505050505050505061008c565b6132be8260c001518360e00151846101000151856000015160a001516130768b61181e565b855160408101929092526020820192909252919091529350836132eb57600097505050505050505061008c565b815180516020820151604083015160a0909301518e5160e0015161331d94919061324090670de0b6b3a764000061453d565b945090508361333657600097505050505050505061008c565b8a60a001518111613350578597505050505050505061008c565b5050505061316a565b50505b600061336d8a8a8c60a00151613d01565b935090508215806133865750670de0b6b3a76400008110155b1561339a576000965050505050505061008c565b80670de0b6b3a764000003905060006133c76129d28c604001518d60200151612ed090919063ffffffff16565b6133d46129d2858a610c9d565b6133de9190614590565b90506000811315613408576133f7876119d4838561150d565b61340190876144b9565b9550613456565b600081121561344d576000613422886119d48581866146af565b905086811015613436578087039650613447565b60009850505050505050505061008c565b50613456565b50505050613465565b8460010194505050505061316a565b5095945050505050565b600080600080613482898989898961398b565b92965090945092509050806134aa57604051635044b7f560e01b815260040160405180910390fd5b50955095509592505050565b600080670de0b6b3a76400006134ca610870565b6134d4919061444e565b90508083116134e45760006134ee565b6134ee818461453d565b915061008c613525670de0b6b3a76400007f000000000000000000000000000000000000000000000000000000000000000061444e565b839061150d565b60008060006135516129d2856101600151866101400151610c9d90919063ffffffff16565b6135716129d2866101200151876101000151612ed090919063ffffffff16565b61357b9190614590565b905060008061359286600001518760200151612f03565b91509150806135a957506000958695509350505050565b60008313156136ea57600083905060006135f7886000015189602001518a604001518b60a001518c60e00151670de0b6b3a76400006135e8919061453d565b8d606001518e60800151613b3f565b9350905082613610575060009788975095505050505050565b8181106136ae57600061364a858a60400151858c60e00151670de0b6b3a764000061363b919061453d565b8d606001518e6080015161405b565b945090508315801561365f57508860c0015183105b156136765750600098600198509650505050505050565b8361368c57506000988998509650505050505050565b6136958161181e565b61369e906146af565b9960019950975050505050505050565b60008860200151126136d6576136cd8860a00151856129d2919061453d565b611f2a906146af565b60a088015188516136cd916129d29161453d565b600083121561383d5760006136fe846146af565b905060006137328489604001518a60e00151670de0b6b3a7640000613723919061453d565b8b606001518c608001516138df565b935090508261374b575060009788975095505050505050565b8181106137d0576000613785858a60400151858c60e00151670de0b6b3a7640000613776919061453d565b8d606001518e6080015161411e565b945090508315801561379a57508860c0015183105b156137b15750600098600198509650505050505050565b836137c757506000988998509650505050505050565b61369e8161181e565b6000613802858a604001518b60e00151670de0b6b3a76400006137f3919061453d565b8c606001518d608001516141f5565b945090508361381c57506000988998509650505050505050565b61369e6138338a6060015184866119d4919061453d565b6129d290836144b9565b50600095600195509350505050565b600061387f6129d2836101200151670de0b6b3a764000061386d919061453d565b6060850151610100860151919061280c565b6122036129d2846101600151670de0b6b3a764000061389e919061453d565b60608601516101408701519190611f39565b60006138bc8585611522565b6138d56138cd86611fb5868b612ed0565b85908561280c565b61158d91906144b9565b60008060006138f188888888886138b0565b9050600061391c670de0b6b3a764000061390b888861150d565b61391591906144b9565b8390611597565b9050670de0b6b3a7640000811061394957613942610780670de0b6b3a764000089611597565b9050613961565b61395e610780670de0b6b3a76400008961150d565b90505b8088101561397757600080935093505050613981565b8703925060019150505b9550959350505050565b600080600080846000036139aa57508792508691508590506001613a97565b6000856139b68b61181e565b6139c091906145d0565b90506139cb8761181e565b8112156139e657600080600080945094509450945050613a97565b80945060008912613a06576139ff6129d2868b8d611f39565b9350613a29565b613a1d6129d2613a158b6146af565b87908d61280c565b613a26906146af565b93505b600080613a368c8c612f03565b9150915080613a55576000806000809650965096509650505050613a97565b6000613a618888612f03565b9250905081613a8157600080600080975097509750975050505050613a97565b613a8c8b8285611f39565b955060019450505050505b95509550955095915050565b6000806000613ab184612d92565b91509150806128bb57604051635516328b60e11b815260040160405180910390fd5b6020830151600090613ae59084611597565b6040850151613af590849061150d565b1015801561008957506020840151613b259084613b1e633b9aca00670de0b6b3a76400006144b9565b9190611f39565b6040850151613b35908490611597565b1115949350505050565b6000806000881215613b6157613b54886146af565b613b5e90876144b9565b95505b6000613b6d8a8a61289a565b90506000613b7e828a8989896142a4565b90506000613b9b613b9389611fb5898d612ed0565b88908861280c565b905080821015613bb45760008094509450505050613c1f565b808203670de0b6b3a76400008110613be257613bdb610780670de0b6b3a76400008b61150d565b9050613bfa565b613bf7610780670de0b6b3a76400008b611597565b90505b8a811015613c12576000809550955050505050613c1f565b8a90039450600193505050505b97509795505050505050565b60008060008360e0015113613c4557506000928392509050565b6000613c54846000015161384c565b90506000613c80856040015186606001518760400151613c7491906144b9565b6020880151919061280c565b905060008212613ca75780821015613c9a57819003613cbd565b5060009485945092505050565b613cb0826146af565b613cba90826144b9565b90505b60e085015160c0860151613cd291839061280c565b9050808560c001511015613ced575060009485945092505050565b808560c00151036001935093505050915091565b6000806000808412613d2557855160400151613d1e9085906144b9565b9050613d60565b6000613d30856146af565b875160400151909150811015613d50578651604001518190039150613d5e565b600080935093505050611348565b505b855180516020909101516000918291613d799190612f03565b9150915080613d915760008094509450505050611348565b875160e0810151604090910151600091613dc691613dba91613db39190611522565b8a90610c9d565b6101008b015190611597565b895160e0810151608090910151613df191613de591611fb59088610c9d565b8b516060015190611597565b613dfb91906144b9565b90506000613e33613e27613e208c6000015160e001518861152290919063ffffffff16565b8b90612ed0565b6101008c01519061150d565b905080821015613e4e57600080965096505050505050611348565b80820391506000613e90858c60000151604001518d6000015160e00151670de0b6b3a7640000613e7e919061453d565b8e5160608101516080909101516138b0565b90506000613eba8c6000015160e00151670de0b6b3a7640000613eb3919061453d565b8890611522565b905080821015613ed7576000809850985050505050505050611348565b8b51608081015160609091015191830391613ef391839161280c565b9050670de0b6b3a76400008110613f37578b5160e00151613f309061078090613f2490670de0b6b3a764000061453d565b8e5160e0015190611597565b9050613f66565b8b5160e00151613f639061078090613f5790670de0b6b3a764000061453d565b8e5160e001519061150d565b90505b8b5160600151613f79908590839061280c565b935083670de0b6b3a76400001115613f9d5783670de0b6b3a7640000039350613fb1565b600060019850985050505050505050611348565b60008c60e00151126140135760c08c015160e08d0151613fd091611597565b9250670de0b6b3a76400008310613ff4576000809850985050505050505050611348565b670de0b6b3a7640000929092039161400c8484610c9d565b9350614048565b61404561402c8d60c001518e60e001516119d4906146af565b61403e90670de0b6b3a76400006144b9565b8590610c9d565b93505b50919a60019a5098505050505050505050565b600080600061406d89898888886138b0565b905061407d86611fb5898b6144b9565b975087811015614094576000809250925050614113565b8781036140a281868861280c565b9050670de0b6b3a764000081106140cf576140c8610780670de0b6b3a764000089611597565b90506140e7565b6140e4610780670de0b6b3a76400008961150d565b90505b6140f18186611597565b9050808a101561410957600080935093505050614113565b8903925060019150505b965096945050505050565b600080600061413089898888886138b0565b905086881015614147576000809250925050614113565b96869003966141568887611522565b97508781101561416d576000809250925050614113565b87810361417b81868861280c565b9050670de0b6b3a764000081106141a8576141a1610780670de0b6b3a764000089611597565b90506141c0565b6141bd610780670de0b6b3a76400008961150d565b90505b6141ca8186611597565b9050898110156141e257600080935093505050614113565b9890980398600198509650505050505050565b600080600061420788888888886142a4565b9050600061422b670de0b6b3a76400006142218888611597565b61352591906144b9565b9050670de0b6b3a7640000811061425857614251610780670de0b6b3a76400008961150d565b9050614270565b61426d610780670de0b6b3a764000089611597565b90505b61427a818661150d565b90508881101561429257600080935093505050613981565b97909703976001975095505050505050565b60006142b08585611522565b6138d56142c186611fb5868b610c9d565b859085611f39565b6040518061012001604052806142dd61431b565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60006060828403121561297457600080fd5b6000806000606084860312156143a357600080fd5b8335925060208401359150604084013567ffffffffffffffff8111156143c857600080fd5b6143d48682870161437c565b9150509250925092565b600080600080608085870312156143f457600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561442057600080fd5b61442c8782880161437c565b91505092959194509250565b634e487b7160e01b600052601160045260246000fd5b8082028115828204841417610c6857610c68614438565b60006020828403121561447757600080fd5b81356001600160a01b038116811461008c57600080fd5b801515811461062357600080fd5b6000602082840312156144ae57600080fd5b813561008c8161448e565b80820180821115610c6857610c68614438565b6000808335601e198436030181126144e357600080fd5b83018035915067ffffffffffffffff8211156144fe57600080fd5b6020019150368190038213156106f857600080fd5b634e487b7160e01b600052601260045260246000fd5b60008261453857614538614513565b500690565b81810381811115610c6857610c68614438565b6001600160701b038181168382160190808211156128bb576128bb614438565b6001600160801b038181168382160190808211156128bb576128bb614438565b81810360008312801583831316838312821617156128bb576128bb614438565b6001600160801b038281168282160390808211156128bb576128bb614438565b80820182811260008312801582168215821617156145f0576145f0614438565b505092915050565b60006020828403121561460a57600080fd5b5051919050565b60006020828403121561462357600080fd5b815161008c8161448e565b60008261463d5761463d614513565b600160ff1b82146000198414161561465757614657614438565b500590565b600f81810b9083900b0160016001607f1b03811360016001607f1b031982121715610c6857610c68614438565b600081600f0b60016001607f1b031981036146a6576146a6614438565b60000392915050565b6000600160ff1b82016146c4576146c4614438565b5060000390565b60208101600483106146ed57634e487b7160e01b600052602160045260246000fd5b9190529056fea264697066735822122093d16514c8e0c2b5f6f157443240c9a03068ab1b172455cc3af09efa8a9723dd64736f6c63430008140033";
        readonly sourceMap: "14483:174:141:-:0;;;14561:94;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1713:1:175;1917:7;:21;5192:17:124;;-1:-1:-1;;;;;5179:30:124;;;;;;;5299;;;;;5273:56;;;;5752:28;;;;5728:52;;6068:32;;;;;6040:60;;6283:26;;;;;6261:48;;;6339:24;;;;;6319:44;;-1:-1:-1;6388:19:124;;;;6373:34;;;6472:12;;;;;:18;6460:30;;;6511:12;;-1:-1:-1;6511:17:124;;;;-1:-1:-1;6500:28:124;;;6557:12;;-1:-1:-1;6557:25:124;;;;6538:44;;;;6615:12;;:29;;;;6592:52;;;;-1:-1:-1;;;6721:21:124;6704:38;;;;-1:-1:-1;;;6770:22:124;6752:40;;6895:18;;;;6881:11;:32;;-1:-1:-1;;;;;;6881:32:124;;;;;;;;;;;;6939:20;;;;6923:13;:36;;;;;;;;;;;;;6987:22;;;;6969:15;:40;;;;;;;;;;14483:174:141;;14:347:239;81:2;75:9;123:6;111:19;;-1:-1:-1;;;;;145:34:239;;181:22;;;142:62;139:185;;;246:10;241:3;237:20;234:1;227:31;281:4;278:1;271:15;309:4;306:1;299:15;139:185;340:2;333:22;14:347;:::o;366:185::-;453:13;;-1:-1:-1;;;;;495:31:239;;485:42;;475:70;;541:1;538;531:12;475:70;366:185;;;:::o;556:681::-;618:5;666:4;654:9;649:3;645:19;641:30;638:50;;;684:1;681;674:12;638:50;717:2;711:9;759:4;747:17;;-1:-1:-1;;;;;779:34:239;;815:22;;;776:62;773:185;;;880:10;875:3;871:20;868:1;861:31;915:4;912:1;905:15;943:4;940:1;933:15;773:185;978:10;974:2;967:22;;1007:6;998:15;;1043:9;1037:16;1029:6;1022:32;1108:2;1097:9;1093:18;1087:25;1082:2;1074:6;1070:15;1063:50;1167:2;1156:9;1152:18;1146:25;1141:2;1133:6;1129:15;1122:50;1226:2;1215:9;1211:18;1205:25;1200:2;1192:6;1188:15;1181:50;;556:681;;;;:::o;1242:1293::-;1341:6;1394:3;1382:9;1373:7;1369:23;1365:33;1362:53;;;1411:1;1408;1401:12;1362:53;1437:17;;:::i;:::-;1477:48;1515:9;1477:48;:::i;:::-;1470:5;1463:63;1558:57;1611:2;1600:9;1596:18;1558:57;:::i;:::-;1553:2;1546:5;1542:14;1535:81;1669:2;1658:9;1654:18;1648:25;1643:2;1636:5;1632:14;1625:49;1727:2;1716:9;1712:18;1706:25;1701:2;1694:5;1690:14;1683:49;1786:3;1775:9;1771:19;1765:26;1759:3;1752:5;1748:15;1741:51;1846:3;1835:9;1831:19;1825:26;1819:3;1812:5;1808:15;1801:51;1906:3;1895:9;1891:19;1885:26;1879:3;1872:5;1868:15;1861:51;1966:3;1955:9;1951:19;1945:26;1939:3;1932:5;1928:15;1921:51;1991:3;2047:2;2036:9;2032:18;2026:25;2021:2;2014:5;2010:14;2003:49;;2071:3;2106:57;2159:2;2148:9;2144:18;2106:57;:::i;:::-;2090:14;;;2083:81;2183:3;2218:57;2256:18;;;2218:57;:::i;:::-;2202:14;;;2195:81;2295:3;2330:57;2368:18;;;2330:57;:::i;:::-;2314:14;;;2307:81;2407:3;2442:62;2496:7;2476:18;;;2442:62;:::i;:::-;2426:14;;;2419:86;2430:5;1242:1293;-1:-1:-1;;;1242:1293:239:o;:::-;14483:174:141;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly deployedBytecode: {
        readonly object: "0x6080604052600436106100295760003560e01c806377d05ff41461002e578063cba2e58d14610054575b600080fd5b61004161003c36600461438e565b61007c565b6040519081526020015b60405180910390f35b6100676100623660046143de565b610093565b6040805192835260208301919091520161004b565b60006100898484846100b0565b90505b9392505050565b6000806100a286868686610324565b915091505b94509492505050565b60006100ba610556565b6100c2610580565b6100cb826105ed565b60055460ff16156100ef57604051637983c05160e01b815260040160405180910390fd5b6000806100fc8685610626565b909250905061012c7f0000000000000000000000000000000000000000000000000000000000000000600261444e565b82101561014c57604051632afb507160e21b815260040160405180910390fd5b6005805460ff1916600117905560027f0000000000000000000000000000000000000000000000000000000000000000028203925061018a826106ff565b600180546001600160801b0319166001600160801b039290921691909117905561021f61021a837f0000000000000000000000000000000000000000000000000000000000000000887f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000610729565b6106ff565b600180546001600160801b03928316600160801b0292169190911790556102686000807f00000000000000000000000000000000000000000000000000000000000000006107c8565b610280600061027a6020870187614465565b856107c8565b61029161028b610870565b826108ab565b50600061029f878387610c6e565b90506102ae6020860186614465565b6001600160a01b03167fdfe2bf9f580df5ec15438120ffa6f0603237c4e6b65d07140a4695317da4f9528583866102eb60408b0160208c0161449c565b60408051948552602085019390935291830152151560608201526080810189905260a00160405180910390a250505061008c6001600055565b60008061032f610556565b600554610100900460ff1615610358576040516321081abf60e01b815260040160405180910390fd5b610360610580565b610369836105ed565b6000806103768886610626565b909250905060006103878383610c9d565b90507f00000000000000000000000000000000000000000000000000000000000000008110156103ca5760405163211ddda360e11b815260040160405180910390fd5b868210156103eb576040516342af972b60e01b815260040160405180910390fd5b60006103f5610870565b905061040181846108ab565b5060008061040f8686610cb2565b90985090925090508a8710156104385760405163c972651760e01b815260040160405180910390fd5b80600b600082825461044a91906144b9565b9091555061047a90507f0000000000000000000000000000000000000000000000000000000000000000846144b9565b97506104888288878b610ec3565b600061049560018a61105f565b90506104ae816104a860208d018d614465565b8a6107c8565b8c8989888d856104c16020830183614465565b6001600160a01b03167f88087800d03445c97e2009f3f90906bf6ede79bbd194e275c66224e977a5b84c866104f7898787610c6e565b6105028a8888611094565b610512604088016020890161449c565b60408051948552602085019390935291830152151560608201526080810187905260a00160405180910390a350909a50505050505050505050506100a76001600055565b60026000540361057957604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee148015906105cd5750600034115b156105eb57604051631574f9f360e01b815260040160405180910390fd5b565b60006105fc6020830183614465565b6001600160a01b0316036106235760405163f0dd15fd60e01b815260040160405180910390fd5b50565b6000808061063a604085016020860161449c565b1561065f576106558561065060408701876144cc565b6110bc565b909350905061067b565b50346106778561067260408701876144cc565b611350565b8492505b6106836114fa565b915080156106f657604051600090339083908381818185875af1925050503d80600081146106cd576040519150601f19603f3d011682016040523d82523d6000602084013e6106d2565b606091505b50509050806106f4576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b6000600160801b821061072557604051630f0af95160e11b815260040160405180910390fd5b5090565b60008061073a846301e1338061150d565b905060006107488683610c9d565b61075a90670de0b6b3a76400006144b9565b9050670de0b6b3a7640000811061078e57610787610780670de0b6b3a76400008661150d565b8290611522565b90506107a6565b6107a3610780670de0b6b3a764000086611597565b90505b6107ba816107b4898b610c9d565b90610c9d565b925050505b95945050505050565b6000838152600d602090815260408083206001600160a01b0386168452909152812080548392906107fa9084906144b9565b90915550506000838152600e60205260408120805483929061081d9084906144b9565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b600061089c7f000000000000000000000000000000000000000000000000000000000000000042614529565b6108a6904261453d565b905090565b600082815260076020526040812080546001600160801b03161515806108d057504284115b156108e657546001600160801b03169050610c68565b6108ef836106ff565b81546001600160801b0319166001600160801b0391909116178155610913836115ac565b50600090506007816109457f00000000000000000000000000000000000000000000000000000000000000008861453d565b815260208101919091526040016000908120546001600160801b0316915061096e60028761105f565b6000818152600e60205260408120549192508115610aaf57506001600080610998848a8884611750565b9150915080600b60008282546109ae91906144b9565b909155506109ca9050846000846109c48161181e565b8e611848565b6109d481836144b9565b9150610a048483888c8d7f00000000000000000000000000000000000000000000000000000000000000006119c2565b9150610a18610a13838b610c9d565b611a0c565b60058054600290610a399084906201000090046001600160701b0316614550565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a66826106ff565b60058054601090610a88908490600160801b90046001600160801b0316614570565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000610abc60018a61105f565b6000818152600e60205260409020549091508015610bcc5760019250600080610ae8838c8a6001611750565b9150915080600b6000828254610afe91906144b9565b909155508c9050610b1b84600085610b158161181e565b85611a32565b610b25828461453d565b9250610b34610a13848e610c9d565b60058054600290610b559084906201000090046001600160701b0316614550565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610b82836106ff565b60058054601090610ba4908490600160801b90046001600160801b0316614570565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505b8215610c0357610bf8610bde8561181e565b610be78361181e565b610bf19190614590565b6000611c27565b610c0189611cda565b505b6000610c0e8a611e49565b50604080518c815260208101889052908101849052606081018290529091508b907f5012836090f6cac0f5b321be3188c3cd9c82c8252a23afea128ea014a6fd15519060800160405180910390a289985050505050505050505b92915050565b6000610c80604083016020840161449c565b15610c8c57508261008c565b610c968484610c9d565b905061008c565b600061008c8383670de0b6b3a7640000611f39565b6000806000610d1e610cc2611f57565b600154600160801b90046001600160801b0316877f0000000000000000000000000000000000000000000000000000000000000000887f0000000000000000000000000000000000000000000000000000000000000000611f78565b91506000610d87610d2d611f57565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611fa4565b9050610dde8684610dd9847f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611fbb565b612026565b15610ded57610ded6002612068565b600080610dfb88848961208c565b9092509050610e0a828661453d565b9450610e17818489611f39565b9350610e23848961453d565b9550670de0b6b3a7640000610ea987610e3a611f57565b610e4491906144b9565b600154610e62908990600160801b90046001600160801b031661453d565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611fa4565b1115610eb957610eb96002612068565b5050509250925092565b600254600160801b90046001600160801b0316610f0561021a82610eef670de0b6b3a76400008661444e565b6004546001600160801b0316919088600161210c565b600480546001600160801b0319166001600160801b0392909216919091179055610f2e856106ff565b60018054600090610f499084906001600160801b0316614570565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610f76846106ff565b60018054601090610f98908490600160801b90046001600160801b03166145b0565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610fc5846106ff565b610fcf9082614570565b600280546001600160801b03808416600160801b02911617905590506000610ff6836121c9565b9050611014816110058761181e565b61100f90846145d0565b611c27565b61101d8461220d565b61102b5761102b6003612068565b600061103685611cda565b90508061105657604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b60006001600160f81b038211156110895760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60006110a6604083016020840161449c565b156110b557610c96848461150d565b508261008c565b6000808073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161110c575047611197565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611170573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061119491906145f8565b90505b6001600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016112125787341015611201576040516312171d8360e31b815260040160405180910390fd5b61120b883461453d565b90506112ac565b6040516323b872dd60e01b8152336004820152306024820152604481018990527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015611285573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112a99190614611565b91505b816112ca576040516312171d8360e31b815260040160405180910390fd5b60125460000361130f576112fe887f000000000000000000000000000000000000000000000000000000000000000061150d565b601281905594509250611348915050565b601254600090611321908a9086611f39565b9050806012600082825461133591906144b9565b9091555090955090935061134892505050565b935093915050565b600061135b8461226d565b905060125460000361139957611391817f000000000000000000000000000000000000000000000000000000000000000061150d565b6012556113bf565b60006113a482612368565b905080601260008282546113b891906144b9565b9091555050505b6001600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161143a5782341015611429576040516312171d8360e31b815260040160405180910390fd5b611433833461453d565b90506114d4565b6040516323b872dd60e01b8152336004820152306024820152604481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af11580156114ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114d19190614611565b91505b816114f2576040516312171d8360e31b815260040160405180910390fd5b505050505050565b60006108a6670de0b6b3a764000061226d565b600061008c83670de0b6b3a764000084611f39565b60008160000361153b5750670de0b6b3a7640000610c68565b8260000361154b57506000610c68565b60006115568361181e565b9050600061156b6115668661181e565b612451565b9050818102611582670de0b6b3a76400008261462e565b905061158d81612677565b9695505050505050565b600061008c83670de0b6b3a76400008461280c565b60055460009081906115cf908490600160801b90046001600160801b0316610c9d565b6005546201000090046001600160701b0316925090508181111561174b5760006115f9838361453d565b905061160861021a8286611597565b6005805460109061162a908490600160801b90046001600160801b03166145b0565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611663858361150d90919063ffffffff16565b90506000611691827f0000000000000000000000000000000000000000000000000000000000000000610c9d565b905080600b60008282546116a591906144b9565b909155506116b59050818361453d565b91506116c0826106ff565b600180546000906116db9084906001600160801b0316614570565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061170882612832565b6003805460009061171d908490600f0b61465c565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60008061175d868661150d565b9150600061178b837f0000000000000000000000000000000000000000000000000000000000000000610c9d565b90506117b7817f0000000000000000000000000000000000000000000000000000000000000000610c9d565b915083156117da576117c9828261453d565b6117d3908461453d565b92506117f1565b6117e4828261453d565b6117ee90846144b9565b92505b8486101561181457611804838787611f39565b9250611811828787611f39565b91505b5094509492505050565b60006001600160ff1b038211156107255760405163396ea70160e11b815260040160405180910390fd5b600354600160801b90046001600160801b031661189161021a82611874670de0b6b3a76400008661444e565b600454600160801b90046001600160801b031691908a600061210c565b600480546001600160801b03928316600160801b0292169190911790556118b7866106ff565b6118c190826145b0565b600380546001600160801b03928316600160801b0292169190911790556118e7846106ff565b600180546000906119029084906001600160801b0316614570565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061192f8361285c565b60038054600090611944908490600f0b61465c565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611974856106ff565b60018054601090611996908490600160801b90046001600160801b03166145b0565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b6000806119da846119d48a888a611f39565b9061150d565b90506119e7888486611f39565b6119f190826144b9565b905086811115611a015786810391505b509695505050505050565b6000600160701b82106107255760405163086b151760e11b815260040160405180910390fd5b6001546001600160801b031683811080611a7457507f0000000000000000000000000000000000000000000000000000000000000000611a72858361453d565b105b15611a8357611a836003612068565b6003549084900390600f0b611a988482614590565b905083611aa48661181e565b138015611ad957507f0000000000000000000000000000000000000000000000000000000000000000611ad7838361289a565b105b15611ae857611ae86001612068565b600254600160801b90046001600160801b0316611b2a61021a82611b14670de0b6b3a76400008861444e565b6004546001600160801b031691908c600061210c565b600480546001600160801b0319166001600160801b0392909216919091179055611b54888261453d565b9050611b5f816106ff565b600280546001600160801b03928316600160801b029216919091179055611b85836106ff565b600180546001600160801b0319166001600160801b0392909216919091179055611bae8261285c565b600380546001600160801b0319166001600160801b0392909216919091179055611bd7876106ff565b60018054601090611bf9908490600160801b90046001600160801b0316614570565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b6000611c50611c3684836128c2565b611c418460006128c2565b611c4b9190614590565b61285c565b9050600081600f0b1315611ca55760028054829190600090611c7c9084906001600160801b0316614570565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b1215611cd557611cba81614689565b60028054600090611c7c9084906001600160801b03166145b0565b505050565b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95490918291611d25916001600160801b03169061453d565b905080600003611d385750600192915050565b6000611d43846128d8565b905080600003611d57575060019392505050565b600080611d6583858861297a565b9150915080611d7a5750600095945050505050565b600080611d8684612a80565b91509150611d93826106ff565b60068054600090611dae9084906001600160801b0316614570565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611ddb816106ff565b60068054601090611dfd908490600160801b90046001600160801b0316614570565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611e3b611e2d8261181e565b611e36906146af565b612b68565b506001979650505050505050565b600080600080611e60611e5b86612c58565b612d92565b9150915080611e76575060009485945092505050565b6000808611611e86576000611e90565b611e908387610c9d565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b0390921691611efb91906144b9565b611f05919061453d565b905080600003611f1e5750600096879650945050505050565b6000611f2a838361150d565b98600198509650505050505050565b6000826000190484118302158202611f5057600080fd5b5091020490565b6001546003546000916108a6916001600160801b0390911690600f0b61289a565b6000611f99878787611f9288670de0b6b3a764000061453d565b8787612e1f565b979650505050505050565b60006107bf82611fb5858888611f39565b90611522565b6000610089612002611fd584670de0b6b3a764000061453d565b611ffc670de0b6b3a7640000611feb818a611597565b611ff5919061453d565b8790612ed0565b90612ed0565b61201490670de0b6b3a76400006144b9565b6119d484670de0b6b3a764000061453d565b60008061205d85612035611f57565b61203f91906144b9565b600154610e62908790600160801b90046001600160801b031661453d565b909210949350505050565b80604051633c06d78b60e11b815260040161208391906146cb565b60405180910390fd5b6000806120d685611ffc85817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a76400006120cc818c611597565b611ffc919061453d565b9150612102827f0000000000000000000000000000000000000000000000000000000000000000610c9d565b9050935093915050565b60008260000361211d5750846107bf565b811561218f5761214e61213084876144b9565b61213a8587610c9d565b612144888a610c9d565b6119d491906144b9565b9050600061215c8588612ee5565b9050600061216a8689612ef4565b90508183101561217c57819250612188565b80831115612188578092505b50506107bf565b82850361219e575060006107bf565b61158d6121ab848761453d565b6121b58587612ed0565b6121bf888a610c9d565b6119d4919061453d565b60006121f1600e60006121dd60028661105f565b81526020019081526020016000205461181e565b612203600e60006121dd60018761105f565b610c689190614590565b60006122397f000000000000000000000000000000000000000000000000000000000000000083612ed0565b60025461224f91906001600160801b03166144b9565b600154612265906001600160801b031684610c9d565b101592915050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016122bc575047612347565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015612320573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061234491906145f8565b90505b60125460000361235857600061008c565b60125461008c9084908390611f39565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016123b7575047612442565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa15801561241b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061243f91906145f8565b90505b60125461008c90849083611f39565b60008082136124735760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906124f69084901c61181e565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361269257506000919050565b680755bf798b4a1bf1e582126126bb576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061158d74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c61181e565b600082600019048411830215820261282357600080fd5b50910281810615159190040190565b600060016001607f1b038211156107255760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b0319821280159061287d575060016001607f1b038213155b6107255760405163a5353be560e01b815260040160405180910390fd5b6000806128a78484612f03565b9092509050806128bb576128bb6001612068565b5092915050565b60008183136128d1578161008c565b5090919050565b60025460009081906128f3906001600160801b031684611597565b905061291f7f0000000000000000000000000000000000000000000000000000000000000000826144b9565b6001546001600160801b03161115612974576001547f00000000000000000000000000000000000000000000000000000000000000009061296a9083906001600160801b031661453d565b61008c919061453d565b50919050565b6129826142c9565b60008061298e84612c58565b9050600061299b82612d92565b93509050826129b05750600091506113489050565b60006129d76129d2846101600151856101400151610c9d90919063ffffffff16565b61181e565b6129f76129d2856101200151866101000151612ed090919063ffffffff16565b612a019190614590565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b600080600080612a988560c001518660e00151612f03565b9150915080612aae575060009485945092505050565b6000612aba8684612f3f565b92509050811580612ac9575080155b15612adc57506000958695509350505050565b6000612ae8878361304e565b905080600003612b015750600096879650945050505050565b86606001518111612b1757969095509350505050565b5060608601516000612b2a88868561311f565b905080600003612b44575060009788975095505050505050565b828110612b5b575060009788975095505050505050565b9097909650945050505050565b6001546003546001600160801b0380831692600f9290920b91600160801b90041660008080612bba8686867f00000000000000000000000000000000000000000000000000000000000000008b61346f565b925092509250858314612bf157612bd0836106ff565b600180546001600160801b0319166001600160801b03929092169190911790555b848214612c2257612c018261285c565b600380546001600160801b0319166001600160801b03929092169190911790555b83811461105657612c32816106ff565b600180546001600160801b03928316600160801b02921691909117905550505050505050565b612c6061431b565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526002540482166101008201526004549091610120830191612d5891166134b6565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192612d8a929004166134b6565b905292915050565b6000806000806000612da38661352c565b9150915080612dba57506000958695509350505050565b612dc78660a0015161181e565b612dd08761384c565b83612dde896000015161181e565b612de891906145d0565b612df291906145d0565b612dfc9190614590565b925050506000811215612e155750600093849350915050565b9360019350915050565b600080612e2f88888787876138b0565b9050612e4985611fb5612e42898c6144b9565b8690610c9d565b9750612e56848985611f39565b975087811015612e6a57612e6a6000612068565b878103670de0b6b3a76400008110612e9857612e91610780670de0b6b3a764000088611597565b9050612eb0565b612ead610780670de0b6b3a76400008861150d565b90505b80881015612ec257612ec26000612068565b909603979650505050505050565b600061008c8383670de0b6b3a764000061280c565b6000818311612974578261008c565b60008183116128d1578161008c565b600080600083612f128661181e565b612f1c9190614590565b90506000811215612f345760008092509250506106f8565b946001945092505050565b60008060008460a0015112612f5c575050608082015160016106f8565b60008460a00151612f6c906146af565b90506000612fa885876101000151886000015160e00151670de0b6b3a7640000612f96919061453d565b895160608101516080909101516138df565b93509050821580612fb7575080155b15612fca576000809350935050506106f8565b6000612fd68383611597565b9050670de0b6b3a764000081116130125780670de0b6b3a764000003945061300b8760c0015186610c9d90919063ffffffff16565b9450613021565b600080945094505050506106f8565b86608001518511156130405786608001516001945094505050506106f8565b506001925050509250929050565b6000806130848460c001518560e00151866101000151876000015160a001516130768861181e565b61307f906146af565b61398b565b875160408101929092526020820192909252919091529050806130ab576000915050610c68565b60006130ba8560000151612d92565b92509050816130ce57600092505050610c68565b846020015181106130e457600092505050610c68565b6000856060015186604001516130fa91906144b9565b905061311582876020015183611f399092919063ffffffff16565b61158d908261453d565b6000808460600151856040015161313691906144b9565b602086015160608701519192506000916131509184611f39565b90508560a0015160000361316757915061008c9050565b60005b60048110156134655761317d8286612ee5565b915060006131a68860c001518960e001518a61010001518b6000015160a001516130768861181e565b8b5160408101929092526020820192909252919091529050806131d057600094505050505061008c565b60006131df8960000151613aa3565b90506131ec898287613ad3565b156131f8575050613465565b60008960a00151131561335c57885180516020820151604083015160a084015160e0909401518d94600094613252949093909290919061324090670de0b6b3a764000061453d565b87516060810151608090910151613b3f565b945090508361326b57600097505050505050505061008c565b808260a00151106133595761327f82613c2b565b90965093508361329957600097505050505050505061008c565b6132be8260c001518360e00151846101000151856000015160a001516130768b61181e565b855160408101929092526020820192909252919091529350836132eb57600097505050505050505061008c565b815180516020820151604083015160a0909301518e5160e0015161331d94919061324090670de0b6b3a764000061453d565b945090508361333657600097505050505050505061008c565b8a60a001518111613350578597505050505050505061008c565b5050505061316a565b50505b600061336d8a8a8c60a00151613d01565b935090508215806133865750670de0b6b3a76400008110155b1561339a576000965050505050505061008c565b80670de0b6b3a764000003905060006133c76129d28c604001518d60200151612ed090919063ffffffff16565b6133d46129d2858a610c9d565b6133de9190614590565b90506000811315613408576133f7876119d4838561150d565b61340190876144b9565b9550613456565b600081121561344d576000613422886119d48581866146af565b905086811015613436578087039650613447565b60009850505050505050505061008c565b50613456565b50505050613465565b8460010194505050505061316a565b5095945050505050565b600080600080613482898989898961398b565b92965090945092509050806134aa57604051635044b7f560e01b815260040160405180910390fd5b50955095509592505050565b600080670de0b6b3a76400006134ca610870565b6134d4919061444e565b90508083116134e45760006134ee565b6134ee818461453d565b915061008c613525670de0b6b3a76400007f000000000000000000000000000000000000000000000000000000000000000061444e565b839061150d565b60008060006135516129d2856101600151866101400151610c9d90919063ffffffff16565b6135716129d2866101200151876101000151612ed090919063ffffffff16565b61357b9190614590565b905060008061359286600001518760200151612f03565b91509150806135a957506000958695509350505050565b60008313156136ea57600083905060006135f7886000015189602001518a604001518b60a001518c60e00151670de0b6b3a76400006135e8919061453d565b8d606001518e60800151613b3f565b9350905082613610575060009788975095505050505050565b8181106136ae57600061364a858a60400151858c60e00151670de0b6b3a764000061363b919061453d565b8d606001518e6080015161405b565b945090508315801561365f57508860c0015183105b156136765750600098600198509650505050505050565b8361368c57506000988998509650505050505050565b6136958161181e565b61369e906146af565b9960019950975050505050505050565b60008860200151126136d6576136cd8860a00151856129d2919061453d565b611f2a906146af565b60a088015188516136cd916129d29161453d565b600083121561383d5760006136fe846146af565b905060006137328489604001518a60e00151670de0b6b3a7640000613723919061453d565b8b606001518c608001516138df565b935090508261374b575060009788975095505050505050565b8181106137d0576000613785858a60400151858c60e00151670de0b6b3a7640000613776919061453d565b8d606001518e6080015161411e565b945090508315801561379a57508860c0015183105b156137b15750600098600198509650505050505050565b836137c757506000988998509650505050505050565b61369e8161181e565b6000613802858a604001518b60e00151670de0b6b3a76400006137f3919061453d565b8c606001518d608001516141f5565b945090508361381c57506000988998509650505050505050565b61369e6138338a6060015184866119d4919061453d565b6129d290836144b9565b50600095600195509350505050565b600061387f6129d2836101200151670de0b6b3a764000061386d919061453d565b6060850151610100860151919061280c565b6122036129d2846101600151670de0b6b3a764000061389e919061453d565b60608601516101408701519190611f39565b60006138bc8585611522565b6138d56138cd86611fb5868b612ed0565b85908561280c565b61158d91906144b9565b60008060006138f188888888886138b0565b9050600061391c670de0b6b3a764000061390b888861150d565b61391591906144b9565b8390611597565b9050670de0b6b3a7640000811061394957613942610780670de0b6b3a764000089611597565b9050613961565b61395e610780670de0b6b3a76400008961150d565b90505b8088101561397757600080935093505050613981565b8703925060019150505b9550959350505050565b600080600080846000036139aa57508792508691508590506001613a97565b6000856139b68b61181e565b6139c091906145d0565b90506139cb8761181e565b8112156139e657600080600080945094509450945050613a97565b80945060008912613a06576139ff6129d2868b8d611f39565b9350613a29565b613a1d6129d2613a158b6146af565b87908d61280c565b613a26906146af565b93505b600080613a368c8c612f03565b9150915080613a55576000806000809650965096509650505050613a97565b6000613a618888612f03565b9250905081613a8157600080600080975097509750975050505050613a97565b613a8c8b8285611f39565b955060019450505050505b95509550955095915050565b6000806000613ab184612d92565b91509150806128bb57604051635516328b60e11b815260040160405180910390fd5b6020830151600090613ae59084611597565b6040850151613af590849061150d565b1015801561008957506020840151613b259084613b1e633b9aca00670de0b6b3a76400006144b9565b9190611f39565b6040850151613b35908490611597565b1115949350505050565b6000806000881215613b6157613b54886146af565b613b5e90876144b9565b95505b6000613b6d8a8a61289a565b90506000613b7e828a8989896142a4565b90506000613b9b613b9389611fb5898d612ed0565b88908861280c565b905080821015613bb45760008094509450505050613c1f565b808203670de0b6b3a76400008110613be257613bdb610780670de0b6b3a76400008b61150d565b9050613bfa565b613bf7610780670de0b6b3a76400008b611597565b90505b8a811015613c12576000809550955050505050613c1f565b8a90039450600193505050505b97509795505050505050565b60008060008360e0015113613c4557506000928392509050565b6000613c54846000015161384c565b90506000613c80856040015186606001518760400151613c7491906144b9565b6020880151919061280c565b905060008212613ca75780821015613c9a57819003613cbd565b5060009485945092505050565b613cb0826146af565b613cba90826144b9565b90505b60e085015160c0860151613cd291839061280c565b9050808560c001511015613ced575060009485945092505050565b808560c00151036001935093505050915091565b6000806000808412613d2557855160400151613d1e9085906144b9565b9050613d60565b6000613d30856146af565b875160400151909150811015613d50578651604001518190039150613d5e565b600080935093505050611348565b505b855180516020909101516000918291613d799190612f03565b9150915080613d915760008094509450505050611348565b875160e0810151604090910151600091613dc691613dba91613db39190611522565b8a90610c9d565b6101008b015190611597565b895160e0810151608090910151613df191613de591611fb59088610c9d565b8b516060015190611597565b613dfb91906144b9565b90506000613e33613e27613e208c6000015160e001518861152290919063ffffffff16565b8b90612ed0565b6101008c01519061150d565b905080821015613e4e57600080965096505050505050611348565b80820391506000613e90858c60000151604001518d6000015160e00151670de0b6b3a7640000613e7e919061453d565b8e5160608101516080909101516138b0565b90506000613eba8c6000015160e00151670de0b6b3a7640000613eb3919061453d565b8890611522565b905080821015613ed7576000809850985050505050505050611348565b8b51608081015160609091015191830391613ef391839161280c565b9050670de0b6b3a76400008110613f37578b5160e00151613f309061078090613f2490670de0b6b3a764000061453d565b8e5160e0015190611597565b9050613f66565b8b5160e00151613f639061078090613f5790670de0b6b3a764000061453d565b8e5160e001519061150d565b90505b8b5160600151613f79908590839061280c565b935083670de0b6b3a76400001115613f9d5783670de0b6b3a7640000039350613fb1565b600060019850985050505050505050611348565b60008c60e00151126140135760c08c015160e08d0151613fd091611597565b9250670de0b6b3a76400008310613ff4576000809850985050505050505050611348565b670de0b6b3a7640000929092039161400c8484610c9d565b9350614048565b61404561402c8d60c001518e60e001516119d4906146af565b61403e90670de0b6b3a76400006144b9565b8590610c9d565b93505b50919a60019a5098505050505050505050565b600080600061406d89898888886138b0565b905061407d86611fb5898b6144b9565b975087811015614094576000809250925050614113565b8781036140a281868861280c565b9050670de0b6b3a764000081106140cf576140c8610780670de0b6b3a764000089611597565b90506140e7565b6140e4610780670de0b6b3a76400008961150d565b90505b6140f18186611597565b9050808a101561410957600080935093505050614113565b8903925060019150505b965096945050505050565b600080600061413089898888886138b0565b905086881015614147576000809250925050614113565b96869003966141568887611522565b97508781101561416d576000809250925050614113565b87810361417b81868861280c565b9050670de0b6b3a764000081106141a8576141a1610780670de0b6b3a764000089611597565b90506141c0565b6141bd610780670de0b6b3a76400008961150d565b90505b6141ca8186611597565b9050898110156141e257600080935093505050614113565b9890980398600198509650505050505050565b600080600061420788888888886142a4565b9050600061422b670de0b6b3a76400006142218888611597565b61352591906144b9565b9050670de0b6b3a7640000811061425857614251610780670de0b6b3a76400008961150d565b9050614270565b61426d610780670de0b6b3a764000089611597565b90505b61427a818661150d565b90508881101561429257600080935093505050613981565b97909703976001975095505050505050565b60006142b08585611522565b6138d56142c186611fb5868b610c9d565b859085611f39565b6040518061012001604052806142dd61431b565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60006060828403121561297457600080fd5b6000806000606084860312156143a357600080fd5b8335925060208401359150604084013567ffffffffffffffff8111156143c857600080fd5b6143d48682870161437c565b9150509250925092565b600080600080608085870312156143f457600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561442057600080fd5b61442c8782880161437c565b91505092959194509250565b634e487b7160e01b600052601160045260246000fd5b8082028115828204841417610c6857610c68614438565b60006020828403121561447757600080fd5b81356001600160a01b038116811461008c57600080fd5b801515811461062357600080fd5b6000602082840312156144ae57600080fd5b813561008c8161448e565b80820180821115610c6857610c68614438565b6000808335601e198436030181126144e357600080fd5b83018035915067ffffffffffffffff8211156144fe57600080fd5b6020019150368190038213156106f857600080fd5b634e487b7160e01b600052601260045260246000fd5b60008261453857614538614513565b500690565b81810381811115610c6857610c68614438565b6001600160701b038181168382160190808211156128bb576128bb614438565b6001600160801b038181168382160190808211156128bb576128bb614438565b81810360008312801583831316838312821617156128bb576128bb614438565b6001600160801b038281168282160390808211156128bb576128bb614438565b80820182811260008312801582168215821617156145f0576145f0614438565b505092915050565b60006020828403121561460a57600080fd5b5051919050565b60006020828403121561462357600080fd5b815161008c8161448e565b60008261463d5761463d614513565b600160ff1b82146000198414161561465757614657614438565b500590565b600f81810b9083900b0160016001607f1b03811360016001607f1b031982121715610c6857610c68614438565b600081600f0b60016001607f1b031981036146a6576146a6614438565b60000392915050565b6000600160ff1b82016146c4576146c4614438565b5060000390565b60208101600483106146ed57634e487b7160e01b600052602160045260246000fd5b9190529056fea264697066735822122093d16514c8e0c2b5f6f157443240c9a03068ab1b172455cc3af09efa8a9723dd64736f6c63430008140033";
        readonly sourceMap: "14483:174:141:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;1778:227:40;;;;;;:::i;:::-;;:::i;:::-;;;818:25:239;;;806:2;791:18;1778:227:40;;;;;;;;2774:290;;;;;;:::i;:::-;;:::i;:::-;;;;1595:25:239;;;1651:2;1636:18;;1629:34;;;;1568:18;2774:290:40;1421:248:239;1778:227:40;1930:7;1956:42;1968:13;1983:4;1989:8;1956:11;:42::i;:::-;1949:49;;1778:227;;;;;;:::o;2774:290::-;2961:7;2970;2996:61;3006:7;3015:10;3027:19;3048:8;2996:9;:61::i;:::-;2989:68;;;;2774:290;;;;;;;;:::o;1598:3704:120:-;1756:16;2356:21:175;:19;:21::i;:::-;1851:20:120::1;:18;:20::i;:::-;1936:23;1950:8;1936:13;:23::i;:::-;2035:26:::0;;::::1;;2031:100;;;2084:36;;-1:-1:-1::0;;;2084:36:120::1;;;;;;;;;;;2031:100;2259:25;2286:23:::0;2313:67:::1;2335:13;2362:8;2313;:67::i;:::-;2258:122:::0;;-1:-1:-1;2258:122:120;-1:-1:-1;3311:25:120::1;3315:21;3311:1;:25;:::i;:::-;3291:17;:45;3287:121;;;3359:38;;-1:-1:-1::0;;;3359:38:120::1;;;;;;;;;;;3287:121;3564:26:::0;:33;;-1:-1:-1;;3564:33:120::1;3593:4;3564:33;::::0;;3472:1:::1;3476:21;3472:25;3452:45:::0;::::1;::::0;-1:-1:-1;3766:29:120::1;3452:17:::0;3766:27:::1;:29::i;:::-;3737:12;:58:::0;;-1:-1:-1;;;;;;3737:58:120::1;-1:-1:-1::0;;;;;3737:58:120;;;::::1;::::0;;;::::1;::::0;;3833:258:::1;:233;3907:17:::0;3942:23:::1;3983:4:::0;4005:17:::1;4040:12;3833:56;:233::i;:::-;:256;:258::i;:::-;3805:12;:286:::0;;-1:-1:-1;;;;;3805:286:120;;::::1;-1:-1:-1::0;;;3805:286:120::1;::::0;::::1;::::0;;;::::1;::::0;;4596:62:::1;3805:25;::::0;4636:21:::1;4596:5;:62::i;:::-;4668:59;554:1:125;4696:20:120;;::::0;::::1;:8:::0;:20:::1;:::i;:::-;4718:8;4668:5;:59::i;:::-;4779:54;4796:19;:17;:19::i;:::-;4817:15;4779:16;:54::i;:::-;;4881:24;4908:112;4946:13;4973:15;5002:8;4908:24;:112::i;:::-;4881:139:::0;-1:-1:-1;5059:20:120::1;;::::0;::::1;:8:::0;:20:::1;:::i;:::-;-1:-1:-1::0;;;;;5035:234:120::1;;5093:8:::0;5115:16;5166:17;5226:15:::1;::::0;;;::::1;::::0;::::1;;:::i;:::-;5035:234;::::0;;2892:25:239;;;2948:2;2933:18;;2926:34;;;;2976:18;;;2969:34;3046:14;3039:22;3034:2;3019:18;;3012:50;3093:3;3078:19;;3071:35;;;2879:3;2864:19;5035:234:120::1;;;;;;;5280:15;;;2398:20:175::0;1713:1;2924:7;:21;2744:208;1849:3714:121;2086:20;2108;2356:21:175;:19;:21::i;:::-;9562::118;;::::1;::::0;::::1;;;9558:85;;;9606:26;;-1:-1:-1::0;;;9606:26:118::1;;;;;;;;;;;9558:85;2194:20:121::2;:18;:20::i;:::-;2279:23;2293:8;2279:13;:23::i;:::-;2358;2383::::0;2410:61:::2;2432:7;2453:8;2410;:61::i;:::-;2357:114:::0;;-1:-1:-1;2357:114:121;-1:-1:-1;3024:21:121::2;3048:40;2357:114:::0;;3048:23:::2;:40::i;:::-;3024:64;;3118:25;3102:13;:41;3098:117;;;3166:38;;-1:-1:-1::0;;;3166:38:121::2;;;;;;;;;;;3098:117;3246:19;3228:15;:37;3224:106;;;3288:31;;-1:-1:-1::0;;;3288:31:121::2;;;;;;;;;;;3224:106;3373:24;3400:19;:17;:19::i;:::-;3373:46;;3429:51;3446:16;3464:15;3429:16;:51::i;:::-;;3742:26;3778::::0;3917:52:::2;3936:15;3953;3917:18;:52::i;:::-;3814:155:::0;;-1:-1:-1;3814:155:121;;-1:-1:-1;3814:155:121;-1:-1:-1;4029:25:121;;::::2;4025:88;;;4077:25;;-1:-1:-1::0;;;4077:25:121::2;;;;;;;;;;;4025:88;4190:18;4164:22;;:44;;;;;;;:::i;:::-;::::0;;;-1:-1:-1;4279:36:121::2;::::0;-1:-1:-1;4298:17:121::2;4279:16:::0;:36:::2;:::i;:::-;4264:51;;4325:137;4353:18;4385:12;4411:15;4440:12;4325:14;:137::i;:::-;4546:15;4564:97;4599:26;4639:12;4564:21;:97::i;:::-;4546:115:::0;-1:-1:-1;4671:50:121::2;4546:115:::0;4686:20:::2;;::::0;::::2;:8:::0;:20:::2;:::i;:::-;4708:12;4671:5;:50::i;:::-;4784:7:::0;4856:12;4933;5013:15;5108:8;5217:7;5184:19:::2;;::::0;::::2;5108:8:::0;5184:19:::2;:::i;:::-;-1:-1:-1::0;;;;;5162:347:121::2;;5238:13;5265:59;5290:6;5298:16;5316:7;5265:24;:59::i;:::-;5354:66;5386:6;5394:16;5412:7;5354:31;:66::i;:::-;5458:14;::::0;;;::::2;::::0;::::2;;:::i;:::-;5162:347;::::0;;2892:25:239;;;2948:2;2933:18;;2926:34;;;;2976:18;;;2969:34;3046:14;3039:22;3034:2;3019:18;;3012:50;3093:3;3078:19;;3071:35;;;2879:3;2864:19;5162:347:121::2;;;;;;;-1:-1:-1::0;5542:13:121;;-1:-1:-1;;;;;;;;;;;2398:20:175;1713:1;2924:7;:21;2744:208;2431:307;1755:1;2558:7;;:18;2554:86;;2599:30;;-1:-1:-1;;;2599:30:175;;;;;;;;;;;2554:86;1755:1;2714:7;:17;2431:307::o;7513:174:141:-;7588:10;-1:-1:-1;;;;;7580:26:141;129:42:126;7580:26:141;;;;:43;;;7622:1;7610:9;:13;7580:43;7576:105;;;7646:24;;-1:-1:-1;;;7646:24:141;;;;;;;;;;;7576:105;7513:174::o;8216:221:118:-;8360:1;8328:20;;;;:8;:20;:::i;:::-;-1:-1:-1;;;;;8328:34:118;;8324:107;;8385:35;;-1:-1:-1;;;8385:35:118;;;;;;;;;;;8324:107;8216:221;:::o;1926:1509::-;2040:20;;;2206:15;;;;;;;;:::i;:::-;2202:812;;;2306:91;2340:7;2365:18;;;;:8;:18;:::i;:::-;2306:16;:91::i;:::-;2281:116;;-1:-1:-1;2281:116:118;-1:-1:-1;2202:812:118;;;-1:-1:-1;2553:9:118;2623:47;2642:7;2651:18;;;;:8;:18;:::i;:::-;2623;:47::i;:::-;2996:7;2981:22;;2202:812;3086:21;:19;:21::i;:::-;3068:39;-1:-1:-1;3184:10:118;;3180:200;;3229:45;;3211:12;;3237:10;;3262:6;;3211:12;3229:45;3211:12;3229:45;3262:6;3237:10;3229:45;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3210:64;;;3293:7;3288:82;;3327:28;;-1:-1:-1;;;3327:28:118;;;;;;;;;;;3288:82;3196:184;3180:200;3390:38;1926:1509;;;;;;:::o;884:190:131:-;937:9;-1:-1:-1;;;964:1:131;:12;958:86;;1000:33;;-1:-1:-1;;;1000:33:131;;;;;;;;;;;958:86;-1:-1:-1;1065:1:131;884:190::o;8756:1272:129:-;8992:20;;9230:35;:17;9256:8;9230:25;:35::i;:::-;9218:47;-1:-1:-1;9405:13:129;9427:15;:4;9218:47;9427:12;:15::i;:::-;9421:21;;193:4:128;9421:21:129;:::i;:::-;9405:37;;193:4:128;9456:5:129;:12;9452:300;;9563:36;9573:25;193:4:128;9585:12:129;9573:11;:25::i;:::-;9563:5;;:9;:36::i;:::-;9555:44;;9452:300;;;9707:34;9717:23;193:4:128;9727:12:129;9717:9;:23::i;9707:34::-;9699:42;;9452:300;9920:101;10002:5;9920:56;:23;9952;9920:31;:56::i;:::-;:64;;:101::i;:::-;9901:120;;;;8756:1272;;;;;;;;:::o;5934:316:122:-;6051:19;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;6051:23:122;;;;;;;;;:33;;6078:6;;6051:19;:33;;6078:6;;6051:33;:::i;:::-;;;;-1:-1:-1;;6094:21:122;;;;:12;:21;;;;;:31;;6119:6;;6094:21;:31;;6119:6;;6094:31;:::i;:::-;;;;-1:-1:-1;;6184:59:122;;;1595:25:239;;;1651:2;1636:18;;1629:34;;;-1:-1:-1;;;;;6184:59:122;;;6219:1;;6199:10;;6184:59;;1568:18:239;6184:59:122;;;;;;;5934:316;;;:::o;11561:223:118:-;11637:24;11739:37;11757:19;11739:15;:37;:::i;:::-;11708:69;;:15;:69;:::i;:::-;11677:100;;11561:223;:::o;3253:7270:119:-;3379:7;3511:51;;;:12;:51;;;;;3589:27;;-1:-1:-1;;;;;3589:27:119;:32;;;:81;;;3655:15;3637;:33;3589:81;3572:168;;;3702:27;-1:-1:-1;;;;;3702:27:119;;-1:-1:-1;3695:34:119;;3572:168;3832:28;:16;:26;:28::i;:::-;3802:58;;-1:-1:-1;;;;;;3802:58:119;-1:-1:-1;;;;;3802:58:119;;;;;;;3947:40;3970:16;3947:22;:40::i;:::-;-1:-1:-1;4451:27:119;;-1:-1:-1;4481:12:119;4451:27;4507:35;4525:17;4507:15;:35;:::i;:::-;4481:71;;;;;;;;;;;-1:-1:-1;4481:71:119;;;:87;-1:-1:-1;;;;;4481:87:119;;-1:-1:-1;4601:101:119;4636:27;4677:15;4601:21;:101::i;:::-;4712:27;4742:26;;;:12;:26;;;;;;4578:124;;-1:-1:-1;4812:23:119;;4808:2275;;-1:-1:-1;5026:4:119;5189:21;;5266:190;5313:19;5354:16;5392:19;5189:21;5266:25;:190::i;:::-;5171:285;;;;5496:13;5470:22;;:39;;;;;;;:::i;:::-;;;;-1:-1:-1;5523:238:119;;-1:-1:-1;5557:19:119;5594:1;5613:13;5644:24;5613:13;5644:22;:24::i;:::-;5732:15;5523:16;:238::i;:::-;5995:30;6012:13;5995:30;;:::i;:::-;;;6423:254;6482:19;6519:13;6550:19;6587:16;6621;6655:8;6423:41;:254::i;:::-;6407:270;-1:-1:-1;6912:85:119;:56;6407:270;6951:16;6912:38;:56::i;:::-;:83;:85::i;:::-;6877:31;:120;;:31;;:120;;;;;;;-1:-1:-1;;;;;6877:120:119;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;6877:120:119;;;;;-1:-1:-1;;;;;6877:120:119;;;;;;7047:25;:13;:23;:25::i;:::-;7011:32;:61;;:32;;:61;;;;-1:-1:-1;;;7011:61:119;;-1:-1:-1;;;;;7011:61:119;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;7011:61:119;;;;;-1:-1:-1;;;;;7011:61:119;;;;;;4837:2246;;4808:2275;7201:19;7223:100;7258:26;7298:15;7223:21;:100::i;:::-;7333:26;7362:25;;;:12;:25;;;;;;7201:122;;-1:-1:-1;7401:22:119;;7397:1597;;7613:4;7595:22;;7775:21;7814;7852:188;7899:18;7939:16;7977:19;8018:4;7852:25;:188::i;:::-;7757:283;;;;8080:13;8054:22;;:39;;;;;;;:::i;:::-;;;;-1:-1:-1;8132:15:119;;-1:-1:-1;8191:235:119;8224:18;8107:22;8279:13;8310:24;8279:13;8310:22;:24::i;:::-;8398:14;8191:15;:235::i;:::-;8560:30;8577:13;8560:30;;:::i;:::-;;-1:-1:-1;8823:85:119;:56;8560:30;8862:16;8823:38;:56::i;:85::-;8788:31;:120;;:31;;:120;;;;;;;-1:-1:-1;;;;;8788:120:119;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;8788:120:119;;;;;-1:-1:-1;;;;;8788:120:119;;;;;;8958:25;:13;:23;:25::i;:::-;8922:32;:61;;:32;;:61;;;;-1:-1:-1;;;8922:61:119;;-1:-1:-1;;;;;8922:61:119;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;8922:61:119;;;;;-1:-1:-1;;;;;8922:61:119;;;;;;7425:1569;;;7397:1597;9145:15;9141:701;;;9365:132;9434:30;:19;:28;:30::i;:::-;9402:29;:18;:27;:29::i;:::-;:62;;;;:::i;:::-;9482:1;9365:19;:132::i;:::-;9788:43;9814:16;9788:25;:43::i;:::-;;9141:701;10221:20;10247:44;10274:16;10247:26;:44::i;:::-;-1:-1:-1;10306:176:119;;;5201:25:239;;;5257:2;5242:18;;5235:34;;;5285:18;;;5278:34;;;5343:2;5328:18;;5321:34;;;10220:71:119;;-1:-1:-1;10336:15:119;;10306:176;;5188:3:239;5173:19;10306:176:119;;;;;;;10500:16;10493:23;;;;;;;;;;3253:7270;;;;;:::o;32807:391:118:-;32976:7;32999:15;;;;;;;;:::i;:::-;32995:197;;;-1:-1:-1;33037:7:118;33030:14;;32995:197;33148:33;:7;33164:16;33148:15;:33::i;:::-;33141:40;;;;1610:118:128;1672:7;1699:21;1710:1;1713;193:4;1699:10;:21::i;17927:3870:121:-;18085:26;18125:25;18164:26;18386:251;18432:25;:23;:25::i;:::-;18471:12;:25;-1:-1:-1;;;18471:25:121;;-1:-1:-1;;;;;18471:25:121;18510:12;18548;18574:16;18604:23;18386:32;:251::i;:::-;18366:271;;18770:17;18790:184;18837:25;:23;:25::i;:::-;18876:12;:25;-1:-1:-1;;;18876:25:121;;-1:-1:-1;;;;;18876:25:121;18915:23;18952:12;18790:33;:184::i;:::-;18770:204;;19001:270;19038:12;19068:17;19103:154;19169:9;19200;19231:8;19103:44;:154::i;:::-;19001:19;:270::i;:::-;18984:449;;;19296:126;19352:56;19296:38;:126::i;:::-;19609:16;19648:26;19696:130;19739:12;19769:9;19796:16;19696:25;:130::i;:::-;19595:231;;-1:-1:-1;19595:231:121;-1:-1:-1;20022:29:121;19595:231;20022:29;;:::i;:::-;;-1:-1:-1;20596:92:121;:18;20639:9;20662:16;20596:29;:92::i;:::-;20575:113;-1:-1:-1;20947:33:121;20575:113;20947:12;:33;:::i;:::-;20926:54;;193:4:128;21301:245:121;21380:18;21352:25;:23;:25::i;:::-;:46;;;;:::i;:::-;21416:12;:25;:45;;21444:17;;-1:-1:-1;;;21416:25:121;;-1:-1:-1;;;;;21416:25:121;:45;:::i;:::-;21479:23;21520:12;21301:33;:245::i;:::-;:251;21284:430;;;21577:126;21633:56;21577:38;:126::i;:::-;21724:66;;;17927:3870;;;;;:::o;11762:2037::-;12040:29;;-1:-1:-1;;;12040:29:121;;-1:-1:-1;;;;;12040:29:121;12118:304;:279;12040:29;12273:19;193:4:128;12273:13:121;:19;:::i;:::-;12139:36;;-1:-1:-1;;;;;12139:36:121;;12118:279;12343:18;12379:4;12118:102;:279::i;:304::-;12079:36;:343;;-1:-1:-1;;;;;;12079:343:121;-1:-1:-1;;;;;12079:343:121;;;;;;;;;;12570:31;:19;:29;:31::i;:::-;12540:12;:61;;:26;;:61;;;;-1:-1:-1;;;;;12540:61:121;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;12540:61:121;;;;;-1:-1:-1;;;;;12540:61:121;;;;;;12640:30;:18;:28;:30::i;:::-;12611:12;:59;;:25;;:59;;;;-1:-1:-1;;;12611:59:121;;-1:-1:-1;;;;;12611:59:121;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;12611:59:121;;;;;-1:-1:-1;;;;;12611:59:121;;;;;;12701:30;:18;:28;:30::i;:::-;12680:51;;;;:::i;:::-;12741:29;:49;;-1:-1:-1;;;;;12741:49:121;;;-1:-1:-1;;;12741:49:121;;;;;;12680:51;-1:-1:-1;;12969:30:121;12985:13;12969:15;:30::i;:::-;12945:54;;13009:117;13042:14;13087:29;:18;:27;:29::i;:::-;13070:46;;:14;:46;:::i;:::-;13009:19;:117::i;:::-;13225:28;13236:16;13225:10;:28::i;:::-;13220:186;;13269:126;13325:56;13269:38;:126::i;:::-;13639:12;13654:43;13680:16;13654:25;:43::i;:::-;13639:58;;13712:7;13707:86;;13742:40;;-1:-1:-1;;;13742:40:121;;;;;;;;;;;13707:86;11939:1860;;;11762:2037;;;;:::o;1198:469:125:-;1309:10;-1:-1:-1;;;;;1401:10:125;:89;1384:179;;;1522:30;;-1:-1:-1;;;1522:30:125;;;;;;;;;;;1384:179;-1:-1:-1;1624:4:125;1620:18;;;;1617:34;;1198:469::o;33531:405:118:-;33707:7;33730:15;;;;;;;;:::i;:::-;33726:204;;;33841:33;:7;33857:16;33841:15;:33::i;33726:204::-;-1:-1:-1;33912:7:118;33905:14;;2054:1483:141;2176:7;;;-1:-1:-1;;2289:10:141;-1:-1:-1;;;;;2281:26:141;;2277:162;;-1:-1:-1;2332:21:141;2277:162;;;2393:35;;-1:-1:-1;;;2393:35:141;;2422:4;2393:35;;;5938:51:239;2393:10:141;-1:-1:-1;;;;;2393:20:141;;;;5911:18:239;;2393:35:141;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2384:44;;2277:162;2595:4;2580:12;-1:-1:-1;;2645:10:141;-1:-1:-1;;;;;2637:26:141;;2633:365;;2695:11;2683:9;:23;2679:97;;;2733:28;;-1:-1:-1;;;2733:28:141;;;;;;;;;;;2679:97;2798:23;2810:11;2798:9;:23;:::i;:::-;2789:32;;2633:365;;;2862:125;;-1:-1:-1;;;2862:125:141;;2903:10;2862:125;;;6429:34:239;2939:4:141;6479:18:239;;;6472:43;6531:18;;;6524:34;;;2862:10:141;-1:-1:-1;;;;;2862:23:141;;;;6364:18:239;;2862:125:141;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2852:135;;2633:365;3012:7;3007:74;;3042:28;;-1:-1:-1;;;3042:28:141;;;;;;;;;;;3007:74;3216:11;;3231:1;3216:16;3212:319;;3262:44;:11;3282:23;3262:19;:44::i;:::-;3248:11;:58;;;;-1:-1:-1;3341:6:141;-1:-1:-1;3320:28:141;;-1:-1:-1;;3320:28:141;3212:319;3422:11;;3379:17;;3399:43;;:11;;3435:6;3399:22;:43::i;:::-;3379:63;;3471:9;3456:11;;:24;;;;;;;:::i;:::-;;;;-1:-1:-1;3502:9:141;;-1:-1:-1;3513:6:141;;-1:-1:-1;3494:26:141;;-1:-1:-1;;;3494:26:141;2054:1483;;;;;;;:::o;3655:1226::-;3834:18;3855:28;3870:12;3855:14;:28::i;:::-;3834:49;;4019:11;;4034:1;4019:16;4015:221;;4065:43;:10;4084:23;4065:18;:43::i;:::-;4051:11;:57;4015:221;;;4139:17;4159:28;4176:10;4159:16;:28::i;:::-;4139:48;;4216:9;4201:11;;:24;;;;;;;:::i;:::-;;;;-1:-1:-1;;;4015:221:141;4392:4;4377:12;-1:-1:-1;;4442:10:141;-1:-1:-1;;;;;4434:26:141;;4430:362;;4492:10;4480:9;:22;4476:96;;;4529:28;;-1:-1:-1;;;4529:28:141;;;;;;;;;;;4476:96;4594:22;4606:10;4594:9;:22;:::i;:::-;4585:31;;4430:362;;;4657:124;;-1:-1:-1;;;4657:124:141;;4698:10;4657:124;;;6429:34:239;4734:4:141;6479:18:239;;;6472:43;6531:18;;;6524:34;;;4657:10:141;-1:-1:-1;;;;;4657:23:141;;;;6364:18:239;;4657:124:141;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;4647:134;;4430:362;4806:7;4801:74;;4836:28;;-1:-1:-1;;;4836:28:141;;;;;;;;;;;4801:74;3771:1110;;;3655:1226;;;:::o;5594:150:118:-;5672:23;5718:19;193:4:128;5718:14:118;:19::i;1884:164:128:-;1946:7;1973:21;1984:1;193:4;1992:1;1973:10;:21::i;3811:844::-;3869:7;3935:1;3940;3935:6;3931:47;;-1:-1:-1;193:4:128;3957:10;;3931:47;4031:1;4036;4031:6;4027:45;;-1:-1:-1;4060:1:128;4053:8;;4027:45;4210:15;4228:12;:1;:10;:12::i;:::-;4210:30;;4402:10;4415:16;4418:12;:1;:10;:12::i;:::-;4415:2;:16::i;:::-;4402:29;-1:-1:-1;4509:18:128;;;4546:19;193:4;4509:18;4546:19;:::i;:::-;;;4638:9;4642:4;4638:3;:9::i;:::-;4623:25;3811:844;-1:-1:-1;;;;;;3811:844:128:o;3462:114::-;3522:7;3549:19;3558:1;193:4;3566:1;3549:8;:19::i;21722:2511:118:-;22081:32;;21828:26;;;;22043:80;;:16;;-1:-1:-1;;;22081:32:118;;-1:-1:-1;;;;;22081:32:118;22043:24;:80::i;:::-;22154:31;;;;;-1:-1:-1;;;;;22154:31:118;;-1:-1:-1;22022:101:118;-1:-1:-1;22328:39:118;;;22324:1903;;;22533:22;22558:39;22579:18;22558;:39;:::i;:::-;22533:64;-1:-1:-1;22870:84:118;:55;22533:64;22908:16;22870:37;:55::i;:84::-;22834:32;:120;;:32;;:120;;;;-1:-1:-1;;;22834:120:118;;-1:-1:-1;;;;;22834:120:118;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;22834:120:118;;;;;-1:-1:-1;;;;;22834:120:118;;;;;;23253:28;23284:70;23324:16;23284:14;:22;;:70;;;;:::i;:::-;23253:101;-1:-1:-1;23368:36:118;23407:80;23253:101;23453:20;23407:28;:80::i;:::-;23368:119;;23527:28;23501:22;;:54;;;;;;;:::i;:::-;;;;-1:-1:-1;23832:52:118;;-1:-1:-1;23856:28:118;23832:52;;:::i;:::-;;;23928:32;:20;:30;:32::i;:::-;23898:12;:62;;:26;;:62;;;;-1:-1:-1;;;;;23898:62:118;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;23898:62:118;;;;;-1:-1:-1;;;;;23898:62:118;;;;;;24006:31;:20;:29;:31::i;:::-;23974:28;:63;;:28;;:63;;;;;;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;23974:63:118;;;;;;;-1:-1:-1;;;;;23974:63:118;;;;;;24198:18;24177:39;;22369:1858;;;22324:1903;21722:2511;;;:::o;11087:2398:119:-;11274:21;;11680:37;:11;11700:16;11680:19;:37::i;:::-;11664:53;-1:-1:-1;11727:15:119;11745:31;11664:53;11767:8;11745:21;:31::i;:::-;11727:49;-1:-1:-1;11802:33:119;11727:49;11818:16;11802:15;:33::i;:::-;11786:49;;12262:7;12258:557;;;12302:23;12312:13;12302:7;:23;:::i;:::-;12285:40;;;;:::i;:::-;;;12258:557;;;12781:23;12791:13;12781:7;:23;:::i;:::-;12764:40;;;;:::i;:::-;;;12258:557;13033:20;13014:16;:39;13010:469;;;13148:110;:13;13190:16;13224:20;13148:24;:110::i;:::-;13132:126;-1:-1:-1;13358:110:119;:13;13400:16;13434:20;13358:24;:110::i;:::-;13342:126;;13010:469;11320:2165;11087:2398;;;;;;;:::o;2001:204:131:-;2053:8;-1:-1:-1;;;;;2079:1:131;:30;;2073:103;;2133:32;;-1:-1:-1;;;2133:32:131;;;;;;;;;;;17905:1127:123;18207:30;;-1:-1:-1;;;18207:30:123;;-1:-1:-1;;;;;18207:30:123;18287:300;:275;18207:30;18444:19;193:4:128;18444:13:123;:19;:::i;:::-;18308:37;;-1:-1:-1;;;18308:37:123;;-1:-1:-1;;;;;18308:37:123;;;18514:11;18543:5;18287:103;:275::i;:300::-;18247:37;:340;;-1:-1:-1;;;;;18247:340:123;;;-1:-1:-1;;;18247:340:123;;;;;;;;;18730:23;:11;:21;:23::i;:::-;18697:56;;:18;:56;:::i;:::-;18652:30;:101;;-1:-1:-1;;;;;18652:101:123;;;-1:-1:-1;;;18652:101:123;;;;;;;;;18851:31;:19;:29;:31::i;:::-;18821:12;:61;;:26;;:61;;;;-1:-1:-1;;;;;18821:61:123;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;18821:61:123;;;;;-1:-1:-1;;;;;18821:61:123;;;;;;18924:32;:21;:30;:32::i;:::-;18892:28;:64;;:28;;:64;;;;;;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;18892:64:123;;;;;;;-1:-1:-1;;;;;18892:64:123;;;;;;18995:30;:18;:28;:30::i;:::-;18966:12;:59;;:25;;:59;;;;-1:-1:-1;;;18966:59:123;;-1:-1:-1;;;;;18966:59:123;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;18966:59:123;;;;;-1:-1:-1;;;;;18966:59:123;;;;;;18117:915;17905:1127;;;;;:::o;14667:1674:129:-;14928:21;;15394:119;15496:16;15394:80;:11;15430:21;15453:20;15394:35;:80::i;:::-;:101;;:119::i;:::-;15373:140;-1:-1:-1;15764:50:129;:11;15787:8;15797:16;15764:22;:50::i;:::-;15750:64;;;;:::i;:::-;;;16130:12;16117:10;:25;16113:191;;;16267:12;16254:10;:25;16238:41;;16113:191;16314:20;14667:1674;;;;;;;;:::o;527:190:131:-;580:9;-1:-1:-1;;;607:1:131;:12;601:86;;643:33;;-1:-1:-1;;;643:33:131;;;;;;;;;;;14268:3167:121;14652:12;:26;-1:-1:-1;;;;;14652:26:121;14705:35;;;;:110;;-1:-1:-1;14794:21:121;14756:35;14772:19;14756:13;:35;:::i;:::-;:59;14705:110;14688:289;;;14840:126;14896:56;14840:38;:126::i;:::-;15539:28;;15010:36;;;;;15539:28;;15577:40;15596:21;15539:28;15577:40;:::i;:::-;;;15677:21;15644:30;:19;:28;:30::i;:::-;:54;:230;;;;;15853:21;15714:124;15778:13;15809:15;15714:46;:124::i;:::-;:160;15644:230;15627:464;;;15899:181;15955:111;15899:38;:181::i;:::-;16178:29;;-1:-1:-1;;;16178:29:121;;-1:-1:-1;;;;;16178:29:121;16256:297;:272;16178:29;16410:19;193:4:128;16410:13:121;:19;:::i;:::-;16277:36;;-1:-1:-1;;;;;16277:36:121;;16256:272;16480:11;16509:5;16256:102;:272::i;:297::-;16217:36;:336;;-1:-1:-1;;;;;;16217:336:121;-1:-1:-1;;;;;16217:336:121;;;;;;;;;;16615:31;16635:11;16615:31;;:::i;:::-;;;16688:28;:16;:26;:28::i;:::-;16656:29;:60;;-1:-1:-1;;;;;16656:60:121;;;-1:-1:-1;;;16656:60:121;;;;;;;;;17267:25;:13;:23;:25::i;:::-;17238:12;:54;;-1:-1:-1;;;;;;17238:54:121;-1:-1:-1;;;;;17238:54:121;;;;;;;;;;17333:26;:15;:24;:26::i;:::-;17302:28;:57;;-1:-1:-1;;;;;;17302:57:121;-1:-1:-1;;;;;17302:57:121;;;;;;;;;;17398:30;:18;:28;:30::i;:::-;17369:12;:59;;:25;;:59;;;;-1:-1:-1;;;17369:59:121;;-1:-1:-1;;;;;17369:59:121;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;17369:59:121;;;;;-1:-1:-1;;;;;17369:59:121;;;;;;14479:2956;;;14268:3167;;;;;:::o;18678:551:118:-;18982:12;18997:43;19014:14;:7;18982:12;19014:11;:14::i;:::-;18998:13;:6;19009:1;18998:10;:13::i;:::-;:30;;;;:::i;:::-;18997:41;:43::i;:::-;18982:58;;19062:1;19054:5;:9;;;19050:173;;;19079:25;:43;;19116:5;;19079:25;;;:43;;19116:5;;-1:-1:-1;;;;;19079:43:118;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;19079:43:118;;;;;-1:-1:-1;;;;;19079:43:118;;;;;;18747:482;18678:551;;:::o;19050:173::-;19151:1;19143:5;:9;;;19139:84;;;19205:6;19206:5;19205:6;:::i;:::-;19168:25;:44;;:25;;:44;;;;-1:-1:-1;;;;;19168:44:118;;:::i;19139:84::-;18747:482;18678:551;;:::o;21421:1688:120:-;21735:13;:29;-1:-1:-1;;;21514:4:120;21662:70;;;:12;:70;;;;21514:4;;;;21662:102;;-1:-1:-1;;;;;21735:29:120;;21662:102;:::i;:::-;21624:140;;21778:27;21809:1;21778:32;21774:74;;-1:-1:-1;21833:4:120;;21421:1688;-1:-1:-1;;21421:1688:120:o;21774:74::-;21934:12;21949:45;21977:16;21949:27;:45::i;:::-;21934:60;;22008:4;22016:1;22008:9;22004:51;;-1:-1:-1;22040:4:120;;21421:1688;-1:-1:-1;;;21421:1688:120:o;22004:51::-;22235:47;22296:12;22321:149;22373:4;22395:27;22440:16;22321:34;:149::i;:::-;22221:249;;;;22485:7;22480:51;;-1:-1:-1;22515:5:120;;21421:1688;-1:-1:-1;;;;;21421:1688:120:o;22480:51::-;22656:32;22690:21;22715:57;22765:6;22715:49;:57::i;:::-;22655:117;;;;22863:36;:24;:34;:36::i;:::-;22830:13;:69;;:29;;:69;;;;-1:-1:-1;;;;;22830:69:120;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;22830:69:120;;;;;-1:-1:-1;;;;;22830:69:120;;;;;;22935:25;:13;:23;:25::i;:::-;22909:13;:51;;:22;;:51;;;;-1:-1:-1;;;22909:51:120;;-1:-1:-1;;;;;22909:51:120;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;22909:51:120;;;;;-1:-1:-1;;;;;22909:51:120;;;;;;23037:43;23055:24;:13;:22;:24::i;:::-;23054:25;;;:::i;:::-;23037:16;:43::i;:::-;-1:-1:-1;23098:4:120;;21421:1688;-1:-1:-1;;;;;;;21421:1688:120:o;25409:1358:118:-;25508:7;25517:4;25660:26;25688:12;25704:117;25767:40;25790:16;25767:22;:40::i;:::-;25704:45;:117::i;:::-;25659:162;;;;25836:7;25831:56;;-1:-1:-1;25867:1:118;;;;-1:-1:-1;25409:1358:118;-1:-1:-1;;;25409:1358:118:o;25831:56::-;26045:20;26087:1;26068:16;:20;:95;;26162:1;26068:95;;;26103:44;:18;26130:16;26103:26;:44::i;:::-;26309:13;:29;26246:12;:48;;;;26173:21;26197:34;;;;;26045:118;;-1:-1:-1;26173:21:118;-1:-1:-1;;;;;26309:29:118;;;;26197:97;;26246:48;26197:97;:::i;:::-;:141;;;;:::i;:::-;26173:165;;26475:13;26492:1;26475:18;26471:66;;-1:-1:-1;26517:1:118;;;;-1:-1:-1;25409:1358:118;-1:-1:-1;;;;;25409:1358:118:o;26471:66::-;26664:20;26687:35;:12;26708:13;26687:20;:35::i;:::-;26664:58;26755:4;;-1:-1:-1;25409:1358:118;-1:-1:-1;;;;;;;25409:1358:118:o;898:556:128:-;1014:9;1279:1;-1:-1:-1;;1262:19:128;1259:1;1256:26;1253:1;1249:34;1242:42;1229:11;1225:60;1198:146;;1328:1;1325;1318:12;1198:146;-1:-1:-1;1415:9:128;;1411:27;;898:556::o;11965:253:118:-;12125:12;:26;12169:28;;12023:7;;12061:150;;-1:-1:-1;;;;;12125:26:118;;;;12169:28;;12061:46;:150::i;19247:892:129:-;19510:7;19647:485;19714:23;19755:13;19786:12;20025:18;20031:12;193:4:128;20025:18:129;:::i;:::-;20061:16;20095:23;19647:49;:485::i;:::-;19628:504;19247:892;-1:-1:-1;;;;;;;19247:892:129:o;3330:531::-;3530:17;3736:118;3841:12;3736:87;:23;3784;3809:13;3736:47;:87::i;:::-;:104;;:118::i;17063:541::-;17220:7;17327:270;17463:120;17547:14;17553:8;193:4:128;17547:14:129;:::i;:::-;17463:52;193:4:128;17479:29:129;193:4:128;17489:18:129;17479:9;:29::i;:::-;:35;;;;:::i;:::-;17463:9;;:15;:52::i;:::-;:58;;:120::i;:::-;17437:146;;193:4:128;17437:146:129;:::i;:::-;17328:14;17334:8;193:4:128;17328:14:129;:::i;17116:683:118:-;17272:4;17497:23;17523:221;17598:16;17570:25;:23;:25::i;:::-;:44;;;;:::i;:::-;17628:12;:25;:43;;17656:15;;-1:-1:-1;;;17628:25:118;;-1:-1:-1;;;;;17628:25:118;:43;:::i;17523:221::-;-1:-1:-1;;;;17116:683:118;-1:-1:-1;;;;17116:683:118:o;317:182:127:-;485:6;451:41;;-1:-1:-1;;;451:41:127;;;;;;;;:::i;:::-;;;;;;;;27287:1651:118;27443:16;;28496:129;28612:12;28496:96;28575:16;28496:96;28545:9;193:4:128;28497:21:118;193:4:128;28507:10:118;28497:9;:21::i;:::-;:27;;;;:::i;28496:129::-;28485:140;-1:-1:-1;28897:34:118;28485:140;28914:16;28897;:34::i;:::-;28876:55;;27287:1651;;;;;;:::o;12712:2102:128:-;12906:15;13006:12;13022:1;13006:17;13002:63;;-1:-1:-1;13046:8:128;13039:15;;13002:63;13323:9;13319:1489;;;13420:154;13529:27;13544:12;13529;:27;:::i;:::-;13470:28;:12;13491:6;13470:20;:28::i;:::-;13421:30;:12;13442:8;13421:20;:30::i;:::-;:77;;;;:::i;13420:154::-;13410:164;-1:-1:-1;13921:18:128;13942:20;:6;13953:8;13942:10;:20::i;:::-;13921:41;-1:-1:-1;13976:18:128;13997:20;:6;14008:8;13997:10;:20::i;:::-;13976:41;;14045:10;14035:7;:20;14031:164;;;14085:10;14075:20;;14031:164;;;14130:10;14120:7;:20;14116:79;;;14170:10;14160:20;;14116:79;13334:871;;13319:1489;;;14504:12;14488;:28;14484:75;;-1:-1:-1;14543:1:128;14536:8;;14484:75;14645:152;14752:27;14767:12;14752;:27;:::i;:::-;14695:26;:12;14714:6;14695:18;:26::i;:::-;14646:30;:12;14667:8;14646:20;:30::i;:::-;:75;;;;:::i;12556:675:118:-;12641:6;13046:178;:12;:167;13076:123;13119:27;13168:13;13076:21;:123::i;:::-;13046:167;;;;;;;;;;;;:176;:178::i;:::-;12912:119;:12;:108;12942:64;12964:26;12992:13;12942:21;:64::i;12912:119::-;:312;;;;:::i;18131:376::-;18200:4;18455:45;:21;18483:16;18455:27;:45::i;:::-;18411:25;;:89;;;-1:-1:-1;;;;;18411:25:118;:89;:::i;:::-;18342:12;:26;18334:61;;-1:-1:-1;;;;;18342:26:118;18378:16;18334:43;:61::i;:::-;:166;;;18131:376;-1:-1:-1;;18131:376:118:o;7848:460:141:-;7940:7;;-1:-1:-1;;8055:10:141;-1:-1:-1;;;;;8047:26:141;;8043:162;;-1:-1:-1;8098:21:141;8043:162;;;8159:35;;-1:-1:-1;;;8159:35:141;;8188:4;8159:35;;;5938:51:239;8159:10:141;-1:-1:-1;;;;;8159:20:141;;;;5911:18:239;;8159:35:141;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;8150:44;;8043:162;8234:11;;8249:1;8234:16;:67;;8300:1;8234:67;;;8285:11;;8253:44;;:12;;8277:6;;8253:23;:44::i;8468:425::-;8561:7;;-1:-1:-1;;8676:10:141;-1:-1:-1;;;;;8668:26:141;;8664:162;;-1:-1:-1;8719:21:141;8664:162;;;8780:35;;-1:-1:-1;;;8780:35:141;;8809:4;8780:35;;;5938:51:239;8780:10:141;-1:-1:-1;;;;;8780:20:141;;;;5911:18:239;;8780:35:141;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;8771:44;;8664:162;8866:11;;8843:43;;:11;;8879:6;8843:22;:43::i;8508:3846:128:-;8553:8;8606:1;8601;:6;8597:80;;8634:28;;-1:-1:-1;;;8634:28:128;;;;;;;;;;;8597:80;-1:-1:-1;;;;;;9286:41:128;-1:-1:-1;9283:1:128;9279:49;9386:9;;;9366:18;9363:33;9360:1;9356:41;9350:48;9448:9;;;9436:10;9433:25;9430:1;9426:33;9420:40;9506:9;;;9498:6;9495:21;9492:1;9488:29;9482:36;9562:9;;;9556:4;9553:19;9550:1;9546:27;;;9540:34;;;9617:9;;;9612:3;9609:18;9606:1;9602:26;9596:33;9672:9;;;9664:18;;;9661:1;9657:26;;;9651:33;;;9720:9;;;9712:18;;;9706:25;9902:3;:7;;;9872:2;9902:7;9888:22;;;;;-1:-1:-1;;9868:6:128;;;9928:30;;9929:17;;;9928:28;:30::i;:::-;10733:31;10729:35;;10784:5;;10191:2;10783:13;;;10800:32;10782:50;10852:5;;10851:13;;10868:33;10850:51;10921:5;;10920:13;;10937:33;10919:51;10990:5;;10989:13;;11006:33;10988:51;11059:5;;11058:13;;11075:32;11057:50;11127:5;;11126:13;;11143:30;11125:48;10130:31;10126:35;;10181:5;;10180:13;;10197:32;10179:50;10249:5;;10248:13;;10265:32;10247:50;10317:5;;10316:13;;-1:-1:-1;;10315:50:128;10385:5;;10384:13;;-1:-1:-1;;10383:50:128;10453:5;;10452:13;;;-1:-1:-1;;10451:50:128;10519:5;;;-1:-1:-1;;10519:46:128;11514:10;11904:43;11899:48;12027:71;:91;;;;12006:112;12191:72;12186:77;12334:3;12328:9;;;-1:-1:-1;;8508:3846:128:o;4907:3302::-;4953:8;-1:-1:-1;;5130:1:128;:26;5126:40;;-1:-1:-1;5165:1:128;;4907:3302;-1:-1:-1;4907:3302:128:o;5126:40::-;5365:21;5360:1;:26;5356:87;;5411:32;;-1:-1:-1;;;5411:32:128;;;;;;;;;;;5356:87;5716:7;5710:2;5705:7;;;5704:19;;-1:-1:-1;6052:8:128;6136:2;6076:29;6065:7;;;6064:41;-1:-1:-1;;;6064:51:128;6063:75;;6164:29;6160:33;;6156:37;;;;-1:-1:-1;;6835:35:128;;6890:5;;6470:2;6889:13;;;6906:32;6888:50;6958:5;;6957:13;;-1:-1:-1;;6956:51:128;7027:5;;7026:13;;7043:34;7025:52;7097:5;;7096:13;;-1:-1:-1;;7095:53:128;7168:5;;7167:13;;7184:35;7166:53;6476:32;6409:31;6405:35;;6460:5;;6459:13;;6458:50;;;6533:5;;;-1:-1:-1;;6533:40:128;6593:5;;6592:13;;;6609:35;6591:53;6662:5;;-1:-1:-1;;;6662:50:128;7584:10;;;;-1:-1:-1;6063:75:128;;-1:-1:-1;6458:50:128;;6662;8063:129;8094:49;8065:78;;8172:3;:7;;;8064:116;8063:127;:129::i;2284:748::-;2398:9;2663:1;-1:-1:-1;;2646:19:128;2643:1;2640:26;2637:1;2633:34;2626:42;2613:11;2609:60;2582:146;;2712:1;2709;2702:12;2582:146;-1:-1:-1;2979:9:128;;2926:27;;;2923:34;;2975:27;;;2902:114;;2284:748::o;1240:212:131:-;1292:8;-1:-1:-1;;;;;1318:30:131;;;1312:103;;1372:32;;-1:-1:-1;;;1372:32:131;;;;;;;;;;;1616:219;1667:8;-1:-1:-1;;;;;;1693:21:131;;;;;:46;;-1:-1:-1;;;;;;1718:21:131;;;1693:46;1687:119;;1763:32;;-1:-1:-1;;;1763:32:131;;;;;;;;;;;6050:574:129;6185:30;6227:12;6285:103;6334:14;6362:16;6285:35;:103::i;:::-;6249:139;;-1:-1:-1;6249:139:129;-1:-1:-1;6249:139:129;6398:220;;6426:181;6482:111;6426:38;:181::i;:::-;6217:407;6050:574;;;;:::o;15815:101:128:-;15871:6;15900:1;15896;:5;:13;;15908:1;15896:13;;;-1:-1:-1;15904:1:128;;15815:101;-1:-1:-1;15815:101:128:o;24513:558:118:-;24734:25;;24613:18;;;;24726:80;;-1:-1:-1;;;;;24734:25:118;24780:16;24726:40;:80::i;:::-;24703:103;-1:-1:-1;24849:36:118;24864:21;24703:103;24849:36;:::i;:::-;24820:12;:26;-1:-1:-1;;;;;24820:26:118;:65;24816:222;;;24930:12;:26;25006:21;;24930:57;;24975:12;;-1:-1:-1;;;;;24930:26:118;:57;:::i;:::-;:97;;;;:::i;24816:222::-;25047:17;24513:558;;;:::o;13522:1887::-;13722:47;;:::i;:::-;13771:12;13954:63;14020:70;14060:16;14020:22;:70::i;:::-;13954:136;;14100:28;14172:74;14218:18;14172:32;:74::i;:::-;14138:108;-1:-1:-1;14138:108:118;-1:-1:-1;14138:108:118;14256:61;;-1:-1:-1;14300:5:118;;-1:-1:-1;14284:22:118;;-1:-1:-1;14284:22:118;14256:61;14464:20;14638:152;:124;14717:18;:44;;;14638:18;:53;;;:78;;:124;;;;:::i;:::-;:150;:152::i;:::-;14487:136;:112;14555:18;:43;;;14487:18;:48;;;:67;;:112;;;;:::i;:136::-;:303;;;;:::i;:::-;14809:569;;;;;;;;;;;;;;;;;;;-1:-1:-1;14986:34:118;;:12;:34;;;;14809:569;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;15195:32:118;;14809:569;;;;15266:34;;;14809:569;;;;15336:31;;;;14809:569;;;;-1:-1:-1;14809:569:118;;15398:4;;-1:-1:-1;13522:1887:118;-1:-1:-1;13522:1887:118:o;22927:3408:130:-;23046:7;23055;23361:38;23401:12;23417:173;23498:7;:29;;;23545:7;:31;;;23417:63;:173::i;:::-;23360:230;;;;23605:7;23600:52;;-1:-1:-1;23636:1:130;;;;-1:-1:-1;22927:3408:130;-1:-1:-1;;;22927:3408:130:o;23600:52::-;23661:29;23735:109;23783:7;23804:30;23735:34;:109::i;:::-;23700:144;-1:-1:-1;23700:144:130;-1:-1:-1;23858:8:130;;;:38;;-1:-1:-1;23870:26:130;;23858:38;23854:82;;;-1:-1:-1;23920:1:130;;;;-1:-1:-1;22927:3408:130;-1:-1:-1;;;;22927:3408:130:o;23854:82::-;24224:32;24259:131;24330:7;24355:21;24259:53;:131::i;:::-;24224:166;;24527:24;24555:1;24527:29;24523:743;;-1:-1:-1;24580:1:130;;;;-1:-1:-1;22927:3408:130;-1:-1:-1;;;;;22927:3408:130:o;24523:743::-;24861:7;:35;;;24833:24;:63;24816:450;;24929:24;24955:21;;-1:-1:-1;22927:3408:130;-1:-1:-1;;;;22927:3408:130:o;24816:450::-;-1:-1:-1;25220:35:130;;;;25525:21;25549:152;25605:7;25626:30;25670:21;25549:42;:152::i;:::-;25525:176;;25715:13;25732:1;25715:18;25711:62;;-1:-1:-1;25757:1:130;;;;-1:-1:-1;22927:3408:130;-1:-1:-1;;;;;;22927:3408:130:o;25711:62::-;26107:21;26090:13;:38;26086:82;;-1:-1:-1;26152:1:130;;;;-1:-1:-1;22927:3408:130;-1:-1:-1;;;;;;22927:3408:130:o;26086:82::-;26288:24;;26314:13;;-1:-1:-1;22927:3408:130;-1:-1:-1;;;;;22927:3408:130:o;23286:1121:120:-;23427:12;:26;23489:28;;-1:-1:-1;;;;;23427:26:120;;;;23489:28;;;;;;-1:-1:-1;;;23551:25:120;;;23402:22;;;23725:218;23427:26;23489:28;23551:25;23871:21;23910:19;23725:31;:218::i;:::-;23586:357;;;;;;24018:14;23994:20;:38;23990:130;;24077:32;:20;:30;:32::i;:::-;24048:12;:61;;-1:-1:-1;;;;;;24048:61:120;-1:-1:-1;;;;;24048:61:120;;;;;;;;;;23990:130;24159:16;24133:22;:42;24129:137;;24222:33;:22;:31;:33::i;:::-;24191:28;:64;;-1:-1:-1;;;;;;24191:64:120;-1:-1:-1;;;;;24191:64:120;;;;;;;;;;24129:137;24302:13;24279:19;:36;24275:126;;24359:31;:19;:29;:31::i;:::-;24331:12;:59;;-1:-1:-1;;;;;24331:59:120;;;-1:-1:-1;;;24331:59:120;;;;;;;;;23349:1058;;;;;;23286:1121;:::o;15602:1035:118:-;15697:39;;:::i;:::-;15757:873;;;;;;;;15812:12;:26;-1:-1:-1;;;;;15812:26:118;;;15757:873;;15869:28;;;;15757:873;;;;-1:-1:-1;;;15925:25:118;;;;;;15757:873;;;;;;;;;;;;;16035:23;15757:873;;;;16094:21;15757:873;;;;16155:25;15757:873;;;;16207:12;15757:873;;;;15869:28;16251:29;;;;15812:26;15757:873;;;16367:36;;15757:873;;;;;;16320:97;;16367:36;16320:29;:97::i;:::-;15757:873;;16450:30;;-1:-1:-1;;;;;;;;16450:30:118;;;;;;15757:873;;;;16568:37;;15757:873;;;;;16521:98;;16568:37;;;16521:29;:98::i;:::-;15757:873;;15748:882;15602:1035;-1:-1:-1;;15602:1035:118:o;8818:1173:130:-;8925:7;8934:4;9311:19;9355:20;9377:12;9393:65;9437:7;9393:26;:65::i;:::-;9354:104;;;;9477:7;9472:64;;-1:-1:-1;9512:1:130;;;;-1:-1:-1;8818:1173:130;-1:-1:-1;;;;8818:1173:130:o;9472:64::-;9712:39;:7;:28;;;:37;:39::i;:::-;9663:30;9685:7;9663:21;:30::i;:::-;9631:13;9580:32;:7;:21;;;:30;:32::i;:::-;:64;;;;:::i;:::-;:113;;;;:::i;:::-;:171;;;;:::i;:::-;9549:202;;9340:422;;9893:1;9878:12;:16;9874:64;;;-1:-1:-1;9918:1:130;;;;-1:-1:-1;8818:1173:130;-1:-1:-1;;8818:1173:130:o;9874:64::-;9964:12;9979:4;;-1:-1:-1;8818:1173:130;-1:-1:-1;;8818:1173:130:o;2068:1726:132:-;2258:7;2415:9;2427:20;2431:2;2435:1;2438;2441;2444:2;2427:3;:20::i;:::-;2415:32;-1:-1:-1;2585:26:132;2609:1;2585:19;2596:7;2601:2;2596;:7;:::i;:::-;2585:2;;:10;:19::i;:26::-;2580:31;-1:-1:-1;2674:20:132;:1;2580:31;2691:2;2674:12;:20::i;:::-;2669:25;;2768:2;2764:1;:6;2760:166;;;2786:129;2842:59;2786:38;:129::i;:::-;3135:6;;;193:4:128;3165:9:132;;3161:261;;3263:20;3270:12;193:4:128;3280:1:132;3270:9;:12::i;3263:20::-;3258:25;;3161:261;;;3389:22;3396:14;193:4:128;3408:1:132;3396:11;:14::i;3389:22::-;3384:27;;3161:261;3495:2;3491:1;:6;3487:166;;;3513:129;3569:59;3513:38;:129::i;:::-;3771:6;;;;2068:1726;-1:-1:-1;;;;;;;2068:1726:132:o;3190:114:128:-;3250:7;3277:19;3286:1;3289;193:4;3277:8;:19::i;14987:104::-;15045:7;15075:1;15071;:5;:13;;15083:1;15071:13;;15264:104;15322:7;15352:1;15348;:5;:13;;15360:1;15348:13;;7273:398:129;7412:7;7421:4;7437:29;7509:16;7469:25;:14;:23;:25::i;:::-;:56;;;;:::i;:::-;7437:88;;7564:1;7539:22;:26;7535:74;;;7589:1;7592:5;7581:17;;;;;;;7535:74;7634:22;7659:4;;-1:-1:-1;7273:398:129;-1:-1:-1;;;7273:398:129:o;46936:3239:130:-;47109:29;47140:12;47329:1;47304:7;:21;;;:26;47300:84;;-1:-1:-1;;47354:12:130;;;;47368:4;47346:27;;47300:84;47393:21;47426:7;:21;;;47425:22;;;:::i;:::-;47393:55;;47697:21;47755:316;47811:31;47856:7;:28;;;47904:7;:26;;;:38;;;193:4:128;47898:44:130;;;;:::i;:::-;47956:26;;:42;;;;48012:49;;;;;47755:42;:316::i;:::-;47728:343;-1:-1:-1;47728:343:130;-1:-1:-1;48085:8:130;;;:30;;-1:-1:-1;48097:18:130;;48085:30;48081:78;;;48139:1;48142:5;48131:17;;;;;;;;48081:78;49182:24;49209:34;:13;49229;49209:19;:34::i;:::-;49182:61;;193:4:128;49426:16:130;:23;49422:453;;49523:16;193:4:128;49517:22:130;49493:46;;49591:90;49638:7;:29;;;49591:21;:29;;:90;;;;:::i;:::-;49567:114;;49422:453;;;49855:1;49858:5;49847:17;;;;;;;;;49422:453;50057:7;:12;;;50033:21;:36;50029:94;;;50093:7;:12;;;50107:4;50085:27;;;;;;;;;50029:94;-1:-1:-1;50163:4:130;;-1:-1:-1;;;46936:3239:130;;;;;:::o;27196:2209::-;27376:7;27475:12;27694:274;27736:7;:29;;;27779:7;:31;;;27824:7;:28;;;27866:7;:26;;;:47;;;27928:30;:19;:28;:30::i;:::-;27927:31;;;:::i;:::-;27694:28;:274::i;:::-;27511:26;;27621:39;;;27497:471;;;;27565:42;;;27497:471;;;;;;;;;-1:-1:-1;27497:471:130;27978:167;;28133:1;28126:8;;;;;27978:167;28154:26;28222:75;28261:7;:26;;;28222:25;:75::i;:::-;28190:107;-1:-1:-1;28190:107:130;-1:-1:-1;28190:107:130;28307:167;;28462:1;28455:8;;;;;;28307:167;28808:7;:28;;;28786:18;:50;28782:89;;28859:1;28852:8;;;;;;28782:89;29120:21;29186:7;:35;;;29144:7;:27;;;:77;;;;:::i;:::-;29120:101;;29278:120;29320:18;29356:7;:28;;;29278:13;:24;;:120;;;;;:::i;:::-;29250:148;;:13;:148;:::i;30287:10343::-;30508:7;30569:21;30635:7;:35;;;30593:7;:27;;;:77;;;;:::i;:::-;31228:28;;;;31168:35;;;;30569:101;;-1:-1:-1;31144:21:130;;31168:125;;30569:101;31168:46;:125::i;:::-;31144:149;;31406:7;:21;;;31431:1;31406:26;31402:77;;31455:13;-1:-1:-1;31448:20:130;;-1:-1:-1;31448:20:130;31402:77;31842:9;31837:8756;871:1;31857;:33;31837:8756;;;32065:41;:13;32083:22;32065:17;:41::i;:::-;32049:57;;32239:12;32482:292;32528:7;:29;;;32575:7;:31;;;32624:7;:28;;;32670:7;:26;;;:47;;;32736:24;:13;:22;:24::i;32482:292::-;32283:26;;32401:39;;;32265:509;;;;32341:42;;;32265:509;;;;;;;;;-1:-1:-1;32265:509:130;32788:268;;33040:1;33033:8;;;;;;;;32788:268;33069:20;33092:79;33131:7;:26;;;33092:21;:79::i;:::-;33069:102;;33276:167;33349:7;33378:12;33412:13;33276:51;:167::i;:::-;33255:241;;;33476:5;;;;33255:241;33746:1;33722:7;:21;;;:25;33718:4509;;;34135:25;;:39;;34200:41;;;;34267:38;;;;34331:46;;;;34409:37;;;;;33931:7;;33888:40;;34046:563;;34135:39;;34200:41;;34267:38;;34331:46;34403:43;;193:4:128;34403:43:130;:::i;:::-;34472:25;;:41;;;;34539:48;;;;;34046:63;:563::i;:::-;34019:590;-1:-1:-1;34019:590:130;-1:-1:-1;34019:590:130;34627:289;;34896:1;34889:8;;;;;;;;;;;34627:289;35127:13;35102:6;:20;;;35094:46;35090:3123;;35408:115;35495:6;35408:61;:115::i;:::-;35311:212;;-1:-1:-1;35311:212:130;-1:-1:-1;35311:212:130;35545:200;;35721:1;35714:8;;;;;;;;;;;35545:200;36157:336;36211:6;:28;;;36265:6;:30;;;36321:6;:27;;;36374:6;:25;;;:46;;;36447:24;:13;:22;:24::i;36157:336::-;35929:25;;36061:38;;;35903:590;;;;35994:41;;;35903:590;;;;;;;;;-1:-1:-1;35903:590:130;36515:200;;36691:1;36684:8;;;;;;;;;;;36515:200;36860:25;;:39;;36929:41;;;;37000:38;;;;37068:46;;;;;37150:26;;:38;;;36763:600;;37000:38;37068:46;37144:44;;193:4:128;37144:44:130;:::i;36763:600::-;36736:627;-1:-1:-1;36736:627:130;-1:-1:-1;36736:627:130;37385:200;;37561:1;37554:8;;;;;;;;;;;37385:200;37908:7;:21;;;37883:13;:47;37879:316;;37965:13;37958:20;;;;;;;;;;;37879:316;38164:8;;;;31837:8756;;37879:316;33749:4478;;33718:4509;38503:18;38605:176;38672:7;38697:31;38746:7;:21;;;38605:49;:176::i;:::-;38535:246;-1:-1:-1;38535:246:130;-1:-1:-1;38799:8:130;;;:29;;;193:4:128;38811:10:130;:17;;38799:29;38795:189;;;38968:1;38961:8;;;;;;;;;;38795:189;39044:10;193:4:128;39038:16:130;39025:29;;39356:12;39436:137;:105;39513:7;:27;;;39436:7;:49;;;:76;;:105;;;;:::i;:137::-;39371:46;:35;:12;39392:13;39371:20;:35::i;:46::-;:202;;;;:::i;:::-;39356:217;;39599:1;39591:5;:9;39587:893;;;39764:57;39807:13;39764:34;39772:5;39787:10;39764:22;:34::i;:57::-;39728:93;;:13;:93;:::i;:::-;39692:129;;39587:893;;;39854:1;39846:5;:9;39842:638;;;39947:14;39964:96;40029:13;39964:35;39988:10;39964:35;39973:5;39972:6;:::i;39964:96::-;39947:113;;40091:13;40082:6;:22;40078:344;;;40196:6;40180:13;:22;40164:38;;40078:344;;;40402:1;40395:8;;;;;;;;;;;;40078:344;39857:579;39842:638;;;40460:5;;;;;;39842:638;40565:3;;;;;31894:8699;;;;31837:8756;;;-1:-1:-1;40610:13:130;30287:10343;-1:-1:-1;;;;;30287:10343:130:o;1782:813::-;2053:21;2088:22;2124:20;2169:12;2307:191;2349:14;2377:16;2407:13;2434:21;2469:19;2307:28;:191::i;:::-;2191:307;;-1:-1:-1;2191:307:130;;-1:-1:-1;2191:307:130;-1:-1:-1;2191:307:130;-1:-1:-1;2191:307:130;2508:81;;2543:35;;-1:-1:-1;;;2543:35:130;;;;;;;;;;;2508:81;2159:436;1782:813;;;;;;;;;:::o;10998:450:118:-;11097:21;11130:24;193:4:128;11157:19:118;:17;:19::i;:::-;:25;;;;:::i;:::-;11130:52;;11224:16;11208:13;:32;:95;;11302:1;11208:95;;;11255:32;11271:16;11255:13;:32;:::i;:::-;11192:111;-1:-1:-1;11395:46:118;11417:23;193:4:128;11417:17:118;:23;:::i;:::-;11395:13;;:21;:46::i;10319:9443:130:-;10427:6;10435:4;11237:23;11392:130;:102;11460:7;:33;;;11392:7;:42;;;:67;;:102;;;;:::i;:130::-;11263:114;:90;11320:7;:32;;;11263:7;:37;;;:56;;:90;;;;:::i;:114::-;:259;;;;:::i;:::-;11237:285;;11533:30;11565:12;11581:157;11662:7;:21;;;11701:7;:23;;;11581:63;:157::i;:::-;11532:206;;;;11753:7;11748:160;;-1:-1:-1;11888:1:130;;;;-1:-1:-1;10319:9443:130;-1:-1:-1;;;;10319:9443:130:o;11748:160::-;12157:1;12138:16;:20;12134:7595;;;12174:25;12210:16;12174:53;;12415:21;12477:401;12558:7;:21;;;12601:7;:23;;;12646:7;:20;;;12688:7;:28;;;12744:7;:19;;;193:4:128;12738:25:130;;;;:::i;:::-;12785:7;:23;;;12830:7;:30;;;12477:59;:401::i;:::-;12450:428;-1:-1:-1;12450:428:130;-1:-1:-1;12450:428:130;12892:176;;-1:-1:-1;13044:1:130;;;;-1:-1:-1;10319:9443:130;-1:-1:-1;;;;;;10319:9443:130:o;12892:176::-;13245:17;13228:13;:34;13224:2891;;13536:21;13602:389;13702:22;13750:7;:20;;;13796:17;13845:7;:19;;;193:4:128;13839:25:130;;;;:::i;:::-;13890:7;:23;;;13939:7;:30;;;13602:74;:389::i;:::-;13575:416;-1:-1:-1;13575:416:130;-1:-1:-1;14297:8:130;;:84;;;;;14349:7;:32;;;14329:17;:52;14297:84;14272:335;;;-1:-1:-1;14430:1:130;;14433:4;;-1:-1:-1;10319:9443:130;-1:-1:-1;;;;;;;10319:9443:130:o;14272:335::-;14540:7;14535:72;;-1:-1:-1;14579:1:130;;;;-1:-1:-1;10319:9443:130;-1:-1:-1;;;;;;;10319:9443:130:o;14535:72::-;14634:24;:13;:22;:24::i;:::-;14633:25;;;:::i;:::-;14625:40;14660:4;;-1:-1:-1;10319:9443:130;-1:-1:-1;;;;;;;;10319:9443:130:o;13224:2891::-;15350:1;15323:7;:23;;;:28;15319:782;;15409:95;15435:7;:28;;;15410:22;:53;;;;:::i;15409:95::-;15408:96;;;:::i;15319:782::-;15961:28;;;;15937:21;;15936:94;;15937:52;;;:::i;12134:7595::-;16240:1;16221:16;:20;16217:3512;;;16257:25;16293:17;16294:16;16293:17;:::i;:::-;16257:54;;16428:21;16490:307;16571:22;16615:7;:20;;;16663:7;:19;;;193:4:128;16657:25:130;;;;:::i;:::-;16704:7;:23;;;16749:7;:30;;;16490:59;:307::i;:::-;16463:334;-1:-1:-1;16463:334:130;-1:-1:-1;16463:334:130;16811:64;;-1:-1:-1;16851:1:130;;;;-1:-1:-1;10319:9443:130;-1:-1:-1;;;;;;10319:9443:130:o;16811:64::-;17052:17;17035:13;:34;17031:2688;;17344:21;17410:387;17508:22;17556:7;:20;;;17602:17;17651:7;:19;;;193:4:128;17645:25:130;;;;:::i;:::-;17696:7;:23;;;17745:7;:30;;;17410:72;:387::i;:::-;17383:414;-1:-1:-1;17383:414:130;-1:-1:-1;18103:8:130;;:84;;;;;18155:7;:32;;;18135:17;:52;18103:84;18078:335;;;-1:-1:-1;18236:1:130;;18239:4;;-1:-1:-1;10319:9443:130;-1:-1:-1;;;;;;;10319:9443:130:o;18078:335::-;18346:7;18341:72;;-1:-1:-1;18385:1:130;;;;-1:-1:-1;10319:9443:130;-1:-1:-1;;;;;;;10319:9443:130:o;18341:72::-;18439:24;:13;:22;:24::i;17031:2688::-;18797:23;18867:335;18956:22;19004:7;:20;;;19056:7;:19;;;193:4:128;19050:25:130;;;;:::i;:::-;19101:7;:23;;;19150:7;:30;;;18867:63;:335::i;:::-;18838:364;-1:-1:-1;18838:364:130;-1:-1:-1;18838:364:130;19220:72;;-1:-1:-1;19264:1:130;;;;-1:-1:-1;10319:9443:130;-1:-1:-1;;;;;;;10319:9443:130:o;19220:72::-;19483:177;19526:122;19599:7;:23;;;19547:13;19527:17;:33;;;;:::i;19526:122::-;19484:164;;:15;:164;:::i;16217:3512::-;-1:-1:-1;19747:1:130;;19750:4;;-1:-1:-1;10319:9443:130;-1:-1:-1;;;;10319:9443:130:o;20009:1167::-;20112:6;20970:199;20988:156;21049:7;:32;;;193:4:128;21043:38:130;;;;:::i;:::-;21103:23;;;;20988:24;;;;;:156;:33;:156::i;20970:199::-;20752:203;20770:160;20834:7;:33;;;193:4:128;20828:39:130;;;;:::i;:::-;20889:23;;;;20770:25;;;;;:160;:36;:160::i;20059:343:132:-;20198:7;20387:8;:1;20393;20387:5;:8::i;:::-;20349:35;20360:19;20377:1;20360:12;:2;20369;20360:8;:12::i;:19::-;20349:1;;20381:2;20349:10;:35::i;:::-;:46;;;;:::i;15892:1050::-;16055:7;16064:4;16276:9;16288:20;16292:2;16296:1;16299;16302;16305:2;16288:3;:20::i;:::-;16276:32;-1:-1:-1;16318:16:132;16337:28;193:4:128;16345:13:132;:1;16355:2;16345:9;:13::i;:::-;:19;;;;:::i;:::-;16337:1;;:7;:28::i;:::-;16318:47;;193:4:128;16379:8:132;:15;16375:293;;16490:26;16503:12;193:4:128;16513:1:132;16503:9;:12::i;16490:26::-;16479:37;;16375:293;;;16629:28;16642:14;193:4:128;16654:1:132;16642:11;:14::i;16629:28::-;16618:39;;16375:293;16813:8;16809:1;:12;16805:60;;;16845:1;16848:5;16837:17;;;;;;;;16805:60;16906:12;;;-1:-1:-1;16920:4:132;;-1:-1:-1;;15892:1050:132;;;;;;;;;:::o;3400:3557:130:-;3675:21;3710:22;3746:20;3780:4;3919:19;3942:1;3919:24;3915:117;;-1:-1:-1;3967:14:130;;-1:-1:-1;3983:16:130;;-1:-1:-1;4001:13:130;;-1:-1:-1;4016:4:130;3959:62;;3915:117;4201:21;4253:19;4225:25;:14;:23;:25::i;:::-;:47;;;;:::i;:::-;4201:71;;4303:32;:21;:30;:32::i;:::-;4286:14;:49;4282:103;;;4359:1;4362;4365;4368:5;4351:23;;;;;;;;;;;4282:103;4418:14;4394:39;;5008:1;4988:16;:21;4984:497;;5121:112;:84;:13;5171:16;5190:14;5121:41;:84::i;:112::-;5103:130;;4984:497;;;5359:111;:83;5407:17;5408:16;5407:17;:::i;:::-;5359:13;;5427:14;5359:39;:83::i;:111::-;5358:112;;;:::i;:::-;5340:130;;4984:497;6183:33;6218:12;6234:143;6315:14;6347:16;6234:63;:143::i;:::-;6182:195;;;;6392:7;6387:62;;6423:1;6426;6429;6432:5;6415:23;;;;;;;;;;;;;6387:62;6458:30;6534:141;6615:13;6646:15;6534:63;:141::i;:::-;6498:177;-1:-1:-1;6498:177:130;-1:-1:-1;6498:177:130;6685:62;;6721:1;6724;6727;6730:5;6713:23;;;;;;;;;;;;;;6685:62;6771:109;:13;6809:22;6845:25;6771:24;:109::i;:::-;6756:124;-1:-1:-1;6945:4:130;;-1:-1:-1;;;;;3400:3557:130;;;;;;;;;;;:::o;7782:341::-;7885:7;7905:20;7927:12;7943:56;7982:7;7943:25;:56::i;:::-;7904:95;;;;8014:7;8009:79;;8044:33;;-1:-1:-1;;;8044:33:130;;;;;;;;;;;44905:1269;45532:28;;;;45109:4;;45532:50;;45567:14;45532:34;:50::i;:::-;45422:27;;;;45400:50;;:13;;:21;:50::i;:::-;:182;;:767;;;;-1:-1:-1;46093:28:130;;;;46028:139;;46139:14;46029:34;1037:3;193:4:128;46029:34:130;:::i;:::-;46028:47;:139;:47;:139::i;:::-;45916:27;;;;45896:48;;:13;;:19;:48::i;:::-;:271;;;44905:1269;-1:-1:-1;;;;44905:1269:130:o;17581:1971:132:-;17786:7;17795:4;18092:1;18085:4;:8;18081:67;;;18131:5;18132:4;18131:5;:::i;:::-;18116:21;;:4;:21;:::i;:::-;18109:28;;18081:67;18643:10;18656:55;18703:1;18706:4;18656:46;:55::i;:::-;18643:68;;18721:9;18733:22;18739:2;18743:1;18746;18749;18752:2;18733:5;:22::i;:::-;18721:34;-1:-1:-1;18765:11:132;18779:37;18790:21;18809:1;18790:14;:2;18799:4;18790:8;:14::i;:21::-;18779:1;;18813:2;18779:10;:37::i;:::-;18765:51;;18834:3;18830:1;:7;18826:55;;;18861:1;18864:5;18853:17;;;;;;;;;18826:55;18951:7;;;193:4:128;18982:15:132;;18978:295;;19096:28;19109:14;193:4:128;19121:1:132;19109:11;:14::i;19096:28::-;19085:39;;18978:295;;;19236:26;19249:12;193:4:128;19259:1:132;19249:9;:12::i;19236:26::-;19225:37;;18978:295;19430:1;19419:8;:12;19415:60;;;19455:1;19458:5;19447:17;;;;;;;;;;19415:60;19516:12;;;;-1:-1:-1;19530:4:132;;-1:-1:-1;;;;17581:1971:132;;;;;;;;;;;:::o;42321:1866:130:-;42472:7;42481:4;42763:1;42728:7;:31;;;:36;42724:84;;-1:-1:-1;42788:1:130;;;;-1:-1:-1;42321:1866:130;-1:-1:-1;42321:1866:130:o;42724:84::-;42859:19;42881:49;42903:7;:26;;;42881:21;:49::i;:::-;42859:71;;43073:11;43087:167;43138:7;:27;;;43209:7;:35;;;43179:7;:27;;;:65;;;;:::i;:::-;43087:28;;;;;:167;:37;:167::i;:::-;43073:181;;43284:1;43268:12;:17;43264:411;;43329:3;43313:12;43305:27;43301:304;;;43384:28;;;43264:411;;43301:304;-1:-1:-1;43581:1:130;;;;-1:-1:-1;42321:1866:130;-1:-1:-1;;;42321:1866:130:o;43264:411::-;43650:13;43651:12;43650:13;:::i;:::-;43635:29;;;;:::i;:::-;;;43264:411;43915:31;;;;43838:29;;;;:119;;43890:3;;43838:38;:119::i;:::-;43832:125;;44040:3;44008:7;:29;;;:35;44004:83;;;-1:-1:-1;44067:1:130;;;;-1:-1:-1;42321:1866:130;-1:-1:-1;;;42321:1866:130:o;44004:83::-;44160:3;44128:7;:29;;;:35;44165:4;44120:50;;;;;;42321:1866;;;:::o;52581:5799::-;52797:7;52806:4;52895:20;52944:1;52929:11;:16;52925:670;;52992:26;;:39;;;:78;;53058:11;;52992:78;:::i;:::-;52961:109;;52925:670;;;53101:18;53130:12;53131:11;53130:12;:::i;:::-;53174:26;;:39;;;53101:42;;-1:-1:-1;53161:52:130;;53157:428;;;53304:26;;:39;;;:76;;;;-1:-1:-1;53157:428:130;;;53561:1;53564:5;53553:17;;;;;;;;53157:428;53087:508;52925:670;53984:26;;:40;;54042:42;;;;;53855:30;;;;53903:195;;53984:40;53903:63;:195::i;:::-;53854:244;;;;54113:7;54108:56;;54144:1;54147:5;54136:17;;;;;;;;;54108:56;54656:26;;:38;;;;54587:39;;;;;54173:18;;54474:274;;54526:208;;54587:129;;:39;:43;:129::i;:::-;54526:31;;:39;:208::i;:::-;54474:28;;;;;:34;:274::i;:::-;54410:26;;:38;;;;54256:83;;;;;54194:265;;54256:193;;:132;;54365:22;54256:108;:132::i;:193::-;54194:26;;:42;;;;:48;:265::i;:::-;:554;;;;:::i;:::-;54173:575;;54818:11;54832:185;54882:125;54937:56;54954:7;:26;;;:38;;;54937:12;:16;;:56;;;;:::i;:::-;54882:31;;:37;:125::i;:::-;54832:28;;;;;:36;:185::i;:::-;54818:199;;55044:3;55031:10;:16;55027:64;;;55071:1;55074:5;55063:17;;;;;;;;;;;55027:64;55138:3;55124:17;;;;55381:9;55393:294;55425:22;55461:7;:26;;;:39;;;55520:7;:26;;;:38;;;193:4:128;55514:44:130;;;;:::i;:::-;55572:26;;:42;;;;55628:49;;;;;55393:18;:294::i;:::-;55381:306;;55697:13;55713:84;55749:7;:26;;;:38;;;193:4:128;55743:44:130;;;;:::i;:::-;55713:12;;:16;:84::i;:::-;55697:100;;55815:5;55811:1;:9;55807:201;;;55988:1;55991:5;55980:17;;;;;;;;;;;;;55807:201;56114:26;;:49;;;;56177:42;;;;;56049:9;;;;56086:143;;56049:9;;56086:14;:143::i;:::-;56078:151;;193:4:128;56243:5:130;:12;56239:584;;56454:26;;:38;;;56355:169;;56382:128;;56448:44;;193:4:128;56448:44:130;:::i;:::-;56382:26;;:38;;;;:44;:128::i;56355:169::-;56347:177;;56239:584;;;56742:26;;:38;;;56641:171;;56668:130;;56736:44;;193:4:128;56736:44:130;:::i;:::-;56668:26;;:38;;;;:46;:130::i;56641:171::-;56633:179;;56239:584;56975:26;;:42;;;56923:104;;:10;;56956:5;;56923:19;:104::i;:::-;56910:117;;57087:10;193:4:128;57081:16:130;57077:398;;;57160:10;193:4:128;57154:16:130;57141:29;;57077:398;;;57456:1;57459:4;57448:16;;;;;;;;;;;;;57077:398;57649:1;57614:7;:31;;;:36;57610:728;;57736:29;;;;57680:31;;;;57672:107;;:46;:107::i;:::-;57666:113;;193:4:128;57797:3:130;:10;57793:168;;57937:1;57940:5;57929:17;;;;;;;;;;;;;57793:168;193:4:128;58008:9:130;;;;;58058:23;:10;58008:9;58058:18;:23::i;:::-;58045:36;;57610:728;;;58125:202;58187:126;58262:7;:29;;;58196:7;:31;;;58195:32;;;:::i;58187:126::-;58161:152;;193:4:128;58161:152:130;:::i;:::-;58125:10;;:18;:202::i;:::-;58112:215;;57610:728;-1:-1:-1;58356:10:130;;58368:4;;-1:-1:-1;52581:5799:130;-1:-1:-1;;;;;;;;;52581:5799:130:o;11709:1515:132:-;11903:7;11912:4;12066:9;12078:20;12082:2;12086:1;12089;12092;12095:2;12078:3;:20::i;:::-;12066:32;-1:-1:-1;12141:15:132;12154:1;12142:6;12146:2;12142:1;:6;:::i;12141:15::-;12137:19;;12238:1;12234;:5;12230:53;;;12263:1;12266:5;12255:17;;;;;;;12230:53;12487:5;;;12517:18;12487:5;12529:2;12533:1;12517:11;:18::i;:::-;12512:23;;193:4:128;12549:2:132;:9;12545:263;;12648:20;12655:12;193:4:128;12665:1:132;12655:9;:12::i;12648:20::-;12643:25;;12545:263;;;12775:22;12782:14;193:4:128;12794:1:132;12782:11;:14::i;12775:22::-;12770:27;;12545:263;12890:12;:2;12899;12890:8;:12::i;:::-;12885:17;;13027:2;13022;:7;13018:55;;;13053:1;13056:5;13045:17;;;;;;;;13018:55;13193:7;;;-1:-1:-1;13202:4:132;;-1:-1:-1;;11709:1515:132;;;;;;;;;;:::o;5576:1765::-;5768:7;5777:4;5931:9;5943:20;5947:2;5951:1;5954;5957;5960:2;5943:3;:20::i;:::-;5931:32;;6086:2;6082:1;:6;6078:54;;;6112:1;6115:5;6104:17;;;;;;;6078:54;6194:7;;;;;6225:8;6194:7;6231:1;6225:5;:8::i;:::-;6221:12;;6355:1;6351;:5;6347:53;;;6380:1;6383:5;6372:17;;;;;;;6347:53;6604:5;;;6634:18;6604:5;6646:2;6650:1;6634:11;:18::i;:::-;6629:23;;193:4:128;6666:2:132;:9;6662:261;;6764:20;6771:12;193:4:128;6781:1:132;6771:9;:12::i;6764:20::-;6759:25;;6662:261;;;6890:22;6897:14;193:4:128;6909:1:132;6897:11;:14::i;6890:22::-;6885:27;;6662:261;7005:12;:2;7014;7005:8;:12::i;:::-;7000:17;;7142:2;7137;:7;7133:55;;;7168:1;7171:5;7160:17;;;;;;;;7133:55;7310:7;;;;;7319:4;;-1:-1:-1;5576:1765:132;-1:-1:-1;;;;;;;5576:1765:132:o;13859:1409::-;14022:7;14031:4;14543:9;14555:22;14561:2;14565:1;14568;14571;14574:2;14555:5;:22::i;:::-;14543:34;-1:-1:-1;14587:17:132;14607:28;193:4:128;14617:11:132;:1;14625:2;14617:7;:11::i;:::-;:17;;;;:::i;14607:28::-;14587:48;;193:4:128;14649:9:132;:16;14645:300;;14765:29;14779:14;193:4:128;14791:1:132;14779:11;:14::i;14765:29::-;14753:41;;14645:300;;;14907:27;14921:12;193:4:128;14931:1:132;14921:9;:12::i;14907:27::-;14895:39;;14645:300;14966:21;:9;14984:2;14966:17;:21::i;:::-;14954:33;;15143:2;15131:9;:14;15127:62;;;15169:1;15172:5;15161:17;;;;;;;;15127:62;15230:14;;;;;15246:4;;-1:-1:-1;13859:1409:132;-1:-1:-1;;;;;;13859:1409:132:o;20915:352::-;21056:7;21252:8;:1;21258;21252:5;:8::i;:::-;21210:39;21223:21;21242:1;21223:14;:2;21234;21223:10;:14::i;:21::-;21210:1;;21246:2;21210:12;:39::i;-1:-1:-1:-;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;14:155:239:-;74:5;119:2;110:6;105:3;101:16;97:25;94:45;;;135:1;132;125:12;174:493;279:6;287;295;348:2;336:9;327:7;323:23;319:32;316:52;;;364:1;361;354:12;316:52;400:9;387:23;377:33;;457:2;446:9;442:18;429:32;419:42;;512:2;501:9;497:18;484:32;539:18;531:6;528:30;525:50;;;571:1;568;561:12;525:50;594:67;653:7;644:6;633:9;629:22;594:67;:::i;:::-;584:77;;;174:493;;;;;:::o;854:562::-;968:6;976;984;992;1045:3;1033:9;1024:7;1020:23;1016:33;1013:53;;;1062:1;1059;1052:12;1013:53;1098:9;1085:23;1075:33;;1155:2;1144:9;1140:18;1127:32;1117:42;;1206:2;1195:9;1191:18;1178:32;1168:42;;1261:2;1250:9;1246:18;1233:32;1288:18;1280:6;1277:30;1274:50;;;1320:1;1317;1310:12;1274:50;1343:67;1402:7;1393:6;1382:9;1378:22;1343:67;:::i;:::-;1333:77;;;854:562;;;;;;;:::o;1674:127::-;1735:10;1730:3;1726:20;1723:1;1716:31;1766:4;1763:1;1756:15;1790:4;1787:1;1780:15;1806:168;1879:9;;;1910;;1927:15;;;1921:22;;1907:37;1897:71;;1948:18;;:::i;1979:286::-;2038:6;2091:2;2079:9;2070:7;2066:23;2062:32;2059:52;;;2107:1;2104;2097:12;2059:52;2133:23;;-1:-1:-1;;;;;2185:31:239;;2175:42;;2165:70;;2231:1;2228;2221:12;2270:118;2356:5;2349:13;2342:21;2335:5;2332:32;2322:60;;2378:1;2375;2368:12;2393:241;2449:6;2502:2;2490:9;2481:7;2477:23;2473:32;2470:52;;;2518:1;2515;2508:12;2470:52;2557:9;2544:23;2576:28;2598:5;2576:28;:::i;3117:125::-;3182:9;;;3203:10;;;3200:36;;;3216:18;;:::i;3247:521::-;3324:4;3330:6;3390:11;3377:25;3484:2;3480:7;3469:8;3453:14;3449:29;3445:43;3425:18;3421:68;3411:96;;3503:1;3500;3493:12;3411:96;3530:33;;3582:20;;;-1:-1:-1;3625:18:239;3614:30;;3611:50;;;3657:1;3654;3647:12;3611:50;3690:4;3678:17;;-1:-1:-1;3721:14:239;3717:27;;;3707:38;;3704:58;;;3758:1;3755;3748:12;3983:127;4044:10;4039:3;4035:20;4032:1;4025:31;4075:4;4072:1;4065:15;4099:4;4096:1;4089:15;4115:112;4147:1;4173;4163:35;;4178:18;;:::i;:::-;-1:-1:-1;4212:9:239;;4115:112::o;4232:128::-;4299:9;;;4320:11;;;4317:37;;;4334:18;;:::i;4365:193::-;-1:-1:-1;;;;;4483:10:239;;;4495;;;4479:27;;4518:11;;;4515:37;;;4532:18;;:::i;4563:197::-;-1:-1:-1;;;;;4685:10:239;;;4697;;;4681:27;;4720:11;;;4717:37;;;4734:18;;:::i;4765:200::-;4831:9;;;4804:4;4859:9;;4887:10;;4899:12;;;4883:29;4922:12;;;4914:21;;4880:56;4877:82;;;4939:18;;:::i;5366:200::-;-1:-1:-1;;;;;5502:10:239;;;5490;;;5486:27;;5525:12;;;5522:38;;;5540:18;;:::i;5571:216::-;5635:9;;;5663:11;;;5610:3;5693:9;;5721:10;;5717:19;;5746:10;;5738:19;;5714:44;5711:70;;;5761:18;;:::i;:::-;5711:70;;5571:216;;;;:::o;6000:184::-;6070:6;6123:2;6111:9;6102:7;6098:23;6094:32;6091:52;;;6139:1;6136;6129:12;6091:52;-1:-1:-1;6162:16:239;;6000:184;-1:-1:-1;6000:184:239:o;6569:245::-;6636:6;6689:2;6677:9;6668:7;6664:23;6660:32;6657:52;;;6705:1;6702;6695:12;6657:52;6737:9;6731:16;6756:28;6778:5;6756:28;:::i;6819:193::-;6858:1;6884;6874:35;;6889:18;;:::i;:::-;-1:-1:-1;;;6925:18:239;;-1:-1:-1;;6945:13:239;;6921:38;6918:64;;;6962:18;;:::i;:::-;-1:-1:-1;6996:10:239;;6819:193::o;7017:245::-;7115:2;7085:17;;;7104;;;;7081:41;-1:-1:-1;;;;;7137:44:239;;-1:-1:-1;;;;;;7183:49:239;;7134:99;7131:125;;;7236:18;;:::i;7267:213::-;7302:3;7350:5;7346:2;7335:21;-1:-1:-1;;;;;7380:39:239;7371:7;7368:52;7365:78;;7423:18;;:::i;:::-;7463:1;7459:15;;7267:213;-1:-1:-1;;7267:213:239:o;7617:136::-;7652:3;-1:-1:-1;;;7673:22:239;;7670:48;;7698:18;;:::i;:::-;-1:-1:-1;7738:1:239;7734:13;;7617:136::o;7758:361::-;7923:2;7908:18;;7956:1;7945:13;;7935:144;;8001:10;7996:3;7992:20;7989:1;7982:31;8036:4;8033:1;8026:15;8064:4;8061:1;8054:15;7935:144;8088:25;;;7758:361;:::o";
        readonly linkReferences: {};
        readonly immutableReferences: {
            readonly "18304": readonly [{
                readonly start: 1410;
                readonly length: 32;
            }, {
                readonly start: 4312;
                readonly length: 32;
            }, {
                readonly start: 4385;
                readonly length: 32;
            }, {
                readonly start: 4531;
                readonly length: 32;
            }, {
                readonly start: 4660;
                readonly length: 32;
            }, {
                readonly start: 5083;
                readonly length: 32;
            }, {
                readonly start: 5212;
                readonly length: 32;
            }, {
                readonly start: 8840;
                readonly length: 32;
            }, {
                readonly start: 8913;
                readonly length: 32;
            }, {
                readonly start: 9091;
                readonly length: 32;
            }, {
                readonly start: 9164;
                readonly length: 32;
            }];
            readonly "18307": readonly [{
                readonly start: 2167;
                readonly length: 32;
            }];
            readonly "18310": readonly [{
                readonly start: 469;
                readonly length: 32;
            }, {
                readonly start: 1109;
                readonly length: 32;
            }, {
                readonly start: 2336;
                readonly length: 32;
            }, {
                readonly start: 13569;
                readonly length: 32;
            }];
            readonly "18313": readonly [{
                readonly start: 502;
                readonly length: 32;
            }, {
                readonly start: 3288;
                readonly length: 32;
            }, {
                readonly start: 3427;
                readonly length: 32;
            }, {
                readonly start: 3717;
                readonly length: 32;
            }, {
                readonly start: 11539;
                readonly length: 32;
            }];
            readonly "18316": readonly [{
                readonly start: 3476;
                readonly length: 32;
            }, {
                readonly start: 8346;
                readonly length: 32;
            }];
            readonly "18319": readonly [{
                readonly start: 2528;
                readonly length: 32;
            }, {
                readonly start: 3509;
                readonly length: 32;
            }, {
                readonly start: 5991;
                readonly length: 32;
            }];
            readonly "18322": readonly [{
                readonly start: 6035;
                readonly length: 32;
            }, {
                readonly start: 8414;
                readonly length: 32;
            }];
            readonly "18325": readonly [{
                readonly start: 5741;
                readonly length: 32;
            }];
            readonly "18328": readonly [{
                readonly start: 435;
                readonly length: 32;
            }, {
                readonly start: 3322;
                readonly length: 32;
            }, {
                readonly start: 3394;
                readonly length: 32;
            }, {
                readonly start: 3684;
                readonly length: 32;
            }, {
                readonly start: 4826;
                readonly length: 32;
            }, {
                readonly start: 4973;
                readonly length: 32;
            }, {
                readonly start: 11425;
                readonly length: 32;
            }];
            readonly "18331": readonly [{
                readonly start: 262;
                readonly length: 32;
            }, {
                readonly start: 349;
                readonly length: 32;
            }, {
                readonly start: 580;
                readonly length: 32;
            }, {
                readonly start: 6729;
                readonly length: 32;
            }, {
                readonly start: 6830;
                readonly length: 32;
            }, {
                readonly start: 8724;
                readonly length: 32;
            }, {
                readonly start: 10490;
                readonly length: 32;
            }, {
                readonly start: 10550;
                readonly length: 32;
            }, {
                readonly start: 11157;
                readonly length: 32;
            }, {
                readonly start: 11463;
                readonly length: 32;
            }];
            readonly "18334": readonly [{
                readonly start: 907;
                readonly length: 32;
            }, {
                readonly start: 11501;
                readonly length: 32;
            }];
        };
    };
    readonly methodIdentifiers: {
        readonly "initialize(uint256,uint256,(address,bool,bytes))": "77d05ff4";
        readonly "openLong(uint256,uint256,uint256,(address,bool,bytes))": "cba2e58d";
    };
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"sweepCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolConfig\",\"name\":\"_config\",\"type\":\"tuple\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"BelowMinimumContribution\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"DistributeExcessIdleFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ExpInvalidExponent\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"enum IHyperdrive.InsufficientLiquidityReason\",\"name\":\"reason\",\"type\":\"uint8\"}],\"name\":\"InsufficientLiquidity\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPresentValue\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTimestamp\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"LnInvalidInput\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MinimumSharePrice\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MinimumTransactionAmount\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NotPayable\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"OutputLimit\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"PoolAlreadyInitialized\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"PoolIsPaused\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"RestrictedZeroAddress\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"TransferFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToInt128\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToInt256\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToUint112\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToUint128\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UpdateLiquidityFailed\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"basePayment\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fees\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newFeeCollector\",\"type\":\"address\"}],\"name\":\"FeeCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseProceeds\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"}],\"name\":\"PauseStatusUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"name\":\"Sweep\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newSweepCollector\",\"type\":\"address\"}],\"name\":\"SweepCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_contribution\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_apr\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"initialize\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutput\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minVaultSharePrice\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"openLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"}],\"devdoc\":{\"errors\":{\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}]},\"kind\":\"dev\",\"methods\":{\"initialize(uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_apr\":\"The target APR.\",\"_contribution\":\"The amount of capital to supply. The units of this        quantity are either base or vault shares, depending on the value        of `_options.asBase`.\",\"_options\":\"The options that configure how the operation is settled.\"},\"returns\":{\"_0\":\"The initial number of LP shares created.\"}},\"openLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_amount\":\"The amount of capital provided to open the long. The        units of this quantity are either base or vault shares, depending        on the value of `_options.asBase`.\",\"_minOutput\":\"The minimum number of bonds to receive.\",\"_minVaultSharePrice\":\"The minimum vault share price at which to        open the long. This allows traders to protect themselves from        opening a long in a checkpoint where negative interest has        accrued.\",\"_options\":\"The options that configure how the trade is settled.\"},\"returns\":{\"_0\":\"The maturity time of the bonds.\",\"_1\":\"The amount of bonds the user received.\"}}},\"version\":1},\"userdoc\":{\"errors\":{\"BelowMinimumContribution()\":[{\"notice\":\"Thrown when the initializer doesn't provide sufficient liquidity         to cover the minimum share reserves and the LP shares that are         burned on initialization.\"}],\"DistributeExcessIdleFailed()\":[{\"notice\":\"Thrown when the distribute excess idle calculation fails due         to the starting present value calculation failing.\"}],\"ExpInvalidExponent()\":[{\"notice\":\"Thrown when the exponent to `FixedPointMath.exp` would cause the         the result to be larger than the representable scale.\"}],\"InsufficientLiquidity(uint8)\":[{\"notice\":\"Thrown when the pool doesn't have sufficient liquidity to         complete the trade.\"}],\"InvalidPresentValue()\":[{\"notice\":\"Thrown when the present value calculation fails.\"}],\"InvalidTimestamp()\":[{\"notice\":\"Thrown when the timestamp used to construct an asset ID exceeds         the uint248 scale.\"}],\"LnInvalidInput()\":[{\"notice\":\"Thrown when the input to `FixedPointMath.ln` is less than or         equal to zero.\"}],\"MinimumSharePrice()\":[{\"notice\":\"Thrown when vault share price is smaller than the minimum share         price. This protects traders from unknowingly opening a long or         short after negative interest has accrued.\"}],\"MinimumTransactionAmount()\":[{\"notice\":\"Thrown when the input or output amount of a trade is smaller         than the minimum transaction amount. This protects traders and         LPs from losses of precision that can occur at small scales.\"}],\"NotPayable()\":[{\"notice\":\"Thrown when ether is sent to an instance that doesn't accept         ether as a deposit asset.\"}],\"OutputLimit()\":[{\"notice\":\"Thrown when a slippage guard is violated.\"}],\"PoolAlreadyInitialized()\":[{\"notice\":\"Thrown when the pool is already initialized and a trader calls         `initialize`. This prevents the pool from being reinitialized         after it has been initialized.\"}],\"PoolIsPaused()\":[{\"notice\":\"Thrown when the pool is paused and a trader tries to add         liquidity, open a long, or open a short. Traders can still         close their existing positions while the pool is paused.\"}],\"RestrictedZeroAddress()\":[{\"notice\":\"Thrown when the owner passed to permit is the zero address. This         prevents users from spending the funds in address zero by         sending an invalid signature to ecrecover.\"}],\"TransferFailed()\":[{\"notice\":\"Thrown when an ether transfer fails.\"}],\"UnsafeCastToInt128()\":[{\"notice\":\"Thrown when casting a value to a int128 that is outside of the         int128 scale.\"}],\"UnsafeCastToInt256()\":[{\"notice\":\"Thrown when casting a value to a int256 that is outside of the         int256 scale.\"}],\"UnsafeCastToUint112()\":[{\"notice\":\"Thrown when casting a value to a uint112 that is outside of the         uint128 scale.\"}],\"UnsafeCastToUint128()\":[{\"notice\":\"Thrown when casting a value to a uint128 that is outside of the         uint128 scale.\"}],\"UpdateLiquidityFailed()\":[{\"notice\":\"Thrown when `LPMath.calculateUpdateLiquidity` fails.\"}]},\"events\":{\"AddLiquidity(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when an LP adds liquidity to the Hyperdrive pool.\"},\"Approval(address,address,uint256)\":{\"notice\":\"Emitted when an account changes the allowance for another         account.\"},\"ApprovalForAll(address,address,bool)\":{\"notice\":\"Emitted when an account changes the approval for all of its         tokens.\"},\"CloseLong(address,address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is closed.\"},\"CloseShort(address,address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is closed.\"},\"CollectGovernanceFee(address,uint256)\":{\"notice\":\"Emitted when governance fees are collected.\"},\"CreateCheckpoint(uint256,uint256,uint256,uint256,uint256)\":{\"notice\":\"Emitted when a checkpoint is created.\"},\"FeeCollectorUpdated(address)\":{\"notice\":\"Emitted when the fee collector address is updated.\"},\"GovernanceUpdated(address)\":{\"notice\":\"Emitted when the governance address is updated.\"},\"Initialize(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when the Hyperdrive pool is initialized.\"},\"OpenLong(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is opened.\"},\"OpenShort(address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is opened.\"},\"PauseStatusUpdated(bool)\":{\"notice\":\"Emitted when the pause status is updated.\"},\"PauserUpdated(address,bool)\":{\"notice\":\"Emitted when a pauser is updated.\"},\"RedeemWithdrawalShares(address,address,uint256,uint256,uint256,bool)\":{\"notice\":\"Emitted when an LP redeems withdrawal shares.\"},\"RemoveLiquidity(address,address,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when an LP removes liquidity from the Hyperdrive pool.\"},\"Sweep(address,address)\":{\"notice\":\"Emitted when tokens are swept.\"},\"SweepCollectorUpdated(address)\":{\"notice\":\"Emitted when the sweep collector address is updated.\"},\"TransferSingle(address,address,address,uint256,uint256)\":{\"notice\":\"Emitted when tokens are transferred from one account to another.\"}},\"kind\":\"user\",\"methods\":{\"initialize(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows the first LP to initialize the market with a target APR.\"},\"openLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Opens a long position.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/test/MockHyperdrive.sol\":\"MockHyperdriveTarget3\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/external/Hyperdrive.sol\":{\"keccak256\":\"0x4d166ec6a8a2e3f2cae2d0f990d1cc40965ec995130d7a7be1af2b9e390d3fd8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2185afc7935052ce78427f3ee5629d4c6d93cbffad776fb281c2b79ff2234d67\",\"dweb:/ipfs/QmT6e2H7pXG3e2BM1EoHTxzWhTwxjGu75AxNkZ4CxyEbw6\"]},\"contracts/src/external/HyperdriveTarget0.sol\":{\"keccak256\":\"0x7336935ca8a1b3985f01f923c8444e0eaeffe1ce71ae2a84bf2514cc502b913d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://bd572503e6cc9f49d7cacef4242fa485035b7e46090c82bbfe2f4e9f9ed14597\",\"dweb:/ipfs/QmaXKWM58hzKtwtq7jn6pwY5UF7EtaL2sQW6mNXpaonckZ\"]},\"contracts/src/external/HyperdriveTarget1.sol\":{\"keccak256\":\"0xafc075dac84c3c9d5be703d5068cc2a30875f16107b884c8ee416e877422c6da\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://12d86af9b6684898a97a67e268137da7a5fcff8f484c01dd73d92d2b2f1b881e\",\"dweb:/ipfs/QmQg2gg35jjmuG27HWjRVG65gYCdGmCHmCoiDC3GRoAMr7\"]},\"contracts/src/external/HyperdriveTarget2.sol\":{\"keccak256\":\"0xf5501de742b9054f1c8cbf6234e66aac5ca0380016cfa65ecd01840c2e857e79\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3d971dfdd0986a75c0fa5d55fc3b7c4edb8126201a53f325d8bb6df293b94d39\",\"dweb:/ipfs/QmNnJsAcJEoChpJcCneEmwmAQ2n2F1u4YrYFS4hfwyiwVA\"]},\"contracts/src/external/HyperdriveTarget3.sol\":{\"keccak256\":\"0x805a1d075059fa6a4247f49e9b356f8df3da3bd37d778ad88591766c165529e1\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6bbe4411d4b5fe5f9db08e4c4acef28a6cff80c5a9ae75d2d65a35f1616f0d5a\",\"dweb:/ipfs/QmZLYZU9Wz4gZEiY1vm1JT9me13oWj9scVMgV1tbDLMNup\"]},\"contracts/src/external/HyperdriveTarget4.sol\":{\"keccak256\":\"0xfc2c1dfa778f4be903a0a078c7cfb29fdf2caded6b72cf222f5da4b39e512bfa\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8bf1a17cc51013e821f44c426b8911db6f51ea96c0883f00ad98ab70993c2886\",\"dweb:/ipfs/QmdW2jFRm2vgoWQc1thZCPSASezv2dKFjmxayyV715HhFN\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xb8ee04f3090b498966970e210f7de0f982f6445628556f2f176385423d8c5952\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://db789f03faa935c6e3b0882b6e873e8f683c9c8841a4b128366dcbe7321911bf\",\"dweb:/ipfs/QmSQh1cX79nApuSAfJbVN99dmEaE4CK9QwWfEGcwhJMBLK\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x68adcd293ff25711add1698b6024faa45beec01eb044bd0103d3020aa96d856e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0e0f5e35a7d2c656e249394d25896e5adfb9af3e210c01b9ef5fa81d25a45e24\",\"dweb:/ipfs/QmbLASezHPWHcbodqSfw3Qh9NzqekqVPM8FhCXKGTCXL1h\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x812ccb32dff907e8614c89a65196eec239eceb3e63f9f14dde2b2269c75a67c0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://da5f2ce974bfcd8185342c121c879ba5aef23e1e4e7b36cf9fcba68296b8892c\",\"dweb:/ipfs/QmSho3PWs9bzejTYYjySuXcH9tVP4xFnkbUmSzQA54g8eG\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf\",\"dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/internal/HyperdriveAdmin.sol\":{\"keccak256\":\"0x683548d598b303bc8bab561818a2f88c100f6d26fda478e89c02b46cf710726d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://054a605eeb41760fbe1922bb32f511c87e1ca4dd04f3fa64f40783060b371603\",\"dweb:/ipfs/QmezP1mjnbPCwdDCrh4GjL7RVzU61ohTrcW6A7yxLiKcQM\"]},\"contracts/src/internal/HyperdriveBase.sol\":{\"keccak256\":\"0x7feb8df22e6f91b1ee70f50f5ca16a7819601bcb88fc5a5fa9cf16c708cc52bb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://60ff7ff4faa45551099b025d03f2438477b5fd1f64f82b78c6ed26cbdafc64f6\",\"dweb:/ipfs/QmWtbftziGdSKAEvpRoaWRnTxMNwgUVs2nDN6nFugX1WYN\"]},\"contracts/src/internal/HyperdriveCheckpoint.sol\":{\"keccak256\":\"0x3514b829c99e0015385ff08dd1479e452529a6283e8b6800946542ff21dc9649\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://37ffd17baea5080f4184372ac835bf60694760499756235a61e41a480f4ab3c7\",\"dweb:/ipfs/QmUzEnJhRhpW18MH7GyXsug9u5FLehNfgjR7RAhZizLLVd\"]},\"contracts/src/internal/HyperdriveLP.sol\":{\"keccak256\":\"0x72410851e77940e66681e23b9d10f3c3de0e8c9a3e5b1cca627e93bba431775d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://82a9292f388b16572cc5c5e873d1ead666ddcc3e436cf5d7fb036fd6c63ee9a2\",\"dweb:/ipfs/Qmauzxkn46ACS4XV43m2MbDF91KYP4ExYwSxL3cm1SDL6j\"]},\"contracts/src/internal/HyperdriveLong.sol\":{\"keccak256\":\"0xe791adb5c58a73ff2c978fcc79153f9042702e2c4fc5d71f60534323d5ba4832\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7ec4adf40e5f90574c7484ddeeed41cbe1f60b29847b18b169aa3130b8882aa7\",\"dweb:/ipfs/QmeY9y922jhcLzGw9d4VUNNoDkUeFhTJ8ZVThrvqzcGGjm\"]},\"contracts/src/internal/HyperdriveMultiToken.sol\":{\"keccak256\":\"0x21a9aafb8e23a22c77111e13538fa8f709446e4f3a64ef84b2eebc2aa9d04373\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://41517912353540de5b430587ca8220f9d34d4432d3c723951d5fb618d5907b5d\",\"dweb:/ipfs/QmU3cTCrAq94digVS97s5af1Pu86uGBpmpus6w7828fUbG\"]},\"contracts/src/internal/HyperdriveShort.sol\":{\"keccak256\":\"0xc42b5a9ee5eee3cb9177b136eb9f4b81a4b51d9468f8faa97309934b6b371bc5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b9291237fcdbb8ff97517acd19499cfa4afc6d670a89fd5cc0309a201a7b1006\",\"dweb:/ipfs/QmfQmUwvGhJgPFyNaHvur8AViePBzvSBNAdaZJBwMkY5Je\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xf13ba4bcf41673bc04e4ae32a29c31b62514d66cfedee70b0d3bff574efc0e4a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e505639a656cf7c908e7c64cfd5cae6f4174a679de19d17a3f12f6e3fc4b2195\",\"dweb:/ipfs/QmNmcmz9nV9uDyeouo8yWAKMoMqEVx6JMTfZwCRa9QU83N\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0x3031a1ec376be333eebe0062c474a22d7f970cb02de62ab6823c6918c0a7f83b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6c80cc2fd8b7908b6420ebb21cb99266c93e01d6cdd9d1a41f8847493849b131\",\"dweb:/ipfs/QmeMehWbF2RwQaf6c6yaj5KHjXboDRpzBCtvFnLW4BXBbc\"]},\"contracts/src/libraries/Constants.sol\":{\"keccak256\":\"0xcf133c1d2db33dd318a51f8db58aa188225dd4383499cf82aa35bb49a678e30d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://bdfefbcdf520ad8790372e66571a9f0782886e1d754dc83c834b98a19f450418\",\"dweb:/ipfs/QmdVcLsnb29dUJT4GVTWgEmuExEZ1wVhQ9KAJ5pwNTh6WU\"]},\"contracts/src/libraries/Errors.sol\":{\"keccak256\":\"0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88\",\"dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x631f6529908f62f71775f8c6120afdca3a836fb24fa9fa4701cad54f4a9da076\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2baf6ad8917a3fbb6d040334451f6b4f6936b00518c4cd308b9c6fa11569b2bd\",\"dweb:/ipfs/QmXD16vk6MRxmPRqy8ZXSpRA5XxhSf1pnsQH32ARDJTk8L\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0xcf305dde8aa320d1e1b767734ce8edce456af537525d40e30d5345f09f6e34ab\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://056c9a563f1a9e0133e17463497ad19be517d35b770170122edea50ca9fbe002\",\"dweb:/ipfs/QmS6dkVRHzdbv7etumcCtNtm9GuXDCjqZxxhtYfP6keAAY\"]},\"contracts/src/libraries/LPMath.sol\":{\"keccak256\":\"0x5b3c0d159b1945a14227028d835e011bf740e007f664cba049ece1b6ab963067\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d8f4fef22462dabc799b2f8124440a7cc57076f7ceecb46219c69b09f50baf5f\",\"dweb:/ipfs/Qmcw9iC1RZt4Nh7dGH1yR7vUi6qZHJf6ReAvF2uLFHESqZ\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8\",\"dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x4a9c91313bed7cda6ef503af23c9f777008b5258e9cb2176eab6acc52be79891\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://88da1f5502a12fe1024be90f6a6ea08556cc1f2660ab8cbeb5e07640abb7711c\",\"dweb:/ipfs/QmVQoG9TyrAsVYcgvgZfgA5pQk8V8wvS4BewGNP4B3Txyy\"]},\"contracts/test/ERC20Mintable.sol\":{\"keccak256\":\"0xa6b1089f313e782a365731db38adb49895a60cceb9e0815e2c68f01519e0060d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b816baf88a891a35c30eb264c83b27d087778efbb33a8c9b1086f3710e02e7df\",\"dweb:/ipfs/QmV24rEUp75368eJBfgo3MJfj65cvzfbzCD8zFyEaCUaTR\"]},\"contracts/test/MockHyperdrive.sol\":{\"keccak256\":\"0x70110f424c1f1f19ee883acad7b22609b8b2fd2b0da99227bae7e3880d3ee0d1\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4a3766f58274f66e6f8909896cdb27349126fe86da7558124ab088137c695ace\",\"dweb:/ipfs/QmVreuQKTnvPVdgiuQxeSaEwKJrX4L7wtZqfzwNdozwV7S\"]},\"lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol\":{\"keccak256\":\"0x60c65f701957fdd6faea1acb0bb45825791d473693ed9ecb34726fdfaa849dd7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ea290300e0efc4d901244949dc4d877fd46e6c5e43dc2b26620e8efab3ab803f\",\"dweb:/ipfs/QmcLLJppxKeJWqHxE2CUkcfhuRTgHSn8J4kijcLa5MYhSt\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0xc3e1fa9d1987f8d349dfb4d6fe93bf2ca014b52ba335cfac30bfe71e357e6f80\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c5703ccdeb7b1d685e375ed719117e9edf2ab4bc544f24f23b0d50ec82257229\",\"dweb:/ipfs/QmTdwkbQq7owpCiyuzE7eh5LrD2ddrBCZ5WHVsWPi1RrTS\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c\",\"dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850\",\"dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x6008dabfe393240d73d7dd7688033f72740d570aa422254d29a7dce8568f3aff\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f5196ec75139918c6c7bb4251b36395e668f1fa6d206beba7e7520e74913940d\",\"dweb:/ipfs/QmSyqjksXxmm2mCG6qRd1yuwLykypkSVBbnBnGqJRcuJMi\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x37bb49513c49c87c4642a891b13b63571bc87013dde806617aa1efb54605f386\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b3036b3a83b7c48f96641f2a9002b9f2dcb6a5958dd670894ada21ae8229b3d0\",\"dweb:/ipfs/QmUNfSBdoVtjhETaUJCYcaC7pTMgbhht926tJ2uXJbiVd3\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245\",\"dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y\"]},\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":{\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12\",\"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF\"]},\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02\",\"dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd\"]},\"lib/solmate/src/auth/Auth.sol\":{\"keccak256\":\"0x6e05238d59cd40172c04c1974eb8f1f6cef4fdc4b6553ef7844a7302b885f76c\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://a9743c21ca0470d9082e4cf00aea53786868c977d40775e6954463658ebb50ac\",\"dweb:/ipfs/QmPFdyrLHUX1zSipTC2tcJ58EzxxPp2TTvCZx9KCgqZn2W\"]},\"lib/solmate/src/auth/authorities/MultiRolesAuthority.sol\":{\"keccak256\":\"0x5544e61f98c0e80a8c4b9b691952122d3547ade0c0ad830ae6d5fd65f2d0dbe3\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://232d9054e5c087e0f416d995753051d352b9f24c5bd823be69a6061757fd1fef\",\"dweb:/ipfs/QmZTwcv8YycBRUWX3NLrxNyKud2SCGtfZJiCasTXpjKM4B\"]},\"lib/solmate/src/tokens/ERC20.sol\":{\"keccak256\":\"0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35\",\"dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97\"]},\"test/utils/HyperdriveUtils.sol\":{\"keccak256\":\"0x764719deaf8b833fc87b8436d166030eaa05832bf3d5e259172f431778666e04\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://04c4bd84c0d60f9a7c68604cbe76d0cc88170bb569298749bc97d40b197f62f6\",\"dweb:/ipfs/QmQV6zkCCvLkbta2vDzjbMXKUzYDrAhcEyFA7QSRTVZJ1P\"]}},\"version\":1}";
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
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "constructor";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "BelowMinimumContribution";
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
                readonly name: "PoolAlreadyInitialized";
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
                    readonly name: "_contribution";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_apr";
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
                readonly name: "initialize";
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
                    readonly internalType: "uint256";
                    readonly name: "_minOutput";
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
            }];
            readonly devdoc: {
                readonly kind: "dev";
                readonly methods: {
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
                };
                readonly version: 1;
            };
            readonly userdoc: {
                readonly kind: "user";
                readonly methods: {
                    readonly "initialize(uint256,uint256,(address,bool,bytes))": {
                        readonly notice: "Allows the first LP to initialize the market with a target APR.";
                    };
                    readonly "openLong(uint256,uint256,uint256,(address,bool,bytes))": {
                        readonly notice: "Opens a long position.";
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
                readonly "contracts/test/MockHyperdrive.sol": "MockHyperdriveTarget3";
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
        readonly id: 25863;
        readonly exportedSymbols: {
            readonly ERC20Mintable: readonly [24109];
            readonly ETH: readonly [18778];
            readonly FixedPointMath: readonly [19572];
            readonly Hyperdrive: readonly [4609];
            readonly HyperdriveBase: readonly [14511];
            readonly HyperdriveTarget0: readonly [5409];
            readonly HyperdriveTarget1: readonly [5522];
            readonly HyperdriveTarget2: readonly [5611];
            readonly HyperdriveTarget3: readonly [5699];
            readonly HyperdriveTarget4: readonly [5778];
            readonly HyperdriveUtils: readonly [161566];
            readonly IHyperdrive: readonly [11143];
            readonly IMockHyperdrive: readonly [24909];
            readonly MockHyperdrive: readonly [25773];
            readonly MockHyperdriveBase: readonly [25444];
            readonly MockHyperdriveTarget0: readonly [25802];
            readonly MockHyperdriveTarget1: readonly [25817];
            readonly MockHyperdriveTarget2: readonly [25832];
            readonly MockHyperdriveTarget3: readonly [25847];
            readonly MockHyperdriveTarget4: readonly [25862];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:14795:141";
        readonly nodes: readonly [{
            readonly id: 24839;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:23:141";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 24841;
            readonly nodeType: "ImportDirective";
            readonly src: "64:67:141";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/external/Hyperdrive.sol";
            readonly file: "contracts/src/external/Hyperdrive.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25863;
            readonly sourceUnit: 4610;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 24840;
                    readonly name: "Hyperdrive";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 4609;
                    readonly src: "73:10:141";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 24843;
            readonly nodeType: "ImportDirective";
            readonly src: "132:81:141";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/external/HyperdriveTarget0.sol";
            readonly file: "contracts/src/external/HyperdriveTarget0.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25863;
            readonly sourceUnit: 5410;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 24842;
                    readonly name: "HyperdriveTarget0";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 5409;
                    readonly src: "141:17:141";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 24845;
            readonly nodeType: "ImportDirective";
            readonly src: "214:81:141";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/external/HyperdriveTarget1.sol";
            readonly file: "contracts/src/external/HyperdriveTarget1.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25863;
            readonly sourceUnit: 5523;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 24844;
                    readonly name: "HyperdriveTarget1";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 5522;
                    readonly src: "223:17:141";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 24847;
            readonly nodeType: "ImportDirective";
            readonly src: "296:81:141";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/external/HyperdriveTarget2.sol";
            readonly file: "contracts/src/external/HyperdriveTarget2.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25863;
            readonly sourceUnit: 5612;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 24846;
                    readonly name: "HyperdriveTarget2";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 5611;
                    readonly src: "305:17:141";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 24849;
            readonly nodeType: "ImportDirective";
            readonly src: "378:81:141";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/external/HyperdriveTarget3.sol";
            readonly file: "contracts/src/external/HyperdriveTarget3.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25863;
            readonly sourceUnit: 5700;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 24848;
                    readonly name: "HyperdriveTarget3";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 5699;
                    readonly src: "387:17:141";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 24851;
            readonly nodeType: "ImportDirective";
            readonly src: "460:81:141";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/external/HyperdriveTarget4.sol";
            readonly file: "contracts/src/external/HyperdriveTarget4.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25863;
            readonly sourceUnit: 5779;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 24850;
                    readonly name: "HyperdriveTarget4";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 5778;
                    readonly src: "469:17:141";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 24853;
            readonly nodeType: "ImportDirective";
            readonly src: "542:75:141";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/internal/HyperdriveBase.sol";
            readonly file: "contracts/src/internal/HyperdriveBase.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25863;
            readonly sourceUnit: 14512;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 24852;
                    readonly name: "HyperdriveBase";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 14511;
                    readonly src: "551:14:141";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 24855;
            readonly nodeType: "ImportDirective";
            readonly src: "618:71:141";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IHyperdrive.sol";
            readonly file: "contracts/src/interfaces/IHyperdrive.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25863;
            readonly sourceUnit: 11144;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 24854;
                    readonly name: "IHyperdrive";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 11143;
                    readonly src: "627:11:141";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 24857;
            readonly nodeType: "ImportDirective";
            readonly src: "690:71:141";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IHyperdrive.sol";
            readonly file: "contracts/src/interfaces/IHyperdrive.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25863;
            readonly sourceUnit: 11144;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 24856;
                    readonly name: "IHyperdrive";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 11143;
                    readonly src: "699:11:141";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 24859;
            readonly nodeType: "ImportDirective";
            readonly src: "762:60:141";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/libraries/Constants.sol";
            readonly file: "contracts/src/libraries/Constants.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25863;
            readonly sourceUnit: 18779;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 24858;
                    readonly name: "ETH";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 18778;
                    readonly src: "771:3:141";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 24861;
            readonly nodeType: "ImportDirective";
            readonly src: "823:76:141";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/libraries/FixedPointMath.sol";
            readonly file: "contracts/src/libraries/FixedPointMath.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25863;
            readonly sourceUnit: 19573;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 24860;
                    readonly name: "FixedPointMath";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 19572;
                    readonly src: "832:14:141";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 24863;
            readonly nodeType: "ImportDirective";
            readonly src: "900:65:141";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/test/ERC20Mintable.sol";
            readonly file: "contracts/test/ERC20Mintable.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25863;
            readonly sourceUnit: 24110;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 24862;
                    readonly name: "ERC20Mintable";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 24109;
                    readonly src: "909:13:141";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 24865;
            readonly nodeType: "ImportDirective";
            readonly src: "966:65:141";
            readonly nodes: readonly [];
            readonly absolutePath: "test/utils/HyperdriveUtils.sol";
            readonly file: "test/utils/HyperdriveUtils.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25863;
            readonly sourceUnit: 161567;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 24864;
                    readonly name: "HyperdriveUtils";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 161566;
                    readonly src: "975:15:141";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 24909;
            readonly nodeType: "ContractDefinition";
            readonly src: "1033:594:141";
            readonly nodes: readonly [{
                readonly id: 24872;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1065:51:141";
                readonly nodes: readonly [];
                readonly functionSelector: "68096239";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "accrue";
                readonly nameLocation: "1074:6:141";
                readonly parameters: {
                    readonly id: 24870;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24867;
                        readonly mutability: "mutable";
                        readonly name: "time";
                        readonly nameLocation: "1089:4:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24872;
                        readonly src: "1081:12:141";
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
                            readonly src: "1081:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 24869;
                        readonly mutability: "mutable";
                        readonly name: "apr";
                        readonly nameLocation: "1102:3:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24872;
                        readonly src: "1095:10:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 24868;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1095:6:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1080:26:141";
                };
                readonly returnParameters: {
                    readonly id: 24871;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1115:0:141";
                };
                readonly scope: 24909;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 24879;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1122:101:141";
                readonly nodes: readonly [];
                readonly functionSelector: "68c2ecb8";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateTimeRemaining";
                readonly nameLocation: "1131:22:141";
                readonly parameters: {
                    readonly id: 24875;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24874;
                        readonly mutability: "mutable";
                        readonly name: "_maturityTime";
                        readonly nameLocation: "1171:13:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24879;
                        readonly src: "1163:21:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24873;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1163:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1153:37:141";
                };
                readonly returnParameters: {
                    readonly id: 24878;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24877;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24879;
                        readonly src: "1214:7:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24876;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1214:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1213:9:141";
                };
                readonly scope: 24909;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 24886;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1229:107:141";
                readonly nodes: readonly [];
                readonly functionSelector: "ca6d38f7";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateTimeRemainingScaled";
                readonly nameLocation: "1238:28:141";
                readonly parameters: {
                    readonly id: 24882;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24881;
                        readonly mutability: "mutable";
                        readonly name: "_maturityTime";
                        readonly nameLocation: "1284:13:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24886;
                        readonly src: "1276:21:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24880;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1276:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1266:37:141";
                };
                readonly returnParameters: {
                    readonly id: 24885;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24884;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24886;
                        readonly src: "1327:7:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24883;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1327:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1326:9:141";
                };
                readonly scope: 24909;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 24891;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1342:60:141";
                readonly nodes: readonly [];
                readonly functionSelector: "907c0f92";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "latestCheckpoint";
                readonly nameLocation: "1351:16:141";
                readonly parameters: {
                    readonly id: 24887;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1367:2:141";
                };
                readonly returnParameters: {
                    readonly id: 24890;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24889;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24891;
                        readonly src: "1393:7:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24888;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1393:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1392:9:141";
                };
                readonly scope: 24909;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 24896;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1408:62:141";
                readonly nodes: readonly [];
                readonly functionSelector: "ced09112";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "updateLiquidity";
                readonly nameLocation: "1417:15:141";
                readonly parameters: {
                    readonly id: 24894;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24893;
                        readonly mutability: "mutable";
                        readonly name: "shareReservesDelta";
                        readonly nameLocation: "1441:18:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24896;
                        readonly src: "1433:26:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24892;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1433:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1432:28:141";
                };
                readonly returnParameters: {
                    readonly id: 24895;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1469:0:141";
                };
                readonly scope: 24909;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 24903;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1476:75:141";
                readonly nodes: readonly [];
                readonly functionSelector: "8392b8c0";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "setReserves";
                readonly nameLocation: "1485:11:141";
                readonly parameters: {
                    readonly id: 24901;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24898;
                        readonly mutability: "mutable";
                        readonly name: "shareReserves";
                        readonly nameLocation: "1505:13:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24903;
                        readonly src: "1497:21:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24897;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1497:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 24900;
                        readonly mutability: "mutable";
                        readonly name: "bondReserves";
                        readonly nameLocation: "1528:12:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24903;
                        readonly src: "1520:20:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24899;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1520:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1496:45:141";
                };
                readonly returnParameters: {
                    readonly id: 24902;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1550:0:141";
                };
                readonly scope: 24909;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 24908;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1557:68:141";
                readonly nodes: readonly [];
                readonly functionSelector: "8e67f87e";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getGovernanceFeesAccrued";
                readonly nameLocation: "1566:24:141";
                readonly parameters: {
                    readonly id: 24904;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1590:2:141";
                };
                readonly returnParameters: {
                    readonly id: 24907;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24906;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24908;
                        readonly src: "1616:7:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24905;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1616:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1615:9:141";
                };
                readonly scope: 24909;
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
            readonly linearizedBaseContracts: readonly [24909];
            readonly name: "IMockHyperdrive";
            readonly nameLocation: "1043:15:141";
            readonly scope: 25863;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [];
        }, {
            readonly id: 25444;
            readonly nodeType: "ContractDefinition";
            readonly src: "1629:7833:141";
            readonly nodes: readonly [{
                readonly id: 24914;
                readonly nodeType: "UsingForDirective";
                readonly src: "1690:33:141";
                readonly nodes: readonly [];
                readonly global: false;
                readonly libraryName: {
                    readonly id: 24912;
                    readonly name: "FixedPointMath";
                    readonly nameLocations: readonly ["1696:14:141"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 19572;
                    readonly src: "1696:14:141";
                };
                readonly typeName: {
                    readonly id: 24913;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1715:7:141";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
            }, {
                readonly id: 24916;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1729:28:141";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly mutability: "mutable";
                readonly name: "totalShares";
                readonly nameLocation: "1746:11:141";
                readonly scope: 25444;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 24915;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1729:7:141";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 25049;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2054:1483:141";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25048;
                    readonly nodeType: "Block";
                    readonly src: "2194:1343:141";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [24930];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 24930;
                            readonly mutability: "mutable";
                            readonly name: "assets";
                            readonly nameLocation: "2261:6:141";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 25048;
                            readonly src: "2253:14:141";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 24929;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2253:7:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 24931;
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "2253:14:141";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                            readonly id: 24937;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly arguments: readonly [{
                                    readonly id: 24934;
                                    readonly name: "_baseToken";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18304;
                                    readonly src: "2289:10:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IERC20_$10417";
                                        readonly typeString: "contract IERC20";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_contract$_IERC20_$10417";
                                        readonly typeString: "contract IERC20";
                                    }];
                                    readonly id: 24933;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "2281:7:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_address_$";
                                        readonly typeString: "type(address)";
                                    };
                                    readonly typeName: {
                                        readonly id: 24932;
                                        readonly name: "address";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "2281:7:141";
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
                                readonly src: "2281:19:141";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "==";
                            readonly rightExpression: {
                                readonly id: 24936;
                                readonly name: "ETH";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18778;
                                readonly src: "2304:3:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "2281:26:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly falseBody: {
                            readonly id: 24957;
                            readonly nodeType: "Block";
                            readonly src: "2370:69:141";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 24955;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 24947;
                                        readonly name: "assets";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24930;
                                        readonly src: "2384:6:141";
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
                                                readonly id: 24952;
                                                readonly name: "this";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -28;
                                                readonly src: "2422:4:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$25444";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$25444";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                }];
                                                readonly id: 24951;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "2414:7:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_address_$";
                                                    readonly typeString: "type(address)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 24950;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "2414:7:141";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 24953;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "2414:13:141";
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
                                                readonly id: 24948;
                                                readonly name: "_baseToken";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 18304;
                                                readonly src: "2393:10:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_IERC20_$10417";
                                                    readonly typeString: "contract IERC20";
                                                };
                                            };
                                            readonly id: 24949;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "2404:9:141";
                                            readonly memberName: "balanceOf";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 10416;
                                            readonly src: "2393:20:141";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_external_view$_t_address_$returns$_t_uint256_$";
                                                readonly typeString: "function (address) view external returns (uint256)";
                                            };
                                        };
                                        readonly id: 24954;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "2393:35:141";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "2384:44:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 24956;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "2384:44:141";
                            }];
                        };
                        readonly id: 24958;
                        readonly nodeType: "IfStatement";
                        readonly src: "2277:162:141";
                        readonly trueBody: {
                            readonly id: 24946;
                            readonly nodeType: "Block";
                            readonly src: "2309:55:141";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 24944;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 24938;
                                        readonly name: "assets";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24930;
                                        readonly src: "2323:6:141";
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
                                                readonly id: 24941;
                                                readonly name: "this";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -28;
                                                readonly src: "2340:4:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$25444";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$25444";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                }];
                                                readonly id: 24940;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "2332:7:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_address_$";
                                                    readonly typeString: "type(address)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 24939;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "2332:7:141";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 24942;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "2332:13:141";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        };
                                        readonly id: 24943;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "2346:7:141";
                                        readonly memberName: "balance";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "2332:21:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "2323:30:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 24945;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "2323:30:141";
                            }];
                        };
                    }, {
                        readonly assignments: readonly [24960];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 24960;
                            readonly mutability: "mutable";
                            readonly name: "success";
                            readonly nameLocation: "2585:7:141";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 25048;
                            readonly src: "2580:12:141";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly typeName: {
                                readonly id: 24959;
                                readonly name: "bool";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2580:4:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 24962;
                        readonly initialValue: {
                            readonly hexValue: "74727565";
                            readonly id: 24961;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "bool";
                            readonly lValueRequested: false;
                            readonly nodeType: "Literal";
                            readonly src: "2595:4:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly value: "true";
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "2580:19:141";
                    }, {
                        readonly assignments: readonly [24964];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 24964;
                            readonly mutability: "mutable";
                            readonly name: "refund";
                            readonly nameLocation: "2617:6:141";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 25048;
                            readonly src: "2609:14:141";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 24963;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2609:7:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 24965;
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "2609:14:141";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                            readonly id: 24971;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly arguments: readonly [{
                                    readonly id: 24968;
                                    readonly name: "_baseToken";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18304;
                                    readonly src: "2645:10:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IERC20_$10417";
                                        readonly typeString: "contract IERC20";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_contract$_IERC20_$10417";
                                        readonly typeString: "contract IERC20";
                                    }];
                                    readonly id: 24967;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "2637:7:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_address_$";
                                        readonly typeString: "type(address)";
                                    };
                                    readonly typeName: {
                                        readonly id: 24966;
                                        readonly name: "address";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "2637:7:141";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 24969;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "2637:19:141";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "==";
                            readonly rightExpression: {
                                readonly id: 24970;
                                readonly name: "ETH";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18778;
                                readonly src: "2660:3:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "2637:26:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly falseBody: {
                            readonly id: 25004;
                            readonly nodeType: "Block";
                            readonly src: "2838:160:141";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 25002;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 24991;
                                        readonly name: "success";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24960;
                                        readonly src: "2852:7:141";
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
                                                readonly id: 24994;
                                                readonly name: "msg";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -15;
                                                readonly src: "2903:3:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_magic_message";
                                                    readonly typeString: "msg";
                                                };
                                            };
                                            readonly id: 24995;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "2907:6:141";
                                            readonly memberName: "sender";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "2903:10:141";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly id: 24998;
                                                readonly name: "this";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -28;
                                                readonly src: "2939:4:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$25444";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$25444";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                }];
                                                readonly id: 24997;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "2931:7:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_address_$";
                                                    readonly typeString: "type(address)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 24996;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "2931:7:141";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 24999;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "2931:13:141";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        }, {
                                            readonly id: 25000;
                                            readonly name: "_baseAmount";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 24919;
                                            readonly src: "2962:11:141";
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
                                                readonly id: 24992;
                                                readonly name: "_baseToken";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 18304;
                                                readonly src: "2862:10:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_IERC20_$10417";
                                                    readonly typeString: "contract IERC20";
                                                };
                                            };
                                            readonly id: 24993;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "2873:12:141";
                                            readonly memberName: "transferFrom";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 10374;
                                            readonly src: "2862:23:141";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$";
                                                readonly typeString: "function (address,address,uint256) external returns (bool)";
                                            };
                                        };
                                        readonly id: 25001;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "2862:125:141";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly src: "2852:135:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly id: 25003;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "2852:135:141";
                            }];
                        };
                        readonly id: 25005;
                        readonly nodeType: "IfStatement";
                        readonly src: "2633:365:141";
                        readonly trueBody: {
                            readonly id: 24990;
                            readonly nodeType: "Block";
                            readonly src: "2665:167:141";
                            readonly statements: readonly [{
                                readonly condition: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 24975;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly expression: {
                                            readonly id: 24972;
                                            readonly name: "msg";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -15;
                                            readonly src: "2683:3:141";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_magic_message";
                                                readonly typeString: "msg";
                                            };
                                        };
                                        readonly id: 24973;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "2687:5:141";
                                        readonly memberName: "value";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "2683:9:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "<";
                                    readonly rightExpression: {
                                        readonly id: 24974;
                                        readonly name: "_baseAmount";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24919;
                                        readonly src: "2695:11:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "2683:23:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly id: 24982;
                                readonly nodeType: "IfStatement";
                                readonly src: "2679:97:141";
                                readonly trueBody: {
                                    readonly id: 24981;
                                    readonly nodeType: "Block";
                                    readonly src: "2708:68:141";
                                    readonly statements: readonly [{
                                        readonly errorCall: {
                                            readonly arguments: readonly [];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [];
                                                readonly expression: {
                                                    readonly id: 24976;
                                                    readonly name: "IHyperdrive";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 11143;
                                                    readonly src: "2733:11:141";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$11143_$";
                                                        readonly typeString: "type(contract IHyperdrive)";
                                                    };
                                                };
                                                readonly id: 24978;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "2745:14:141";
                                                readonly memberName: "TransferFailed";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 11088;
                                                readonly src: "2733:26:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                                    readonly typeString: "function () pure";
                                                };
                                            };
                                            readonly id: 24979;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "functionCall";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "2733:28:141";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_tuple$__$";
                                                readonly typeString: "tuple()";
                                            };
                                        };
                                        readonly id: 24980;
                                        readonly nodeType: "RevertStatement";
                                        readonly src: "2726:35:141";
                                    }];
                                };
                            }, {
                                readonly expression: {
                                    readonly id: 24988;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 24983;
                                        readonly name: "refund";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24964;
                                        readonly src: "2789:6:141";
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
                                        readonly id: 24987;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly expression: {
                                                readonly id: 24984;
                                                readonly name: "msg";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -15;
                                                readonly src: "2798:3:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_magic_message";
                                                    readonly typeString: "msg";
                                                };
                                            };
                                            readonly id: 24985;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "2802:5:141";
                                            readonly memberName: "value";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "2798:9:141";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "-";
                                        readonly rightExpression: {
                                            readonly id: 24986;
                                            readonly name: "_baseAmount";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 24919;
                                            readonly src: "2810:11:141";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly src: "2798:23:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "2789:32:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 24989;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "2789:32:141";
                            }];
                        };
                    }, {
                        readonly condition: {
                            readonly id: 25007;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "UnaryOperation";
                            readonly operator: "!";
                            readonly prefix: true;
                            readonly src: "3011:8:141";
                            readonly subExpression: {
                                readonly id: 25006;
                                readonly name: "success";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24960;
                                readonly src: "3012:7:141";
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
                        readonly id: 25014;
                        readonly nodeType: "IfStatement";
                        readonly src: "3007:74:141";
                        readonly trueBody: {
                            readonly id: 25013;
                            readonly nodeType: "Block";
                            readonly src: "3021:60:141";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 25008;
                                            readonly name: "IHyperdrive";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 11143;
                                            readonly src: "3042:11:141";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$11143_$";
                                                readonly typeString: "type(contract IHyperdrive)";
                                            };
                                        };
                                        readonly id: 25010;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "3054:14:141";
                                        readonly memberName: "TransferFailed";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 11088;
                                        readonly src: "3042:26:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 25011;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "3042:28:141";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 25012;
                                readonly nodeType: "RevertStatement";
                                readonly src: "3035:35:141";
                            }];
                        };
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 25017;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 25015;
                                readonly name: "totalShares";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24916;
                                readonly src: "3216:11:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "==";
                            readonly rightExpression: {
                                readonly hexValue: "30";
                                readonly id: 25016;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "3231:1:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly src: "3216:16:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly falseBody: {
                            readonly id: 25046;
                            readonly nodeType: "Block";
                            readonly src: "3365:166:141";
                            readonly statements: readonly [{
                                readonly assignments: readonly [25031];
                                readonly declarations: readonly [{
                                    readonly constant: false;
                                    readonly id: 25031;
                                    readonly mutability: "mutable";
                                    readonly name: "newShares";
                                    readonly nameLocation: "3387:9:141";
                                    readonly nodeType: "VariableDeclaration";
                                    readonly scope: 25046;
                                    readonly src: "3379:17:141";
                                    readonly stateVariable: false;
                                    readonly storageLocation: "default";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly typeName: {
                                        readonly id: 25030;
                                        readonly name: "uint256";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "3379:7:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly visibility: "internal";
                                }];
                                readonly id: 25037;
                                readonly initialValue: {
                                    readonly arguments: readonly [{
                                        readonly id: 25034;
                                        readonly name: "totalShares";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24916;
                                        readonly src: "3422:11:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }, {
                                        readonly id: 25035;
                                        readonly name: "assets";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24930;
                                        readonly src: "3435:6:141";
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
                                            readonly id: 25032;
                                            readonly name: "_baseAmount";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 24919;
                                            readonly src: "3399:11:141";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly id: 25033;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "3411:10:141";
                                        readonly memberName: "mulDivDown";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 18834;
                                        readonly src: "3399:22:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                            readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                        };
                                    };
                                    readonly id: 25036;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "3399:43:141";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "VariableDeclarationStatement";
                                readonly src: "3379:63:141";
                            }, {
                                readonly expression: {
                                    readonly id: 25040;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 25038;
                                        readonly name: "totalShares";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24916;
                                        readonly src: "3456:11:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "+=";
                                    readonly rightHandSide: {
                                        readonly id: 25039;
                                        readonly name: "newShares";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 25031;
                                        readonly src: "3471:9:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "3456:24:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 25041;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "3456:24:141";
                            }, {
                                readonly expression: {
                                    readonly components: readonly [{
                                        readonly id: 25042;
                                        readonly name: "newShares";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 25031;
                                        readonly src: "3502:9:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }, {
                                        readonly id: 25043;
                                        readonly name: "refund";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24964;
                                        readonly src: "3513:6:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }];
                                    readonly id: 25044;
                                    readonly isConstant: false;
                                    readonly isInlineArray: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "TupleExpression";
                                    readonly src: "3501:19:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$";
                                        readonly typeString: "tuple(uint256,uint256)";
                                    };
                                };
                                readonly functionReturnParameters: 24928;
                                readonly id: 25045;
                                readonly nodeType: "Return";
                                readonly src: "3494:26:141";
                            }];
                        };
                        readonly id: 25047;
                        readonly nodeType: "IfStatement";
                        readonly src: "3212:319:141";
                        readonly trueBody: {
                            readonly id: 25029;
                            readonly nodeType: "Block";
                            readonly src: "3234:125:141";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 25023;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 25018;
                                        readonly name: "totalShares";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24916;
                                        readonly src: "3248:11:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly id: 25021;
                                            readonly name: "_initialVaultSharePrice";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 18328;
                                            readonly src: "3282:23:141";
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
                                                readonly id: 25019;
                                                readonly name: "_baseAmount";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 24919;
                                                readonly src: "3262:11:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly id: 25020;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "3274:7:141";
                                            readonly memberName: "divDown";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 18870;
                                            readonly src: "3262:19:141";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                                readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                            };
                                        };
                                        readonly id: 25022;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "3262:44:141";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "3248:58:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 25024;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "3248:58:141";
                            }, {
                                readonly expression: {
                                    readonly components: readonly [{
                                        readonly id: 25025;
                                        readonly name: "totalShares";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24916;
                                        readonly src: "3328:11:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }, {
                                        readonly id: 25026;
                                        readonly name: "refund";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24964;
                                        readonly src: "3341:6:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }];
                                    readonly id: 25027;
                                    readonly isConstant: false;
                                    readonly isInlineArray: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "TupleExpression";
                                    readonly src: "3327:21:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$";
                                        readonly typeString: "tuple(uint256,uint256)";
                                    };
                                };
                                readonly functionReturnParameters: 24928;
                                readonly id: 25028;
                                readonly nodeType: "Return";
                                readonly src: "3320:28:141";
                            }];
                        };
                    }];
                };
                readonly baseFunctions: readonly [13542];
                readonly documentation: {
                    readonly id: 24917;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1764:285:141";
                    readonly text: "@dev Accepts a deposit from the user in base.\n @param _baseAmount The base amount to deposit.\n @return The shares that were minted in the deposit.\n @return The amount of ETH to refund. Since this yield source isn't\n         payable, this is always zero.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_depositWithBase";
                readonly nameLocation: "2063:16:141";
                readonly overrides: {
                    readonly id: 24923;
                    readonly nodeType: "OverrideSpecifier";
                    readonly overrides: readonly [];
                    readonly src: "2158:8:141";
                };
                readonly parameters: {
                    readonly id: 24922;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24919;
                        readonly mutability: "mutable";
                        readonly name: "_baseAmount";
                        readonly nameLocation: "2097:11:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25049;
                        readonly src: "2089:19:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24918;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2089:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 24921;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25049;
                        readonly src: "2118:14:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_calldata_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 24920;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2118:5:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2079:69:141";
                };
                readonly returnParameters: {
                    readonly id: 24928;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24925;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25049;
                        readonly src: "2176:7:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24924;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2176:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 24927;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25049;
                        readonly src: "2185:7:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24926;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2185:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2175:18:141";
                };
                readonly scope: 25444;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 25144;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3655:1226:141";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25143;
                    readonly nodeType: "Block";
                    readonly src: "3771:1110:141";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [25059];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 25059;
                            readonly mutability: "mutable";
                            readonly name: "baseAmount";
                            readonly nameLocation: "3842:10:141";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 25143;
                            readonly src: "3834:18:141";
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
                                readonly src: "3834:7:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 25063;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 25061;
                                readonly name: "_shareAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25052;
                                readonly src: "3870:12:141";
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
                                readonly id: 25060;
                                readonly name: "_convertToBase";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [25368];
                                readonly referencedDeclaration: 25368;
                                readonly src: "3855:14:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256) view returns (uint256)";
                                };
                            };
                            readonly id: 25062;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3855:28:141";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "3834:49:141";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 25066;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 25064;
                                readonly name: "totalShares";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24916;
                                readonly src: "4019:11:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "==";
                            readonly rightExpression: {
                                readonly hexValue: "30";
                                readonly id: 25065;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "4034:1:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly src: "4019:16:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly falseBody: {
                            readonly id: 25085;
                            readonly nodeType: "Block";
                            readonly src: "4125:111:141";
                            readonly statements: readonly [{
                                readonly assignments: readonly [25076];
                                readonly declarations: readonly [{
                                    readonly constant: false;
                                    readonly id: 25076;
                                    readonly mutability: "mutable";
                                    readonly name: "newShares";
                                    readonly nameLocation: "4147:9:141";
                                    readonly nodeType: "VariableDeclaration";
                                    readonly scope: 25085;
                                    readonly src: "4139:17:141";
                                    readonly stateVariable: false;
                                    readonly storageLocation: "default";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly typeName: {
                                        readonly id: 25075;
                                        readonly name: "uint256";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "4139:7:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly visibility: "internal";
                                }];
                                readonly id: 25080;
                                readonly initialValue: {
                                    readonly arguments: readonly [{
                                        readonly id: 25078;
                                        readonly name: "baseAmount";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 25059;
                                        readonly src: "4176:10:141";
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
                                        readonly id: 25077;
                                        readonly name: "_convertToShares";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [25414];
                                        readonly referencedDeclaration: 25414;
                                        readonly src: "4159:16:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_view$_t_uint256_$returns$_t_uint256_$";
                                            readonly typeString: "function (uint256) view returns (uint256)";
                                        };
                                    };
                                    readonly id: 25079;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "4159:28:141";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "VariableDeclarationStatement";
                                readonly src: "4139:48:141";
                            }, {
                                readonly expression: {
                                    readonly id: 25083;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 25081;
                                        readonly name: "totalShares";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24916;
                                        readonly src: "4201:11:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "+=";
                                    readonly rightHandSide: {
                                        readonly id: 25082;
                                        readonly name: "newShares";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 25076;
                                        readonly src: "4216:9:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "4201:24:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 25084;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "4201:24:141";
                            }];
                        };
                        readonly id: 25086;
                        readonly nodeType: "IfStatement";
                        readonly src: "4015:221:141";
                        readonly trueBody: {
                            readonly id: 25074;
                            readonly nodeType: "Block";
                            readonly src: "4037:82:141";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 25072;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 25067;
                                        readonly name: "totalShares";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24916;
                                        readonly src: "4051:11:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly id: 25070;
                                            readonly name: "_initialVaultSharePrice";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 18328;
                                            readonly src: "4084:23:141";
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
                                                readonly id: 25068;
                                                readonly name: "baseAmount";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 25059;
                                                readonly src: "4065:10:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly id: 25069;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "4076:7:141";
                                            readonly memberName: "divDown";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 18870;
                                            readonly src: "4065:18:141";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                                readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                            };
                                        };
                                        readonly id: 25071;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "4065:43:141";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "4051:57:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 25073;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "4051:57:141";
                            }];
                        };
                    }, {
                        readonly assignments: readonly [25088];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 25088;
                            readonly mutability: "mutable";
                            readonly name: "success";
                            readonly nameLocation: "4382:7:141";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 25143;
                            readonly src: "4377:12:141";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly typeName: {
                                readonly id: 25087;
                                readonly name: "bool";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "4377:4:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 25090;
                        readonly initialValue: {
                            readonly hexValue: "74727565";
                            readonly id: 25089;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "bool";
                            readonly lValueRequested: false;
                            readonly nodeType: "Literal";
                            readonly src: "4392:4:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly value: "true";
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "4377:19:141";
                    }, {
                        readonly assignments: readonly [25092];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 25092;
                            readonly mutability: "mutable";
                            readonly name: "refund";
                            readonly nameLocation: "4414:6:141";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 25143;
                            readonly src: "4406:14:141";
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
                                readonly src: "4406:7:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 25093;
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "4406:14:141";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                            readonly id: 25099;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly arguments: readonly [{
                                    readonly id: 25096;
                                    readonly name: "_baseToken";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18304;
                                    readonly src: "4442:10:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IERC20_$10417";
                                        readonly typeString: "contract IERC20";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_contract$_IERC20_$10417";
                                        readonly typeString: "contract IERC20";
                                    }];
                                    readonly id: 25095;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "4434:7:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_address_$";
                                        readonly typeString: "type(address)";
                                    };
                                    readonly typeName: {
                                        readonly id: 25094;
                                        readonly name: "address";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "4434:7:141";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 25097;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "4434:19:141";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "==";
                            readonly rightExpression: {
                                readonly id: 25098;
                                readonly name: "ETH";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18778;
                                readonly src: "4457:3:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "4434:26:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly falseBody: {
                            readonly id: 25132;
                            readonly nodeType: "Block";
                            readonly src: "4633:159:141";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 25130;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 25119;
                                        readonly name: "success";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 25088;
                                        readonly src: "4647:7:141";
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
                                                readonly id: 25122;
                                                readonly name: "msg";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -15;
                                                readonly src: "4698:3:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_magic_message";
                                                    readonly typeString: "msg";
                                                };
                                            };
                                            readonly id: 25123;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "4702:6:141";
                                            readonly memberName: "sender";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "4698:10:141";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly id: 25126;
                                                readonly name: "this";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -28;
                                                readonly src: "4734:4:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$25444";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$25444";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                }];
                                                readonly id: 25125;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "4726:7:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_address_$";
                                                    readonly typeString: "type(address)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 25124;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "4726:7:141";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 25127;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "4726:13:141";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        }, {
                                            readonly id: 25128;
                                            readonly name: "baseAmount";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 25059;
                                            readonly src: "4757:10:141";
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
                                                readonly id: 25120;
                                                readonly name: "_baseToken";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 18304;
                                                readonly src: "4657:10:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_IERC20_$10417";
                                                    readonly typeString: "contract IERC20";
                                                };
                                            };
                                            readonly id: 25121;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "4668:12:141";
                                            readonly memberName: "transferFrom";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 10374;
                                            readonly src: "4657:23:141";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$";
                                                readonly typeString: "function (address,address,uint256) external returns (bool)";
                                            };
                                        };
                                        readonly id: 25129;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "4657:124:141";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly src: "4647:134:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly id: 25131;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "4647:134:141";
                            }];
                        };
                        readonly id: 25133;
                        readonly nodeType: "IfStatement";
                        readonly src: "4430:362:141";
                        readonly trueBody: {
                            readonly id: 25118;
                            readonly nodeType: "Block";
                            readonly src: "4462:165:141";
                            readonly statements: readonly [{
                                readonly condition: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 25103;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly expression: {
                                            readonly id: 25100;
                                            readonly name: "msg";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -15;
                                            readonly src: "4480:3:141";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_magic_message";
                                                readonly typeString: "msg";
                                            };
                                        };
                                        readonly id: 25101;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "4484:5:141";
                                        readonly memberName: "value";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "4480:9:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "<";
                                    readonly rightExpression: {
                                        readonly id: 25102;
                                        readonly name: "baseAmount";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 25059;
                                        readonly src: "4492:10:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "4480:22:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly id: 25110;
                                readonly nodeType: "IfStatement";
                                readonly src: "4476:96:141";
                                readonly trueBody: {
                                    readonly id: 25109;
                                    readonly nodeType: "Block";
                                    readonly src: "4504:68:141";
                                    readonly statements: readonly [{
                                        readonly errorCall: {
                                            readonly arguments: readonly [];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [];
                                                readonly expression: {
                                                    readonly id: 25104;
                                                    readonly name: "IHyperdrive";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 11143;
                                                    readonly src: "4529:11:141";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$11143_$";
                                                        readonly typeString: "type(contract IHyperdrive)";
                                                    };
                                                };
                                                readonly id: 25106;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "4541:14:141";
                                                readonly memberName: "TransferFailed";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 11088;
                                                readonly src: "4529:26:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                                    readonly typeString: "function () pure";
                                                };
                                            };
                                            readonly id: 25107;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "functionCall";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "4529:28:141";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_tuple$__$";
                                                readonly typeString: "tuple()";
                                            };
                                        };
                                        readonly id: 25108;
                                        readonly nodeType: "RevertStatement";
                                        readonly src: "4522:35:141";
                                    }];
                                };
                            }, {
                                readonly expression: {
                                    readonly id: 25116;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 25111;
                                        readonly name: "refund";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 25092;
                                        readonly src: "4585:6:141";
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
                                        readonly id: 25115;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly expression: {
                                                readonly id: 25112;
                                                readonly name: "msg";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -15;
                                                readonly src: "4594:3:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_magic_message";
                                                    readonly typeString: "msg";
                                                };
                                            };
                                            readonly id: 25113;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "4598:5:141";
                                            readonly memberName: "value";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "4594:9:141";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "-";
                                        readonly rightExpression: {
                                            readonly id: 25114;
                                            readonly name: "baseAmount";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 25059;
                                            readonly src: "4606:10:141";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly src: "4594:22:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "4585:31:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 25117;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "4585:31:141";
                            }];
                        };
                    }, {
                        readonly condition: {
                            readonly id: 25135;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "UnaryOperation";
                            readonly operator: "!";
                            readonly prefix: true;
                            readonly src: "4805:8:141";
                            readonly subExpression: {
                                readonly id: 25134;
                                readonly name: "success";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25088;
                                readonly src: "4806:7:141";
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
                        readonly id: 25142;
                        readonly nodeType: "IfStatement";
                        readonly src: "4801:74:141";
                        readonly trueBody: {
                            readonly id: 25141;
                            readonly nodeType: "Block";
                            readonly src: "4815:60:141";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 25136;
                                            readonly name: "IHyperdrive";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 11143;
                                            readonly src: "4836:11:141";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$11143_$";
                                                readonly typeString: "type(contract IHyperdrive)";
                                            };
                                        };
                                        readonly id: 25138;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "4848:14:141";
                                        readonly memberName: "TransferFailed";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 11088;
                                        readonly src: "4836:26:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 25139;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "4836:28:141";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 25140;
                                readonly nodeType: "RevertStatement";
                                readonly src: "4829:35:141";
                            }];
                        };
                    }];
                };
                readonly baseFunctions: readonly [13550];
                readonly documentation: {
                    readonly id: 25050;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3543:107:141";
                    readonly text: "@dev Process a deposit in vault shares.\n @param _shareAmount The vault shares amount to deposit.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_depositWithShares";
                readonly nameLocation: "3664:18:141";
                readonly overrides: {
                    readonly id: 25056;
                    readonly nodeType: "OverrideSpecifier";
                    readonly overrides: readonly [];
                    readonly src: "3762:8:141";
                };
                readonly parameters: {
                    readonly id: 25055;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25052;
                        readonly mutability: "mutable";
                        readonly name: "_shareAmount";
                        readonly nameLocation: "3700:12:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25144;
                        readonly src: "3692:20:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25051;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3692:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25054;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25144;
                        readonly src: "3722:14:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_calldata_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 25053;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3722:5:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3682:70:141";
                };
                readonly returnParameters: {
                    readonly id: 25057;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "3771:0:141";
                };
                readonly scope: 25444;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 25221;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5177:986:141";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25220;
                    readonly nodeType: "Block";
                    readonly src: "5356:807:141";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 25164;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 25157;
                                readonly name: "_shareAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25147;
                                readonly src: "5478:12:141";
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
                                    readonly id: 25160;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 25158;
                                        readonly name: "_shareAmount";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 25147;
                                        readonly src: "5493:12:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: ">";
                                    readonly rightExpression: {
                                        readonly id: 25159;
                                        readonly name: "totalShares";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24916;
                                        readonly src: "5508:11:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "5493:26:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly falseExpression: {
                                    readonly id: 25162;
                                    readonly name: "_shareAmount";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25147;
                                    readonly src: "5536:12:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 25163;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "Conditional";
                                readonly src: "5493:55:141";
                                readonly trueExpression: {
                                    readonly id: 25161;
                                    readonly name: "totalShares";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 24916;
                                    readonly src: "5522:11:141";
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
                            readonly src: "5478:70:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 25165;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "5478:70:141";
                    }, {
                        readonly assignments: readonly [25167];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 25167;
                            readonly mutability: "mutable";
                            readonly name: "withdrawValue";
                            readonly nameLocation: "5607:13:141";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 25220;
                            readonly src: "5599:21:141";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 25166;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "5599:7:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 25171;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 25169;
                                readonly name: "_shareAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25147;
                                readonly src: "5638:12:141";
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
                                readonly id: 25168;
                                readonly name: "_convertToBase";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [25368];
                                readonly referencedDeclaration: 25368;
                                readonly src: "5623:14:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256) view returns (uint256)";
                                };
                            };
                            readonly id: 25170;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "5623:28:141";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "5599:52:141";
                    }, {
                        readonly expression: {
                            readonly id: 25174;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 25172;
                                readonly name: "totalShares";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24916;
                                readonly src: "5740:11:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "-=";
                            readonly rightHandSide: {
                                readonly id: 25173;
                                readonly name: "_shareAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25147;
                                readonly src: "5755:12:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "5740:27:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 25175;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "5740:27:141";
                    }, {
                        readonly assignments: readonly [25177];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 25177;
                            readonly mutability: "mutable";
                            readonly name: "success";
                            readonly nameLocation: "5782:7:141";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 25220;
                            readonly src: "5777:12:141";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly typeName: {
                                readonly id: 25176;
                                readonly name: "bool";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "5777:4:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 25178;
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "5777:12:141";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                            readonly id: 25184;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly arguments: readonly [{
                                    readonly id: 25181;
                                    readonly name: "_baseToken";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18304;
                                    readonly src: "5811:10:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IERC20_$10417";
                                        readonly typeString: "contract IERC20";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_contract$_IERC20_$10417";
                                        readonly typeString: "contract IERC20";
                                    }];
                                    readonly id: 25180;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "5803:7:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_address_$";
                                        readonly typeString: "type(address)";
                                    };
                                    readonly typeName: {
                                        readonly id: 25179;
                                        readonly name: "address";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "5803:7:141";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 25182;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "5803:19:141";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "==";
                            readonly rightExpression: {
                                readonly id: 25183;
                                readonly name: "ETH";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18778;
                                readonly src: "5826:3:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "5803:26:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly falseBody: {
                            readonly id: 25207;
                            readonly nodeType: "Block";
                            readonly src: "5960:83:141";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 25205;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 25199;
                                        readonly name: "success";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 25177;
                                        readonly src: "5974:7:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly id: 25202;
                                            readonly name: "_destination";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 25149;
                                            readonly src: "6004:12:141";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        }, {
                                            readonly id: 25203;
                                            readonly name: "withdrawValue";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 25167;
                                            readonly src: "6018:13:141";
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
                                                readonly id: 25200;
                                                readonly name: "_baseToken";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 18304;
                                                readonly src: "5984:10:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_IERC20_$10417";
                                                    readonly typeString: "contract IERC20";
                                                };
                                            };
                                            readonly id: 25201;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "5995:8:141";
                                            readonly memberName: "transfer";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 10362;
                                            readonly src: "5984:19:141";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$";
                                                readonly typeString: "function (address,uint256) external returns (bool)";
                                            };
                                        };
                                        readonly id: 25204;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "5984:48:141";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly src: "5974:58:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly id: 25206;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "5974:58:141";
                            }];
                        };
                        readonly id: 25208;
                        readonly nodeType: "IfStatement";
                        readonly src: "5799:244:141";
                        readonly trueBody: {
                            readonly id: 25198;
                            readonly nodeType: "Block";
                            readonly src: "5831:123:141";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 25196;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly components: readonly [{
                                            readonly id: 25185;
                                            readonly name: "success";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 25177;
                                            readonly src: "5846:7:141";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bool";
                                                readonly typeString: "bool";
                                            };
                                        }, null];
                                        readonly id: 25186;
                                        readonly isConstant: false;
                                        readonly isInlineArray: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: true;
                                        readonly nodeType: "TupleExpression";
                                        readonly src: "5845:11:141";
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
                                            readonly id: 25194;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "string";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "5927:2:141";
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
                                                        readonly id: 25189;
                                                        readonly name: "_destination";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 25149;
                                                        readonly src: "5867:12:141";
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
                                                        readonly id: 25188;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: true;
                                                        readonly lValueRequested: false;
                                                        readonly nodeType: "ElementaryTypeNameExpression";
                                                        readonly src: "5859:8:141";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_type$_t_address_payable_$";
                                                            readonly typeString: "type(address payable)";
                                                        };
                                                        readonly typeName: {
                                                            readonly id: 25187;
                                                            readonly name: "address";
                                                            readonly nodeType: "ElementaryTypeName";
                                                            readonly src: "5859:8:141";
                                                            readonly stateMutability: "payable";
                                                            readonly typeDescriptions: {};
                                                        };
                                                    };
                                                    readonly id: 25190;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly kind: "typeConversion";
                                                    readonly lValueRequested: false;
                                                    readonly nameLocations: readonly [];
                                                    readonly names: readonly [];
                                                    readonly nodeType: "FunctionCall";
                                                    readonly src: "5859:21:141";
                                                    readonly tryCall: false;
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_address_payable";
                                                        readonly typeString: "address payable";
                                                    };
                                                };
                                                readonly id: 25191;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "5881:4:141";
                                                readonly memberName: "call";
                                                readonly nodeType: "MemberAccess";
                                                readonly src: "5859:26:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$";
                                                    readonly typeString: "function (bytes memory) payable returns (bool,bytes memory)";
                                                };
                                            };
                                            readonly id: 25193;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly names: readonly ["value"];
                                            readonly nodeType: "FunctionCallOptions";
                                            readonly options: readonly [{
                                                readonly id: 25192;
                                                readonly name: "withdrawValue";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 25167;
                                                readonly src: "5894:13:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            }];
                                            readonly src: "5859:50:141";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$value";
                                                readonly typeString: "function (bytes memory) payable returns (bool,bytes memory)";
                                            };
                                        };
                                        readonly id: 25195;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "5859:84:141";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_tuple$_t_bool_$_t_bytes_memory_ptr_$";
                                            readonly typeString: "tuple(bool,bytes memory)";
                                        };
                                    };
                                    readonly src: "5845:98:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 25197;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "5845:98:141";
                            }];
                        };
                    }, {
                        readonly condition: {
                            readonly id: 25210;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "UnaryOperation";
                            readonly operator: "!";
                            readonly prefix: true;
                            readonly src: "6056:8:141";
                            readonly subExpression: {
                                readonly id: 25209;
                                readonly name: "success";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25177;
                                readonly src: "6057:7:141";
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
                        readonly id: 25217;
                        readonly nodeType: "IfStatement";
                        readonly src: "6052:74:141";
                        readonly trueBody: {
                            readonly id: 25216;
                            readonly nodeType: "Block";
                            readonly src: "6066:60:141";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 25211;
                                            readonly name: "IHyperdrive";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 11143;
                                            readonly src: "6087:11:141";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$11143_$";
                                                readonly typeString: "type(contract IHyperdrive)";
                                            };
                                        };
                                        readonly id: 25213;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "6099:14:141";
                                        readonly memberName: "TransferFailed";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 11088;
                                        readonly src: "6087:26:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 25214;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "6087:28:141";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 25215;
                                readonly nodeType: "RevertStatement";
                                readonly src: "6080:35:141";
                            }];
                        };
                    }, {
                        readonly expression: {
                            readonly id: 25218;
                            readonly name: "withdrawValue";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 25167;
                            readonly src: "6143:13:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 25156;
                        readonly id: 25219;
                        readonly nodeType: "Return";
                        readonly src: "6136:20:141";
                    }];
                };
                readonly baseFunctions: readonly [13562];
                readonly documentation: {
                    readonly id: 25145;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "4887:285:141";
                    readonly text: "@dev Process a withdrawal in base and send the proceeds to the\n      destination.\n @param _shareAmount The amount of vault shares to withdraw.\n @param _destination The destination of the withdrawal.\n @return amountWithdrawn The amount of base withdrawn.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_withdrawWithBase";
                readonly nameLocation: "5186:17:141";
                readonly overrides: {
                    readonly id: 25153;
                    readonly nodeType: "OverrideSpecifier";
                    readonly overrides: readonly [];
                    readonly src: "5313:8:141";
                };
                readonly parameters: {
                    readonly id: 25152;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25147;
                        readonly mutability: "mutable";
                        readonly name: "_shareAmount";
                        readonly nameLocation: "5221:12:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25221;
                        readonly src: "5213:20:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25146;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5213:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25149;
                        readonly mutability: "mutable";
                        readonly name: "_destination";
                        readonly nameLocation: "5251:12:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25221;
                        readonly src: "5243:20:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 25148;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5243:7:141";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25151;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25221;
                        readonly src: "5273:14:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_calldata_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 25150;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5273:5:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5203:100:141";
                };
                readonly returnParameters: {
                    readonly id: 25156;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25155;
                        readonly mutability: "mutable";
                        readonly name: "amountWithdrawn";
                        readonly nameLocation: "5339:15:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25221;
                        readonly src: "5331:23:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25154;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5331:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5330:25:141";
                };
                readonly scope: 25444;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 25294;
                readonly nodeType: "FunctionDefinition";
                readonly src: "6405:923:141";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25293;
                    readonly nodeType: "Block";
                    readonly src: "6552:776:141";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 25239;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 25232;
                                readonly name: "_shareAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25224;
                                readonly src: "6674:12:141";
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
                                    readonly id: 25235;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 25233;
                                        readonly name: "_shareAmount";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 25224;
                                        readonly src: "6689:12:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: ">";
                                    readonly rightExpression: {
                                        readonly id: 25234;
                                        readonly name: "totalShares";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24916;
                                        readonly src: "6704:11:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "6689:26:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly falseExpression: {
                                    readonly id: 25237;
                                    readonly name: "_shareAmount";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25224;
                                    readonly src: "6732:12:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 25238;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "Conditional";
                                readonly src: "6689:55:141";
                                readonly trueExpression: {
                                    readonly id: 25236;
                                    readonly name: "totalShares";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 24916;
                                    readonly src: "6718:11:141";
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
                            readonly src: "6674:70:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 25240;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6674:70:141";
                    }, {
                        readonly assignments: readonly [25242];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 25242;
                            readonly mutability: "mutable";
                            readonly name: "withdrawValue";
                            readonly nameLocation: "6803:13:141";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 25293;
                            readonly src: "6795:21:141";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 25241;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "6795:7:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 25246;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 25244;
                                readonly name: "_shareAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25224;
                                readonly src: "6834:12:141";
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
                                readonly id: 25243;
                                readonly name: "_convertToBase";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [25368];
                                readonly referencedDeclaration: 25368;
                                readonly src: "6819:14:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256) view returns (uint256)";
                                };
                            };
                            readonly id: 25245;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "6819:28:141";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "6795:52:141";
                    }, {
                        readonly expression: {
                            readonly id: 25249;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 25247;
                                readonly name: "totalShares";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24916;
                                readonly src: "6936:11:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "-=";
                            readonly rightHandSide: {
                                readonly id: 25248;
                                readonly name: "_shareAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25224;
                                readonly src: "6951:12:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "6936:27:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 25250;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6936:27:141";
                    }, {
                        readonly assignments: readonly [25252];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 25252;
                            readonly mutability: "mutable";
                            readonly name: "success";
                            readonly nameLocation: "6978:7:141";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 25293;
                            readonly src: "6973:12:141";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly typeName: {
                                readonly id: 25251;
                                readonly name: "bool";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "6973:4:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 25253;
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "6973:12:141";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                            readonly id: 25259;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly arguments: readonly [{
                                    readonly id: 25256;
                                    readonly name: "_baseToken";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18304;
                                    readonly src: "7007:10:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IERC20_$10417";
                                        readonly typeString: "contract IERC20";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_contract$_IERC20_$10417";
                                        readonly typeString: "contract IERC20";
                                    }];
                                    readonly id: 25255;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "6999:7:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_address_$";
                                        readonly typeString: "type(address)";
                                    };
                                    readonly typeName: {
                                        readonly id: 25254;
                                        readonly name: "address";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "6999:7:141";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 25257;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "6999:19:141";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "==";
                            readonly rightExpression: {
                                readonly id: 25258;
                                readonly name: "ETH";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18778;
                                readonly src: "7022:3:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "6999:26:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly falseBody: {
                            readonly id: 25282;
                            readonly nodeType: "Block";
                            readonly src: "7156:83:141";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 25280;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 25274;
                                        readonly name: "success";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 25252;
                                        readonly src: "7170:7:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly id: 25277;
                                            readonly name: "_destination";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 25226;
                                            readonly src: "7200:12:141";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        }, {
                                            readonly id: 25278;
                                            readonly name: "withdrawValue";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 25242;
                                            readonly src: "7214:13:141";
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
                                                readonly id: 25275;
                                                readonly name: "_baseToken";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 18304;
                                                readonly src: "7180:10:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_IERC20_$10417";
                                                    readonly typeString: "contract IERC20";
                                                };
                                            };
                                            readonly id: 25276;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "7191:8:141";
                                            readonly memberName: "transfer";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 10362;
                                            readonly src: "7180:19:141";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$";
                                                readonly typeString: "function (address,uint256) external returns (bool)";
                                            };
                                        };
                                        readonly id: 25279;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "7180:48:141";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly src: "7170:58:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly id: 25281;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "7170:58:141";
                            }];
                        };
                        readonly id: 25283;
                        readonly nodeType: "IfStatement";
                        readonly src: "6995:244:141";
                        readonly trueBody: {
                            readonly id: 25273;
                            readonly nodeType: "Block";
                            readonly src: "7027:123:141";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 25271;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly components: readonly [{
                                            readonly id: 25260;
                                            readonly name: "success";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 25252;
                                            readonly src: "7042:7:141";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bool";
                                                readonly typeString: "bool";
                                            };
                                        }, null];
                                        readonly id: 25261;
                                        readonly isConstant: false;
                                        readonly isInlineArray: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: true;
                                        readonly nodeType: "TupleExpression";
                                        readonly src: "7041:11:141";
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
                                            readonly id: 25269;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "string";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "7123:2:141";
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
                                                        readonly id: 25264;
                                                        readonly name: "_destination";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 25226;
                                                        readonly src: "7063:12:141";
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
                                                        readonly id: 25263;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: true;
                                                        readonly lValueRequested: false;
                                                        readonly nodeType: "ElementaryTypeNameExpression";
                                                        readonly src: "7055:8:141";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_type$_t_address_payable_$";
                                                            readonly typeString: "type(address payable)";
                                                        };
                                                        readonly typeName: {
                                                            readonly id: 25262;
                                                            readonly name: "address";
                                                            readonly nodeType: "ElementaryTypeName";
                                                            readonly src: "7055:8:141";
                                                            readonly stateMutability: "payable";
                                                            readonly typeDescriptions: {};
                                                        };
                                                    };
                                                    readonly id: 25265;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly kind: "typeConversion";
                                                    readonly lValueRequested: false;
                                                    readonly nameLocations: readonly [];
                                                    readonly names: readonly [];
                                                    readonly nodeType: "FunctionCall";
                                                    readonly src: "7055:21:141";
                                                    readonly tryCall: false;
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_address_payable";
                                                        readonly typeString: "address payable";
                                                    };
                                                };
                                                readonly id: 25266;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "7077:4:141";
                                                readonly memberName: "call";
                                                readonly nodeType: "MemberAccess";
                                                readonly src: "7055:26:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$";
                                                    readonly typeString: "function (bytes memory) payable returns (bool,bytes memory)";
                                                };
                                            };
                                            readonly id: 25268;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly names: readonly ["value"];
                                            readonly nodeType: "FunctionCallOptions";
                                            readonly options: readonly [{
                                                readonly id: 25267;
                                                readonly name: "withdrawValue";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 25242;
                                                readonly src: "7090:13:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            }];
                                            readonly src: "7055:50:141";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$value";
                                                readonly typeString: "function (bytes memory) payable returns (bool,bytes memory)";
                                            };
                                        };
                                        readonly id: 25270;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "7055:84:141";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_tuple$_t_bool_$_t_bytes_memory_ptr_$";
                                            readonly typeString: "tuple(bool,bytes memory)";
                                        };
                                    };
                                    readonly src: "7041:98:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 25272;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "7041:98:141";
                            }];
                        };
                    }, {
                        readonly condition: {
                            readonly id: 25285;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "UnaryOperation";
                            readonly operator: "!";
                            readonly prefix: true;
                            readonly src: "7252:8:141";
                            readonly subExpression: {
                                readonly id: 25284;
                                readonly name: "success";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25252;
                                readonly src: "7253:7:141";
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
                        readonly id: 25292;
                        readonly nodeType: "IfStatement";
                        readonly src: "7248:74:141";
                        readonly trueBody: {
                            readonly id: 25291;
                            readonly nodeType: "Block";
                            readonly src: "7262:60:141";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 25286;
                                            readonly name: "IHyperdrive";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 11143;
                                            readonly src: "7283:11:141";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$11143_$";
                                                readonly typeString: "type(contract IHyperdrive)";
                                            };
                                        };
                                        readonly id: 25288;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "7295:14:141";
                                        readonly memberName: "TransferFailed";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 11088;
                                        readonly src: "7283:26:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 25289;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "7283:28:141";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 25290;
                                readonly nodeType: "RevertStatement";
                                readonly src: "7276:35:141";
                            }];
                        };
                    }];
                };
                readonly baseFunctions: readonly [13572];
                readonly documentation: {
                    readonly id: 25222;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "6169:231:141";
                    readonly text: "@dev Process a withdrawal in vault shares and send the proceeds to the\n      destination.\n @param _shareAmount The amount of vault shares to withdraw.\n @param _destination The destination of the withdrawal.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_withdrawWithShares";
                readonly nameLocation: "6414:19:141";
                readonly overrides: {
                    readonly id: 25230;
                    readonly nodeType: "OverrideSpecifier";
                    readonly overrides: readonly [];
                    readonly src: "6543:8:141";
                };
                readonly parameters: {
                    readonly id: 25229;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25224;
                        readonly mutability: "mutable";
                        readonly name: "_shareAmount";
                        readonly nameLocation: "6451:12:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25294;
                        readonly src: "6443:20:141";
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
                            readonly src: "6443:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25226;
                        readonly mutability: "mutable";
                        readonly name: "_destination";
                        readonly nameLocation: "6481:12:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25294;
                        readonly src: "6473:20:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 25225;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6473:7:141";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25228;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25294;
                        readonly src: "6503:14:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_calldata_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 25227;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6503:5:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6433:100:141";
                };
                readonly returnParameters: {
                    readonly id: 25231;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "6552:0:141";
                };
                readonly scope: 25444;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 25317;
                readonly nodeType: "FunctionDefinition";
                readonly src: "7513:174:141";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25316;
                    readonly nodeType: "Block";
                    readonly src: "7566:121:141";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly id: 25308;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                                readonly id: 25303;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly arguments: readonly [{
                                        readonly id: 25300;
                                        readonly name: "_baseToken";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 18304;
                                        readonly src: "7588:10:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_IERC20_$10417";
                                            readonly typeString: "contract IERC20";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_contract$_IERC20_$10417";
                                            readonly typeString: "contract IERC20";
                                        }];
                                        readonly id: 25299;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "ElementaryTypeNameExpression";
                                        readonly src: "7580:7:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_address_$";
                                            readonly typeString: "type(address)";
                                        };
                                        readonly typeName: {
                                            readonly id: 25298;
                                            readonly name: "address";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "7580:7:141";
                                            readonly typeDescriptions: {};
                                        };
                                    };
                                    readonly id: 25301;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "typeConversion";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "7580:19:141";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "!=";
                                readonly rightExpression: {
                                    readonly id: 25302;
                                    readonly name: "ETH";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18778;
                                    readonly src: "7603:3:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly src: "7580:26:141";
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
                                readonly id: 25307;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly expression: {
                                        readonly id: 25304;
                                        readonly name: "msg";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -15;
                                        readonly src: "7610:3:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_magic_message";
                                            readonly typeString: "msg";
                                        };
                                    };
                                    readonly id: 25305;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "7614:5:141";
                                    readonly memberName: "value";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "7610:9:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: ">";
                                readonly rightExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 25306;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "7622:1:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly src: "7610:13:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly src: "7580:43:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 25315;
                        readonly nodeType: "IfStatement";
                        readonly src: "7576:105:141";
                        readonly trueBody: {
                            readonly id: 25314;
                            readonly nodeType: "Block";
                            readonly src: "7625:56:141";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 25309;
                                            readonly name: "IHyperdrive";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 11143;
                                            readonly src: "7646:11:141";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$11143_$";
                                                readonly typeString: "type(contract IHyperdrive)";
                                            };
                                        };
                                        readonly id: 25311;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "7658:10:141";
                                        readonly memberName: "NotPayable";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 11062;
                                        readonly src: "7646:22:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 25312;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "7646:24:141";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 25313;
                                readonly nodeType: "RevertStatement";
                                readonly src: "7639:31:141";
                            }];
                        };
                    }];
                };
                readonly baseFunctions: readonly [13576];
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_checkMessageValue";
                readonly nameLocation: "7522:18:141";
                readonly overrides: {
                    readonly id: 25296;
                    readonly nodeType: "OverrideSpecifier";
                    readonly overrides: readonly [];
                    readonly src: "7557:8:141";
                };
                readonly parameters: {
                    readonly id: 25295;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "7540:2:141";
                };
                readonly returnParameters: {
                    readonly id: 25297;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "7566:0:141";
                };
                readonly scope: 25444;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 25368;
                readonly nodeType: "FunctionDefinition";
                readonly src: "7848:460:141";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25367;
                    readonly nodeType: "Block";
                    readonly src: "7949:359:141";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [25327];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 25327;
                            readonly mutability: "mutable";
                            readonly name: "assets";
                            readonly nameLocation: "8027:6:141";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 25367;
                            readonly src: "8019:14:141";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 25326;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "8019:7:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 25328;
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "8019:14:141";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                            readonly id: 25334;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly arguments: readonly [{
                                    readonly id: 25331;
                                    readonly name: "_baseToken";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18304;
                                    readonly src: "8055:10:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IERC20_$10417";
                                        readonly typeString: "contract IERC20";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_contract$_IERC20_$10417";
                                        readonly typeString: "contract IERC20";
                                    }];
                                    readonly id: 25330;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "8047:7:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_address_$";
                                        readonly typeString: "type(address)";
                                    };
                                    readonly typeName: {
                                        readonly id: 25329;
                                        readonly name: "address";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "8047:7:141";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 25332;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "8047:19:141";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "==";
                            readonly rightExpression: {
                                readonly id: 25333;
                                readonly name: "ETH";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18778;
                                readonly src: "8070:3:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "8047:26:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly falseBody: {
                            readonly id: 25354;
                            readonly nodeType: "Block";
                            readonly src: "8136:69:141";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 25352;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 25344;
                                        readonly name: "assets";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 25327;
                                        readonly src: "8150:6:141";
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
                                                readonly id: 25349;
                                                readonly name: "this";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -28;
                                                readonly src: "8188:4:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$25444";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$25444";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                }];
                                                readonly id: 25348;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "8180:7:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_address_$";
                                                    readonly typeString: "type(address)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 25347;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "8180:7:141";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 25350;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "8180:13:141";
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
                                                readonly id: 25345;
                                                readonly name: "_baseToken";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 18304;
                                                readonly src: "8159:10:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_IERC20_$10417";
                                                    readonly typeString: "contract IERC20";
                                                };
                                            };
                                            readonly id: 25346;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "8170:9:141";
                                            readonly memberName: "balanceOf";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 10416;
                                            readonly src: "8159:20:141";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_external_view$_t_address_$returns$_t_uint256_$";
                                                readonly typeString: "function (address) view external returns (uint256)";
                                            };
                                        };
                                        readonly id: 25351;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "8159:35:141";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "8150:44:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 25353;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "8150:44:141";
                            }];
                        };
                        readonly id: 25355;
                        readonly nodeType: "IfStatement";
                        readonly src: "8043:162:141";
                        readonly trueBody: {
                            readonly id: 25343;
                            readonly nodeType: "Block";
                            readonly src: "8075:55:141";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 25341;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 25335;
                                        readonly name: "assets";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 25327;
                                        readonly src: "8089:6:141";
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
                                                readonly id: 25338;
                                                readonly name: "this";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -28;
                                                readonly src: "8106:4:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$25444";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$25444";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                }];
                                                readonly id: 25337;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "8098:7:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_address_$";
                                                    readonly typeString: "type(address)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 25336;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "8098:7:141";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 25339;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "8098:13:141";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        };
                                        readonly id: 25340;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "8112:7:141";
                                        readonly memberName: "balance";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "8098:21:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "8089:30:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 25342;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "8089:30:141";
                            }];
                        };
                    }, {
                        readonly expression: {
                            readonly condition: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 25358;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 25356;
                                    readonly name: "totalShares";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 24916;
                                    readonly src: "8234:11:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "!=";
                                readonly rightExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 25357;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "8249:1:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly src: "8234:16:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly falseExpression: {
                                readonly hexValue: "30";
                                readonly id: 25364;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "8300:1:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly id: 25365;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "Conditional";
                            readonly src: "8234:67:141";
                            readonly trueExpression: {
                                readonly arguments: readonly [{
                                    readonly id: 25361;
                                    readonly name: "assets";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25327;
                                    readonly src: "8277:6:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 25362;
                                    readonly name: "totalShares";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 24916;
                                    readonly src: "8285:11:141";
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
                                        readonly id: 25359;
                                        readonly name: "_shareAmount";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 25320;
                                        readonly src: "8253:12:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 25360;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "8266:10:141";
                                    readonly memberName: "mulDivDown";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 18834;
                                    readonly src: "8253:23:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                    };
                                };
                                readonly id: 25363;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "8253:44:141";
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
                        readonly functionReturnParameters: 25325;
                        readonly id: 25366;
                        readonly nodeType: "Return";
                        readonly src: "8215:86:141";
                    }];
                };
                readonly baseFunctions: readonly [13606];
                readonly documentation: {
                    readonly id: 25318;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "7693:150:141";
                    readonly text: "@dev Convert an amount of vault shares to an amount of base.\n @param _shareAmount The vault shares amount.\n @return The base amount.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_convertToBase";
                readonly nameLocation: "7857:14:141";
                readonly overrides: {
                    readonly id: 25322;
                    readonly nodeType: "OverrideSpecifier";
                    readonly overrides: readonly [];
                    readonly src: "7922:8:141";
                };
                readonly parameters: {
                    readonly id: 25321;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25320;
                        readonly mutability: "mutable";
                        readonly name: "_shareAmount";
                        readonly nameLocation: "7889:12:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25368;
                        readonly src: "7881:20:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25319;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7881:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7871:36:141";
                };
                readonly returnParameters: {
                    readonly id: 25325;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25324;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25368;
                        readonly src: "7940:7:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25323;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7940:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7939:9:141";
                };
                readonly scope: 25444;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 25414;
                readonly nodeType: "FunctionDefinition";
                readonly src: "8468:425:141";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25413;
                    readonly nodeType: "Block";
                    readonly src: "8570:323:141";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [25378];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 25378;
                            readonly mutability: "mutable";
                            readonly name: "assets";
                            readonly nameLocation: "8648:6:141";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 25413;
                            readonly src: "8640:14:141";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 25377;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "8640:7:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 25379;
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "8640:14:141";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                            readonly id: 25385;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly arguments: readonly [{
                                    readonly id: 25382;
                                    readonly name: "_baseToken";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18304;
                                    readonly src: "8676:10:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IERC20_$10417";
                                        readonly typeString: "contract IERC20";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_contract$_IERC20_$10417";
                                        readonly typeString: "contract IERC20";
                                    }];
                                    readonly id: 25381;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "8668:7:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_address_$";
                                        readonly typeString: "type(address)";
                                    };
                                    readonly typeName: {
                                        readonly id: 25380;
                                        readonly name: "address";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "8668:7:141";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 25383;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "8668:19:141";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "==";
                            readonly rightExpression: {
                                readonly id: 25384;
                                readonly name: "ETH";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18778;
                                readonly src: "8691:3:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "8668:26:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly falseBody: {
                            readonly id: 25405;
                            readonly nodeType: "Block";
                            readonly src: "8757:69:141";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 25403;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 25395;
                                        readonly name: "assets";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 25378;
                                        readonly src: "8771:6:141";
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
                                                readonly id: 25400;
                                                readonly name: "this";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -28;
                                                readonly src: "8809:4:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$25444";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$25444";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                }];
                                                readonly id: 25399;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "8801:7:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_address_$";
                                                    readonly typeString: "type(address)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 25398;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "8801:7:141";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 25401;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "8801:13:141";
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
                                                readonly id: 25396;
                                                readonly name: "_baseToken";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 18304;
                                                readonly src: "8780:10:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_IERC20_$10417";
                                                    readonly typeString: "contract IERC20";
                                                };
                                            };
                                            readonly id: 25397;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "8791:9:141";
                                            readonly memberName: "balanceOf";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 10416;
                                            readonly src: "8780:20:141";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_external_view$_t_address_$returns$_t_uint256_$";
                                                readonly typeString: "function (address) view external returns (uint256)";
                                            };
                                        };
                                        readonly id: 25402;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "8780:35:141";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "8771:44:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 25404;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "8771:44:141";
                            }];
                        };
                        readonly id: 25406;
                        readonly nodeType: "IfStatement";
                        readonly src: "8664:162:141";
                        readonly trueBody: {
                            readonly id: 25394;
                            readonly nodeType: "Block";
                            readonly src: "8696:55:141";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 25392;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 25386;
                                        readonly name: "assets";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 25378;
                                        readonly src: "8710:6:141";
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
                                                readonly id: 25389;
                                                readonly name: "this";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -28;
                                                readonly src: "8727:4:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$25444";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$25444";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                }];
                                                readonly id: 25388;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "8719:7:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_address_$";
                                                    readonly typeString: "type(address)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 25387;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "8719:7:141";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 25390;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "8719:13:141";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        };
                                        readonly id: 25391;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "8733:7:141";
                                        readonly memberName: "balance";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "8719:21:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "8710:30:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 25393;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "8710:30:141";
                            }];
                        };
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 25409;
                                readonly name: "totalShares";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24916;
                                readonly src: "8866:11:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 25410;
                                readonly name: "assets";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25378;
                                readonly src: "8879:6:141";
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
                                    readonly id: 25407;
                                    readonly name: "_baseAmount";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25371;
                                    readonly src: "8843:11:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 25408;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "8855:10:141";
                                readonly memberName: "mulDivDown";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 18834;
                                readonly src: "8843:22:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 25411;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "8843:43:141";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 25376;
                        readonly id: 25412;
                        readonly nodeType: "Return";
                        readonly src: "8836:50:141";
                    }];
                };
                readonly baseFunctions: readonly [13614];
                readonly documentation: {
                    readonly id: 25369;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "8314:149:141";
                    readonly text: "@dev Convert an amount of base to an amount of vault shares.\n @param _baseAmount The base amount.\n @return The vault shares amount.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_convertToShares";
                readonly nameLocation: "8477:16:141";
                readonly overrides: {
                    readonly id: 25373;
                    readonly nodeType: "OverrideSpecifier";
                    readonly overrides: readonly [];
                    readonly src: "8543:8:141";
                };
                readonly parameters: {
                    readonly id: 25372;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25371;
                        readonly mutability: "mutable";
                        readonly name: "_baseAmount";
                        readonly nameLocation: "8511:11:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25414;
                        readonly src: "8503:19:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25370;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8503:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "8493:35:141";
                };
                readonly returnParameters: {
                    readonly id: 25376;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25375;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25414;
                        readonly src: "8561:7:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25374;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8561:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "8560:9:141";
                };
                readonly scope: 25444;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 25430;
                readonly nodeType: "FunctionDefinition";
                readonly src: "9013:122:141";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25429;
                    readonly nodeType: "Block";
                    readonly src: "9076:59:141";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 25425;
                                    readonly name: "this";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -28;
                                    readonly src: "9122:4:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$25444";
                                        readonly typeString: "contract MockHyperdriveBase";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$25444";
                                        readonly typeString: "contract MockHyperdriveBase";
                                    }];
                                    readonly id: 25424;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "9114:7:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_address_$";
                                        readonly typeString: "type(address)";
                                    };
                                    readonly typeName: {
                                        readonly id: 25423;
                                        readonly name: "address";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "9114:7:141";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 25426;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "9114:13:141";
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
                                    readonly id: 25421;
                                    readonly name: "_baseToken";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18304;
                                    readonly src: "9093:10:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IERC20_$10417";
                                        readonly typeString: "contract IERC20";
                                    };
                                };
                                readonly id: 25422;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "9104:9:141";
                                readonly memberName: "balanceOf";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10416;
                                readonly src: "9093:20:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_view$_t_address_$returns$_t_uint256_$";
                                    readonly typeString: "function (address) view external returns (uint256)";
                                };
                            };
                            readonly id: 25427;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9093:35:141";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 25420;
                        readonly id: 25428;
                        readonly nodeType: "Return";
                        readonly src: "9086:42:141";
                    }];
                };
                readonly baseFunctions: readonly [13620];
                readonly documentation: {
                    readonly id: 25415;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "8899:109:141";
                    readonly text: "@dev Gets the total amount of base held by the pool.\n @return baseAmount The total amount of base.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_totalBase";
                readonly nameLocation: "9022:10:141";
                readonly overrides: {
                    readonly id: 25417;
                    readonly nodeType: "OverrideSpecifier";
                    readonly overrides: readonly [];
                    readonly src: "9049:8:141";
                };
                readonly parameters: {
                    readonly id: 25416;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "9032:2:141";
                };
                readonly returnParameters: {
                    readonly id: 25420;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25419;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25430;
                        readonly src: "9067:7:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25418;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9067:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "9066:9:141";
                };
                readonly scope: 25444;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 25443;
                readonly nodeType: "FunctionDefinition";
                readonly src: "9293:167:141";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25442;
                    readonly nodeType: "Block";
                    readonly src: "9406:54:141";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [];
                                readonly expression: {
                                    readonly argumentTypes: readonly [];
                                    readonly id: 25438;
                                    readonly name: "_totalBase";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [25430];
                                    readonly referencedDeclaration: 25430;
                                    readonly src: "9440:10:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_view$__$returns$_t_uint256_$";
                                        readonly typeString: "function () view returns (uint256)";
                                    };
                                };
                                readonly id: 25439;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "9440:12:141";
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
                                readonly id: 25437;
                                readonly name: "_convertToShares";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [25414];
                                readonly referencedDeclaration: 25414;
                                readonly src: "9423:16:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256) view returns (uint256)";
                                };
                            };
                            readonly id: 25440;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9423:30:141";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 25436;
                        readonly id: 25441;
                        readonly nodeType: "Return";
                        readonly src: "9416:37:141";
                    }];
                };
                readonly baseFunctions: readonly [13626];
                readonly documentation: {
                    readonly id: 25431;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "9141:147:141";
                    readonly text: "@dev Gets the total amount of shares held by the pool in the yield\n      source.\n @return shareAmount The total amount of shares.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_totalShares";
                readonly nameLocation: "9302:12:141";
                readonly overrides: {
                    readonly id: 25433;
                    readonly nodeType: "OverrideSpecifier";
                    readonly overrides: readonly [];
                    readonly src: "9355:8:141";
                };
                readonly parameters: {
                    readonly id: 25432;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "9314:2:141";
                };
                readonly returnParameters: {
                    readonly id: 25436;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25435;
                        readonly mutability: "mutable";
                        readonly name: "shareAmount";
                        readonly nameLocation: "9389:11:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25443;
                        readonly src: "9381:19:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25434;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9381:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "9380:21:141";
                };
                readonly scope: 25444;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "internal";
            }];
            readonly abstract: true;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 24910;
                    readonly name: "HyperdriveBase";
                    readonly nameLocations: readonly ["1669:14:141"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 14511;
                    readonly src: "1669:14:141";
                };
                readonly id: 24911;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "1669:14:141";
            }];
            readonly canonicalName: "MockHyperdriveBase";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly fullyImplemented: false;
            readonly linearizedBaseContracts: readonly [25444, 14511, 18497, 72173, 11666, 12232];
            readonly name: "MockHyperdriveBase";
            readonly nameLocation: "1647:18:141";
            readonly scope: 25863;
            readonly usedErrors: readonly [72118];
            readonly usedEvents: readonly [11486, 11501, 11520, 11535, 11552, 11571, 11590, 11611, 11624, 11631, 11636, 11641, 11646, 11653, 11658, 11665, 12213, 12222, 12231];
        }, {
            readonly id: 25773;
            readonly nodeType: "ContractDefinition";
            readonly src: "9464:4336:141";
            readonly nodes: readonly [{
                readonly id: 25451;
                readonly nodeType: "UsingForDirective";
                readonly src: "9528:33:141";
                readonly nodes: readonly [];
                readonly global: false;
                readonly libraryName: {
                    readonly id: 25449;
                    readonly name: "FixedPointMath";
                    readonly nameLocations: readonly ["9534:14:141"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 19572;
                    readonly src: "9534:14:141";
                };
                readonly typeName: {
                    readonly id: 25450;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "9553:7:141";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
            }, {
                readonly id: 25501;
                readonly nodeType: "FunctionDefinition";
                readonly src: "9567:406:141";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25500;
                    readonly nodeType: "Block";
                    readonly src: "9971:2:141";
                    readonly nodes: readonly [];
                    readonly statements: readonly [];
                };
                readonly implemented: true;
                readonly kind: "constructor";
                readonly modifiers: readonly [{
                    readonly arguments: readonly [{
                        readonly id: 25457;
                        readonly name: "_config";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 25454;
                        readonly src: "9664:7:141";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10934_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig memory";
                        };
                    }, {
                        readonly arguments: readonly [{
                            readonly arguments: readonly [{
                                readonly id: 25463;
                                readonly name: "_config";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25454;
                                readonly src: "9719:7:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_PoolConfig_$10934_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_PoolConfig_$10934_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                }];
                                readonly id: 25462;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "NewExpression";
                                readonly src: "9693:25:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_creation_nonpayable$_t_struct$_PoolConfig_$10934_memory_ptr_$returns$_t_contract$_MockHyperdriveTarget0_$25802_$";
                                    readonly typeString: "function (struct IHyperdrive.PoolConfig memory) returns (contract MockHyperdriveTarget0)";
                                };
                                readonly typeName: {
                                    readonly id: 25461;
                                    readonly nodeType: "UserDefinedTypeName";
                                    readonly pathNode: {
                                        readonly id: 25460;
                                        readonly name: "MockHyperdriveTarget0";
                                        readonly nameLocations: readonly ["9697:21:141"];
                                        readonly nodeType: "IdentifierPath";
                                        readonly referencedDeclaration: 25802;
                                        readonly src: "9697:21:141";
                                    };
                                    readonly referencedDeclaration: 25802;
                                    readonly src: "9697:21:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_MockHyperdriveTarget0_$25802";
                                        readonly typeString: "contract MockHyperdriveTarget0";
                                    };
                                };
                            };
                            readonly id: 25464;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9693:34:141";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_MockHyperdriveTarget0_$25802";
                                readonly typeString: "contract MockHyperdriveTarget0";
                            };
                        }];
                        readonly expression: {
                            readonly argumentTypes: readonly [{
                                readonly typeIdentifier: "t_contract$_MockHyperdriveTarget0_$25802";
                                readonly typeString: "contract MockHyperdriveTarget0";
                            }];
                            readonly id: 25459;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly lValueRequested: false;
                            readonly nodeType: "ElementaryTypeNameExpression";
                            readonly src: "9685:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_type$_t_address_$";
                                readonly typeString: "type(address)";
                            };
                            readonly typeName: {
                                readonly id: 25458;
                                readonly name: "address";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "9685:7:141";
                                readonly typeDescriptions: {};
                            };
                        };
                        readonly id: 25465;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: false;
                        readonly kind: "typeConversion";
                        readonly lValueRequested: false;
                        readonly nameLocations: readonly [];
                        readonly names: readonly [];
                        readonly nodeType: "FunctionCall";
                        readonly src: "9685:43:141";
                        readonly tryCall: false;
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    }, {
                        readonly arguments: readonly [{
                            readonly arguments: readonly [{
                                readonly id: 25471;
                                readonly name: "_config";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25454;
                                readonly src: "9776:7:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_PoolConfig_$10934_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_PoolConfig_$10934_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                }];
                                readonly id: 25470;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "NewExpression";
                                readonly src: "9750:25:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_creation_nonpayable$_t_struct$_PoolConfig_$10934_memory_ptr_$returns$_t_contract$_MockHyperdriveTarget1_$25817_$";
                                    readonly typeString: "function (struct IHyperdrive.PoolConfig memory) returns (contract MockHyperdriveTarget1)";
                                };
                                readonly typeName: {
                                    readonly id: 25469;
                                    readonly nodeType: "UserDefinedTypeName";
                                    readonly pathNode: {
                                        readonly id: 25468;
                                        readonly name: "MockHyperdriveTarget1";
                                        readonly nameLocations: readonly ["9754:21:141"];
                                        readonly nodeType: "IdentifierPath";
                                        readonly referencedDeclaration: 25817;
                                        readonly src: "9754:21:141";
                                    };
                                    readonly referencedDeclaration: 25817;
                                    readonly src: "9754:21:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_MockHyperdriveTarget1_$25817";
                                        readonly typeString: "contract MockHyperdriveTarget1";
                                    };
                                };
                            };
                            readonly id: 25472;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9750:34:141";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_MockHyperdriveTarget1_$25817";
                                readonly typeString: "contract MockHyperdriveTarget1";
                            };
                        }];
                        readonly expression: {
                            readonly argumentTypes: readonly [{
                                readonly typeIdentifier: "t_contract$_MockHyperdriveTarget1_$25817";
                                readonly typeString: "contract MockHyperdriveTarget1";
                            }];
                            readonly id: 25467;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly lValueRequested: false;
                            readonly nodeType: "ElementaryTypeNameExpression";
                            readonly src: "9742:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_type$_t_address_$";
                                readonly typeString: "type(address)";
                            };
                            readonly typeName: {
                                readonly id: 25466;
                                readonly name: "address";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "9742:7:141";
                                readonly typeDescriptions: {};
                            };
                        };
                        readonly id: 25473;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: false;
                        readonly kind: "typeConversion";
                        readonly lValueRequested: false;
                        readonly nameLocations: readonly [];
                        readonly names: readonly [];
                        readonly nodeType: "FunctionCall";
                        readonly src: "9742:43:141";
                        readonly tryCall: false;
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    }, {
                        readonly arguments: readonly [{
                            readonly arguments: readonly [{
                                readonly id: 25479;
                                readonly name: "_config";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25454;
                                readonly src: "9833:7:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_PoolConfig_$10934_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_PoolConfig_$10934_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                }];
                                readonly id: 25478;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "NewExpression";
                                readonly src: "9807:25:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_creation_nonpayable$_t_struct$_PoolConfig_$10934_memory_ptr_$returns$_t_contract$_MockHyperdriveTarget2_$25832_$";
                                    readonly typeString: "function (struct IHyperdrive.PoolConfig memory) returns (contract MockHyperdriveTarget2)";
                                };
                                readonly typeName: {
                                    readonly id: 25477;
                                    readonly nodeType: "UserDefinedTypeName";
                                    readonly pathNode: {
                                        readonly id: 25476;
                                        readonly name: "MockHyperdriveTarget2";
                                        readonly nameLocations: readonly ["9811:21:141"];
                                        readonly nodeType: "IdentifierPath";
                                        readonly referencedDeclaration: 25832;
                                        readonly src: "9811:21:141";
                                    };
                                    readonly referencedDeclaration: 25832;
                                    readonly src: "9811:21:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_MockHyperdriveTarget2_$25832";
                                        readonly typeString: "contract MockHyperdriveTarget2";
                                    };
                                };
                            };
                            readonly id: 25480;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9807:34:141";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_MockHyperdriveTarget2_$25832";
                                readonly typeString: "contract MockHyperdriveTarget2";
                            };
                        }];
                        readonly expression: {
                            readonly argumentTypes: readonly [{
                                readonly typeIdentifier: "t_contract$_MockHyperdriveTarget2_$25832";
                                readonly typeString: "contract MockHyperdriveTarget2";
                            }];
                            readonly id: 25475;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly lValueRequested: false;
                            readonly nodeType: "ElementaryTypeNameExpression";
                            readonly src: "9799:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_type$_t_address_$";
                                readonly typeString: "type(address)";
                            };
                            readonly typeName: {
                                readonly id: 25474;
                                readonly name: "address";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "9799:7:141";
                                readonly typeDescriptions: {};
                            };
                        };
                        readonly id: 25481;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: false;
                        readonly kind: "typeConversion";
                        readonly lValueRequested: false;
                        readonly nameLocations: readonly [];
                        readonly names: readonly [];
                        readonly nodeType: "FunctionCall";
                        readonly src: "9799:43:141";
                        readonly tryCall: false;
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    }, {
                        readonly arguments: readonly [{
                            readonly arguments: readonly [{
                                readonly id: 25487;
                                readonly name: "_config";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25454;
                                readonly src: "9890:7:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_PoolConfig_$10934_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_PoolConfig_$10934_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                }];
                                readonly id: 25486;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "NewExpression";
                                readonly src: "9864:25:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_creation_nonpayable$_t_struct$_PoolConfig_$10934_memory_ptr_$returns$_t_contract$_MockHyperdriveTarget3_$25847_$";
                                    readonly typeString: "function (struct IHyperdrive.PoolConfig memory) returns (contract MockHyperdriveTarget3)";
                                };
                                readonly typeName: {
                                    readonly id: 25485;
                                    readonly nodeType: "UserDefinedTypeName";
                                    readonly pathNode: {
                                        readonly id: 25484;
                                        readonly name: "MockHyperdriveTarget3";
                                        readonly nameLocations: readonly ["9868:21:141"];
                                        readonly nodeType: "IdentifierPath";
                                        readonly referencedDeclaration: 25847;
                                        readonly src: "9868:21:141";
                                    };
                                    readonly referencedDeclaration: 25847;
                                    readonly src: "9868:21:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_MockHyperdriveTarget3_$25847";
                                        readonly typeString: "contract MockHyperdriveTarget3";
                                    };
                                };
                            };
                            readonly id: 25488;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9864:34:141";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_MockHyperdriveTarget3_$25847";
                                readonly typeString: "contract MockHyperdriveTarget3";
                            };
                        }];
                        readonly expression: {
                            readonly argumentTypes: readonly [{
                                readonly typeIdentifier: "t_contract$_MockHyperdriveTarget3_$25847";
                                readonly typeString: "contract MockHyperdriveTarget3";
                            }];
                            readonly id: 25483;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly lValueRequested: false;
                            readonly nodeType: "ElementaryTypeNameExpression";
                            readonly src: "9856:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_type$_t_address_$";
                                readonly typeString: "type(address)";
                            };
                            readonly typeName: {
                                readonly id: 25482;
                                readonly name: "address";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "9856:7:141";
                                readonly typeDescriptions: {};
                            };
                        };
                        readonly id: 25489;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: false;
                        readonly kind: "typeConversion";
                        readonly lValueRequested: false;
                        readonly nameLocations: readonly [];
                        readonly names: readonly [];
                        readonly nodeType: "FunctionCall";
                        readonly src: "9856:43:141";
                        readonly tryCall: false;
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    }, {
                        readonly arguments: readonly [{
                            readonly arguments: readonly [{
                                readonly id: 25495;
                                readonly name: "_config";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25454;
                                readonly src: "9947:7:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_PoolConfig_$10934_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_PoolConfig_$10934_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                }];
                                readonly id: 25494;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "NewExpression";
                                readonly src: "9921:25:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_creation_nonpayable$_t_struct$_PoolConfig_$10934_memory_ptr_$returns$_t_contract$_MockHyperdriveTarget4_$25862_$";
                                    readonly typeString: "function (struct IHyperdrive.PoolConfig memory) returns (contract MockHyperdriveTarget4)";
                                };
                                readonly typeName: {
                                    readonly id: 25493;
                                    readonly nodeType: "UserDefinedTypeName";
                                    readonly pathNode: {
                                        readonly id: 25492;
                                        readonly name: "MockHyperdriveTarget4";
                                        readonly nameLocations: readonly ["9925:21:141"];
                                        readonly nodeType: "IdentifierPath";
                                        readonly referencedDeclaration: 25862;
                                        readonly src: "9925:21:141";
                                    };
                                    readonly referencedDeclaration: 25862;
                                    readonly src: "9925:21:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_MockHyperdriveTarget4_$25862";
                                        readonly typeString: "contract MockHyperdriveTarget4";
                                    };
                                };
                            };
                            readonly id: 25496;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9921:34:141";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_MockHyperdriveTarget4_$25862";
                                readonly typeString: "contract MockHyperdriveTarget4";
                            };
                        }];
                        readonly expression: {
                            readonly argumentTypes: readonly [{
                                readonly typeIdentifier: "t_contract$_MockHyperdriveTarget4_$25862";
                                readonly typeString: "contract MockHyperdriveTarget4";
                            }];
                            readonly id: 25491;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly lValueRequested: false;
                            readonly nodeType: "ElementaryTypeNameExpression";
                            readonly src: "9913:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_type$_t_address_$";
                                readonly typeString: "type(address)";
                            };
                            readonly typeName: {
                                readonly id: 25490;
                                readonly name: "address";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "9913:7:141";
                                readonly typeDescriptions: {};
                            };
                        };
                        readonly id: 25497;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: false;
                        readonly kind: "typeConversion";
                        readonly lValueRequested: false;
                        readonly nameLocations: readonly [];
                        readonly names: readonly [];
                        readonly nodeType: "FunctionCall";
                        readonly src: "9913:43:141";
                        readonly tryCall: false;
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    }];
                    readonly id: 25498;
                    readonly kind: "baseConstructorSpecifier";
                    readonly modifierName: {
                        readonly id: 25456;
                        readonly name: "Hyperdrive";
                        readonly nameLocations: readonly ["9640:10:141"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 4609;
                        readonly src: "9640:10:141";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "9640:326:141";
                }];
                readonly name: "";
                readonly nameLocation: "-1:-1:-1";
                readonly parameters: {
                    readonly id: 25455;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25454;
                        readonly mutability: "mutable";
                        readonly name: "_config";
                        readonly nameLocation: "9618:7:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25501;
                        readonly src: "9588:37:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10934_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig";
                        };
                        readonly typeName: {
                            readonly id: 25453;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 25452;
                                readonly name: "IHyperdrive.PoolConfig";
                                readonly nameLocations: readonly ["9588:11:141", "9600:10:141"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10934;
                                readonly src: "9588:22:141";
                            };
                            readonly referencedDeclaration: 10934;
                            readonly src: "9588:22:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolConfig_$10934_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "9578:53:141";
                };
                readonly returnParameters: {
                    readonly id: 25499;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "9971:0:141";
                };
                readonly scope: 25773;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "public";
            }, {
                readonly id: 25513;
                readonly nodeType: "FunctionDefinition";
                readonly src: "9998:138:141";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25512;
                    readonly nodeType: "Block";
                    readonly src: "10091:45:141";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 25510;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 25508;
                                readonly name: "_marketState";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18338;
                                readonly src: "10101:12:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_MarketState_$10829_storage";
                                    readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 25509;
                                readonly name: "_marketState_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25505;
                                readonly src: "10116:13:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_MarketState_$10829_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.MarketState memory";
                                };
                            };
                            readonly src: "10101:28:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_MarketState_$10829_storage";
                                readonly typeString: "struct IHyperdrive.MarketState storage ref";
                            };
                        };
                        readonly id: 25511;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "10101:28:141";
                    }];
                };
                readonly documentation: {
                    readonly id: 25502;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "9979:14:141";
                    readonly text: "Mocks ///";
                };
                readonly functionSelector: "f45cf2e0";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "setMarketState";
                readonly nameLocation: "10007:14:141";
                readonly parameters: {
                    readonly id: 25506;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25505;
                        readonly mutability: "mutable";
                        readonly name: "_marketState_";
                        readonly nameLocation: "10062:13:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25513;
                        readonly src: "10031:44:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_MarketState_$10829_memory_ptr";
                            readonly typeString: "struct IHyperdrive.MarketState";
                        };
                        readonly typeName: {
                            readonly id: 25504;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 25503;
                                readonly name: "IHyperdrive.MarketState";
                                readonly nameLocations: readonly ["10031:11:141", "10043:11:141"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10829;
                                readonly src: "10031:23:141";
                            };
                            readonly referencedDeclaration: 10829;
                            readonly src: "10031:23:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_MarketState_$10829_storage_ptr";
                                readonly typeString: "struct IHyperdrive.MarketState";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "10021:60:141";
                };
                readonly returnParameters: {
                    readonly id: 25507;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "10091:0:141";
                };
                readonly scope: 25773;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 25523;
                readonly nodeType: "FunctionDefinition";
                readonly src: "10142:98:141";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25522;
                    readonly nodeType: "Block";
                    readonly src: "10197:43:141";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 25520;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 25518;
                                readonly name: "totalShares";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24916;
                                readonly src: "10207:11:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 25519;
                                readonly name: "_totalShares";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25515;
                                readonly src: "10221:12:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "10207:26:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 25521;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "10207:26:141";
                    }];
                };
                readonly functionSelector: "a77384c1";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "setTotalShares";
                readonly nameLocation: "10151:14:141";
                readonly parameters: {
                    readonly id: 25516;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25515;
                        readonly mutability: "mutable";
                        readonly name: "_totalShares";
                        readonly nameLocation: "10174:12:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25523;
                        readonly src: "10166:20:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25514;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "10166:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "10165:22:141";
                };
                readonly returnParameters: {
                    readonly id: 25517;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "10197:0:141";
                };
                readonly scope: 25773;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 25591;
                readonly nodeType: "FunctionDefinition";
                readonly src: "10372:566:141";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25590;
                    readonly nodeType: "Block";
                    readonly src: "10423:515:141";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [null, 25531];
                        readonly declarations: readonly [null, {
                            readonly constant: false;
                            readonly id: 25531;
                            readonly mutability: "mutable";
                            readonly name: "interest";
                            readonly nameLocation: "10443:8:141";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 25590;
                            readonly src: "10436:15:141";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                            readonly typeName: {
                                readonly id: 25530;
                                readonly name: "int256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "10436:6:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 25544;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly id: 25538;
                                        readonly name: "this";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -28;
                                        readonly src: "10539:4:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_MockHyperdrive_$25773";
                                            readonly typeString: "contract MockHyperdrive";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_contract$_MockHyperdrive_$25773";
                                            readonly typeString: "contract MockHyperdrive";
                                        }];
                                        readonly id: 25537;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "ElementaryTypeNameExpression";
                                        readonly src: "10531:7:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_address_$";
                                            readonly typeString: "type(address)";
                                        };
                                        readonly typeName: {
                                            readonly id: 25536;
                                            readonly name: "address";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "10531:7:141";
                                            readonly typeDescriptions: {};
                                        };
                                    };
                                    readonly id: 25539;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "typeConversion";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "10531:13:141";
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
                                        readonly id: 25534;
                                        readonly name: "_baseToken";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 18304;
                                        readonly src: "10510:10:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_IERC20_$10417";
                                            readonly typeString: "contract IERC20";
                                        };
                                    };
                                    readonly id: 25535;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "10521:9:141";
                                    readonly memberName: "balanceOf";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 10416;
                                    readonly src: "10510:20:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_view$_t_address_$returns$_t_uint256_$";
                                        readonly typeString: "function (address) view external returns (uint256)";
                                    };
                                };
                                readonly id: 25540;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "10510:35:141";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 25541;
                                readonly name: "apr";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25527;
                                readonly src: "10559:3:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            }, {
                                readonly id: 25542;
                                readonly name: "time";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25525;
                                readonly src: "10576:4:141";
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
                                    readonly id: 25532;
                                    readonly name: "HyperdriveUtils";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 161566;
                                    readonly src: "10455:15:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_HyperdriveUtils_$161566_$";
                                        readonly typeString: "type(library HyperdriveUtils)";
                                    };
                                };
                                readonly id: 25533;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "10471:25:141";
                                readonly memberName: "calculateCompoundInterest";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 159394;
                                readonly src: "10455:41:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_int256_$_t_uint256_$returns$_t_uint256_$_t_int256_$";
                                    readonly typeString: "function (uint256,int256,uint256) pure returns (uint256,int256)";
                                };
                            };
                            readonly id: 25543;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "10455:135:141";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_uint256_$_t_int256_$";
                                readonly typeString: "tuple(uint256,int256)";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "10433:157:141";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                            readonly id: 25547;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 25545;
                                readonly name: "interest";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25531;
                                readonly src: "10605:8:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: ">";
                            readonly rightExpression: {
                                readonly hexValue: "30";
                                readonly id: 25546;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "10616:1:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly src: "10605:12:141";
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
                                readonly id: 25568;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 25566;
                                    readonly name: "interest";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25531;
                                    readonly src: "10773:8:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "<";
                                readonly rightExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 25567;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "10784:1:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly src: "10773:12:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly id: 25588;
                            readonly nodeType: "IfStatement";
                            readonly src: "10769:163:141";
                            readonly trueBody: {
                                readonly id: 25587;
                                readonly nodeType: "Block";
                                readonly src: "10787:145:141";
                                readonly statements: readonly [{
                                    readonly expression: {
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [{
                                                readonly id: 25578;
                                                readonly name: "this";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -28;
                                                readonly src: "10866:4:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_MockHyperdrive_$25773";
                                                    readonly typeString: "contract MockHyperdrive";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_contract$_MockHyperdrive_$25773";
                                                    readonly typeString: "contract MockHyperdrive";
                                                }];
                                                readonly id: 25577;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "10858:7:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_address_$";
                                                    readonly typeString: "type(address)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 25576;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "10858:7:141";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 25579;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "10858:13:141";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly id: 25583;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "UnaryOperation";
                                                readonly operator: "-";
                                                readonly prefix: true;
                                                readonly src: "10897:9:141";
                                                readonly subExpression: {
                                                    readonly id: 25582;
                                                    readonly name: "interest";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 25531;
                                                    readonly src: "10898:8:141";
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
                                                readonly id: 25581;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "10889:7:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_uint256_$";
                                                    readonly typeString: "type(uint256)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 25580;
                                                    readonly name: "uint256";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "10889:7:141";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 25584;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "10889:18:141";
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
                                                        readonly id: 25572;
                                                        readonly name: "_baseToken";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 18304;
                                                        readonly src: "10823:10:141";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_contract$_IERC20_$10417";
                                                            readonly typeString: "contract IERC20";
                                                        };
                                                    }];
                                                    readonly expression: {
                                                        readonly argumentTypes: readonly [{
                                                            readonly typeIdentifier: "t_contract$_IERC20_$10417";
                                                            readonly typeString: "contract IERC20";
                                                        }];
                                                        readonly id: 25571;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: true;
                                                        readonly lValueRequested: false;
                                                        readonly nodeType: "ElementaryTypeNameExpression";
                                                        readonly src: "10815:7:141";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_type$_t_address_$";
                                                            readonly typeString: "type(address)";
                                                        };
                                                        readonly typeName: {
                                                            readonly id: 25570;
                                                            readonly name: "address";
                                                            readonly nodeType: "ElementaryTypeName";
                                                            readonly src: "10815:7:141";
                                                            readonly typeDescriptions: {};
                                                        };
                                                    };
                                                    readonly id: 25573;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly kind: "typeConversion";
                                                    readonly lValueRequested: false;
                                                    readonly nameLocations: readonly [];
                                                    readonly names: readonly [];
                                                    readonly nodeType: "FunctionCall";
                                                    readonly src: "10815:19:141";
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
                                                    readonly id: 25569;
                                                    readonly name: "ERC20Mintable";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 24109;
                                                    readonly src: "10801:13:141";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_contract$_ERC20Mintable_$24109_$";
                                                        readonly typeString: "type(contract ERC20Mintable)";
                                                    };
                                                };
                                                readonly id: 25574;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly kind: "typeConversion";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "10801:34:141";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_ERC20Mintable_$24109";
                                                    readonly typeString: "contract ERC20Mintable";
                                                };
                                            };
                                            readonly id: 25575;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "10836:4:141";
                                            readonly memberName: "burn";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 24108;
                                            readonly src: "10801:39:141";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$__$";
                                                readonly typeString: "function (address,uint256) external";
                                            };
                                        };
                                        readonly id: 25585;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "10801:120:141";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_tuple$__$";
                                            readonly typeString: "tuple()";
                                        };
                                    };
                                    readonly id: 25586;
                                    readonly nodeType: "ExpressionStatement";
                                    readonly src: "10801:120:141";
                                }];
                            };
                        };
                        readonly id: 25589;
                        readonly nodeType: "IfStatement";
                        readonly src: "10601:331:141";
                        readonly trueBody: {
                            readonly id: 25565;
                            readonly nodeType: "Block";
                            readonly src: "10619:144:141";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly id: 25557;
                                            readonly name: "this";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -28;
                                            readonly src: "10698:4:141";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_contract$_MockHyperdrive_$25773";
                                                readonly typeString: "contract MockHyperdrive";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_contract$_MockHyperdrive_$25773";
                                                readonly typeString: "contract MockHyperdrive";
                                            }];
                                            readonly id: 25556;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "10690:7:141";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_address_$";
                                                readonly typeString: "type(address)";
                                            };
                                            readonly typeName: {
                                                readonly id: 25555;
                                                readonly name: "address";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "10690:7:141";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 25558;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "10690:13:141";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly id: 25561;
                                            readonly name: "interest";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 25531;
                                            readonly src: "10729:8:141";
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
                                            readonly id: 25560;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "10721:7:141";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_uint256_$";
                                                readonly typeString: "type(uint256)";
                                            };
                                            readonly typeName: {
                                                readonly id: 25559;
                                                readonly name: "uint256";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "10721:7:141";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 25562;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "10721:17:141";
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
                                                    readonly id: 25551;
                                                    readonly name: "_baseToken";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 18304;
                                                    readonly src: "10655:10:141";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_contract$_IERC20_$10417";
                                                        readonly typeString: "contract IERC20";
                                                    };
                                                }];
                                                readonly expression: {
                                                    readonly argumentTypes: readonly [{
                                                        readonly typeIdentifier: "t_contract$_IERC20_$10417";
                                                        readonly typeString: "contract IERC20";
                                                    }];
                                                    readonly id: 25550;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "ElementaryTypeNameExpression";
                                                    readonly src: "10647:7:141";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_address_$";
                                                        readonly typeString: "type(address)";
                                                    };
                                                    readonly typeName: {
                                                        readonly id: 25549;
                                                        readonly name: "address";
                                                        readonly nodeType: "ElementaryTypeName";
                                                        readonly src: "10647:7:141";
                                                        readonly typeDescriptions: {};
                                                    };
                                                };
                                                readonly id: 25552;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly kind: "typeConversion";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "10647:19:141";
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
                                                readonly id: 25548;
                                                readonly name: "ERC20Mintable";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 24109;
                                                readonly src: "10633:13:141";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_contract$_ERC20Mintable_$24109_$";
                                                    readonly typeString: "type(contract ERC20Mintable)";
                                                };
                                            };
                                            readonly id: 25553;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "10633:34:141";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_contract$_ERC20Mintable_$24109";
                                                readonly typeString: "contract ERC20Mintable";
                                            };
                                        };
                                        readonly id: 25554;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "10668:4:141";
                                        readonly memberName: "mint";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 24079;
                                        readonly src: "10633:39:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$__$";
                                            readonly typeString: "function (address,uint256) external";
                                        };
                                    };
                                    readonly id: 25563;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "10633:119:141";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 25564;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "10633:119:141";
                            }];
                        };
                    }];
                };
                readonly functionSelector: "68096239";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "accrue";
                readonly nameLocation: "10381:6:141";
                readonly parameters: {
                    readonly id: 25528;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25525;
                        readonly mutability: "mutable";
                        readonly name: "time";
                        readonly nameLocation: "10396:4:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25591;
                        readonly src: "10388:12:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25524;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "10388:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25527;
                        readonly mutability: "mutable";
                        readonly name: "apr";
                        readonly nameLocation: "10409:3:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25591;
                        readonly src: "10402:10:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 25526;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "10402:6:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "10387:26:141";
                };
                readonly returnParameters: {
                    readonly id: 25529;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "10423:0:141";
                };
                readonly scope: 25773;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 25619;
                readonly nodeType: "FunctionDefinition";
                readonly src: "10944:411:141";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25618;
                    readonly nodeType: "Block";
                    readonly src: "11144:211:141";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 25612;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly components: readonly [{
                                    readonly id: 25604;
                                    readonly name: "curveFee";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25600;
                                    readonly src: "11155:8:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 25605;
                                    readonly name: "governanceCurveFee";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25602;
                                    readonly src: "11165:18:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly id: 25606;
                                readonly isConstant: false;
                                readonly isInlineArray: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly nodeType: "TupleExpression";
                                readonly src: "11154:30:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$";
                                    readonly typeString: "tuple(uint256,uint256)";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly id: 25608;
                                    readonly name: "_shareAmount";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25593;
                                    readonly src: "11226:12:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 25609;
                                    readonly name: "_spotPrice";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25595;
                                    readonly src: "11252:10:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 25610;
                                    readonly name: "vaultSharePrice";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25597;
                                    readonly src: "11276:15:141";
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
                                    readonly id: 25607;
                                    readonly name: "_calculateFeesGivenShares";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 14362;
                                    readonly src: "11187:25:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_view$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256,uint256) view returns (uint256,uint256)";
                                    };
                                };
                                readonly id: 25611;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "11187:114:141";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$";
                                    readonly typeString: "tuple(uint256,uint256)";
                                };
                            };
                            readonly src: "11154:147:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 25613;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "11154:147:141";
                    }, {
                        readonly expression: {
                            readonly components: readonly [{
                                readonly id: 25614;
                                readonly name: "curveFee";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25600;
                                readonly src: "11319:8:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 25615;
                                readonly name: "governanceCurveFee";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25602;
                                readonly src: "11329:18:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly id: 25616;
                            readonly isConstant: false;
                            readonly isInlineArray: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "TupleExpression";
                            readonly src: "11318:30:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$";
                                readonly typeString: "tuple(uint256,uint256)";
                            };
                        };
                        readonly functionReturnParameters: 25603;
                        readonly id: 25617;
                        readonly nodeType: "Return";
                        readonly src: "11311:37:141";
                    }];
                };
                readonly functionSelector: "71f88b7c";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateFeesGivenShares";
                readonly nameLocation: "10953:24:141";
                readonly parameters: {
                    readonly id: 25598;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25593;
                        readonly mutability: "mutable";
                        readonly name: "_shareAmount";
                        readonly nameLocation: "10995:12:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25619;
                        readonly src: "10987:20:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25592;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "10987:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25595;
                        readonly mutability: "mutable";
                        readonly name: "_spotPrice";
                        readonly nameLocation: "11025:10:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25619;
                        readonly src: "11017:18:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25594;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11017:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25597;
                        readonly mutability: "mutable";
                        readonly name: "vaultSharePrice";
                        readonly nameLocation: "11053:15:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25619;
                        readonly src: "11045:23:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25596;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11045:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "10977:97:141";
                };
                readonly returnParameters: {
                    readonly id: 25603;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25600;
                        readonly mutability: "mutable";
                        readonly name: "curveFee";
                        readonly nameLocation: "11106:8:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25619;
                        readonly src: "11098:16:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25599;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11098:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25602;
                        readonly mutability: "mutable";
                        readonly name: "governanceCurveFee";
                        readonly nameLocation: "11124:18:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25619;
                        readonly src: "11116:26:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25601;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11116:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "11097:46:141";
                };
                readonly scope: 25773;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 25658;
                readonly nodeType: "FunctionDefinition";
                readonly src: "11361:822:141";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25657;
                    readonly nodeType: "Block";
                    readonly src: "11742:441:141";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 25649;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly components: readonly [{
                                    readonly id: 25638;
                                    readonly name: "totalCurveFee";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25630;
                                    readonly src: "11766:13:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 25639;
                                    readonly name: "totalFlatFee";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25632;
                                    readonly src: "11793:12:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 25640;
                                    readonly name: "governanceCurveFee";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25634;
                                    readonly src: "11819:18:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 25641;
                                    readonly name: "totalGovernanceFee";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25636;
                                    readonly src: "11851:18:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly id: 25642;
                                readonly isConstant: false;
                                readonly isInlineArray: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly nodeType: "TupleExpression";
                                readonly src: "11752:127:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$";
                                    readonly typeString: "tuple(uint256,uint256,uint256,uint256)";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly id: 25644;
                                    readonly name: "_bondAmount";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25621;
                                    readonly src: "11920:11:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 25645;
                                    readonly name: "_normalizedTimeRemaining";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25623;
                                    readonly src: "11945:24:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 25646;
                                    readonly name: "_spotPrice";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25625;
                                    readonly src: "11983:10:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 25647;
                                    readonly name: "vaultSharePrice";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25627;
                                    readonly src: "12007:15:141";
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
                                    readonly id: 25643;
                                    readonly name: "_calculateFeesGivenBonds";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 14432;
                                    readonly src: "11882:24:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_view$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256,uint256,uint256) view returns (uint256,uint256,uint256,uint256)";
                                    };
                                };
                                readonly id: 25648;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "11882:150:141";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$";
                                    readonly typeString: "tuple(uint256,uint256,uint256,uint256)";
                                };
                            };
                            readonly src: "11752:280:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 25650;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "11752:280:141";
                    }, {
                        readonly expression: {
                            readonly components: readonly [{
                                readonly id: 25651;
                                readonly name: "totalCurveFee";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25630;
                                readonly src: "12063:13:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 25652;
                                readonly name: "totalFlatFee";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25632;
                                readonly src: "12090:12:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 25653;
                                readonly name: "governanceCurveFee";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25634;
                                readonly src: "12116:18:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 25654;
                                readonly name: "totalGovernanceFee";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25636;
                                readonly src: "12148:18:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly id: 25655;
                            readonly isConstant: false;
                            readonly isInlineArray: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "TupleExpression";
                            readonly src: "12049:127:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$";
                                readonly typeString: "tuple(uint256,uint256,uint256,uint256)";
                            };
                        };
                        readonly functionReturnParameters: 25637;
                        readonly id: 25656;
                        readonly nodeType: "Return";
                        readonly src: "12042:134:141";
                    }];
                };
                readonly functionSelector: "22d5506b";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateFeesGivenBonds";
                readonly nameLocation: "11370:23:141";
                readonly parameters: {
                    readonly id: 25628;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25621;
                        readonly mutability: "mutable";
                        readonly name: "_bondAmount";
                        readonly nameLocation: "11411:11:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25658;
                        readonly src: "11403:19:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25620;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11403:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25623;
                        readonly mutability: "mutable";
                        readonly name: "_normalizedTimeRemaining";
                        readonly nameLocation: "11440:24:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25658;
                        readonly src: "11432:32:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25622;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11432:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25625;
                        readonly mutability: "mutable";
                        readonly name: "_spotPrice";
                        readonly nameLocation: "11482:10:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25658;
                        readonly src: "11474:18:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25624;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11474:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25627;
                        readonly mutability: "mutable";
                        readonly name: "vaultSharePrice";
                        readonly nameLocation: "11510:15:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25658;
                        readonly src: "11502:23:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25626;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11502:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "11393:138:141";
                };
                readonly returnParameters: {
                    readonly id: 25637;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25630;
                        readonly mutability: "mutable";
                        readonly name: "totalCurveFee";
                        readonly nameLocation: "11600:13:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25658;
                        readonly src: "11592:21:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25629;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11592:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25632;
                        readonly mutability: "mutable";
                        readonly name: "totalFlatFee";
                        readonly nameLocation: "11635:12:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25658;
                        readonly src: "11627:20:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25631;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11627:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25634;
                        readonly mutability: "mutable";
                        readonly name: "governanceCurveFee";
                        readonly nameLocation: "11669:18:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25658;
                        readonly src: "11661:26:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25633;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11661:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25636;
                        readonly mutability: "mutable";
                        readonly name: "totalGovernanceFee";
                        readonly nameLocation: "11709:18:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25658;
                        readonly src: "11701:26:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25635;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11701:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "11578:159:141";
                };
                readonly scope: 25773;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 25677;
                readonly nodeType: "FunctionDefinition";
                readonly src: "12232:351:141";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25676;
                    readonly nodeType: "Block";
                    readonly src: "12509:74:141";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 25672;
                                readonly name: "_shareAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25660;
                                readonly src: "12545:12:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 25673;
                                readonly name: "_vaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25662;
                                readonly src: "12559:16:141";
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
                                readonly id: 25671;
                                readonly name: "_calculateOpenLong";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 16672;
                                readonly src: "12526:18:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256) view returns (uint256,uint256,uint256)";
                                };
                            };
                            readonly id: 25674;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "12526:50:141";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$";
                                readonly typeString: "tuple(uint256,uint256,uint256)";
                            };
                        };
                        readonly functionReturnParameters: 25670;
                        readonly id: 25675;
                        readonly nodeType: "Return";
                        readonly src: "12519:57:141";
                    }];
                };
                readonly functionSelector: "9bd33498";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateOpenLong";
                readonly nameLocation: "12241:17:141";
                readonly parameters: {
                    readonly id: 25663;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25660;
                        readonly mutability: "mutable";
                        readonly name: "_shareAmount";
                        readonly nameLocation: "12276:12:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25677;
                        readonly src: "12268:20:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25659;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "12268:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25662;
                        readonly mutability: "mutable";
                        readonly name: "_vaultSharePrice";
                        readonly nameLocation: "12306:16:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25677;
                        readonly src: "12298:24:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25661;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "12298:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "12258:70:141";
                };
                readonly returnParameters: {
                    readonly id: 25670;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25665;
                        readonly mutability: "mutable";
                        readonly name: "shareReservesDelta";
                        readonly nameLocation: "12397:18:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25677;
                        readonly src: "12389:26:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25664;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "12389:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25667;
                        readonly mutability: "mutable";
                        readonly name: "bondReservesDelta";
                        readonly nameLocation: "12437:17:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25677;
                        readonly src: "12429:25:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25666;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "12429:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25669;
                        readonly mutability: "mutable";
                        readonly name: "totalGovernanceFee";
                        readonly nameLocation: "12476:18:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25677;
                        readonly src: "12468:26:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25668;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "12468:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "12375:129:141";
                };
                readonly scope: 25773;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 25689;
                readonly nodeType: "FunctionDefinition";
                readonly src: "12589:177:141";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25688;
                    readonly nodeType: "Block";
                    readonly src: "12704:62:141";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 25685;
                                readonly name: "_maturityTime";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25679;
                                readonly src: "12745:13:141";
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
                                readonly id: 25684;
                                readonly name: "_calculateTimeRemaining";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13682;
                                readonly src: "12721:23:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256) view returns (uint256)";
                                };
                            };
                            readonly id: 25686;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "12721:38:141";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 25683;
                        readonly id: 25687;
                        readonly nodeType: "Return";
                        readonly src: "12714:45:141";
                    }];
                };
                readonly functionSelector: "68c2ecb8";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateTimeRemaining";
                readonly nameLocation: "12598:22:141";
                readonly parameters: {
                    readonly id: 25680;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25679;
                        readonly mutability: "mutable";
                        readonly name: "_maturityTime";
                        readonly nameLocation: "12638:13:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25689;
                        readonly src: "12630:21:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25678;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "12630:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "12620:37:141";
                };
                readonly returnParameters: {
                    readonly id: 25683;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25682;
                        readonly mutability: "mutable";
                        readonly name: "timeRemaining";
                        readonly nameLocation: "12689:13:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25689;
                        readonly src: "12681:21:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25681;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "12681:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "12680:23:141";
                };
                readonly scope: 25773;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 25701;
                readonly nodeType: "FunctionDefinition";
                readonly src: "12772:189:141";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25700;
                    readonly nodeType: "Block";
                    readonly src: "12893:68:141";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 25697;
                                readonly name: "_maturityTime";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25691;
                                readonly src: "12940:13:141";
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
                                readonly id: 25696;
                                readonly name: "_calculateTimeRemainingScaled";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13718;
                                readonly src: "12910:29:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256) view returns (uint256)";
                                };
                            };
                            readonly id: 25698;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "12910:44:141";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 25695;
                        readonly id: 25699;
                        readonly nodeType: "Return";
                        readonly src: "12903:51:141";
                    }];
                };
                readonly functionSelector: "ca6d38f7";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateTimeRemainingScaled";
                readonly nameLocation: "12781:28:141";
                readonly parameters: {
                    readonly id: 25692;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25691;
                        readonly mutability: "mutable";
                        readonly name: "_maturityTime";
                        readonly nameLocation: "12827:13:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25701;
                        readonly src: "12819:21:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25690;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "12819:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "12809:37:141";
                };
                readonly returnParameters: {
                    readonly id: 25695;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25694;
                        readonly mutability: "mutable";
                        readonly name: "timeRemaining";
                        readonly nameLocation: "12878:13:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25701;
                        readonly src: "12870:21:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25693;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "12870:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "12869:23:141";
                };
                readonly scope: 25773;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 25710;
                readonly nodeType: "FunctionDefinition";
                readonly src: "12967:118:141";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25709;
                    readonly nodeType: "Block";
                    readonly src: "13042:43:141";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [];
                            readonly expression: {
                                readonly argumentTypes: readonly [];
                                readonly id: 25706;
                                readonly name: "_latestCheckpoint";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13736;
                                readonly src: "13059:17:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$__$returns$_t_uint256_$";
                                    readonly typeString: "function () view returns (uint256)";
                                };
                            };
                            readonly id: 25707;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "13059:19:141";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 25705;
                        readonly id: 25708;
                        readonly nodeType: "Return";
                        readonly src: "13052:26:141";
                    }];
                };
                readonly functionSelector: "907c0f92";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "latestCheckpoint";
                readonly nameLocation: "12976:16:141";
                readonly parameters: {
                    readonly id: 25702;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "12992:2:141";
                };
                readonly returnParameters: {
                    readonly id: 25705;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25704;
                        readonly mutability: "mutable";
                        readonly name: "checkpointTime";
                        readonly nameLocation: "13026:14:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25710;
                        readonly src: "13018:22:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25703;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "13018:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "13017:24:141";
                };
                readonly scope: 25773;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 25720;
                readonly nodeType: "FunctionDefinition";
                readonly src: "13091:116:141";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25719;
                    readonly nodeType: "Block";
                    readonly src: "13153:54:141";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 25716;
                                readonly name: "_shareReservesDelta";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25712;
                                readonly src: "13180:19:141";
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
                                readonly id: 25715;
                                readonly name: "_updateLiquidity";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 15876;
                                readonly src: "13163:16:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_int256_$returns$__$";
                                    readonly typeString: "function (int256)";
                                };
                            };
                            readonly id: 25717;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "13163:37:141";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 25718;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "13163:37:141";
                    }];
                };
                readonly functionSelector: "8120a3e2";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "updateLiquidity";
                readonly nameLocation: "13100:15:141";
                readonly parameters: {
                    readonly id: 25713;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25712;
                        readonly mutability: "mutable";
                        readonly name: "_shareReservesDelta";
                        readonly nameLocation: "13123:19:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25720;
                        readonly src: "13116:26:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 25711;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "13116:6:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "13115:28:141";
                };
                readonly returnParameters: {
                    readonly id: 25714;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "13153:0:141";
                };
                readonly scope: 25773;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 25732;
                readonly nodeType: "FunctionDefinition";
                readonly src: "13213:177:141";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25731;
                    readonly nodeType: "Block";
                    readonly src: "13321:69:141";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 25728;
                                readonly name: "_vaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25722;
                                readonly src: "13366:16:141";
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
                                readonly id: 25727;
                                readonly name: "_calculateIdleShareReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 14244;
                                readonly src: "13338:27:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256) view returns (uint256)";
                                };
                            };
                            readonly id: 25729;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "13338:45:141";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 25726;
                        readonly id: 25730;
                        readonly nodeType: "Return";
                        readonly src: "13331:52:141";
                    }];
                };
                readonly functionSelector: "b1b4b170";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateIdleShareReserves";
                readonly nameLocation: "13222:26:141";
                readonly parameters: {
                    readonly id: 25723;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25722;
                        readonly mutability: "mutable";
                        readonly name: "_vaultSharePrice";
                        readonly nameLocation: "13266:16:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25732;
                        readonly src: "13258:24:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25721;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "13258:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "13248:40:141";
                };
                readonly returnParameters: {
                    readonly id: 25726;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25725;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25732;
                        readonly src: "13312:7:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25724;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "13312:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "13311:9:141";
                };
                readonly scope: 25773;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 25740;
                readonly nodeType: "FunctionDefinition";
                readonly src: "13396:93:141";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25739;
                    readonly nodeType: "Block";
                    readonly src: "13454:35:141";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 25737;
                            readonly name: "totalShares";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 24916;
                            readonly src: "13471:11:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 25736;
                        readonly id: 25738;
                        readonly nodeType: "Return";
                        readonly src: "13464:18:141";
                    }];
                };
                readonly functionSelector: "d5002f2e";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getTotalShares";
                readonly nameLocation: "13405:14:141";
                readonly parameters: {
                    readonly id: 25733;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "13419:2:141";
                };
                readonly returnParameters: {
                    readonly id: 25736;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25735;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25740;
                        readonly src: "13445:7:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25734;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "13445:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "13444:9:141";
                };
                readonly scope: 25773;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 25760;
                readonly nodeType: "FunctionDefinition";
                readonly src: "13495:184:141";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25759;
                    readonly nodeType: "Block";
                    readonly src: "13570:109:141";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 25751;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 25747;
                                    readonly name: "_marketState";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18338;
                                    readonly src: "13580:12:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_MarketState_$10829_storage";
                                        readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                    };
                                };
                                readonly id: 25749;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "13593:13:141";
                                readonly memberName: "shareReserves";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10795;
                                readonly src: "13580:26:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 25750;
                                readonly name: "shareReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25742;
                                readonly src: "13609:13:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                };
                            };
                            readonly src: "13580:42:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint128";
                                readonly typeString: "uint128";
                            };
                        };
                        readonly id: 25752;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "13580:42:141";
                    }, {
                        readonly expression: {
                            readonly id: 25757;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 25753;
                                    readonly name: "_marketState";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18338;
                                    readonly src: "13632:12:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_MarketState_$10829_storage";
                                        readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                    };
                                };
                                readonly id: 25755;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "13645:12:141";
                                readonly memberName: "bondReserves";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10798;
                                readonly src: "13632:25:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 25756;
                                readonly name: "bondReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25744;
                                readonly src: "13660:12:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                };
                            };
                            readonly src: "13632:40:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint128";
                                readonly typeString: "uint128";
                            };
                        };
                        readonly id: 25758;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "13632:40:141";
                    }];
                };
                readonly functionSelector: "702db0eb";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "setReserves";
                readonly nameLocation: "13504:11:141";
                readonly parameters: {
                    readonly id: 25745;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25742;
                        readonly mutability: "mutable";
                        readonly name: "shareReserves";
                        readonly nameLocation: "13524:13:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25760;
                        readonly src: "13516:21:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint128";
                            readonly typeString: "uint128";
                        };
                        readonly typeName: {
                            readonly id: 25741;
                            readonly name: "uint128";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "13516:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint128";
                                readonly typeString: "uint128";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25744;
                        readonly mutability: "mutable";
                        readonly name: "bondReserves";
                        readonly nameLocation: "13547:12:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25760;
                        readonly src: "13539:20:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint128";
                            readonly typeString: "uint128";
                        };
                        readonly typeName: {
                            readonly id: 25743;
                            readonly name: "uint128";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "13539:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint128";
                                readonly typeString: "uint128";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "13515:45:141";
                };
                readonly returnParameters: {
                    readonly id: 25746;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "13570:0:141";
                };
                readonly scope: 25773;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 25772;
                readonly nodeType: "FunctionDefinition";
                readonly src: "13685:113:141";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25771;
                    readonly nodeType: "Block";
                    readonly src: "13741:57:141";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 25769;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 25765;
                                    readonly name: "_marketState";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18338;
                                    readonly src: "13751:12:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_MarketState_$10829_storage";
                                        readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                    };
                                };
                                readonly id: 25767;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "13764:12:141";
                                readonly memberName: "longExposure";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10801;
                                readonly src: "13751:25:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 25768;
                                readonly name: "longExposure";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25762;
                                readonly src: "13779:12:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                };
                            };
                            readonly src: "13751:40:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint128";
                                readonly typeString: "uint128";
                            };
                        };
                        readonly id: 25770;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "13751:40:141";
                    }];
                };
                readonly functionSelector: "b4f8da39";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "setLongExposure";
                readonly nameLocation: "13694:15:141";
                readonly parameters: {
                    readonly id: 25763;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25762;
                        readonly mutability: "mutable";
                        readonly name: "longExposure";
                        readonly nameLocation: "13718:12:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25772;
                        readonly src: "13710:20:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint128";
                            readonly typeString: "uint128";
                        };
                        readonly typeName: {
                            readonly id: 25761;
                            readonly name: "uint128";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "13710:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint128";
                                readonly typeString: "uint128";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "13709:22:141";
                };
                readonly returnParameters: {
                    readonly id: 25764;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "13741:0:141";
                };
                readonly scope: 25773;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 25445;
                    readonly name: "Hyperdrive";
                    readonly nameLocations: readonly ["9491:10:141"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 4609;
                    readonly src: "9491:10:141";
                };
                readonly id: 25446;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "9491:10:141";
            }, {
                readonly baseName: {
                    readonly id: 25447;
                    readonly name: "MockHyperdriveBase";
                    readonly nameLocations: readonly ["9503:18:141"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 25444;
                    readonly src: "9503:18:141";
                };
                readonly id: 25448;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "9503:18:141";
            }];
            readonly canonicalName: "MockHyperdrive";
            readonly contractDependencies: readonly [25802, 25817, 25832, 25847, 25862];
            readonly contractKind: "contract";
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [25773, 25444, 4609, 14975, 18281, 16811, 15877, 17295, 13335, 14511, 18497, 72173, 11666, 12232, 11332, 12198];
            readonly name: "MockHyperdrive";
            readonly nameLocation: "9473:14:141";
            readonly scope: 25863;
            readonly usedErrors: readonly [11005, 11017, 11050, 11094, 11100, 11103, 11106, 11112, 72118];
            readonly usedEvents: readonly [11486, 11501, 11520, 11535, 11552, 11571, 11590, 11611, 11624, 11631, 11636, 11641, 11646, 11653, 11658, 11665, 12213, 12222, 12231];
        }, {
            readonly id: 25802;
            readonly nodeType: "ContractDefinition";
            readonly src: "13802:327:141";
            readonly nodes: readonly [{
                readonly id: 25787;
                readonly nodeType: "FunctionDefinition";
                readonly src: "13880:94:141";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25786;
                    readonly nodeType: "Block";
                    readonly src: "13972:2:141";
                    readonly nodes: readonly [];
                    readonly statements: readonly [];
                };
                readonly implemented: true;
                readonly kind: "constructor";
                readonly modifiers: readonly [{
                    readonly arguments: readonly [{
                        readonly id: 25783;
                        readonly name: "_config";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 25780;
                        readonly src: "13963:7:141";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10934_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig memory";
                        };
                    }];
                    readonly id: 25784;
                    readonly kind: "baseConstructorSpecifier";
                    readonly modifierName: {
                        readonly id: 25782;
                        readonly name: "HyperdriveTarget0";
                        readonly nameLocations: readonly ["13945:17:141"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 5409;
                        readonly src: "13945:17:141";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "13945:26:141";
                }];
                readonly name: "";
                readonly nameLocation: "-1:-1:-1";
                readonly parameters: {
                    readonly id: 25781;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25780;
                        readonly mutability: "mutable";
                        readonly name: "_config";
                        readonly nameLocation: "13931:7:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25787;
                        readonly src: "13901:37:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10934_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig";
                        };
                        readonly typeName: {
                            readonly id: 25779;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 25778;
                                readonly name: "IHyperdrive.PoolConfig";
                                readonly nameLocations: readonly ["13901:11:141", "13913:10:141"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10934;
                                readonly src: "13901:22:141";
                            };
                            readonly referencedDeclaration: 10934;
                            readonly src: "13901:22:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolConfig_$10934_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "13891:53:141";
                };
                readonly returnParameters: {
                    readonly id: 25785;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "13972:0:141";
                };
                readonly scope: 25802;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "public";
            }, {
                readonly id: 25801;
                readonly nodeType: "FunctionDefinition";
                readonly src: "13999:128:141";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25800;
                    readonly nodeType: "Block";
                    readonly src: "14067:60:141";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 25796;
                                    readonly name: "_governanceFeesAccrued";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18360;
                                    readonly src: "14096:22:141";
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
                                        readonly id: 25794;
                                        readonly name: "abi";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -1;
                                        readonly src: "14085:3:141";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_magic_abi";
                                            readonly typeString: "abi";
                                        };
                                    };
                                    readonly id: 25795;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "14089:6:141";
                                    readonly memberName: "encode";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "14085:10:141";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$";
                                        readonly typeString: "function () pure returns (bytes memory)";
                                    };
                                };
                                readonly id: 25797;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "14085:34:141";
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
                                readonly id: 25793;
                                readonly name: "_revert";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 5408;
                                readonly src: "14077:7:141";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bytes memory) pure";
                                };
                            };
                            readonly id: 25798;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "14077:43:141";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 25799;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "14077:43:141";
                    }];
                };
                readonly documentation: {
                    readonly id: 25788;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "13980:14:141";
                    readonly text: "Mocks ///";
                };
                readonly functionSelector: "8e67f87e";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getGovernanceFeesAccrued";
                readonly nameLocation: "14008:24:141";
                readonly parameters: {
                    readonly id: 25789;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "14032:2:141";
                };
                readonly returnParameters: {
                    readonly id: 25792;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25791;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25801;
                        readonly src: "14058:7:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25790;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "14058:7:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "14057:9:141";
                };
                readonly scope: 25802;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 25774;
                    readonly name: "HyperdriveTarget0";
                    readonly nameLocations: readonly ["13836:17:141"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 5409;
                    readonly src: "13836:17:141";
                };
                readonly id: 25775;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "13836:17:141";
            }, {
                readonly baseName: {
                    readonly id: 25776;
                    readonly name: "MockHyperdriveBase";
                    readonly nameLocations: readonly ["13855:18:141"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 25444;
                    readonly src: "13855:18:141";
                };
                readonly id: 25777;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "13855:18:141";
            }];
            readonly canonicalName: "MockHyperdriveTarget0";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [25802, 25444, 5409, 14975, 18281, 16811, 15877, 17295, 13335, 14511, 18497, 72173, 11666, 12232, 11980, 12320];
            readonly name: "MockHyperdriveTarget0";
            readonly nameLocation: "13811:21:141";
            readonly scope: 25863;
            readonly usedErrors: readonly [10999, 11005, 11008, 11017, 11029, 11032, 11041, 11044, 11047, 11050, 11074, 11079, 11082, 11088, 11091, 11106, 71548, 71829, 71834, 71837, 72118];
            readonly usedEvents: readonly [11486, 11501, 11520, 11535, 11552, 11571, 11590, 11611, 11624, 11631, 11636, 11641, 11646, 11653, 11658, 11665, 12213, 12222, 12231];
        }, {
            readonly id: 25817;
            readonly nodeType: "ContractDefinition";
            readonly src: "14131:174:141";
            readonly nodes: readonly [{
                readonly id: 25816;
                readonly nodeType: "FunctionDefinition";
                readonly src: "14209:94:141";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25815;
                    readonly nodeType: "Block";
                    readonly src: "14301:2:141";
                    readonly nodes: readonly [];
                    readonly statements: readonly [];
                };
                readonly implemented: true;
                readonly kind: "constructor";
                readonly modifiers: readonly [{
                    readonly arguments: readonly [{
                        readonly id: 25812;
                        readonly name: "_config";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 25809;
                        readonly src: "14292:7:141";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10934_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig memory";
                        };
                    }];
                    readonly id: 25813;
                    readonly kind: "baseConstructorSpecifier";
                    readonly modifierName: {
                        readonly id: 25811;
                        readonly name: "HyperdriveTarget1";
                        readonly nameLocations: readonly ["14274:17:141"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 5522;
                        readonly src: "14274:17:141";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "14274:26:141";
                }];
                readonly name: "";
                readonly nameLocation: "-1:-1:-1";
                readonly parameters: {
                    readonly id: 25810;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25809;
                        readonly mutability: "mutable";
                        readonly name: "_config";
                        readonly nameLocation: "14260:7:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25816;
                        readonly src: "14230:37:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10934_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig";
                        };
                        readonly typeName: {
                            readonly id: 25808;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 25807;
                                readonly name: "IHyperdrive.PoolConfig";
                                readonly nameLocations: readonly ["14230:11:141", "14242:10:141"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10934;
                                readonly src: "14230:22:141";
                            };
                            readonly referencedDeclaration: 10934;
                            readonly src: "14230:22:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolConfig_$10934_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "14220:53:141";
                };
                readonly returnParameters: {
                    readonly id: 25814;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "14301:0:141";
                };
                readonly scope: 25817;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "public";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 25803;
                    readonly name: "HyperdriveTarget1";
                    readonly nameLocations: readonly ["14165:17:141"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 5522;
                    readonly src: "14165:17:141";
                };
                readonly id: 25804;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "14165:17:141";
            }, {
                readonly baseName: {
                    readonly id: 25805;
                    readonly name: "MockHyperdriveBase";
                    readonly nameLocations: readonly ["14184:18:141"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 25444;
                    readonly src: "14184:18:141";
                };
                readonly id: 25806;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "14184:18:141";
            }];
            readonly canonicalName: "MockHyperdriveTarget1";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [25817, 25444, 5522, 14975, 18281, 16811, 15877, 17295, 13335, 14511, 18497, 72173, 11666, 12232];
            readonly name: "MockHyperdriveTarget1";
            readonly nameLocation: "14140:21:141";
            readonly scope: 25863;
            readonly usedErrors: readonly [11005, 11011, 11017, 11020, 11041, 11047, 11050, 11056, 11059, 11062, 11065, 11071, 11074, 11085, 11088, 11097, 11100, 11103, 11106, 11112, 72118];
            readonly usedEvents: readonly [11486, 11501, 11520, 11535, 11552, 11571, 11590, 11611, 11624, 11631, 11636, 11641, 11646, 11653, 11658, 11665, 12213, 12222, 12231];
        }, {
            readonly id: 25832;
            readonly nodeType: "ContractDefinition";
            readonly src: "14307:174:141";
            readonly nodes: readonly [{
                readonly id: 25831;
                readonly nodeType: "FunctionDefinition";
                readonly src: "14385:94:141";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25830;
                    readonly nodeType: "Block";
                    readonly src: "14477:2:141";
                    readonly nodes: readonly [];
                    readonly statements: readonly [];
                };
                readonly implemented: true;
                readonly kind: "constructor";
                readonly modifiers: readonly [{
                    readonly arguments: readonly [{
                        readonly id: 25827;
                        readonly name: "_config";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 25824;
                        readonly src: "14468:7:141";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10934_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig memory";
                        };
                    }];
                    readonly id: 25828;
                    readonly kind: "baseConstructorSpecifier";
                    readonly modifierName: {
                        readonly id: 25826;
                        readonly name: "HyperdriveTarget2";
                        readonly nameLocations: readonly ["14450:17:141"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 5611;
                        readonly src: "14450:17:141";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "14450:26:141";
                }];
                readonly name: "";
                readonly nameLocation: "-1:-1:-1";
                readonly parameters: {
                    readonly id: 25825;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25824;
                        readonly mutability: "mutable";
                        readonly name: "_config";
                        readonly nameLocation: "14436:7:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25831;
                        readonly src: "14406:37:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10934_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig";
                        };
                        readonly typeName: {
                            readonly id: 25823;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 25822;
                                readonly name: "IHyperdrive.PoolConfig";
                                readonly nameLocations: readonly ["14406:11:141", "14418:10:141"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10934;
                                readonly src: "14406:22:141";
                            };
                            readonly referencedDeclaration: 10934;
                            readonly src: "14406:22:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolConfig_$10934_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "14396:53:141";
                };
                readonly returnParameters: {
                    readonly id: 25829;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "14477:0:141";
                };
                readonly scope: 25832;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "public";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 25818;
                    readonly name: "HyperdriveTarget2";
                    readonly nameLocations: readonly ["14341:17:141"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 5611;
                    readonly src: "14341:17:141";
                };
                readonly id: 25819;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "14341:17:141";
            }, {
                readonly baseName: {
                    readonly id: 25820;
                    readonly name: "MockHyperdriveBase";
                    readonly nameLocations: readonly ["14360:18:141"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 25444;
                    readonly src: "14360:18:141";
                };
                readonly id: 25821;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "14360:18:141";
            }];
            readonly canonicalName: "MockHyperdriveTarget2";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [25832, 25444, 5611, 14975, 18281, 16811, 15877, 17295, 13335, 14511, 18497, 72173, 11666, 12232];
            readonly name: "MockHyperdriveTarget2";
            readonly nameLocation: "14316:21:141";
            readonly scope: 25863;
            readonly usedErrors: readonly [11005, 11011, 11017, 11041, 11047, 11050, 11056, 11065, 11074, 11085, 11088, 11097, 11100, 11103, 11106, 11112, 72118];
            readonly usedEvents: readonly [11486, 11501, 11520, 11535, 11552, 11571, 11590, 11611, 11624, 11631, 11636, 11641, 11646, 11653, 11658, 11665, 12213, 12222, 12231];
        }, {
            readonly id: 25847;
            readonly nodeType: "ContractDefinition";
            readonly src: "14483:174:141";
            readonly nodes: readonly [{
                readonly id: 25846;
                readonly nodeType: "FunctionDefinition";
                readonly src: "14561:94:141";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25845;
                    readonly nodeType: "Block";
                    readonly src: "14653:2:141";
                    readonly nodes: readonly [];
                    readonly statements: readonly [];
                };
                readonly implemented: true;
                readonly kind: "constructor";
                readonly modifiers: readonly [{
                    readonly arguments: readonly [{
                        readonly id: 25842;
                        readonly name: "_config";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 25839;
                        readonly src: "14644:7:141";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10934_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig memory";
                        };
                    }];
                    readonly id: 25843;
                    readonly kind: "baseConstructorSpecifier";
                    readonly modifierName: {
                        readonly id: 25841;
                        readonly name: "HyperdriveTarget3";
                        readonly nameLocations: readonly ["14626:17:141"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 5699;
                        readonly src: "14626:17:141";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "14626:26:141";
                }];
                readonly name: "";
                readonly nameLocation: "-1:-1:-1";
                readonly parameters: {
                    readonly id: 25840;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25839;
                        readonly mutability: "mutable";
                        readonly name: "_config";
                        readonly nameLocation: "14612:7:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25846;
                        readonly src: "14582:37:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10934_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig";
                        };
                        readonly typeName: {
                            readonly id: 25838;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 25837;
                                readonly name: "IHyperdrive.PoolConfig";
                                readonly nameLocations: readonly ["14582:11:141", "14594:10:141"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10934;
                                readonly src: "14582:22:141";
                            };
                            readonly referencedDeclaration: 10934;
                            readonly src: "14582:22:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolConfig_$10934_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "14572:53:141";
                };
                readonly returnParameters: {
                    readonly id: 25844;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "14653:0:141";
                };
                readonly scope: 25847;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "public";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 25833;
                    readonly name: "HyperdriveTarget3";
                    readonly nameLocations: readonly ["14517:17:141"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 5699;
                    readonly src: "14517:17:141";
                };
                readonly id: 25834;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "14517:17:141";
            }, {
                readonly baseName: {
                    readonly id: 25835;
                    readonly name: "MockHyperdriveBase";
                    readonly nameLocations: readonly ["14536:18:141"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 25444;
                    readonly src: "14536:18:141";
                };
                readonly id: 25836;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "14536:18:141";
            }];
            readonly canonicalName: "MockHyperdriveTarget3";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [25847, 25444, 5699, 14975, 18281, 16811, 15877, 17295, 13335, 14511, 18497, 72173, 11666, 12232];
            readonly name: "MockHyperdriveTarget3";
            readonly nameLocation: "14492:21:141";
            readonly scope: 25863;
            readonly usedErrors: readonly [11002, 11005, 11017, 11041, 11047, 11050, 11053, 11056, 11062, 11065, 11068, 11071, 11074, 11085, 11088, 11097, 11100, 11103, 11106, 11112, 72118];
            readonly usedEvents: readonly [11486, 11501, 11520, 11535, 11552, 11571, 11590, 11611, 11624, 11631, 11636, 11641, 11646, 11653, 11658, 11665, 12213, 12222, 12231];
        }, {
            readonly id: 25862;
            readonly nodeType: "ContractDefinition";
            readonly src: "14659:174:141";
            readonly nodes: readonly [{
                readonly id: 25861;
                readonly nodeType: "FunctionDefinition";
                readonly src: "14737:94:141";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25860;
                    readonly nodeType: "Block";
                    readonly src: "14829:2:141";
                    readonly nodes: readonly [];
                    readonly statements: readonly [];
                };
                readonly implemented: true;
                readonly kind: "constructor";
                readonly modifiers: readonly [{
                    readonly arguments: readonly [{
                        readonly id: 25857;
                        readonly name: "_config";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 25854;
                        readonly src: "14820:7:141";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10934_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig memory";
                        };
                    }];
                    readonly id: 25858;
                    readonly kind: "baseConstructorSpecifier";
                    readonly modifierName: {
                        readonly id: 25856;
                        readonly name: "HyperdriveTarget4";
                        readonly nameLocations: readonly ["14802:17:141"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 5778;
                        readonly src: "14802:17:141";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "14802:26:141";
                }];
                readonly name: "";
                readonly nameLocation: "-1:-1:-1";
                readonly parameters: {
                    readonly id: 25855;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25854;
                        readonly mutability: "mutable";
                        readonly name: "_config";
                        readonly nameLocation: "14788:7:141";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25861;
                        readonly src: "14758:37:141";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10934_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig";
                        };
                        readonly typeName: {
                            readonly id: 25853;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 25852;
                                readonly name: "IHyperdrive.PoolConfig";
                                readonly nameLocations: readonly ["14758:11:141", "14770:10:141"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10934;
                                readonly src: "14758:22:141";
                            };
                            readonly referencedDeclaration: 10934;
                            readonly src: "14758:22:141";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolConfig_$10934_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "14748:53:141";
                };
                readonly returnParameters: {
                    readonly id: 25859;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "14829:0:141";
                };
                readonly scope: 25862;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "public";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 25848;
                    readonly name: "HyperdriveTarget4";
                    readonly nameLocations: readonly ["14693:17:141"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 5778;
                    readonly src: "14693:17:141";
                };
                readonly id: 25849;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "14693:17:141";
            }, {
                readonly baseName: {
                    readonly id: 25850;
                    readonly name: "MockHyperdriveBase";
                    readonly nameLocations: readonly ["14712:18:141"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 25444;
                    readonly src: "14712:18:141";
                };
                readonly id: 25851;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "14712:18:141";
            }];
            readonly canonicalName: "MockHyperdriveTarget4";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [25862, 25444, 5778, 14975, 18281, 16811, 15877, 17295, 13335, 14511, 18497, 72173, 11666, 12232];
            readonly name: "MockHyperdriveTarget4";
            readonly nameLocation: "14668:21:141";
            readonly scope: 25863;
            readonly usedErrors: readonly [11005, 11017, 11026, 11041, 11047, 11050, 11053, 11056, 11062, 11065, 11071, 11074, 11085, 11088, 11097, 11100, 11103, 11106, 11112, 72118];
            readonly usedEvents: readonly [11486, 11501, 11520, 11535, 11552, 11571, 11590, 11611, 11624, 11631, 11636, 11641, 11646, 11653, 11658, 11665, 12213, 12222, 12231];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 141;
};
//# sourceMappingURL=MockHyperdriveTarget3.d.ts.map