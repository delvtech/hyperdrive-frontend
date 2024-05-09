export const StETHTarget2 = {
    abi: [
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "contract IERC20",
                            "name": "baseToken",
                            "type": "address"
                        },
                        {
                            "internalType": "contract IERC20",
                            "name": "vaultSharesToken",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "linkerFactory",
                            "type": "address"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "linkerCodeHash",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "uint256",
                            "name": "initialVaultSharePrice",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minimumShareReserves",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minimumTransactionAmount",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "circuitBreakerDelta",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "positionDuration",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "checkpointDuration",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "timeStretch",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "governance",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "feeCollector",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "sweepCollector",
                            "type": "address"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "uint256",
                                    "name": "curve",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "flat",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "governanceLP",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "governanceZombie",
                                    "type": "uint256"
                                }
                            ],
                            "internalType": "struct IHyperdrive.Fees",
                            "name": "fees",
                            "type": "tuple"
                        }
                    ],
                    "internalType": "struct IHyperdrive.PoolConfig",
                    "name": "_config",
                    "type": "tuple"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [],
            "name": "DistributeExcessIdleFailed",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "ExpInvalidExponent",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "InsufficientLiquidity",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "InvalidTimestamp",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "LnInvalidInput",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "MinimumSharePrice",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "MinimumTransactionAmount",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "OutputLimit",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "PoolIsPaused",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "ReentrancyGuardReentrantCall",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "RestrictedZeroAddress",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "TransferFailed",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "UnsafeCastToInt128",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "UnsafeCastToInt256",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "UnsafeCastToUint112",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "UnsafeCastToUint128",
            "type": "error"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "provider",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "lpAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "baseAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "lpSharePrice",
                    "type": "uint256"
                }
            ],
            "name": "AddLiquidity",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "approved",
                    "type": "bool"
                }
            ],
            "name": "ApprovalForAll",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "trader",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "destination",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "assetId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "maturityTime",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "baseAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "bondAmount",
                    "type": "uint256"
                }
            ],
            "name": "CloseLong",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "trader",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "destination",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "assetId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "maturityTime",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "baseAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "basePayment",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "bondAmount",
                    "type": "uint256"
                }
            ],
            "name": "CloseShort",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "collector",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "fees",
                    "type": "uint256"
                }
            ],
            "name": "CollectGovernanceFee",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "checkpointTime",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "checkpointVaultSharePrice",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultSharePrice",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "maturedShorts",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "maturedLongs",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "lpSharePrice",
                    "type": "uint256"
                }
            ],
            "name": "CreateCheckpoint",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newFeeCollector",
                    "type": "address"
                }
            ],
            "name": "FeeCollectorUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newGovernance",
                    "type": "address"
                }
            ],
            "name": "GovernanceUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "provider",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "lpAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "baseAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "apr",
                    "type": "uint256"
                }
            ],
            "name": "Initialize",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "trader",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "assetId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "maturityTime",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "baseAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "bondAmount",
                    "type": "uint256"
                }
            ],
            "name": "OpenLong",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "trader",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "assetId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "maturityTime",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "baseAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "baseProceeds",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "bondAmount",
                    "type": "uint256"
                }
            ],
            "name": "OpenShort",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "isPaused",
                    "type": "bool"
                }
            ],
            "name": "PauseStatusUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newPauser",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "status",
                    "type": "bool"
                }
            ],
            "name": "PauserUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "provider",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "destination",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "withdrawalShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "baseAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
                }
            ],
            "name": "RedeemWithdrawalShares",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "provider",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "destination",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "lpAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "baseAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "withdrawalShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "lpSharePrice",
                    "type": "uint256"
                }
            ],
            "name": "RemoveLiquidity",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "collector",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "target",
                    "type": "address"
                }
            ],
            "name": "Sweep",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newSweepCollector",
                    "type": "address"
                }
            ],
            "name": "SweepCollectorUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "TransferSingle",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minOutput",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minVaultSharePrice",
                    "type": "uint256"
                },
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "destination",
                            "type": "address"
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool"
                        },
                        {
                            "internalType": "bytes",
                            "name": "extraData",
                            "type": "bytes"
                        }
                    ],
                    "internalType": "struct IHyperdrive.Options",
                    "name": "_options",
                    "type": "tuple"
                }
            ],
            "name": "openLong",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_bondAmount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_maxDeposit",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minVaultSharePrice",
                    "type": "uint256"
                },
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "destination",
                            "type": "address"
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool"
                        },
                        {
                            "internalType": "bytes",
                            "name": "extraData",
                            "type": "bytes"
                        }
                    ],
                    "internalType": "struct IHyperdrive.Options",
                    "name": "_options",
                    "type": "tuple"
                }
            ],
            "name": "openShort",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        }
    ],
    bytecode: '0x6102606040523480156200001257600080fd5b5060405162003cdf38038062003cdf8339810160408190526200003591620001ec565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c090815260c0808601516101e05260e08087015161020052610120808801519092526101008088015190915261014080880151909152918601805151909152805190920151905280516040908101516101609081529151606090810151610180908152918601518516610220528501516102405290840151600a80546001600160a01b031990811692861692909217905590840151600880548316918516919091179055920151600980549093169116179055620002eb565b6040516101e081016001600160401b03811182821017156200015457634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200017257600080fd5b919050565b6000608082840312156200018a57600080fd5b604051608081016001600160401b0381118282101715620001bb57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600061024082840312156200020057600080fd5b6200020a62000122565b62000215836200015a565b815262000225602084016200015a565b602082015262000238604084016200015a565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140808401518183015250610160620002a38185016200015a565b90820152610180620002b78482016200015a565b908201526101a0620002cb8482016200015a565b908201526101c0620002e08585830162000177565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161024051613859620004866000396000505060005050600050506000818160f8015281816103150152612c0d0152600081816113b001528181611be501528181611c4801528181612431015281816127f40152818161283001528181612a260152612be701526000818161075001528181610cb601528181610dc2015281816112880152612bc10152600061180401526000818161192a01528181612310015281816125c701526126400152600081816109d301528181610d150152818161132a015281816118fe0152612614015260008181610cf4015281816122cc015261259301526000818161077101528181610c9401528181610de3015281816112660152612c330152600081816101d4015281816103ab0152818161090b01526131f10152600081816106a2015281816107a30152818161082a0152818161088b01526108c301526000818161158a0152818161162601526124c50152600050506138596000f3fe6080604052600436106100295760003560e01c8063cba2e58d1461002e578063dbbe80701461005a575b600080fd5b61004161003c3660046133c1565b61006d565b6040805192835260208301919091520160405180910390f35b6100416100683660046133c1565b61008a565b60008061007c86868686610099565b915091505b94509492505050565b60008061007c868686866102d6565b6000806100a4610541565b600554610100900460ff16156100cd576040516321081abf60e01b815260040160405180910390fd5b6100d68361056b565b6000806100e388866105a4565b909250905060006100f4838361067d565b90507f00000000000000000000000000000000000000000000000000000000000000008110156101375760405163211ddda360e11b815260040160405180910390fd5b86821015610158576040516342af972b60e01b815260040160405180910390fd5b600061016261069b565b9050610170818460046106d6565b5060008060006101808787610c6d565b919a5091945090925090508b8810156101ac5760405163c972651760e01b815260040160405180910390fd5b81600b60008282546101be9190613436565b909155506101cf9050844283610e20565b6101f97f000000000000000000000000000000000000000000000000000000000000000085613436565b98506102078389888c610f5e565b600061021460018b6110f8565b905061022d8161022760208e018e613449565b8b61112d565b8d8a8a898e856102406020830183613449565b6001600160a01b03167f88087800d03445c97e2009f3f90906bf6ede79bbd194e275c66224e977a5b84c866102768987876111d5565b6102818a8888611204565b6102916040880160208901613480565b60408051948552602085019390935291830152151560608201526080810187905260a00160405180910390a350909b5050505050505050505050506100816001600055565b6000806102e1610541565b600554610100900460ff161561030a576040516321081abf60e01b815260040160405180910390fd5b6103138361056b565b7f00000000000000000000000000000000000000000000000000000000000000008610156103545760405163211ddda360e11b815260040160405180910390fd5b600061035e61122c565b905084811015610381576040516342af972b60e01b815260040160405180910390fd5b600061038b61069b565b905060006103a261039a61069b565b8460046106d6565b905060006103d07f000000000000000000000000000000000000000000000000000000000000000084613436565b90506000806000806103e38e898861123f565b600b805494985092965090945092508391600090610402908490613436565b909155506104139050874283610e20565b50600061042184898d611362565b9050808d10156104445760405163c972651760e01b815260040160405180910390fd5b61044e818c6105a4565b508e905061045e81858b8961138a565b600061046b6002886110f8565b90508c6104858261047f6020840184613449565b8561112d565b858b86846104966020860186613449565b6001600160a01b03167fb354b32bd86ebd9f0968a338e5c2873d7f0d473aa7a668c2488e66038380258b8d8d6104cd8c888b611204565b6104dd60408b0160208c01613480565b6104f1896104eb8a8d61349d565b9061067d565b6040805195865260208601949094529284019190915215156060830152608082015260a081018a905260c00160405180910390a350989d50939b5050505050505050505050506100816001600055565b60026000540361056457604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b600061057a6020830183613449565b6001600160a01b0316036105a15760405163f0dd15fd60e01b815260040160405180910390fd5b50565b600080806105b86040850160208601613480565b156105dd576105d3856105ce60408701876134b0565b61153e565b90935090506105f9565b50346105f5856105f060408701876134b0565b611604565b8492505b61060161122c565b9150801561067457604051600090339083908381818185875af1925050503d806000811461064b576040519150601f19603f3d011682016040523d82523d6000602084013e610650565b606091505b5050905080610672576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b60006106928383670de0b6b3a76400006116a1565b90505b92915050565b60006106c77f00000000000000000000000000000000000000000000000000000000000000004261350d565b6106d1904261349d565b905090565b600083815260076020526040812060018101546001600160801b03161515806106fe57504285115b1561071757600101546001600160801b03169050610c66565b600080600061072461069b565b905080880361079c5786925061079561073b6116bf565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006116e0565b9150610858565b60006107c87f00000000000000000000000000000000000000000000000000000000000000008a613436565b90505b8181036107e3578793506107e061073b6116bf565b92505b6000818152600760205260409020600101546001600160801b031693508315610825576000818152600760205260409020546001600160801b03169250610856565b61084f7f000000000000000000000000000000000000000000000000000000000000000082613436565b90506107cb565b505b61086183611700565b6001850180546001600160801b0319166001600160801b03929092169190911790556108b76108b07f00000000000000000000000000000000000000000000000000000000000000008a61349d565b8984610e20565b6108f5886108ef6108e87f000000000000000000000000000000000000000000000000000000000000000083613436565b429061172e565b84610e20565b6108fe87611743565b50600090506007816109307f00000000000000000000000000000000000000000000000000000000000000008c61349d565b815260208101919091526040016000908120600101546001600160801b0316915061095c60028b6110f8565b6000818152600e60205260408120549192508b8b8315610aa2576001925060008061098b86898d8660006118e7565b9150915080600b60008282546109a19190613436565b909155506109bd9050866000846109b7816119b6565b886119e0565b6109c78183613436565b91506109f786838a8e877f0000000000000000000000000000000000000000000000000000000000000000611b5a565b9150610a0b610a06838561067d565b611ba4565b60058054600290610a2c9084906201000090046001600160701b0316613521565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a5982611700565b60058054601090610a7b908490600160801b90046001600160801b0316613541565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000610aaf6001846110f8565b6000818152600e60205260409020549091508015610bbe5760019450600080610adc838b8f8860016118e7565b9150915080600b6000828254610af29190613436565b90915550610b0e905083600084610b08816119b6565b8a611bce565b610b18818361349d565b9150610b27610a06838761067d565b60058054600290610b489084906201000090046001600160701b0316613521565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610b7582611700565b60058054601090610b97908490600160801b90046001600160801b0316613541565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610bf657610bea610bd0876119b6565b610bd9836119b6565b610be39190613561565b6000611dbf565b610bf4838f611e72565b505b6000610c018461206c565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a250999b5050505050505050505050505b9392505050565b600080600080610cda610c7e6116bf565b600154600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f00000000000000000000000000000000000000000000000000000000000000006121ca565b9250610ce761073b6116bf565b9050610d3e8684610d39847f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006121f6565b612263565b15610d4b57610d4b6122a5565b600080610d598884896122be565b9092509050610d68828661349d565b9450610d758184896116a1565b9350610d81848961349d565b9550670de0b6b3a7640000610e0787610d986116bf565b610da29190613436565b600154610dc0908990600160801b90046001600160801b031661349d565b7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006116e0565b1115610e1557610e156122a5565b505092959194509250565b600083815260076020526040902054600160801b90046001600160801b0316808303610e4c5750505050565b6000848152600760205260408120546001600160801b031690819003610ea657610e7583611700565b600086815260076020526040902080546001600160801b0319166001600160801b0392909216919091179055610f24565b610ef7610ef2670de0b6b3a7640000610ebf888661349d565b610ec99190613581565b85670de0b6b3a7640000610edd878a61349d565b610ee79190613581565b85929190600161233e565b611700565b600086815260076020526040902080546001600160801b0319166001600160801b03929092169190911790555b610f2d84611700565b60009586526007602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600254600160801b90046001600160801b0316610fa0610ef282610f8a670de0b6b3a764000086613581565b6004546001600160801b0316919088600161233e565b600480546001600160801b0319166001600160801b0392909216919091179055610fc985611700565b60018054600090610fe49084906001600160801b0316613541565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061101184611700565b60018054601090611033908490600160801b90046001600160801b0316613598565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061106084611700565b61106a9082613541565b600280546001600160801b03808416600160801b02911617905590506000611091836123e6565b90506110af816110a0876119b6565b6110aa90846135b8565b611dbf565b6110b88461242a565b6110c4576110c46122a5565b60006110cf8561248a565b9050806110ef57604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b60006001600160f81b038211156111225760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600d602090815260408083206001600160a01b03861684529091528120805483929061115f908490613436565b90915550506000838152600e602052604081208054839290611182908490613436565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b60006111e76040830160208401613480565b156111f3575082610c66565b6111fd848461067d565b9050610c66565b60006112166040830160208401613480565b15611225576111fd8484612497565b5082610c66565b60006106d1670de0b6b3a76400006124ac565b6000806000806112ac6112506116bf565b600154600160801b90046001600160801b0316897f00000000000000000000000000000000000000000000000000000000000000008a7f0000000000000000000000000000000000000000000000000000000000000000612538565b9250866112b98488612559565b11156112c7576112c76122a5565b6000806112d561073b6116bf565b92506112eb89670de0b6b3a7640000858b61256e565b509193509091506112fe9050818361349d565b611308908661349d565b94506113548861134e8b61131c858a61349d565b8b6113278e8261267c565b8e7f0000000000000000000000000000000000000000000000000000000000000000612692565b90612559565b955092505093509350935093565b60006113746040830160208401613480565b15611380575082610c66565b6111fd8484612497565b6001546001600160801b0316838110156113a6576113a66122a5565b60035490849003907f0000000000000000000000000000000000000000000000000000000000000000906113de908390600f0b6126b7565b10156113ec576113ec6122a5565b60035461143690610ef290600160801b90046001600160801b0316611419670de0b6b3a764000086613581565b600454600160801b90046001600160801b0316919089600161233e565b600480546001600160801b03928316600160801b02921691909117905561145c81611700565b600180546001600160801b0319166001600160801b039290921691909117905561148585611700565b600180546010906114a7908490600160801b90046001600160801b0316613541565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506114d485611700565b600380546010906114f6908490600160801b90046001600160801b0316613541565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611525836123e6565b90506110af81611534886119b6565b6110aa9084613561565b60008084341015611562576040516312171d8360e31b815260040160405180910390fd5b5060085460405163a1903eab60e01b81526001600160a01b03918216600482015234869003917f0000000000000000000000000000000000000000000000000000000000000000169063a1903eab90879060240160206040518083038185885af11580156115d4573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906115f991906135e0565b91505b935093915050565b604051636d78045960e01b8152336004820152306024820152604481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636d780459906064016020604051808303816000875af1158015611677573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061169b91906135e0565b50505050565b60008260001904841183021582026116b857600080fd5b5091020490565b6001546003546000916106d1916001600160801b0390911690600f0b6126b7565b60006116f7826116f18588886116a1565b906126dd565b95945050505050565b60006001600160801b0382111561172a57604051630f0af95160e11b815260040160405180910390fd5b5090565b600081831161173d5782610692565b50919050565b6005546000908190611766908490600160801b90046001600160801b031661067d565b6005546201000090046001600160701b031692509050818111156118e2576000611790838361349d565b905061179f610ef28286612748565b600580546010906117c1908490600160801b90046001600160801b0316613598565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006117fa858361249790919063ffffffff16565b90506000611828827f000000000000000000000000000000000000000000000000000000000000000061067d565b905080600b600082825461183c9190613436565b9091555061184c9050818361349d565b915061185782611700565b600180546000906118729084906001600160801b0316613541565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061189f8261275d565b600380546000906118b4908490600f0b6135f9565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b6000806118f48785612497565b91506000611922837f000000000000000000000000000000000000000000000000000000000000000061067d565b905061194e817f000000000000000000000000000000000000000000000000000000000000000061067d565b9150831561197157611960828261349d565b61196a908461349d565b9250611988565b61197b828261349d565b6119859084613436565b92505b868610156119ab5761199b8387896116a1565b92506119a88287896116a1565b91505b509550959350505050565b60006001600160ff1b0382111561172a5760405163396ea70160e11b815260040160405180910390fd5b600354600160801b90046001600160801b0316611a29610ef282611a0c670de0b6b3a764000086613581565b600454600160801b90046001600160801b031691908a600061233e565b600480546001600160801b03928316600160801b029216919091179055611a4f86611700565b611a599082613598565b600380546001600160801b03928316600160801b029216919091179055611a7f84611700565b60018054600090611a9a9084906001600160801b0316613541565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611ac783612787565b60038054600090611adc908490600f0b6135f9565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611b0c85611700565b60018054601090611b2e908490600160801b90046001600160801b0316613598565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600080611b7284611b6c8a888a6116a1565b90612497565b9050611b7f8884866116a1565b611b899082613436565b905086811115611b995786810391505b509695505050505050565b60006001600160701b0382111561172a5760405163086b151760e11b815260040160405180910390fd5b6001546001600160801b031683811080611c1057507f0000000000000000000000000000000000000000000000000000000000000000611c0e858361349d565b105b15611c1d57611c1d6122a5565b6003549084900390600f0b611c328482613561565b905083611c3e866119b6565b138015611c7357507f0000000000000000000000000000000000000000000000000000000000000000611c7183836126b7565b105b15611c8057611c806122a5565b600254600160801b90046001600160801b0316611cc2610ef282611cac670de0b6b3a764000088613581565b6004546001600160801b031691908c600061233e565b600480546001600160801b0319166001600160801b0392909216919091179055611cec888261349d565b9050611cf781611700565b600280546001600160801b03928316600160801b029216919091179055611d1d83611700565b600180546001600160801b0319166001600160801b0392909216919091179055611d4682612787565b600380546001600160801b0319166001600160801b0392909216919091179055611d6f87611700565b60018054601090611d91908490600160801b90046001600160801b0316613541565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b6000611de8611dce84836127c3565b611dd98460006127c3565b611de39190613561565b612787565b9050600081600f0b1315611e3d5760028054829190600090611e149084906001600160801b0316613541565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b1215611e6d57611e5281613626565b60028054600090611e149084906001600160801b0316613598565b505050565b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95490918291611ebd916001600160801b03169061349d565b905080600003611ed1576001915050610695565b6000611edc856127d2565b905080600003611ef157600192505050610695565b600080611eff83858961286e565b9150915080611f15576000945050505050610695565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401611f519291906136ca565b6040805180830381865af4158015611f6d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f919190613740565b91509150611faf611fa1826119b6565b611faa90613764565b6129e2565b925082611fc55760009650505050505050610695565b611fce82611700565b60068054600090611fe99084906001600160801b0316613541565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061201681611700565b60068054601090612038908490600160801b90046001600160801b0316613541565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e61209587612b78565b6040518263ffffffff1660e01b81526004016120b19190613780565b6040805180830381865af41580156120cd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120f1919061378f565b9150915080612107575060009485945092505050565b6000808611612117576000612121565b612121838761067d565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b039092169161218c9190613436565b612196919061349d565b9050806000036121af5750600096879650945050505050565b60006121bb8383612497565b98600198509650505050505050565b60006121eb8787876121e488670de0b6b3a764000061349d565b8787612cb2565b979650505050505050565b600061225b61223761221084670de0b6b3a764000061349d565b61134e670de0b6b3a7640000612226818a612748565b612230919061349d565b8790612559565b61224990670de0b6b3a7640000613436565b611b6c84670de0b6b3a764000061349d565b949350505050565b60008061229a856122726116bf565b61227c9190613436565b600154610dc0908790600160801b90046001600160801b031661349d565b909210949350505050565b60405163bb55fd2760e01b815260040160405180910390fd5b6000806123088561134e85817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a76400006122fe818c612748565b61134e919061349d565b9150612334827f000000000000000000000000000000000000000000000000000000000000000061067d565b9050935093915050565b60008260000361234f5750846116f7565b81156123a2576123806123628487613436565b61236c858761067d565b612376888a61067d565b611b6c9190613436565b9050600061238e858861172e565b90508082101561239c578091505b506116f7565b8285036123b1575060006116f7565b6123dc6123be848761349d565b6123c88587612559565b6123d2888a61067d565b611b6c919061349d565b9695505050505050565b600061240e600e60006123fa6002866110f8565b8152602001908152602001600020546119b6565b612420600e60006123fa6001876110f8565b6106959190613561565b60006124567f000000000000000000000000000000000000000000000000000000000000000083612559565b60025461246c91906001600160801b0316613436565b600154612482906001600160801b03168461067d565b101592915050565b6000610695826004611e72565b600061069283670de0b6b3a7640000846116a1565b604051630f451f7160e31b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690637a28fb8890602401602060405180830381865afa158015612514573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061069591906135e0565b60006121eb87878761255288670de0b6b3a764000061349d565b8787612d66565b60006106928383670de0b6b3a7640000612d89565b60008080806125bf87866125b88b61134e6125918c670de0b6b3a764000061349d565b7f000000000000000000000000000000000000000000000000000000000000000090612559565b9190612d89565b93506125eb847f000000000000000000000000000000000000000000000000000000000000000061067d565b9150600061260c61260489670de0b6b3a764000061349d565b8a9088612d89565b9050612638817f0000000000000000000000000000000000000000000000000000000000000000612559565b9350612664847f000000000000000000000000000000000000000000000000000000000000000061067d565b61266e9084613436565b915050945094509450949050565b600081831161268b5781610692565b5090919050565b6000806126aa846126a48a888a612d89565b90612748565b9050611b7f888486612d89565b6000806126c48484612daf565b9092509050806126d6576126d66122a5565b5092915050565b6000816000036126f65750670de0b6b3a7640000610695565b8260000361270657506000610695565b6000612711836119b6565b90506000612726612721866119b6565b612deb565b905081810261273d670de0b6b3a7640000826137bf565b90506123dc81613011565b600061069283670de0b6b3a764000084612d89565b600060016001607f1b0382111561172a5760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b03198212806127a5575060016001607f1b0382135b1561172a5760405163a5353be560e01b815260040160405180910390fd5b600081831361268b5781610692565b60025460009081906127ed906001600160801b031684612748565b90506128197f000000000000000000000000000000000000000000000000000000000000000082613436565b6001546001600160801b0316111561173d576001547f0000000000000000000000000000000000000000000000000000000000000000906128649083906001600160801b031661349d565b610c66919061349d565b61287661330e565b60008061288284612b78565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b81526004016128bd9190613780565b6040805180830381865af41580156128d9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906128fd919061378f565b93509050826129125750600091506115fc9050565b600061293961293484610160015185610140015161067d90919063ffffffff16565b6119b6565b61295961293485610120015186610100015161255990919063ffffffff16565b6129639190613561565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b60015460035460405163685a2be760e11b81526001600160801b0380841660048301819052600f9390930b60248301819052600160801b90940416604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612a99573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612abd91906137ed565b935093509350935080612ad95750600098975050505050505050565b868414612b0a57612ae984611700565b600180546001600160801b0319166001600160801b03929092169190911790555b858314612b3b57612b1a83612787565b600380546001600160801b0319166001600160801b03929092169190911790555b848214612b6957612b4b82611700565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612b80613360565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526002540482166101008201526004549091610120830191612c7891166131a6565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192612caa929004166131a6565b905292915050565b600080612cc2888887878761321c565b9050612cdc856116f1612cd5898c613436565b869061067d565b9750612ce98489856116a1565b975087811015612cfb57612cfb6122a5565b878103670de0b6b3a76400008110612d3057612d29612d22670de0b6b3a764000088612748565b82906126dd565b9050612d48565b612d45612d22670de0b6b3a764000088612497565b90505b80881015612d5857612d586122a5565b909603979650505050505050565b600080612d7788888888888861324b565b909250905080611b9957611b996122a5565b6000826000190484118302158202612da057600080fd5b50910281810615159190040190565b600080600083612dbe866119b6565b612dc89190613561565b90506000811215612de0576000809250925050610676565b946001945092505050565b6000808213612e0d5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f19820190612e909084901c6119b6565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361302c57506000919050565b680755bf798b4a1bf1e58212613055576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b0181810595509293509091906123dc74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6119b6565b600080670de0b6b3a76400006131ba61069b565b6131c49190613581565b90508083116131d45760006131de565b6131de818461349d565b9150610c66613215670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613581565b8390612497565b600061322885856126dd565b613241613239866116f1868b612559565b859085612d89565b6123dc9190613436565b600080600061325d898988888861321c565b905061326d866116f1898b613436565b975087811015613284576000809250925050613303565b878103613292818688612d89565b9050670de0b6b3a764000081106132bf576132b8612d22670de0b6b3a764000089612748565b90506132d7565b6132d4612d22670de0b6b3a764000089612497565b90505b6132e18186612748565b9050808a10156132f957600080935093505050613303565b8903925060019150505b965096945050505050565b604051806101200160405280613322613360565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b600080600080608085870312156133d757600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561340357600080fd5b85016060818803121561341557600080fd5b939692955090935050565b634e487b7160e01b600052601160045260246000fd5b8082018082111561069557610695613420565b60006020828403121561345b57600080fd5b81356001600160a01b0381168114610c6657600080fd5b80151581146105a157600080fd5b60006020828403121561349257600080fd5b8135610c6681613472565b8181038181111561069557610695613420565b6000808335601e198436030181126134c757600080fd5b83018035915067ffffffffffffffff8211156134e257600080fd5b60200191503681900382131561067657600080fd5b634e487b7160e01b600052601260045260246000fd5b60008261351c5761351c6134f7565b500690565b6001600160701b038181168382160190808211156126d6576126d6613420565b6001600160801b038181168382160190808211156126d6576126d6613420565b81810360008312801583831316838312821617156126d6576126d6613420565b808202811582820484141761069557610695613420565b6001600160801b038281168282160390808211156126d6576126d6613420565b80820182811260008312801582168215821617156135d8576135d8613420565b505092915050565b6000602082840312156135f257600080fd5b5051919050565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561069557610695613420565b600081600f0b60016001607f1b0319810361364357613643613420565b60000392915050565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a0820190506136de82855161364c565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b6000806040838503121561375357600080fd5b505080516020909101519092909150565b6000600160ff1b820161377957613779613420565b5060000390565b6101808101610695828461364c565b600080604083850312156137a257600080fd5b8251915060208301516137b481613472565b809150509250929050565b6000826137ce576137ce6134f7565b600160ff1b8214600019841416156137e8576137e8613420565b500590565b6000806000806080858703121561380357600080fd5b84519350602085015192506040850151915060608501516134158161347256fea26469706673582212205c1a063ebc114ce95324fcf50f44ac4e91125deab9dbd28428f56fddc46a53db64736f6c63430008140033',
    methodIdentifiers: {
        "openLong(uint256,uint256,uint256,(address,bool,bytes))": "cba2e58d",
        "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070"
    }
};
