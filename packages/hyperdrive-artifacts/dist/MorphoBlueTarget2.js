export const MorphoBlueTarget2 = {
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
    bytecode: '0x6103006040523480156200001257600080fd5b5060405162004a1538038062004a15833981016040819052620000359162000638565b6001600081905582516001600160a01b039081166080818152602080870151841660a0908152828801516101a0908152908801516101c090815260c0808a01516101e090815260e0808c015161020052610120808d0151909352610100808d0151909152610140808d0151909152908b018051519092528151850151905280516040908101516101609081529151606090810151610180908152828d01518a1661022052818d015161024052928c015160098054918b166001600160a01b0319928316179055928c0151600a8054918b16918516919091179055938b0151600b8054918a16918416919091179055918a0151600c805491891691909216179055875186166102608190529288015186166102805287015185166102a0528601519093166102c0528401516102e05283926200017192906200017a565b505050620007cb565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b17909152620001d490859083906200024616565b6200024057604080516001600160a01b038516602482015260006044808301919091528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b1790915262000234918691620002f716565b620002408482620002f7565b50505050565b6000806000846001600160a01b03168460405162000265919062000776565b6000604051808303816000865af19150503d8060008114620002a4576040519150601f19603f3d011682016040523d82523d6000602084013e620002a9565b606091505b5091509150818015620002d7575080511580620002d7575080806020019051810190620002d79190620007a7565b8015620002ee57506000856001600160a01b03163b115b95945050505050565b60006200030e6001600160a01b038416836200036a565b9050805160001415801562000336575080806020019051810190620003349190620007a7565b155b156200036557604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b60606200037a8383600062000381565b9392505050565b606081471015620003a85760405163cd78605960e01b81523060048201526024016200035c565b600080856001600160a01b03168486604051620003c6919062000776565b60006040518083038185875af1925050503d806000811462000405576040519150601f19603f3d011682016040523d82523d6000602084013e6200040a565b606091505b5090925090506200041d86838362000427565b9695505050505050565b60608262000440576200043a826200048b565b6200037a565b81511580156200045857506001600160a01b0384163b155b156200048357604051639996b31560e01b81526001600160a01b03851660048201526024016200035c565b50806200037a565b8051156200049c5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b50565b60405161020081016001600160401b0381118282101715620004ea57634e487b7160e01b600052604160045260246000fd5b60405290565b6001600160a01b0381168114620004b557600080fd5b80516200051381620004f0565b919050565b6000608082840312156200052b57600080fd5b604051608081016001600160401b03811182821017156200055c57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600060a08284031215620005a057600080fd5b60405160a081016001600160401b0381118282101715620005d157634e487b7160e01b600052604160045260246000fd5b80604052508091508251620005e681620004f0565b81526020830151620005f881620004f0565b602082015260408301516200060d81620004f0565b604082015260608301516200062281620004f0565b6060820152608092830151920191909152919050565b6000808284036103008112156200064e57600080fd5b610260808212156200065f57600080fd5b62000669620004b8565b9150620006768562000506565b8252620006866020860162000506565b6020830152620006996040860162000506565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e08301526101008086015181840152506101208086015181840152506101408086015181840152506101606200070481870162000506565b908301526101806200071886820162000506565b908301526101a06200072c86820162000506565b908301526101c06200074086820162000506565b908301526101e0620007558787830162000518565b81840152508193506200076b868287016200058d565b925050509250929050565b6000825160005b818110156200079957602081860181015185830152016200077d565b506000920191825250919050565b600060208284031215620007ba57600080fd5b815180151581146200037a57600080fd5b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051610280516102a0516102c0516102e05161402a620009eb6000396000818161176f01526126d601526000818161174001526126af01526000818161171101526126870152600081816116e2015261265f01526000818161161c01528181611679015261260f015260005050600050506000505060008181610100015281816103100152612fa501526000818161145101528181611d7d01528181611de00152818161259201528181612b8a01528181612bc601528181612dbe0152612f7f0152600081816107ef01528181610d1a01528181610d5c01528181610e4e015281816112c4015281816113230152612f590152600061199c015260008181611ac2015281816127f30152818161286c01526130bf0152600081816109b301528181610dcf015281816113be01528181611a960152612840015260008181610dae015281816127bf015261307b01526000818161081001528181610cf801528181610d7d01528181610e6f015281816112a2015281816113440152612fcb0152600081816101de015281816103a8015281816108eb01526136850152600081816106a9015281816107290152818161079f0152818161086b01526108a3015260005050600081816115ef01528181611650015281816116b30152612637015261402a6000f3fe6080604052600436106100295760003560e01c8063cba2e58d1461002e578063dbbe80701461005a575b600080fd5b61004161003c366004613a3b565b61006d565b6040805192835260208301919091520160405180910390f35b610041610068366004613a3b565b61008a565b60008061007c86868686610099565b915091505b94509492505050565b60008061007c868686866102c9565b6000806100a461052a565b600654610100900460ff16156100cd576040516321081abf60e01b815260040160405180910390fd5b6100d5610554565b6100de83610575565b6000806100eb88866105ae565b909250905060006100fc8383610683565b90507f000000000000000000000000000000000000000000000000000000000000000081101561013f5760405163211ddda360e11b815260040160405180910390fd5b86821015610160576040516342af972b60e01b815260040160405180910390fd5b600061016a6106a1565b905061017a8184600460016106d2565b50600080600061018a8787610cc9565b919a5091945090925090508b8810156101b65760405163c972651760e01b815260040160405180910390fd5b81600d60008282546101c89190613ab0565b909155506101d99050844283610eab565b6102037f000000000000000000000000000000000000000000000000000000000000000085613ab0565b98506102118389888c610fe9565b600061021e60018b611183565b90506102378161023160208e018e613ac3565b8b6111b8565b8d8a8a898e8561024a6020830183613ac3565b6001600160a01b03167f7fc9757758f4c7f2eb9f011c4500beb349847d2f2acbdd5ffce3e2f01e79903a8688866102876040880160208901613afa565b8961029560408a018a613b17565b6040516102a89796959493929190613b87565b60405180910390a350909b5050505050505050505050506100816001600055565b6000806102d461052a565b600654610100900460ff16156102fd576040516321081abf60e01b815260040160405180910390fd5b610305610554565b61030e83610575565b7f000000000000000000000000000000000000000000000000000000000000000086101561034f5760405163211ddda360e11b815260040160405180910390fd5b6000610359611260565b90508481101561037c576040516342af972b60e01b815260040160405180910390fd5b60006103866106a1565b9050600061039f6103956106a1565b84600460016106d2565b905060006103cd7f000000000000000000000000000000000000000000000000000000000000000084613ab0565b90506000806000806103e08e8988611273565b600d8054949850929650909450925083916000906103ff908490613ab0565b909155506104109050874283610eab565b50600061041e84898d6113f9565b9050808d10156104415760405163c972651760e01b815260040160405180910390fd5b61044b818c6105ae565b508e905061045b81858b8961142b565b6000610468600288611183565b90508c6104828261047c6020840184613ac3565b856111b8565b858b86846104936020860186613ac3565b6001600160a01b03167ffa6dd2e3e152dbc3fe91196c0b8aa871c26fd7a1d07de126ec3159fd4ede2c758d8a866104d060408b0160208c01613afa565b6104e4896104de8a8d613bc8565b90610683565b8d6104f260408e018e613b17565b604051610506989796959493929190613bdb565b60405180910390a350989d50939b5050505050505050505050506100816001600055565b60026000540361054d57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b341561057357604051631574f9f360e01b815260040160405180910390fd5b565b60006105846020830183613ac3565b6001600160a01b0316036105ab5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b816000806105c26040850160208601613afa565b156105e7576105dd856105d86040870187613b17565b6115df565b90935090506105ff565b50346105ff856105fa6040870187613b17565b61180a565b610607611260565b9150801561067a57604051600090339083908381818185875af1925050503d8060008114610651576040519150601f19603f3d011682016040523d82523d6000602084013e610656565b606091505b5050905080610678576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b60006106988383670de0b6b3a7640000611823565b90505b92915050565b60006106cd427f0000000000000000000000000000000000000000000000000000000000000000611841565b905090565b600084815260086020526040812060018101546001600160801b03161515806106fa57504286115b1561071357600101546001600160801b03169050610cc1565b60008060006107206106a1565b9050600061074e7f00000000000000000000000000000000000000000000000000000000000000008b613ab0565b90505b818110156107c4576000818152600860205260409020600101546001600160801b0316801561079c576000828152600860205260409020549094506001600160801b031692506107c4565b507f000000000000000000000000000000000000000000000000000000000000000001610751565b83600003610837578893506108346107da611857565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611878565b92505b5061084183611898565b6001850180546001600160801b0319166001600160801b03929092169190911790556108976108907f00000000000000000000000000000000000000000000000000000000000000008b613bc8565b8a84610eab565b6108d5896108cf6108c87f000000000000000000000000000000000000000000000000000000000000000083613ab0565b42906118c6565b84610eab565b6108de886118db565b50600090506008816109107f00000000000000000000000000000000000000000000000000000000000000008d613bc8565b815260208101919091526040016000908120600101546001600160801b0316915061093c60028c611183565b6000818152601060205260408120549192508c8c8315610a82576001925060008061096b86898d866000611a7f565b9150915080600d60008282546109819190613ab0565b9091555061099d90508660008461099781611b4e565b88611b78565b6109a78183613ab0565b91506109d786838a8e877f0000000000000000000000000000000000000000000000000000000000000000611cf2565b91506109eb6109e68385610683565b611d3c565b60068054600290610a0c9084906201000090046001600160701b0316613c23565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a3982611898565b60068054601090610a5b908490600160801b90046001600160801b0316613c43565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000610a8f600184611183565b6000818152601060205260409020549091508015610b9e5760019450600080610abc838b8f886001611a7f565b9150915080600d6000828254610ad29190613ab0565b90915550610aee905083600084610ae881611b4e565b8a611d66565b610af88183613bc8565b9150610b076109e68387610683565b60068054600290610b289084906201000090046001600160701b0316613c23565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610b5582611898565b60068054601090610b77908490600160801b90046001600160801b0316613c43565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610bd857610bca610bb087611b4e565b610bb983611b4e565b610bc39190613c63565b6000611f57565b8e610bd58482611f96565b50505b6000610be384612190565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a2600c546001600160a01b031615610cb1578e610cad5a604051336024820152604481018990528315156064820152600090819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b179052600c546001600160a01b0316939291906122dc565b5050505b50999b5050505050505050505050505b949350505050565b6000806000806000610cd9611857565b600254909150610d3e908290600160801b90046001600160801b0316897f00000000000000000000000000000000000000000000000000000000000000008a7f0000000000000000000000000000000000000000000000000000000000000000612367565b600254909450610da1908290600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611878565b9150610df88785610df3857f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000612393565b6123f8565b15610e0557610e0561243a565b610e1187858885612453565b91965094509250670de0b6b3a7640000610e93610e2e8784613ab0565b600254610e4c908890600160801b90046001600160801b0316613bc8565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611878565b1115610ea157610ea161243a565b5092959194509250565b600083815260086020526040902054600160801b90046001600160801b0316808303610ed75750505050565b6000848152600860205260408120546001600160801b031690819003610f3157610f0083611898565b600086815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055610faf565b610f82610f7d670de0b6b3a7640000610f4a8886613bc8565b610f549190613c83565b85670de0b6b3a7640000610f68878a613bc8565b610f729190613c83565b85929190600161249f565b611898565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b610fb884611898565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600354600160801b90046001600160801b031661102b610f7d82611015670de0b6b3a764000086613c83565b6005546001600160801b0316919088600161249f565b600580546001600160801b0319166001600160801b039290921691909117905561105485611898565b6002805460009061106f9084906001600160801b0316613c43565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061109c84611898565b600280546010906110be908490600160801b90046001600160801b0316613c9a565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506110eb84611898565b6110f59082613c43565b600380546001600160801b03808416600160801b0291161790559050600061111c83612547565b905061113a8161112b87611b4e565b6111359084613cba565b611f57565b6111438461258b565b61114f5761114f61243a565b600061115a856125eb565b90508061117a57604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b60006001600160f81b038211156111ad5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600f602090815260408083206001600160a01b0386168452909152812080548392906111ea908490613ab0565b90915550506000838152601060205260408120805483929061120d908490613ab0565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b60006106cd670de0b6b3a76400006125f8565b6000806000806000611283611857565b6002549091506112e8908290600160801b90046001600160801b03168a7f00000000000000000000000000000000000000000000000000000000000000008b7f0000000000000000000000000000000000000000000000000000000000000000612764565b9350876112f58589612785565b11156113035761130361243a565b6002546000908190611368908490600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611878565b935061137e8a670de0b6b3a7640000868c61279a565b5091935090915061139190508183613bc8565b61139b9087613bc8565b9550886113e8816113e28d6113b0868c613bc8565b8d6113bb87826128a8565b877f00000000000000000000000000000000000000000000000000000000000000006128be565b90612785565b975090945050505093509350935093565b600061140b6040830160208401613afa565b15611417575082611424565b61142184846128e3565b90505b9392505050565b6002546001600160801b0316838110156114475761144761243a565b60045490849003907f00000000000000000000000000000000000000000000000000000000000000009061147f908390600f0b6128f8565b101561148d5761148d61243a565b6004546114d790610f7d90600160801b90046001600160801b03166114ba670de0b6b3a764000086613c83565b600554600160801b90046001600160801b0316919089600161249f565b600580546001600160801b03928316600160801b0292169190911790556114fd81611898565b600280546001600160801b0319166001600160801b039290921691909117905561152685611898565b60028054601090611548908490600160801b90046001600160801b0316613c43565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061157585611898565b60048054601090611597908490600160801b90046001600160801b0316613c43565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006115c683612547565b905061113a816115d588611b4e565b6111359084613c63565b6000806116176001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001633308861291e565b6116777f0000000000000000000000000000000000000000000000000000000000000000611646876001613ab0565b6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016919061298b565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a99aad896040518060a001604052807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000008152508760003089896040518763ffffffff1660e01b81526004016117b896959493929190613ce2565b60408051808303816000875af11580156117d6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117fa9190613d4b565b925060009150505b935093915050565b60405163350b944160e11b815260040160405180910390fd5b600082600019048411830215820261183a57600080fd5b5091020490565b600061184d8284613d85565b6106989084613bc8565b6002546004546000916106cd916001600160801b0390911690600f0b6128f8565b600061188f82611889858888611823565b90612a1b565b95945050505050565b60006001600160801b038211156118c257604051630f0af95160e11b815260040160405180910390fd5b5090565b60008183116118d55782610698565b50919050565b60065460009081906118fe908490600160801b90046001600160801b0316610683565b6006546201000090046001600160701b03169250905081811115611a7a5760006119288383613bc8565b9050611937610f7d8286612a86565b60068054601090611959908490600160801b90046001600160801b0316613c9a565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600061199285836128e390919063ffffffff16565b905060006119c0827f0000000000000000000000000000000000000000000000000000000000000000610683565b905080600d60008282546119d49190613ab0565b909155506119e490508183613bc8565b91506119ef82611898565b60028054600090611a0a9084906001600160801b0316613c43565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611a3782612a9b565b60048054600090611a4c908490600f0b613d99565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b600080611a8c87856128e3565b91506000611aba837f0000000000000000000000000000000000000000000000000000000000000000610683565b9050611ae6817f0000000000000000000000000000000000000000000000000000000000000000610683565b91508315611b0957611af88282613bc8565b611b029084613bc8565b9250611b20565b611b138282613bc8565b611b1d9084613ab0565b92505b86861015611b4357611b33838789611823565b9250611b40828789611823565b91505b509550959350505050565b60006001600160ff1b038211156118c25760405163396ea70160e11b815260040160405180910390fd5b600454600160801b90046001600160801b0316611bc1610f7d82611ba4670de0b6b3a764000086613c83565b600554600160801b90046001600160801b031691908a600061249f565b600580546001600160801b03928316600160801b029216919091179055611be786611898565b611bf19082613c9a565b600480546001600160801b03928316600160801b029216919091179055611c1784611898565b60028054600090611c329084906001600160801b0316613c43565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611c5f83612ac5565b60048054600090611c74908490600f0b613d99565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611ca485611898565b60028054601090611cc6908490600160801b90046001600160801b0316613c9a565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600080611d0a84611d048a888a611823565b906128e3565b9050611d17888486611823565b611d219082613ab0565b905086811115611d315786810391505b509695505050505050565b60006001600160701b038211156118c25760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b031683811080611da857507f0000000000000000000000000000000000000000000000000000000000000000611da68583613bc8565b105b15611db557611db561243a565b6004549084900390600f0b611dca8482613c63565b905083611dd686611b4e565b138015611e0b57507f0000000000000000000000000000000000000000000000000000000000000000611e0983836128f8565b105b15611e1857611e1861243a565b600354600160801b90046001600160801b0316611e5a610f7d82611e44670de0b6b3a764000088613c83565b6005546001600160801b031691908c600061249f565b600580546001600160801b0319166001600160801b0392909216919091179055611e848882613bc8565b9050611e8f81611898565b600380546001600160801b03928316600160801b029216919091179055611eb583611898565b600280546001600160801b0319166001600160801b0392909216919091179055611ede82612ac5565b600480546001600160801b0319166001600160801b0392909216919091179055611f0787611898565b60028054601090611f29908490600160801b90046001600160801b0316613c43565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b600354611f7290610f7d906001600160801b03168484612b01565b600380546001600160801b0319166001600160801b03929092169190911790555050565b600754600360f81b600090815260106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215490918291611fe1916001600160801b031690613bc8565b905080600003611ff557600191505061069b565b600061200085612b68565b9050806000036120155760019250505061069b565b600080612023838589612c04565b915091508061203957600094505050505061069b565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401612075929190613e44565b6040805180830381865af4158015612091573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120b59190613d4b565b915091506120d36120c582611b4e565b6120ce90613eba565b612d78565b9250826120e9576000965050505050505061069b565b6120f282611898565b6007805460009061210d9084906001600160801b0316613c43565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061213a81611898565b6007805460109061215c908490600160801b90046001600160801b0316613c43565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e6121b987612f10565b6040518263ffffffff1660e01b81526004016121d59190613ed6565b6040805180830381865af41580156121f1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122159190613ee5565b915091508061222b575060009485945092505050565b60075460106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215460008080527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb015490926001600160801b03169161229191613ab0565b61229b9190613bc8565b9050806000036122b357506000958695509350505050565b60008087116122c35760006122ce565b6122ce848884611823565b976001975095505050505050565b6000606060008060008661ffff1667ffffffffffffffff81111561230257612302613f15565b6040519080825280601f01601f19166020018201604052801561232c576020820181803683370190505b5090506000808751602089018b8e8ef191503d92508683111561234d578692505b828152826000602083013e90999098509650505050505050565b600061238887878761238188670de0b6b3a7640000613bc8565b878761304a565b979650505050505050565b60006114216123d46123ad84670de0b6b3a7640000613bc8565b6113e2670de0b6b3a76400006123c3818a612a86565b6123cd9190613bc8565b8790612785565b6123e690670de0b6b3a7640000613ab0565b611d0484670de0b6b3a7640000613bc8565b60008061242f85612407611857565b6124119190613ab0565b600254610e4c908790600160801b90046001600160801b0316613bc8565b909210949350505050565b60405163bb55fd2760e01b815260040160405180910390fd5b600080600080600061246689878961306d565b90925090506124758289613bc8565b9750600061248482888a611823565b9050612490818b613bc8565b9a989950979650505050505050565b6000826000036124b057508461188f565b8115612503576124e16124c38487613ab0565b6124cd8587610683565b6124d7888a610683565b611d049190613ab0565b905060006124ef85886118c6565b9050808210156124fd578091505b5061188f565b8285036125125750600061188f565b61253d61251f8487613bc8565b6125298587612785565b612533888a610683565b611d049190613bc8565b9695505050505050565b600061256f6010600061255b600286611183565b815260200190815260200160002054611b4e565b6125816010600061255b600187611183565b61069b9190613c63565b60006125b77f000000000000000000000000000000000000000000000000000000000000000083612785565b6003546125cd91906001600160801b0316613ab0565b6002546125e3906001600160801b031684610683565b101592915050565b600061069b826004611f96565b6040516303c2063f60e41b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811660048301527f0000000000000000000000000000000000000000000000000000000000000000811660248301527f0000000000000000000000000000000000000000000000000000000000000000811660448301527f0000000000000000000000000000000000000000000000000000000000000000811660648301527f00000000000000000000000000000000000000000000000000000000000000001660848201527f000000000000000000000000000000000000000000000000000000000000000060a482015260c4810182905260009073__$04b283107449142c3a86c88d1d4ad5a326$__90633c2063f09060e401602060405180830381865af4158015612740573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061069b9190613f2b565b600061238887878761277e88670de0b6b3a7640000613bc8565b87876130ed565b60006106988383670de0b6b3a76400006130fe565b60008080806127eb87866127e48b6113e26127bd8c670de0b6b3a7640000613bc8565b7f000000000000000000000000000000000000000000000000000000000000000090612785565b91906130fe565b9350612817847f0000000000000000000000000000000000000000000000000000000000000000610683565b9150600061283861283089670de0b6b3a7640000613bc8565b8a90886130fe565b9050612864817f0000000000000000000000000000000000000000000000000000000000000000612785565b9350612890847f0000000000000000000000000000000000000000000000000000000000000000610683565b61289a9084613ab0565b915050945094509450949050565b60008183116128b75781610698565b5090919050565b6000806128d6846128d08a888a6130fe565b90612a86565b9050611d178884866130fe565b600061069883670de0b6b3a764000084611823565b6000806129058484613124565b9092509050806129175761291761243a565b5092915050565b6040516001600160a01b0384811660248301528381166044830152606482018390526129859186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b038381831617835250505050613160565b50505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b1790526129dc84826131cd565b612985576040516001600160a01b03848116602483015260006044830152612a1191869182169063095ea7b390606401612953565b6129858482613160565b600081600003612a345750670de0b6b3a764000061069b565b82600003612a445750600061069b565b6000612a4f83611b4e565b90506000612a64612a5f86611b4e565b613270565b9050818102612a7b670de0b6b3a764000082613f44565b905061253d81613496565b600061069883670de0b6b3a7640000846130fe565b600060016001607f1b038211156118c25760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b0319821280612ae3575060016001607f1b0382135b156118c25760405163a5353be560e01b815260040160405180910390fd5b600080612b0f84600061362b565b612b1a84600061362b565b612b249190613c63565b90506000811315612b4057612b398186613ab0565b9450612b5f565b6000811215612b5f57612b5281613eba565b612b5c9086613bc8565b94505b50929392505050565b6003546000908190612b83906001600160801b031684612a86565b9050612baf7f000000000000000000000000000000000000000000000000000000000000000082613ab0565b6002546001600160801b031611156118d5576002547f000000000000000000000000000000000000000000000000000000000000000090612bfa9083906001600160801b0316613bc8565b6114249190613bc8565b612c0c613988565b600080612c1884612f10565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401612c539190613ed6565b6040805180830381865af4158015612c6f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612c939190613ee5565b9350905082612ca85750600091506118029050565b6000612ccf612cca84610160015185610140015161068390919063ffffffff16565b611b4e565b612cef612cca85610120015186610100015161278590919063ffffffff16565b612cf99190613c63565b604080516101208101825285815260208082019590955260008052601085527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb0154818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612e31573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612e559190613f72565b935093509350935080612e715750600098975050505050505050565b868414612ea257612e8184611898565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612ed357612eb283612ac5565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612f0157612ee382611898565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612f186139da565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526003540482166101008201526005549091610120830191613010911661363a565b81526004546001600160801b03600160801b91829004811660208401526005546040909301926130429290041661363a565b905292915050565b60008061305b8888888888886136b0565b909250905080611d3157611d3161243a565b6000806130b7856113e285817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a76400006130ad818c612a86565b6113e29190613bc8565b91506130e3827f0000000000000000000000000000000000000000000000000000000000000000610683565b9050935093915050565b60008061305b888888888888613778565b600082600019048411830215820261311557600080fd5b50910281810615159190040190565b60008060008361313386611b4e565b61313d9190613c63565b9050600081121561315557600080925092505061067c565b946001945092505050565b60006131756001600160a01b03841683613838565b9050805160001415801561319a5750808060200190518101906131989190613fa8565b155b156131c857604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b6000806000846001600160a01b0316846040516131ea9190613fc5565b6000604051808303816000865af19150503d8060008114613227576040519150601f19603f3d011682016040523d82523d6000602084013e61322c565b606091505b50915091508180156132565750805115806132565750808060200190518101906132569190613fa8565b801561188f5750505050506001600160a01b03163b151590565b60008082136132925760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906133159084901c611b4e565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e1982136134b157506000919050565b680755bf798b4a1bf1e582126134da576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061253d74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611b4e565b60008183136128b75781610698565b600080670de0b6b3a764000061364e6106a1565b6136589190613c83565b9050808311613668576000613672565b6136728184613bc8565b91506114246136a9670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613c83565b83906128e3565b60008060006136c28989888888613846565b90506136dc866118896136d58a8d613ab0565b8790610683565b98506136e9858a86611823565b98508881101561370057600080925092505061376d565b888103670de0b6b3a764000081106137355761372e613727670de0b6b3a764000089612a86565b8290612a1b565b905061374d565b61374a613727670de0b6b3a7640000896128e3565b90505b808910156137635760008093509350505061376d565b8803925060019150505b965096945050505050565b600080600061378a8989888888613846565b905061379a86611889898b613ab0565b9750878110156137b157600080925092505061376d565b8781036137bf8186886130fe565b9050670de0b6b3a764000081106137ec576137e5613727670de0b6b3a764000089612a86565b9050613804565b613801613727670de0b6b3a7640000896128e3565b90505b61380e8186612a86565b9050808a10156138265760008093509350505061376d565b90980398600198509650505050505050565b606061069883836000613875565b60006138528585612a1b565b61386b61386386611889868b612785565b8590856130fe565b61253d9190613ab0565b60608147101561389a5760405163cd78605960e01b81523060048201526024016131bf565b600080856001600160a01b031684866040516138b69190613fc5565b60006040518083038185875af1925050503d80600081146138f3576040519150601f19603f3d011682016040523d82523d6000602084013e6138f8565b606091505b509150915061253d868383606082613918576139138261395f565b611424565b815115801561392f57506001600160a01b0384163b155b1561395857604051639996b31560e01b81526001600160a01b03851660048201526024016131bf565b5080611424565b80511561396f5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b60405180610120016040528061399c6139da565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60008060008060808587031215613a5157600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff811115613a7d57600080fd5b850160608188031215613a8f57600080fd5b939692955090935050565b634e487b7160e01b600052601160045260246000fd5b8082018082111561069b5761069b613a9a565b600060208284031215613ad557600080fd5b81356001600160a01b038116811461142457600080fd5b80151581146105ab57600080fd5b600060208284031215613b0c57600080fd5b813561142481613aec565b6000808335601e19843603018112613b2e57600080fd5b83018035915067ffffffffffffffff821115613b4957600080fd5b60200191503681900382131561067c57600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b878152866020820152856040820152841515606082015283608082015260c060a08201526000613bbb60c083018486613b5e565b9998505050505050505050565b8181038181111561069b5761069b613a9a565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c08201526000613c1560e083018486613b5e565b9a9950505050505050505050565b6001600160701b0381811683821601908082111561291757612917613a9a565b6001600160801b0381811683821601908082111561291757612917613a9a565b818103600083128015838313168383128216171561291757612917613a9a565b808202811582820484141761069b5761069b613a9a565b6001600160801b0382811682821603908082111561291757612917613a9a565b8082018281126000831280158216821582161715613cda57613cda613a9a565b505092915050565b600061012060018060a01b03808a511684528060208b01511660208501528060408b01511660408501528060608b015116606085015260808a015160808501528860a08501528760c085015280871660e08501525080610100840152613bbb8184018587613b5e565b60008060408385031215613d5e57600080fd5b505080516020909101519092909150565b634e487b7160e01b600052601260045260246000fd5b600082613d9457613d94613d6f565b500690565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561069b5761069b613a9a565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b60006102a082019050613e58828551613dc6565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b6000600160ff1b8201613ecf57613ecf613a9a565b5060000390565b610180810161069b8284613dc6565b60008060408385031215613ef857600080fd5b825191506020830151613f0a81613aec565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600060208284031215613f3d57600080fd5b5051919050565b600082613f5357613f53613d6f565b600160ff1b821460001984141615613f6d57613f6d613a9a565b500590565b60008060008060808587031215613f8857600080fd5b8451935060208501519250604085015191506060850151613a8f81613aec565b600060208284031215613fba57600080fd5b815161142481613aec565b6000825160005b81811015613fe65760208186018101518583015201613fcc565b50600092019182525091905056fea26469706673582212208282412994f3774dd7b031d05dc2376e6000d12df272486e7dbbd1f2a96a1a7764736f6c63430008140033',
    methodIdentifiers: {
        "openLong(uint256,uint256,uint256,(address,bool,bytes))": "cba2e58d",
        "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070"
    }
};
