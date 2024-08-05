export const RETHTarget3 = {
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
            "type": "receive",
            "stateMutability": "payable"
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
    bytecode: '0x6102606040523480156200001257600080fd5b506040516200406e3803806200406e833981016040819052620000359162000202565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c090815260c0808601516101e090815260e0808801516102005261012080890151909352610100808901519091526101408089015190915290870180515190925281519093015190925281516040908101516101609081529251606090810151610180908152918701518616610220528601516102405291850151600980546001600160a01b031990811692871692909217905591850151600a8054841691861691909117905591840151600b80548316918516919091179055920151600c8054909316911617905562000315565b60405161020081016001600160401b03811182821017156200016a57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200018857600080fd5b919050565b600060808284031215620001a057600080fd5b604051608081016001600160401b0381118282101715620001d157634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600061026082840312156200021657600080fd5b6200022062000138565b6200022b8362000170565b81526200023b6020840162000170565b60208201526200024e6040840162000170565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140808401518183015250610160620002b981850162000170565b90820152610180620002cd84820162000170565b908201526101a0620002e184820162000170565b908201526101c0620002f584820162000170565b908201526101e06200030a858583016200018d565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161024051613b91620004dd6000396000505060005050600081816103570152818161038601526103b3015260008181610132015281816105fd01526116ed0152600081816108aa0152818161099501528181610a2801528181610b31015281816115be015281816116c70152818161200e015281816120710152818161295001528181612d1b0152612d570152600081816101930152818161091a01528181610efb01528181611482015281816114e60152818161152d01526116a101526000611c13015260008181611d6e0152612fb70152600081816110bf0152611d4201526000612f6d0152600081816101d50152818161096d01528181610f1c01528181611452015281816114b60152818161154e01526117130152600081816101b40152818161028c0152818161032c015281816107470152818161094701528181610ff701526128e60152600081816102eb01528181610dba01528181610e3501528181610eab01528181610f770152610faf015260008181603d015281816119af0152612ba9015260005050613b916000f3fe60806040526004361061002d5760003560e01c80634c2ac1d91461008257806377d05ff4146100a757600080fd5b3661007d57336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461007b576040516312171d8360e31b815260040160405180910390fd5b005b600080fd5b6100956100903660046135db565b6100ba565b60405190815260200160405180910390f35b6100956100b536600461363f565b6100d5565b60006100c986868686866100ec565b90505b95945050505050565b60006100e2848484610854565b90505b9392505050565b60006100f6610c0d565b600654610100900460ff161561011f576040516321081abf60e01b815260040160405180910390fd5b610127610c37565b61013082610c58565b7f00000000000000000000000000000000000000000000000000000000000000008610156101715760405163211ddda360e11b815260040160405180910390fd5b60006101f961017e610c91565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000610cb7565b90508481108061020857508381115b1561022657604051633b61151160e11b815260040160405180910390fd5b6000806102338986610cdd565b915091506000610241610db2565b9050610251818360046001610dde565b5060025460045460035460009283926102bb926001600160801b0380841693600f9390930b92600160801b90048116918991166102b66102b17f00000000000000000000000000000000000000000000000000000000000000008b6136a5565b6113d5565b61141f565b91509150806102dd57604051630552b01360e31b815260040160405180910390fd5b8b60006103506008826103107f0000000000000000000000000000000000000000000000000000000000000000896136b8565b81526020810191909152604001600020546001600160801b03167f000000000000000000000000000000000000000000000000000000000000000061162c565b905061037c7f0000000000000000000000000000000000000000000000000000000000000000826136a5565b8811806103db57507f0000000000000000000000000000000000000000000000000000000000000000811180156103db57506103d87f0000000000000000000000000000000000000000000000000000000000000000826136b8565b88105b156103f957604051630552b01360e31b815260040160405180910390fd5b50600754600360f81b600090815260106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be73021549091610445916001600160801b03909116906136b8565b600080805260106020527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb0154919250906104809083906136a5565b905060008060006104908a611658565b604051635f9d50ab60e11b815290915073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063bf3aa156906104ca908490600401613749565b602060405180830381865af41580156104e7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061050b9190613758565b915061051e6105198c611792565b6117c0565b6002546001600160801b03808216835260048054600f0b6020850152600160801b9092041660408084019190915251635f9d50ab60e11b815273__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9163bf3aa1569161057f91859101613749565b602060405180830381865af415801561059c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105c09190613758565b9250818310156105e35760405163184d952160e11b815260040160405180910390fd5b6105f984836105f281876136b8565b91906117e6565b9c507f00000000000000000000000000000000000000000000000000000000000000008d101561063c5760405163211ddda360e11b815260040160405180910390fd5b508f610648868e611804565b10156106675760405163c972651760e01b815260040160405180910390fd5b61068560008e600001602081019061067f9190613771565b8e611819565b61068e896118c1565b9550856106ae57604051638bdf918d60e01b815260040160405180910390fd5b600088905060008d9050368f905060008c90506000610771600260000160009054906101000a90046001600160801b03166001600160801b03166002800160009054906101000a9004600f0b600f0b600260000160109054906101000a90046001600160801b03166001600160801b031685600260010160009054906101000a90046001600160801b03166001600160801b03166102b67f00000000000000000000000000000000000000000000000000000000000000008c6102b191906136a5565b9b5090508a158061078b57506107888c60006118ce565b81125b156107a957604051630552b01360e31b815260040160405180910390fd5b600088156107c1576107bc87848b6117e6565b6107c4565b60005b90506107d36020850185613771565b6001600160a01b03167fdcc4a01cea4510bd52201cebc8cd2d47d60429b35d68329abc591a70aa2efabf868d8661081060408a0160208b016137a8565b8661081e60408c018c6137c5565b604051610831979695949392919061380c565b60405180910390a250505050505050505050505050505050506100cc6001600055565b600061085e610c0d565b610866610c37565b61086f82610c58565b60065460ff161561089357604051637983c05160e01b815260040160405180910390fd5b6000806108a08685610cdd565b90925090506108d07f00000000000000000000000000000000000000000000000000000000000000006002613860565b8210156108f057604051632afb507160e21b815260040160405180910390fd5b6006805460ff1916600117905560405163594f0e8f60e11b815260048101839052602481018290527f00000000000000000000000000000000000000000000000000000000000000006044820152606481018690527f000000000000000000000000000000000000000000000000000000000000000060848201527f000000000000000000000000000000000000000000000000000000000000000060a482015260027f000000000000000000000000000000000000000000000000000000000000000002830393506000908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063b29e1d1e9060c401606060405180830381865af41580156109fc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a209190613877565b9250925092507f0000000000000000000000000000000000000000000000000000000000000000610a5184846118e3565b1015610a705760405163216f4ab160e21b815260040160405180910390fd5b600080610a828585858960008061141f565b91509150801580610a935750600082125b15610ab157604051630552b01360e31b815260040160405180910390fd5b610aba85611909565b600280546001600160801b0319166001600160801b0392909216919091179055610ae384611933565b600480546001600160801b0319166001600160801b0392909216919091179055610b0c83611909565b600280546001600160801b03928316600160801b029216919091179055610b556000807f0000000000000000000000000000000000000000000000000000000000000000611819565b610b6d6000610b6760208c018c613771565b8a611819565b610b82610b78610db2565b8760046001610dde565b508a8a8a610b936020820182613771565b6001600160a01b03167f4931b9953a65531203c17d9abe77870a3e49d8b13af522ec3321c18b5abb8af38c858c610bd060408701602088016137a8565b87610bde60408901896137c5565b604051610bf1979695949392919061380c565b60405180910390a2505050505050505050506100e56001600055565b600260005403610c3057604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b3415610c5657604051631574f9f360e01b815260040160405180910390fd5b565b6000610c676020830183613771565b6001600160a01b031603610c8e5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b600254600454600091610cb2916001600160801b0390911690600f0b6118e3565b905090565b600080610cc68787878661196f565b9050610cd2818561162c565b979650505050505050565b81600080610cf160408501602086016137a8565b15610d1657610d0c85610d0760408701876137c5565b611986565b9093509050610d2e565b5034610d2e85610d2960408701876137c5565b6119a2565b610d366119dc565b91508015610da957604051600090339083908381818185875af1925050503d8060008114610d80576040519150601f19603f3d011682016040523d82523d6000602084013e610d85565b606091505b5050905080610da7576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b6000610cb2427f00000000000000000000000000000000000000000000000000000000000000006119ef565b600084815260086020526040812060018101546001600160801b0316151580610e0657504286115b15610e1f57600101546001600160801b031690506113cd565b6000806000610e2c610db2565b90506000610e5a7f00000000000000000000000000000000000000000000000000000000000000008b6136a5565b90505b81811015610ed0576000818152600860205260409020600101546001600160801b03168015610ea8576000828152600860205260409020549094506001600160801b03169250610ed0565b507f000000000000000000000000000000000000000000000000000000000000000001610e5d565b83600003610f4357889350610f40610ee6610c91565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061196f565b92505b50610f4d83611909565b6001850180546001600160801b0319166001600160801b0392909216919091179055610fa3610f9c7f00000000000000000000000000000000000000000000000000000000000000008b6136b8565b8a84611a05565b610fe189610fdb610fd47f0000000000000000000000000000000000000000000000000000000000000000836136a5565b4290611b43565b84611a05565b610fea88611b52565b506000905060088161101c7f00000000000000000000000000000000000000000000000000000000000000008d6136b8565b815260208101919091526040016000908120600101546001600160801b0316915061104860028c611cf6565b6000818152601060205260408120549192508c8c831561118e576001925060008061107786898d866000611d2b565b9150915080600d600082825461108d91906136a5565b909155506110a99050866000846110a381611792565b88611dfa565b6110b381836136a5565b91506110e386838a8e877f0000000000000000000000000000000000000000000000000000000000000000611f74565b91506110f76110f28385611fb8565b611fcd565b600680546002906111189084906201000090046001600160701b03166138a5565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061114582611909565b60068054601090611167908490600160801b90046001600160801b03166138c5565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b600061119b600184611cf6565b60008181526010602052604090205490915080156112aa57600194506000806111c8838b8f886001611d2b565b9150915080600d60008282546111de91906136a5565b909155506111fa9050836000846111f481611792565b8a611ff7565b61120481836136b8565b91506112136110f28387611fb8565b600680546002906112349084906201000090046001600160701b03166138a5565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061126182611909565b60068054601090611283908490600160801b90046001600160801b03166138c5565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b84156112e4576112d66112bc87611792565b6112c583611792565b6112cf91906138e5565b60006121e8565b8e6112e18482612227565b50505b60006112ef84612421565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a2600c546001600160a01b0316156113bd578e6113b95a604051336024820152604481018990528315156064820152600090819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b179052600c546001600160a01b03169392919061256d565b5050505b50999b5050505050505050505050505b949350505050565b60006113fd601060006113e9600286611cf6565b815260200190815260200160002054611792565b61140f601060006113e9600187611cf6565b61141991906138e5565b92915050565b60008060008061142f8a8a6125fa565b915091508061144657600080935093505050611621565b60006114a6838a61147f7f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a76400006136b8565b8b7f0000000000000000000000000000000000000000000000000000000000000000612636565b509050600061150a848b846114e37f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a76400006136b8565b8d7f00000000000000000000000000000000000000000000000000000000000000006126f3565b509050811580611518575080155b15611524575060009050805b6000611572858c7f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061196f565b905061158083838c846127b1565b5090935060009050611592848f6136a5565b905060006115b38b8b6115a487611792565b6115ae908e613905565b6127fd565b90508b6115e86115e37f000000000000000000000000000000000000000000000000000000000000000083612864565b611792565b6115f183611792565b6115fe6115e38685611fb8565b61160891906138e5565b61161291906138e5565b60019950995050505050505050505b965096945050505050565b60006100e561164084846301e13380612875565b61165285670de0b6b3a76400006136b8565b90611804565b611660613516565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526003540482166101008201526005549091610120830191611758911661289b565b81526004546001600160801b03600160801b918290048116602084015260055460409093019261178a9290041661289b565b905292915050565b60006001600160ff1b038211156117bc5760405163396ea70160e11b815260040160405180910390fd5b5090565b6117c98161290a565b610c8e57604051635044b7f560e01b815260040160405180910390fd5b60008260001904841183021582026117fd57600080fd5b5091020490565b60006100e583670de0b6b3a7640000846117e6565b6000838152600f602090815260408083206001600160a01b03861684529091528120805483929061184b9084906136a5565b90915550506000838152601060205260408120805483929061186e9084906136a5565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b6000611419826004612227565b60008183136118dd57826100e5565b50919050565b6000806118f084846125fa565b90925090508061190257611902612aa2565b5092915050565b60006001600160801b038211156117bc57604051630f0af95160e11b815260040160405180910390fd5b600060016001607f1b0319821280611951575060016001607f1b0382135b156117bc5760405163a5353be560e01b815260040160405180910390fd5b60006100cc826119808588886117e6565b90612abb565b60008060405163350b944160e11b815260040160405180910390fd5b6119d76001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333086612b30565b505050565b6000610cb2670de0b6b3a7640000612b90565b60006119fb8284613943565b6100e590846136b8565b600083815260086020526040902054600160801b90046001600160801b0316808303611a315750505050565b6000848152600860205260408120546001600160801b031690819003611a8b57611a5a83611909565b600086815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055611b09565b611adc611ad7670de0b6b3a7640000611aa488866136b8565b611aae9190613860565b85670de0b6b3a7640000611ac2878a6136b8565b611acc9190613860565b859291906001612c1c565b611909565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b611b1284611909565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b60008183116118dd57826100e5565b6006546000908190611b75908490600160801b90046001600160801b0316611fb8565b6006546201000090046001600160701b03169250905081811115611cf1576000611b9f83836136b8565b9050611bae611ad78286612cba565b60068054601090611bd0908490600160801b90046001600160801b0316613957565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611c09858361180490919063ffffffff16565b90506000611c37827f0000000000000000000000000000000000000000000000000000000000000000611fb8565b905080600d6000828254611c4b91906136a5565b90915550611c5b905081836136b8565b9150611c6682611909565b60028054600090611c819084906001600160801b03166138c5565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611cae82612ccf565b60048054600090611cc3908490600f0b613977565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60006001600160f81b03821115611d205760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b600080611d388785611804565b91506000611d66837f0000000000000000000000000000000000000000000000000000000000000000611fb8565b9050611d92817f0000000000000000000000000000000000000000000000000000000000000000611fb8565b91508315611db557611da482826136b8565b611dae90846136b8565b9250611dcc565b611dbf82826136b8565b611dc990846136a5565b92505b86861015611def57611ddf8387896117e6565b9250611dec8287896117e6565b91505b509550959350505050565b600454600160801b90046001600160801b0316611e43611ad782611e26670de0b6b3a764000086613860565b600554600160801b90046001600160801b031691908a6000612c1c565b600580546001600160801b03928316600160801b029216919091179055611e6986611909565b611e739082613957565b600480546001600160801b03928316600160801b029216919091179055611e9984611909565b60028054600090611eb49084906001600160801b03166138c5565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611ee183611933565b60048054600090611ef6908490600f0b613977565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611f2685611909565b60028054601090611f48908490600160801b90046001600160801b0316613957565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600080611f86846116528a888a6117e6565b9050611f938884866117e6565b611f9d90826136a5565b905086811115611fad5786810391505b509695505050505050565b60006100e58383670de0b6b3a76400006117e6565b60006001600160701b038211156117bc5760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b03168381108061203957507f000000000000000000000000000000000000000000000000000000000000000061203785836136b8565b105b1561204657612046612aa2565b6004549084900390600f0b61205b84826138e5565b90508361206786611792565b13801561209c57507f000000000000000000000000000000000000000000000000000000000000000061209a83836118e3565b105b156120a9576120a9612aa2565b600354600160801b90046001600160801b03166120eb611ad7826120d5670de0b6b3a764000088613860565b6005546001600160801b031691908c6000612c1c565b600580546001600160801b0319166001600160801b039290921691909117905561211588826136b8565b905061212081611909565b600380546001600160801b03928316600160801b02921691909117905561214683611909565b600280546001600160801b0319166001600160801b039290921691909117905561216f82611933565b600480546001600160801b0319166001600160801b039290921691909117905561219887611909565b600280546010906121ba908490600160801b90046001600160801b03166138c5565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60035461220390611ad7906001600160801b031684846127fd565b600380546001600160801b0319166001600160801b03929092169190911790555050565b600754600360f81b600090815260106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215490918291612272916001600160801b0316906136b8565b905080600003612286576001915050611419565b600061229185612cf9565b9050806000036122a657600192505050611419565b6000806122b4838589612d95565b91509150806122ca576000945050505050611419565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b81526004016123069291906139a4565b6040805180830381865af4158015612322573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123469190613a1a565b9150915061236461235682611792565b61235f90613a3e565b61290a565b92508261237a5760009650505050505050611419565b61238382611909565b6007805460009061239e9084906001600160801b03166138c5565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506123cb81611909565b600780546010906123ed908490600160801b90046001600160801b03166138c5565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e61244a87611658565b6040518263ffffffff1660e01b81526004016124669190613749565b6040805180830381865af4158015612482573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124a69190613a5a565b91509150806124bc575060009485945092505050565b60075460106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215460008080527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb015490926001600160801b031691612522916136a5565b61252c91906136b8565b90508060000361254457506000958695509350505050565b600080871161255457600061255f565b61255f8488846117e6565b976001975095505050505050565b6000606060008060008661ffff1667ffffffffffffffff81111561259357612593613a8a565b6040519080825280601f01601f1916602001820160405280156125bd576020820181803683370190505b5090506000808751602089018b8e8ef191503d9250868311156125de578692505b828152826000602083013e9093509150505b9550959350505050565b60008060008361260986611792565b61261391906138e5565b9050600081121561262b576000809250925050610dab565b946001945092505050565b60008060006126488888888888612f0b565b90506000612673670de0b6b3a76400006126628888612cba565b61266c91906136a5565b8390611804565b9050670de0b6b3a764000081106126a7576126a0612699670de0b6b3a764000089611804565b8290612abb565b90506126bf565b6126bc612699670de0b6b3a764000089612cba565b90505b6126c98186611804565b9050888110156126e1576000809350935050506125f0565b97909703976001975095505050505050565b60008060006127058989888888612f3a565b905061271f866119806127188a8d6136a5565b8790611fb8565b985061272c858a866117e6565b985088811015612743576000809250925050611621565b888103670de0b6b3a764000081106127715761276a612699670de0b6b3a764000089612cba565b9050612789565b612786612699670de0b6b3a764000089611804565b90505b8089101561279f57600080935093505050611621565b90970398600198509650505050505050565b60008060008060006127c4898789612f5f565b90925090506127d382896136b8565b975060006127e282888a6117e6565b90506127ee818b6136b8565b9a989950979650505050505050565b60008061280b846000612fe5565b612816846000612fe5565b61282091906138e5565b9050600081131561283c5761283581866136a5565b945061285b565b600081121561285b5761284e81613a3e565b61285890866136b8565b94505b50929392505050565b60006100e58383670de0b6b3a76400005b600082600019048411830215820261288c57600080fd5b50910281810615159190040190565b600080670de0b6b3a76400006128af610db2565b6128b99190613860565b90508083116128c95760006128d3565b6128d381846136b8565b91506100e561266c670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613860565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af41580156129c3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906129e79190613aa0565b935093509350935080612a035750600098975050505050505050565b868414612a3457612a1384611909565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612a6557612a4483611933565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612a9357612a7582611909565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b60405163bb55fd2760e01b815260040160405180910390fd5b600081600003612ad45750670de0b6b3a7640000611419565b82600003612ae457506000611419565b6000612aef83611792565b90506000612b04612aff86611792565b612ffb565b9050818102612b1b670de0b6b3a764000082613ae1565b9050612b2681613221565b9695505050505050565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b179052612b8a9085906133b6565b50505050565b604051638b32fa2360e01b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690638b32fa2390602401602060405180830381865afa158015612bf8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114199190613758565b600082600003612c2d5750846100cc565b8115612c8057612c5e612c4084876136a5565b612c4a8587611fb8565b612c54888a611fb8565b61165291906136a5565b90506000612c6c8588611b43565b905080821015612c7a578091505b506100cc565b828503612c8f575060006100cc565b6100c9612c9c84876136b8565b612ca68587612864565b612cb0888a611fb8565b61165291906136b8565b60006100e583670de0b6b3a764000084612875565b600060016001607f1b038211156117bc5760405163a5353be560e01b815260040160405180910390fd5b6003546000908190612d14906001600160801b031684612cba565b9050612d407f0000000000000000000000000000000000000000000000000000000000000000826136a5565b6002546001600160801b031611156118dd576002547f000000000000000000000000000000000000000000000000000000000000000090612d8b9083906001600160801b03166136b8565b6100e591906136b8565b612d9d613577565b600080612da984611658565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401612de49190613749565b6040805180830381865af4158015612e00573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612e249190613a5a565b9350905082612e39575060009150612f039050565b6000612e5b6115e3846101600151856101400151611fb890919063ffffffff16565b612e7b6115e385610120015186610100015161286490919063ffffffff16565b612e8591906138e5565b604080516101208101825285815260208082019590955260008052601085527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb015481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b6000612f178585612abb565b612f30612f2886611980868b611fb8565b8590856117e6565b6100c991906136a5565b6000612f468585612abb565b612f30612f5786611980868b612864565b859085612875565b600080612faf85612fa985817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000612f9f818c612cba565b612fa991906136b8565b90612864565b9150612fdb827f0000000000000000000000000000000000000000000000000000000000000000611fb8565b9050935093915050565b6000818313612ff457816100e5565b5090919050565b600080821361301d5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906130a09084901c611792565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361323c57506000919050565b680755bf798b4a1bf1e58212613265576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190612b2674029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611792565b60006133cb6001600160a01b0384168361341e565b905080516000141580156133f05750808060200190518101906133ee9190613b0f565b155b156119d757604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b60606100e58383600084600080856001600160a01b031684866040516134449190613b2c565b60006040518083038185875af1925050503d8060008114613481576040519150601f19603f3d011682016040523d82523d6000602084013e613486565b606091505b5091509150612b268683836060826134a6576134a1826134ed565b6100e5565b81511580156134bd57506001600160a01b0384163b155b156134e657604051639996b31560e01b81526001600160a01b0385166004820152602401613415565b50806100e5565b8051156134fd5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60405180610120016040528061358b613516565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000606082840312156118dd57600080fd5b600080600080600060a086880312156135f357600080fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff81111561362657600080fd5b613632888289016135c9565b9150509295509295909350565b60008060006060848603121561365457600080fd5b8335925060208401359150604084013567ffffffffffffffff81111561367957600080fd5b613685868287016135c9565b9150509250925092565b634e487b7160e01b600052601160045260246000fd5b808201808211156114195761141961368f565b818103818111156114195761141961368f565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b610180810161141982846136cb565b60006020828403121561376a57600080fd5b5051919050565b60006020828403121561378357600080fd5b81356001600160a01b03811681146100e557600080fd5b8015158114610c8e57600080fd5b6000602082840312156137ba57600080fd5b81356100e58161379a565b6000808335601e198436030181126137dc57600080fd5b83018035915067ffffffffffffffff8211156137f757600080fd5b602001915036819003821315610dab57600080fd5b878152866020820152856040820152841515606082015283608082015260c060a08201528160c0820152818360e0830137600081830160e090810191909152601f909201601f191601019695505050505050565b80820281158282048414176114195761141961368f565b60008060006060848603121561388c57600080fd5b8351925060208401519150604084015190509250925092565b6001600160701b038181168382160190808211156119025761190261368f565b6001600160801b038181168382160190808211156119025761190261368f565b81810360008312801583831316838312821617156119025761190261368f565b80820182811260008312801582168215821617156139255761392561368f565b505092915050565b634e487b7160e01b600052601260045260246000fd5b6000826139525761395261392d565b500690565b6001600160801b038281168282160390808211156119025761190261368f565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156114195761141961368f565b60006102a0820190506139b88285516136cb565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215613a2d57600080fd5b505080516020909101519092909150565b6000600160ff1b8201613a5357613a5361368f565b5060000390565b60008060408385031215613a6d57600080fd5b825191506020830151613a7f8161379a565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b60008060008060808587031215613ab657600080fd5b8451935060208501519250604085015191506060850151613ad68161379a565b939692955090935050565b600082613af057613af061392d565b600160ff1b821460001984141615613b0a57613b0a61368f565b500590565b600060208284031215613b2157600080fd5b81516100e58161379a565b6000825160005b81811015613b4d5760208186018101518583015201613b33565b50600092019182525091905056fea26469706673582212203d0ce87a429f1708f7003a514ca1e67bf5b26b1af7067e8fc73c7471bde67d9664736f6c63430008140033',
    methodIdentifiers: {
        "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": "4c2ac1d9",
        "initialize(uint256,uint256,(address,bool,bytes))": "77d05ff4"
    }
};
