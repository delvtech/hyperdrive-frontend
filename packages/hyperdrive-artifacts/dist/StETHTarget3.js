export const StETHTarget3 = {
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
            "name": "addLiquidity",
            "inputs": [
                {
                    "name": "_contribution",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_minLpSharePrice",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_minApr",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_maxApr",
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
            "stateMutability": "payable"
        },
        {
            "type": "function",
            "name": "initialize",
            "inputs": [
                {
                    "name": "_contribution",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_apr",
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
            "stateMutability": "payable"
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
            "name": "BelowMinimumContribution",
            "inputs": []
        },
        {
            "type": "error",
            "name": "CircuitBreakerTriggered",
            "inputs": []
        },
        {
            "type": "error",
            "name": "DecreasedPresentValueWhenAddingLiquidity",
            "inputs": []
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
            "name": "InsufficientLiquidity",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidApr",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidEffectiveShareReserves",
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
            "name": "PoolAlreadyInitialized",
            "inputs": []
        },
        {
            "type": "error",
            "name": "PoolIsPaused",
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
        },
        {
            "type": "error",
            "name": "UpdateLiquidityFailed",
            "inputs": []
        }
    ],
    bytecode: '0x6102606040523480156200001257600080fd5b5060405162003ee338038062003ee3833981016040819052620000359162000202565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c090815260c0808601516101e090815260e0808801516102005261012080890151909352610100808901519091526101408089015190915290870180515190925281519093015190925281516040908101516101609081529251606090810151610180908152918701518616610220528601516102405291850151600980546001600160a01b031990811692871692909217905591850151600a8054841691861691909117905591840151600b80548316918516919091179055920151600c8054909316911617905562000315565b60405161020081016001600160401b03811182821017156200016a57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200018857600080fd5b919050565b600060808284031215620001a057600080fd5b604051608081016001600160401b0381118282101715620001d157634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600061026082840312156200021657600080fd5b6200022062000138565b6200022b8362000170565b81526200023b6020840162000170565b60208201526200024e6040840162000170565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140808401518183015250610160620002b981850162000170565b90820152610180620002cd84820162000170565b908201526101a0620002e184820162000170565b908201526101c0620002f584820162000170565b908201526101e06200030a858583016200018d565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161024051613a06620004dd6000396000505060005050600081816102fb0152818161032a015261035701526000818160d6015281816105a1015261166801526000818161084601528181610931015281816109c401528181610acd015281816115390152818161164201528181612096015281816120f9015281816129d801528181612d430152612d7f015260008181610137015281816108b601528181610e76015281816113fd01528181611461015281816114a8015261161c01526000611c9b015260008181611df60152612fd801526000818161103a0152611dca01526000612f8e0152600081816101790152818161090901528181610e97015281816113cd01528181611431015281816114c9015261168e01526000818161015801528181610230015281816102d0015281816106eb015281816108e301528181610f72015261296e01526000818161028f01528181610d3501528181610db001528181610e2601528181610ef20152610f2a01526000818161194d015281816119e90152612bd1015260005050613a066000f3fe6080604052600436106100295760003560e01c80634c2ac1d91461002e57806377d05ff414610053575b600080fd5b61004161003c36600461349c565b610066565b60405190815260200160405180910390f35b610041610061366004613500565b610081565b60006100758686868686610098565b90505b95945050505050565b600061008e8484846107f8565b90505b9392505050565b60006100a2610ba9565b600654610100900460ff16156100cb576040516321081abf60e01b815260040160405180910390fd5b6100d482610bd3565b7f00000000000000000000000000000000000000000000000000000000000000008610156101155760405163211ddda360e11b815260040160405180910390fd5b600061019d610122610c0c565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000610c32565b9050848110806101ac57508381115b156101ca57604051633b61151160e11b815260040160405180910390fd5b6000806101d78986610c58565b9150915060006101e5610d2d565b90506101f5818360046001610d59565b50600254600454600354600092839261025f926001600160801b0380841693600f9390930b92600160801b900481169189911661025a6102557f00000000000000000000000000000000000000000000000000000000000000008b613566565b611350565b61139a565b915091508061028157604051630552b01360e31b815260040160405180910390fd5b8b60006102f46008826102b47f000000000000000000000000000000000000000000000000000000000000000089613579565b81526020810191909152604001600020546001600160801b03167f00000000000000000000000000000000000000000000000000000000000000006115a7565b90506103207f000000000000000000000000000000000000000000000000000000000000000082613566565b88118061037f57507f00000000000000000000000000000000000000000000000000000000000000008111801561037f575061037c7f000000000000000000000000000000000000000000000000000000000000000082613579565b88105b1561039d57604051630552b01360e31b815260040160405180910390fd5b50600754600360f81b600090815260106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215490916103e9916001600160801b0390911690613579565b600080805260106020527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb015491925090610424908390613566565b905060008060006104348a6115d3565b604051635f9d50ab60e11b815290915073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063bf3aa1569061046e90849060040161360a565b602060405180830381865af415801561048b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104af9190613619565b91506104c26104bd8c61170d565b61173b565b6002546001600160801b03808216835260048054600f0b6020850152600160801b9092041660408084019190915251635f9d50ab60e11b815273__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9163bf3aa156916105239185910161360a565b602060405180830381865af4158015610540573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105649190613619565b9250818310156105875760405163184d952160e11b815260040160405180910390fd5b61059d84836105968187613579565b9190611761565b9c507f00000000000000000000000000000000000000000000000000000000000000008d10156105e05760405163211ddda360e11b815260040160405180910390fd5b508f6105ec868e61177f565b101561060b5760405163c972651760e01b815260040160405180910390fd5b61062960008e60000160208101906106239190613632565b8e611794565b6106328961183c565b95508561065257604051638bdf918d60e01b815260040160405180910390fd5b600088905060008d9050368f905060008c90506000610715600260000160009054906101000a90046001600160801b03166001600160801b03166002800160009054906101000a9004600f0b600f0b600260000160109054906101000a90046001600160801b03166001600160801b031685600260010160009054906101000a90046001600160801b03166001600160801b031661025a7f00000000000000000000000000000000000000000000000000000000000000008c6102559190613566565b9b5090508a158061072f575061072c8c6000611849565b81125b1561074d57604051630552b01360e31b815260040160405180910390fd5b600088156107655761076087848b611761565b610768565b60005b90506107776020850185613632565b6001600160a01b03167fdcc4a01cea4510bd52201cebc8cd2d47d60429b35d68329abc591a70aa2efabf868d866107b460408a0160208b01613669565b866107c260408c018c613686565b6040516107d597969594939291906136cd565b60405180910390a250505050505050505050505050505050506100786001600055565b6000610802610ba9565b61080b82610bd3565b60065460ff161561082f57604051637983c05160e01b815260040160405180910390fd5b60008061083c8685610c58565b909250905061086c7f00000000000000000000000000000000000000000000000000000000000000006002613721565b82101561088c57604051632afb507160e21b815260040160405180910390fd5b6006805460ff1916600117905560405163594f0e8f60e11b815260048101839052602481018290527f00000000000000000000000000000000000000000000000000000000000000006044820152606481018690527f000000000000000000000000000000000000000000000000000000000000000060848201527f000000000000000000000000000000000000000000000000000000000000000060a482015260027f000000000000000000000000000000000000000000000000000000000000000002830393506000908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063b29e1d1e9060c401606060405180830381865af4158015610998573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109bc9190613738565b9250925092507f00000000000000000000000000000000000000000000000000000000000000006109ed848461185e565b1015610a0c5760405163216f4ab160e21b815260040160405180910390fd5b600080610a1e8585858960008061139a565b91509150801580610a2f5750600082125b15610a4d57604051630552b01360e31b815260040160405180910390fd5b610a5685611884565b600280546001600160801b0319166001600160801b0392909216919091179055610a7f846118ae565b600480546001600160801b0319166001600160801b0392909216919091179055610aa883611884565b600280546001600160801b03928316600160801b029216919091179055610af16000807f0000000000000000000000000000000000000000000000000000000000000000611794565b610b096000610b0360208c018c613632565b8a611794565b610b1e610b14610d2d565b8760046001610d59565b508a8a8a610b2f6020820182613632565b6001600160a01b03167f4931b9953a65531203c17d9abe77870a3e49d8b13af522ec3321c18b5abb8af38c858c610b6c6040870160208801613669565b87610b7a6040890189613686565b604051610b8d97969594939291906136cd565b60405180910390a2505050505050505050506100916001600055565b600260005403610bcc57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b6000610be26020830183613632565b6001600160a01b031603610c095760405163f0dd15fd60e01b815260040160405180910390fd5b50565b600254600454600091610c2d916001600160801b0390911690600f0b61185e565b905090565b600080610c41878787866118ea565b9050610c4d81856115a7565b979650505050505050565b81600080610c6c6040850160208601613669565b15610c9157610c8785610c826040870187613686565b611901565b9093509050610ca9565b5034610ca985610ca46040870187613686565b6119c7565b610cb1611a64565b91508015610d2457604051600090339083908381818185875af1925050503d8060008114610cfb576040519150601f19603f3d011682016040523d82523d6000602084013e610d00565b606091505b5050905080610d22576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b6000610c2d427f0000000000000000000000000000000000000000000000000000000000000000611a77565b600084815260086020526040812060018101546001600160801b0316151580610d8157504286115b15610d9a57600101546001600160801b03169050611348565b6000806000610da7610d2d565b90506000610dd57f00000000000000000000000000000000000000000000000000000000000000008b613566565b90505b81811015610e4b576000818152600860205260409020600101546001600160801b03168015610e23576000828152600860205260409020549094506001600160801b03169250610e4b565b507f000000000000000000000000000000000000000000000000000000000000000001610dd8565b83600003610ebe57889350610ebb610e61610c0c565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006118ea565b92505b50610ec883611884565b6001850180546001600160801b0319166001600160801b0392909216919091179055610f1e610f177f00000000000000000000000000000000000000000000000000000000000000008b613579565b8a84611a8d565b610f5c89610f56610f4f7f000000000000000000000000000000000000000000000000000000000000000083613566565b4290611bcb565b84611a8d565b610f6588611bda565b5060009050600881610f977f00000000000000000000000000000000000000000000000000000000000000008d613579565b815260208101919091526040016000908120600101546001600160801b03169150610fc360028c611d7e565b6000818152601060205260408120549192508c8c83156111095760019250600080610ff286898d866000611db3565b9150915080600d60008282546110089190613566565b9091555061102490508660008461101e8161170d565b88611e82565b61102e8183613566565b915061105e86838a8e877f0000000000000000000000000000000000000000000000000000000000000000611ffc565b915061107261106d8385612040565b612055565b600680546002906110939084906201000090046001600160701b0316613766565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506110c082611884565b600680546010906110e2908490600160801b90046001600160801b0316613786565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000611116600184611d7e565b60008181526010602052604090205490915080156112255760019450600080611143838b8f886001611db3565b9150915080600d60008282546111599190613566565b9091555061117590508360008461116f8161170d565b8a61207f565b61117f8183613579565b915061118e61106d8387612040565b600680546002906111af9084906201000090046001600160701b0316613766565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506111dc82611884565b600680546010906111fe908490600160801b90046001600160801b0316613786565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b841561125f576112516112378761170d565b6112408361170d565b61124a91906137a6565b6000612270565b8e61125c84826122af565b50505b600061126a846124a9565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a2600c546001600160a01b031615611338578e6113345a604051336024820152604481018990528315156064820152600090819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b179052600c546001600160a01b0316939291906125f5565b5050505b50999b5050505050505050505050505b949350505050565b600061137860106000611364600286611d7e565b81526020019081526020016000205461170d565b61138a60106000611364600187611d7e565b61139491906137a6565b92915050565b6000806000806113aa8a8a612682565b91509150806113c15760008093509350505061159c565b6000611421838a6113fa7f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000613579565b8b7f00000000000000000000000000000000000000000000000000000000000000006126be565b5090506000611485848b8461145e7f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000613579565b8d7f000000000000000000000000000000000000000000000000000000000000000061277b565b509050811580611493575080155b1561149f575060009050805b60006114ed858c7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006118ea565b90506114fb83838c84612839565b509093506000905061150d848f613566565b9050600061152e8b8b61151f8761170d565b611529908e6137c6565b612885565b90508b61156361155e7f0000000000000000000000000000000000000000000000000000000000000000836128ec565b61170d565b61156c8361170d565b61157961155e8685612040565b61158391906137a6565b61158d91906137a6565b60019950995050505050505050505b965096945050505050565b60006100916115bb84846301e133806128fd565b6115cd85670de0b6b3a7640000613579565b9061177f565b6115db6133d7565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e083015260035404821661010082015260055490916101208301916116d39116612923565b81526004546001600160801b03600160801b918290048116602084015260055460409093019261170592900416612923565b905292915050565b60006001600160ff1b038211156117375760405163396ea70160e11b815260040160405180910390fd5b5090565b61174481612992565b610c0957604051635044b7f560e01b815260040160405180910390fd5b600082600019048411830215820261177857600080fd5b5091020490565b600061009183670de0b6b3a764000084611761565b6000838152600f602090815260408083206001600160a01b0386168452909152812080548392906117c6908490613566565b9091555050600083815260106020526040812080548392906117e9908490613566565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b60006113948260046122af565b60008183136118585782610091565b50919050565b60008061186b8484612682565b90925090508061187d5761187d612b2a565b5092915050565b60006001600160801b0382111561173757604051630f0af95160e11b815260040160405180910390fd5b600060016001607f1b03198212806118cc575060016001607f1b0382135b156117375760405163a5353be560e01b815260040160405180910390fd5b6000610078826118fb858888611761565b90612b43565b60008084341015611925576040516312171d8360e31b815260040160405180910390fd5b50600a5460405163a1903eab60e01b81526001600160a01b03918216600482015234869003917f0000000000000000000000000000000000000000000000000000000000000000169063a1903eab90879060240160206040518083038185885af1158015611997573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906119bc9190613619565b91505b935093915050565b604051636d78045960e01b8152336004820152306024820152604481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636d780459906064016020604051808303816000875af1158015611a3a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a5e9190613619565b50505050565b6000610c2d670de0b6b3a7640000612bb8565b6000611a838284613804565b6100919084613579565b600083815260086020526040902054600160801b90046001600160801b0316808303611ab95750505050565b6000848152600860205260408120546001600160801b031690819003611b1357611ae283611884565b600086815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055611b91565b611b64611b5f670de0b6b3a7640000611b2c8886613579565b611b369190613721565b85670de0b6b3a7640000611b4a878a613579565b611b549190613721565b859291906001612c44565b611884565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b611b9a84611884565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b60008183116118585782610091565b6006546000908190611bfd908490600160801b90046001600160801b0316612040565b6006546201000090046001600160701b03169250905081811115611d79576000611c278383613579565b9050611c36611b5f8286612ce2565b60068054601090611c58908490600160801b90046001600160801b0316613818565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611c91858361177f90919063ffffffff16565b90506000611cbf827f0000000000000000000000000000000000000000000000000000000000000000612040565b905080600d6000828254611cd39190613566565b90915550611ce390508183613579565b9150611cee82611884565b60028054600090611d099084906001600160801b0316613786565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611d3682612cf7565b60048054600090611d4b908490600f0b613838565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60006001600160f81b03821115611da85760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b600080611dc0878561177f565b91506000611dee837f0000000000000000000000000000000000000000000000000000000000000000612040565b9050611e1a817f0000000000000000000000000000000000000000000000000000000000000000612040565b91508315611e3d57611e2c8282613579565b611e369084613579565b9250611e54565b611e478282613579565b611e519084613566565b92505b86861015611e7757611e67838789611761565b9250611e74828789611761565b91505b509550959350505050565b600454600160801b90046001600160801b0316611ecb611b5f82611eae670de0b6b3a764000086613721565b600554600160801b90046001600160801b031691908a6000612c44565b600580546001600160801b03928316600160801b029216919091179055611ef186611884565b611efb9082613818565b600480546001600160801b03928316600160801b029216919091179055611f2184611884565b60028054600090611f3c9084906001600160801b0316613786565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611f69836118ae565b60048054600090611f7e908490600f0b613838565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611fae85611884565b60028054601090611fd0908490600160801b90046001600160801b0316613818565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b60008061200e846115cd8a888a611761565b905061201b888486611761565b6120259082613566565b9050868111156120355786810391505b509695505050505050565b60006100918383670de0b6b3a7640000611761565b60006001600160701b038211156117375760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b0316838110806120c157507f00000000000000000000000000000000000000000000000000000000000000006120bf8583613579565b105b156120ce576120ce612b2a565b6004549084900390600f0b6120e384826137a6565b9050836120ef8661170d565b13801561212457507f0000000000000000000000000000000000000000000000000000000000000000612122838361185e565b105b1561213157612131612b2a565b600354600160801b90046001600160801b0316612173611b5f8261215d670de0b6b3a764000088613721565b6005546001600160801b031691908c6000612c44565b600580546001600160801b0319166001600160801b039290921691909117905561219d8882613579565b90506121a881611884565b600380546001600160801b03928316600160801b0292169190911790556121ce83611884565b600280546001600160801b0319166001600160801b03929092169190911790556121f7826118ae565b600480546001600160801b0319166001600160801b039290921691909117905561222087611884565b60028054601090612242908490600160801b90046001600160801b0316613786565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60035461228b90611b5f906001600160801b03168484612885565b600380546001600160801b0319166001600160801b03929092169190911790555050565b600754600360f81b600090815260106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be7302154909182916122fa916001600160801b031690613579565b90508060000361230e576001915050611394565b600061231985612d21565b90508060000361232e57600192505050611394565b60008061233c838589612dbd565b9150915080612352576000945050505050611394565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b815260040161238e929190613865565b6040805180830381865af41580156123aa573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123ce91906138db565b915091506123ec6123de8261170d565b6123e7906138ff565b612992565b9250826124025760009650505050505050611394565b61240b82611884565b600780546000906124269084906001600160801b0316613786565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061245381611884565b60078054601090612475908490600160801b90046001600160801b0316613786565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e6124d2876115d3565b6040518263ffffffff1660e01b81526004016124ee919061360a565b6040805180830381865af415801561250a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061252e919061391b565b9150915080612544575060009485945092505050565b60075460106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215460008080527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb015490926001600160801b0316916125aa91613566565b6125b49190613579565b9050806000036125cc57506000958695509350505050565b60008087116125dc5760006125e7565b6125e7848884611761565b976001975095505050505050565b6000606060008060008661ffff1667ffffffffffffffff81111561261b5761261b61394b565b6040519080825280601f01601f191660200182016040528015612645576020820181803683370190505b5090506000808751602089018b8e8ef191503d925086831115612666578692505b828152826000602083013e9093509150505b9550959350505050565b6000806000836126918661170d565b61269b91906137a6565b905060008112156126b3576000809250925050610d26565b946001945092505050565b60008060006126d08888888888612f2c565b905060006126fb670de0b6b3a76400006126ea8888612ce2565b6126f49190613566565b839061177f565b9050670de0b6b3a7640000811061272f57612728612721670de0b6b3a76400008961177f565b8290612b43565b9050612747565b612744612721670de0b6b3a764000089612ce2565b90505b612751818661177f565b90508881101561276957600080935093505050612678565b97909703976001975095505050505050565b600080600061278d8989888888612f5b565b90506127a7866118fb6127a08a8d613566565b8790612040565b98506127b4858a86611761565b9850888110156127cb57600080925092505061159c565b888103670de0b6b3a764000081106127f9576127f2612721670de0b6b3a764000089612ce2565b9050612811565b61280e612721670de0b6b3a76400008961177f565b90505b808910156128275760008093509350505061159c565b90970398600198509650505050505050565b600080600080600061284c898789612f80565b909250905061285b8289613579565b9750600061286a82888a611761565b9050612876818b613579565b9a989950979650505050505050565b600080612893846000613006565b61289e846000613006565b6128a891906137a6565b905060008113156128c4576128bd8186613566565b94506128e3565b60008112156128e3576128d6816138ff565b6128e09086613579565b94505b50929392505050565b60006100918383670de0b6b3a76400005b600082600019048411830215820261291457600080fd5b50910281810615159190040190565b600080670de0b6b3a7640000612937610d2d565b6129419190613721565b905080831161295157600061295b565b61295b8184613579565b91506100916126f4670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613721565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612a4b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a6f9190613961565b935093509350935080612a8b5750600098975050505050505050565b868414612abc57612a9b84611884565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612aed57612acc836118ae565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612b1b57612afd82611884565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b60405163bb55fd2760e01b815260040160405180910390fd5b600081600003612b5c5750670de0b6b3a7640000611394565b82600003612b6c57506000611394565b6000612b778361170d565b90506000612b8c612b878661170d565b61301c565b9050818102612ba3670de0b6b3a7640000826139a2565b9050612bae81613242565b9695505050505050565b604051630f451f7160e31b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690637a28fb8890602401602060405180830381865afa158015612c20573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113949190613619565b600082600003612c55575084610078565b8115612ca857612c86612c688487613566565b612c728587612040565b612c7c888a612040565b6115cd9190613566565b90506000612c948588611bcb565b905080821015612ca2578091505b50610078565b828503612cb757506000610078565b610075612cc48487613579565b612cce85876128ec565b612cd8888a612040565b6115cd9190613579565b600061009183670de0b6b3a7640000846128fd565b600060016001607f1b038211156117375760405163a5353be560e01b815260040160405180910390fd5b6003546000908190612d3c906001600160801b031684612ce2565b9050612d687f000000000000000000000000000000000000000000000000000000000000000082613566565b6002546001600160801b03161115611858576002547f000000000000000000000000000000000000000000000000000000000000000090612db39083906001600160801b0316613579565b6100919190613579565b612dc5613438565b600080612dd1846115d3565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401612e0c919061360a565b6040805180830381865af4158015612e28573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612e4c919061391b565b9350905082612e615750600091506119bf9050565b6000612e8361155e84610160015185610140015161204090919063ffffffff16565b612ea361155e8561012001518661010001516128ec90919063ffffffff16565b612ead91906137a6565b604080516101208101825285815260208082019590955260008052601085527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb0154818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6000612f388585612b43565b612f51612f49866118fb868b612040565b859085611761565b6100759190613566565b6000612f678585612b43565b612f51612f78866118fb868b6128ec565b8590856128fd565b600080612fd085612fca85817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000612fc0818c612ce2565b612fca9190613579565b906128ec565b9150612ffc827f0000000000000000000000000000000000000000000000000000000000000000612040565b9050935093915050565b60008183136130155781610091565b5090919050565b600080821361303e5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906130c19084901c61170d565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361325d57506000919050565b680755bf798b4a1bf1e58212613286576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190612bae74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c61170d565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60405180610120016040528061344c6133d7565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60006060828403121561185857600080fd5b600080600080600060a086880312156134b457600080fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff8111156134e757600080fd5b6134f38882890161348a565b9150509295509295909350565b60008060006060848603121561351557600080fd5b8335925060208401359150604084013567ffffffffffffffff81111561353a57600080fd5b6135468682870161348a565b9150509250925092565b634e487b7160e01b600052601160045260246000fd5b8082018082111561139457611394613550565b8181038181111561139457611394613550565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b6101808101611394828461358c565b60006020828403121561362b57600080fd5b5051919050565b60006020828403121561364457600080fd5b81356001600160a01b038116811461009157600080fd5b8015158114610c0957600080fd5b60006020828403121561367b57600080fd5b81356100918161365b565b6000808335601e1984360301811261369d57600080fd5b83018035915067ffffffffffffffff8211156136b857600080fd5b602001915036819003821315610d2657600080fd5b878152866020820152856040820152841515606082015283608082015260c060a08201528160c0820152818360e0830137600081830160e090810191909152601f909201601f191601019695505050505050565b808202811582820484141761139457611394613550565b60008060006060848603121561374d57600080fd5b8351925060208401519150604084015190509250925092565b6001600160701b0381811683821601908082111561187d5761187d613550565b6001600160801b0381811683821601908082111561187d5761187d613550565b818103600083128015838313168383128216171561187d5761187d613550565b80820182811260008312801582168215821617156137e6576137e6613550565b505092915050565b634e487b7160e01b600052601260045260246000fd5b600082613813576138136137ee565b500690565b6001600160801b0382811682821603908082111561187d5761187d613550565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561139457611394613550565b60006102a08201905061387982855161358c565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b600080604083850312156138ee57600080fd5b505080516020909101519092909150565b6000600160ff1b820161391457613914613550565b5060000390565b6000806040838503121561392e57600080fd5b8251915060208301516139408161365b565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b6000806000806080858703121561397757600080fd5b84519350602085015192506040850151915060608501516139978161365b565b939692955090935050565b6000826139b1576139b16137ee565b600160ff1b8214600019841416156139cb576139cb613550565b50059056fea2646970667358221220a8b8f85106c76fafdd8897d79554ff0e794ea77570e3cef3f2f544a060bd04f364736f6c63430008140033',
    methodIdentifiers: {
        "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": "4c2ac1d9",
        "initialize(uint256,uint256,(address,bool,bytes))": "77d05ff4"
    }
};
