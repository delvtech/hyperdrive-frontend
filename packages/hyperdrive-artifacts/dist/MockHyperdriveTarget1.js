export const MockHyperdriveTarget1 = {
    abi: [
        {
            "type": "constructor",
            "inputs": [
                {
                    "name": "_config",
                    "type": "tuple",
                    "internalType": "struct IHyperdrive.PoolConfig",
                    "components": [
                        {
                            "name": "baseToken",
                            "type": "address",
                            "internalType": "contract IERC20"
                        },
                        {
                            "name": "vaultSharesToken",
                            "type": "address",
                            "internalType": "contract IERC20"
                        },
                        {
                            "name": "linkerFactory",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "linkerCodeHash",
                            "type": "bytes32",
                            "internalType": "bytes32"
                        },
                        {
                            "name": "initialVaultSharePrice",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "minimumShareReserves",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "minimumTransactionAmount",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "circuitBreakerDelta",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "positionDuration",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "checkpointDuration",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "timeStretch",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "governance",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "feeCollector",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "sweepCollector",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "checkpointRewarder",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "fees",
                            "type": "tuple",
                            "internalType": "struct IHyperdrive.Fees",
                            "components": [
                                {
                                    "name": "curve",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                },
                                {
                                    "name": "flat",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                },
                                {
                                    "name": "governanceLP",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                },
                                {
                                    "name": "governanceZombie",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                }
                            ]
                        }
                    ]
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "closeLong",
            "inputs": [
                {
                    "name": "_maturityTime",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_bondAmount",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_minOutput",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_options",
                    "type": "tuple",
                    "internalType": "struct IHyperdrive.Options",
                    "components": [
                        {
                            "name": "destination",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "asBase",
                            "type": "bool",
                            "internalType": "bool"
                        },
                        {
                            "name": "extraData",
                            "type": "bytes",
                            "internalType": "bytes"
                        }
                    ]
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "closeShort",
            "inputs": [
                {
                    "name": "_maturityTime",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_bondAmount",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_minOutput",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_options",
                    "type": "tuple",
                    "internalType": "struct IHyperdrive.Options",
                    "components": [
                        {
                            "name": "destination",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "asBase",
                            "type": "bool",
                            "internalType": "bool"
                        },
                        {
                            "name": "extraData",
                            "type": "bytes",
                            "internalType": "bytes"
                        }
                    ]
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "event",
            "name": "AddLiquidity",
            "inputs": [
                {
                    "name": "provider",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "lpAmount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "vaultSharePrice",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "asBase",
                    "type": "bool",
                    "indexed": false,
                    "internalType": "bool"
                },
                {
                    "name": "lpSharePrice",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "extraData",
                    "type": "bytes",
                    "indexed": false,
                    "internalType": "bytes"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "Approval",
            "inputs": [
                {
                    "name": "owner",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "spender",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "value",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "ApprovalForAll",
            "inputs": [
                {
                    "name": "account",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "operator",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "approved",
                    "type": "bool",
                    "indexed": false,
                    "internalType": "bool"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "CheckpointRewarderUpdated",
            "inputs": [
                {
                    "name": "newCheckpointRewarder",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "CloseLong",
            "inputs": [
                {
                    "name": "trader",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "destination",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "assetId",
                    "type": "uint256",
                    "indexed": true,
                    "internalType": "uint256"
                },
                {
                    "name": "maturityTime",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "vaultSharePrice",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "asBase",
                    "type": "bool",
                    "indexed": false,
                    "internalType": "bool"
                },
                {
                    "name": "bondAmount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "extraData",
                    "type": "bytes",
                    "indexed": false,
                    "internalType": "bytes"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "CloseShort",
            "inputs": [
                {
                    "name": "trader",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "destination",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "assetId",
                    "type": "uint256",
                    "indexed": true,
                    "internalType": "uint256"
                },
                {
                    "name": "maturityTime",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "vaultSharePrice",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "asBase",
                    "type": "bool",
                    "indexed": false,
                    "internalType": "bool"
                },
                {
                    "name": "basePayment",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "bondAmount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "extraData",
                    "type": "bytes",
                    "indexed": false,
                    "internalType": "bytes"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "CollectGovernanceFee",
            "inputs": [
                {
                    "name": "collector",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "vaultSharePrice",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "asBase",
                    "type": "bool",
                    "indexed": false,
                    "internalType": "bool"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "CreateCheckpoint",
            "inputs": [
                {
                    "name": "checkpointTime",
                    "type": "uint256",
                    "indexed": true,
                    "internalType": "uint256"
                },
                {
                    "name": "checkpointVaultSharePrice",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "vaultSharePrice",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "maturedShorts",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "maturedLongs",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "lpSharePrice",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "FeeCollectorUpdated",
            "inputs": [
                {
                    "name": "newFeeCollector",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "GovernanceUpdated",
            "inputs": [
                {
                    "name": "newGovernance",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "Initialize",
            "inputs": [
                {
                    "name": "provider",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "lpAmount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "vaultSharePrice",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "asBase",
                    "type": "bool",
                    "indexed": false,
                    "internalType": "bool"
                },
                {
                    "name": "apr",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "extraData",
                    "type": "bytes",
                    "indexed": false,
                    "internalType": "bytes"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "OpenLong",
            "inputs": [
                {
                    "name": "trader",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "assetId",
                    "type": "uint256",
                    "indexed": true,
                    "internalType": "uint256"
                },
                {
                    "name": "maturityTime",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "vaultSharePrice",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "asBase",
                    "type": "bool",
                    "indexed": false,
                    "internalType": "bool"
                },
                {
                    "name": "bondAmount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "extraData",
                    "type": "bytes",
                    "indexed": false,
                    "internalType": "bytes"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "OpenShort",
            "inputs": [
                {
                    "name": "trader",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "assetId",
                    "type": "uint256",
                    "indexed": true,
                    "internalType": "uint256"
                },
                {
                    "name": "maturityTime",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "vaultSharePrice",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "asBase",
                    "type": "bool",
                    "indexed": false,
                    "internalType": "bool"
                },
                {
                    "name": "baseProceeds",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "bondAmount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "extraData",
                    "type": "bytes",
                    "indexed": false,
                    "internalType": "bytes"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "PauseStatusUpdated",
            "inputs": [
                {
                    "name": "isPaused",
                    "type": "bool",
                    "indexed": false,
                    "internalType": "bool"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "PauserUpdated",
            "inputs": [
                {
                    "name": "newPauser",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "status",
                    "type": "bool",
                    "indexed": false,
                    "internalType": "bool"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "RedeemWithdrawalShares",
            "inputs": [
                {
                    "name": "provider",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "destination",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "withdrawalShareAmount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "vaultSharePrice",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "asBase",
                    "type": "bool",
                    "indexed": false,
                    "internalType": "bool"
                },
                {
                    "name": "extraData",
                    "type": "bytes",
                    "indexed": false,
                    "internalType": "bytes"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "RemoveLiquidity",
            "inputs": [
                {
                    "name": "provider",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "destination",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "lpAmount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "vaultSharePrice",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "asBase",
                    "type": "bool",
                    "indexed": false,
                    "internalType": "bool"
                },
                {
                    "name": "withdrawalShareAmount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "lpSharePrice",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "extraData",
                    "type": "bytes",
                    "indexed": false,
                    "internalType": "bytes"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "Sweep",
            "inputs": [
                {
                    "name": "collector",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "target",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "SweepCollectorUpdated",
            "inputs": [
                {
                    "name": "newSweepCollector",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "TransferSingle",
            "inputs": [
                {
                    "name": "operator",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "from",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "to",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "id",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "value",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "error",
            "name": "DistributeExcessIdleFailed",
            "inputs": []
        },
        {
            "type": "error",
            "name": "ExpInvalidExponent",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InsufficientBalance",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InsufficientLiquidity",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidTimestamp",
            "inputs": []
        },
        {
            "type": "error",
            "name": "LnInvalidInput",
            "inputs": []
        },
        {
            "type": "error",
            "name": "MinimumTransactionAmount",
            "inputs": []
        },
        {
            "type": "error",
            "name": "OutputLimit",
            "inputs": []
        },
        {
            "type": "error",
            "name": "ReentrancyGuardReentrantCall",
            "inputs": []
        },
        {
            "type": "error",
            "name": "RestrictedZeroAddress",
            "inputs": []
        },
        {
            "type": "error",
            "name": "TransferFailed",
            "inputs": []
        },
        {
            "type": "error",
            "name": "UnsafeCastToInt128",
            "inputs": []
        },
        {
            "type": "error",
            "name": "UnsafeCastToInt256",
            "inputs": []
        },
        {
            "type": "error",
            "name": "UnsafeCastToUint112",
            "inputs": []
        },
        {
            "type": "error",
            "name": "UnsafeCastToUint128",
            "inputs": []
        }
    ],
    bytecode: '0x6102606040523480156200001257600080fd5b50604051620041ce380380620041ce833981016040819052620000359162000202565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c090815260c0808601516101e090815260e0808801516102005261012080890151909352610100808901519091526101408089015190915290870180515190925281519093015190925281516040908101516101609081529251606090810151610180908152918701518616610220528601516102405291850151600980546001600160a01b031990811692871692909217905591850151600a8054841691861691909117905591840151600b80548316918516919091179055920151600c8054909316911617905562000315565b60405161020081016001600160401b03811182821017156200016a57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200018857600080fd5b919050565b600060808284031215620001a057600080fd5b604051608081016001600160401b0381118282101715620001d157634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600061026082840312156200021657600080fd5b6200022062000138565b6200022b8362000170565b81526200023b6020840162000170565b60208201526200024e6040840162000170565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140808401518183015250610160620002b981850162000170565b90820152610180620002cd84820162000170565b908201526101a0620002e184820162000170565b908201526101c0620002f584820162000170565b908201526101e06200030a858583016200018d565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161024051613cf4620004da6000396000505060005050600050506000818160af015281816103250152612f9501526000818161136401528181611775015281816117d801528181612b7301528181612baf01528181612dae0152612f6f01526000818161071301528181610d6101528181610da801528181610f6d015281816115da015281816116280152612f4901526000611b98015260008181611cbe01528181612321015261239a0152600081816108d701528181610f0501528181611c92015261236e015260008181610dfa01526122e701526000818161073401528181610d3f01528181610dc901528181610f8e015281816115b8015281816116490152612fbb01526000818161080f01528181610e84015281816116d1015281816121bc01526134ef0152600081816105d20152818161064d015281816106c30152818161078f01526107c70152600050506000818161196a015281816119b3015281816126100152818161265901528181612734015281816127e0015281816128cc01526129780152613cf46000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806329b23fc11461003b578063ded0623114610060575b600080fd5b61004e61004936600461379d565b610073565b60405190815260200160405180910390f35b61004e61006e36600461379d565b61008c565b60006100818585858561009a565b90505b949350505050565b600061008185858585610310565b60006100a461054f565b6100ad82610579565b7f00000000000000000000000000000000000000000000000000000000000000008410156100ee5760405163211ddda360e11b815260040160405180910390fd5b60006100f86105b2565b90508542101561011d5761011761010d6105ca565b82600460016105f6565b5061012d565b61012b8682600460016105f6565b505b61014261013b600288610bec565b3387610c21565b6000806000806000806101568b888e610cfa565b95509550955095509550955060008c90508c4210156102165782600d60008282546101819190613812565b9091555061019990506101926105ca565b4284610fee565b6101a68c8887878561112c565b60006101b18e6112a6565b90506101cf6101bf8e6112f0565b6101c99083613825565b8261131e565b6101d88961135d565b6101e4576101e46113bd565b60006101ef8a6113d6565b90508061020f57604051638bdf918d60e01b815260040160405180910390fd5b505061022d565b61022086896113e3565b955061022b886113d6565b505b600061023a878a8d6114c4565b90508b81101561025d5760405163c972651760e01b815260040160405180910390fd5b8c86858b8e61026d600288610bec565b61027a6020830183613845565b6001600160a01b0316337ff87a3de08b9fe89d655d6731088496cf5f5da0abd455e9f7cdc5f0c717f209e58a8a876102b86040890160208a0161387c565b6102cc8a6102c68d8f613812565b9061155e565b8d6102da60408c018c613899565b6040516102ee989796959493929190613909565b60405180910390a450939c505050505050505050505050506100846001600055565b600061031a61054f565b61032382610579565b7f00000000000000000000000000000000000000000000000000000000000000008410156103645760405163211ddda360e11b815260040160405180910390fd5b600061036e6105b2565b9050854210156103895761038361010d6105ca565b50610399565b6103978682600460016105f6565b505b6103a761013b600188610bec565b6000806000806000806103bb8b888e611573565b95509550955095509550955060008c90508c42101561046e5782600d60008282546103e69190613812565b909155506103f790506101926105ca565b6104048c8887878561175e565b600061040f826112a6565b905061042761041d8e6112f0565b6101c99083613951565b6104308961135d565b61043c5761043c6113bd565b60006104478a6113d6565b90508061046757604051638bdf918d60e01b815260040160405180910390fd5b5050610485565b61047886896113e3565b9550610483886113d6565b505b6000610492878a8d6114c4565b90508b8110156104b55760405163c972651760e01b815260040160405180910390fd5b8c898c6104c3600186610bec565b6104d06020830183613845565b6001600160a01b0316337f3b2c44173852b22d1ecf7784963c2bab6d4dd07e64ed560f818f144d72ee526788888761050e6040890160208a0161387c565b8a61051c60408b018b613899565b60405161052f9796959493929190613979565b60405180910390a450919a50505050505050505050506100846001600055565b60026000540361057257604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b60006105886020830183613845565b6001600160a01b0316036105af5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b60006105c5670de0b6b3a764000061194f565b905090565b60006105c5427f0000000000000000000000000000000000000000000000000000000000000000611a4a565b600084815260086020526040812060018101546001600160801b031615158061061e57504286115b1561063757600101546001600160801b03169050610084565b60008060006106446105ca565b905060006106727f00000000000000000000000000000000000000000000000000000000000000008b613812565b90505b818110156106e8576000818152600860205260409020600101546001600160801b031680156106c0576000828152600860205260409020549094506001600160801b031692506106e8565b507f000000000000000000000000000000000000000000000000000000000000000001610675565b8360000361075b578893506107586106fe611a60565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a81565b92505b5061076583611a98565b6001850180546001600160801b0319166001600160801b03929092169190911790556107bb6107b47f00000000000000000000000000000000000000000000000000000000000000008b6139ba565b8a84610fee565b6107f9896107f36107ec7f000000000000000000000000000000000000000000000000000000000000000083613812565b4290611ac2565b84610fee565b61080288611ad7565b50600090506008816108347f00000000000000000000000000000000000000000000000000000000000000008d6139ba565b815260208101919091526040016000908120600101546001600160801b0316915061086060028c610bec565b6000818152601060205260408120549192508c8c83156109a6576001925060008061088f86898d866000611c7b565b9150915080600d60008282546108a59190613812565b909155506108c19050866000846108bb816112f0565b8861112c565b6108cb8183613812565b91506108fb86838a8e877f0000000000000000000000000000000000000000000000000000000000000000611d4a565b915061090f61090a838561155e565b611d94565b600680546002906109309084906201000090046001600160701b03166139cd565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061095d82611a98565b6006805460109061097f908490600160801b90046001600160801b03166139ed565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b60006109b3600184610bec565b6000818152601060205260409020549091508015610ac257600194506000806109e0838b8f886001611c7b565b9150915080600d60008282546109f69190613812565b90915550610a12905083600084610a0c816112f0565b8a61175e565b610a1c81836139ba565b9150610a2b61090a838761155e565b60068054600290610a4c9084906201000090046001600160701b03166139cd565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a7982611a98565b60068054601090610a9b908490600160801b90046001600160801b03166139ed565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610afc57610aee610ad4876112f0565b610add836112f0565b610ae79190613825565b600061131e565b8e610af98482611dbe565b50505b6000610b0784611fb8565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a2600c546001600160a01b031615610bd5578e610bd15a604051336024820152604481018990528315156064820152600090819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b179052600c546001600160a01b031693929190612104565b5050505b50999b505050505050505050505050949350505050565b60006001600160f81b03821115610c165760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600f602090815260408083206001600160a01b0386168452909152902054811115610c6457604051631e9acf1760e31b815260040160405180910390fd5b6000838152600f602090815260408083206001600160a01b0386168452825280832080548590039055858352601090915281208054839290610ca79084906139ba565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b600080600080600080600080610d0e611a60565b90506000610d1b8a61218f565b6002549091508c908c90610d85908590600160801b90046001600160801b031684867f0000000000000000000000000000000000000000000000000000000000000000867f00000000000000000000000000000000000000000000000000000000000000006121e0565b600254919d509a50909550610ded908590600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a81565b9550610e23858c610e1e897f0000000000000000000000000000000000000000000000000000000000000000612250565b612280565b15610e3057610e306113bd565b6000806000610e4185878b876122c2565b9c5091945092509050610e5481846139ba565b610e5e9089613812565b9750610e6a8284613812565b610e74908d613812565b9b505050505050506000600860007f00000000000000000000000000000000000000000000000000000000000000008c610eae91906139ba565b815260208101919091526040016000908120600101546001600160801b03169150428b11610ef65760008b8152600860205260409020600101546001600160801b0316610ef8565b8b5b90508b610f298e8a8585857f0000000000000000000000000000000000000000000000000000000000000000611d4a565b9950610f35878a6139ba565b9850670de0b6b3a7640000610fb2610f4d8787613812565b600254610f6b908f90600160801b90046001600160801b03166139ba565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a81565b1115610fc057610fc06113bd565b610fd08a8a878a878760006123d6565b939d50919b5090995090975050505050505093975093979195509350565b600083815260086020526040902054600160801b90046001600160801b031680830361101a5750505050565b6000848152600860205260408120546001600160801b0316908190036110745761104383611a98565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790556110f2565b6110c56110c0670de0b6b3a764000061108d88866139ba565b6110979190613a0d565b85670de0b6b3a76400006110ab878a6139ba565b6110b59190613a0d565b859291906001612475565b611a98565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b6110fb84611a98565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600454600160801b90046001600160801b03166111756110c082611158670de0b6b3a764000086613a0d565b600554600160801b90046001600160801b031691908a6000612475565b600580546001600160801b03928316600160801b02921691909117905561119b86611a98565b6111a59082613a24565b600480546001600160801b03928316600160801b0292169190911790556111cb84611a98565b600280546000906111e69084906001600160801b03166139ed565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506112138361251f565b60048054600090611228908490600f0b613a44565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061125885611a98565b6002805460109061127a908490600160801b90046001600160801b0316613a24565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b60006112ce601060006112ba600286610bec565b8152602001908152602001600020546112f0565b6112e0601060006112ba600187610bec565b6112ea9190613825565b92915050565b60006001600160ff1b0382111561131a5760405163396ea70160e11b815260040160405180910390fd5b5090565b600354611339906110c0906001600160801b0316848461255b565b600380546001600160801b0319166001600160801b03929092169190911790555050565b60006113897f0000000000000000000000000000000000000000000000000000000000000000836125c2565b60035461139f91906001600160801b0316613812565b6002546113b5906001600160801b03168461155e565b101592915050565b60405163bb55fd2760e01b815260040160405180910390fd5b60006112ea826004611dbe565b60008060006113f184611ad7565b90925090506000611402868661155e565b90508183111561141a576114178683856125d7565b95505b8281101561142c578083039250611431565b600092505b61143a83611d94565b600680546001600160701b039290921662010000026fffffffffffffffffffffffffffff00001990921691909117908190556001600160801b03600160801b909104168087101561148d57869003611491565b5060005b61149a81611a98565b600680546001600160801b03928316600160801b0292169190911790555085935050505092915050565b6000806114d1858561155e565b90506114dc816125f5565b9450846000036114f0576000915050611557565b849150611503604084016020850161387c565b156115325761152b856115196020860186613845565b6115266040870187613899565b6126de565b9150611555565b611555856115436020860186613845565b6115506040870187613899565b612878565b505b9392505050565b60006115578383670de0b6b3a76400006125d7565b600080600080600080600080611587611a60565b905060006115948a61218f565b6002549091508b908d906115fe908590600160801b90046001600160801b031683867f0000000000000000000000000000000000000000000000000000000000000000877f0000000000000000000000000000000000000000000000000000000000000000612a0e565b600254919d509b509095506000908190819061166d908890600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a81565b985061167b84878b886122c2565b9c50919450909250905061168f82846139ba565b61169990896139ba565b97506116a58184613812565b6116af908e6139ba565b9c506116bb8a8e613812565b9b505050505050505061174886868386600860007f00000000000000000000000000000000000000000000000000000000000000008f6116fb91906139ba565b81526020810191909152604001600020600101546001600160801b0316428e1161173f5760008e8152600860205260409020600101546001600160801b0316611741565b8e5b60016123d6565b9a9e939d50919b50909950929650945050505050565b6002546001600160801b0316838110806117a057507f000000000000000000000000000000000000000000000000000000000000000061179e85836139ba565b105b156117ad576117ad6113bd565b6004549084900390600f0b6117c28482613825565b9050836117ce866112f0565b13801561180357507f00000000000000000000000000000000000000000000000000000000000000006118018383612a62565b105b15611810576118106113bd565b600354600160801b90046001600160801b03166118526110c08261183c670de0b6b3a764000088613a0d565b6005546001600160801b031691908c6000612475565b600580546001600160801b0319166001600160801b039290921691909117905561187c88826139ba565b905061188781611a98565b600380546001600160801b03928316600160801b0292169190911790556118ad83611a98565b600280546001600160801b0319166001600160801b03929092169190911790556118d68261251f565b600480546001600160801b0319166001600160801b03929092169190911790556118ff87611a98565b60028054601090611921908490600160801b90046001600160801b03166139ed565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161199e575047611a29565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611a02573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a269190613a71565b90505b601454600003611a3a576000611557565b60145461155790849083906125d7565b6000611a568284613aa0565b61155790846139ba565b6002546004546000916105c5916001600160801b0390911690600f0b612a62565b600061008182611a928588886125d7565b90612a88565b60006001600160801b0382111561131a57604051630f0af95160e11b815260040160405180910390fd5b6000818311611ad15782611557565b50919050565b6006546000908190611afa908490600160801b90046001600160801b031661155e565b6006546201000090046001600160701b03169250905081811115611c76576000611b2483836139ba565b9050611b336110c08286612afd565b60068054601090611b55908490600160801b90046001600160801b0316613a24565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611b8e8583612b1290919063ffffffff16565b90506000611bbc827f000000000000000000000000000000000000000000000000000000000000000061155e565b905080600d6000828254611bd09190613812565b90915550611be0905081836139ba565b9150611beb82611a98565b60028054600090611c069084906001600160801b03166139ed565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611c3382612b27565b60048054600090611c48908490600f0b613a44565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b600080611c888785612b12565b91506000611cb6837f000000000000000000000000000000000000000000000000000000000000000061155e565b9050611ce2817f000000000000000000000000000000000000000000000000000000000000000061155e565b91508315611d0557611cf482826139ba565b611cfe90846139ba565b9250611d1c565b611d0f82826139ba565b611d199084613812565b92505b86861015611d3f57611d2f8387896125d7565b9250611d3c8287896125d7565b91505b509550959350505050565b600080611d6284611d5c8a888a6125d7565b90612b12565b9050611d6f8884866125d7565b611d799082613812565b905086811115611d895786810391505b509695505050505050565b60006001600160701b0382111561131a5760405163086b151760e11b815260040160405180910390fd5b600754600360f81b600090815260106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215490918291611e09916001600160801b0316906139ba565b905080600003611e1d5760019150506112ea565b6000611e2885612b51565b905080600003611e3d576001925050506112ea565b600080611e4b838589612bed565b9150915080611e615760009450505050506112ea565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401611e9d929190613b32565b6040805180830381865af4158015611eb9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611edd9190613ba8565b91509150611efb611eed826112f0565b611ef690613bcc565b612d68565b925082611f1157600096505050505050506112ea565b611f1a82611a98565b60078054600090611f359084906001600160801b03166139ed565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611f6281611a98565b60078054601090611f84908490600160801b90046001600160801b03166139ed565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e611fe187612f00565b6040518263ffffffff1660e01b8152600401611ffd9190613be8565b6040805180830381865af4158015612019573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061203d9190613bf7565b9150915080612053575060009485945092505050565b60075460106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215460008080527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb015490926001600160801b0316916120b991613812565b6120c391906139ba565b9050806000036120db57506000958695509350505050565b60008087116120eb5760006120f6565b6120f68488846125d7565b976001975095505050505050565b6000606060008060008661ffff1667ffffffffffffffff81111561212a5761212a613c27565b6040519080825280601f01601f191660200182016040528015612154576020820181803683370190505b5090506000808751602089018b8e8ef191503d925086831115612175578692505b828152826000602083013e90999098509650505050505050565b60008061219a6105ca565b90508083116121aa5760006121b4565b6121b481846139ba565b9150611557827f0000000000000000000000000000000000000000000000000000000000000000612b12565b600080806122016121f988670de0b6b3a76400006139ba565b89908761303a565b905086156122435761221388886125c2565b91506122348a8a8461222d8a670de0b6b3a76400006139ba565b8989613060565b92506122408382613812565b90505b9750975097945050505050565b600061226e61226784670de0b6b3a76400006139ba565b83906125c2565b61155790670de0b6b3a76400006139ba565b6000806122b78561228f611a60565b6122999190613812565b600254610f6b908790600160801b90046001600160801b03166139ba565b909210949350505050565b600080808061231987866123128b61230c6122e58c670de0b6b3a76400006139ba565b7f0000000000000000000000000000000000000000000000000000000000000000906125c2565b906125c2565b919061303a565b9350612345847f000000000000000000000000000000000000000000000000000000000000000061155e565b9150600061236661235e89670de0b6b3a76400006139ba565b8a908861303a565b9050612392817f00000000000000000000000000000000000000000000000000000000000000006125c2565b93506123be847f000000000000000000000000000000000000000000000000000000000000000061155e565b6123c89084613812565b915050945094509450949050565b600080600080600080888810156124455786156123fb576123f88d898b6125d7565b9c505b6124068c898b6125d7565b9b506124118b6112f0565b61241a8d6112f0565b6124249190613825565b90506124318b898b6125d7565b9a5061243e8a898b6125d7565b9950612464565b61244e8b6112f0565b6124578d6112f0565b6124619190613825565b90505b9b9c9a9b999a975050505050505050565b600082600003612486575084612516565b81156124d9576124b76124998487613812565b6124a3858761155e565b6124ad888a61155e565b611d5c9190613812565b905060006124c58588611ac2565b9050808210156124d3578091505b50612516565b8285036124e857506000612516565b6125136124f584876139ba565b6124ff85876125c2565b612509888a61155e565b611d5c91906139ba565b90505b95945050505050565b600060016001607f1b031982128061253d575060016001607f1b0382135b1561131a5760405163a5353be560e01b815260040160405180910390fd5b600080612569846000613083565b612574846000613083565b61257e9190613825565b9050600081131561259a576125938186613812565b94506125b9565b60008112156125b9576125ac81613bcc565b6125b690866139ba565b94505b50929392505050565b60006115578383670de0b6b3a764000061303a565b60008260001904841183021582026125ee57600080fd5b5091020490565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016126445750476126cf565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156126a8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906126cc9190613a71565b90505b601454611557908490836125d7565b600060145485116126ef57846126f3565b6014545b945060006127008661194f565b9050856014600082825461271491906139ba565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016127ba576040516001600160a01b038716908390600081818185875af1925050503d80600081146127aa576040519150601f19603f3d011682016040523d82523d6000602084013e6127af565b606091505b505080915050612850565b60405163a9059cbb60e01b81526001600160a01b038781166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af1158015612829573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061284d9190613c3d565b90505b8061286e576040516312171d8360e31b815260040160405180910390fd5b5095945050505050565b6014548411612887578361288b565b6014545b935060006128988561194f565b905084601460008282546128ac91906139ba565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612952576040516001600160a01b038616908390600081818185875af1925050503d8060008114612942576040519150601f19603f3d011682016040523d82523d6000602084013e612947565b606091505b5050809150506129e8565b60405163a9059cbb60e01b81526001600160a01b038681166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af11580156129c1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906129e59190613c3d565b90505b80612a06576040516312171d8360e31b815260040160405180910390fd5b505050505050565b60008080612a2f612a2788670de0b6b3a76400006139ba565b8990876125d7565b9050861561224357612a41888861155e565b91506122348a8a84612a5b8a670de0b6b3a76400006139ba565b8989613099565b600080612a6f84846130aa565b909250905080612a8157612a816113bd565b5092915050565b600081600003612aa15750670de0b6b3a76400006112ea565b82600003612ab1575060006112ea565b6000612abc836112f0565b90506000612ad1612acc866112f0565b6130e9565b9050818102612ae8670de0b6b3a764000082613c5a565b9050612af38161330f565b9695505050505050565b600061155783670de0b6b3a76400008461303a565b600061155783670de0b6b3a7640000846125d7565b600060016001607f1b0382111561131a5760405163a5353be560e01b815260040160405180910390fd5b6003546000908190612b6c906001600160801b031684612afd565b9050612b987f000000000000000000000000000000000000000000000000000000000000000082613812565b6002546001600160801b03161115611ad1576002547f000000000000000000000000000000000000000000000000000000000000000090612be39083906001600160801b03166139ba565b61155791906139ba565b612bf56136ea565b600080612c0184612f00565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401612c3c9190613be8565b6040805180830381865af4158015612c58573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612c7c9190613bf7565b9350905082612c91575060009150612d609050565b6000612cb8612cb384610160015185610140015161155e90919063ffffffff16565b6112f0565b612cd8612cb38561012001518661010001516125c290919063ffffffff16565b612ce29190613825565b604080516101208101825285815260208082019590955260008052601085527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb015481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612e21573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612e459190613c88565b935093509350935080612e615750600098975050505050505050565b868414612e9257612e7184611a98565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612ec357612ea28361251f565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612ef157612ed382611a98565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612f0861373c565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e0830152600354048216610100820152600554909161012083019161300091166134a4565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192613032929004166134a4565b905292915050565b600082600019048411830215820261305157600080fd5b50910281810615159190040190565b60008061307188888888888861351a565b909250905080611d8957611d896113bd565b60008183136130925781611557565b5090919050565b6000806130718888888888886135fb565b6000806000836130b9866112f0565b6130c39190613825565b905060008112156130db5760008092509250506130e2565b9150600190505b9250929050565b600080821361310b5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f1982019061318e9084901c6112f0565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361332a57506000919050565b680755bf798b4a1bf1e58212613353576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190612af374029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6112f0565b600080670de0b6b3a76400006134b86105ca565b6134c29190613a0d565b90508083116134d25760006134dc565b6134dc81846139ba565b9150611557613513670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613a0d565b8390612b12565b600080600061352c89898888886136bb565b9050868810156135435760008092509250506135f0565b96869003966135528887612a88565b9750878110156135695760008092509250506135f0565b87810361357781868861303a565b9050670de0b6b3a764000081106135ab576135a461359d670de0b6b3a764000089612afd565b8290612a88565b90506135c3565b6135c061359d670de0b6b3a764000089612b12565b90505b6135cd8186612afd565b9050898110156135e5576000809350935050506135f0565b899003925060019150505b965096945050505050565b600080600061360d89898888886136bb565b905061361d86611a92898b613812565b9750878110156136345760008092509250506135f0565b87810361364281868861303a565b9050670de0b6b3a7640000811061366f5761366861359d670de0b6b3a764000089612afd565b9050613687565b61368461359d670de0b6b3a764000089612b12565b90505b6136918186612afd565b9050808a10156136a9576000809350935050506135f0565b90980398600198509650505050505050565b60006136c78585612a88565b6136e06136d886611a92868b6125c2565b85908561303a565b6125139190613812565b6040518061012001604052806136fe61373c565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b600080600080608085870312156137b357600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff8111156137df57600080fd5b8501606081880312156137f157600080fd5b939692955090935050565b634e487b7160e01b600052601160045260246000fd5b808201808211156112ea576112ea6137fc565b8181036000831280158383131683831282161715612a8157612a816137fc565b60006020828403121561385757600080fd5b81356001600160a01b038116811461155757600080fd5b80151581146105af57600080fd5b60006020828403121561388e57600080fd5b81356115578161386e565b6000808335601e198436030181126138b057600080fd5b83018035915067ffffffffffffffff8211156138cb57600080fd5b6020019150368190038213156130e257600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c0820152600061394360e0830184866138e0565b9a9950505050505050505050565b8082018281126000831280158216821582161715613971576139716137fc565b505092915050565b878152866020820152856040820152841515606082015283608082015260c060a082015260006139ad60c0830184866138e0565b9998505050505050505050565b818103818111156112ea576112ea6137fc565b6001600160701b03818116838216019080821115612a8157612a816137fc565b6001600160801b03818116838216019080821115612a8157612a816137fc565b80820281158282048414176112ea576112ea6137fc565b6001600160801b03828116828216039080821115612a8157612a816137fc565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156112ea576112ea6137fc565b600060208284031215613a8357600080fd5b5051919050565b634e487b7160e01b600052601260045260246000fd5b600082613aaf57613aaf613a8a565b500690565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a082019050613b46828551613ab4565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215613bbb57600080fd5b505080516020909101519092909150565b6000600160ff1b8201613be157613be16137fc565b5060000390565b61018081016112ea8284613ab4565b60008060408385031215613c0a57600080fd5b825191506020830151613c1c8161386e565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600060208284031215613c4f57600080fd5b81516115578161386e565b600082613c6957613c69613a8a565b600160ff1b821460001984141615613c8357613c836137fc565b500590565b60008060008060808587031215613c9e57600080fd5b84519350602085015192506040850151915060608501516137f18161386e56fea26469706673582212209c549956088b50fcd44e09178f2c1d660c5fbd79f8a632bd62a2491bd2e0ea6164736f6c63430008140033',
    methodIdentifiers: {
        "closeLong(uint256,uint256,uint256,(address,bool,bytes))": "ded06231",
        "closeShort(uint256,uint256,uint256,(address,bool,bytes))": "29b23fc1"
    }
};
