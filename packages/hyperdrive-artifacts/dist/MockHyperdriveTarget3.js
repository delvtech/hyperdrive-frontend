export const MockHyperdriveTarget3 = {
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
    bytecode: '0x6102606040523480156200001257600080fd5b5060405162004598380380620045988339810160408190526200003591620001ec565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c090815260c0808601516101e05260e08087015161020052610120808801519092526101008088015190915261014080880151909152918601805151909152805190920151905280516040908101516101609081529151606090810151610180908152918601518516610220528501516102405290840151600a80546001600160a01b031990811692861692909217905590840151600880548316918516919091179055920151600980549093169116179055620002eb565b6040516101e081016001600160401b03811182821017156200015457634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200017257600080fd5b919050565b6000608082840312156200018a57600080fd5b604051608081016001600160401b0381118282101715620001bb57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600061024082840312156200020057600080fd5b6200020a62000122565b62000215836200015a565b815262000225602084016200015a565b602082015262000238604084016200015a565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140808401518183015250610160620002a38185016200015a565b90820152610180620002b78482016200015a565b908201526101a0620002cb8482016200015a565b908201526101c0620002e08585830162000177565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e0516102005161022051610240516140c4620004d46000396000505060005050600081816104a9015281816104d801526105050152600081816103420152818161075001528181610c4e01526119c701526000818161090d015281816109f801528181610a8b01528181610b53015281816119a101528181612585015281816125e8015281816128e30152818161291f0152612b150152600081816103a30152818161097d01528181610eca0152818161197b01528181612e850152612f100152600061218a015260006122e501526000818161114d01526122b9015260005050600081816103e5015281816109d001528181610eeb01526119ed0152600081816103c40152818161047e015281816109aa01528181611085015261310e01526000818161029401528181610e2101528181610f1d01528181610fa401528181611005015261103d0152600050506000818161177c01528181611e7f01528181611ec801528181612c8301528181612ccc01528181612d5e01528181612ddf01528181612f7e01528181612fff015281816133110152818161335a01528181613435015281816134e1015281816135cd015261367901526140c46000f3fe60806040526004361061004a5760003560e01c8063074a6de91461004f578063414f826d146100895780634c2ac1d9146100ab57806377d05ff4146100cc578063cbc13434146100df575b600080fd5b34801561005b57600080fd5b5061006f61006a366004613b87565b6100ff565b604080519283526020830191909152015b60405180910390f35b34801561009557600080fd5b506100a96100a4366004613bd7565b61011a565b005b6100be6100b9366004613bf9565b610128565b604051908152602001610080565b6100be6100da366004613b87565b610143565b3480156100eb57600080fd5b5061006f6100fa366004613b87565b61015a565b60008061010d858585610168565b915091505b935093915050565b610124828261023d565b5050565b600061013786868686866102fc565b90505b95945050505050565b60006101508484846108b7565b90505b9392505050565b60008061010d858585610c38565b600080610173610d9f565b61017c83610dc9565b6000610186610e02565b905061019b610193610e1a565b826004610e50565b506101a933878388886113e5565b90935091506101bb6020850185613c5d565b6001600160a01b0316337f4ce1e73a001c994d4d884cd1e382579f9c1e81eccf26e70ece8caa1b60a8c2cf846101f287868a611528565b6101fd88878b611557565b61020d60408b0160208c01613c94565b604080519485526020850193909352918301521515606082015260800160405180910390a3506101126001600055565b610245610d9f565b600061024f610e02565b6000848152600760205260409020600101549091506001600160801b0316156102835761027c818361157f565b50506102f2565b600061028d610e1a565b90506102b97f000000000000000000000000000000000000000000000000000000000000000085613cc7565b1515806102c557508381105b156102e35760405163ecd29e8160e01b815260040160405180910390fd5b6102ee848385610e50565b5050505b6101246001600055565b6000610306610d9f565b600554610100900460ff161561032f576040516321081abf60e01b815260040160405180910390fd5b61033761177a565b61034082610dc9565b7f00000000000000000000000000000000000000000000000000000000000000008610156103815760405163211ddda360e11b815260040160405180910390fd5b600061040961038e6117e6565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611807565b90508481108061041857508381115b1561043657604051633b61151160e11b815260040160405180910390fd5b600080610443898661182d565b915091506000610451610e1a565b905061045f81836004610e50565b506000818152600760205260408120546104a2906001600160801b03167f0000000000000000000000000000000000000000000000000000000000000000611906565b90506104ce7f000000000000000000000000000000000000000000000000000000000000000082613cf1565b85118061052d57507f00000000000000000000000000000000000000000000000000000000000000008111801561052d575061052a7f000000000000000000000000000000000000000000000000000000000000000082613d04565b85105b1561054b57604051630552b01360e31b815260040160405180910390fd5b50600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e9549091610597916001600160801b0390911690613d04565b6000808052600e6020527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54919250906105d2908390613cf1565b905060008060006105e287611932565b604051635f9d50ab60e11b815290915073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063bf3aa1569061061c908490600401613d95565b602060405180830381865af4158015610639573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061065d9190613da4565b915061067061066b89611a6c565b611a9a565b6001546001600160801b038082168352600354600f0b6020840152600160801b9091041660408083019190915251635f9d50ab60e11b815273__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063bf3aa156906106d2908490600401613d95565b602060405180830381865af41580156106ef573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107139190613da4565b9250818310156107365760405163184d952160e11b815260040160405180910390fd5b61074c84836107458187613d04565b9190611ac0565b99507f00000000000000000000000000000000000000000000000000000000000000008a101561078f5760405163211ddda360e11b815260040160405180910390fd5b508d8d61079c828c611ade565b10156107bb5760405163c972651760e01b815260040160405180910390fd5b6107d360006107cd60208e018e613c5d565b8c611af3565b60006107de88611b9c565b9050806107fe57604051638bdf918d60e01b815260040160405180910390fd5b60008515610815576108108487611ade565b610818565b60005b90508c6000610828858c84611528565b90506108376020830183613c5d565b6001600160a01b03167fa59daf574c5c8db34377de83bceea2aa1433cc506d656f5e8f46e5f4b5c58a868f838f6108746040880160208901613c94565b60408051948552602085019390935291830152151560608201526080810186905260a00160405180910390a25050505050505050505050505061013a6001600055565b60006108c1610d9f565b6108c961177a565b6108d282610dc9565b60055460ff16156108f657604051637983c05160e01b815260040160405180910390fd5b600080610903868561182d565b90925090506109337f00000000000000000000000000000000000000000000000000000000000000006002613dbd565b82101561095357604051632afb507160e21b815260040160405180910390fd5b6005805460ff1916600117905560405163594f0e8f60e11b815260048101839052602481018290527f00000000000000000000000000000000000000000000000000000000000000006044820152606481018690527f000000000000000000000000000000000000000000000000000000000000000060848201527f000000000000000000000000000000000000000000000000000000000000000060a482015260027f000000000000000000000000000000000000000000000000000000000000000002830393506000908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063b29e1d1e9060c401606060405180830381865af4158015610a5f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a839190613dd4565b9250925092507f0000000000000000000000000000000000000000000000000000000000000000610ab48484611ba9565b1015610ad35760405163216f4ab160e21b815260040160405180910390fd5b610adc83611bcf565b600180546001600160801b0319166001600160801b0392909216919091179055610b0582611bf9565b600380546001600160801b0319166001600160801b0392909216919091179055610b2e81611bcf565b600180546001600160801b03928316600160801b029216919091179055610b776000807f0000000000000000000000000000000000000000000000000000000000000000611af3565b610b8f6000610b8960208a018a613c5d565b88611af3565b610ba2610b9a610e1a565b856004610e50565b506000610bb08a868a611528565b9050610bbf6020890189613c5d565b6001600160a01b03167fdfe2bf9f580df5ec15438120ffa6f0603237c4e6b65d07140a4695317da4f952888389610bfc60408e0160208f01613c94565b6040805194855260208501939093529183015215156060820152608081018c905260a00160405180910390a25050505050506101536001600055565b600080610c43610d9f565b610c4c83610dc9565b7f0000000000000000000000000000000000000000000000000000000000000000851015610c8d5760405163211ddda360e11b815260040160405180910390fd5b6000610c97610e02565b9050610ca4610193610e1a565b50610cb160003388611c35565b610cc6600360f81b610b896020870187613c5d565b6000610ce1610cd86020870187613c5d565b888489896113e5565b9094509050610cf08188613d04565b92506000610cfd83611d06565b509050610d0d6020870187613c5d565b6001600160a01b0316337f56e07298e87dce53d3298b9775b947b87b39b2dde51df86371f0540885da83c98a610d4489888c611528565b610d4f8a898d611557565b610d5f60408d0160208e01613c94565b60408051948552602085019390935291830152151560608201526080810188905260a0810185905260c00160405180910390a35050506101126001600055565b600260005403610dc257604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b6000610dd86020830183613c5d565b6001600160a01b031603610dff5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b6000610e15670de0b6b3a7640000611e64565b905090565b6000610e467f000000000000000000000000000000000000000000000000000000000000000042613cc7565b610e159042613d04565b600083815260076020526040812060018101546001600160801b0316151580610e7857504285115b15610e9157600101546001600160801b03169050610153565b6000806000610e9e610e1a565b9050808803610f1657869250610f0f610eb56117e6565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611f5f565b9150610fd2565b6000610f427f00000000000000000000000000000000000000000000000000000000000000008a613cf1565b90505b818103610f5d57879350610f5a610eb56117e6565b92505b6000818152600760205260409020600101546001600160801b031693508315610f9f576000818152600760205260409020546001600160801b03169250610fd0565b610fc97f000000000000000000000000000000000000000000000000000000000000000082613cf1565b9050610f45565b505b610fdb83611bcf565b6001850180546001600160801b0319166001600160801b039290921691909117905561103161102a7f00000000000000000000000000000000000000000000000000000000000000008a613d04565b8984611f76565b61106f886110696110627f000000000000000000000000000000000000000000000000000000000000000083613cf1565b42906120b4565b84611f76565b611078876120c9565b50600090506007816110aa7f00000000000000000000000000000000000000000000000000000000000000008c613d04565b815260208101919091526040016000908120600101546001600160801b031691506110d660028b61226d565b6000818152600e60205260408120549192508b8b831561121c576001925060008061110586898d8660006122a2565b9150915080600b600082825461111b9190613cf1565b9091555061113790508660008461113181611a6c565b88612371565b6111418183613cf1565b915061117186838a8e877f00000000000000000000000000000000000000000000000000000000000000006124eb565b9150611185611180838561252f565b612544565b600580546002906111a69084906201000090046001600160701b0316613e02565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506111d382611bcf565b600580546010906111f5908490600160801b90046001600160801b0316613e22565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b600061122960018461226d565b6000818152600e602052604090205490915080156113385760019450600080611256838b8f8860016122a2565b9150915080600b600082825461126c9190613cf1565b9091555061128890508360008461128281611a6c565b8a61256e565b6112928183613d04565b91506112a1611180838761252f565b600580546002906112c29084906201000090046001600160701b0316613e02565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506112ef82611bcf565b60058054601090611311908490600160801b90046001600160801b0316613e22565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b84156113705761136461134a87611a6c565b61135383611a6c565b61135d9190613e42565b600061275f565b61136e838f61157f565b505b600061137b84611d06565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a250999f9e505050505050505050505050505050565b6000806113f185611b9c565b505060065485906001600160801b03168082111561141657806001600160801b031691505b8160000361142b57600080925092505061151e565b61143a600360f81b8984611c35565b6006546000906114609084906001600160801b03600160801b9091048116908516611ac0565b905061146b83611bcf565b6114759083613e62565b600680546001600160801b0319166001600160801b039290921691909117905561149e81611bcf565b600680546010906114c0908490600160801b90046001600160801b0316613e62565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506114ef818887612812565b93506114fb86846128ac565b84101561151b5760405163c972651760e01b815260040160405180910390fd5b50505b9550959350505050565b600061153a6040830160208401613c94565b15611546575082610153565b611550848461252f565b9050610153565b60006115696040830160208401613c94565b15611578576115508484611ade565b5082610153565b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e954909182916115ca916001600160801b031690613d04565b9050806000036115de576001915050611774565b60006115e9856128c1565b9050806000036115fe57600192505050611774565b60008061160c83858961295d565b9150915080611622576000945050505050611774565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b815260040161165e929190613e82565b6040805180830381865af415801561167a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061169e9190613ef8565b915091506116bc6116ae82611a6c565b6116b790613f1c565b612ad1565b9250826116d25760009650505050505050611774565b6116db82611bcf565b600680546000906116f69084906001600160801b0316613e22565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061172381611bcf565b60068054601090611745908490600160801b90046001600160801b0316613e22565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600196505050505050505b92915050565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee148015906117c657503415155b156117e457604051631574f9f360e01b815260040160405180910390fd5b565b600154600354600091610e15916001600160801b0390911690600f0b611ba9565b60008061181687878786611f5f565b90506118228185611906565b979650505050505050565b600080806118416040850160208601613c94565b156118665761185c856118576040870187613f38565b612c67565b9093509050611882565b503461187e856118796040870187613f38565b612ef3565b8492505b61188a610e02565b915080156118fd57604051600090339083908381818185875af1925050503d80600081146118d4576040519150601f19603f3d011682016040523d82523d6000602084013e6118d9565b606091505b50509050806118fb576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b600061015361191a84846301e1338061309d565b61192c85670de0b6b3a7640000613d04565b90611ade565b61193a613ac2565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526002540482166101008201526004549091610120830191611a3291166130c3565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192611a64929004166130c3565b905292915050565b60006001600160ff1b03821115611a965760405163396ea70160e11b815260040160405180910390fd5b5090565b611aa381612ad1565b610dff57604051635044b7f560e01b815260040160405180910390fd5b6000826000190484118302158202611ad757600080fd5b5091020490565b600061015383670de0b6b3a764000084611ac0565b6000838152600d602090815260408083206001600160a01b038616845290915281208054839290611b25908490613cf1565b90915550506000838152600e602052604081208054839290611b48908490613cf1565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b600061177482600461157f565b600080611bb68484613139565b909250905080611bc857611bc8613175565b5092915050565b60006001600160801b03821115611a9657604051630f0af95160e11b815260040160405180910390fd5b600060016001607f1b0319821280611c17575060016001607f1b0382135b15611a965760405163a5353be560e01b815260040160405180910390fd5b6000838152600d602090815260408083206001600160a01b0386168452909152902054811115611c7857604051631e9acf1760e31b815260040160405180910390fd5b6000838152600d602090815260408083206001600160a01b0386168452825280832080548590039055858352600e90915281208054839290611cbb908490613d04565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101611b8f565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e611d2f87611932565b6040518263ffffffff1660e01b8152600401611d4b9190613d95565b6040805180830381865af4158015611d67573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d8b9190613f7f565b9150915080611da1575060009485945092505050565b6000808611611db1576000611dbb565b611dbb838761252f565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b0390921691611e269190613cf1565b611e309190613d04565b905080600003611e495750600096879650945050505050565b6000611e558383611ade565b98600198509650505050505050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601611eb3575047611f3e565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611f17573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f3b9190613da4565b90505b601254600003611f4f576000610153565b6012546101539084908390611ac0565b600061013a82611f70858888611ac0565b9061318e565b600083815260076020526040902054600160801b90046001600160801b0316808303611fa25750505050565b6000848152600760205260408120546001600160801b031690819003611ffc57611fcb83611bcf565b600086815260076020526040902080546001600160801b0319166001600160801b039290921691909117905561207a565b61204d612048670de0b6b3a76400006120158886613d04565b61201f9190613dbd565b85670de0b6b3a7640000612033878a613d04565b61203d9190613dbd565b859291906001613203565b611bcf565b600086815260076020526040902080546001600160801b0319166001600160801b03929092169190911790555b61208384611bcf565b60009586526007602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b60008183116120c35782610153565b50919050565b60055460009081906120ec908490600160801b90046001600160801b031661252f565b6005546201000090046001600160701b031692509050818111156122685760006121168383613d04565b905061212561204882866132a1565b60058054601090612147908490600160801b90046001600160801b0316613e62565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006121808583611ade90919063ffffffff16565b905060006121ae827f000000000000000000000000000000000000000000000000000000000000000061252f565b905080600b60008282546121c29190613cf1565b909155506121d290508183613d04565b91506121dd82611bcf565b600180546000906121f89084906001600160801b0316613e22565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550612225826132b6565b6003805460009061223a908490600f0b613faf565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60006001600160f81b038211156122975760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000806122af8785611ade565b915060006122dd837f000000000000000000000000000000000000000000000000000000000000000061252f565b9050612309817f000000000000000000000000000000000000000000000000000000000000000061252f565b9150831561232c5761231b8282613d04565b6123259084613d04565b9250612343565b6123368282613d04565b6123409084613cf1565b92505b8686101561236657612356838789611ac0565b9250612363828789611ac0565b91505b509550959350505050565b600354600160801b90046001600160801b03166123ba6120488261239d670de0b6b3a764000086613dbd565b600454600160801b90046001600160801b031691908a6000613203565b600480546001600160801b03928316600160801b0292169190911790556123e086611bcf565b6123ea9082613e62565b600380546001600160801b03928316600160801b02921691909117905561241084611bcf565b6001805460009061242b9084906001600160801b0316613e22565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061245883611bf9565b6003805460009061246d908490600f0b613faf565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061249d85611bcf565b600180546010906124bf908490600160801b90046001600160801b0316613e62565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b6000806124fd8461192c8a888a611ac0565b905061250a888486611ac0565b6125149082613cf1565b9050868111156125245786810391505b509695505050505050565b60006101538383670de0b6b3a7640000611ac0565b60006001600160701b03821115611a965760405163086b151760e11b815260040160405180910390fd5b6001546001600160801b0316838110806125b057507f00000000000000000000000000000000000000000000000000000000000000006125ae8583613d04565b105b156125bd576125bd613175565b6003549084900390600f0b6125d28482613e42565b9050836125de86611a6c565b13801561261357507f00000000000000000000000000000000000000000000000000000000000000006126118383611ba9565b105b1561262057612620613175565b600254600160801b90046001600160801b03166126626120488261264c670de0b6b3a764000088613dbd565b6004546001600160801b031691908c6000613203565b600480546001600160801b0319166001600160801b039290921691909117905561268c8882613d04565b905061269781611bcf565b600280546001600160801b03928316600160801b0292169190911790556126bd83611bcf565b600180546001600160801b0319166001600160801b03929092169190911790556126e682611bf9565b600380546001600160801b0319166001600160801b039290921691909117905561270f87611bcf565b60018054601090612731908490600160801b90046001600160801b0316613e22565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b600061278861276e84836132e0565b6127798460006132e0565b6127839190613e42565b611bf9565b9050600081600f0b13156127dd57600280548291906000906127b49084906001600160801b0316613e22565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b121561280d576127f281613fdc565b600280546000906127b49084906001600160801b0316613e62565b505050565b60008061281f858561252f565b905061282a816132f6565b94508460000361283e576000915050610153565b61284e6040840160208501613c94565b1561287d57612876856128646020860186613c5d565b6128716040870187613f38565b6133df565b91506128a4565b6128a08561288e6020860186613c5d565b61289b6040870187613f38565b613579565b8491505b509392505050565b60006101538383670de0b6b3a764000061309d565b60025460009081906128dc906001600160801b0316846132a1565b90506129087f000000000000000000000000000000000000000000000000000000000000000082613cf1565b6001546001600160801b031611156120c3576001547f0000000000000000000000000000000000000000000000000000000000000000906129539083906001600160801b0316613d04565b6101539190613d04565b612965613b23565b60008061297184611932565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b81526004016129ac9190613d95565b6040805180830381865af41580156129c8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906129ec9190613f7f565b9350905082612a015750600091506101129050565b6000612a28612a2384610160015185610140015161252f90919063ffffffff16565b611a6c565b612a48612a238561012001518661010001516128ac90919063ffffffff16565b612a529190613e42565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b60015460035460405163685a2be760e11b81526001600160801b0380841660048301819052600f9390930b60248301819052600160801b90940416604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612b88573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612bac9190614002565b935093509350935080612bc85750600098975050505050505050565b868414612bf957612bd884611bcf565b600180546001600160801b0319166001600160801b03929092169190911790555b858314612c2a57612c0983611bf9565b600380546001600160801b0319166001600160801b03929092169190911790555b848214612c5857612c3a82611bcf565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b6000808073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612cb7575047612d42565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015612d1b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612d3f9190613da4565b90505b6001600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612dbd5787341015612dac576040516312171d8360e31b815260040160405180910390fd5b612db68834613d04565b9050612e57565b6040516323b872dd60e01b8152336004820152306024820152604481018990527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015612e30573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612e549190614043565b91505b81612e75576040516312171d8360e31b815260040160405180910390fd5b601254600003612eba57612ea9887f0000000000000000000000000000000000000000000000000000000000000000611ade565b601281905594509250610112915050565b601254600090612ecc908a9086611ac0565b90508060126000828254612ee09190613cf1565b9091555090955090935061011292505050565b6000612efe84611e64565b9050601254600003612f3c57612f34817f0000000000000000000000000000000000000000000000000000000000000000611ade565b601255612f62565b6000612f47826132f6565b90508060126000828254612f5b9190613cf1565b9091555050505b6001600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612fdd5782341015612fcc576040516312171d8360e31b815260040160405180910390fd5b612fd68334613d04565b9050613077565b6040516323b872dd60e01b8152336004820152306024820152604481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015613050573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906130749190614043565b91505b81613095576040516312171d8360e31b815260040160405180910390fd5b505050505050565b60008260001904841183021582026130b457600080fd5b50910281810615159190040190565b600080670de0b6b3a76400006130d7610e1a565b6130e19190613dbd565b90508083116130f15760006130fb565b6130fb8184613d04565b9150610153613132670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613dbd565b8390611ade565b60008060008361314886611a6c565b6131529190613e42565b9050600081121561316a5760008092509250506118ff565b946001945092505050565b60405163bb55fd2760e01b815260040160405180910390fd5b6000816000036131a75750670de0b6b3a7640000611774565b826000036131b757506000611774565b60006131c283611a6c565b905060006131d76131d286611a6c565b613707565b90508181026131ee670de0b6b3a764000082614060565b90506131f98161392d565b9695505050505050565b60008260000361321457508461013a565b8115613267576132456132278487613cf1565b613231858761252f565b61323b888a61252f565b61192c9190613cf1565b9050600061325385886120b4565b905080821015613261578091505b5061013a565b8285036132765750600061013a565b6101376132838487613d04565b61328d85876128ac565b613297888a61252f565b61192c9190613d04565b600061015383670de0b6b3a76400008461309d565b600060016001607f1b03821115611a965760405163a5353be560e01b815260040160405180910390fd5b60008183136132ef5781610153565b5090919050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016133455750476133d0565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156133a9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906133cd9190613da4565b90505b60125461015390849083611ac0565b600060125485116133f057846133f4565b6012545b9450600061340186611e64565b905085601260008282546134159190613d04565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016134bb576040516001600160a01b038716908390600081818185875af1925050503d80600081146134ab576040519150601f19603f3d011682016040523d82523d6000602084013e6134b0565b606091505b505080915050613551565b60405163a9059cbb60e01b81526001600160a01b038781166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af115801561352a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061354e9190614043565b90505b8061356f576040516312171d8360e31b815260040160405180910390fd5b5095945050505050565b6012548411613588578361358c565b6012545b9350600061359985611e64565b905084601260008282546135ad9190613d04565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601613653576040516001600160a01b038616908390600081818185875af1925050503d8060008114613643576040519150601f19603f3d011682016040523d82523d6000602084013e613648565b606091505b5050809150506136e9565b60405163a9059cbb60e01b81526001600160a01b038681166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af11580156136c2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906136e69190614043565b90505b80613095576040516312171d8360e31b815260040160405180910390fd5b60008082136137295760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906137ac9084901c611a6c565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361394857506000919050565b680755bf798b4a1bf1e58212613971576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b0181810595509293509091906131f974029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611a6c565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b604051806101200160405280613b37613ac2565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000606082840312156120c357600080fd5b600080600060608486031215613b9c57600080fd5b8335925060208401359150604084013567ffffffffffffffff811115613bc157600080fd5b613bcd86828701613b75565b9150509250925092565b60008060408385031215613bea57600080fd5b50508035926020909101359150565b600080600080600060a08688031215613c1157600080fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff811115613c4457600080fd5b613c5088828901613b75565b9150509295509295909350565b600060208284031215613c6f57600080fd5b81356001600160a01b038116811461015357600080fd5b8015158114610dff57600080fd5b600060208284031215613ca657600080fd5b813561015381613c86565b634e487b7160e01b600052601260045260246000fd5b600082613cd657613cd6613cb1565b500690565b634e487b7160e01b600052601160045260246000fd5b8082018082111561177457611774613cdb565b8181038181111561177457611774613cdb565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b61018081016117748284613d17565b600060208284031215613db657600080fd5b5051919050565b808202811582820484141761177457611774613cdb565b600080600060608486031215613de957600080fd5b8351925060208401519150604084015190509250925092565b6001600160701b03818116838216019080821115611bc857611bc8613cdb565b6001600160801b03818116838216019080821115611bc857611bc8613cdb565b8181036000831280158383131683831282161715611bc857611bc8613cdb565b6001600160801b03828116828216039080821115611bc857611bc8613cdb565b60006102a082019050613e96828551613d17565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215613f0b57600080fd5b505080516020909101519092909150565b6000600160ff1b8201613f3157613f31613cdb565b5060000390565b6000808335601e19843603018112613f4f57600080fd5b83018035915067ffffffffffffffff821115613f6a57600080fd5b6020019150368190038213156118ff57600080fd5b60008060408385031215613f9257600080fd5b825191506020830151613fa481613c86565b809150509250929050565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561177457611774613cdb565b600081600f0b60016001607f1b03198103613ff957613ff9613cdb565b60000392915050565b6000806000806080858703121561401857600080fd5b845193506020850151925060408501519150606085015161403881613c86565b939692955090935050565b60006020828403121561405557600080fd5b815161015381613c86565b60008261406f5761406f613cb1565b600160ff1b82146000198414161561408957614089613cdb565b50059056fea26469706673582212205c78549a2edaed264f77b02bb4254eea5a6273b5e8d4db797c5431ae7ead26fa64736f6c63430008140033',
    methodIdentifiers: {
        "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": "4c2ac1d9",
        "checkpoint(uint256,uint256)": "414f826d",
        "initialize(uint256,uint256,(address,bool,bytes))": "77d05ff4",
        "redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))": "074a6de9",
        "removeLiquidity(uint256,uint256,(address,bool,bytes))": "cbc13434"
    }
};
