export const LsETHTarget3 = {
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
            "inputs": [
                {
                    "internalType": "address",
                    "name": "target",
                    "type": "address"
                }
            ],
            "name": "AddressEmptyCode",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "AddressInsufficientBalance",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "BelowMinimumContribution",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "CircuitBreakerTriggered",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "DecreasedPresentValueWhenAddingLiquidity",
            "type": "error"
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
            "name": "FailedInnerCall",
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
            "name": "InvalidApr",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "InvalidCheckpointTime",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "InvalidEffectiveShareReserves",
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
            "name": "NotPayable",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "OutputLimit",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "PoolAlreadyInitialized",
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
            "inputs": [
                {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                }
            ],
            "name": "SafeERC20FailedOperation",
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
            "inputs": [],
            "name": "UnsupportedToken",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "UpdateLiquidityFailed",
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
                    "name": "_contribution",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minLpSharePrice",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minApr",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_maxApr",
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
            "name": "addLiquidity",
            "outputs": [
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
                    "name": "_checkpointTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_maxIterations",
                    "type": "uint256"
                }
            ],
            "name": "checkpoint",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_contribution",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_apr",
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
            "name": "initialize",
            "outputs": [
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
                    "name": "_withdrawalShares",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minOutputPerShare",
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
            "name": "redeemWithdrawalShares",
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
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_lpShares",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minOutputPerShare",
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
            "name": "removeLiquidity",
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
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
    bytecode: '0x6102606040523480156200001257600080fd5b5060405162003f5a38038062003f5a8339810160408190526200003591620001ec565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c090815260c0808601516101e05260e08087015161020052610120808801519092526101008088015190915261014080880151909152918601805151909152805190920151905280516040908101516101609081529151606090810151610180908152918601518516610220528501516102405290840151600a80546001600160a01b031990811692861692909217905590840151600880548316918516919091179055920151600980549093169116179055620002eb565b6040516101e081016001600160401b03811182821017156200015457634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200017257600080fd5b919050565b6000608082840312156200018a57600080fd5b604051608081016001600160401b0381118282101715620001bb57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600061024082840312156200020057600080fd5b6200020a62000122565b62000215836200015a565b815262000225602084016200015a565b602082015262000238604084016200015a565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140808401518183015250610160620002a38185016200015a565b90820152610180620002b78482016200015a565b908201526101a0620002cb8482016200015a565b908201526101c0620002e08585830162000177565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161024051613ae1620004796000396000505060005050600081816104a9015281816104d801526105050152600081816103420152818161075001528181610c4e015261197c01526000818161090d015281816109f801528181610a8b01528181610b5301528181611956015281816124cc0152818161252f0152818161282a015281816128660152612a5c0152600081816103a30152818161097d01528181610eca0152611930015260006120d10152600061222c01526000818161114d0152612200015260005050600081816103e5015281816109d001528181610eeb01526119a20152600081816103c40152818161047e015281816109aa015281816110850152612c7001526000818161029401528181610e2101528181610f1d01528181610fa401528181611005015261103d015260008181611e3201528181612bd701528181612e710152612ed0015260005050613ae16000f3fe60806040526004361061004a5760003560e01c8063074a6de91461004f578063414f826d146100895780634c2ac1d9146100ab57806377d05ff4146100cc578063cbc13434146100df575b600080fd5b34801561005b57600080fd5b5061006f61006a366004613575565b6100ff565b604080519283526020830191909152015b60405180910390f35b34801561009557600080fd5b506100a96100a43660046135c5565b61011a565b005b6100be6100b93660046135e7565b610128565b604051908152602001610080565b6100be6100da366004613575565b610143565b3480156100eb57600080fd5b5061006f6100fa366004613575565b61015a565b60008061010d858585610168565b915091505b935093915050565b610124828261023d565b5050565b600061013786868686866102fc565b90505b95945050505050565b60006101508484846108b7565b90505b9392505050565b60008061010d858585610c38565b600080610173610d9f565b61017c83610dc9565b6000610186610e02565b905061019b610193610e1a565b826004610e50565b506101a933878388886113e5565b90935091506101bb602085018561364b565b6001600160a01b0316337f4ce1e73a001c994d4d884cd1e382579f9c1e81eccf26e70ece8caa1b60a8c2cf846101f287868a611528565b6101fd88878b611557565b61020d60408b0160208c01613682565b604080519485526020850193909352918301521515606082015260800160405180910390a3506101126001600055565b610245610d9f565b600061024f610e02565b6000848152600760205260409020600101549091506001600160801b0316156102835761027c818361157f565b50506102f2565b600061028d610e1a565b90506102b97f0000000000000000000000000000000000000000000000000000000000000000856136b5565b1515806102c557508381105b156102e35760405163ecd29e8160e01b815260040160405180910390fd5b6102ee848385610e50565b5050505b6101246001600055565b6000610306610d9f565b600554610100900460ff161561032f576040516321081abf60e01b815260040160405180910390fd5b61033761177a565b61034082610dc9565b7f00000000000000000000000000000000000000000000000000000000000000008610156103815760405163211ddda360e11b815260040160405180910390fd5b600061040961038e61179b565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006117bc565b90508481108061041857508381115b1561043657604051633b61151160e11b815260040160405180910390fd5b60008061044389866117e2565b915091506000610451610e1a565b905061045f81836004610e50565b506000818152600760205260408120546104a2906001600160801b03167f00000000000000000000000000000000000000000000000000000000000000006118bb565b90506104ce7f0000000000000000000000000000000000000000000000000000000000000000826136df565b85118061052d57507f00000000000000000000000000000000000000000000000000000000000000008111801561052d575061052a7f0000000000000000000000000000000000000000000000000000000000000000826136f2565b85105b1561054b57604051630552b01360e31b815260040160405180910390fd5b50600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e9549091610597916001600160801b03909116906136f2565b6000808052600e6020527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54919250906105d29083906136df565b905060008060006105e2876118e7565b604051635f9d50ab60e11b815290915073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063bf3aa1569061061c908490600401613783565b602060405180830381865af4158015610639573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061065d9190613792565b915061067061066b89611a21565b611a4f565b6001546001600160801b038082168352600354600f0b6020840152600160801b9091041660408083019190915251635f9d50ab60e11b815273__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063bf3aa156906106d2908490600401613783565b602060405180830381865af41580156106ef573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107139190613792565b9250818310156107365760405163184d952160e11b815260040160405180910390fd5b61074c848361074581876136f2565b9190611a75565b99507f00000000000000000000000000000000000000000000000000000000000000008a101561078f5760405163211ddda360e11b815260040160405180910390fd5b508d8d61079c828c611a93565b10156107bb5760405163c972651760e01b815260040160405180910390fd5b6107d360006107cd60208e018e61364b565b8c611aa8565b60006107de88611b51565b9050806107fe57604051638bdf918d60e01b815260040160405180910390fd5b60008515610815576108108487611a93565b610818565b60005b90508c6000610828858c84611528565b9050610837602083018361364b565b6001600160a01b03167fa59daf574c5c8db34377de83bceea2aa1433cc506d656f5e8f46e5f4b5c58a868f838f6108746040880160208901613682565b60408051948552602085019390935291830152151560608201526080810186905260a00160405180910390a25050505050505050505050505061013a6001600055565b60006108c1610d9f565b6108c961177a565b6108d282610dc9565b60055460ff16156108f657604051637983c05160e01b815260040160405180910390fd5b60008061090386856117e2565b90925090506109337f000000000000000000000000000000000000000000000000000000000000000060026137ab565b82101561095357604051632afb507160e21b815260040160405180910390fd5b6005805460ff1916600117905560405163594f0e8f60e11b815260048101839052602481018290527f00000000000000000000000000000000000000000000000000000000000000006044820152606481018690527f000000000000000000000000000000000000000000000000000000000000000060848201527f000000000000000000000000000000000000000000000000000000000000000060a482015260027f000000000000000000000000000000000000000000000000000000000000000002830393506000908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063b29e1d1e9060c401606060405180830381865af4158015610a5f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a8391906137c2565b9250925092507f0000000000000000000000000000000000000000000000000000000000000000610ab48484611b5e565b1015610ad35760405163216f4ab160e21b815260040160405180910390fd5b610adc83611b84565b600180546001600160801b0319166001600160801b0392909216919091179055610b0582611bae565b600380546001600160801b0319166001600160801b0392909216919091179055610b2e81611b84565b600180546001600160801b03928316600160801b029216919091179055610b776000807f0000000000000000000000000000000000000000000000000000000000000000611aa8565b610b8f6000610b8960208a018a61364b565b88611aa8565b610ba2610b9a610e1a565b856004610e50565b506000610bb08a868a611528565b9050610bbf602089018961364b565b6001600160a01b03167fdfe2bf9f580df5ec15438120ffa6f0603237c4e6b65d07140a4695317da4f952888389610bfc60408e0160208f01613682565b6040805194855260208501939093529183015215156060820152608081018c905260a00160405180910390a25050505050506101536001600055565b600080610c43610d9f565b610c4c83610dc9565b7f0000000000000000000000000000000000000000000000000000000000000000851015610c8d5760405163211ddda360e11b815260040160405180910390fd5b6000610c97610e02565b9050610ca4610193610e1a565b50610cb160003388611bea565b610cc6600360f81b610b89602087018761364b565b6000610ce1610cd8602087018761364b565b888489896113e5565b9094509050610cf081886136f2565b92506000610cfd83611cbb565b509050610d0d602087018761364b565b6001600160a01b0316337f56e07298e87dce53d3298b9775b947b87b39b2dde51df86371f0540885da83c98a610d4489888c611528565b610d4f8a898d611557565b610d5f60408d0160208e01613682565b60408051948552602085019390935291830152151560608201526080810188905260a0810185905260c00160405180910390a35050506101126001600055565b600260005403610dc257604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b6000610dd8602083018361364b565b6001600160a01b031603610dff5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b6000610e15670de0b6b3a7640000611e19565b905090565b6000610e467f0000000000000000000000000000000000000000000000000000000000000000426136b5565b610e1590426136f2565b600083815260076020526040812060018101546001600160801b0316151580610e7857504285115b15610e9157600101546001600160801b03169050610153565b6000806000610e9e610e1a565b9050808803610f1657869250610f0f610eb561179b565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611ea6565b9150610fd2565b6000610f427f00000000000000000000000000000000000000000000000000000000000000008a6136df565b90505b818103610f5d57879350610f5a610eb561179b565b92505b6000818152600760205260409020600101546001600160801b031693508315610f9f576000818152600760205260409020546001600160801b03169250610fd0565b610fc97f0000000000000000000000000000000000000000000000000000000000000000826136df565b9050610f45565b505b610fdb83611b84565b6001850180546001600160801b0319166001600160801b039290921691909117905561103161102a7f00000000000000000000000000000000000000000000000000000000000000008a6136f2565b8984611ebd565b61106f886110696110627f0000000000000000000000000000000000000000000000000000000000000000836136df565b4290611ffb565b84611ebd565b61107887612010565b50600090506007816110aa7f00000000000000000000000000000000000000000000000000000000000000008c6136f2565b815260208101919091526040016000908120600101546001600160801b031691506110d660028b6121b4565b6000818152600e60205260408120549192508b8b831561121c576001925060008061110586898d8660006121e9565b9150915080600b600082825461111b91906136df565b9091555061113790508660008461113181611a21565b886122b8565b61114181836136df565b915061117186838a8e877f0000000000000000000000000000000000000000000000000000000000000000612432565b91506111856111808385612476565b61248b565b600580546002906111a69084906201000090046001600160701b03166137f0565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506111d382611b84565b600580546010906111f5908490600160801b90046001600160801b0316613810565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b60006112296001846121b4565b6000818152600e602052604090205490915080156113385760019450600080611256838b8f8860016121e9565b9150915080600b600082825461126c91906136df565b9091555061128890508360008461128281611a21565b8a6124b5565b61129281836136f2565b91506112a16111808387612476565b600580546002906112c29084906201000090046001600160701b03166137f0565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506112ef82611b84565b60058054601090611311908490600160801b90046001600160801b0316613810565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b84156113705761136461134a87611a21565b61135383611a21565b61135d9190613830565b60006126a6565b61136e838f61157f565b505b600061137b84611cbb565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a250999f9e505050505050505050505050505050565b6000806113f185611b51565b505060065485906001600160801b03168082111561141657806001600160801b031691505b8160000361142b57600080925092505061151e565b61143a600360f81b8984611bea565b6006546000906114609084906001600160801b03600160801b9091048116908516611a75565b905061146b83611b84565b6114759083613850565b600680546001600160801b0319166001600160801b039290921691909117905561149e81611b84565b600680546010906114c0908490600160801b90046001600160801b0316613850565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506114ef818887612759565b93506114fb86846127f3565b84101561151b5760405163c972651760e01b815260040160405180910390fd5b50505b9550959350505050565b600061153a6040830160208401613682565b15611546575082610153565b6115508484612476565b9050610153565b60006115696040830160208401613682565b15611578576115508484611a93565b5082610153565b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e954909182916115ca916001600160801b0316906136f2565b9050806000036115de576001915050611774565b60006115e985612808565b9050806000036115fe57600192505050611774565b60008061160c8385896128a4565b9150915080611622576000945050505050611774565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b815260040161165e929190613870565b6040805180830381865af415801561167a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061169e91906138e6565b915091506116bc6116ae82611a21565b6116b79061390a565b612a18565b9250826116d25760009650505050505050611774565b6116db82611b84565b600680546000906116f69084906001600160801b0316613810565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061172381611b84565b60068054601090611745908490600160801b90046001600160801b0316613810565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600196505050505050505b92915050565b341561179957604051631574f9f360e01b815260040160405180910390fd5b565b600154600354600091610e15916001600160801b0390911690600f0b611b5e565b6000806117cb87878786611ea6565b90506117d781856118bb565b979650505050505050565b600080806117f66040850160208601613682565b1561181b576118118561180c6040870187613926565b612bae565b9093509050611837565b50346118338561182e6040870187613926565b612bca565b8492505b61183f610e02565b915080156118b257604051600090339083908381818185875af1925050503d8060008114611889576040519150601f19603f3d011682016040523d82523d6000602084013e61188e565b606091505b50509050806118b0576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b60006101536118cf84846301e13380612bff565b6118e185670de0b6b3a76400006136f2565b90611a93565b6118ef6134b0565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e083015260025404821661010082015260045490916101208301916119e79116612c25565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192611a1992900416612c25565b905292915050565b60006001600160ff1b03821115611a4b5760405163396ea70160e11b815260040160405180910390fd5b5090565b611a5881612a18565b610dff57604051635044b7f560e01b815260040160405180910390fd5b6000826000190484118302158202611a8c57600080fd5b5091020490565b600061015383670de0b6b3a764000084611a75565b6000838152600d602090815260408083206001600160a01b038616845290915281208054839290611ada9084906136df565b90915550506000838152600e602052604081208054839290611afd9084906136df565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b600061177482600461157f565b600080611b6b8484612c9b565b909250905080611b7d57611b7d612cd7565b5092915050565b60006001600160801b03821115611a4b57604051630f0af95160e11b815260040160405180910390fd5b600060016001607f1b0319821280611bcc575060016001607f1b0382135b15611a4b5760405163a5353be560e01b815260040160405180910390fd5b6000838152600d602090815260408083206001600160a01b0386168452909152902054811115611c2d57604051631e9acf1760e31b815260040160405180910390fd5b6000838152600d602090815260408083206001600160a01b0386168452825280832080548590039055858352600e90915281208054839290611c709084906136f2565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101611b44565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e611ce4876118e7565b6040518263ffffffff1660e01b8152600401611d009190613783565b6040805180830381865af4158015611d1c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d40919061396d565b9150915080611d56575060009485945092505050565b6000808611611d66576000611d70565b611d708387612476565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b0390921691611ddb91906136df565b611de591906136f2565b905080600003611dfe5750600096879650945050505050565b6000611e0a8383611a93565b98600198509650505050505050565b604051637bce1f8160e11b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063f79c3f02906024015b602060405180830381865afa158015611e82573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117749190613792565b600061013a82611eb7858888611a75565b90612cf0565b600083815260076020526040902054600160801b90046001600160801b0316808303611ee95750505050565b6000848152600760205260408120546001600160801b031690819003611f4357611f1283611b84565b600086815260076020526040902080546001600160801b0319166001600160801b0392909216919091179055611fc1565b611f94611f8f670de0b6b3a7640000611f5c88866136f2565b611f6691906137ab565b85670de0b6b3a7640000611f7a878a6136f2565b611f8491906137ab565b859291906001612d65565b611b84565b600086815260076020526040902080546001600160801b0319166001600160801b03929092169190911790555b611fca84611b84565b60009586526007602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600081831161200a5782610153565b50919050565b6005546000908190612033908490600160801b90046001600160801b0316612476565b6005546201000090046001600160701b031692509050818111156121af57600061205d83836136f2565b905061206c611f8f8286612e03565b6005805460109061208e908490600160801b90046001600160801b0316613850565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006120c78583611a9390919063ffffffff16565b905060006120f5827f0000000000000000000000000000000000000000000000000000000000000000612476565b905080600b600082825461210991906136df565b90915550612119905081836136f2565b915061212482611b84565b6001805460009061213f9084906001600160801b0316613810565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061216c82612e18565b60038054600090612181908490600f0b61399d565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60006001600160f81b038211156121de5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000806121f68785611a93565b91506000612224837f0000000000000000000000000000000000000000000000000000000000000000612476565b9050612250817f0000000000000000000000000000000000000000000000000000000000000000612476565b915083156122735761226282826136f2565b61226c90846136f2565b925061228a565b61227d82826136f2565b61228790846136df565b92505b868610156122ad5761229d838789611a75565b92506122aa828789611a75565b91505b509550959350505050565b600354600160801b90046001600160801b0316612301611f8f826122e4670de0b6b3a7640000866137ab565b600454600160801b90046001600160801b031691908a6000612d65565b600480546001600160801b03928316600160801b02921691909117905561232786611b84565b6123319082613850565b600380546001600160801b03928316600160801b02921691909117905561235784611b84565b600180546000906123729084906001600160801b0316613810565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061239f83611bae565b600380546000906123b4908490600f0b61399d565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506123e485611b84565b60018054601090612406908490600160801b90046001600160801b0316613850565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600080612444846118e18a888a611a75565b9050612451888486611a75565b61245b90826136df565b90508681111561246b5786810391505b509695505050505050565b60006101538383670de0b6b3a7640000611a75565b60006001600160701b03821115611a4b5760405163086b151760e11b815260040160405180910390fd5b6001546001600160801b0316838110806124f757507f00000000000000000000000000000000000000000000000000000000000000006124f585836136f2565b105b1561250457612504612cd7565b6003549084900390600f0b6125198482613830565b90508361252586611a21565b13801561255a57507f00000000000000000000000000000000000000000000000000000000000000006125588383611b5e565b105b1561256757612567612cd7565b600254600160801b90046001600160801b03166125a9611f8f82612593670de0b6b3a7640000886137ab565b6004546001600160801b031691908c6000612d65565b600480546001600160801b0319166001600160801b03929092169190911790556125d388826136f2565b90506125de81611b84565b600280546001600160801b03928316600160801b02921691909117905561260483611b84565b600180546001600160801b0319166001600160801b039290921691909117905561262d82611bae565b600380546001600160801b0319166001600160801b039290921691909117905561265687611b84565b60018054601090612678908490600160801b90046001600160801b0316613810565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60006126cf6126b58483612e42565b6126c0846000612e42565b6126ca9190613830565b611bae565b9050600081600f0b131561272457600280548291906000906126fb9084906001600160801b0316613810565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b121561275457612739816139ca565b600280546000906126fb9084906001600160801b0316613850565b505050565b6000806127668585612476565b905061277181612e58565b945084600003612785576000915050610153565b6127956040840160208501613682565b156127c4576127bd856127ab602086018661364b565b6127b86040870187613926565b612ea8565b91506127eb565b6127e7856127d5602086018661364b565b6127e26040870187613926565b612ec3565b8491505b509392505050565b60006101538383670de0b6b3a7640000612bff565b6002546000908190612823906001600160801b031684612e03565b905061284f7f0000000000000000000000000000000000000000000000000000000000000000826136df565b6001546001600160801b0316111561200a576001547f00000000000000000000000000000000000000000000000000000000000000009061289a9083906001600160801b03166136f2565b61015391906136f2565b6128ac613511565b6000806128b8846118e7565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b81526004016128f39190613783565b6040805180830381865af415801561290f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612933919061396d565b93509050826129485750600091506101129050565b600061296f61296a84610160015185610140015161247690919063ffffffff16565b611a21565b61298f61296a8561012001518661010001516127f390919063ffffffff16565b6129999190613830565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b60015460035460405163685a2be760e11b81526001600160801b0380841660048301819052600f9390930b60248301819052600160801b90940416604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612acf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612af391906139f0565b935093509350935080612b0f5750600098975050505050505050565b868414612b4057612b1f84611b84565b600180546001600160801b0319166001600160801b03929092169190911790555b858314612b7157612b5083611bae565b600380546001600160801b0319166001600160801b03929092169190911790555b848214612b9f57612b8182611b84565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b60008060405163350b944160e11b815260040160405180910390fd5b6127546001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333086612efd565b6000826000190484118302158202612c1657600080fd5b50910281810615159190040190565b600080670de0b6b3a7640000612c39610e1a565b612c4391906137ab565b9050808311612c53576000612c5d565b612c5d81846136f2565b9150610153612c94670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006137ab565b8390611a93565b600080600083612caa86611a21565b612cb49190613830565b90506000811215612ccc5760008092509250506118b4565b946001945092505050565b60405163bb55fd2760e01b815260040160405180910390fd5b600081600003612d095750670de0b6b3a7640000611774565b82600003612d1957506000611774565b6000612d2483611a21565b90506000612d39612d3486611a21565b612f64565b9050818102612d50670de0b6b3a764000082613a31565b9050612d5b8161318a565b9695505050505050565b600082600003612d7657508461013a565b8115612dc957612da7612d8984876136df565b612d938587612476565b612d9d888a612476565b6118e191906136df565b90506000612db58588611ffb565b905080821015612dc3578091505b5061013a565b828503612dd85750600061013a565b610137612de584876136f2565b612def85876127f3565b612df9888a612476565b6118e191906136f2565b600061015383670de0b6b3a764000084612bff565b600060016001607f1b03821115611a4b5760405163a5353be560e01b815260040160405180910390fd5b6000818313612e515781610153565b5090919050565b604051631e66865560e21b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063799a195490602401611e65565b600060405163350b944160e11b815260040160405180910390fd5b612ef76001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016848661331f565b50505050565b6040516001600160a01b038481166024830152838116604483015260648201839052612ef79186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b038381831617835250505050613350565b6000808213612f865760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906130099084901c611a21565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e1982136131a557506000919050565b680755bf798b4a1bf1e582126131ce576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190612d5b74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611a21565b6040516001600160a01b0383811660248301526044820183905261275491859182169063a9059cbb90606401612f32565b60006133656001600160a01b038416836133b8565b9050805160001415801561338a5750808060200190518101906133889190613a5f565b155b1561275457604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b60606101538383600084600080856001600160a01b031684866040516133de9190613a7c565b60006040518083038185875af1925050503d806000811461341b576040519150601f19603f3d011682016040523d82523d6000602084013e613420565b606091505b5091509150612d5b8683836060826134405761343b82613487565b610153565b815115801561345757506001600160a01b0384163b155b1561348057604051639996b31560e01b81526001600160a01b03851660048201526024016133af565b5080610153565b8051156134975780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061012001604052806135256134b0565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60006060828403121561200a57600080fd5b60008060006060848603121561358a57600080fd5b8335925060208401359150604084013567ffffffffffffffff8111156135af57600080fd5b6135bb86828701613563565b9150509250925092565b600080604083850312156135d857600080fd5b50508035926020909101359150565b600080600080600060a086880312156135ff57600080fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff81111561363257600080fd5b61363e88828901613563565b9150509295509295909350565b60006020828403121561365d57600080fd5b81356001600160a01b038116811461015357600080fd5b8015158114610dff57600080fd5b60006020828403121561369457600080fd5b813561015381613674565b634e487b7160e01b600052601260045260246000fd5b6000826136c4576136c461369f565b500690565b634e487b7160e01b600052601160045260246000fd5b80820180821115611774576117746136c9565b81810381811115611774576117746136c9565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b61018081016117748284613705565b6000602082840312156137a457600080fd5b5051919050565b8082028115828204841417611774576117746136c9565b6000806000606084860312156137d757600080fd5b8351925060208401519150604084015190509250925092565b6001600160701b03818116838216019080821115611b7d57611b7d6136c9565b6001600160801b03818116838216019080821115611b7d57611b7d6136c9565b8181036000831280158383131683831282161715611b7d57611b7d6136c9565b6001600160801b03828116828216039080821115611b7d57611b7d6136c9565b60006102a082019050613884828551613705565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b600080604083850312156138f957600080fd5b505080516020909101519092909150565b6000600160ff1b820161391f5761391f6136c9565b5060000390565b6000808335601e1984360301811261393d57600080fd5b83018035915067ffffffffffffffff82111561395857600080fd5b6020019150368190038213156118b457600080fd5b6000806040838503121561398057600080fd5b82519150602083015161399281613674565b809150509250929050565b600f81810b9083900b0160016001607f1b03811360016001607f1b031982121715611774576117746136c9565b600081600f0b60016001607f1b031981036139e7576139e76136c9565b60000392915050565b60008060008060808587031215613a0657600080fd5b8451935060208501519250604085015191506060850151613a2681613674565b939692955090935050565b600082613a4057613a4061369f565b600160ff1b821460001984141615613a5a57613a5a6136c9565b500590565b600060208284031215613a7157600080fd5b815161015381613674565b6000825160005b81811015613a9d5760208186018101518583015201613a83565b50600092019182525091905056fea264697066735822122013ebfe6eaedaa8e2f6c727533e7502b90f97ee5591d140ded299d0659428a8f764736f6c63430008140033',
    methodIdentifiers: {
        "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": "4c2ac1d9",
        "checkpoint(uint256,uint256)": "414f826d",
        "initialize(uint256,uint256,(address,bool,bytes))": "77d05ff4",
        "redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))": "074a6de9",
        "removeLiquidity(uint256,uint256,(address,bool,bytes))": "cbc13434"
    }
};
