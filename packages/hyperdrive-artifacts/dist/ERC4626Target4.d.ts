export declare const ERC4626Target4: {
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
            readonly internalType: "contract IERC4626";
            readonly name: "__vault";
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
        readonly object: "0x6102406040523480156200001257600080fd5b50604051620047ad380380620047ad8339810160408190526200003591620001de565b600160005581516001600160a01b039081166080908152606080850151610180908152918501516101a05260a0808601516101c05260e08087015190915260c080870151905261010080870151909152918501805151909252815160209081015161012090815283516040908101516101409081529451909301516101609081529187015185166101e052918601516102005290850151600a80549185166001600160a01b03199283161790559185015160088054918516918416919091179055909301516009805491831691909416179092551661022052620002e6565b6040516101a081016001600160401b03811182821017156200014657634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200016457600080fd5b919050565b6000608082840312156200017c57600080fd5b604051608081016001600160401b0381118282101715620001ad57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600080828403610220811215620001f457600080fd5b610200808212156200020557600080fd5b6200020f62000114565b91506200021c856200014c565b82526200022c602086016200014c565b602083015260408501516040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e0830152610100808601518184015250610120620002898187016200014c565b908301526101406200029d8682016200014c565b90830152610160620002b18682016200014c565b90830152610180620002c68787830162000169565b8184015250819350620002db8186016200014c565b925050509250929050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516143776200043660003960008181610e9501528181611b0001528181611b7a0152611c0c015260005050600050506000818160ec0152612289015260008181610b7d015281816113cf0152818161143401528181611d6e01528181611e9301528181611ecf01528181612131015261226301526000818161091001528181610976015261223d01526000610ff3015260008181611119015281816119be0152611a3701526000818161063a01528181610a10015281816110ed0152611a0b0152600061198a0152600081816108ee0152818161099701526122af0152600081816101790152818161057a0152612b7b01526000818161033b015281816103fc01526104d6015260008181611ad30152611b3401526143776000f3fe6080604052600436106100295760003560e01c8063dbbe80701461002e578063ed64bab21461005a575b600080fd5b61004161003c366004613fdf565b61007c565b6040805192835260208301919091520160405180910390f35b34801561006657600080fd5b5061007a61007536600461403e565b610099565b005b60008061008b868686866100a5565b915091505b94509492505050565b6100a281610304565b50565b6000806100b0610436565b600554610100900460ff16156100d9576040516321081abf60e01b815260040160405180910390fd5b6100e1610460565b6100ea83610481565b7f000000000000000000000000000000000000000000000000000000000000000086101561012b5760405163211ddda360e11b815260040160405180910390fd5b60006101356104b7565b905084811015610158576040516342af972b60e01b815260040160405180910390fd5b60006101626104cf565b905060006101708284610505565b9050600061019e7f00000000000000000000000000000000000000000000000000000000000000008461406d565b905060008060006101b08d88876108c8565b92509250925080600b60008282546101c8919061406d565b90915550600090506101db84898d610a4a565b9050808d10156101fe5760405163c972651760e01b815260040160405180910390fd5b610208818c610a7c565b50506102168e848a88610b55565b6000610223600287610d62565b905060008f9050610247828e60000160208101906102419190614080565b83610d97565b848a8e846102586020830183614080565b6001600160a01b03167fb354b32bd86ebd9f0968a338e5c2873d7f0d473aa7a668c2488e66038380258b8c8c61028f8b8888610e3f565b61029f60408801602089016140b7565b6102b5898f8c6102af91906140d4565b90610e67565b6040805195865260208601949094529284019190915215156060830152608082015260a0810188905260c00160405180910390a350979c50929a50505050505050505050506100906001600055565b61030c610436565b6000818152600760205260408120546001600160801b0316900361042c5760006103346104cf565b90506103607f0000000000000000000000000000000000000000000000000000000000000000836140fd565b15158061036c57508181105b1561038a5760405163ecd29e8160e01b815260040160405180910390fd5b8082036103a8576103a28161039d6104b7565b610505565b5061042a565b815b6000818152600760205260409020546001600160801b031682821480156103cf575080155b156103df576103dc6104b7565b90505b80156103f6576103ef8482610505565b5050610428565b506104217f00000000000000000000000000000000000000000000000000000000000000008261406d565b90506103aa565b505b505b6100a26001600055565b60026000540361045957604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b341561047f57604051631574f9f360e01b815260040160405180910390fd5b565b60006104906020830183614080565b6001600160a01b0316036100a25760405163f0dd15fd60e01b815260040160405180910390fd5b60006104ca670de0b6b3a7640000610e7c565b905090565b60006104fb7f0000000000000000000000000000000000000000000000000000000000000000426140fd565b6104ca90426140d4565b600082815260076020526040812080546001600160801b031615158061052a57504284115b1561054057546001600160801b031690506108c2565b61054983610f08565b81546001600160801b0319166001600160801b039190911617815561056d83610f32565b506000905060078161059f7f0000000000000000000000000000000000000000000000000000000000000000886140d4565b815260208101919091526040016000908120546001600160801b031691506105c8600287610d62565b6000818152600e60205260408120549192508115610709575060016000806105f2848a88846110d6565b9150915080600b6000828254610608919061406d565b9091555061062490508460008461061e816111a4565b8e6111ce565b61062e818361406d565b915061065e8483888c8d7f0000000000000000000000000000000000000000000000000000000000000000611348565b915061067261066d838b610e67565b611392565b600580546002906106939084906201000090046001600160701b0316614111565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506106c082610f08565b600580546010906106e2908490600160801b90046001600160801b0316614131565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b600061071660018a610d62565b6000818152600e602052604090205490915080156108265760019250600080610742838c8a60016110d6565b9150915080600b6000828254610758919061406d565b909155508c90506107758460008561076f816111a4565b856113b8565b61077f82846140d4565b925061078e61066d848e610e67565b600580546002906107af9084906201000090046001600160701b0316614111565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506107dc83610f08565b600580546010906107fe908490600160801b90046001600160801b0316614131565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505b821561085d57610852610838856111a4565b610841836111a4565b61084b9190614151565b60006115ad565b61085b89611660565b505b60006108688a6117cf565b50604080518c815260208101889052908101849052606081018290529091508b907f5012836090f6cac0f5b321be3188c3cd9c82c8252a23afea128ea014a6fd15519060800160405180910390a289985050505050505050505b92915050565b60008060006109346108d86118bf565b600154600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f00000000000000000000000000000000000000000000000000000000000000006118e0565b915085610941838761190c565b1115610951576109516002611921565b60008060006109bb6109616118bf565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611945565b90506109d189670de0b6b3a7640000838b611965565b509194509092506109e4905082846140d4565b6109ee90866140d4565b9450610a3a88610a348b610a02868a6140d4565b8b610a0d8e82611a73565b8e7f0000000000000000000000000000000000000000000000000000000000000000611a89565b9061190c565b9550909250505093509350939050565b6000610a5c60408301602084016140b7565b15610a68575082610a75565b610a728484611aae565b90505b9392505050565b60008080610a9060408501602086016140b7565b15610ab557610aab85610aa66040870187614171565b611ac3565b9093509050610ad1565b5034610acd85610ac86040870187614171565b611bff565b8492505b610ad96104b7565b91508015610b4c57604051600090339083908381818185875af1925050503d8060008114610b23576040519150601f19603f3d011682016040523d82523d6000602084013e610b28565b606091505b5050905080610b4a576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b6001546001600160801b031683811015610b7357610b736003611921565b60035490849003907f000000000000000000000000000000000000000000000000000000000000000090610bab908390600f0b611c34565b1015610bbb57610bbb6001611921565b600354610c0a90610c0590600160801b90046001600160801b0316610be8670de0b6b3a7640000866141b8565b600454600160801b90046001600160801b03169190896001611c5c565b610f08565b600480546001600160801b03928316600160801b029216919091179055610c3081610f08565b600180546001600160801b0319166001600160801b0392909216919091179055610c5985610f08565b60018054601090610c7b908490600160801b90046001600160801b0316614131565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610ca885610f08565b60038054601090610cca908490600160801b90046001600160801b0316614131565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000610cf983611d23565b9050610d1781610d08886111a4565b610d129084614151565b6115ad565b610d2084611d67565b610d2e57610d2e6003611921565b6000610d3985611660565b905080610d5957604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b60006001600160f81b03821115610d8c5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600d602090815260408083206001600160a01b038616845290915281208054839290610dc990849061406d565b90915550506000838152600e602052604081208054839290610dec90849061406d565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b6000610e5160408301602084016140b7565b15610e6057610a728484611aae565b5082610a75565b6000610a758383670de0b6b3a7640000611dc7565b6040516303d1689d60e11b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906307a2d13a90602401602060405180830381865afa158015610ee4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108c291906141cf565b6000600160801b8210610f2e57604051630f0af95160e11b815260040160405180910390fd5b5090565b6005546000908190610f55908490600160801b90046001600160801b0316610e67565b6005546201000090046001600160701b031692509050818111156110d1576000610f7f83836140d4565b9050610f8e610c058286611de5565b60058054601090610fb0908490600160801b90046001600160801b03166141e8565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000610fe98583611aae90919063ffffffff16565b90506000611017827f0000000000000000000000000000000000000000000000000000000000000000610e67565b905080600b600082825461102b919061406d565b9091555061103b905081836140d4565b915061104682610f08565b600180546000906110619084906001600160801b0316614131565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061108e82611dfa565b600380546000906110a3908490600f0b614208565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b6000806110e38686611aae565b91506000611111837f0000000000000000000000000000000000000000000000000000000000000000610e67565b905061113d817f0000000000000000000000000000000000000000000000000000000000000000610e67565b915083156111605761114f82826140d4565b61115990846140d4565b9250611177565b61116a82826140d4565b611174908461406d565b92505b8486101561119a5761118a838787611dc7565b9250611197828787611dc7565b91505b5094509492505050565b60006001600160ff1b03821115610f2e5760405163396ea70160e11b815260040160405180910390fd5b600354600160801b90046001600160801b0316611217610c05826111fa670de0b6b3a7640000866141b8565b600454600160801b90046001600160801b031691908a6000611c5c565b600480546001600160801b03928316600160801b02921691909117905561123d86610f08565b61124790826141e8565b600380546001600160801b03928316600160801b02921691909117905561126d84610f08565b600180546000906112889084906001600160801b0316614131565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506112b583611e24565b600380546000906112ca908490600f0b614208565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506112fa85610f08565b6001805460109061131c908490600160801b90046001600160801b03166141e8565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b6000806113608461135a8a888a611dc7565b90611aae565b905061136d888486611dc7565b611377908261406d565b9050868111156113875786810391505b509695505050505050565b6000600160701b8210610f2e5760405163086b151760e11b815260040160405180910390fd5b6001546001600160801b0316838110806113fa57507f00000000000000000000000000000000000000000000000000000000000000006113f885836140d4565b105b15611409576114096003611921565b6003549084900390600f0b61141e8482614151565b90508361142a866111a4565b13801561145f57507f000000000000000000000000000000000000000000000000000000000000000061145d8383611c34565b105b1561146e5761146e6001611921565b600254600160801b90046001600160801b03166114b0610c058261149a670de0b6b3a7640000886141b8565b6004546001600160801b031691908c6000611c5c565b600480546001600160801b0319166001600160801b03929092169190911790556114da88826140d4565b90506114e581610f08565b600280546001600160801b03928316600160801b02921691909117905561150b83610f08565b600180546001600160801b0319166001600160801b039290921691909117905561153482611e24565b600380546001600160801b0319166001600160801b039290921691909117905561155d87610f08565b6001805460109061157f908490600160801b90046001600160801b0316614131565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60006115d66115bc8483611e62565b6115c7846000611e62565b6115d19190614151565b611e24565b9050600081600f0b131561162b57600280548291906000906116029084906001600160801b0316614131565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b121561165b5761164081614235565b600280546000906116029084906001600160801b03166141e8565b505050565b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e954909182916116ab916001600160801b0316906140d4565b9050806000036116be5750600192915050565b60006116c984611e71565b9050806000036116dd575060019392505050565b6000806116eb838588611f16565b91509150806117005750600095945050505050565b60008061170c8461201c565b9150915061171982610f08565b600680546000906117349084906001600160801b0316614131565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061176181610f08565b60068054601090611783908490600160801b90046001600160801b0316614131565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506117c16117b3826111a4565b6117bc9061425b565b612104565b506001979650505050505050565b6000806000806117e66117e1866121f4565b61232e565b91509150806117fc575060009485945092505050565b600080861161180c576000611816565b6118168387610e67565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b0390921691611881919061406d565b61188b91906140d4565b9050806000036118a45750600096879650945050505050565b60006118b08383611aae565b98600198509650505050505050565b6001546003546000916104ca916001600160801b0390911690600f0b611c34565b60006119018787876118fa88670de0b6b3a76400006140d4565b87876123bb565b979650505050505050565b6000610a758383670de0b6b3a76400006123e0565b80604051633c06d78b60e11b815260040161193c9190614277565b60405180910390fd5b600061195c82611956858888611dc7565b90612406565b95945050505050565b60008080806119b687866119af8b610a346119888c670de0b6b3a76400006140d4565b7f00000000000000000000000000000000000000000000000000000000000000009061190c565b91906123e0565b93506119e2847f0000000000000000000000000000000000000000000000000000000000000000610e67565b91506000611a036119fb89670de0b6b3a76400006140d4565b8a90886123e0565b9050611a2f817f000000000000000000000000000000000000000000000000000000000000000061190c565b9350611a5b847f0000000000000000000000000000000000000000000000000000000000000000610e67565b611a65908461406d565b915050945094509450949050565b6000818311611a825781610a75565b5090919050565b600080611aa184611a9b8a888a6123e0565b90611de5565b905061136d8884866123e0565b6000610a7583670de0b6b3a764000084611dc7565b600080611afb6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333088612471565b611b5b7f0000000000000000000000000000000000000000000000000000000000000000611b2a87600161406d565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001691906124de565b604051636e553f6560e01b8152600481018690523060248201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636e553f65906044016020604051808303816000875af1158015611bcb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611bef91906141cf565b925060009150505b935093915050565b61165b6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333086612471565b600080611c41848461256e565b909250905080611c5557611c556001611921565b5092915050565b600082600003611c6d57508461195c565b8115611cdf57611c9e611c80848761406d565b611c8a8587610e67565b611c94888a610e67565b61135a919061406d565b90506000611cac85886125aa565b90506000611cba8689611a73565b905081831015611ccc57819250611cd8565b80831115611cd8578092505b505061195c565b828503611cee5750600061195c565b611d19611cfb84876140d4565b611d05858761190c565b611d0f888a610e67565b61135a91906140d4565b9695505050505050565b6000611d4b600e6000611d37600286610d62565b8152602001908152602001600020546111a4565b611d5d600e6000611d37600187610d62565b6108c29190614151565b6000611d937f00000000000000000000000000000000000000000000000000000000000000008361190c565b600254611da991906001600160801b031661406d565b600154611dbf906001600160801b031684610e67565b101592915050565b6000826000190484118302158202611dde57600080fd5b5091020490565b6000610a7583670de0b6b3a7640000846123e0565b600060016001607f1b03821115610f2e5760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b03198212801590611e45575060016001607f1b038213155b610f2e5760405163a5353be560e01b815260040160405180910390fd5b6000818313611a825781610a75565b6002546000908190611e8c906001600160801b031684611de5565b9050611eb87f00000000000000000000000000000000000000000000000000000000000000008261406d565b6001546001600160801b03161115611f10576001547f000000000000000000000000000000000000000000000000000000000000000090611f039083906001600160801b03166140d4565b611f0d91906140d4565b91505b50919050565b611f1e613f2c565b600080611f2a846121f4565b90506000611f378261232e565b9350905082611f4c575060009150611bf79050565b6000611f73611f6e846101600151856101400151610e6790919063ffffffff16565b6111a4565b611f93611f6e85610120015186610100015161190c90919063ffffffff16565b611f9d9190614151565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6000806000806120348560c001518660e0015161256e565b915091508061204a575060009485945092505050565b600061205686846125b9565b92509050811580612065575080155b1561207857506000958695509350505050565b600061208487836126c8565b90508060000361209d5750600096879650945050505050565b866060015181116120b357969095509350505050565b50606086015160006120c6888685612799565b9050806000036120e0575060009788975095505050505050565b8281106120f7575060009788975095505050505050565b9097909650945050505050565b6001546003546001600160801b0380831692600f9290920b91600160801b900416600080806121568686867f00000000000000000000000000000000000000000000000000000000000000008b612ae9565b92509250925085831461218d5761216c83610f08565b600180546001600160801b0319166001600160801b03929092169190911790555b8482146121be5761219d82611e24565b600380546001600160801b0319166001600160801b03929092169190911790555b838114610d59576121ce81610f08565b600180546001600160801b03928316600160801b02921691909117905550505050505050565b6121fc613f7e565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e083015260025404821661010082015260045490916101208301916122f49116612b30565b81526003546001600160801b03600160801b918290048116602084015260045460409093019261232692900416612b30565b905292915050565b600080600080600061233f86612ba6565b915091508061235657506000958695509350505050565b6123638660a001516111a4565b61236c87612ec6565b8361237a89600001516111a4565b612384919061429f565b61238e919061429f565b6123989190614151565b9250505060008112156123b15750600093849350915050565b9360019350915050565b6000806123cc888888888888612f2a565b909250905080611387576113876000611921565b60008260001904841183021582026123f757600080fd5b50910281810615159190040190565b60008160000361241f5750670de0b6b3a76400006108c2565b8260000361242f575060006108c2565b600061243a836111a4565b9050600061244f61244a866111a4565b612ff4565b9050818102612466670de0b6b3a7640000826142c7565b9050611d198161321a565b6040516001600160a01b0384811660248301528381166044830152606482018390526124d89186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b0383818316178352505050506133af565b50505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b17905261252f8482613412565b6124d8576040516001600160a01b0384811660248301526000604483015261256491869182169063095ea7b3906064016124a6565b6124d884826133af565b60008060008361257d866111a4565b6125879190614151565b9050600081121561259f576000809250925050610b4e565b946001945092505050565b6000818311611f105782610a75565b60008060008460a00151126125d657505060808201516001610b4e565b60008460a001516125e69061425b565b9050600061262285876101000151886000015160e00151670de0b6b3a764000061261091906140d4565b895160608101516080909101516134b5565b93509050821580612631575080155b1561264457600080935093505050610b4e565b60006126508383611de5565b9050670de0b6b3a7640000811161268c5780670de0b6b3a76400000394506126858760c0015186610e6790919063ffffffff16565b945061269b565b60008094509450505050610b4e565b86608001518511156126ba578660800151600194509450505050610b4e565b506001925050509250929050565b6000806126fe8460c001518560e00151866101000151876000015160a001516126f0886111a4565b6126f99061425b565b613561565b875160408101929092526020820192909252919091529050806127255760009150506108c2565b6000612734856000015161232e565b9250905081612748576000925050506108c2565b8460200151811061275e576000925050506108c2565b600085606001518660400151612774919061406d565b905061278f82876020015183611dc79092919063ffffffff16565b611d1990826140d4565b600080846060015185604001516127b0919061406d565b602086015160608701519192506000916127ca9184611dc7565b90508560a001516000036127e1579150610a759050565b60005b6004811015612adf576127f782866125aa565b915060006128208860c001518960e001518a61010001518b6000015160a001516126f0886111a4565b8b51604081019290925260208201929092529190915290508061284a576000945050505050610a75565b60006128598960000151613679565b90506128668982876136a9565b15612872575050612adf565b60008960a0015113156129d657885180516020820151604083015160a084015160e0909401518d946000946128cc94909390929091906128ba90670de0b6b3a76400006140d4565b87516060810151608090910151613715565b94509050836128e5576000975050505050505050610a75565b808260a00151106129d3576128f982613801565b909650935083612913576000975050505050505050610a75565b6129388260c001518360e00151846101000151856000015160a001516126f08b6111a4565b85516040810192909252602082019290925291909152935083612965576000975050505050505050610a75565b815180516020820151604083015160a0909301518e5160e001516129979491906128ba90670de0b6b3a76400006140d4565b94509050836129b0576000975050505050505050610a75565b8a60a0015181116129ca5785975050505050505050610a75565b505050506127e4565b50505b60006129e78a8a8c60a001516138d7565b93509050821580612a005750670de0b6b3a76400008110155b15612a145760009650505050505050610a75565b80670de0b6b3a76400000390506000612a41611f6e8c604001518d6020015161190c90919063ffffffff16565b612a4e611f6e858a610e67565b612a589190614151565b90506000811315612a8257612a718761135a8385611aae565b612a7b908761406d565b9550612ad0565b6000811215612ac7576000612a9c8861135a85818661425b565b905086811015612ab0578087039650612ac1565b600098505050505050505050610a75565b50612ad0565b50505050612adf565b846001019450505050506127e4565b5095945050505050565b600080600080612afc8989898989613561565b9296509094509250905080612b2457604051635044b7f560e01b815260040160405180910390fd5b50955095509592505050565b600080670de0b6b3a7640000612b446104cf565b612b4e91906141b8565b9050808311612b5e576000612b68565b612b6881846140d4565b9150611f0d612b9f670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006141b8565b8390611aae565b6000806000612bcb611f6e856101600151866101400151610e6790919063ffffffff16565b612beb611f6e86610120015187610100015161190c90919063ffffffff16565b612bf59190614151565b9050600080612c0c8660000151876020015161256e565b9150915080612c2357506000958695509350505050565b6000831315612d645760008390506000612c71886000015189602001518a604001518b60a001518c60e00151670de0b6b3a7640000612c6291906140d4565b8d606001518e60800151613715565b9350905082612c8a575060009788975095505050505050565b818110612d28576000612cc4858a60400151858c60e00151670de0b6b3a7640000612cb591906140d4565b8d606001518e60800151612f2a565b9450905083158015612cd957508860c0015183105b15612cf05750600098600198509650505050505050565b83612d0657506000988998509650505050505050565b612d0f816111a4565b612d189061425b565b9960019950975050505050505050565b6000886020015112612d5057612d478860a0015185611f6e91906140d4565b6118b09061425b565b60a08801518851612d4791611f6e916140d4565b6000831215612eb7576000612d788461425b565b90506000612dac8489604001518a60e00151670de0b6b3a7640000612d9d91906140d4565b8b606001518c608001516134b5565b9350905082612dc5575060009788975095505050505050565b818110612e4a576000612dff858a60400151858c60e00151670de0b6b3a7640000612df091906140d4565b8d606001518e60800151613c31565b9450905083158015612e1457508860c0015183105b15612e2b5750600098600198509650505050505050565b83612e4157506000988998509650505050505050565b612d18816111a4565b6000612e7c858a604001518b60e00151670de0b6b3a7640000612e6d91906140d4565b8c606001518d60800151613d08565b9450905083612e9657506000988998509650505050505050565b612d18612ead8a60600151848661135a91906140d4565b611f6e908361406d565b50600095600195509350505050565b6000612ef9611f6e836101200151670de0b6b3a7640000612ee791906140d4565b606085015161010086015191906123e0565b611d5d611f6e846101600151670de0b6b3a7640000612f1891906140d4565b60608601516101408701519190611dc7565b6000806000612f3c8989888888613db7565b9050612f4c86611956898b61406d565b975087811015612f63576000809250925050612fe9565b878103612f718186886123e0565b9050670de0b6b3a76400008110612fa557612f9e612f97670de0b6b3a764000089611de5565b8290612406565b9050612fbd565b612fba612f97670de0b6b3a764000089611aae565b90505b612fc78186611de5565b9050808a1015612fdf57600080935093505050612fe9565b8903925060019150505b965096945050505050565b60008082136130165760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906130999084901c6111a4565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361323557506000919050565b680755bf798b4a1bf1e5821261325e576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190611d1974029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6111a4565b60006133c46001600160a01b03841683613de6565b905080516000141580156133e95750808060200190518101906133e791906142f5565b155b1561165b57604051635274afe760e01b81526001600160a01b038416600482015260240161193c565b6000806000846001600160a01b03168460405161342f9190614312565b6000604051808303816000865af19150503d806000811461346c576040519150601f19603f3d011682016040523d82523d6000602084013e613471565b606091505b509150915081801561349b57508051158061349b57508080602001905181019061349b91906142f5565b801561195c5750505050506001600160a01b03163b151590565b60008060006134c78888888888613db7565b905060006134f2670de0b6b3a76400006134e18888611aae565b6134eb919061406d565b8390611de5565b9050670de0b6b3a7640000811061351f57613518612f97670de0b6b3a764000089611de5565b9050613537565b613534612f97670de0b6b3a764000089611aae565b90505b8088101561354d57600080935093505050613557565b8703925060019150505b9550959350505050565b600080600080846000036135805750879250869150859050600161366d565b60008561358c8b6111a4565b613596919061429f565b90506135a1876111a4565b8112156135bc5760008060008094509450945094505061366d565b809450600089126135dc576135d5611f6e868b8d611dc7565b93506135ff565b6135f3611f6e6135eb8b61425b565b87908d6123e0565b6135fc9061425b565b93505b60008061360c8c8c61256e565b915091508061362b57600080600080965096509650965050505061366d565b6000613637888861256e565b92509050816136575760008060008097509750975097505050505061366d565b6136628b8285611dc7565b955060019450505050505b95509550955095915050565b60008060006136878461232e565b9150915080611c5557604051635516328b60e11b815260040160405180910390fd5b60208301516000906136bb9084611de5565b60408501516136cb908490611aae565b10158015610a72575060208401516136fb90846136f4633b9aca00670de0b6b3a764000061406d565b9190611dc7565b604085015161370b908490611de5565b1115949350505050565b60008060008812156137375761372a8861425b565b613734908761406d565b95505b60006137438a8a611c34565b90506000613754828a898989613df4565b9050600061377161376989611956898d61190c565b8890886123e0565b90508082101561378a57600080945094505050506137f5565b808203670de0b6b3a764000081106137b8576137b1612f97670de0b6b3a76400008b611aae565b90506137d0565b6137cd612f97670de0b6b3a76400008b611de5565b90505b8a8110156137e85760008095509550505050506137f5565b8a90039450600193505050505b97509795505050505050565b60008060008360e001511361381b57506000928392509050565b600061382a8460000151612ec6565b9050600061385685604001518660600151876040015161384a919061406d565b602088015191906123e0565b90506000821261387d578082101561387057819003613893565b5060009485945092505050565b6138868261425b565b613890908261406d565b90505b60e085015160c08601516138a89183906123e0565b9050808560c0015110156138c3575060009485945092505050565b808560c00151036001935093505050915091565b60008060008084126138fb578551604001516138f490859061406d565b9050613936565b60006139068561425b565b875160400151909150811015613926578651604001518190039150613934565b600080935093505050611bf7565b505b85518051602090910151600091829161394f919061256e565b91509150806139675760008094509450505050611bf7565b875160e081015160409091015160009161399c91613990916139899190612406565b8a90610e67565b6101008b015190611de5565b895160e08101516080909101516139c7916139bb916119569088610e67565b8b516060015190611de5565b6139d1919061406d565b90506000613a096139fd6139f68c6000015160e001518861240690919063ffffffff16565b8b9061190c565b6101008c015190611aae565b905080821015613a2457600080965096505050505050611bf7565b80820391506000613a66858c60000151604001518d6000015160e00151670de0b6b3a7640000613a5491906140d4565b8e516060810151608090910151613db7565b90506000613a908c6000015160e00151670de0b6b3a7640000613a8991906140d4565b8890612406565b905080821015613aad576000809850985050505050505050611bf7565b8b51608081015160609091015191830391613ac99183916123e0565b9050670de0b6b3a76400008110613b0d578b5160e00151613b0690612f9790613afa90670de0b6b3a76400006140d4565b8e5160e0015190611de5565b9050613b3c565b8b5160e00151613b3990612f9790613b2d90670de0b6b3a76400006140d4565b8e5160e0015190611aae565b90505b8b5160600151613b4f90859083906123e0565b935083670de0b6b3a76400001115613b735783670de0b6b3a7640000039350613b87565b600060019850985050505050505050611bf7565b60008c60e0015112613be95760c08c015160e08d0151613ba691611de5565b9250670de0b6b3a76400008310613bca576000809850985050505050505050611bf7565b670de0b6b3a76400009290920391613be28484610e67565b9350613c1e565b613c1b613c028d60c001518e60e0015161135a9061425b565b613c1490670de0b6b3a764000061406d565b8590610e67565b93505b50919a60019a5098505050505050505050565b6000806000613c438989888888613db7565b905086881015613c5a576000809250925050612fe9565b9686900396613c698887612406565b975087811015613c80576000809250925050612fe9565b878103613c8e8186886123e0565b9050670de0b6b3a76400008110613cbb57613cb4612f97670de0b6b3a764000089611de5565b9050613cd3565b613cd0612f97670de0b6b3a764000089611aae565b90505b613cdd8186611de5565b905089811015613cf557600080935093505050612fe9565b9890980398600198509650505050505050565b6000806000613d1a8888888888613df4565b90506000613d3e670de0b6b3a7640000613d348888611de5565b612b9f919061406d565b9050670de0b6b3a76400008110613d6b57613d64612f97670de0b6b3a764000089611aae565b9050613d83565b613d80612f97670de0b6b3a764000089611de5565b90505b613d8d8186611aae565b905088811015613da557600080935093505050613557565b97909703976001975095505050505050565b6000613dc38585612406565b613ddc613dd486611956868b61190c565b8590856123e0565b611d19919061406d565b6060610a7583836000613e19565b6000613e008585612406565b613ddc613e1186611956868b610e67565b859085611dc7565b606081471015613e3e5760405163cd78605960e01b815230600482015260240161193c565b600080856001600160a01b03168486604051613e5a9190614312565b60006040518083038185875af1925050503d8060008114613e97576040519150601f19603f3d011682016040523d82523d6000602084013e613e9c565b606091505b5091509150611d19868383606082613ebc57613eb782613f03565b610a75565b8151158015613ed357506001600160a01b0384163b155b15613efc57604051639996b31560e01b81526001600160a01b038516600482015260240161193c565b5080610a75565b805115613f135780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b604051806101200160405280613f40613f7e565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60008060008060808587031215613ff557600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561402157600080fd5b85016060818803121561403357600080fd5b939692955090935050565b60006020828403121561405057600080fd5b5035919050565b634e487b7160e01b600052601160045260246000fd5b808201808211156108c2576108c2614057565b60006020828403121561409257600080fd5b81356001600160a01b0381168114610a7557600080fd5b80151581146100a257600080fd5b6000602082840312156140c957600080fd5b8135610a75816140a9565b818103818111156108c2576108c2614057565b634e487b7160e01b600052601260045260246000fd5b60008261410c5761410c6140e7565b500690565b6001600160701b03818116838216019080821115611c5557611c55614057565b6001600160801b03818116838216019080821115611c5557611c55614057565b8181036000831280158383131683831282161715611c5557611c55614057565b6000808335601e1984360301811261418857600080fd5b83018035915067ffffffffffffffff8211156141a357600080fd5b602001915036819003821315610b4e57600080fd5b80820281158282048414176108c2576108c2614057565b6000602082840312156141e157600080fd5b5051919050565b6001600160801b03828116828216039080821115611c5557611c55614057565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156108c2576108c2614057565b600081600f0b60016001607f1b0319810361425257614252614057565b60000392915050565b6000600160ff1b820161427057614270614057565b5060000390565b602081016004831061429957634e487b7160e01b600052602160045260246000fd5b91905290565b80820182811260008312801582168215821617156142bf576142bf614057565b505092915050565b6000826142d6576142d66140e7565b600160ff1b8214600019841416156142f0576142f0614057565b500590565b60006020828403121561430757600080fd5b8151610a75816140a9565b6000825160005b818110156143335760208186018101518583015201614319565b50600092019182525091905056fea2646970667358221220ad36db5586bda1d775f3a043ece28ce06284b1c6902a8f5eba1df916600a5f6864736f6c63430008140033";
        readonly sourceMap: "755:375:50:-:0;;;987:141;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1713:1:171;1917:7;:21;5192:17:120;;-1:-1:-1;;;;;5179:30:120;;;;;;;5299;;;;;5273:56;;;;5752:28;;;;5728:52;;6068:32;;;;;6040:60;;6283:26;;;;;6261:48;;;6339:24;;;;;6319:44;;-1:-1:-1;6388:19:120;;;;6373:34;;;6472:12;;;;;:18;6460:30;;;6511:12;;-1:-1:-1;6511:17:120;;;;-1:-1:-1;6500:28:120;;;6557:12;;-1:-1:-1;6557:25:120;;;;6538:44;;;;6615:12;;:29;;;;6592:52;;;;-1:-1:-1;;;6721:21:120;6704:38;;;;-1:-1:-1;;;6770:22:120;6752:40;;6895:18;;;;6881:11;:32;;;;;-1:-1:-1;;;;;;6881:32:120;;;;;;6939:20;;;;6923:13;:36;;;;;;;;;;;;;;6987:22;;;;6969:15;:40;;;;;;;;;;;;;1508:16:44;;;755:375:50;;14:347:235;81:2;75:9;123:6;111:19;;-1:-1:-1;;;;;145:34:235;;181:22;;;142:62;139:185;;;246:10;241:3;237:20;234:1;227:31;281:4;278:1;271:15;309:4;306:1;299:15;139:185;340:2;333:22;14:347;:::o;366:185::-;453:13;;-1:-1:-1;;;;;495:31:235;;485:42;;475:70;;541:1;538;531:12;475:70;366:185;;;:::o;556:681::-;618:5;666:4;654:9;649:3;645:19;641:30;638:50;;;684:1;681;674:12;638:50;717:2;711:9;759:4;747:17;;-1:-1:-1;;;;;779:34:235;;815:22;;;776:62;773:185;;;880:10;875:3;871:20;868:1;861:31;915:4;912:1;905:15;943:4;940:1;933:15;773:185;978:10;974:2;967:22;;1007:6;998:15;;1043:9;1037:16;1029:6;1022:32;1108:2;1097:9;1093:18;1087:25;1082:2;1074:6;1070:15;1063:50;1167:2;1156:9;1152:18;1146:25;1141:2;1133:6;1129:15;1122:50;1226:2;1215:9;1211:18;1205:25;1200:2;1192:6;1188:15;1181:50;;556:681;;;;:::o;1242:1490::-;1368:6;1376;1420:9;1411:7;1407:23;1450:3;1446:2;1442:12;1439:32;;;1467:1;1464;1457:12;1439:32;1490:6;1516:2;1512;1508:11;1505:31;;;1532:1;1529;1522:12;1505:31;1558:17;;:::i;:::-;1545:30;;1598:48;1636:9;1598:48;:::i;:::-;1591:5;1584:63;1679:57;1732:2;1721:9;1717:18;1679:57;:::i;:::-;1674:2;1667:5;1663:14;1656:81;1790:2;1779:9;1775:18;1769:25;1764:2;1757:5;1753:14;1746:49;1848:2;1837:9;1833:18;1827:25;1822:2;1815:5;1811:14;1804:49;1907:3;1896:9;1892:19;1886:26;1880:3;1873:5;1869:15;1862:51;1967:3;1956:9;1952:19;1946:26;1940:3;1933:5;1929:15;1922:51;2027:3;2016:9;2012:19;2006:26;2000:3;1993:5;1989:15;1982:51;2087:3;2076:9;2072:19;2066:26;2060:3;2053:5;2049:15;2042:51;2112:3;2168:2;2157:9;2153:18;2147:25;2142:2;2135:5;2131:14;2124:49;;2192:3;2227:57;2280:2;2269:9;2265:18;2227:57;:::i;:::-;2211:14;;;2204:81;2304:3;2339:57;2377:18;;;2339:57;:::i;:::-;2323:14;;;2316:81;2416:3;2451:57;2489:18;;;2451:57;:::i;:::-;2435:14;;;2428:81;2528:3;2563:62;2617:7;2597:18;;;2563:62;:::i;:::-;2558:2;2551:5;2547:14;2540:86;;2645:5;2635:15;;2669:57;2722:2;2711:9;2707:18;2669:57;:::i;:::-;2659:67;;;;1242:1490;;;;;:::o;:::-;755:375:50;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly deployedBytecode: {
        readonly object: "0x6080604052600436106100295760003560e01c8063dbbe80701461002e578063ed64bab21461005a575b600080fd5b61004161003c366004613fdf565b61007c565b6040805192835260208301919091520160405180910390f35b34801561006657600080fd5b5061007a61007536600461403e565b610099565b005b60008061008b868686866100a5565b915091505b94509492505050565b6100a281610304565b50565b6000806100b0610436565b600554610100900460ff16156100d9576040516321081abf60e01b815260040160405180910390fd5b6100e1610460565b6100ea83610481565b7f000000000000000000000000000000000000000000000000000000000000000086101561012b5760405163211ddda360e11b815260040160405180910390fd5b60006101356104b7565b905084811015610158576040516342af972b60e01b815260040160405180910390fd5b60006101626104cf565b905060006101708284610505565b9050600061019e7f00000000000000000000000000000000000000000000000000000000000000008461406d565b905060008060006101b08d88876108c8565b92509250925080600b60008282546101c8919061406d565b90915550600090506101db84898d610a4a565b9050808d10156101fe5760405163c972651760e01b815260040160405180910390fd5b610208818c610a7c565b50506102168e848a88610b55565b6000610223600287610d62565b905060008f9050610247828e60000160208101906102419190614080565b83610d97565b848a8e846102586020830183614080565b6001600160a01b03167fb354b32bd86ebd9f0968a338e5c2873d7f0d473aa7a668c2488e66038380258b8c8c61028f8b8888610e3f565b61029f60408801602089016140b7565b6102b5898f8c6102af91906140d4565b90610e67565b6040805195865260208601949094529284019190915215156060830152608082015260a0810188905260c00160405180910390a350979c50929a50505050505050505050506100906001600055565b61030c610436565b6000818152600760205260408120546001600160801b0316900361042c5760006103346104cf565b90506103607f0000000000000000000000000000000000000000000000000000000000000000836140fd565b15158061036c57508181105b1561038a5760405163ecd29e8160e01b815260040160405180910390fd5b8082036103a8576103a28161039d6104b7565b610505565b5061042a565b815b6000818152600760205260409020546001600160801b031682821480156103cf575080155b156103df576103dc6104b7565b90505b80156103f6576103ef8482610505565b5050610428565b506104217f00000000000000000000000000000000000000000000000000000000000000008261406d565b90506103aa565b505b505b6100a26001600055565b60026000540361045957604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b341561047f57604051631574f9f360e01b815260040160405180910390fd5b565b60006104906020830183614080565b6001600160a01b0316036100a25760405163f0dd15fd60e01b815260040160405180910390fd5b60006104ca670de0b6b3a7640000610e7c565b905090565b60006104fb7f0000000000000000000000000000000000000000000000000000000000000000426140fd565b6104ca90426140d4565b600082815260076020526040812080546001600160801b031615158061052a57504284115b1561054057546001600160801b031690506108c2565b61054983610f08565b81546001600160801b0319166001600160801b039190911617815561056d83610f32565b506000905060078161059f7f0000000000000000000000000000000000000000000000000000000000000000886140d4565b815260208101919091526040016000908120546001600160801b031691506105c8600287610d62565b6000818152600e60205260408120549192508115610709575060016000806105f2848a88846110d6565b9150915080600b6000828254610608919061406d565b9091555061062490508460008461061e816111a4565b8e6111ce565b61062e818361406d565b915061065e8483888c8d7f0000000000000000000000000000000000000000000000000000000000000000611348565b915061067261066d838b610e67565b611392565b600580546002906106939084906201000090046001600160701b0316614111565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506106c082610f08565b600580546010906106e2908490600160801b90046001600160801b0316614131565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b600061071660018a610d62565b6000818152600e602052604090205490915080156108265760019250600080610742838c8a60016110d6565b9150915080600b6000828254610758919061406d565b909155508c90506107758460008561076f816111a4565b856113b8565b61077f82846140d4565b925061078e61066d848e610e67565b600580546002906107af9084906201000090046001600160701b0316614111565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506107dc83610f08565b600580546010906107fe908490600160801b90046001600160801b0316614131565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505b821561085d57610852610838856111a4565b610841836111a4565b61084b9190614151565b60006115ad565b61085b89611660565b505b60006108688a6117cf565b50604080518c815260208101889052908101849052606081018290529091508b907f5012836090f6cac0f5b321be3188c3cd9c82c8252a23afea128ea014a6fd15519060800160405180910390a289985050505050505050505b92915050565b60008060006109346108d86118bf565b600154600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f00000000000000000000000000000000000000000000000000000000000000006118e0565b915085610941838761190c565b1115610951576109516002611921565b60008060006109bb6109616118bf565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611945565b90506109d189670de0b6b3a7640000838b611965565b509194509092506109e4905082846140d4565b6109ee90866140d4565b9450610a3a88610a348b610a02868a6140d4565b8b610a0d8e82611a73565b8e7f0000000000000000000000000000000000000000000000000000000000000000611a89565b9061190c565b9550909250505093509350939050565b6000610a5c60408301602084016140b7565b15610a68575082610a75565b610a728484611aae565b90505b9392505050565b60008080610a9060408501602086016140b7565b15610ab557610aab85610aa66040870187614171565b611ac3565b9093509050610ad1565b5034610acd85610ac86040870187614171565b611bff565b8492505b610ad96104b7565b91508015610b4c57604051600090339083908381818185875af1925050503d8060008114610b23576040519150601f19603f3d011682016040523d82523d6000602084013e610b28565b606091505b5050905080610b4a576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b6001546001600160801b031683811015610b7357610b736003611921565b60035490849003907f000000000000000000000000000000000000000000000000000000000000000090610bab908390600f0b611c34565b1015610bbb57610bbb6001611921565b600354610c0a90610c0590600160801b90046001600160801b0316610be8670de0b6b3a7640000866141b8565b600454600160801b90046001600160801b03169190896001611c5c565b610f08565b600480546001600160801b03928316600160801b029216919091179055610c3081610f08565b600180546001600160801b0319166001600160801b0392909216919091179055610c5985610f08565b60018054601090610c7b908490600160801b90046001600160801b0316614131565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610ca885610f08565b60038054601090610cca908490600160801b90046001600160801b0316614131565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000610cf983611d23565b9050610d1781610d08886111a4565b610d129084614151565b6115ad565b610d2084611d67565b610d2e57610d2e6003611921565b6000610d3985611660565b905080610d5957604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b60006001600160f81b03821115610d8c5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600d602090815260408083206001600160a01b038616845290915281208054839290610dc990849061406d565b90915550506000838152600e602052604081208054839290610dec90849061406d565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b6000610e5160408301602084016140b7565b15610e6057610a728484611aae565b5082610a75565b6000610a758383670de0b6b3a7640000611dc7565b6040516303d1689d60e11b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906307a2d13a90602401602060405180830381865afa158015610ee4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108c291906141cf565b6000600160801b8210610f2e57604051630f0af95160e11b815260040160405180910390fd5b5090565b6005546000908190610f55908490600160801b90046001600160801b0316610e67565b6005546201000090046001600160701b031692509050818111156110d1576000610f7f83836140d4565b9050610f8e610c058286611de5565b60058054601090610fb0908490600160801b90046001600160801b03166141e8565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000610fe98583611aae90919063ffffffff16565b90506000611017827f0000000000000000000000000000000000000000000000000000000000000000610e67565b905080600b600082825461102b919061406d565b9091555061103b905081836140d4565b915061104682610f08565b600180546000906110619084906001600160801b0316614131565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061108e82611dfa565b600380546000906110a3908490600f0b614208565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b6000806110e38686611aae565b91506000611111837f0000000000000000000000000000000000000000000000000000000000000000610e67565b905061113d817f0000000000000000000000000000000000000000000000000000000000000000610e67565b915083156111605761114f82826140d4565b61115990846140d4565b9250611177565b61116a82826140d4565b611174908461406d565b92505b8486101561119a5761118a838787611dc7565b9250611197828787611dc7565b91505b5094509492505050565b60006001600160ff1b03821115610f2e5760405163396ea70160e11b815260040160405180910390fd5b600354600160801b90046001600160801b0316611217610c05826111fa670de0b6b3a7640000866141b8565b600454600160801b90046001600160801b031691908a6000611c5c565b600480546001600160801b03928316600160801b02921691909117905561123d86610f08565b61124790826141e8565b600380546001600160801b03928316600160801b02921691909117905561126d84610f08565b600180546000906112889084906001600160801b0316614131565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506112b583611e24565b600380546000906112ca908490600f0b614208565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506112fa85610f08565b6001805460109061131c908490600160801b90046001600160801b03166141e8565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b6000806113608461135a8a888a611dc7565b90611aae565b905061136d888486611dc7565b611377908261406d565b9050868111156113875786810391505b509695505050505050565b6000600160701b8210610f2e5760405163086b151760e11b815260040160405180910390fd5b6001546001600160801b0316838110806113fa57507f00000000000000000000000000000000000000000000000000000000000000006113f885836140d4565b105b15611409576114096003611921565b6003549084900390600f0b61141e8482614151565b90508361142a866111a4565b13801561145f57507f000000000000000000000000000000000000000000000000000000000000000061145d8383611c34565b105b1561146e5761146e6001611921565b600254600160801b90046001600160801b03166114b0610c058261149a670de0b6b3a7640000886141b8565b6004546001600160801b031691908c6000611c5c565b600480546001600160801b0319166001600160801b03929092169190911790556114da88826140d4565b90506114e581610f08565b600280546001600160801b03928316600160801b02921691909117905561150b83610f08565b600180546001600160801b0319166001600160801b039290921691909117905561153482611e24565b600380546001600160801b0319166001600160801b039290921691909117905561155d87610f08565b6001805460109061157f908490600160801b90046001600160801b0316614131565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60006115d66115bc8483611e62565b6115c7846000611e62565b6115d19190614151565b611e24565b9050600081600f0b131561162b57600280548291906000906116029084906001600160801b0316614131565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b121561165b5761164081614235565b600280546000906116029084906001600160801b03166141e8565b505050565b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e954909182916116ab916001600160801b0316906140d4565b9050806000036116be5750600192915050565b60006116c984611e71565b9050806000036116dd575060019392505050565b6000806116eb838588611f16565b91509150806117005750600095945050505050565b60008061170c8461201c565b9150915061171982610f08565b600680546000906117349084906001600160801b0316614131565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061176181610f08565b60068054601090611783908490600160801b90046001600160801b0316614131565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506117c16117b3826111a4565b6117bc9061425b565b612104565b506001979650505050505050565b6000806000806117e66117e1866121f4565b61232e565b91509150806117fc575060009485945092505050565b600080861161180c576000611816565b6118168387610e67565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b0390921691611881919061406d565b61188b91906140d4565b9050806000036118a45750600096879650945050505050565b60006118b08383611aae565b98600198509650505050505050565b6001546003546000916104ca916001600160801b0390911690600f0b611c34565b60006119018787876118fa88670de0b6b3a76400006140d4565b87876123bb565b979650505050505050565b6000610a758383670de0b6b3a76400006123e0565b80604051633c06d78b60e11b815260040161193c9190614277565b60405180910390fd5b600061195c82611956858888611dc7565b90612406565b95945050505050565b60008080806119b687866119af8b610a346119888c670de0b6b3a76400006140d4565b7f00000000000000000000000000000000000000000000000000000000000000009061190c565b91906123e0565b93506119e2847f0000000000000000000000000000000000000000000000000000000000000000610e67565b91506000611a036119fb89670de0b6b3a76400006140d4565b8a90886123e0565b9050611a2f817f000000000000000000000000000000000000000000000000000000000000000061190c565b9350611a5b847f0000000000000000000000000000000000000000000000000000000000000000610e67565b611a65908461406d565b915050945094509450949050565b6000818311611a825781610a75565b5090919050565b600080611aa184611a9b8a888a6123e0565b90611de5565b905061136d8884866123e0565b6000610a7583670de0b6b3a764000084611dc7565b600080611afb6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333088612471565b611b5b7f0000000000000000000000000000000000000000000000000000000000000000611b2a87600161406d565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001691906124de565b604051636e553f6560e01b8152600481018690523060248201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636e553f65906044016020604051808303816000875af1158015611bcb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611bef91906141cf565b925060009150505b935093915050565b61165b6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333086612471565b600080611c41848461256e565b909250905080611c5557611c556001611921565b5092915050565b600082600003611c6d57508461195c565b8115611cdf57611c9e611c80848761406d565b611c8a8587610e67565b611c94888a610e67565b61135a919061406d565b90506000611cac85886125aa565b90506000611cba8689611a73565b905081831015611ccc57819250611cd8565b80831115611cd8578092505b505061195c565b828503611cee5750600061195c565b611d19611cfb84876140d4565b611d05858761190c565b611d0f888a610e67565b61135a91906140d4565b9695505050505050565b6000611d4b600e6000611d37600286610d62565b8152602001908152602001600020546111a4565b611d5d600e6000611d37600187610d62565b6108c29190614151565b6000611d937f00000000000000000000000000000000000000000000000000000000000000008361190c565b600254611da991906001600160801b031661406d565b600154611dbf906001600160801b031684610e67565b101592915050565b6000826000190484118302158202611dde57600080fd5b5091020490565b6000610a7583670de0b6b3a7640000846123e0565b600060016001607f1b03821115610f2e5760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b03198212801590611e45575060016001607f1b038213155b610f2e5760405163a5353be560e01b815260040160405180910390fd5b6000818313611a825781610a75565b6002546000908190611e8c906001600160801b031684611de5565b9050611eb87f00000000000000000000000000000000000000000000000000000000000000008261406d565b6001546001600160801b03161115611f10576001547f000000000000000000000000000000000000000000000000000000000000000090611f039083906001600160801b03166140d4565b611f0d91906140d4565b91505b50919050565b611f1e613f2c565b600080611f2a846121f4565b90506000611f378261232e565b9350905082611f4c575060009150611bf79050565b6000611f73611f6e846101600151856101400151610e6790919063ffffffff16565b6111a4565b611f93611f6e85610120015186610100015161190c90919063ffffffff16565b611f9d9190614151565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6000806000806120348560c001518660e0015161256e565b915091508061204a575060009485945092505050565b600061205686846125b9565b92509050811580612065575080155b1561207857506000958695509350505050565b600061208487836126c8565b90508060000361209d5750600096879650945050505050565b866060015181116120b357969095509350505050565b50606086015160006120c6888685612799565b9050806000036120e0575060009788975095505050505050565b8281106120f7575060009788975095505050505050565b9097909650945050505050565b6001546003546001600160801b0380831692600f9290920b91600160801b900416600080806121568686867f00000000000000000000000000000000000000000000000000000000000000008b612ae9565b92509250925085831461218d5761216c83610f08565b600180546001600160801b0319166001600160801b03929092169190911790555b8482146121be5761219d82611e24565b600380546001600160801b0319166001600160801b03929092169190911790555b838114610d59576121ce81610f08565b600180546001600160801b03928316600160801b02921691909117905550505050505050565b6121fc613f7e565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e083015260025404821661010082015260045490916101208301916122f49116612b30565b81526003546001600160801b03600160801b918290048116602084015260045460409093019261232692900416612b30565b905292915050565b600080600080600061233f86612ba6565b915091508061235657506000958695509350505050565b6123638660a001516111a4565b61236c87612ec6565b8361237a89600001516111a4565b612384919061429f565b61238e919061429f565b6123989190614151565b9250505060008112156123b15750600093849350915050565b9360019350915050565b6000806123cc888888888888612f2a565b909250905080611387576113876000611921565b60008260001904841183021582026123f757600080fd5b50910281810615159190040190565b60008160000361241f5750670de0b6b3a76400006108c2565b8260000361242f575060006108c2565b600061243a836111a4565b9050600061244f61244a866111a4565b612ff4565b9050818102612466670de0b6b3a7640000826142c7565b9050611d198161321a565b6040516001600160a01b0384811660248301528381166044830152606482018390526124d89186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b0383818316178352505050506133af565b50505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b17905261252f8482613412565b6124d8576040516001600160a01b0384811660248301526000604483015261256491869182169063095ea7b3906064016124a6565b6124d884826133af565b60008060008361257d866111a4565b6125879190614151565b9050600081121561259f576000809250925050610b4e565b946001945092505050565b6000818311611f105782610a75565b60008060008460a00151126125d657505060808201516001610b4e565b60008460a001516125e69061425b565b9050600061262285876101000151886000015160e00151670de0b6b3a764000061261091906140d4565b895160608101516080909101516134b5565b93509050821580612631575080155b1561264457600080935093505050610b4e565b60006126508383611de5565b9050670de0b6b3a7640000811161268c5780670de0b6b3a76400000394506126858760c0015186610e6790919063ffffffff16565b945061269b565b60008094509450505050610b4e565b86608001518511156126ba578660800151600194509450505050610b4e565b506001925050509250929050565b6000806126fe8460c001518560e00151866101000151876000015160a001516126f0886111a4565b6126f99061425b565b613561565b875160408101929092526020820192909252919091529050806127255760009150506108c2565b6000612734856000015161232e565b9250905081612748576000925050506108c2565b8460200151811061275e576000925050506108c2565b600085606001518660400151612774919061406d565b905061278f82876020015183611dc79092919063ffffffff16565b611d1990826140d4565b600080846060015185604001516127b0919061406d565b602086015160608701519192506000916127ca9184611dc7565b90508560a001516000036127e1579150610a759050565b60005b6004811015612adf576127f782866125aa565b915060006128208860c001518960e001518a61010001518b6000015160a001516126f0886111a4565b8b51604081019290925260208201929092529190915290508061284a576000945050505050610a75565b60006128598960000151613679565b90506128668982876136a9565b15612872575050612adf565b60008960a0015113156129d657885180516020820151604083015160a084015160e0909401518d946000946128cc94909390929091906128ba90670de0b6b3a76400006140d4565b87516060810151608090910151613715565b94509050836128e5576000975050505050505050610a75565b808260a00151106129d3576128f982613801565b909650935083612913576000975050505050505050610a75565b6129388260c001518360e00151846101000151856000015160a001516126f08b6111a4565b85516040810192909252602082019290925291909152935083612965576000975050505050505050610a75565b815180516020820151604083015160a0909301518e5160e001516129979491906128ba90670de0b6b3a76400006140d4565b94509050836129b0576000975050505050505050610a75565b8a60a0015181116129ca5785975050505050505050610a75565b505050506127e4565b50505b60006129e78a8a8c60a001516138d7565b93509050821580612a005750670de0b6b3a76400008110155b15612a145760009650505050505050610a75565b80670de0b6b3a76400000390506000612a41611f6e8c604001518d6020015161190c90919063ffffffff16565b612a4e611f6e858a610e67565b612a589190614151565b90506000811315612a8257612a718761135a8385611aae565b612a7b908761406d565b9550612ad0565b6000811215612ac7576000612a9c8861135a85818661425b565b905086811015612ab0578087039650612ac1565b600098505050505050505050610a75565b50612ad0565b50505050612adf565b846001019450505050506127e4565b5095945050505050565b600080600080612afc8989898989613561565b9296509094509250905080612b2457604051635044b7f560e01b815260040160405180910390fd5b50955095509592505050565b600080670de0b6b3a7640000612b446104cf565b612b4e91906141b8565b9050808311612b5e576000612b68565b612b6881846140d4565b9150611f0d612b9f670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006141b8565b8390611aae565b6000806000612bcb611f6e856101600151866101400151610e6790919063ffffffff16565b612beb611f6e86610120015187610100015161190c90919063ffffffff16565b612bf59190614151565b9050600080612c0c8660000151876020015161256e565b9150915080612c2357506000958695509350505050565b6000831315612d645760008390506000612c71886000015189602001518a604001518b60a001518c60e00151670de0b6b3a7640000612c6291906140d4565b8d606001518e60800151613715565b9350905082612c8a575060009788975095505050505050565b818110612d28576000612cc4858a60400151858c60e00151670de0b6b3a7640000612cb591906140d4565b8d606001518e60800151612f2a565b9450905083158015612cd957508860c0015183105b15612cf05750600098600198509650505050505050565b83612d0657506000988998509650505050505050565b612d0f816111a4565b612d189061425b565b9960019950975050505050505050565b6000886020015112612d5057612d478860a0015185611f6e91906140d4565b6118b09061425b565b60a08801518851612d4791611f6e916140d4565b6000831215612eb7576000612d788461425b565b90506000612dac8489604001518a60e00151670de0b6b3a7640000612d9d91906140d4565b8b606001518c608001516134b5565b9350905082612dc5575060009788975095505050505050565b818110612e4a576000612dff858a60400151858c60e00151670de0b6b3a7640000612df091906140d4565b8d606001518e60800151613c31565b9450905083158015612e1457508860c0015183105b15612e2b5750600098600198509650505050505050565b83612e4157506000988998509650505050505050565b612d18816111a4565b6000612e7c858a604001518b60e00151670de0b6b3a7640000612e6d91906140d4565b8c606001518d60800151613d08565b9450905083612e9657506000988998509650505050505050565b612d18612ead8a60600151848661135a91906140d4565b611f6e908361406d565b50600095600195509350505050565b6000612ef9611f6e836101200151670de0b6b3a7640000612ee791906140d4565b606085015161010086015191906123e0565b611d5d611f6e846101600151670de0b6b3a7640000612f1891906140d4565b60608601516101408701519190611dc7565b6000806000612f3c8989888888613db7565b9050612f4c86611956898b61406d565b975087811015612f63576000809250925050612fe9565b878103612f718186886123e0565b9050670de0b6b3a76400008110612fa557612f9e612f97670de0b6b3a764000089611de5565b8290612406565b9050612fbd565b612fba612f97670de0b6b3a764000089611aae565b90505b612fc78186611de5565b9050808a1015612fdf57600080935093505050612fe9565b8903925060019150505b965096945050505050565b60008082136130165760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906130999084901c6111a4565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361323557506000919050565b680755bf798b4a1bf1e5821261325e576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190611d1974029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6111a4565b60006133c46001600160a01b03841683613de6565b905080516000141580156133e95750808060200190518101906133e791906142f5565b155b1561165b57604051635274afe760e01b81526001600160a01b038416600482015260240161193c565b6000806000846001600160a01b03168460405161342f9190614312565b6000604051808303816000865af19150503d806000811461346c576040519150601f19603f3d011682016040523d82523d6000602084013e613471565b606091505b509150915081801561349b57508051158061349b57508080602001905181019061349b91906142f5565b801561195c5750505050506001600160a01b03163b151590565b60008060006134c78888888888613db7565b905060006134f2670de0b6b3a76400006134e18888611aae565b6134eb919061406d565b8390611de5565b9050670de0b6b3a7640000811061351f57613518612f97670de0b6b3a764000089611de5565b9050613537565b613534612f97670de0b6b3a764000089611aae565b90505b8088101561354d57600080935093505050613557565b8703925060019150505b9550959350505050565b600080600080846000036135805750879250869150859050600161366d565b60008561358c8b6111a4565b613596919061429f565b90506135a1876111a4565b8112156135bc5760008060008094509450945094505061366d565b809450600089126135dc576135d5611f6e868b8d611dc7565b93506135ff565b6135f3611f6e6135eb8b61425b565b87908d6123e0565b6135fc9061425b565b93505b60008061360c8c8c61256e565b915091508061362b57600080600080965096509650965050505061366d565b6000613637888861256e565b92509050816136575760008060008097509750975097505050505061366d565b6136628b8285611dc7565b955060019450505050505b95509550955095915050565b60008060006136878461232e565b9150915080611c5557604051635516328b60e11b815260040160405180910390fd5b60208301516000906136bb9084611de5565b60408501516136cb908490611aae565b10158015610a72575060208401516136fb90846136f4633b9aca00670de0b6b3a764000061406d565b9190611dc7565b604085015161370b908490611de5565b1115949350505050565b60008060008812156137375761372a8861425b565b613734908761406d565b95505b60006137438a8a611c34565b90506000613754828a898989613df4565b9050600061377161376989611956898d61190c565b8890886123e0565b90508082101561378a57600080945094505050506137f5565b808203670de0b6b3a764000081106137b8576137b1612f97670de0b6b3a76400008b611aae565b90506137d0565b6137cd612f97670de0b6b3a76400008b611de5565b90505b8a8110156137e85760008095509550505050506137f5565b8a90039450600193505050505b97509795505050505050565b60008060008360e001511361381b57506000928392509050565b600061382a8460000151612ec6565b9050600061385685604001518660600151876040015161384a919061406d565b602088015191906123e0565b90506000821261387d578082101561387057819003613893565b5060009485945092505050565b6138868261425b565b613890908261406d565b90505b60e085015160c08601516138a89183906123e0565b9050808560c0015110156138c3575060009485945092505050565b808560c00151036001935093505050915091565b60008060008084126138fb578551604001516138f490859061406d565b9050613936565b60006139068561425b565b875160400151909150811015613926578651604001518190039150613934565b600080935093505050611bf7565b505b85518051602090910151600091829161394f919061256e565b91509150806139675760008094509450505050611bf7565b875160e081015160409091015160009161399c91613990916139899190612406565b8a90610e67565b6101008b015190611de5565b895160e08101516080909101516139c7916139bb916119569088610e67565b8b516060015190611de5565b6139d1919061406d565b90506000613a096139fd6139f68c6000015160e001518861240690919063ffffffff16565b8b9061190c565b6101008c015190611aae565b905080821015613a2457600080965096505050505050611bf7565b80820391506000613a66858c60000151604001518d6000015160e00151670de0b6b3a7640000613a5491906140d4565b8e516060810151608090910151613db7565b90506000613a908c6000015160e00151670de0b6b3a7640000613a8991906140d4565b8890612406565b905080821015613aad576000809850985050505050505050611bf7565b8b51608081015160609091015191830391613ac99183916123e0565b9050670de0b6b3a76400008110613b0d578b5160e00151613b0690612f9790613afa90670de0b6b3a76400006140d4565b8e5160e0015190611de5565b9050613b3c565b8b5160e00151613b3990612f9790613b2d90670de0b6b3a76400006140d4565b8e5160e0015190611aae565b90505b8b5160600151613b4f90859083906123e0565b935083670de0b6b3a76400001115613b735783670de0b6b3a7640000039350613b87565b600060019850985050505050505050611bf7565b60008c60e0015112613be95760c08c015160e08d0151613ba691611de5565b9250670de0b6b3a76400008310613bca576000809850985050505050505050611bf7565b670de0b6b3a76400009290920391613be28484610e67565b9350613c1e565b613c1b613c028d60c001518e60e0015161135a9061425b565b613c1490670de0b6b3a764000061406d565b8590610e67565b93505b50919a60019a5098505050505050505050565b6000806000613c438989888888613db7565b905086881015613c5a576000809250925050612fe9565b9686900396613c698887612406565b975087811015613c80576000809250925050612fe9565b878103613c8e8186886123e0565b9050670de0b6b3a76400008110613cbb57613cb4612f97670de0b6b3a764000089611de5565b9050613cd3565b613cd0612f97670de0b6b3a764000089611aae565b90505b613cdd8186611de5565b905089811015613cf557600080935093505050612fe9565b9890980398600198509650505050505050565b6000806000613d1a8888888888613df4565b90506000613d3e670de0b6b3a7640000613d348888611de5565b612b9f919061406d565b9050670de0b6b3a76400008110613d6b57613d64612f97670de0b6b3a764000089611aae565b9050613d83565b613d80612f97670de0b6b3a764000089611de5565b90505b613d8d8186611aae565b905088811015613da557600080935093505050613557565b97909703976001975095505050505050565b6000613dc38585612406565b613ddc613dd486611956868b61190c565b8590856123e0565b611d19919061406d565b6060610a7583836000613e19565b6000613e008585612406565b613ddc613e1186611956868b610e67565b859085611dc7565b606081471015613e3e5760405163cd78605960e01b815230600482015260240161193c565b600080856001600160a01b03168486604051613e5a9190614312565b60006040518083038185875af1925050503d8060008114613e97576040519150601f19603f3d011682016040523d82523d6000602084013e613e9c565b606091505b5091509150611d19868383606082613ebc57613eb782613f03565b610a75565b8151158015613ed357506001600160a01b0384163b155b15613efc57604051639996b31560e01b81526001600160a01b038516600482015260240161193c565b5080610a75565b805115613f135780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b604051806101200160405280613f40613f7e565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60008060008060808587031215613ff557600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561402157600080fd5b85016060818803121561403357600080fd5b939692955090935050565b60006020828403121561405057600080fd5b5035919050565b634e487b7160e01b600052601160045260246000fd5b808201808211156108c2576108c2614057565b60006020828403121561409257600080fd5b81356001600160a01b0381168114610a7557600080fd5b80151581146100a257600080fd5b6000602082840312156140c957600080fd5b8135610a75816140a9565b818103818111156108c2576108c2614057565b634e487b7160e01b600052601260045260246000fd5b60008261410c5761410c6140e7565b500690565b6001600160701b03818116838216019080821115611c5557611c55614057565b6001600160801b03818116838216019080821115611c5557611c55614057565b8181036000831280158383131683831282161715611c5557611c55614057565b6000808335601e1984360301811261418857600080fd5b83018035915067ffffffffffffffff8211156141a357600080fd5b602001915036819003821315610b4e57600080fd5b80820281158282048414176108c2576108c2614057565b6000602082840312156141e157600080fd5b5051919050565b6001600160801b03828116828216039080821115611c5557611c55614057565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156108c2576108c2614057565b600081600f0b60016001607f1b0319810361425257614252614057565b60000392915050565b6000600160ff1b820161427057614270614057565b5060000390565b602081016004831061429957634e487b7160e01b600052602160045260246000fd5b91905290565b80820182811260008312801582168215821617156142bf576142bf614057565b505092915050565b6000826142d6576142d66140e7565b600160ff1b8214600019841416156142f0576142f0614057565b500590565b60006020828403121561430757600080fd5b8151610a75816140a9565b6000825160005b818110156143335760208186018101518583015201614319565b50600092019182525091905056fea2646970667358221220ad36db5586bda1d775f3a043ece28ce06284b1c6902a8f5eba1df916600a5f6864736f6c63430008140033";
        readonly sourceMap: "755:375:50:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;2220:314:41;;;;;;:::i;:::-;;:::i;:::-;;;;785:25:235;;;841:2;826:18;;819:34;;;;758:18;2220:314:41;;;;;;;2690:99;;;;;;;;;;-1:-1:-1;2690:99:41;;;;;:::i;:::-;;:::i;:::-;;2220:314;2413:7;2422;2460:67;2471:11;2484;2497:19;2518:8;2460:10;:67::i;:::-;2441:86;;;;2220:314;;;;;;;;:::o;2690:99::-;2754:28;2766:15;2754:11;:28::i;:::-;2690:99;:::o;1957:4443:119:-;2168:7;2177;2356:21:171;:19;:21::i;:::-;9562::114;;::::1;::::0;::::1;;;9558:85;;;9606:26;;-1:-1:-1::0;;;9606:26:114::1;;;;;;;;;;;9558:85;2246:20:119::2;:18;:20::i;:::-;2331:23;2345:8;2331:13;:23::i;:::-;2493:25;2479:11;:39;2475:115;;;2541:38;;-1:-1:-1::0;;;2541:38:119::2;;;;;;;;;;;2475:115;2916:23;2942:21;:19;:21::i;:::-;2916:47;;2995:19;2977:15;:37;2973:106;;;3037:31;;-1:-1:-1::0;;;3037:31:119::2;;;;;;;;;;;2973:106;3088:24;3115:19;:17;:19::i;:::-;3088:46;;3144:27;3174:85;3204:16;3234:15;3174:16;:85::i;:::-;3144:115:::0;-1:-1:-1;3498:20:119::2;3521:36;3540:17;3521:16:::0;:36:::2;:::i;:::-;3498:59;;3581:19;3614:26:::0;3654::::2;3693:132;3730:11;3759:15;3792:19;3693;:132::i;:::-;3567:258;;;;;;3904:18;3878:22;;:44;;;;;;;:::i;:::-;::::0;;;-1:-1:-1;4556:15:119::2;::::0;-1:-1:-1;4574:110:119::2;4612:11:::0;4637:15;4666:8;4574:24:::2;:110::i;:::-;4556:128;;4712:7;4698:11;:21;4694:84;;;4742:25;;-1:-1:-1::0;;;4742:25:119::2;;;;;;;;;;;4694:84;4787:27;4796:7;4805:8;4787;:27::i;:::-;;;5042:137;5071:11;5096:18;5128:15;5157:12;5042:15;:137::i;:::-;5238:15;5256:98;5291:27;5332:12;5256:21;:98::i;:::-;5238:116;;5364:18;5385:11;5364:32;;5437:48;5443:7;5452:8;:20;;;;;;;;;;:::i;:::-;5474:10;5437:5;:48::i;:::-;5562:18:::0;5648:15;5743:8;5822:7;5789:19:::2;;::::0;::::2;5743:8:::0;5789:19:::2;:::i;:::-;-1:-1:-1::0;;;;;5766:586:119::2;;5843:12;5869:11;5910:67;5942:7;5951:16;5969:7;5910:31;:67::i;:::-;6015:14;::::0;;;::::2;::::0;::::2;;:::i;:::-;6220:98;6288:16;6243:18;6221:19;:40;;;;:::i;:::-;6220:50:::0;::::2;:98::i;:::-;5766:586;::::0;;2385:25:235;;;2441:2;2426:18;;2419:34;;;;2469:18;;;2462:34;;;;2539:14;2532:22;2527:2;2512:18;;2505:50;2586:3;2571:19;;2564:35;2630:3;2615:19;;2608:35;;;2372:3;2357:19;5766:586:119::2;;;;;;;-1:-1:-1::0;6371:12:119;;-1:-1:-1;6385:7:119;;-1:-1:-1;;;;;;;;;;;2398:20:171;1713:1;2924:7;:21;2744:208;1347:1644:115;2356:21:171;:19;:21::i;:::-;1494:29:115::1;::::0;;;:12:::1;:29;::::0;;;;:45;-1:-1:-1;;;;;1494:45:115::1;:50:::0;;1560:7:::1;1490:87;1756:24;1783:19;:17;:19::i;:::-;1756:46:::0;-1:-1:-1;1829:37:115::1;1847:19;1829:15:::0;:37:::1;:::i;:::-;:42:::0;::::1;::::0;:92:::1;;;1906:15;1887:16;:34;1829:92;1812:187;;;1953:35;;-1:-1:-1::0;;;1953:35:115::1;;;;;;;;;;;1812:187;2264:16;2245:15;:35:::0;2241:744:::1;;2296:57;2313:16;2331:21;:19;:21::i;:::-;2296:16;:57::i;:::-;;2241:744;;;2421:15:::0;2384:591:::1;2532:30;2565:18:::0;;;:12:::1;:18;::::0;;;;:55;-1:-1:-1;;;;;2565:55:115::1;2642:24:::0;;::::1;:55:::0;::::1;;;-1:-1:-1::0;2670:27:115;;2642:55:::1;2638:148;;;2746:21;:19;:21::i;:::-;2721:46;;2638:148;2807:27:::0;;2803:158:::1;;2858:57;2875:15;2892:22;2858:16;:57::i;:::-;;2937:5;;;2803:158;-1:-1:-1::0;2472:27:115::1;2480:19;2472:27:::0;::::1;:::i;:::-;;;2384:591;;;;2241:744;1415:1576;2387:1:171;2398:20:::0;1713:1;2924:7;:21;2744:208;2431:307;1755:1;2558:7;;:18;2554:86;;2599:30;;-1:-1:-1;;;2599:30:171;;;;;;;;;;;2554:86;1755:1;2714:7;:17;2431:307::o;4515:145:44:-;4582:9;:14;4578:76;;4619:24;;-1:-1:-1;;;4619:24:44;;;;;;;;;;;4578:76;4515:145::o;8216:221:114:-;8360:1;8328:20;;;;:8;:20;:::i;:::-;-1:-1:-1;;;;;8328:34:114;;8324:107;;8385:35;;-1:-1:-1;;;8385:35:114;;;;;;;;;;;5594:150;5672:23;5718:19;193:4:124;5718:14:114;:19::i;:::-;5711:26;;5594:150;:::o;11561:223::-;11637:24;11739:37;11757:19;11739:15;:37;:::i;:::-;11708:69;;:15;:69;:::i;3253:7270:115:-;3379:7;3511:51;;;:12;:51;;;;;3589:27;;-1:-1:-1;;;;;3589:27:115;:32;;;:81;;;3655:15;3637;:33;3589:81;3572:168;;;3702:27;-1:-1:-1;;;;;3702:27:115;;-1:-1:-1;3695:34:115;;3572:168;3832:28;:16;:26;:28::i;:::-;3802:58;;-1:-1:-1;;;;;;3802:58:115;-1:-1:-1;;;;;3802:58:115;;;;;;;3947:40;3970:16;3947:22;:40::i;:::-;-1:-1:-1;4451:27:115;;-1:-1:-1;4481:12:115;4451:27;4507:35;4525:17;4507:15;:35;:::i;:::-;4481:71;;;;;;;;;;;-1:-1:-1;4481:71:115;;;:87;-1:-1:-1;;;;;4481:87:115;;-1:-1:-1;4601:101:115;4636:27;4677:15;4601:21;:101::i;:::-;4712:27;4742:26;;;:12;:26;;;;;;4578:124;;-1:-1:-1;4812:23:115;;4808:2275;;-1:-1:-1;5026:4:115;5189:21;;5266:190;5313:19;5354:16;5392:19;5189:21;5266:25;:190::i;:::-;5171:285;;;;5496:13;5470:22;;:39;;;;;;;:::i;:::-;;;;-1:-1:-1;5523:238:115;;-1:-1:-1;5557:19:115;5594:1;5613:13;5644:24;5613:13;5644:22;:24::i;:::-;5732:15;5523:16;:238::i;:::-;5995:30;6012:13;5995:30;;:::i;:::-;;;6423:254;6482:19;6519:13;6550:19;6587:16;6621;6655:8;6423:41;:254::i;:::-;6407:270;-1:-1:-1;6912:85:115;:56;6407:270;6951:16;6912:38;:56::i;:::-;:83;:85::i;:::-;6877:31;:120;;:31;;:120;;;;;;;-1:-1:-1;;;;;6877:120:115;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;6877:120:115;;;;;-1:-1:-1;;;;;6877:120:115;;;;;;7047:25;:13;:23;:25::i;:::-;7011:32;:61;;:32;;:61;;;;-1:-1:-1;;;7011:61:115;;-1:-1:-1;;;;;7011:61:115;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;7011:61:115;;;;;-1:-1:-1;;;;;7011:61:115;;;;;;4837:2246;;4808:2275;7201:19;7223:100;7258:26;7298:15;7223:21;:100::i;:::-;7333:26;7362:25;;;:12;:25;;;;;;7201:122;;-1:-1:-1;7401:22:115;;7397:1597;;7613:4;7595:22;;7775:21;7814;7852:188;7899:18;7939:16;7977:19;8018:4;7852:25;:188::i;:::-;7757:283;;;;8080:13;8054:22;;:39;;;;;;;:::i;:::-;;;;-1:-1:-1;8132:15:115;;-1:-1:-1;8191:235:115;8224:18;8107:22;8279:13;8310:24;8279:13;8310:22;:24::i;:::-;8398:14;8191:15;:235::i;:::-;8560:30;8577:13;8560:30;;:::i;:::-;;-1:-1:-1;8823:85:115;:56;8560:30;8862:16;8823:38;:56::i;:85::-;8788:31;:120;;:31;;:120;;;;;;;-1:-1:-1;;;;;8788:120:115;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;8788:120:115;;;;;-1:-1:-1;;;;;8788:120:115;;;;;;8958:25;:13;:23;:25::i;:::-;8922:32;:61;;:32;;:61;;;;-1:-1:-1;;;8922:61:115;;-1:-1:-1;;;;;8922:61:115;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;8922:61:115;;;;;-1:-1:-1;;;;;8922:61:115;;;;;;7425:1569;;;7397:1597;9145:15;9141:701;;;9365:132;9434:30;:19;:28;:30::i;:::-;9402:29;:18;:27;:29::i;:::-;:62;;;;:::i;:::-;9482:1;9365:19;:132::i;:::-;9788:43;9814:16;9788:25;:43::i;:::-;;9141:701;10221:20;10247:44;10274:16;10247:26;:44::i;:::-;-1:-1:-1;10306:176:115;;;3739:25:235;;;3795:2;3780:18;;3773:34;;;3823:18;;;3816:34;;;3881:2;3866:18;;3859:34;;;10220:71:115;;-1:-1:-1;10336:15:115;;10306:176;;3726:3:235;3711:19;10306:176:115;;;;;;;10500:16;10493:23;;;;;;;;;;3253:7270;;;;;:::o;19644:4007:119:-;19840:19;19873:26;19913;20201:239;20248:25;:23;:25::i;:::-;20287:12;:25;-1:-1:-1;;;20287:25:119;;-1:-1:-1;;;;;20287:25:119;20326:11;20351:12;20377:16;20407:23;20201:33;:239::i;:::-;20180:260;-1:-1:-1;20769:11:119;20724:42;20180:260;20749:16;20724:24;:42::i;:::-;:56;20720:213;;;20796:126;20852:56;20796:38;:126::i;:::-;21095:16;21121:26;21157:17;21177:184;21224:25;:23;:25::i;:::-;21263:12;:25;-1:-1:-1;;;21263:25:119;;-1:-1:-1;;;;;21263:25:119;21302:23;21339:12;21177:33;:184::i;:::-;21157:204;;21561:179;21599:11;193:4:124;21691:9:119;21714:16;21561:24;:179::i;:::-;-1:-1:-1;21524:216:119;;-1:-1:-1;21524:216:119;;-1:-1:-1;22413:29:119;;-1:-1:-1;21524:216:119;;22413:29;:::i;:::-;22391:51;;;;:::i;:::-;;-1:-1:-1;23031:542:119;23556:16;23031:505;23101:11;23325:39;23346:18;22391:51;23325:39;:::i;:::-;23382:20;23420:42;:16;23382:20;23420;:42::i;:::-;23480:16;23514:8;23031:52;:505::i;:::-;:524;;:542::i;:::-;23017:556;-1:-1:-1;23625:18:119;;-1:-1:-1;;;19644:4007:119;;;;;;;:::o;34231:393:114:-;34400:7;34423:15;;;;;;;;:::i;:::-;34419:199;;;-1:-1:-1;34461:7:114;34454:14;;34419:199;34574:33;:7;34590:16;34574:15;:33::i;:::-;34567:40;;34419:199;34231:393;;;;;:::o;1926:1509::-;2040:20;;;2206:15;;;;;;;;:::i;:::-;2202:812;;;2306:91;2340:7;2365:18;;;;:8;:18;:::i;:::-;2306:16;:91::i;:::-;2281:116;;-1:-1:-1;2281:116:114;-1:-1:-1;2202:812:114;;;-1:-1:-1;2553:9:114;2623:47;2642:7;2651:18;;;;:8;:18;:::i;:::-;2623;:47::i;:::-;2996:7;2981:22;;2202:812;3086:21;:19;:21::i;:::-;3068:39;-1:-1:-1;3184:10:114;;3180:200;;3229:45;;3211:12;;3237:10;;3262:6;;3211:12;3229:45;3211:12;3229:45;3262:6;3237:10;3229:45;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3210:64;;;3293:7;3288:82;;3327:28;;-1:-1:-1;;;3327:28:114;;;;;;;;;;;3288:82;3196:184;3180:200;3390:38;1926:1509;;;;;;:::o;13794:3622:119:-;14138:12;:26;-1:-1:-1;;;;;14138:26:119;14178:35;;;14174:192;;;14229:126;14285:56;14229:38;:126::i;:::-;14910:28;;14399:36;;;;;14955:21;;14815:137;;14399:36;;14910:28;;14815:46;:137::i;:::-;:161;14798:395;;;15001:181;15057:111;15001:38;:181::i;:::-;15428:30;;15307:311;;:286;;-1:-1:-1;;;15428:30:119;;-1:-1:-1;;;;;15428:30:119;15476:19;193:4:124;15476:13:119;:19;:::i;:::-;15328:37;;-1:-1:-1;;;15328:37:119;;-1:-1:-1;;;;;15328:37:119;;;15546:11;15575:4;15307:103;:286::i;:::-;:309;:311::i;:::-;15267:37;:351;;-1:-1:-1;;;;;15267:351:119;;;-1:-1:-1;;;15267:351:119;;;;;;;;;15941:25;:13;:23;:25::i;:::-;15912:12;:54;;-1:-1:-1;;;;;;15912:54:119;-1:-1:-1;;;;;15912:54:119;;;;;;;;;;16005:23;:11;:21;:23::i;:::-;15976:12;:52;;:25;;:52;;;;-1:-1:-1;;;15976:52:119;;-1:-1:-1;;;;;15976:52:119;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;15976:52:119;;;;;-1:-1:-1;;;;;15976:52:119;;;;;;16072:23;:11;:21;:23::i;:::-;16038:30;:57;;:30;;:57;;;;-1:-1:-1;;;16038:57:119;;-1:-1:-1;;;;;16038:57:119;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;16038:57:119;;;;;-1:-1:-1;;;;;16038:57:119;;;;;;16251:21;16275:30;16291:13;16275:15;:30::i;:::-;16251:54;;16315:110;16348:14;16393:22;:11;:20;:22::i;:::-;16376:39;;:14;:39;:::i;:::-;16315:19;:110::i;:::-;16842:28;16853:16;16842:10;:28::i;:::-;16837:186;;16886:126;16942:56;16886:38;:126::i;:::-;17256:12;17271:43;17297:16;17271:25;:43::i;:::-;17256:58;;17329:7;17324:86;;17359:40;;-1:-1:-1;;;17359:40:119;;;;;;;;;;;17324:86;13965:3451;;;13794:3622;;;;:::o;1198:469:121:-;1309:10;-1:-1:-1;;;;;1401:10:121;:89;1384:179;;;1522:30;;-1:-1:-1;;;1522:30:121;;;;;;;;;;;1384:179;-1:-1:-1;1624:4:121;1620:18;;;;1617:34;;1198:469::o;5934:316:118:-;6051:19;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;6051:23:118;;;;;;;;;:33;;6078:6;;6051:19;:33;;6078:6;;6051:33;:::i;:::-;;;;-1:-1:-1;;6094:21:118;;;;:12;:21;;;;;:31;;6119:6;;6094:21;:31;;6119:6;;6094:31;:::i;:::-;;;;-1:-1:-1;;6184:59:118;;;785:25:235;;;841:2;826:18;;819:34;;;-1:-1:-1;;;;;6184:59:118;;;6219:1;;6199:10;;6184:59;;758:18:235;6184:59:118;;;;;;;5934:316;;;:::o;33531:405:114:-;33707:7;33730:15;;;;;;;;:::i;:::-;33726:204;;;33841:33;:7;33857:16;33841:15;:33::i;33726:204::-;-1:-1:-1;33912:7:114;33905:14;;1610:118:124;1672:7;1699:21;1710:1;1713;193:4;1699:10;:21::i;4821:161:44:-;4939:36;;-1:-1:-1;;;4939:36:44;;;;;4959:25:235;;;4913:7:44;;4939:6;-1:-1:-1;;;;;4939:22:44;;;;4932:18:235;;4939:36:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;884:190:127:-;937:9;-1:-1:-1;;;964:1:127;:12;958:86;;1000:33;;-1:-1:-1;;;1000:33:127;;;;;;;;;;;958:86;-1:-1:-1;1065:1:127;884:190::o;21722:2511:114:-;22081:32;;21828:26;;;;22043:80;;:16;;-1:-1:-1;;;22081:32:114;;-1:-1:-1;;;;;22081:32:114;22043:24;:80::i;:::-;22154:31;;;;;-1:-1:-1;;;;;22154:31:114;;-1:-1:-1;22022:101:114;-1:-1:-1;22328:39:114;;;22324:1903;;;22533:22;22558:39;22579:18;22558;:39;:::i;:::-;22533:64;-1:-1:-1;22870:84:114;:55;22533:64;22908:16;22870:37;:55::i;:84::-;22834:32;:120;;:32;;:120;;;;-1:-1:-1;;;22834:120:114;;-1:-1:-1;;;;;22834:120:114;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;22834:120:114;;;;;-1:-1:-1;;;;;22834:120:114;;;;;;23253:28;23284:70;23324:16;23284:14;:22;;:70;;;;:::i;:::-;23253:101;-1:-1:-1;23368:36:114;23407:80;23253:101;23453:20;23407:28;:80::i;:::-;23368:119;;23527:28;23501:22;;:54;;;;;;;:::i;:::-;;;;-1:-1:-1;23832:52:114;;-1:-1:-1;23856:28:114;23832:52;;:::i;:::-;;;23928:32;:20;:30;:32::i;:::-;23898:12;:62;;:26;;:62;;;;-1:-1:-1;;;;;23898:62:114;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;23898:62:114;;;;;-1:-1:-1;;;;;23898:62:114;;;;;;24006:31;:20;:29;:31::i;:::-;23974:28;:63;;:28;;:63;;;;;;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;23974:63:114;;;;;;;-1:-1:-1;;;;;23974:63:114;;;;;;24198:18;24177:39;;22369:1858;;;22324:1903;21722:2511;;;:::o;11087:2398:115:-;11274:21;;11680:37;:11;11700:16;11680:19;:37::i;:::-;11664:53;-1:-1:-1;11727:15:115;11745:31;11664:53;11767:8;11745:21;:31::i;:::-;11727:49;-1:-1:-1;11802:33:115;11727:49;11818:16;11802:15;:33::i;:::-;11786:49;;12262:7;12258:557;;;12302:23;12312:13;12302:7;:23;:::i;:::-;12285:40;;;;:::i;:::-;;;12258:557;;;12781:23;12791:13;12781:7;:23;:::i;:::-;12764:40;;;;:::i;:::-;;;12258:557;13033:20;13014:16;:39;13010:469;;;13148:110;:13;13190:16;13224:20;13148:24;:110::i;:::-;13132:126;-1:-1:-1;13358:110:115;:13;13400:16;13434:20;13358:24;:110::i;:::-;13342:126;;13010:469;11320:2165;11087:2398;;;;;;;:::o;2001:204:127:-;2053:8;-1:-1:-1;;;;;2079:1:127;:30;;2073:103;;2133:32;;-1:-1:-1;;;2133:32:127;;;;;;;;;;;17905:1127:119;18207:30;;-1:-1:-1;;;18207:30:119;;-1:-1:-1;;;;;18207:30:119;18287:300;:275;18207:30;18444:19;193:4:124;18444:13:119;:19;:::i;:::-;18308:37;;-1:-1:-1;;;18308:37:119;;-1:-1:-1;;;;;18308:37:119;;;18514:11;18543:5;18287:103;:275::i;:300::-;18247:37;:340;;-1:-1:-1;;;;;18247:340:119;;;-1:-1:-1;;;18247:340:119;;;;;;;;;18730:23;:11;:21;:23::i;:::-;18697:56;;:18;:56;:::i;:::-;18652:30;:101;;-1:-1:-1;;;;;18652:101:119;;;-1:-1:-1;;;18652:101:119;;;;;;;;;18851:31;:19;:29;:31::i;:::-;18821:12;:61;;:26;;:61;;;;-1:-1:-1;;;;;18821:61:119;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;18821:61:119;;;;;-1:-1:-1;;;;;18821:61:119;;;;;;18924:32;:21;:30;:32::i;:::-;18892:28;:64;;:28;;:64;;;;;;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;18892:64:119;;;;;;;-1:-1:-1;;;;;18892:64:119;;;;;;18995:30;:18;:28;:30::i;:::-;18966:12;:59;;:25;;:59;;;;-1:-1:-1;;;18966:59:119;;-1:-1:-1;;;;;18966:59:119;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;18966:59:119;;;;;-1:-1:-1;;;;;18966:59:119;;;;;;18117:915;17905:1127;;;;;:::o;14667:1674:125:-;14928:21;;15394:119;15496:16;15394:80;:11;15430:21;15453:20;15394:35;:80::i;:::-;:101;;:119::i;:::-;15373:140;-1:-1:-1;15764:50:125;:11;15787:8;15797:16;15764:22;:50::i;:::-;15750:64;;;;:::i;:::-;;;16130:12;16117:10;:25;16113:191;;;16267:12;16254:10;:25;16238:41;;16113:191;16314:20;14667:1674;;;;;;;;:::o;527:190:127:-;580:9;-1:-1:-1;;;607:1:127;:12;601:86;;643:33;;-1:-1:-1;;;643:33:127;;;;;;;;;;;14268:3167:117;14652:12;:26;-1:-1:-1;;;;;14652:26:117;14705:35;;;;:110;;-1:-1:-1;14794:21:117;14756:35;14772:19;14756:13;:35;:::i;:::-;:59;14705:110;14688:289;;;14840:126;14896:56;14840:38;:126::i;:::-;15539:28;;15010:36;;;;;15539:28;;15577:40;15596:21;15539:28;15577:40;:::i;:::-;;;15677:21;15644:30;:19;:28;:30::i;:::-;:54;:230;;;;;15853:21;15714:124;15778:13;15809:15;15714:46;:124::i;:::-;:160;15644:230;15627:464;;;15899:181;15955:111;15899:38;:181::i;:::-;16178:29;;-1:-1:-1;;;16178:29:117;;-1:-1:-1;;;;;16178:29:117;16256:297;:272;16178:29;16410:19;193:4:124;16410:13:117;:19;:::i;:::-;16277:36;;-1:-1:-1;;;;;16277:36:117;;16256:272;16480:11;16509:5;16256:102;:272::i;:297::-;16217:36;:336;;-1:-1:-1;;;;;;16217:336:117;-1:-1:-1;;;;;16217:336:117;;;;;;;;;;16615:31;16635:11;16615:31;;:::i;:::-;;;16688:28;:16;:26;:28::i;:::-;16656:29;:60;;-1:-1:-1;;;;;16656:60:117;;;-1:-1:-1;;;16656:60:117;;;;;;;;;17267:25;:13;:23;:25::i;:::-;17238:12;:54;;-1:-1:-1;;;;;;17238:54:117;-1:-1:-1;;;;;17238:54:117;;;;;;;;;;17333:26;:15;:24;:26::i;:::-;17302:28;:57;;-1:-1:-1;;;;;;17302:57:117;-1:-1:-1;;;;;17302:57:117;;;;;;;;;;17398:30;:18;:28;:30::i;:::-;17369:12;:59;;:25;;:59;;;;-1:-1:-1;;;17369:59:117;;-1:-1:-1;;;;;17369:59:117;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;17369:59:117;;;;;-1:-1:-1;;;;;17369:59:117;;;;;;14479:2956;;;14268:3167;;;;;:::o;18678:551:114:-;18982:12;18997:43;19014:14;:7;18982:12;19014:11;:14::i;:::-;18998:13;:6;19009:1;18998:10;:13::i;:::-;:30;;;;:::i;:::-;18997:41;:43::i;:::-;18982:58;;19062:1;19054:5;:9;;;19050:173;;;19079:25;:43;;19116:5;;19079:25;;;:43;;19116:5;;-1:-1:-1;;;;;19079:43:114;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;19079:43:114;;;;;-1:-1:-1;;;;;19079:43:114;;;;;;18747:482;18678:551;;:::o;19050:173::-;19151:1;19143:5;:9;;;19139:84;;;19205:6;19206:5;19205:6;:::i;:::-;19168:25;:44;;:25;;:44;;;;-1:-1:-1;;;;;19168:44:114;;:::i;19139:84::-;18747:482;18678:551;;:::o;21421:1688:116:-;21735:13;:29;-1:-1:-1;;;21514:4:116;21662:70;;;:12;:70;;;;21514:4;;;;21662:102;;-1:-1:-1;;;;;21735:29:116;;21662:102;:::i;:::-;21624:140;;21778:27;21809:1;21778:32;21774:74;;-1:-1:-1;21833:4:116;;21421:1688;-1:-1:-1;;21421:1688:116:o;21774:74::-;21934:12;21949:45;21977:16;21949:27;:45::i;:::-;21934:60;;22008:4;22016:1;22008:9;22004:51;;-1:-1:-1;22040:4:116;;21421:1688;-1:-1:-1;;;21421:1688:116:o;22004:51::-;22235:47;22296:12;22321:149;22373:4;22395:27;22440:16;22321:34;:149::i;:::-;22221:249;;;;22485:7;22480:51;;-1:-1:-1;22515:5:116;;21421:1688;-1:-1:-1;;;;;21421:1688:116:o;22480:51::-;22656:32;22690:21;22715:57;22765:6;22715:49;:57::i;:::-;22655:117;;;;22863:36;:24;:34;:36::i;:::-;22830:13;:69;;:29;;:69;;;;-1:-1:-1;;;;;22830:69:116;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;22830:69:116;;;;;-1:-1:-1;;;;;22830:69:116;;;;;;22935:25;:13;:23;:25::i;:::-;22909:13;:51;;:22;;:51;;;;-1:-1:-1;;;22909:51:116;;-1:-1:-1;;;;;22909:51:116;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;22909:51:116;;;;;-1:-1:-1;;;;;22909:51:116;;;;;;23037:43;23055:24;:13;:22;:24::i;:::-;23054:25;;;:::i;:::-;23037:16;:43::i;:::-;-1:-1:-1;23098:4:116;;21421:1688;-1:-1:-1;;;;;;;21421:1688:116:o;25409:1358:114:-;25508:7;25517:4;25660:26;25688:12;25704:117;25767:40;25790:16;25767:22;:40::i;:::-;25704:45;:117::i;:::-;25659:162;;;;25836:7;25831:56;;-1:-1:-1;25867:1:114;;;;-1:-1:-1;25409:1358:114;-1:-1:-1;;;25409:1358:114:o;25831:56::-;26045:20;26087:1;26068:16;:20;:95;;26162:1;26068:95;;;26103:44;:18;26130:16;26103:26;:44::i;:::-;26309:13;:29;26246:12;:48;;;;26173:21;26197:34;;;;;26045:118;;-1:-1:-1;26173:21:114;-1:-1:-1;;;;;26309:29:114;;;;26197:97;;26246:48;26197:97;:::i;:::-;:141;;;;:::i;:::-;26173:165;;26475:13;26492:1;26475:18;26471:66;;-1:-1:-1;26517:1:114;;;;-1:-1:-1;25409:1358:114;-1:-1:-1;;;;;25409:1358:114:o;26471:66::-;26664:20;26687:35;:12;26708:13;26687:20;:35::i;:::-;26664:58;26755:4;;-1:-1:-1;25409:1358:114;-1:-1:-1;;;;;;;25409:1358:114:o;11965:253::-;12125:12;:26;12169:28;;12023:7;;12061:150;;-1:-1:-1;;;;;12125:26:114;;;;12169:28;;12061:46;:150::i;23940:866:125:-;24201:7;24317:482;24384:23;24425:13;24456:9;24692:18;24698:12;193:4:124;24692:18:125;:::i;:::-;24728:16;24762:23;24317:49;:482::i;:::-;24298:501;23940:866;-1:-1:-1;;;;;;;23940:866:125:o;3190:114:124:-;3250:7;3277:19;3286:1;3289;193:4;3277:8;:19::i;317:182:123:-;485:6;451:41;;-1:-1:-1;;;451:41:123;;;;;;;;:::i;:::-;;;;;;;;3330:531:125;3530:17;3736:118;3841:12;3736:87;:23;3784;3809:13;3736:47;:87::i;:::-;:104;;:118::i;:::-;3724:130;3330:531;-1:-1:-1;;;;;3330:531:125:o;29755:2727:114:-;29988:16;;;;30875:144;30976:24;31002:16;30875:78;30941:11;30875:46;30904:16;30910:10;193:4:124;30904:16:114;:::i;:::-;30875:9;;:28;:46::i;:78::-;:100;:144;:100;:144::i;:::-;30864:155;-1:-1:-1;31307:34:114;30864:155;31324:16;31307;:34::i;:::-;31286:55;-1:-1:-1;31849:12:114;31864:104;31898:30;31904:24;193:4:124;31898:30:114;:::i;:::-;31864:11;;31942:16;31864:20;:104::i;:::-;31849:119;-1:-1:-1;31988:20:114;31849:119;31999:8;31988:10;:20::i;:::-;31978:30;-1:-1:-1;32442:33:114;31978:30;32458:16;32442:15;:33::i;:::-;32409:66;;:18;:66;:::i;:::-;32376:99;;30128:2354;29755:2727;;;;;;;;;:::o;15264:104:124:-;15322:7;15352:1;15348;:5;:13;;15360:1;15348:13;;;-1:-1:-1;15356:1:124;;15264:104;-1:-1:-1;15264:104:124:o;11517:1660:125:-;11776:21;;12239:115;12337:16;12239:78;:11;12273:21;12296:20;12239:33;:78::i;:::-;:97;;:115::i;:::-;12218:136;-1:-1:-1;12602:48:125;:11;12623:8;12633:16;12602:20;:48::i;1884:164:124:-;1946:7;1973:21;1984:1;193:4;1992:1;1973:10;:21::i;1853:833:44:-;1975:7;;2051:129;-1:-1:-1;;;;;2065:10:44;2051:43;2108:10;2140:4;2159:11;2051:43;:129::i;:::-;2462:107;2523:6;2544:15;:11;2558:1;2544:15;:::i;:::-;-1:-1:-1;;;;;2476:10:44;2462:39;;:107;:39;:107::i;:::-;2602:42;;-1:-1:-1;;;2602:42:44;;;;;6670:25:235;;;2638:4:44;6711:18:235;;;6704:60;2579:20:44;;2602:6;-1:-1:-1;;;;;2602:14:44;;;;6643:18:235;;2602:42:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2579:65;-1:-1:-1;2677:1:44;;-1:-1:-1;;1853:833:44;;;;;;;:::o;2804:315::-;2986:126;-1:-1:-1;;;;;3000:6:44;2986:39;3039:10;3071:4;3090:12;2986:39;:126::i;6050:574:125:-;6185:30;6227:12;6285:103;6334:14;6362:16;6285:35;:103::i;:::-;6249:139;;-1:-1:-1;6249:139:125;-1:-1:-1;6249:139:125;6398:220;;6426:181;6482:111;6426:38;:181::i;:::-;6217:407;6050:574;;;;:::o;12712:2102:124:-;12906:15;13006:12;13022:1;13006:17;13002:63;;-1:-1:-1;13046:8:124;13039:15;;13002:63;13323:9;13319:1489;;;13420:154;13529:27;13544:12;13529;:27;:::i;:::-;13470:28;:12;13491:6;13470:20;:28::i;:::-;13421:30;:12;13442:8;13421:20;:30::i;:::-;:77;;;;:::i;13420:154::-;13410:164;-1:-1:-1;13921:18:124;13942:20;:6;13953:8;13942:10;:20::i;:::-;13921:41;-1:-1:-1;13976:18:124;13997:20;:6;14008:8;13997:10;:20::i;:::-;13976:41;;14045:10;14035:7;:20;14031:164;;;14085:10;14075:20;;14031:164;;;14130:10;14120:7;:20;14116:79;;;14170:10;14160:20;;14116:79;13334:871;;13319:1489;;;14504:12;14488;:28;14484:75;;-1:-1:-1;14543:1:124;14536:8;;14484:75;14645:152;14752:27;14767:12;14752;:27;:::i;:::-;14695:26;:12;14714:6;14695:18;:26::i;:::-;14646:30;:12;14667:8;14646:20;:30::i;:::-;:75;;;;:::i;14645:152::-;14635:162;12712:2102;-1:-1:-1;;;;;;12712:2102:124:o;12556:675:114:-;12641:6;13046:178;:12;:167;13076:123;13119:27;13168:13;13076:21;:123::i;:::-;13046:167;;;;;;;;;;;;:176;:178::i;:::-;12912:119;:12;:108;12942:64;12964:26;12992:13;12942:21;:64::i;12912:119::-;:312;;;;:::i;18131:376::-;18200:4;18455:45;:21;18483:16;18455:27;:45::i;:::-;18411:25;;:89;;;-1:-1:-1;;;;;18411:25:114;:89;:::i;:::-;18342:12;:26;18334:61;;-1:-1:-1;;;;;18342:26:114;18378:16;18334:43;:61::i;:::-;:166;;;18131:376;-1:-1:-1;;18131:376:114:o;898:556:124:-;1014:9;1279:1;-1:-1:-1;;1262:19:124;1259:1;1256:26;1253:1;1249:34;1242:42;1229:11;1225:60;1198:146;;1328:1;1325;1318:12;1198:146;-1:-1:-1;1415:9:124;;1411:27;;898:556::o;3462:114::-;3522:7;3549:19;3558:1;193:4;3566:1;3549:8;:19::i;1240:212:127:-;1292:8;-1:-1:-1;;;;;1318:30:127;;;1312:103;;1372:32;;-1:-1:-1;;;1372:32:127;;;;;;;;;;;1616:219;1667:8;-1:-1:-1;;;;;;1693:21:127;;;;;:46;;-1:-1:-1;;;;;;1718:21:127;;;1693:46;1687:119;;1763:32;;-1:-1:-1;;;1763:32:127;;;;;;;;;;;15815:101:124;15871:6;15900:1;15896;:5;:13;;15908:1;15896:13;;24513:558:114;24734:25;;24613:18;;;;24726:80;;-1:-1:-1;;;;;24734:25:114;24780:16;24726:40;:80::i;:::-;24703:103;-1:-1:-1;24849:36:114;24864:21;24703:103;24849:36;:::i;:::-;24820:12;:26;-1:-1:-1;;;;;24820:26:114;:65;24816:222;;;24930:12;:26;25006:21;;24930:57;;24975:12;;-1:-1:-1;;;;;24930:26:114;:57;:::i;:::-;:97;;;;:::i;:::-;24901:126;;24816:222;25047:17;24513:558;;;:::o;13522:1887::-;13722:47;;:::i;:::-;13771:12;13954:63;14020:70;14060:16;14020:22;:70::i;:::-;13954:136;;14100:28;14172:74;14218:18;14172:32;:74::i;:::-;14138:108;-1:-1:-1;14138:108:114;-1:-1:-1;14138:108:114;14256:61;;-1:-1:-1;14300:5:114;;-1:-1:-1;14284:22:114;;-1:-1:-1;14284:22:114;14256:61;14464:20;14638:152;:124;14717:18;:44;;;14638:18;:53;;;:78;;:124;;;;:::i;:::-;:150;:152::i;:::-;14487:136;:112;14555:18;:43;;;14487:18;:48;;;:67;;:112;;;;:::i;:136::-;:303;;;;:::i;:::-;14809:569;;;;;;;;;;;;;;;;;;;-1:-1:-1;14986:34:114;;:12;:34;;;;14809:569;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;15195:32:114;;14809:569;;;;15266:34;;;14809:569;;;;15336:31;;;;14809:569;;;;-1:-1:-1;14809:569:114;;15398:4;;-1:-1:-1;13522:1887:114;-1:-1:-1;13522:1887:114:o;22927:3408:126:-;23046:7;23055;23361:38;23401:12;23417:173;23498:7;:29;;;23545:7;:31;;;23417:63;:173::i;:::-;23360:230;;;;23605:7;23600:52;;-1:-1:-1;23636:1:126;;;;-1:-1:-1;22927:3408:126;-1:-1:-1;;;22927:3408:126:o;23600:52::-;23661:29;23735:109;23783:7;23804:30;23735:34;:109::i;:::-;23700:144;-1:-1:-1;23700:144:126;-1:-1:-1;23858:8:126;;;:38;;-1:-1:-1;23870:26:126;;23858:38;23854:82;;;-1:-1:-1;23920:1:126;;;;-1:-1:-1;22927:3408:126;-1:-1:-1;;;;22927:3408:126:o;23854:82::-;24224:32;24259:131;24330:7;24355:21;24259:53;:131::i;:::-;24224:166;;24527:24;24555:1;24527:29;24523:743;;-1:-1:-1;24580:1:126;;;;-1:-1:-1;22927:3408:126;-1:-1:-1;;;;;22927:3408:126:o;24523:743::-;24861:7;:35;;;24833:24;:63;24816:450;;24929:24;24955:21;;-1:-1:-1;22927:3408:126;-1:-1:-1;;;;22927:3408:126:o;24816:450::-;-1:-1:-1;25220:35:126;;;;25525:21;25549:152;25605:7;25626:30;25670:21;25549:42;:152::i;:::-;25525:176;;25715:13;25732:1;25715:18;25711:62;;-1:-1:-1;25757:1:126;;;;-1:-1:-1;22927:3408:126;-1:-1:-1;;;;;;22927:3408:126:o;25711:62::-;26107:21;26090:13;:38;26086:82;;-1:-1:-1;26152:1:126;;;;-1:-1:-1;22927:3408:126;-1:-1:-1;;;;;;22927:3408:126:o;26086:82::-;26288:24;;26314:13;;-1:-1:-1;22927:3408:126;-1:-1:-1;;;;;22927:3408:126:o;23286:1121:116:-;23427:12;:26;23489:28;;-1:-1:-1;;;;;23427:26:116;;;;23489:28;;;;;;-1:-1:-1;;;23551:25:116;;;23402:22;;;23725:218;23427:26;23489:28;23551:25;23871:21;23910:19;23725:31;:218::i;:::-;23586:357;;;;;;24018:14;23994:20;:38;23990:130;;24077:32;:20;:30;:32::i;:::-;24048:12;:61;;-1:-1:-1;;;;;;24048:61:116;-1:-1:-1;;;;;24048:61:116;;;;;;;;;;23990:130;24159:16;24133:22;:42;24129:137;;24222:33;:22;:31;:33::i;:::-;24191:28;:64;;-1:-1:-1;;;;;;24191:64:116;-1:-1:-1;;;;;24191:64:116;;;;;;;;;;24129:137;24302:13;24279:19;:36;24275:126;;24359:31;:19;:29;:31::i;:::-;24331:12;:59;;-1:-1:-1;;;;;24331:59:116;;;-1:-1:-1;;;24331:59:116;;;;;;;;;23349:1058;;;;;;23286:1121;:::o;15602:1035:114:-;15697:39;;:::i;:::-;15757:873;;;;;;;;15812:12;:26;-1:-1:-1;;;;;15812:26:114;;;15757:873;;15869:28;;;;15757:873;;;;-1:-1:-1;;;15925:25:114;;;;;;15757:873;;;;;;;;;;;;;16035:23;15757:873;;;;16094:21;15757:873;;;;16155:25;15757:873;;;;16207:12;15757:873;;;;15869:28;16251:29;;;;15812:26;15757:873;;;16367:36;;15757:873;;;;;;16320:97;;16367:36;16320:29;:97::i;:::-;15757:873;;16450:30;;-1:-1:-1;;;;;;;;16450:30:114;;;;;;15757:873;;;;16568:37;;15757:873;;;;;16521:98;;16568:37;;;16521:29;:98::i;:::-;15757:873;;15748:882;15602:1035;-1:-1:-1;;15602:1035:114:o;8818:1173:126:-;8925:7;8934:4;9311:19;9355:20;9377:12;9393:65;9437:7;9393:26;:65::i;:::-;9354:104;;;;9477:7;9472:64;;-1:-1:-1;9512:1:126;;;;-1:-1:-1;8818:1173:126;-1:-1:-1;;;;8818:1173:126:o;9472:64::-;9712:39;:7;:28;;;:37;:39::i;:::-;9663:30;9685:7;9663:21;:30::i;:::-;9631:13;9580:32;:7;:21;;;:30;:32::i;:::-;:64;;;;:::i;:::-;:113;;;;:::i;:::-;:171;;;;:::i;:::-;9549:202;;9340:422;;9893:1;9878:12;:16;9874:64;;;-1:-1:-1;9918:1:126;;;;-1:-1:-1;8818:1173:126;-1:-1:-1;;8818:1173:126:o;9874:64::-;9964:12;9979:4;;-1:-1:-1;8818:1173:126;-1:-1:-1;;8818:1173:126:o;10452:583:128:-;10642:14;10668:12;10710:141;10762:2;10778:1;10793:2;10809:1;10824;10839:2;10710:38;:141::i;:::-;10690:161;;-1:-1:-1;10690:161:128;-1:-1:-1;10690:161:128;10861:168;;10889:129;10945:59;10889:38;:129::i;2284:748:124:-;2398:9;2663:1;-1:-1:-1;;2646:19:124;2643:1;2640:26;2637:1;2633:34;2626:42;2613:11;2609:60;2582:146;;2712:1;2709;2702:12;2582:146;-1:-1:-1;2979:9:124;;2926:27;;;2923:34;;2975:27;;;2902:114;;2284:748::o;3811:844::-;3869:7;3935:1;3940;3935:6;3931:47;;-1:-1:-1;193:4:124;3957:10;;3931:47;4031:1;4036;4031:6;4027:45;;-1:-1:-1;4060:1:124;4053:8;;4027:45;4210:15;4228:12;:1;:10;:12::i;:::-;4210:30;;4402:10;4415:16;4418:12;:1;:10;:12::i;:::-;4415:2;:16::i;:::-;4402:29;-1:-1:-1;4509:18:124;;;4546:19;193:4;4509:18;4546:19;:::i;:::-;;;4638:9;4642:4;4638:3;:9::i;1702:188:168:-;1829:53;;-1:-1:-1;;;;;7452:15:235;;;1829:53:168;;;7434:34:235;7504:15;;;7484:18;;;7477:43;7536:18;;;7529:34;;;1802:81:168;;1822:5;;1844:18;;;;;7369::235;;1829:53:168;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;1829:53:168;;;;;;;;;;;1802:19;:81::i;:::-;1702:188;;;;:::o;3296:380::-;3411:47;;;-1:-1:-1;;;;;7766:32:235;;3411:47:168;;;7748:51:235;7815:18;;;;7808:34;;;3411:47:168;;;;;;;;;;7721:18:235;;;;3411:47:168;;;;;;;;-1:-1:-1;;;;;3411:47:168;-1:-1:-1;;;3411:47:168;;;3474:44;3426:13;3411:47;3474:23;:44::i;:::-;3469:201;;3561:43;;-1:-1:-1;;;;;7766:32:235;;;3561:43:168;;;7748:51:235;3601:1:168;7815:18:235;;;7808:34;3534:71:168;;3554:5;;3576:13;;;;;7721:18:235;;3561:43:168;7574:274:235;3534:71:168;3619:40;3639:5;3646:12;3619:19;:40::i;7273:398:125:-;7412:7;7421:4;7437:29;7509:16;7469:25;:14;:23;:25::i;:::-;:56;;;;:::i;:::-;7437:88;;7564:1;7539:22;:26;7535:74;;;7589:1;7592:5;7581:17;;;;;;;7535:74;7634:22;7659:4;;-1:-1:-1;7273:398:125;-1:-1:-1;;;7273:398:125:o;14987:104:124:-;15045:7;15075:1;15071;:5;:13;;15083:1;15071:13;;46936:3239:126;47109:29;47140:12;47329:1;47304:7;:21;;;:26;47300:84;;-1:-1:-1;;47354:12:126;;;;47368:4;47346:27;;47300:84;47393:21;47426:7;:21;;;47425:22;;;:::i;:::-;47393:55;;47697:21;47755:316;47811:31;47856:7;:28;;;47904:7;:26;;;:38;;;193:4:124;47898:44:126;;;;:::i;:::-;47956:26;;:42;;;;48012:49;;;;;47755:42;:316::i;:::-;47728:343;-1:-1:-1;47728:343:126;-1:-1:-1;48085:8:126;;;:30;;-1:-1:-1;48097:18:126;;48085:30;48081:78;;;48139:1;48142:5;48131:17;;;;;;;;48081:78;49182:24;49209:34;:13;49229;49209:19;:34::i;:::-;49182:61;;193:4:124;49426:16:126;:23;49422:453;;49523:16;193:4:124;49517:22:126;49493:46;;49591:90;49638:7;:29;;;49591:21;:29;;:90;;;;:::i;:::-;49567:114;;49422:453;;;49855:1;49858:5;49847:17;;;;;;;;;49422:453;50057:7;:12;;;50033:21;:36;50029:94;;;50093:7;:12;;;50107:4;50085:27;;;;;;;;;50029:94;-1:-1:-1;50163:4:126;;-1:-1:-1;;;46936:3239:126;;;;;:::o;27196:2209::-;27376:7;27475:12;27694:274;27736:7;:29;;;27779:7;:31;;;27824:7;:28;;;27866:7;:26;;;:47;;;27928:30;:19;:28;:30::i;:::-;27927:31;;;:::i;:::-;27694:28;:274::i;:::-;27511:26;;27621:39;;;27497:471;;;;27565:42;;;27497:471;;;;;;;;;-1:-1:-1;27497:471:126;27978:167;;28133:1;28126:8;;;;;27978:167;28154:26;28222:75;28261:7;:26;;;28222:25;:75::i;:::-;28190:107;-1:-1:-1;28190:107:126;-1:-1:-1;28190:107:126;28307:167;;28462:1;28455:8;;;;;;28307:167;28808:7;:28;;;28786:18;:50;28782:89;;28859:1;28852:8;;;;;;28782:89;29120:21;29186:7;:35;;;29144:7;:27;;;:77;;;;:::i;:::-;29120:101;;29278:120;29320:18;29356:7;:28;;;29278:13;:24;;:120;;;;;:::i;:::-;29250:148;;:13;:148;:::i;30287:10343::-;30508:7;30569:21;30635:7;:35;;;30593:7;:27;;;:77;;;;:::i;:::-;31228:28;;;;31168:35;;;;30569:101;;-1:-1:-1;31144:21:126;;31168:125;;30569:101;31168:46;:125::i;:::-;31144:149;;31406:7;:21;;;31431:1;31406:26;31402:77;;31455:13;-1:-1:-1;31448:20:126;;-1:-1:-1;31448:20:126;31402:77;31842:9;31837:8756;871:1;31857;:33;31837:8756;;;32065:41;:13;32083:22;32065:17;:41::i;:::-;32049:57;;32239:12;32482:292;32528:7;:29;;;32575:7;:31;;;32624:7;:28;;;32670:7;:26;;;:47;;;32736:24;:13;:22;:24::i;32482:292::-;32283:26;;32401:39;;;32265:509;;;;32341:42;;;32265:509;;;;;;;;;-1:-1:-1;32265:509:126;32788:268;;33040:1;33033:8;;;;;;;;32788:268;33069:20;33092:79;33131:7;:26;;;33092:21;:79::i;:::-;33069:102;;33276:167;33349:7;33378:12;33412:13;33276:51;:167::i;:::-;33255:241;;;33476:5;;;;33255:241;33746:1;33722:7;:21;;;:25;33718:4509;;;34135:25;;:39;;34200:41;;;;34267:38;;;;34331:46;;;;34409:37;;;;;33931:7;;33888:40;;34046:563;;34135:39;;34200:41;;34267:38;;34331:46;34403:43;;193:4:124;34403:43:126;:::i;:::-;34472:25;;:41;;;;34539:48;;;;;34046:63;:563::i;:::-;34019:590;-1:-1:-1;34019:590:126;-1:-1:-1;34019:590:126;34627:289;;34896:1;34889:8;;;;;;;;;;;34627:289;35127:13;35102:6;:20;;;35094:46;35090:3123;;35408:115;35495:6;35408:61;:115::i;:::-;35311:212;;-1:-1:-1;35311:212:126;-1:-1:-1;35311:212:126;35545:200;;35721:1;35714:8;;;;;;;;;;;35545:200;36157:336;36211:6;:28;;;36265:6;:30;;;36321:6;:27;;;36374:6;:25;;;:46;;;36447:24;:13;:22;:24::i;36157:336::-;35929:25;;36061:38;;;35903:590;;;;35994:41;;;35903:590;;;;;;;;;-1:-1:-1;35903:590:126;36515:200;;36691:1;36684:8;;;;;;;;;;;36515:200;36860:25;;:39;;36929:41;;;;37000:38;;;;37068:46;;;;;37150:26;;:38;;;36763:600;;37000:38;37068:46;37144:44;;193:4:124;37144:44:126;:::i;36763:600::-;36736:627;-1:-1:-1;36736:627:126;-1:-1:-1;36736:627:126;37385:200;;37561:1;37554:8;;;;;;;;;;;37385:200;37908:7;:21;;;37883:13;:47;37879:316;;37965:13;37958:20;;;;;;;;;;;37879:316;38164:8;;;;31837:8756;;37879:316;33749:4478;;33718:4509;38503:18;38605:176;38672:7;38697:31;38746:7;:21;;;38605:49;:176::i;:::-;38535:246;-1:-1:-1;38535:246:126;-1:-1:-1;38799:8:126;;;:29;;;193:4:124;38811:10:126;:17;;38799:29;38795:189;;;38968:1;38961:8;;;;;;;;;;38795:189;39044:10;193:4:124;39038:16:126;39025:29;;39356:12;39436:137;:105;39513:7;:27;;;39436:7;:49;;;:76;;:105;;;;:::i;:137::-;39371:46;:35;:12;39392:13;39371:20;:35::i;:46::-;:202;;;;:::i;:::-;39356:217;;39599:1;39591:5;:9;39587:893;;;39764:57;39807:13;39764:34;39772:5;39787:10;39764:22;:34::i;:57::-;39728:93;;:13;:93;:::i;:::-;39692:129;;39587:893;;;39854:1;39846:5;:9;39842:638;;;39947:14;39964:96;40029:13;39964:35;39988:10;39964:35;39973:5;39972:6;:::i;39964:96::-;39947:113;;40091:13;40082:6;:22;40078:344;;;40196:6;40180:13;:22;40164:38;;40078:344;;;40402:1;40395:8;;;;;;;;;;;;40078:344;39857:579;39842:638;;;40460:5;;;;;;39842:638;40565:3;;;;;31894:8699;;;;31837:8756;;;-1:-1:-1;40610:13:126;30287:10343;-1:-1:-1;;;;;30287:10343:126:o;1782:813::-;2053:21;2088:22;2124:20;2169:12;2307:191;2349:14;2377:16;2407:13;2434:21;2469:19;2307:28;:191::i;:::-;2191:307;;-1:-1:-1;2191:307:126;;-1:-1:-1;2191:307:126;-1:-1:-1;2191:307:126;-1:-1:-1;2191:307:126;2508:81;;2543:35;;-1:-1:-1;;;2543:35:126;;;;;;;;;;;2508:81;2159:436;1782:813;;;;;;;;;:::o;10998:450:114:-;11097:21;11130:24;193:4:124;11157:19:114;:17;:19::i;:::-;:25;;;;:::i;:::-;11130:52;;11224:16;11208:13;:32;:95;;11302:1;11208:95;;;11255:32;11271:16;11255:13;:32;:::i;:::-;11192:111;-1:-1:-1;11395:46:114;11417:23;193:4:124;11417:17:114;:23;:::i;:::-;11395:13;;:21;:46::i;10319:9443:126:-;10427:6;10435:4;11237:23;11392:130;:102;11460:7;:33;;;11392:7;:42;;;:67;;:102;;;;:::i;:130::-;11263:114;:90;11320:7;:32;;;11263:7;:37;;;:56;;:90;;;;:::i;:114::-;:259;;;;:::i;:::-;11237:285;;11533:30;11565:12;11581:157;11662:7;:21;;;11701:7;:23;;;11581:63;:157::i;:::-;11532:206;;;;11753:7;11748:160;;-1:-1:-1;11888:1:126;;;;-1:-1:-1;10319:9443:126;-1:-1:-1;;;;10319:9443:126:o;11748:160::-;12157:1;12138:16;:20;12134:7595;;;12174:25;12210:16;12174:53;;12415:21;12477:401;12558:7;:21;;;12601:7;:23;;;12646:7;:20;;;12688:7;:28;;;12744:7;:19;;;193:4:124;12738:25:126;;;;:::i;:::-;12785:7;:23;;;12830:7;:30;;;12477:59;:401::i;:::-;12450:428;-1:-1:-1;12450:428:126;-1:-1:-1;12450:428:126;12892:176;;-1:-1:-1;13044:1:126;;;;-1:-1:-1;10319:9443:126;-1:-1:-1;;;;;;10319:9443:126:o;12892:176::-;13245:17;13228:13;:34;13224:2891;;13536:21;13602:389;13702:22;13750:7;:20;;;13796:17;13845:7;:19;;;193:4:124;13839:25:126;;;;:::i;:::-;13890:7;:23;;;13939:7;:30;;;13602:74;:389::i;:::-;13575:416;-1:-1:-1;13575:416:126;-1:-1:-1;14297:8:126;;:84;;;;;14349:7;:32;;;14329:17;:52;14297:84;14272:335;;;-1:-1:-1;14430:1:126;;14433:4;;-1:-1:-1;10319:9443:126;-1:-1:-1;;;;;;;10319:9443:126:o;14272:335::-;14540:7;14535:72;;-1:-1:-1;14579:1:126;;;;-1:-1:-1;10319:9443:126;-1:-1:-1;;;;;;;10319:9443:126:o;14535:72::-;14634:24;:13;:22;:24::i;:::-;14633:25;;;:::i;:::-;14625:40;14660:4;;-1:-1:-1;10319:9443:126;-1:-1:-1;;;;;;;;10319:9443:126:o;13224:2891::-;15350:1;15323:7;:23;;;:28;15319:782;;15409:95;15435:7;:28;;;15410:22;:53;;;;:::i;15409:95::-;15408:96;;;:::i;15319:782::-;15961:28;;;;15937:21;;15936:94;;15937:52;;;:::i;12134:7595::-;16240:1;16221:16;:20;16217:3512;;;16257:25;16293:17;16294:16;16293:17;:::i;:::-;16257:54;;16428:21;16490:307;16571:22;16615:7;:20;;;16663:7;:19;;;193:4:124;16657:25:126;;;;:::i;:::-;16704:7;:23;;;16749:7;:30;;;16490:59;:307::i;:::-;16463:334;-1:-1:-1;16463:334:126;-1:-1:-1;16463:334:126;16811:64;;-1:-1:-1;16851:1:126;;;;-1:-1:-1;10319:9443:126;-1:-1:-1;;;;;;10319:9443:126:o;16811:64::-;17052:17;17035:13;:34;17031:2688;;17344:21;17410:387;17508:22;17556:7;:20;;;17602:17;17651:7;:19;;;193:4:124;17645:25:126;;;;:::i;:::-;17696:7;:23;;;17745:7;:30;;;17410:72;:387::i;:::-;17383:414;-1:-1:-1;17383:414:126;-1:-1:-1;18103:8:126;;:84;;;;;18155:7;:32;;;18135:17;:52;18103:84;18078:335;;;-1:-1:-1;18236:1:126;;18239:4;;-1:-1:-1;10319:9443:126;-1:-1:-1;;;;;;;10319:9443:126:o;18078:335::-;18346:7;18341:72;;-1:-1:-1;18385:1:126;;;;-1:-1:-1;10319:9443:126;-1:-1:-1;;;;;;;10319:9443:126:o;18341:72::-;18439:24;:13;:22;:24::i;17031:2688::-;18797:23;18867:335;18956:22;19004:7;:20;;;19056:7;:19;;;193:4:124;19050:25:126;;;;:::i;:::-;19101:7;:23;;;19150:7;:30;;;18867:63;:335::i;:::-;18838:364;-1:-1:-1;18838:364:126;-1:-1:-1;18838:364:126;19220:72;;-1:-1:-1;19264:1:126;;;;-1:-1:-1;10319:9443:126;-1:-1:-1;;;;;;;10319:9443:126:o;19220:72::-;19483:177;19526:122;19599:7;:23;;;19547:13;19527:17;:33;;;;:::i;19526:122::-;19484:164;;:15;:164;:::i;16217:3512::-;-1:-1:-1;19747:1:126;;19750:4;;-1:-1:-1;10319:9443:126;-1:-1:-1;;;;10319:9443:126:o;20009:1167::-;20112:6;20970:199;20988:156;21049:7;:32;;;193:4:124;21043:38:126;;;;:::i;:::-;21103:23;;;;20988:24;;;;;:156;:33;:156::i;20970:199::-;20752:203;20770:160;20834:7;:33;;;193:4:124;20828:39:126;;;;:::i;:::-;20889:23;;;;20770:25;;;;;:160;:36;:160::i;11709:1515:128:-;11903:7;11912:4;12066:9;12078:20;12082:2;12086:1;12089;12092;12095:2;12078:3;:20::i;:::-;12066:32;-1:-1:-1;12141:15:128;12154:1;12142:6;12146:2;12142:1;:6;:::i;12141:15::-;12137:19;;12238:1;12234;:5;12230:53;;;12263:1;12266:5;12255:17;;;;;;;12230:53;12487:5;;;12517:18;12487:5;12529:2;12533:1;12517:11;:18::i;:::-;12512:23;;193:4:124;12549:2:128;:9;12545:263;;12648:20;12655:12;193:4:124;12665:1:128;12655:9;:12::i;:::-;12648:2;;:6;:20::i;:::-;12643:25;;12545:263;;;12775:22;12782:14;193:4:124;12794:1:128;12782:11;:14::i;12775:22::-;12770:27;;12545:263;12890:12;:2;12899;12890:8;:12::i;:::-;12885:17;;13027:2;13022;:7;13018:55;;;13053:1;13056:5;13045:17;;;;;;;;13018:55;13193:7;;;-1:-1:-1;13202:4:128;;-1:-1:-1;;11709:1515:128;;;;;;;;;;:::o;8508:3846:124:-;8553:8;8606:1;8601;:6;8597:80;;8634:28;;-1:-1:-1;;;8634:28:124;;;;;;;;;;;8597:80;-1:-1:-1;;;;;;9286:41:124;-1:-1:-1;9283:1:124;9279:49;9386:9;;;9366:18;9363:33;9360:1;9356:41;9350:48;9448:9;;;9436:10;9433:25;9430:1;9426:33;9420:40;9506:9;;;9498:6;9495:21;9492:1;9488:29;9482:36;9562:9;;;9556:4;9553:19;9550:1;9546:27;;;9540:34;;;9617:9;;;9612:3;9609:18;9606:1;9602:26;9596:33;9672:9;;;9664:18;;;9661:1;9657:26;;;9651:33;;;9720:9;;;9712:18;;;9706:25;9902:3;:7;;;9872:2;9902:7;9888:22;;;;;-1:-1:-1;;9868:6:124;;;9928:30;;9929:17;;;9928:28;:30::i;:::-;10733:31;10729:35;;10784:5;;10191:2;10783:13;;;10800:32;10782:50;10852:5;;10851:13;;10868:33;10850:51;10921:5;;10920:13;;10937:33;10919:51;10990:5;;10989:13;;11006:33;10988:51;11059:5;;11058:13;;11075:32;11057:50;11127:5;;11126:13;;11143:30;11125:48;10130:31;10126:35;;10181:5;;10180:13;;10197:32;10179:50;10249:5;;10248:13;;10265:32;10247:50;10317:5;;10316:13;;-1:-1:-1;;10315:50:124;10385:5;;10384:13;;-1:-1:-1;;10383:50:124;10453:5;;10452:13;;;-1:-1:-1;;10451:50:124;10519:5;;;-1:-1:-1;;10519:46:124;11514:10;11904:43;11899:48;12027:71;:91;;;;12006:112;12191:72;12186:77;12334:3;12328:9;;;-1:-1:-1;;8508:3846:124:o;4907:3302::-;4953:8;-1:-1:-1;;5130:1:124;:26;5126:40;;-1:-1:-1;5165:1:124;;4907:3302;-1:-1:-1;4907:3302:124:o;5126:40::-;5365:21;5360:1;:26;5356:87;;5411:32;;-1:-1:-1;;;5411:32:124;;;;;;;;;;;5356:87;5716:7;5710:2;5705:7;;;5704:19;;-1:-1:-1;6052:8:124;6136:2;6076:29;6065:7;;;6064:41;-1:-1:-1;;;6064:51:124;6063:75;;6164:29;6160:33;;6156:37;;;;-1:-1:-1;;6835:35:124;;6890:5;;6470:2;6889:13;;;6906:32;6888:50;6958:5;;6957:13;;-1:-1:-1;;6956:51:124;7027:5;;7026:13;;7043:34;7025:52;7097:5;;7096:13;;-1:-1:-1;;7095:53:124;7168:5;;7167:13;;7184:35;7166:53;6476:32;6409:31;6405:35;;6460:5;;6459:13;;6458:50;;;6533:5;;;-1:-1:-1;;6533:40:124;6593:5;;6592:13;;;6609:35;6591:53;6662:5;;-1:-1:-1;;;6662:50:124;7584:10;;;;-1:-1:-1;6063:75:124;;-1:-1:-1;6458:50:124;;6662;8063:129;8094:49;8065:78;;8172:3;:7;;;8064:116;8063:127;:129::i;4059:629:168:-;4478:23;4504:33;-1:-1:-1;;;;;4504:27:168;;4532:4;4504:27;:33::i;:::-;4478:59;;4551:10;:17;4572:1;4551:22;;:57;;;;;4589:10;4578:30;;;;;;;;;;;;:::i;:::-;4577:31;4551:57;4547:135;;;4631:40;;-1:-1:-1;;;4631:40:168;;-1:-1:-1;;;;;8554:32:235;;4631:40:168;;;8536:51:235;8509:18;;4631:40:168;8390:203:235;5189:578:168;5272:4;5574:12;5588:23;5623:5;-1:-1:-1;;;;;5615:19:168;5635:4;5615:25;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5573:67;;;;5657:7;:69;;;;-1:-1:-1;5669:17:168;;:22;;:56;;;5706:10;5695:30;;;;;;;;;;;;:::i;:::-;5657:103;;;;-1:-1:-1;;;;;;;;;;5730:26:168;;:30;;;5189:578::o;15892:1050:128:-;16055:7;16064:4;16276:9;16288:20;16292:2;16296:1;16299;16302;16305:2;16288:3;:20::i;:::-;16276:32;-1:-1:-1;16318:16:128;16337:28;193:4:124;16345:13:128;:1;16355:2;16345:9;:13::i;:::-;:19;;;;:::i;:::-;16337:1;;:7;:28::i;:::-;16318:47;;193:4:124;16379:8:128;:15;16375:293;;16490:26;16503:12;193:4:124;16513:1:128;16503:9;:12::i;16490:26::-;16479:37;;16375:293;;;16629:28;16642:14;193:4:124;16654:1:128;16642:11;:14::i;16629:28::-;16618:39;;16375:293;16813:8;16809:1;:12;16805:60;;;16845:1;16848:5;16837:17;;;;;;;;16805:60;16906:12;;;-1:-1:-1;16920:4:128;;-1:-1:-1;;15892:1050:128;;;;;;;;;:::o;3400:3557:126:-;3675:21;3710:22;3746:20;3780:4;3919:19;3942:1;3919:24;3915:117;;-1:-1:-1;3967:14:126;;-1:-1:-1;3983:16:126;;-1:-1:-1;4001:13:126;;-1:-1:-1;4016:4:126;3959:62;;3915:117;4201:21;4253:19;4225:25;:14;:23;:25::i;:::-;:47;;;;:::i;:::-;4201:71;;4303:32;:21;:30;:32::i;:::-;4286:14;:49;4282:103;;;4359:1;4362;4365;4368:5;4351:23;;;;;;;;;;;4282:103;4418:14;4394:39;;5008:1;4988:16;:21;4984:497;;5121:112;:84;:13;5171:16;5190:14;5121:41;:84::i;:112::-;5103:130;;4984:497;;;5359:111;:83;5407:17;5408:16;5407:17;:::i;:::-;5359:13;;5427:14;5359:39;:83::i;:111::-;5358:112;;;:::i;:::-;5340:130;;4984:497;6183:33;6218:12;6234:143;6315:14;6347:16;6234:63;:143::i;:::-;6182:195;;;;6392:7;6387:62;;6423:1;6426;6429;6432:5;6415:23;;;;;;;;;;;;;6387:62;6458:30;6534:141;6615:13;6646:15;6534:63;:141::i;:::-;6498:177;-1:-1:-1;6498:177:126;-1:-1:-1;6498:177:126;6685:62;;6721:1;6724;6727;6730:5;6713:23;;;;;;;;;;;;;;6685:62;6771:109;:13;6809:22;6845:25;6771:24;:109::i;:::-;6756:124;-1:-1:-1;6945:4:126;;-1:-1:-1;;;;;3400:3557:126;;;;;;;;;;;:::o;7782:341::-;7885:7;7905:20;7927:12;7943:56;7982:7;7943:25;:56::i;:::-;7904:95;;;;8014:7;8009:79;;8044:33;;-1:-1:-1;;;8044:33:126;;;;;;;;;;;44905:1269;45532:28;;;;45109:4;;45532:50;;45567:14;45532:34;:50::i;:::-;45422:27;;;;45400:50;;:13;;:21;:50::i;:::-;:182;;:767;;;;-1:-1:-1;46093:28:126;;;;46028:139;;46139:14;46029:34;1037:3;193:4:124;46029:34:126;:::i;:::-;46028:47;:139;:47;:139::i;:::-;45916:27;;;;45896:48;;:13;;:19;:48::i;:::-;:271;;45125:1042;44905:1269;-1:-1:-1;;;;44905:1269:126:o;17581:1971:128:-;17786:7;17795:4;18092:1;18085:4;:8;18081:67;;;18131:5;18132:4;18131:5;:::i;:::-;18116:21;;:4;:21;:::i;:::-;18109:28;;18081:67;18643:10;18656:55;18703:1;18706:4;18656:46;:55::i;:::-;18643:68;;18721:9;18733:22;18739:2;18743:1;18746;18749;18752:2;18733:5;:22::i;:::-;18721:34;-1:-1:-1;18765:11:128;18779:37;18790:21;18809:1;18790:14;:2;18799:4;18790:8;:14::i;:21::-;18779:1;;18813:2;18779:10;:37::i;:::-;18765:51;;18834:3;18830:1;:7;18826:55;;;18861:1;18864:5;18853:17;;;;;;;;;18826:55;18951:7;;;193:4:124;18982:15:128;;18978:295;;19096:28;19109:14;193:4:124;19121:1:128;19109:11;:14::i;19096:28::-;19085:39;;18978:295;;;19236:26;19249:12;193:4:124;19259:1:128;19249:9;:12::i;19236:26::-;19225:37;;18978:295;19430:1;19419:8;:12;19415:60;;;19455:1;19458:5;19447:17;;;;;;;;;;19415:60;19516:12;;;;-1:-1:-1;19530:4:128;;-1:-1:-1;;;;17581:1971:128;;;;;;;;;;;:::o;42321:1866:126:-;42472:7;42481:4;42763:1;42728:7;:31;;;:36;42724:84;;-1:-1:-1;42788:1:126;;;;-1:-1:-1;42321:1866:126;-1:-1:-1;42321:1866:126:o;42724:84::-;42859:19;42881:49;42903:7;:26;;;42881:21;:49::i;:::-;42859:71;;43073:11;43087:167;43138:7;:27;;;43209:7;:35;;;43179:7;:27;;;:65;;;;:::i;:::-;43087:28;;;;;:167;:37;:167::i;:::-;43073:181;;43284:1;43268:12;:17;43264:411;;43329:3;43313:12;43305:27;43301:304;;;43384:28;;;43264:411;;43301:304;-1:-1:-1;43581:1:126;;;;-1:-1:-1;42321:1866:126;-1:-1:-1;;;42321:1866:126:o;43264:411::-;43650:13;43651:12;43650:13;:::i;:::-;43635:29;;;;:::i;:::-;;;43264:411;43915:31;;;;43838:29;;;;:119;;43890:3;;43838:38;:119::i;:::-;43832:125;;44040:3;44008:7;:29;;;:35;44004:83;;;-1:-1:-1;44067:1:126;;;;-1:-1:-1;42321:1866:126;-1:-1:-1;;;42321:1866:126:o;44004:83::-;44160:3;44128:7;:29;;;:35;44165:4;44120:50;;;;;;42321:1866;;;:::o;52581:5799::-;52797:7;52806:4;52895:20;52944:1;52929:11;:16;52925:670;;52992:26;;:39;;;:78;;53058:11;;52992:78;:::i;:::-;52961:109;;52925:670;;;53101:18;53130:12;53131:11;53130:12;:::i;:::-;53174:26;;:39;;;53101:42;;-1:-1:-1;53161:52:126;;53157:428;;;53304:26;;:39;;;:76;;;;-1:-1:-1;53157:428:126;;;53561:1;53564:5;53553:17;;;;;;;;53157:428;53087:508;52925:670;53984:26;;:40;;54042:42;;;;;53855:30;;;;53903:195;;53984:40;53903:63;:195::i;:::-;53854:244;;;;54113:7;54108:56;;54144:1;54147:5;54136:17;;;;;;;;;54108:56;54656:26;;:38;;;;54587:39;;;;;54173:18;;54474:274;;54526:208;;54587:129;;:39;:43;:129::i;:::-;54526:31;;:39;:208::i;:::-;54474:28;;;;;:34;:274::i;:::-;54410:26;;:38;;;;54256:83;;;;;54194:265;;54256:193;;:132;;54365:22;54256:108;:132::i;:193::-;54194:26;;:42;;;;:48;:265::i;:::-;:554;;;;:::i;:::-;54173:575;;54818:11;54832:185;54882:125;54937:56;54954:7;:26;;;:38;;;54937:12;:16;;:56;;;;:::i;:::-;54882:31;;:37;:125::i;:::-;54832:28;;;;;:36;:185::i;:::-;54818:199;;55044:3;55031:10;:16;55027:64;;;55071:1;55074:5;55063:17;;;;;;;;;;;55027:64;55138:3;55124:17;;;;55381:9;55393:294;55425:22;55461:7;:26;;;:39;;;55520:7;:26;;;:38;;;193:4:124;55514:44:126;;;;:::i;:::-;55572:26;;:42;;;;55628:49;;;;;55393:18;:294::i;:::-;55381:306;;55697:13;55713:84;55749:7;:26;;;:38;;;193:4:124;55743:44:126;;;;:::i;:::-;55713:12;;:16;:84::i;:::-;55697:100;;55815:5;55811:1;:9;55807:201;;;55988:1;55991:5;55980:17;;;;;;;;;;;;;55807:201;56114:26;;:49;;;;56177:42;;;;;56049:9;;;;56086:143;;56049:9;;56086:14;:143::i;:::-;56078:151;;193:4:124;56243:5:126;:12;56239:584;;56454:26;;:38;;;56355:169;;56382:128;;56448:44;;193:4:124;56448:44:126;:::i;:::-;56382:26;;:38;;;;:44;:128::i;56355:169::-;56347:177;;56239:584;;;56742:26;;:38;;;56641:171;;56668:130;;56736:44;;193:4:124;56736:44:126;:::i;:::-;56668:26;;:38;;;;:46;:130::i;56641:171::-;56633:179;;56239:584;56975:26;;:42;;;56923:104;;:10;;56956:5;;56923:19;:104::i;:::-;56910:117;;57087:10;193:4:124;57081:16:126;57077:398;;;57160:10;193:4:124;57154:16:126;57141:29;;57077:398;;;57456:1;57459:4;57448:16;;;;;;;;;;;;;57077:398;57649:1;57614:7;:31;;;:36;57610:728;;57736:29;;;;57680:31;;;;57672:107;;:46;:107::i;:::-;57666:113;;193:4:124;57797:3:126;:10;57793:168;;57937:1;57940:5;57929:17;;;;;;;;;;;;;57793:168;193:4:124;58008:9:126;;;;;58058:23;:10;58008:9;58058:18;:23::i;:::-;58045:36;;57610:728;;;58125:202;58187:126;58262:7;:29;;;58196:7;:31;;;58195:32;;;:::i;58187:126::-;58161:152;;193:4:124;58161:152:126;:::i;:::-;58125:10;;:18;:202::i;:::-;58112:215;;57610:728;-1:-1:-1;58356:10:126;;58368:4;;-1:-1:-1;52581:5799:126;-1:-1:-1;;;;;;;;;52581:5799:126:o;5576:1765:128:-;5768:7;5777:4;5931:9;5943:20;5947:2;5951:1;5954;5957;5960:2;5943:3;:20::i;:::-;5931:32;;6086:2;6082:1;:6;6078:54;;;6112:1;6115:5;6104:17;;;;;;;6078:54;6194:7;;;;;6225:8;6194:7;6231:1;6225:5;:8::i;:::-;6221:12;;6355:1;6351;:5;6347:53;;;6380:1;6383:5;6372:17;;;;;;;6347:53;6604:5;;;6634:18;6604:5;6646:2;6650:1;6634:11;:18::i;:::-;6629:23;;193:4:124;6666:2:128;:9;6662:261;;6764:20;6771:12;193:4:124;6781:1:128;6771:9;:12::i;6764:20::-;6759:25;;6662:261;;;6890:22;6897:14;193:4:124;6909:1:128;6897:11;:14::i;6890:22::-;6885:27;;6662:261;7005:12;:2;7014;7005:8;:12::i;:::-;7000:17;;7142:2;7137;:7;7133:55;;;7168:1;7171:5;7160:17;;;;;;;;7133:55;7310:7;;;;;7319:4;;-1:-1:-1;5576:1765:128;-1:-1:-1;;;;;;;5576:1765:128:o;13859:1409::-;14022:7;14031:4;14543:9;14555:22;14561:2;14565:1;14568;14571;14574:2;14555:5;:22::i;:::-;14543:34;-1:-1:-1;14587:17:128;14607:28;193:4:124;14617:11:128;:1;14625:2;14617:7;:11::i;:::-;:17;;;;:::i;14607:28::-;14587:48;;193:4:124;14649:9:128;:16;14645:300;;14765:29;14779:14;193:4:124;14791:1:128;14779:11;:14::i;14765:29::-;14753:41;;14645:300;;;14907:27;14921:12;193:4:124;14931:1:128;14921:9;:12::i;14907:27::-;14895:39;;14645:300;14966:21;:9;14984:2;14966:17;:21::i;:::-;14954:33;;15143:2;15131:9;:14;15127:62;;;15169:1;15172:5;15161:17;;;;;;;;15127:62;15230:14;;;;;15246:4;;-1:-1:-1;13859:1409:128;-1:-1:-1;;;;;;13859:1409:128:o;20059:343::-;20198:7;20387:8;:1;20393;20387:5;:8::i;:::-;20349:35;20360:19;20377:1;20360:12;:2;20369;20360:8;:12::i;:19::-;20349:1;;20381:2;20349:10;:35::i;:::-;:46;;;;:::i;2705:151:169:-;2780:12;2811:38;2833:6;2841:4;2847:1;2811:21;:38::i;20915:352:128:-;21056:7;21252:8;:1;21258;21252:5;:8::i;:::-;21210:39;21223:21;21242:1;21223:14;:2;21234;21223:10;:14::i;:21::-;21210:1;;21246:2;21210:12;:39::i;3180:392:169:-;3279:12;3331:5;3307:21;:29;3303:108;;;3359:41;;-1:-1:-1;;;3359:41:169;;3394:4;3359:41;;;8536:51:235;8509:18;;3359:41:169;8390:203:235;3303:108:169;3421:12;3435:23;3462:6;-1:-1:-1;;;;;3462:11:169;3481:5;3488:4;3462:31;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3420:73;;;;3510:55;3537:6;3545:7;3554:10;4769:12;4798:7;4793:408;;4821:19;4829:10;4821:7;:19::i;:::-;4793:408;;;5045:17;;:22;:49;;;;-1:-1:-1;;;;;;5071:18:169;;;:23;5045:49;5041:119;;;5121:24;;-1:-1:-1;;;5121:24:169;;-1:-1:-1;;;;;8554:32:235;;5121:24:169;;;8536:51:235;8509:18;;5121:24:169;8390:203:235;5041:119:169;-1:-1:-1;5180:10:169;5173:17;;5743:516;5874:17;;:21;5870:383;;6102:10;6096:17;6158:15;6145:10;6141:2;6137:19;6130:44;5870:383;6225:17;;-1:-1:-1;;;6225:17:169;;;;;;;;;;;-1:-1:-1;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;14:592:235:-;128:6;136;144;152;205:3;193:9;184:7;180:23;176:33;173:53;;;222:1;219;212:12;173:53;258:9;245:23;235:33;;315:2;304:9;300:18;287:32;277:42;;366:2;355:9;351:18;338:32;328:42;;421:2;410:9;406:18;393:32;448:18;440:6;437:30;434:50;;;480:1;477;470:12;434:50;503:22;;559:2;541:16;;;537:25;534:45;;;575:1;572;565:12;534:45;14:592;;;;-1:-1:-1;14:592:235;;-1:-1:-1;;14:592:235:o;864:180::-;923:6;976:2;964:9;955:7;951:23;947:32;944:52;;;992:1;989;982:12;944:52;-1:-1:-1;1015:23:235;;864:180;-1:-1:-1;864:180:235:o;1049:127::-;1110:10;1105:3;1101:20;1098:1;1091:31;1141:4;1138:1;1131:15;1165:4;1162:1;1155:15;1181:125;1246:9;;;1267:10;;;1264:36;;;1280:18;;:::i;1311:286::-;1370:6;1423:2;1411:9;1402:7;1398:23;1394:32;1391:52;;;1439:1;1436;1429:12;1391:52;1465:23;;-1:-1:-1;;;;;1517:31:235;;1507:42;;1497:70;;1563:1;1560;1553:12;1602:118;1688:5;1681:13;1674:21;1667:5;1664:32;1654:60;;1710:1;1707;1700:12;1725:241;1781:6;1834:2;1822:9;1813:7;1809:23;1805:32;1802:52;;;1850:1;1847;1840:12;1802:52;1889:9;1876:23;1908:28;1930:5;1908:28;:::i;1971:128::-;2038:9;;;2059:11;;;2056:37;;;2073:18;;:::i;2654:127::-;2715:10;2710:3;2706:20;2703:1;2696:31;2746:4;2743:1;2736:15;2770:4;2767:1;2760:15;2786:112;2818:1;2844;2834:35;;2849:18;;:::i;:::-;-1:-1:-1;2883:9:235;;2786:112::o;2903:193::-;-1:-1:-1;;;;;3021:10:235;;;3033;;;3017:27;;3056:11;;;3053:37;;;3070:18;;:::i;3101:197::-;-1:-1:-1;;;;;3223:10:235;;;3235;;;3219:27;;3258:11;;;3255:37;;;3272:18;;:::i;3303:200::-;3369:9;;;3342:4;3397:9;;3425:10;;3437:12;;;3421:29;3460:12;;;3452:21;;3418:56;3415:82;;;3477:18;;:::i;3904:521::-;3981:4;3987:6;4047:11;4034:25;4141:2;4137:7;4126:8;4110:14;4106:29;4102:43;4082:18;4078:68;4068:96;;4160:1;4157;4150:12;4068:96;4187:33;;4239:20;;;-1:-1:-1;4282:18:235;4271:30;;4268:50;;;4314:1;4311;4304:12;4268:50;4347:4;4335:17;;-1:-1:-1;4378:14:235;4374:27;;;4364:38;;4361:58;;;4415:1;4412;4405:12;4640:168;4713:9;;;4744;;4761:15;;;4755:22;;4741:37;4731:71;;4782:18;;:::i;4995:184::-;5065:6;5118:2;5106:9;5097:7;5093:23;5089:32;5086:52;;;5134:1;5131;5124:12;5086:52;-1:-1:-1;5157:16:235;;4995:184;-1:-1:-1;4995:184:235:o;5184:200::-;-1:-1:-1;;;;;5320:10:235;;;5308;;;5304:27;;5343:12;;;5340:38;;;5358:18;;:::i;5389:245::-;5487:2;5457:17;;;5476;;;;5453:41;-1:-1:-1;;;;;5509:44:235;;-1:-1:-1;;;;;;5555:49:235;;5506:99;5503:125;;;5608:18;;:::i;5639:213::-;5674:3;5722:5;5718:2;5707:21;-1:-1:-1;;;;;5752:39:235;5743:7;5740:52;5737:78;;5795:18;;:::i;:::-;5835:1;5831:15;;5639:213;-1:-1:-1;;5639:213:235:o;5989:136::-;6024:3;-1:-1:-1;;;6045:22:235;;6042:48;;6070:18;;:::i;:::-;-1:-1:-1;6110:1:235;6106:13;;5989:136::o;6130:361::-;6295:2;6280:18;;6328:1;6317:13;;6307:144;;6373:10;6368:3;6364:20;6361:1;6354:31;6408:4;6405:1;6398:15;6436:4;6433:1;6426:15;6307:144;6460:25;;;6130:361;:::o;6775:216::-;6839:9;;;6867:11;;;6814:3;6897:9;;6925:10;;6921:19;;6950:10;;6942:19;;6918:44;6915:70;;;6965:18;;:::i;:::-;6915:70;;6775:216;;;;:::o;6996:193::-;7035:1;7061;7051:35;;7066:18;;:::i;:::-;-1:-1:-1;;;7102:18:235;;-1:-1:-1;;7122:13:235;;7098:38;7095:64;;;7139:18;;:::i;:::-;-1:-1:-1;7173:10:235;;6996:193::o;8140:245::-;8207:6;8260:2;8248:9;8239:7;8235:23;8231:32;8228:52;;;8276:1;8273;8266:12;8228:52;8308:9;8302:16;8327:28;8349:5;8327:28;:::i;8598:412::-;8727:3;8765:6;8759:13;8790:1;8800:129;8814:6;8811:1;8808:13;8800:129;;;8912:4;8896:14;;;8892:25;;8886:32;8873:11;;;8866:53;8829:12;8800:129;;;-1:-1:-1;8984:1:235;8948:16;;8973:13;;;-1:-1:-1;8948:16:235;8598:412;-1:-1:-1;8598:412:235:o";
        readonly linkReferences: {};
        readonly immutableReferences: {
            readonly "18126": readonly [{
                readonly start: 6867;
                readonly length: 32;
            }, {
                readonly start: 6964;
                readonly length: 32;
            }];
            readonly "18129": readonly [{
                readonly start: 827;
                readonly length: 32;
            }, {
                readonly start: 1020;
                readonly length: 32;
            }, {
                readonly start: 1238;
                readonly length: 32;
            }];
            readonly "18132": readonly [{
                readonly start: 377;
                readonly length: 32;
            }, {
                readonly start: 1402;
                readonly length: 32;
            }, {
                readonly start: 11131;
                readonly length: 32;
            }];
            readonly "18135": readonly [{
                readonly start: 2286;
                readonly length: 32;
            }, {
                readonly start: 2455;
                readonly length: 32;
            }, {
                readonly start: 8879;
                readonly length: 32;
            }];
            readonly "18138": readonly [{
                readonly start: 6538;
                readonly length: 32;
            }];
            readonly "18141": readonly [{
                readonly start: 1594;
                readonly length: 32;
            }, {
                readonly start: 2576;
                readonly length: 32;
            }, {
                readonly start: 4333;
                readonly length: 32;
            }, {
                readonly start: 6667;
                readonly length: 32;
            }];
            readonly "18144": readonly [{
                readonly start: 4377;
                readonly length: 32;
            }, {
                readonly start: 6590;
                readonly length: 32;
            }, {
                readonly start: 6711;
                readonly length: 32;
            }];
            readonly "18147": readonly [{
                readonly start: 4083;
                readonly length: 32;
            }];
            readonly "18150": readonly [{
                readonly start: 2320;
                readonly length: 32;
            }, {
                readonly start: 2422;
                readonly length: 32;
            }, {
                readonly start: 8765;
                readonly length: 32;
            }];
            readonly "18153": readonly [{
                readonly start: 2941;
                readonly length: 32;
            }, {
                readonly start: 5071;
                readonly length: 32;
            }, {
                readonly start: 5172;
                readonly length: 32;
            }, {
                readonly start: 7534;
                readonly length: 32;
            }, {
                readonly start: 7827;
                readonly length: 32;
            }, {
                readonly start: 7887;
                readonly length: 32;
            }, {
                readonly start: 8497;
                readonly length: 32;
            }, {
                readonly start: 8803;
                readonly length: 32;
            }];
            readonly "18156": readonly [{
                readonly start: 236;
                readonly length: 32;
            }, {
                readonly start: 8841;
                readonly length: 32;
            }];
            readonly "7753": readonly [{
                readonly start: 3733;
                readonly length: 32;
            }, {
                readonly start: 6912;
                readonly length: 32;
            }, {
                readonly start: 7034;
                readonly length: 32;
            }, {
                readonly start: 7180;
                readonly length: 32;
            }];
        };
    };
    readonly methodIdentifiers: {
        readonly "checkpoint(uint256)": "ed64bab2";
        readonly "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070";
    };
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"sweepCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolConfig\",\"name\":\"_config\",\"type\":\"tuple\"},{\"internalType\":\"contract IERC4626\",\"name\":\"__vault\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"name\":\"AddressEmptyCode\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"AddressInsufficientBalance\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"DistributeExcessIdleFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ExpInvalidExponent\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FailedInnerCall\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"enum IHyperdrive.InsufficientLiquidityReason\",\"name\":\"reason\",\"type\":\"uint8\"}],\"name\":\"InsufficientLiquidity\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidCheckpointTime\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPresentValue\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTimestamp\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"LnInvalidInput\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MinimumSharePrice\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MinimumTransactionAmount\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NotPayable\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"OutputLimit\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"PoolIsPaused\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"RestrictedZeroAddress\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"}],\"name\":\"SafeERC20FailedOperation\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"TransferFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToInt128\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToInt256\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToUint112\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToUint128\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UpdateLiquidityFailed\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"basePayment\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fees\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newFeeCollector\",\"type\":\"address\"}],\"name\":\"FeeCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseProceeds\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"}],\"name\":\"PauseStatusUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"name\":\"Sweep\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newSweepCollector\",\"type\":\"address\"}],\"name\":\"SweepCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_checkpointTime\",\"type\":\"uint256\"}],\"name\":\"checkpoint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_bondAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_maxDeposit\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minVaultSharePrice\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"openShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"errors\":{\"AddressEmptyCode(address)\":[{\"details\":\"There's no code at `target` (it is not a contract).\"}],\"AddressInsufficientBalance(address)\":[{\"details\":\"The ETH balance of the account is not enough to perform the operation.\"}],\"FailedInnerCall()\":[{\"details\":\"A call to an address target failed. The target may have reverted.\"}],\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}],\"SafeERC20FailedOperation(address)\":[{\"details\":\"An operation with an ERC20 token failed.\"}]},\"kind\":\"dev\",\"methods\":{\"checkpoint(uint256)\":{\"params\":{\"_checkpointTime\":\"The time of the checkpoint to create.\"}},\"constructor\":{\"params\":{\"__vault\":\"The ERC4626 compatible vault.\",\"_config\":\"The configuration of the Hyperdrive pool.\"}},\"openShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_bondAmount\":\"The amount of bonds to short.\",\"_maxDeposit\":\"The most the user expects to deposit for this trade.        The units of this quantity are either base or vault shares,        depending on the value of `_options.asBase`.\",\"_minVaultSharePrice\":\"The minimum vault share price at which to        open the short. This allows traders to protect themselves from        opening a short in a checkpoint where negative interest has        accrued.\",\"_options\":\"The options that configure how the trade is settled.\"},\"returns\":{\"_0\":\"The maturity time of the short.\",\"_1\":\"The amount the user deposited for this trade. The units of this         quantity are either base or vault shares, depending on the value         of `_options.asBase`.\"}}},\"title\":\"ERC4626Target4\",\"version\":1},\"userdoc\":{\"errors\":{\"DistributeExcessIdleFailed()\":[{\"notice\":\"Thrown when the distribute excess idle calculation fails due         to the starting present value calculation failing.\"}],\"ExpInvalidExponent()\":[{\"notice\":\"Thrown when the exponent to `FixedPointMath.exp` would cause the         the result to be larger than the representable scale.\"}],\"InsufficientLiquidity(uint8)\":[{\"notice\":\"Thrown when the pool doesn't have sufficient liquidity to         complete the trade.\"}],\"InvalidCheckpointTime()\":[{\"notice\":\"Thrown when the checkpoint time provided to `checkpoint` is         larger than the current checkpoint or isn't divisible by the         checkpoint duration.\"}],\"InvalidPresentValue()\":[{\"notice\":\"Thrown when the present value calculation fails.\"}],\"InvalidTimestamp()\":[{\"notice\":\"Thrown when the timestamp used to construct an asset ID exceeds         the uint248 scale.\"}],\"LnInvalidInput()\":[{\"notice\":\"Thrown when the input to `FixedPointMath.ln` is less than or         equal to zero.\"}],\"MinimumSharePrice()\":[{\"notice\":\"Thrown when vault share price is smaller than the minimum share         price. This protects traders from unknowingly opening a long or         short after negative interest has accrued.\"}],\"MinimumTransactionAmount()\":[{\"notice\":\"Thrown when the input or output amount of a trade is smaller         than the minimum transaction amount. This protects traders and         LPs from losses of precision that can occur at small scales.\"}],\"NotPayable()\":[{\"notice\":\"Thrown when ether is sent to an instance that doesn't accept         ether as a deposit asset.\"}],\"OutputLimit()\":[{\"notice\":\"Thrown when a slippage guard is violated.\"}],\"PoolIsPaused()\":[{\"notice\":\"Thrown when the pool is paused and a trader tries to add         liquidity, open a long, or open a short. Traders can still         close their existing positions while the pool is paused.\"}],\"RestrictedZeroAddress()\":[{\"notice\":\"Thrown when the owner passed to permit is the zero address. This         prevents users from spending the funds in address zero by         sending an invalid signature to ecrecover.\"}],\"TransferFailed()\":[{\"notice\":\"Thrown when an ether transfer fails.\"}],\"UnsafeCastToInt128()\":[{\"notice\":\"Thrown when casting a value to a int128 that is outside of the         int128 scale.\"}],\"UnsafeCastToInt256()\":[{\"notice\":\"Thrown when casting a value to a int256 that is outside of the         int256 scale.\"}],\"UnsafeCastToUint112()\":[{\"notice\":\"Thrown when casting a value to a uint112 that is outside of the         uint128 scale.\"}],\"UnsafeCastToUint128()\":[{\"notice\":\"Thrown when casting a value to a uint128 that is outside of the         uint128 scale.\"}],\"UpdateLiquidityFailed()\":[{\"notice\":\"Thrown when `LPMath.calculateUpdateLiquidity` fails.\"}]},\"events\":{\"AddLiquidity(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when an LP adds liquidity to the Hyperdrive pool.\"},\"Approval(address,address,uint256)\":{\"notice\":\"Emitted when an account changes the allowance for another         account.\"},\"ApprovalForAll(address,address,bool)\":{\"notice\":\"Emitted when an account changes the approval for all of its         tokens.\"},\"CloseLong(address,address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is closed.\"},\"CloseShort(address,address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is closed.\"},\"CollectGovernanceFee(address,uint256)\":{\"notice\":\"Emitted when governance fees are collected.\"},\"CreateCheckpoint(uint256,uint256,uint256,uint256,uint256)\":{\"notice\":\"Emitted when a checkpoint is created.\"},\"FeeCollectorUpdated(address)\":{\"notice\":\"Emitted when the fee collector address is updated.\"},\"GovernanceUpdated(address)\":{\"notice\":\"Emitted when the governance address is updated.\"},\"Initialize(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when the Hyperdrive pool is initialized.\"},\"OpenLong(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is opened.\"},\"OpenShort(address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is opened.\"},\"PauseStatusUpdated(bool)\":{\"notice\":\"Emitted when the pause status is updated.\"},\"PauserUpdated(address,bool)\":{\"notice\":\"Emitted when a pauser is updated.\"},\"RedeemWithdrawalShares(address,address,uint256,uint256,uint256,bool)\":{\"notice\":\"Emitted when an LP redeems withdrawal shares.\"},\"RemoveLiquidity(address,address,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when an LP removes liquidity from the Hyperdrive pool.\"},\"Sweep(address,address)\":{\"notice\":\"Emitted when tokens are swept.\"},\"SweepCollectorUpdated(address)\":{\"notice\":\"Emitted when the sweep collector address is updated.\"},\"TransferSingle(address,address,address,uint256,uint256)\":{\"notice\":\"Emitted when tokens are transferred from one account to another.\"}},\"kind\":\"user\",\"methods\":{\"checkpoint(uint256)\":{\"notice\":\"Allows anyone to mint a new checkpoint.\"},\"constructor\":{\"notice\":\"Initializes the target4 contract.\"},\"openShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Opens a short position.\"}},\"notice\":\"ERC4626Hyperdrive's target4 logic contract. This contract contains         several stateful functions that couldn't fit into the Hyperdrive         contract.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/instances/erc4626/ERC4626Target4.sol\":\"ERC4626Target4\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/external/HyperdriveTarget4.sol\":{\"keccak256\":\"0xfc2c1dfa778f4be903a0a078c7cfb29fdf2caded6b72cf222f5da4b39e512bfa\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8bf1a17cc51013e821f44c426b8911db6f51ea96c0883f00ad98ab70993c2886\",\"dweb:/ipfs/QmdW2jFRm2vgoWQc1thZCPSASezv2dKFjmxayyV715HhFN\"]},\"contracts/src/instances/erc4626/ERC4626Base.sol\":{\"keccak256\":\"0x946feca7353542dc4095e98601d99be5e1c75ef1bb8e6d53fdb119d62618eb18\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://506a0ba5690c1ad5f0f9f0ed21e1635ac37d9dcb2b0a11db92c04acdfa853cad\",\"dweb:/ipfs/QmdteWqBq6K3XAKvyPbpKGCVERwvEN8r2pkTTv8hZc73gb\"]},\"contracts/src/instances/erc4626/ERC4626Target4.sol\":{\"keccak256\":\"0xa438c54fecd8f33ba8203e16d831e810b10ac9c57d11056324c240aed78532d4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://182bb8061dc42541d7648a9744a3a5e57a236da89c102f8608159182db17fdea\",\"dweb:/ipfs/QmRhRNSt8WDa7sDZPmYEXTag9DBcApBECPRmnMqvo6Rea8\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IERC4626.sol\":{\"keccak256\":\"0x7d99427dc97cc1b469d205de5ced0eb15c6e305d0a7ef73d45fe7ef47ce7231e\",\"license\":\"GPL-2.0-or-later\",\"urls\":[\"bzz-raw://c7726091d2f569ff79057a693324886e2a5558c586684460b51cd20612be59d3\",\"dweb:/ipfs/QmZv6BBe22fZRaC5iYiTuZMD2ZgUXvMBHjwZLikVSoXjDP\"]},\"contracts/src/interfaces/IERC4626Hyperdrive.sol\":{\"keccak256\":\"0x95d34e3dbf7a85d9d5d0071baddf3a8d73cf8a68a5c062d7656f4984b3ef5cb6\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2067273085c326e2f1789d1f571ea6fe4ecf211e551ffcda03b98ae0c9cdb724\",\"dweb:/ipfs/QmYxrY9uCXkaTSTCqvQvYx9phDcvkJim1JFbopxJRFEPbw\"]},\"contracts/src/interfaces/IERC4626HyperdriveRead.sol\":{\"keccak256\":\"0x2039eef677ba37898e8e42dcb321d11d3c87f739122fd03726241252326dea33\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://31eacdd274ac0d6ff2969cb465e0fddb262d223f78f9001d7252bd7370449c73\",\"dweb:/ipfs/QmVNRFMvXk1r8h9pCdSsRhQr5rkj8XgGpNoLwhb6Q6Hzbk\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xb8ee04f3090b498966970e210f7de0f982f6445628556f2f176385423d8c5952\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://db789f03faa935c6e3b0882b6e873e8f683c9c8841a4b128366dcbe7321911bf\",\"dweb:/ipfs/QmSQh1cX79nApuSAfJbVN99dmEaE4CK9QwWfEGcwhJMBLK\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x68adcd293ff25711add1698b6024faa45beec01eb044bd0103d3020aa96d856e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0e0f5e35a7d2c656e249394d25896e5adfb9af3e210c01b9ef5fa81d25a45e24\",\"dweb:/ipfs/QmbLASezHPWHcbodqSfw3Qh9NzqekqVPM8FhCXKGTCXL1h\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x812ccb32dff907e8614c89a65196eec239eceb3e63f9f14dde2b2269c75a67c0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://da5f2ce974bfcd8185342c121c879ba5aef23e1e4e7b36cf9fcba68296b8892c\",\"dweb:/ipfs/QmSho3PWs9bzejTYYjySuXcH9tVP4xFnkbUmSzQA54g8eG\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf\",\"dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/internal/HyperdriveAdmin.sol\":{\"keccak256\":\"0x683548d598b303bc8bab561818a2f88c100f6d26fda478e89c02b46cf710726d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://054a605eeb41760fbe1922bb32f511c87e1ca4dd04f3fa64f40783060b371603\",\"dweb:/ipfs/QmezP1mjnbPCwdDCrh4GjL7RVzU61ohTrcW6A7yxLiKcQM\"]},\"contracts/src/internal/HyperdriveBase.sol\":{\"keccak256\":\"0x7feb8df22e6f91b1ee70f50f5ca16a7819601bcb88fc5a5fa9cf16c708cc52bb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://60ff7ff4faa45551099b025d03f2438477b5fd1f64f82b78c6ed26cbdafc64f6\",\"dweb:/ipfs/QmWtbftziGdSKAEvpRoaWRnTxMNwgUVs2nDN6nFugX1WYN\"]},\"contracts/src/internal/HyperdriveCheckpoint.sol\":{\"keccak256\":\"0x3514b829c99e0015385ff08dd1479e452529a6283e8b6800946542ff21dc9649\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://37ffd17baea5080f4184372ac835bf60694760499756235a61e41a480f4ab3c7\",\"dweb:/ipfs/QmUzEnJhRhpW18MH7GyXsug9u5FLehNfgjR7RAhZizLLVd\"]},\"contracts/src/internal/HyperdriveLP.sol\":{\"keccak256\":\"0x72410851e77940e66681e23b9d10f3c3de0e8c9a3e5b1cca627e93bba431775d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://82a9292f388b16572cc5c5e873d1ead666ddcc3e436cf5d7fb036fd6c63ee9a2\",\"dweb:/ipfs/Qmauzxkn46ACS4XV43m2MbDF91KYP4ExYwSxL3cm1SDL6j\"]},\"contracts/src/internal/HyperdriveLong.sol\":{\"keccak256\":\"0xe791adb5c58a73ff2c978fcc79153f9042702e2c4fc5d71f60534323d5ba4832\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7ec4adf40e5f90574c7484ddeeed41cbe1f60b29847b18b169aa3130b8882aa7\",\"dweb:/ipfs/QmeY9y922jhcLzGw9d4VUNNoDkUeFhTJ8ZVThrvqzcGGjm\"]},\"contracts/src/internal/HyperdriveMultiToken.sol\":{\"keccak256\":\"0x21a9aafb8e23a22c77111e13538fa8f709446e4f3a64ef84b2eebc2aa9d04373\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://41517912353540de5b430587ca8220f9d34d4432d3c723951d5fb618d5907b5d\",\"dweb:/ipfs/QmU3cTCrAq94digVS97s5af1Pu86uGBpmpus6w7828fUbG\"]},\"contracts/src/internal/HyperdriveShort.sol\":{\"keccak256\":\"0xc42b5a9ee5eee3cb9177b136eb9f4b81a4b51d9468f8faa97309934b6b371bc5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b9291237fcdbb8ff97517acd19499cfa4afc6d670a89fd5cc0309a201a7b1006\",\"dweb:/ipfs/QmfQmUwvGhJgPFyNaHvur8AViePBzvSBNAdaZJBwMkY5Je\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xf13ba4bcf41673bc04e4ae32a29c31b62514d66cfedee70b0d3bff574efc0e4a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e505639a656cf7c908e7c64cfd5cae6f4174a679de19d17a3f12f6e3fc4b2195\",\"dweb:/ipfs/QmNmcmz9nV9uDyeouo8yWAKMoMqEVx6JMTfZwCRa9QU83N\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0x3031a1ec376be333eebe0062c474a22d7f970cb02de62ab6823c6918c0a7f83b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6c80cc2fd8b7908b6420ebb21cb99266c93e01d6cdd9d1a41f8847493849b131\",\"dweb:/ipfs/QmeMehWbF2RwQaf6c6yaj5KHjXboDRpzBCtvFnLW4BXBbc\"]},\"contracts/src/libraries/Errors.sol\":{\"keccak256\":\"0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88\",\"dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x631f6529908f62f71775f8c6120afdca3a836fb24fa9fa4701cad54f4a9da076\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2baf6ad8917a3fbb6d040334451f6b4f6936b00518c4cd308b9c6fa11569b2bd\",\"dweb:/ipfs/QmXD16vk6MRxmPRqy8ZXSpRA5XxhSf1pnsQH32ARDJTk8L\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0xcf305dde8aa320d1e1b767734ce8edce456af537525d40e30d5345f09f6e34ab\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://056c9a563f1a9e0133e17463497ad19be517d35b770170122edea50ca9fbe002\",\"dweb:/ipfs/QmS6dkVRHzdbv7etumcCtNtm9GuXDCjqZxxhtYfP6keAAY\"]},\"contracts/src/libraries/LPMath.sol\":{\"keccak256\":\"0x5b3c0d159b1945a14227028d835e011bf740e007f664cba049ece1b6ab963067\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d8f4fef22462dabc799b2f8124440a7cc57076f7ceecb46219c69b09f50baf5f\",\"dweb:/ipfs/Qmcw9iC1RZt4Nh7dGH1yR7vUi6qZHJf6ReAvF2uLFHESqZ\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8\",\"dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x4a9c91313bed7cda6ef503af23c9f777008b5258e9cb2176eab6acc52be79891\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://88da1f5502a12fe1024be90f6a6ea08556cc1f2660ab8cbeb5e07640abb7711c\",\"dweb:/ipfs/QmVQoG9TyrAsVYcgvgZfgA5pQk8V8wvS4BewGNP4B3Txyy\"]},\"lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol\":{\"keccak256\":\"0x60c65f701957fdd6faea1acb0bb45825791d473693ed9ecb34726fdfaa849dd7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ea290300e0efc4d901244949dc4d877fd46e6c5e43dc2b26620e8efab3ab803f\",\"dweb:/ipfs/QmcLLJppxKeJWqHxE2CUkcfhuRTgHSn8J4kijcLa5MYhSt\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0xc3e1fa9d1987f8d349dfb4d6fe93bf2ca014b52ba335cfac30bfe71e357e6f80\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c5703ccdeb7b1d685e375ed719117e9edf2ab4bc544f24f23b0d50ec82257229\",\"dweb:/ipfs/QmTdwkbQq7owpCiyuzE7eh5LrD2ddrBCZ5WHVsWPi1RrTS\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c\",\"dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850\",\"dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x6008dabfe393240d73d7dd7688033f72740d570aa422254d29a7dce8568f3aff\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f5196ec75139918c6c7bb4251b36395e668f1fa6d206beba7e7520e74913940d\",\"dweb:/ipfs/QmSyqjksXxmm2mCG6qRd1yuwLykypkSVBbnBnGqJRcuJMi\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x37bb49513c49c87c4642a891b13b63571bc87013dde806617aa1efb54605f386\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b3036b3a83b7c48f96641f2a9002b9f2dcb6a5958dd670894ada21ae8229b3d0\",\"dweb:/ipfs/QmUNfSBdoVtjhETaUJCYcaC7pTMgbhht926tJ2uXJbiVd3\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245\",\"dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y\"]},\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":{\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12\",\"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF\"]},\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02\",\"dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd\"]}},\"version\":1}";
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
                    readonly internalType: "contract IERC4626";
                    readonly name: "__vault";
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
                    readonly constructor: {
                        readonly params: {
                            readonly __vault: "The ERC4626 compatible vault.";
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
            readonly remappings: readonly ["@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/", "aave-v3-core/=lib/aave-v3-core/", "ds-test/=lib/forge-std/lib/ds-test/src/", "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/", "forge-std/=lib/forge-std/src/", "openzeppelin-contracts/=lib/openzeppelin-contracts/", "openzeppelin/=lib/openzeppelin-contracts/contracts/", "solmate/=lib/solmate/src/"];
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
                readonly keccak256: "0x946feca7353542dc4095e98601d99be5e1c75ef1bb8e6d53fdb119d62618eb18";
                readonly urls: readonly ["bzz-raw://506a0ba5690c1ad5f0f9f0ed21e1635ac37d9dcb2b0a11db92c04acdfa853cad", "dweb:/ipfs/QmdteWqBq6K3XAKvyPbpKGCVERwvEN8r2pkTTv8hZc73gb"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/instances/erc4626/ERC4626Target4.sol": {
                readonly keccak256: "0xa438c54fecd8f33ba8203e16d831e810b10ac9c57d11056324c240aed78532d4";
                readonly urls: readonly ["bzz-raw://182bb8061dc42541d7648a9744a3a5e57a236da89c102f8608159182db17fdea", "dweb:/ipfs/QmRhRNSt8WDa7sDZPmYEXTag9DBcApBECPRmnMqvo6Rea8"];
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
        readonly id: 8270;
        readonly exportedSymbols: {
            readonly ERC4626Base: readonly [7983];
            readonly ERC4626Target4: readonly [8269];
            readonly HyperdriveTarget4: readonly [5771];
            readonly IERC4626: readonly [10602];
            readonly IHyperdrive: readonly [11028];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:1092:50";
        readonly nodes: readonly [{
            readonly id: 8238;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:23:50";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 8240;
            readonly nodeType: "ImportDirective";
            readonly src: "64:73:50";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/external/HyperdriveTarget4.sol";
            readonly file: "../../external/HyperdriveTarget4.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 8270;
            readonly sourceUnit: 5772;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 8239;
                    readonly name: "HyperdriveTarget4";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 5771;
                    readonly src: "73:17:50";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 8242;
            readonly nodeType: "ImportDirective";
            readonly src: "138:57:50";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IERC4626.sol";
            readonly file: "../../interfaces/IERC4626.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 8270;
            readonly sourceUnit: 10603;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 8241;
                    readonly name: "IERC4626";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 10602;
                    readonly src: "147:8:50";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 8244;
            readonly nodeType: "ImportDirective";
            readonly src: "196:63:50";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IHyperdrive.sol";
            readonly file: "../../interfaces/IHyperdrive.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 8270;
            readonly sourceUnit: 11029;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 8243;
                    readonly name: "IHyperdrive";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 11028;
                    readonly src: "205:11:50";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 8246;
            readonly nodeType: "ImportDirective";
            readonly src: "260:48:50";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/instances/erc4626/ERC4626Base.sol";
            readonly file: "./ERC4626Base.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 8270;
            readonly sourceUnit: 7984;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 8245;
                    readonly name: "ERC4626Base";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 7983;
                    readonly src: "269:11:50";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 8269;
            readonly nodeType: "ContractDefinition";
            readonly src: "755:375:50";
            readonly nodes: readonly [{
                readonly id: 8268;
                readonly nodeType: "FunctionDefinition";
                readonly src: "987:141:50";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 8267;
                    readonly nodeType: "Block";
                    readonly src: "1126:2:50";
                    readonly nodes: readonly [];
                    readonly statements: readonly [];
                };
                readonly documentation: {
                    readonly id: 8252;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "819:163:50";
                    readonly text: "@notice Initializes the target4 contract.\n @param _config The configuration of the Hyperdrive pool.\n @param __vault The ERC4626 compatible vault.";
                };
                readonly implemented: true;
                readonly kind: "constructor";
                readonly modifiers: readonly [{
                    readonly arguments: readonly [{
                        readonly id: 8261;
                        readonly name: "_config";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 8255;
                        readonly src: "1096:7:50";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10819_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig memory";
                        };
                    }];
                    readonly id: 8262;
                    readonly kind: "baseConstructorSpecifier";
                    readonly modifierName: {
                        readonly id: 8260;
                        readonly name: "HyperdriveTarget4";
                        readonly nameLocations: readonly ["1078:17:50"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 5771;
                        readonly src: "1078:17:50";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "1078:26:50";
                }, {
                    readonly arguments: readonly [{
                        readonly id: 8264;
                        readonly name: "__vault";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 8258;
                        readonly src: "1117:7:50";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_IERC4626_$10602";
                            readonly typeString: "contract IERC4626";
                        };
                    }];
                    readonly id: 8265;
                    readonly kind: "baseConstructorSpecifier";
                    readonly modifierName: {
                        readonly id: 8263;
                        readonly name: "ERC4626Base";
                        readonly nameLocations: readonly ["1105:11:50"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 7983;
                        readonly src: "1105:11:50";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "1105:20:50";
                }];
                readonly name: "";
                readonly nameLocation: "-1:-1:-1";
                readonly parameters: {
                    readonly id: 8259;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 8255;
                        readonly mutability: "mutable";
                        readonly name: "_config";
                        readonly nameLocation: "1038:7:50";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 8268;
                        readonly src: "1008:37:50";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10819_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig";
                        };
                        readonly typeName: {
                            readonly id: 8254;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 8253;
                                readonly name: "IHyperdrive.PoolConfig";
                                readonly nameLocations: readonly ["1008:11:50", "1020:10:50"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10819;
                                readonly src: "1008:22:50";
                            };
                            readonly referencedDeclaration: 10819;
                            readonly src: "1008:22:50";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolConfig_$10819_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 8258;
                        readonly mutability: "mutable";
                        readonly name: "__vault";
                        readonly nameLocation: "1064:7:50";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 8268;
                        readonly src: "1055:16:50";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_IERC4626_$10602";
                            readonly typeString: "contract IERC4626";
                        };
                        readonly typeName: {
                            readonly id: 8257;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 8256;
                                readonly name: "IERC4626";
                                readonly nameLocations: readonly ["1055:8:50"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10602;
                                readonly src: "1055:8:50";
                            };
                            readonly referencedDeclaration: 10602;
                            readonly src: "1055:8:50";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IERC4626_$10602";
                                readonly typeString: "contract IERC4626";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "998:79:50";
                };
                readonly returnParameters: {
                    readonly id: 8266;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1126:0:50";
                };
                readonly scope: 8269;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "public";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 8248;
                    readonly name: "HyperdriveTarget4";
                    readonly nameLocations: readonly ["782:17:50"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 5771;
                    readonly src: "782:17:50";
                };
                readonly id: 8249;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "782:17:50";
            }, {
                readonly baseName: {
                    readonly id: 8250;
                    readonly name: "ERC4626Base";
                    readonly nameLocations: readonly ["801:11:50"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 7983;
                    readonly src: "801:11:50";
                };
                readonly id: 8251;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "801:11:50";
            }];
            readonly canonicalName: "ERC4626Target4";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly documentation: {
                readonly id: 8247;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "310:445:50";
                readonly text: "@author DELV\n @title ERC4626Target4\n @notice ERC4626Hyperdrive's target4 logic contract. This contract contains\n         several stateful functions that couldn't fit into the Hyperdrive\n         contract.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance.";
            };
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [8269, 7983, 5771, 14797, 18103, 16633, 15699, 17117, 13157, 14333, 18319, 71995, 11551, 12117];
            readonly name: "ERC4626Target4";
            readonly nameLocation: "764:14:50";
            readonly scope: 8270;
            readonly usedErrors: readonly [10890, 10902, 10911, 10926, 10932, 10935, 10938, 10941, 10947, 10950, 10956, 10959, 10970, 10973, 10982, 10985, 10988, 10991, 10997, 71370, 71651, 71656, 71659, 71940];
            readonly usedEvents: readonly [11371, 11386, 11405, 11420, 11437, 11456, 11475, 11496, 11509, 11516, 11521, 11526, 11531, 11538, 11543, 11550, 12098, 12107, 12116];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 50;
};
//# sourceMappingURL=ERC4626Target4.d.ts.map