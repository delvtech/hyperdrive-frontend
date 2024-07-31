export const ERC4626Target1 = {
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
            "name": "closeLong",
            "inputs": [
                {
                    "name": "_maturityTime",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_bondAmount",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_minOutput",
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
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "closeShort",
            "inputs": [
                {
                    "name": "_maturityTime",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_bondAmount",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_minOutput",
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
            "stateMutability": "nonpayable"
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
            "name": "InsufficientBalance",
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
    bytecode: '0x6102606040523480156200001257600080fd5b506040516200405138038062004051833981016040819052620000359162000202565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c090815260c0808601516101e090815260e0808801516102005261012080890151909352610100808901519091526101408089015190915290870180515190925281519093015190925281516040908101516101609081529251606090810151610180908152918701518616610220528601516102405291850151600980546001600160a01b031990811692871692909217905591850151600a8054841691861691909117905591840151600b80548316918516919091179055920151600c8054909316911617905562000315565b60405161020081016001600160401b03811182821017156200016a57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200018857600080fd5b919050565b600060808284031215620001a057600080fd5b604051608081016001600160401b0381118282101715620001d157634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600061026082840312156200021657600080fd5b6200022062000138565b6200022b8362000170565b81526200023b6020840162000170565b60208201526200024e6040840162000170565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140808401518183015250610160620002b981850162000170565b90820152610180620002cd84820162000170565b908201526101a0620002e184820162000170565b908201526101c0620002f584820162000170565b908201526101e06200030a858583016200018d565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161024051613b93620004be6000396000505060005050600050506000818160af015281816103250152612c1e01526000818161136401528181611775015281816117d8015281816127fc0152818161283801528181612a370152612bf801526000818161071301528181610d6101528181610da801528181610f6d015281816115da015281816116280152612bd201526000611ac9015260008181611bef0152818161225201526122cb0152600081816108d701528181610f0501528181611bc3015261229f015260008181610dfa015261221801526000818161073401528181610d3f01528181610dc901528181610f8e015281816115b8015281816116490152612c4401526000818161080f01528181610e84015281816116d1015281816120ed01526131ff0152600081816105d20152818161064d015281816106c30152818161078f01526107c70152600081816119560152818161252d0152818161258101526125fd015260005050613b936000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806329b23fc11461003b578063ded0623114610060575b600080fd5b61004e61004936600461360d565b610073565b60405190815260200160405180910390f35b61004e61006e36600461360d565b61008c565b60006100818585858561009a565b90505b949350505050565b600061008185858585610310565b60006100a461054f565b6100ad82610579565b7f00000000000000000000000000000000000000000000000000000000000000008410156100ee5760405163211ddda360e11b815260040160405180910390fd5b60006100f86105b2565b90508542101561011d5761011761010d6105ca565b82600460016105f6565b5061012d565b61012b8682600460016105f6565b505b61014261013b600288610bec565b3387610c21565b6000806000806000806101568b888e610cfa565b95509550955095509550955060008c90508c4210156102165782600d60008282546101819190613682565b9091555061019990506101926105ca565b4284610fee565b6101a68c8887878561112c565b60006101b18e6112a6565b90506101cf6101bf8e6112f0565b6101c99083613695565b8261131e565b6101d88961135d565b6101e4576101e46113bd565b60006101ef8a6113d6565b90508061020f57604051638bdf918d60e01b815260040160405180910390fd5b505061022d565b61022086896113e3565b955061022b886113d6565b505b600061023a878a8d6114c4565b90508b81101561025d5760405163c972651760e01b815260040160405180910390fd5b8c86858b8e61026d600288610bec565b61027a60208301836136b5565b6001600160a01b0316337ff87a3de08b9fe89d655d6731088496cf5f5da0abd455e9f7cdc5f0c717f209e58a8a876102b86040890160208a016136ec565b6102cc8a6102c68d8f613682565b9061155e565b8d6102da60408c018c613709565b6040516102ee989796959493929190613779565b60405180910390a450939c505050505050505050505050506100846001600055565b600061031a61054f565b61032382610579565b7f00000000000000000000000000000000000000000000000000000000000000008410156103645760405163211ddda360e11b815260040160405180910390fd5b600061036e6105b2565b9050854210156103895761038361010d6105ca565b50610399565b6103978682600460016105f6565b505b6103a761013b600188610bec565b6000806000806000806103bb8b888e611573565b95509550955095509550955060008c90508c42101561046e5782600d60008282546103e69190613682565b909155506103f790506101926105ca565b6104048c8887878561175e565b600061040f826112a6565b905061042761041d8e6112f0565b6101c990836137c1565b6104308961135d565b61043c5761043c6113bd565b60006104478a6113d6565b90508061046757604051638bdf918d60e01b815260040160405180910390fd5b5050610485565b61047886896113e3565b9550610483886113d6565b505b6000610492878a8d6114c4565b90508b8110156104b55760405163c972651760e01b815260040160405180910390fd5b8c898c6104c3600186610bec565b6104d060208301836136b5565b6001600160a01b0316337f3b2c44173852b22d1ecf7784963c2bab6d4dd07e64ed560f818f144d72ee526788888761050e6040890160208a016136ec565b8a61051c60408b018b613709565b60405161052f97969594939291906137e9565b60405180910390a450919a50505050505050505050506100846001600055565b60026000540361057257604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b600061058860208301836136b5565b6001600160a01b0316036105af5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b60006105c5670de0b6b3a764000061194f565b905090565b60006105c5427f000000000000000000000000000000000000000000000000000000000000000061197b565b600084815260086020526040812060018101546001600160801b031615158061061e57504286115b1561063757600101546001600160801b03169050610084565b60008060006106446105ca565b905060006106727f00000000000000000000000000000000000000000000000000000000000000008b613682565b90505b818110156106e8576000818152600860205260409020600101546001600160801b031680156106c0576000828152600860205260409020549094506001600160801b031692506106e8565b507f000000000000000000000000000000000000000000000000000000000000000001610675565b8360000361075b578893506107586106fe611991565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006119b2565b92505b50610765836119c9565b6001850180546001600160801b0319166001600160801b03929092169190911790556107bb6107b47f00000000000000000000000000000000000000000000000000000000000000008b61382a565b8a84610fee565b6107f9896107f36107ec7f000000000000000000000000000000000000000000000000000000000000000083613682565b42906119f3565b84610fee565b61080288611a08565b50600090506008816108347f00000000000000000000000000000000000000000000000000000000000000008d61382a565b815260208101919091526040016000908120600101546001600160801b0316915061086060028c610bec565b6000818152601060205260408120549192508c8c83156109a6576001925060008061088f86898d866000611bac565b9150915080600d60008282546108a59190613682565b909155506108c19050866000846108bb816112f0565b8861112c565b6108cb8183613682565b91506108fb86838a8e877f0000000000000000000000000000000000000000000000000000000000000000611c7b565b915061090f61090a838561155e565b611cc5565b600680546002906109309084906201000090046001600160701b031661383d565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061095d826119c9565b6006805460109061097f908490600160801b90046001600160801b031661385d565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b60006109b3600184610bec565b6000818152601060205260409020549091508015610ac257600194506000806109e0838b8f886001611bac565b9150915080600d60008282546109f69190613682565b90915550610a12905083600084610a0c816112f0565b8a61175e565b610a1c818361382a565b9150610a2b61090a838761155e565b60068054600290610a4c9084906201000090046001600160701b031661383d565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a79826119c9565b60068054601090610a9b908490600160801b90046001600160801b031661385d565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610afc57610aee610ad4876112f0565b610add836112f0565b610ae79190613695565b600061131e565b8e610af98482611cef565b50505b6000610b0784611ee9565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a2600c546001600160a01b031615610bd5578e610bd15a604051336024820152604481018990528315156064820152600090819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b179052600c546001600160a01b031693929190612035565b5050505b50999b505050505050505050505050949350505050565b60006001600160f81b03821115610c165760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600f602090815260408083206001600160a01b0386168452909152902054811115610c6457604051631e9acf1760e31b815260040160405180910390fd5b6000838152600f602090815260408083206001600160a01b0386168452825280832080548590039055858352601090915281208054839290610ca790849061382a565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b600080600080600080600080610d0e611991565b90506000610d1b8a6120c0565b6002549091508c908c90610d85908590600160801b90046001600160801b031684867f0000000000000000000000000000000000000000000000000000000000000000867f0000000000000000000000000000000000000000000000000000000000000000612111565b600254919d509a50909550610ded908590600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006119b2565b9550610e23858c610e1e897f0000000000000000000000000000000000000000000000000000000000000000612181565b6121b1565b15610e3057610e306113bd565b6000806000610e4185878b876121f3565b9c5091945092509050610e54818461382a565b610e5e9089613682565b9750610e6a8284613682565b610e74908d613682565b9b505050505050506000600860007f00000000000000000000000000000000000000000000000000000000000000008c610eae919061382a565b815260208101919091526040016000908120600101546001600160801b03169150428b11610ef65760008b8152600860205260409020600101546001600160801b0316610ef8565b8b5b90508b610f298e8a8585857f0000000000000000000000000000000000000000000000000000000000000000611c7b565b9950610f35878a61382a565b9850670de0b6b3a7640000610fb2610f4d8787613682565b600254610f6b908f90600160801b90046001600160801b031661382a565b7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006119b2565b1115610fc057610fc06113bd565b610fd08a8a878a87876000612307565b939d50919b5090995090975050505050505093975093979195509350565b600083815260086020526040902054600160801b90046001600160801b031680830361101a5750505050565b6000848152600860205260408120546001600160801b03169081900361107457611043836119c9565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790556110f2565b6110c56110c0670de0b6b3a764000061108d888661382a565b611097919061387d565b85670de0b6b3a76400006110ab878a61382a565b6110b5919061387d565b8592919060016123a6565b6119c9565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b6110fb846119c9565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600454600160801b90046001600160801b03166111756110c082611158670de0b6b3a76400008661387d565b600554600160801b90046001600160801b031691908a60006123a6565b600580546001600160801b03928316600160801b02921691909117905561119b866119c9565b6111a59082613894565b600480546001600160801b03928316600160801b0292169190911790556111cb846119c9565b600280546000906111e69084906001600160801b031661385d565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061121383612450565b60048054600090611228908490600f0b6138b4565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611258856119c9565b6002805460109061127a908490600160801b90046001600160801b0316613894565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b60006112ce601060006112ba600286610bec565b8152602001908152602001600020546112f0565b6112e0601060006112ba600187610bec565b6112ea9190613695565b92915050565b60006001600160ff1b0382111561131a5760405163396ea70160e11b815260040160405180910390fd5b5090565b600354611339906110c0906001600160801b0316848461248c565b600380546001600160801b0319166001600160801b03929092169190911790555050565b60006113897f0000000000000000000000000000000000000000000000000000000000000000836124f3565b60035461139f91906001600160801b0316613682565b6002546113b5906001600160801b03168461155e565b101592915050565b60405163bb55fd2760e01b815260040160405180910390fd5b60006112ea826004611cef565b60008060006113f184611a08565b90925090506000611402868661155e565b90508183111561141a57611417868385612508565b95505b8281101561142c578083039250611431565b600092505b61143a83611cc5565b600680546001600160701b039290921662010000026fffffffffffffffffffffffffffff00001990921691909117908190556001600160801b03600160801b909104168087101561148d57869003611491565b5060005b61149a816119c9565b600680546001600160801b03928316600160801b0292169190911790555085935050505092915050565b6000806114d1858561155e565b90506114dc81612526565b9450846000036114f0576000915050611557565b84915061150360408401602085016136ec565b156115325761152b8561151960208601866136b5565b6115266040870187613709565b612552565b9150611555565b6115558561154360208601866136b5565b6115506040870187613709565b6125f0565b505b9392505050565b60006115578383670de0b6b3a7640000612508565b600080600080600080600080611587611991565b905060006115948a6120c0565b6002549091508b908d906115fe908590600160801b90046001600160801b031683867f0000000000000000000000000000000000000000000000000000000000000000877f000000000000000000000000000000000000000000000000000000000000000061262a565b600254919d509b509095506000908190819061166d908890600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006119b2565b985061167b84878b886121f3565b9c50919450909250905061168f828461382a565b611699908961382a565b97506116a58184613682565b6116af908e61382a565b9c506116bb8a8e613682565b9b505050505050505061174886868386600860007f00000000000000000000000000000000000000000000000000000000000000008f6116fb919061382a565b81526020810191909152604001600020600101546001600160801b0316428e1161173f5760008e8152600860205260409020600101546001600160801b0316611741565b8e5b6001612307565b9a9e939d50919b50909950929650945050505050565b6002546001600160801b0316838110806117a057507f000000000000000000000000000000000000000000000000000000000000000061179e858361382a565b105b156117ad576117ad6113bd565b6004549084900390600f0b6117c28482613695565b9050836117ce866112f0565b13801561180357507f0000000000000000000000000000000000000000000000000000000000000000611801838361267e565b105b15611810576118106113bd565b600354600160801b90046001600160801b03166118526110c08261183c670de0b6b3a76400008861387d565b6005546001600160801b031691908c60006123a6565b600580546001600160801b0319166001600160801b039290921691909117905561187c888261382a565b9050611887816119c9565b600380546001600160801b03928316600160801b0292169190911790556118ad836119c9565b600280546001600160801b0319166001600160801b03929092169190911790556118d682612450565b600480546001600160801b0319166001600160801b03929092169190911790556118ff876119c9565b60028054601090611921908490600160801b90046001600160801b031661385d565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60006112ea7f0000000000000000000000000000000000000000000000000000000000000000836126a4565b600061198782846138f7565b611557908461382a565b6002546004546000916105c5916001600160801b0390911690600f0b61267e565b6000610081826119c3858888612508565b90612711565b60006001600160801b0382111561131a57604051630f0af95160e11b815260040160405180910390fd5b6000818311611a025782611557565b50919050565b6006546000908190611a2b908490600160801b90046001600160801b031661155e565b6006546201000090046001600160701b03169250905081811115611ba7576000611a55838361382a565b9050611a646110c08286612786565b60068054601090611a86908490600160801b90046001600160801b0316613894565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611abf858361279b90919063ffffffff16565b90506000611aed827f000000000000000000000000000000000000000000000000000000000000000061155e565b905080600d6000828254611b019190613682565b90915550611b119050818361382a565b9150611b1c826119c9565b60028054600090611b379084906001600160801b031661385d565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611b64826127b0565b60048054600090611b79908490600f0b6138b4565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b600080611bb9878561279b565b91506000611be7837f000000000000000000000000000000000000000000000000000000000000000061155e565b9050611c13817f000000000000000000000000000000000000000000000000000000000000000061155e565b91508315611c3657611c25828261382a565b611c2f908461382a565b9250611c4d565b611c40828261382a565b611c4a9084613682565b92505b86861015611c7057611c60838789612508565b9250611c6d828789612508565b91505b509550959350505050565b600080611c9384611c8d8a888a612508565b9061279b565b9050611ca0888486612508565b611caa9082613682565b905086811115611cba5786810391505b509695505050505050565b60006001600160701b0382111561131a5760405163086b151760e11b815260040160405180910390fd5b600754600360f81b600090815260106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215490918291611d3a916001600160801b03169061382a565b905080600003611d4e5760019150506112ea565b6000611d59856127da565b905080600003611d6e576001925050506112ea565b600080611d7c838589612876565b9150915080611d925760009450505050506112ea565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401611dce929190613989565b6040805180830381865af4158015611dea573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e0e91906139ff565b91509150611e2c611e1e826112f0565b611e2790613a23565b6129f1565b925082611e4257600096505050505050506112ea565b611e4b826119c9565b60078054600090611e669084906001600160801b031661385d565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611e93816119c9565b60078054601090611eb5908490600160801b90046001600160801b031661385d565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e611f1287612b89565b6040518263ffffffff1660e01b8152600401611f2e9190613a3f565b6040805180830381865af4158015611f4a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f6e9190613a4e565b9150915080611f84575060009485945092505050565b60075460106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215460008080527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb015490926001600160801b031691611fea91613682565b611ff4919061382a565b90508060000361200c57506000958695509350505050565b600080871161201c576000612027565b612027848884612508565b976001975095505050505050565b6000606060008060008661ffff1667ffffffffffffffff81111561205b5761205b613a7e565b6040519080825280601f01601f191660200182016040528015612085576020820181803683370190505b5090506000808751602089018b8e8ef191503d9250868311156120a6578692505b828152826000602083013e90999098509650505050505050565b6000806120cb6105ca565b90508083116120db5760006120e5565b6120e5818461382a565b9150611557827f000000000000000000000000000000000000000000000000000000000000000061279b565b6000808061213261212a88670de0b6b3a764000061382a565b899087612cc3565b905086156121745761214488886124f3565b91506121658a8a8461215e8a670de0b6b3a764000061382a565b8989612ce9565b92506121718382613682565b90505b9750975097945050505050565b600061219f61219884670de0b6b3a764000061382a565b83906124f3565b61155790670de0b6b3a764000061382a565b6000806121e8856121c0611991565b6121ca9190613682565b600254610f6b908790600160801b90046001600160801b031661382a565b909210949350505050565b600080808061224a87866122438b61223d6122168c670de0b6b3a764000061382a565b7f0000000000000000000000000000000000000000000000000000000000000000906124f3565b906124f3565b9190612cc3565b9350612276847f000000000000000000000000000000000000000000000000000000000000000061155e565b9150600061229761228f89670de0b6b3a764000061382a565b8a9088612cc3565b90506122c3817f00000000000000000000000000000000000000000000000000000000000000006124f3565b93506122ef847f000000000000000000000000000000000000000000000000000000000000000061155e565b6122f99084613682565b915050945094509450949050565b6000806000806000808888101561237657861561232c576123298d898b612508565b9c505b6123378c898b612508565b9b506123428b6112f0565b61234b8d6112f0565b6123559190613695565b90506123628b898b612508565b9a5061236f8a898b612508565b9950612395565b61237f8b6112f0565b6123888d6112f0565b6123929190613695565b90505b9b9c9a9b999a975050505050505050565b6000826000036123b7575084612447565b811561240a576123e86123ca8487613682565b6123d4858761155e565b6123de888a61155e565b611c8d9190613682565b905060006123f685886119f3565b905080821015612404578091505b50612447565b82850361241957506000612447565b612444612426848761382a565b61243085876124f3565b61243a888a61155e565b611c8d919061382a565b90505b95945050505050565b600060016001607f1b031982128061246e575060016001607f1b0382135b1561131a5760405163a5353be560e01b815260040160405180910390fd5b60008061249a846000612d0c565b6124a5846000612d0c565b6124af9190613695565b905060008113156124cb576124c48186613682565b94506124ea565b60008112156124ea576124dd81613a23565b6124e7908661382a565b94505b50929392505050565b60006115578383670de0b6b3a7640000612cc3565b600082600019048411830215820261251f57600080fd5b5091020490565b60006112ea7f000000000000000000000000000000000000000000000000000000000000000083612d22565b604051635d043b2960e11b8152600481018590526001600160a01b0384811660248301523060448301526000917f00000000000000000000000000000000000000000000000000000000000000009091169063ba087652906064016020604051808303816000875af11580156125cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100819190613a94565b6126246001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168486612d52565b50505050565b6000808061264b61264388670de0b6b3a764000061382a565b899087612508565b905086156121745761265d888861155e565b91506121658a8a846126778a670de0b6b3a764000061382a565b8989612da9565b60008061268b8484612dba565b90925090508061269d5761269d6113bd565b5092915050565b6040516303d1689d60e11b8152600481018290526000906001600160a01b038416906307a2d13a906024015b602060405180830381865afa1580156126ed573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115579190613a94565b60008160000361272a5750670de0b6b3a76400006112ea565b8260000361273a575060006112ea565b6000612745836112f0565b9050600061275a612755866112f0565b612df9565b9050818102612771670de0b6b3a764000082613aad565b905061277c8161301f565b9695505050505050565b600061155783670de0b6b3a764000084612cc3565b600061155783670de0b6b3a764000084612508565b600060016001607f1b0382111561131a5760405163a5353be560e01b815260040160405180910390fd5b60035460009081906127f5906001600160801b031684612786565b90506128217f000000000000000000000000000000000000000000000000000000000000000082613682565b6002546001600160801b03161115611a02576002547f00000000000000000000000000000000000000000000000000000000000000009061286c9083906001600160801b031661382a565b611557919061382a565b61287e61355a565b60008061288a84612b89565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b81526004016128c59190613a3f565b6040805180830381865af41580156128e1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906129059190613a4e565b935090508261291a5750600091506129e99050565b600061294161293c84610160015185610140015161155e90919063ffffffff16565b6112f0565b61296161293c8561012001518661010001516124f390919063ffffffff16565b61296b9190613695565b604080516101208101825285815260208082019590955260008052601085527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb015481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612aaa573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612ace9190613adb565b935093509350935080612aea5750600098975050505050505050565b868414612b1b57612afa846119c9565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612b4c57612b2b83612450565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612b7a57612b5c826119c9565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612b916135ac565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526003540482166101008201526005549091610120830191612c8991166131b4565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192612cbb929004166131b4565b905292915050565b6000826000190484118302158202612cda57600080fd5b50910281810615159190040190565b600080612cfa88888888888861322a565b909250905080611cba57611cba6113bd565b6000818313612d1b5781611557565b5090919050565b6040516363737ac960e11b8152600481018290526000906001600160a01b0384169063c6e6f592906024016126d0565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052612da490849061330b565b505050565b600080612cfa888888888888613373565b600080600083612dc9866112f0565b612dd39190613695565b90506000811215612deb576000809250925050612df2565b9150600190505b9250929050565b6000808213612e1b5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f19820190612e9e9084901c6112f0565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361303a57506000919050565b680755bf798b4a1bf1e58212613063576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061277c74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6112f0565b600080670de0b6b3a76400006131c86105ca565b6131d2919061387d565b90508083116131e25760006131ec565b6131ec818461382a565b9150611557613223670de0b6b3a76400007f000000000000000000000000000000000000000000000000000000000000000061387d565b839061279b565b600080600061323c8989888888613433565b905086881015613253576000809250925050613300565b96869003966132628887612711565b975087811015613279576000809250925050613300565b878103613287818688612cc3565b9050670de0b6b3a764000081106132bb576132b46132ad670de0b6b3a764000089612786565b8290612711565b90506132d3565b6132d06132ad670de0b6b3a76400008961279b565b90505b6132dd8186612786565b9050898110156132f557600080935093505050613300565b899003925060019150505b965096945050505050565b60006133206001600160a01b03841683613462565b905080516000141580156133455750808060200190518101906133439190613b11565b155b15612da457604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b60008060006133858989888888613433565b9050613395866119c3898b613682565b9750878110156133ac576000809250925050613300565b8781036133ba818688612cc3565b9050670de0b6b3a764000081106133e7576133e06132ad670de0b6b3a764000089612786565b90506133ff565b6133fc6132ad670de0b6b3a76400008961279b565b90505b6134098186612786565b9050808a101561342157600080935093505050613300565b90980398600198509650505050505050565b600061343f8585612711565b613458613450866119c3868b6124f3565b859085612cc3565b6124449190613682565b60606115578383600084600080856001600160a01b031684866040516134889190613b2e565b60006040518083038185875af1925050503d80600081146134c5576040519150601f19603f3d011682016040523d82523d6000602084013e6134ca565b606091505b509150915061277c8683836060826134ea576134e582613531565b611557565b815115801561350157506001600160a01b0384163b155b1561352a57604051639996b31560e01b81526001600160a01b038516600482015260240161336a565b5080611557565b8051156135415780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b60405180610120016040528061356e6135ac565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000806000806080858703121561362357600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561364f57600080fd5b85016060818803121561366157600080fd5b939692955090935050565b634e487b7160e01b600052601160045260246000fd5b808201808211156112ea576112ea61366c565b818103600083128015838313168383128216171561269d5761269d61366c565b6000602082840312156136c757600080fd5b81356001600160a01b038116811461155757600080fd5b80151581146105af57600080fd5b6000602082840312156136fe57600080fd5b8135611557816136de565b6000808335601e1984360301811261372057600080fd5b83018035915067ffffffffffffffff82111561373b57600080fd5b602001915036819003821315612df257600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c082015260006137b360e083018486613750565b9a9950505050505050505050565b80820182811260008312801582168215821617156137e1576137e161366c565b505092915050565b878152866020820152856040820152841515606082015283608082015260c060a0820152600061381d60c083018486613750565b9998505050505050505050565b818103818111156112ea576112ea61366c565b6001600160701b0381811683821601908082111561269d5761269d61366c565b6001600160801b0381811683821601908082111561269d5761269d61366c565b80820281158282048414176112ea576112ea61366c565b6001600160801b0382811682821603908082111561269d5761269d61366c565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156112ea576112ea61366c565b634e487b7160e01b600052601260045260246000fd5b600082613906576139066138e1565b500690565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a08201905061399d82855161390b565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215613a1257600080fd5b505080516020909101519092909150565b6000600160ff1b8201613a3857613a3861366c565b5060000390565b61018081016112ea828461390b565b60008060408385031215613a6157600080fd5b825191506020830151613a73816136de565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600060208284031215613aa657600080fd5b5051919050565b600082613abc57613abc6138e1565b600160ff1b821460001984141615613ad657613ad661366c565b500590565b60008060008060808587031215613af157600080fd5b8451935060208501519250604085015191506060850151613661816136de565b600060208284031215613b2357600080fd5b8151611557816136de565b6000825160005b81811015613b4f5760208186018101518583015201613b35565b50600092019182525091905056fea264697066735822122065f15cd22a63fb093a80d69db11084266238f59ef966bb16ef1c3b89c93d20fa64736f6c63430008140033',
    methodIdentifiers: {
        "closeLong(uint256,uint256,uint256,(address,bool,bytes))": "ded06231",
        "closeShort(uint256,uint256,uint256,(address,bool,bytes))": "29b23fc1"
    }
};
