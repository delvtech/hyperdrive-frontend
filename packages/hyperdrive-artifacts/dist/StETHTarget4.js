export const StETHTarget4 = {
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
    bytecode: '0x6102606040523480156200001257600080fd5b506040516200321138038062003211833981016040819052620000359162000202565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c090815260c0808601516101e090815260e0808801516102005261012080890151909352610100808901519091526101408089015190915290870180515190925281519093015190925281516040908101516101609081529251606090810151610180908152918701518616610220528601516102405291850151600980546001600160a01b031990811692871692909217905591850151600a8054841691861691909117905591840151600b80548316918516919091179055920151600c8054909316911617905562000315565b60405161020081016001600160401b03811182821017156200016a57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200018857600080fd5b919050565b600060808284031215620001a057600080fd5b604051608081016001600160401b0381118282101715620001d157634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600061026082840312156200021657600080fd5b6200022062000138565b6200022b8362000170565b81526200023b6020840162000170565b60208201526200024e6040840162000170565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140808401518183015250610160620002b981850162000170565b90820152610180620002cd84820162000170565b908201526101a0620002e184820162000170565b908201526101c0620002f584820162000170565b908201526101e06200030a858583016200018d565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161024051612de1620004306000396000505060005050600050506000818161026d0152611f5f0152600081816117a50152818161180801528181611b4401528181611b8001528181611d780152611f3901526000818161056f0152611f130152600061137a015260006114d501526000818161073301526114a9015260005050600081816105900152611f8501526000818161066b01526123c30152600081816101ed0152818161042e015281816104a90152818161051f015281816105eb01526106230152600081816110660152818161226601526122de015260005050612de16000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063074a6de914610046578063414f826d14610072578063cbc1343414610087575b600080fd5b6100596100543660046128b1565b61009a565b6040805192835260208301919091520160405180910390f35b610085610080366004612908565b6100b5565b005b6100596100953660046128b1565b6100c3565b6000806100a88585856100d1565b915091505b935093915050565b6100bf8282610196565b5050565b6000806100a8858585610257565b6000806100dc6103ab565b6100e5836103d5565b60006100ef61040e565b90506101066100fc610426565b8260046001610452565b506101143387838888610a49565b9093509150610126602085018561292a565b6001600160a01b0316337f07210cf9a89fae8012341fdc131255728787856379269f07c2e41c23b3c09b5884868561016460408b0160208c01612961565b61017160408c018c61297e565b604051610183969594939291906129ee565b60405180910390a3506100ad6001600055565b61019e6103ab565b60006101a861040e565b6000848152600860205260409020600101549091506001600160801b0316156101dc576101d58183610b8c565b505061024d565b60006101e6610426565b90506102127f000000000000000000000000000000000000000000000000000000000000000085612a3e565b15158061021e57508381105b1561023c5760405163ecd29e8160e01b815260040160405180910390fd5b6102498483856000610452565b5050505b6100bf6001600055565b6000806102626103ab565b61026b836103d5565b7f00000000000000000000000000000000000000000000000000000000000000008510156102ac5760405163211ddda360e11b815260040160405180910390fd5b60006102b661040e565b90506102c36100fc610426565b506102d060003388610d87565b6102eb600360f81b6102e5602087018761292a565b88610e61565b60006103066102fd602087018761292a565b88848989610a49565b90945090506103158188612a68565b9250600061032283610f01565b509050610332602087018761292a565b6001600160a01b0316337f1c7999deb68182de77ce89d32f82d0e13eb042921b2bfa9f35aa1c43f62f261e8a888761037060408d0160208e01612961565b8a888e8060400190610382919061297e565b604051610396989796959493929190612a7b565b60405180910390a35050506100ad6001600055565b6002600054036103ce57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b60006103e4602083018361292a565b6001600160a01b03160361040b5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b6000610421670de0b6b3a764000061104d565b905090565b6000610421427f00000000000000000000000000000000000000000000000000000000000000006110da565b600084815260086020526040812060018101546001600160801b031615158061047a57504286115b1561049357600101546001600160801b03169050610a41565b60008060006104a0610426565b905060006104ce7f00000000000000000000000000000000000000000000000000000000000000008b612ac3565b90505b81811015610544576000818152600860205260409020600101546001600160801b0316801561051c576000828152600860205260409020549094506001600160801b03169250610544565b507f0000000000000000000000000000000000000000000000000000000000000000016104d1565b836000036105b7578893506105b461055a6110f7565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611118565b92505b506105c183611138565b6001850180546001600160801b0319166001600160801b03929092169190911790556106176106107f00000000000000000000000000000000000000000000000000000000000000008b612a68565b8a84611166565b6106558961064f6106487f000000000000000000000000000000000000000000000000000000000000000083612ac3565b42906112a4565b84611166565b61065e886112b9565b50600090506008816106907f00000000000000000000000000000000000000000000000000000000000000008d612a68565b815260208101919091526040016000908120600101546001600160801b031691506106bc60028c61145d565b6000818152601060205260408120549192508c8c831561080257600192506000806106eb86898d866000611492565b9150915080600d60008282546107019190612ac3565b9091555061071d90508660008461071781611561565b8861158b565b6107278183612ac3565b915061075786838a8e877f0000000000000000000000000000000000000000000000000000000000000000611705565b915061076b610766838561174f565b611764565b6006805460029061078c9084906201000090046001600160701b0316612ad6565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506107b982611138565b600680546010906107db908490600160801b90046001600160801b0316612af6565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b600061080f60018461145d565b600081815260106020526040902054909150801561091e576001945060008061083c838b8f886001611492565b9150915080600d60008282546108529190612ac3565b9091555061086e90508360008461086881611561565b8a61178e565b6108788183612a68565b9150610887610766838761174f565b600680546002906108a89084906201000090046001600160701b0316612ad6565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506108d582611138565b600680546010906108f7908490600160801b90046001600160801b0316612af6565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b84156109585761094a61093087611561565b61093983611561565b6109439190612b16565b600061197f565b8e6109558482610b8c565b50505b600061096384610f01565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a2600c546001600160a01b031615610a31578e610a2d5a604051336024820152604481018990528315156064820152600090819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b179052600c546001600160a01b0316939291906119be565b5050505b50999b5050505050505050505050505b949350505050565b600080610a5585611a49565b505060075485906001600160801b031680821115610a7a57806001600160801b031691505b81600003610a8f576000809250925050610b82565b610a9e600360f81b8984610d87565b600754600090610ac49084906001600160801b03600160801b9091048116908516611a56565b9050610acf83611138565b610ad99083612b36565b600780546001600160801b0319166001600160801b0392909216919091179055610b0281611138565b60078054601090610b24908490600160801b90046001600160801b0316612b36565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610b53818887611a74565b9350610b5f8684611b0d565b841015610b7f5760405163c972651760e01b815260040160405180910390fd5b50505b9550959350505050565b600754600360f81b600090815260106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215490918291610bd7916001600160801b031690612a68565b905080600003610beb576001915050610d81565b6000610bf685611b22565b905080600003610c0b57600192505050610d81565b600080610c19838589611bbe565b9150915080610c2f576000945050505050610d81565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401610c6b929190612bd4565b6040805180830381865af4158015610c87573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cab9190612c4a565b91509150610cc9610cbb82611561565b610cc490612c6e565b611d32565b925082610cdf5760009650505050505050610d81565b610ce882611138565b60078054600090610d039084906001600160801b0316612af6565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610d3081611138565b60078054601090610d52908490600160801b90046001600160801b0316612af6565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600196505050505050505b92915050565b6000838152600f602090815260408083206001600160a01b0386168452909152902054811115610dca57604051631e9acf1760e31b815260040160405180910390fd5b6000838152600f602090815260408083206001600160a01b0386168452825280832080548590039055858352601090915281208054839290610e0d908490612a68565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b6000838152600f602090815260408083206001600160a01b038616845290915281208054839290610e93908490612ac3565b909155505060008381526010602052604081208054839290610eb6908490612ac3565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101610e54565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e610f2a87611eca565b6040518263ffffffff1660e01b8152600401610f469190612c8a565b6040805180830381865af4158015610f62573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f869190612c99565b9150915080610f9c575060009485945092505050565b60075460106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215460008080527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb015490926001600160801b03169161100291612ac3565b61100c9190612a68565b90508060000361102457506000958695509350505050565b600080871161103457600061103f565b61103f848884611a56565b976001975095505050505050565b604051630f451f7160e31b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690637a28fb88906024015b602060405180830381865afa1580156110b6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d819190612cc9565b60006110e68284612a3e565b6110f09084612a68565b9392505050565b600254600454600091610421916001600160801b0390911690600f0b612004565b600061112f82611129858888611a56565b9061202a565b95945050505050565b60006001600160801b0382111561116257604051630f0af95160e11b815260040160405180910390fd5b5090565b600083815260086020526040902054600160801b90046001600160801b03168083036111925750505050565b6000848152600860205260408120546001600160801b0316908190036111ec576111bb83611138565b600086815260086020526040902080546001600160801b0319166001600160801b039290921691909117905561126a565b61123d611238670de0b6b3a76400006112058886612a68565b61120f9190612ce2565b85670de0b6b3a7640000611223878a612a68565b61122d9190612ce2565b85929190600161209f565b611138565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b61127384611138565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b60008183116112b357826110f0565b50919050565b60065460009081906112dc908490600160801b90046001600160801b031661174f565b6006546201000090046001600160701b031692509050818111156114585760006113068383612a68565b9050611315611238828661213d565b60068054601090611337908490600160801b90046001600160801b0316612b36565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611370858361215290919063ffffffff16565b9050600061139e827f000000000000000000000000000000000000000000000000000000000000000061174f565b905080600d60008282546113b29190612ac3565b909155506113c290508183612a68565b91506113cd82611138565b600280546000906113e89084906001600160801b0316612af6565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061141582612167565b6004805460009061142a908490600f0b612cf9565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60006001600160f81b038211156114875760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60008061149f8785612152565b915060006114cd837f000000000000000000000000000000000000000000000000000000000000000061174f565b90506114f9817f000000000000000000000000000000000000000000000000000000000000000061174f565b9150831561151c5761150b8282612a68565b6115159084612a68565b9250611533565b6115268282612a68565b6115309084612ac3565b92505b8686101561155657611546838789611a56565b9250611553828789611a56565b91505b509550959350505050565b60006001600160ff1b038211156111625760405163396ea70160e11b815260040160405180910390fd5b600454600160801b90046001600160801b03166115d4611238826115b7670de0b6b3a764000086612ce2565b600554600160801b90046001600160801b031691908a600061209f565b600580546001600160801b03928316600160801b0292169190911790556115fa86611138565b6116049082612b36565b600480546001600160801b03928316600160801b02921691909117905561162a84611138565b600280546000906116459084906001600160801b0316612af6565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061167283612191565b60048054600090611687908490600f0b612cf9565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506116b785611138565b600280546010906116d9908490600160801b90046001600160801b0316612b36565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b60008061171d846117178a888a611a56565b90612152565b905061172a888486611a56565b6117349082612ac3565b9050868111156117445786810391505b509695505050505050565b60006110f08383670de0b6b3a7640000611a56565b60006001600160701b038211156111625760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b0316838110806117d057507f00000000000000000000000000000000000000000000000000000000000000006117ce8583612a68565b105b156117dd576117dd6121cd565b6004549084900390600f0b6117f28482612b16565b9050836117fe86611561565b13801561183357507f00000000000000000000000000000000000000000000000000000000000000006118318383612004565b105b15611840576118406121cd565b600354600160801b90046001600160801b03166118826112388261186c670de0b6b3a764000088612ce2565b6005546001600160801b031691908c600061209f565b600580546001600160801b0319166001600160801b03929092169190911790556118ac8882612a68565b90506118b781611138565b600380546001600160801b03928316600160801b0292169190911790556118dd83611138565b600280546001600160801b0319166001600160801b039290921691909117905561190682612191565b600480546001600160801b0319166001600160801b039290921691909117905561192f87611138565b60028054601090611951908490600160801b90046001600160801b0316612af6565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60035461199a90611238906001600160801b031684846121e6565b600380546001600160801b0319166001600160801b03929092169190911790555050565b6000606060008060008661ffff1667ffffffffffffffff8111156119e4576119e4612d26565b6040519080825280601f01601f191660200182016040528015611a0e576020820181803683370190505b5090506000808751602089018b8e8ef191503d925086831115611a2f578692505b828152826000602083013e90999098509650505050505050565b6000610d81826004610b8c565b6000826000190484118302158202611a6d57600080fd5b5091020490565b600080611a81858561174f565b9050611a8c8161224d565b945084600003611aa05760009150506110f0565b849150611ab36040840160208501612961565b15611ae257611adb85611ac9602086018661292a565b611ad6604087018761297e565b61229d565b9150611b05565b611b0585611af3602086018661292a565b611b00604087018761297e565b6122b8565b509392505050565b60006110f08383670de0b6b3a7640000612352565b6003546000908190611b3d906001600160801b03168461213d565b9050611b697f000000000000000000000000000000000000000000000000000000000000000082612ac3565b6002546001600160801b031611156112b3576002547f000000000000000000000000000000000000000000000000000000000000000090611bb49083906001600160801b0316612a68565b6110f09190612a68565b611bc66127fe565b600080611bd284611eca565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401611c0d9190612c8a565b6040805180830381865af4158015611c29573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c4d9190612c99565b9350905082611c625750600091506100ad9050565b6000611c89611c8484610160015185610140015161174f90919063ffffffff16565b611561565b611ca9611c84856101200151866101000151611b0d90919063ffffffff16565b611cb39190612b16565b604080516101208101825285815260208082019590955260008052601085527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb0154818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015611deb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e0f9190612d3c565b935093509350935080611e2b5750600098975050505050505050565b868414611e5c57611e3b84611138565b600280546001600160801b0319166001600160801b03929092169190911790555b858314611e8d57611e6c83612191565b600480546001600160801b0319166001600160801b03929092169190911790555b848214611ebb57611e9d82611138565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b611ed2612850565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526003540482166101008201526005549091610120830191611fca9116612378565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192611ffc92900416612378565b905292915050565b60008061201184846123ee565b909250905080612023576120236121cd565b5092915050565b6000816000036120435750670de0b6b3a7640000610d81565b8260000361205357506000610d81565b600061205e83611561565b9050600061207361206e86611561565b61242d565b905081810261208a670de0b6b3a764000082612d7d565b905061209581612653565b9695505050505050565b6000826000036120b057508461112f565b8115612103576120e16120c38487612ac3565b6120cd858761174f565b6120d7888a61174f565b6117179190612ac3565b905060006120ef85886112a4565b9050808210156120fd578091505b5061112f565b8285036121125750600061112f565b61209561211f8487612a68565b6121298587611b0d565b612133888a61174f565b6117179190612a68565b60006110f083670de0b6b3a764000084612352565b60006110f083670de0b6b3a764000084611a56565b600060016001607f1b038211156111625760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b03198212806121af575060016001607f1b0382135b156111625760405163a5353be560e01b815260040160405180910390fd5b60405163bb55fd2760e01b815260040160405180910390fd5b6000806121f48460006127e8565b6121ff8460006127e8565b6122099190612b16565b905060008113156122255761221e8186612ac3565b9450612244565b60008112156122445761223781612c6e565b6122419086612a68565b94505b50929392505050565b604051631920845160e01b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690631920845190602401611099565b600060405163350b944160e11b815260040160405180910390fd5b604051638fcb4e5b60e01b81526001600160a01b038481166004830152602482018690527f00000000000000000000000000000000000000000000000000000000000000001690638fcb4e5b906044016020604051808303816000875af1158015612327573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061234b9190612cc9565b5050505050565b600082600019048411830215820261236957600080fd5b50910281810615159190040190565b600080670de0b6b3a764000061238c610426565b6123969190612ce2565b90508083116123a65760006123b0565b6123b08184612a68565b91506110f06123e7670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000612ce2565b8390612152565b6000806000836123fd86611561565b6124079190612b16565b9050600081121561241f576000809250925050612426565b9150600190505b9250929050565b600080821361244f5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906124d29084901c611561565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361266e57506000919050565b680755bf798b4a1bf1e58212612697576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061209574029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611561565b60008183136127f757816110f0565b5090919050565b604051806101200160405280612812612850565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000806000606084860312156128c657600080fd5b8335925060208401359150604084013567ffffffffffffffff8111156128eb57600080fd5b8401606081870312156128fd57600080fd5b809150509250925092565b6000806040838503121561291b57600080fd5b50508035926020909101359150565b60006020828403121561293c57600080fd5b81356001600160a01b03811681146110f057600080fd5b801515811461040b57600080fd5b60006020828403121561297357600080fd5b81356110f081612953565b6000808335601e1984360301811261299557600080fd5b83018035915067ffffffffffffffff8211156129b057600080fd5b60200191503681900382131561242657600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b868152856020820152846040820152831515606082015260a060808201526000612a1c60a0830184866129c5565b98975050505050505050565b634e487b7160e01b600052601260045260246000fd5b600082612a4d57612a4d612a28565b500690565b634e487b7160e01b600052601160045260246000fd5b81810381811115610d8157610d81612a52565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c08201526000612ab560e0830184866129c5565b9a9950505050505050505050565b80820180821115610d8157610d81612a52565b6001600160701b0381811683821601908082111561202357612023612a52565b6001600160801b0381811683821601908082111561202357612023612a52565b818103600083128015838313168383128216171561202357612023612a52565b6001600160801b0382811682821603908082111561202357612023612a52565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a082019050612be8828551612b56565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215612c5d57600080fd5b505080516020909101519092909150565b6000600160ff1b8201612c8357612c83612a52565b5060000390565b6101808101610d818284612b56565b60008060408385031215612cac57600080fd5b825191506020830151612cbe81612953565b809150509250929050565b600060208284031215612cdb57600080fd5b5051919050565b8082028115828204841417610d8157610d81612a52565b600f81810b9083900b0160016001607f1b03811360016001607f1b031982121715610d8157610d81612a52565b634e487b7160e01b600052604160045260246000fd5b60008060008060808587031215612d5257600080fd5b8451935060208501519250604085015191506060850151612d7281612953565b939692955090935050565b600082612d8c57612d8c612a28565b600160ff1b821460001984141615612da657612da6612a52565b50059056fea26469706673582212207c4886953dd0e283b76eb2c9e1802d43cff9683f6561c10583244567442a176d64736f6c63430008140033',
    methodIdentifiers: {
        "checkpoint(uint256,uint256)": "414f826d",
        "redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))": "074a6de9",
        "removeLiquidity(uint256,uint256,(address,bool,bytes))": "cbc13434"
    }
};
