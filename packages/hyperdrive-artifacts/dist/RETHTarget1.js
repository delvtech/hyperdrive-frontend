export const RETHTarget1 = {
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
    bytecode: '0x6102606040523480156200001257600080fd5b506040516200414338038062004143833981016040819052620000359162000202565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c090815260c0808601516101e090815260e0808801516102005261012080890151909352610100808901519091526101408089015190915290870180515190925281519093015190925281516040908101516101609081529251606090810151610180908152918701518616610220528601516102405291850151600980546001600160a01b031990811692871692909217905591850151600a8054841691861691909117905591840151600b80548316918516919091179055920151600c8054909316911617905562000315565b60405161020081016001600160401b03811182821017156200016a57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200018857600080fd5b919050565b600060808284031215620001a057600080fd5b604051608081016001600160401b0381118282101715620001d157634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600061026082840312156200021657600080fd5b6200022062000138565b6200022b8362000170565b81526200023b6020840162000170565b60208201526200024e6040840162000170565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140808401518183015250610160620002b981850162000170565b90820152610180620002cd84820162000170565b908201526101a0620002e184820162000170565b908201526101c0620002f584820162000170565b908201526101e06200030a858583016200018d565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161024051613c7e620004c560003960005050600050506000505060008181610110015281816103860152612d2e01526000818161143b0152818161184d015281816118b00152818161290c0152818161294801528181612b470152612d0801526000818161077401528181610dc401528181610e0b01528181610fd0015281816116b2015281816117000152612ce201526000611c02015260008181611d280152818161239d015261241601526000818161093801528181610f6801528181611cfc01526123ea015260008181610e5d015261236301526000818161079501528181610da201528181610e2c01528181610ff101528181611690015281816117210152612d5401526000818161087001528181610ee7015281816117a90152818161223801526132c4015260008181610633015281816106ae01528181610724015281816107f00152610828015260008181603d01528181611a400152818161263901528181612689015261277a015260005050613c7e6000f3fe60806040526004361061002d5760003560e01c806329b23fc114610082578063ded06231146100b457600080fd5b3661007d57336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461007b576040516312171d8360e31b815260040160405180910390fd5b005b600080fd5b34801561008e57600080fd5b506100a261009d3660046136d2565b6100d4565b60405190815260200160405180910390f35b3480156100c057600080fd5b506100a26100cf3660046136d2565b6100ed565b60006100e2858585856100fb565b90505b949350505050565b60006100e285858585610371565b60006101056105b0565b61010e826105da565b7f000000000000000000000000000000000000000000000000000000000000000084101561014f5760405163211ddda360e11b815260040160405180910390fd5b6000610159610613565b90508542101561017e5761017861016e61062b565b8260046001610657565b5061018e565b61018c868260046001610657565b505b6101a361019c600288610c4f565b3387610c84565b6000806000806000806101b78b888e610d5d565b95509550955095509550955060008c90508c4210156102775782600d60008282546101e29190613747565b909155506101fa90506101f361062b565b4284611051565b6102078c8887878561118f565b60006102128e611309565b90506102306102208e611353565b61022a908361375a565b82611381565b61023989611434565b61024557610245611494565b60006102508a6114ad565b90508061027057604051638bdf918d60e01b815260040160405180910390fd5b505061028e565b61028186896114ba565b955061028c886114ad565b505b600061029b878a8d61159b565b90508b8110156102be5760405163c972651760e01b815260040160405180910390fd5b8c86858b8e6102ce600288610c4f565b6102db602083018361377a565b6001600160a01b0316337ff87a3de08b9fe89d655d6731088496cf5f5da0abd455e9f7cdc5f0c717f209e58a8a876103196040890160208a016137b1565b61032d8a6103278d8f613747565b90611636565b8d61033b60408c018c6137ce565b60405161034f98979695949392919061383e565b60405180910390a450939c505050505050505050505050506100e56001600055565b600061037b6105b0565b610384826105da565b7f00000000000000000000000000000000000000000000000000000000000000008410156103c55760405163211ddda360e11b815260040160405180910390fd5b60006103cf610613565b9050854210156103ea576103e461016e61062b565b506103fa565b6103f8868260046001610657565b505b61040861019c600188610c4f565b60008060008060008061041c8b888e61164b565b95509550955095509550955060008c90508c4210156104cf5782600d60008282546104479190613747565b9091555061045890506101f361062b565b6104658c88878785611836565b600061047082611309565b905061048861047e8e611353565b61022a9083613886565b61049189611434565b61049d5761049d611494565b60006104a88a6114ad565b9050806104c857604051638bdf918d60e01b815260040160405180910390fd5b50506104e6565b6104d986896114ba565b95506104e4886114ad565b505b60006104f3878a8d61159b565b90508b8110156105165760405163c972651760e01b815260040160405180910390fd5b8c898c610524600186610c4f565b610531602083018361377a565b6001600160a01b0316337f3b2c44173852b22d1ecf7784963c2bab6d4dd07e64ed560f818f144d72ee526788888761056f6040890160208a016137b1565b8a61057d60408b018b6137ce565b60405161059097969594939291906138ae565b60405180910390a450919a50505050505050505050506100e56001600055565b6002600054036105d357604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b60006105e9602083018361377a565b6001600160a01b0316036106105760405163f0dd15fd60e01b815260040160405180910390fd5b50565b6000610626670de0b6b3a7640000611a27565b905090565b6000610626427f0000000000000000000000000000000000000000000000000000000000000000611ab4565b600084815260086020526040812060018101546001600160801b031615158061067f57504286115b1561069857600101546001600160801b031690506100e5565b60008060006106a561062b565b905060006106d37f00000000000000000000000000000000000000000000000000000000000000008b613747565b90505b81811015610749576000818152600860205260409020600101546001600160801b03168015610721576000828152600860205260409020549094506001600160801b03169250610749565b507f0000000000000000000000000000000000000000000000000000000000000000016106d6565b836000036107bc578893506107b961075f611aca565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611aeb565b92505b506107c683611b02565b6001850180546001600160801b0319166001600160801b039290921691909117905561081c6108157f00000000000000000000000000000000000000000000000000000000000000008b6138ef565b8a84611051565b61085a8961085461084d7f000000000000000000000000000000000000000000000000000000000000000083613747565b4290611b2c565b84611051565b61086388611b41565b50600090506008816108957f00000000000000000000000000000000000000000000000000000000000000008d6138ef565b815260208101919091526040016000908120600101546001600160801b031691506108c160028c610c4f565b6000818152601060205260408120549192508c8c8315610a0757600192506000806108f086898d866000611ce5565b9150915080600d60008282546109069190613747565b9091555061092290508660008461091c81611353565b8861118f565b61092c8183613747565b915061095c86838a8e877f0000000000000000000000000000000000000000000000000000000000000000611db4565b915061097061096b8385611636565b611dfe565b600680546002906109919084906201000090046001600160701b0316613902565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506109be82611b02565b600680546010906109e0908490600160801b90046001600160801b0316613922565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000610a14600184610c4f565b6000818152601060205260409020549091508015610b235760019450600080610a41838b8f886001611ce5565b9150915080600d6000828254610a579190613747565b90915550610a73905083600084610a6d81611353565b8a611836565b610a7d81836138ef565b9150610a8c61096b8387611636565b60068054600290610aad9084906201000090046001600160701b0316613902565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610ada82611b02565b60068054601090610afc908490600160801b90046001600160801b0316613922565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610b5d57610b4f610b3587611353565b610b3e83611353565b610b48919061375a565b6000611381565b8e610b5a8482611e28565b50505b6000610b6884612022565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a2600c546001600160a01b031615610c38578e610c345a6040513360248201526044810189905283151560648201526000906104009060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b179052600c546001600160a01b031693929190612180565b5050505b50999b505050505050505050505050949350505050565b60006001600160f81b03821115610c795760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600f602090815260408083206001600160a01b0386168452909152902054811115610cc757604051631e9acf1760e31b815260040160405180910390fd5b6000838152600f602090815260408083206001600160a01b0386168452825280832080548590039055858352601090915281208054839290610d0a9084906138ef565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b600080600080600080600080610d71611aca565b90506000610d7e8a61220b565b6002549091508c908c90610de8908590600160801b90046001600160801b031684867f0000000000000000000000000000000000000000000000000000000000000000867f000000000000000000000000000000000000000000000000000000000000000061225c565b600254919d509a50909550610e50908590600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611aeb565b9550610e86858c610e81897f00000000000000000000000000000000000000000000000000000000000000006122cc565b6122fc565b15610e9357610e93611494565b6000806000610ea485878b8761233e565b9c5091945092509050610eb781846138ef565b610ec19089613747565b9750610ecd8284613747565b610ed7908d613747565b9b505050505050506000600860007f00000000000000000000000000000000000000000000000000000000000000008c610f1191906138ef565b815260208101919091526040016000908120600101546001600160801b03169150428b11610f595760008b8152600860205260409020600101546001600160801b0316610f5b565b8b5b90508b610f8c8e8a8585857f0000000000000000000000000000000000000000000000000000000000000000611db4565b9950610f98878a6138ef565b9850670de0b6b3a7640000611015610fb08787613747565b600254610fce908f90600160801b90046001600160801b03166138ef565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611aeb565b111561102357611023611494565b6110338a8a878a87876000612452565b939d50919b5090995090975050505050505093975093979195509350565b600083815260086020526040902054600160801b90046001600160801b031680830361107d5750505050565b6000848152600860205260408120546001600160801b0316908190036110d7576110a683611b02565b600086815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055611155565b611128611123670de0b6b3a76400006110f088866138ef565b6110fa9190613942565b85670de0b6b3a764000061110e878a6138ef565b6111189190613942565b8592919060016124f1565b611b02565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b61115e84611b02565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600454600160801b90046001600160801b03166111d8611123826111bb670de0b6b3a764000086613942565b600554600160801b90046001600160801b031691908a60006124f1565b600580546001600160801b03928316600160801b0292169190911790556111fe86611b02565b6112089082613959565b600480546001600160801b03928316600160801b02921691909117905561122e84611b02565b600280546000906112499084906001600160801b0316613922565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506112768361259b565b6004805460009061128b908490600f0b613979565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506112bb85611b02565b600280546010906112dd908490600160801b90046001600160801b0316613959565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b60006113316010600061131d600286610c4f565b815260200190815260200160002054611353565b6113436010600061131d600187610c4f565b61134d919061375a565b92915050565b60006001600160ff1b0382111561137d5760405163396ea70160e11b815260040160405180910390fd5b5090565b60006113aa61139084836125d7565b61139b8460006125d7565b6113a5919061375a565b61259b565b9050600081600f0b13156113ff57600380548291906000906113d69084906001600160801b0316613922565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b121561142f57611414816139a6565b600380546000906113d69084906001600160801b0316613959565b505050565b60006114607f0000000000000000000000000000000000000000000000000000000000000000836125ed565b60035461147691906001600160801b0316613747565b60025461148c906001600160801b031684611636565b101592915050565b60405163bb55fd2760e01b815260040160405180910390fd5b600061134d826004611e28565b60008060006114c884611b41565b909250905060006114d98686611636565b9050818311156114f1576114ee868385612602565b95505b82811015611503578083039250611508565b600092505b61151183611dfe565b600680546001600160701b039290921662010000026fffffffffffffffffffffffffffff00001990921691909117908190556001600160801b03600160801b909104168087101561156457869003611568565b5060005b61157181611b02565b600680546001600160801b03928316600160801b0292169190911790555085935050505092915050565b6000806115a88585611636565b90506115b381612620565b9450846000036115c757600091505061162f565b6115d760408401602085016137b1565b15611606576115ff856115ed602086018661377a565b6115fa60408701876137ce565b612670565b915061162d565b61162985611617602086018661377a565b61162460408701876137ce565b61276d565b8491505b505b9392505050565b600061162f8383670de0b6b3a7640000612602565b60008060008060008060008061165f611aca565b9050600061166c8a61220b565b6002549091508b908d906116d6908590600160801b90046001600160801b031683867f0000000000000000000000000000000000000000000000000000000000000000877f00000000000000000000000000000000000000000000000000000000000000006127a7565b600254919d509b5090955060009081908190611745908890600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611aeb565b985061175384878b8861233e565b9c50919450909250905061176782846138ef565b61177190896138ef565b975061177d8184613747565b611787908e6138ef565b9c506117938a8e613747565b9b505050505050505061182086868386600860007f00000000000000000000000000000000000000000000000000000000000000008f6117d391906138ef565b81526020810191909152604001600020600101546001600160801b0316428e116118175760008e8152600860205260409020600101546001600160801b0316611819565b8e5b6001612452565b9a9e939d50919b50909950929650945050505050565b6002546001600160801b03168381108061187857507f000000000000000000000000000000000000000000000000000000000000000061187685836138ef565b105b1561188557611885611494565b6004549084900390600f0b61189a848261375a565b9050836118a686611353565b1380156118db57507f00000000000000000000000000000000000000000000000000000000000000006118d983836127fb565b105b156118e8576118e8611494565b600354600160801b90046001600160801b031661192a61112382611914670de0b6b3a764000088613942565b6005546001600160801b031691908c60006124f1565b600580546001600160801b0319166001600160801b039290921691909117905561195488826138ef565b905061195f81611b02565b600380546001600160801b03928316600160801b02921691909117905561198583611b02565b600280546001600160801b0319166001600160801b03929092169190911790556119ae8261259b565b600480546001600160801b0319166001600160801b03929092169190911790556119d787611b02565b600280546010906119f9908490600160801b90046001600160801b0316613922565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b604051638b32fa2360e01b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690638b32fa23906024015b602060405180830381865afa158015611a90573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061134d91906139cc565b6000611ac082846139fb565b61162f90846138ef565b600254600454600091610626916001600160801b0390911690600f0b6127fb565b60006100e282611afc858888612602565b90612821565b60006001600160801b0382111561137d57604051630f0af95160e11b815260040160405180910390fd5b6000818311611b3b578261162f565b50919050565b6006546000908190611b64908490600160801b90046001600160801b0316611636565b6006546201000090046001600160701b03169250905081811115611ce0576000611b8e83836138ef565b9050611b9d6111238286612896565b60068054601090611bbf908490600160801b90046001600160801b0316613959565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611bf885836128ab90919063ffffffff16565b90506000611c26827f0000000000000000000000000000000000000000000000000000000000000000611636565b905080600d6000828254611c3a9190613747565b90915550611c4a905081836138ef565b9150611c5582611b02565b60028054600090611c709084906001600160801b0316613922565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611c9d826128c0565b60048054600090611cb2908490600f0b613979565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b600080611cf287856128ab565b91506000611d20837f0000000000000000000000000000000000000000000000000000000000000000611636565b9050611d4c817f0000000000000000000000000000000000000000000000000000000000000000611636565b91508315611d6f57611d5e82826138ef565b611d6890846138ef565b9250611d86565b611d7982826138ef565b611d839084613747565b92505b86861015611da957611d99838789612602565b9250611da6828789612602565b91505b509550959350505050565b600080611dcc84611dc68a888a612602565b906128ab565b9050611dd9888486612602565b611de39082613747565b905086811115611df35786810391505b509695505050505050565b60006001600160701b0382111561137d5760405163086b151760e11b815260040160405180910390fd5b600754600360f81b600090815260106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215490918291611e73916001600160801b0316906138ef565b905080600003611e8757600191505061134d565b6000611e92856128ea565b905080600003611ea75760019250505061134d565b600080611eb5838589612986565b9150915080611ecb57600094505050505061134d565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401611f07929190613a8d565b6040805180830381865af4158015611f23573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f479190613b03565b91509150611f65611f5782611353565b611f6090613b27565b612b01565b925082611f7b576000965050505050505061134d565b611f8482611b02565b60078054600090611f9f9084906001600160801b0316613922565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611fcc81611b02565b60078054601090611fee908490600160801b90046001600160801b0316613922565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e61204b87612c99565b6040518263ffffffff1660e01b81526004016120679190613b43565b6040805180830381865af4158015612083573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120a79190613b52565b91509150806120bd575060009485945092505050565b60008086116120cd5760006120d7565b6120d78387611636565b60075460106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215460008080527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb0154939450926001600160801b03909216916121429190613747565b61214c91906138ef565b9050806000036121655750600096879650945050505050565b600061217183836128ab565b98600198509650505050505050565b6000606060008060008661ffff1667ffffffffffffffff8111156121a6576121a6613b82565b6040519080825280601f01601f1916602001820160405280156121d0576020820181803683370190505b5090506000808751602089018b8e8ef191503d9250868311156121f1578692505b828152826000602083013e90999098509650505050505050565b60008061221661062b565b9050808311612226576000612230565b61223081846138ef565b915061162f827f00000000000000000000000000000000000000000000000000000000000000006128ab565b6000808061227d61227588670de0b6b3a76400006138ef565b899087612dd3565b905086156122bf5761228f88886125ed565b91506122b08a8a846122a98a670de0b6b3a76400006138ef565b8989612df9565b92506122bc8382613747565b90505b9750975097945050505050565b60006122ea6122e384670de0b6b3a76400006138ef565b83906125ed565b61162f90670de0b6b3a76400006138ef565b6000806123338561230b611aca565b6123159190613747565b600254610fce908790600160801b90046001600160801b03166138ef565b909210949350505050565b6000808080612395878661238e8b6123886123618c670de0b6b3a76400006138ef565b7f0000000000000000000000000000000000000000000000000000000000000000906125ed565b906125ed565b9190612dd3565b93506123c1847f0000000000000000000000000000000000000000000000000000000000000000611636565b915060006123e26123da89670de0b6b3a76400006138ef565b8a9088612dd3565b905061240e817f00000000000000000000000000000000000000000000000000000000000000006125ed565b935061243a847f0000000000000000000000000000000000000000000000000000000000000000611636565b6124449084613747565b915050945094509450949050565b600080600080600080888810156124c1578615612477576124748d898b612602565b9c505b6124828c898b612602565b9b5061248d8b611353565b6124968d611353565b6124a0919061375a565b90506124ad8b898b612602565b9a506124ba8a898b612602565b99506124e0565b6124ca8b611353565b6124d38d611353565b6124dd919061375a565b90505b9b9c9a9b999a975050505050505050565b600082600003612502575084612592565b8115612555576125336125158487613747565b61251f8587611636565b612529888a611636565b611dc69190613747565b905060006125418588611b2c565b90508082101561254f578091505b50612592565b82850361256457506000612592565b61258f61257184876138ef565b61257b85876125ed565b612585888a611636565b611dc691906138ef565b90505b95945050505050565b600060016001607f1b03198212806125b9575060016001607f1b0382135b1561137d5760405163a5353be560e01b815260040160405180910390fd5b60008183136125e6578161162f565b5090919050565b600061162f8383670de0b6b3a7640000612dd3565b600082600019048411830215820261261957600080fd5b5091020490565b6040516321a3781f60e11b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690634346f03e90602401611a73565b604051630852cd8d60e31b8152600481018590526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906342966c6890602401600060405180830381600087803b1580156126d557600080fd5b505af11580156126e9573d6000803e3d6000fd5b505050504790506000846001600160a01b03168260405160006040518083038185875af1925050503d806000811461273d576040519150601f19603f3d011682016040523d82523d6000602084013e612742565b606091505b5050905080612764576040516312171d8360e31b815260040160405180910390fd5b50949350505050565b6127a16001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168486612e1c565b50505050565b600080806127c86127c088670de0b6b3a76400006138ef565b899087612602565b905086156122bf576127da8888611636565b91506122b08a8a846127f48a670de0b6b3a76400006138ef565b8989612e6e565b6000806128088484612e7f565b90925090508061281a5761281a611494565b5092915050565b60008160000361283a5750670de0b6b3a764000061134d565b8260000361284a5750600061134d565b600061285583611353565b9050600061286a61286586611353565b612ebe565b9050818102612881670de0b6b3a764000082613b98565b905061288c816130e4565b9695505050505050565b600061162f83670de0b6b3a764000084612dd3565b600061162f83670de0b6b3a764000084612602565b600060016001607f1b0382111561137d5760405163a5353be560e01b815260040160405180910390fd5b6003546000908190612905906001600160801b031684612896565b90506129317f000000000000000000000000000000000000000000000000000000000000000082613747565b6002546001600160801b03161115611b3b576002547f00000000000000000000000000000000000000000000000000000000000000009061297c9083906001600160801b03166138ef565b61162f91906138ef565b61298e61361f565b60008061299a84612c99565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b81526004016129d59190613b43565b6040805180830381865af41580156129f1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a159190613b52565b9350905082612a2a575060009150612af99050565b6000612a51612a4c84610160015185610140015161163690919063ffffffff16565b611353565b612a71612a4c8561012001518661010001516125ed90919063ffffffff16565b612a7b919061375a565b604080516101208101825285815260208082019590955260008052601085527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb015481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612bba573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612bde9190613bc6565b935093509350935080612bfa5750600098975050505050505050565b868414612c2b57612c0a84611b02565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612c5c57612c3b8361259b565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612c8a57612c6c82611b02565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612ca1613671565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526003540482166101008201526005549091610120830191612d999116613279565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192612dcb92900416613279565b905292915050565b6000826000190484118302158202612dea57600080fd5b50910281810615159190040190565b600080612e0a8888888888886132ef565b909250905080611df357611df3611494565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b17905261142f9084906133d0565b600080612e0a888888888888613438565b600080600083612e8e86611353565b612e98919061375a565b90506000811215612eb0576000809250925050612eb7565b9150600190505b9250929050565b6000808213612ee05760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f19820190612f639084901c611353565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e1982136130ff57506000919050565b680755bf798b4a1bf1e58212613128576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061288c74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611353565b600080670de0b6b3a764000061328d61062b565b6132979190613942565b90508083116132a75760006132b1565b6132b181846138ef565b915061162f6132e8670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613942565b83906128ab565b600080600061330189898888886134f8565b9050868810156133185760008092509250506133c5565b96869003966133278887612821565b97508781101561333e5760008092509250506133c5565b87810361334c818688612dd3565b9050670de0b6b3a7640000811061338057613379613372670de0b6b3a764000089612896565b8290612821565b9050613398565b613395613372670de0b6b3a7640000896128ab565b90505b6133a28186612896565b9050898110156133ba576000809350935050506133c5565b899003925060019150505b965096945050505050565b60006133e56001600160a01b03841683613527565b9050805160001415801561340a5750808060200190518101906134089190613bfc565b155b1561142f57604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b600080600061344a89898888886134f8565b905061345a86611afc898b613747565b9750878110156134715760008092509250506133c5565b87810361347f818688612dd3565b9050670de0b6b3a764000081106134ac576134a5613372670de0b6b3a764000089612896565b90506134c4565b6134c1613372670de0b6b3a7640000896128ab565b90505b6134ce8186612896565b9050808a10156134e6576000809350935050506133c5565b90980398600198509650505050505050565b60006135048585612821565b61351d61351586611afc868b6125ed565b859085612dd3565b61258f9190613747565b606061162f8383600084600080856001600160a01b0316848660405161354d9190613c19565b60006040518083038185875af1925050503d806000811461358a576040519150601f19603f3d011682016040523d82523d6000602084013e61358f565b606091505b509150915061288c8683836060826135af576135aa826135f6565b61162f565b81511580156135c657506001600160a01b0384163b155b156135ef57604051639996b31560e01b81526001600160a01b038516600482015260240161342f565b508061162f565b8051156136065780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b604051806101200160405280613633613671565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b600080600080608085870312156136e857600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561371457600080fd5b85016060818803121561372657600080fd5b939692955090935050565b634e487b7160e01b600052601160045260246000fd5b8082018082111561134d5761134d613731565b818103600083128015838313168383128216171561281a5761281a613731565b60006020828403121561378c57600080fd5b81356001600160a01b038116811461162f57600080fd5b801515811461061057600080fd5b6000602082840312156137c357600080fd5b813561162f816137a3565b6000808335601e198436030181126137e557600080fd5b83018035915067ffffffffffffffff82111561380057600080fd5b602001915036819003821315612eb757600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c0820152600061387860e083018486613815565b9a9950505050505050505050565b80820182811260008312801582168215821617156138a6576138a6613731565b505092915050565b878152866020820152856040820152841515606082015283608082015260c060a082015260006138e260c083018486613815565b9998505050505050505050565b8181038181111561134d5761134d613731565b6001600160701b0381811683821601908082111561281a5761281a613731565b6001600160801b0381811683821601908082111561281a5761281a613731565b808202811582820484141761134d5761134d613731565b6001600160801b0382811682821603908082111561281a5761281a613731565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561134d5761134d613731565b600081600f0b60016001607f1b031981036139c3576139c3613731565b60000392915050565b6000602082840312156139de57600080fd5b5051919050565b634e487b7160e01b600052601260045260246000fd5b600082613a0a57613a0a6139e5565b500690565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a082019050613aa1828551613a0f565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215613b1657600080fd5b505080516020909101519092909150565b6000600160ff1b8201613b3c57613b3c613731565b5060000390565b610180810161134d8284613a0f565b60008060408385031215613b6557600080fd5b825191506020830151613b77816137a3565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600082613ba757613ba76139e5565b600160ff1b821460001984141615613bc157613bc1613731565b500590565b60008060008060808587031215613bdc57600080fd5b8451935060208501519250604085015191506060850151613726816137a3565b600060208284031215613c0e57600080fd5b815161162f816137a3565b6000825160005b81811015613c3a5760208186018101518583015201613c20565b50600092019182525091905056fea2646970667358221220cc1daf4bced98bf132614070eb055e164dbdd0f8ae5417172c1e94a673d6646c64736f6c63430008140033',
    methodIdentifiers: {
        "closeLong(uint256,uint256,uint256,(address,bool,bytes))": "ded06231",
        "closeShort(uint256,uint256,uint256,(address,bool,bytes))": "29b23fc1"
    }
};
