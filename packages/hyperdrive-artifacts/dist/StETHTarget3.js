export const StETHTarget3 = {
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
    bytecode: '0x6102606040523480156200001257600080fd5b5060405162003e5d38038062003e5d8339810160408190526200003591620001ec565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c090815260c0808601516101e05260e08087015161020052610120808801519092526101008088015190915261014080880151909152918601805151909152805190920151905280516040908101516101609081529151606090810151610180908152918601518516610220528501516102405290840151600a80546001600160a01b031990811692861692909217905590840151600880548316918516919091179055920151600980549093169116179055620002eb565b6040516101e081016001600160401b03811182821017156200015457634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200017257600080fd5b919050565b6000608082840312156200018a57600080fd5b604051608081016001600160401b0381118282101715620001bb57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600061024082840312156200020057600080fd5b6200020a62000122565b62000215836200015a565b815262000225602084016200015a565b602082015262000238604084016200015a565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140808401518183015250610160620002a38185016200015a565b90820152610180620002b78482016200015a565b908201526101a0620002cb8482016200015a565b908201526101c0620002e08585830162000177565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e0516102005161022051610240516139dd620004806000396000505060005050600081816104a1015281816104d001526104fd01526000818161033a0152818161074801528181610c3e015261194b0152600081816108fd015281816109e801528181610a7b01528181610b43015281816119250152818161249b015281816124fe015281816127f9015281816128350152612a2b01526000818161039b0152818161096d01528181610eba01526118ff015260006120a0015260006121fb01526000818161113d01526121cf015260005050600081816103dd015281816109c001528181610edb01526119710152600081816103bc015281816104760152818161099a015281816110750152612d5001526000818161029401528181610e1101528181610f0d01528181610f9401528181610ff5015261102d015260008181611e0101528181612bc901528181612c6401528181612f510152612fc90152600050506139dd6000f3fe60806040526004361061004a5760003560e01c8063074a6de91461004f578063414f826d146100895780634c2ac1d9146100ab57806377d05ff4146100cc578063cbc13434146100df575b600080fd5b34801561005b57600080fd5b5061006f61006a3660046134bd565b6100ff565b604080519283526020830191909152015b60405180910390f35b34801561009557600080fd5b506100a96100a436600461350d565b61011a565b005b6100be6100b936600461352f565b610128565b604051908152602001610080565b6100be6100da3660046134bd565b610143565b3480156100eb57600080fd5b5061006f6100fa3660046134bd565b61015a565b60008061010d858585610168565b915091505b935093915050565b610124828261023d565b5050565b600061013786868686866102fc565b90505b95945050505050565b60006101508484846108af565b90505b9392505050565b60008061010d858585610c28565b600080610173610d8f565b61017c83610db9565b6000610186610df2565b905061019b610193610e0a565b826004610e40565b506101a933878388886113d5565b90935091506101bb6020850185613593565b6001600160a01b0316337f4ce1e73a001c994d4d884cd1e382579f9c1e81eccf26e70ece8caa1b60a8c2cf846101f287868a611518565b6101fd88878b611547565b61020d60408b0160208c016135ca565b604080519485526020850193909352918301521515606082015260800160405180910390a3506101126001600055565b610245610d8f565b600061024f610df2565b6000848152600760205260409020600101549091506001600160801b0316156102835761027c818361156f565b50506102f2565b600061028d610e0a565b90506102b97f0000000000000000000000000000000000000000000000000000000000000000856135fd565b1515806102c557508381105b156102e35760405163ecd29e8160e01b815260040160405180910390fd5b6102ee848385610e40565b5050505b6101246001600055565b6000610306610d8f565b600554610100900460ff161561032f576040516321081abf60e01b815260040160405180910390fd5b61033882610db9565b7f00000000000000000000000000000000000000000000000000000000000000008610156103795760405163211ddda360e11b815260040160405180910390fd5b600061040161038661176a565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061178b565b90508481108061041057508381115b1561042e57604051633b61151160e11b815260040160405180910390fd5b60008061043b89866117b1565b915091506000610449610e0a565b905061045781836004610e40565b5060008181526007602052604081205461049a906001600160801b03167f000000000000000000000000000000000000000000000000000000000000000061188a565b90506104c67f000000000000000000000000000000000000000000000000000000000000000082613627565b85118061052557507f00000000000000000000000000000000000000000000000000000000000000008111801561052557506105227f00000000000000000000000000000000000000000000000000000000000000008261363a565b85105b1561054357604051630552b01360e31b815260040160405180910390fd5b50600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e954909161058f916001600160801b039091169061363a565b6000808052600e6020527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54919250906105ca908390613627565b905060008060006105da876118b6565b604051635f9d50ab60e11b815290915073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063bf3aa156906106149084906004016136cb565b602060405180830381865af4158015610631573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061065591906136da565b9150610668610663896119f0565b611a1e565b6001546001600160801b038082168352600354600f0b6020840152600160801b9091041660408083019190915251635f9d50ab60e11b815273__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063bf3aa156906106ca9084906004016136cb565b602060405180830381865af41580156106e7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061070b91906136da565b92508183101561072e5760405163184d952160e11b815260040160405180910390fd5b610744848361073d818761363a565b9190611a44565b99507f00000000000000000000000000000000000000000000000000000000000000008a10156107875760405163211ddda360e11b815260040160405180910390fd5b508d8d610794828c611a62565b10156107b35760405163c972651760e01b815260040160405180910390fd5b6107cb60006107c560208e018e613593565b8c611a77565b60006107d688611b20565b9050806107f657604051638bdf918d60e01b815260040160405180910390fd5b6000851561080d576108088487611a62565b610810565b60005b90508c6000610820858c84611518565b905061082f6020830183613593565b6001600160a01b03167fa59daf574c5c8db34377de83bceea2aa1433cc506d656f5e8f46e5f4b5c58a868f838f61086c60408801602089016135ca565b60408051948552602085019390935291830152151560608201526080810186905260a00160405180910390a25050505050505050505050505061013a6001600055565b60006108b9610d8f565b6108c282610db9565b60055460ff16156108e657604051637983c05160e01b815260040160405180910390fd5b6000806108f386856117b1565b90925090506109237f000000000000000000000000000000000000000000000000000000000000000060026136f3565b82101561094357604051632afb507160e21b815260040160405180910390fd5b6005805460ff1916600117905560405163594f0e8f60e11b815260048101839052602481018290527f00000000000000000000000000000000000000000000000000000000000000006044820152606481018690527f000000000000000000000000000000000000000000000000000000000000000060848201527f000000000000000000000000000000000000000000000000000000000000000060a482015260027f000000000000000000000000000000000000000000000000000000000000000002830393506000908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063b29e1d1e9060c401606060405180830381865af4158015610a4f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a73919061370a565b9250925092507f0000000000000000000000000000000000000000000000000000000000000000610aa48484611b2d565b1015610ac35760405163216f4ab160e21b815260040160405180910390fd5b610acc83611b53565b600180546001600160801b0319166001600160801b0392909216919091179055610af582611b7d565b600380546001600160801b0319166001600160801b0392909216919091179055610b1e81611b53565b600180546001600160801b03928316600160801b029216919091179055610b676000807f0000000000000000000000000000000000000000000000000000000000000000611a77565b610b7f6000610b7960208a018a613593565b88611a77565b610b92610b8a610e0a565b856004610e40565b506000610ba08a868a611518565b9050610baf6020890189613593565b6001600160a01b03167fdfe2bf9f580df5ec15438120ffa6f0603237c4e6b65d07140a4695317da4f952888389610bec60408e0160208f016135ca565b6040805194855260208501939093529183015215156060820152608081018c905260a00160405180910390a25050505050506101536001600055565b600080610c33610d8f565b610c3c83610db9565b7f0000000000000000000000000000000000000000000000000000000000000000851015610c7d5760405163211ddda360e11b815260040160405180910390fd5b6000610c87610df2565b9050610c94610193610e0a565b50610ca160003388611bb9565b610cb6600360f81b610b796020870187613593565b6000610cd1610cc86020870187613593565b888489896113d5565b9094509050610ce0818861363a565b92506000610ced83611c8a565b509050610cfd6020870187613593565b6001600160a01b0316337f56e07298e87dce53d3298b9775b947b87b39b2dde51df86371f0540885da83c98a610d3489888c611518565b610d3f8a898d611547565b610d4f60408d0160208e016135ca565b60408051948552602085019390935291830152151560608201526080810188905260a0810185905260c00160405180910390a35050506101126001600055565b600260005403610db257604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b6000610dc86020830183613593565b6001600160a01b031603610def5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b6000610e05670de0b6b3a7640000611de8565b905090565b6000610e367f0000000000000000000000000000000000000000000000000000000000000000426135fd565b610e05904261363a565b600083815260076020526040812060018101546001600160801b0316151580610e6857504285115b15610e8157600101546001600160801b03169050610153565b6000806000610e8e610e0a565b9050808803610f0657869250610eff610ea561176a565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611e75565b9150610fc2565b6000610f327f00000000000000000000000000000000000000000000000000000000000000008a613627565b90505b818103610f4d57879350610f4a610ea561176a565b92505b6000818152600760205260409020600101546001600160801b031693508315610f8f576000818152600760205260409020546001600160801b03169250610fc0565b610fb97f000000000000000000000000000000000000000000000000000000000000000082613627565b9050610f35565b505b610fcb83611b53565b6001850180546001600160801b0319166001600160801b039290921691909117905561102161101a7f00000000000000000000000000000000000000000000000000000000000000008a61363a565b8984611e8c565b61105f886110596110527f000000000000000000000000000000000000000000000000000000000000000083613627565b4290611fca565b84611e8c565b61106887611fdf565b506000905060078161109a7f00000000000000000000000000000000000000000000000000000000000000008c61363a565b815260208101919091526040016000908120600101546001600160801b031691506110c660028b612183565b6000818152600e60205260408120549192508b8b831561120c57600192506000806110f586898d8660006121b8565b9150915080600b600082825461110b9190613627565b90915550611127905086600084611121816119f0565b88612287565b6111318183613627565b915061116186838a8e877f0000000000000000000000000000000000000000000000000000000000000000612401565b91506111756111708385612445565b61245a565b600580546002906111969084906201000090046001600160701b0316613738565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506111c382611b53565b600580546010906111e5908490600160801b90046001600160801b0316613758565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000611219600184612183565b6000818152600e602052604090205490915080156113285760019450600080611246838b8f8860016121b8565b9150915080600b600082825461125c9190613627565b90915550611278905083600084611272816119f0565b8a612484565b611282818361363a565b91506112916111708387612445565b600580546002906112b29084906201000090046001600160701b0316613738565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506112df82611b53565b60058054601090611301908490600160801b90046001600160801b0316613758565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b84156113605761135461133a876119f0565b611343836119f0565b61134d9190613778565b6000612675565b61135e838f61156f565b505b600061136b84611c8a565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a250999f9e505050505050505050505050505050565b6000806113e185611b20565b505060065485906001600160801b03168082111561140657806001600160801b031691505b8160000361141b57600080925092505061150e565b61142a600360f81b8984611bb9565b6006546000906114509084906001600160801b03600160801b9091048116908516611a44565b905061145b83611b53565b6114659083613798565b600680546001600160801b0319166001600160801b039290921691909117905561148e81611b53565b600680546010906114b0908490600160801b90046001600160801b0316613798565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506114df818887612728565b93506114eb86846127c2565b84101561150b5760405163c972651760e01b815260040160405180910390fd5b50505b9550959350505050565b600061152a60408301602084016135ca565b15611536575082610153565b6115408484612445565b9050610153565b600061155960408301602084016135ca565b15611568576115408484611a62565b5082610153565b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e954909182916115ba916001600160801b03169061363a565b9050806000036115ce576001915050611764565b60006115d9856127d7565b9050806000036115ee57600192505050611764565b6000806115fc838589612873565b9150915080611612576000945050505050611764565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b815260040161164e9291906137b8565b6040805180830381865af415801561166a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061168e919061382e565b915091506116ac61169e826119f0565b6116a790613852565b6129e7565b9250826116c25760009650505050505050611764565b6116cb82611b53565b600680546000906116e69084906001600160801b0316613758565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061171381611b53565b60068054601090611735908490600160801b90046001600160801b0316613758565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600196505050505050505b92915050565b600154600354600091610e05916001600160801b0390911690600f0b611b2d565b60008061179a87878786611e75565b90506117a6818561188a565b979650505050505050565b600080806117c560408501602086016135ca565b156117ea576117e0856117db604087018761386e565b612b7d565b9093509050611806565b5034611802856117fd604087018761386e565b612c42565b8492505b61180e610df2565b9150801561188157604051600090339083908381818185875af1925050503d8060008114611858576040519150601f19603f3d011682016040523d82523d6000602084013e61185d565b606091505b505090508061187f576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b600061015361189e84846301e13380612cdf565b6118b085670de0b6b3a764000061363a565b90611a62565b6118be6133f8565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e083015260025404821661010082015260045490916101208301916119b69116612d05565b81526003546001600160801b03600160801b91829004811660208401526004546040909301926119e892900416612d05565b905292915050565b60006001600160ff1b03821115611a1a5760405163396ea70160e11b815260040160405180910390fd5b5090565b611a27816129e7565b610def57604051635044b7f560e01b815260040160405180910390fd5b6000826000190484118302158202611a5b57600080fd5b5091020490565b600061015383670de0b6b3a764000084611a44565b6000838152600d602090815260408083206001600160a01b038616845290915281208054839290611aa9908490613627565b90915550506000838152600e602052604081208054839290611acc908490613627565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b600061176482600461156f565b600080611b3a8484612d7b565b909250905080611b4c57611b4c612db7565b5092915050565b60006001600160801b03821115611a1a57604051630f0af95160e11b815260040160405180910390fd5b600060016001607f1b0319821280611b9b575060016001607f1b0382135b15611a1a5760405163a5353be560e01b815260040160405180910390fd5b6000838152600d602090815260408083206001600160a01b0386168452909152902054811115611bfc57604051631e9acf1760e31b815260040160405180910390fd5b6000838152600d602090815260408083206001600160a01b0386168452825280832080548590039055858352600e90915281208054839290611c3f90849061363a565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101611b13565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e611cb3876118b6565b6040518263ffffffff1660e01b8152600401611ccf91906136cb565b6040805180830381865af4158015611ceb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d0f91906138b5565b9150915080611d25575060009485945092505050565b6000808611611d35576000611d3f565b611d3f8387612445565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b0390921691611daa9190613627565b611db4919061363a565b905080600003611dcd5750600096879650945050505050565b6000611dd98383611a62565b98600198509650505050505050565b604051630f451f7160e31b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690637a28fb88906024015b602060405180830381865afa158015611e51573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061176491906136da565b600061013a82611e86858888611a44565b90612dd0565b600083815260076020526040902054600160801b90046001600160801b0316808303611eb85750505050565b6000848152600760205260408120546001600160801b031690819003611f1257611ee183611b53565b600086815260076020526040902080546001600160801b0319166001600160801b0392909216919091179055611f90565b611f63611f5e670de0b6b3a7640000611f2b888661363a565b611f3591906136f3565b85670de0b6b3a7640000611f49878a61363a565b611f5391906136f3565b859291906001612e45565b611b53565b600086815260076020526040902080546001600160801b0319166001600160801b03929092169190911790555b611f9984611b53565b60009586526007602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b6000818311611fd95782610153565b50919050565b6005546000908190612002908490600160801b90046001600160801b0316612445565b6005546201000090046001600160701b0316925090508181111561217e57600061202c838361363a565b905061203b611f5e8286612ee3565b6005805460109061205d908490600160801b90046001600160801b0316613798565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006120968583611a6290919063ffffffff16565b905060006120c4827f0000000000000000000000000000000000000000000000000000000000000000612445565b905080600b60008282546120d89190613627565b909155506120e89050818361363a565b91506120f382611b53565b6001805460009061210e9084906001600160801b0316613758565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061213b82612ef8565b60038054600090612150908490600f0b6138e5565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60006001600160f81b038211156121ad5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000806121c58785611a62565b915060006121f3837f0000000000000000000000000000000000000000000000000000000000000000612445565b905061221f817f0000000000000000000000000000000000000000000000000000000000000000612445565b9150831561224257612231828261363a565b61223b908461363a565b9250612259565b61224c828261363a565b6122569084613627565b92505b8686101561227c5761226c838789611a44565b9250612279828789611a44565b91505b509550959350505050565b600354600160801b90046001600160801b03166122d0611f5e826122b3670de0b6b3a7640000866136f3565b600454600160801b90046001600160801b031691908a6000612e45565b600480546001600160801b03928316600160801b0292169190911790556122f686611b53565b6123009082613798565b600380546001600160801b03928316600160801b02921691909117905561232684611b53565b600180546000906123419084906001600160801b0316613758565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061236e83611b7d565b60038054600090612383908490600f0b6138e5565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506123b385611b53565b600180546010906123d5908490600160801b90046001600160801b0316613798565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600080612413846118b08a888a611a44565b9050612420888486611a44565b61242a9082613627565b90508681111561243a5786810391505b509695505050505050565b60006101538383670de0b6b3a7640000611a44565b60006001600160701b03821115611a1a5760405163086b151760e11b815260040160405180910390fd5b6001546001600160801b0316838110806124c657507f00000000000000000000000000000000000000000000000000000000000000006124c4858361363a565b105b156124d3576124d3612db7565b6003549084900390600f0b6124e88482613778565b9050836124f4866119f0565b13801561252957507f00000000000000000000000000000000000000000000000000000000000000006125278383611b2d565b105b1561253657612536612db7565b600254600160801b90046001600160801b0316612578611f5e82612562670de0b6b3a7640000886136f3565b6004546001600160801b031691908c6000612e45565b600480546001600160801b0319166001600160801b03929092169190911790556125a2888261363a565b90506125ad81611b53565b600280546001600160801b03928316600160801b0292169190911790556125d383611b53565b600180546001600160801b0319166001600160801b03929092169190911790556125fc82611b7d565b600380546001600160801b0319166001600160801b039290921691909117905561262587611b53565b60018054601090612647908490600160801b90046001600160801b0316613758565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b600061269e6126848483612f22565b61268f846000612f22565b6126999190613778565b611b7d565b9050600081600f0b13156126f357600280548291906000906126ca9084906001600160801b0316613758565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b12156127235761270881613912565b600280546000906126ca9084906001600160801b0316613798565b505050565b6000806127358585612445565b905061274081612f38565b945084600003612754576000915050610153565b61276460408401602085016135ca565b156127935761278c8561277a6020860186613593565b612787604087018761386e565b612f88565b91506127ba565b6127b6856127a46020860186613593565b6127b1604087018761386e565b612fa3565b8491505b509392505050565b60006101538383670de0b6b3a7640000612cdf565b60025460009081906127f2906001600160801b031684612ee3565b905061281e7f000000000000000000000000000000000000000000000000000000000000000082613627565b6001546001600160801b03161115611fd9576001547f0000000000000000000000000000000000000000000000000000000000000000906128699083906001600160801b031661363a565b610153919061363a565b61287b613459565b600080612887846118b6565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b81526004016128c291906136cb565b6040805180830381865af41580156128de573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061290291906138b5565b93509050826129175750600091506101129050565b600061293e61293984610160015185610140015161244590919063ffffffff16565b6119f0565b61295e6129398561012001518661010001516127c290919063ffffffff16565b6129689190613778565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b60015460035460405163685a2be760e11b81526001600160801b0380841660048301819052600f9390930b60248301819052600160801b90940416604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612a9e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612ac29190613938565b935093509350935080612ade5750600098975050505050505050565b868414612b0f57612aee84611b53565b600180546001600160801b0319166001600160801b03929092169190911790555b858314612b4057612b1f83611b7d565b600380546001600160801b0319166001600160801b03929092169190911790555b848214612b6e57612b5082611b53565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b60008084341015612ba1576040516312171d8360e31b815260040160405180910390fd5b5060085460405163a1903eab60e01b81526001600160a01b03918216600482015234869003917f0000000000000000000000000000000000000000000000000000000000000000169063a1903eab90879060240160206040518083038185885af1158015612c13573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190612c3891906136da565b9150935093915050565b604051636d78045960e01b8152336004820152306024820152604481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636d780459906064016020604051808303816000875af1158015612cb5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612cd991906136da565b50505050565b6000826000190484118302158202612cf657600080fd5b50910281810615159190040190565b600080670de0b6b3a7640000612d19610e0a565b612d2391906136f3565b9050808311612d33576000612d3d565b612d3d818461363a565b9150610153612d74670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006136f3565b8390611a62565b600080600083612d8a866119f0565b612d949190613778565b90506000811215612dac576000809250925050611883565b946001945092505050565b60405163bb55fd2760e01b815260040160405180910390fd5b600081600003612de95750670de0b6b3a7640000611764565b82600003612df957506000611764565b6000612e04836119f0565b90506000612e19612e14866119f0565b61303d565b9050818102612e30670de0b6b3a764000082613979565b9050612e3b81613263565b9695505050505050565b600082600003612e5657508461013a565b8115612ea957612e87612e698487613627565b612e738587612445565b612e7d888a612445565b6118b09190613627565b90506000612e958588611fca565b905080821015612ea3578091505b5061013a565b828503612eb85750600061013a565b610137612ec5848761363a565b612ecf85876127c2565b612ed9888a612445565b6118b0919061363a565b600061015383670de0b6b3a764000084612cdf565b600060016001607f1b03821115611a1a5760405163a5353be560e01b815260040160405180910390fd5b6000818313612f315781610153565b5090919050565b604051631920845160e01b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690631920845190602401611e34565b600060405163350b944160e11b815260040160405180910390fd5b604051638fcb4e5b60e01b81526001600160a01b038481166004830152602482018690527f00000000000000000000000000000000000000000000000000000000000000001690638fcb4e5b906044016020604051808303816000875af1158015613012573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061303691906136da565b5050505050565b600080821361305f5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906130e29084901c6119f0565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361327e57506000919050565b680755bf798b4a1bf1e582126132a7576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190612e3b74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6119f0565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60405180610120016040528061346d6133f8565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b600060608284031215611fd957600080fd5b6000806000606084860312156134d257600080fd5b8335925060208401359150604084013567ffffffffffffffff8111156134f757600080fd5b613503868287016134ab565b9150509250925092565b6000806040838503121561352057600080fd5b50508035926020909101359150565b600080600080600060a0868803121561354757600080fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff81111561357a57600080fd5b613586888289016134ab565b9150509295509295909350565b6000602082840312156135a557600080fd5b81356001600160a01b038116811461015357600080fd5b8015158114610def57600080fd5b6000602082840312156135dc57600080fd5b8135610153816135bc565b634e487b7160e01b600052601260045260246000fd5b60008261360c5761360c6135e7565b500690565b634e487b7160e01b600052601160045260246000fd5b8082018082111561176457611764613611565b8181038181111561176457611764613611565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b6101808101611764828461364d565b6000602082840312156136ec57600080fd5b5051919050565b808202811582820484141761176457611764613611565b60008060006060848603121561371f57600080fd5b8351925060208401519150604084015190509250925092565b6001600160701b03818116838216019080821115611b4c57611b4c613611565b6001600160801b03818116838216019080821115611b4c57611b4c613611565b8181036000831280158383131683831282161715611b4c57611b4c613611565b6001600160801b03828116828216039080821115611b4c57611b4c613611565b60006102a0820190506137cc82855161364d565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b6000806040838503121561384157600080fd5b505080516020909101519092909150565b6000600160ff1b820161386757613867613611565b5060000390565b6000808335601e1984360301811261388557600080fd5b83018035915067ffffffffffffffff8211156138a057600080fd5b60200191503681900382131561188357600080fd5b600080604083850312156138c857600080fd5b8251915060208301516138da816135bc565b809150509250929050565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561176457611764613611565b600081600f0b60016001607f1b0319810361392f5761392f613611565b60000392915050565b6000806000806080858703121561394e57600080fd5b845193506020850151925060408501519150606085015161396e816135bc565b939692955090935050565b600082613988576139886135e7565b600160ff1b8214600019841416156139a2576139a2613611565b50059056fea2646970667358221220cbea2f0114ca0b2eb27feb6d58474e95460da4b42700cd6f0fc38a185a88e59b64736f6c63430008140033',
    methodIdentifiers: {
        "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": "4c2ac1d9",
        "checkpoint(uint256,uint256)": "414f826d",
        "initialize(uint256,uint256,(address,bool,bytes))": "77d05ff4",
        "redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))": "074a6de9",
        "removeLiquidity(uint256,uint256,(address,bool,bytes))": "cbc13434"
    }
};
