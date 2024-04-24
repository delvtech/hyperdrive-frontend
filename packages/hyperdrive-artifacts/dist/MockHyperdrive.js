export const MockHyperdrive = {
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
            "type": "fallback",
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "PERMIT_TYPEHASH",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "accrue",
            "inputs": [
                {
                    "name": "time",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "apr",
                    "type": "int256",
                    "internalType": "int256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "addLiquidity",
            "inputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "",
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
            "name": "batchTransferFrom",
            "inputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "",
                    "type": "uint256[]",
                    "internalType": "uint256[]"
                },
                {
                    "name": "",
                    "type": "uint256[]",
                    "internalType": "uint256[]"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "calculateFeesGivenBonds",
            "inputs": [
                {
                    "name": "_bondAmount",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_normalizedTimeRemaining",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_spotPrice",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "vaultSharePrice",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "totalCurveFee",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "totalFlatFee",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "governanceCurveFee",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "totalGovernanceFee",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "calculateFeesGivenShares",
            "inputs": [
                {
                    "name": "_shareAmount",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_spotPrice",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "vaultSharePrice",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "curveFee",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "governanceCurveFee",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "calculateIdleShareReserves",
            "inputs": [
                {
                    "name": "_vaultSharePrice",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "calculateOpenLong",
            "inputs": [
                {
                    "name": "_shareAmount",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_vaultSharePrice",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "shareReservesDelta",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "bondReservesDelta",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "totalGovernanceFee",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "calculateTimeRemaining",
            "inputs": [
                {
                    "name": "_maturityTime",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "timeRemaining",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "calculateTimeRemainingScaled",
            "inputs": [
                {
                    "name": "_maturityTime",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "timeRemaining",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "checkpoint",
            "inputs": [
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
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "closeLong",
            "inputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "",
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
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "",
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
            "name": "collectGovernanceFee",
            "inputs": [
                {
                    "name": "",
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
            "name": "domainSeparator",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getTotalShares",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "initialize",
            "inputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "",
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
            "name": "latestCheckpoint",
            "inputs": [],
            "outputs": [
                {
                    "name": "checkpointTime",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "openLong",
            "inputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "",
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
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "",
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
            "name": "pause",
            "inputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "permitForAll",
            "inputs": [
                {
                    "name": "owner",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "spender",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_approved",
                    "type": "bool",
                    "internalType": "bool"
                },
                {
                    "name": "deadline",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "v",
                    "type": "uint8",
                    "internalType": "uint8"
                },
                {
                    "name": "r",
                    "type": "bytes32",
                    "internalType": "bytes32"
                },
                {
                    "name": "s",
                    "type": "bytes32",
                    "internalType": "bytes32"
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
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "",
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
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "",
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
            "name": "setApproval",
            "inputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setApprovalBridge",
            "inputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setApprovalForAll",
            "inputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setFeeCollector",
            "inputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setGovernance",
            "inputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setLongExposure",
            "inputs": [
                {
                    "name": "longExposure",
                    "type": "uint128",
                    "internalType": "uint128"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setMarketState",
            "inputs": [
                {
                    "name": "_marketState_",
                    "type": "tuple",
                    "internalType": "struct IHyperdrive.MarketState",
                    "components": [
                        {
                            "name": "shareReserves",
                            "type": "uint128",
                            "internalType": "uint128"
                        },
                        {
                            "name": "bondReserves",
                            "type": "uint128",
                            "internalType": "uint128"
                        },
                        {
                            "name": "longExposure",
                            "type": "uint128",
                            "internalType": "uint128"
                        },
                        {
                            "name": "longsOutstanding",
                            "type": "uint128",
                            "internalType": "uint128"
                        },
                        {
                            "name": "shareAdjustment",
                            "type": "int128",
                            "internalType": "int128"
                        },
                        {
                            "name": "shortsOutstanding",
                            "type": "uint128",
                            "internalType": "uint128"
                        },
                        {
                            "name": "longAverageMaturityTime",
                            "type": "uint128",
                            "internalType": "uint128"
                        },
                        {
                            "name": "shortAverageMaturityTime",
                            "type": "uint128",
                            "internalType": "uint128"
                        },
                        {
                            "name": "isInitialized",
                            "type": "bool",
                            "internalType": "bool"
                        },
                        {
                            "name": "isPaused",
                            "type": "bool",
                            "internalType": "bool"
                        },
                        {
                            "name": "zombieBaseProceeds",
                            "type": "uint112",
                            "internalType": "uint112"
                        },
                        {
                            "name": "zombieShareReserves",
                            "type": "uint128",
                            "internalType": "uint128"
                        }
                    ]
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setPauser",
            "inputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setReserves",
            "inputs": [
                {
                    "name": "shareReserves",
                    "type": "uint128",
                    "internalType": "uint128"
                },
                {
                    "name": "bondReserves",
                    "type": "uint128",
                    "internalType": "uint128"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setSweepCollector",
            "inputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setTotalShares",
            "inputs": [
                {
                    "name": "_totalShares",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "sweep",
            "inputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "contract IERC20"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "target0",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "target1",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "target2",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "target3",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "target4",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "transferFrom",
            "inputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "transferFromBridge",
            "inputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "updateLiquidity",
            "inputs": [
                {
                    "name": "_shareReservesDelta",
                    "type": "int256",
                    "internalType": "int256"
                }
            ],
            "outputs": [],
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
                    "name": "baseAmount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "vaultShareAmount",
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
                    "name": "baseAmount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "vaultShareAmount",
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
                    "name": "baseAmount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "vaultShareAmount",
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
                    "name": "fees",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
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
                    "name": "baseAmount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "vaultShareAmount",
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
                    "name": "baseAmount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "vaultShareAmount",
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
                    "name": "baseAmount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "vaultShareAmount",
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
                    "name": "baseAmount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "vaultShareAmount",
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
                    "name": "baseAmount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "vaultShareAmount",
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
            "name": "InsufficientLiquidity",
            "inputs": []
        },
        {
            "type": "error",
            "name": "LnInvalidInput",
            "inputs": []
        },
        {
            "type": "error",
            "name": "ReentrancyGuardReentrantCall",
            "inputs": []
        },
        {
            "type": "error",
            "name": "UnexpectedSuccess",
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
            "name": "UnsafeCastToUint128",
            "inputs": []
        },
        {
            "type": "error",
            "name": "UpdateLiquidityFailed",
            "inputs": []
        }
    ],
    bytecode: '0x6102e06040523480156200001257600080fd5b506040516201b1043803806201b104833981016040819052620000359162000366565b8081604051620000459062000256565b62000051919062000459565b604051809103906000f0801580156200006e573d6000803e3d6000fd5b50826040516200007e9062000264565b6200008a919062000459565b604051809103906000f080158015620000a7573d6000803e3d6000fd5b5083604051620000b79062000272565b620000c3919062000459565b604051809103906000f080158015620000e0573d6000803e3d6000fd5b5084604051620000f09062000280565b620000fc919062000459565b604051809103906000f08015801562000119573d6000803e3d6000fd5b508560405162000129906200028e565b62000135919062000459565b604051809103906000f08015801562000152573d6000803e3d6000fd5b50600160005585516001600160a01b039081166080908152602080890151831660a0908152918901516101a0908152918901516101c05260c0808a01516101e052610100808b015190915260e0808b01519052610120808b01519091529189018051519092528151015161014090815281516040908101516101609081529251606090810151610180908152918b01518516610200528a01516102205290890151600a80549185166001600160a01b0319928316179055918901516008805491851691841691909117905590970151600980549183169190981617909655938516610240529184166102605283166102805282166102a052166102c052506200056f565b61479a806200318d83390190565b614d12806200792783390190565b614c22806200c63983390190565b614f64806201125b83390190565b614f4580620161bf83390190565b6040516101c081016001600160401b0381118282101715620002ce57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b0381168114620002ec57600080fd5b919050565b6000608082840312156200030457600080fd5b604051608081016001600160401b03811182821017156200033557634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600061022082840312156200037a57600080fd5b620003846200029c565b6200038f83620002d4565b81526200039f60208401620002d4565b6020820152620003b260408401620002d4565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e082015261010080840151818301525061012080840151818301525061014062000411818501620002d4565b9082015261016062000425848201620002d4565b9082015261018062000439848201620002d4565b908201526101a06200044e85858301620002f1565b908201529392505050565b81516001600160a01b03168152610220810160208301516200048660208401826001600160a01b03169052565b506040830151620004a260408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e08301526101008084015181840152506101208084015181840152506101408084015162000509828501826001600160a01b03169052565b5050610160838101516001600160a01b038116848301525050610180838101516001600160a01b0381168483015250506101a08381015180518483015260208101516101c085015260408101516101e08501526060810151610200850152505092915050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051610280516102a0516102c051612a6e6200071f600039600081816108e701528181610b7d0152610fe401526000818161082c01528181610b4d01528181610d9a0152610f8201526000818161071301528181610fb8015261100f0152600081816108b301528181610a300152610aea01526000818161027e0152818161044001528181610a0001528181610a6201528181610a9401528181610b1e01528181610d5301528181610dd701528181610f3a015261103801526000505060005050600050506000818161162901528181611665015261195b0152600081816114420152818161148a01526115aa01526000505060008181611171015281816111ea01526113700152600081816111be01526114fd0152600081816111370152818161132c01526114dc015260008181611420015281816114ab01526115cb0152600081816112f301526116ee015260006113cb01526000505060008181610bcf01528181610c690152610cdd0152612a6e6000f3fe6080604052600436106102675760003560e01c80639bd3349811610144578063cbc13434116100b6578063e44808bc1161007a578063e44808bc14610881578063e4af29d114610377578063eac3e799146108a1578063f3f70707146108d5578063f45cf2e014610909578063f698da25146109e657610267565b8063cbc13434146107e5578063d5002f2e14610805578063d899e1121461081a578063dbbe80701461084e578063ded062311461086157610267565b8063a77384c111610108578063a77384c114610735578063ab033ea914610377578063b1b4b17014610755578063b4f8da3914610775578063ca6d38f7146107b2578063cba2e58d146107d257610267565b80639bd33498146106a65780639cd241af146106e1578063a22cb465146105fe578063a42dce8014610377578063a6e8a8591461070157610267565b80634c2ac1d9116101dd5780637180c8ca116101a15780637180c8ca146105fe57806371f88b7c1461061e57806377d05ff41461063e5780638120a3e2146106515780639032c72614610671578063907c0f921461069157610267565b80634c2ac1d91461055c5780634ed2d6ac1461056f578063680962391461058a57806368c2ecb8146105aa578063702db0eb146105ca57610267565b806321b57d531161022f57806321b57d531461042e57806322d5506b1461047a57806329b23fc1146104ba57806330adf81f146104e85780633e691db91461051c578063414f826d1461053c57610267565b806301681a621461037757806302329a2914610399578063074a6de9146103b457806317fad7fc146103ee5780631c0f12b61461040e575b34801561027357600080fd5b5060003660606000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031685856040516102b6929190612130565b600060405180830381855af49150503d80600081146102f1576040519150601f19603f3d011682016040523d82523d6000602084013e6102f6565b606091505b5091509150811561031a57604051638bb0a34b60e01b815260040160405180910390fd5b600061032582612140565b90506001600160e01b03198116636e64089360e11b1461034757815160208301fd5b815160031981016004840190815292610368918101602001906024016121db565b80519650602001945050505050f35b34801561038357600080fd5b50610397610392366004612292565b6109fb565b005b3480156103a557600080fd5b506103976103923660046122c4565b3480156103c057600080fd5b506103d46103cf3660046122f1565b610a28565b604080519283526020830191909152015b60405180910390f35b3480156103fa57600080fd5b50610397610409366004612386565b610a5d565b34801561041a57600080fd5b5061039761042936600461241b565b610a8f565b34801561043a57600080fd5b506104627f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016103e5565b34801561048657600080fd5b5061049a610495366004612463565b610abf565b6040805194855260208501939093529183015260608201526080016103e5565b3480156104c657600080fd5b506104da6104d5366004612495565b610ae3565b6040519081526020016103e5565b3480156104f457600080fd5b506104da7f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367381565b34801561052857600080fd5b506104da6105373660046124ef565b610b17565b34801561054857600080fd5b50610397610557366004612524565b610b48565b6104da61056a366004612546565b610b76565b34801561057b57600080fd5b506103976104293660046125aa565b34801561059657600080fd5b506103976105a5366004612524565b610bab565b3480156105b657600080fd5b506104da6105c53660046125f4565b610d3d565b3480156105d657600080fd5b506103976105e5366004612624565b6001600160801b03908116600160801b02911617600155565b34801561060a57600080fd5b50610397610619366004612657565b610d4e565b34801561062a57600080fd5b506103d4610639366004612683565b610d77565b6104da61064c3660046122f1565b610d93565b34801561065d57600080fd5b5061039761066c3660046125f4565b610dc6565b34801561067d57600080fd5b5061039761068c3660046126af565b610dd2565b34801561069d57600080fd5b506104da610f0a565b3480156106b257600080fd5b506106c66106c1366004612524565b610f19565b604080519384526020840192909252908201526060016103e5565b3480156106ed57600080fd5b506103976106fc36600461272d565b610f35565b34801561070d57600080fd5b506104627f000000000000000000000000000000000000000000000000000000000000000081565b34801561074157600080fd5b506103976107503660046125f4565b601255565b34801561076157600080fd5b506104da6107703660046125f4565b610f64565b34801561078157600080fd5b50610397610790366004612765565b600280546001600160801b0319166001600160801b0392909216919091179055565b3480156107be57600080fd5b506104da6107cd3660046125f4565b610f6f565b6103d46107e0366004612495565b610f7a565b3480156107f157600080fd5b506103d46108003660046122f1565b610fb0565b34801561081157600080fd5b506012546104da565b34801561082657600080fd5b506104627f000000000000000000000000000000000000000000000000000000000000000081565b6103d461085c366004612495565b610fdc565b34801561086d57600080fd5b506104da61087c366004612495565b611008565b34801561088d57600080fd5b5061039761089c366004612780565b611033565b3480156108ad57600080fd5b506104627f000000000000000000000000000000000000000000000000000000000000000081565b3480156108e157600080fd5b506104627f000000000000000000000000000000000000000000000000000000000000000081565b34801561091557600080fd5b50610397610924366004612808565b805160208201516001600160801b03918216600160801b91831682021760015560408301516060840151908316908316820217600255608083015160a084015190831690831682021760035560c083015160e084015190831690831682021760045561010080840151600580546101208701516101408801516101609098015161ffff1990921693151561ff001916939093179215159093029190911761ffff16620100006001600160701b0390961695909502841694909417921602179055565b3480156109f257600080fd5b506104da611064565b610a247f00000000000000000000000000000000000000000000000000000000000000006110f2565b5050565b600080610a547f00000000000000000000000000000000000000000000000000000000000000006110f2565b50935093915050565b610a867f00000000000000000000000000000000000000000000000000000000000000006110f2565b50505050505050565b610ab87f00000000000000000000000000000000000000000000000000000000000000006110f2565b5050505050565b600080600080610ad188888888611112565b929b919a509850909650945050505050565b6000610b0e7f00000000000000000000000000000000000000000000000000000000000000006110f2565b50949350505050565b6000610b427f00000000000000000000000000000000000000000000000000000000000000006110f2565b50919050565b610b717f00000000000000000000000000000000000000000000000000000000000000006110f2565b505050565b6000610ba17f00000000000000000000000000000000000000000000000000000000000000006110f2565b5095945050505050565b6040516370a0823160e01b8152306004820152600090610c41906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa158015610c16573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c3a91906128f4565b8385611226565b9150506000811315610cca576040516340c10f1960e01b8152306004820152602481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906340c10f19906044015b600060405180830381600087803b158015610cb657600080fd5b505af1158015610a86573d6000803e3d6000fd5b6000811215610b71576001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016639dc29fac30610d0c84612923565b6040516001600160e01b031960e085901b1681526001600160a01b0390921660048301526024820152604401610c9c565b6000610d48826112c6565b92915050565b610b717f00000000000000000000000000000000000000000000000000000000000000006110f2565b600080610d8585858561131e565b90925090505b935093915050565b6000610dbe7f00000000000000000000000000000000000000000000000000000000000000006110f2565b509392505050565b610dcf8161139e565b50565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316610e07611064565b60405160248101919091527f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367360448201526001600160a01b03808c1660648301528a16608482015288151560a482015260c4810188905260ff871660e4820152610104810186905261012481018590526101440160408051601f198184030181529181526020820180516001600160e01b03166314e5f07b60e01b17905251610eb0919061293f565b600060405180830381855af49150503d8060008114610eeb576040519150601f19603f3d011682016040523d82523d6000602084013e610ef0565b606091505b509150915081610f0257805160208201fd5b805160208201f35b6000610f146113c4565b905090565b6000806000610f2885856113fa565b9250925092509250925092565b610f5e7f00000000000000000000000000000000000000000000000000000000000000006110f2565b50505050565b6000610d4882611607565b6000610d48826116a3565b600080610fa67f00000000000000000000000000000000000000000000000000000000000000006110f2565b5094509492505050565b600080610a547f00000000000000000000000000000000000000000000000000000000000000006110f2565b600080610fa67f00000000000000000000000000000000000000000000000000000000000000006110f2565b6000610b0e7f00000000000000000000000000000000000000000000000000000000000000006110f2565b61105c7f00000000000000000000000000000000000000000000000000000000000000006110f2565b505050505050565b60408051808201825260018152603160f81b60209182015281517f2aef22f9d7df5f9d21c56d14029233f3fdaa91917727e1eb68e504d27072d6cd818301527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc681840152466060820152306080808301919091528351808303909101815260a0909101909252815191012090565b6060600080836001600160a01b0316600036604051610eb0929190612130565b600080808061116987866111628b61115c6111358c670de0b6b3a764000061295b565b7f000000000000000000000000000000000000000000000000000000000000000090611719565b90611719565b919061172a565b9350611195847f0000000000000000000000000000000000000000000000000000000000000000611750565b915060006111b66111ae89670de0b6b3a764000061295b565b8a908861172a565b90506111e2817f0000000000000000000000000000000000000000000000000000000000000000611719565b935061120e847f0000000000000000000000000000000000000000000000000000000000000000611750565b611218908461296e565b915050945094509450949050565b60008080611238846301e13380611765565b9050600061125d826000881261124e5787611257565b61125788612923565b90611750565b905060008613156112905761127b6112748261177a565b8890611750565b9350611287878561295b565b92505050610d8b565b60008612156112b8576112ac6112a58261177a565b8890611765565b93506112878785612981565b509495600095509350505050565b6000806112d16113c4565b90508083116112e15760006112eb565b6112eb818461295b565b9150611317827f0000000000000000000000000000000000000000000000000000000000000000611765565b9392505050565b6000806113688561115c85817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a764000061135e818c611919565b61115c919061295b565b9150611394827f0000000000000000000000000000000000000000000000000000000000000000611750565b9050935093915050565b6113a78161192e565b610dcf57604051635044b7f560e01b815260040160405180910390fd5b60006113f07f0000000000000000000000000000000000000000000000000000000000000000426129b7565b610f14904261295b565b600080600061146661140a611a3b565b600154600160801b90046001600160801b0316877f0000000000000000000000000000000000000000000000000000000000000000887f0000000000000000000000000000000000000000000000000000000000000000611a5c565b915060006114cf611475611a3b565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a88565b90506115268684611521847f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611aa8565b611b1b565b1561153357611533611b5d565b60008061154188848961131e565b9092509050611550828661295b565b945061155d818489611b76565b9350611569848961295b565b9550670de0b6b3a76400006115ef87611580611a3b565b61158a919061296e565b6001546115a8908990600160801b90046001600160801b031661295b565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a88565b11156115fd576115fd611b5d565b5050509250925092565b6002546000908190611622906001600160801b031684611919565b905061164e7f00000000000000000000000000000000000000000000000000000000000000008261296e565b6001546001600160801b03161115610b42576001547f0000000000000000000000000000000000000000000000000000000000000000906116999083906001600160801b031661295b565b611317919061295b565b600080670de0b6b3a76400006116b76113c4565b6116c191906129cb565b90508083116116d15760006116db565b6116db818461295b565b9150611317611712670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006129cb565b8390611765565b60006113178383670de0b6b3a76400005b600082600019048411830215820261174157600080fd5b50910281810615159190040190565b60006113178383670de0b6b3a7640000611b76565b600061131783670de0b6b3a764000084611b76565b6000680248ce36a70cb26b3e19821361179557506000919050565b680755bf798b4a1bf1e582126117be576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061190f74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611b94565b9695505050505050565b600061131783670de0b6b3a76400008461172a565b6001546003546000916001600160801b0380821692600f0b91600160801b900416838080806119808787877f00000000000000000000000000000000000000000000000000000000000000008d611bc2565b93509350935093508061199c5750600098975050505050505050565b8684146119cd576119ac84611cdf565b600180546001600160801b0319166001600160801b03929092169190911790555b8583146119fe576119dd83611d09565b600380546001600160801b0319166001600160801b03929092169190911790555b848214611a2c57611a0e82611cdf565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b600154600354600091610f14916001600160801b0390911690600f0b611d57565b6000611a7d878787611a7688670de0b6b3a764000061295b565b8787611d7d565b979650505050505050565b6000611a9f82611a99858888611b76565b90611e31565b95945050505050565b6000611b13611ae9611ac284670de0b6b3a764000061295b565b61115c670de0b6b3a7640000611ad8818a611919565b611ae2919061295b565b8790611719565b611afb90670de0b6b3a764000061296e565b611b0d84670de0b6b3a764000061295b565b90611765565b949350505050565b600080611b5285611b2a611a3b565b611b34919061296e565b6001546115a8908790600160801b90046001600160801b031661295b565b909210949350505050565b60405163bb55fd2760e01b815260040160405180910390fd5b6000826000190484118302158202611b8d57600080fd5b5091020490565b60006001600160ff1b03821115611bbe5760405163396ea70160e11b815260040160405180910390fd5b5090565b60008060008084600003611be157508792508691508590506001611cd3565b600085611bed8b611b94565b611bf791906129e2565b9050611c0287611b94565b811215611c1d57600080600080945094509450945050611cd3565b80945060008912611c4257611c3b611c36868b8d611b76565b611b94565b9350611c65565b611c59611c36611c518b612923565b87908d61172a565b611c6290612923565b93505b600080611c728c8c611e9c565b9150915080611c91576000806000809650965096509650505050611cd3565b6000611c9d8888611e9c565b9250905081611cbd57600080600080975097509750975050505050611cd3565b611cc88b8285611b76565b955060019450505050505b95509550955095915050565b60006001600160801b03821115611bbe57604051630f0af95160e11b815260040160405180910390fd5b60006f7fffffffffffffffffffffffffffffff19821280611d3957506f7fffffffffffffffffffffffffffffff82135b15611bbe5760405163a5353be560e01b815260040160405180910390fd5b600080611d648484611e9c565b909250905080611d7657611d76611b5d565b5092915050565b600080611d8d8888878787611edb565b9050611da785611a99611da0898c61296e565b8690611750565b9750611db4848985611b76565b975087811015611dc657611dc6611b5d565b878103670de0b6b3a76400008110611dfb57611df4611ded670de0b6b3a764000088611919565b8290611e31565b9050611e13565b611e10611ded670de0b6b3a764000088611765565b90505b80881015611e2357611e23611b5d565b909603979650505050505050565b600081600003611e4a5750670de0b6b3a7640000610d48565b82600003611e5a57506000610d48565b6000611e6583611b94565b90506000611e7a611e7586611b94565b611f0a565b9050818102611e91670de0b6b3a764000082612a0a565b905061190f8161177a565b600080600083611eab86611b94565b611eb59190612981565b90506000811215611ecd576000809250925050611ed4565b9150600190505b9250929050565b6000611ee78585611e31565b611f00611ef886611a99868b611719565b85908561172a565b61190f919061296e565b6000808213611f2c5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f19820190611faf9084901c611b94565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b8183823760009101908152919050565b805160208201516001600160e01b0319808216929190600483101561216f5780818460040360031b1b83161693505b505050919050565b634e487b7160e01b600052604160045260246000fd5b604051610180810167ffffffffffffffff811182821017156121b1576121b1612177565b60405290565b60005b838110156121d25781810151838201526020016121ba565b50506000910152565b6000602082840312156121ed57600080fd5b815167ffffffffffffffff8082111561220557600080fd5b818401915084601f83011261221957600080fd5b81518181111561222b5761222b612177565b604051601f8201601f19908116603f0116810190838211818310171561225357612253612177565b8160405282815287602084870101111561226c57600080fd5b611a7d8360208301602088016121b7565b6001600160a01b0381168114610dcf57600080fd5b6000602082840312156122a457600080fd5b81356113178161227d565b803580151581146122bf57600080fd5b919050565b6000602082840312156122d657600080fd5b611317826122af565b600060608284031215610b4257600080fd5b60008060006060848603121561230657600080fd5b8335925060208401359150604084013567ffffffffffffffff81111561232b57600080fd5b612337868287016122df565b9150509250925092565b60008083601f84011261235357600080fd5b50813567ffffffffffffffff81111561236b57600080fd5b6020830191508360208260051b8501011115611ed457600080fd5b6000806000806000806080878903121561239f57600080fd5b86356123aa8161227d565b955060208701356123ba8161227d565b9450604087013567ffffffffffffffff808211156123d757600080fd5b6123e38a838b01612341565b909650945060608901359150808211156123fc57600080fd5b5061240989828a01612341565b979a9699509497509295939492505050565b6000806000806080858703121561243157600080fd5b8435935060208501356124438161227d565b925060408501356124538161227d565b9396929550929360600135925050565b6000806000806080858703121561247957600080fd5b5050823594602084013594506040840135936060013592509050565b600080600080608085870312156124ab57600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff8111156124d757600080fd5b6124e3878288016122df565b91505092959194509250565b60006020828403121561250157600080fd5b813567ffffffffffffffff81111561251857600080fd5b611b13848285016122df565b6000806040838503121561253757600080fd5b50508035926020909101359150565b600080600080600060a0868803121561255e57600080fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff81111561259157600080fd5b61259d888289016122df565b9150509295509295909350565b600080600080608085870312156125c057600080fd5b8435935060208501356125d28161227d565b92506040850135915060608501356125e98161227d565b939692955090935050565b60006020828403121561260657600080fd5b5035919050565b80356001600160801b03811681146122bf57600080fd5b6000806040838503121561263757600080fd5b6126408361260d565b915061264e6020840161260d565b90509250929050565b6000806040838503121561266a57600080fd5b82356126758161227d565b915061264e602084016122af565b60008060006060848603121561269857600080fd5b505081359360208301359350604090920135919050565b600080600080600080600060e0888a0312156126ca57600080fd5b87356126d58161227d565b965060208801356126e58161227d565b95506126f3604089016122af565b945060608801359350608088013560ff8116811461271057600080fd5b9699959850939692959460a0840135945060c09093013592915050565b60008060006060848603121561274257600080fd5b8335925060208401356127548161227d565b929592945050506040919091013590565b60006020828403121561277757600080fd5b6113178261260d565b600080600080600060a0868803121561279857600080fd5b8535945060208601356127aa8161227d565b935060408601356127ba8161227d565b92506060860135915060808601356127d18161227d565b809150509295509295909350565b8035600f81900b81146122bf57600080fd5b80356001600160701b03811681146122bf57600080fd5b6000610180828403121561281b57600080fd5b61282361218d565b61282c8361260d565b815261283a6020840161260d565b602082015261284b6040840161260d565b604082015261285c6060840161260d565b606082015261286d608084016127df565b608082015261287e60a0840161260d565b60a082015261288f60c0840161260d565b60c08201526128a060e0840161260d565b60e08201526101006128b38185016122af565b908201526101206128c58482016122af565b908201526101406128d78482016127f1565b908201526101606128e984820161260d565b908201529392505050565b60006020828403121561290657600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b6000600160ff1b82016129385761293861290d565b5060000390565b600082516129518184602087016121b7565b9190910192915050565b81810381811115610d4857610d4861290d565b80820180821115610d4857610d4861290d565b8181036000831280158383131683831282161715611d7657611d7661290d565b634e487b7160e01b600052601260045260246000fd5b6000826129c6576129c66129a1565b500690565b8082028115828204841417610d4857610d4861290d565b8082018281126000831280158216821582161715612a0257612a0261290d565b505092915050565b600082612a1957612a196129a1565b600160ff1b821460001984141615612a3357612a3361290d565b50059056fea2646970667358221220b36cf0ddc3340abe27d0df919186b5cedb80d0a85129016edb77dfa1e43d533164736f6c634300081400336102406040523480156200001257600080fd5b506040516200479a3803806200479a8339810160408190526200003591620001e1565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c05260c0808501516101e0526101008086015190915260e0808601519052610120808601519091529184018051519092528151015161014090815281516040908101516101609081529251606090810151610180908152918601518516610200528501516102205290840151600a80546001600160a01b03199081169286169290921790559184015160088054841691851691909117905590920151600980549093169116179055620002d4565b6040516101c081016001600160401b03811182821017156200014957634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200016757600080fd5b919050565b6000608082840312156200017f57600080fd5b604051608081016001600160401b0381118282101715620001b057634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60006102208284031215620001f557600080fd5b620001ff62000117565b6200020a836200014f565b81526200021a602084016200014f565b60208201526200022d604084016200014f565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152506101406200028c8185016200014f565b90820152610160620002a08482016200014f565b90820152610180620002b48482016200014f565b908201526101a0620002c9858583016200016c565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161438b6200040f60003960008181610b690152611b08015260008181610b420152611acb015260008181610be30152611cc0015260008181610bbd0152611c9a015260008181610b930152611c7401526000610d1301526000610cee01526000610cc901526000610ca6015260008181610c560152611ce6015260008181610c0901528181610e7a01526123f2015260008181610c2f01526129a60152600081816105520152610b1601526000818161065a01528181610af101528181610e3b015281816120eb015281816122c701528181612310015281816125460152818161258f015281816126cd01528181612779015281816128650152612911015261438b6000f3fe608060405234801561001057600080fd5b50600436106102055760003560e01c80637ecebe001161011a578063becee9c3116100ad578063d81657431161007c578063d81657431461047b578063e44808bc14610490578063e4af29d1146104a3578063e985e9c5146104b6578063fba56008146104c957600080fd5b8063becee9c314610440578063c55dae6314610460578063c69e16ad146103c4578063cf210e651461046857600080fd5b8063a42dce80116100e9578063a42dce80146103f2578063ab033ea914610405578063b0d9658014610418578063bd85b0391461042d57600080fd5b80637ecebe00146103b15780638e67f87e146103c45780639cd241af146103cc578063a22cb465146103df57600080fd5b806321ff32a91161019d57806346fbf68e1161016c57806346fbf68e146103405780634e41a1fb146103635780634ed2d6ac1461037657806360246c88146103895780637180c8ca1461039e57600080fd5b806321ff32a9146102df578063313ce567146103005780633656eec21461031a5780633e691db91461032d57600080fd5b806314e5f07b116101d957806314e5f07b1461027b57806317fad7fc1461028e5780631c0f12b6146102a157806320fc4881146102b457600080fd5b8062ad800c1461020a57806301681a621461023357806302329a29146102485780630a4e14931461025b575b600080fd5b61021d610218366004613883565b6104f8565b60405161022a91906138ec565b60405180910390f35b610246610241366004613914565b61052f565b005b61024661025636600461393f565b61053b565b610263610544565b6040516001600160a01b03909116815260200161022a565b61024661028936600461396b565b610587565b61024661029c366004613a3f565b6105a3565b6102466102af366004613ad4565b6105b9565b6102c76102c2366004613883565b6105cc565b60405190516001600160801b0316815260200161022a565b6102f26102ed366004613b1c565b61060d565b60405190815260200161022a565b610308610653565b60405160ff909116815260200161022a565b6102f2610328366004613b5e565b6106ee565b6102f261033b366004613b8e565b610727565b61035361034e366004613914565b610732565b604051901515815260200161022a565b61021d610371366004613883565b610768565b610246610384366004613bc9565b610776565b6103916107c4565b60405161022a9190613c13565b6102466103ac366004613cb4565b6109f1565b6102f26103bf366004613914565b6109ff565b6102f2610a2b565b6102466103da366004613ce2565b610a45565b6102466103ed366004613cb4565b610a56565b610246610400366004613914565b610ac2565b610246610413366004613914565b610acb565b610420610ad4565b60405161022a9190613d1a565b6102f261043b366004613883565b610d50565b61045361044e366004613e2e565b610d72565b60405161022a9190613e70565b610263610e2d565b6102f2610476366004613883565b610e6d565b610483610eb6565b60405161022a9190613eb4565b61024661049e366004613fc5565b610fc2565b6102466104b1366004613914565b61100a565b6103536104c4366004614024565b611013565b6104d1611057565b6040805182516001600160801b03908116825260209384015116928101929092520161022a565b606061052a610506836110b6565b60405160200161051691906138ec565b6040516020818303038152906040526111de565b919050565b61053881611202565b50565b61053881611378565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201526000916105849101610516565b90565b6105988989898989898989896113fb565b505050505050505050565b6105b18686868686866115f2565b505050505050565b6105c684848484336116a6565b50505050565b60408051602081019091526000815261052a6007600084815260200190815260200160002060405160200161051691546001600160801b0316815260200190565b60008381526010602090815260408083206001600160a01b038681168552908352818420908516845282528083205481519283015261064c9101610516565b9392505050565b60006105847f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156106b6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106da9190614052565b6040805160ff909216602083015201610516565b6000828152600d602090815260408083206001600160a01b03851684528252808320548151928301526107219101610516565b92915050565b600061072182611867565b6001600160a01b0381166000908152600c6020908152604080832054905161052a926105169260ff169101901515815260200190565b606061052a6105068361198f565b8361078081611a8d565b6001600160a01b0316336001600160a01b0316146107b157604051632aab8bd360e01b815260040160405180910390fd5b6107bd85858585611b4a565b5050505050565b61083d604051806101e001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000610847611bb7565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b03909216916108b2919061409b565b6108bc91906140ae565b905060008083116108ce5760006108e9565b6108e9836108e36108de86611bcf565b611d65565b90611d95565b604080516101e0810182526001546001600160801b038082168352600354600f81900b60208501526005546001600160701b036201000082041695850195909552600160801b9485900482166060850152918490048116608084015260a0830187905260c08301889052600254849004811660e0840152600454808216610100850152918490048116610120840152908390048116610140830152600654808216610160840152929092049091166101808201529091506000906101a0810184156109bd576109b88486611daa565b6109c0565b60005b81526002546001600160801b03166020918201526040519192506109ea9161051691849101613c13565b5050505090565b6109fb8282611dbf565b5050565b6001600160a01b03811660009081526011602090815260408083205481519283015261052a9101610516565b6000610584600b5460405160200161051691815260200190565b610a5183838333611b4a565b505050565b336000818152600f602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b61053881611e48565b61053881611ebc565b610adc6137b3565b604080516101c0810182526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811682527f000000000000000000000000000000000000000000000000000000000000000081166020808401919091527f00000000000000000000000000000000000000000000000000000000000000008216838501527f00000000000000000000000000000000000000000000000000000000000000006060808501919091527f00000000000000000000000000000000000000000000000000000000000000006080808601919091527f000000000000000000000000000000000000000000000000000000000000000060a08601527f000000000000000000000000000000000000000000000000000000000000000060c08601527f000000000000000000000000000000000000000000000000000000000000000060e08601527f00000000000000000000000000000000000000000000000000000000000000006101008601527f0000000000000000000000000000000000000000000000000000000000000000610120860152600a5484166101408601526008548416610160860152600954909316610180850152845192830185527f000000000000000000000000000000000000000000000000000000000000000083527f0000000000000000000000000000000000000000000000000000000000000000838301527f0000000000000000000000000000000000000000000000000000000000000000838601527f0000000000000000000000000000000000000000000000000000000000000000908301526101a0830191909152915161058492610516929101613d1a565b6000818152600e602090815260408083205481519283015261052a9101610516565b606060008267ffffffffffffffff811115610d8f57610d8f6140c1565b604051908082528060200260200182016040528015610db8578160200160208202803683370190505b50905060005b83811015610e11576000858583818110610dda57610dda6140d7565b90506020020135905060008154905080848481518110610dfc57610dfc6140d7565b60209081029190910101525050600101610dbe565b50610e26816040516020016105169190613e70565b5092915050565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201526000916105849101610516565b600061052a610ea4610e9f7f00000000000000000000000000000000000000000000000000000000000000008561409b565b611f30565b60405160200161051691815260200190565b6040805161018081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261014081018290526101608101919091526105846001604051602001610516919081546001600160801b038082168352608091821c602084015260018401548082166040850152821c60608401526002840154600f81900b83850152821c60a0840152600384015490811660c0840152811c60e083015260049092015460ff8082161515610100840152600882901c1615156101208301526001600160701b03601082901c1661014083015290911c6101608201526101800190565b84610fcc81611a8d565b6001600160a01b0316336001600160a01b031614610ffd57604051632aab8bd360e01b815260040160405180910390fd5b6105b186868686866116a6565b61053881611f74565b6001600160a01b038281166000908152600f60209081526040808320938516835292815282822054835160ff90911615159181019190915290916107219101610516565b60408051808201909152600080825260208201526040805180820182526006546001600160801b03808216808452600160801b909204811660209384019081528451938401929092529051169181019190915261058490606001610516565b606060f882901c6001600160f81b03831660006110d282611fe8565b905060008360038111156110e8576110e861406f565b0361111a576040518060400160405280600d81526020016c048797065726472697665204c5609c1b81525093506111d6565b600183600381111561112e5761112e61406f565b0361115a578060405160200161114491906140ed565b60405160208183030381529060405293506111d6565b600283600381111561116e5761116e61406f565b0361118457806040516020016111449190614126565b60038360038111156111985761119861406f565b036111d6576040518060400160405280601b81526020017f48797065726472697665205769746864726177616c205368617265000000000081525093505b505050919050565b80604051636e64089360e11b81526004016111f991906138ec565b60405180910390fd5b61120a61209d565b600954336000908152600c60205260409020546001600160a01b039091169060ff161580156112425750336001600160a01b03821614155b80156112595750600a546001600160a01b03163314155b15611276576040516282b42960e81b815260040160405180910390fd5b60006112806120c7565b6040516370a0823160e01b81523060048201529091506000906001600160a01b038516906370a0823190602401602060405180830381865afa1580156112ca573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112ee9190614160565b90506113046001600160a01b038516848361215b565b8161130d6120c7565b1461132b576040516313dd85ff60e31b815260040160405180910390fd5b836001600160a01b0316836001600160a01b03167f951f51ee88c8e42633698bba90d1e53c0954470938036879e691c0232b47e09660405160405180910390a35050506105386001600055565b336000908152600c602052604090205460ff166113a7576040516282b42960e81b815260040160405180910390fd5b600580548215156101000261ff00199091161790556040517f7c4d1fe30fdbfda9e9c4c43e759ef32e4db5128d4cb58ff3ae9583b89b6242a5906113f090831515815260200190565b60405180910390a150565b8342111561141c5760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b0387166114435760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b0387811660008181526011602090815260408083205481518084018f905280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b61010083015261010282018c90526101228201526101420160408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa158015611531573d6000803e3d6000fd5b505050602060405103519050886001600160a01b0316816001600160a01b03161461156f57604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b03898116600081815260116020908152604080832080546001019055600f8252808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050505050505050505050565b6001600160a01b038616158061160f57506001600160a01b038516155b1561162d5760405163f0dd15fd60e01b815260040160405180910390fd5b82811461164d5760405163174861a760e31b815260040160405180910390fd5b60005b8381101561169d5761169585858381811061166d5761166d6140d7565b905060200201358888868686818110611688576116886140d7565b90506020020135336116a6565b600101611650565b50505050505050565b6001600160a01b03841615806116c357506001600160a01b038316155b156116e15760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b0316146117a5576001600160a01b038085166000908152600f602090815260408083209385168352929052205460ff166117a55760008581526010602090815260408083206001600160a01b038089168552908352818420908516845290915290205460001981146117a35760008681526010602090815260408083206001600160a01b03808a16855290835281842090861684529091528120805485929061179d9084906140ae565b90915550505b505b6000858152600d602090815260408083206001600160a01b0388168452909152812080548492906117d79084906140ae565b90915550506000858152600d602090815260408083206001600160a01b03871684529091528120805484929061180e90849061409b565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b600061187161209d565b61187a826121ad565b6008546001600160a01b0316806118946020850185613914565b6001600160a01b0316146118bb57604051630ad13b3360e21b815260040160405180910390fd5b336000908152600c602052604090205460ff161580156118e45750336001600160a01b03821614155b80156118fb5750600a546001600160a01b03163314155b15611918576040516282b42960e81b815260040160405180910390fd5b6000611922611bb7565b600b805460009091559091506119398183876121e3565b9350826001600160a01b03167fa4bafc79b3f9fdba2427cd386f1fbc7d8779e9fd7229f6220d53bc04d3901e4761197186858961227d565b60405190815260200160405180910390a250505061052a6001600055565b606060f882901c6001600160f81b03831660006119ab82611fe8565b905060008360038111156119c1576119c161406f565b036119f3576040518060400160405280600d81526020016c0485950455244524956452d4c5609c1b81525093506111d6565b6001836003811115611a0757611a0761406f565b03611a1d57806040516020016111449190614179565b6002836003811115611a3157611a3161406f565b03611a47578060405160200161114491906141b1565b6003836003811115611a5b57611a5b61406f565b036111d657505060408051808201909152600d81526c485950455244524956452d575360981b60208201529392505050565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b60008481526010602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b6000611bca670de0b6b3a76400006122ac565b905090565b611c336040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526002540482166101008201526004549091610120830191611d2b91166123a7565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192611d5d929004166123a7565b905292915050565b6000806000611d738461241d565b9150915080610e2657604051635516328b60e11b815260040160405180910390fd5b600061064c8383670de0b6b3a76400006124aa565b600061064c83670de0b6b3a7640000846124aa565b600a546001600160a01b03163314611de9576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0382166000818152600c6020908152604091829020805460ff191685151590811790915591519182527f902923dcd4814f6cef7005a70e01d5cf2035ab02d4523ef3b865f1d7bab885af910160405180910390a25050565b600a546001600160a01b03163314611e72576040516282b42960e81b815260040160405180910390fd5b600880546001600160a01b0319166001600160a01b0383169081179091556040517fe5693914d19c789bdee50a362998c0bc8d035a835f9871da5d51152f0582c34f90600090a250565b600a546001600160a01b03163314611ee6576040516282b42960e81b815260040160405180910390fd5b600a80546001600160a01b0319166001600160a01b0383169081179091556040517f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab90600090a250565b6000611f58600e6000611f446002866124c8565b8152602001908152602001600020546124fd565b611f6a600e6000611f446001876124c8565b61072191906141dd565b600a546001600160a01b03163314611f9e576040516282b42960e81b815260040160405180910390fd5b600980546001600160a01b0319166001600160a01b0383169081179091556040517fc049058b1df2dd8902739ceb78992df12fa8369c06c450b3c6787137b452fdd290600090a250565b60408051604e80825260808201909252606091906000908260208201818036833701905050905060005b841561208f57612023600a86614213565b61202e90603061409b565b60f81b82600161203e84876140ae565b61204891906140ae565b81518110612058576120586140d7565b60200101906001600160f81b031916908160001a9053508061207981614227565b91506120889050600a86614240565b9450612012565b918290030190815292915050565b6002600054036120c057604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b6040516370a0823160e01b8152306004820152600090611bca906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa158015612132573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121569190614160565b61252b565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610a51908490612614565b60006121bc6020830183613914565b6001600160a01b0316036105385760405163f0dd15fd60e01b815260040160405180910390fd5b6000806121f08585611d95565b90506121fb8161252b565b94508460000361220f57600091505061064c565b61221f604084016020850161393f565b1561224e57612247856122356020860186613914565b6122426040870187614254565b612677565b9150612275565b6122718561225f6020860186613914565b61226c6040870187614254565b612811565b8491505b509392505050565b600061228f604083016020840161393f565b1561229b57508261064c565b6122a58484611d95565b905061064c565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016122fb575047612386565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa15801561235f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123839190614160565b90505b60125460000361239757600061064c565b60125461064c90849083906124aa565b600080670de0b6b3a76400006123bb61299f565b6123c5919061429b565b90508083116123d55760006123df565b6123df81846140ae565b915061064c612416670de0b6b3a76400007f000000000000000000000000000000000000000000000000000000000000000061429b565b8390611daa565b600080600080600061242e866129d5565b915091508061244557506000958695509350505050565b6124528660a001516124fd565b61245b87612d0f565b8361246989600001516124fd565b61247391906142b2565b61247d91906142b2565b61248791906141dd565b9250505060008112156124a05750600093849350915050565b9360019350915050565b60008260001904841183021582026124c157600080fd5b5091020490565b60006001600160f81b038211156124f25760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60006001600160ff1b038211156125275760405163396ea70160e11b815260040160405180910390fd5b5090565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161257a575047612605565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156125de573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906126029190614160565b90505b60125461064c908490836124aa565b60006126296001600160a01b03841683612d73565b9050805160001415801561264e57508080602001905181019061264c91906142d2565b155b15610a5157604051635274afe760e01b81526001600160a01b03841660048201526024016111f9565b60006012548511612688578461268c565b6012545b94506000612699866122ac565b905085601260008282546126ad91906140ae565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612753576040516001600160a01b038716908390600081818185875af1925050503d8060008114612743576040519150601f19603f3d011682016040523d82523d6000602084013e612748565b606091505b5050809150506127e9565b60405163a9059cbb60e01b81526001600160a01b038781166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af11580156127c2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906127e691906142d2565b90505b80612807576040516312171d8360e31b815260040160405180910390fd5b5095945050505050565b60125484116128205783612824565b6012545b93506000612831856122ac565b9050846012600082825461284591906140ae565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016128eb576040516001600160a01b038616908390600081818185875af1925050503d80600081146128db576040519150601f19603f3d011682016040523d82523d6000602084013e6128e0565b606091505b505080915050612981565b60405163a9059cbb60e01b81526001600160a01b038681166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af115801561295a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061297e91906142d2565b90505b806105b1576040516312171d8360e31b815260040160405180910390fd5b60006129cb7f000000000000000000000000000000000000000000000000000000000000000042614213565b611bca90426140ae565b60008060006129ff6129fa856101600151866101400151611d9590919063ffffffff16565b6124fd565b612a1f6129fa866101200151876101000151612d8190919063ffffffff16565b612a2991906141dd565b9050600080612a4086600001518760200151612d96565b9150915080612a5757506000958695509350505050565b6000831315612ba75760008390506000612aa5886000015189602001518a604001518b60a001518c60e00151670de0b6b3a7640000612a9691906140ae565b8d606001518e60800151612dd5565b9350905082612abe575060009788975095505050505050565b818110612b5c576000612af8858a60400151858c60e00151670de0b6b3a7640000612ae991906140ae565b8d606001518e60800151612ee7565b9450905083158015612b0d57508860c0015183105b15612b245750600098600198509650505050505050565b83612b3a57506000988998509650505050505050565b612b43816124fd565b612b4c906142ef565b9960019950975050505050505050565b6000886020015112612b9357612b7b8860a00151856129fa91906140ae565b612b84906142ef565b98600198509650505050505050565b60a08801518851612b7b916129fa916140ae565b6000831215612d00576000612bbb846142ef565b90506000612bef8489604001518a60e00151670de0b6b3a7640000612be091906140ae565b8b606001518c60800151612faa565b9350905082612c08575060009788975095505050505050565b818110612c8d576000612c42858a60400151858c60e00151670de0b6b3a7640000612c3391906140ae565b8d606001518e60800151613056565b9450905083158015612c5757508860c0015183105b15612c6e5750600098600198509650505050505050565b83612c8457506000988998509650505050505050565b612b4c816124fd565b6000612cbf858a604001518b60e00151670de0b6b3a7640000612cb091906140ae565b8c606001518d6080015161312d565b9450905083612cd957506000988998509650505050505050565b612b4c612cf68a606001518486612cf091906140ae565b90611daa565b6129fa908361409b565b50600095600195509350505050565b6000612d426129fa836101200151670de0b6b3a7640000612d3091906140ae565b606085015161010086015191906131dc565b611f6a6129fa846101600151670de0b6b3a7640000612d6191906140ae565b606086015161014087015191906124aa565b606061064c83836000613202565b600061064c8383670de0b6b3a76400006131dc565b600080600083612da5866124fd565b612daf91906141dd565b90506000811215612dc7576000809250925050612dce565b9150600190505b9250929050565b6000806000881215612df757612dea886142ef565b612df4908761409b565b95505b600080612e048b8b612d96565b9150915080612e1b57600080935093505050612edb565b6000612e2a838b8a8a8a61329f565b90506000612e4d612e458a612e3f8a8e612d81565b906132ce565b8990896131dc565b905080821015612e67576000809550955050505050612edb565b808203670de0b6b3a76400008110612e9c57612e95612e8e670de0b6b3a76400008c611daa565b82906132ce565b9050612eb4565b612eb1612e8e670de0b6b3a76400008c613339565b90505b8b811015612ecd57600080965096505050505050612edb565b8b9003955060019450505050505b97509795505050505050565b6000806000612ef9898988888861334e565b9050612f0986612e3f898b61409b565b975087811015612f20576000809250925050612f9f565b878103612f2e8186886131dc565b9050670de0b6b3a76400008110612f5b57612f54612e8e670de0b6b3a764000089613339565b9050612f73565b612f70612e8e670de0b6b3a764000089611daa565b90505b612f7d8186613339565b9050808a1015612f9557600080935093505050612f9f565b8903925060019150505b965096945050505050565b6000806000612fbc888888888861334e565b90506000612fe7670de0b6b3a7640000612fd68888611daa565b612fe0919061409b565b8390613339565b9050670de0b6b3a764000081106130145761300d612e8e670de0b6b3a764000089613339565b905061302c565b613029612e8e670de0b6b3a764000089611daa565b90505b808810156130425760008093509350505061304c565b8703925060019150505b9550959350505050565b6000806000613068898988888861334e565b90508688101561307f576000809250925050612f9f565b968690039661308e88876132ce565b9750878110156130a5576000809250925050612f9f565b8781036130b38186886131dc565b9050670de0b6b3a764000081106130e0576130d9612e8e670de0b6b3a764000089613339565b90506130f8565b6130f5612e8e670de0b6b3a764000089611daa565b90505b6131028186613339565b90508981101561311a57600080935093505050612f9f565b9890980398600198509650505050505050565b600080600061313f888888888861329f565b90506000613163670de0b6b3a76400006131598888613339565b612416919061409b565b9050670de0b6b3a7640000811061319057613189612e8e670de0b6b3a764000089611daa565b90506131a8565b6131a5612e8e670de0b6b3a764000089613339565b90505b6131b28186611daa565b9050888110156131ca5760008093509350505061304c565b97909703976001975095505050505050565b60008260001904841183021582026131f357600080fd5b50910281810615159190040190565b6060814710156132275760405163cd78605960e01b81523060048201526024016111f9565b600080856001600160a01b03168486604051613243919061430b565b60006040518083038185875af1925050503d8060008114613280576040519150601f19603f3d011682016040523d82523d6000602084013e613285565b606091505b5091509150613295868383613373565b9695505050505050565b60006132ab85856132ce565b6132c46132bc86612e3f868b611d95565b8590856124aa565b613295919061409b565b6000816000036132e75750670de0b6b3a7640000610721565b826000036132f757506000610721565b6000613302836124fd565b90506000613317613312866124fd565b6133cf565b905081810261332e670de0b6b3a764000082614327565b9050613295816135f5565b600061064c83670de0b6b3a7640000846131dc565b600061335a85856132ce565b6132c461336b86612e3f868b612d81565b8590856131dc565b606082613388576133838261378a565b61064c565b815115801561339f57506001600160a01b0384163b155b156133c857604051639996b31560e01b81526001600160a01b03851660048201526024016111f9565b508061064c565b60008082136133f15760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906134749084901c6124fd565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361361057506000919050565b680755bf798b4a1bf1e58212613639576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061329574029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6124fd565b80511561379a5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b604051806101c0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b031681526020016000801916815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200161387e6040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b60006020828403121561389557600080fd5b5035919050565b60005b838110156138b757818101518382015260200161389f565b50506000910152565b600081518084526138d881602086016020860161389c565b601f01601f19169290920160200192915050565b60208152600061064c60208301846138c0565b6001600160a01b038116811461053857600080fd5b60006020828403121561392657600080fd5b813561064c816138ff565b801515811461053857600080fd5b60006020828403121561395157600080fd5b813561064c81613931565b60ff8116811461053857600080fd5b60008060008060008060008060006101208a8c03121561398a57600080fd5b8935985060208a0135975060408a01356139a3816138ff565b965060608a01356139b3816138ff565b955060808a01356139c381613931565b945060a08a0135935060c08a01356139da8161395c565b8093505060e08a013591506101008a013590509295985092959850929598565b60008083601f840112613a0c57600080fd5b50813567ffffffffffffffff811115613a2457600080fd5b6020830191508360208260051b8501011115612dce57600080fd5b60008060008060008060808789031215613a5857600080fd5b8635613a63816138ff565b95506020870135613a73816138ff565b9450604087013567ffffffffffffffff80821115613a9057600080fd5b613a9c8a838b016139fa565b90965094506060890135915080821115613ab557600080fd5b50613ac289828a016139fa565b979a9699509497509295939492505050565b60008060008060808587031215613aea57600080fd5b843593506020850135613afc816138ff565b92506040850135613b0c816138ff565b9396929550929360600135925050565b600080600060608486031215613b3157600080fd5b833592506020840135613b43816138ff565b91506040840135613b53816138ff565b809150509250925092565b60008060408385031215613b7157600080fd5b823591506020830135613b83816138ff565b809150509250929050565b600060208284031215613ba057600080fd5b813567ffffffffffffffff811115613bb757600080fd5b82016060818503121561064c57600080fd5b60008060008060808587031215613bdf57600080fd5b843593506020850135613bf1816138ff565b9250604085013591506060850135613c08816138ff565b939692955090935050565b815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160808301519082015261018080830151908201526101a080830151908201526101c091820151918101919091526101e00190565b60008060408385031215613cc757600080fd5b8235613cd2816138ff565b91506020830135613b8381613931565b600080600060608486031215613cf757600080fd5b833592506020840135613d09816138ff565b929592945050506040919091013590565b81516001600160a01b0316815261022081016020830151613d4660208401826001600160a01b03169052565b506040830151613d6160408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525061014080840151613dc7828501826001600160a01b03169052565b5050610160838101516001600160a01b038116848301525050610180838101516001600160a01b0381168483015250506101a08381015180518483015260208101516101c085015260408101516101e085015260608101516102008501525b505092915050565b60008060208385031215613e4157600080fd5b823567ffffffffffffffff811115613e5857600080fd5b613e64858286016139fa565b90969095509350505050565b6020808252825182820181905260009190848201906040850190845b81811015613ea857835183529284019291840191600101613e8c565b50909695505050505050565b81516001600160801b0316815261018081016020830151613ee060208401826001600160801b03169052565b506040830151613efb60408401826001600160801b03169052565b506060830151613f1660608401826001600160801b03169052565b506080830151613f2b6080840182600f0b9052565b5060a0830151613f4660a08401826001600160801b03169052565b5060c0830151613f6160c08401826001600160801b03169052565b5060e0830151613f7c60e08401826001600160801b03169052565b506101008381015115159083015261012080840151151590830152610140808401516001600160701b031690830152610160808401516001600160801b03811682850152613e26565b600080600080600060a08688031215613fdd57600080fd5b853594506020860135613fef816138ff565b93506040860135613fff816138ff565b9250606086013591506080860135614016816138ff565b809150509295509295909350565b6000806040838503121561403757600080fd5b8235614042816138ff565b91506020830135613b83816138ff565b60006020828403121561406457600080fd5b815161064c8161395c565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b8082018082111561072157610721614085565b8181038181111561072157610721614085565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b700243cb832b9323934bb32902637b7339d1607d1b81526000825161411981601185016020870161389c565b9190910160110192915050565b710243cb832b9323934bb329029b437b93a1d160751b81526000825161415381601285016020870161389c565b9190910160120192915050565b60006020828403121561417257600080fd5b5051919050565b6f242ca822a9222924ab2296a627a7239d60811b8152600082516141a481601085016020870161389c565b9190910160100192915050565b70242ca822a9222924ab2296a9a427a92a1d60791b81526000825161411981601185016020870161389c565b8181036000831280158383131683831282161715610e2657610e26614085565b634e487b7160e01b600052601260045260246000fd5b600082614222576142226141fd565b500690565b60006001820161423957614239614085565b5060010190565b60008261424f5761424f6141fd565b500490565b6000808335601e1984360301811261426b57600080fd5b83018035915067ffffffffffffffff82111561428657600080fd5b602001915036819003821315612dce57600080fd5b808202811582820484141761072157610721614085565b8082018281126000831280158216821582161715613e2657613e26614085565b6000602082840312156142e457600080fd5b815161064c81613931565b6000600160ff1b820161430457614304614085565b5060000390565b6000825161431d81846020870161389c565b9190910192915050565b600082614336576143366141fd565b600160ff1b82146000198414161561435057614350614085565b50059056fea2646970667358221220c7a831804a7d67246b5182d730c4c80ba2a0d9089de4288e1f6c9bd53581879f64736f6c634300081400336102406040523480156200001257600080fd5b5060405162004d1238038062004d128339810160408190526200003591620001e1565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c05260c0808501516101e0526101008086015190915260e0808601519052610120808601519091529184018051519092528151015161014090815281516040908101516101609081529251606090810151610180908152918601518516610200528501516102205290840151600a80546001600160a01b03199081169286169290921790559184015160088054841691851691909117905590920151600980549093169116179055620002d4565b6040516101c081016001600160401b03811182821017156200014957634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200016757600080fd5b919050565b6000608082840312156200017f57600080fd5b604051608081016001600160401b0381118282101715620001b057634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60006102208284031215620001f557600080fd5b620001ff62000117565b6200020a836200014f565b81526200021a602084016200014f565b60208201526200022d604084016200014f565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152506101406200028c8185016200014f565b90820152610160620002a08482016200014f565b90820152610180620002b48482016200014f565b908201526101a0620002c9858583016200016c565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516148c66200044c6000396000505060005050600081816101a7015261294b015260008181611189015281816117bb0152818161181e015281816125310152818161256d015281816127d60152612925015260008181610c4801528181610c9501528181610e5e01526128ff0152600061157e0152600081816116a401528181611e220152611e9b0152600081816106a101528181610ded015281816116780152611e6f015260008181610ce70152611de8015260008181610c2601528181610cb601528181610e7f01526129710152600081816105dc01528181610d7301528181611c8501526133ed0152600081816104820152818161050f0152610574015260005050600081816113b3015281816113fc015281816120ac015281816120f5015281816121d00152818161227c01528181612368015261241401526148c66000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063074a6de91461003b57806329b23fc114610068575b600080fd5b61004e610049366004614553565b610089565b604080519283526020830191909152015b60405180910390f35b61007b6100763660046145a3565b6100a4565b60405190815260200161005f565b6000806100978585856100bd565b915091505b935093915050565b60006100b285858585610192565b90505b949350505050565b6000806100c8610400565b6100d18361042a565b60006100db610463565b90506100f06100e861047b565b8260046104b1565b506100fe3387838888610946565b909350915061011060208501856145fd565b6001600160a01b0316337f4ce1e73a001c994d4d884cd1e382579f9c1e81eccf26e70ece8caa1b60a8c2cf8461014787868a610a89565b61015288878b610ab8565b61016260408b0160208c01614634565b604080519485526020850193909352918301521515606082015260800160405180910390a35061009c6001600055565b600061019c610400565b6101a58261042a565b7f00000000000000000000000000000000000000000000000000000000000000008410156101e65760405163211ddda360e11b815260040160405180910390fd5b60006101f0610463565b90508542101561020b576102056100e861047b565b50610219565b610217868260046104b1565b505b61022e610227600288610ae0565b3387610b15565b60008060008060006102418a878d610bee565b945094509450945094508a4210156102e85780600b60008282546102659190614667565b9091555061027890508a8685858f610ed8565b60006102838c611057565b90506102a16102918c6110a1565b61029b908361467a565b826110cf565b6102aa87611182565b6102b6576102b66111e2565b60006102c1886111fb565b9050806102e157604051638bdf918d60e01b815260040160405180910390fd5b50506102ff565b6102f28487611208565b93506102fd866111fb565b505b600061030c85888b6112e9565b90508981101561032f5760405163c972651760e01b815260040160405180910390fd5b8a8c85848a8d610340600286610ae0565b61034d60208301836145fd565b6001600160a01b0316337fcb02fec44af7356703a283b87ccec63f4ea688efc67fee9cdc1834a93260c730886103848c8888610a89565b61038f8d8989610ab8565b61039f6040890160208a01614634565b6103b38a6103ad8d8f614667565b90611383565b6040805195865260208601949094529284019190915215156060830152608082015260a081018b905260c00160405180910390a450949b5050505050505050505050506100b56001600055565b60026000540361042357604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b600061043960208301836145fd565b6001600160a01b0316036104605760405163f0dd15fd60e01b815260040160405180910390fd5b50565b6000610476670de0b6b3a7640000611398565b905090565b60006104a77f0000000000000000000000000000000000000000000000000000000000000000426146b0565b61047690426146c4565b600083815260076020526040812080546001600160801b03161515806104d657504285115b156104ec57546001600160801b0316905061093f565b6000806104f761047b565b9050808703610508578591506105a2565b60006105347f000000000000000000000000000000000000000000000000000000000000000089614667565b90505b6000818152600760205260409020546001600160801b03169250818114801561055e575082155b15610567578692505b826000036105a0576105997f000000000000000000000000000000000000000000000000000000000000000082614667565b9050610537565b505b6105ab82611493565b83546001600160801b0319166001600160801b03919091161783556105cf866114bd565b50600090506007816106017f00000000000000000000000000000000000000000000000000000000000000008b6146c4565b815260208101919091526040016000908120546001600160801b0316915061062a60028a610ae0565b6000818152600e60205260408120549192508a8a8315610770576001925060008061065986898c866000611661565b9150915080600b600082825461066f9190614667565b9091555061068b905086600084610685816110a1565b88610ed8565b6106958183614667565b91506106c586838a8d877f0000000000000000000000000000000000000000000000000000000000000000611730565b91506106d96106d48385611383565b61177a565b600580546002906106fa9084906201000090046001600160701b03166146d7565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061072782611493565b60058054601090610749908490600160801b90046001600160801b03166146f7565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b600061077d600184610ae0565b6000818152600e6020526040902054909150801561088c57600194506000806107aa838b8e886001611661565b9150915080600b60008282546107c09190614667565b909155506107dc9050836000846107d6816110a1565b8a6117a4565b6107e681836146c4565b91506107f56106d48387611383565b600580546002906108169084906201000090046001600160701b03166146d7565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061084382611493565b60058054601090610865908490600160801b90046001600160801b03166146f7565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b84156108c4576108b861089e876110a1565b6108a7836110a1565b6108b1919061467a565b60006110cf565b6108c28e8e611995565b505b60006108cf8f611b20565b5090508f7fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab78c868a8686604051610928959493929190948552602085019390935260408401919091526060830152608082015260a00190565b60405180910390a250989a50505050505050505050505b9392505050565b600080610952856111fb565b505060065485906001600160801b03168082111561097757806001600160801b031691505b8160000361098c576000809250925050610a7f565b61099b600360f81b8984610b15565b6006546000906109c19084906001600160801b03600160801b9091048116908516611c10565b90506109cc83611493565b6109d69083614717565b600680546001600160801b0319166001600160801b03929092169190911790556109ff81611493565b60068054601090610a21908490600160801b90046001600160801b0316614717565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610a508188876112e9565b9350610a5c8684611c2e565b841015610a7c5760405163c972651760e01b815260040160405180910390fd5b50505b9550959350505050565b6000610a9b6040830160208401614634565b15610aa757508261093f565b610ab18484611383565b905061093f565b6000610aca6040830160208401614634565b15610ad957610ab18484611c43565b508261093f565b60006001600160f81b03821115610b0a5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600d602090815260408083206001600160a01b0386168452909152902054811115610b5857604051631e9acf1760e31b815260040160405180910390fd5b6000838152600d602090815260408083206001600160a01b0386168452825280832080548590039055858352600e90915281208054839290610b9b9084906146c4565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b6000806000806000806000610c0288611c58565b9050610c6c610c0f611ca9565b600154600160801b90046001600160801b03168c847f00000000000000000000000000000000000000000000000000000000000000008e7f0000000000000000000000000000000000000000000000000000000000000000611cca565b909850955091506000610cda610c80611ca9565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611d3a565b9050610d108389610d0b847f0000000000000000000000000000000000000000000000000000000000000000611d51565b611d81565b15610d1d57610d1d6111e2565b8a8a60008080610d2f85888887611dc3565b9b5091945092509050610d4281846146c4565b610d4c9089614667565b9750610d588284614667565b610d62908c614667565b9a50505050505050506000600760007f00000000000000000000000000000000000000000000000000000000000000008a610d9d91906146c4565b815260208101919091526040016000908120546001600160801b03169150428911610ddf576000898152600760205260409020546001600160801b0316610de1565b895b9050610e118b8784848e7f0000000000000000000000000000000000000000000000000000000000000000611730565b9650610e1d84876146c4565b9550670de0b6b3a7640000610ea384610e34611ca9565b610e3e9190614667565b600154610e5c908c90600160801b90046001600160801b03166146c4565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611d3a565b1115610eb157610eb16111e2565b610ec18787858786866000611ed7565b9b9f939e50919c50909a5090975050505050505050565b600354600160801b90046001600160801b0316610f26610f2182610f04670de0b6b3a764000086614737565b600454600160801b90046001600160801b031691908a6000611f76565b611493565b600480546001600160801b03928316600160801b029216919091179055610f4c86611493565b610f569082614717565b600380546001600160801b03928316600160801b029216919091179055610f7c84611493565b60018054600090610f979084906001600160801b03166146f7565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610fc48361203f565b60038054600090610fd9908490600f0b61474e565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061100985611493565b6001805460109061102b908490600160801b90046001600160801b0316614717565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600061107f600e600061106b600286610ae0565b8152602001908152602001600020546110a1565b611091600e600061106b600187610ae0565b61109b919061467a565b92915050565b60006001600160ff1b038211156110cb5760405163396ea70160e11b815260040160405180910390fd5b5090565b60006110f86110de848361207b565b6110e984600061207b565b6110f3919061467a565b61203f565b9050600081600f0b131561114d57600280548291906000906111249084906001600160801b03166146f7565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b121561117d576111628161477b565b600280546000906111249084906001600160801b0316614717565b505050565b60006111ae7f000000000000000000000000000000000000000000000000000000000000000083611c2e565b6002546111c491906001600160801b0316614667565b6001546111da906001600160801b031684611383565b101592915050565b60405163bb55fd2760e01b815260040160405180910390fd5b600061109b826004611995565b6000806000611216846114bd565b909250905060006112278686611383565b90508183111561123f5761123c868385611c10565b95505b82811015611251578083039250611256565b600092505b61125f8361177a565b600580546001600160701b039290921662010000026fffffffffffffffffffffffffffff00001990921691909117908190556001600160801b03600160801b90910416808710156112b2578690036112b6565b5060005b6112bf81611493565b600580546001600160801b03928316600160801b0292169190911790555085935050505092915050565b6000806112f68585611383565b905061130181612091565b94508460000361131557600091505061093f565b6113256040840160208501614634565b156113545761134d8561133b60208601866145fd565b61134860408701876147a1565b61217a565b915061137b565b6113778561136560208601866145fd565b61137260408701876147a1565b612314565b8491505b509392505050565b600061093f8383670de0b6b3a7640000611c10565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016113e7575047611472565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa15801561144b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061146f91906147e8565b90505b60125460000361148357600061093f565b60125461093f9084908390611c10565b60006001600160801b038211156110cb57604051630f0af95160e11b815260040160405180910390fd5b60055460009081906114e0908490600160801b90046001600160801b0316611383565b6005546201000090046001600160701b0316925090508181111561165c57600061150a83836146c4565b9050611519610f2182866124aa565b6005805460109061153b908490600160801b90046001600160801b0316614717565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006115748583611c4390919063ffffffff16565b905060006115a2827f0000000000000000000000000000000000000000000000000000000000000000611383565b905080600b60008282546115b69190614667565b909155506115c6905081836146c4565b91506115d182611493565b600180546000906115ec9084906001600160801b03166146f7565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611619826124bf565b6003805460009061162e908490600f0b61474e565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b60008061166e8785611c43565b9150600061169c837f0000000000000000000000000000000000000000000000000000000000000000611383565b90506116c8817f0000000000000000000000000000000000000000000000000000000000000000611383565b915083156116eb576116da82826146c4565b6116e490846146c4565b9250611702565b6116f582826146c4565b6116ff9084614667565b92505b8686101561172557611715838789611c10565b9250611722828789611c10565b91505b509550959350505050565b600080611748846117428a888a611c10565b90611c43565b9050611755888486611c10565b61175f9082614667565b90508681111561176f5786810391505b509695505050505050565b60006001600160701b038211156110cb5760405163086b151760e11b815260040160405180910390fd5b6001546001600160801b0316838110806117e657507f00000000000000000000000000000000000000000000000000000000000000006117e485836146c4565b105b156117f3576117f36111e2565b6003549084900390600f0b611808848261467a565b905083611814866110a1565b13801561184957507f000000000000000000000000000000000000000000000000000000000000000061184783836124e9565b105b15611856576118566111e2565b600254600160801b90046001600160801b0316611898610f2182611882670de0b6b3a764000088614737565b6004546001600160801b031691908c6000611f76565b600480546001600160801b0319166001600160801b03929092169190911790556118c288826146c4565b90506118cd81611493565b600280546001600160801b03928316600160801b0292169190911790556118f383611493565b600180546001600160801b0319166001600160801b039290921691909117905561191c8261203f565b600380546001600160801b0319166001600160801b039290921691909117905561194587611493565b60018054601090611967908490600160801b90046001600160801b03166146f7565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e954909182916119e0916001600160801b0316906146c4565b9050806000036119f457600191505061109b565b60006119ff8561250f565b905080600003611a145760019250505061109b565b600080611a228385896125b1565b9150915080611a3857600094505050505061109b565b600080611a4584896126b7565b91509150611a63611a55826110a1565b611a5e90614801565b6127a9565b925082611a79576000965050505050505061109b565b611a8282611493565b60068054600090611a9d9084906001600160801b03166146f7565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611aca81611493565b60068054601090611aec908490600160801b90046001600160801b03166146f7565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b600080600080611b37611b32866128b6565b6129f0565b9150915080611b4d575060009485945092505050565b6000808611611b5d576000611b67565b611b678387611383565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b0390921691611bd29190614667565b611bdc91906146c4565b905080600003611bf55750600096879650945050505050565b6000611c018383611c43565b98600198509650505050505050565b6000826000190484118302158202611c2757600080fd5b5091020490565b600061093f8383670de0b6b3a7640000612a7d565b600061093f83670de0b6b3a764000084611c10565b600080611c6361047b565b9050808311611c73576000611c7d565b611c7d81846146c4565b915061093f827f0000000000000000000000000000000000000000000000000000000000000000611c43565b600154600354600091610476916001600160801b0390911690600f0b6124e9565b60008080611ceb611ce388670de0b6b3a76400006146c4565b899087612a7d565b90508615611d2d57611cfd8888611c2e565b9150611d1e8a8a84611d178a670de0b6b3a76400006146c4565b8989612aa3565b9250611d2a8382614667565b90505b9750975097945050505050565b60006100b282611d4b858888611c10565b90612ac6565b6000611d6f611d6884670de0b6b3a76400006146c4565b8390611c2e565b61093f90670de0b6b3a76400006146c4565b600080611db885611d90611ca9565b611d9a9190614667565b600154610e5c908790600160801b90046001600160801b03166146c4565b909210949350505050565b6000808080611e1a8786611e138b611e0d611de68c670de0b6b3a76400006146c4565b7f000000000000000000000000000000000000000000000000000000000000000090611c2e565b90611c2e565b9190612a7d565b9350611e46847f0000000000000000000000000000000000000000000000000000000000000000611383565b91506000611e67611e5f89670de0b6b3a76400006146c4565b8a9088612a7d565b9050611e93817f0000000000000000000000000000000000000000000000000000000000000000611c2e565b9350611ebf847f0000000000000000000000000000000000000000000000000000000000000000611383565b611ec99084614667565b915050945094509450949050565b60008060008060008088881015611f46578615611efc57611ef98d898b611c10565b9c505b611f078c898b611c10565b9b50611f128b6110a1565b611f1b8d6110a1565b611f25919061467a565b9050611f328b898b611c10565b9a50611f3f8a898b611c10565b9950611f65565b611f4f8b6110a1565b611f588d6110a1565b611f62919061467a565b90505b9b9c9a9b999a975050505050505050565b600082600003611f87575084612036565b8115611ff957611fb8611f9a8487614667565b611fa48587611383565b611fae888a611383565b6117429190614667565b90506000611fc68588612b3b565b90506000611fd48689612b4a565b905081831015611fe657819250611ff2565b80831115611ff2578092505b5050612036565b82850361200857506000612036565b61203361201584876146c4565b61201f8587611c2e565b612029888a611383565b61174291906146c4565b90505b95945050505050565b600060016001607f1b031982128061205d575060016001607f1b0382135b156110cb5760405163a5353be560e01b815260040160405180910390fd5b600081831361208a578161093f565b5090919050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016120e057504761216b565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015612144573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061216891906147e8565b90505b60125461093f90849083611c10565b6000601254851161218b578461218f565b6012545b9450600061219c86611398565b905085601260008282546121b091906146c4565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612256576040516001600160a01b038716908390600081818185875af1925050503d8060008114612246576040519150601f19603f3d011682016040523d82523d6000602084013e61224b565b606091505b5050809150506122ec565b60405163a9059cbb60e01b81526001600160a01b038781166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af11580156122c5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122e9919061481d565b90505b8061230a576040516312171d8360e31b815260040160405180910390fd5b5095945050505050565b60125484116123235783612327565b6012545b9350600061233485611398565b9050846012600082825461234891906146c4565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016123ee576040516001600160a01b038616908390600081818185875af1925050503d80600081146123de576040519150601f19603f3d011682016040523d82523d6000602084013e6123e3565b606091505b505080915050612484565b60405163a9059cbb60e01b81526001600160a01b038681166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af115801561245d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612481919061481d565b90505b806124a2576040516312171d8360e31b815260040160405180910390fd5b505050505050565b600061093f83670de0b6b3a764000084612a7d565b600060016001607f1b038211156110cb5760405163a5353be560e01b815260040160405180910390fd5b6000806124f68484612b59565b909250905080612508576125086111e2565b5092915050565b600254600090819061252a906001600160801b0316846124aa565b90506125567f000000000000000000000000000000000000000000000000000000000000000082614667565b6001546001600160801b031611156125ab576001547f0000000000000000000000000000000000000000000000000000000000000000906125a19083906001600160801b03166146c4565b61093f91906146c4565b50919050565b6125b961448e565b6000806125c5846128b6565b905060006125d2826129f0565b93509050826125e757506000915061009c9050565b600061260e61260984610160015185610140015161138390919063ffffffff16565b6110a1565b61262e612609856101200151866101000151611c2e90919063ffffffff16565b612638919061467a565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6000806000806126cf8660c001518760e00151612b59565b91509150806126e6576000809350935050506127a2565b60006126f28784612b95565b92509050811580612701575080155b1561271557600080945094505050506127a2565b60006127218883612ca4565b90508060000361273b5760008095509550505050506127a2565b8760600151811161275257945092506127a2915050565b50606087015160006127668986858b612d75565b905080600003612781576000809650965050505050506127a2565b828110612799576000809650965050505050506127a2565b90955093505050505b9250929050565b6001546003546000916001600160801b0380821692600f0b91600160801b900416838080806127fb8787877f00000000000000000000000000000000000000000000000000000000000000008d61328a565b9350935093509350806128175750600098975050505050505050565b8684146128485761282784611493565b600180546001600160801b0319166001600160801b03929092169190911790555b858314612879576128588361203f565b600380546001600160801b0319166001600160801b03929092169190911790555b8482146128a75761288982611493565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b6128be6144e0565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e083015260025404821661010082015260045490916101208301916129b691166133a2565b81526003546001600160801b03600160801b91829004811660208401526004546040909301926129e8929004166133a2565b905292915050565b6000806000806000612a0186613418565b9150915080612a1857506000958695509350505050565b612a258660a001516110a1565b612a2e87613738565b83612a3c89600001516110a1565b612a46919061483a565b612a50919061483a565b612a5a919061467a565b925050506000811215612a735750600093849350915050565b9360019350915050565b6000826000190484118302158202612a9457600080fd5b50910281810615159190040190565b600080612ab488888888888861379c565b90925090508061176f5761176f6111e2565b600081600003612adf5750670de0b6b3a764000061109b565b82600003612aef5750600061109b565b6000612afa836110a1565b90506000612b0f612b0a866110a1565b61387d565b9050818102612b26670de0b6b3a764000082614862565b9050612b3181613aa3565b9695505050505050565b60008183116125ab578261093f565b600081831161208a578161093f565b600080600083612b68866110a1565b612b72919061467a565b90506000811215612b8a5760008092509250506127a2565b946001945092505050565b60008060008460a0015112612bb2575050608082015160016127a2565b60008460a00151612bc290614801565b90506000612bfe85876101000151886000015160e00151670de0b6b3a7640000612bec91906146c4565b89516060810151608090910151613c38565b93509050821580612c0d575080155b15612c20576000809350935050506127a2565b6000612c2c83836124aa565b9050670de0b6b3a76400008111612c685780670de0b6b3a7640000039450612c618760c001518661138390919063ffffffff16565b9450612c77565b600080945094505050506127a2565b8660800151851115612c965786608001516001945094505050506127a2565b506001925050509250929050565b600080612cda8460c001518560e00151866101000151876000015160a00151612ccc886110a1565b612cd590614801565b61328a565b87516040810192909252602082019290925291909152905080612d0157600091505061109b565b6000612d1085600001516129f0565b9250905081612d245760009250505061109b565b84602001518110612d3a5760009250505061109b565b600085606001518660400151612d509190614667565b9050612d6b82876020015183611c109092919063ffffffff16565b612b3190826146c4565b60008085606001518660400151612d8c9190614667565b60208701516060880151919250600091612da69184611c10565b90508660a00151600003612dbd5791506100b59050565b60008080896004881015612dd057600497505b60005b8881101561312c57612de5868b612b3b565b95506000612e0e8360c001518460e00151856101000151866000015160a00151612ccc8c6110a1565b86516040810192909252602082019290925291909152905080612e3c576000985050505050505050506100b5565b6000612e4b8e600001516129f0565b9250905081612e6657600099505050505050505050506100b5565b612e7184828b613ce1565b15612e87578799505050505050505050506100b5565b60008460a001511315612ff057835180516020820151604083015160a084015160e090940151600094612edb94939291612ec990670de0b6b3a76400006146c4565b8a516060810151608090910151613d4d565b9350905082612ef75760009a50505050505050505050506100b5565b808560a0015110612fee57612f0b85613e52565b909950925082612f285760009a50505050505050505050506100b5565b612f4d8560c001518660e00151876101000151886000015160a00151612ccc8e6110a1565b88516040810192909252602082019290925291909152925082612f7d5760009a50505050505050505050506100b5565b845180516020820151604083015160a084015160e090940151612fad9490612ec990670de0b6b3a76400006146c4565b9350905082612fc95760009a50505050505050505050506100b5565b8e60a001518111612fe657889a50505050505050505050506100b5565b505050612dd3565b505b6000613001858f8760a00151613f28565b9350905082158061301a5750670de0b6b3a76400008110155b156130325760009a50505050505050505050506100b5565b80670de0b6b3a7640000039050600061305f61260987604001518860200151611c2e90919063ffffffff16565b61306c612609858e611383565b613076919061467a565b9050881580613094575061308989614283565b61309282614283565b125b156130a3578098508997508296505b60008113156130cb576130ba8b6117428385611c43565b6130c4908b614667565b995061311d565b60008112156131145760006130e58c611742858186614801565b90508a8110156130f957808b039a5061310e565b60009c505050505050505050505050506100b5565b5061311d565b5050505061312c565b84600101945050505050612dd3565b5060006131548260c001518360e00151846101000151856000015160a00151612ccc8b6110a1565b855160408101929092526020820192909252919091529050806131815760009750505050505050506100b5565b6000613190836000015161429b565b905060006131b261260985604001518660200151611c2e90919063ffffffff16565b6131bf612609848c611383565b6131c9919061467a565b90506131d487614283565b6131dd82614283565b12156131ea578795508194505b613211613205655af3107a4000670de0b6b3a76400006146c4565b6020860151908b612a7d565b6040850151613221908790611c43565b1080613261575061324f613243655af3107a4000670de0b6b3a7640000614667565b6020860151908b611c10565b604085015161325f9087906124aa565b115b1561327857600099505050505050505050506100b5565b50939c9b505050505050505050505050565b600080600080846000036132a957508792508691508590506001613396565b6000856132b58b6110a1565b6132bf919061483a565b90506132ca876110a1565b8112156132e557600080600080945094509450945050613396565b80945060008912613305576132fe612609868b8d611c10565b9350613328565b61331c6126096133148b614801565b87908d612a7d565b61332590614801565b93505b6000806133358c8c612b59565b9150915080613354576000806000809650965096509650505050613396565b60006133608888612b59565b925090508161338057600080600080975097509750975050505050613396565b61338b8b8285611c10565b955060019450505050505b95509550955095915050565b600080670de0b6b3a76400006133b661047b565b6133c09190614737565b90508083116133d05760006133da565b6133da81846146c4565b915061093f613411670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000614737565b8390611c43565b600080600061343d61260985610160015186610140015161138390919063ffffffff16565b61345d612609866101200151876101000151611c2e90919063ffffffff16565b613467919061467a565b905060008061347e86600001518760200151612b59565b915091508061349557506000958695509350505050565b60008313156135d657600083905060006134e3886000015189602001518a604001518b60a001518c60e00151670de0b6b3a76400006134d491906146c4565b8d606001518e60800151613d4d565b93509050826134fc575060009788975095505050505050565b81811061359a576000613536858a60400151858c60e00151670de0b6b3a764000061352791906146c4565b8d606001518e608001516142cb565b945090508315801561354b57508860c0015183105b156135625750600098600198509650505050505050565b8361357857506000988998509650505050505050565b613581816110a1565b61358a90614801565b9960019950975050505050505050565b60008860200151126135c2576135b98860a001518561260991906146c4565b611c0190614801565b60a088015188516135b991612609916146c4565b60008312156137295760006135ea84614801565b9050600061361e8489604001518a60e00151670de0b6b3a764000061360f91906146c4565b8b606001518c60800151613c38565b9350905082613637575060009788975095505050505050565b8181106136bc576000613671858a60400151858c60e00151670de0b6b3a764000061366291906146c4565b8d606001518e6080015161379c565b945090508315801561368657508860c0015183105b1561369d5750600098600198509650505050505050565b836136b357506000988998509650505050505050565b61358a816110a1565b60006136ee858a604001518b60e00151670de0b6b3a76400006136df91906146c4565b8c606001518d6080015161438b565b945090508361370857506000988998509650505050505050565b61358a61371f8a60600151848661174291906146c4565b6126099083614667565b50600095600195509350505050565b600061376b612609836101200151670de0b6b3a764000061375991906146c4565b60608501516101008601519190612a7d565b611091612609846101600151670de0b6b3a764000061378a91906146c4565b60608601516101408701519190611c10565b60008060006137ae898988888861443a565b9050868810156137c5576000809250925050613872565b96869003966137d48887612ac6565b9750878110156137eb576000809250925050613872565b8781036137f9818688612a7d565b9050670de0b6b3a7640000811061382d5761382661381f670de0b6b3a7640000896124aa565b8290612ac6565b9050613845565b61384261381f670de0b6b3a764000089611c43565b90505b61384f81866124aa565b90508981101561386757600080935093505050613872565b899003925060019150505b965096945050505050565b600080821361389f5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906139229084901c6110a1565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e198213613abe57506000919050565b680755bf798b4a1bf1e58212613ae7576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190612b3174029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6110a1565b6000806000613c4a888888888861443a565b90506000613c75670de0b6b3a7640000613c648888611c43565b613c6e9190614667565b83906124aa565b9050670de0b6b3a76400008110613ca257613c9b61381f670de0b6b3a7640000896124aa565b9050613cba565b613cb761381f670de0b6b3a764000089611c43565b90505b80881015613cd057600080935093505050610a7f565b909603976001975095505050505050565b6020830151600090613cf390846124aa565b6040850151613d03908490611c43565b101580156100b557506020840151613d339084613d2c633b9aca00670de0b6b3a7640000614667565b9190611c10565b6040850151613d439084906124aa565b1115949350505050565b6000806000881215613d6f57613d6288614801565b613d6c9087614667565b95505b600080613d7c8b8b612b59565b9150915080613d9357600080935093505050613e46565b6000613da2838b8a8a8a614469565b90506000613dbf613db78a611d4b8a8e611c2e565b899089612a7d565b905080821015613dd9576000809550955050505050613e46565b808203670de0b6b3a76400008110613e0757613e0061381f670de0b6b3a76400008c611c43565b9050613e1f565b613e1c61381f670de0b6b3a76400008c6124aa565b90505b8b811015613e3857600080965096505050505050613e46565b8b9003955060019450505050505b97509795505050505050565b60008060008360e0015113613e6c57506000928392509050565b6000613e7b8460000151613738565b90506000613ea7856040015186606001518760400151613e9b9190614667565b60208801519190612a7d565b905060008212613ece5780821015613ec157819003613ee4565b5060009485945092505050565b613ed782614801565b613ee19082614667565b90505b60e085015160c0860151613ef9918390612a7d565b9050808560c001511015613f14575060009485945092505050565b808560c00151036001935093505050915091565b6000806000808412613f4c57855160400151613f45908590614667565b9050613f87565b6000613f5785614801565b875160400151909150811015613f77578651604001518190039150613f85565b60008093509350505061009c565b505b855180516020909101516000918291613fa09190612b59565b9150915080613fb8576000809450945050505061009c565b875160e0810151604090910151600091613fed91613fe191613fda9190612ac6565b8a90611383565b6101008b0151906124aa565b895160e08101516080909101516140189161400c91611d4b9088611383565b8b5160600151906124aa565b6140229190614667565b9050600061405a61404e6140478c6000015160e0015188612ac690919063ffffffff16565b8b90611c2e565b6101008c015190611c43565b9050808210156140755760008096509650505050505061009c565b808203915060006140b7858c60000151604001518d6000015160e00151670de0b6b3a76400006140a591906146c4565b8e51606081015160809091015161443a565b905060006140e18c6000015160e00151670de0b6b3a76400006140da91906146c4565b8890612ac6565b9050808210156140fe57600080985098505050505050505061009c565b8b5160808101516060909101519183039161411a918391612a7d565b9050670de0b6b3a7640000811061415e578b5160e001516141579061381f9061414b90670de0b6b3a76400006146c4565b8e5160e00151906124aa565b905061418d565b8b5160e0015161418a9061381f9061417e90670de0b6b3a76400006146c4565b8e5160e0015190611c43565b90505b8b51606001516141a09085908390612a7d565b935083670de0b6b3a764000011156141c45783670de0b6b3a76400000393506141d8565b60006001985098505050505050505061009c565b60008c60e001511261423b5760c08c015160e08d01516141f7916124aa565b9250670de0b6b3a764000083111561421c57600080985098505050505050505061009c565b670de0b6b3a764000092909203916142348484611383565b9350614270565b61426d6142548d60c001518e60e0015161174290614801565b61426690670de0b6b3a7640000614667565b8590611383565b93505b50919a60019a5098505050505050505050565b6000808212614292578161109b565b61109b82614801565b60008060006142a9846129f0565b915091508061250857604051635516328b60e11b815260040160405180910390fd5b60008060006142dd898988888861443a565b90506142ed86611d4b898b614667565b975087811015614304576000809250925050613872565b878103614312818688612a7d565b9050670de0b6b3a7640000811061433f5761433861381f670de0b6b3a7640000896124aa565b9050614357565b61435461381f670de0b6b3a764000089611c43565b90505b61436181866124aa565b9050808a101561437957600080935093505050613872565b90980398600198509650505050505050565b600080600061439d8888888888614469565b905060006143c1670de0b6b3a76400006143b788886124aa565b6134119190614667565b9050670de0b6b3a764000081106143ee576143e761381f670de0b6b3a764000089611c43565b9050614406565b61440361381f670de0b6b3a7640000896124aa565b90505b6144108186611c43565b90508881101561442857600080935093505050610a7f565b97909703976001975095505050505050565b60006144468585612ac6565b61445f61445786611d4b868b611c2e565b859085612a7d565b6120339190614667565b60006144758585612ac6565b61445f61448686611d4b868b611383565b859085611c10565b6040518061012001604052806144a26144e0565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000606082840312156125ab57600080fd5b60008060006060848603121561456857600080fd5b8335925060208401359150604084013567ffffffffffffffff81111561458d57600080fd5b61459986828701614541565b9150509250925092565b600080600080608085870312156145b957600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff8111156145e557600080fd5b6145f187828801614541565b91505092959194509250565b60006020828403121561460f57600080fd5b81356001600160a01b038116811461093f57600080fd5b801515811461046057600080fd5b60006020828403121561464657600080fd5b813561093f81614626565b634e487b7160e01b600052601160045260246000fd5b8082018082111561109b5761109b614651565b818103600083128015838313168383128216171561250857612508614651565b634e487b7160e01b600052601260045260246000fd5b6000826146bf576146bf61469a565b500690565b8181038181111561109b5761109b614651565b6001600160701b0381811683821601908082111561250857612508614651565b6001600160801b0381811683821601908082111561250857612508614651565b6001600160801b0382811682821603908082111561250857612508614651565b808202811582820484141761109b5761109b614651565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561109b5761109b614651565b600081600f0b60016001607f1b0319810361479857614798614651565b60000392915050565b6000808335601e198436030181126147b857600080fd5b83018035915067ffffffffffffffff8211156147d357600080fd5b6020019150368190038213156127a257600080fd5b6000602082840312156147fa57600080fd5b5051919050565b6000600160ff1b820161481657614816614651565b5060000390565b60006020828403121561482f57600080fd5b815161093f81614626565b808201828112600083128015821682158216171561485a5761485a614651565b505092915050565b6000826148715761487161469a565b600160ff1b82146000198414161561488b5761488b614651565b50059056fea264697066735822122062f66b9952fd3423d21bf25ea1fd54f6019df871aeb6e24ccc808579c39b23ae64736f6c634300081400336102406040523480156200001257600080fd5b5060405162004c2238038062004c228339810160408190526200003591620001e1565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c05260c0808501516101e0526101008086015190915260e0808601519052610120808601519091529184018051519092528151015161014090815281516040908101516101609081529251606090810151610180908152918601518516610200528501516102205290840151600a80546001600160a01b03199081169286169290921790559184015160088054841691851691909117905590920151600980549093169116179055620002d4565b6040516101c081016001600160401b03811182821017156200014957634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200016757600080fd5b919050565b6000608082840312156200017f57600080fd5b604051608081016001600160401b0381118282101715620001b057634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60006102208284031215620001f557600080fd5b620001ff62000117565b6200020a836200014f565b81526200021a602084016200014f565b60208201526200022d604084016200014f565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152506101406200028c8185016200014f565b90820152610160620002a08482016200014f565b90820152610180620002b48482016200014f565b908201526101a0620002c9858583016200016c565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516147f36200042f60003960005050600050506000818160d3015281816102470152611c5e015260008181610fde0152818161104101528181611c38015281816126250152818161266101526128ca015260008181610e4801528181610e980152611c120152600061165601526000818161177c01528181611efd0152611f76015260008181610710015281816117500152611f4a01526000611ec3015260008181610e2601528181610eb90152611c8401526000818161064b01528181610f4101528181611dd20152612a1b0152600081816104f10152818161057e01526105e30152600050506000818161148b015281816114d4015281816121c60152818161220f015281816122ea0152818161239601528181612482015261252e01526147f36000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063cbc134341461003b578063ded0623114610068575b600080fd5b61004e610049366004614480565b610089565b604080519283526020830191909152015b60405180910390f35b61007b6100763660046144d0565b6100a4565b60405190815260200161005f565b6000806100978585856100bd565b915091505b935093915050565b60006100b285858585610232565b90505b949350505050565b6000806100c861046f565b6100d183610499565b7f00000000000000000000000000000000000000000000000000000000000000008510156101125760405163211ddda360e11b815260040160405180910390fd5b600061011c6104d2565b90506101316101296104ea565b826004610520565b5061013e600033886109b5565b610159600360f81b610153602087018761452a565b88610a8f565b600061017461016b602087018761452a565b88848989610b2f565b90945090506101838188614569565b9250600061019083610c72565b5090506101a0602087018761452a565b6001600160a01b0316337f56e07298e87dce53d3298b9775b947b87b39b2dde51df86371f0540885da83c98a6101d789888c610d62565b6101e28a898d610d91565b6101f260408d0160208e0161458a565b60408051948552602085019390935291830152151560608201526080810188905260a0810185905260c00160405180910390a350505061009c6001600055565b600061023c61046f565b61024582610499565b7f00000000000000000000000000000000000000000000000000000000000000008410156102865760405163211ddda360e11b815260040160405180910390fd5b60006102906104d2565b9050854210156102ab576102a56101296104ea565b506102b9565b6102b786826004610520565b505b6102ce6102c7600188610db9565b33876109b5565b60008060008060006102e18a878d610dee565b9450945094509450945060008b90508b4210156103785781600b600082825461030a91906145a7565b9091555061031d90508b87868685610fc7565b6000610328826111bd565b90506103466103368d611207565b61034090836145ba565b82611235565b6000610351896112e8565b90508061037157604051638bdf918d60e01b815260040160405180910390fd5b505061038f565b61038285886112f5565b945061038d876112e8565b505b600061039c86898c6113d6565b90508a8110156103bf5760405163c972651760e01b815260040160405180910390fd5b8b888b6103cd600186610db9565b6103da602083018361452a565b6001600160a01b0316337fc0e1704f2ff88686bdc2a73d31e0dc4e054eddbdc3564af7a148229cf857b80288610411898888610d62565b61041c8a8989610d91565b61042c6040890160208a0161458a565b60408051948552602085019390935291830152151560608201526080810188905260a00160405180910390a4509199505050505050505050506100b56001600055565b60026000540361049257604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b60006104a8602083018361452a565b6001600160a01b0316036104cf5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b60006104e5670de0b6b3a7640000611470565b905090565b60006105167f0000000000000000000000000000000000000000000000000000000000000000426145f8565b6104e59042614569565b600083815260076020526040812080546001600160801b031615158061054557504285115b1561055b57546001600160801b031690506109ae565b6000806105666104ea565b905080870361057757859150610611565b60006105a37f0000000000000000000000000000000000000000000000000000000000000000896145a7565b90505b6000818152600760205260409020546001600160801b0316925081811480156105cd575082155b156105d6578692505b8260000361060f576106087f0000000000000000000000000000000000000000000000000000000000000000826145a7565b90506105a6565b505b61061a8261156b565b83546001600160801b0319166001600160801b039190911617835561063e86611595565b50600090506007816106707f00000000000000000000000000000000000000000000000000000000000000008b614569565b815260208101919091526040016000908120546001600160801b0316915061069960028a610db9565b6000818152600e60205260408120549192508a8a83156107df57600192506000806106c886898c866000611739565b9150915080600b60008282546106de91906145a7565b909155506106fa9050866000846106f481611207565b88611808565b61070481836145a7565b915061073486838a8d877f0000000000000000000000000000000000000000000000000000000000000000611982565b915061074861074383856119cc565b6119e1565b600580546002906107699084906201000090046001600160701b031661460c565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506107968261156b565b600580546010906107b8908490600160801b90046001600160801b031661462c565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b60006107ec600184610db9565b6000818152600e602052604090205490915080156108fb5760019450600080610819838b8e886001611739565b9150915080600b600082825461082f91906145a7565b9091555061084b90508360008461084581611207565b8a610fc7565b6108558183614569565b915061086461074383876119cc565b600580546002906108859084906201000090046001600160701b031661460c565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506108b28261156b565b600580546010906108d4908490600160801b90046001600160801b031661462c565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b84156109335761092761090d87611207565b61091683611207565b610920919061464c565b6000611235565b6109318e8e611a0b565b505b600061093e8f610c72565b5090508f7fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab78c868a8686604051610997959493929190948552602085019390935260408401919091526060830152608082015260a00190565b60405180910390a250989a50505050505050505050505b9392505050565b6000838152600d602090815260408083206001600160a01b03861684529091529020548111156109f857604051631e9acf1760e31b815260040160405180910390fd5b6000838152600d602090815260408083206001600160a01b0386168452825280832080548590039055858352600e90915281208054839290610a3b908490614569565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b6000838152600d602090815260408083206001600160a01b038616845290915281208054839290610ac19084906145a7565b90915550506000838152600e602052604081208054839290610ae49084906145a7565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101610a82565b600080610b3b856112e8565b505060065485906001600160801b031680821115610b6057806001600160801b031691505b81600003610b75576000809250925050610c68565b610b84600360f81b89846109b5565b600654600090610baa9084906001600160801b03600160801b9091048116908516611b96565b9050610bb58361156b565b610bbf908361466c565b600680546001600160801b0319166001600160801b0392909216919091179055610be88161156b565b60068054601090610c0a908490600160801b90046001600160801b031661466c565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610c398188876113d6565b9350610c458684611bb4565b841015610c655760405163c972651760e01b815260040160405180910390fd5b50505b9550959350505050565b600080600080610c89610c8486611bc9565b611d03565b9150915080610c9f575060009485945092505050565b6000808611610caf576000610cb9565b610cb983876119cc565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b0390921691610d2491906145a7565b610d2e9190614569565b905080600003610d475750600096879650945050505050565b6000610d538383611d90565b98600198509650505050505050565b6000610d74604083016020840161458a565b15610d805750826109ae565b610d8a84846119cc565b90506109ae565b6000610da3604083016020840161458a565b15610db257610d8a8484611d90565b50826109ae565b60006001600160f81b03821115610de35760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000806000806000806000610e0288611da5565b9050610e6c610e0f611df6565b600154600160801b90046001600160801b03168c847f00000000000000000000000000000000000000000000000000000000000000008e7f0000000000000000000000000000000000000000000000000000000000000000611e17565b909850965091506000808080610edd610e83611df6565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611e87565b90508c610eec8f878484611e9e565b9a509196509094509250610f008486614569565b610f0a9088614569565b9650610f1683866145a7565b610f20908c614569565b9a50610f2c888c6145a7565b9950505050505050610fb285858385600760007f00000000000000000000000000000000000000000000000000000000000000008e610f6b9190614569565b81526020810191909152604001600020546001600160801b0316428d11610fa95760008d8152600760205260409020546001600160801b0316610fab565b8d5b6001611fb2565b999d939c50919a509098509095505050505050565b6001546001600160801b03168381108061100957507f00000000000000000000000000000000000000000000000000000000000000006110078583614569565b105b1561101657611016612051565b6003549084900390600f0b61102b848261464c565b90508361103786611207565b13801561106c57507f000000000000000000000000000000000000000000000000000000000000000061106a838361206a565b105b1561107957611079612051565b600254600160801b90046001600160801b03166110c06110bb826110a5670de0b6b3a76400008861468c565b6004546001600160801b031691908c6000612090565b61156b565b600480546001600160801b0319166001600160801b03929092169190911790556110ea8882614569565b90506110f58161156b565b600280546001600160801b03928316600160801b02921691909117905561111b8361156b565b600180546001600160801b0319166001600160801b039290921691909117905561114482612159565b600380546001600160801b0319166001600160801b039290921691909117905561116d8761156b565b6001805460109061118f908490600160801b90046001600160801b031661462c565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60006111e5600e60006111d1600286610db9565b815260200190815260200160002054611207565b6111f7600e60006111d1600187610db9565b611201919061464c565b92915050565b60006001600160ff1b038211156112315760405163396ea70160e11b815260040160405180910390fd5b5090565b600061125e6112448483612195565b61124f846000612195565b611259919061464c565b612159565b9050600081600f0b13156112b3576002805482919060009061128a9084906001600160801b031661462c565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b12156112e3576112c8816146a3565b6002805460009061128a9084906001600160801b031661466c565b505050565b6000611201826004611a0b565b600080600061130384611595565b9092509050600061131486866119cc565b90508183111561132c57611329868385611b96565b95505b8281101561133e578083039250611343565b600092505b61134c836119e1565b600580546001600160701b039290921662010000026fffffffffffffffffffffffffffff00001990921691909117908190556001600160801b03600160801b909104168087101561139f578690036113a3565b5060005b6113ac8161156b565b600580546001600160801b03928316600160801b0292169190911790555085935050505092915050565b6000806113e385856119cc565b90506113ee816121ab565b9450846000036114025760009150506109ae565b611412604084016020850161458a565b156114415761143a85611428602086018661452a565b61143560408701876146c9565b612294565b9150611468565b61146485611452602086018661452a565b61145f60408701876146c9565b61242e565b8491505b509392505050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016114bf57504761154a565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611523573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115479190614710565b90505b60125460000361155b5760006109ae565b6012546109ae9084908390611b96565b60006001600160801b0382111561123157604051630f0af95160e11b815260040160405180910390fd5b60055460009081906115b8908490600160801b90046001600160801b03166119cc565b6005546201000090046001600160701b031692509050818111156117345760006115e28383614569565b90506115f16110bb82866125c4565b60058054601090611613908490600160801b90046001600160801b031661466c565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600061164c8583611d9090919063ffffffff16565b9050600061167a827f00000000000000000000000000000000000000000000000000000000000000006119cc565b905080600b600082825461168e91906145a7565b9091555061169e90508183614569565b91506116a98261156b565b600180546000906116c49084906001600160801b031661462c565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506116f1826125d9565b60038054600090611706908490600f0b614729565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b6000806117468785611d90565b91506000611774837f00000000000000000000000000000000000000000000000000000000000000006119cc565b90506117a0817f00000000000000000000000000000000000000000000000000000000000000006119cc565b915083156117c3576117b28282614569565b6117bc9084614569565b92506117da565b6117cd8282614569565b6117d790846145a7565b92505b868610156117fd576117ed838789611b96565b92506117fa828789611b96565b91505b509550959350505050565b600354600160801b90046001600160801b03166118516110bb82611834670de0b6b3a76400008661468c565b600454600160801b90046001600160801b031691908a6000612090565b600480546001600160801b03928316600160801b0292169190911790556118778661156b565b611881908261466c565b600380546001600160801b03928316600160801b0292169190911790556118a78461156b565b600180546000906118c29084906001600160801b031661462c565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506118ef83612159565b60038054600090611904908490600f0b614729565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506119348561156b565b60018054601090611956908490600160801b90046001600160801b031661466c565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b60008061199a846119948a888a611b96565b90611d90565b90506119a7888486611b96565b6119b190826145a7565b9050868111156119c15786810391505b509695505050505050565b60006109ae8383670de0b6b3a7640000611b96565b60006001600160701b038211156112315760405163086b151760e11b815260040160405180910390fd5b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95490918291611a56916001600160801b031690614569565b905080600003611a6a576001915050611201565b6000611a7585612603565b905080600003611a8a57600192505050611201565b600080611a988385896126a5565b9150915080611aae576000945050505050611201565b600080611abb84896127ab565b91509150611ad9611acb82611207565b611ad490614756565b61289d565b925082611aef5760009650505050505050611201565b611af88261156b565b60068054600090611b139084906001600160801b031661462c565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611b408161156b565b60068054601090611b62908490600160801b90046001600160801b031661462c565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b6000826000190484118302158202611bad57600080fd5b5091020490565b60006109ae8383670de0b6b3a76400006129aa565b611bd16143bb565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526002540482166101008201526004549091610120830191611cc991166129d0565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192611cfb929004166129d0565b905292915050565b6000806000806000611d1486612a46565b9150915080611d2b57506000958695509350505050565b611d388660a00151611207565b611d4187612d66565b83611d4f8960000151611207565b611d5991906145ba565b611d6391906145ba565b611d6d919061464c565b925050506000811215611d865750600093849350915050565b9360019350915050565b60006109ae83670de0b6b3a764000084611b96565b600080611db06104ea565b9050808311611dc0576000611dca565b611dca8184614569565b91506109ae827f0000000000000000000000000000000000000000000000000000000000000000611d90565b6001546003546000916104e5916001600160801b0390911690600f0b61206a565b60008080611e38611e3088670de0b6b3a7640000614569565b899087611b96565b90508615611e7a57611e4a88886119cc565b9150611e6b8a8a84611e648a670de0b6b3a7640000614569565b8989612dca565b9250611e7783826145a7565b90505b9750975097945050505050565b60006100b282611e98858888611b96565b90612ded565b6000808080611ef58786611eee8b611ee8611ec18c670de0b6b3a7640000614569565b7f000000000000000000000000000000000000000000000000000000000000000090611bb4565b90611bb4565b91906129aa565b9350611f21847f00000000000000000000000000000000000000000000000000000000000000006119cc565b91506000611f42611f3a89670de0b6b3a7640000614569565b8a90886129aa565b9050611f6e817f0000000000000000000000000000000000000000000000000000000000000000611bb4565b9350611f9a847f00000000000000000000000000000000000000000000000000000000000000006119cc565b611fa490846145a7565b915050945094509450949050565b60008060008060008088881015612021578615611fd757611fd48d898b611b96565b9c505b611fe28c898b611b96565b9b50611fed8b611207565b611ff68d611207565b612000919061464c565b905061200d8b898b611b96565b9a5061201a8a898b611b96565b9950612040565b61202a8b611207565b6120338d611207565b61203d919061464c565b90505b9b9c9a9b999a975050505050505050565b60405163bb55fd2760e01b815260040160405180910390fd5b6000806120778484612e62565b90925090508061208957612089612051565b5092915050565b6000826000036120a1575084612150565b8115612113576120d26120b484876145a7565b6120be85876119cc565b6120c8888a6119cc565b61199491906145a7565b905060006120e08588612e9e565b905060006120ee8689612ead565b9050818310156121005781925061210c565b8083111561210c578092505b5050612150565b82850361212257506000612150565b61214d61212f8487614569565b6121398587611bb4565b612143888a6119cc565b6119949190614569565b90505b95945050505050565b600060016001607f1b0319821280612177575060016001607f1b0382135b156112315760405163a5353be560e01b815260040160405180910390fd5b60008183136121a457816109ae565b5090919050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016121fa575047612285565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa15801561225e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122829190614710565b90505b6012546109ae90849083611b96565b600060125485116122a557846122a9565b6012545b945060006122b686611470565b905085601260008282546122ca9190614569565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612370576040516001600160a01b038716908390600081818185875af1925050503d8060008114612360576040519150601f19603f3d011682016040523d82523d6000602084013e612365565b606091505b505080915050612406565b60405163a9059cbb60e01b81526001600160a01b038781166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af11580156123df573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124039190614772565b90505b80612424576040516312171d8360e31b815260040160405180910390fd5b5095945050505050565b601254841161243d5783612441565b6012545b9350600061244e85611470565b905084601260008282546124629190614569565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612508576040516001600160a01b038616908390600081818185875af1925050503d80600081146124f8576040519150601f19603f3d011682016040523d82523d6000602084013e6124fd565b606091505b50508091505061259e565b60405163a9059cbb60e01b81526001600160a01b038681166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af1158015612577573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061259b9190614772565b90505b806125bc576040516312171d8360e31b815260040160405180910390fd5b505050505050565b60006109ae83670de0b6b3a7640000846129aa565b600060016001607f1b038211156112315760405163a5353be560e01b815260040160405180910390fd5b600254600090819061261e906001600160801b0316846125c4565b905061264a7f0000000000000000000000000000000000000000000000000000000000000000826145a7565b6001546001600160801b0316111561269f576001547f0000000000000000000000000000000000000000000000000000000000000000906126959083906001600160801b0316614569565b6109ae9190614569565b50919050565b6126ad61441c565b6000806126b984611bc9565b905060006126c682611d03565b93509050826126db57506000915061009c9050565b60006127026126fd8461016001518561014001516119cc90919063ffffffff16565b611207565b6127226126fd856101200151866101000151611bb490919063ffffffff16565b61272c919061464c565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6000806000806127c38660c001518760e00151612e62565b91509150806127da57600080935093505050612896565b60006127e68784612ebc565b925090508115806127f5575080155b156128095760008094509450505050612896565b60006128158883612fcb565b90508060000361282f576000809550955050505050612896565b876060015181116128465794509250612896915050565b506060870151600061285a8986858b61309c565b90508060000361287557600080965096505050505050612896565b82811061288d57600080965096505050505050612896565b90955093505050505b9250929050565b6001546003546000916001600160801b0380821692600f0b91600160801b900416838080806128ef8787877f00000000000000000000000000000000000000000000000000000000000000008d6135b1565b93509350935093508061290b5750600098975050505050505050565b86841461293c5761291b8461156b565b600180546001600160801b0319166001600160801b03929092169190911790555b85831461296d5761294c83612159565b600380546001600160801b0319166001600160801b03929092169190911790555b84821461299b5761297d8261156b565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b60008260001904841183021582026129c157600080fd5b50910281810615159190040190565b600080670de0b6b3a76400006129e46104ea565b6129ee919061468c565b90508083116129fe576000612a08565b612a088184614569565b91506109ae612a3f670de0b6b3a76400007f000000000000000000000000000000000000000000000000000000000000000061468c565b8390611d90565b6000806000612a6b6126fd8561016001518661014001516119cc90919063ffffffff16565b612a8b6126fd866101200151876101000151611bb490919063ffffffff16565b612a95919061464c565b9050600080612aac86600001518760200151612e62565b9150915080612ac357506000958695509350505050565b6000831315612c045760008390506000612b11886000015189602001518a604001518b60a001518c60e00151670de0b6b3a7640000612b029190614569565b8d606001518e608001516136c9565b9350905082612b2a575060009788975095505050505050565b818110612bc8576000612b64858a60400151858c60e00151670de0b6b3a7640000612b559190614569565b8d606001518e608001516137d5565b9450905083158015612b7957508860c0015183105b15612b905750600098600198509650505050505050565b83612ba657506000988998509650505050505050565b612baf81611207565b612bb890614756565b9960019950975050505050505050565b6000886020015112612bf057612be78860a00151856126fd9190614569565b610d5390614756565b60a08801518851612be7916126fd91614569565b6000831215612d57576000612c1884614756565b90506000612c4c8489604001518a60e00151670de0b6b3a7640000612c3d9190614569565b8b606001518c60800151613898565b9350905082612c65575060009788975095505050505050565b818110612cea576000612c9f858a60400151858c60e00151670de0b6b3a7640000612c909190614569565b8d606001518e60800151613941565b9450905083158015612cb457508860c0015183105b15612ccb5750600098600198509650505050505050565b83612ce157506000988998509650505050505050565b612bb881611207565b6000612d1c858a604001518b60e00151670de0b6b3a7640000612d0d9190614569565b8c606001518d60800151613a18565b9450905083612d3657506000988998509650505050505050565b612bb8612d4d8a6060015184866119949190614569565b6126fd90836145a7565b50600095600195509350505050565b6000612d996126fd836101200151670de0b6b3a7640000612d879190614569565b606085015161010086015191906129aa565b6111f76126fd846101600151670de0b6b3a7640000612db89190614569565b60608601516101408701519190611b96565b600080612ddb8888888888886137d5565b9092509050806119c1576119c1612051565b600081600003612e065750670de0b6b3a7640000611201565b82600003612e1657506000611201565b6000612e2183611207565b90506000612e36612e3186611207565b613ac7565b9050818102612e4d670de0b6b3a76400008261478f565b9050612e5881613ced565b9695505050505050565b600080600083612e7186611207565b612e7b919061464c565b90506000811215612e93576000809250925050612896565b946001945092505050565b600081831161269f57826109ae565b60008183116121a457816109ae565b60008060008460a0015112612ed957505060808201516001612896565b60008460a00151612ee990614756565b90506000612f2585876101000151886000015160e00151670de0b6b3a7640000612f139190614569565b89516060810151608090910151613898565b93509050821580612f34575080155b15612f4757600080935093505050612896565b6000612f5383836125c4565b9050670de0b6b3a76400008111612f8f5780670de0b6b3a7640000039450612f888760c00151866119cc90919063ffffffff16565b9450612f9e565b60008094509450505050612896565b8660800151851115612fbd578660800151600194509450505050612896565b506001925050509250929050565b6000806130018460c001518560e00151866101000151876000015160a00151612ff388611207565b612ffc90614756565b6135b1565b87516040810192909252602082019290925291909152905080613028576000915050611201565b60006130378560000151611d03565b925090508161304b57600092505050611201565b8460200151811061306157600092505050611201565b60008560600151866040015161307791906145a7565b905061309282876020015183611b969092919063ffffffff16565b612e589082614569565b600080856060015186604001516130b391906145a7565b602087015160608801519192506000916130cd9184611b96565b90508660a001516000036130e45791506100b59050565b600080808960048810156130f757600497505b60005b888110156134535761310c868b612e9e565b955060006131358360c001518460e00151856101000151866000015160a00151612ff38c611207565b86516040810192909252602082019290925291909152905080613163576000985050505050505050506100b5565b60006131728e60000151611d03565b925090508161318d57600099505050505050505050506100b5565b61319884828b613e82565b156131ae578799505050505050505050506100b5565b60008460a00151131561331757835180516020820151604083015160a084015160e090940151600094613202949392916131f090670de0b6b3a7640000614569565b8a5160608101516080909101516136c9565b935090508261321e5760009a50505050505050505050506100b5565b808560a00151106133155761323285613eee565b90995092508261324f5760009a50505050505050505050506100b5565b6132748560c001518660e00151876101000151886000015160a00151612ff38e611207565b885160408101929092526020820192909252919091529250826132a45760009a50505050505050505050506100b5565b845180516020820151604083015160a084015160e0909401516132d494906131f090670de0b6b3a7640000614569565b93509050826132f05760009a50505050505050505050506100b5565b8e60a00151811161330d57889a50505050505050505050506100b5565b5050506130fa565b505b6000613328858f8760a00151613fc4565b935090508215806133415750670de0b6b3a76400008110155b156133595760009a50505050505050505050506100b5565b80670de0b6b3a764000003905060006133866126fd87604001518860200151611bb490919063ffffffff16565b6133936126fd858e6119cc565b61339d919061464c565b90508815806133bb57506133b08961431f565b6133b98261431f565b125b156133ca578098508997508296505b60008113156133f2576133e18b6119948385611d90565b6133eb908b6145a7565b9950613444565b600081121561343b57600061340c8c611994858186614756565b90508a81101561342057808b039a50613435565b60009c505050505050505050505050506100b5565b50613444565b50505050613453565b846001019450505050506130fa565b50600061347b8260c001518360e00151846101000151856000015160a00151612ff38b611207565b855160408101929092526020820192909252919091529050806134a85760009750505050505050506100b5565b60006134b78360000151614337565b905060006134d96126fd85604001518660200151611bb490919063ffffffff16565b6134e66126fd848c6119cc565b6134f0919061464c565b90506134fb8761431f565b6135048261431f565b1215613511578795508194505b61353861352c655af3107a4000670de0b6b3a7640000614569565b6020860151908b6129aa565b6040850151613548908790611d90565b1080613588575061357661356a655af3107a4000670de0b6b3a76400006145a7565b6020860151908b611b96565b60408501516135869087906125c4565b115b1561359f57600099505050505050505050506100b5565b50939c9b505050505050505050505050565b600080600080846000036135d0575087925086915085905060016136bd565b6000856135dc8b611207565b6135e691906145ba565b90506135f187611207565b81121561360c576000806000809450945094509450506136bd565b8094506000891261362c576136256126fd868b8d611b96565b935061364f565b6136436126fd61363b8b614756565b87908d6129aa565b61364c90614756565b93505b60008061365c8c8c612e62565b915091508061367b5760008060008096509650965096505050506136bd565b60006136878888612e62565b92509050816136a7576000806000809750975097509750505050506136bd565b6136b28b8285611b96565b955060019450505050505b95509550955095915050565b60008060008812156136eb576136de88614756565b6136e890876145a7565b95505b6000806136f88b8b612e62565b915091508061370f576000809350935050506137c9565b600061371e838b8a8a8a614367565b9050600061373b6137338a611e988a8e611bb4565b8990896129aa565b9050808210156137555760008095509550505050506137c9565b808203670de0b6b3a7640000811061378a5761378361377c670de0b6b3a76400008c611d90565b8290612ded565b90506137a2565b61379f61377c670de0b6b3a76400008c6125c4565b90505b8b8110156137bb576000809650965050505050506137c9565b8b9003955060019450505050505b97509795505050505050565b60008060006137e78989888888614396565b90506137f786611e98898b6145a7565b97508781101561380e57600080925092505061388d565b87810361381c8186886129aa565b9050670de0b6b3a764000081106138495761384261377c670de0b6b3a7640000896125c4565b9050613861565b61385e61377c670de0b6b3a764000089611d90565b90505b61386b81866125c4565b9050808a10156138835760008093509350505061388d565b8903925060019150505b965096945050505050565b60008060006138aa8888888888614396565b905060006138d5670de0b6b3a76400006138c48888611d90565b6138ce91906145a7565b83906125c4565b9050670de0b6b3a76400008110613902576138fb61377c670de0b6b3a7640000896125c4565b905061391a565b61391761377c670de0b6b3a764000089611d90565b90505b8088101561393057600080935093505050610c68565b909603976001975095505050505050565b60008060006139538989888888614396565b90508688101561396a57600080925092505061388d565b96869003966139798887612ded565b97508781101561399057600080925092505061388d565b87810361399e8186886129aa565b9050670de0b6b3a764000081106139cb576139c461377c670de0b6b3a7640000896125c4565b90506139e3565b6139e061377c670de0b6b3a764000089611d90565b90505b6139ed81866125c4565b905089811015613a055760008093509350505061388d565b9890980398600198509650505050505050565b6000806000613a2a8888888888614367565b90506000613a4e670de0b6b3a7640000613a4488886125c4565b612a3f91906145a7565b9050670de0b6b3a76400008110613a7b57613a7461377c670de0b6b3a764000089611d90565b9050613a93565b613a9061377c670de0b6b3a7640000896125c4565b90505b613a9d8186611d90565b905088811015613ab557600080935093505050610c68565b97909703976001975095505050505050565b6000808213613ae95760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f19820190613b6c9084901c611207565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e198213613d0857506000919050565b680755bf798b4a1bf1e58212613d31576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190612e5874029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611207565b6020830151600090613e9490846125c4565b6040850151613ea4908490611d90565b101580156100b557506020840151613ed49084613ecd633b9aca00670de0b6b3a76400006145a7565b9190611b96565b6040850151613ee49084906125c4565b1115949350505050565b60008060008360e0015113613f0857506000928392509050565b6000613f178460000151612d66565b90506000613f43856040015186606001518760400151613f3791906145a7565b602088015191906129aa565b905060008212613f6a5780821015613f5d57819003613f80565b5060009485945092505050565b613f7382614756565b613f7d90826145a7565b90505b60e085015160c0860151613f959183906129aa565b9050808560c001511015613fb0575060009485945092505050565b808560c00151036001935093505050915091565b6000806000808412613fe857855160400151613fe19085906145a7565b9050614023565b6000613ff385614756565b875160400151909150811015614013578651604001518190039150614021565b60008093509350505061009c565b505b85518051602090910151600091829161403c9190612e62565b9150915080614054576000809450945050505061009c565b875160e08101516040909101516000916140899161407d916140769190612ded565b8a906119cc565b6101008b0151906125c4565b895160e08101516080909101516140b4916140a891611e9890886119cc565b8b5160600151906125c4565b6140be91906145a7565b905060006140f66140ea6140e38c6000015160e0015188612ded90919063ffffffff16565b8b90611bb4565b6101008c015190611d90565b9050808210156141115760008096509650505050505061009c565b80820391506000614153858c60000151604001518d6000015160e00151670de0b6b3a76400006141419190614569565b8e516060810151608090910151614396565b9050600061417d8c6000015160e00151670de0b6b3a76400006141769190614569565b8890612ded565b90508082101561419a57600080985098505050505050505061009c565b8b516080810151606090910151918303916141b69183916129aa565b9050670de0b6b3a764000081106141fa578b5160e001516141f39061377c906141e790670de0b6b3a7640000614569565b8e5160e00151906125c4565b9050614229565b8b5160e001516142269061377c9061421a90670de0b6b3a7640000614569565b8e5160e0015190611d90565b90505b8b516060015161423c90859083906129aa565b935083670de0b6b3a764000011156142605783670de0b6b3a7640000039350614274565b60006001985098505050505050505061009c565b60008c60e00151126142d75760c08c015160e08d0151614293916125c4565b9250670de0b6b3a76400008311156142b857600080985098505050505050505061009c565b670de0b6b3a764000092909203916142d084846119cc565b935061430c565b6143096142f08d60c001518e60e0015161199490614756565b61430290670de0b6b3a76400006145a7565b85906119cc565b93505b50919a60019a5098505050505050505050565b600080821261432e5781611201565b61120182614756565b600080600061434584611d03565b915091508061208957604051635516328b60e11b815260040160405180910390fd5b60006143738585612ded565b61438c61438486611e98868b6119cc565b859085611b96565b61214d91906145a7565b60006143a28585612ded565b61438c6143b386611e98868b611bb4565b8590856129aa565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061012001604052806144306143bb565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60006060828403121561269f57600080fd5b60008060006060848603121561449557600080fd5b8335925060208401359150604084013567ffffffffffffffff8111156144ba57600080fd5b6144c68682870161446e565b9150509250925092565b600080600080608085870312156144e657600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561451257600080fd5b61451e8782880161446e565b91505092959194509250565b60006020828403121561453c57600080fd5b81356001600160a01b03811681146109ae57600080fd5b634e487b7160e01b600052601160045260246000fd5b8181038181111561120157611201614553565b80151581146104cf57600080fd5b60006020828403121561459c57600080fd5b81356109ae8161457c565b8082018082111561120157611201614553565b80820182811260008312801582168215821617156145da576145da614553565b505092915050565b634e487b7160e01b600052601260045260246000fd5b600082614607576146076145e2565b500690565b6001600160701b0381811683821601908082111561208957612089614553565b6001600160801b0381811683821601908082111561208957612089614553565b818103600083128015838313168383128216171561208957612089614553565b6001600160801b0382811682821603908082111561208957612089614553565b808202811582820484141761120157611201614553565b600081600f0b60016001607f1b031981036146c0576146c0614553565b60000392915050565b6000808335601e198436030181126146e057600080fd5b83018035915067ffffffffffffffff8211156146fb57600080fd5b60200191503681900382131561289657600080fd5b60006020828403121561472257600080fd5b5051919050565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561120157611201614553565b6000600160ff1b820161476b5761476b614553565b5060000390565b60006020828403121561478457600080fd5b81516109ae8161457c565b60008261479e5761479e6145e2565b600160ff1b8214600019841416156147b8576147b8614553565b50059056fea264697066735822122099dd45c717b9ac0e4b59c7f695ca4ba32ce6cb27519c8de04e22ae2a25b8131764736f6c634300081400336102406040523480156200001257600080fd5b5060405162004f6438038062004f648339810160408190526200003591620001e1565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c05260c0808501516101e0526101008086015190915260e0808601519052610120808601519091529184018051519092528151015161014090815281516040908101516101609081529251606090810151610180908152918601518516610200528501516102205290840151600a80546001600160a01b03199081169286169290921790559184015160088054841691851691909117905590920151600980549093169116179055620002d4565b6040516101c081016001600160401b03811182821017156200014957634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200016757600080fd5b919050565b6000608082840312156200017f57600080fd5b604051608081016001600160401b0381118282101715620001b057634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60006102208284031215620001f557600080fd5b620001ff62000117565b6200020a836200014f565b81526200021a602084016200014f565b60208201526200022d604084016200014f565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152506101406200028c8185016200014f565b90820152610160620002a08482016200014f565b90820152610180620002b48482016200014f565b908201526101a0620002c9858583016200016c565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e0516102005161022051614ad96200048b60003960005050600050506000818161048401526129890152600081816101fd015281816102540152818161033b015281816115400152818161157c0152818161181401528181611d6c01528181611dcf0152818161288e01526129630152600081816102aa01528181611067015281816110af015281816111cf0152818161230701528181612392015261293d015260006119b5015260008181611adb0152612758015260008181610a45015281816111220152611aaf01526000818161110101526127140152600081816102ed01528181611045015281816110d0015281816111f001526129af0152600081816102cc0152818161055001528181610980015261399d01526000818161013f01528181610826015281816108b3015261091801526000505060008181610cea0152818161143e01528181611487015281816121050152818161214e015281816121e0015281816122610152818161240001528181612481015281816133d801526134210152614ad96000f3fe6080604052600436106100345760003560e01c8063414f826d1461003957806377d05ff41461005b578063cba2e58d14610081575b600080fd5b34801561004557600080fd5b50610059610054366004614732565b6100a9565b005b61006e610069366004614766565b6100b7565b6040519081526020015b60405180910390f35b61009461008f3660046147b6565b6100ce565b60408051928352602083019190915201610078565b6100b382826100eb565b5050565b60006100c48484846101a7565b90505b9392505050565b6000806100dd8686868661041d565b915091505b94509492505050565b6100f3610651565b60006100fd61067b565b6000848152600760205260409020549091506001600160801b03161561012e576101278183610693565b505061019d565b600061013861081f565b90506101647f000000000000000000000000000000000000000000000000000000000000000085614826565b15158061017057508381105b1561018e5760405163ecd29e8160e01b815260040160405180910390fd5b610199848385610855565b5050505b6100b36001600055565b60006101b1610651565b6101b9610ce8565b6101c282610d54565b60055460ff16156101e657604051637983c05160e01b815260040160405180910390fd5b6000806101f38685610d8d565b90925090506102237f00000000000000000000000000000000000000000000000000000000000000006002614850565b82101561024357604051632afb507160e21b815260040160405180910390fd5b6005805460ff1916600117905560027f0000000000000000000000000000000000000000000000000000000000000000028203925061028182610e66565b600180546001600160801b0319166001600160801b0392909216919091179055610316610311837f0000000000000000000000000000000000000000000000000000000000000000887f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000610e94565b610e66565b600180546001600160801b03928316600160801b02921691909117905561035f6000807f0000000000000000000000000000000000000000000000000000000000000000610f33565b61037760006103716020870187614867565b85610f33565b61038a61038261081f565b826004610855565b506000610398878387610fdb565b90506103a76020860186614867565b6001600160a01b03167fdfe2bf9f580df5ec15438120ffa6f0603237c4e6b65d07140a4695317da4f9528583866103e460408b0160208c0161489e565b60408051948552602085019390935291830152151560608201526080810189905260a00160405180910390a25050506100c76001600055565b600080610428610651565b600554610100900460ff1615610451576040516321081abf60e01b815260040160405180910390fd5b610459610ce8565b61046283610d54565b60008061046f8886610d8d565b90925090506000610480838361100a565b90507f00000000000000000000000000000000000000000000000000000000000000008110156104c35760405163211ddda360e11b815260040160405180910390fd5b868210156104e4576040516342af972b60e01b815260040160405180910390fd5b60006104ee61081f565b90506104fc81846004610855565b5060008061050a868661101f565b90985090925090508a8710156105335760405163c972651760e01b815260040160405180910390fd5b80600b600082825461054591906148bb565b9091555061057590507f0000000000000000000000000000000000000000000000000000000000000000846148bb565b97506105838288878b61122c565b600061059060018a6113c6565b90506105a9816105a360208d018d614867565b8a610f33565b8c8989888d856105bc6020830183614867565b6001600160a01b03167f88087800d03445c97e2009f3f90906bf6ede79bbd194e275c66224e977a5b84c866105f2898787610fdb565b6105fd8a88886113fb565b61060d604088016020890161489e565b60408051948552602085019390935291830152151560608201526080810187905260a00160405180910390a350909a50505050505050505050506100e26001600055565b60026000540361067457604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b600061068e670de0b6b3a7640000611423565b905090565b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e954909182916106de916001600160801b0316906148ce565b9050806000036106f2576001915050610819565b60006106fd8561151e565b90508060000361071257600192505050610819565b6000806107208385896115c0565b9150915080610736576000945050505050610819565b60008061074384896116cd565b91509150610761610753826117bd565b61075c906148e1565b6117e7565b9250826107775760009650505050505050610819565b61078082610e66565b6006805460009061079b9084906001600160801b03166148fd565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506107c881610e66565b600680546010906107ea908490600160801b90046001600160801b03166148fd565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600196505050505050505b92915050565b600061084b7f000000000000000000000000000000000000000000000000000000000000000042614826565b61068e90426148ce565b600083815260076020526040812080546001600160801b031615158061087a57504285115b1561089057546001600160801b031690506100c7565b60008061089b61081f565b90508087036108ac57859150610946565b60006108d87f0000000000000000000000000000000000000000000000000000000000000000896148bb565b90505b6000818152600760205260409020546001600160801b031692508181148015610902575082155b1561090b578692505b826000036109445761093d7f0000000000000000000000000000000000000000000000000000000000000000826148bb565b90506108db565b505b61094f82610e66565b83546001600160801b0319166001600160801b0391909116178355610973866118f4565b50600090506007816109a57f00000000000000000000000000000000000000000000000000000000000000008b6148ce565b815260208101919091526040016000908120546001600160801b031691506109ce60028a6113c6565b6000818152600e60205260408120549192508a8a8315610b1457600192506000806109fd86898c866000611a98565b9150915080600b6000828254610a1391906148bb565b90915550610a2f905086600084610a29816117bd565b88611b67565b610a3981836148bb565b9150610a6986838a8d877f0000000000000000000000000000000000000000000000000000000000000000611ce1565b9150610a7d610a78838561100a565b611d2b565b60058054600290610a9e9084906201000090046001600160701b031661491d565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610acb82610e66565b60058054601090610aed908490600160801b90046001600160801b03166148fd565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000610b216001846113c6565b6000818152600e60205260409020549091508015610c305760019450600080610b4e838b8e886001611a98565b9150915080600b6000828254610b6491906148bb565b90915550610b80905083600084610b7a816117bd565b8a611d55565b610b8a81836148ce565b9150610b99610a78838761100a565b60058054600290610bba9084906201000090046001600160701b031661491d565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610be782610e66565b60058054601090610c09908490600160801b90046001600160801b03166148fd565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610c6857610c5c610c42876117bd565b610c4b836117bd565b610c55919061493d565b6000611f46565b610c668e8e610693565b505b6000610c738f611ff9565b5090508f7fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab78c868a8686604051610ccc959493929190948552602085019390935260408401919091526060830152608082015260a00190565b60405180910390a250989e9d5050505050505050505050505050565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee14801590610d3457503415155b15610d5257604051631574f9f360e01b815260040160405180910390fd5b565b6000610d636020830183614867565b6001600160a01b031603610d8a5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b60008080610da1604085016020860161489e565b15610dc657610dbc85610db7604087018761495d565b6120e9565b9093509050610de2565b5034610dde85610dd9604087018761495d565b612375565b8492505b610dea61067b565b91508015610e5d57604051600090339083908381818185875af1925050503d8060008114610e34576040519150601f19603f3d011682016040523d82523d6000602084013e610e39565b606091505b5050905080610e5b576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b60006001600160801b03821115610e9057604051630f0af95160e11b815260040160405180910390fd5b5090565b600080610ea5846301e1338061251f565b90506000610eb3868361100a565b610ec590670de0b6b3a76400006148bb565b9050670de0b6b3a76400008110610ef957610ef2610eeb670de0b6b3a76400008661251f565b8290612534565b9050610f11565b610f0e610eeb670de0b6b3a7640000866125a9565b90505b610f2581610f1f898b61100a565b9061100a565b925050505b95945050505050565b6000838152600d602090815260408083206001600160a01b038616845290915281208054839290610f659084906148bb565b90915550506000838152600e602052604081208054839290610f889084906148bb565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b6000610fed604083016020840161489e565b15610ff95750826100c7565b611003848461100a565b90506100c7565b60006100c78383670de0b6b3a76400006125be565b600080600061108b61102f6125dc565b600154600160801b90046001600160801b0316877f0000000000000000000000000000000000000000000000000000000000000000887f00000000000000000000000000000000000000000000000000000000000000006125fd565b915060006110f461109a6125dc565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000612629565b905061114b8684611146847f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000612640565b6126ab565b15611158576111586126ed565b600080611166888489612706565b909250905061117582866148ce565b94506111828184896125be565b935061118e84896148ce565b9550670de0b6b3a7640000611214876111a56125dc565b6111af91906148bb565b6001546111cd908990600160801b90046001600160801b03166148ce565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000612629565b1115611222576112226126ed565b5050509250925092565b600254600160801b90046001600160801b031661126e61031182611258670de0b6b3a764000086614850565b6004546001600160801b03169190886001612786565b600480546001600160801b0319166001600160801b039290921691909117905561129785610e66565b600180546000906112b29084906001600160801b03166148fd565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506112df84610e66565b60018054601090611301908490600160801b90046001600160801b03166149a4565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061132e84610e66565b61133890826148fd565b600280546001600160801b03808416600160801b0291161790559050600061135f83612843565b905061137d8161136e876117bd565b61137890846149c4565b611f46565b61138684612887565b611392576113926126ed565b600061139d856128e7565b9050806113bd57604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b60006001600160f81b038211156113f05760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b600061140d604083016020840161489e565b1561141c57611003848461251f565b50826100c7565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016114725750476114fd565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156114d6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114fa91906149ec565b90505b60125460000361150e5760006100c7565b6012546100c790849083906125be565b6002546000908190611539906001600160801b0316846125a9565b90506115657f0000000000000000000000000000000000000000000000000000000000000000826148bb565b6001546001600160801b031611156115ba576001547f0000000000000000000000000000000000000000000000000000000000000000906115b09083906001600160801b03166148ce565b6100c791906148ce565b50919050565b6115c861467f565b6000806115d4846128f4565b905060006115e182612a2e565b93509050826115f65750600091506116c59050565b600061161d61161884610160015185610140015161100a90919063ffffffff16565b6117bd565b61163d611618856101200151866101000151612abb90919063ffffffff16565b611647919061493d565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c5481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b6000806000806116e58660c001518760e00151612ad0565b91509150806116fc57600080935093505050610e5f565b60006117088784612b0c565b92509050811580611717575080155b1561172b5760008094509450505050610e5f565b60006117378883612c1b565b905080600003611751576000809550955050505050610e5f565b876060015181116117685794509250610e5f915050565b506060870151600061177c8986858b612cec565b90508060000361179757600080965096505050505050610e5f565b8281106117af57600080965096505050505050610e5f565b909890975095505050505050565b60006001600160ff1b03821115610e905760405163396ea70160e11b815260040160405180910390fd5b6001546003546000916001600160801b0380821692600f0b91600160801b900416838080806118398787877f00000000000000000000000000000000000000000000000000000000000000008d613203565b9350935093509350806118555750600098975050505050505050565b8684146118865761186584610e66565b600180546001600160801b0319166001600160801b03929092169190911790555b8583146118b7576118968361331b565b600380546001600160801b0319166001600160801b03929092169190911790555b8482146118e5576118c782610e66565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b6005546000908190611917908490600160801b90046001600160801b031661100a565b6005546201000090046001600160701b03169250905081811115611a9357600061194183836148ce565b905061195061031182866125a9565b60058054601090611972908490600160801b90046001600160801b03166149a4565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006119ab858361251f90919063ffffffff16565b905060006119d9827f000000000000000000000000000000000000000000000000000000000000000061100a565b905080600b60008282546119ed91906148bb565b909155506119fd905081836148ce565b9150611a0882610e66565b60018054600090611a239084906001600160801b03166148fd565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611a5082613357565b60038054600090611a65908490600f0b614a05565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b600080611aa5878561251f565b91506000611ad3837f000000000000000000000000000000000000000000000000000000000000000061100a565b9050611aff817f000000000000000000000000000000000000000000000000000000000000000061100a565b91508315611b2257611b1182826148ce565b611b1b90846148ce565b9250611b39565b611b2c82826148ce565b611b3690846148bb565b92505b86861015611b5c57611b4c8387896125be565b9250611b598287896125be565b91505b509550959350505050565b600354600160801b90046001600160801b0316611bb061031182611b93670de0b6b3a764000086614850565b600454600160801b90046001600160801b031691908a6000612786565b600480546001600160801b03928316600160801b029216919091179055611bd686610e66565b611be090826149a4565b600380546001600160801b03928316600160801b029216919091179055611c0684610e66565b60018054600090611c219084906001600160801b03166148fd565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611c4e8361331b565b60038054600090611c63908490600f0b614a05565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611c9385610e66565b60018054601090611cb5908490600160801b90046001600160801b03166149a4565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600080611cf984611cf38a888a6125be565b9061251f565b9050611d068884866125be565b611d1090826148bb565b905086811115611d205786810391505b509695505050505050565b60006001600160701b03821115610e905760405163086b151760e11b815260040160405180910390fd5b6001546001600160801b031683811080611d9757507f0000000000000000000000000000000000000000000000000000000000000000611d9585836148ce565b105b15611da457611da46126ed565b6003549084900390600f0b611db9848261493d565b905083611dc5866117bd565b138015611dfa57507f0000000000000000000000000000000000000000000000000000000000000000611df88383613381565b105b15611e0757611e076126ed565b600254600160801b90046001600160801b0316611e4961031182611e33670de0b6b3a764000088614850565b6004546001600160801b031691908c6000612786565b600480546001600160801b0319166001600160801b0392909216919091179055611e7388826148ce565b9050611e7e81610e66565b600280546001600160801b03928316600160801b029216919091179055611ea483610e66565b600180546001600160801b0319166001600160801b0392909216919091179055611ecd8261331b565b600380546001600160801b0319166001600160801b0392909216919091179055611ef687610e66565b60018054601090611f18908490600160801b90046001600160801b03166148fd565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b6000611f6f611f5584836133a7565b611f608460006133a7565b611f6a919061493d565b61331b565b9050600081600f0b1315611fc45760028054829190600090611f9b9084906001600160801b03166148fd565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b1215611ff457611fd981614a32565b60028054600090611f9b9084906001600160801b03166149a4565b505050565b60008060008061201061200b866128f4565b612a2e565b9150915080612026575060009485945092505050565b6000808611612036576000612040565b612040838761100a565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b03909216916120ab91906148bb565b6120b591906148ce565b9050806000036120ce5750600096879650945050505050565b60006120da838361251f565b98600198509650505050505050565b6000808073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016121395750476121c4565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa15801561219d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121c191906149ec565b90505b6001600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161223f578734101561222e576040516312171d8360e31b815260040160405180910390fd5b61223888346148ce565b90506122d9565b6040516323b872dd60e01b8152336004820152306024820152604481018990527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af11580156122b2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122d69190614a58565b91505b816122f7576040516312171d8360e31b815260040160405180910390fd5b60125460000361233c5761232b887f000000000000000000000000000000000000000000000000000000000000000061251f565b6012819055945092506116c5915050565b60125460009061234e908a90866125be565b9050806012600082825461236291906148bb565b909155509095509093506116c592505050565b600061238084611423565b90506012546000036123be576123b6817f000000000000000000000000000000000000000000000000000000000000000061251f565b6012556123e4565b60006123c9826133bd565b905080601260008282546123dd91906148bb565b9091555050505b6001600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161245f578234101561244e576040516312171d8360e31b815260040160405180910390fd5b61245883346148ce565b90506124f9565b6040516323b872dd60e01b8152336004820152306024820152604481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af11580156124d2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124f69190614a58565b91505b81612517576040516312171d8360e31b815260040160405180910390fd5b505050505050565b60006100c783670de0b6b3a7640000846125be565b60008160000361254d5750670de0b6b3a7640000610819565b8260000361255d57506000610819565b6000612568836117bd565b9050600061257d612578866117bd565b6134a6565b9050818102612594670de0b6b3a764000082614a75565b905061259f816136cc565b9695505050505050565b60006100c783670de0b6b3a764000084613861565b60008260001904841183021582026125d557600080fd5b5091020490565b60015460035460009161068e916001600160801b0390911690600f0b613381565b600061261e87878761261788670de0b6b3a76400006148ce565b8787613887565b979650505050505050565b6000610f2a8261263a8588886125be565b90612534565b60006100c461268761265a84670de0b6b3a76400006148ce565b612681670de0b6b3a7640000612670818a6125a9565b61267a91906148ce565b8790612abb565b90612abb565b61269990670de0b6b3a76400006148bb565b611cf384670de0b6b3a76400006148ce565b6000806126e2856126ba6125dc565b6126c491906148bb565b6001546111cd908790600160801b90046001600160801b03166148ce565b909210949350505050565b60405163bb55fd2760e01b815260040160405180910390fd5b6000806127508561268185817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000612746818c6125a9565b61268191906148ce565b915061277c827f000000000000000000000000000000000000000000000000000000000000000061100a565b9050935093915050565b600082600003612797575084610f2a565b8115612809576127c86127aa84876148bb565b6127b4858761100a565b6127be888a61100a565b611cf391906148bb565b905060006127d68588613934565b905060006127e48689613943565b9050818310156127f657819250612802565b80831115612802578092505b5050610f2a565b82850361281857506000610f2a565b61259f61282584876148ce565b61282f8587612abb565b612839888a61100a565b611cf391906148ce565b600061286b600e60006128576002866113c6565b8152602001908152602001600020546117bd565b61287d600e60006128576001876113c6565b610819919061493d565b60006128b37f000000000000000000000000000000000000000000000000000000000000000083612abb565b6002546128c991906001600160801b03166148bb565b6001546128df906001600160801b03168461100a565b101592915050565b6000610819826004610693565b6128fc6146d1565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e083015260025404821661010082015260045490916101208301916129f49116613952565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192612a2692900416613952565b905292915050565b6000806000806000612a3f866139c8565b9150915080612a5657506000958695509350505050565b612a638660a001516117bd565b612a6c87613ce8565b83612a7a89600001516117bd565b612a8491906149c4565b612a8e91906149c4565b612a98919061493d565b925050506000811215612ab15750600093849350915050565b9360019350915050565b60006100c78383670de0b6b3a7640000613861565b600080600083612adf866117bd565b612ae9919061493d565b90506000811215612b01576000809250925050610e5f565b946001945092505050565b60008060008460a0015112612b2957505060808201516001610e5f565b60008460a00151612b39906148e1565b90506000612b7585876101000151886000015160e00151670de0b6b3a7640000612b6391906148ce565b89516060810151608090910151613d4c565b93509050821580612b84575080155b15612b9757600080935093505050610e5f565b6000612ba383836125a9565b9050670de0b6b3a76400008111612bdf5780670de0b6b3a7640000039450612bd88760c001518661100a90919063ffffffff16565b9450612bee565b60008094509450505050610e5f565b8660800151851115612c0d578660800151600194509450505050610e5f565b506001925050509250929050565b600080612c518460c001518560e00151866101000151876000015160a00151612c43886117bd565b612c4c906148e1565b613203565b87516040810192909252602082019290925291909152905080612c78576000915050610819565b6000612c878560000151612a2e565b9250905081612c9b57600092505050610819565b84602001518110612cb157600092505050610819565b600085606001518660400151612cc791906148bb565b9050612ce2828760200151836125be9092919063ffffffff16565b61259f90826148ce565b60008085606001518660400151612d0391906148bb565b60208701516060880151919250600091612d1d91846125be565b90508660a00151600003612d345791506131fb9050565b60008080896004881015612d4757600497505b60005b888110156130a357612d5c868b613934565b95506000612d858360c001518460e00151856101000151866000015160a00151612c438c6117bd565b86516040810192909252602082019290925291909152905080612db3576000985050505050505050506131fb565b6000612dc28e60000151612a2e565b9250905081612ddd57600099505050505050505050506131fb565b612de884828b613df8565b15612dfe578799505050505050505050506131fb565b60008460a001511315612f6757835180516020820151604083015160a084015160e090940151600094612e5294939291612e4090670de0b6b3a76400006148ce565b8a516060810151608090910151613e64565b9350905082612e6e5760009a50505050505050505050506131fb565b808560a0015110612f6557612e8285613f69565b909950925082612e9f5760009a50505050505050505050506131fb565b612ec48560c001518660e00151876101000151886000015160a00151612c438e6117bd565b88516040810192909252602082019290925291909152925082612ef45760009a50505050505050505050506131fb565b845180516020820151604083015160a084015160e090940151612f249490612e4090670de0b6b3a76400006148ce565b9350905082612f405760009a50505050505050505050506131fb565b8e60a001518111612f5d57889a50505050505050505050506131fb565b505050612d4a565b505b6000612f78858f8760a0015161403f565b93509050821580612f915750670de0b6b3a76400008110155b15612fa95760009a50505050505050505050506131fb565b80670de0b6b3a76400000390506000612fd661161887604001518860200151612abb90919063ffffffff16565b612fe3611618858e61100a565b612fed919061493d565b905088158061300b57506130008961439a565b6130098261439a565b125b1561301a578098508997508296505b6000811315613042576130318b611cf3838561251f565b61303b908b6148bb565b9950613094565b600081121561308b57600061305c8c611cf38581866148e1565b90508a81101561307057808b039a50613085565b60009c505050505050505050505050506131fb565b50613094565b505050506130a3565b84600101945050505050612d4a565b5060006130cb8260c001518360e00151846101000151856000015160a00151612c438b6117bd565b855160408101929092526020820192909252919091529050806130f85760009750505050505050506131fb565b600061310783600001516143b2565b9050600061312961161885604001518660200151612abb90919063ffffffff16565b613136611618848c61100a565b613140919061493d565b905061314b8761439a565b6131548261439a565b1215613161578795508194505b61318861317c655af3107a4000670de0b6b3a76400006148ce565b6020860151908b613861565b604085015161319890879061251f565b10806131d857506131c66131ba655af3107a4000670de0b6b3a76400006148bb565b6020860151908b6125be565b60408501516131d69087906125a9565b115b156131ef57600099505050505050505050506131fb565b50939750505050505050505b949350505050565b600080600080846000036132225750879250869150859050600161330f565b60008561322e8b6117bd565b61323891906149c4565b9050613243876117bd565b81121561325e5760008060008094509450945094505061330f565b8094506000891261327e57613277611618868b8d6125be565b93506132a1565b61329561161861328d8b6148e1565b87908d613861565b61329e906148e1565b93505b6000806132ae8c8c612ad0565b91509150806132cd57600080600080965096509650965050505061330f565b60006132d98888612ad0565b92509050816132f95760008060008097509750975097505050505061330f565b6133048b82856125be565b955060019450505050505b95509550955095915050565b600060016001607f1b0319821280613339575060016001607f1b0382135b15610e905760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b03821115610e905760405163a5353be560e01b815260040160405180910390fd5b60008061338e8484612ad0565b9092509050806133a0576133a06126ed565b5092915050565b60008183136133b657816100c7565b5090919050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161340c575047613497565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015613470573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061349491906149ec565b90505b6012546100c7908490836125be565b60008082136134c85760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f1982019061354b9084901c6117bd565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e1982136136e757506000919050565b680755bf798b4a1bf1e58212613710576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061259f74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6117bd565b600082600019048411830215820261387857600080fd5b50910281810615159190040190565b60008061389788888787876143e2565b90506138b18561263a6138aa898c6148bb565b869061100a565b97506138be8489856125be565b9750878110156138d0576138d06126ed565b878103670de0b6b3a764000081106138fe576138f7610eeb670de0b6b3a7640000886125a9565b9050613916565b613913610eeb670de0b6b3a76400008861251f565b90505b80881015613926576139266126ed565b909603979650505050505050565b60008183116115ba57826100c7565b60008183116133b657816100c7565b600080670de0b6b3a764000061396661081f565b6139709190614850565b905080831161398057600061398a565b61398a81846148ce565b91506100c76139c1670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000614850565b839061251f565b60008060006139ed61161885610160015186610140015161100a90919063ffffffff16565b613a0d611618866101200151876101000151612abb90919063ffffffff16565b613a17919061493d565b9050600080613a2e86600001518760200151612ad0565b9150915080613a4557506000958695509350505050565b6000831315613b865760008390506000613a93886000015189602001518a604001518b60a001518c60e00151670de0b6b3a7640000613a8491906148ce565b8d606001518e60800151613e64565b9350905082613aac575060009788975095505050505050565b818110613b4a576000613ae6858a60400151858c60e00151670de0b6b3a7640000613ad791906148ce565b8d606001518e60800151614411565b9450905083158015613afb57508860c0015183105b15613b125750600098600198509650505050505050565b83613b2857506000988998509650505050505050565b613b31816117bd565b613b3a906148e1565b9960019950975050505050505050565b6000886020015112613b7257613b698860a001518561161891906148ce565b6120da906148e1565b60a08801518851613b6991611618916148ce565b6000831215613cd9576000613b9a846148e1565b90506000613bce8489604001518a60e00151670de0b6b3a7640000613bbf91906148ce565b8b606001518c60800151613d4c565b9350905082613be7575060009788975095505050505050565b818110613c6c576000613c21858a60400151858c60e00151670de0b6b3a7640000613c1291906148ce565b8d606001518e608001516144d4565b9450905083158015613c3657508860c0015183105b15613c4d5750600098600198509650505050505050565b83613c6357506000988998509650505050505050565b613b3a816117bd565b6000613c9e858a604001518b60e00151670de0b6b3a7640000613c8f91906148ce565b8c606001518d608001516145ab565b9450905083613cb857506000988998509650505050505050565b613b3a613ccf8a606001518486611cf391906148ce565b61161890836148bb565b50600095600195509350505050565b6000613d1b611618836101200151670de0b6b3a7640000613d0991906148ce565b60608501516101008601519190613861565b61287d611618846101600151670de0b6b3a7640000613d3a91906148ce565b606086015161014087015191906125be565b6000806000613d5e88888888886143e2565b90506000613d89670de0b6b3a7640000613d78888861251f565b613d8291906148bb565b83906125a9565b9050670de0b6b3a76400008110613db657613daf610eeb670de0b6b3a7640000896125a9565b9050613dce565b613dcb610eeb670de0b6b3a76400008961251f565b90505b80881015613de457600080935093505050613dee565b8703925060019150505b9550959350505050565b6020830151600090613e0a90846125a9565b6040850151613e1a90849061251f565b101580156100c457506020840151613e4a9084613e43633b9aca00670de0b6b3a76400006148bb565b91906125be565b6040850151613e5a9084906125a9565b1115949350505050565b6000806000881215613e8657613e79886148e1565b613e8390876148bb565b95505b600080613e938b8b612ad0565b9150915080613eaa57600080935093505050613f5d565b6000613eb9838b8a8a8a61465a565b90506000613ed6613ece8a61263a8a8e612abb565b899089613861565b905080821015613ef0576000809550955050505050613f5d565b808203670de0b6b3a76400008110613f1e57613f17610eeb670de0b6b3a76400008c61251f565b9050613f36565b613f33610eeb670de0b6b3a76400008c6125a9565b90505b8b811015613f4f57600080965096505050505050613f5d565b8b9003955060019450505050505b97509795505050505050565b60008060008360e0015113613f8357506000928392509050565b6000613f928460000151613ce8565b90506000613fbe856040015186606001518760400151613fb291906148bb565b60208801519190613861565b905060008212613fe55780821015613fd857819003613ffb565b5060009485945092505050565b613fee826148e1565b613ff890826148bb565b90505b60e085015160c0860151614010918390613861565b9050808560c00151101561402b575060009485945092505050565b808560c00151036001935093505050915091565b60008060008084126140635785516040015161405c9085906148bb565b905061409e565b600061406e856148e1565b87516040015190915081101561408e57865160400151819003915061409c565b6000809350935050506116c5565b505b8551805160209091015160009182916140b79190612ad0565b91509150806140cf57600080945094505050506116c5565b875160e0810151604090910151600091614104916140f8916140f19190612534565b8a9061100a565b6101008b0151906125a9565b895160e081015160809091015161412f916141239161263a908861100a565b8b5160600151906125a9565b61413991906148bb565b9050600061417161416561415e8c6000015160e001518861253490919063ffffffff16565b8b90612abb565b6101008c01519061251f565b90508082101561418c576000809650965050505050506116c5565b808203915060006141ce858c60000151604001518d6000015160e00151670de0b6b3a76400006141bc91906148ce565b8e5160608101516080909101516143e2565b905060006141f88c6000015160e00151670de0b6b3a76400006141f191906148ce565b8890612534565b9050808210156142155760008098509850505050505050506116c5565b8b51608081015160609091015191830391614231918391613861565b9050670de0b6b3a76400008110614275578b5160e0015161426e90610eeb9061426290670de0b6b3a76400006148ce565b8e5160e00151906125a9565b90506142a4565b8b5160e001516142a190610eeb9061429590670de0b6b3a76400006148ce565b8e5160e001519061251f565b90505b8b51606001516142b79085908390613861565b935083670de0b6b3a764000011156142db5783670de0b6b3a76400000393506142ef565b6000600198509850505050505050506116c5565b60008c60e00151126143525760c08c015160e08d015161430e916125a9565b9250670de0b6b3a76400008311156143335760008098509850505050505050506116c5565b670de0b6b3a7640000929092039161434b848461100a565b9350614387565b61438461436b8d60c001518e60e00151611cf3906148e1565b61437d90670de0b6b3a76400006148bb565b859061100a565b93505b50919a60019a5098505050505050505050565b60008082126143a95781610819565b610819826148e1565b60008060006143c084612a2e565b91509150806133a057604051635516328b60e11b815260040160405180910390fd5b60006143ee8585612534565b6144076143ff8661263a868b612abb565b859085613861565b61259f91906148bb565b600080600061442389898888886143e2565b90506144338661263a898b6148bb565b97508781101561444a5760008092509250506144c9565b878103614458818688613861565b9050670de0b6b3a764000081106144855761447e610eeb670de0b6b3a7640000896125a9565b905061449d565b61449a610eeb670de0b6b3a76400008961251f565b90505b6144a781866125a9565b9050808a10156144bf576000809350935050506144c9565b8903925060019150505b965096945050505050565b60008060006144e689898888886143e2565b9050868810156144fd5760008092509250506144c9565b968690039661450c8887612534565b9750878110156145235760008092509250506144c9565b878103614531818688613861565b9050670de0b6b3a7640000811061455e57614557610eeb670de0b6b3a7640000896125a9565b9050614576565b614573610eeb670de0b6b3a76400008961251f565b90505b61458081866125a9565b905089811015614598576000809350935050506144c9565b9890980398600198509650505050505050565b60008060006145bd888888888861465a565b905060006145e1670de0b6b3a76400006145d788886125a9565b6139c191906148bb565b9050670de0b6b3a7640000811061460e57614607610eeb670de0b6b3a76400008961251f565b9050614626565b614623610eeb670de0b6b3a7640000896125a9565b90505b614630818661251f565b90508881101561464857600080935093505050613dee565b97909703976001975095505050505050565b60006146668585612534565b6144076146778661263a868b61100a565b8590856125be565b6040518061012001604052806146936146d1565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000806040838503121561474557600080fd5b50508035926020909101359150565b6000606082840312156115ba57600080fd5b60008060006060848603121561477b57600080fd5b8335925060208401359150604084013567ffffffffffffffff8111156147a057600080fd5b6147ac86828701614754565b9150509250925092565b600080600080608085870312156147cc57600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff8111156147f857600080fd5b61480487828801614754565b91505092959194509250565b634e487b7160e01b600052601260045260246000fd5b60008261483557614835614810565b500690565b634e487b7160e01b600052601160045260246000fd5b80820281158282048414176108195761081961483a565b60006020828403121561487957600080fd5b81356001600160a01b03811681146100c757600080fd5b8015158114610d8a57600080fd5b6000602082840312156148b057600080fd5b81356100c781614890565b808201808211156108195761081961483a565b818103818111156108195761081961483a565b6000600160ff1b82016148f6576148f661483a565b5060000390565b6001600160801b038181168382160190808211156133a0576133a061483a565b6001600160701b038181168382160190808211156133a0576133a061483a565b81810360008312801583831316838312821617156133a0576133a061483a565b6000808335601e1984360301811261497457600080fd5b83018035915067ffffffffffffffff82111561498f57600080fd5b602001915036819003821315610e5f57600080fd5b6001600160801b038281168282160390808211156133a0576133a061483a565b80820182811260008312801582168215821617156149e4576149e461483a565b505092915050565b6000602082840312156149fe57600080fd5b5051919050565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156108195761081961483a565b600081600f0b60016001607f1b03198103614a4f57614a4f61483a565b60000392915050565b600060208284031215614a6a57600080fd5b81516100c781614890565b600082614a8457614a84614810565b600160ff1b821460001984141615614a9e57614a9e61483a565b50059056fea26469706673582212207c87affc3892e054e284e3dd7bb614e2631a9d2bc63c99b7a2c2cb6339f5eff364736f6c634300081400336102406040523480156200001257600080fd5b5060405162004f4538038062004f458339810160408190526200003591620001e1565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c05260c0808501516101e0526101008086015190915260e0808601519052610120808601519091529184018051519092528151015161014090815281516040908101516101609081529251606090810151610180908152918601518516610200528501516102205290840151600a80546001600160a01b03199081169286169290921790559184015160088054841691851691909117905590920151600980549093169116179055620002d4565b6040516101c081016001600160401b03811182821017156200014957634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200016757600080fd5b919050565b6000608082840312156200017f57600080fd5b604051608081016001600160401b0381118282101715620001b057634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60006102208284031215620001f557600080fd5b620001ff62000117565b6200020a836200014f565b81526200021a602084016200014f565b60208201526200022d604084016200014f565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152506101406200028c8185016200014f565b90820152610160620002a08482016200014f565b90820152610180620002b48482016200014f565b908201526101a0620002c9858583016200016c565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e0516102005161022051614ac96200047c60003960005050600050506000818160fa01528181610336015281816104e30152610e78015260008181610e52015281816112a901528181611e3201528181611e950152818161246a015281816128e501528181612b840152612bc001526000818161015b01528181610e2c015281816111230152818161118701528181611776015261180901526000611a81015260008181611ba7015281816126ed0152612766015260008181610b3e0152818161122101528181611b7b015261273a015260006126b901526000818161019d01528181610e9e0152818161110101526111a801526000818161017c0152818161057901528181610a79015261238501526000818161091f015281816109ac0152610a110152600050506000818161073001528181611574015281816115bd0152818161164f015281816116d001528181611877015281816118f801528181612565015281816125ae01528181612a0a0152612a530152614ac96000f3fe6080604052600436106100295760003560e01c80634c2ac1d91461002e578063dbbe807014610054575b600080fd5b61004161003c366004614742565b61007c565b6040519081526020015b60405180910390f35b6100676100623660046147a6565b610097565b6040805192835260208301919091520161004b565b600061008b86868686866100b4565b90505b95945050505050565b6000806100a68686868661049c565b915091505b94509492505050565b60006100be610704565b600554610100900460ff16156100e7576040516321081abf60e01b815260040160405180910390fd5b6100ef61072e565b6100f88261079a565b7f00000000000000000000000000000000000000000000000000000000000000008610156101395760405163211ddda360e11b815260040160405180910390fd5b60006101c16101466107d3565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006107f9565b9050848110806101d057508381115b156101ee57604051633b61151160e11b815260040160405180910390fd5b6000806101fb898661083f565b9150915061021261020a610918565b82600461094e565b50600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e954909161025e916001600160801b0390911690614816565b6000808052600e6020527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c5491925090610299908390614829565b905060008060006102a986610de3565b90506102b481610f1d565b91506102c76102c288610f54565b610f82565b6001546001600160801b038082168352600354600f0b6020840152600160801b9091041660408201526102f981610f1d565b92508183101561031c5760405163184d952160e11b815260040160405180910390fd5b610332848361032b8187614816565b9190610fa8565b98507f00000000000000000000000000000000000000000000000000000000000000008910156103755760405163211ddda360e11b815260040160405180910390fd5b508b6103818e8a610fc6565b10156103a05760405163c972651760e01b815260040160405180910390fd5b6103b860006103b260208c018c61483c565b8a610fe4565b60006103c38661108c565b9050806103e357604051638bdf918d60e01b815260040160405180910390fd5b600084156103fa576103f58386610fc6565b6103fd565b60005b90508e600061040d828a8f611099565b90508c61041d602082018261483c565b6001600160a01b03167fa59daf574c5c8db34377de83bceea2aa1433cc506d656f5e8f46e5f4b5c58a868e848e61045a6040870160208801614873565b60408051948552602085019390935291830152151560608201526080810187905260a00160405180910390a250505050505050505050505061008e6001600055565b6000806104a7610704565b600554610100900460ff16156104d0576040516321081abf60e01b815260040160405180910390fd5b6104d861072e565b6104e18361079a565b7f00000000000000000000000000000000000000000000000000000000000000008610156105225760405163211ddda360e11b815260040160405180910390fd5b600061052c6110c8565b90508481101561054f576040516342af972b60e01b815260040160405180910390fd5b6000610559610918565b90506000610570610568610918565b84600461094e565b9050600061059e7f000000000000000000000000000000000000000000000000000000000000000084614829565b905060008060006105b08d88876110db565b92509250925080600b60008282546105c89190614829565b90915550600090506105db84898d61125b565b9050808d10156105fe5760405163c972651760e01b815260040160405180910390fd5b610608818c61083f565b50506106168e848a88611283565b600061062360028761148a565b905060008f9050610647828e6000016020810190610641919061483c565b83610fe4565b848a8e84610658602083018361483c565b6001600160a01b03167fb354b32bd86ebd9f0968a338e5c2873d7f0d473aa7a668c2488e66038380258b8c8c61068f8b88886114bf565b61069f6040880160208901614873565b6106b5898f8c6106af9190614816565b906114e7565b6040805195865260208601949094529284019190915215156060830152608082015260a0810188905260c00160405180910390a350979c50929a50505050505050505050506100ab6001600055565b60026000540361072757604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1480159061077a57503415155b1561079857604051631574f9f360e01b815260040160405180910390fd5b565b60006107a9602083018361483c565b6001600160a01b0316036107d05760405163f0dd15fd60e01b815260040160405180910390fd5b50565b6001546003546000916107f4916001600160801b0390911690600f0b6114fc565b905090565b6000806108088787878661151b565b905061083461081c82866301e13380611532565b61082e83670de0b6b3a7640000614816565b90610fc6565b979650505050505050565b600080806108536040850160208601614873565b156108785761086e856108696040870187614890565b611558565b9093509050610894565b50346108908561088b6040870187614890565b6117ec565b8492505b61089c6110c8565b9150801561090f57604051600090339083908381818185875af1925050503d80600081146108e6576040519150601f19603f3d011682016040523d82523d6000602084013e6108eb565b606091505b505090508061090d576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b60006109447f0000000000000000000000000000000000000000000000000000000000000000426148ed565b6107f49042614816565b600083815260076020526040812080546001600160801b031615158061097357504285115b1561098957546001600160801b03169050610ddc565b600080610994610918565b90508087036109a557859150610a3f565b60006109d17f000000000000000000000000000000000000000000000000000000000000000089614829565b90505b6000818152600760205260409020546001600160801b0316925081811480156109fb575082155b15610a04578692505b82600003610a3d57610a367f000000000000000000000000000000000000000000000000000000000000000082614829565b90506109d4565b505b610a4882611996565b83546001600160801b0319166001600160801b0391909116178355610a6c866119c0565b5060009050600781610a9e7f00000000000000000000000000000000000000000000000000000000000000008b614816565b815260208101919091526040016000908120546001600160801b03169150610ac760028a61148a565b6000818152600e60205260408120549192508a8a8315610c0d5760019250600080610af686898c866000611b64565b9150915080600b6000828254610b0c9190614829565b90915550610b28905086600084610b2281610f54565b88611c33565b610b328183614829565b9150610b6286838a8d877f0000000000000000000000000000000000000000000000000000000000000000611dad565b9150610b76610b7183856114e7565b611df1565b60058054600290610b979084906201000090046001600160701b0316614901565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610bc482611996565b60058054601090610be6908490600160801b90046001600160801b0316614921565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b6000610c1a60018461148a565b6000818152600e60205260409020549091508015610d295760019450600080610c47838b8e886001611b64565b9150915080600b6000828254610c5d9190614829565b90915550610c79905083600084610c7381610f54565b8a611e1b565b610c838183614816565b9150610c92610b7183876114e7565b60058054600290610cb39084906201000090046001600160701b0316614901565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610ce082611996565b60058054601090610d02908490600160801b90046001600160801b0316614921565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610d6157610d55610d3b87610f54565b610d4483610f54565b610d4e9190614941565b600061200c565b610d5f8e8e6120bf565b505b6000610d6c8f61224a565b5090508f7fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab78c868a8686604051610dc5959493929190948552602085019390935260408401919091526060830152608082015260a00190565b60405180910390a250989a50505050505050505050505b9392505050565b610deb61467d565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526002540482166101008201526004549091610120830191610ee3911661233a565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192610f159290041661233a565b905292915050565b6000806000610f2b846123b0565b9150915080610f4d57604051635516328b60e11b815260040160405180910390fd5b5092915050565b60006001600160ff1b03821115610f7e5760405163396ea70160e11b815260040160405180910390fd5b5090565b610f8b8161243d565b6107d057604051635044b7f560e01b815260040160405180910390fd5b6000826000190484118302158202610fbf57600080fd5b5091020490565b6000610fdb83670de0b6b3a764000084610fa8565b90505b92915050565b6000838152600d602090815260408083206001600160a01b038616845290915281208054839290611016908490614829565b90915550506000838152600e602052604081208054839290611039908490614829565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b6000610fde8260046120bf565b60006110ab6040830160208401614873565b156110b7575082610ddc565b6110c184846114e7565b9050610ddc565b60006107f4670de0b6b3a764000061254a565b60008060006111476110eb6107d3565b600154600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f0000000000000000000000000000000000000000000000000000000000000000612645565b9150856111548387612666565b11156111625761116261267b565b60008060006111cc6111726107d3565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061151b565b90506111e289670de0b6b3a7640000838b612694565b509194509092506111f590508284614816565b6111ff9086614816565b945061124b886112458b611213868a614816565b8b61121e8e826127a2565b8e7f00000000000000000000000000000000000000000000000000000000000000006127b8565b90612666565b9550909250505093509350939050565b600061126d6040830160208401614873565b15611279575082610ddc565b6110c18484610fc6565b6001546001600160801b03168381101561129f5761129f61267b565b60035490849003907f0000000000000000000000000000000000000000000000000000000000000000906112d7908390600f0b6114fc565b10156112e5576112e561267b565b6003546113349061132f90600160801b90046001600160801b0316611312670de0b6b3a764000086614961565b600454600160801b90046001600160801b031691908960016127dd565b611996565b600480546001600160801b03928316600160801b02921691909117905561135a81611996565b600180546001600160801b0319166001600160801b039290921691909117905561138385611996565b600180546010906113a5908490600160801b90046001600160801b0316614921565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506113d285611996565b600380546010906113f4908490600160801b90046001600160801b0316614921565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006114238361289a565b90506114418161143288610f54565b61143c9084614941565b61200c565b61144a846128de565b6114565761145661267b565b60006114618561108c565b90508061148157604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b60006001600160f81b038211156114b45760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60006114d16040830160208401614873565b156114e0576110c18484610fc6565b5082610ddc565b6000610fdb8383670de0b6b3a7640000610fa8565b600080611509848461293e565b909250905080610f4d57610f4d61267b565b600061008e8261152c858888610fa8565b9061297a565b600082600019048411830215820261154957600080fd5b50910281810615159190040190565b6000808073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016115a8575047611633565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa15801561160c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116309190614978565b90505b6001600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016116ae578734101561169d576040516312171d8360e31b815260040160405180910390fd5b6116a78834614816565b9050611748565b6040516323b872dd60e01b8152336004820152306024820152604481018990527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015611721573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117459190614991565b91505b81611766576040516312171d8360e31b815260040160405180910390fd5b6012546000036117ab5761179a887f0000000000000000000000000000000000000000000000000000000000000000610fc6565b6012819055945092506117e4915050565b6012546000906117bd908a9086610fa8565b905080601260008282546117d19190614829565b909155509095509093506117e492505050565b935093915050565b60006117f78461254a565b90506012546000036118355761182d817f0000000000000000000000000000000000000000000000000000000000000000610fc6565b60125561185b565b6000611840826129ef565b905080601260008282546118549190614829565b9091555050505b6001600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016118d657823410156118c5576040516312171d8360e31b815260040160405180910390fd5b6118cf8334614816565b9050611970565b6040516323b872dd60e01b8152336004820152306024820152604481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015611949573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061196d9190614991565b91505b8161198e576040516312171d8360e31b815260040160405180910390fd5b505050505050565b60006001600160801b03821115610f7e57604051630f0af95160e11b815260040160405180910390fd5b60055460009081906119e3908490600160801b90046001600160801b03166114e7565b6005546201000090046001600160701b03169250905081811115611b5f576000611a0d8383614816565b9050611a1c61132f8286612ad8565b60058054601090611a3e908490600160801b90046001600160801b03166149ae565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000611a778583610fc690919063ffffffff16565b90506000611aa5827f00000000000000000000000000000000000000000000000000000000000000006114e7565b905080600b6000828254611ab99190614829565b90915550611ac990508183614816565b9150611ad482611996565b60018054600090611aef9084906001600160801b0316614921565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611b1c82612aed565b60038054600090611b31908490600f0b6149ce565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b600080611b718785610fc6565b91506000611b9f837f00000000000000000000000000000000000000000000000000000000000000006114e7565b9050611bcb817f00000000000000000000000000000000000000000000000000000000000000006114e7565b91508315611bee57611bdd8282614816565b611be79084614816565b9250611c05565b611bf88282614816565b611c029084614829565b92505b86861015611c2857611c18838789610fa8565b9250611c25828789610fa8565b91505b509550959350505050565b600354600160801b90046001600160801b0316611c7c61132f82611c5f670de0b6b3a764000086614961565b600454600160801b90046001600160801b031691908a60006127dd565b600480546001600160801b03928316600160801b029216919091179055611ca286611996565b611cac90826149ae565b600380546001600160801b03928316600160801b029216919091179055611cd284611996565b60018054600090611ced9084906001600160801b0316614921565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611d1a83612b17565b60038054600090611d2f908490600f0b6149ce565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611d5f85611996565b60018054601090611d81908490600160801b90046001600160801b03166149ae565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600080611dbf8461082e8a888a610fa8565b9050611dcc888486610fa8565b611dd69082614829565b905086811115611de65786810391505b509695505050505050565b60006001600160701b03821115610f7e5760405163086b151760e11b815260040160405180910390fd5b6001546001600160801b031683811080611e5d57507f0000000000000000000000000000000000000000000000000000000000000000611e5b8583614816565b105b15611e6a57611e6a61267b565b6003549084900390600f0b611e7f8482614941565b905083611e8b86610f54565b138015611ec057507f0000000000000000000000000000000000000000000000000000000000000000611ebe83836114fc565b105b15611ecd57611ecd61267b565b600254600160801b90046001600160801b0316611f0f61132f82611ef9670de0b6b3a764000088614961565b6004546001600160801b031691908c60006127dd565b600480546001600160801b0319166001600160801b0392909216919091179055611f398882614816565b9050611f4481611996565b600280546001600160801b03928316600160801b029216919091179055611f6a83611996565b600180546001600160801b0319166001600160801b0392909216919091179055611f9382612b17565b600380546001600160801b0319166001600160801b0392909216919091179055611fbc87611996565b60018054601090611fde908490600160801b90046001600160801b0316614921565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b600061203561201b8483612b53565b612026846000612b53565b6120309190614941565b612b17565b9050600081600f0b131561208a57600280548291906000906120619084906001600160801b0316614921565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b12156120ba5761209f816149fb565b600280546000906120619084906001600160801b03166149ae565b505050565b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e9549091829161210a916001600160801b031690614816565b90508060000361211e576001915050610fde565b600061212985612b62565b90508060000361213e57600192505050610fde565b60008061214c838589612c04565b9150915080612162576000945050505050610fde565b60008061216f8489612d0a565b9150915061218d61217f82610f54565b61218890614a21565b61243d565b9250826121a35760009650505050505050610fde565b6121ac82611996565b600680546000906121c79084906001600160801b0316614921565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506121f481611996565b60068054601090612216908490600160801b90046001600160801b0316614921565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b60008060008061226161225c86610de3565b6123b0565b9150915080612277575060009485945092505050565b6000808611612287576000612291565b61229183876114e7565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b03909216916122fc9190614829565b6123069190614816565b90508060000361231f5750600096879650945050505050565b600061232b8383610fc6565b98600198509650505050505050565b600080670de0b6b3a764000061234e610918565b6123589190614961565b9050808311612368576000612372565b6123728184614816565b9150610ddc6123a9670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000614961565b8390610fc6565b60008060008060006123c186612dfa565b91509150806123d857506000958695509350505050565b6123e58660a00151610f54565b6123ee8761311a565b836123fc8960000151610f54565b6124069190614a3d565b6124109190614a3d565b61241a9190614941565b9250505060008112156124335750600093849350915050565b9360019350915050565b6001546003546000916001600160801b0380821692600f0b91600160801b9004168380808061248f8787877f00000000000000000000000000000000000000000000000000000000000000008d61317e565b9350935093509350806124ab5750600098975050505050505050565b8684146124dc576124bb84611996565b600180546001600160801b0319166001600160801b03929092169190911790555b85831461250d576124ec83612b17565b600380546001600160801b0319166001600160801b03929092169190911790555b84821461253b5761251d82611996565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612599575047612624565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156125fd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906126219190614978565b90505b601254600003612635576000610ddc565b601254610ddc9084908390610fa8565b600061083487878761265f88670de0b6b3a7640000614816565b8787613296565b6000610fdb8383670de0b6b3a7640000611532565b60405163bb55fd2760e01b815260040160405180910390fd5b60008080806126e587866126de8b6112456126b78c670de0b6b3a7640000614816565b7f000000000000000000000000000000000000000000000000000000000000000090612666565b9190611532565b9350612711847f00000000000000000000000000000000000000000000000000000000000000006114e7565b9150600061273261272a89670de0b6b3a7640000614816565b8a9088611532565b905061275e817f0000000000000000000000000000000000000000000000000000000000000000612666565b935061278a847f00000000000000000000000000000000000000000000000000000000000000006114e7565b6127949084614829565b915050945094509450949050565b60008183116127b15781610fdb565b5090919050565b6000806127d0846127ca8a888a611532565b90612ad8565b9050611dcc888486611532565b6000826000036127ee57508461008e565b81156128605761281f6128018487614829565b61280b85876114e7565b612815888a6114e7565b61082e9190614829565b9050600061282d85886132b9565b9050600061283b86896127a2565b90508183101561284d57819250612859565b80831115612859578092505b505061008e565b82850361286f5750600061008e565b61008b61287c8487614816565b6128868587612666565b612890888a6114e7565b61082e9190614816565b60006128c2600e60006128ae60028661148a565b815260200190815260200160002054610f54565b6128d4600e60006128ae60018761148a565b610fde9190614941565b600061290a7f000000000000000000000000000000000000000000000000000000000000000083612666565b60025461292091906001600160801b0316614829565b600154612936906001600160801b0316846114e7565b101592915050565b60008060008361294d86610f54565b6129579190614941565b9050600081121561296f576000809250925050610911565b946001945092505050565b6000816000036129935750670de0b6b3a7640000610fde565b826000036129a357506000610fde565b60006129ae83610f54565b905060006129c36129be86610f54565b6132c8565b90508181026129da670de0b6b3a764000082614a65565b90506129e5816134ee565b9695505050505050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612a3e575047612ac9565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015612aa2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612ac69190614978565b90505b601254610ddc90849083610fa8565b6000610fdb83670de0b6b3a764000084611532565b600060016001607f1b03821115610f7e5760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b0319821280612b35575060016001607f1b0382135b15610f7e5760405163a5353be560e01b815260040160405180910390fd5b60008183136127b15781610fdb565b6002546000908190612b7d906001600160801b031684612ad8565b9050612ba97f000000000000000000000000000000000000000000000000000000000000000082614829565b6001546001600160801b03161115612bfe576001547f000000000000000000000000000000000000000000000000000000000000000090612bf49083906001600160801b0316614816565b610ddc9190614816565b50919050565b612c0c6146de565b600080612c1884610de3565b90506000612c25826123b0565b9350905082612c3a5750600091506117e49050565b6000612c61612c5c8461016001518561014001516114e790919063ffffffff16565b610f54565b612c81612c5c85610120015186610100015161266690919063ffffffff16565b612c8b9190614941565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b600080600080612d228660c001518760e0015161293e565b9150915080612d3957600080935093505050610911565b6000612d458784613683565b92509050811580612d54575080155b15612d685760008094509450505050610911565b6000612d748883613792565b905080600003612d8e576000809550955050505050610911565b87606001518111612da55794509250610911915050565b5060608701516000612db98986858b613863565b905080600003612dd457600080965096505050505050610911565b828110612dec57600080965096505050505050610911565b909890975095505050505050565b6000806000612e1f612c5c8561016001518661014001516114e790919063ffffffff16565b612e3f612c5c86610120015187610100015161266690919063ffffffff16565b612e499190614941565b9050600080612e608660000151876020015161293e565b9150915080612e7757506000958695509350505050565b6000831315612fb85760008390506000612ec5886000015189602001518a604001518b60a001518c60e00151670de0b6b3a7640000612eb69190614816565b8d606001518e60800151613d7a565b9350905082612ede575060009788975095505050505050565b818110612f7c576000612f18858a60400151858c60e00151670de0b6b3a7640000612f099190614816565b8d606001518e60800151613e86565b9450905083158015612f2d57508860c0015183105b15612f445750600098600198509650505050505050565b83612f5a57506000988998509650505050505050565b612f6381610f54565b612f6c90614a21565b9960019950975050505050505050565b6000886020015112612fa457612f9b8860a0015185612c5c9190614816565b61232b90614a21565b60a08801518851612f9b91612c5c91614816565b600083121561310b576000612fcc84614a21565b905060006130008489604001518a60e00151670de0b6b3a7640000612ff19190614816565b8b606001518c60800151613f49565b9350905082613019575060009788975095505050505050565b81811061309e576000613053858a60400151858c60e00151670de0b6b3a76400006130449190614816565b8d606001518e60800151613ff5565b945090508315801561306857508860c0015183105b1561307f5750600098600198509650505050505050565b8361309557506000988998509650505050505050565b612f6c81610f54565b60006130d0858a604001518b60e00151670de0b6b3a76400006130c19190614816565b8c606001518d608001516140cc565b94509050836130ea57506000988998509650505050505050565b612f6c6131018a60600151848661082e9190614816565b612c5c9083614829565b50600095600195509350505050565b600061314d612c5c836101200151670de0b6b3a764000061313b9190614816565b60608501516101008601519190611532565b6128d4612c5c846101600151670de0b6b3a764000061316c9190614816565b60608601516101408701519190610fa8565b6000806000808460000361319d5750879250869150859050600161328a565b6000856131a98b610f54565b6131b39190614a3d565b90506131be87610f54565b8112156131d95760008060008094509450945094505061328a565b809450600089126131f9576131f2612c5c868b8d610fa8565b935061321c565b613210612c5c6132088b614a21565b87908d611532565b61321990614a21565b93505b6000806132298c8c61293e565b915091508061324857600080600080965096509650965050505061328a565b6000613254888861293e565b92509050816132745760008060008097509750975097505050505061328a565b61327f8b8285610fa8565b955060019450505050505b95509550955095915050565b6000806132a7888888888888613e86565b909250905080611de657611de661267b565b6000818311612bfe5782610fdb565b60008082136132ea5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f1982019061336d9084901c610f54565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e19821361350957506000919050565b680755bf798b4a1bf1e58212613532576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b0181810595509293509091906129e574029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c610f54565b60008060008460a00151126136a057505060808201516001610911565b60008460a001516136b090614a21565b905060006136ec85876101000151886000015160e00151670de0b6b3a76400006136da9190614816565b89516060810151608090910151613f49565b935090508215806136fb575080155b1561370e57600080935093505050610911565b600061371a8383612ad8565b9050670de0b6b3a764000081116137565780670de0b6b3a764000003945061374f8760c00151866114e790919063ffffffff16565b9450613765565b60008094509450505050610911565b8660800151851115613784578660800151600194509450505050610911565b506001925050509250929050565b6000806137c88460c001518560e00151866101000151876000015160a001516137ba88610f54565b6137c390614a21565b61317e565b875160408101929092526020820192909252919091529050806137ef576000915050610fde565b60006137fe85600001516123b0565b925090508161381257600092505050610fde565b8460200151811061382857600092505050610fde565b60008560600151866040015161383e9190614829565b905061385982876020015183610fa89092919063ffffffff16565b6129e59082614816565b6000808560600151866040015161387a9190614829565b602087015160608801519192506000916138949184610fa8565b90508660a001516000036138ab579150613d729050565b600080808960048810156138be57600497505b60005b88811015613c1a576138d3868b6132b9565b955060006138fc8360c001518460e00151856101000151866000015160a001516137ba8c610f54565b8651604081019290925260208201929092529190915290508061392a57600098505050505050505050613d72565b60006139398e600001516123b0565b92509050816139545760009950505050505050505050613d72565b61395f84828b61417b565b1561397557879950505050505050505050613d72565b60008460a001511315613ade57835180516020820151604083015160a084015160e0909401516000946139c9949392916139b790670de0b6b3a7640000614816565b8a516060810151608090910151613d7a565b93509050826139e55760009a5050505050505050505050613d72565b808560a0015110613adc576139f9856141e0565b909950925082613a165760009a5050505050505050505050613d72565b613a3b8560c001518660e00151876101000151886000015160a001516137ba8e610f54565b88516040810192909252602082019290925291909152925082613a6b5760009a5050505050505050505050613d72565b845180516020820151604083015160a084015160e090940151613a9b94906139b790670de0b6b3a7640000614816565b9350905082613ab75760009a5050505050505050505050613d72565b8e60a001518111613ad457889a5050505050505050505050613d72565b5050506138c1565b505b6000613aef858f8760a001516142b6565b93509050821580613b085750670de0b6b3a76400008110155b15613b205760009a5050505050505050505050613d72565b80670de0b6b3a76400000390506000613b4d612c5c8760400151886020015161266690919063ffffffff16565b613b5a612c5c858e6114e7565b613b649190614941565b9050881580613b825750613b7789614611565b613b8082614611565b125b15613b91578098508997508296505b6000811315613bb957613ba88b61082e8385610fc6565b613bb2908b614829565b9950613c0b565b6000811215613c02576000613bd38c61082e858186614a21565b90508a811015613be757808b039a50613bfc565b60009c50505050505050505050505050613d72565b50613c0b565b50505050613c1a565b846001019450505050506138c1565b506000613c428260c001518360e00151846101000151856000015160a001516137ba8b610f54565b85516040810192909252602082019290925291909152905080613c6f576000975050505050505050613d72565b6000613c7e8360000151610f1d565b90506000613ca0612c5c8560400151866020015161266690919063ffffffff16565b613cad612c5c848c6114e7565b613cb79190614941565b9050613cc287614611565b613ccb82614611565b1215613cd8578795508194505b613cff613cf3655af3107a4000670de0b6b3a7640000614816565b6020860151908b611532565b6040850151613d0f908790610fc6565b1080613d4f5750613d3d613d31655af3107a4000670de0b6b3a7640000614829565b6020860151908b610fa8565b6040850151613d4d908790612ad8565b115b15613d665760009950505050505050505050613d72565b50939750505050505050505b949350505050565b6000806000881215613d9c57613d8f88614a21565b613d999087614829565b95505b600080613da98b8b61293e565b9150915080613dc057600080935093505050613e7a565b6000613dcf838b8a8a8a614629565b90506000613dec613de48a61152c8a8e612666565b899089611532565b905080821015613e06576000809550955050505050613e7a565b808203670de0b6b3a76400008110613e3b57613e34613e2d670de0b6b3a76400008c610fc6565b829061297a565b9050613e53565b613e50613e2d670de0b6b3a76400008c612ad8565b90505b8b811015613e6c57600080965096505050505050613e7a565b8b9003955060019450505050505b97509795505050505050565b6000806000613e988989888888614658565b9050613ea88661152c898b614829565b975087811015613ebf576000809250925050613f3e565b878103613ecd818688611532565b9050670de0b6b3a76400008110613efa57613ef3613e2d670de0b6b3a764000089612ad8565b9050613f12565b613f0f613e2d670de0b6b3a764000089610fc6565b90505b613f1c8186612ad8565b9050808a1015613f3457600080935093505050613f3e565b8903925060019150505b965096945050505050565b6000806000613f5b8888888888614658565b90506000613f86670de0b6b3a7640000613f758888610fc6565b613f7f9190614829565b8390612ad8565b9050670de0b6b3a76400008110613fb357613fac613e2d670de0b6b3a764000089612ad8565b9050613fcb565b613fc8613e2d670de0b6b3a764000089610fc6565b90505b80881015613fe157600080935093505050613feb565b8703925060019150505b9550959350505050565b60008060006140078989888888614658565b90508688101561401e576000809250925050613f3e565b968690039661402d888761297a565b975087811015614044576000809250925050613f3e565b878103614052818688611532565b9050670de0b6b3a7640000811061407f57614078613e2d670de0b6b3a764000089612ad8565b9050614097565b614094613e2d670de0b6b3a764000089610fc6565b90505b6140a18186612ad8565b9050898110156140b957600080935093505050613f3e565b9890980398600198509650505050505050565b60008060006140de8888888888614629565b90506000614102670de0b6b3a76400006140f88888612ad8565b6123a99190614829565b9050670de0b6b3a7640000811061412f57614128613e2d670de0b6b3a764000089610fc6565b9050614147565b614144613e2d670de0b6b3a764000089612ad8565b90505b6141518186610fc6565b90508881101561416957600080935093505050613feb565b97909703976001975095505050505050565b602083015160009061418d9084612ad8565b604085015161419d908490610fc6565b10158015613d72575060208401516141c6908461032b633b9aca00670de0b6b3a7640000614829565b60408501516141d6908490612ad8565b1115949350505050565b60008060008360e00151136141fa57506000928392509050565b6000614209846000015161311a565b905060006142358560400151866060015187604001516142299190614829565b60208801519190611532565b90506000821261425c578082101561424f57819003614272565b5060009485945092505050565b61426582614a21565b61426f9082614829565b90505b60e085015160c0860151614287918390611532565b9050808560c0015110156142a2575060009485945092505050565b808560c00151036001935093505050915091565b60008060008084126142da578551604001516142d3908590614829565b9050614315565b60006142e585614a21565b875160400151909150811015614305578651604001518190039150614313565b6000809350935050506117e4565b505b85518051602090910151600091829161432e919061293e565b915091508061434657600080945094505050506117e4565b875160e081015160409091015160009161437b9161436f91614368919061297a565b8a906114e7565b6101008b015190612ad8565b895160e08101516080909101516143a69161439a9161152c90886114e7565b8b516060015190612ad8565b6143b09190614829565b905060006143e86143dc6143d58c6000015160e001518861297a90919063ffffffff16565b8b90612666565b6101008c015190610fc6565b905080821015614403576000809650965050505050506117e4565b80820391506000614445858c60000151604001518d6000015160e00151670de0b6b3a76400006144339190614816565b8e516060810151608090910151614658565b9050600061446f8c6000015160e00151670de0b6b3a76400006144689190614816565b889061297a565b90508082101561448c5760008098509850505050505050506117e4565b8b516080810151606090910151918303916144a8918391611532565b9050670de0b6b3a764000081106144ec578b5160e001516144e590613e2d906144d990670de0b6b3a7640000614816565b8e5160e0015190612ad8565b905061451b565b8b5160e0015161451890613e2d9061450c90670de0b6b3a7640000614816565b8e5160e0015190610fc6565b90505b8b516060015161452e9085908390611532565b935083670de0b6b3a764000011156145525783670de0b6b3a7640000039350614566565b6000600198509850505050505050506117e4565b60008c60e00151126145c95760c08c015160e08d015161458591612ad8565b9250670de0b6b3a76400008311156145aa5760008098509850505050505050506117e4565b670de0b6b3a764000092909203916145c284846114e7565b93506145fe565b6145fb6145e28d60c001518e60e0015161082e90614a21565b6145f490670de0b6b3a7640000614829565b85906114e7565b93505b50919a60019a5098505050505050505050565b60008082126146205781610fde565b610fde82614a21565b6000614635858561297a565b61464e6146468661152c868b6114e7565b859085610fa8565b61008b9190614829565b6000614664858561297a565b61464e6146758661152c868b612666565b859085611532565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061012001604052806146f261467d565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b600060608284031215612bfe57600080fd5b600080600080600060a0868803121561475a57600080fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff81111561478d57600080fd5b61479988828901614730565b9150509295509295909350565b600080600080608085870312156147bc57600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff8111156147e857600080fd5b6147f487828801614730565b91505092959194509250565b634e487b7160e01b600052601160045260246000fd5b81810381811115610fde57610fde614800565b80820180821115610fde57610fde614800565b60006020828403121561484e57600080fd5b81356001600160a01b0381168114610ddc57600080fd5b80151581146107d057600080fd5b60006020828403121561488557600080fd5b8135610ddc81614865565b6000808335601e198436030181126148a757600080fd5b83018035915067ffffffffffffffff8211156148c257600080fd5b60200191503681900382131561091157600080fd5b634e487b7160e01b600052601260045260246000fd5b6000826148fc576148fc6148d7565b500690565b6001600160701b03818116838216019080821115610f4d57610f4d614800565b6001600160801b03818116838216019080821115610f4d57610f4d614800565b8181036000831280158383131683831282161715610f4d57610f4d614800565b8082028115828204841417610fde57610fde614800565b60006020828403121561498a57600080fd5b5051919050565b6000602082840312156149a357600080fd5b8151610ddc81614865565b6001600160801b03828116828216039080821115610f4d57610f4d614800565b600f81810b9083900b0160016001607f1b03811360016001607f1b031982121715610fde57610fde614800565b600081600f0b60016001607f1b03198103614a1857614a18614800565b60000392915050565b6000600160ff1b8201614a3657614a36614800565b5060000390565b8082018281126000831280158216821582161715614a5d57614a5d614800565b505092915050565b600082614a7457614a746148d7565b600160ff1b821460001984141615614a8e57614a8e614800565b50059056fea2646970667358221220afebf76abdd1ef1b53325754a234ddaf6db0c21d0275764f18bee99b9db6e42e64736f6c63430008140033',
    methodIdentifiers: {
        "PERMIT_TYPEHASH()": "30adf81f",
        "accrue(uint256,int256)": "68096239",
        "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": "4c2ac1d9",
        "batchTransferFrom(address,address,uint256[],uint256[])": "17fad7fc",
        "calculateFeesGivenBonds(uint256,uint256,uint256,uint256)": "22d5506b",
        "calculateFeesGivenShares(uint256,uint256,uint256)": "71f88b7c",
        "calculateIdleShareReserves(uint256)": "b1b4b170",
        "calculateOpenLong(uint256,uint256)": "9bd33498",
        "calculateTimeRemaining(uint256)": "68c2ecb8",
        "calculateTimeRemainingScaled(uint256)": "ca6d38f7",
        "checkpoint(uint256,uint256)": "414f826d",
        "closeLong(uint256,uint256,uint256,(address,bool,bytes))": "ded06231",
        "closeShort(uint256,uint256,uint256,(address,bool,bytes))": "29b23fc1",
        "collectGovernanceFee((address,bool,bytes))": "3e691db9",
        "domainSeparator()": "f698da25",
        "getTotalShares()": "d5002f2e",
        "initialize(uint256,uint256,(address,bool,bytes))": "77d05ff4",
        "latestCheckpoint()": "907c0f92",
        "openLong(uint256,uint256,uint256,(address,bool,bytes))": "cba2e58d",
        "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070",
        "pause(bool)": "02329a29",
        "permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)": "9032c726",
        "redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))": "074a6de9",
        "removeLiquidity(uint256,uint256,(address,bool,bytes))": "cbc13434",
        "setApproval(uint256,address,uint256)": "9cd241af",
        "setApprovalBridge(uint256,address,uint256,address)": "4ed2d6ac",
        "setApprovalForAll(address,bool)": "a22cb465",
        "setFeeCollector(address)": "a42dce80",
        "setGovernance(address)": "ab033ea9",
        "setLongExposure(uint128)": "b4f8da39",
        "setMarketState((uint128,uint128,uint128,uint128,int128,uint128,uint128,uint128,bool,bool,uint112,uint128))": "f45cf2e0",
        "setPauser(address,bool)": "7180c8ca",
        "setReserves(uint128,uint128)": "702db0eb",
        "setSweepCollector(address)": "e4af29d1",
        "setTotalShares(uint256)": "a77384c1",
        "sweep(address)": "01681a62",
        "target0()": "21b57d53",
        "target1()": "eac3e799",
        "target2()": "a6e8a859",
        "target3()": "d899e112",
        "target4()": "f3f70707",
        "transferFrom(uint256,address,address,uint256)": "1c0f12b6",
        "transferFromBridge(uint256,address,address,uint256,address)": "e44808bc",
        "updateLiquidity(int256)": "8120a3e2"
    }
};
