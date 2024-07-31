export const LsETHTarget3 = {
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
            "name": "AddressEmptyCode",
            "inputs": [
                {
                    "name": "target",
                    "type": "address",
                    "internalType": "address"
                }
            ]
        },
        {
            "type": "error",
            "name": "AddressInsufficientBalance",
            "inputs": [
                {
                    "name": "account",
                    "type": "address",
                    "internalType": "address"
                }
            ]
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
            "name": "FailedInnerCall",
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
            "name": "SafeERC20FailedOperation",
            "inputs": [
                {
                    "name": "token",
                    "type": "address",
                    "internalType": "address"
                }
            ]
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
            "name": "UnsupportedToken",
            "inputs": []
        },
        {
            "type": "error",
            "name": "UpdateLiquidityFailed",
            "inputs": []
        }
    ],
    bytecode: '0x6102606040523480156200001257600080fd5b506040516200401f3803806200401f833981016040819052620000359162000202565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c090815260c0808601516101e090815260e0808801516102005261012080890151909352610100808901519091526101408089015190915290870180515190925281519093015190925281516040908101516101609081529251606090810151610180908152918701518616610220528601516102405291850151600980546001600160a01b031990811692871692909217905591850151600a8054841691861691909117905591840151600b80548316918516919091179055920151600c8054909316911617905562000315565b60405161020081016001600160401b03811182821017156200016a57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200018857600080fd5b919050565b600060808284031215620001a057600080fd5b604051608081016001600160401b0381118282101715620001d157634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600061026082840312156200021657600080fd5b6200022062000138565b6200022b8362000170565b81526200023b6020840162000170565b60208201526200024e6040840162000170565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140808401518183015250610160620002b981850162000170565b90820152610180620002cd84820162000170565b908201526101a0620002e184820162000170565b908201526101c0620002f584820162000170565b908201526101e06200030a858583016200018d565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161024051613b49620004d660003960005050600050506000818161030301528181610332015261035f01526000818160de015281816105a9015261169901526000818161085601528181610941015281816109d401528181610add0152818161156a0152818161167301528181611fba0152818161201d015281816128fc01528181612c670152612ca301526000818161013f015281816108c601528181610ea70152818161142e01528181611492015281816114d9015261164d01526000611bbf015260008181611d1a0152612f0301526000818161106b0152611cee01526000612eb90152600081816101810152818161091901528181610ec8015281816113fe01528181611462015281816114fa01526116bf01526000818161016001528181610238015281816102d8015281816106f3015281816108f301528181610fa3015261289201526000818161029701528181610d6601528181610de101528181610e5701528181610f230152610f5b01526000818161195b0152612b43015260005050613b496000f3fe6080604052600436106100295760003560e01c80634c2ac1d91461002e57806377d05ff414610053575b600080fd5b61004161003c366004613593565b610066565b60405190815260200160405180910390f35b6100416100613660046135f7565b610081565b60006100758686868686610098565b90505b95945050505050565b600061008e848484610800565b90505b9392505050565b60006100a2610bb9565b600654610100900460ff16156100cb576040516321081abf60e01b815260040160405180910390fd5b6100d3610be3565b6100dc82610c04565b7f000000000000000000000000000000000000000000000000000000000000000086101561011d5760405163211ddda360e11b815260040160405180910390fd5b60006101a561012a610c3d565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000610c63565b9050848110806101b457508381115b156101d257604051633b61151160e11b815260040160405180910390fd5b6000806101df8986610c89565b9150915060006101ed610d5e565b90506101fd818360046001610d8a565b506002546004546003546000928392610267926001600160801b0380841693600f9390930b92600160801b900481169189911661026261025d7f00000000000000000000000000000000000000000000000000000000000000008b61365d565b611381565b6113cb565b915091508061028957604051630552b01360e31b815260040160405180910390fd5b8b60006102fc6008826102bc7f000000000000000000000000000000000000000000000000000000000000000089613670565b81526020810191909152604001600020546001600160801b03167f00000000000000000000000000000000000000000000000000000000000000006115d8565b90506103287f00000000000000000000000000000000000000000000000000000000000000008261365d565b88118061038757507f00000000000000000000000000000000000000000000000000000000000000008111801561038757506103847f000000000000000000000000000000000000000000000000000000000000000082613670565b88105b156103a557604051630552b01360e31b815260040160405180910390fd5b50600754600360f81b600090815260106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215490916103f1916001600160801b0390911690613670565b600080805260106020527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb01549192509061042c90839061365d565b9050600080600061043c8a611604565b604051635f9d50ab60e11b815290915073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063bf3aa15690610476908490600401613701565b602060405180830381865af4158015610493573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104b79190613710565b91506104ca6104c58c61173e565b61176c565b6002546001600160801b03808216835260048054600f0b6020850152600160801b9092041660408084019190915251635f9d50ab60e11b815273__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9163bf3aa1569161052b91859101613701565b602060405180830381865af4158015610548573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061056c9190613710565b92508183101561058f5760405163184d952160e11b815260040160405180910390fd5b6105a5848361059e8187613670565b9190611792565b9c507f00000000000000000000000000000000000000000000000000000000000000008d10156105e85760405163211ddda360e11b815260040160405180910390fd5b508f6105f4868e6117b0565b10156106135760405163c972651760e01b815260040160405180910390fd5b61063160008e600001602081019061062b9190613729565b8e6117c5565b61063a8961186d565b95508561065a57604051638bdf918d60e01b815260040160405180910390fd5b600088905060008d9050368f905060008c9050600061071d600260000160009054906101000a90046001600160801b03166001600160801b03166002800160009054906101000a9004600f0b600f0b600260000160109054906101000a90046001600160801b03166001600160801b031685600260010160009054906101000a90046001600160801b03166001600160801b03166102627f00000000000000000000000000000000000000000000000000000000000000008c61025d919061365d565b9b5090508a158061073757506107348c600061187a565b81125b1561075557604051630552b01360e31b815260040160405180910390fd5b6000881561076d5761076887848b611792565b610770565b60005b905061077f6020850185613729565b6001600160a01b03167fdcc4a01cea4510bd52201cebc8cd2d47d60429b35d68329abc591a70aa2efabf868d866107bc60408a0160208b01613760565b866107ca60408c018c61377d565b6040516107dd97969594939291906137c4565b60405180910390a250505050505050505050505050505050506100786001600055565b600061080a610bb9565b610812610be3565b61081b82610c04565b60065460ff161561083f57604051637983c05160e01b815260040160405180910390fd5b60008061084c8685610c89565b909250905061087c7f00000000000000000000000000000000000000000000000000000000000000006002613818565b82101561089c57604051632afb507160e21b815260040160405180910390fd5b6006805460ff1916600117905560405163594f0e8f60e11b815260048101839052602481018290527f00000000000000000000000000000000000000000000000000000000000000006044820152606481018690527f000000000000000000000000000000000000000000000000000000000000000060848201527f000000000000000000000000000000000000000000000000000000000000000060a482015260027f000000000000000000000000000000000000000000000000000000000000000002830393506000908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063b29e1d1e9060c401606060405180830381865af41580156109a8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109cc919061382f565b9250925092507f00000000000000000000000000000000000000000000000000000000000000006109fd848461188f565b1015610a1c5760405163216f4ab160e21b815260040160405180910390fd5b600080610a2e858585896000806113cb565b91509150801580610a3f5750600082125b15610a5d57604051630552b01360e31b815260040160405180910390fd5b610a66856118b5565b600280546001600160801b0319166001600160801b0392909216919091179055610a8f846118df565b600480546001600160801b0319166001600160801b0392909216919091179055610ab8836118b5565b600280546001600160801b03928316600160801b029216919091179055610b016000807f00000000000000000000000000000000000000000000000000000000000000006117c5565b610b196000610b1360208c018c613729565b8a6117c5565b610b2e610b24610d5e565b8760046001610d8a565b508a8a8a610b3f6020820182613729565b6001600160a01b03167f4931b9953a65531203c17d9abe77870a3e49d8b13af522ec3321c18b5abb8af38c858c610b7c6040870160208801613760565b87610b8a604089018961377d565b604051610b9d97969594939291906137c4565b60405180910390a2505050505050505050506100916001600055565b600260005403610bdc57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b3415610c0257604051631574f9f360e01b815260040160405180910390fd5b565b6000610c136020830183613729565b6001600160a01b031603610c3a5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b600254600454600091610c5e916001600160801b0390911690600f0b61188f565b905090565b600080610c728787878661191b565b9050610c7e81856115d8565b979650505050505050565b81600080610c9d6040850160208601613760565b15610cc257610cb885610cb3604087018761377d565b611932565b9093509050610cda565b5034610cda85610cd5604087018761377d565b61194e565b610ce2611988565b91508015610d5557604051600090339083908381818185875af1925050503d8060008114610d2c576040519150601f19603f3d011682016040523d82523d6000602084013e610d31565b606091505b5050905080610d53576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b6000610c5e427f000000000000000000000000000000000000000000000000000000000000000061199b565b600084815260086020526040812060018101546001600160801b0316151580610db257504286115b15610dcb57600101546001600160801b03169050611379565b6000806000610dd8610d5e565b90506000610e067f00000000000000000000000000000000000000000000000000000000000000008b61365d565b90505b81811015610e7c576000818152600860205260409020600101546001600160801b03168015610e54576000828152600860205260409020549094506001600160801b03169250610e7c565b507f000000000000000000000000000000000000000000000000000000000000000001610e09565b83600003610eef57889350610eec610e92610c3d565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061191b565b92505b50610ef9836118b5565b6001850180546001600160801b0319166001600160801b0392909216919091179055610f4f610f487f00000000000000000000000000000000000000000000000000000000000000008b613670565b8a846119b1565b610f8d89610f87610f807f00000000000000000000000000000000000000000000000000000000000000008361365d565b4290611aef565b846119b1565b610f9688611afe565b5060009050600881610fc87f00000000000000000000000000000000000000000000000000000000000000008d613670565b815260208101919091526040016000908120600101546001600160801b03169150610ff460028c611ca2565b6000818152601060205260408120549192508c8c831561113a576001925060008061102386898d866000611cd7565b9150915080600d6000828254611039919061365d565b9091555061105590508660008461104f8161173e565b88611da6565b61105f818361365d565b915061108f86838a8e877f0000000000000000000000000000000000000000000000000000000000000000611f20565b91506110a361109e8385611f64565b611f79565b600680546002906110c49084906201000090046001600160701b031661385d565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506110f1826118b5565b60068054601090611113908490600160801b90046001600160801b031661387d565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000611147600184611ca2565b60008181526010602052604090205490915080156112565760019450600080611174838b8f886001611cd7565b9150915080600d600082825461118a919061365d565b909155506111a69050836000846111a08161173e565b8a611fa3565b6111b08183613670565b91506111bf61109e8387611f64565b600680546002906111e09084906201000090046001600160701b031661385d565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061120d826118b5565b6006805460109061122f908490600160801b90046001600160801b031661387d565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415611290576112826112688761173e565b6112718361173e565b61127b919061389d565b6000612194565b8e61128d84826121d3565b50505b600061129b846123cd565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a2600c546001600160a01b031615611369578e6113655a604051336024820152604481018990528315156064820152600090819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b179052600c546001600160a01b031693929190612519565b5050505b50999b5050505050505050505050505b949350505050565b60006113a960106000611395600286611ca2565b81526020019081526020016000205461173e565b6113bb60106000611395600187611ca2565b6113c5919061389d565b92915050565b6000806000806113db8a8a6125a6565b91509150806113f2576000809350935050506115cd565b6000611452838a61142b7f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000613670565b8b7f00000000000000000000000000000000000000000000000000000000000000006125e2565b50905060006114b6848b8461148f7f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000613670565b8d7f000000000000000000000000000000000000000000000000000000000000000061269f565b5090508115806114c4575080155b156114d0575060009050805b600061151e858c7f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061191b565b905061152c83838c8461275d565b509093506000905061153e848f61365d565b9050600061155f8b8b6115508761173e565b61155a908e6138bd565b6127a9565b90508b61159461158f7f000000000000000000000000000000000000000000000000000000000000000083612810565b61173e565b61159d8361173e565b6115aa61158f8685611f64565b6115b4919061389d565b6115be919061389d565b60019950995050505050505050505b965096945050505050565b60006100916115ec84846301e13380612821565b6115fe85670de0b6b3a7640000613670565b906117b0565b61160c6134ce565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e083015260035404821661010082015260055490916101208301916117049116612847565b81526004546001600160801b03600160801b918290048116602084015260055460409093019261173692900416612847565b905292915050565b60006001600160ff1b038211156117685760405163396ea70160e11b815260040160405180910390fd5b5090565b611775816128b6565b610c3a57604051635044b7f560e01b815260040160405180910390fd5b60008260001904841183021582026117a957600080fd5b5091020490565b600061009183670de0b6b3a764000084611792565b6000838152600f602090815260408083206001600160a01b0386168452909152812080548392906117f790849061365d565b90915550506000838152601060205260408120805483929061181a90849061365d565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b60006113c58260046121d3565b60008183136118895782610091565b50919050565b60008061189c84846125a6565b9092509050806118ae576118ae612a4e565b5092915050565b60006001600160801b0382111561176857604051630f0af95160e11b815260040160405180910390fd5b600060016001607f1b03198212806118fd575060016001607f1b0382135b156117685760405163a5353be560e01b815260040160405180910390fd5b60006100788261192c858888611792565b90612a67565b60008060405163350b944160e11b815260040160405180910390fd5b6119836001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333086612adc565b505050565b6000610c5e670de0b6b3a7640000612b3c565b60006119a782846138fb565b6100919084613670565b600083815260086020526040902054600160801b90046001600160801b03168083036119dd5750505050565b6000848152600860205260408120546001600160801b031690819003611a3757611a06836118b5565b600086815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055611ab5565b611a88611a83670de0b6b3a7640000611a508886613670565b611a5a9190613818565b85670de0b6b3a7640000611a6e878a613670565b611a789190613818565b859291906001612b68565b6118b5565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b611abe846118b5565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b60008183116118895782610091565b6006546000908190611b21908490600160801b90046001600160801b0316611f64565b6006546201000090046001600160701b03169250905081811115611c9d576000611b4b8383613670565b9050611b5a611a838286612c06565b60068054601090611b7c908490600160801b90046001600160801b031661390f565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611bb585836117b090919063ffffffff16565b90506000611be3827f0000000000000000000000000000000000000000000000000000000000000000611f64565b905080600d6000828254611bf7919061365d565b90915550611c0790508183613670565b9150611c12826118b5565b60028054600090611c2d9084906001600160801b031661387d565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611c5a82612c1b565b60048054600090611c6f908490600f0b61392f565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60006001600160f81b03821115611ccc5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b600080611ce487856117b0565b91506000611d12837f0000000000000000000000000000000000000000000000000000000000000000611f64565b9050611d3e817f0000000000000000000000000000000000000000000000000000000000000000611f64565b91508315611d6157611d508282613670565b611d5a9084613670565b9250611d78565b611d6b8282613670565b611d75908461365d565b92505b86861015611d9b57611d8b838789611792565b9250611d98828789611792565b91505b509550959350505050565b600454600160801b90046001600160801b0316611def611a8382611dd2670de0b6b3a764000086613818565b600554600160801b90046001600160801b031691908a6000612b68565b600580546001600160801b03928316600160801b029216919091179055611e15866118b5565b611e1f908261390f565b600480546001600160801b03928316600160801b029216919091179055611e45846118b5565b60028054600090611e609084906001600160801b031661387d565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611e8d836118df565b60048054600090611ea2908490600f0b61392f565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611ed2856118b5565b60028054601090611ef4908490600160801b90046001600160801b031661390f565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600080611f32846115fe8a888a611792565b9050611f3f888486611792565b611f49908261365d565b905086811115611f595786810391505b509695505050505050565b60006100918383670de0b6b3a7640000611792565b60006001600160701b038211156117685760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b031683811080611fe557507f0000000000000000000000000000000000000000000000000000000000000000611fe38583613670565b105b15611ff257611ff2612a4e565b6004549084900390600f0b612007848261389d565b9050836120138661173e565b13801561204857507f0000000000000000000000000000000000000000000000000000000000000000612046838361188f565b105b1561205557612055612a4e565b600354600160801b90046001600160801b0316612097611a8382612081670de0b6b3a764000088613818565b6005546001600160801b031691908c6000612b68565b600580546001600160801b0319166001600160801b03929092169190911790556120c18882613670565b90506120cc816118b5565b600380546001600160801b03928316600160801b0292169190911790556120f2836118b5565b600280546001600160801b0319166001600160801b039290921691909117905561211b826118df565b600480546001600160801b0319166001600160801b0392909216919091179055612144876118b5565b60028054601090612166908490600160801b90046001600160801b031661387d565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b6003546121af90611a83906001600160801b031684846127a9565b600380546001600160801b0319166001600160801b03929092169190911790555050565b600754600360f81b600090815260106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be73021549091829161221e916001600160801b031690613670565b9050806000036122325760019150506113c5565b600061223d85612c45565b905080600003612252576001925050506113c5565b600080612260838589612ce1565b91509150806122765760009450505050506113c5565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b81526004016122b292919061395c565b6040805180830381865af41580156122ce573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122f291906139d2565b915091506123106123028261173e565b61230b906139f6565b6128b6565b92508261232657600096505050505050506113c5565b61232f826118b5565b6007805460009061234a9084906001600160801b031661387d565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550612377816118b5565b60078054601090612399908490600160801b90046001600160801b031661387d565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e6123f687611604565b6040518263ffffffff1660e01b81526004016124129190613701565b6040805180830381865af415801561242e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124529190613a12565b9150915080612468575060009485945092505050565b60075460106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215460008080527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb015490926001600160801b0316916124ce9161365d565b6124d89190613670565b9050806000036124f057506000958695509350505050565b600080871161250057600061250b565b61250b848884611792565b976001975095505050505050565b6000606060008060008661ffff1667ffffffffffffffff81111561253f5761253f613a42565b6040519080825280601f01601f191660200182016040528015612569576020820181803683370190505b5090506000808751602089018b8e8ef191503d92508683111561258a578692505b828152826000602083013e9093509150505b9550959350505050565b6000806000836125b58661173e565b6125bf919061389d565b905060008112156125d7576000809250925050610d57565b946001945092505050565b60008060006125f48888888888612e57565b9050600061261f670de0b6b3a764000061260e8888612c06565b612618919061365d565b83906117b0565b9050670de0b6b3a764000081106126535761264c612645670de0b6b3a7640000896117b0565b8290612a67565b905061266b565b612668612645670de0b6b3a764000089612c06565b90505b61267581866117b0565b90508881101561268d5760008093509350505061259c565b97909703976001975095505050505050565b60008060006126b18989888888612e86565b90506126cb8661192c6126c48a8d61365d565b8790611f64565b98506126d8858a86611792565b9850888110156126ef5760008092509250506115cd565b888103670de0b6b3a7640000811061271d57612716612645670de0b6b3a764000089612c06565b9050612735565b612732612645670de0b6b3a7640000896117b0565b90505b8089101561274b576000809350935050506115cd565b90970398600198509650505050505050565b6000806000806000612770898789612eab565b909250905061277f8289613670565b9750600061278e82888a611792565b905061279a818b613670565b9a989950979650505050505050565b6000806127b7846000612f31565b6127c2846000612f31565b6127cc919061389d565b905060008113156127e8576127e1818661365d565b9450612807565b6000811215612807576127fa816139f6565b6128049086613670565b94505b50929392505050565b60006100918383670de0b6b3a76400005b600082600019048411830215820261283857600080fd5b50910281810615159190040190565b600080670de0b6b3a764000061285b610d5e565b6128659190613818565b905080831161287557600061287f565b61287f8184613670565b9150610091612618670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613818565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af415801561296f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906129939190613a58565b9350935093509350806129af5750600098975050505050505050565b8684146129e0576129bf846118b5565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612a11576129f0836118df565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612a3f57612a21826118b5565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b60405163bb55fd2760e01b815260040160405180910390fd5b600081600003612a805750670de0b6b3a76400006113c5565b82600003612a90575060006113c5565b6000612a9b8361173e565b90506000612ab0612aab8661173e565b612f47565b9050818102612ac7670de0b6b3a764000082613a99565b9050612ad28161316d565b9695505050505050565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b179052612b36908590613302565b50505050565b60006113c57f00000000000000000000000000000000000000000000000000000000000000008361336a565b600082600003612b79575084610078565b8115612bcc57612baa612b8c848761365d565b612b968587611f64565b612ba0888a611f64565b6115fe919061365d565b90506000612bb88588611aef565b905080821015612bc6578091505b50610078565b828503612bdb57506000610078565b610075612be88487613670565b612bf28587612810565b612bfc888a611f64565b6115fe9190613670565b600061009183670de0b6b3a764000084612821565b600060016001607f1b038211156117685760405163a5353be560e01b815260040160405180910390fd5b6003546000908190612c60906001600160801b031684612c06565b9050612c8c7f00000000000000000000000000000000000000000000000000000000000000008261365d565b6002546001600160801b03161115611889576002547f000000000000000000000000000000000000000000000000000000000000000090612cd79083906001600160801b0316613670565b6100919190613670565b612ce961352f565b600080612cf584611604565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401612d309190613701565b6040805180830381865af4158015612d4c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612d709190613a12565b9350905082612d85575060009150612e4f9050565b6000612da761158f846101600151856101400151611f6490919063ffffffff16565b612dc761158f85610120015186610100015161281090919063ffffffff16565b612dd1919061389d565b604080516101208101825285815260208082019590955260008052601085527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb015481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b6000612e638585612a67565b612e7c612e748661192c868b611f64565b859085611792565b610075919061365d565b6000612e928585612a67565b612e7c612ea38661192c868b612810565b859085612821565b600080612efb85612ef585817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000612eeb818c612c06565b612ef59190613670565b90612810565b9150612f27827f0000000000000000000000000000000000000000000000000000000000000000611f64565b9050935093915050565b6000818313612f405781610091565b5090919050565b6000808213612f695760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f19820190612fec9084901c61173e565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361318857506000919050565b680755bf798b4a1bf1e582126131b1576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190612ad274029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c61173e565b60006133176001600160a01b038416836133d6565b9050805160001415801561333c57508080602001905181019061333a9190613ac7565b155b1561198357604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b604051637bce1f8160e11b8152600481018290526000906001600160a01b0384169063f79c3f0290602401602060405180830381865afa1580156133b2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100919190613710565b60606100918383600084600080856001600160a01b031684866040516133fc9190613ae4565b60006040518083038185875af1925050503d8060008114613439576040519150601f19603f3d011682016040523d82523d6000602084013e61343e565b606091505b5091509150612ad286838360608261345e57613459826134a5565b610091565b815115801561347557506001600160a01b0384163b155b1561349e57604051639996b31560e01b81526001600160a01b0385166004820152602401613361565b5080610091565b8051156134b55780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061012001604052806135436134ce565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60006060828403121561188957600080fd5b600080600080600060a086880312156135ab57600080fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff8111156135de57600080fd5b6135ea88828901613581565b9150509295509295909350565b60008060006060848603121561360c57600080fd5b8335925060208401359150604084013567ffffffffffffffff81111561363157600080fd5b61363d86828701613581565b9150509250925092565b634e487b7160e01b600052601160045260246000fd5b808201808211156113c5576113c5613647565b818103818111156113c5576113c5613647565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b61018081016113c58284613683565b60006020828403121561372257600080fd5b5051919050565b60006020828403121561373b57600080fd5b81356001600160a01b038116811461009157600080fd5b8015158114610c3a57600080fd5b60006020828403121561377257600080fd5b813561009181613752565b6000808335601e1984360301811261379457600080fd5b83018035915067ffffffffffffffff8211156137af57600080fd5b602001915036819003821315610d5757600080fd5b878152866020820152856040820152841515606082015283608082015260c060a08201528160c0820152818360e0830137600081830160e090810191909152601f909201601f191601019695505050505050565b80820281158282048414176113c5576113c5613647565b60008060006060848603121561384457600080fd5b8351925060208401519150604084015190509250925092565b6001600160701b038181168382160190808211156118ae576118ae613647565b6001600160801b038181168382160190808211156118ae576118ae613647565b81810360008312801583831316838312821617156118ae576118ae613647565b80820182811260008312801582168215821617156138dd576138dd613647565b505092915050565b634e487b7160e01b600052601260045260246000fd5b60008261390a5761390a6138e5565b500690565b6001600160801b038281168282160390808211156118ae576118ae613647565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156113c5576113c5613647565b60006102a082019050613970828551613683565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b600080604083850312156139e557600080fd5b505080516020909101519092909150565b6000600160ff1b8201613a0b57613a0b613647565b5060000390565b60008060408385031215613a2557600080fd5b825191506020830151613a3781613752565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b60008060008060808587031215613a6e57600080fd5b8451935060208501519250604085015191506060850151613a8e81613752565b939692955090935050565b600082613aa857613aa86138e5565b600160ff1b821460001984141615613ac257613ac2613647565b500590565b600060208284031215613ad957600080fd5b815161009181613752565b6000825160005b81811015613b055760208186018101518583015201613aeb565b50600092019182525091905056fea26469706673582212200237010c8902dc6c1311279465ca2ebd3af8b5cabd8f30ae85e72c3993ae351264736f6c63430008140033',
    methodIdentifiers: {
        "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": "4c2ac1d9",
        "initialize(uint256,uint256,(address,bool,bytes))": "77d05ff4"
    }
};
