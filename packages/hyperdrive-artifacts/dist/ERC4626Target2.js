export const ERC4626Target2 = {
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
        }
    ],
    bytecode: '0x6102606040523480156200001257600080fd5b50604051620042f8380380620042f8833981016040819052620000359162000202565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c090815260c0808601516101e090815260e0808801516102005261012080890151909352610100808901519091526101408089015190915290870180515190925281519093015190925281516040908101516101609081529251606090810151610180908152918701518616610220528601516102405291850151600980546001600160a01b031990811692871692909217905591850151600a8054841691861691909117905591840151600b80548316918516919091179055920151600c8054909316911617905562000315565b60405161020081016001600160401b03811182821017156200016a57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200018857600080fd5b919050565b600060808284031215620001a057600080fd5b604051608081016001600160401b0381118282101715620001d157634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600061026082840312156200021657600080fd5b6200022062000138565b6200022b8362000170565b81526200023b6020840162000170565b60208201526200024e6040840162000170565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140808401518183015250610160620002b981850162000170565b90820152610180620002cd84820162000170565b908201526101a0620002e184820162000170565b908201526101c0620002f584820162000170565b908201526101e06200030a858583016200018d565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161024051613e1a620004de60003960005050600050506000505060008181610100015281816103100152612d9701526000818161145101528181611caf01528181611d12015281816124c40152818161297c015281816129b801528181612bb00152612d710152600081816107ef01528181610d1a01528181610d5c01528181610e4e015281816112c4015281816113230152612d4b015260006118ce0152600081816119f4015281816125e50152818161265e0152612eb10152600081816109b301528181610dcf015281816113be015281816119c80152612632015260008181610dae015281816125b10152612e6d01526000818161081001528181610cf801528181610d7d01528181610e6f015281816112a2015281816113440152612dbd0152600081816101de015281816103a8015281816108eb01526134de0152600081816106a9015281816107290152818161079f0152818161086b01526108a301526000818161161c015281816116960152818161172801526125310152600081816115ef01526116500152613e1a6000f3fe6080604052600436106100295760003560e01c8063cba2e58d1461002e578063dbbe80701461005a575b600080fd5b61004161003c366004613894565b61006d565b6040805192835260208301919091520160405180910390f35b610041610068366004613894565b61008a565b60008061007c86868686610099565b915091505b94509492505050565b60008061007c868686866102c9565b6000806100a461052a565b600654610100900460ff16156100cd576040516321081abf60e01b815260040160405180910390fd5b6100d5610554565b6100de83610575565b6000806100eb88866105ae565b909250905060006100fc8383610683565b90507f000000000000000000000000000000000000000000000000000000000000000081101561013f5760405163211ddda360e11b815260040160405180910390fd5b86821015610160576040516342af972b60e01b815260040160405180910390fd5b600061016a6106a1565b905061017a8184600460016106d2565b50600080600061018a8787610cc9565b919a5091945090925090508b8810156101b65760405163c972651760e01b815260040160405180910390fd5b81600d60008282546101c89190613909565b909155506101d99050844283610eab565b6102037f000000000000000000000000000000000000000000000000000000000000000085613909565b98506102118389888c610fe9565b600061021e60018b611183565b90506102378161023160208e018e61391c565b8b6111b8565b8d8a8a898e8561024a602083018361391c565b6001600160a01b03167f7fc9757758f4c7f2eb9f011c4500beb349847d2f2acbdd5ffce3e2f01e79903a8688866102876040880160208901613953565b8961029560408a018a613970565b6040516102a897969594939291906139e0565b60405180910390a350909b5050505050505050505050506100816001600055565b6000806102d461052a565b600654610100900460ff16156102fd576040516321081abf60e01b815260040160405180910390fd5b610305610554565b61030e83610575565b7f000000000000000000000000000000000000000000000000000000000000000086101561034f5760405163211ddda360e11b815260040160405180910390fd5b6000610359611260565b90508481101561037c576040516342af972b60e01b815260040160405180910390fd5b60006103866106a1565b9050600061039f6103956106a1565b84600460016106d2565b905060006103cd7f000000000000000000000000000000000000000000000000000000000000000084613909565b90506000806000806103e08e8988611273565b600d8054949850929650909450925083916000906103ff908490613909565b909155506104109050874283610eab565b50600061041e84898d6113f9565b9050808d10156104415760405163c972651760e01b815260040160405180910390fd5b61044b818c6105ae565b508e905061045b81858b8961142b565b6000610468600288611183565b90508c6104828261047c602084018461391c565b856111b8565b858b8684610493602086018661391c565b6001600160a01b03167ffa6dd2e3e152dbc3fe91196c0b8aa871c26fd7a1d07de126ec3159fd4ede2c758d8a866104d060408b0160208c01613953565b6104e4896104de8a8d613a21565b90610683565b8d6104f260408e018e613970565b604051610506989796959493929190613a34565b60405180910390a350989d50939b5050505050505050505050506100816001600055565b60026000540361054d57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b341561057357604051631574f9f360e01b815260040160405180910390fd5b565b6000610584602083018361391c565b6001600160a01b0316036105ab5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b816000806105c26040850160208601613953565b156105e7576105dd856105d86040870187613970565b6115df565b90935090506105ff565b50346105ff856105fa6040870187613970565b61171b565b610607611260565b9150801561067a57604051600090339083908381818185875af1925050503d8060008114610651576040519150601f19603f3d011682016040523d82523d6000602084013e610656565b606091505b5050905080610678576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b60006106988383670de0b6b3a7640000611755565b90505b92915050565b60006106cd427f0000000000000000000000000000000000000000000000000000000000000000611773565b905090565b600084815260086020526040812060018101546001600160801b03161515806106fa57504286115b1561071357600101546001600160801b03169050610cc1565b60008060006107206106a1565b9050600061074e7f00000000000000000000000000000000000000000000000000000000000000008b613909565b90505b818110156107c4576000818152600860205260409020600101546001600160801b0316801561079c576000828152600860205260409020549094506001600160801b031692506107c4565b507f000000000000000000000000000000000000000000000000000000000000000001610751565b83600003610837578893506108346107da611789565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006117aa565b92505b50610841836117ca565b6001850180546001600160801b0319166001600160801b03929092169190911790556108976108907f00000000000000000000000000000000000000000000000000000000000000008b613a21565b8a84610eab565b6108d5896108cf6108c87f000000000000000000000000000000000000000000000000000000000000000083613909565b42906117f8565b84610eab565b6108de8861180d565b50600090506008816109107f00000000000000000000000000000000000000000000000000000000000000008d613a21565b815260208101919091526040016000908120600101546001600160801b0316915061093c60028c611183565b6000818152601060205260408120549192508c8c8315610a82576001925060008061096b86898d8660006119b1565b9150915080600d60008282546109819190613909565b9091555061099d90508660008461099781611a80565b88611aaa565b6109a78183613909565b91506109d786838a8e877f0000000000000000000000000000000000000000000000000000000000000000611c24565b91506109eb6109e68385610683565b611c6e565b60068054600290610a0c9084906201000090046001600160701b0316613a7c565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a39826117ca565b60068054601090610a5b908490600160801b90046001600160801b0316613a9c565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000610a8f600184611183565b6000818152601060205260409020549091508015610b9e5760019450600080610abc838b8f8860016119b1565b9150915080600d6000828254610ad29190613909565b90915550610aee905083600084610ae881611a80565b8a611c98565b610af88183613a21565b9150610b076109e68387610683565b60068054600290610b289084906201000090046001600160701b0316613a7c565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610b55826117ca565b60068054601090610b77908490600160801b90046001600160801b0316613a9c565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610bd857610bca610bb087611a80565b610bb983611a80565b610bc39190613abc565b6000611e89565b8e610bd58482611ec8565b50505b6000610be3846120c2565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a2600c546001600160a01b031615610cb1578e610cad5a604051336024820152604481018990528315156064820152600090819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b179052600c546001600160a01b03169392919061220e565b5050505b50999b5050505050505050505050505b949350505050565b6000806000806000610cd9611789565b600254909150610d3e908290600160801b90046001600160801b0316897f00000000000000000000000000000000000000000000000000000000000000008a7f0000000000000000000000000000000000000000000000000000000000000000612299565b600254909450610da1908290600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006117aa565b9150610df88785610df3857f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006122c5565b61232a565b15610e0557610e0561236c565b610e1187858885612385565b91965094509250670de0b6b3a7640000610e93610e2e8784613909565b600254610e4c908890600160801b90046001600160801b0316613a21565b7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006117aa565b1115610ea157610ea161236c565b5092959194509250565b600083815260086020526040902054600160801b90046001600160801b0316808303610ed75750505050565b6000848152600860205260408120546001600160801b031690819003610f3157610f00836117ca565b600086815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055610faf565b610f82610f7d670de0b6b3a7640000610f4a8886613a21565b610f549190613adc565b85670de0b6b3a7640000610f68878a613a21565b610f729190613adc565b8592919060016123d1565b6117ca565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b610fb8846117ca565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600354600160801b90046001600160801b031661102b610f7d82611015670de0b6b3a764000086613adc565b6005546001600160801b031691908860016123d1565b600580546001600160801b0319166001600160801b0392909216919091179055611054856117ca565b6002805460009061106f9084906001600160801b0316613a9c565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061109c846117ca565b600280546010906110be908490600160801b90046001600160801b0316613af3565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506110eb846117ca565b6110f59082613a9c565b600380546001600160801b03808416600160801b0291161790559050600061111c83612479565b905061113a8161112b87611a80565b6111359084613b13565b611e89565b611143846124bd565b61114f5761114f61236c565b600061115a8561251d565b90508061117a57604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b60006001600160f81b038211156111ad5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600f602090815260408083206001600160a01b0386168452909152812080548392906111ea908490613909565b90915550506000838152601060205260408120805483929061120d908490613909565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b60006106cd670de0b6b3a764000061252a565b6000806000806000611283611789565b6002549091506112e8908290600160801b90046001600160801b03168a7f00000000000000000000000000000000000000000000000000000000000000008b7f0000000000000000000000000000000000000000000000000000000000000000612556565b9350876112f58589612577565b11156113035761130361236c565b6002546000908190611368908490600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006117aa565b935061137e8a670de0b6b3a7640000868c61258c565b5091935090915061139190508183613a21565b61139b9087613a21565b9550886113e8816113e28d6113b0868c613a21565b8d6113bb878261269a565b877f00000000000000000000000000000000000000000000000000000000000000006126b0565b90612577565b975090945050505093509350935093565b600061140b6040830160208401613953565b15611417575082611424565b61142184846126d5565b90505b9392505050565b6002546001600160801b0316838110156114475761144761236c565b60045490849003907f00000000000000000000000000000000000000000000000000000000000000009061147f908390600f0b6126ea565b101561148d5761148d61236c565b6004546114d790610f7d90600160801b90046001600160801b03166114ba670de0b6b3a764000086613adc565b600554600160801b90046001600160801b031691908960016123d1565b600580546001600160801b03928316600160801b0292169190911790556114fd816117ca565b600280546001600160801b0319166001600160801b0392909216919091179055611526856117ca565b60028054601090611548908490600160801b90046001600160801b0316613a9c565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611575856117ca565b60048054601090611597908490600160801b90046001600160801b0316613a9c565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006115c683612479565b905061113a816115d588611a80565b6111359084613abc565b6000806116176001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333088612710565b6116777f0000000000000000000000000000000000000000000000000000000000000000611646876001613909565b6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016919061277d565b604051636e553f6560e01b8152600481018690523060248201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636e553f65906044016020604051808303816000875af11580156116e7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061170b9190613b3b565b925060009150505b935093915050565b6117506001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333086612710565b505050565b600082600019048411830215820261176c57600080fd5b5091020490565b600061177f8284613b6a565b6106989084613a21565b6002546004546000916106cd916001600160801b0390911690600f0b6126ea565b60006117c1826117bb858888611755565b9061280d565b95945050505050565b60006001600160801b038211156117f457604051630f0af95160e11b815260040160405180910390fd5b5090565b60008183116118075782610698565b50919050565b6006546000908190611830908490600160801b90046001600160801b0316610683565b6006546201000090046001600160701b031692509050818111156119ac57600061185a8383613a21565b9050611869610f7d8286612878565b6006805460109061188b908490600160801b90046001600160801b0316613af3565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006118c485836126d590919063ffffffff16565b905060006118f2827f0000000000000000000000000000000000000000000000000000000000000000610683565b905080600d60008282546119069190613909565b9091555061191690508183613a21565b9150611921826117ca565b6002805460009061193c9084906001600160801b0316613a9c565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506119698261288d565b6004805460009061197e908490600f0b613b7e565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b6000806119be87856126d5565b915060006119ec837f0000000000000000000000000000000000000000000000000000000000000000610683565b9050611a18817f0000000000000000000000000000000000000000000000000000000000000000610683565b91508315611a3b57611a2a8282613a21565b611a349084613a21565b9250611a52565b611a458282613a21565b611a4f9084613909565b92505b86861015611a7557611a65838789611755565b9250611a72828789611755565b91505b509550959350505050565b60006001600160ff1b038211156117f45760405163396ea70160e11b815260040160405180910390fd5b600454600160801b90046001600160801b0316611af3610f7d82611ad6670de0b6b3a764000086613adc565b600554600160801b90046001600160801b031691908a60006123d1565b600580546001600160801b03928316600160801b029216919091179055611b19866117ca565b611b239082613af3565b600480546001600160801b03928316600160801b029216919091179055611b49846117ca565b60028054600090611b649084906001600160801b0316613a9c565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611b91836128b7565b60048054600090611ba6908490600f0b613b7e565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611bd6856117ca565b60028054601090611bf8908490600160801b90046001600160801b0316613af3565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600080611c3c84611c368a888a611755565b906126d5565b9050611c49888486611755565b611c539082613909565b905086811115611c635786810391505b509695505050505050565b60006001600160701b038211156117f45760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b031683811080611cda57507f0000000000000000000000000000000000000000000000000000000000000000611cd88583613a21565b105b15611ce757611ce761236c565b6004549084900390600f0b611cfc8482613abc565b905083611d0886611a80565b138015611d3d57507f0000000000000000000000000000000000000000000000000000000000000000611d3b83836126ea565b105b15611d4a57611d4a61236c565b600354600160801b90046001600160801b0316611d8c610f7d82611d76670de0b6b3a764000088613adc565b6005546001600160801b031691908c60006123d1565b600580546001600160801b0319166001600160801b0392909216919091179055611db68882613a21565b9050611dc1816117ca565b600380546001600160801b03928316600160801b029216919091179055611de7836117ca565b600280546001600160801b0319166001600160801b0392909216919091179055611e10826128b7565b600480546001600160801b0319166001600160801b0392909216919091179055611e39876117ca565b60028054601090611e5b908490600160801b90046001600160801b0316613a9c565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b600354611ea490610f7d906001600160801b031684846128f3565b600380546001600160801b0319166001600160801b03929092169190911790555050565b600754600360f81b600090815260106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215490918291611f13916001600160801b031690613a21565b905080600003611f2757600191505061069b565b6000611f328561295a565b905080600003611f475760019250505061069b565b600080611f558385896129f6565b9150915080611f6b57600094505050505061069b565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401611fa7929190613c29565b6040805180830381865af4158015611fc3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611fe79190613c9f565b91509150612005611ff782611a80565b61200090613cc3565b612b6a565b92508261201b576000965050505050505061069b565b612024826117ca565b6007805460009061203f9084906001600160801b0316613a9c565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061206c816117ca565b6007805460109061208e908490600160801b90046001600160801b0316613a9c565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e6120eb87612d02565b6040518263ffffffff1660e01b81526004016121079190613cdf565b6040805180830381865af4158015612123573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121479190613cee565b915091508061215d575060009485945092505050565b60075460106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215460008080527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb015490926001600160801b0316916121c391613909565b6121cd9190613a21565b9050806000036121e557506000958695509350505050565b60008087116121f5576000612200565b612200848884611755565b976001975095505050505050565b6000606060008060008661ffff1667ffffffffffffffff81111561223457612234613d1e565b6040519080825280601f01601f19166020018201604052801561225e576020820181803683370190505b5090506000808751602089018b8e8ef191503d92508683111561227f578692505b828152826000602083013e90999098509650505050505050565b60006122ba8787876122b388670de0b6b3a7640000613a21565b8787612e3c565b979650505050505050565b60006114216123066122df84670de0b6b3a7640000613a21565b6113e2670de0b6b3a76400006122f5818a612878565b6122ff9190613a21565b8790612577565b61231890670de0b6b3a7640000613909565b611c3684670de0b6b3a7640000613a21565b60008061236185612339611789565b6123439190613909565b600254610e4c908790600160801b90046001600160801b0316613a21565b909210949350505050565b60405163bb55fd2760e01b815260040160405180910390fd5b6000806000806000612398898789612e5f565b90925090506123a78289613a21565b975060006123b682888a611755565b90506123c2818b613a21565b9a989950979650505050505050565b6000826000036123e25750846117c1565b8115612435576124136123f58487613909565b6123ff8587610683565b612409888a610683565b611c369190613909565b9050600061242185886117f8565b90508082101561242f578091505b506117c1565b828503612444575060006117c1565b61246f6124518487613a21565b61245b8587612577565b612465888a610683565b611c369190613a21565b9695505050505050565b60006124a16010600061248d600286611183565b815260200190815260200160002054611a80565b6124b36010600061248d600187611183565b61069b9190613abc565b60006124e97f000000000000000000000000000000000000000000000000000000000000000083612577565b6003546124ff91906001600160801b0316613909565b600254612515906001600160801b031684610683565b101592915050565b600061069b826004611ec8565b600061069b7f000000000000000000000000000000000000000000000000000000000000000083612edf565b60006122ba87878761257088670de0b6b3a7640000613a21565b8787612f4b565b60006106988383670de0b6b3a7640000612f5c565b60008080806125dd87866125d68b6113e26125af8c670de0b6b3a7640000613a21565b7f000000000000000000000000000000000000000000000000000000000000000090612577565b9190612f5c565b9350612609847f0000000000000000000000000000000000000000000000000000000000000000610683565b9150600061262a61262289670de0b6b3a7640000613a21565b8a9088612f5c565b9050612656817f0000000000000000000000000000000000000000000000000000000000000000612577565b9350612682847f0000000000000000000000000000000000000000000000000000000000000000610683565b61268c9084613909565b915050945094509450949050565b60008183116126a95781610698565b5090919050565b6000806126c8846126c28a888a612f5c565b90612878565b9050611c49888486612f5c565b600061069883670de0b6b3a764000084611755565b6000806126f78484612f82565b9092509050806127095761270961236c565b5092915050565b6040516001600160a01b0384811660248301528381166044830152606482018390526127779186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b038381831617835250505050612fbe565b50505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b1790526127ce8482613026565b612777576040516001600160a01b0384811660248301526000604483015261280391869182169063095ea7b390606401612745565b6127778482612fbe565b6000816000036128265750670de0b6b3a764000061069b565b826000036128365750600061069b565b600061284183611a80565b9050600061285661285186611a80565b6130c9565b905081810261286d670de0b6b3a764000082613d34565b905061246f816132ef565b600061069883670de0b6b3a764000084612f5c565b600060016001607f1b038211156117f45760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b03198212806128d5575060016001607f1b0382135b156117f45760405163a5353be560e01b815260040160405180910390fd5b600080612901846000613484565b61290c846000613484565b6129169190613abc565b905060008113156129325761292b8186613909565b9450612951565b60008112156129515761294481613cc3565b61294e9086613a21565b94505b50929392505050565b6003546000908190612975906001600160801b031684612878565b90506129a17f000000000000000000000000000000000000000000000000000000000000000082613909565b6002546001600160801b03161115611807576002547f0000000000000000000000000000000000000000000000000000000000000000906129ec9083906001600160801b0316613a21565b6114249190613a21565b6129fe6137e1565b600080612a0a84612d02565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401612a459190613cdf565b6040805180830381865af4158015612a61573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a859190613cee565b9350905082612a9a5750600091506117139050565b6000612ac1612abc84610160015185610140015161068390919063ffffffff16565b611a80565b612ae1612abc85610120015186610100015161257790919063ffffffff16565b612aeb9190613abc565b604080516101208101825285815260208082019590955260008052601085527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb0154818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612c23573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612c479190613d62565b935093509350935080612c635750600098975050505050505050565b868414612c9457612c73846117ca565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612cc557612ca4836128b7565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612cf357612cd5826117ca565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612d0a613833565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526003540482166101008201526005549091610120830191612e029116613493565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192612e3492900416613493565b905292915050565b600080612e4d888888888888613509565b909250905080611c6357611c6361236c565b600080612ea9856113e285817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000612e9f818c612878565b6113e29190613a21565b9150612ed5827f0000000000000000000000000000000000000000000000000000000000000000610683565b9050935093915050565b6040516303d1689d60e11b8152600481018290526000906001600160a01b038416906307a2d13a90602401602060405180830381865afa158015612f27573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106989190613b3b565b600080612e4d8888888888886135d1565b6000826000190484118302158202612f7357600080fd5b50910281810615159190040190565b600080600083612f9186611a80565b612f9b9190613abc565b90506000811215612fb357600080925092505061067c565b946001945092505050565b6000612fd36001600160a01b03841683613691565b90508051600014158015612ff8575080806020019051810190612ff69190613d98565b155b1561175057604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b6000806000846001600160a01b0316846040516130439190613db5565b6000604051808303816000865af19150503d8060008114613080576040519150601f19603f3d011682016040523d82523d6000602084013e613085565b606091505b50915091508180156130af5750805115806130af5750808060200190518101906130af9190613d98565b80156117c15750505050506001600160a01b03163b151590565b60008082136130eb5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f1982019061316e9084901c611a80565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361330a57506000919050565b680755bf798b4a1bf1e58212613333576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061246f74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611a80565b60008183136126a95781610698565b600080670de0b6b3a76400006134a76106a1565b6134b19190613adc565b90508083116134c15760006134cb565b6134cb8184613a21565b9150611424613502670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613adc565b83906126d5565b600080600061351b898988888861369f565b9050613535866117bb61352e8a8d613909565b8790610683565b9850613542858a86611755565b9850888110156135595760008092509250506135c6565b888103670de0b6b3a7640000811061358e57613587613580670de0b6b3a764000089612878565b829061280d565b90506135a6565b6135a3613580670de0b6b3a7640000896126d5565b90505b808910156135bc576000809350935050506135c6565b8803925060019150505b965096945050505050565b60008060006135e3898988888861369f565b90506135f3866117bb898b613909565b97508781101561360a5760008092509250506135c6565b878103613618818688612f5c565b9050670de0b6b3a764000081106136455761363e613580670de0b6b3a764000089612878565b905061365d565b61365a613580670de0b6b3a7640000896126d5565b90505b6136678186612878565b9050808a101561367f576000809350935050506135c6565b90980398600198509650505050505050565b6060610698838360006136ce565b60006136ab858561280d565b6136c46136bc866117bb868b612577565b859085612f5c565b61246f9190613909565b6060814710156136f35760405163cd78605960e01b815230600482015260240161301d565b600080856001600160a01b0316848660405161370f9190613db5565b60006040518083038185875af1925050503d806000811461374c576040519150601f19603f3d011682016040523d82523d6000602084013e613751565b606091505b509150915061246f8683836060826137715761376c826137b8565b611424565b815115801561378857506001600160a01b0384163b155b156137b157604051639996b31560e01b81526001600160a01b038516600482015260240161301d565b5080611424565b8051156137c85780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6040518061012001604052806137f5613833565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b600080600080608085870312156138aa57600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff8111156138d657600080fd5b8501606081880312156138e857600080fd5b939692955090935050565b634e487b7160e01b600052601160045260246000fd5b8082018082111561069b5761069b6138f3565b60006020828403121561392e57600080fd5b81356001600160a01b038116811461142457600080fd5b80151581146105ab57600080fd5b60006020828403121561396557600080fd5b813561142481613945565b6000808335601e1984360301811261398757600080fd5b83018035915067ffffffffffffffff8211156139a257600080fd5b60200191503681900382131561067c57600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b878152866020820152856040820152841515606082015283608082015260c060a08201526000613a1460c0830184866139b7565b9998505050505050505050565b8181038181111561069b5761069b6138f3565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c08201526000613a6e60e0830184866139b7565b9a9950505050505050505050565b6001600160701b03818116838216019080821115612709576127096138f3565b6001600160801b03818116838216019080821115612709576127096138f3565b8181036000831280158383131683831282161715612709576127096138f3565b808202811582820484141761069b5761069b6138f3565b6001600160801b03828116828216039080821115612709576127096138f3565b8082018281126000831280158216821582161715613b3357613b336138f3565b505092915050565b600060208284031215613b4d57600080fd5b5051919050565b634e487b7160e01b600052601260045260246000fd5b600082613b7957613b79613b54565b500690565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561069b5761069b6138f3565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a082019050613c3d828551613bab565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215613cb257600080fd5b505080516020909101519092909150565b6000600160ff1b8201613cd857613cd86138f3565b5060000390565b610180810161069b8284613bab565b60008060408385031215613d0157600080fd5b825191506020830151613d1381613945565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600082613d4357613d43613b54565b600160ff1b821460001984141615613d5d57613d5d6138f3565b500590565b60008060008060808587031215613d7857600080fd5b84519350602085015192506040850151915060608501516138e881613945565b600060208284031215613daa57600080fd5b815161142481613945565b6000825160005b81811015613dd65760208186018101518583015201613dbc565b50600092019182525091905056fea2646970667358221220606d90ecae1ef2e4a95a961231f510ac581653b66f5252788753b6b3d09bc39f64736f6c63430008140033',
    methodIdentifiers: {
        "openLong(uint256,uint256,uint256,(address,bool,bytes))": "cba2e58d",
        "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070"
    }
};
