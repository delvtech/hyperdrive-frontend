export const MorphoBlueTarget4 = {
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
                },
                {
                    "name": "_params",
                    "type": "tuple",
                    "internalType": "struct IMorphoBlueHyperdrive.MorphoBlueParams",
                    "components": [
                        {
                            "name": "morpho",
                            "type": "address",
                            "internalType": "contract IMorpho"
                        },
                        {
                            "name": "collateralToken",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "oracle",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "irm",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "lltv",
                            "type": "uint256",
                            "internalType": "uint256"
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
        },
        {
            "type": "error",
            "name": "UnsupportedToken",
            "inputs": []
        }
    ],
    bytecode: '0x6103006040523480156200001257600080fd5b5060405162003a0538038062003a05833981016040819052620000359162000638565b6001600081905582516001600160a01b039081166080818152602080870151841660a0908152828801516101a0908152908801516101c090815260c0808a01516101e090815260e0808c015161020052610120808d0151909352610100808d0151909152610140808d0151909152908b018051519092528151850151905280516040908101516101609081529151606090810151610180908152828d01518a1661022052818d015161024052928c015160098054918b166001600160a01b0319928316179055928c0151600a8054918b16918516919091179055938b0151600b8054918a16918416919091179055918a0151600c805491891691909216179055875186166102608190529288015186166102805287015185166102a0528601519093166102c0528401516102e05283926200017192906200017a565b505050620007cb565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b17909152620001d490859083906200024616565b6200024057604080516001600160a01b038516602482015260006044808301919091528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b1790915262000234918691620002f716565b620002408482620002f7565b50505050565b6000806000846001600160a01b03168460405162000265919062000776565b6000604051808303816000865af19150503d8060008114620002a4576040519150601f19603f3d011682016040523d82523d6000602084013e620002a9565b606091505b5091509150818015620002d7575080511580620002d7575080806020019051810190620002d79190620007a7565b8015620002ee57506000856001600160a01b03163b115b95945050505050565b60006200030e6001600160a01b038416836200036a565b9050805160001415801562000336575080806020019051810190620003349190620007a7565b155b156200036557604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b60606200037a8383600062000381565b9392505050565b606081471015620003a85760405163cd78605960e01b81523060048201526024016200035c565b600080856001600160a01b03168486604051620003c6919062000776565b60006040518083038185875af1925050503d806000811462000405576040519150601f19603f3d011682016040523d82523d6000602084013e6200040a565b606091505b5090925090506200041d86838362000427565b9695505050505050565b60608262000440576200043a826200048b565b6200037a565b81511580156200045857506001600160a01b0384163b155b156200048357604051639996b31560e01b81526001600160a01b03851660048201526024016200035c565b50806200037a565b8051156200049c5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b50565b60405161020081016001600160401b0381118282101715620004ea57634e487b7160e01b600052604160045260246000fd5b60405290565b6001600160a01b0381168114620004b557600080fd5b80516200051381620004f0565b919050565b6000608082840312156200052b57600080fd5b604051608081016001600160401b03811182821017156200055c57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600060a08284031215620005a057600080fd5b60405160a081016001600160401b0381118282101715620005d157634e487b7160e01b600052604160045260246000fd5b80604052508091508251620005e681620004f0565b81526020830151620005f881620004f0565b602082015260408301516200060d81620004f0565b604082015260608301516200062281620004f0565b6060820152608092830151920191909152919050565b6000808284036103008112156200064e57600080fd5b610260808212156200065f57600080fd5b62000669620004b8565b9150620006768562000506565b8252620006866020860162000506565b6020830152620006996040860162000506565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e08301526101008086015181840152506101208086015181840152506101408086015181840152506101606200070481870162000506565b908301526101806200071886820162000506565b908301526101a06200072c86820162000506565b908301526101c06200074086820162000506565b908301526101e0620007558787830162000518565b81840152508193506200076b868287016200058d565b925050509250929050565b6000825160005b818110156200079957602081860181015185830152016200077d565b506000920191825250919050565b600060208284031215620007ba57600080fd5b815180151581146200037a57600080fd5b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051610280516102a0516102c0516102e0516130a26200096360003960008181611129015281816123e301526124c3015260008181611107015281816123c101526124990152600081816110e50152818161239f01526124700152600081816110c30152818161237d015261244601526000818161107f01528181612339015261254001526000505060005050600050506000818161026d015261201901526000818161185f015281816118c201528181611bfe01528181611c3a01528181611e320152611ff301526000818161056f0152611fcd015260006114340152600061158f015260008181610733015261156301526000505060008181610590015261203f01526000818161066b01526126410152600081816101ed0152818161042e015281816104a90152818161051f015281816105eb0152610623015260005050600081816110a10152818161235b015261242101526130a26000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063074a6de914610046578063414f826d14610072578063cbc1343414610087575b600080fd5b610059610054366004612b2f565b61009a565b6040805192835260208301919091520160405180910390f35b610085610080366004612b86565b6100b5565b005b610059610095366004612b2f565b6100c3565b6000806100a88585856100d1565b915091505b935093915050565b6100bf8282610196565b5050565b6000806100a8858585610257565b6000806100dc6103ab565b6100e5836103d5565b60006100ef61040e565b90506101066100fc610426565b8260046001610452565b506101143387838888610a49565b90935091506101266020850185612ba8565b6001600160a01b0316337f07210cf9a89fae8012341fdc131255728787856379269f07c2e41c23b3c09b5884868561016460408b0160208c01612bdf565b61017160408c018c612bfc565b60405161018396959493929190612c6c565b60405180910390a3506100ad6001600055565b61019e6103ab565b60006101a861040e565b6000848152600860205260409020600101549091506001600160801b0316156101dc576101d58183610b8c565b505061024d565b60006101e6610426565b90506102127f000000000000000000000000000000000000000000000000000000000000000085612cbc565b15158061021e57508381105b1561023c5760405163ecd29e8160e01b815260040160405180910390fd5b6102498483856000610452565b5050505b6100bf6001600055565b6000806102626103ab565b61026b836103d5565b7f00000000000000000000000000000000000000000000000000000000000000008510156102ac5760405163211ddda360e11b815260040160405180910390fd5b60006102b661040e565b90506102c36100fc610426565b506102d060003388610d87565b6102eb600360f81b6102e56020870187612ba8565b88610e61565b60006103066102fd6020870187612ba8565b88848989610a49565b90945090506103158188612ce6565b9250600061032283610f01565b5090506103326020870187612ba8565b6001600160a01b0316337f1c7999deb68182de77ce89d32f82d0e13eb042921b2bfa9f35aa1c43f62f261e8a888761037060408d0160208e01612bdf565b8a888e80604001906103829190612bfc565b604051610396989796959493929190612cf9565b60405180910390a35050506100ad6001600055565b6002600054036103ce57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b60006103e46020830183612ba8565b6001600160a01b03160361040b5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b6000610421670de0b6b3a764000061104d565b905090565b6000610421427f0000000000000000000000000000000000000000000000000000000000000000611194565b600084815260086020526040812060018101546001600160801b031615158061047a57504286115b1561049357600101546001600160801b03169050610a41565b60008060006104a0610426565b905060006104ce7f00000000000000000000000000000000000000000000000000000000000000008b612d41565b90505b81811015610544576000818152600860205260409020600101546001600160801b0316801561051c576000828152600860205260409020549094506001600160801b03169250610544565b507f0000000000000000000000000000000000000000000000000000000000000000016104d1565b836000036105b7578893506105b461055a6111b1565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006111d2565b92505b506105c1836111f2565b6001850180546001600160801b0319166001600160801b03929092169190911790556106176106107f00000000000000000000000000000000000000000000000000000000000000008b612ce6565b8a84611220565b6106558961064f6106487f000000000000000000000000000000000000000000000000000000000000000083612d41565b429061135e565b84611220565b61065e88611373565b50600090506008816106907f00000000000000000000000000000000000000000000000000000000000000008d612ce6565b815260208101919091526040016000908120600101546001600160801b031691506106bc60028c611517565b6000818152601060205260408120549192508c8c831561080257600192506000806106eb86898d86600061154c565b9150915080600d60008282546107019190612d41565b9091555061071d9050866000846107178161161b565b88611645565b6107278183612d41565b915061075786838a8e877f00000000000000000000000000000000000000000000000000000000000000006117bf565b915061076b6107668385611809565b61181e565b6006805460029061078c9084906201000090046001600160701b0316612d54565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506107b9826111f2565b600680546010906107db908490600160801b90046001600160801b0316612d74565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b600061080f600184611517565b600081815260106020526040902054909150801561091e576001945060008061083c838b8f88600161154c565b9150915080600d60008282546108529190612d41565b9091555061086e9050836000846108688161161b565b8a611848565b6108788183612ce6565b91506108876107668387611809565b600680546002906108a89084906201000090046001600160701b0316612d54565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506108d5826111f2565b600680546010906108f7908490600160801b90046001600160801b0316612d74565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b84156109585761094a6109308761161b565b6109398361161b565b6109439190612d94565b6000611a39565b8e6109558482610b8c565b50505b600061096384610f01565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a2600c546001600160a01b031615610a31578e610a2d5a604051336024820152604481018990528315156064820152600090819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b179052600c546001600160a01b031693929190611a78565b5050505b50999b5050505050505050505050505b949350505050565b600080610a5585611b03565b505060075485906001600160801b031680821115610a7a57806001600160801b031691505b81600003610a8f576000809250925050610b82565b610a9e600360f81b8984610d87565b600754600090610ac49084906001600160801b03600160801b9091048116908516611b10565b9050610acf836111f2565b610ad99083612db4565b600780546001600160801b0319166001600160801b0392909216919091179055610b02816111f2565b60078054601090610b24908490600160801b90046001600160801b0316612db4565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610b53818887611b2e565b9350610b5f8684611bc7565b841015610b7f5760405163c972651760e01b815260040160405180910390fd5b50505b9550959350505050565b600754600360f81b600090815260106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215490918291610bd7916001600160801b031690612ce6565b905080600003610beb576001915050610d81565b6000610bf685611bdc565b905080600003610c0b57600192505050610d81565b600080610c19838589611c78565b9150915080610c2f576000945050505050610d81565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401610c6b929190612e52565b6040805180830381865af4158015610c87573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cab9190612ec8565b91509150610cc9610cbb8261161b565b610cc490612eec565b611dec565b925082610cdf5760009650505050505050610d81565b610ce8826111f2565b60078054600090610d039084906001600160801b0316612d74565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610d30816111f2565b60078054601090610d52908490600160801b90046001600160801b0316612d74565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600196505050505050505b92915050565b6000838152600f602090815260408083206001600160a01b0386168452909152902054811115610dca57604051631e9acf1760e31b815260040160405180910390fd5b6000838152600f602090815260408083206001600160a01b0386168452825280832080548590039055858352601090915281208054839290610e0d908490612ce6565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b6000838152600f602090815260408083206001600160a01b038616845290915281208054839290610e93908490612d41565b909155505060008381526010602052604081208054839290610eb6908490612d41565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101610e54565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e610f2a87611f84565b6040518263ffffffff1660e01b8152600401610f469190612f08565b6040805180830381865af4158015610f62573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f869190612f17565b9150915080610f9c575060009485945092505050565b60075460106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215460008080527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb015490926001600160801b03169161100291612d41565b61100c9190612ce6565b90508060000361102457506000958695509350505050565b600080871161103457600061103f565b61103f848884611b10565b976001975095505050505050565b6040516303c2063f60e41b815260009073__$04b283107449142c3a86c88d1d4ad5a326$__90633c2063f090611153907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000908b90600401612f47565b602060405180830381865af4158015611170573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d819190612f8a565b60006111a08284612cbc565b6111aa9084612ce6565b9392505050565b600254600454600091610421916001600160801b0390911690600f0b6120be565b60006111e9826111e3858888611b10565b906120e4565b95945050505050565b60006001600160801b0382111561121c57604051630f0af95160e11b815260040160405180910390fd5b5090565b600083815260086020526040902054600160801b90046001600160801b031680830361124c5750505050565b6000848152600860205260408120546001600160801b0316908190036112a657611275836111f2565b600086815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055611324565b6112f76112f2670de0b6b3a76400006112bf8886612ce6565b6112c99190612fa3565b85670de0b6b3a76400006112dd878a612ce6565b6112e79190612fa3565b859291906001612159565b6111f2565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b61132d846111f2565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600081831161136d57826111aa565b50919050565b6006546000908190611396908490600160801b90046001600160801b0316611809565b6006546201000090046001600160701b031692509050818111156115125760006113c08383612ce6565b90506113cf6112f282866121f7565b600680546010906113f1908490600160801b90046001600160801b0316612db4565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600061142a858361220c90919063ffffffff16565b90506000611458827f0000000000000000000000000000000000000000000000000000000000000000611809565b905080600d600082825461146c9190612d41565b9091555061147c90508183612ce6565b9150611487826111f2565b600280546000906114a29084906001600160801b0316612d74565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506114cf82612221565b600480546000906114e4908490600f0b612fba565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60006001600160f81b038211156115415760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b600080611559878561220c565b91506000611587837f0000000000000000000000000000000000000000000000000000000000000000611809565b90506115b3817f0000000000000000000000000000000000000000000000000000000000000000611809565b915083156115d6576115c58282612ce6565b6115cf9084612ce6565b92506115ed565b6115e08282612ce6565b6115ea9084612d41565b92505b8686101561161057611600838789611b10565b925061160d828789611b10565b91505b509550959350505050565b60006001600160ff1b0382111561121c5760405163396ea70160e11b815260040160405180910390fd5b600454600160801b90046001600160801b031661168e6112f282611671670de0b6b3a764000086612fa3565b600554600160801b90046001600160801b031691908a6000612159565b600580546001600160801b03928316600160801b0292169190911790556116b4866111f2565b6116be9082612db4565b600480546001600160801b03928316600160801b0292169190911790556116e4846111f2565b600280546000906116ff9084906001600160801b0316612d74565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061172c8361224b565b60048054600090611741908490600f0b612fba565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611771856111f2565b60028054601090611793908490600160801b90046001600160801b0316612db4565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b6000806117d7846117d18a888a611b10565b9061220c565b90506117e4888486611b10565b6117ee9082612d41565b9050868111156117fe5786810391505b509695505050505050565b60006111aa8383670de0b6b3a7640000611b10565b60006001600160701b0382111561121c5760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b03168381108061188a57507f00000000000000000000000000000000000000000000000000000000000000006118888583612ce6565b105b1561189757611897612287565b6004549084900390600f0b6118ac8482612d94565b9050836118b88661161b565b1380156118ed57507f00000000000000000000000000000000000000000000000000000000000000006118eb83836120be565b105b156118fa576118fa612287565b600354600160801b90046001600160801b031661193c6112f282611926670de0b6b3a764000088612fa3565b6005546001600160801b031691908c6000612159565b600580546001600160801b0319166001600160801b03929092169190911790556119668882612ce6565b9050611971816111f2565b600380546001600160801b03928316600160801b029216919091179055611997836111f2565b600280546001600160801b0319166001600160801b03929092169190911790556119c08261224b565b600480546001600160801b0319166001600160801b03929092169190911790556119e9876111f2565b60028054601090611a0b908490600160801b90046001600160801b0316612d74565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b600354611a54906112f2906001600160801b031684846122a0565b600380546001600160801b0319166001600160801b03929092169190911790555050565b6000606060008060008661ffff1667ffffffffffffffff811115611a9e57611a9e612fe7565b6040519080825280601f01601f191660200182016040528015611ac8576020820181803683370190505b5090506000808751602089018b8e8ef191503d925086831115611ae9578692505b828152826000602083013e90999098509650505050505050565b6000610d81826004610b8c565b6000826000190484118302158202611b2757600080fd5b5091020490565b600080611b3b8585611809565b9050611b4681612307565b945084600003611b5a5760009150506111aa565b849150611b6d6040840160208501612bdf565b15611b9c57611b9585611b836020860186612ba8565b611b906040870187612bfc565b61240d565b9150611bbf565b611bbf85611bad6020860186612ba8565b611bba6040870187612bfc565b6125b7565b509392505050565b60006111aa8383670de0b6b3a76400006125d0565b6003546000908190611bf7906001600160801b0316846121f7565b9050611c237f000000000000000000000000000000000000000000000000000000000000000082612d41565b6002546001600160801b0316111561136d576002547f000000000000000000000000000000000000000000000000000000000000000090611c6e9083906001600160801b0316612ce6565b6111aa9190612ce6565b611c80612a7c565b600080611c8c84611f84565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401611cc79190612f08565b6040805180830381865af4158015611ce3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d079190612f17565b9350905082611d1c5750600091506100ad9050565b6000611d43611d3e84610160015185610140015161180990919063ffffffff16565b61161b565b611d63611d3e856101200151866101000151611bc790919063ffffffff16565b611d6d9190612d94565b604080516101208101825285815260208082019590955260008052601085527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb0154818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015611ea5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ec99190612ffd565b935093509350935080611ee55750600098975050505050505050565b868414611f1657611ef5846111f2565b600280546001600160801b0319166001600160801b03929092169190911790555b858314611f4757611f268361224b565b600480546001600160801b0319166001600160801b03929092169190911790555b848214611f7557611f57826111f2565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b611f8c612ace565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e0830152600354048216610100820152600554909161012083019161208491166125f6565b81526004546001600160801b03600160801b91829004811660208401526005546040909301926120b6929004166125f6565b905292915050565b6000806120cb848461266c565b9092509050806120dd576120dd612287565b5092915050565b6000816000036120fd5750670de0b6b3a7640000610d81565b8260000361210d57506000610d81565b60006121188361161b565b9050600061212d6121288661161b565b6126ab565b9050818102612144670de0b6b3a76400008261303e565b905061214f816128d1565b9695505050505050565b60008260000361216a5750846111e9565b81156121bd5761219b61217d8487612d41565b6121878587611809565b612191888a611809565b6117d19190612d41565b905060006121a9858861135e565b9050808210156121b7578091505b506111e9565b8285036121cc575060006111e9565b61214f6121d98487612ce6565b6121e38587611bc7565b6121ed888a611809565b6117d19190612ce6565b60006111aa83670de0b6b3a7640000846125d0565b60006111aa83670de0b6b3a764000084611b10565b600060016001607f1b0382111561121c5760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b0319821280612269575060016001607f1b0382135b1561121c5760405163a5353be560e01b815260040160405180910390fd5b60405163bb55fd2760e01b815260040160405180910390fd5b6000806122ae846000612a66565b6122b9846000612a66565b6122c39190612d94565b905060008113156122df576122d88186612d41565b94506122fe565b60008112156122fe576122f181612eec565b6122fb9086612ce6565b94505b50929392505050565b6040516349124ca360e01b815260009073__$04b283107449142c3a86c88d1d4ad5a326$__906349124ca390611153907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000908b90600401612f47565b6040805160a0810182526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811682527f00000000000000000000000000000000000000000000000000000000000000008116602083019081527f000000000000000000000000000000000000000000000000000000000000000082168385019081527f00000000000000000000000000000000000000000000000000000000000000008316606085019081527f0000000000000000000000000000000000000000000000000000000000000000608086019081529551635c2bea4960e01b81529451841660048601529151831660248501525182166044840152518116606483015291516084820152600060a4820181905260c482018790523060e4830152858316610104830152917f00000000000000000000000000000000000000000000000000000000000000001690635c2bea49906101240160408051808303816000875af1158015612589573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906125ad9190612ec8565b5095945050505050565b60405163350b944160e11b815260040160405180910390fd5b60008260001904841183021582026125e757600080fd5b50910281810615159190040190565b600080670de0b6b3a764000061260a610426565b6126149190612fa3565b905080831161262457600061262e565b61262e8184612ce6565b91506111aa612665670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000612fa3565b839061220c565b60008060008361267b8661161b565b6126859190612d94565b9050600081121561269d5760008092509250506126a4565b9150600190505b9250929050565b60008082136126cd5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906127509084901c61161b565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e1982136128ec57506000919050565b680755bf798b4a1bf1e58212612915576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061214f74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c61161b565b6000818313612a7557816111aa565b5090919050565b604051806101200160405280612a90612ace565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b600080600060608486031215612b4457600080fd5b8335925060208401359150604084013567ffffffffffffffff811115612b6957600080fd5b840160608187031215612b7b57600080fd5b809150509250925092565b60008060408385031215612b9957600080fd5b50508035926020909101359150565b600060208284031215612bba57600080fd5b81356001600160a01b03811681146111aa57600080fd5b801515811461040b57600080fd5b600060208284031215612bf157600080fd5b81356111aa81612bd1565b6000808335601e19843603018112612c1357600080fd5b83018035915067ffffffffffffffff821115612c2e57600080fd5b6020019150368190038213156126a457600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b868152856020820152846040820152831515606082015260a060808201526000612c9a60a083018486612c43565b98975050505050505050565b634e487b7160e01b600052601260045260246000fd5b600082612ccb57612ccb612ca6565b500690565b634e487b7160e01b600052601160045260246000fd5b81810381811115610d8157610d81612cd0565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c08201526000612d3360e083018486612c43565b9a9950505050505050505050565b80820180821115610d8157610d81612cd0565b6001600160701b038181168382160190808211156120dd576120dd612cd0565b6001600160801b038181168382160190808211156120dd576120dd612cd0565b81810360008312801583831316838312821617156120dd576120dd612cd0565b6001600160801b038281168282160390808211156120dd576120dd612cd0565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a082019050612e66828551612dd4565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215612edb57600080fd5b505080516020909101519092909150565b6000600160ff1b8201612f0157612f01612cd0565b5060000390565b6101808101610d818284612dd4565b60008060408385031215612f2a57600080fd5b825191506020830151612f3c81612bd1565b809150509250929050565b6001600160a01b039788168152958716602087015293861660408601529185166060850152909316608083015260a082019290925260c081019190915260e00190565b600060208284031215612f9c57600080fd5b5051919050565b8082028115828204841417610d8157610d81612cd0565b600f81810b9083900b0160016001607f1b03811360016001607f1b031982121715610d8157610d81612cd0565b634e487b7160e01b600052604160045260246000fd5b6000806000806080858703121561301357600080fd5b845193506020850151925060408501519150606085015161303381612bd1565b939692955090935050565b60008261304d5761304d612ca6565b600160ff1b82146000198414161561306757613067612cd0565b50059056fea26469706673582212201dea565e148ff2153848d8f709ff4e0db7c671b68954ef0f117b49100a3d03ea64736f6c63430008140033',
    methodIdentifiers: {
        "checkpoint(uint256,uint256)": "414f826d",
        "redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))": "074a6de9",
        "removeLiquidity(uint256,uint256,(address,bool,bytes))": "cbc13434"
    }
};
