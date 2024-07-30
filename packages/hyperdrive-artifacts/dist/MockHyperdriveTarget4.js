export const MockHyperdriveTarget4 = {
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
            "name": "checkpoint",
            "inputs": [
                {
                    "name": "_checkpointTime",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_maxIterations",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "redeemWithdrawalShares",
            "inputs": [
                {
                    "name": "_withdrawalShares",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_minOutputPerShare",
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
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "removeLiquidity",
            "inputs": [
                {
                    "name": "_lpShares",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_minOutputPerShare",
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
            "name": "ExpInvalidExponent",
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
            "name": "InvalidCheckpointTime",
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
    bytecode: '0x6102606040523480156200001257600080fd5b50604051620035d3380380620035d3833981016040819052620000359162000202565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c090815260c0808601516101e090815260e0808801516102005261012080890151909352610100808901519091526101408089015190915290870180515190925281519093015190925281516040908101516101609081529251606090810151610180908152918701518616610220528601516102405291850151600980546001600160a01b031990811692871692909217905591850151600a8054841691861691909117905591840151600b80548316918516919091179055920151600c8054909316911617905562000315565b60405161020081016001600160401b03811182821017156200016a57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200018857600080fd5b919050565b600060808284031215620001a057600080fd5b604051608081016001600160401b0381118282101715620001d157634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600061026082840312156200021657600080fd5b6200022062000138565b6200022b8362000170565b81526200023b6020840162000170565b60208201526200024e6040840162000170565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140808401518183015250610160620002b981850162000170565b90820152610180620002cd84820162000170565b908201526101a0620002e184820162000170565b908201526101c0620002f584820162000170565b908201526101e06200030a858583016200018d565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161024051613180620004536000396000505060005050600050506000818161026d0152611fcd0152600081816118130152818161187601528181611bb201528181611bee01528181611de60152611fa701526000818161056f0152611f81015260006113e8015260006115430152600081816107330152611517015260005050600081816105900152611ff301526000818161066b01526127450152600081816101ed0152818161042e015281816104a90152818161051f015281816105eb015261062301526000505060008181611068015281816110b1015281816122d60152818161231f015281816123fa015281816124a601528181612592015261263e01526131806000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063074a6de914610046578063414f826d14610072578063cbc1343414610087575b600080fd5b610059610054366004612c33565b61009a565b6040805192835260208301919091520160405180910390f35b610085610080366004612c8a565b6100b5565b005b610059610095366004612c33565b6100c3565b6000806100a88585856100d1565b915091505b935093915050565b6100bf8282610196565b5050565b6000806100a8858585610257565b6000806100dc6103ab565b6100e5836103d5565b60006100ef61040e565b90506101066100fc610426565b8260046001610452565b506101143387838888610a49565b90935091506101266020850185612cac565b6001600160a01b0316337f07210cf9a89fae8012341fdc131255728787856379269f07c2e41c23b3c09b5884868561016460408b0160208c01612ce3565b61017160408c018c612d00565b60405161018396959493929190612d70565b60405180910390a3506100ad6001600055565b61019e6103ab565b60006101a861040e565b6000848152600860205260409020600101549091506001600160801b0316156101dc576101d58183610b8c565b505061024d565b60006101e6610426565b90506102127f000000000000000000000000000000000000000000000000000000000000000085612dc0565b15158061021e57508381105b1561023c5760405163ecd29e8160e01b815260040160405180910390fd5b6102498483856000610452565b5050505b6100bf6001600055565b6000806102626103ab565b61026b836103d5565b7f00000000000000000000000000000000000000000000000000000000000000008510156102ac5760405163211ddda360e11b815260040160405180910390fd5b60006102b661040e565b90506102c36100fc610426565b506102d060003388610d87565b6102eb600360f81b6102e56020870187612cac565b88610e61565b60006103066102fd6020870187612cac565b88848989610a49565b90945090506103158188612dea565b9250600061032283610f01565b5090506103326020870187612cac565b6001600160a01b0316337f1c7999deb68182de77ce89d32f82d0e13eb042921b2bfa9f35aa1c43f62f261e8a888761037060408d0160208e01612ce3565b8a888e80604001906103829190612d00565b604051610396989796959493929190612dfd565b60405180910390a35050506100ad6001600055565b6002600054036103ce57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b60006103e46020830183612cac565b6001600160a01b03160361040b5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b6000610421670de0b6b3a764000061104d565b905090565b6000610421427f000000000000000000000000000000000000000000000000000000000000000061114f565b600084815260086020526040812060018101546001600160801b031615158061047a57504286115b1561049357600101546001600160801b03169050610a41565b60008060006104a0610426565b905060006104ce7f00000000000000000000000000000000000000000000000000000000000000008b612e45565b90505b81811015610544576000818152600860205260409020600101546001600160801b0316801561051c576000828152600860205260409020549094506001600160801b03169250610544565b507f0000000000000000000000000000000000000000000000000000000000000000016104d1565b836000036105b7578893506105b461055a611165565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611186565b92505b506105c1836111a6565b6001850180546001600160801b0319166001600160801b03929092169190911790556106176106107f00000000000000000000000000000000000000000000000000000000000000008b612dea565b8a846111d4565b6106558961064f6106487f000000000000000000000000000000000000000000000000000000000000000083612e45565b4290611312565b846111d4565b61065e88611327565b50600090506008816106907f00000000000000000000000000000000000000000000000000000000000000008d612dea565b815260208101919091526040016000908120600101546001600160801b031691506106bc60028c6114cb565b6000818152601060205260408120549192508c8c831561080257600192506000806106eb86898d866000611500565b9150915080600d60008282546107019190612e45565b9091555061071d905086600084610717816115cf565b886115f9565b6107278183612e45565b915061075786838a8e877f0000000000000000000000000000000000000000000000000000000000000000611773565b915061076b61076683856117bd565b6117d2565b6006805460029061078c9084906201000090046001600160701b0316612e58565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506107b9826111a6565b600680546010906107db908490600160801b90046001600160801b0316612e78565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b600061080f6001846114cb565b600081815260106020526040902054909150801561091e576001945060008061083c838b8f886001611500565b9150915080600d60008282546108529190612e45565b9091555061086e905083600084610868816115cf565b8a6117fc565b6108788183612dea565b915061088761076683876117bd565b600680546002906108a89084906201000090046001600160701b0316612e58565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506108d5826111a6565b600680546010906108f7908490600160801b90046001600160801b0316612e78565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b84156109585761094a610930876115cf565b610939836115cf565b6109439190612e98565b60006119ed565b8e6109558482610b8c565b50505b600061096384610f01565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a2600c546001600160a01b031615610a31578e610a2d5a604051336024820152604481018990528315156064820152600090819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b179052600c546001600160a01b031693929190611a2c565b5050505b50999b5050505050505050505050505b949350505050565b600080610a5585611ab7565b505060075485906001600160801b031680821115610a7a57806001600160801b031691505b81600003610a8f576000809250925050610b82565b610a9e600360f81b8984610d87565b600754600090610ac49084906001600160801b03600160801b9091048116908516611ac4565b9050610acf836111a6565b610ad99083612eb8565b600780546001600160801b0319166001600160801b0392909216919091179055610b02816111a6565b60078054601090610b24908490600160801b90046001600160801b0316612eb8565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610b53818887611ae2565b9350610b5f8684611b7b565b841015610b7f5760405163c972651760e01b815260040160405180910390fd5b50505b9550959350505050565b600754600360f81b600090815260106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215490918291610bd7916001600160801b031690612dea565b905080600003610beb576001915050610d81565b6000610bf685611b90565b905080600003610c0b57600192505050610d81565b600080610c19838589611c2c565b9150915080610c2f576000945050505050610d81565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401610c6b929190612f56565b6040805180830381865af4158015610c87573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cab9190612fcc565b91509150610cc9610cbb826115cf565b610cc490612ff0565b611da0565b925082610cdf5760009650505050505050610d81565b610ce8826111a6565b60078054600090610d039084906001600160801b0316612e78565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610d30816111a6565b60078054601090610d52908490600160801b90046001600160801b0316612e78565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600196505050505050505b92915050565b6000838152600f602090815260408083206001600160a01b0386168452909152902054811115610dca57604051631e9acf1760e31b815260040160405180910390fd5b6000838152600f602090815260408083206001600160a01b0386168452825280832080548590039055858352601090915281208054839290610e0d908490612dea565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b6000838152600f602090815260408083206001600160a01b038616845290915281208054839290610e93908490612e45565b909155505060008381526010602052604081208054839290610eb6908490612e45565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101610e54565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e610f2a87611f38565b6040518263ffffffff1660e01b8152600401610f46919061300c565b6040805180830381865af4158015610f62573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f86919061301b565b9150915080610f9c575060009485945092505050565b60075460106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215460008080527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb015490926001600160801b03169161100291612e45565b61100c9190612dea565b90508060000361102457506000958695509350505050565b600080871161103457600061103f565b61103f848884611ac4565b976001975095505050505050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161109c575047611127565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611100573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611124919061304b565b90505b601454600003611138576000611148565b6014546111489084908390611ac4565b9392505050565b600061115b8284612dc0565b6111489084612dea565b600254600454600091610421916001600160801b0390911690600f0b612072565b600061119d82611197858888611ac4565b90612098565b95945050505050565b60006001600160801b038211156111d057604051630f0af95160e11b815260040160405180910390fd5b5090565b600083815260086020526040902054600160801b90046001600160801b03168083036112005750505050565b6000848152600860205260408120546001600160801b03169081900361125a57611229836111a6565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790556112d8565b6112ab6112a6670de0b6b3a76400006112738886612dea565b61127d9190613064565b85670de0b6b3a7640000611291878a612dea565b61129b9190613064565b85929190600161210d565b6111a6565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b6112e1846111a6565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b60008183116113215782611148565b50919050565b600654600090819061134a908490600160801b90046001600160801b03166117bd565b6006546201000090046001600160701b031692509050818111156114c65760006113748383612dea565b90506113836112a682866121ab565b600680546010906113a5908490600160801b90046001600160801b0316612eb8565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006113de85836121c090919063ffffffff16565b9050600061140c827f00000000000000000000000000000000000000000000000000000000000000006117bd565b905080600d60008282546114209190612e45565b9091555061143090508183612dea565b915061143b826111a6565b600280546000906114569084906001600160801b0316612e78565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611483826121d5565b60048054600090611498908490600f0b61307b565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60006001600160f81b038211156114f55760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60008061150d87856121c0565b9150600061153b837f00000000000000000000000000000000000000000000000000000000000000006117bd565b9050611567817f00000000000000000000000000000000000000000000000000000000000000006117bd565b9150831561158a576115798282612dea565b6115839084612dea565b92506115a1565b6115948282612dea565b61159e9084612e45565b92505b868610156115c4576115b4838789611ac4565b92506115c1828789611ac4565b91505b509550959350505050565b60006001600160ff1b038211156111d05760405163396ea70160e11b815260040160405180910390fd5b600454600160801b90046001600160801b03166116426112a682611625670de0b6b3a764000086613064565b600554600160801b90046001600160801b031691908a600061210d565b600580546001600160801b03928316600160801b029216919091179055611668866111a6565b6116729082612eb8565b600480546001600160801b03928316600160801b029216919091179055611698846111a6565b600280546000906116b39084906001600160801b0316612e78565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506116e0836121ff565b600480546000906116f5908490600f0b61307b565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611725856111a6565b60028054601090611747908490600160801b90046001600160801b0316612eb8565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b60008061178b846117858a888a611ac4565b906121c0565b9050611798888486611ac4565b6117a29082612e45565b9050868111156117b25786810391505b509695505050505050565b60006111488383670de0b6b3a7640000611ac4565b60006001600160701b038211156111d05760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b03168381108061183e57507f000000000000000000000000000000000000000000000000000000000000000061183c8583612dea565b105b1561184b5761184b61223b565b6004549084900390600f0b6118608482612e98565b90508361186c866115cf565b1380156118a157507f000000000000000000000000000000000000000000000000000000000000000061189f8383612072565b105b156118ae576118ae61223b565b600354600160801b90046001600160801b03166118f06112a6826118da670de0b6b3a764000088613064565b6005546001600160801b031691908c600061210d565b600580546001600160801b0319166001600160801b039290921691909117905561191a8882612dea565b9050611925816111a6565b600380546001600160801b03928316600160801b02921691909117905561194b836111a6565b600280546001600160801b0319166001600160801b0392909216919091179055611974826121ff565b600480546001600160801b0319166001600160801b039290921691909117905561199d876111a6565b600280546010906119bf908490600160801b90046001600160801b0316612e78565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b600354611a08906112a6906001600160801b03168484612254565b600380546001600160801b0319166001600160801b03929092169190911790555050565b6000606060008060008661ffff1667ffffffffffffffff811115611a5257611a526130a8565b6040519080825280601f01601f191660200182016040528015611a7c576020820181803683370190505b5090506000808751602089018b8e8ef191503d925086831115611a9d578692505b828152826000602083013e90999098509650505050505050565b6000610d81826004610b8c565b6000826000190484118302158202611adb57600080fd5b5091020490565b600080611aef85856117bd565b9050611afa816122bb565b945084600003611b0e576000915050611148565b849150611b216040840160208501612ce3565b15611b5057611b4985611b376020860186612cac565b611b446040870187612d00565b6123a4565b9150611b73565b611b7385611b616020860186612cac565b611b6e6040870187612d00565b61253e565b509392505050565b60006111488383670de0b6b3a76400006126d4565b6003546000908190611bab906001600160801b0316846121ab565b9050611bd77f000000000000000000000000000000000000000000000000000000000000000082612e45565b6002546001600160801b03161115611321576002547f000000000000000000000000000000000000000000000000000000000000000090611c229083906001600160801b0316612dea565b6111489190612dea565b611c34612b80565b600080611c4084611f38565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401611c7b919061300c565b6040805180830381865af4158015611c97573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611cbb919061301b565b9350905082611cd05750600091506100ad9050565b6000611cf7611cf28461016001518561014001516117bd90919063ffffffff16565b6115cf565b611d17611cf2856101200151866101000151611b7b90919063ffffffff16565b611d219190612e98565b604080516101208101825285815260208082019590955260008052601085527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb0154818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015611e59573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e7d91906130be565b935093509350935080611e995750600098975050505050505050565b868414611eca57611ea9846111a6565b600280546001600160801b0319166001600160801b03929092169190911790555b858314611efb57611eda836121ff565b600480546001600160801b0319166001600160801b03929092169190911790555b848214611f2957611f0b826111a6565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b611f40612bd2565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e0830152600354048216610100820152600554909161012083019161203891166126fa565b81526004546001600160801b03600160801b918290048116602084015260055460409093019261206a929004166126fa565b905292915050565b60008061207f8484612770565b9092509050806120915761209161223b565b5092915050565b6000816000036120b15750670de0b6b3a7640000610d81565b826000036120c157506000610d81565b60006120cc836115cf565b905060006120e16120dc866115cf565b6127af565b90508181026120f8670de0b6b3a7640000826130ff565b9050612103816129d5565b9695505050505050565b60008260000361211e57508461119d565b81156121715761214f6121318487612e45565b61213b85876117bd565b612145888a6117bd565b6117859190612e45565b9050600061215d8588611312565b90508082101561216b578091505b5061119d565b8285036121805750600061119d565b61210361218d8487612dea565b6121978587611b7b565b6121a1888a6117bd565b6117859190612dea565b600061114883670de0b6b3a7640000846126d4565b600061114883670de0b6b3a764000084611ac4565b600060016001607f1b038211156111d05760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b031982128061221d575060016001607f1b0382135b156111d05760405163a5353be560e01b815260040160405180910390fd5b60405163bb55fd2760e01b815260040160405180910390fd5b600080612262846000612b6a565b61226d846000612b6a565b6122779190612e98565b905060008113156122935761228c8186612e45565b94506122b2565b60008112156122b2576122a581612ff0565b6122af9086612dea565b94505b50929392505050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161230a575047612395565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa15801561236e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612392919061304b565b90505b60145461114890849083611ac4565b600060145485116123b557846123b9565b6014545b945060006123c68661104d565b905085601460008282546123da9190612dea565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612480576040516001600160a01b038716908390600081818185875af1925050503d8060008114612470576040519150601f19603f3d011682016040523d82523d6000602084013e612475565b606091505b505080915050612516565b60405163a9059cbb60e01b81526001600160a01b038781166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af11580156124ef573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612513919061312d565b90505b80612534576040516312171d8360e31b815260040160405180910390fd5b5095945050505050565b601454841161254d5783612551565b6014545b9350600061255e8561104d565b905084601460008282546125729190612dea565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612618576040516001600160a01b038616908390600081818185875af1925050503d8060008114612608576040519150601f19603f3d011682016040523d82523d6000602084013e61260d565b606091505b5050809150506126ae565b60405163a9059cbb60e01b81526001600160a01b038681166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af1158015612687573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906126ab919061312d565b90505b806126cc576040516312171d8360e31b815260040160405180910390fd5b505050505050565b60008260001904841183021582026126eb57600080fd5b50910281810615159190040190565b600080670de0b6b3a764000061270e610426565b6127189190613064565b9050808311612728576000612732565b6127328184612dea565b9150611148612769670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613064565b83906121c0565b60008060008361277f866115cf565b6127899190612e98565b905060008112156127a15760008092509250506127a8565b9150600190505b9250929050565b60008082136127d15760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906128549084901c6115cf565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e1982136129f057506000919050565b680755bf798b4a1bf1e58212612a19576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061210374029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6115cf565b6000818313612b795781611148565b5090919050565b604051806101200160405280612b94612bd2565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b600080600060608486031215612c4857600080fd5b8335925060208401359150604084013567ffffffffffffffff811115612c6d57600080fd5b840160608187031215612c7f57600080fd5b809150509250925092565b60008060408385031215612c9d57600080fd5b50508035926020909101359150565b600060208284031215612cbe57600080fd5b81356001600160a01b038116811461114857600080fd5b801515811461040b57600080fd5b600060208284031215612cf557600080fd5b813561114881612cd5565b6000808335601e19843603018112612d1757600080fd5b83018035915067ffffffffffffffff821115612d3257600080fd5b6020019150368190038213156127a857600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b868152856020820152846040820152831515606082015260a060808201526000612d9e60a083018486612d47565b98975050505050505050565b634e487b7160e01b600052601260045260246000fd5b600082612dcf57612dcf612daa565b500690565b634e487b7160e01b600052601160045260246000fd5b81810381811115610d8157610d81612dd4565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c08201526000612e3760e083018486612d47565b9a9950505050505050505050565b80820180821115610d8157610d81612dd4565b6001600160701b0381811683821601908082111561209157612091612dd4565b6001600160801b0381811683821601908082111561209157612091612dd4565b818103600083128015838313168383128216171561209157612091612dd4565b6001600160801b0382811682821603908082111561209157612091612dd4565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a082019050612f6a828551612ed8565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215612fdf57600080fd5b505080516020909101519092909150565b6000600160ff1b820161300557613005612dd4565b5060000390565b6101808101610d818284612ed8565b6000806040838503121561302e57600080fd5b82519150602083015161304081612cd5565b809150509250929050565b60006020828403121561305d57600080fd5b5051919050565b8082028115828204841417610d8157610d81612dd4565b600f81810b9083900b0160016001607f1b03811360016001607f1b031982121715610d8157610d81612dd4565b634e487b7160e01b600052604160045260246000fd5b600080600080608085870312156130d457600080fd5b84519350602085015192506040850151915060608501516130f481612cd5565b939692955090935050565b60008261310e5761310e612daa565b600160ff1b82146000198414161561312857613128612dd4565b500590565b60006020828403121561313f57600080fd5b815161114881612cd556fea2646970667358221220eb0bfd0561c003200e372dd890081318307aeb2b9fd5324d851e2a3c23721a4664736f6c63430008140033',
    methodIdentifiers: {
        "checkpoint(uint256,uint256)": "414f826d",
        "redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))": "074a6de9",
        "removeLiquidity(uint256,uint256,(address,bool,bytes))": "cbc13434"
    }
};
