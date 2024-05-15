export const ERC4626Target3 = {
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
                    "name": "amount",
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
                    "name": "amount",
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
                    "name": "amount",
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
                    "name": "amount",
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
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
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
                    "name": "amount",
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
                    "name": "amount",
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
                    "name": "amount",
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
                    "name": "amount",
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
                    "name": "amount",
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
    bytecode: '0x6102606040523480156200001257600080fd5b50604051620041ad380380620041ad8339810160408190526200003591620001ec565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c090815260c0808601516101e05260e08087015161020052610120808801519092526101008088015190915261014080880151909152918601805151909152805190920151905280516040908101516101609081529151606090810151610180908152918601518516610220528501516102405290840151600a80546001600160a01b031990811692861692909217905590840151600880548316918516919091179055920151600980549093169116179055620002eb565b6040516101e081016001600160401b03811182821017156200015457634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200017257600080fd5b919050565b6000608082840312156200018a57600080fd5b604051608081016001600160401b0381118282101715620001bb57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600061024082840312156200020057600080fd5b6200020a62000122565b62000215836200015a565b815262000225602084016200015a565b602082015262000238604084016200015a565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140808401518183015250610160620002a38185016200015a565b90820152610180620002b78482016200015a565b908201526101a0620002cb8482016200015a565b908201526101c0620002e08585830162000177565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161024051613d1562000498600039600050506000505060008181610495015281816104c401526104f101526000818161032e0152818161073c01528181610c1a01526118dd0152600081816108e9015281816109d401528181610a6701528181610b2f015281816118b70152818161242d015281816124900152818161278b015281816127c701526129bd01526000818161038f0152818161095901528181610e820152611891015260006120320152600061218d0152600081816111050152612161015260005050600081816103d1015281816109ac01528181610ea301526119030152600081816103b00152818161046a015281816109860152818161103d0152612cee01526000818161028001528181610dd901528181610ed501528181610f5c01528181610fbd0152610ff5015260008181611d9301528181612b4c01528181612bc601528181612c5501528181612eef01528181612f550152612fd1015260008181612b1f0152612b800152613d156000f3fe60806040526004361061004a5760003560e01c8063074a6de91461004f578063414f826d146100895780634c2ac1d9146100ab57806377d05ff4146100cc578063cbc13434146100df575b600080fd5b34801561005b57600080fd5b5061006f61006a3660046137a9565b6100ff565b604080519283526020830191909152015b60405180910390f35b34801561009557600080fd5b506100a96100a43660046137f9565b61011a565b005b6100be6100b936600461381b565b610128565b604051908152602001610080565b6100be6100da3660046137a9565b610143565b3480156100eb57600080fd5b5061006f6100fa3660046137a9565b61015a565b60008061010d858585610168565b915091505b935093915050565b6101248282610229565b5050565b600061013786868686866102e8565b90505b95945050505050565b6000610150848484610893565b90505b9392505050565b60008061010d858585610c04565b600080610173610d57565b61017c83610d81565b6000610186610dba565b905061019b610193610dd2565b826004610e08565b506101a9338783888861139d565b90935091506101bb602085018561387f565b6001600160a01b0316337f4ce1e73a001c994d4d884cd1e382579f9c1e81eccf26e70ece8caa1b60a8c2cf8486856101f960408b0160208c016138b6565b604080519485526020850193909352918301521515606082015260800160405180910390a3506101126001600055565b610231610d57565b600061023b610dba565b6000848152600760205260409020600101549091506001600160801b03161561026f5761026881836114e0565b50506102de565b6000610279610dd2565b90506102a57f0000000000000000000000000000000000000000000000000000000000000000856138e9565b1515806102b157508381105b156102cf5760405163ecd29e8160e01b815260040160405180910390fd5b6102da848385610e08565b5050505b6101246001600055565b60006102f2610d57565b600554610100900460ff161561031b576040516321081abf60e01b815260040160405180910390fd5b6103236116db565b61032c82610d81565b7f000000000000000000000000000000000000000000000000000000000000000086101561036d5760405163211ddda360e11b815260040160405180910390fd5b60006103f561037a6116fc565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061171d565b90508481108061040457508381115b1561042257604051633b61151160e11b815260040160405180910390fd5b60008061042f8986611743565b91509150600061043d610dd2565b905061044b81836004610e08565b5060008181526007602052604081205461048e906001600160801b03167f000000000000000000000000000000000000000000000000000000000000000061181c565b90506104ba7f000000000000000000000000000000000000000000000000000000000000000082613913565b85118061051957507f00000000000000000000000000000000000000000000000000000000000000008111801561051957506105167f000000000000000000000000000000000000000000000000000000000000000082613926565b85105b1561053757604051630552b01360e31b815260040160405180910390fd5b50600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e9549091610583916001600160801b0390911690613926565b6000808052600e6020527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54919250906105be908390613913565b905060008060006105ce87611848565b604051635f9d50ab60e11b815290915073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063bf3aa156906106089084906004016139b7565b602060405180830381865af4158015610625573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061064991906139c6565b915061065c61065789611982565b6119b0565b6001546001600160801b038082168352600354600f0b6020840152600160801b9091041660408083019190915251635f9d50ab60e11b815273__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063bf3aa156906106be9084906004016139b7565b602060405180830381865af41580156106db573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106ff91906139c6565b9250818310156107225760405163184d952160e11b815260040160405180910390fd5b61073884836107318187613926565b91906119d6565b99507f00000000000000000000000000000000000000000000000000000000000000008a101561077b5760405163211ddda360e11b815260040160405180910390fd5b508d8d610788828c6119f4565b10156107a75760405163c972651760e01b815260040160405180910390fd5b6107bf60006107b960208e018e61387f565b8c611a09565b60006107ca88611ab2565b9050806107ea57604051638bdf918d60e01b815260040160405180910390fd5b60008515610801576107fc84876119f4565b610804565b60005b90508c610814602082018261387f565b6001600160a01b03167fa59daf574c5c8db34377de83bceea2aa1433cc506d656f5e8f46e5f4b5c58a868e868d61085160408701602088016138b6565b60408051948552602085019390935291830152151560608201526080810185905260a00160405180910390a250505050505050505050505061013a6001600055565b600061089d610d57565b6108a56116db565b6108ae82610d81565b60055460ff16156108d257604051637983c05160e01b815260040160405180910390fd5b6000806108df8685611743565b909250905061090f7f000000000000000000000000000000000000000000000000000000000000000060026139df565b82101561092f57604051632afb507160e21b815260040160405180910390fd5b6005805460ff1916600117905560405163594f0e8f60e11b815260048101839052602481018290527f00000000000000000000000000000000000000000000000000000000000000006044820152606481018690527f000000000000000000000000000000000000000000000000000000000000000060848201527f000000000000000000000000000000000000000000000000000000000000000060a482015260027f000000000000000000000000000000000000000000000000000000000000000002830393506000908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063b29e1d1e9060c401606060405180830381865af4158015610a3b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a5f91906139f6565b9250925092507f0000000000000000000000000000000000000000000000000000000000000000610a908484611abf565b1015610aaf5760405163216f4ab160e21b815260040160405180910390fd5b610ab883611ae5565b600180546001600160801b0319166001600160801b0392909216919091179055610ae182611b0f565b600380546001600160801b0319166001600160801b0392909216919091179055610b0a81611ae5565b600180546001600160801b03928316600160801b029216919091179055610b536000807f0000000000000000000000000000000000000000000000000000000000000000611a09565b610b6b6000610b6560208a018a61387f565b88611a09565b610b7e610b76610dd2565b856004610e08565b50610b8c602088018861387f565b6001600160a01b03167fdfe2bf9f580df5ec15438120ffa6f0603237c4e6b65d07140a4695317da4f952878b87610bc960408d0160208e016138b6565b6040805194855260208501939093529183015215156060820152608081018b905260a00160405180910390a250505050506101536001600055565b600080610c0f610d57565b610c1883610d81565b7f0000000000000000000000000000000000000000000000000000000000000000851015610c595760405163211ddda360e11b815260040160405180910390fd5b6000610c63610dba565b9050610c70610193610dd2565b50610c7d60003388611b4b565b610c92600360f81b610b65602087018761387f565b6000610cad610ca4602087018761387f565b8884898961139d565b9094509050610cbc8188613926565b92506000610cc983611c1c565b509050610cd9602087018761387f565b6001600160a01b0316337f56e07298e87dce53d3298b9775b947b87b39b2dde51df86371f0540885da83c98a8887610d1760408d0160208e016138b6565b60408051948552602085019390935291830152151560608201526080810188905260a0810185905260c00160405180910390a35050506101126001600055565b600260005403610d7a57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b6000610d90602083018361387f565b6001600160a01b031603610db75760405163f0dd15fd60e01b815260040160405180910390fd5b50565b6000610dcd670de0b6b3a7640000611d7a565b905090565b6000610dfe7f0000000000000000000000000000000000000000000000000000000000000000426138e9565b610dcd9042613926565b600083815260076020526040812060018101546001600160801b0316151580610e3057504285115b15610e4957600101546001600160801b03169050610153565b6000806000610e56610dd2565b9050808803610ece57869250610ec7610e6d6116fc565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611e07565b9150610f8a565b6000610efa7f00000000000000000000000000000000000000000000000000000000000000008a613913565b90505b818103610f1557879350610f12610e6d6116fc565b92505b6000818152600760205260409020600101546001600160801b031693508315610f57576000818152600760205260409020546001600160801b03169250610f88565b610f817f000000000000000000000000000000000000000000000000000000000000000082613913565b9050610efd565b505b610f9383611ae5565b6001850180546001600160801b0319166001600160801b0392909216919091179055610fe9610fe27f00000000000000000000000000000000000000000000000000000000000000008a613926565b8984611e1e565b6110278861102161101a7f000000000000000000000000000000000000000000000000000000000000000083613913565b4290611f5c565b84611e1e565b61103087611f71565b50600090506007816110627f00000000000000000000000000000000000000000000000000000000000000008c613926565b815260208101919091526040016000908120600101546001600160801b0316915061108e60028b612115565b6000818152600e60205260408120549192508b8b83156111d457600192506000806110bd86898d86600061214a565b9150915080600b60008282546110d39190613913565b909155506110ef9050866000846110e981611982565b88612219565b6110f98183613913565b915061112986838a8e877f0000000000000000000000000000000000000000000000000000000000000000612393565b915061113d61113883856123d7565b6123ec565b6005805460029061115e9084906201000090046001600160701b0316613a24565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061118b82611ae5565b600580546010906111ad908490600160801b90046001600160801b0316613a44565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b60006111e1600184612115565b6000818152600e602052604090205490915080156112f0576001945060008061120e838b8f88600161214a565b9150915080600b60008282546112249190613913565b9091555061124090508360008461123a81611982565b8a612416565b61124a8183613926565b915061125961113883876123d7565b6005805460029061127a9084906201000090046001600160701b0316613a24565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506112a782611ae5565b600580546010906112c9908490600160801b90046001600160801b0316613a44565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b84156113285761131c61130287611982565b61130b83611982565b6113159190613a64565b6000612607565b611326838f6114e0565b505b600061133384611c1c565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a250999f9e505050505050505050505050505050565b6000806113a985611ab2565b505060065485906001600160801b0316808211156113ce57806001600160801b031691505b816000036113e35760008092509250506114d6565b6113f2600360f81b8984611b4b565b6006546000906114189084906001600160801b03600160801b90910481169085166119d6565b905061142383611ae5565b61142d9083613a84565b600680546001600160801b0319166001600160801b039290921691909117905561145681611ae5565b60068054601090611478908490600160801b90046001600160801b0316613a84565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506114a78188876126ba565b93506114b38684612754565b8410156114d35760405163c972651760e01b815260040160405180910390fd5b50505b9550959350505050565b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e9549091829161152b916001600160801b031690613926565b90508060000361153f5760019150506116d5565b600061154a85612769565b90508060000361155f576001925050506116d5565b60008061156d838589612805565b91509150806115835760009450505050506116d5565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b81526004016115bf929190613aa4565b6040805180830381865af41580156115db573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115ff9190613b1a565b9150915061161d61160f82611982565b61161890613b3e565b612979565b92508261163357600096505050505050506116d5565b61163c82611ae5565b600680546000906116579084906001600160801b0316613a44565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061168481611ae5565b600680546010906116a6908490600160801b90046001600160801b0316613a44565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600196505050505050505b92915050565b34156116fa57604051631574f9f360e01b815260040160405180910390fd5b565b600154600354600091610dcd916001600160801b0390911690600f0b611abf565b60008061172c87878786611e07565b9050611738818561181c565b979650505050505050565b6000808061175760408501602086016138b6565b1561177c576117728561176d6040870187613b5a565b612b0f565b9093509050611798565b50346117948561178f6040870187613b5a565b612c48565b8492505b6117a0610dba565b9150801561181357604051600090339083908381818185875af1925050503d80600081146117ea576040519150601f19603f3d011682016040523d82523d6000602084013e6117ef565b606091505b5050905080611811576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b600061015361183084846301e13380612c7d565b61184285670de0b6b3a7640000613926565b906119f4565b6118506136e4565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e083015260025404821661010082015260045490916101208301916119489116612ca3565b81526003546001600160801b03600160801b918290048116602084015260045460409093019261197a92900416612ca3565b905292915050565b60006001600160ff1b038211156119ac5760405163396ea70160e11b815260040160405180910390fd5b5090565b6119b981612979565b610db757604051635044b7f560e01b815260040160405180910390fd5b60008260001904841183021582026119ed57600080fd5b5091020490565b600061015383670de0b6b3a7640000846119d6565b6000838152600d602090815260408083206001600160a01b038616845290915281208054839290611a3b908490613913565b90915550506000838152600e602052604081208054839290611a5e908490613913565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b60006116d58260046114e0565b600080611acc8484612d19565b909250905080611ade57611ade612d55565b5092915050565b60006001600160801b038211156119ac57604051630f0af95160e11b815260040160405180910390fd5b600060016001607f1b0319821280611b2d575060016001607f1b0382135b156119ac5760405163a5353be560e01b815260040160405180910390fd5b6000838152600d602090815260408083206001600160a01b0386168452909152902054811115611b8e57604051631e9acf1760e31b815260040160405180910390fd5b6000838152600d602090815260408083206001600160a01b0386168452825280832080548590039055858352600e90915281208054839290611bd1908490613926565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101611aa5565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e611c4587611848565b6040518263ffffffff1660e01b8152600401611c6191906139b7565b6040805180830381865af4158015611c7d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ca19190613ba1565b9150915080611cb7575060009485945092505050565b6000808611611cc7576000611cd1565b611cd183876123d7565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b0390921691611d3c9190613913565b611d469190613926565b905080600003611d5f5750600096879650945050505050565b6000611d6b83836119f4565b98600198509650505050505050565b6040516303d1689d60e11b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906307a2d13a906024015b602060405180830381865afa158015611de3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116d591906139c6565b600061013a82611e188588886119d6565b90612d6e565b600083815260076020526040902054600160801b90046001600160801b0316808303611e4a5750505050565b6000848152600760205260408120546001600160801b031690819003611ea457611e7383611ae5565b600086815260076020526040902080546001600160801b0319166001600160801b0392909216919091179055611f22565b611ef5611ef0670de0b6b3a7640000611ebd8886613926565b611ec791906139df565b85670de0b6b3a7640000611edb878a613926565b611ee591906139df565b859291906001612de3565b611ae5565b600086815260076020526040902080546001600160801b0319166001600160801b03929092169190911790555b611f2b84611ae5565b60009586526007602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b6000818311611f6b5782610153565b50919050565b6005546000908190611f94908490600160801b90046001600160801b03166123d7565b6005546201000090046001600160701b03169250905081811115612110576000611fbe8383613926565b9050611fcd611ef08286612e81565b60058054601090611fef908490600160801b90046001600160801b0316613a84565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600061202885836119f490919063ffffffff16565b90506000612056827f00000000000000000000000000000000000000000000000000000000000000006123d7565b905080600b600082825461206a9190613913565b9091555061207a90508183613926565b915061208582611ae5565b600180546000906120a09084906001600160801b0316613a44565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506120cd82612e96565b600380546000906120e2908490600f0b613bd1565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60006001600160f81b0382111561213f5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60008061215787856119f4565b91506000612185837f00000000000000000000000000000000000000000000000000000000000000006123d7565b90506121b1817f00000000000000000000000000000000000000000000000000000000000000006123d7565b915083156121d4576121c38282613926565b6121cd9084613926565b92506121eb565b6121de8282613926565b6121e89084613913565b92505b8686101561220e576121fe8387896119d6565b925061220b8287896119d6565b91505b509550959350505050565b600354600160801b90046001600160801b0316612262611ef082612245670de0b6b3a7640000866139df565b600454600160801b90046001600160801b031691908a6000612de3565b600480546001600160801b03928316600160801b02921691909117905561228886611ae5565b6122929082613a84565b600380546001600160801b03928316600160801b0292169190911790556122b884611ae5565b600180546000906122d39084906001600160801b0316613a44565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061230083611b0f565b60038054600090612315908490600f0b613bd1565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061234585611ae5565b60018054601090612367908490600160801b90046001600160801b0316613a84565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b6000806123a5846118428a888a6119d6565b90506123b28884866119d6565b6123bc9082613913565b9050868111156123cc5786810391505b509695505050505050565b60006101538383670de0b6b3a76400006119d6565b60006001600160701b038211156119ac5760405163086b151760e11b815260040160405180910390fd5b6001546001600160801b03168381108061245857507f00000000000000000000000000000000000000000000000000000000000000006124568583613926565b105b1561246557612465612d55565b6003549084900390600f0b61247a8482613a64565b90508361248686611982565b1380156124bb57507f00000000000000000000000000000000000000000000000000000000000000006124b98383611abf565b105b156124c8576124c8612d55565b600254600160801b90046001600160801b031661250a611ef0826124f4670de0b6b3a7640000886139df565b6004546001600160801b031691908c6000612de3565b600480546001600160801b0319166001600160801b03929092169190911790556125348882613926565b905061253f81611ae5565b600280546001600160801b03928316600160801b02921691909117905561256583611ae5565b600180546001600160801b0319166001600160801b039290921691909117905561258e82611b0f565b600380546001600160801b0319166001600160801b03929092169190911790556125b787611ae5565b600180546010906125d9908490600160801b90046001600160801b0316613a44565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60006126306126168483612ec0565b612621846000612ec0565b61262b9190613a64565b611b0f565b9050600081600f0b1315612685576002805482919060009061265c9084906001600160801b0316613a44565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b12156126b55761269a81613bfe565b6002805460009061265c9084906001600160801b0316613a84565b505050565b6000806126c785856123d7565b90506126d281612ed6565b9450846000036126e6576000915050610153565b6126f660408401602085016138b6565b156127255761271e8561270c602086018661387f565b6127196040870187613b5a565b612f26565b915061274c565b61274885612736602086018661387f565b6127436040870187613b5a565b612fc4565b8491505b509392505050565b60006101538383670de0b6b3a7640000612c7d565b6002546000908190612784906001600160801b031684612e81565b90506127b07f000000000000000000000000000000000000000000000000000000000000000082613913565b6001546001600160801b03161115611f6b576001547f0000000000000000000000000000000000000000000000000000000000000000906127fb9083906001600160801b0316613926565b6101539190613926565b61280d613745565b60008061281984611848565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b815260040161285491906139b7565b6040805180830381865af4158015612870573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906128949190613ba1565b93509050826128a95750600091506101129050565b60006128d06128cb8461016001518561014001516123d790919063ffffffff16565b611982565b6128f06128cb85610120015186610100015161275490919063ffffffff16565b6128fa9190613a64565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b60015460035460405163685a2be760e11b81526001600160801b0380841660048301819052600f9390930b60248301819052600160801b90940416604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612a30573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a549190613c24565b935093509350935080612a705750600098975050505050505050565b868414612aa157612a8084611ae5565b600180546001600160801b0319166001600160801b03929092169190911790555b858314612ad257612ab183611b0f565b600380546001600160801b0319166001600160801b03929092169190911790555b848214612b0057612ae282611ae5565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b600080612b476001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333088612ffe565b612ba77f0000000000000000000000000000000000000000000000000000000000000000612b76876001613913565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169190613065565b604051636e553f6560e01b8152600481018690523060248201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636e553f65906044016020604051808303816000875af1158015612c17573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612c3b91906139c6565b9660009650945050505050565b6126b56001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333086612ffe565b6000826000190484118302158202612c9457600080fd5b50910281810615159190040190565b600080670de0b6b3a7640000612cb7610dd2565b612cc191906139df565b9050808311612cd1576000612cdb565b612cdb8184613926565b9150610153612d12670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006139df565b83906119f4565b600080600083612d2886611982565b612d329190613a64565b90506000811215612d4a576000809250925050611815565b946001945092505050565b60405163bb55fd2760e01b815260040160405180910390fd5b600081600003612d875750670de0b6b3a76400006116d5565b82600003612d97575060006116d5565b6000612da283611982565b90506000612db7612db286611982565b6130f5565b9050818102612dce670de0b6b3a764000082613c65565b9050612dd98161331b565b9695505050505050565b600082600003612df457508461013a565b8115612e4757612e25612e078487613913565b612e1185876123d7565b612e1b888a6123d7565b6118429190613913565b90506000612e338588611f5c565b905080821015612e41578091505b5061013a565b828503612e565750600061013a565b610137612e638487613926565b612e6d8587612754565b612e77888a6123d7565b6118429190613926565b600061015383670de0b6b3a764000084612c7d565b600060016001607f1b038211156119ac5760405163a5353be560e01b815260040160405180910390fd5b6000818313612ecf5781610153565b5090919050565b6040516363737ac960e11b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063c6e6f59290602401611dc6565b604051635d043b2960e11b8152600481018590526001600160a01b0384811660248301523060448301526000917f00000000000000000000000000000000000000000000000000000000000000009091169063ba087652906064016020604051808303816000875af1158015612fa0573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061013a91906139c6565b612ff86001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001684866134b0565b50505050565b6040516001600160a01b038481166024830152838116604483015260648201839052612ff89186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b0383818316178352505050506134e1565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b1790526130b68482613549565b612ff8576040516001600160a01b038481166024830152600060448301526130eb91869182169063095ea7b390606401613033565b612ff884826134e1565b60008082136131175760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f1982019061319a9084901c611982565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361333657506000919050565b680755bf798b4a1bf1e5821261335f576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190612dd974029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611982565b6040516001600160a01b038381166024830152604482018390526126b591859182169063a9059cbb90606401613033565b60006134f66001600160a01b038416836135ec565b9050805160001415801561351b5750808060200190518101906135199190613c93565b155b156126b557604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b6000806000846001600160a01b0316846040516135669190613cb0565b6000604051808303816000865af19150503d80600081146135a3576040519150601f19603f3d011682016040523d82523d6000602084013e6135a8565b606091505b50915091508180156135d25750805115806135d25750808060200190518101906135d29190613c93565b801561013a5750505050506001600160a01b03163b151590565b60606101538383600084600080856001600160a01b031684866040516136129190613cb0565b60006040518083038185875af1925050503d806000811461364f576040519150601f19603f3d011682016040523d82523d6000602084013e613654565b606091505b5091509150612dd98683836060826136745761366f826136bb565b610153565b815115801561368b57506001600160a01b0384163b155b156136b457604051639996b31560e01b81526001600160a01b0385166004820152602401613540565b5080610153565b8051156136cb5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061012001604052806137596136e4565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b600060608284031215611f6b57600080fd5b6000806000606084860312156137be57600080fd5b8335925060208401359150604084013567ffffffffffffffff8111156137e357600080fd5b6137ef86828701613797565b9150509250925092565b6000806040838503121561380c57600080fd5b50508035926020909101359150565b600080600080600060a0868803121561383357600080fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff81111561386657600080fd5b61387288828901613797565b9150509295509295909350565b60006020828403121561389157600080fd5b81356001600160a01b038116811461015357600080fd5b8015158114610db757600080fd5b6000602082840312156138c857600080fd5b8135610153816138a8565b634e487b7160e01b600052601260045260246000fd5b6000826138f8576138f86138d3565b500690565b634e487b7160e01b600052601160045260246000fd5b808201808211156116d5576116d56138fd565b818103818111156116d5576116d56138fd565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b61018081016116d58284613939565b6000602082840312156139d857600080fd5b5051919050565b80820281158282048414176116d5576116d56138fd565b600080600060608486031215613a0b57600080fd5b8351925060208401519150604084015190509250925092565b6001600160701b03818116838216019080821115611ade57611ade6138fd565b6001600160801b03818116838216019080821115611ade57611ade6138fd565b8181036000831280158383131683831282161715611ade57611ade6138fd565b6001600160801b03828116828216039080821115611ade57611ade6138fd565b60006102a082019050613ab8828551613939565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215613b2d57600080fd5b505080516020909101519092909150565b6000600160ff1b8201613b5357613b536138fd565b5060000390565b6000808335601e19843603018112613b7157600080fd5b83018035915067ffffffffffffffff821115613b8c57600080fd5b60200191503681900382131561181557600080fd5b60008060408385031215613bb457600080fd5b825191506020830151613bc6816138a8565b809150509250929050565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156116d5576116d56138fd565b600081600f0b60016001607f1b03198103613c1b57613c1b6138fd565b60000392915050565b60008060008060808587031215613c3a57600080fd5b8451935060208501519250604085015191506060850151613c5a816138a8565b939692955090935050565b600082613c7457613c746138d3565b600160ff1b821460001984141615613c8e57613c8e6138fd565b500590565b600060208284031215613ca557600080fd5b8151610153816138a8565b6000825160005b81811015613cd15760208186018101518583015201613cb7565b50600092019182525091905056fea26469706673582212200c1562d8a2c9e09ad01caa799e10a51271c9987335021ad3d9434137e24194f064736f6c63430008140033',
    methodIdentifiers: {
        "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": "4c2ac1d9",
        "checkpoint(uint256,uint256)": "414f826d",
        "initialize(uint256,uint256,(address,bool,bytes))": "77d05ff4",
        "redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))": "074a6de9",
        "removeLiquidity(uint256,uint256,(address,bool,bytes))": "cbc13434"
    }
};
