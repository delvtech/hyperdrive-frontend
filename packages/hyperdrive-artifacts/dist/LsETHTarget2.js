export const LsETHTarget2 = {
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
            "name": "openLong",
            "inputs": [
                {
                    "name": "_amount",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_minOutput",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_minVaultSharePrice",
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
                },
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
            "name": "openShort",
            "inputs": [
                {
                    "name": "_bondAmount",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_maxDeposit",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_minVaultSharePrice",
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
                },
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
            "name": "MinimumSharePrice",
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
        }
    ],
    bytecode: '0x6102606040523480156200001257600080fd5b506040516200408738038062004087833981016040819052620000359162000202565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c090815260c0808601516101e090815260e0808801516102005261012080890151909352610100808901519091526101408089015190915290870180515190925281519093015190925281516040908101516101609081529251606090810151610180908152918701518616610220528601516102405291850151600980546001600160a01b031990811692871692909217905591850151600a8054841691861691909117905591840151600b80548316918516919091179055920151600c8054909316911617905562000315565b60405161020081016001600160401b03811182821017156200016a57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200018857600080fd5b919050565b600060808284031215620001a057600080fd5b604051608081016001600160401b0381118282101715620001d157634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600061026082840312156200021657600080fd5b6200022062000138565b6200022b8362000170565b81526200023b6020840162000170565b60208201526200024e6040840162000170565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140808401518183015250610160620002b981850162000170565b90820152610180620002cd84820162000170565b908201526101a0620002e184820162000170565b908201526101c0620002f584820162000170565b908201526101e06200030a858583016200018d565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161024051613bc1620004c660003960005050600050506000505060008181610100015281816103100152612be101526000818161145101528181611b8f01528181611bf2015281816123a4015281816127bf015281816127fb015281816129fa0152612bbb0152600081816107ef01528181610d1a01528181610d5c01528181610e4e015281816112c4015281816113230152612b95015260006117ae0152600081816118d4015281816124c50152818161253e0152612cfb0152600081816109b301528181610dcf015281816113be015281816118a80152612512015260008181610dae015281816124910152612cb701526000818161081001528181610cf801528181610d7d01528181610e6f015281816112a2015281816113440152612c070152600081816101de015281816103a8015281816108eb01526132850152600081816106a9015281816107290152818161079f0152818161086b01526108a30152600081816116080152612411015260005050613bc16000f3fe6080604052600436106100295760003560e01c8063cba2e58d1461002e578063dbbe80701461005a575b600080fd5b61004161003c36600461363b565b61006d565b6040805192835260208301919091520160405180910390f35b61004161006836600461363b565b61008a565b60008061007c86868686610099565b915091505b94509492505050565b60008061007c868686866102c9565b6000806100a461052a565b600654610100900460ff16156100cd576040516321081abf60e01b815260040160405180910390fd5b6100d5610554565b6100de83610575565b6000806100eb88866105ae565b909250905060006100fc8383610683565b90507f000000000000000000000000000000000000000000000000000000000000000081101561013f5760405163211ddda360e11b815260040160405180910390fd5b86821015610160576040516342af972b60e01b815260040160405180910390fd5b600061016a6106a1565b905061017a8184600460016106d2565b50600080600061018a8787610cc9565b919a5091945090925090508b8810156101b65760405163c972651760e01b815260040160405180910390fd5b81600d60008282546101c891906136b0565b909155506101d99050844283610eab565b6102037f0000000000000000000000000000000000000000000000000000000000000000856136b0565b98506102118389888c610fe9565b600061021e60018b611183565b90506102378161023160208e018e6136c3565b8b6111b8565b8d8a8a898e8561024a60208301836136c3565b6001600160a01b03167f7fc9757758f4c7f2eb9f011c4500beb349847d2f2acbdd5ffce3e2f01e79903a86888661028760408801602089016136fa565b8961029560408a018a613717565b6040516102a89796959493929190613787565b60405180910390a350909b5050505050505050505050506100816001600055565b6000806102d461052a565b600654610100900460ff16156102fd576040516321081abf60e01b815260040160405180910390fd5b610305610554565b61030e83610575565b7f000000000000000000000000000000000000000000000000000000000000000086101561034f5760405163211ddda360e11b815260040160405180910390fd5b6000610359611260565b90508481101561037c576040516342af972b60e01b815260040160405180910390fd5b60006103866106a1565b9050600061039f6103956106a1565b84600460016106d2565b905060006103cd7f0000000000000000000000000000000000000000000000000000000000000000846136b0565b90506000806000806103e08e8988611273565b600d8054949850929650909450925083916000906103ff9084906136b0565b909155506104109050874283610eab565b50600061041e84898d6113f9565b9050808d10156104415760405163c972651760e01b815260040160405180910390fd5b61044b818c6105ae565b508e905061045b81858b8961142b565b6000610468600288611183565b90508c6104828261047c60208401846136c3565b856111b8565b858b868461049360208601866136c3565b6001600160a01b03167ffa6dd2e3e152dbc3fe91196c0b8aa871c26fd7a1d07de126ec3159fd4ede2c758d8a866104d060408b0160208c016136fa565b6104e4896104de8a8d6137c8565b90610683565b8d6104f260408e018e613717565b6040516105069897969594939291906137db565b60405180910390a350989d50939b5050505050505050505050506100816001600055565b60026000540361054d57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b341561057357604051631574f9f360e01b815260040160405180910390fd5b565b600061058460208301836136c3565b6001600160a01b0316036105ab5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b816000806105c260408501602086016136fa565b156105e7576105dd856105d86040870187613717565b6115df565b90935090506105ff565b50346105ff856105fa6040870187613717565b6115fb565b610607611260565b9150801561067a57604051600090339083908381818185875af1925050503d8060008114610651576040519150601f19603f3d011682016040523d82523d6000602084013e610656565b606091505b5050905080610678576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b60006106988383670de0b6b3a7640000611635565b90505b92915050565b60006106cd427f0000000000000000000000000000000000000000000000000000000000000000611653565b905090565b600084815260086020526040812060018101546001600160801b03161515806106fa57504286115b1561071357600101546001600160801b03169050610cc1565b60008060006107206106a1565b9050600061074e7f00000000000000000000000000000000000000000000000000000000000000008b6136b0565b90505b818110156107c4576000818152600860205260409020600101546001600160801b0316801561079c576000828152600860205260409020549094506001600160801b031692506107c4565b507f000000000000000000000000000000000000000000000000000000000000000001610751565b83600003610837578893506108346107da611669565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061168a565b92505b50610841836116aa565b6001850180546001600160801b0319166001600160801b03929092169190911790556108976108907f00000000000000000000000000000000000000000000000000000000000000008b6137c8565b8a84610eab565b6108d5896108cf6108c87f0000000000000000000000000000000000000000000000000000000000000000836136b0565b42906116d8565b84610eab565b6108de886116ed565b50600090506008816109107f00000000000000000000000000000000000000000000000000000000000000008d6137c8565b815260208101919091526040016000908120600101546001600160801b0316915061093c60028c611183565b6000818152601060205260408120549192508c8c8315610a82576001925060008061096b86898d866000611891565b9150915080600d600082825461098191906136b0565b9091555061099d90508660008461099781611960565b8861198a565b6109a781836136b0565b91506109d786838a8e877f0000000000000000000000000000000000000000000000000000000000000000611b04565b91506109eb6109e68385610683565b611b4e565b60068054600290610a0c9084906201000090046001600160701b0316613823565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a39826116aa565b60068054601090610a5b908490600160801b90046001600160801b0316613843565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000610a8f600184611183565b6000818152601060205260409020549091508015610b9e5760019450600080610abc838b8f886001611891565b9150915080600d6000828254610ad291906136b0565b90915550610aee905083600084610ae881611960565b8a611b78565b610af881836137c8565b9150610b076109e68387610683565b60068054600290610b289084906201000090046001600160701b0316613823565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610b55826116aa565b60068054601090610b77908490600160801b90046001600160801b0316613843565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610bd857610bca610bb087611960565b610bb983611960565b610bc39190613863565b6000611d69565b8e610bd58482611da8565b50505b6000610be384611fa2565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a2600c546001600160a01b031615610cb1578e610cad5a604051336024820152604481018990528315156064820152600090819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b179052600c546001600160a01b0316939291906120ee565b5050505b50999b5050505050505050505050505b949350505050565b6000806000806000610cd9611669565b600254909150610d3e908290600160801b90046001600160801b0316897f00000000000000000000000000000000000000000000000000000000000000008a7f0000000000000000000000000000000000000000000000000000000000000000612179565b600254909450610da1908290600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061168a565b9150610df88785610df3857f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006121a5565b61220a565b15610e0557610e0561224c565b610e1187858885612265565b91965094509250670de0b6b3a7640000610e93610e2e87846136b0565b600254610e4c908890600160801b90046001600160801b03166137c8565b7f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061168a565b1115610ea157610ea161224c565b5092959194509250565b600083815260086020526040902054600160801b90046001600160801b0316808303610ed75750505050565b6000848152600860205260408120546001600160801b031690819003610f3157610f00836116aa565b600086815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055610faf565b610f82610f7d670de0b6b3a7640000610f4a88866137c8565b610f549190613883565b85670de0b6b3a7640000610f68878a6137c8565b610f729190613883565b8592919060016122b1565b6116aa565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b610fb8846116aa565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600354600160801b90046001600160801b031661102b610f7d82611015670de0b6b3a764000086613883565b6005546001600160801b031691908860016122b1565b600580546001600160801b0319166001600160801b0392909216919091179055611054856116aa565b6002805460009061106f9084906001600160801b0316613843565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061109c846116aa565b600280546010906110be908490600160801b90046001600160801b031661389a565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506110eb846116aa565b6110f59082613843565b600380546001600160801b03808416600160801b0291161790559050600061111c83612359565b905061113a8161112b87611960565b61113590846138ba565b611d69565b6111438461239d565b61114f5761114f61224c565b600061115a856123fd565b90508061117a57604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b60006001600160f81b038211156111ad5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600f602090815260408083206001600160a01b0386168452909152812080548392906111ea9084906136b0565b90915550506000838152601060205260408120805483929061120d9084906136b0565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b60006106cd670de0b6b3a764000061240a565b6000806000806000611283611669565b6002549091506112e8908290600160801b90046001600160801b03168a7f00000000000000000000000000000000000000000000000000000000000000008b7f0000000000000000000000000000000000000000000000000000000000000000612436565b9350876112f58589612457565b11156113035761130361224c565b6002546000908190611368908490600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061168a565b935061137e8a670de0b6b3a7640000868c61246c565b50919350909150611391905081836137c8565b61139b90876137c8565b9550886113e8816113e28d6113b0868c6137c8565b8d6113bb878261257a565b877f0000000000000000000000000000000000000000000000000000000000000000612590565b90612457565b975090945050505093509350935093565b600061140b60408301602084016136fa565b15611417575082611424565b61142184846125b5565b90505b9392505050565b6002546001600160801b0316838110156114475761144761224c565b60045490849003907f00000000000000000000000000000000000000000000000000000000000000009061147f908390600f0b6125ca565b101561148d5761148d61224c565b6004546114d790610f7d90600160801b90046001600160801b03166114ba670de0b6b3a764000086613883565b600554600160801b90046001600160801b031691908960016122b1565b600580546001600160801b03928316600160801b0292169190911790556114fd816116aa565b600280546001600160801b0319166001600160801b0392909216919091179055611526856116aa565b60028054601090611548908490600160801b90046001600160801b0316613843565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611575856116aa565b60048054601090611597908490600160801b90046001600160801b0316613843565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006115c683612359565b905061113a816115d588611960565b6111359084613863565b60008060405163350b944160e11b815260040160405180910390fd5b6116306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163330866125f0565b505050565b600082600019048411830215820261164c57600080fd5b5091020490565b600061165f82846138f8565b61069890846137c8565b6002546004546000916106cd916001600160801b0390911690600f0b6125ca565b60006116a18261169b858888611635565b90612650565b95945050505050565b60006001600160801b038211156116d457604051630f0af95160e11b815260040160405180910390fd5b5090565b60008183116116e75782610698565b50919050565b6006546000908190611710908490600160801b90046001600160801b0316610683565b6006546201000090046001600160701b0316925090508181111561188c57600061173a83836137c8565b9050611749610f7d82866126bb565b6006805460109061176b908490600160801b90046001600160801b031661389a565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006117a485836125b590919063ffffffff16565b905060006117d2827f0000000000000000000000000000000000000000000000000000000000000000610683565b905080600d60008282546117e691906136b0565b909155506117f6905081836137c8565b9150611801826116aa565b6002805460009061181c9084906001600160801b0316613843565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611849826126d0565b6004805460009061185e908490600f0b61390c565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60008061189e87856125b5565b915060006118cc837f0000000000000000000000000000000000000000000000000000000000000000610683565b90506118f8817f0000000000000000000000000000000000000000000000000000000000000000610683565b9150831561191b5761190a82826137c8565b61191490846137c8565b9250611932565b61192582826137c8565b61192f90846136b0565b92505b8686101561195557611945838789611635565b9250611952828789611635565b91505b509550959350505050565b60006001600160ff1b038211156116d45760405163396ea70160e11b815260040160405180910390fd5b600454600160801b90046001600160801b03166119d3610f7d826119b6670de0b6b3a764000086613883565b600554600160801b90046001600160801b031691908a60006122b1565b600580546001600160801b03928316600160801b0292169190911790556119f9866116aa565b611a03908261389a565b600480546001600160801b03928316600160801b029216919091179055611a29846116aa565b60028054600090611a449084906001600160801b0316613843565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611a71836126fa565b60048054600090611a86908490600f0b61390c565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611ab6856116aa565b60028054601090611ad8908490600160801b90046001600160801b031661389a565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600080611b1c84611b168a888a611635565b906125b5565b9050611b29888486611635565b611b3390826136b0565b905086811115611b435786810391505b509695505050505050565b60006001600160701b038211156116d45760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b031683811080611bba57507f0000000000000000000000000000000000000000000000000000000000000000611bb885836137c8565b105b15611bc757611bc761224c565b6004549084900390600f0b611bdc8482613863565b905083611be886611960565b138015611c1d57507f0000000000000000000000000000000000000000000000000000000000000000611c1b83836125ca565b105b15611c2a57611c2a61224c565b600354600160801b90046001600160801b0316611c6c610f7d82611c56670de0b6b3a764000088613883565b6005546001600160801b031691908c60006122b1565b600580546001600160801b0319166001600160801b0392909216919091179055611c9688826137c8565b9050611ca1816116aa565b600380546001600160801b03928316600160801b029216919091179055611cc7836116aa565b600280546001600160801b0319166001600160801b0392909216919091179055611cf0826126fa565b600480546001600160801b0319166001600160801b0392909216919091179055611d19876116aa565b60028054601090611d3b908490600160801b90046001600160801b0316613843565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b600354611d8490610f7d906001600160801b03168484612736565b600380546001600160801b0319166001600160801b03929092169190911790555050565b600754600360f81b600090815260106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215490918291611df3916001600160801b0316906137c8565b905080600003611e0757600191505061069b565b6000611e128561279d565b905080600003611e275760019250505061069b565b600080611e35838589612839565b9150915080611e4b57600094505050505061069b565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401611e879291906139b7565b6040805180830381865af4158015611ea3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ec79190613a2d565b91509150611ee5611ed782611960565b611ee090613a51565b6129b4565b925082611efb576000965050505050505061069b565b611f04826116aa565b60078054600090611f1f9084906001600160801b0316613843565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611f4c816116aa565b60078054601090611f6e908490600160801b90046001600160801b0316613843565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e611fcb87612b4c565b6040518263ffffffff1660e01b8152600401611fe79190613a6d565b6040805180830381865af4158015612003573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120279190613a7c565b915091508061203d575060009485945092505050565b60075460106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215460008080527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb015490926001600160801b0316916120a3916136b0565b6120ad91906137c8565b9050806000036120c557506000958695509350505050565b60008087116120d55760006120e0565b6120e0848884611635565b976001975095505050505050565b6000606060008060008661ffff1667ffffffffffffffff81111561211457612114613aac565b6040519080825280601f01601f19166020018201604052801561213e576020820181803683370190505b5090506000808751602089018b8e8ef191503d92508683111561215f578692505b828152826000602083013e90999098509650505050505050565b600061219a87878761219388670de0b6b3a76400006137c8565b8787612c86565b979650505050505050565b60006114216121e66121bf84670de0b6b3a76400006137c8565b6113e2670de0b6b3a76400006121d5818a6126bb565b6121df91906137c8565b8790612457565b6121f890670de0b6b3a76400006136b0565b611b1684670de0b6b3a76400006137c8565b60008061224185612219611669565b61222391906136b0565b600254610e4c908790600160801b90046001600160801b03166137c8565b909210949350505050565b60405163bb55fd2760e01b815260040160405180910390fd5b6000806000806000612278898789612ca9565b909250905061228782896137c8565b9750600061229682888a611635565b90506122a2818b6137c8565b9a989950979650505050505050565b6000826000036122c25750846116a1565b8115612315576122f36122d584876136b0565b6122df8587610683565b6122e9888a610683565b611b1691906136b0565b9050600061230185886116d8565b90508082101561230f578091505b506116a1565b828503612324575060006116a1565b61234f61233184876137c8565b61233b8587612457565b612345888a610683565b611b1691906137c8565b9695505050505050565b60006123816010600061236d600286611183565b815260200190815260200160002054611960565b6123936010600061236d600187611183565b61069b9190613863565b60006123c97f000000000000000000000000000000000000000000000000000000000000000083612457565b6003546123df91906001600160801b03166136b0565b6002546123f5906001600160801b031684610683565b101592915050565b600061069b826004611da8565b600061069b7f000000000000000000000000000000000000000000000000000000000000000083612d29565b600061219a87878761245088670de0b6b3a76400006137c8565b8787612d95565b60006106988383670de0b6b3a7640000612da6565b60008080806124bd87866124b68b6113e261248f8c670de0b6b3a76400006137c8565b7f000000000000000000000000000000000000000000000000000000000000000090612457565b9190612da6565b93506124e9847f0000000000000000000000000000000000000000000000000000000000000000610683565b9150600061250a61250289670de0b6b3a76400006137c8565b8a9088612da6565b9050612536817f0000000000000000000000000000000000000000000000000000000000000000612457565b9350612562847f0000000000000000000000000000000000000000000000000000000000000000610683565b61256c90846136b0565b915050945094509450949050565b60008183116125895781610698565b5090919050565b6000806125a8846125a28a888a612da6565b906126bb565b9050611b29888486612da6565b600061069883670de0b6b3a764000084611635565b6000806125d78484612dcc565b9092509050806125e9576125e961224c565b5092915050565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b17905261264a908590612e08565b50505050565b6000816000036126695750670de0b6b3a764000061069b565b826000036126795750600061069b565b600061268483611960565b9050600061269961269486611960565b612e70565b90508181026126b0670de0b6b3a764000082613ac2565b905061234f81613096565b600061069883670de0b6b3a764000084612da6565b600060016001607f1b038211156116d45760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b0319821280612718575060016001607f1b0382135b156116d45760405163a5353be560e01b815260040160405180910390fd5b60008061274484600061322b565b61274f84600061322b565b6127599190613863565b905060008113156127755761276e81866136b0565b9450612794565b60008112156127945761278781613a51565b61279190866137c8565b94505b50929392505050565b60035460009081906127b8906001600160801b0316846126bb565b90506127e47f0000000000000000000000000000000000000000000000000000000000000000826136b0565b6002546001600160801b031611156116e7576002547f00000000000000000000000000000000000000000000000000000000000000009061282f9083906001600160801b03166137c8565b61142491906137c8565b612841613588565b60008061284d84612b4c565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b81526004016128889190613a6d565b6040805180830381865af41580156128a4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906128c89190613a7c565b93509050826128dd5750600091506129ac9050565b60006129046128ff84610160015185610140015161068390919063ffffffff16565b611960565b6129246128ff85610120015186610100015161245790919063ffffffff16565b61292e9190613863565b604080516101208101825285815260208082019590955260008052601085527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb015481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612a6d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a919190613af0565b935093509350935080612aad5750600098975050505050505050565b868414612ade57612abd846116aa565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612b0f57612aee836126fa565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612b3d57612b1f826116aa565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612b546135da565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526003540482166101008201526005549091610120830191612c4c911661323a565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192612c7e9290041661323a565b905292915050565b600080612c978888888888886132b0565b909250905080611b4357611b4361224c565b600080612cf3856113e285817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000612ce9818c6126bb565b6113e291906137c8565b9150612d1f827f0000000000000000000000000000000000000000000000000000000000000000610683565b9050935093915050565b604051637bce1f8160e11b8152600481018290526000906001600160a01b0384169063f79c3f0290602401602060405180830381865afa158015612d71573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106989190613b26565b600080612c97888888888888613378565b6000826000190484118302158202612dbd57600080fd5b50910281810615159190040190565b600080600083612ddb86611960565b612de59190613863565b90506000811215612dfd57600080925092505061067c565b946001945092505050565b6000612e1d6001600160a01b03841683613438565b90508051600014158015612e42575080806020019051810190612e409190613b3f565b155b1561163057604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b6000808213612e925760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f19820190612f159084901c611960565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e1982136130b157506000919050565b680755bf798b4a1bf1e582126130da576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061234f74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611960565b60008183136125895781610698565b600080670de0b6b3a764000061324e6106a1565b6132589190613883565b9050808311613268576000613272565b61327281846137c8565b91506114246132a9670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613883565b83906125b5565b60008060006132c28989888888613446565b90506132dc8661169b6132d58a8d6136b0565b8790610683565b98506132e9858a86611635565b98508881101561330057600080925092505061336d565b888103670de0b6b3a764000081106133355761332e613327670de0b6b3a7640000896126bb565b8290612650565b905061334d565b61334a613327670de0b6b3a7640000896125b5565b90505b808910156133635760008093509350505061336d565b8803925060019150505b965096945050505050565b600080600061338a8989888888613446565b905061339a8661169b898b6136b0565b9750878110156133b157600080925092505061336d565b8781036133bf818688612da6565b9050670de0b6b3a764000081106133ec576133e5613327670de0b6b3a7640000896126bb565b9050613404565b613401613327670de0b6b3a7640000896125b5565b90505b61340e81866126bb565b9050808a10156134265760008093509350505061336d565b90980398600198509650505050505050565b606061069883836000613475565b60006134528585612650565b61346b6134638661169b868b612457565b859085612da6565b61234f91906136b0565b60608147101561349a5760405163cd78605960e01b8152306004820152602401612e67565b600080856001600160a01b031684866040516134b69190613b5c565b60006040518083038185875af1925050503d80600081146134f3576040519150601f19603f3d011682016040523d82523d6000602084013e6134f8565b606091505b509150915061234f868383606082613518576135138261355f565b611424565b815115801561352f57506001600160a01b0384163b155b1561355857604051639996b31560e01b81526001600160a01b0385166004820152602401612e67565b5080611424565b80511561356f5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b60405180610120016040528061359c6135da565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000806000806080858703121561365157600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561367d57600080fd5b85016060818803121561368f57600080fd5b939692955090935050565b634e487b7160e01b600052601160045260246000fd5b8082018082111561069b5761069b61369a565b6000602082840312156136d557600080fd5b81356001600160a01b038116811461142457600080fd5b80151581146105ab57600080fd5b60006020828403121561370c57600080fd5b8135611424816136ec565b6000808335601e1984360301811261372e57600080fd5b83018035915067ffffffffffffffff82111561374957600080fd5b60200191503681900382131561067c57600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b878152866020820152856040820152841515606082015283608082015260c060a082015260006137bb60c08301848661375e565b9998505050505050505050565b8181038181111561069b5761069b61369a565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c0820152600061381560e08301848661375e565b9a9950505050505050505050565b6001600160701b038181168382160190808211156125e9576125e961369a565b6001600160801b038181168382160190808211156125e9576125e961369a565b81810360008312801583831316838312821617156125e9576125e961369a565b808202811582820484141761069b5761069b61369a565b6001600160801b038281168282160390808211156125e9576125e961369a565b80820182811260008312801582168215821617156138da576138da61369a565b505092915050565b634e487b7160e01b600052601260045260246000fd5b600082613907576139076138e2565b500690565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561069b5761069b61369a565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a0820190506139cb828551613939565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215613a4057600080fd5b505080516020909101519092909150565b6000600160ff1b8201613a6657613a6661369a565b5060000390565b610180810161069b8284613939565b60008060408385031215613a8f57600080fd5b825191506020830151613aa1816136ec565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600082613ad157613ad16138e2565b600160ff1b821460001984141615613aeb57613aeb61369a565b500590565b60008060008060808587031215613b0657600080fd5b845193506020850151925060408501519150606085015161368f816136ec565b600060208284031215613b3857600080fd5b5051919050565b600060208284031215613b5157600080fd5b8151611424816136ec565b6000825160005b81811015613b7d5760208186018101518583015201613b63565b50600092019182525091905056fea2646970667358221220e6d1ba67ff46c106c10f61bc36e694fafb3f3b364ab66a3625718a48d9e2942864736f6c63430008140033',
    methodIdentifiers: {
        "openLong(uint256,uint256,uint256,(address,bool,bytes))": "cba2e58d",
        "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070"
    }
};
