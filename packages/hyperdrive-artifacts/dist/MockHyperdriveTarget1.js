export const MockHyperdriveTarget1 = {
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
            "name": "InsufficientBalance",
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
                    "name": "_maturityTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_bondAmount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minOutput",
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
            "name": "closeLong",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_maturityTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_bondAmount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minOutput",
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
            "name": "closeShort",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
    bytecode: '0x6102606040523480156200001257600080fd5b5060405162003fd238038062003fd28339810160408190526200003591620001ec565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c090815260c0808601516101e05260e08087015161020052610120808801519092526101008088015190915261014080880151909152918601805151909152805190920151905280516040908101516101609081529151606090810151610180908152918601518516610220528501516102405290840151600a80546001600160a01b031990811692861692909217905590840151600880548316918516919091179055920151600980549093169116179055620002eb565b6040516101e081016001600160401b03811182821017156200015457634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200017257600080fd5b919050565b6000608082840312156200018a57600080fd5b604051608081016001600160401b0381118282101715620001bb57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600061024082840312156200020057600080fd5b6200020a62000122565b62000215836200015a565b815262000225602084016200015a565b602082015262000238604084016200015a565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140808401518183015250610160620002a38185016200015a565b90820152610180620002b78482016200015a565b908201526101a0620002cb8482016200015a565b908201526101c0620002e08585830162000177565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161024051613b3e620004946000396000505060005050600050506000818160af0152818161033f0152612e9701526000818161135701528181611759015281816117bc01528181612a7701528181612ab301528181612cb00152612e710152600081816106a901528181610d2f01528181610eee015281816116180152612e4b01526000611b66015260008181611c8c0152818161227601526122ef01526000818161092c01528181610e7d01528181611c6001526122c3015260008181610d72015261223c0152600081816106ca01528181610d0d01528181610f0f015281816115f60152612ebd01526000818161086401528181610dfd015281816116b50152818161211101526133db015260008181610600015281816106fc01528181610783015281816107e4015261081c0152600050506000818161194e01528181611997015281816125140152818161255d01528181612638015281816126e4015281816127d0015261287c0152613b3e6000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806329b23fc11461003b578063ded0623114610060575b600080fd5b61004e610049366004613689565b610073565b60405190815260200160405180910390f35b61004e61006e366004613689565b61008c565b60006100818585858561009a565b90505b949350505050565b60006100818585858561032a565b60006100a461057e565b6100ad826105a8565b7f00000000000000000000000000000000000000000000000000000000000000008410156100ee5760405163211ddda360e11b815260040160405180910390fd5b60006100f86105e1565b90508542101561011b5761011561010d6105f9565b82600461062f565b50610129565b6101278682600461062f565b505b61013e610137600288610bc6565b3387610bfb565b6000806000806000806101528b888e610cd4565b95509550955095509550955060008c90508c4210156102125782600b600082825461017d91906136fe565b90915550610195905061018e6105f9565b4284610f6d565b6101a28c888787856110ab565b60006101ad8e611225565b90506101cb6101bb8e61126f565b6101c59083613711565b8261129d565b6101d489611350565b6101e0576101e06113b0565b60006101eb8a6113c9565b90508061020b57604051638bdf918d60e01b815260040160405180910390fd5b5050610229565b61021c86896113d6565b9550610227886113c9565b505b6000610236878a8d6114b7565b90508b8110156102595760405163c972651760e01b815260040160405180910390fd5b8c86858b8e610269600288610bc6565b6102766020830183613731565b6001600160a01b0316337fcb02fec44af7356703a283b87ccec63f4ea688efc67fee9cdc1834a93260c7308a6102ad8b8888611551565b6102b88c8989611580565b6102c86040890160208a01613768565b6102dc8a6102d68d8f6136fe565b906115a8565b6040805195865260208601949094529284019190915215156060830152608082015260a081018a905260c00160405180910390a450939c505050505050505050505050506100846001600055565b600061033461057e565b61033d826105a8565b7f000000000000000000000000000000000000000000000000000000000000000084101561037e5760405163211ddda360e11b815260040160405180910390fd5b60006103886105e1565b9050854210156103a35761039d61010d6105f9565b506103b1565b6103af8682600461062f565b505b6103bf610137600188610bc6565b6000806000806000806103d38b888e6115bd565b95509550955095509550955060008c90508c4210156104865782600b60008282546103fe91906136fe565b9091555061040f905061018e6105f9565b61041c8c88878785611742565b600061042782611225565b905061043f6104358e61126f565b6101c59083613785565b61044889611350565b610454576104546113b0565b600061045f8a6113c9565b90508061047f57604051638bdf918d60e01b815260040160405180910390fd5b505061049d565b61049086896113d6565b955061049b886113c9565b505b60006104aa878a8d6114b7565b90508b8110156104cd5760405163c972651760e01b815260040160405180910390fd5b8c898c6104db600186610bc6565b6104e86020830183613731565b6001600160a01b0316337fc0e1704f2ff88686bdc2a73d31e0dc4e054eddbdc3564af7a148229cf857b8028861051f898888611551565b61052a8a8989611580565b61053a6040890160208a01613768565b60408051948552602085019390935291830152151560608201526080810188905260a00160405180910390a450919a50505050505050505050506100846001600055565b6002600054036105a157604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b60006105b76020830183613731565b6001600160a01b0316036105de5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b60006105f4670de0b6b3a7640000611933565b905090565b60006106257f0000000000000000000000000000000000000000000000000000000000000000426137c3565b6105f490426137d7565b600083815260076020526040812060018101546001600160801b031615158061065757504285115b1561067057600101546001600160801b03169050610bbf565b600080600061067d6105f9565b90508088036106f5578692506106ee610694611a2e565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a4f565b91506107b1565b60006107217f00000000000000000000000000000000000000000000000000000000000000008a6136fe565b90505b81810361073c57879350610739610694611a2e565b92505b6000818152600760205260409020600101546001600160801b03169350831561077e576000818152600760205260409020546001600160801b031692506107af565b6107a87f0000000000000000000000000000000000000000000000000000000000000000826136fe565b9050610724565b505b6107ba83611a66565b6001850180546001600160801b0319166001600160801b03929092169190911790556108106108097f00000000000000000000000000000000000000000000000000000000000000008a6137d7565b8984610f6d565b61084e886108486108417f0000000000000000000000000000000000000000000000000000000000000000836136fe565b4290611a90565b84610f6d565b61085787611aa5565b50600090506007816108897f00000000000000000000000000000000000000000000000000000000000000008c6137d7565b815260208101919091526040016000908120600101546001600160801b031691506108b560028b610bc6565b6000818152600e60205260408120549192508b8b83156109fb57600192506000806108e486898d866000611c49565b9150915080600b60008282546108fa91906136fe565b909155506109169050866000846109108161126f565b886110ab565b61092081836136fe565b915061095086838a8e877f0000000000000000000000000000000000000000000000000000000000000000611d18565b915061096461095f83856115a8565b611d62565b600580546002906109859084906201000090046001600160701b03166137ea565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506109b282611a66565b600580546010906109d4908490600160801b90046001600160801b031661380a565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000610a08600184610bc6565b6000818152600e60205260409020549091508015610b175760019450600080610a35838b8f886001611c49565b9150915080600b6000828254610a4b91906136fe565b90915550610a67905083600084610a618161126f565b8a611742565b610a7181836137d7565b9150610a8061095f83876115a8565b60058054600290610aa19084906201000090046001600160701b03166137ea565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610ace82611a66565b60058054601090610af0908490600160801b90046001600160801b031661380a565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610b4f57610b43610b298761126f565b610b328361126f565b610b3c9190613711565b600061129d565b610b4d838f611d8c565b505b6000610b5a84611f86565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a250999b5050505050505050505050505b9392505050565b60006001600160f81b03821115610bf05760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600d602090815260408083206001600160a01b0386168452909152902054811115610c3e57604051631e9acf1760e31b815260040160405180910390fd5b6000838152600d602090815260408083206001600160a01b0386168452825280832080548590039055858352600e90915281208054839290610c819084906137d7565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b600080600080600080600080610ce9896120e4565b9050610d53610cf6611a2e565b600154600160801b90046001600160801b03168d847f00000000000000000000000000000000000000000000000000000000000000008f7f0000000000000000000000000000000000000000000000000000000000000000612135565b90995096509150610d65610694611a2e565b9250610d9b8289610d96867f00000000000000000000000000000000000000000000000000000000000000006121a5565b6121d5565b15610da857610da86113b0565b8a8a60008080610dba85878a87612217565b9b5091945092509050610dcd81846137d7565b610dd790886136fe565b9650610de382846136fe565b610ded908c6136fe565b9a505050505050506000600760007f00000000000000000000000000000000000000000000000000000000000000008b610e2791906137d7565b815260208101919091526040016000908120600101546001600160801b03169150428a11610e6f5760008a8152600760205260409020600101546001600160801b0316610e71565b8a5b9050610ea18c8884848f7f0000000000000000000000000000000000000000000000000000000000000000611d18565b9750610ead85886137d7565b9650670de0b6b3a7640000610f3384610ec4611a2e565b610ece91906136fe565b600154610eec908d90600160801b90046001600160801b03166137d7565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a4f565b1115610f4157610f416113b0565b610f51888885888686600061232b565b939b509199509097509095505050505093975093979195509350565b600083815260076020526040902054600160801b90046001600160801b0316808303610f995750505050565b6000848152600760205260408120546001600160801b031690819003610ff357610fc283611a66565b600086815260076020526040902080546001600160801b0319166001600160801b0392909216919091179055611071565b61104461103f670de0b6b3a764000061100c88866137d7565b611016919061382a565b85670de0b6b3a764000061102a878a6137d7565b611034919061382a565b8592919060016123ca565b611a66565b600086815260076020526040902080546001600160801b0319166001600160801b03929092169190911790555b61107a84611a66565b60009586526007602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600354600160801b90046001600160801b03166110f461103f826110d7670de0b6b3a76400008661382a565b600454600160801b90046001600160801b031691908a60006123ca565b600480546001600160801b03928316600160801b02921691909117905561111a86611a66565b6111249082613841565b600380546001600160801b03928316600160801b02921691909117905561114a84611a66565b600180546000906111659084906001600160801b031661380a565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061119283612474565b600380546000906111a7908490600f0b613861565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506111d785611a66565b600180546010906111f9908490600160801b90046001600160801b0316613841565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600061124d600e6000611239600286610bc6565b81526020019081526020016000205461126f565b61125f600e6000611239600187610bc6565b6112699190613711565b92915050565b60006001600160ff1b038211156112995760405163396ea70160e11b815260040160405180910390fd5b5090565b60006112c66112ac84836124b0565b6112b78460006124b0565b6112c19190613711565b612474565b9050600081600f0b131561131b57600280548291906000906112f29084906001600160801b031661380a565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b121561134b576113308161388e565b600280546000906112f29084906001600160801b0316613841565b505050565b600061137c7f0000000000000000000000000000000000000000000000000000000000000000836124c6565b60025461139291906001600160801b03166136fe565b6001546113a8906001600160801b0316846115a8565b101592915050565b60405163bb55fd2760e01b815260040160405180910390fd5b6000611269826004611d8c565b60008060006113e484611aa5565b909250905060006113f586866115a8565b90508183111561140d5761140a8683856124db565b95505b8281101561141f578083039250611424565b600092505b61142d83611d62565b600580546001600160701b039290921662010000026fffffffffffffffffffffffffffff00001990921691909117908190556001600160801b03600160801b909104168087101561148057869003611484565b5060005b61148d81611a66565b600580546001600160801b03928316600160801b0292169190911790555085935050505092915050565b6000806114c485856115a8565b90506114cf816124f9565b9450846000036114e3576000915050610bbf565b6114f36040840160208501613768565b156115225761151b856115096020860186613731565b61151660408701876138b4565b6125e2565b9150611549565b611545856115336020860186613731565b61154060408701876138b4565b61277c565b8491505b509392505050565b60006115636040830160208401613768565b1561156f575082610bbf565b61157984846115a8565b9050610bbf565b60006115926040830160208401613768565b156115a1576115798484612912565b5082610bbf565b6000610bbf8383670de0b6b3a76400006124db565b6000806000806000806000806115d2896120e4565b905061163c6115df611a2e565b600154600160801b90046001600160801b03168d847f00000000000000000000000000000000000000000000000000000000000000008f7f0000000000000000000000000000000000000000000000000000000000000000612927565b9099509750915060008080611652610694611a2e565b95508c6116618f868984612217565b9a50919550909350915061167583856137d7565b61167f90876137d7565b955061168b82856136fe565b611695908c6137d7565b9a506116a1888c6136fe565b9950505050505061172c86868386600760007f00000000000000000000000000000000000000000000000000000000000000008f6116df91906137d7565b81526020810191909152604001600020600101546001600160801b0316428e116117235760008e8152600760205260409020600101546001600160801b0316611725565b8e5b600161232b565b9a9e939d50919b50909950929650945050505050565b6001546001600160801b03168381108061178457507f000000000000000000000000000000000000000000000000000000000000000061178285836137d7565b105b15611791576117916113b0565b6003549084900390600f0b6117a68482613711565b9050836117b28661126f565b1380156117e757507f00000000000000000000000000000000000000000000000000000000000000006117e5838361297b565b105b156117f4576117f46113b0565b600254600160801b90046001600160801b031661183661103f82611820670de0b6b3a76400008861382a565b6004546001600160801b031691908c60006123ca565b600480546001600160801b0319166001600160801b039290921691909117905561186088826137d7565b905061186b81611a66565b600280546001600160801b03928316600160801b02921691909117905561189183611a66565b600180546001600160801b0319166001600160801b03929092169190911790556118ba82612474565b600380546001600160801b0319166001600160801b03929092169190911790556118e387611a66565b60018054601090611905908490600160801b90046001600160801b031661380a565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601611982575047611a0d565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156119e6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a0a91906138fb565b90505b601254600003611a1e576000610bbf565b601254610bbf90849083906124db565b6001546003546000916105f4916001600160801b0390911690600f0b61297b565b600061008182611a608588886124db565b906129a1565b60006001600160801b0382111561129957604051630f0af95160e11b815260040160405180910390fd5b6000818311611a9f5782610bbf565b50919050565b6005546000908190611ac8908490600160801b90046001600160801b03166115a8565b6005546201000090046001600160701b03169250905081811115611c44576000611af283836137d7565b9050611b0161103f8286612a16565b60058054601090611b23908490600160801b90046001600160801b0316613841565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611b5c858361291290919063ffffffff16565b90506000611b8a827f00000000000000000000000000000000000000000000000000000000000000006115a8565b905080600b6000828254611b9e91906136fe565b90915550611bae905081836137d7565b9150611bb982611a66565b60018054600090611bd49084906001600160801b031661380a565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611c0182612a2b565b60038054600090611c16908490600f0b613861565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b600080611c568785612912565b91506000611c84837f00000000000000000000000000000000000000000000000000000000000000006115a8565b9050611cb0817f00000000000000000000000000000000000000000000000000000000000000006115a8565b91508315611cd357611cc282826137d7565b611ccc90846137d7565b9250611cea565b611cdd82826137d7565b611ce790846136fe565b92505b86861015611d0d57611cfd8387896124db565b9250611d0a8287896124db565b91505b509550959350505050565b600080611d3084611d2a8a888a6124db565b90612912565b9050611d3d8884866124db565b611d4790826136fe565b905086811115611d575786810391505b509695505050505050565b60006001600160701b038211156112995760405163086b151760e11b815260040160405180910390fd5b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95490918291611dd7916001600160801b0316906137d7565b905080600003611deb576001915050611269565b6000611df685612a55565b905080600003611e0b57600192505050611269565b600080611e19838589612af1565b9150915080611e2f576000945050505050611269565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401611e6b929190613992565b6040805180830381865af4158015611e87573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611eab9190613a08565b91509150611ec9611ebb8261126f565b611ec490613a2c565b612c6c565b925082611edf5760009650505050505050611269565b611ee882611a66565b60068054600090611f039084906001600160801b031661380a565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611f3081611a66565b60068054601090611f52908490600160801b90046001600160801b031661380a565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e611faf87612e02565b6040518263ffffffff1660e01b8152600401611fcb9190613a48565b6040805180830381865af4158015611fe7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061200b9190613a57565b9150915080612021575060009485945092505050565b600080861161203157600061203b565b61203b83876115a8565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b03909216916120a691906136fe565b6120b091906137d7565b9050806000036120c95750600096879650945050505050565b60006120d58383612912565b98600198509650505050505050565b6000806120ef6105f9565b90508083116120ff576000612109565b61210981846137d7565b9150610bbf827f0000000000000000000000000000000000000000000000000000000000000000612912565b6000808061215661214e88670de0b6b3a76400006137d7565b899087612f3c565b905086156121985761216888886124c6565b91506121898a8a846121828a670de0b6b3a76400006137d7565b8989612f62565b925061219583826136fe565b90505b9750975097945050505050565b60006121c36121bc84670de0b6b3a76400006137d7565b83906124c6565b610bbf90670de0b6b3a76400006137d7565b60008061220c856121e4611a2e565b6121ee91906136fe565b600154610eec908790600160801b90046001600160801b03166137d7565b909210949350505050565b600080808061226e87866122678b61226161223a8c670de0b6b3a76400006137d7565b7f0000000000000000000000000000000000000000000000000000000000000000906124c6565b906124c6565b9190612f3c565b935061229a847f00000000000000000000000000000000000000000000000000000000000000006115a8565b915060006122bb6122b389670de0b6b3a76400006137d7565b8a9088612f3c565b90506122e7817f00000000000000000000000000000000000000000000000000000000000000006124c6565b9350612313847f00000000000000000000000000000000000000000000000000000000000000006115a8565b61231d90846136fe565b915050945094509450949050565b6000806000806000808888101561239a5786156123505761234d8d898b6124db565b9c505b61235b8c898b6124db565b9b506123668b61126f565b61236f8d61126f565b6123799190613711565b90506123868b898b6124db565b9a506123938a898b6124db565b99506123b9565b6123a38b61126f565b6123ac8d61126f565b6123b69190613711565b90505b9b9c9a9b999a975050505050505050565b6000826000036123db57508461246b565b811561242e5761240c6123ee84876136fe565b6123f885876115a8565b612402888a6115a8565b611d2a91906136fe565b9050600061241a8588611a90565b905080821015612428578091505b5061246b565b82850361243d5750600061246b565b61246861244a84876137d7565b61245485876124c6565b61245e888a6115a8565b611d2a91906137d7565b90505b95945050505050565b600060016001607f1b0319821280612492575060016001607f1b0382135b156112995760405163a5353be560e01b815260040160405180910390fd5b60008183136124bf5781610bbf565b5090919050565b6000610bbf8383670de0b6b3a7640000612f3c565b60008260001904841183021582026124f257600080fd5b5091020490565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016125485750476125d3565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156125ac573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906125d091906138fb565b90505b601254610bbf908490836124db565b600060125485116125f357846125f7565b6012545b9450600061260486611933565b9050856012600082825461261891906137d7565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016126be576040516001600160a01b038716908390600081818185875af1925050503d80600081146126ae576040519150601f19603f3d011682016040523d82523d6000602084013e6126b3565b606091505b505080915050612754565b60405163a9059cbb60e01b81526001600160a01b038781166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af115801561272d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906127519190613a87565b90505b80612772576040516312171d8360e31b815260040160405180910390fd5b5095945050505050565b601254841161278b578361278f565b6012545b9350600061279c85611933565b905084601260008282546127b091906137d7565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612856576040516001600160a01b038616908390600081818185875af1925050503d8060008114612846576040519150601f19603f3d011682016040523d82523d6000602084013e61284b565b606091505b5050809150506128ec565b60405163a9059cbb60e01b81526001600160a01b038681166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af11580156128c5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906128e99190613a87565b90505b8061290a576040516312171d8360e31b815260040160405180910390fd5b505050505050565b6000610bbf83670de0b6b3a7640000846124db565b6000808061294861294088670de0b6b3a76400006137d7565b8990876124db565b905086156121985761295a88886115a8565b91506121898a8a846129748a670de0b6b3a76400006137d7565b8989612f85565b6000806129888484612f96565b90925090508061299a5761299a6113b0565b5092915050565b6000816000036129ba5750670de0b6b3a7640000611269565b826000036129ca57506000611269565b60006129d58361126f565b905060006129ea6129e58661126f565b612fd5565b9050818102612a01670de0b6b3a764000082613aa4565b9050612a0c816131fb565b9695505050505050565b6000610bbf83670de0b6b3a764000084612f3c565b600060016001607f1b038211156112995760405163a5353be560e01b815260040160405180910390fd5b6002546000908190612a70906001600160801b031684612a16565b9050612a9c7f0000000000000000000000000000000000000000000000000000000000000000826136fe565b6001546001600160801b03161115611a9f576001547f000000000000000000000000000000000000000000000000000000000000000090612ae79083906001600160801b03166137d7565b610bbf91906137d7565b612af96135d6565b600080612b0584612e02565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401612b409190613a48565b6040805180830381865af4158015612b5c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612b809190613a57565b9350905082612b95575060009150612c649050565b6000612bbc612bb78461016001518561014001516115a890919063ffffffff16565b61126f565b612bdc612bb78561012001518661010001516124c690919063ffffffff16565b612be69190613711565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c5481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b60015460035460405163685a2be760e11b81526001600160801b0380841660048301819052600f9390930b60248301819052600160801b90940416604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612d23573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612d479190613ad2565b935093509350935080612d635750600098975050505050505050565b868414612d9457612d7384611a66565b600180546001600160801b0319166001600160801b03929092169190911790555b858314612dc557612da483612474565b600380546001600160801b0319166001600160801b03929092169190911790555b848214612df357612dd582611a66565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612e0a613628565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526002540482166101008201526004549091610120830191612f029116613390565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192612f3492900416613390565b905292915050565b6000826000190484118302158202612f5357600080fd5b50910281810615159190040190565b600080612f73888888888888613406565b909250905080611d5757611d576113b0565b600080612f738888888888886134e7565b600080600083612fa58661126f565b612faf9190613711565b90506000811215612fc7576000809250925050612fce565b9150600190505b9250929050565b6000808213612ff75760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f1982019061307a9084901c61126f565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361321657506000919050565b680755bf798b4a1bf1e5821261323f576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190612a0c74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c61126f565b600080670de0b6b3a76400006133a46105f9565b6133ae919061382a565b90508083116133be5760006133c8565b6133c881846137d7565b9150610bbf6133ff670de0b6b3a76400007f000000000000000000000000000000000000000000000000000000000000000061382a565b8390612912565b600080600061341889898888886135a7565b90508688101561342f5760008092509250506134dc565b968690039661343e88876129a1565b9750878110156134555760008092509250506134dc565b878103613463818688612f3c565b9050670de0b6b3a7640000811061349757613490613489670de0b6b3a764000089612a16565b82906129a1565b90506134af565b6134ac613489670de0b6b3a764000089612912565b90505b6134b98186612a16565b9050898110156134d1576000809350935050506134dc565b899003925060019150505b965096945050505050565b60008060006134f989898888886135a7565b905061350986611a60898b6136fe565b9750878110156135205760008092509250506134dc565b87810361352e818688612f3c565b9050670de0b6b3a7640000811061355b57613554613489670de0b6b3a764000089612a16565b9050613573565b613570613489670de0b6b3a764000089612912565b90505b61357d8186612a16565b9050808a1015613595576000809350935050506134dc565b90980398600198509650505050505050565b60006135b385856129a1565b6135cc6135c486611a60868b6124c6565b859085612f3c565b61246891906136fe565b6040518061012001604052806135ea613628565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000806000806080858703121561369f57600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff8111156136cb57600080fd5b8501606081880312156136dd57600080fd5b939692955090935050565b634e487b7160e01b600052601160045260246000fd5b80820180821115611269576112696136e8565b818103600083128015838313168383128216171561299a5761299a6136e8565b60006020828403121561374357600080fd5b81356001600160a01b0381168114610bbf57600080fd5b80151581146105de57600080fd5b60006020828403121561377a57600080fd5b8135610bbf8161375a565b80820182811260008312801582168215821617156137a5576137a56136e8565b505092915050565b634e487b7160e01b600052601260045260246000fd5b6000826137d2576137d26137ad565b500690565b81810381811115611269576112696136e8565b6001600160701b0381811683821601908082111561299a5761299a6136e8565b6001600160801b0381811683821601908082111561299a5761299a6136e8565b8082028115828204841417611269576112696136e8565b6001600160801b0382811682821603908082111561299a5761299a6136e8565b600f81810b9083900b0160016001607f1b03811360016001607f1b031982121715611269576112696136e8565b600081600f0b60016001607f1b031981036138ab576138ab6136e8565b60000392915050565b6000808335601e198436030181126138cb57600080fd5b83018035915067ffffffffffffffff8211156138e657600080fd5b602001915036819003821315612fce57600080fd5b60006020828403121561390d57600080fd5b5051919050565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a0820190506139a6828551613914565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215613a1b57600080fd5b505080516020909101519092909150565b6000600160ff1b8201613a4157613a416136e8565b5060000390565b61018081016112698284613914565b60008060408385031215613a6a57600080fd5b825191506020830151613a7c8161375a565b809150509250929050565b600060208284031215613a9957600080fd5b8151610bbf8161375a565b600082613ab357613ab36137ad565b600160ff1b821460001984141615613acd57613acd6136e8565b500590565b60008060008060808587031215613ae857600080fd5b84519350602085015192506040850151915060608501516136dd8161375a56fea264697066735822122062719150bbe79c3ca0b82a777f8fd455a44ad9526c1ec178dec9358ce9f41e9064736f6c63430008140033',
    methodIdentifiers: {
        "closeLong(uint256,uint256,uint256,(address,bool,bytes))": "ded06231",
        "closeShort(uint256,uint256,uint256,(address,bool,bytes))": "29b23fc1"
    }
};
