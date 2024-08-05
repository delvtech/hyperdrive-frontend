export const AaveTarget3 = {
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
            "name": "addLiquidity",
            "inputs": [
                {
                    "name": "_contribution",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_minLpSharePrice",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_minApr",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_maxApr",
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
            "stateMutability": "payable"
        },
        {
            "type": "function",
            "name": "initialize",
            "inputs": [
                {
                    "name": "_contribution",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_apr",
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
            "name": "BelowMinimumContribution",
            "inputs": []
        },
        {
            "type": "error",
            "name": "CircuitBreakerTriggered",
            "inputs": []
        },
        {
            "type": "error",
            "name": "DecreasedPresentValueWhenAddingLiquidity",
            "inputs": []
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
            "name": "InvalidApr",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidEffectiveShareReserves",
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
            "name": "PoolAlreadyInitialized",
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
            "name": "UpdateLiquidityFailed",
            "inputs": []
        }
    ],
    bytecode: '0x6102806040523480156200001257600080fd5b506040516200486f3803806200486f8339810160408190526200003591620005cc565b600160005580516001600160a01b039081166080908152602080840151831660a0818152928501516101a0908152928501516101c090815260c0808701516101e090815260e08089015161020052610120808a0151909352610100808a0151909152610140808a01519091529088018051519092528151850151905280516040908101516101609081529151606090810151610180908152828a0151891661022052908901516102405291880151600980549189166001600160a01b031992831617905591880151600a805491891691841691909117905594870151600b805491881691831691909117905590860151600c8054919096169116179093558151633a9ae92360e11b81529151637535d2469260048082019392918290030181865afa15801562000169573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200018f9190620006df565b6001600160a01b03908116610260819052608051620001b29216906001620001b9565b5062000754565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b179091526200021390859083906200028516565b6200027f57604080516001600160a01b038516602482015260006044808301919091528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b17909152620002739186916200033616565b6200027f848262000336565b50505050565b6000806000846001600160a01b031684604051620002a49190620006ff565b6000604051808303816000865af19150503d8060008114620002e3576040519150601f19603f3d011682016040523d82523d6000602084013e620002e8565b606091505b5091509150818015620003165750805115806200031657508080602001905181019062000316919062000730565b80156200032d57506000856001600160a01b03163b115b95945050505050565b60006200034d6001600160a01b03841683620003a9565b905080516000141580156200037557508080602001905181019062000373919062000730565b155b15620003a457604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b6060620003b983836000620003c0565b9392505050565b606081471015620003e75760405163cd78605960e01b81523060048201526024016200039b565b600080856001600160a01b03168486604051620004059190620006ff565b60006040518083038185875af1925050503d806000811462000444576040519150601f19603f3d011682016040523d82523d6000602084013e62000449565b606091505b5090925090506200045c86838362000466565b9695505050505050565b6060826200047f576200047982620004ca565b620003b9565b81511580156200049757506001600160a01b0384163b155b15620004c257604051639996b31560e01b81526001600160a01b03851660048201526024016200039b565b5080620003b9565b805115620004db5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b50565b60405161020081016001600160401b03811182821017156200052957634e487b7160e01b600052604160045260246000fd5b60405290565b6001600160a01b0381168114620004f457600080fd5b805162000552816200052f565b919050565b6000608082840312156200056a57600080fd5b604051608081016001600160401b03811182821017156200059b57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60006102608284031215620005e057600080fd5b620005ea620004f7565b620005f58362000545565b8152620006056020840162000545565b6020820152620006186040840162000545565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152506101408084015181830152506101606200068381850162000545565b908201526101806200069784820162000545565b908201526101a0620006ab84820162000545565b908201526101c0620006bf84820162000545565b908201526101e0620006d48585830162000557565b908201529392505050565b600060208284031215620006f257600080fd5b8151620003b9816200052f565b6000825160005b8181101562000722576020818601810151858301520162000706565b506000920191825250919050565b6000602082840312156200074357600080fd5b81518015158114620003b957600080fd5b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051613f226200094d6000396000818161196f01528181611a1d01528181612dbc0152612e09015260005050600050506000818161030301528181610332015261035f01526000818160de015281816105a9015261169901526000818161085601528181610941015281816109d401528181610add0152818161156a015281816116730152818161217b015281816121de01528181612abd01528181612f2d0152612f6901526000818161013f015281816108c601528181610ea70152818161142e01528181611492015281816114d9015261164d01526000611d80015260008181611edb01526131c201526000818161106b0152611eaf015260006131780152600081816101810152818161091901528181610ec8015281816113fe01528181611462015281816114fa01526116bf01526000818161016001528181610238015281816102d8015281816106f3015281816108f301528181610fa30152612a5301526000818161029701528181610d6601528181610de101528181610e5701528181610f230152610f5b01526000611a93015260008181611942015281816119a3015281816119e101528181612d9b0152612de80152613f226000f3fe6080604052600436106100295760003560e01c80634c2ac1d91461002e57806377d05ff414610053575b600080fd5b61004161003c36600461396c565b610066565b60405190815260200160405180910390f35b6100416100613660046139d0565b610081565b60006100758686868686610098565b90505b95945050505050565b600061008e848484610800565b90505b9392505050565b60006100a2610bb9565b600654610100900460ff16156100cb576040516321081abf60e01b815260040160405180910390fd5b6100d3610be3565b6100dc82610c04565b7f000000000000000000000000000000000000000000000000000000000000000086101561011d5760405163211ddda360e11b815260040160405180910390fd5b60006101a561012a610c3d565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000610c63565b9050848110806101b457508381115b156101d257604051633b61151160e11b815260040160405180910390fd5b6000806101df8986610c89565b9150915060006101ed610d5e565b90506101fd818360046001610d8a565b506002546004546003546000928392610267926001600160801b0380841693600f9390930b92600160801b900481169189911661026261025d7f00000000000000000000000000000000000000000000000000000000000000008b613a36565b611381565b6113cb565b915091508061028957604051630552b01360e31b815260040160405180910390fd5b8b60006102fc6008826102bc7f000000000000000000000000000000000000000000000000000000000000000089613a49565b81526020810191909152604001600020546001600160801b03167f00000000000000000000000000000000000000000000000000000000000000006115d8565b90506103287f000000000000000000000000000000000000000000000000000000000000000082613a36565b88118061038757507f00000000000000000000000000000000000000000000000000000000000000008111801561038757506103847f000000000000000000000000000000000000000000000000000000000000000082613a49565b88105b156103a557604051630552b01360e31b815260040160405180910390fd5b50600754600360f81b600090815260106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215490916103f1916001600160801b0390911690613a49565b600080805260106020527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb01549192509061042c908390613a36565b9050600080600061043c8a611604565b604051635f9d50ab60e11b815290915073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063bf3aa15690610476908490600401613ada565b602060405180830381865af4158015610493573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104b79190613ae9565b91506104ca6104c58c61173e565b61176c565b6002546001600160801b03808216835260048054600f0b6020850152600160801b9092041660408084019190915251635f9d50ab60e11b815273__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9163bf3aa1569161052b91859101613ada565b602060405180830381865af4158015610548573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061056c9190613ae9565b92508183101561058f5760405163184d952160e11b815260040160405180910390fd5b6105a5848361059e8187613a49565b9190611792565b9c507f00000000000000000000000000000000000000000000000000000000000000008d10156105e85760405163211ddda360e11b815260040160405180910390fd5b508f6105f4868e6117b0565b10156106135760405163c972651760e01b815260040160405180910390fd5b61063160008e600001602081019061062b9190613b02565b8e6117c5565b61063a8961186d565b95508561065a57604051638bdf918d60e01b815260040160405180910390fd5b600088905060008d9050368f905060008c9050600061071d600260000160009054906101000a90046001600160801b03166001600160801b03166002800160009054906101000a9004600f0b600f0b600260000160109054906101000a90046001600160801b03166001600160801b031685600260010160009054906101000a90046001600160801b03166001600160801b03166102627f00000000000000000000000000000000000000000000000000000000000000008c61025d9190613a36565b9b5090508a158061073757506107348c600061187a565b81125b1561075557604051630552b01360e31b815260040160405180910390fd5b6000881561076d5761076887848b611792565b610770565b60005b905061077f6020850185613b02565b6001600160a01b03167fdcc4a01cea4510bd52201cebc8cd2d47d60429b35d68329abc591a70aa2efabf868d866107bc60408a0160208b01613b39565b866107ca60408c018c613b56565b6040516107dd9796959493929190613b9d565b60405180910390a250505050505050505050505050505050506100786001600055565b600061080a610bb9565b610812610be3565b61081b82610c04565b60065460ff161561083f57604051637983c05160e01b815260040160405180910390fd5b60008061084c8685610c89565b909250905061087c7f00000000000000000000000000000000000000000000000000000000000000006002613bf1565b82101561089c57604051632afb507160e21b815260040160405180910390fd5b6006805460ff1916600117905560405163594f0e8f60e11b815260048101839052602481018290527f00000000000000000000000000000000000000000000000000000000000000006044820152606481018690527f000000000000000000000000000000000000000000000000000000000000000060848201527f000000000000000000000000000000000000000000000000000000000000000060a482015260027f000000000000000000000000000000000000000000000000000000000000000002830393506000908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063b29e1d1e9060c401606060405180830381865af41580156109a8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109cc9190613c08565b9250925092507f00000000000000000000000000000000000000000000000000000000000000006109fd848461188f565b1015610a1c5760405163216f4ab160e21b815260040160405180910390fd5b600080610a2e858585896000806113cb565b91509150801580610a3f5750600082125b15610a5d57604051630552b01360e31b815260040160405180910390fd5b610a66856118b5565b600280546001600160801b0319166001600160801b0392909216919091179055610a8f846118df565b600480546001600160801b0319166001600160801b0392909216919091179055610ab8836118b5565b600280546001600160801b03928316600160801b029216919091179055610b016000807f00000000000000000000000000000000000000000000000000000000000000006117c5565b610b196000610b1360208c018c613b02565b8a6117c5565b610b2e610b24610d5e565b8760046001610d8a565b508a8a8a610b3f6020820182613b02565b6001600160a01b03167f4931b9953a65531203c17d9abe77870a3e49d8b13af522ec3321c18b5abb8af38c858c610b7c6040870160208801613b39565b87610b8a6040890189613b56565b604051610b9d9796959493929190613b9d565b60405180910390a2505050505050505050506100916001600055565b600260005403610bdc57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b3415610c0257604051631574f9f360e01b815260040160405180910390fd5b565b6000610c136020830183613b02565b6001600160a01b031603610c3a5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b600254600454600091610c5e916001600160801b0390911690600f0b61188f565b905090565b600080610c728787878661191b565b9050610c7e81856115d8565b979650505050505050565b81600080610c9d6040850160208601613b39565b15610cc257610cb885610cb36040870187613b56565b611932565b9093509050610cda565b5034610cda85610cd56040870187613b56565b611a91565b610ce2611b49565b91508015610d5557604051600090339083908381818185875af1925050503d8060008114610d2c576040519150601f19603f3d011682016040523d82523d6000602084013e610d31565b606091505b5050905080610d53576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b6000610c5e427f0000000000000000000000000000000000000000000000000000000000000000611b5c565b600084815260086020526040812060018101546001600160801b0316151580610db257504286115b15610dcb57600101546001600160801b03169050611379565b6000806000610dd8610d5e565b90506000610e067f00000000000000000000000000000000000000000000000000000000000000008b613a36565b90505b81811015610e7c576000818152600860205260409020600101546001600160801b03168015610e54576000828152600860205260409020549094506001600160801b03169250610e7c565b507f000000000000000000000000000000000000000000000000000000000000000001610e09565b83600003610eef57889350610eec610e92610c3d565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061191b565b92505b50610ef9836118b5565b6001850180546001600160801b0319166001600160801b0392909216919091179055610f4f610f487f00000000000000000000000000000000000000000000000000000000000000008b613a49565b8a84611b72565b610f8d89610f87610f807f000000000000000000000000000000000000000000000000000000000000000083613a36565b4290611cb0565b84611b72565b610f9688611cbf565b5060009050600881610fc87f00000000000000000000000000000000000000000000000000000000000000008d613a49565b815260208101919091526040016000908120600101546001600160801b03169150610ff460028c611e63565b6000818152601060205260408120549192508c8c831561113a576001925060008061102386898d866000611e98565b9150915080600d60008282546110399190613a36565b9091555061105590508660008461104f8161173e565b88611f67565b61105f8183613a36565b915061108f86838a8e877f00000000000000000000000000000000000000000000000000000000000000006120e1565b91506110a361109e8385612125565b61213a565b600680546002906110c49084906201000090046001600160701b0316613c36565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506110f1826118b5565b60068054601090611113908490600160801b90046001600160801b0316613c56565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000611147600184611e63565b60008181526010602052604090205490915080156112565760019450600080611174838b8f886001611e98565b9150915080600d600082825461118a9190613a36565b909155506111a69050836000846111a08161173e565b8a612164565b6111b08183613a49565b91506111bf61109e8387612125565b600680546002906111e09084906201000090046001600160701b0316613c36565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061120d826118b5565b6006805460109061122f908490600160801b90046001600160801b0316613c56565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415611290576112826112688761173e565b6112718361173e565b61127b9190613c76565b6000612355565b8e61128d8482612394565b50505b600061129b8461258e565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a2600c546001600160a01b031615611369578e6113655a604051336024820152604481018990528315156064820152600090819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b179052600c546001600160a01b0316939291906126da565b5050505b50999b5050505050505050505050505b949350505050565b60006113a960106000611395600286611e63565b81526020019081526020016000205461173e565b6113bb60106000611395600187611e63565b6113c59190613c76565b92915050565b6000806000806113db8a8a612767565b91509150806113f2576000809350935050506115cd565b6000611452838a61142b7f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000613a49565b8b7f00000000000000000000000000000000000000000000000000000000000000006127a3565b50905060006114b6848b8461148f7f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000613a49565b8d7f0000000000000000000000000000000000000000000000000000000000000000612860565b5090508115806114c4575080155b156114d0575060009050805b600061151e858c7f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061191b565b905061152c83838c8461291e565b509093506000905061153e848f613a36565b9050600061155f8b8b6115508761173e565b61155a908e613c96565b61296a565b90508b61159461158f7f0000000000000000000000000000000000000000000000000000000000000000836129d1565b61173e565b61159d8361173e565b6115aa61158f8685612125565b6115b49190613c76565b6115be9190613c76565b60019950995050505050505050505b965096945050505050565b60006100916115ec84846301e133806129e2565b6115fe85670de0b6b3a7640000613a49565b906117b0565b61160c6138a7565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e083015260035404821661010082015260055490916101208301916117049116612a08565b81526004546001600160801b03600160801b918290048116602084015260055460409093019261173692900416612a08565b905292915050565b60006001600160ff1b038211156117685760405163396ea70160e11b815260040160405180910390fd5b5090565b61177581612a77565b610c3a57604051635044b7f560e01b815260040160405180910390fd5b60008260001904841183021582026117a957600080fd5b5091020490565b600061009183670de0b6b3a764000084611792565b6000838152600f602090815260408083206001600160a01b0386168452909152812080548392906117f7908490613a36565b90915550506000838152601060205260408120805483929061181a908490613a36565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b60006113c5826004612394565b60008183136118895782610091565b50919050565b60008061189c8484612767565b9092509050806118ae576118ae612c0f565b5092915050565b60006001600160801b0382111561176857604051630f0af95160e11b815260040160405180910390fd5b600060016001607f1b03198212806118fd575060016001607f1b0382135b156117685760405163a5353be560e01b815260040160405180910390fd5b60006100788261192c858888611792565b90612c28565b60008061196a6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333088612c9d565b6119ca7f0000000000000000000000000000000000000000000000000000000000000000611999876001613a36565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169190612d04565b60405163617ba03760e01b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000008116600483015260248201879052306044830152600060648301527f0000000000000000000000000000000000000000000000000000000000000000169063617ba03790608401600060405180830381600087803b158015611a6157600080fd5b505af1158015611a75573d6000803e3d6000fd5b50505050611a8285612d94565b6000915091505b935093915050565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166323b872dd3330611acb87612de1565b6040516001600160e01b031960e086901b1681526001600160a01b03938416600482015292909116602483015260448201526064016020604051808303816000875af1158015611b1f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b439190613cbe565b50505050565b6000610c5e670de0b6b3a7640000612de1565b6000611b688284613cf1565b6100919084613a49565b600083815260086020526040902054600160801b90046001600160801b0316808303611b9e5750505050565b6000848152600860205260408120546001600160801b031690819003611bf857611bc7836118b5565b600086815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055611c76565b611c49611c44670de0b6b3a7640000611c118886613a49565b611c1b9190613bf1565b85670de0b6b3a7640000611c2f878a613a49565b611c399190613bf1565b859291906001612e2e565b6118b5565b600086815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b611c7f846118b5565b60009586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b60008183116118895782610091565b6006546000908190611ce2908490600160801b90046001600160801b0316612125565b6006546201000090046001600160701b03169250905081811115611e5e576000611d0c8383613a49565b9050611d1b611c448286612ecc565b60068054601090611d3d908490600160801b90046001600160801b0316613d05565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611d7685836117b090919063ffffffff16565b90506000611da4827f0000000000000000000000000000000000000000000000000000000000000000612125565b905080600d6000828254611db89190613a36565b90915550611dc890508183613a49565b9150611dd3826118b5565b60028054600090611dee9084906001600160801b0316613c56565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611e1b82612ee1565b60048054600090611e30908490600f0b613d25565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60006001600160f81b03821115611e8d5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b600080611ea587856117b0565b91506000611ed3837f0000000000000000000000000000000000000000000000000000000000000000612125565b9050611eff817f0000000000000000000000000000000000000000000000000000000000000000612125565b91508315611f2257611f118282613a49565b611f1b9084613a49565b9250611f39565b611f2c8282613a49565b611f369084613a36565b92505b86861015611f5c57611f4c838789611792565b9250611f59828789611792565b91505b509550959350505050565b600454600160801b90046001600160801b0316611fb0611c4482611f93670de0b6b3a764000086613bf1565b600554600160801b90046001600160801b031691908a6000612e2e565b600580546001600160801b03928316600160801b029216919091179055611fd6866118b5565b611fe09082613d05565b600480546001600160801b03928316600160801b029216919091179055612006846118b5565b600280546000906120219084906001600160801b0316613c56565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061204e836118df565b60048054600090612063908490600f0b613d25565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550612093856118b5565b600280546010906120b5908490600160801b90046001600160801b0316613d05565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b6000806120f3846115fe8a888a611792565b9050612100888486611792565b61210a9082613a36565b90508681111561211a5786810391505b509695505050505050565b60006100918383670de0b6b3a7640000611792565b60006001600160701b038211156117685760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b0316838110806121a657507f00000000000000000000000000000000000000000000000000000000000000006121a48583613a49565b105b156121b3576121b3612c0f565b6004549084900390600f0b6121c88482613c76565b9050836121d48661173e565b13801561220957507f0000000000000000000000000000000000000000000000000000000000000000612207838361188f565b105b1561221657612216612c0f565b600354600160801b90046001600160801b0316612258611c4482612242670de0b6b3a764000088613bf1565b6005546001600160801b031691908c6000612e2e565b600580546001600160801b0319166001600160801b03929092169190911790556122828882613a49565b905061228d816118b5565b600380546001600160801b03928316600160801b0292169190911790556122b3836118b5565b600280546001600160801b0319166001600160801b03929092169190911790556122dc826118df565b600480546001600160801b0319166001600160801b0392909216919091179055612305876118b5565b60028054601090612327908490600160801b90046001600160801b0316613c56565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60035461237090611c44906001600160801b0316848461296a565b600380546001600160801b0319166001600160801b03929092169190911790555050565b600754600360f81b600090815260106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be7302154909182916123df916001600160801b031690613a49565b9050806000036123f35760019150506113c5565b60006123fe85612f0b565b905080600003612413576001925050506113c5565b600080612421838589612fa7565b91509150806124375760009450505050506113c5565b60008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401612473929190613d52565b6040805180830381865af415801561248f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124b39190613dc8565b915091506124d16124c38261173e565b6124cc90613dec565b612a77565b9250826124e757600096505050505050506113c5565b6124f0826118b5565b6007805460009061250b9084906001600160801b0316613c56565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550612538816118b5565b6007805460109061255a908490600160801b90046001600160801b0316613c56565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e6125b787611604565b6040518263ffffffff1660e01b81526004016125d39190613ada565b6040805180830381865af41580156125ef573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906126139190613e08565b9150915080612629575060009485945092505050565b60075460106020527fd6f7110f7a6485ce27c724322bdc9b60c9b2518194eace178d55653f1be730215460008080527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb015490926001600160801b03169161268f91613a36565b6126999190613a49565b9050806000036126b157506000958695509350505050565b60008087116126c15760006126cc565b6126cc848884611792565b976001975095505050505050565b6000606060008060008661ffff1667ffffffffffffffff81111561270057612700613e38565b6040519080825280601f01601f19166020018201604052801561272a576020820181803683370190505b5090506000808751602089018b8e8ef191503d92508683111561274b578692505b828152826000602083013e9093509150505b9550959350505050565b6000806000836127768661173e565b6127809190613c76565b90506000811215612798576000809250925050610d57565b946001945092505050565b60008060006127b58888888888613116565b905060006127e0670de0b6b3a76400006127cf8888612ecc565b6127d99190613a36565b83906117b0565b9050670de0b6b3a764000081106128145761280d612806670de0b6b3a7640000896117b0565b8290612c28565b905061282c565b612829612806670de0b6b3a764000089612ecc565b90505b61283681866117b0565b90508881101561284e5760008093509350505061275d565b97909703976001975095505050505050565b60008060006128728989888888613145565b905061288c8661192c6128858a8d613a36565b8790612125565b9850612899858a86611792565b9850888110156128b05760008092509250506115cd565b888103670de0b6b3a764000081106128de576128d7612806670de0b6b3a764000089612ecc565b90506128f6565b6128f3612806670de0b6b3a7640000896117b0565b90505b8089101561290c576000809350935050506115cd565b90970398600198509650505050505050565b600080600080600061293189878961316a565b90925090506129408289613a49565b9750600061294f82888a611792565b905061295b818b613a49565b9a989950979650505050505050565b6000806129788460006131f0565b6129838460006131f0565b61298d9190613c76565b905060008113156129a9576129a28186613a36565b94506129c8565b60008112156129c8576129bb81613dec565b6129c59086613a49565b94505b50929392505050565b60006100918383670de0b6b3a76400005b60008260001904841183021582026129f957600080fd5b50910281810615159190040190565b600080670de0b6b3a7640000612a1c610d5e565b612a269190613bf1565b9050808311612a36576000612a40565b612a408184613a49565b91506100916127d9670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613bf1565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f000000000000000000000000000000000000000000000000000000000000000060648301526084820185905260009391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612b30573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612b549190613e4e565b935093509350935080612b705750600098975050505050505050565b868414612ba157612b80846118b5565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612bd257612bb1836118df565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612c0057612be2826118b5565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b60405163bb55fd2760e01b815260040160405180910390fd5b600081600003612c415750670de0b6b3a76400006113c5565b82600003612c51575060006113c5565b6000612c5c8361173e565b90506000612c71612c6c8661173e565b613206565b9050818102612c88670de0b6b3a764000082613e8f565b9050612c938161342c565b9695505050505050565b6040516001600160a01b038481166024830152838116604483015260648201839052611b439186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b0383818316178352505050506135c1565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b179052612d55848261362e565b611b43576040516001600160a01b03848116602483015260006044830152612d8a91869182169063095ea7b390606401612cd2565b611b4384826135c1565b60006113c57f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000846136d1565b60006113c57f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000846136f5565b600082600003612e3f575084610078565b8115612e9257612e70612e528487613a36565b612e5c8587612125565b612e66888a612125565b6115fe9190613a36565b90506000612e7e8588611cb0565b905080821015612e8c578091505b50610078565b828503612ea157506000610078565b610075612eae8487613a49565b612eb885876129d1565b612ec2888a612125565b6115fe9190613a49565b600061009183670de0b6b3a7640000846129e2565b600060016001607f1b038211156117685760405163a5353be560e01b815260040160405180910390fd5b6003546000908190612f26906001600160801b031684612ecc565b9050612f527f000000000000000000000000000000000000000000000000000000000000000082613a36565b6002546001600160801b03161115611889576002547f000000000000000000000000000000000000000000000000000000000000000090612f9d9083906001600160801b0316613a49565b6100919190613a49565b612faf613908565b600080612fbb84611604565b9050600073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401612ff69190613ada565b6040805180830381865af4158015613012573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906130369190613e08565b935090508261304b575060009150611a899050565b600061306d61158f84610160015185610140015161212590919063ffffffff16565b61308d61158f8561012001518661010001516129d190919063ffffffff16565b6130979190613c76565b604080516101208101825285815260208082019590955260008052601085527f6e0956cda88cad152e89927e53611735b61a5c762d1428573c6931b0a5efcb0154818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b60006131228585612c28565b61313b6131338661192c868b612125565b859085611792565b6100759190613a36565b60006131518585612c28565b61313b6131628661192c868b6129d1565b8590856129e2565b6000806131ba856131b485817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a76400006131aa818c612ecc565b6131b49190613a49565b906129d1565b91506131e6827f0000000000000000000000000000000000000000000000000000000000000000612125565b9050935093915050565b60008183136131ff5781610091565b5090919050565b60008082136132285760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906132ab9084901c61173e565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361344757506000919050565b680755bf798b4a1bf1e58212613470576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190612c9374029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c61173e565b60006135d66001600160a01b03841683613718565b905080516000141580156135fb5750808060200190518101906135f99190613cbe565b155b1561362957604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b6000806000846001600160a01b03168460405161364b9190613ebd565b6000604051808303816000865af19150503d8060008114613688576040519150601f19603f3d011682016040523d82523d6000602084013e61368d565b606091505b50915091508180156136b75750805115806136b75750808060200190518101906136b79190613cbe565b80156100785750505050506001600160a01b03163b151590565b600061008e6b033b2e3c9fd0803ce80000006136ed8686613726565b849190611792565b600061008e6137048585613726565b83906b033b2e3c9fd0803ce8000000611792565b606061009183836000613794565b60405163d15e005360e01b81526001600160a01b0383811660048301526000919083169063d15e005390602401602060405180830381865afa158015613770573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100919190613ae9565b6060814710156137b95760405163cd78605960e01b8152306004820152602401613620565b600080856001600160a01b031684866040516137d59190613ebd565b60006040518083038185875af1925050503d8060008114613812576040519150601f19603f3d011682016040523d82523d6000602084013e613817565b606091505b5091509150612c93868383606082613837576138328261387e565b610091565b815115801561384e57506001600160a01b0384163b155b1561387757604051639996b31560e01b81526001600160a01b0385166004820152602401613620565b5080610091565b80511561388e5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60405180610120016040528061391c6138a7565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60006060828403121561188957600080fd5b600080600080600060a0868803121561398457600080fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff8111156139b757600080fd5b6139c38882890161395a565b9150509295509295909350565b6000806000606084860312156139e557600080fd5b8335925060208401359150604084013567ffffffffffffffff811115613a0a57600080fd5b613a168682870161395a565b9150509250925092565b634e487b7160e01b600052601160045260246000fd5b808201808211156113c5576113c5613a20565b818103818111156113c5576113c5613a20565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b61018081016113c58284613a5c565b600060208284031215613afb57600080fd5b5051919050565b600060208284031215613b1457600080fd5b81356001600160a01b038116811461009157600080fd5b8015158114610c3a57600080fd5b600060208284031215613b4b57600080fd5b813561009181613b2b565b6000808335601e19843603018112613b6d57600080fd5b83018035915067ffffffffffffffff821115613b8857600080fd5b602001915036819003821315610d5757600080fd5b878152866020820152856040820152841515606082015283608082015260c060a08201528160c0820152818360e0830137600081830160e090810191909152601f909201601f191601019695505050505050565b80820281158282048414176113c5576113c5613a20565b600080600060608486031215613c1d57600080fd5b8351925060208401519150604084015190509250925092565b6001600160701b038181168382160190808211156118ae576118ae613a20565b6001600160801b038181168382160190808211156118ae576118ae613a20565b81810360008312801583831316838312821617156118ae576118ae613a20565b8082018281126000831280158216821582161715613cb657613cb6613a20565b505092915050565b600060208284031215613cd057600080fd5b815161009181613b2b565b634e487b7160e01b600052601260045260246000fd5b600082613d0057613d00613cdb565b500690565b6001600160801b038281168282160390808211156118ae576118ae613a20565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156113c5576113c5613a20565b60006102a082019050613d66828551613a5c565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b60008060408385031215613ddb57600080fd5b505080516020909101519092909150565b6000600160ff1b8201613e0157613e01613a20565b5060000390565b60008060408385031215613e1b57600080fd5b825191506020830151613e2d81613b2b565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b60008060008060808587031215613e6457600080fd5b8451935060208501519250604085015191506060850151613e8481613b2b565b939692955090935050565b600082613e9e57613e9e613cdb565b600160ff1b821460001984141615613eb857613eb8613a20565b500590565b6000825160005b81811015613ede5760208186018101518583015201613ec4565b50600092019182525091905056fea264697066735822122094cb5a987f64e201a0a9110a79e0dad97443e43f209cfb5095f24e2e6b63cfe064736f6c63430008140033',
    methodIdentifiers: {
        "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": "4c2ac1d9",
        "initialize(uint256,uint256,(address,bool,bytes))": "77d05ff4"
    }
};
