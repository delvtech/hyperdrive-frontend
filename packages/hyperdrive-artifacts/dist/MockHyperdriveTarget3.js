export const MockHyperdriveTarget3 = {
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
            "name": "NotPayable",
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
    bytecode: '0x6102606040523480156200001257600080fd5b50604051620043f5380380620043f5833981016040819052620000359162000202565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c090815260c0808601516101e090815260e0808801516102005261012080890151909352610100808901519091526101408089015190915290870180515190925281519093015190925281516040908101516101609081529251606090810151610180908152918701518616610220528601516102405291850151600980546001600160a01b031990811692871692909217905591850151600a8054841691861691909117905591840151600b80548316918516919091179055920151600c8054909316911617905562000315565b60405161020081016001600160401b03811182821017156200016a57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200018857600080fd5b919050565b600060808284031215620001a057600080fd5b604051608081016001600160401b0381118282101715620001d157634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600061026082840312156200021657600080fd5b6200022062000138565b6200022b8362000170565b81526200023b6020840162000170565b60208201526200024e6040840162000170565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140808401518183015250610160620002b981850162000170565b90820152610180620002cd84820162000170565b908201526101a0620002e184820162000170565b908201526101c0620002f584820162000170565b908201526101e06200030a858583016200018d565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161024051613ed26200052360003960005050600050506000818161030301528181610332015261035f01526000818160de015281816105a901526116e401526000818161085601528181610941015281816109d401528181610add015281816115b5015281816116be015281816123ed0152818161245001528181612d2f015281816131f2015261322e01526000818161013f015281816108c601528181610ef201528181611479015281816114dd015281816115240152818161169801528181611b9b0152611c2e01526000611ff201526000818161214d01526134870152600081816110b601526121210152600061343d0152600081816101810152818161091901528181610f1301528181611449015281816114ad01528181611545015261170a01526000818161016001528181610238015281816102d8015281816106f3015281816108f301528181610fee0152612cc501526000818161029701528181610db101528181610e2c01528181610ea201528181610f6e0152610fa601526000505060008181610be501528181611999015281816119e201528181611a7401528181611af501528181611c9c01528181611d1d01528181612f2a01528181612f7301528181613025015261306e0152613ed26000f3fe6080604052600436106100295760003560e01c80634c2ac1d91461002e57806377d05ff414610053575b600080fd5b61004161003c36600461394b565b610066565b60405190815260200160405180910390f35b6100416100613660046139af565b610081565b60006100758686868686610098565b90505b95945050505050565b600061008e848484610800565b90505b9392505050565b60006100a2610bb9565b600654610100900460ff16156100cb576040516321081abf60e01b815260040160405180910390fd5b6100d3610be3565b6100dc82610c4f565b7f000000000000000000000000000000000000000000000000000000000000000086101561011d5760405163211ddda360e11b815260040160405180910390fd5b60006101a561012a610c88565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000610cae565b9050848110806101b457508381115b156101d257604051633b61151160e11b815260040160405180910390fd5b6000806101df8986610cd4565b9150915060006101ed610da9565b90506101fd818360046001610dd5565b506002546004546003546000928392610267926001600160801b0380841693600f9390930b92600160801b900481169189911661026261025d7f00000000000000000000000000000000000000000000000000000000000000008b613a15565b6113cc565b611416565b915091508061028957604051630552b01360e31b815260040160405180910390fd5b8b60006102fc6008826102bc7f000000000000000000000000000000000000000000000000000000000000000089613a28565b81526020810191909152604001600020546001600160801b03167f0000000000000000000000000000000000000000000000000000000000000000611623565b90506103287f000000000000000000000000000000000000000000000000000000000000000082613a15565b88118061038757507f00000000000000000000000000000000000000000000000000000000000000008111801561038757506103847f000000000000000000000000000000000000000000000000000000000000000082613a28565b88105b156103a557604051630552b01360e31b815260040160405180910390fd5b50600754600360f81b600090815260106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215490916103f1916001600160801b0390911690613a28565b600080805260106020527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb01549192509061042c908390613a15565b9050600080600061043c8a61164f565b604051635f9d50ab60e11b815290915073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063bf3aa15690610476908490600401613ab9565b602060405180830381865af4158015610493573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104b79190613ac8565b91506104ca6104c58c611789565b6117b7565b6002546001600160801b03808216835260048054600f0b6020850152600160801b9092041660408084019190915251635f9d50ab60e11b815273__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9163bf3aa1569161052b91859101613ab9565b602060405180830381865af4158015610548573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061056c9190613ac8565b92508183101561058f5760405163184d952160e11b815260040160405180910390fd5b6105a5848361059e8187613a28565b91906117dd565b9c507f00000000000000000000000000000000000000000000000000000000000000008d10156105e85760405163211ddda360e11b815260040160405180910390fd5b508f6105f4868e6117fb565b10156106135760405163c972651760e01b815260040160405180910390fd5b61063160008e600001602081019061062b9190613ae1565b8e611810565b61063a896118b8565b95508561065a57604051638bdf918d60e01b815260040160405180910390fd5b600088905060008d9050368f905060008c9050600061071d600260000160009054906101000a90046001600160801b03166001600160801b03166002800160009054906101000a9004600f0b600f0b600260000160109054906101000a90046001600160801b03166001600160801b031685600260010160009054906101000a90046001600160801b03166001600160801b03166102627f00000000000000000000000000000000000000000000000000000000000000008c61025d9190613a15565b9b5090508a158061073757506107348c60006118c5565b81125b1561075557604051630552b01360e31b815260040160405180910390fd5b6000881561076d5761076887848b6117dd565b610770565b60005b905061077f6020850185613ae1565b6001600160a01b03167fdcc4a01cea4510bd52201cebc8cd2d47d60429b35d68329abc591a70aa2efabf868d866107bc60408a0160208b01613b18565b866107ca60408c018c613b35565b6040516107dd9796959493929190613b7c565b60405180910390a250505050505050505050505050505050506100786001600055565b600061080a610bb9565b610812610be3565b61081b82610c4f565b60065460ff161561083f57604051637983c05160e01b815260040160405180910390fd5b60008061084c8685610cd4565b909250905061087c7f00000000000000000000000000000000000000000000000000000000000000006002613bd0565b82101561089c57604051632afb507160e21b815260040160405180910390fd5b6006805460ff1916600117905560405163594f0e8f60e11b815260048101839052602481018290527f00000000000000000000000000000000000000000000000000000000000000006044820152606481018690527f000000000000000000000000000000000000000000000000000000000000000060848201527f000000000000000000000000000000000000000000000000000000000000000060a482015260027f000000000000000000000000000000000000000000000000000000000000000002830393506000908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063b29e1d1e9060c401606060405180830381865af41580156109a8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109cc9190613be7565b9250925092507f00000000000000000000000000000000000000000000000000000000000000006109fd84846118da565b1015610a1c5760405163216f4ab160e21b815260040160405180910390fd5b600080610a2e85858589600080611416565b91509150801580610a3f5750600082125b15610a5d57604051630552b01360e31b815260040160405180910390fd5b610a6685611900565b600280546001600160801b0319166001600160801b0392909216919091179055610a8f8461192a565b600480546001600160801b0319166001600160801b0392909216919091179055610ab883611900565b600280546001600160801b03928316600160801b029216919091179055610b016000807f0000000000000000000000000000000000000000000000000000000000000000611810565b610b196000610b1360208c018c613ae1565b8a611810565b610b2e610b24610da9565b8760046001610dd5565b508a8a8a610b3f6020820182613ae1565b6001600160a01b03167f4931b9953a65531203c17d9abe77870a3e49d8b13af522ec3321c18b5abb8af38c858c610b7c6040870160208801613b18565b87610b8a6040890189613b35565b604051610b9d9796959493929190613b7c565b60405180910390a2505050505050505050506100916001600055565b600260005403610bdc57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee14801590610c2f57503415155b15610c4d57604051631574f9f360e01b815260040160405180910390fd5b565b6000610c5e6020830183613ae1565b6001600160a01b031603610c855760405163f0dd15fd60e01b815260040160405180910390fd5b50565b600254600454600091610ca9916001600160801b0390911690600f0b6118da565b905090565b600080610cbd87878786611966565b9050610cc98185611623565b979650505050505050565b81600080610ce86040850160208601613b18565b15610d0d57610d0385610cfe6040870187613b35565b61197d565b9093509050610d25565b5034610d2585610d206040870187613b35565b611c11565b610d2d611dbb565b91508015610da057604051600090339083908381818185875af1925050503d8060008114610d77576040519150601f19603f3d011682016040523d82523d6000602084013e610d7c565b606091505b5050905080610d9e576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b6000610ca9427f0000000000000000000000000000000000000000000000000000000000000000611dce565b600084815260086020526040812060018101546001600160801b0316151580610dfd57504286115b15610e1657600101546001600160801b031690506113c4565b6000806000610e23610da9565b90506000610e517f00000000000000000000000000000000000000000000000000000000000000008b613a15565b90505b81811015610ec7576000818152600860205260409020600101546001600160801b03168015610e9f576000828152600860205260409020549094506001600160801b03169250610ec7565b507f000000000000000000000000000000000000000000000000000000000000000001610e54565b83600003610f3a57889350610f37610edd610c88565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611966565b92505b50610f4483611900565b6001850180546001600160801b0319166001600160801b0392909216919091179055610f9a610f937f00000000000000000000000000000000000000000000000000000000000000008b613a28565b8a84611de4565b610fd889610fd2610fcb7f000000000000000000000000000000000000000000000000000000000000000083613a15565b4290611f22565b84611de4565b610fe188611f31565b50600090506008816110137f00000000000000000000000000000000000000000000000000000000000000008d613a28565b815260208101919091526040016000908120600101546001600160801b0316915061103f60028c6120d5565b6000818152601060205260408120549192508c8c8315611185576001925060008061106e86898d86600061210a565b9150915080600d60008282546110849190613a15565b909155506110a090508660008461109a81611789565b886121d9565b6110aa8183613a15565b91506110da86838a8e877f0000000000000000000000000000000000000000000000000000000000000000612353565b91506110ee6110e98385612397565b6123ac565b6006805460029061110f9084906201000090046001600160701b0316613c15565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061113c82611900565b6006805460109061115e908490600160801b90046001600160801b0316613c35565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b60006111926001846120d5565b60008181526010602052604090205490915080156112a157600194506000806111bf838b8f88600161210a565b9150915080600d60008282546111d59190613a15565b909155506111f19050836000846111eb81611789565b8a6123d6565b6111fb8183613a28565b915061120a6110e98387612397565b6006805460029061122b9084906201000090046001600160701b0316613c15565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061125882611900565b6006805460109061127a908490600160801b90046001600160801b0316613c35565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b84156112db576112cd6112b387611789565b6112bc83611789565b6112c69190613c55565b60006125c7565b8e6112d88482612606565b50505b60006112e684612800565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a2600c546001600160a01b0316156113b4578e6113b05a604051336024820152604481018990528315156064820152600090819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b179052600c546001600160a01b03169392919061294c565b5050505b50999b5050505050505050505050505b949350505050565b60006113f4601060006113e06002866120d5565b815260200190815260200160002054611789565b611406601060006113e06001876120d5565b6114109190613c55565b92915050565b6000806000806114268a8a6129d9565b915091508061143d57600080935093505050611618565b600061149d838a6114767f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000613a28565b8b7f0000000000000000000000000000000000000000000000000000000000000000612a15565b5090506000611501848b846114da7f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000613a28565b8d7f0000000000000000000000000000000000000000000000000000000000000000612ad2565b50905081158061150f575080155b1561151b575060009050805b6000611569858c7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611966565b905061157783838c84612b90565b5090935060009050611589848f613a15565b905060006115aa8b8b61159b87611789565b6115a5908e613c75565b612bdc565b90508b6115df6115da7f000000000000000000000000000000000000000000000000000000000000000083612c43565b611789565b6115e883611789565b6115f56115da8685612397565b6115ff9190613c55565b6116099190613c55565b60019950995050505050505050505b965096945050505050565b600061009161163784846301e13380612c54565b61164985670de0b6b3a7640000613a28565b906117fb565b611657613886565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e0830152600354048216610100820152600554909161012083019161174f9116612c7a565b81526004546001600160801b03600160801b918290048116602084015260055460409093019261178192900416612c7a565b905292915050565b60006001600160ff1b038211156117b35760405163396ea70160e11b815260040160405180910390fd5b5090565b6117c081612ce9565b610c8557604051635044b7f560e01b815260040160405180910390fd5b60008260001904841183021582026117f457600080fd5b5091020490565b600061009183670de0b6b3a7640000846117dd565b6000838152600f602090815260408083206001600160a01b038616845290915281208054839290611842908490613a15565b909155505060008381526010602052604081208054839290611865908490613a15565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b6000611410826004612606565b60008183136118d45782610091565b50919050565b6000806118e784846129d9565b9092509050806118f9576118f9612e81565b5092915050565b60006001600160801b038211156117b357604051630f0af95160e11b815260040160405180910390fd5b600060016001607f1b0319821280611948575060016001607f1b0382135b156117b35760405163a5353be560e01b815260040160405180910390fd5b6000610078826119778588886117dd565b90612e9a565b6000808073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016119cd575047611a58565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611a31573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a559190613ac8565b90505b6001600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601611ad35787341015611ac2576040516312171d8360e31b815260040160405180910390fd5b611acc8834613a28565b9050611b6d565b6040516323b872dd60e01b8152336004820152306024820152604481018990527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015611b46573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b6a9190613c9d565b91505b81611b8b576040516312171d8360e31b815260040160405180910390fd5b601454600003611bd057611bbf887f00000000000000000000000000000000000000000000000000000000000000006117fb565b601481905594509250611c09915050565b601454600090611be2908a90866117dd565b90508060146000828254611bf69190613a15565b90915550909550909350611c0992505050565b935093915050565b6000611c1c84612f0f565b9050601454600003611c5a57611c52817f00000000000000000000000000000000000000000000000000000000000000006117fb565b601455611c80565b6000611c658261300a565b90508060146000828254611c799190613a15565b9091555050505b6001600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601611cfb5782341015611cea576040516312171d8360e31b815260040160405180910390fd5b611cf48334613a28565b9050611d95565b6040516323b872dd60e01b8152336004820152306024820152604481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015611d6e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d929190613c9d565b91505b81611db3576040516312171d8360e31b815260040160405180910390fd5b505050505050565b6000610ca9670de0b6b3a7640000612f0f565b6000611dda8284613cd0565b6100919084613a28565b600083815260086020526040902054600160801b90046001600160801b0316808303611e105750505050565b6000848152600860205260408120546001600160801b031690819003611e6a57611e3983611900565b600086815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055611ee8565b611ebb611eb6670de0b6b3a7640000611e838886613a28565b611e8d9190613bd0565b85670de0b6b3a7640000611ea1878a613a28565b611eab9190613bd0565b8592919060016130f3565b611900565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b611ef184611900565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b60008183116118d45782610091565b6006546000908190611f54908490600160801b90046001600160801b0316612397565b6006546201000090046001600160701b031692509050818111156120d0576000611f7e8383613a28565b9050611f8d611eb68286613191565b60068054601090611faf908490600160801b90046001600160801b0316613ce4565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611fe885836117fb90919063ffffffff16565b90506000612016827f0000000000000000000000000000000000000000000000000000000000000000612397565b905080600d600082825461202a9190613a15565b9091555061203a90508183613a28565b915061204582611900565b600280546000906120609084906001600160801b0316613c35565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061208d826131a6565b600480546000906120a2908490600f0b613d04565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60006001600160f81b038211156120ff5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60008061211787856117fb565b91506000612145837f0000000000000000000000000000000000000000000000000000000000000000612397565b9050612171817f0000000000000000000000000000000000000000000000000000000000000000612397565b91508315612194576121838282613a28565b61218d9084613a28565b92506121ab565b61219e8282613a28565b6121a89084613a15565b92505b868610156121ce576121be8387896117dd565b92506121cb8287896117dd565b91505b509550959350505050565b600454600160801b90046001600160801b0316612222611eb682612205670de0b6b3a764000086613bd0565b600554600160801b90046001600160801b031691908a60006130f3565b600580546001600160801b03928316600160801b02921691909117905561224886611900565b6122529082613ce4565b600480546001600160801b03928316600160801b02921691909117905561227884611900565b600280546000906122939084906001600160801b0316613c35565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506122c08361192a565b600480546000906122d5908490600f0b613d04565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061230585611900565b60028054601090612327908490600160801b90046001600160801b0316613ce4565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600080612365846116498a888a6117dd565b90506123728884866117dd565b61237c9082613a15565b90508681111561238c5786810391505b509695505050505050565b60006100918383670de0b6b3a76400006117dd565b60006001600160701b038211156117b35760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b03168381108061241857507f00000000000000000000000000000000000000000000000000000000000000006124168583613a28565b105b1561242557612425612e81565b6004549084900390600f0b61243a8482613c55565b90508361244686611789565b13801561247b57507f000000000000000000000000000000000000000000000000000000000000000061247983836118da565b105b1561248857612488612e81565b600354600160801b90046001600160801b03166124ca611eb6826124b4670de0b6b3a764000088613bd0565b6005546001600160801b031691908c60006130f3565b600580546001600160801b0319166001600160801b03929092169190911790556124f48882613a28565b90506124ff81611900565b600380546001600160801b03928316600160801b02921691909117905561252583611900565b600280546001600160801b0319166001600160801b039290921691909117905561254e8261192a565b600480546001600160801b0319166001600160801b039290921691909117905561257787611900565b60028054601090612599908490600160801b90046001600160801b0316613c35565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b6003546125e290611eb6906001600160801b03168484612bdc565b600380546001600160801b0319166001600160801b03929092169190911790555050565b600754600360f81b600090815260106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215490918291612651916001600160801b031690613a28565b905080600003612665576001915050611410565b6000612670856131d0565b90508060000361268557600192505050611410565b60008061269383858961326c565b91509150806126a9576000945050505050611410565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b81526004016126e5929190613d31565b6040805180830381865af4158015612701573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906127259190613da7565b9150915061274361273582611789565b61273e90613dcb565b612ce9565b9250826127595760009650505050505050611410565b61276282611900565b6007805460009061277d9084906001600160801b0316613c35565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506127aa81611900565b600780546010906127cc908490600160801b90046001600160801b0316613c35565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e6128298761164f565b6040518263ffffffff1660e01b81526004016128459190613ab9565b6040805180830381865af4158015612861573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906128859190613de7565b915091508061289b575060009485945092505050565b60075460106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215460008080527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb015490926001600160801b03169161290191613a15565b61290b9190613a28565b90508060000361292357506000958695509350505050565b600080871161293357600061293e565b61293e8488846117dd565b976001975095505050505050565b6000606060008060008661ffff1667ffffffffffffffff81111561297257612972613e17565b6040519080825280601f01601f19166020018201604052801561299c576020820181803683370190505b5090506000808751602089018b8e8ef191503d9250868311156129bd578692505b828152826000602083013e9093509150505b9550959350505050565b6000806000836129e886611789565b6129f29190613c55565b90506000811215612a0a576000809250925050610da2565b946001945092505050565b6000806000612a2788888888886133db565b90506000612a52670de0b6b3a7640000612a418888613191565b612a4b9190613a15565b83906117fb565b9050670de0b6b3a76400008110612a8657612a7f612a78670de0b6b3a7640000896117fb565b8290612e9a565b9050612a9e565b612a9b612a78670de0b6b3a764000089613191565b90505b612aa881866117fb565b905088811015612ac0576000809350935050506129cf565b97909703976001975095505050505050565b6000806000612ae4898988888861340a565b9050612afe86611977612af78a8d613a15565b8790612397565b9850612b0b858a866117dd565b985088811015612b22576000809250925050611618565b888103670de0b6b3a76400008110612b5057612b49612a78670de0b6b3a764000089613191565b9050612b68565b612b65612a78670de0b6b3a7640000896117fb565b90505b80891015612b7e57600080935093505050611618565b90970398600198509650505050505050565b6000806000806000612ba389878961342f565b9092509050612bb28289613a28565b97506000612bc182888a6117dd565b9050612bcd818b613a28565b9a989950979650505050505050565b600080612bea8460006134b5565b612bf58460006134b5565b612bff9190613c55565b90506000811315612c1b57612c148186613a15565b9450612c3a565b6000811215612c3a57612c2d81613dcb565b612c379086613a28565b94505b50929392505050565b60006100918383670de0b6b3a76400005b6000826000190484118302158202612c6b57600080fd5b50910281810615159190040190565b600080670de0b6b3a7640000612c8e610da9565b612c989190613bd0565b9050808311612ca8576000612cb2565b612cb28184613a28565b9150610091612a4b670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613bd0565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612da2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612dc69190613e2d565b935093509350935080612de25750600098975050505050505050565b868414612e1357612df284611900565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612e4457612e238361192a565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612e7257612e5482611900565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b60405163bb55fd2760e01b815260040160405180910390fd5b600081600003612eb35750670de0b6b3a7640000611410565b82600003612ec357506000611410565b6000612ece83611789565b90506000612ee3612ede86611789565b6134cb565b9050818102612efa670de0b6b3a764000082613e6e565b9050612f05816136f1565b9695505050505050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612f5e575047612fe9565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015612fc2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612fe69190613ac8565b90505b601454600003612ffa576000610091565b60145461009190849083906117dd565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016130595750476130e4565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156130bd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906130e19190613ac8565b90505b601454610091908490836117dd565b600082600003613104575084610078565b8115613157576131356131178487613a15565b6131218587612397565b61312b888a612397565b6116499190613a15565b905060006131438588611f22565b905080821015613151578091505b50610078565b82850361316657506000610078565b6100756131738487613a28565b61317d8587612c43565b613187888a612397565b6116499190613a28565b600061009183670de0b6b3a764000084612c54565b600060016001607f1b038211156117b35760405163a5353be560e01b815260040160405180910390fd5b60035460009081906131eb906001600160801b031684613191565b90506132177f000000000000000000000000000000000000000000000000000000000000000082613a15565b6002546001600160801b031611156118d4576002547f0000000000000000000000000000000000000000000000000000000000000000906132629083906001600160801b0316613a28565b6100919190613a28565b6132746138e7565b6000806132808461164f565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b81526004016132bb9190613ab9565b6040805180830381865af41580156132d7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906132fb9190613de7565b9350905082613310575060009150611c099050565b60006133326115da84610160015185610140015161239790919063ffffffff16565b6133526115da856101200151866101000151612c4390919063ffffffff16565b61335c9190613c55565b604080516101208101825285815260208082019590955260008052601085527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb0154818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b60006133e78585612e9a565b6134006133f886611977868b612397565b8590856117dd565b6100759190613a15565b60006134168585612e9a565b61340061342786611977868b612c43565b859085612c54565b60008061347f8561347985817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a764000061346f818c613191565b6134799190613a28565b90612c43565b91506134ab827f0000000000000000000000000000000000000000000000000000000000000000612397565b9050935093915050565b60008183136134c45781610091565b5090919050565b60008082136134ed5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906135709084901c611789565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361370c57506000919050565b680755bf798b4a1bf1e58212613735576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190612f0574029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611789565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061012001604052806138fb613886565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000606082840312156118d457600080fd5b600080600080600060a0868803121561396357600080fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff81111561399657600080fd5b6139a288828901613939565b9150509295509295909350565b6000806000606084860312156139c457600080fd5b8335925060208401359150604084013567ffffffffffffffff8111156139e957600080fd5b6139f586828701613939565b9150509250925092565b634e487b7160e01b600052601160045260246000fd5b80820180821115611410576114106139ff565b81810381811115611410576114106139ff565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b61018081016114108284613a3b565b600060208284031215613ada57600080fd5b5051919050565b600060208284031215613af357600080fd5b81356001600160a01b038116811461009157600080fd5b8015158114610c8557600080fd5b600060208284031215613b2a57600080fd5b813561009181613b0a565b6000808335601e19843603018112613b4c57600080fd5b83018035915067ffffffffffffffff821115613b6757600080fd5b602001915036819003821315610da257600080fd5b878152866020820152856040820152841515606082015283608082015260c060a08201528160c0820152818360e0830137600081830160e090810191909152601f909201601f191601019695505050505050565b8082028115828204841417611410576114106139ff565b600080600060608486031215613bfc57600080fd5b8351925060208401519150604084015190509250925092565b6001600160701b038181168382160190808211156118f9576118f96139ff565b6001600160801b038181168382160190808211156118f9576118f96139ff565b81810360008312801583831316838312821617156118f9576118f96139ff565b8082018281126000831280158216821582161715613c9557613c956139ff565b505092915050565b600060208284031215613caf57600080fd5b815161009181613b0a565b634e487b7160e01b600052601260045260246000fd5b600082613cdf57613cdf613cba565b500690565b6001600160801b038281168282160390808211156118f9576118f96139ff565b600f81810b9083900b0160016001607f1b03811360016001607f1b031982121715611410576114106139ff565b60006102a082019050613d45828551613a3b565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215613dba57600080fd5b505080516020909101519092909150565b6000600160ff1b8201613de057613de06139ff565b5060000390565b60008060408385031215613dfa57600080fd5b825191506020830151613e0c81613b0a565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b60008060008060808587031215613e4357600080fd5b8451935060208501519250604085015191506060850151613e6381613b0a565b939692955090935050565b600082613e7d57613e7d613cba565b600160ff1b821460001984141615613e9757613e976139ff565b50059056fea264697066735822122015e5e89941b952217b73ee1a60715456c13e19a6ab0d17f59f79b0d2d3e11a9464736f6c63430008140033',
    methodIdentifiers: {
        "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": "4c2ac1d9",
        "initialize(uint256,uint256,(address,bool,bytes))": "77d05ff4"
    }
};
